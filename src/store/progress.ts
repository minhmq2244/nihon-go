import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Score {
  correct: number
  total: number
  at: number
}

export interface ItemStat {
  ok: number
  bad: number
  last: number
}

interface ProgressData {
  /** Vocab / kanji items and individual drills, keyed by id. */
  items: Record<string, ItemStat>
  /** Best and latest score per practice set (drill set, reading, listening, exercise…). */
  sets: Record<string, { last: Score; best: number }>
  /** Saved answers of textbook exercises and exams. */
  answers: Record<string, Record<string, string>>
  /** Completed steps of a dialogue (1–4). */
  dialogues: Record<string, number[]>
  /** History of unit tests and volume exams. */
  tests: Record<string, (Score & { parts?: Record<string, [number, number]>; wrong?: number[] })[]>
  /** Drafts of writing tasks. */
  drafts: Record<string, string>
  visited: Record<string, number>
  /** Best times (ms) of timed games such as Match. */
  times: Record<string, number>
  /** Correct answers per local day (YYYY-MM-DD), for the streak and daily goal. */
  days: Record<string, number>
  /** Where the learner was last: unit and tab. */
  lastPlace?: { unitId: string; tab: string }
}

interface Progress extends ProgressData {
  markItem: (id: string, ok: boolean) => void
  saveSet: (id: string, correct: number, total: number) => void
  saveAnswers: (id: string, answers: Record<string, string>) => void
  markDialogueStep: (id: string, step: number) => void
  saveTest: (id: string, r: Omit<Score, 'at'> & { parts?: Record<string, [number, number]>; wrong?: number[] }) => void
  saveDraft: (id: string, text: string) => void
  saveTime: (id: string, ms: number) => void
  visit: (unitId: string, tab?: string) => void
  importData: (d: ProgressData) => void
  reset: () => void
}

const empty: ProgressData = { items: {}, sets: {}, answers: {}, dialogues: {}, tests: {}, drafts: {}, visited: {}, times: {}, days: {} }

export const today = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export const useProgress = create<Progress>()(
  persist(
    (set) => ({
      ...empty,
      markItem: (id, ok) =>
        set((s) => {
          const cur = s.items[id] ?? { ok: 0, bad: 0, last: 0 }
          const d = today()
          return {
            items: { ...s.items, [id]: { ok: cur.ok + (ok ? 1 : 0), bad: cur.bad + (ok ? 0 : 1), last: Date.now() } },
            days: ok ? { ...s.days, [d]: (s.days[d] ?? 0) + 1 } : s.days,
          }
        }),
      saveSet: (id, correct, total) =>
        set((s) => {
          const pct = total ? correct / total : 0
          const best = Math.max(pct, s.sets[id]?.best ?? 0)
          return { sets: { ...s.sets, [id]: { last: { correct, total, at: Date.now() }, best } } }
        }),
      saveAnswers: (id, answers) => set((s) => ({ answers: { ...s.answers, [id]: answers } })),
      markDialogueStep: (id, step) =>
        set((s) => {
          const cur = s.dialogues[id] ?? []
          return cur.includes(step) ? s : { dialogues: { ...s.dialogues, [id]: [...cur, step].sort() } }
        }),
      saveTest: (id, r) => set((s) => ({ tests: { ...s.tests, [id]: [...(s.tests[id] ?? []), { ...r, at: Date.now() }] } })),
      saveDraft: (id, text) => set((s) => ({ drafts: { ...s.drafts, [id]: text } })),
      saveTime: (id, ms) => set((s) => (s.times[id] && s.times[id] <= ms ? s : { times: { ...s.times, [id]: ms } })),
      visit: (unitId, tab) => set((s) => ({ visited: { ...s.visited, [unitId]: Date.now() }, lastPlace: tab ? { unitId, tab } : s.lastPlace })),
      importData: (d) => set({ ...empty, ...d }),
      reset: () => set(empty),
    }),
    { name: 'nihon-progress' },
  ),
)

export function exportProgress(): ProgressData {
  const { items, sets, answers, dialogues, tests, drafts, visited, times, days, lastPlace } = useProgress.getState()
  return { items, sets, answers, dialogues, tests, drafts, visited, times, days, lastPlace }
}

/** Items answered wrong more often than right, most recent first. */
export function weakItems(prefix?: string): string[] {
  const { items } = useProgress.getState()
  return Object.entries(items)
    .filter(([id, s]) => (!prefix || id.startsWith(prefix)) && s.bad > 0 && s.bad >= s.ok)
    .sort((a, b) => b[1].last - a[1].last)
    .map(([id]) => id)
}

/** Consecutive days (ending today, or yesterday if nothing yet today) with at least one correct answer. */
export function streakOf(days: Record<string, number>): number {
  const d = new Date()
  const key = (x: Date) => `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`
  if (!days[key(d)]) d.setDate(d.getDate() - 1)
  let n = 0
  while (days[key(d)]) {
    n++
    d.setDate(d.getDate() - 1)
  }
  return n
}
