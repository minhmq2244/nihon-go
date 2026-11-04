// Luyện phản xạ: hear a sentence, say it in another form before the countdown ends, then compare.
// No scoring of your voice — you rate yourself "kịp / chưa kịp"; missed ones come back a few items later.
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Unit } from '../types'
import { availableKinds, buildReflexItems, type ReflexItem, type ReflexKind } from '../lib/reflex'
import { setKey } from '../lib/progressInfo'
import { shuffle } from '../lib/data'
import { speak, stopSpeaking } from '../lib/speech'
import { useProgress } from '../store/progress'
import { Jp } from '../components/Jp'
import { Button, Card, Chip, Empty, ProgressBar, SpeakButton, cx } from '../components/ui'

const SECONDS = [2, 3, 5, 8]
const LENGTHS = [10, 20, 40]

export function ReflexPart({ unit }: { unit: Unit }) {
  const kinds = availableKinds(unit.meta)
  const [chosen, setChosen] = useState<Set<ReflexKind>>(() => {
    const ids = kinds.map((k) => k.id)
    return new Set(ids.includes('plain') ? ['plain'] : ids.slice(-1))
  })
  const [secs, setSecs] = useState(3)
  const [len, setLen] = useState(20)
  const [handsFree, setHandsFree] = useState(false)
  const [hideText, setHideText] = useState(false)
  const [run, setRun] = useState<ReflexItem[] | null>(null)
  const all = useMemo(() => buildReflexItems(unit, [...chosen]), [unit, chosen])
  const count = (k: ReflexKind) => buildReflexItems(unit, [k]).length

  const start = (items: ReflexItem[]) => setRun(shuffle(items).slice(0, len))

  if (run)
    return (
      <ReflexRun
        key={run.map((x) => x.id).join()}
        items={run}
        secs={secs}
        handsFree={handsFree}
        hideText={hideText}
        saveId={setKey(unit.meta.id, 'noi', 'phan-xa')}
        onExit={() => setRun(null)}
        onAgain={(items) => setRun(shuffle(items))}
        onNew={() => start(all)}
      />
    )

  return (
    <Card className="space-y-5">
      <div>
        <p className="text-lg font-bold text-ink">⚡ Phản xạ nhanh</p>
        <p className="text-base text-sub">
          App đọc một câu, bạn nói ngay câu đã đổi dạng trước khi hết giờ — không có thời gian để nghĩ. Hết giờ app tự hiện và đọc đáp án để bạn so sánh.
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-sub">Kiểu đổi (chọn một hay nhiều)</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {kinds.map((k) => {
            const on = chosen.has(k.id)
            const n = count(k.id)
            return (
              <button
                key={k.id}
                type="button"
                disabled={!n}
                onClick={() => {
                  const s = new Set(chosen)
                  if (on) s.delete(k.id)
                  else s.add(k.id)
                  setChosen(s)
                }}
                className={cx(
                  'rounded-xl border p-3 text-left transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed',
                  on ? 'border-accent bg-accent-soft' : 'border-line bg-surface hover:border-accent/50',
                )}
              >
                <span className={cx('block font-semibold', on ? 'text-accent' : 'text-ink')}>
                  {on ? '✓ ' : ''}
                  {k.label}
                </span>
                <span className="block text-sm text-sub">
                  {k.example} · {n} câu
                </span>
              </button>
            )
          })}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-sub">Thời gian nói:</span>
          {SECONDS.map((s) => (
            <Chip key={s} active={secs === s} onClick={() => setSecs(s)}>
              {s} giây
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-sub">Số câu:</span>
          {LENGTHS.map((n) => (
            <Chip key={n} active={len === n} onClick={() => setLen(n)}>
              {n}
            </Chip>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Chip active={hideText} onClick={() => setHideText(!hideText)}>
          {hideText ? '✓ ' : ''}Chỉ nghe (ẩn chữ câu hỏi)
        </Chip>
        <Chip active={handsFree} onClick={() => setHandsFree(!handsFree)}>
          {handsFree ? '✓ ' : ''}Rảnh tay (tự chạy, không cần bấm)
        </Chip>
      </div>
      {!all.length ? (
        <Empty title="Chọn ít nhất một kiểu đổi." />
      ) : (
        <Button variant="cta" size="lg" onClick={() => start(all)}>
          Bắt đầu · {Math.min(len, all.length)} câu
        </Button>
      )}
    </Card>
  )
}

type Phase = 'listen' | 'think' | 'answer'

function ReflexRun({
  items,
  secs,
  handsFree,
  hideText,
  saveId,
  onExit,
  onAgain,
  onNew,
}: {
  items: ReflexItem[]
  secs: number
  handsFree: boolean
  hideText: boolean
  saveId: string
  onExit: () => void
  onAgain: (items: ReflexItem[]) => void
  onNew: () => void
}) {
  const markItem = useProgress((s) => s.markItem)
  const saveSet = useProgress((s) => s.saveSet)
  const [queue, setQueue] = useState(items)
  const [i, setI] = useState(0)
  const [phase, setPhase] = useState<Phase>('listen')
  const [left, setLeft] = useState(secs * 1000)
  const [paused, setPaused] = useState(false)
  const [first, setFirst] = useState<Record<string, boolean>>({})
  const turn = useRef(0) // bumps on every new item / pause so stale timers and speech callbacks do nothing
  const it = queue[i]

  // 1. read the sentence, 2. count down, 3. show + read the answer
  useEffect(() => {
    if (!it || paused) return
    const my = ++turn.current
    setPhase('listen')
    setLeft(secs * 1000)
    void speak(it.from).then(() => {
      if (turn.current === my) setPhase('think')
    })
    return () => {
      turn.current++
      stopSpeaking()
    }
  }, [it, i, paused, secs])

  useEffect(() => {
    if (phase !== 'think' || paused) return
    const t = setInterval(() => setLeft((l) => Math.max(0, l - 100)), 100)
    return () => clearInterval(t)
  }, [phase, paused])

  const reveal = () => {
    if (!it || phase === 'answer') return
    setPhase('answer')
    const my = turn.current
    void speak(it.to[0]!).then(() => {
      if (handsFree && turn.current === my) setTimeout(() => turn.current === my && next(true), 1200)
    })
  }

  const next = (ok: boolean) => {
    if (!it) return
    if (!handsFree) {
      markItem(it.id, ok)
      setFirst((f) => (it.id in f ? f : { ...f, [it.id]: ok }))
      const seen = queue.filter((x) => x.id === it.id).length
      if (!ok && seen < 3) setQueue((qs) => [...qs.slice(0, i + 4), it, ...qs.slice(i + 4)])
    }
    setI((n) => n + 1)
  }

  // time is up: show and read the answer
  useEffect(() => {
    if (phase === 'think' && left === 0) reveal()
  })

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement | null)?.closest?.('input, textarea')) return
      if (phase !== 'answer' && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault()
        reveal()
      } else if (phase === 'answer' && !handsFree && (e.key === '1' || e.key === '2')) next(e.key === '1')
      else if (phase === 'answer' && handsFree && (e.key === ' ' || e.key === 'Enter')) next(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const unique = new Set(items.map((x) => x.id)).size
  const okCount = Object.values(first).filter(Boolean).length
  const done = !it
  useEffect(() => {
    if (done && !handsFree) saveSet(saveId, okCount, unique)
  }, [done, handsFree, saveSet, saveId, okCount, unique])

  if (done) {
    const missed = items.filter((x) => first[x.id] === false)
    return (
      <Card className="space-y-4">
        <p className="text-center text-2xl font-bold text-ink">Xong {unique} câu 🎉</p>
        {!handsFree && (
          <p className="text-center text-lg text-sub">
            Kịp ngay lần đầu: <b className="text-ok">{okCount}</b>/{unique}
          </p>
        )}
        {missed.length > 0 && (
          <div className="space-y-2">
            <p className="font-semibold text-ink">Câu chưa kịp — nói lại vài lần cho quen miệng:</p>
            {missed.map((x) => (
              <div key={x.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl bg-muted/60 px-3 py-2 text-lg">
                <Jp text={x.from} className="text-sub" />
                <span className="text-sub">→</span>
                <Jp text={x.to[0]!} className="font-semibold text-ink" />
                <SpeakButton text={x.to[0]!} />
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-2">
          {missed.length > 0 && (
            <Button variant="primary" onClick={() => onAgain(missed)}>
              Luyện lại {missed.length} câu chưa kịp
            </Button>
          )}
          <Button variant="cta" onClick={onNew}>
            Bộ câu mới
          </Button>
          <Button onClick={onExit}>← Chọn kiểu khác</Button>
        </div>
      </Card>
    )
  }

  const showFrom = !hideText || phase === 'answer'
  return (
    <Card className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-sub">
        <span>
          Câu {Math.min(i + 1, queue.length)}/{queue.length}
          {queue.length > items.length && ` (có ${queue.length - items.length} câu lặp lại)`}
        </span>
        <div className="flex gap-2">
          {handsFree && (
            <Button size="sm" onClick={() => setPaused(!paused)}>
              {paused ? '▶ Tiếp tục' : '⏸ Tạm dừng'}
            </Button>
          )}
          <Button size="sm" variant="ghost" onClick={onExit}>
            ✕ Thoát
          </Button>
        </div>
      </div>
      <ProgressBar value={i / queue.length} />

      <div className="rounded-2xl bg-muted/50 p-5 text-center sm:p-7">
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-bold text-white">→ {it.cue}</span>
        <div className="mt-4 flex min-h-[3.5rem] items-center justify-center gap-2 text-2xl font-semibold text-ink sm:text-3xl">
          {showFrom ? <Jp text={it.from} /> : <span className="text-xl text-sub">🎧 Nghe…</span>}
          <SpeakButton text={it.from} label="Nghe lại câu" />
        </div>
      </div>

      {phase !== 'answer' ? (
        <div className="space-y-3 text-center">
          <p className="text-lg font-semibold text-ink">{phase === 'listen' ? 'Nghe…' : paused ? 'Đang tạm dừng' : 'Nói ngay!'}</p>
          <div className="mx-auto h-3 max-w-md overflow-hidden rounded-full bg-muted">
            <div
              className={cx('h-full rounded-full transition-[width] duration-100', left < 1000 ? 'bg-bad' : 'bg-accent')}
              style={{ width: phase === 'think' ? `${(left / (secs * 1000)) * 100}%` : '100%' }}
            />
          </div>
          <Button variant="primary" onClick={reveal}>
            Nói xong · xem đáp án <span className="text-xs opacity-75">(Space)</span>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-ok/40 bg-ok-soft p-5 text-center">
            <p className="text-sm font-semibold text-ok">Đáp án</p>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-2 text-2xl font-bold text-ink sm:text-3xl">
              <Jp text={it.to[0]!} />
              <SpeakButton text={it.to[0]!} />
            </div>
            {it.to.length > 1 && (
              <p className="mt-1 text-base text-sub">
                Cũng được: <Jp text={it.to.slice(1).join('　')} />
              </p>
            )}
          </div>
          {handsFree ? (
            <p className="text-center text-sm text-sub">Tự chuyển câu sau khi đọc đáp án… (Space để qua ngay)</p>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="ok" size="lg" onClick={() => next(true)}>
                ✓ Kịp <span className="text-xs opacity-75">(1)</span>
              </Button>
              <Button variant="bad" size="lg" onClick={() => next(false)}>
                ✗ Chưa kịp <span className="text-xs opacity-75">(2)</span>
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  )
}
