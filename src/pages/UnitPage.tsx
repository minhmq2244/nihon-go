import { useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useIndex, useUnit, unitLabel } from '../lib/data'
import { UNIT_SECTIONS, sectionOf, tabLabel, useUnitProgress, type UnitTab } from '../lib/progressInfo'
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
import { ListenPracticeTab } from '../features/ListenPracticeTab'
import { SpeakPracticeTab } from '../features/SpeakPracticeTab'
import type { Unit } from '../types'

/** Tabs that have content in this unit. */
function hasTab(unit: Unit, tab: UnitTab): boolean {
  const sp = unit.speaking
  if (tab === 'dong-tu') return !!unit.verbs?.length
  if (tab === 'noi') return !!sp && !!(sp.reflex.length || sp.chains.length || sp.dialogues.length || sp.talks.length)
  return true
}

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
  const section = sectionOf(t)
  const subTabs = section.tabs.filter((x) => hasTab(unit, x))
  const sectionDone = (sec: (typeof UNIT_SECTIONS)[number]) => sec.tabs.some((x) => tabs.has(x))

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
      <nav className="no-print sticky top-16 z-10 -mx-4 mb-4 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur-md">
        <div className="grid grid-cols-6 gap-1 sm:gap-2">
          {UNIT_SECTIONS.map((sec, i) => {
            const active = sec.id === section.id
            const first = sec.tabs.find((x) => hasTab(unit, x))!
            const done = sectionDone(sec)
            return (
              <Link
                key={sec.id}
                to={`/u/${id}/${active ? t : first}`}
                title={sec.hint}
                className={cx(
                  'flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-2 text-center transition lg:flex-row lg:justify-center lg:gap-2 lg:px-2',
                  active
                    ? 'bg-accent text-white shadow-sm'
                    : sec.extra
                      ? 'border border-dashed border-line text-sub hover:border-accent/50 hover:text-ink'
                      : 'bg-surface text-ink ring-1 ring-line hover:ring-accent/40',
                )}
              >
                <span
                  className={cx(
                    'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                    active ? 'bg-white/25 text-white' : done && !sec.extra ? 'bg-ok text-white' : 'bg-muted text-sub',
                  )}
                >
                  {sec.extra ? '+' : done && !active ? '✓' : i + 1}
                </span>
                <span className={cx('text-xs leading-tight sm:text-sm', active ? 'font-bold' : 'font-semibold')}>{sec.label}</span>
              </Link>
            )
          })}
        </div>
        {subTabs.length > 1 && (
          <div className="mt-2.5 flex gap-1 overflow-x-auto [scrollbar-width:none]">
            {subTabs.map((x) => (
              <NavLink
                key={x}
                to={`/u/${id}/${x}`}
                className={({ isActive }) =>
                  cx(
                    'shrink-0 rounded-lg px-3 py-1.5 text-[15px] transition',
                    isActive ? 'bg-accent-soft font-bold text-accent' : 'text-sub hover:bg-muted hover:text-ink',
                  )
                }
              >
                {tabLabel(x)}
                {tabs.has(x) && <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-ok align-middle" />}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
      {t === 'ly-thuyet' && <TheoryTab unit={unit} />}
      {(t === 'the' || (t as string) === 'tu-vung' || (t as string) === 'kanji') && <FlashcardTab unit={unit} />}
      {t === 'dong-tu' && <VerbTab unit={unit} />}
      {t === 'ngu-phap' && <GrammarTab unit={unit} />}
      {t === 'viet' && <WritingTab unit={unit} />}
      {t === 'doc' && <ReadingTab unit={unit} />}
      {t === 'nghe' && <ListeningTab unit={unit} />}
      {t === 'hoi-thoai' && <DialogueTab unit={unit} />}
      {t === 'noi' && unit.speaking && <SpeakingTab unit={unit} />}
      {t === 'luyen-nghe' && <ListenPracticeTab unit={unit} />}
      {t === 'luyen-noi' && <SpeakPracticeTab unit={unit} />}
      {t === 'kiem-tra' && <UnitTestTab unit={unit} />}
    </div>
  )
}
