import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VOL_NAMES, useIndex, unitLabel } from '../lib/data'
import { useUnitProgress } from '../lib/progressInfo'
import type { UnitMeta } from '../types'
import { Html, Jp } from '../components/Jp'
import { Button, Card, Loading, ProgressBar } from '../components/ui'

function UnitCard({ u }: { u: UnitMeta }) {
  const { ratio } = useUnitProgress(u.id)
  return (
    <Link to={`/u/${u.id}`}>
      <Card className="h-full transition hover:border-accent">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-accent">{unitLabel(u)}</span>
          {!u.hasGenerated && <span className="text-xs text-sub">đang bổ sung bài luyện</span>}
        </div>
        <p className="mt-1 text-lg font-semibold leading-snug">
          <Jp text={u.title} />
        </p>
        <p className="text-sm text-sub">{u.subtitle}</p>
        <ProgressBar value={ratio} className="mt-3" />
      </Card>
    </Link>
  )
}

export function Units() {
  const { data: index } = useIndex()
  const [overview, setOverview] = useState(false)
  if (!index) return <Loading />
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Học theo bài</h1>
      {([1, 2, 3, 4] as const).map((vol) => {
        const exam = index.exams.find((e) => e.vol === vol)
        return (
          <section key={vol}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-semibold">{VOL_NAMES[vol]}</h2>
              <div className="flex gap-2">
                {vol === 4 && (
                  <Button size="sm" onClick={() => setOverview(!overview)}>
                    {overview ? 'Ẩn' : 'Xem'} bảng phủ kiến thức
                  </Button>
                )}
                {exam && (
                  <Link to={`/exams/${exam.id}`}>
                    <Button size="sm">Đề tổng hợp ({exam.questionCount} câu)</Button>
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
                  <UnitCard key={u.id} u={u} />
                ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
