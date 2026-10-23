import { useEffect, useRef, useState } from 'react'
import type { Reading, Unit } from '../types'
import { setKey } from '../lib/progressInfo'
import { playLines, stopSpeaking } from '../lib/speech'
import { useProgress } from '../store/progress'
import { DrillItem, type Question } from '../components/Drill'
import { Jp } from '../components/Jp'
import { Button, Card, Chip, Empty, SpeakButton, cx } from '../components/ui'

export function ReadingTab({ unit }: { unit: Unit }) {
  const [sel, setSel] = useState<number | null>(null)
  const sets = useProgress((s) => s.sets)
  const list = unit.generated.readings
  if (!list.length) return <Empty title="Bài đọc của bài này đang được bổ sung." />
  if (sel !== null) return <Reader unit={unit} r={list[sel]!} onBack={() => setSel(null)} onNext={sel + 1 < list.length ? () => setSel(sel + 1) : undefined} />
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {list.map((r, i) => {
        const done = sets[setKey(unit.meta.id, 'doc', r.id)]
        return (
          <button key={r.id} type="button" onClick={() => setSel(i)} className="text-left">
            <Card className="h-full transition hover:border-accent">
              <div className="flex items-center justify-between text-xs text-sub">
                <span>
                  {r.id.split('-').pop()?.toUpperCase()} · {r.genre}
                </span>
                <span>{r.lines.length} câu</span>
              </div>
              <p className="mt-1 text-lg font-semibold">
                <Jp text={r.title} />
              </p>
              <p className="text-sm text-sub">{r.titleVn}</p>
              {done && (
                <p className="mt-1 text-sm text-ok">
                  ✓ {done.last.correct}/{done.last.total} câu hỏi
                </p>
              )}
            </Card>
          </button>
        )
      })}
    </div>
  )
}

function Reader({ unit, r, onBack, onNext }: { unit: Unit; r: Reading; onBack: () => void; onNext?: () => void }) {
  const [showVn, setShowVn] = useState<'none' | 'tap' | 'all'>('tap')
  const [shown, setShown] = useState<Set<number>>(new Set())
  const [quiz, setQuiz] = useState(true)
  const [playing, setPlaying] = useState<number | null>(null)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const saveSet = useProgress((s) => s.saveSet)
  const questions = r.questions.flatMap((s) => s.items) as Question[]
  const top = useRef<HTMLDivElement>(null)

  useEffect(() => () => stopSpeaking(), [])
  useEffect(() => {
    setResults({})
    setShown(new Set())
    top.current?.scrollIntoView()
  }, [r])

  useEffect(() => {
    const n = Object.keys(results).length
    if (n && n === questions.length) saveSet(setKey(unit.meta.id, 'doc', r.id), Object.values(results).filter(Boolean).length, n)
  }, [results])

  const stopRef = useRef<(() => void) | null>(null)
  const playAll = () => {
    stopRef.current = playLines(
      r.lines.map((l) => ({ text: l.jp })),
      { onIndex: setPlaying, gapMs: 250 },
    )
  }

  return (
    <div ref={top} className="scroll-mt-32 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" variant="ghost" onClick={onBack}>
          ← Danh sách bài đọc
        </Button>
        <span className="flex-1" />
        <Chip active={showVn === 'tap'} onClick={() => setShowVn('tap')}>
          Bấm câu để dịch
        </Chip>
        <Chip active={showVn === 'all'} onClick={() => setShowVn('all')}>
          Hiện bản dịch
        </Chip>
        <Chip active={showVn === 'none'} onClick={() => setShowVn('none')}>
          Không dịch
        </Chip>
        <Chip active={quiz} onClick={() => setQuiz(!quiz)}>
          Câu hỏi: {quiz ? 'bật' : 'tắt'}
        </Chip>
      </div>
      <Card>
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-xs text-sub">{r.genre}</p>
            <h2 className="text-2xl font-bold">
              <Jp text={r.title} />
            </h2>
            <p className="text-sub">{r.titleVn}</p>
          </div>
          {playing === null ? (
            <Button onClick={() => playAll()}>▶ Nghe cả bài</Button>
          ) : (
            <Button onClick={() => stopRef.current?.()}>
              ■ Dừng
            </Button>
          )}
        </div>
        <div className="space-y-1">
          {r.lines.map((l, i) => (
            <div
              key={i}
              className={cx('group rounded-lg px-2 py-1 transition', playing === i ? 'bg-warn-soft' : 'hover:bg-muted', showVn === 'tap' && 'cursor-pointer')}
              onClick={() => {
                if (showVn !== 'tap') return
                const s = new Set(shown)
                if (s.has(i)) s.delete(i)
                else s.add(i)
                setShown(s)
              }}
            >
              <div className="flex items-start gap-1">
                <p className="flex-1 text-lg leading-[2.1]">
                  <Jp text={l.jp} />
                </p>
                <SpeakButton text={l.jp} className="opacity-40 group-hover:opacity-100" />
              </div>
              {(showVn === 'all' || (showVn === 'tap' && shown.has(i))) && <p className="pb-1 text-sm text-sub">{l.vn}</p>}
            </div>
          ))}
        </div>
        {r.gloss.length > 0 && (
          <div className="mt-4 rounded-lg bg-muted p-3 text-sm">
            <p className="mb-1 font-semibold">Từ mới trong bài</p>
            <ul className="grid gap-x-6 sm:grid-cols-2">
              {r.gloss.map((g, i) => (
                <li key={i}>
                  <Jp text={g.jp} speakable /> — {g.meaning}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
      {quiz && questions.length > 0 && (
        <Card className="space-y-6">
          <p className="font-semibold">
            Câu hỏi đọc hiểu · {Object.values(results).filter(Boolean).length}/{questions.length} đúng
          </p>
          {questions.map((q, i) => (
            <div key={q.id} className="border-t border-line pt-4 first:border-0 first:pt-0">
              <p className="mb-1 text-sm text-sub">
                Câu {i + 1} · {q.type === 'TF' ? 'Đúng hay sai?' : q.type === 'ORDER' ? 'Sắp xếp thứ tự sự việc' : q.type === 'SHORT' ? 'Trả lời ngắn' : 'Chọn đáp án'}
              </p>
              <DrillItem d={q} autoFocus={false} onAnswered={(ok) => setResults((x) => ({ ...x, [q.id]: ok }))} />
            </div>
          ))}
        </Card>
      )}
      {onNext && (
        <div className="flex justify-end">
          <Button variant="primary" onClick={onNext}>
            Bài đọc tiếp →
          </Button>
        </div>
      )}
    </div>
  )
}
