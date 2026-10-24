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

export type UnitTab = (typeof UNIT_TABS)[number]['id']

export const setKey = (unitId: string, tab: UnitTab, sub: string) => `${unitId}:${tab}:${sub}`

/** Share of a unit's tabs where at least one practice set was finished. */
export function useUnitProgress(unitId: string): { tabs: Set<string>; ratio: number } {
  const sets = useProgress((s) => s.sets)
  const tabs = new Set<string>()
  for (const k of Object.keys(sets)) {
    if (k.startsWith(unitId + ':')) tabs.add(k.split(':')[1]!)
  }
  return { tabs, ratio: tabs.size / UNIT_TABS.length }
}
