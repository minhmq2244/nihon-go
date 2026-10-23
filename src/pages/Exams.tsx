import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { VOL_NAMES, useExam, useIndex } from '../lib/data'
import { useProgress } from '../store/progress'
import { SourceExerciseView, computeResult } from '../components/SourceExercise'
import { Html } from '../components/Jp'
import { Button, Card, Loading, cx } from '../components/ui'

export function ExamList() {
  const { data: index } = useIndex()
  const tests = useProgress((s) => s.tests)
  if (!index) return <Loading />
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Đề kiểm tra tổng hợp</h1>
      <p className="text-sub">Mỗi Tập có một đề tổng hợp. Kiểm tra cuối từng bài nằm trong tab “Kiểm tra cuối bài” của bài đó.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {index.exams.map((e) => {
          const h = tests[e.id] ?? []
          return (
            <Link key={e.id} to={`/exams/${e.id}`}>
              <Card className="h-full transition hover:border-accent">
                <p className="text-sm text-accent">{VOL_NAMES[e.vol]}</p>
                <p className="mt-1 font-semibold">{e.title}</p>
                <p className="text-sm text-sub">{e.questionCount} câu</p>
                {h.length > 0 && (
                  <p className="mt-1 text-sm text-ok">
                    Lần gần nhất: {h[h.length - 1]!.correct}/{h[h.length - 1]!.total}
                  </p>
                )}
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function ExamPage() {
  const { id = '' } = useParams()
  const { data: exam } = useExam(id)
  const saveTest = useProgress((s) => s.saveTest)
  const saveAnswers = useProgress((s) => s.saveAnswers)
  const answers = useProgress((s) => s.answers)
  const [checked, setChecked] = useState(false)
  const [round, setRound] = useState(0)
  const [start] = useState(Date.now())
  const [now, setNow] = useState(Date.now())
  const timer = useRef<ReturnType<typeof setInterval>>(undefined)
  useEffect(() => {
    timer.current = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer.current)
  }, [])
  if (!exam) return <Loading />

  const storeId = (pid: string) => `${id}:${pid}:${round}`
  const results = exam.parts.map((p) => computeResult(p, answers[storeId(p.id)] ?? {}))
  const correct = results.reduce((s, r) => s + r.correct, 0)
  const total = results.reduce((s, r) => s + r.total, 0)
  const wrong = results.flatMap((r) => r.wrong)
  const mins = Math.floor((now - start) / 60000)

  const submit = () => {
    setChecked(true)
    clearInterval(timer.current)
    saveTest(id, { correct, total: exam.meta.questionCount, wrong })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-4">
      <Link to="/exams" className="text-sm text-sub hover:text-accent">
        ← Tất cả đề
      </Link>
      <Card>
        <h1 className="text-xl font-bold">{exam.meta.title}</h1>
        <Html html={exam.introHtml} className="text-sm text-sub" />
      </Card>
      {checked && (
        <Card className="border-accent">
          <p className="text-center text-4xl font-bold">
            {correct}/{exam.meta.questionCount}
          </p>
          <p className="text-center text-sub">
            {total < exam.meta.questionCount && `${exam.meta.questionCount - total} câu tự luận chưa tự chấm · `}Thời gian: {mins} phút
          </p>
          {exam.diagnosis.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold">Chẩn đoán: sai câu nào thì ôn lại phần nào?</p>
              <ul className="mt-2 space-y-1 text-sm">
                {exam.diagnosis.map((d, i) => {
                  const bad = d.questions.filter((q) => wrong.includes(q))
                  return (
                    <li key={i} className={cx('rounded-lg px-3 py-1.5', bad.length ? 'bg-bad-soft' : 'bg-ok-soft')}>
                      <span className="font-medium">Câu {d.questions.join(', ')}</span> — {d.topic}
                      <span className="block text-xs text-sub">{d.where}</span>
                      {bad.length > 0 && <span className="text-xs font-semibold text-bad">Sai: {bad.join(', ')} → nên ôn lại</span>}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          <div className="mt-4 flex justify-center gap-2">
            <Button
              onClick={() => {
                for (const p of exam.parts) saveAnswers(storeId(p.id), {})
                setRound((r) => r + 1)
                setChecked(false)
              }}
            >
              Làm lại đề
            </Button>
          </div>
        </Card>
      )}
      {exam.parts.map((p) => (
        <Card key={p.id + round}>
          <h2 className="mb-3 text-lg font-bold">
            <Html html={p.title} className="[&_p]:m-0" />
          </h2>
          <SourceExerciseView ex={p} storeId={storeId(p.id)} checked={checked} />
        </Card>
      ))}
      {!checked && (
        <div className="sticky bottom-3 flex items-center justify-end gap-3 rounded-xl border border-line bg-surface p-3">
          <span className="text-sm text-sub">⏱ {mins} phút</span>
          <Button variant="primary" onClick={submit}>
            Nộp bài
          </Button>
        </div>
      )}
    </div>
  )
}
