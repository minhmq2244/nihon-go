import { useMemo, useState } from 'react'
import type { Unit } from '../types'
import { sample } from '../lib/data'
import { setKey } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import { DrillRunner, type Question } from '../components/Drill'
import { SourceExerciseView } from '../components/SourceExercise'
import { Html } from '../components/Jp'
import { Button, Card, Chip, Empty, cx } from '../components/ui'

type View = { kind: 'point'; id: string } | { kind: 'source'; id: string } | { kind: 'test' } | { kind: 'weak' }

export function GrammarTab({ unit }: { unit: Unit }) {
  const id = unit.meta.id
  const points = unit.grammarPoints
  const [view, setView] = useState<View>(points[0] ? { kind: 'point', id: points[0].id } : { kind: 'source', id: unit.exercises[0]?.id ?? '' })
  const sets = useProgress((s) => s.sets)
  const items = useProgress((s) => s.items)
  const saveSet = useProgress((s) => s.saveSet)
  const allDrills = useMemo(() => unit.generated.grammar.flatMap((g) => g.sets.flatMap((s) => s.items)) as Question[], [unit])
  const [testSeed, setTestSeed] = useState(0)
  const testQs = useMemo(() => sample(allDrills, 30), [allDrills, testSeed])
  const weak = useMemo(
    () => allDrills.filter((q) => (items[q.id]?.bad ?? 0) > 0 && (items[q.id]?.bad ?? 0) >= (items[q.id]?.ok ?? 0)),
    [allDrills, view],
  )

  const doneMark = (key: string) => (sets[key] ? <span className="text-ok">✓</span> : null)

  return (
    <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sub">Mẫu ngữ pháp</p>
          <div className="space-y-1">
            {points.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setView({ kind: 'point', id: p.id })}
                className={cx(
                  'block w-full rounded-lg px-3 py-1.5 text-left text-sm',
                  view.kind === 'point' && view.id === p.id ? 'bg-accent-soft font-medium text-accent' : 'hover:bg-muted',
                )}
              >
                <Html html={p.title} className="inline [&_p]:inline" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sub">Luyện tổng hợp</p>
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setView({ kind: 'test' })}
              className={cx('block w-full rounded-lg px-3 py-1.5 text-left text-sm', view.kind === 'test' ? 'bg-accent-soft font-medium text-accent' : 'hover:bg-muted')}
            >
              Kiểm tra ngữ pháp (30 câu) {doneMark(setKey(id, 'ngu-phap', 'test'))}
            </button>
            <button
              type="button"
              onClick={() => setView({ kind: 'weak' })}
              className={cx('block w-full rounded-lg px-3 py-1.5 text-left text-sm', view.kind === 'weak' ? 'bg-accent-soft font-medium text-accent' : 'hover:bg-muted')}
            >
              Ôn câu sai {weak.length > 0 && `(${weak.length})`}
            </button>
          </div>
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sub">Bài tập giáo trình</p>
          <div className="space-y-1">
            {unit.exercises.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setView({ kind: 'source', id: e.id })}
                className={cx(
                  'block w-full truncate rounded-lg px-3 py-1.5 text-left text-sm',
                  view.kind === 'source' && view.id === e.id ? 'bg-accent-soft font-medium text-accent' : 'hover:bg-muted',
                )}
                title={e.title}
              >
                {e.title.replace(/`/g, '')} {doneMark(setKey(id, 'ngu-phap', `src-${e.id}`))}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div className="min-w-0">
        {view.kind === 'point' && <PointView unit={unit} pointId={view.id} />}
        {view.kind === 'source' &&
          (() => {
            const ex = unit.exercises.find((e) => e.id === view.id)
            if (!ex) return <Empty title="Không tìm thấy bài tập." />
            return (
              <Card>
                <h2 className="mb-3 text-lg font-bold">{ex.title.replace(/`/g, '')}</h2>
                <SourceExerciseView
                  key={ex.id}
                  ex={ex}
                  storeId={`${id}:${ex.id}`}
                  onChecked={(r) => r.total && saveSet(setKey(id, 'ngu-phap', `src-${ex.id}`), r.correct, r.total)}
                />
              </Card>
            )
          })()}
        {view.kind === 'test' && (
          <Card>
            {testQs.length ? (
              <>
                <DrillRunner key={testSeed} setId={setKey(id, 'ngu-phap', 'test')} questions={testQs} title="Kiểm tra ngữ pháp" />
                <Button className="mt-4" size="sm" variant="ghost" onClick={() => setTestSeed((s) => s + 1)}>
                  Đổi đề khác
                </Button>
              </>
            ) : (
              <Empty title="Bài luyện ngữ pháp của bài này đang được bổ sung." />
            )}
          </Card>
        )}
        {view.kind === 'weak' && (
          <Card>
            {weak.length ? (
              <DrillRunner setId={setKey(id, 'ngu-phap', 'weak')} questions={weak} shuffleItems title="Ôn câu sai" />
            ) : (
              <Empty title="Không có câu sai nào cần ôn." />
            )}
          </Card>
        )}
      </div>
    </div>
  )
}

function PointView({ unit, pointId }: { unit: Unit; pointId: string }) {
  const point = unit.grammarPoints.find((p) => p.id === pointId)
  const practice = unit.generated.grammar.find((g) => g.id === pointId)
  const sets = useProgress((s) => s.sets)
  const [open, setOpen] = useState(true)
  const [setIdx, setSetIdx] = useState<number | null>(null)
  const cur = setIdx !== null ? practice?.sets[setIdx] : undefined

  return (
    <div className="space-y-4">
      {point && (
        <Card>
          <button type="button" className="flex w-full items-center justify-between text-left" onClick={() => setOpen(!open)}>
            <Html html={point.title} className="text-lg font-bold [&_p]:m-0" />
            <span className="text-sub">{open ? '▲' : '▼'}</span>
          </button>
          {open && <Html html={point.html} className="mt-2" />}
        </Card>
      )}
      <Card>
        <p className="mb-2 font-semibold">Luyện tập mẫu này</p>
        {!practice?.sets.length ? (
          <Empty title="Bài luyện cho mẫu ngữ pháp này đang được bổ sung." />
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              {practice.sets.map((s, i) => (
                <Chip key={s.id} active={setIdx === i} onClick={() => setSetIdx(i)}>
                  {s.code} · {s.title} ({s.items.length}){sets[setKey(unit.meta.id, 'ngu-phap', s.id)] ? ' ✓' : ''}
                </Chip>
              ))}
            </div>
            {cur && (
              <div className="mt-4 border-t border-line pt-4">
                <DrillRunner key={cur.id} setId={setKey(unit.meta.id, 'ngu-phap', cur.id)} questions={cur.items as Question[]} title={`${cur.code} · ${cur.title}`} />
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  )
}
