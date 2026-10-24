import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import type { Drill } from '../types'
import { isCorrect, splitAlternatives } from '../lib/normalize'
import { toBase } from '../lib/furigana'
import { shuffle } from '../lib/data'
import { speak, stopSpeaking } from '../lib/speech'
import { useProgress } from '../store/progress'
import { Jp } from './Jp'
import { Button, JpInput, ProgressBar, SpeakButton, Verdict, cx } from './ui'

/** A practice question; `audio` means the prompt is heard instead of read. */
export type Question = Drill & { audio?: string; prompt?: ReactNode }

const BLANK = /［([^［］]+)］/g

export function drillAnswerText(d: Question): string {
  switch (d.type) {
    case 'MC':
      return d.options?.[d.correct ?? 0] ?? ''
    case 'FILL':
      return [...d.stem.matchAll(BLANK)].map((m) => splitAlternatives(m[1]!)[0]).join(' ／ ')
    case 'ORDER':
      return (d.chunks ?? []).join(' ')
    case 'STAR':
      return (d.chunks ?? [])[d.correct ?? 0] ?? ''
    default:
      return d.answers[0] ?? ''
  }
}

/** Alternatives that look different once furigana is ignored. */
const uniqueAnswers = (answers: string[]) => answers.filter((a, i) => answers.findIndex((b) => toBase(b) === toBase(a)) === i)

const fullSentence = (d: Question) =>
  d.type === 'FILL' ? d.stem.replace(BLANK, (_, a: string) => splitAlternatives(a)[0]!) : d.type === 'STAR' ? d.stem.replace(/〔([^〔〕]+)〕/g, '$1') : d.type === 'ORDER' ? (d.chunks ?? []).join('') : ''

/** One question with its own input, check and feedback. */
export function DrillItem({ d, onAnswered, autoFocus = true }: { d: Question; onAnswered: (ok: boolean) => void; autoFocus?: boolean }) {
  const [vals, setVals] = useState<string[]>([])
  const [pick, setPick] = useState<number | null>(null)
  const [order, setOrder] = useState<number[]>([])
  const [result, setResult] = useState<boolean | null>(null)
  const [overridden, setOverridden] = useState(false)
  const first = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  const blanks = useMemo(() => (d.type === 'FILL' ? [...d.stem.matchAll(BLANK)].map((m) => splitAlternatives(m[1]!)) : []), [d])
  const pool = useMemo(() => (d.type === 'ORDER' ? shuffle(d.chunks!.map((_, i) => i)) : []), [d])
  const starOptions = useMemo(() => (d.type === 'STAR' ? shuffle(d.chunks!.map((_, i) => i)) : []), [d])

  useEffect(() => {
    setVals(d.type === 'FIX' ? [toBase(d.stem)] : [])
    setPick(null)
    setOrder([])
    setResult(null)
    setOverridden(false)
    if (d.audio) void speak(d.audio)
    if (autoFocus) setTimeout(() => first.current?.focus(), 30)
  }, [d, autoFocus])

  const answered = result !== null
  const typed = ['FIX', 'TRANS', 'SHORT'].includes(d.type)

  const check = (choice?: number) => {
    if (answered) return
    let ok = false
    if (d.type === 'FILL') ok = blanks.every((alts, i) => isCorrect(vals[i] ?? '', alts))
    else if (d.type === 'MC') ok = choice === d.correct
    else if (d.type === 'TF') ok = (choice === 0 ? 'đúng' : 'sai') === d.answers[0]!.toLowerCase()
    else if (d.type === 'STAR') ok = choice === d.correct
    else if (d.type === 'ORDER') ok = isCorrect(order.map((i) => d.chunks![i]).join(''), [d.chunks!.join('')])
    else ok = isCorrect(vals[0] ?? '', d.answers)
    if (choice !== undefined) setPick(choice)
    setResult(ok)
    onAnswered(ok)
  }

  const canCheck =
    d.type === 'FILL' ? vals.filter((v) => v?.trim()).length === blanks.length : d.type === 'ORDER' ? order.length === d.chunks!.length : typed ? !!vals[0]?.trim() : false

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !(e.nativeEvent as KeyboardEvent).isComposing && canCheck) {
      e.preventDefault()
      check()
    }
  }

  let bi = 0
  const starStem =
    d.type === 'STAR'
      ? d.stem.replace(/〔[^〔〕]+〕/g, () => {
          const i = bi++
          return i === d.correct ? ' ★ ' : ' ＿＿ '
        })
      : ''

  return (
    <div>
      {d.audio && (
        <div className="mb-3 flex items-center gap-2 text-sub">
          <SpeakButton text={d.audio} className="h-11 w-11 bg-accent-soft text-accent" />
          <span className="text-sm">Bấm để nghe lại</span>
        </div>
      )}
      {d.prompt}
      {!d.audio && d.type !== 'FILL' && d.type !== 'STAR' && d.type !== 'ORDER' && (
        <div className="text-xl sm:text-2xl leading-loose font-medium">
          {d.type === 'TRANS' && !/[぀-ヿ一-鿿]/.test(d.stem) ? <span>{d.stem}</span> : <Jp text={d.stem} />}
        </div>
      )}
      {d.type === 'FILL' && (
        <div className="text-xl sm:text-2xl leading-[2.8]" onKeyDown={onKey}>
          {d.stem.split(BLANK).map((part, i) =>
            i % 2 === 0 ? (
              <Jp key={i} text={part} />
            ) : (
              <JpInput
                key={i}
                ref={
                  i === 1
                    ? (el) => {
                        first.current = el
                      }
                    : undefined
                }
                className="mx-1 inline-block w-auto align-middle text-lg"
                style={{ width: `${Math.max(4, splitAlternatives(part)[0]!.replace(/（[^）]*）/g, '').length + 2)}em` }}
                value={vals[(i - 1) / 2] ?? ''}
                disabled={answered}
                state={answered ? (isCorrect(vals[(i - 1) / 2] ?? '', blanks[(i - 1) / 2]!) ? 'ok' : 'bad') : null}
                onChange={(e) => {
                  const next = [...vals]
                  next[(i - 1) / 2] = e.target.value
                  setVals(next)
                }}
              />
            ),
          )}
        </div>
      )}
      {d.type === 'STAR' && (
        <div className="text-xl sm:text-2xl leading-loose font-medium">
          <Jp text={starStem} />
        </div>
      )}
      {d.hint && d.type !== 'TRANS' && <p className="mt-2 text-base text-sub font-medium">{d.hint}</p>}
      {d.type === 'TRANS' && d.hint && <p className="mt-2 text-base text-sub font-medium">Gợi ý: {d.hint}</p>}

      {(d.type === 'MC' || d.type === 'STAR' || d.type === 'TF') && (
        <div className={cx('mt-5 grid gap-3', d.type === 'TF' ? 'grid-cols-2' : 'sm:grid-cols-2')}>
          {(d.type === 'TF' ? ['Đúng', 'Sai'] : d.type === 'STAR' ? starOptions.map((i) => d.chunks![i]!) : d.options!).map((o, idx) => {
            const value = d.type === 'STAR' ? starOptions[idx]! : idx
            const correctValue = d.type === 'TF' ? (d.answers[0]!.toLowerCase() === 'đúng' ? 0 : 1) : d.correct
            return (
              <button
                key={idx}
                type="button"
                disabled={answered}
                onClick={() => check(value)}
                className={cx(
                  'rounded-xl border px-5 py-3.5 text-base sm:text-lg text-left transition-all cursor-pointer',
                  !answered && 'border-line bg-surface hover:border-accent hover:bg-accent-soft hover:shadow-xs',
                  answered && value === correctValue && 'border-ok bg-ok-soft font-semibold',
                  answered && pick === value && value !== correctValue && 'border-bad bg-bad-soft',
                  answered && pick !== value && value !== correctValue && 'border-line opacity-60',
                )}
              >
                <span className="mr-2.5 text-base font-bold text-accent">{String.fromCharCode(65 + idx)}.</span>
                {d.type === 'TF' ? o : <Jp text={o} />}
              </button>
            )
          })}
        </div>
      )}

      {d.type === 'ORDER' && (
        <div className="mt-3">
          <div className="min-h-16 rounded-xl border border-dashed border-line p-3 text-xl">
            {order.length === 0 && <span className="text-base text-sub">Bấm các mảnh bên dưới theo đúng thứ tự…</span>}
            {order.map((ci, k) => (
              <button
                key={k}
                type="button"
                disabled={answered}
                onClick={() => setOrder(order.filter((_, j) => j !== k))}
                className="m-1 rounded-lg bg-accent-soft px-3.5 py-1.5 text-accent font-semibold text-lg cursor-pointer"
              >
                <Jp text={d.chunks![ci]!} />
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap">
            {pool.map((ci) => {
              const used = order.filter((x) => x === ci).length > 0
              return (
                <button
                  key={ci}
                  type="button"
                  disabled={answered || used}
                  onClick={() => setOrder([...order, ci])}
                  className={cx('m-1 rounded-lg border border-line bg-surface px-3.5 py-1.5 text-lg font-medium cursor-pointer transition hover:border-accent hover:bg-accent-soft', used && 'opacity-30')}
                >
                  <Jp text={d.chunks![ci]!} />
                </button>
              )
            })}
          </div>
        </div>
      )}

      {typed && (
        <div className="mt-3" onKeyDown={onKey}>
          {d.type === 'SHORT' ? (
            <JpInput
              ref={(el) => {
                first.current = el
              }}
              className="w-full"
              value={vals[0] ?? ''}
              disabled={answered}
              placeholder="Gõ câu trả lời…"
              state={answered ? (result ? 'ok' : 'bad') : null}
              onChange={(e) => setVals([e.target.value])}
            />
          ) : (
            <textarea
              lang="ja"
              ref={(el) => {
                first.current = el
              }}
              rows={2}
              className={cx(
                'w-full rounded-lg border bg-surface px-3 py-2 text-lg outline-none focus:ring-2 focus:ring-accent/30',
                answered ? (result ? 'border-ok bg-ok-soft' : 'border-bad bg-bad-soft') : 'border-line',
              )}
              value={vals[0] ?? ''}
              disabled={answered}
              placeholder={d.type === 'FIX' ? 'Sửa lại câu cho đúng…' : 'Gõ câu tiếng Nhật…'}
              onChange={(e) => setVals([e.target.value])}
            />
          )}
        </div>
      )}

      {!answered && (d.type === 'FILL' || d.type === 'ORDER' || typed) && (
        <div className="mt-3 flex gap-2">
          <Button variant="primary" disabled={!canCheck} onClick={() => check()}>
            Kiểm tra
          </Button>
          {d.type === 'ORDER' && order.length > 0 && <Button onClick={() => setOrder([])}>Xoá</Button>}
        </div>
      )}

      {answered && (
        <Verdict ok={!!result || overridden}>
          {(!result || d.type === 'FILL' || d.type === 'ORDER' || d.type === 'STAR') && (
            <div className="flex items-start gap-1">
              <div>
                <span className="text-sub">Đáp án: </span>
                {d.type === 'TF' ? d.answers[0] : <Jp text={fullSentence(d) || uniqueAnswers(d.answers).join('　｜　') || drillAnswerText(d)} />}
              </div>
              {d.type !== 'TF' && <SpeakButton text={fullSentence(d) || drillAnswerText(d)} className="h-7 w-7" />}
            </div>
          )}
          {d.explain && <p className="mt-1 text-sub">{d.explain}</p>}
          {!result && !overridden && typed && (
            <button
              type="button"
              className="mt-2 text-xs text-sub underline"
              onClick={() => {
                setOverridden(true)
                onAnswered(true)
              }}
            >
              Câu của tôi cũng đúng (tính là đúng)
            </button>
          )}
        </Verdict>
      )}
    </div>
  )
}

interface RunnerProps {
  setId: string
  questions: Question[]
  title?: string
  onFinish?: (correct: number, total: number) => void
  shuffleItems?: boolean
}

/** Runs questions one at a time, then shows a summary with a retry for the wrong ones. */
export function DrillRunner({ setId, questions, title, onFinish, shuffleItems }: RunnerProps) {
  const markItem = useProgress((s) => s.markItem)
  const saveSet = useProgress((s) => s.saveSet)
  const [round, setRound] = useState(() => (shuffleItems ? shuffle(questions) : questions))
  const [i, setI] = useState(0)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [answeredCurrent, setAnsweredCurrent] = useState(false)
  const nextBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setRound(shuffleItems ? shuffle(questions) : questions)
    setI(0)
    setResults({})
    setAnsweredCurrent(false)
  }, [questions, shuffleItems])

  useEffect(() => () => stopSpeaking(), [])

  if (!questions.length) return null
  const done = i >= round.length
  const correct = round.filter((q) => results[q.id]).length

  if (done) {
    const wrong = round.filter((q) => !results[q.id])
    return (
      <div>
        <div className="text-center">
          <p className="text-sm text-sub">{title ?? 'Kết quả'}</p>
          <p className="my-2 text-4xl font-bold">
            {correct}/{round.length}
          </p>
          <p className="text-sub">{correct === round.length ? 'Tuyệt vời! Đúng hết.' : `Sai ${wrong.length} câu — xem lại bên dưới.`}</p>
          <div className="mt-4 flex justify-center gap-2">
            {wrong.length > 0 && (
              <Button
                variant="primary"
                onClick={() => {
                  setRound(shuffle(wrong))
                  setI(0)
                  setResults({})
                }}
              >
                Làm lại {wrong.length} câu sai
              </Button>
            )}
            <Button
              onClick={() => {
                setRound(shuffleItems ? shuffle(questions) : questions)
                setI(0)
                setResults({})
              }}
            >
              Làm lại tất cả
            </Button>
          </div>
        </div>
        {wrong.length > 0 && (
          <ul className="mt-6 space-y-2">
            {wrong.map((q) => (
              <li key={q.id} className="rounded-lg bg-muted px-3 py-2 text-sm">
                <div className="text-sub">{q.audio ? '(Câu nghe)' : <Jp text={q.stem.replace(/［[^］]*］/g, '＿＿')} />}</div>
                <div>
                  → <Jp text={fullSentence(q) || drillAnswerText(q)} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  const q = round[i]!
  const advance = () => {
    setAnsweredCurrent(false)
    const next = i + 1
    setI(next)
    if (next >= round.length) {
      const c = round.filter((x) => results[x.id]).length
      saveSet(setId, c, round.length)
      onFinish?.(c, round.length)
    }
  }

  return (
    <div
      onKeyDown={(e) => {
        if (e.key === 'Enter' && answeredCurrent && !(e.nativeEvent as KeyboardEvent).isComposing) {
          e.preventDefault()
          advance()
        }
      }}
    >
      <div className="mb-4 flex items-center gap-3 text-sm text-sub">
        <span>
          Câu {i + 1}/{round.length}
        </span>
        <ProgressBar value={i / round.length} className="flex-1" />
        <span className="text-ok">✓ {correct}</span>
      </div>
      <DrillItem
        key={q.id + '-' + i}
        d={q}
        onAnswered={(ok) => {
          setResults((r) => ({ ...r, [q.id]: ok }))
          markItem(q.id, ok)
          setAnsweredCurrent(true)
          setTimeout(() => nextBtn.current?.focus(), 30)
        }}
      />
      {answeredCurrent && (
        <div className="mt-4 flex justify-end">
          <Button ref={nextBtn} variant="primary" onClick={advance}>
            {i + 1 < round.length ? 'Câu tiếp →' : 'Xem kết quả'}
          </Button>
        </div>
      )}
    </div>
  )
}
