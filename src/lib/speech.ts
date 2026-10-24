// Text-to-speech, speech recognition and recording, all through the browser's own APIs.
import { toBase, toReading } from './furigana'
import { norm } from './normalize'
import { useSettings } from '../store/settings'

let voicesCache: SpeechSynthesisVoice[] = []

export function voiceScore(v: SpeechSynthesisVoice): number {
  const name = v.name.toLowerCase()
  let score = 0
  // Natural / Neural online voices (Edge / Azure / Chrome Neural)
  if (/natural|neural/i.test(name)) score += 100
  if (/online/i.test(name)) score += 80
  // High quality Japanese voices
  if (/google\s*日本語/i.test(name)) score += 95
  if (/nanami/i.test(name)) score += 90 // Microsoft Nanami is high quality female voice
  if (/keita/i.test(name)) score += 85  // Microsoft Keita is high quality male voice
  if (/kyoko/i.test(name)) score += 80  // Apple Kyoko
  if (/otoya/i.test(name)) score += 75  // Apple Otoya
  if (/ayumi|haruka|sayaka|ichir[oo]|naoki/i.test(name)) score += 70
  if (/premium|enhanced/i.test(name)) score += 60
  if (v.lang === 'ja-JP' || v.lang === 'ja_JP') score += 20
  return score
}

export function friendlyVoiceName(v: SpeechSynthesisVoice): string {
  const name = v.name
  if (/nanami/i.test(name)) return 'Nanami (Nữ · Tự nhiên ⭐)'
  if (/keita/i.test(name)) return 'Keita (Nam · Tự nhiên ⭐)'
  if (/google\s*日本語/i.test(name)) return 'Google 日本語 (Tự nhiên ⭐)'
  if (/haruka/i.test(name)) return 'Haruka (Nữ)'
  if (/ayumi/i.test(name)) return 'Ayumi (Nữ)'
  if (/ichiro/i.test(name)) return 'Ichiro (Nam)'
  if (/kyoko/i.test(name)) return 'Kyoko (Nữ · Enhanced)'
  if (/otoya/i.test(name)) return 'Otoya (Nam)'
  const clean = name.replace(/\s*\(Japan\)/i, '').replace(/Microsoft\s+/i, '')
  if (/natural|online/i.test(name)) return `${clean} (Tự nhiên ⭐)`
  return clean
}

export function japaneseVoices(): SpeechSynthesisVoice[] {
  if (typeof speechSynthesis === 'undefined') return []
  voicesCache = speechSynthesis.getVoices().filter((v) => /^ja/i.test(v.lang))
  return voicesCache.sort((a, b) => voiceScore(b) - voiceScore(a))
}

export function onVoicesChanged(cb: () => void): () => void {
  if (typeof speechSynthesis === 'undefined') return () => {}
  speechSynthesis.addEventListener('voiceschanged', cb)
  return () => speechSynthesis.removeEventListener('voiceschanged', cb)
}

export const ttsSupported = () => typeof speechSynthesis !== 'undefined'

function pickVoice(role: 'A' | 'B'): SpeechSynthesisVoice | undefined {
  const voices = voicesCache.length ? voicesCache : japaneseVoices()
  const { voiceA, voiceB } = useSettings.getState()
  const wanted = role === 'A' ? voiceA : voiceB
  return voices.find((v) => v.voiceURI === wanted) ?? (role === 'B' ? voices[1] ?? voices[0] : voices[0])
}

/** Text as it should be spoken: kanji with given readings are replaced by their kana. */
export const speechText = (text: string) =>
  toReading(text)
    .replace(/<[^>]+>/g, '')
    .replace(/［|］|〔|〕|\*\*/g, '')

let seq = 0

export function stopSpeaking() {
  seq++
  if (ttsSupported()) speechSynthesis.cancel()
}

/** Speak one utterance; resolves when it ends (or is cancelled). */
export function speak(
  text: string,
  opts: { role?: 'A' | 'B'; voiceURI?: string; rate?: number; pitch?: number } = {},
): Promise<void> {
  if (!ttsSupported()) return Promise.resolve()
  const my = ++seq
  speechSynthesis.cancel()
  return new Promise((resolve) => {
    const spoken = speechText(text)
    const u = new SpeechSynthesisUtterance(spoken)
    u.lang = 'ja-JP'
    const voices = voicesCache.length ? voicesCache : japaneseVoices()
    const v = opts.voiceURI ? voices.find((x) => x.voiceURI === opts.voiceURI) : pickVoice(opts.role ?? 'A')
    if (v) u.voice = v
    u.rate = opts.rate ?? useSettings.getState().rate
    u.pitch = opts.pitch ?? 1.0
    u.onend = u.onerror = () => resolve()
    // Some browsers never fire onend (background tabs, missing voices): don't block the caller forever.
    setTimeout(resolve, 2000 + (spoken.length * 350) / u.rate)
    // Chrome sometimes drops an utterance queued right after cancel().
    setTimeout(() => (my === seq ? speechSynthesis.speak(u) : resolve()), 30)
  })
}

/** Speak lines one after another; returns a function that stops playback. */
export function playLines(
  lines: { text: string; role?: 'A' | 'B'; voiceURI?: string }[],
  opts: {
    from?: number
    onIndex?: (i: number | null) => void
    gapMs?: number
    rate?: number | (() => number)
    pitch?: number
    voiceURI?: string
  } = {},
): () => void {
  const token = { cancelled: false }
  stopSpeaking()
  void (async () => {
    for (let i = opts.from ?? 0; i < lines.length && !token.cancelled; i++) {
      opts.onIndex?.(i)
      const currentRate = typeof opts.rate === 'function' ? opts.rate() : (opts.rate ?? useSettings.getState().rate)
      await speak(lines[i]!.text, {
        role: lines[i]!.role,
        voiceURI: lines[i]!.voiceURI ?? opts.voiceURI,
        rate: currentRate,
        pitch: opts.pitch,
      })
      if (opts.gapMs && !token.cancelled) await new Promise((r) => setTimeout(r, opts.gapMs))
    }
    if (!token.cancelled) opts.onIndex?.(null)
  })()
  return () => {
    token.cancelled = true
    stopSpeaking()
    opts.onIndex?.(null)
  }
}

// ---------- Speech recognition ----------

type Recognition = {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  continuous: boolean
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
}

const RecognitionCtor = (): (new () => Recognition) | undefined => {
  const w = window as unknown as Record<string, unknown>
  return (w.SpeechRecognition ?? w.webkitSpeechRecognition) as (new () => Recognition) | undefined
}

export const sttSupported = () => typeof window !== 'undefined' && !!RecognitionCtor()

let active: Recognition | null = null

/** Listen once; resolves with alternative transcripts (best first). */
export function listen(): Promise<string[]> {
  const Ctor = RecognitionCtor()
  if (!Ctor) return Promise.reject(new Error('Trình duyệt không hỗ trợ nhận dạng giọng nói. Hãy dùng Chrome hoặc Edge.'))
  active?.abort()
  return new Promise((resolve, reject) => {
    const r = new Ctor()
    active = r
    r.lang = 'ja-JP'
    r.interimResults = false
    r.maxAlternatives = 3
    r.continuous = false
    let got: string[] = []
    r.onresult = (e) => {
      const res = e.results[0]
      got = res ? Array.from({ length: res.length }, (_, i) => res[i]!.transcript) : []
    }
    r.onerror = (e) => {
      active = null
      reject(new Error(e.error === 'not-allowed' ? 'Chưa cho phép dùng micro.' : e.error === 'no-speech' ? 'Không nghe thấy giọng nói.' : `Lỗi nhận dạng: ${e.error}`))
    }
    r.onend = () => {
      active = null
      resolve(got)
    }
    r.start()
  })
}

export const stopListening = () => active?.stop()

// ---------- Comparing what was said with the expected sentence ----------

export interface SpeechMatch {
  score: number // 0..1
  chars: { c: string; ok: boolean | null }[] // null = punctuation/space (not scored)
  heard: string
}

function lcsMarks(a: string[], b: string): boolean[] {
  const n = a.length
  const m = b.length
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1))
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--) dp[i]![j] = a[i] === b[j] ? dp[i + 1]![j + 1]! + 1 : Math.max(dp[i + 1]![j]!, dp[i]![j + 1]!)
  const marks = new Array<boolean>(n).fill(false)
  let i = 0
  let j = 0
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      marks[i] = true
      i++
      j++
    } else if (dp[i + 1]![j]! >= dp[i]![j + 1]!) i++
    else j++
  }
  return marks
}

function matchForm(display: string, heard: string): SpeechMatch {
  const chars = [...display]
  const normed = chars.map((c) => norm(c))
  const scored = normed.flatMap((n, i) => (n ? [[n, i] as const] : []))
  const marks = lcsMarks(
    scored.map(([n]) => n),
    norm(heard),
  )
  const ok = new Map(scored.map(([, i], k) => [i, marks[k]!]))
  const total = scored.length || 1
  return {
    score: marks.filter(Boolean).length / total,
    chars: chars.map((c, i) => ({ c, ok: ok.has(i) ? ok.get(i)! : null })),
    heard,
  }
}

/** Compare against both the written form and the kana reading; keep the better match. */
export function compareSpeech(expected: string, heardAlternatives: string[]): SpeechMatch {
  const clean = expected.replace(/［|］/g, '')
  const forms = [...new Set([toBase(clean), toReading(clean)])]
  let best: SpeechMatch | null = null
  for (const heard of heardAlternatives.length ? heardAlternatives : ['']) {
    for (const form of forms) {
      const m = matchForm(form, heard)
      if (!best || m.score > best.score) best = m
    }
  }
  return best!
}

// ---------- Recording ----------

export async function record(maxMs = 12000): Promise<{ stop: () => void; done: Promise<string> }> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  const rec = new MediaRecorder(stream)
  const chunks: Blob[] = []
  rec.ondataavailable = (e) => chunks.push(e.data)
  const done = new Promise<string>((resolve) => {
    rec.onstop = () => {
      stream.getTracks().forEach((t) => t.stop())
      resolve(URL.createObjectURL(new Blob(chunks, { type: rec.mimeType })))
    }
  })
  rec.start()
  const timer = setTimeout(() => rec.state === 'recording' && rec.stop(), maxMs)
  return {
    stop: () => {
      clearTimeout(timer)
      if (rec.state === 'recording') rec.stop()
    },
    done,
  }
}

export function playUrl(url: string): Promise<void> {
  return new Promise((resolve) => {
    const a = new Audio(url)
    a.onended = a.onerror = () => resolve()
    void a.play()
  })
}
