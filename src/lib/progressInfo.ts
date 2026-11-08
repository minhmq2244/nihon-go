import { useProgress } from '../store/progress'

/** Every tab of a unit page. Ids are part of the URL (/u/b11/luyen-noi) and of progress keys. */
export const ALL_UNIT_TABS = [
  { id: 'ly-thuyet', label: 'Lý thuyết' },
  { id: 'the', label: 'Thẻ từ vựng' },
  { id: 'luyen-nghe', label: 'Luyện nghe' },
  { id: 'luyen-noi', label: 'Luyện nói' },
  { id: 'hoi-thoai', label: 'Hội thoại' },
  { id: 'doc', label: 'Đọc hiểu' },
  { id: 'ngu-phap', label: 'Ngữ pháp' },
  { id: 'dong-tu', label: 'Động từ' },
  { id: 'viet', label: 'Viết' },
  { id: 'nghe', label: 'Nghe trắc nghiệm' },
  { id: 'noi', label: 'Phản xạ nói' },
  { id: 'kiem-tra', label: 'Kiểm tra cuối bài' },
] as const

export type UnitTab = (typeof ALL_UNIT_TABS)[number]['id']

export interface UnitSection {
  id: string
  label: string
  hint: string
  tabs: readonly UnitTab[]
  /** Not part of the numbered path. */
  extra?: boolean
}

/** The unit page in learning order: ① Học → ⑤ Đọc hiểu, then the optional exercises. */
export const UNIT_SECTIONS: readonly UnitSection[] = [
  { id: 'hoc', label: 'Học', hint: 'Lý thuyết và từ vựng', tabs: ['ly-thuyet', 'the'] },
  { id: 'luyen-nghe', label: 'Luyện nghe', hint: 'Nghe ra từ của bài', tabs: ['luyen-nghe'] },
  { id: 'luyen-noi', label: 'Luyện nói', hint: 'Nói trôi mọi mẫu câu', tabs: ['luyen-noi'] },
  { id: 'hoi-thoai', label: 'Hội thoại', hint: 'Hội thoại theo tình huống', tabs: ['hoi-thoai'] },
  { id: 'doc', label: 'Đọc hiểu', hint: 'Bài đọc và hỏi đáp', tabs: ['doc'] },
  { id: 'them', label: 'Bài tập thêm', hint: 'Ôn trước khi thi', tabs: ['ngu-phap', 'dong-tu', 'viet', 'nghe', 'noi', 'kiem-tra'], extra: true },
]

export const MAIN_SECTIONS = UNIT_SECTIONS.filter((s) => !s.extra)

export const sectionOf = (tab: string) => UNIT_SECTIONS.find((s) => (s.tabs as readonly string[]).includes(tab)) ?? UNIT_SECTIONS[0]!

export const tabLabel = (tab: string) => ALL_UNIT_TABS.find((t) => t.id === tab)?.label

export const setKey = (unitId: string, tab: UnitTab, sub: string) => `${unitId}:${tab}:${sub}`

/** Tabs of a unit where at least one practice set was finished. */
export function doneTabs(sets: Record<string, unknown>, unitId: string): Set<string> {
  const tabs = new Set<string>()
  for (const k of Object.keys(sets)) if (k.startsWith(unitId + ':')) tabs.add(k.split(':')[1]!)
  return tabs
}

/** Share of the numbered sections with some finished practice. */
export function unitRatio(sets: Record<string, unknown>, unitId: string): number {
  const tabs = doneTabs(sets, unitId)
  return MAIN_SECTIONS.filter((s) => s.tabs.some((t) => tabs.has(t))).length / MAIN_SECTIONS.length
}

export function useUnitProgress(unitId: string): { tabs: Set<string>; ratio: number } {
  const sets = useProgress((s) => s.sets)
  return { tabs: doneTabs(sets, unitId), ratio: unitRatio(sets, unitId) }
}
