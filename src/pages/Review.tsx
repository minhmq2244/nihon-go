import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Repeat } from 'lucide-react'
import type { Unit } from '../types'
import { load, shuffle, unitLabel, useIndex } from '../lib/data'
import { allQuestions, unitOfItem } from '../lib/questions'
import { useProgress } from '../store/progress'
import { DrillRunner, type Question } from '../components/Drill'
import { Card, Chip, Empty, Loading } from '../components/ui'

const isWeak = (s: { ok: number; bad: number }) => s.bad > 0 && s.bad >= s.ok

/** One place to redo every question answered wrong, across all units. */
export function Review() {
  const { data: index } = useIndex()
  const items = useProgress((s) => s.items)
  const [weakIds] = useState(() => Object.entries(items).filter(([, s]) => isWeak(s)).map(([id]) => id))
  const unitIds = useMemo(() => [...new Set(weakIds.map(unitOfItem).filter((x): x is string => !!x))], [weakIds])
  const [units, setUnits] = useState<Unit[] | null>(null)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    let alive = true
    Promise.all(unitIds.map((id) => load<Unit>(`unit/${id}.json`))).then((u) => alive && setUnits(u))
    return () => {
      alive = false
    }
  }, [unitIds])

  const byUnit = useMemo(() => {
    const set = new Set(weakIds)
    return (units ?? []).map((u) => ({ unit: u, questions: allQuestions(u).filter((q) => set.has(q.id)) })).filter((x) => x.questions.length)
  }, [units, weakIds])

  const questions = useMemo<Question[]>(
    () => shuffle(byUnit.filter((x) => filter === 'all' || x.unit.meta.id === filter).flatMap((x) => x.questions)).slice(0, 40),
    [byUnit, filter],
  )

  if (!index || (unitIds.length && !units)) return <Loading />

  return (
    <div className="space-y-6">
      <div>
        <h1 className="flex items-center gap-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
          <Repeat size={32} className="text-warn" /> Ôn tập câu sai
        </h1>
        <p className="mt-2 text-base sm:text-lg text-sub font-medium">
          Gom mọi câu bạn từng làm sai (từ vựng, Kanji, ngữ pháp, viết) ở tất cả các bài. Làm đúng nhiều lần thì câu sẽ tự rời khỏi danh sách.
        </p>
      </div>
      {!byUnit.length ? (
        <Empty title="Chưa có câu sai nào cần ôn 🎉">
          Hãy luyện ở các bài —{' '}
          <Link className="text-accent underline" to="/units">
            vào Học theo bài
          </Link>
          .
        </Empty>
      ) : (
        <>
          <div className="flex flex-wrap gap-2">
            <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
              Tất cả ({byUnit.reduce((s, x) => s + x.questions.length, 0)})
            </Chip>
            {byUnit.map((x) => (
              <Chip key={x.unit.meta.id} active={filter === x.unit.meta.id} onClick={() => setFilter(x.unit.meta.id)}>
                {unitLabel(x.unit.meta)} ({x.questions.length})
              </Chip>
            ))}
          </div>
          <Card>
            <DrillRunner key={filter} setId={`review:${filter}`} questions={questions} title="Ôn tập câu sai" />
          </Card>
        </>
      )}
    </div>
  )
}
