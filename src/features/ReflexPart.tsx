// Phản xạ hỏi đáp: hear a question (text hidden), answer out loud right away, then compare with the model answer.
// Two kinds: single questions (shuffled, missed ones come back) or a chain of questions on one topic (in order).
// Countdown is optional. No scoring of your voice — you rate yourself.
import { useEffect, useRef, useState } from 'react'
import type { SpeakChain, SpeakQuestion, Speaking } from '../types'
import { setKey } from '../lib/progressInfo'
import { shuffle } from '../lib/data'
import { speak, stopSpeaking } from '../lib/speech'
import { useProgress } from '../store/progress'
import { Jp } from '../components/Jp'
import { Button, Card, Chip, ProgressBar, SpeakButton, cx } from '../components/ui'

const SECONDS = [5, 8, 12]
const LENGTHS = [10, 20, 0] // 0 = all

interface RunSpec {
  items: SpeakQuestion[]
  chain?: SpeakChain
  saveId: string
  key: number
}

export function ReflexPart({ sp, unitId }: { sp: Speaking; unitId: string }) {
  const sets = useProgress((s) => s.sets)
  const [mode, setMode] = useState<'single' | 'chain'>(sp.reflex.length ? 'single' : 'chain')
  const [timed, setTimed] = useState(true)
  const [secs, setSecs] = useState(8)
  const [len, setLen] = useState(20)
  const [run, setRun] = useState<RunSpec | null>(null)

  const startSingle = (items = sp.reflex) =>
    setRun({ items: shuffle(items).slice(0, len || items.length), saveId: setKey(unitId, 'noi', 'phan-xa'), key: Date.now() })
  const startChain = (c: SpeakChain) => setRun({ items: c.questions, chain: c, saveId: setKey(unitId, 'noi', `phan-xa-${c.id}`), key: Date.now() })

  if (run)
    return (
      <ReflexRun
        key={run.key}
        items={run.items}
        chain={run.chain}
        secs={timed ? secs : 0}
        saveId={run.saveId}
        onExit={() => setRun(null)}
        onAgain={(items) => setRun({ ...run, items: run.chain ? items : shuffle(items), key: Date.now() })}
        onNew={() => {
          if (!run.chain) return startSingle()
          const i = sp.chains.findIndex((c) => c.id === run.chain!.id)
          startChain(sp.chains[(i + 1) % sp.chains.length]!)
        }}
      />
    )

  return (
    <Card className="space-y-5">
      <div>
        <p className="text-lg font-bold text-ink">⚡ Phản xạ hỏi đáp</p>
        <p className="text-base text-sub">
          App đọc câu hỏi (ẩn chữ), bạn trả lời thành tiếng ngay. Bí thì bấm hiện script câu hỏi hoặc xem gợi ý; nói xong mới xem câu trả lời mẫu.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-sub">1. Kiểu luyện</p>
        <div className="flex flex-wrap gap-2">
          {sp.reflex.length > 0 && (
            <Chip active={mode === 'single'} onClick={() => setMode('single')}>
              ❓ Hỏi đơn ({sp.reflex.length} câu)
            </Chip>
          )}
          {sp.chains.length > 0 && (
            <Chip active={mode === 'chain'} onClick={() => setMode('chain')}>
              💬 Hội thoại ({sp.chains.length} đoạn)
            </Chip>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-sub">2. Thời gian trả lời</p>
        <div className="flex flex-wrap items-center gap-2">
          <Chip active={timed} onClick={() => setTimed(true)}>
            ⏱ Đếm giờ
          </Chip>
          <Chip active={!timed} onClick={() => setTimed(false)}>
            Không đếm giờ
          </Chip>
          {timed && (
            <>
              <span className="mx-1 h-6 w-px bg-line" />
              {SECONDS.map((s) => (
                <Chip key={s} active={secs === s} onClick={() => setSecs(s)}>
                  {s} giây
                </Chip>
              ))}
            </>
          )}
        </div>
        <p className="text-sm text-sub">
          {timed ? 'Đọc xong câu hỏi thì bắt đầu đếm ngược; hết giờ app tự hiện và đọc câu trả lời mẫu.' : 'Không giới hạn — nói xong thì tự bấm xem câu trả lời mẫu.'}
        </p>
      </div>

      {mode === 'single' ? (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-sub">3. Số câu:</span>
            {LENGTHS.map((n) => (
              <Chip key={n} active={len === n} onClick={() => setLen(n)}>
                {n || `Tất cả (${sp.reflex.length})`}
              </Chip>
            ))}
          </div>
          <Button variant="cta" size="lg" onClick={() => startSingle()}>
            Bắt đầu · {Math.min(len || sp.reflex.length, sp.reflex.length)} câu
          </Button>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-sub">3. Chọn đoạn hội thoại — người kia hỏi liên tục, bạn trả lời từng câu</p>
          <div className="grid gap-3 md:grid-cols-2">
            {sp.chains.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => startChain(c)}
                className="rounded-xl border border-line bg-surface p-4 text-left transition cursor-pointer hover:border-accent/50 hover:bg-accent-soft/40"
              >
                <span className="block font-semibold text-ink">{c.title}</span>
                {c.scene && (
                  <span className="mt-1 block text-sm text-sub">
                    <Jp text={c.scene} />
                  </span>
                )}
                <span className="mt-1 block text-sm text-sub">
                  {c.questions.length} câu hỏi
                  {sets[setKey(unitId, 'noi', `phan-xa-${c.id}`)] && <b className="ml-2 text-ok">✓ Đã luyện</b>}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

type Phase = 'listen' | 'think' | 'answer'

function ReflexRun({
  items,
  chain,
  secs,
  saveId,
  onExit,
  onAgain,
  onNew,
}: {
  items: SpeakQuestion[]
  chain?: SpeakChain
  /** 0 = no countdown */
  secs: number
  saveId: string
  onExit: () => void
  onAgain: (items: SpeakQuestion[]) => void
  onNew: () => void
}) {
  const markItem = useProgress((s) => s.markItem)
  const saveSet = useProgress((s) => s.saveSet)
  const [queue, setQueue] = useState(items)
  const [i, setI] = useState(0)
  const [phase, setPhase] = useState<Phase>('listen')
  const [left, setLeft] = useState(secs * 1000)
  const [script, setScript] = useState(false)
  const [hint, setHint] = useState(false)
  const [first, setFirst] = useState<Record<string, boolean>>({})
  const turn = useRef(0) // bumps on every new item so stale speech callbacks do nothing
  const q = queue[i]

  // each new question: read it aloud, then start thinking time
  useEffect(() => {
    if (!q) return
    const my = ++turn.current
    setPhase('listen')
    setLeft(secs * 1000)
    setScript(false)
    setHint(false)
    void speak(q.q, { role: 'A' }).then(() => {
      if (turn.current === my) setPhase('think')
    })
    return () => {
      turn.current++
      stopSpeaking()
    }
  }, [q, i, secs])

  useEffect(() => {
    if (phase !== 'think' || !secs) return
    const t = setInterval(() => setLeft((l) => Math.max(0, l - 100)), 100)
    return () => clearInterval(t)
  }, [phase, secs])

  const reveal = () => {
    if (!q || phase === 'answer') return
    setPhase('answer')
    stopSpeaking()
    void speak(q.answers[0]!.jp, { role: 'B' })
  }

  // time is up: show and read the model answer
  useEffect(() => {
    if (secs && phase === 'think' && left === 0) reveal()
  })

  const next = (ok: boolean) => {
    if (!q) return
    markItem(q.id, ok)
    setFirst((f) => (q.id in f ? f : { ...f, [q.id]: ok }))
    // single questions: a missed one comes back a few questions later (at most twice); a chain keeps its order
    const seen = queue.filter((x) => x.id === q.id).length
    if (!ok && !chain && seen < 3) setQueue((qs) => [...qs.slice(0, i + 4), q, ...qs.slice(i + 4)])
    setI((n) => n + 1)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement | null)?.closest?.('input, textarea')) return
      if (phase !== 'answer' && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault()
        reveal()
      } else if (phase === 'answer' && (e.key === '1' || e.key === '2')) next(e.key === '1')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const unique = new Set(items.map((x) => x.id)).size
  const okCount = Object.values(first).filter(Boolean).length
  const done = !q
  useEffect(() => {
    if (done) saveSet(saveId, okCount, unique)
  }, [done, saveSet, saveId, okCount, unique])

  if (done) {
    const missed = items.filter((x) => first[x.id] === false)
    return (
      <Card className="space-y-4">
        <p className="text-center text-2xl font-bold text-ink">{chain ? `Xong hội thoại “${chain.title}”` : `Xong ${unique} câu`} 🎉</p>
        <p className="text-center text-lg text-sub">
          Trả lời được ngay: <b className="text-ok">{okCount}</b>/{unique}
        </p>
        {missed.length > 0 && (
          <div className="space-y-2">
            <p className="font-semibold text-ink">Câu chưa trả lời được — nói lại vài lần cho quen miệng:</p>
            {missed.map((x) => (
              <div key={x.id} className="rounded-xl bg-muted/60 px-3 py-2">
                <div className="flex flex-wrap items-center gap-x-2 text-base text-sub">
                  <span>Hỏi:</span>
                  <Jp text={x.q} />
                  <SpeakButton text={x.q} role="A" />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 text-lg font-semibold text-ink">
                  <span className="text-base font-normal text-sub">Đáp:</span>
                  <Jp text={x.answers[0]!.jp} />
                  <SpeakButton text={x.answers[0]!.jp} role="B" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-2">
          {missed.length > 0 && (
            <Button variant="primary" onClick={() => onAgain(chain ? items : missed)}>
              {chain ? 'Luyện lại đoạn này' : `Luyện lại ${missed.length} câu chưa được`}
            </Button>
          )}
          <Button variant="cta" onClick={onNew}>
            {chain ? 'Đoạn hội thoại tiếp theo' : 'Bộ câu mới'}
          </Button>
          <Button onClick={onExit}>← Chọn lại</Button>
        </div>
      </Card>
    )
  }

  const answered = phase === 'answer'
  return (
    <Card className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-sub">
        <span>
          {chain ? `💬 ${chain.title} · Lượt ${i + 1}/${queue.length}` : `Câu ${i + 1}/${queue.length}`}
          {queue.length > items.length && ` (có ${queue.length - items.length} câu lặp lại)`}
        </span>
        <Button size="sm" variant="ghost" onClick={onExit}>
          ✕ Thoát
        </Button>
      </div>
      <ProgressBar value={i / queue.length} />
      {chain?.scene && i === 0 && !answered && (
        <p className="rounded-lg bg-muted px-3 py-2 text-sm">
          🎬 <Jp text={chain.scene} />
        </p>
      )}

      <div className="space-y-3 rounded-2xl bg-muted/50 p-5 text-center sm:p-7">
        <div className="flex min-h-[3.5rem] flex-wrap items-center justify-center gap-2 text-2xl font-semibold text-ink sm:text-3xl">
          {script || answered ? <Jp text={q.q} className="leading-loose" /> : <span className="text-xl text-sub">🎧 {phase === 'listen' ? 'Nghe câu hỏi…' : 'Trả lời ngay!'}</span>}
          <SpeakButton text={q.q} role="A" label="Nghe lại câu hỏi" />
        </div>
        {(script || answered) && <p className="text-base text-sub">{q.vn}</p>}
        <div className="flex flex-wrap justify-center gap-2">
          {!script && !answered && (
            <Button size="sm" onClick={() => setScript(true)}>
              📜 Hiện script câu hỏi
            </Button>
          )}
          {q.hint && !hint && !answered && (
            <Button size="sm" onClick={() => setHint(true)}>
              💡 Gợi ý trả lời
            </Button>
          )}
        </div>
        {q.hint && (hint || answered) && (
          <p className="inline-block rounded-lg bg-warn-soft px-3 py-1.5 text-sm font-medium text-warn">
            💡 <Jp text={q.hint} />
          </p>
        )}
      </div>

      {!answered ? (
        <div className="space-y-3 text-center">
          {secs > 0 && (
            <div className="mx-auto h-3 max-w-md overflow-hidden rounded-full bg-muted">
              <div
                className={cx('h-full rounded-full transition-[width] duration-100', left < 2000 ? 'bg-bad' : 'bg-accent')}
                style={{ width: phase === 'think' ? `${(left / (secs * 1000)) * 100}%` : '100%' }}
              />
            </div>
          )}
          <Button variant="primary" size="lg" onClick={reveal}>
            Nói xong · xem câu trả lời mẫu <span className="text-xs opacity-75">(Space)</span>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2 rounded-2xl border-2 border-ok/40 bg-ok-soft p-4 sm:p-5">
            <p className="text-sm font-semibold text-ok">Câu trả lời mẫu</p>
            {q.answers.map((a, k) => (
              <div key={k}>
                <div className="flex flex-wrap items-center gap-2">
                  <Jp text={a.jp} className={cx('leading-loose text-ink', k === 0 ? 'text-xl font-bold sm:text-2xl' : 'text-lg')} />
                  <SpeakButton text={a.jp} role="B" />
                </div>
                <p className="text-sm text-sub">{a.vn}</p>
              </div>
            ))}
            <p className="text-xs text-sub">Câu của bạn khác mẫu vẫn được, miễn đúng ý và đúng ngữ pháp.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="ok" size="lg" onClick={() => next(true)}>
              ✓ Trả lời được <span className="text-xs opacity-75">(1)</span>
            </Button>
            <Button variant="bad" size="lg" onClick={() => next(false)}>
              ✗ Chưa được <span className="text-xs opacity-75">(2)</span>
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}
