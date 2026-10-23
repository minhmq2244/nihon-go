import { useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useIndex, useUnit, unitLabel } from '../lib/data'
import { UNIT_TABS, useUnitProgress, type UnitTab } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import { Jp } from '../components/Jp'
import { Loading, cx } from '../components/ui'
import { TheoryTab } from '../features/TheoryTab'
import { VocabTab } from '../features/VocabTab'
import { KanjiTab } from '../features/KanjiTab'
import { GrammarTab } from '../features/GrammarTab'
import { WritingTab } from '../features/WritingTab'
import { ReadingTab } from '../features/ReadingTab'
import { ListeningTab } from '../features/ListeningTab'
import { DialogueTab } from '../features/DialogueTab'
import { UnitTestTab } from '../features/UnitTestTab'

export function UnitPage() {
  const { id = '', tab = 'ly-thuyet' } = useParams()
  const { data: unit, error } = useUnit(id)
  const { data: index } = useIndex()
  const visit = useProgress((s) => s.visit)
  const { tabs } = useUnitProgress(id)
  useEffect(() => {
    if (unit) visit(id, tab)
  }, [unit, id, tab, visit])

  if (error) return <p className="text-bad">{error}</p>
  if (!unit) return <Loading />

  const pos = index?.units.findIndex((u) => u.id === id) ?? -1
  const prev = pos > 0 ? index!.units[pos - 1] : undefined
  const next = index && pos >= 0 && pos < index.units.length - 1 ? index.units[pos + 1] : undefined
  const t = tab as UnitTab

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <Link to="/units" className="text-sm text-sub hover:text-accent">
            ← Tất cả bài
          </Link>
          <h1 className="text-2xl font-bold leading-snug">
            <span className="mr-2 rounded-lg bg-accent-soft px-2 py-0.5 text-base font-bold text-accent align-middle">{unitLabel(unit.meta)}</span>
            <Jp text={unit.meta.title} />
          </h1>
          <p className="text-sub">{unit.meta.subtitle}</p>
        </div>
        <div className="flex gap-2 text-sm">
          {prev && (
            <Link className="text-sub hover:text-accent" to={`/u/${prev.id}/${tab}`}>
              ← {unitLabel(prev)}
            </Link>
          )}
          {next && (
            <Link className="text-sub hover:text-accent" to={`/u/${next.id}/${tab}`}>
              {unitLabel(next)} →
            </Link>
          )}
        </div>
      </div>
      <nav className="no-print sticky top-14 z-10 -mx-4 mb-5 flex gap-1.5 overflow-x-auto border-b border-line bg-bg/95 px-4 py-2.5 backdrop-blur">
        {UNIT_TABS.map((x) => (
          <NavLink
            key={x.id}
            to={`/u/${id}/${x.id}`}
            className={({ isActive }) =>
              cx(
                'relative shrink-0 rounded-full px-3.5 py-1.5 text-sm transition',
                isActive ? 'bg-accent font-semibold text-white shadow-sm' : 'bg-surface text-sub ring-1 ring-line hover:text-ink',
              )
            }
          >
            {x.label}
            {tabs.has(x.id) && <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-ok align-middle" />}
          </NavLink>
        ))}
      </nav>
      {t === 'ly-thuyet' && <TheoryTab unit={unit} />}
      {t === 'tu-vung' && <VocabTab unit={unit} />}
      {t === 'kanji' && <KanjiTab unit={unit} />}
      {t === 'ngu-phap' && <GrammarTab unit={unit} />}
      {t === 'viet' && <WritingTab unit={unit} />}
      {t === 'doc' && <ReadingTab unit={unit} />}
      {t === 'nghe' && <ListeningTab unit={unit} />}
      {t === 'hoi-thoai' && <DialogueTab unit={unit} />}
      {t === 'kiem-tra' && <UnitTestTab unit={unit} />}
    </div>
  )
}
