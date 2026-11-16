import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Mic, Volume2 } from 'lucide-react'
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
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Đề kiểm tra tổng hợp</h1>
        <p className="mt-2 text-base sm:text-lg text-sub font-medium">
          Mỗi Tập có một đề tổng hợp. Kiểm tra cuối từng bài nằm trong tab “Kiểm tra cuối bài” của bài đó.
        </p>
      </div>

      {/* Featured Banner: Speaking JPD133 */}
      <Link to="/speaking-exam">
        <div className="rounded-3xl bg-gradient-to-r from-accent via-accent to-accent/90 p-6 sm:p-7 text-white shadow-lg transition-all hover:shadow-xl hover:brightness-105 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider">
              <Mic className="w-3.5 h-3.5" /> Mới: Đề thi Speaking JPD133
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              20 Bộ Đề Thi Nói JPD133 (Demo 2025)
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-medium">
              Đoạn văn đọc chuẩn Kanji Bài 1-11, tranh miêu tả liên hoàn 3 bước, Audio câu hỏi thi thử và gợi ý nhiều cách trả lời điểm 9-10.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white text-accent font-extrabold text-sm shadow-md transition hover:bg-stone-50">
            <Volume2 className="w-4 h-4" />
            Luyện thi Speaking ngay →
          </span>
        </div>
      </Link>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {index.exams.map((e) => {
          const h = tests[e.id] ?? []
          return (
            <Link key={e.id} to={`/exams/${e.id}`}>
              <Card className="h-full p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-bold text-accent uppercase tracking-wider">{VOL_NAMES[e.vol]}</p>
                <p className="mt-2 text-xl sm:text-2xl font-bold leading-snug text-ink">{e.title}</p>
                <p className="mt-1 text-base text-sub">{e.questionCount} câu hỏi</p>
                {h.length > 0 && (
                  <p className="mt-3 text-base font-bold text-ok">
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
    <div className="space-y-6">
      <Link to="/exams" className="inline-flex items-center gap-1 text-base font-semibold text-sub hover:text-accent">
        ← Tất cả đề kiểm tra
      </Link>
      <Card className="p-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">{exam.meta.title}</h1>
        <Html html={exam.introHtml} className="mt-2 text-base text-sub" />
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
