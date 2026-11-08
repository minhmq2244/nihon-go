// One card at a time: listen / speak, then rate yourself. "Chưa" sends the card to the back of the queue.
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { CheckCircle2, RotateCcw } from 'lucide-react'
import { useProgress } from '../store/progress'
import { Button, Card, ProgressBar, cx } from './ui'

export interface Level {
  label: string
  hint: string
  total: number
  done: number
}

/** Numbered level picker: ① Nhại lại 12/30 ② … */
export function LevelSteps({ levels, cur, onPick }: { levels: Level[]; cur: number; onPick: (i: number) => void }) {
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${levels.length}, minmax(0, 1fr))` }}>
      {levels.map((l, i) => {
        const complete = l.total > 0 && l.done >= l.total
        return (
          <button
            key={i}
            type="button"
            onClick={() => onPick(i)}
            className={cx(
              'rounded-2xl border px-2 py-2.5 text-left transition sm:px-4 sm:py-3 cursor-pointer',
              cur === i ? 'border-accent bg-accent-soft ring-2 ring-accent/30' : 'border-line bg-surface hover:border-accent/50',
            )}
          >
            <span className="flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-2 sm:text-left">
              <span
                className={cx(
                  'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                  complete ? 'bg-ok text-white' : cur === i ? 'bg-accent text-white' : 'bg-muted text-sub',
                )}
              >
                {complete ? '✓' : i + 1}
              </span>
              <span className={cx('text-sm font-bold leading-tight sm:text-base', cur === i ? 'text-accent' : 'text-ink')}>{l.label}</span>
            </span>
            <span className="mt-1 block text-center text-xs font-medium text-sub sm:text-left">{l.total ? `${l.done}/${l.total}` : 'Đang soạn'}</span>
          </button>
        )
      })}
    </div>
  )
}

export function FocusDeck<T>({
  items,
  keyOf,
  prefix,
  reveal,
  revealLabel = 'Xem đáp án',
  okLabel,
  againLabel,
  onShow,
  onReveal,
  render,
  onComplete,
  next,
}: {
  items: T[]
  /** Progress key of a card; all keys start with prefix. */
  keyOf: (t: T) => string
  prefix: string
  /** The card has a hidden answer: show it before rating. */
  reveal?: boolean
  revealLabel?: string
  okLabel: string
  againLabel: string
  /** Called when a card appears and on Space (play its audio). */
  onShow?: (t: T) => void
  /** Called when the answer is shown, and on Space after that. */
  onReveal?: (t: T) => void
  render: (t: T, revealed: boolean) => ReactNode
  onComplete: () => void
  next?: { label: string; go: () => void }
}) {
  const marks = useProgress((s) => s.marks ?? {})
  const mark = useProgress((s) => s.mark)
  const clearMarks = useProgress((s) => s.clearMarks)
  // queue of card indexes still to master, in order; built once per deck (marks then change under us)
  const [queue, setQueue] = useState<number[]>(() => items.map((_, i) => i).filter((i) => !marks[keyOf(items[i]!)]))
  const [revealed, setRevealed] = useState(false)
  const done = useMemo(() => items.filter((t) => marks[keyOf(t)]).length, [items, marks, keyOf])
  const cur = queue.length ? items[queue[0]!] : undefined
  const curKey = cur ? keyOf(cur) : ''
  const completedRef = useRef(false)

  useEffect(() => {
    setRevealed(false)
    if (cur) onShow?.(cur)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- play once per card shown
  }, [curKey, queue.length])

  useEffect(() => {
    if (!cur && items.length && !completedRef.current) {
      completedRef.current = true
      onComplete()
    }
  }, [cur, items.length, onComplete])

  const ok = () => {
    if (!cur) return
    mark(curKey)
    setQueue((q) => q.slice(1))
  }
  const again = () => setQueue((q) => (q.length > 1 ? [...q.slice(1), q[0]!] : q.slice()))
  const show = () => {
    if (!cur) return
    setRevealed(true)
    onReveal?.(cur)
  }
  const restart = () => {
    clearMarks(prefix)
    completedRef.current = false
    setQueue(items.map((_, i) => i))
  }

  // keyboard: Space = play again, Enter = show answer / mastered
  const replay = () => {
    if (!cur) return
    if (revealed && onReveal) onReveal(cur)
    else onShow?.(cur)
  }
  const handlers = useRef({ ok, show, replay, needsReveal: false })
  handlers.current = { ok, show, replay, needsReveal: !!reveal && !revealed }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement
      if (el.closest('input, textarea, select, [contenteditable]')) return
      const h = handlers.current
      if (e.key === ' ') {
        e.preventDefault()
        h.replay()
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (h.needsReveal) h.show()
        else h.ok()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!items.length) return null

  if (!cur)
    return (
      <Card className="py-10 text-center">
        <CheckCircle2 size={48} className="mx-auto text-ok" />
        <p className="mt-3 text-2xl font-extrabold text-ink">Xong nấc này!</p>
        <p className="mt-1 text-base text-sub">Bạn đã tự đánh giá trôi chảy cả {items.length} thẻ.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {next && (
            <Button variant="cta" size="lg" onClick={next.go}>
              {next.label} →
            </Button>
          )}
          <Button onClick={restart}>
            <RotateCcw size={16} /> Luyện lại từ đầu
          </Button>
        </div>
      </Card>
    )

  const needsReveal = !!reveal && !revealed
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <ProgressBar value={done / items.length} className="flex-1" />
        <span className="shrink-0 text-sm font-bold text-sub">
          {done}/{items.length}
        </span>
      </div>
      <Card className="flex min-h-[18rem] flex-col justify-center text-center sm:min-h-[20rem]">{render(cur, revealed)}</Card>
      <div className="grid grid-cols-2 gap-3">
        {needsReveal ? (
          <Button variant="primary" size="lg" className="col-span-2" onClick={show}>
            {revealLabel}
          </Button>
        ) : (
          <>
            <Button size="lg" onClick={again}>
              <RotateCcw size={18} /> {againLabel}
            </Button>
            <Button variant="ok" size="lg" className="!bg-ok !text-white" onClick={ok}>
              <CheckCircle2 size={18} /> {okLabel}
            </Button>
          </>
        )}
      </div>
      <p className="hidden text-center text-xs text-sub sm:block">
        Phím tắt: <kbd className="rounded bg-muted px-1.5">Space</kbd> nghe lại · <kbd className="rounded bg-muted px-1.5">Enter</kbd>{' '}
        {needsReveal ? revealLabel.toLowerCase() : okLabel.toLowerCase()}
        {queue.length > 1 && ` · còn ${queue.length} thẻ`}
      </p>
    </div>
  )
}

/** Big round play button for the middle of a card. */
export function PlayBig({ onClick, playing, label = 'Nghe' }: { onClick: () => void; playing?: boolean; label?: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cx(
        'mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-lg transition hover:brightness-110 active:scale-95 cursor-pointer',
        playing && 'animate-pulse',
      )}
    >
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
      </svg>
    </button>
  )
}
