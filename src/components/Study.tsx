// Quizlet-style study modes shared by the vocab and kanji tabs.
import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronLeft, ChevronRight, RotateCw, Shuffle } from 'lucide-react'
import type { Card as StudyCard } from '../lib/questions'
import { meaningMC } from '../lib/questions'
import { sample, shuffle } from '../lib/data'
import { speak } from '../lib/speech'
import { useProgress } from '../store/progress'
import { DrillItem, type Question } from './Drill'
import { Jp } from './Jp'
import { Button, Chip, ProgressBar, SpeakButton, cx } from './ui'

export function Flashcards({ cards, big }: { cards: StudyCard[]; big?: boolean }) {
  const { items, markItem } = useProgress()
  const [order, setOrder] = useState(cards)
  const [i, setI] = useState(0)
  const [flip, setFlip] = useState(false)
  const [jpFront, setJpFront] = useState(true)
  const [onlyUnknown, setOnlyUnknown] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null)

  useEffect(() => {
    setOrder(cards)
    setI(0)
    setFlip(false)
    setDirection(null)
  }, [cards])

  const known = (c: StudyCard) => (items[`${c.id}:card`]?.ok ?? 0) > (items[`${c.id}:card`]?.bad ?? 0)
  const list = useMemo(() => (onlyUnknown ? order.filter((c) => !known(c)) : order), [order, onlyUnknown, items])
  const c = list[Math.min(i, Math.max(0, list.length - 1))]
  const isKnown = c ? known(c) : false

  useEffect(() => {
    setI(0)
    setFlip(false)
    setDirection(null)
  }, [onlyUnknown, order])

  const go = (d: number) => {
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
      setFlip(false)
    }
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') return
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
  }, [i, list.length, c])

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
          }}
          className="flex items-center gap-1.5"
        >
          <Shuffle className="h-4 w-4" />
          <span>Trộn thẻ</span>
        </Button>
        <span className="ml-auto text-sm font-medium text-sub">
          Đã thuộc <span className="font-semibold text-ok">{knownCount}</span>/{cards.length}
        </span>
      </div>

      {!c ? (
        <div className="py-12 text-center space-y-3">
          <p className="text-4xl">🎉</p>
          <p className="text-xl font-bold text-ink">Bạn đã thuộc hết tất cả các thẻ!</p>
          <p className="text-sm text-sub">Hãy tiếp tục phát huy hoặc tắt bộ lọc để ôn lại toàn bộ thẻ.</p>
          {onlyUnknown && (
            <Button variant="primary" onClick={() => setOnlyUnknown(false)} className="mt-2">
              Xem lại tất cả {cards.length} thẻ
            </Button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Card Viewport with 3D perspective and directional slide */}
          <div
            key={`${c.id}-${direction}`}
            className={cx(
              'quizlet-perspective w-full cursor-pointer select-none',
              direction === 'next' && 'quizlet-slide-next',
              direction === 'prev' && 'quizlet-slide-prev',
            )}
            onClick={() => setFlip(!flip)}
            role="button"
            tabIndex={0}
            aria-label="Lật thẻ ghi nhớ"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setFlip(!flip)
              }
            }}
          >
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
                    <SpeakButton
                      text={c.speak}
                      className="h-8 w-8 bg-muted text-sub hover:bg-accent-soft hover:text-accent transition"
                      label="Nghe phát âm"
                    />
                    <span
                      title="Lật thẻ"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sub hover:bg-muted hover:text-accent transition"
                    >
                      <RotateCw className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Center Content */}
                <div className="flex flex-1 flex-col items-center justify-center p-6 sm:p-8 text-center overflow-y-auto">
                  {jpFront ? (
                    <span className={cx('font-bold tracking-tight text-ink', big ? 'text-7xl sm:text-8xl' : 'text-4xl sm:text-6xl')}>
                      <Jp text={c.front} />
                    </span>
                  ) : (
                    <div className="max-w-xl space-y-2">
                      <p className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">{c.back}</p>
                      {c.extra && (
                        <p className="mt-2 whitespace-pre-line text-base text-sub font-medium">
                          <Jp text={c.extra} />
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer Hint */}
                <div className="flex items-center justify-between border-t border-line/40 px-5 py-2.5 sm:px-6 text-xs font-medium text-sub/70">
                  <span className="flex items-center gap-1.5">
                    <RotateCw className="h-3.5 w-3.5 text-accent" />
                    <span>Bấm thẻ để lật</span>
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
                    <SpeakButton
                      text={c.speak}
                      className="h-8 w-8 bg-muted text-sub hover:bg-accent-soft hover:text-accent transition"
                      label="Nghe phát âm"
                    />
                    <span
                      title="Lật thẻ"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sub hover:bg-muted hover:text-accent transition"
                    >
                      <RotateCw className="h-4 w-4" />
                    </span>
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
                            Ví dụ & Ngữ cảnh
                          </p>
                          <div className="whitespace-pre-line text-ink leading-relaxed">
                            <Jp text={c.extra} />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <span className={cx('font-bold tracking-tight text-ink', big ? 'text-7xl sm:text-8xl' : 'text-4xl sm:text-6xl')}>
                        <Jp text={c.front} />
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer Hint */}
                <div className="flex items-center justify-between border-t border-line/40 px-5 py-2.5 sm:px-6 text-xs font-medium text-sub/70">
                  <span className="flex items-center gap-1.5">
                    <RotateCw className="h-3.5 w-3.5 text-accent" />
                    <span>Bấm thẻ để lật</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-sub border border-line">
                    Phím cách [Space]
                  </span>
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
                  disabled={i >= list.length - 1}
                  aria-label="Thẻ tiếp theo"
                  className="px-4"
                  title="Thẻ tiếp theo (→)"
                >
                  <ChevronRight className="h-5 w-5" />
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
