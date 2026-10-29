import { useProgress } from '../store/progress'

export const UNIT_TABS = [
  { id: 'ly-thuyet', label: 'Lý thuyết' },
  { id: 'the', label: 'Thẻ ghi nhớ' },
  { id: 'ngu-phap', label: 'Ngữ pháp' },
  { id: 'viet', label: 'Viết' },
  { id: 'doc', label: 'Đọc hiểu' },
  { id: 'nghe', label: 'Nghe' },
  { id: 'hoi-thoai', label: 'Hội thoại' },
  { id: 'kiem-tra', label: 'Kiểm tra cuối bài' },
] as const

/** Only units with speaking content show this tab (after Hội thoại). */
export const SPEAK_TAB = { id: 'noi', label: 'Luyện nói' } as const

/** Units with verbs show this tab (after Thẻ ghi nhớ). */
export const VERB_TAB = { id: 'dong-tu', label: 'Ôn tập động từ' } as const

export const ALL_UNIT_TABS = [...UNIT_TABS, SPEAK_TAB, VERB_TAB] as const

export type UnitTab = (typeof ALL_UNIT_TABS)[number]['id']

export const setKey = (unitId: string, tab: UnitTab, sub: string) => `${unitId}:${tab}:${sub}`

/** Share of a unit's tabs where at least one practice set was finished. */
export function useUnitProgress(unitId: string): { tabs: Set<string>; ratio: number } {
  const sets = useProgress((s) => s.sets)
  const tabs = new Set<string>()
  for (const k of Object.keys(sets)) {
    if (k.startsWith(unitId + ':')) tabs.add(k.split(':')[1]!)
  }
  const counted = UNIT_TABS.filter((t) => tabs.has(t.id)).length
  return { tabs, ratio: counted / UNIT_TABS.length }
}
