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

/** How to get a Japanese voice on the device this page is open on. */
export function voiceHelp(): string {
  const ua = navigator.userAgent
  if (/iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1))
    return 'iPad/iPhone: Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → Tiếng Nhật → tải Kyoko hoặc Otoya, rồi mở lại trình duyệt. Kiểm tra cả nút gạt im lặng và âm lượng.'
  if (/Android/.test(ua))
    return 'Android: Cài đặt → Quản lý chung (Hệ thống) → Ngôn ngữ → Chuyển văn bản thành giọng nói → chọn Google → Cài đặt → Cài đặt dữ liệu giọng nói → tải Tiếng Nhật, rồi mở lại Chrome.'
  if (/Windows/.test(ua)) return 'Windows: Cài đặt → Thời gian & Ngôn ngữ → Giọng nói → thêm Japanese, hoặc dùng trình duyệt Edge.'
  return 'Hãy cài giọng đọc tiếng Nhật trong phần chuyển văn bản thành giọng nói của máy, rồi mở lại trình duyệt.'
}

/**
 * iPad/iPhone Safari only lets speech start inside a tap. Speak a silent utterance on the
 * first tap so later playback (auto-play, the next line of a dialogue) is allowed too.
 */
export function unlockSpeechOnFirstTap(): () => void {
  if (!ttsSupported()) return () => {}
  const events = ['touchend', 'click'] as const
  // Bubble phase: runs after the tapped button's own handler, so a tap that already started speech is left alone.
  const unlock = () => {
    events.forEach((e) => document.removeEventListener(e, unlock))
    if (speechSynthesis.speaking || speechSynthesis.pending) return
    const u = new SpeechSynthesisUtterance(' ')
    u.volume = 0
    speechSynthesis.speak(u)
  }
  events.forEach((e) => document.addEventListener(e, unlock))
  return () => events.forEach((e) => document.removeEventListener(e, unlock))
}

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
let skipVoice = false // the chosen voice failed on this device: let the browser pick its default Japanese voice
let lastCut = 0 // when playing speech was last cancelled

/** Cancel whatever is playing; true if speech was playing just now. */
function cut(): boolean {
  const busy = speechSynthesis.speaking || speechSynthesis.pending
  if (busy) lastCut = Date.now()
  speechSynthesis.cancel()
  return busy || Date.now() - lastCut < 100
}

export function stopSpeaking() {
  seq++
  if (ttsSupported()) cut()
}

/** Speak one utterance; resolves when it ends (or is cancelled). */
export function speak(
  text: string,
  opts: { role?: 'A' | 'B'; voiceURI?: string; rate?: number; pitch?: number } = {},
): Promise<void> {
  if (!ttsSupported()) return Promise.resolve()
  const my = ++seq
  const busy = cut()
  // iOS Safari can be left paused after a cancel and then stays silent.
  if (speechSynthesis.paused) speechSynthesis.resume()
  return new Promise((resolve) => {
    const spoken = speechText(text)
    const u = new SpeechSynthesisUtterance(spoken)
    u.lang = 'ja-JP'
    const voices = voicesCache.length ? voicesCache : japaneseVoices()
    const v = opts.voiceURI ? voices.find((x) => x.voiceURI === opts.voiceURI) : pickVoice(opts.role ?? 'A')
    if (v && !skipVoice) u.voice = v
    u.rate = opts.rate ?? useSettings.getState().rate
    u.pitch = opts.pitch ?? 1.0
    u.onend = () => resolve()
    u.onerror = (e) => {
      // Android can list a voice whose data is not installed: retry once with the default voice.
      if (u.voice && my === seq && !['interrupted', 'canceled'].includes(e.error)) {
        skipVoice = true
        const again = new SpeechSynthesisUtterance(spoken)
        again.lang = 'ja-JP'
        again.rate = u.rate
        again.pitch = u.pitch
        again.onend = again.onerror = () => resolve()
        speechSynthesis.speak(again)
      } else resolve()
    }
    // Some browsers never fire onend (background tabs, missing voices): don't block the caller forever.
    setTimeout(resolve, 2000 + (spoken.length * 350) / u.rate)
    // Chrome sometimes drops an utterance queued right after cancelling one that was playing, so wait a
    // moment then. Otherwise speak now: Safari on iPad only plays speech started inside the tap itself.
    if (busy) setTimeout(() => (my === seq ? speechSynthesis.speak(u) : resolve()), 30)
    else speechSynthesis.speak(u)
  })
}

export interface ProbeResult {
  started: boolean
  ended: boolean
  error?: string
}

/** Speak a test sentence and report what the browser did (for the sound check in Settings). */
export function probeSpeech(text: string, lang: string, voice?: SpeechSynthesisVoice): Promise<ProbeResult> {
  if (!ttsSupported()) return Promise.resolve({ started: false, ended: false, error: 'không hỗ trợ' })
  seq++
  const busy = cut()
  if (speechSynthesis.paused) speechSynthesis.resume()
  return new Promise((resolve) => {
    const r: ProbeResult = { started: false, ended: false }
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang
    if (voice) u.voice = voice
    u.onstart = () => (r.started = true)
    u.onend = () => resolve({ ...r, ended: true })
    u.onerror = (e) => resolve({ ...r, error: e.error })
    setTimeout(() => resolve({ ...r, error: r.error ?? 'hết giờ chờ' }), 8000)
    if (busy) setTimeout(() => speechSynthesis.speak(u), 30)
    else speechSynthesis.speak(u)
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
