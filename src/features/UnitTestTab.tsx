import { useMemo, useState } from 'react'
import type { Unit } from '../types'
import { sample } from '../lib/data'
import { kanjiK1, kanjiK2, vocabV1 } from '../lib/questions'
import { setKey } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import { DrillItem, type Question } from '../components/Drill'
import { Jp } from '../components/Jp'
import { ScriptPlayer } from './ListeningTab'
import { Button, Card, Empty } from '../components/ui'

const NO_HISTORY: never[] = []

interface Part {
  id: string
  title: string
  questions: Question[]
  before?: React.ReactNode
}

function buildParts(unit: Unit): Part[] {
  const g = unit.generated
  const v4 = g.vocabCloze.flatMap((s) => s.items) as Question[]
  const vocab = [...sample(v4, 10), ...sample(vocabV1(unit), 20 - Math.min(10, v4.length))]
  // Only the multiple-choice kanji sets: "rewrite in kanji" can't be answered by typing romaji.
  const k3 = g.kanji.filter((s) => s.code === 'K3').flatMap((s) => s.items) as Question[]
  const kanji = [...sample(kanjiK1(unit), 4), ...sample(kanjiK2(unit), 3), ...sample(k3, 3)]
  const grammar = sample(g.grammar.flatMap((p) => p.sets.flatMap((s) => s.items)) as Question[], 20)
  const parts: Part[] = [
    { id: 'tv', title: 'Từ vựng', questions: vocab },
    { id: 'kj', title: 'Kanji', questions: kanji },
    { id: 'np', title: 'Ngữ pháp', questions: grammar },
  ]
  const reading = sample(g.readings, 1)[0]
  if (reading)
    parts.push({
      id: 'doc',
      title: `Đọc hiểu · ${reading.titleVn}`,
      questions: reading.questions.flatMap((s) => s.items) as Question[],
      before: (
        <div className="space-y-1 rounded-lg bg-muted p-3 text-lg leading-loose">
          <p className="font-semibold">
            <Jp text={reading.title} />
          </p>
          {reading.lines.map((l, i) => (
            <p key={i}>
              <Jp text={l.jp} />
            </p>
          ))}
        </div>
      ),
    })
  const listening = sample(
    g.listenings.filter((l) => l.questions.some((s) => s.items.length)),
    1,
  )[0]
  if (listening)
    parts.push({
      id: 'nghe',
      title: `Nghe · ${listening.title}`,
      questions: (listening.questions.flatMap((s) => s.items) as Question[]).slice(0, 5),
      before: (
        <div className="space-y-2">
          {listening.intro && <p className="text-sm">{listening.intro}</p>}
          <ScriptPlayer lines={listening.lines} showScript={false} />
        </div>
      ),
    })
  return parts.filter((p) => p.questions.length)
}

export function UnitTestTab({ unit }: { unit: Unit }) {
  const [seed, setSeed] = useState(0)
  const parts = useMemo(() => buildParts(unit), [unit, seed])
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  const saveTest = useProgress((s) => s.saveTest)
  const saveSet = useProgress((s) => s.saveSet)
  const history = useProgress((s) => s.tests[`${unit.meta.id}:kiem-tra`]) ?? NO_HISTORY
  const total = parts.reduce((s, p) => s + p.questions.length, 0)
  const answered = Object.keys(answers).length

  if (!total) return <Empty title="Bài kiểm tra cuối bài sẽ có khi phần luyện tập của bài này được bổ sung." />

  const submit = () => {
    const per: Record<string, [number, number]> = {}
    let correct = 0
    for (const p of parts) {
      const c = p.questions.filter((q) => answers[`${p.id}:${q.id}`]).length
      per[p.title] = [c, p.questions.length]
      correct += c
    }
    saveTest(`${unit.meta.id}:kiem-tra`, { correct, total, parts: per })
    saveSet(setKey(unit.meta.id, 'kiem-tra', 'test'), correct, total)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const last = history[history.length - 1]
  return (
    <div className="space-y-4">
      <Card className="flex flex-wrap items-center gap-3">
        <div className="flex-1">
          <p className="font-semibold">Kiểm tra cuối bài · {total} câu</p>
          <p className="text-sm text-sub">{parts.map((p) => `${p.title.split(' · ')[0]} ${p.questions.length}`).join(' · ')}</p>
          {history.length > 0 && (
            <p className="text-sm text-sub">
              Đã làm {history.length} lần · gần nhất {history[history.length - 1]!.correct}/{history[history.length - 1]!.total} · cao nhất{' '}
              {Math.max(...history.map((h) => h.correct))}
            </p>
          )}
        </div>
        <Button
          onClick={() => {
            setSeed((s) => s + 1)
            setAnswers({})
            setSubmitted(false)
          }}
        >
          Đề mới
        </Button>
      </Card>

      {submitted && last && (
        <Card className="border-accent">
          <p className="text-center text-4xl font-bold">
            {last.correct}/{last.total}
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {Object.entries(last.parts ?? {}).map(([name, [c, t]]) => (
              <li key={name} className="flex justify-between">
                <span>{name}</span>
                <span className={c / t < 0.7 ? 'font-semibold text-bad' : 'text-ok'}>
                  {c}/{t} {c / t < 0.7 && '— cần ôn lại'}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {parts.map((p) => (
        <Card key={p.id + seed} className="space-y-5">
          <h2 className="text-lg font-bold">{p.title}</h2>
          {p.before}
          {p.questions.map((q, i) => (
            <div key={q.id + i} className="border-t border-line pt-4 first:border-0 first:pt-0">
              <p className="mb-1 text-sm text-sub">Câu {i + 1}</p>
              <DrillItem d={{ ...q, audio: p.id === 'nghe' ? undefined : q.audio }} autoFocus={false} onAnswered={(ok) => setAnswers((a) => ({ ...a, [`${p.id}:${q.id}`]: ok }))} />
            </div>
          ))}
        </Card>
      ))}

      {!submitted && (
        <div className="sticky bottom-3 flex items-center justify-end gap-3 rounded-xl border border-line bg-surface p-3">
          <span className="text-sm text-sub">
            Đã làm {answered}/{total}
          </span>
          <Button variant="primary" onClick={submit}>
            Nộp bài
          </Button>
        </div>
      )}
    </div>
  )
}
