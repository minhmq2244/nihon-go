// The 4-step kaiwa model: listen → shadow → guided roleplay → blind roleplay.
import { useEffect, useState } from 'react'
import type { Dialogue, Line } from '../types'
import { compareSpeech, listen, playUrl, record, speak, stopSpeaking, sttSupported, type SpeechMatch } from '../lib/speech'
import { isCorrect } from '../lib/normalize'
import { useProgress } from '../store/progress'
import { Jp } from './Jp'
import { FloatingPlayer, PlayerControls, usePlaylist } from './AudioPlayer'
import { Button, Chip, JpInput, SpeakButton, cx } from './ui'

const roleOf = (speaker: string): 'A' | 'B' => (speaker === 'B' ? 'B' : 'A')
const clean = (s: string) => s.replace(/［|］/g, '')
const PASS = 0.7
const NONE: number[] = []

function MatchView({ m }: { m: SpeechMatch }) {
  return (
    <div className="mt-2 rounded-lg bg-muted px-3 py-2 text-sm">
      <p className="text-lg" lang="ja">
        {m.chars.map((c, i) => (
          <span key={i} className={c.ok === null ? '' : c.ok ? 'text-ok' : 'text-bad underline decoration-dotted'}>
            {c.c}
          </span>
        ))}
      </p>
      <p className="text-sub">
        Máy nghe được: <span lang="ja">{m.heard || '(không nghe rõ)'}</span> · khớp <b>{Math.round(m.score * 100)}%</b>
      </p>
    </div>
  )
}

/** Mic button: listens (speech-to-text) and records at the same time. */
function useSpeak() {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const run = async (): Promise<{ heard: string[]; audio?: string }> => {
    setError(null)
    setBusy(true)
    stopSpeaking()
    let rec: Awaited<ReturnType<typeof record>> | null = null
    try {
      rec = await record().catch(() => null)
      const heard = await listen()
      rec?.stop()
      const audio = rec ? await rec.done : undefined
      return { heard, audio }
    } catch (e) {
      rec?.stop()
      setError((e as Error).message)
      return { heard: [] }
    } finally {
      setBusy(false)
    }
  }
  return { busy, error, run }
}

function Bubble({ l, mine, active, children, showVn, hidden }: { l: Line; mine: boolean; active?: boolean; children?: React.ReactNode; showVn: boolean; hidden?: boolean }) {
  return (
    <div className={cx('flex', mine ? 'justify-end' : 'justify-start')}>
      <div
        className={cx(
          'max-w-[88%] rounded-2xl px-5 py-3.5 shadow-xs',
          mine ? 'rounded-br-sm bg-accent-soft text-ink' : 'rounded-bl-sm border border-line bg-surface',
          active && 'ring-2 ring-accent shadow-md',
        )}
      >
        <p className="text-xs font-bold uppercase tracking-wider text-accent">{l.name ?? l.speaker}</p>
        {!hidden && (
          <div className="flex items-start gap-2 mt-1">
            <Jp text={clean(l.jp)} className="text-xl sm:text-2xl leading-loose font-medium" />
            <SpeakButton text={clean(l.jp)} role={roleOf(l.speaker)} className="h-8 w-8 shrink-0 mt-1" />
          </div>
        )}
        {showVn && !hidden && l.vn && <p className="mt-1.5 text-base text-sub font-medium">{l.vn}</p>}
        {!hidden && l.note && <p className="mt-2 rounded-lg bg-warn-soft px-3 py-1 text-sm font-medium text-warn">💡 {l.note}</p>}
        {children}
      </div>
    </div>
  )
}

function Step1({ d, me, onDone }: { d: Dialogue; me: string; onDone: () => void }) {
  const [vn, setVn] = useState(true)
  const p = usePlaylist(
    d.lines.map((l) => ({ text: clean(l.jp), role: roleOf(l.speaker) })),
    { gapMs: 350, onEnd: onDone },
  )
  return (
    <div className="space-y-3">
      <FloatingPlayer p={p} title={d.title} />
      <div className="flex flex-wrap items-center gap-2">
        <PlayerControls p={p} startLabel="Nghe toàn bộ hội thoại" />
        <Chip active={vn} onClick={() => setVn(!vn)}>
          Dịch tiếng Việt
        </Chip>
      </div>
      <p className="text-xs text-sub">Bấm vào một câu để nghe từ câu đó trở đi.</p>
      <div className="space-y-2">
        {d.lines.map((l, i) => (
          <div key={i} className="cursor-pointer" onClick={() => p.playFrom(i)}>
            <Bubble l={l} mine={l.speaker === me} active={p.cur === i} showVn={vn} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Step2({ d, me, onDone }: { d: Dialogue; me: string; onDone: () => void }) {
  const [i, setI] = useState(0)
  const [res, setRes] = useState<{ m: SpeechMatch; audio?: string } | null>(null)
  const mic = useSpeak()
  const l = d.lines[i]!
  useEffect(() => {
    setRes(null)
    void speak(clean(l.jp), { role: roleOf(l.speaker) })
  }, [i])

  const say = async () => {
    const r = await mic.run()
    if (r.heard.length || r.audio) setRes({ m: compareSpeech(clean(l.jp), r.heard), audio: r.audio })
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-sub">
        Câu {i + 1}/{d.lines.length}: nghe mẫu rồi bấm micro và nói lại y như vậy.
      </p>
      <Bubble l={l} mine={l.speaker === me} showVn>
        <div className="mt-2 flex flex-wrap gap-2">
          <Button size="sm" onClick={() => speak(clean(l.jp), { role: roleOf(l.speaker) })}>
            ▶ Mẫu
          </Button>
          <Button size="sm" variant="primary" disabled={mic.busy} onClick={say}>
            {mic.busy ? '🎙 Đang nghe…' : '🎤 Nói'}
          </Button>
          {res?.audio && (
            <Button
              size="sm"
              onClick={async () => {
                await speak(clean(l.jp), { role: roleOf(l.speaker) })
                await playUrl(res.audio!)
              }}
            >
              ⇄ Mẫu → giọng tôi
            </Button>
          )}
        </div>
        {res && res.m.heard !== '' && <MatchView m={res.m} />}
      </Bubble>
      {mic.error && <p className="text-sm text-bad">{mic.error}</p>}
      <div className="flex justify-between">
        <Button variant="ghost" disabled={i === 0} onClick={() => setI(i - 1)}>
          ← Câu trước
        </Button>
        {i + 1 < d.lines.length ? (
          <Button variant="primary" onClick={() => setI(i + 1)}>
            Câu tiếp →
          </Button>
        ) : (
          <Button variant="primary" onClick={onDone}>
            Xong bước 2 ✓
          </Button>
        )}
      </div>
    </div>
  )
}

interface TurnResult {
  line: number
  heard: string
  score: number
}

/** Steps 3 and 4: the computer plays the other role, you answer your turns. */
function Roleplay({ d, me, blind, onDone }: { d: Dialogue; me: string; blind: boolean; onDone: (r: TurnResult[]) => void }) {
  const [i, setI] = useState(0)
  const [results, setResults] = useState<TurnResult[]>([])
  const [typed, setTyped] = useState('')
  const [feedback, setFeedback] = useState<{ ok: boolean; m?: SpeechMatch } | null>(null)
  const [count, setCount] = useState<number | null>(null)
  const mic = useSpeak()
  const canSpeak = sttSupported()
  const finished = i >= d.lines.length
  const l = d.lines[Math.min(i, d.lines.length - 1)]!
  const mine = l.speaker === me

  useEffect(() => {
    if (finished) {
      onDone(results)
      return
    }
    setFeedback(null)
    setTyped('')
    if (!mine) {
      let alive = true
      void speak(clean(l.jp), { role: roleOf(l.speaker) }).then(() => alive && setTimeout(() => alive && setI((x) => x + 1), 400))
      return () => {
        alive = false
      }
    }
    if (blind) setCount(10)
  }, [i, finished])

  useEffect(() => {
    if (count === null || count <= 0 || feedback) return
    const t = setTimeout(() => setCount((c) => (c === null ? null : c - 1)), 1000)
    return () => clearTimeout(t)
  }, [count, feedback])

  const accept = (heard: string, score: number, ok: boolean, m?: SpeechMatch) => {
    setCount(null)
    setFeedback({ ok, m })
    setResults((r) => [...r, { line: i, heard, score }])
  }
  const sayIt = async () => {
    const r = await mic.run()
    if (!r.heard.length) return
    const m = compareSpeech(clean(l.jp), r.heard)
    const altOk = (l.alts ?? []).some((a) => compareSpeech(a, r.heard).score >= PASS)
    accept(m.heard, m.score, m.score >= PASS || altOk, m)
  }
  const typeIt = () => {
    const ok = isCorrect(typed, [clean(l.jp), ...(l.alts ?? [])])
    accept(typed, ok ? 1 : 0, ok)
  }

  const shown = d.lines.slice(0, Math.min(i + 1, d.lines.length))

  return (
    <div className="space-y-2">
      {shown.map((x, k) => {
        const isMine = x.speaker === me
        const current = k === i && !finished
        if (!isMine || (!current && !blind)) return <Bubble key={k} l={x} mine={isMine} showVn={!blind && !isMine} />
        if (!current) {
          const r = results.find((y) => y.line === k)
          return (
            <Bubble key={k} l={x} mine showVn={false} hidden>
              <p className="text-sm" lang="ja">
                {r?.heard || '…'}
              </p>
            </Bubble>
          )
        }
        return (
          <Bubble key={k} l={x} mine showVn={false} hidden active>
            {blind ? (
              <p className="mt-1 font-medium">🎯 {x.task ?? `Hãy nói: “${x.vn}”`}</p>
            ) : (
              <>
                <p className="mt-1 text-lg" lang="ja">
                  <Jp text={x.jp.replace(/［[^］]*］/g, '［……］')} />
                  {!/［/.test(x.jp) && <span className="text-sub"> (cả câu)</span>}
                </p>
                <p className="text-sm text-sub">{x.vn}</p>
              </>
            )}
            {blind && count !== null && !feedback && <p className={cx('mt-1 font-mono text-2xl', count <= 3 && 'text-bad')}>{count}s</p>}
            {!feedback && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {canSpeak && (
                  <Button size="sm" variant="primary" disabled={mic.busy} onClick={sayIt}>
                    {mic.busy ? '🎙 Đang nghe…' : '🎤 Nói cả câu'}
                  </Button>
                )}
                <JpInput className="min-w-48 flex-1 text-base" placeholder="hoặc gõ câu…" value={typed} onChange={(e) => setTyped(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && typed.trim() && typeIt()} />
                <Button size="sm" disabled={!typed.trim()} onClick={typeIt}>
                  Gửi
                </Button>
                <Button size="sm" variant="ghost" onClick={() => accept('', 0, false)}>
                  Bỏ qua
                </Button>
              </div>
            )}
            {mic.error && <p className="text-sm text-bad">{mic.error}</p>}
            {feedback && (
              <div className="mt-2">
                {feedback.m && <MatchView m={feedback.m} />}
                <p className={cx('mt-1 text-sm font-semibold', feedback.ok ? 'text-ok' : 'text-bad')}>{feedback.ok ? '✓ Tốt lắm!' : '✗ Chưa khớp — câu mẫu:'}</p>
                <div className="flex items-center gap-1">
                  <Jp text={clean(x.jp)} className="text-lg" />
                  <SpeakButton text={clean(x.jp)} role={roleOf(x.speaker)} className="h-7 w-7" />
                </div>
                <Button size="sm" variant="primary" className="mt-2" autoFocus onClick={() => setI(i + 1)}>
                  Tiếp →
                </Button>
              </div>
            )}
          </Bubble>
        )
      })}
      {!canSpeak && <p className="text-xs text-sub">Trình duyệt này không nhận dạng giọng nói — hãy gõ câu trả lời, hoặc mở bằng Chrome/Edge để nói.</p>}
    </div>
  )
}

function Summary({ d, me, results }: { d: Dialogue; me: string; results: TurnResult[] }) {
  return (
    <div className="space-y-3">
      <p className="text-lg font-semibold">Bảng tổng kết Kaiwa</p>
      {d.lines.map((l, k) =>
        l.speaker !== me ? null : (
          <div key={k} className="rounded-lg border border-line p-3">
            <p className="text-sm text-sub">{l.task ?? l.vn}</p>
            <p className="mt-1 text-sm">
              Bạn nói: <span lang="ja">{results.find((r) => r.line === k)?.heard || '—'}</span>{' '}
              <span className="text-sub">({Math.round((results.find((r) => r.line === k)?.score ?? 0) * 100)}%)</span>
            </p>
            <p className="mt-1">
              <span className="text-sm text-sub">Câu mẫu: </span>
              <Jp text={clean(l.jp)} className="text-lg" speakable />
            </p>
            {l.alts?.map((a, i) => (
              <p key={i}>
                <span className="text-sm text-sub">Cách khác: </span>
                <Jp text={a} className="text-lg" speakable />
              </p>
            ))}
          </div>
        ),
      )}
    </div>
  )
}

/** New words and patterns (beyond Bài 1–11) to look at before listening. */
function Prepare({ d }: { d: Dialogue }) {
  const [open, setOpen] = useState(true)
  if (!d.vocab?.length && !d.grammar?.length) return null
  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <button type="button" className="flex w-full items-center justify-between text-left font-bold text-ink cursor-pointer" onClick={() => setOpen(!open)}>
        <span>📝 Chuẩn bị trước khi nghe · {d.vocab?.length ?? 0} từ mới · {d.grammar?.length ?? 0} cấu trúc</span>
        <span className="text-sub">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {d.vocab && d.vocab.length > 0 && (
            <div>
              <p className="mb-1 text-sm font-semibold text-accent">Từ mới (ngoài Bài 1–11)</p>
              <ul className="space-y-1">
                {d.vocab.map((v, i) => (
                  <li key={i} className="flex flex-wrap items-center gap-x-2">
                    <Jp text={v.jp} speakable className="text-lg font-semibold" />
                    <span className="text-sub">— {v.meaning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {d.grammar && d.grammar.length > 0 && (
            <div>
              <p className="mb-1 text-sm font-semibold text-accent">Cấu trúc dùng trong bài</p>
              <ul className="space-y-1">
                {d.grammar.map((g, i) => (
                  <li key={i}>
                    <Jp text={g.jp} className="text-lg font-semibold" />
                    <span className="text-sub"> — {g.meaning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function DialoguePractice({ d }: { d: Dialogue }) {
  const done = useProgress((s) => s.dialogues[d.id]) ?? NONE
  const markStep = useProgress((s) => s.markDialogueStep)
  const speakers = [...new Set(d.lines.map((l) => l.speaker))]
  const [me, setMe] = useState(speakers.includes('B') ? 'B' : speakers[1] ?? speakers[0]!)
  const [step, setStep] = useState(1)
  const [run, setRun] = useState(0)
  const [summary, setSummary] = useState<TurnResult[] | null>(null)
  useEffect(() => () => stopSpeaking(), [])
  useEffect(() => setSummary(null), [step, me, run])

  const STEPS = ['Nghe hiểu', 'Nhại theo', 'Nhập vai có gợi ý', 'Nhập vai mù']
  return (
    <div className="space-y-4">
      {d.scene && <p className="rounded-lg bg-muted px-3 py-2 text-sm">🎬 {d.scene}</p>}
      <Prepare d={d} />
      <div className="flex flex-wrap items-center gap-2">
        {STEPS.map((s, i) => (
          <Chip key={s} active={step === i + 1} onClick={() => setStep(i + 1)}>
            {i + 1}. {s} {done.includes(i + 1) ? '✓' : ''}
          </Chip>
        ))}
        <span className="flex-1" />
        {step >= 3 && (
          <span className="flex items-center gap-1 text-sm">
            Vai của bạn:
            {speakers.map((s) => (
              <Chip key={s} active={me === s} onClick={() => setMe(s)}>
                {d.roles[s] ?? s}
              </Chip>
            ))}
          </span>
        )}
      </div>
      {step === 1 && <Step1 d={d} me={me} onDone={() => markStep(d.id, 1)} />}
      {step === 2 && (
        <Step2
          d={d}
          me={me}
          onDone={() => {
            markStep(d.id, 2)
            setStep(3)
          }}
        />
      )}
      {(step === 3 || step === 4) && !summary && (
        <Roleplay
          key={`${step}-${me}-${run}`}
          d={d}
          me={me}
          blind={step === 4}
          onDone={(r) => {
            markStep(d.id, step)
            setSummary(r)
          }}
        />
      )}
      {summary && (
        <div className="space-y-3">
          {step === 4 ? <Summary d={d} me={me} results={summary} /> : <p className="font-semibold">Hoàn thành nhập vai có gợi ý! Thử bước 4 — nhập vai không nhìn chữ.</p>}
          <div className="flex gap-2">
            <Button onClick={() => setRun((x) => x + 1)}>Làm lại</Button>
            {step === 3 && (
              <Button variant="primary" onClick={() => setStep(4)}>
                Sang bước 4 →
              </Button>
            )}
          </div>
        </div>
      )}
      {d.more && d.more.length > 0 && (
        <div className="rounded-2xl border border-accent/30 bg-accent-soft/40 p-4">
          <p className="mb-2 font-bold text-ink">📚 Tìm hiểu thêm sau hội thoại này</p>
          <ul className="list-disc space-y-1 pl-5 text-base">
            {d.more.map((m, i) => (
              <li key={i}>
                <Jp text={m} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="text-xs text-sub">
        Luyện nói cần micro và Chrome/Edge. Chấm điểm dựa trên chữ máy nghe được (không chấm ngữ điệu) · {d.lines.length} lượt lời.
      </p>
    </div>
  )
}
