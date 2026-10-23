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
          'h-full rounded-2xl border bg-surface p-4 transition hover:-translate-y-0.5 hover:shadow-md',
          status === 'done' && 'border-ok/60',
          status === 'doing' && 'border-2 border-accent',
          status === 'todo' && 'border-line',
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-accent">{unitLabel(u)}</span>
          <span
            className={cx(
              'rounded-full px-2 py-0.5 text-[11px] font-semibold',
              status === 'done' && 'bg-ok-soft text-ok',
              status === 'doing' && 'bg-accent-soft text-accent',
              status === 'todo' && 'bg-muted text-sub',
            )}
          >
            {status === 'done' ? (
              <span className="flex items-center gap-1">
                <CheckCircle2 size={12} /> Hoàn thành
              </span>
            ) : status === 'doing' ? (
              'Đang học'
            ) : (
              'Chưa học'
            )}
          </span>
        </div>
        <p className="mt-1.5 text-lg font-bold leading-snug">
          <Jp text={u.title} />
        </p>
        <p className="text-sm text-sub">{u.subtitle}</p>
        <ProgressBar value={ratio} className="mt-3" />
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
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Học theo bài</h1>
        <p className="text-sub">Đi lần lượt từ Bài 1 đến Chủ đề 9. Mỗi bài có 9 phần: lý thuyết, từ vựng, Kanji, ngữ pháp, viết, đọc, nghe, hội thoại và kiểm tra.</p>
      </div>
      {([1, 2, 3, 4] as const).map((vol) => {
        const exam = index.exams.find((e) => e.vol === vol)
        return (
          <section key={vol}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold">{VOL_NAMES[vol]}</h2>
              <div className="flex gap-2">
                {vol === 4 && (
                  <Button size="sm" onClick={() => setOverview(!overview)}>
                    {overview ? 'Ẩn' : 'Xem'} bảng phủ kiến thức
                  </Button>
                )}
                {exam && (
                  <Link to={`/exams/${exam.id}`}>
                    <Button size="sm" variant="primary">
                      <ClipboardCheck size={15} /> Đề tổng hợp · {exam.questionCount} câu
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            {vol === 4 && overview && (
              <Card className="mb-4">
                <Html html={index.overview.vol4Html} />
              </Card>
            )}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
