import { useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useIndex, useUnit, unitLabel } from '../lib/data'
import { SPEAK_TAB, UNIT_TABS, VERB_TAB, useUnitProgress, type UnitTab } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import { Jp } from '../components/Jp'
import { Loading, cx } from '../components/ui'
import { TheoryTab } from '../features/TheoryTab'
import { FlashcardTab } from '../features/FlashcardTab'
import { VerbTab } from '../features/VerbTab'
import { GrammarTab } from '../features/GrammarTab'
import { WritingTab } from '../features/WritingTab'
import { ReadingTab } from '../features/ReadingTab'
import { ListeningTab } from '../features/ListeningTab'
import { DialogueTab } from '../features/DialogueTab'
import { UnitTestTab } from '../features/UnitTestTab'
import { SpeakingTab } from '../features/SpeakingTab'

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
  const unitTabs: readonly { id: UnitTab; label: string }[] = (() => {
    let tabs: { id: UnitTab; label: string }[] = [...UNIT_TABS]
    if (unit.verbs && unit.verbs.length > 0) {
      const idx = tabs.findIndex((x) => x.id === 'the')
      tabs.splice(idx >= 0 ? idx + 1 : 2, 0, VERB_TAB)
    }
    if (unit.speaking) {
      const idx = tabs.findIndex((x) => x.id === 'hoi-thoai')
      tabs.splice(idx >= 0 ? idx + 1 : tabs.length - 1, 0, SPEAK_TAB)
    }
    return tabs
  })()

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <Link to="/units" className="inline-flex items-center gap-1 text-base font-semibold text-sub hover:text-accent">
            ← Tất cả bài học
          </Link>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight text-ink">
            <span className="mr-3 rounded-xl bg-accent-soft px-3 py-1 text-base sm:text-lg font-bold text-accent align-middle">
              {unitLabel(unit.meta)}
            </span>
            <Jp text={unit.meta.title} />
          </h1>
          <p className="mt-1.5 text-base sm:text-lg text-sub font-medium">{unit.meta.subtitle}</p>
        </div>
        <div className="flex gap-3 text-base font-semibold">
          {prev && (
            <Link className="rounded-lg bg-surface border border-line px-3 py-1 text-sub hover:border-accent hover:text-accent transition" to={`/u/${prev.id}/${tab}`}>
              ← {unitLabel(prev)}
            </Link>
          )}
          {next && (
            <Link className="rounded-lg bg-surface border border-line px-3 py-1 text-sub hover:border-accent hover:text-accent transition" to={`/u/${next.id}/${tab}`}>
              {unitLabel(next)} →
            </Link>
          )}
        </div>
      </div>
      <nav className="no-print sticky top-16 z-10 -mx-4 mb-6 flex gap-2 overflow-x-auto border-b border-line bg-bg/95 px-4 py-3 backdrop-blur-md">
        {unitTabs.map((x) => (
          <NavLink
            key={x.id}
            to={`/u/${id}/${x.id}`}
            className={({ isActive }) =>
              cx(
                'relative shrink-0 rounded-full px-4 py-2 text-[15px] sm:text-base transition',
                isActive ? 'bg-accent font-bold text-white shadow-sm' : 'bg-surface text-sub ring-1 ring-line hover:text-ink hover:ring-accent/40',
              )
            }
          >
            {x.label}
            {tabs.has(x.id) && <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-ok align-middle" />}
          </NavLink>
        ))}
      </nav>
      {t === 'ly-thuyet' && <TheoryTab unit={unit} />}
      {(t === 'the' || (t as string) === 'tu-vung' || (t as string) === 'kanji') && <FlashcardTab unit={unit} />}
      {t === 'dong-tu' && <VerbTab unit={unit} />}
      {t === 'ngu-phap' && <GrammarTab unit={unit} />}
      {t === 'viet' && <WritingTab unit={unit} />}
      {t === 'doc' && <ReadingTab unit={unit} />}
      {t === 'nghe' && <ListeningTab unit={unit} />}
      {t === 'hoi-thoai' && <DialogueTab unit={unit} />}
      {t === 'noi' && <SpeakingTab unit={unit} />}
      {t === 'kiem-tra' && <UnitTestTab unit={unit} />}
    </div>
  )
}
