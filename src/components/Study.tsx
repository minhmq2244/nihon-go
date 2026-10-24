// Quizlet-style study modes shared by the vocab and kanji tabs.
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Card as StudyCard } from '../lib/questions'
import { meaningMC } from '../lib/questions'
import { sample, shuffle } from '../lib/data'
import { speak } from '../lib/speech'
import { useProgress } from '../store/progress'
import { DrillItem, type Question } from './Drill'
import { Jp } from './Jp'
import { VerbDetailCard } from './VerbDetail'
import { Button, Chip, ProgressBar, SpeakButton, cx } from './ui'

export function Flashcards({ cards, big }: { cards: StudyCard[]; big?: boolean }) {
  const { items, markItem } = useProgress()
  const [order, setOrder] = useState(cards)
  const [i, setI] = useState(0)
  const [flip, setFlip] = useState(false)
  const [jpFront, setJpFront] = useState(true)
  const [onlyUnknown, setOnlyUnknown] = useState(false)

  const known = (c: StudyCard) => (items[`${c.id}:card`]?.ok ?? 0) > (items[`${c.id}:card`]?.bad ?? 0)
  const list = useMemo(() => (onlyUnknown ? order.filter((c) => !known(c)) : order), [order, onlyUnknown, items])
  const c = list[Math.min(i, list.length - 1)]

  useEffect(() => {
    setI(0)
    setFlip(false)
  }, [onlyUnknown, order])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') return
      if (e.key === ' ') {
        e.preventDefault()
        setFlip((f) => !f)
      } else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const go = (d: number) => {
    setFlip(false)
    setI((x) => Math.max(0, Math.min(list.length - 1, x + d)))
  }
  const knownCount = cards.filter(known).length

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Chip active={jpFront} onClick={() => setJpFront(true)}>
          Mặt trước: Nhật
        </Chip>
        <Chip active={!jpFront} onClick={() => setJpFront(false)}>
          Mặt trước: Việt
        </Chip>
        <Chip active={onlyUnknown} onClick={() => setOnlyUnknown(!onlyUnknown)}>
          Chỉ thẻ chưa thuộc
        </Chip>
        <Button size="sm" onClick={() => setOrder(shuffle(cards))}>
          Trộn thẻ
        </Button>
        <span className="ml-auto text-sm text-sub">
          Đã thuộc {knownCount}/{cards.length}
        </span>
      </div>
      {!c ? (
        <p className="py-10 text-center text-sub">Bạn đã thuộc hết thẻ 🎉</p>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setFlip(!flip)}
            className="flex min-h-72 w-full flex-col items-center justify-center rounded-3xl border border-line bg-surface p-8 text-center transition hover:border-accent hover:shadow-md cursor-pointer"
          >
            {(jpFront ? !flip : flip) ? (
              <span className={cx('font-bold tracking-tight', big ? 'text-8xl' : 'text-5xl sm:text-6xl')}>
                <Jp text={c.front} />
              </span>
            ) : (
              <div>
                <p className="text-3xl font-bold text-ink">{c.back}</p>
                {c.extra && (
                  <p className="mt-3 whitespace-pre-line text-lg text-sub font-medium">
                    <Jp text={c.extra} />
                  </p>
                )}
              </div>
            )}
            <span className="mt-6 text-sm font-medium text-sub">Bấm (hoặc phím cách) để lật thẻ</span>
          </button>
          {c.detail && (
            <details className="mt-3 rounded-2xl border border-accent/30 bg-accent-soft/30 px-4 py-2" open={flip}>
              <summary className="cursor-pointer py-1 font-semibold text-accent">📘 Giải thích chi tiết động từ (trợ từ, cách dùng, 3 ví dụ)</summary>
              <VerbDetailCard d={c.detail} className="mt-2" />
            </details>
          )}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Button onClick={() => go(-1)} disabled={i === 0}>
                ←
              </Button>
              <span className="text-sm text-sub">
                {Math.min(i, list.length - 1) + 1}/{list.length}
              </span>
              <Button onClick={() => go(1)} disabled={i >= list.length - 1}>
                →
              </Button>
              <SpeakButton text={c.speak} />
            </div>
            <div className="flex gap-2">
              <Button
                variant="bad"
                onClick={() => {
                  markItem(`${c.id}:card`, false)
                  go(1)
                }}
              >
                Chưa thuộc
              </Button>
              <Button
                variant="ok"
                onClick={() => {
                  markItem(`${c.id}:card`, true)
                  go(1)
                }}
              >
                Thuộc rồi
              </Button>
            </div>
          </div>
        </>
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
