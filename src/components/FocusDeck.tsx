// One card at a time: listen / speak, then rate yourself. With quick jump, previous/next card navigation and progress tracking.
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Check, CheckCircle2, ChevronLeft, ChevronRight, ListFilter, RotateCcw, X } from 'lucide-react'
import { useProgress } from '../store/progress'
import { Button, Card, ProgressBar, cx } from './ui'
import { Jp } from './Jp'

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

/** Helper to extract Japanese and Vietnamese preview text from any card type. */
function getItemSnippet<T>(t: T): { jp?: string; vn?: string } {
  if (!t) return {}
  const obj = t as Record<string, any>
  if (obj.card && typeof obj.card === 'object') {
    return { jp: obj.card.jp, vn: obj.card.vn }
  }
  if (typeof obj.jp === 'string') {
    return { jp: obj.jp, vn: obj.vn }
  }
  if (typeof obj.title === 'string') {
    return { jp: obj.title, vn: obj.intro }
  }
  return {}
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
  itemLabel = 'Câu',
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
  itemLabel?: string
}) {
  const marks = useProgress((s) => s.marks ?? {})
  const mark = useProgress((s) => s.mark)
  const unmark = useProgress((s) => s.unmark)
  const clearMarks = useProgress((s) => s.clearMarks)

  // Start at the first unmastered card in the deck
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const firstUnmastered = items.findIndex((t) => !marks[keyOf(t)])
    return firstUnmastered !== -1 ? firstUnmastered : 0
  })

  const [revealed, setRevealed] = useState(false)
  const [isCompletedScreen, setIsCompletedScreen] = useState(false)
  const [showPickerModal, setShowPickerModal] = useState(false)
  const [filterTab, setFilterTab] = useState<'all' | 'unmastered' | 'mastered'>('all')

  const pillContainerRef = useRef<HTMLDivElement>(null)
  const activePillRef = useRef<HTMLButtonElement>(null)
  const completedRef = useRef(false)

  // Reset or adjust index when items array or prefix changes
  useEffect(() => {
    const firstUnmastered = items.findIndex((t) => !marks[keyOf(t)])
    setCurrentIndex(firstUnmastered !== -1 ? firstUnmastered : 0)
    setRevealed(false)
    setIsCompletedScreen(false)
    completedRef.current = false
  }, [prefix, items.length])

  const done = useMemo(() => items.filter((t) => marks[keyOf(t)]).length, [items, marks, keyOf])
  const safeIndex = Math.max(0, Math.min(items.length - 1, currentIndex))
  const cur = items.length ? items[safeIndex] : undefined
  const curKey = cur ? keyOf(cur) : ''
  const isCurrentDone = cur ? Boolean(marks[curKey]) : false

  // Trigger onShow when cur changes
  useEffect(() => {
    setRevealed(false)
    if (cur && !isCompletedScreen) {
      onShow?.(cur)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- play once per card index change
  }, [safeIndex, curKey, isCompletedScreen])

  // Auto-scroll the active pill into view in the filmstrip
  useEffect(() => {
    activePillRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [safeIndex])

  // Check completion
  useEffect(() => {
    if (items.length && done === items.length && !completedRef.current) {
      completedRef.current = true
      onComplete()
    }
  }, [done, items.length, onComplete])

  const goTo = (index: number) => {
    if (index < 0 || index >= items.length) return
    setCurrentIndex(index)
    setRevealed(false)
    setIsCompletedScreen(false)
    setShowPickerModal(false)
  }

  const prev = () => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1)
    }
  }

  const nextCard = () => {
    if (currentIndex < items.length - 1) {
      goTo(currentIndex + 1)
    } else if (done >= items.length) {
      setIsCompletedScreen(true)
    }
  }

  const ok = () => {
    if (!cur) return
    mark(curKey)

    const nextDone = isCurrentDone ? done : done + 1
    if (nextDone >= items.length && !completedRef.current) {
      completedRef.current = true
      onComplete()
    }

    if (currentIndex < items.length - 1) {
      goTo(currentIndex + 1)
    } else {
      if (nextDone >= items.length) {
        setIsCompletedScreen(true)
      } else {
        const firstUnfinished = items.findIndex((t) => !marks[keyOf(t)] && keyOf(t) !== curKey)
        if (firstUnfinished !== -1) {
          goTo(firstUnfinished)
        } else {
          setIsCompletedScreen(true)
        }
      }
    }
  }

  const again = () => {
    if (!cur) return
    unmark(curKey)
    if (currentIndex < items.length - 1) {
      goTo(currentIndex + 1)
    } else {
      const firstUnfinished = items.findIndex((t) => !marks[keyOf(t)])
      if (firstUnfinished !== -1) {
        goTo(firstUnfinished)
      } else {
        goTo(0)
      }
    }
  }

  const show = () => {
    if (!cur) return
    setRevealed(true)
    onReveal?.(cur)
  }

  const restart = () => {
    clearMarks(prefix)
    completedRef.current = false
    setIsCompletedScreen(false)
    setCurrentIndex(0)
    setRevealed(false)
  }

  const replay = () => {
    if (!cur) return
    if (revealed && onReveal) onReveal(cur)
    else onShow?.(cur)
  }

  // Keyboard shortcut handlers
  const handlers = useRef({ ok, again, show, replay, prev, next: nextCard, needsReveal: false })
  handlers.current = { ok, again, show, replay, prev, next: nextCard, needsReveal: !!reveal && !revealed }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement
      if (el.closest('input, textarea, select, [contenteditable]')) return
      if (showPickerModal) {
        if (e.key === 'Escape') {
          e.preventDefault()
          setShowPickerModal(false)
        }
        return
      }
      const h = handlers.current
      if (e.key === ' ') {
        e.preventDefault()
        h.replay()
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (h.needsReveal) h.show()
        else h.ok()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        h.prev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        h.next()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showPickerModal])

  if (!items.length) return null

  // Filter items for modal
  const indexedItems = useMemo(() => items.map((item, index) => ({ item, index })), [items])
  const filteredList = useMemo(() => {
    if (filterTab === 'mastered') {
      return indexedItems.filter(({ item }) => Boolean(marks[keyOf(item)]))
    }
    if (filterTab === 'unmastered') {
      return indexedItems.filter(({ item }) => !marks[keyOf(item)])
    }
    return indexedItems
  }, [indexedItems, filterTab, marks, keyOf])

  const renderPickerModal = () => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={() => setShowPickerModal(false)}
    >
      <div
        className="relative flex flex-col w-full max-w-xl max-h-[85vh] rounded-3xl bg-surface border border-line shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5 sm:px-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-ink">
              Danh sách {itemLabel} ({items.length})
            </h3>
            <p className="text-xs text-sub">
              Bấm vào bất kỳ {itemLabel.toLowerCase()} nào để nhảy tới và nghe lại
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowPickerModal(false)}
            className="rounded-full p-1.5 text-sub hover:bg-muted hover:text-ink transition cursor-pointer"
            title="Đóng"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 border-b border-line/60 bg-muted/40 px-5 py-2 sm:px-6 overflow-x-auto">
          <button
            type="button"
            onClick={() => setFilterTab('all')}
            className={cx(
              'rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer',
              filterTab === 'all'
                ? 'bg-surface text-accent shadow-xs'
                : 'text-sub hover:text-ink',
            )}
          >
            Tất cả ({items.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterTab('unmastered')}
            className={cx(
              'rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer',
              filterTab === 'unmastered'
                ? 'bg-surface text-accent shadow-xs'
                : 'text-sub hover:text-ink',
            )}
          >
            Chưa nghe ra ({items.length - done})
          </button>
          <button
            type="button"
            onClick={() => setFilterTab('mastered')}
            className={cx(
              'rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer',
              filterTab === 'mastered'
                ? 'bg-surface text-ok shadow-xs'
                : 'text-sub hover:text-ink',
            )}
          >
            Đã nghe ra ({done})
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
          {filteredList.map(({ item, index }) => {
            const isDone = Boolean(marks[keyOf(item)])
            const isActive = index === safeIndex
            const snippet = getItemSnippet(item)

            return (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={cx(
                  'w-full text-left flex items-start gap-3 rounded-2xl p-3 border transition cursor-pointer',
                  isActive
                    ? 'border-accent bg-accent-soft/50 ring-2 ring-accent/30'
                    : isDone
                    ? 'border-ok/30 bg-ok-soft/20 hover:bg-ok-soft/30'
                    : 'border-line bg-surface hover:border-line-hover hover:bg-muted/40',
                )}
              >
                <span
                  className={cx(
                    'shrink-0 flex h-7 w-7 items-center justify-center rounded-xl text-xs font-bold',
                    isActive
                      ? 'bg-accent text-white shadow-2xs'
                      : isDone
                      ? 'bg-ok text-white'
                      : 'bg-muted text-sub',
                  )}
                >
                  {isDone ? '✓' : index + 1}
                </span>

                <div className="flex-1 min-w-0 space-y-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-ink">
                      {itemLabel} {index + 1}
                    </span>
                    {isActive && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-white">
                        Đang nghe
                      </span>
                    )}
                    {!isActive && isDone && (
                      <span className="text-[11px] font-semibold text-ok">
                        Đã nghe ra
                      </span>
                    )}
                  </div>

                  {snippet.jp && (
                    <p className="text-sm font-semibold text-ink line-clamp-1">
                      <Jp text={snippet.jp} />
                    </p>
                  )}
                  {snippet.vn && (
                    <p className="text-xs text-sub line-clamp-1">
                      {snippet.vn}
                    </p>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )

  if (isCompletedScreen) {
    return (
      <div className="space-y-4">
        {/* Navigation Filmstrip remains accessible */}
        <div className="flex items-center gap-1.5 sm:gap-2 rounded-2xl border border-line bg-surface p-1.5 sm:p-2 shadow-2xs">
          <div
            ref={pillContainerRef}
            className="flex flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
          >
            {items.map((it, idx) => {
              const isDone = Boolean(marks[keyOf(it)])
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={cx(
                    'inline-flex shrink-0 items-center justify-center gap-1 rounded-xl px-2.5 py-1 text-xs font-bold transition cursor-pointer',
                    isDone
                      ? 'bg-ok-soft text-ok border border-ok/30 hover:bg-ok-soft/80'
                      : 'bg-muted/70 text-sub hover:bg-muted hover:text-ink border border-line/60',
                  )}
                  title={`${itemLabel} ${idx + 1}`}
                >
                  <span>{idx + 1}</span>
                  {isDone && <Check className="h-3 w-3 stroke-[2.5]" />}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setShowPickerModal(true)}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-muted px-2.5 py-1.5 text-xs font-bold text-sub hover:bg-accent-soft hover:text-accent transition cursor-pointer border border-line"
            title={`Xem danh sách tất cả các ${itemLabel.toLowerCase()}`}
          >
            <ListFilter className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Chọn {itemLabel.toLowerCase()}</span>
          </button>
        </div>

        <Card className="py-10 text-center space-y-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-ok-soft text-ok shadow-sm">
            <CheckCircle2 size={40} className="text-ok" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">Xong nấc này! 🎉</h3>
            <p className="mt-1 text-base text-sub">
              Bạn đã hoàn thành tự đánh giá cả {items.length} {itemLabel.toLowerCase()}.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            {next && (
              <Button variant="cta" size="lg" onClick={next.go}>
                {next.label} →
              </Button>
            )}
            <Button
              variant="primary"
              size="lg"
              onClick={() => goTo(0)}
              className="flex items-center gap-1.5"
            >
              <RotateCcw size={16} /> Xem lại từ {itemLabel.toLowerCase()} 1
            </Button>
            <Button
              variant="default"
              size="lg"
              onClick={restart}
              className="flex items-center gap-1.5"
            >
              <RotateCcw size={16} /> Luyện lại từ đầu
            </Button>
          </div>
        </Card>

        {showPickerModal && renderPickerModal()}
      </div>
    )
  }

  const needsReveal = !!reveal && !revealed

  return (
    <div className="space-y-3">
      {/* 1. Header with Progress and Position */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-medium text-sub">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-ink text-sm sm:text-base">
            {itemLabel} <span className="text-accent">{safeIndex + 1}</span> / {items.length}
          </span>
          {isCurrentDone ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-ok-soft px-2.5 py-0.5 text-xs font-bold text-ok border border-ok/30">
              <Check className="h-3 w-3 stroke-[2.5]" /> Đã nghe ra
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-sub border border-line">
              Chưa nghe ra
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span>
            Đã nghe ra: <strong className="text-ok font-bold">{done}</strong>/{items.length}
            <span className="opacity-75 ml-1">({Math.round((done / items.length) * 100)}%)</span>
          </span>
        </div>
      </div>
      <ProgressBar value={done / items.length} className="w-full" />

      {/* 2. Interactive Navigation Filmstrip (1 ... 28) */}
      <div className="flex items-center gap-1.5 sm:gap-2 rounded-2xl border border-line bg-surface p-1.5 sm:p-2 shadow-2xs">
        <button
          type="button"
          onClick={prev}
          disabled={currentIndex === 0}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sub hover:bg-muted hover:text-ink disabled:opacity-25 disabled:pointer-events-none transition cursor-pointer"
          title="Về phần trước (← hoặc mũi tên trái)"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div
          ref={pillContainerRef}
          className="flex flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {items.map((it, idx) => {
            const isDone = Boolean(marks[keyOf(it)])
            const isActive = idx === safeIndex
            return (
              <button
                key={idx}
                ref={isActive ? activePillRef : null}
                type="button"
                onClick={() => goTo(idx)}
                className={cx(
                  'inline-flex shrink-0 items-center justify-center gap-1 rounded-xl px-2.5 py-1 text-xs font-bold transition cursor-pointer select-none',
                  isActive
                    ? 'bg-accent text-white shadow-sm ring-2 ring-accent/30 scale-105 z-10'
                    : isDone
                    ? 'bg-ok-soft text-ok border border-ok/30 hover:bg-ok-soft/80'
                    : 'bg-muted/70 text-sub hover:bg-muted hover:text-ink border border-line/60',
                )}
                title={`${itemLabel} ${idx + 1}${isDone ? ' (Đã nghe ra)' : ''}`}
              >
                <span>{idx + 1}</span>
                {isDone && <Check className="h-3 w-3 stroke-[2.5]" />}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={nextCard}
          disabled={currentIndex >= items.length - 1}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sub hover:bg-muted hover:text-ink disabled:opacity-25 disabled:pointer-events-none transition cursor-pointer"
          title="Sang phần tiếp theo (→ hoặc mũi tên phải)"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => setShowPickerModal(true)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-muted px-2.5 py-1.5 text-xs font-bold text-sub hover:bg-accent-soft hover:text-accent transition cursor-pointer border border-line"
          title={`Mở danh sách tất cả các ${itemLabel.toLowerCase()} để chọn nhanh`}
        >
          <ListFilter className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Chọn {itemLabel.toLowerCase()}</span>
        </button>
      </div>

      {/* 3. Main Practice Card */}
      <Card className="flex min-h-[18rem] flex-col justify-center text-center sm:min-h-[20rem]">
        {cur ? render(cur, revealed) : null}
      </Card>

      {/* 4. Action Buttons */}
      <div className="space-y-2">
        {needsReveal ? (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3">
            <Button
              variant="default"
              size="lg"
              onClick={prev}
              disabled={currentIndex === 0}
              className="order-2 sm:order-1 sm:col-span-1 flex items-center justify-center gap-1.5"
              title="Quay lại câu trước (←)"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Trước</span>
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="order-1 sm:order-2 sm:col-span-2 font-bold"
              onClick={show}
            >
              {revealLabel}
            </Button>
            <Button
              variant="default"
              size="lg"
              onClick={nextCard}
              disabled={currentIndex >= items.length - 1}
              className="order-3 sm:order-3 sm:col-span-1 flex items-center justify-center gap-1.5"
              title="Sang câu tiếp theo (→)"
            >
              <span>Tiếp</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3">
              <Button size="lg" onClick={again} className="flex items-center justify-center gap-1.5">
                <RotateCcw size={18} /> {againLabel}
              </Button>
              <Button variant="ok" size="lg" className="!bg-ok !text-white flex items-center justify-center gap-1.5" onClick={ok}>
                <CheckCircle2 size={18} /> {okLabel}
              </Button>
            </div>
            <div className="flex items-center justify-between text-xs text-sub px-1 pt-0.5">
              <button
                type="button"
                onClick={prev}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-1 hover:text-accent disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer font-medium"
              >
                <ChevronLeft className="h-3.5 w-3.5" /> {itemLabel} trước (←)
              </button>
              <button
                type="button"
                onClick={nextCard}
                disabled={currentIndex >= items.length - 1}
                className="inline-flex items-center gap-1 hover:text-accent disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer font-medium"
              >
                {itemLabel} tiếp (→) <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="hidden text-center text-xs text-sub sm:block">
        Phím tắt: <kbd className="rounded bg-muted px-1.5">Space</kbd> nghe lại ·{' '}
        <kbd className="rounded bg-muted px-1.5">Enter</kbd>{' '}
        {needsReveal ? revealLabel.toLowerCase() : okLabel.toLowerCase()} ·{' '}
        <kbd className="rounded bg-muted px-1.5">←</kbd> câu trước ·{' '}
        <kbd className="rounded bg-muted px-1.5">→</kbd> câu tiếp
      </p>

      {/* 5. Jump Modal */}
      {showPickerModal && renderPickerModal()}
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
