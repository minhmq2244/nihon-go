import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ClipboardCheck } from 'lucide-react'
import { VOL_NAMES, useIndex, unitLabel } from '../lib/data'
import { useUnitProgress } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import type { UnitMeta } from '../types'
import { Html, Jp } from '../components/Jp'
import { Button, Card, Loading, ProgressBar, cx } from '../components/ui'

function UnitCard({ u, current }: { u: UnitMeta; current: boolean }) {
  const { ratio } = useUnitProgress(u.id)
  const status = ratio >= 0.85 ? 'done' : ratio > 0 || current ? 'doing' : 'todo'
  return (
    <Link to={`/u/${u.id}`}>
      <div
        className={cx(
          'h-full rounded-2xl border bg-surface p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lg',
          status === 'done' && 'border-ok/60',
          status === 'doing' && 'border-2 border-accent shadow-sm',
          status === 'todo' && 'border-line',
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">{unitLabel(u)}</span>
          <span
            className={cx(
              'rounded-full px-2.5 py-1 text-xs font-bold',
              status === 'done' && 'bg-ok-soft text-ok',
              status === 'doing' && 'bg-accent-soft text-accent',
              status === 'todo' && 'bg-muted text-sub',
            )}
          >
            {status === 'done' ? (
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Hoàn thành
              </span>
            ) : status === 'doing' ? (
              'Đang học'
            ) : (
              'Chưa học'
            )}
          </span>
        </div>
        <p className="mt-2.5 text-xl sm:text-2xl font-bold leading-snug">
          <Jp text={u.title} />
        </p>
        <p className="mt-1 text-base text-sub">{u.subtitle}</p>
        <ProgressBar value={ratio} className="mt-4 h-2.5" />
      </div>
    </Link>
  )
}

export function Units() {
  const { data: index } = useIndex()
  const lastId = useProgress((s) => s.lastPlace?.unitId)
  const [overview, setOverview] = useState(false)
  if (!index) return <Loading />
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Học theo bài</h1>
        <p className="mt-2 text-base sm:text-lg text-sub font-medium">
          Đi lần lượt từ Bài 1 đến Chủ đề 9. Mỗi bài gồm 9 phần: lý thuyết, từ vựng, Kanji, ngữ pháp, viết, đọc, nghe, hội thoại và kiểm tra.
        </p>
      </div>
      {([1, 2, 3, 4] as const).map((vol) => {
        const exam = index.exams.find((e) => e.vol === vol)
        return (
          <section key={vol}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-ink">{VOL_NAMES[vol]}</h2>
              <div className="flex gap-2.5">
                {vol === 4 && (
                  <Button size="sm" onClick={() => setOverview(!overview)}>
                    {overview ? 'Ẩn' : 'Xem'} bảng phủ kiến thức
                  </Button>
                )}
                {exam && (
                  <Link to={`/exams/${exam.id}`}>
                    <Button size="sm" variant="primary">
                      <ClipboardCheck size={16} /> Đề tổng hợp · {exam.questionCount} câu
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            {vol === 4 && overview && (
              <Card className="mb-5 p-6">
                <Html html={index.overview.vol4Html} />
              </Card>
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {index.units
                .filter((u) => u.vol === vol)
                .map((u) => (
                  <UnitCard key={u.id} u={u} current={u.id === lastId} />
                ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
