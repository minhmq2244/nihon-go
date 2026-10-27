// Quizlet-style study modes shared by the vocab and kanji tabs.
import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronLeft, ChevronRight, RotateCcw, RotateCw, Shuffle, Trophy } from 'lucide-react'
import type { Card as StudyCard } from '../lib/questions'
import { meaningMC } from '../lib/questions'
import { sample, shuffle } from '../lib/data'
import { speak } from '../lib/speech'
import { useProgress } from '../store/progress'
import { DrillItem, type Question } from './Drill'
import { Jp } from './Jp'
import { Button, Chip, ProgressBar, SpeakButton, cx } from './ui'

export function Flashcards({ cards, big }: { cards: StudyCard[]; big?: boolean }) {
  const { items, markItem, resetItems } = useProgress()
  const [order, setOrder] = useState(cards)
  const [i, setI] = useState(0)
  const [flip, setFlip] = useState(false)
  const [jpFront, setJpFront] = useState(true)
  const [onlyUnknown, setOnlyUnknown] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null)
  const [finished, setFinished] = useState(false)

  // Drag / swipe gesture state for finger on mobile and mouse on desktop
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState<'left' | 'right' | null>(null)

  const touchStartRef = useRef<{ x: number; y: number; time: number; lock: 'h' | 'v' | null } | null>(null)
  const isMouseDownRef = useRef(false)
  const mouseStartRef = useRef<{ x: number; time: number } | null>(null)
  const didDragRef = useRef(false)

  useEffect(() => {
    setOrder(cards)
    setI(0)
    setFlip(false)
    setDirection(null)
    setDragOffset(0)
    setIsAnimatingOut(null)
    setFinished(false)
  }, [cards])

  const known = (c: StudyCard) => (items[`${c.id}:card`]?.ok ?? 0) > (items[`${c.id}:card`]?.bad ?? 0)
  const list = useMemo(() => (onlyUnknown ? order.filter((c) => !known(c)) : order), [order, onlyUnknown, items])
  const c = list[Math.min(i, Math.max(0, list.length - 1))]
  const isKnown = c ? known(c) : false

  useEffect(() => {
    setI(0)
    setFlip(false)
    setDirection(null)
    setDragOffset(0)
    setIsAnimatingOut(null)
    setFinished(false)
  }, [onlyUnknown, order])

  const go = (d: number) => {
    if (d > 0 && i >= list.length - 1) {
      setFinished(true)
      return
    }
    const nextI = Math.max(0, Math.min(list.length - 1, i + d))
    if (nextI === i) return
    setDirection(d > 0 ? 'next' : 'prev')
    setFlip(false)
    setI(nextI)
  }

  const handleMark = (isOk: boolean) => {
    if (!c) return
    markItem(`${c.id}:card`, isOk)
    if (i < list.length - 1) {
      go(1)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = (shuffleDeck = false) => {
    if (shuffleDeck) setOrder(shuffle(cards))
    setI(0)
    setFlip(false)
    setDirection(null)
    setDragOffset(0)
    setIsAnimatingOut(null)
    setFinished(false)
  }

  const handleResetProgress = () => {
    const ids = cards.map((item) => `${item.id}:card`)
    resetItems(ids)
    setI(0)
    setFlip(false)
    setDirection(null)
    setDragOffset(0)
    setIsAnimatingOut(null)
    setFinished(false)
  }

  // Touch handlers for mobile fingers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimatingOut || finished) return
    const touch = e.touches[0]
    if (!touch) return
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
      lock: null,
    }
    didDragRef.current = false
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || isAnimatingOut || finished) return
    const touch = e.touches[0]
    if (!touch) return
    const dx = touch.clientX - touchStartRef.current.x
    const dy = touch.clientY - touchStartRef.current.y

    if (!touchStartRef.current.lock) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 7) {
        touchStartRef.current.lock = 'v'
        return
      }
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 7) {
        touchStartRef.current.lock = 'h'
        setIsDragging(true)
        didDragRef.current = true
      }
    }

    if (touchStartRef.current.lock === 'h') {
      let offset = dx
      const atStart = i === 0 && dx > 0
      const atEnd = i >= list.length - 1 && dx < 0
      if (atStart || atEnd) {
        offset = dx * 0.25
      }
      setDragOffset(offset)
    }
  }

  const handleTouchEnd = () => {
    if (!touchStartRef.current || finished) return
    const lock = touchStartRef.current.lock
    const startTime = touchStartRef.current.time
    const elapsed = Date.now() - startTime
    const velocity = Math.abs(dragOffset) / Math.max(elapsed, 1)

    touchStartRef.current = null
    setIsDragging(false)

    if (lock === 'h') {
      const SWIPE_THRESHOLD = 50
      const VELOCITY_THRESHOLD = 0.25

      const swipedLeft = dragOffset < -SWIPE_THRESHOLD || (dragOffset < -20 && velocity > VELOCITY_THRESHOLD)
      const swipedRight = dragOffset > SWIPE_THRESHOLD || (dragOffset > 20 && velocity > VELOCITY_THRESHOLD)

      if (swipedLeft) {
        if (i < list.length - 1) {
          setIsAnimatingOut('left')
          setTimeout(() => {
            setDragOffset(0)
            setIsAnimatingOut(null)
            go(1)
          }, 180)
          return
        } else {
          setIsAnimatingOut('left')
          setTimeout(() => {
            setDragOffset(0)
            setIsAnimatingOut(null)
            setFinished(true)
          }, 180)
          return
        }
      } else if (swipedRight && i > 0) {
        setIsAnimatingOut('right')
        setTimeout(() => {
          setDragOffset(0)
          setIsAnimatingOut(null)
          go(-1)
        }, 180)
        return
      }
    }

    setDragOffset(0)
  }

  // Mouse handlers for desktop dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || isAnimatingOut || finished) return
    isMouseDownRef.current = true
    mouseStartRef.current = { x: e.clientX, time: Date.now() }
    didDragRef.current = false

    const onMouseMove = (moveEv: MouseEvent) => {
      if (!isMouseDownRef.current || !mouseStartRef.current) return
      const dx = moveEv.clientX - mouseStartRef.current.x
      if (Math.abs(dx) > 6) {
        didDragRef.current = true
        setIsDragging(true)
        let offset = dx
        const atStart = i === 0 && dx > 0
        const atEnd = i >= list.length - 1 && dx < 0
        if (atStart || atEnd) {
          offset = dx * 0.25
        }
        setDragOffset(offset)
      }
    }

    const onMouseUp = (upEv: MouseEvent) => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      if (!isMouseDownRef.current) return
      isMouseDownRef.current = false
      setIsDragging(false)
      if (!mouseStartRef.current) return

      const elapsed = Date.now() - mouseStartRef.current.time
      const dx = upEv.clientX - mouseStartRef.current.x
      const velocity = Math.abs(dx) / Math.max(elapsed, 1)
      mouseStartRef.current = null

      const SWIPE_THRESHOLD = 50
      const VELOCITY_THRESHOLD = 0.25

      const swipedLeft = dx < -SWIPE_THRESHOLD || (dx < -20 && velocity > VELOCITY_THRESHOLD)
      const swipedRight = dx > SWIPE_THRESHOLD || (dx > 20 && velocity > VELOCITY_THRESHOLD)

      if (swipedLeft) {
        if (i < list.length - 1) {
          setIsAnimatingOut('left')
          setTimeout(() => {
            setDragOffset(0)
            setIsAnimatingOut(null)
            go(1)
          }, 180)
          return
        } else {
          setIsAnimatingOut('left')
          setTimeout(() => {
            setDragOffset(0)
            setIsAnimatingOut(null)
            setFinished(true)
          }, 180)
          return
        }
      } else if (swipedRight && i > 0) {
        setIsAnimatingOut('right')
        setTimeout(() => {
          setDragOffset(0)
          setIsAnimatingOut(null)
          go(-1)
        }, 180)
        return
      }

      setDragOffset(0)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  const handleCardClick = () => {
    if (didDragRef.current) {
      didDragRef.current = false
      return
    }
    setFlip((f) => !f)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') return
      if (finished) {
        if (e.key === ' ' || e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault()
          handleRestart(false)
        }
        return
      }
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        setFlip((f) => !f)
      } else if (e.key === 'ArrowRight') {
        go(1)
      } else if (e.key === 'ArrowLeft') {
        go(-1)
      } else if (e.key === 'ArrowDown' || e.key === '1') {
        handleMark(false)
      } else if (e.key === 'ArrowUp' || e.key === '2') {
        handleMark(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [i, list.length, c, finished])

  const knownCount = cards.filter(known).length

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Chip
          active={jpFront}
          onClick={() => {
            setJpFront(true)
            setFlip(false)
          }}
        >
          Mặt trước: Nhật
        </Chip>
        <Chip
          active={!jpFront}
          onClick={() => {
            setJpFront(false)
            setFlip(false)
          }}
        >
          Mặt trước: Việt
        </Chip>
        <Chip active={onlyUnknown} onClick={() => setOnlyUnknown(!onlyUnknown)}>
          Chỉ thẻ chưa thuộc ({cards.length - knownCount})
        </Chip>
        <Button
          size="sm"
          onClick={() => {
            setOrder(shuffle(cards))
            setI(0)
            setFlip(false)
            setDirection(null)
            setFinished(false)
          }}
          className="flex items-center gap-1.5"
          title="Trộn ngẫu nhiên thứ tự thẻ"
        >
          <Shuffle className="h-4 w-4" />
          <span>Trộn thẻ</span>
        </Button>
        <Button
          size="sm"
          onClick={() => handleRestart(false)}
          className="flex items-center gap-1.5"
          title="Học lại từ thẻ đầu tiên"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Học lại</span>
        </Button>
        <span className="ml-auto text-sm font-medium text-sub">
          Đã thuộc <span className="font-semibold text-ok">{knownCount}</span>/{cards.length}
        </span>
      </div>

      {finished ? (
        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-10 text-center shadow-sm space-y-6">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-accent-soft text-accent shadow-sm">
            <Trophy className="h-10 w-10 text-accent animate-bounce" />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Hoàn thành phiên học thẻ! 🎉
            </h3>
            <p className="text-sm sm:text-base text-sub">
              Bạn đã xem và ôn tập xong toàn bộ {cards.length} thẻ ghi nhớ.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mx-auto grid max-w-md grid-cols-2 gap-3 sm:gap-4 text-left">
            <div className="rounded-2xl border border-ok/20 bg-ok-soft/50 p-4">
              <div className="flex items-center gap-2 text-ok">
                <Check className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Đã thuộc</span>
              </div>
              <p className="mt-1 text-2xl sm:text-3xl font-extrabold text-ok">
                {knownCount} <span className="text-sm font-medium opacity-75">/ {cards.length}</span>
              </p>
              <p className="text-xs text-ok/80 mt-0.5">
                {Math.round((knownCount / cards.length) * 100)}% hoàn thành
              </p>
            </div>

            <div className="rounded-2xl border border-bad/20 bg-bad-soft/50 p-4">
              <div className="flex items-center gap-2 text-bad">
                <RotateCw className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Chưa thuộc</span>
              </div>
              <p className="mt-1 text-2xl sm:text-3xl font-extrabold text-bad">
                {cards.length - knownCount} <span className="text-sm font-medium opacity-75">/ {cards.length}</span>
              </p>
              <p className="text-xs text-bad/80 mt-0.5">
                {cards.length - knownCount === 0 ? 'Xuất sắc!' : 'Cần ôn thêm'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mx-auto flex max-w-lg flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleRestart(false)}
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Học lại từ đầu</span>
            </Button>

            <Button
              variant="default"
              size="md"
              onClick={() => handleRestart(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Shuffle className="h-4 w-4" />
              <span>Trộn & học lại</span>
            </Button>

            {cards.length - knownCount > 0 && (
              <Button
                variant="default"
                size="md"
                onClick={() => {
                  setOnlyUnknown(true)
                  handleRestart(false)
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-accent border-accent/40 bg-accent-soft/30 hover:bg-accent-soft"
              >
                <RotateCw className="h-4 w-4" />
                <span>Chỉ ôn {cards.length - knownCount} thẻ chưa thuộc</span>
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={handleResetProgress}
              className="w-full sm:w-auto text-sub hover:text-bad flex items-center justify-center gap-1.5 text-xs mt-2"
              title="Đặt lại toàn bộ trạng thái đã thuộc / chưa thuộc của bộ thẻ này"
            >
              <span>Đặt lại toàn bộ tiến độ</span>
            </Button>
          </div>
        </div>
      ) : !c ? (
        <div className="py-12 text-center space-y-4">
          <p className="text-4xl">🎉</p>
          <p className="text-xl font-bold text-ink">Bạn đã thuộc hết tất cả các thẻ!</p>
          <p className="text-sm text-sub">Hãy tiếp tục phát huy hoặc đặt lại tiến độ để bắt đầu ôn lại.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <Button
              variant="primary"
              onClick={() => {
                setOnlyUnknown(false)
                handleRestart(false)
              }}
            >
              Xem lại tất cả {cards.length} thẻ
            </Button>
            <Button
              variant="default"
              onClick={handleResetProgress}
              className="flex items-center gap-1.5"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Đặt lại tiến độ & học lại</span>
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Card Viewport with 3D perspective and touch swipe container */}
          <div className="quizlet-perspective relative w-full overflow-hidden py-1">
            {/* Interactive draggable wrapper */}
            <div
              key={`${c.id}-${direction}`}
              className={cx(
                'quizlet-drag-container relative w-full select-none',
                !isDragging && !isAnimatingOut && direction === 'next' && 'quizlet-slide-next',
                !isDragging && !isAnimatingOut && direction === 'prev' && 'quizlet-slide-prev',
              )}
              style={{
                transform:
                  isAnimatingOut === 'left'
                    ? 'translateX(-120%) rotate(-10deg)'
                    : isAnimatingOut === 'right'
                    ? 'translateX(120%) rotate(10deg)'
                    : dragOffset !== 0
                    ? `translateX(${dragOffset}px) rotate(${dragOffset * 0.04}deg)`
                    : undefined,
                transition: isDragging
                  ? 'none'
                  : isAnimatingOut
                  ? 'transform 0.2s cubic-bezier(0.2, 0.8, 0.25, 1), opacity 0.2s ease'
                  : 'transform 0.32s cubic-bezier(0.2, 0.8, 0.25, 1)',
                opacity: isAnimatingOut ? 0 : 1,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onClick={handleCardClick}
              role="button"
              tabIndex={0}
              aria-label="Lật thẻ hoặc vuốt sang để chuyển thẻ"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setFlip(!flip)
                }
              }}
            >
              {/* Floating Swipe Direction Indicators */}
              {dragOffset < -25 && (
                <div
                  className="pointer-events-none absolute right-4 top-1/2 z-30 flex -translate-y-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-opacity"
                  style={{ opacity: Math.min(1, (Math.abs(dragOffset) - 25) / 45) }}
                >
                  <span>Thẻ tiếp</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              )}
              {dragOffset > 25 && (
                <div
                  className="pointer-events-none absolute left-4 top-1/2 z-30 flex -translate-y-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-opacity"
                  style={{ opacity: Math.min(1, (Math.abs(dragOffset) - 25) / 45) }}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Thẻ trước</span>
                </div>
              )}

              {/* 3D Flipping Card */}
              <div className={cx('quizlet-card-inner', flip && 'is-flipped')}>
                {/* Mặt trước (Front Face - rotateY 0deg) */}
                <div className="quizlet-card-face quizlet-card-face-front">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-line/50 px-5 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-sub">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        {jpFront ? 'Tiếng Nhật' : 'Tiếng Việt'}
                      </span>
                      {isKnown && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-ok-soft px-2.5 py-0.5 text-xs font-semibold text-ok border border-ok/20">
                          <Check className="h-3 w-3" /> Đã thuộc
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
                        <SpeakButton
                          text={c.speak}
                          className="h-8 w-8 bg-muted text-sub hover:bg-accent-soft hover:text-accent transition"
                          label="Nghe phát âm"
                        />
                      </div>
                      <button
                        type="button"
                        title="Lật thẻ"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sub hover:bg-muted hover:text-accent transition cursor-pointer"
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation()
                          setFlip((f) => !f)
                        }}
                      >
                        <RotateCw className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Center Content */}
                  <div className="flex flex-1 flex-col items-center justify-center p-6 sm:p-8 text-center overflow-y-auto">
                    {jpFront ? (
                      <span className={cx('font-bold tracking-tight text-ink', big && !c.front.includes('（') && c.front.length <= 2 ? 'text-7xl sm:text-8xl' : 'text-4xl sm:text-6xl')}>
                        <Jp text={c.front} />
                      </span>
                    ) : (
                      <div className="max-w-xl space-y-2">
                        <p className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">{c.back}</p>
                      </div>
                    )}
                  </div>

                  {/* Footer Hint */}
                  <div className="flex items-center justify-between border-t border-line/40 px-5 py-2.5 sm:px-6 text-xs font-medium text-sub/70">
                    <span className="flex items-center gap-1.5">
                      <RotateCw className="h-3.5 w-3.5 text-accent" />
                      <span>Vuốt ngang để đổi thẻ · Bấm để lật</span>
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-sub border border-line">
                      Phím cách [Space]
                    </span>
                  </div>
                </div>

                {/* Mặt sau (Back Face - rotateY 180deg) */}
                <div className="quizlet-card-face quizlet-card-face-back">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-line/50 px-5 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-sub">
                        <span className="h-2 w-2 rounded-full bg-ok" />
                        {jpFront ? 'Ý nghĩa & Ví dụ' : 'Tiếng Nhật'}
                      </span>
                      {isKnown && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-ok-soft px-2.5 py-0.5 text-xs font-semibold text-ok border border-ok/20">
                          <Check className="h-3 w-3" /> Đã thuộc
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
                        <SpeakButton
                          text={c.speak}
                          className="h-8 w-8 bg-muted text-sub hover:bg-accent-soft hover:text-accent transition"
                          label="Nghe phát âm"
                        />
                      </div>
                      <button
                        type="button"
                        title="Lật thẻ"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sub hover:bg-muted hover:text-accent transition cursor-pointer"
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation()
                          setFlip((f) => !f)
                        }}
                      >
                        <RotateCw className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Center Content */}
                  <div className="flex flex-1 flex-col items-center justify-center p-6 sm:p-8 text-center overflow-y-auto">
                    {jpFront ? (
                      <div className="w-full max-w-xl space-y-4">
                        <p className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">{c.back}</p>
                        {c.extra && (
                          <div className="rounded-2xl border border-line bg-muted/50 p-4 text-left text-base sm:text-lg font-medium">
                            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1.5">
                              {c.extra.startsWith('Chữ Hán:')
                                ? 'Thông tin Kanji'
                                : c.extra.startsWith('Âm')
                                ? 'Âm On/Kun & Từ ghép'
                                : 'Ví dụ & Ngữ cảnh'}
                            </p>
                            <div className="whitespace-pre-line text-ink leading-relaxed">
                              <Jp text={c.extra} />
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-full max-w-xl space-y-4">
                        <span className={cx('font-bold tracking-tight text-ink block', big && !c.front.includes('（') && c.front.length <= 2 ? 'text-7xl sm:text-8xl' : 'text-4xl sm:text-6xl')}>
                          <Jp text={c.front} />
                        </span>
                        {c.extra && (
                          <div className="rounded-2xl border border-line bg-muted/50 p-4 text-left text-base sm:text-lg font-medium">
                            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1.5">
                              {c.extra.startsWith('Chữ Hán:') ? 'Thông tin Kanji' : 'Ghi chú & Ngữ cảnh'}
                            </p>
                            <div className="whitespace-pre-line text-ink leading-relaxed">
                              <Jp text={c.extra} />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Footer Hint */}
                  <div className="flex items-center justify-between border-t border-line/40 px-5 py-2.5 sm:px-6 text-xs font-medium text-sub/70">
                    <span className="flex items-center gap-1.5">
                      <RotateCw className="h-3.5 w-3.5 text-accent" />
                      <span>Vuốt ngang để đổi thẻ · Bấm để lật</span>
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-sub border border-line">
                      Phím cách [Space]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Controls Bar */}
          <div className="space-y-3 pt-1">
            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-medium text-sub">
                <span>Tiến trình</span>
                <span className="font-semibold text-ink">
                  {Math.min(i, list.length - 1) + 1} / {list.length} thẻ
                </span>
              </div>
              <ProgressBar value={(Math.min(i, list.length - 1) + 1) / list.length} />
            </div>

            {/* Navigation & Status Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => go(-1)}
                  disabled={i === 0}
                  aria-label="Thẻ trước"
                  className="px-4"
                  title="Thẻ trước (←)"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <span className="min-w-20 text-center font-mono text-sm font-semibold text-ink">
                  {Math.min(i, list.length - 1) + 1} / {list.length}
                </span>
                <Button
                  onClick={() => go(1)}
                  aria-label={i >= list.length - 1 ? 'Hoàn thành' : 'Thẻ tiếp theo'}
                  className="px-4"
                  title={i >= list.length - 1 ? 'Hoàn thành phiên học' : 'Thẻ tiếp theo (→)'}
                >
                  {i >= list.length - 1 ? (
                    <span className="text-xs font-bold text-accent">Xong</span>
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </Button>
                <SpeakButton text={c.speak} className="h-10 w-10 border border-line bg-surface" />
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="bad"
                  onClick={() => handleMark(false)}
                  className="flex items-center gap-1.5"
                  title="Đánh dấu chưa thuộc (↓ hoặc phím 1)"
                >
                  <span>Chưa thuộc</span>
                  <span className="hidden text-xs opacity-75 sm:inline">(↓)</span>
                </Button>
                <Button
                  variant="ok"
                  onClick={() => handleMark(true)}
                  className="flex items-center gap-1.5"
                  title="Đánh dấu đã thuộc (↑ hoặc phím 2)"
                >
                  <Check className="h-4 w-4" />
                  <span>Thuộc rồi</span>
                  <span className="hidden text-xs opacity-75 sm:inline">(↑)</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


/**
 * Learn: every card must be answered right twice (multiple choice, then typing).
 * Wrong answers send the card back into the queue a few positions later.
 */
export function Learn({ cards, typing, setId }: { cards: StudyCard[]; typing: (c: StudyCard) => Question | null; setId: string }) {
  const saveSet = useProgress((s) => s.saveSet)
  const markItem = useProgress((s) => s.markItem)
  const init = () => shuffle(cards).map((c) => ({ c, stage: 0 }))
  const [queue, setQueue] = useState(init)
  const [stats, setStats] = useState({ ok: 0, bad: 0 })
  const [answered, setAnswered] = useState<boolean | null>(null)
  const mastered = cards.length - new Set(queue.map((q) => q.c.id)).size
  const cur = queue[0]

  const question = useMemo<Question | null>(() => {
    if (!cur) return null
    if (cur.stage === 1) return typing(cur.c) ?? meaningMC(cards, cur.c, 'learn2')
    return meaningMC(cards, cur.c, 'learn')
  }, [cur, cards, typing])

  useEffect(() => {
    if (!cur) saveSet(setId, cards.length, cards.length)
  }, [cur, setId, cards.length, saveSet])

  if (!cur || !question)
    return (
      <div className="py-8 text-center">
        <p className="text-3xl font-bold">Hoàn thành!</p>
        <p className="mt-1 text-sub">
          {cards.length} thẻ · trả lời đúng {stats.ok}, sai {stats.bad}
        </p>
        <Button
          className="mt-4"
          variant="primary"
          onClick={() => {
            setQueue(init())
            setStats({ ok: 0, bad: 0 })
          }}
        >
          Học lại
        </Button>
      </div>
    )

  const next = () => {
    const [head, ...rest] = queue
    if (answered) {
      setQueue(head!.stage === 0 ? [...rest.slice(0, 2), { c: head!.c, stage: 1 }, ...rest.slice(2)] : rest)
    } else {
      setQueue([...rest.slice(0, 3), { ...head!, stage: 0 }, ...rest.slice(3)])
    }
    setAnswered(null)
  }

  return (
    <div onKeyDown={(e) => e.key === 'Enter' && answered !== null && !(e.nativeEvent as KeyboardEvent).isComposing && next()}>
      <div className="mb-4 flex items-center gap-3 text-sm text-sub">
        <span>
          Thuộc {mastered}/{cards.length}
        </span>
        <ProgressBar value={mastered / cards.length} className="flex-1" />
        <span>{cur.stage === 0 ? 'Trắc nghiệm' : 'Tự gõ'}</span>
      </div>
      <DrillItem
        key={question.id + queue.length}
        d={question}
        onAnswered={(ok) => {
          setAnswered(ok)
          markItem(cur.c.id + ':learn', ok)
          setStats((s) => ({ ok: s.ok + (ok ? 1 : 0), bad: s.bad + (ok ? 0 : 1) }))
        }}
      />
      {answered !== null && (
        <div className="mt-4 flex justify-end">
          <Button variant="primary" autoFocus onClick={next}>
            Tiếp →
          </Button>
        </div>
      )}
    </div>
  )
}

/** Match: pair 6 fronts with their backs as fast as possible; a wrong pair adds 1 second. */
export function Match({ cards, setId }: { cards: StudyCard[]; setId: string }) {
  const best = useProgress((s) => s.times[setId])
  const saveTime = useProgress((s) => s.saveTime)
  const saveSet = useProgress((s) => s.saveSet)
  const [round, setRound] = useState(0)
  const tiles = useMemo(() => {
    const picked = sample(cards, Math.min(6, cards.length))
    return shuffle(picked.flatMap((c) => [{ key: c.id + 'f', id: c.id, text: c.front, jp: true }, { key: c.id + 'b', id: c.id, text: c.back, jp: false }]))
  }, [cards, round])
  const [gone, setGone] = useState<Set<string>>(new Set())
  const [sel, setSel] = useState<string | null>(null)
  const [wrong, setWrong] = useState<string[]>([])
  const [penalty, setPenalty] = useState(0)
  const [start, setStart] = useState<number | null>(null)
  const [now, setNow] = useState(Date.now())
  const [end, setEnd] = useState<number | null>(null)
  const timer = useRef<ReturnType<typeof setInterval>>(undefined)

  useEffect(() => {
    setGone(new Set())
    setSel(null)
    setPenalty(0)
    setStart(null)
    setEnd(null)
  }, [tiles])

  useEffect(() => {
    if (start && !end) {
      timer.current = setInterval(() => setNow(Date.now()), 100)
      return () => clearInterval(timer.current)
    }
  }, [start, end])

  const elapsed = start ? ((end ?? now) - start + penalty * 1000) / 1000 : 0

  const click = (t: (typeof tiles)[number]) => {
    if (gone.has(t.key) || end) return
    if (!start) setStart(Date.now())
    if (t.jp) void speak(t.text)
    if (!sel) return setSel(t.key)
    if (sel === t.key) return setSel(null)
    const a = tiles.find((x) => x.key === sel)!
    if (a.id === t.id) {
      const g = new Set(gone).add(a.key).add(t.key)
      setGone(g)
      setSel(null)
      if (g.size === tiles.length) {
        const e = Date.now()
        setEnd(e)
        const ms = e - (start ?? e) + penalty * 1000
        saveTime(setId, ms)
        saveSet(setId, 1, 1)
      }
    } else {
      setPenalty((p) => p + 1)
      setWrong([a.key, t.key])
      setSel(null)
      setTimeout(() => setWrong([]), 400)
    }
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="text-sub">Ghép từ với nghĩa. Chọn sai +1 giây.</span>
        <span className="font-mono text-lg">{elapsed.toFixed(1)}s</span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {tiles.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => click(t)}
            className={cx(
              'min-h-20 rounded-xl border p-3 text-center transition',
              gone.has(t.key) && 'pointer-events-none opacity-0',
              sel === t.key && 'border-accent bg-accent-soft',
              wrong.includes(t.key) && 'border-bad bg-bad-soft',
              !gone.has(t.key) && sel !== t.key && !wrong.includes(t.key) && 'border-line bg-surface hover:border-accent',
            )}
          >
            {t.jp ? <Jp text={t.text} className="text-xl" /> : <span className="text-sm">{t.text}</span>}
          </button>
        ))}
      </div>
      {end && (
        <div className="mt-4 text-center">
          <p className="text-2xl font-bold">{elapsed.toFixed(1)} giây</p>
          {best !== undefined && <p className="text-sub">Kỷ lục: {(best / 1000).toFixed(1)} giây</p>}
          <Button className="mt-3" variant="primary" onClick={() => setRound((r) => r + 1)}>
            Chơi lại
          </Button>
        </div>
      )}
    </div>
  )
}
