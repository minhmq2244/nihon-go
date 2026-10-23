import { useMemo, useState } from 'react'
import type { Unit } from '../types'
import { cardTest, vocabCards, vocabV1, vocabV2, vocabV3 } from '../lib/questions'
import { setKey } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import { DrillRunner, type Question } from '../components/Drill'
import { Flashcards, Learn, Match } from '../components/Study'
import { Card, Chip, Empty } from '../components/ui'

const MODES = [
  { id: 'cards', label: 'Thẻ ghi nhớ' },
  { id: 'learn', label: 'Learn' },
  { id: 'match', label: 'Match' },
  { id: 'v1', label: 'V1 · Việt → Nhật' },
  { id: 'v2', label: 'V2 · Đọc từ' },
  { id: 'v3', label: 'V3 · Nghe → gõ' },
  { id: 'v4', label: 'V4 · Điền từ vào câu' },
  { id: 'test', label: 'Kiểm tra từ vựng' },
  { id: 'weak', label: 'Ôn câu sai' },
] as const

export function VocabTab({ unit }: { unit: Unit }) {
  const [mode, setMode] = useState<(typeof MODES)[number]['id']>('cards')
  const items = useProgress((s) => s.items)
  const id = unit.meta.id
  const cards = useMemo(() => vocabCards(unit.vocab), [unit])
  const v1 = useMemo(() => vocabV1(unit), [unit])
  const v2 = useMemo(() => vocabV2(unit), [unit])
  const v3 = useMemo(() => vocabV3(unit), [unit])
  const v4 = useMemo(() => unit.generated.vocabCloze.flatMap((s) => s.items) as Question[], [unit])
  const testQs = useMemo(() => [...cardTest(cards, v1, 30), ...v4.slice(0, 10)], [cards, v1, v4, mode])
  const all = useMemo(() => [...v1, ...v2, ...v3, ...v4], [v1, v2, v3, v4])
  const weak = useMemo(() => all.filter((q) => (items[q.id]?.bad ?? 0) > 0 && (items[q.id]?.bad ?? 0) >= (items[q.id]?.ok ?? 0)), [all, mode])

  if (!unit.vocab.length) return <Empty title="Bài này chưa có bảng từ vựng." />

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {MODES.map((m) => (
          <Chip key={m.id} active={mode === m.id} onClick={() => setMode(m.id)}>
            {m.label}
            {m.id === 'weak' && weak.length > 0 && ` (${weak.length})`}
          </Chip>
        ))}
      </div>
      <Card>
        {mode === 'cards' && <Flashcards cards={cards} />}
        {mode === 'learn' && (
          <Learn cards={cards} setId={setKey(id, 'tu-vung', 'learn')} typing={(c) => v1.find((q) => q.id === `${c.id}:v1`) ?? null} />
        )}
        {mode === 'match' && <Match cards={cards} setId={setKey(id, 'tu-vung', 'match')} />}
        {mode === 'v1' && <DrillRunner setId={setKey(id, 'tu-vung', 'v1')} questions={v1} shuffleItems title="V1 · Việt → Nhật" />}
        {mode === 'v2' && <DrillRunner setId={setKey(id, 'tu-vung', 'v2')} questions={v2} shuffleItems title="V2 · Đọc từ" />}
        {mode === 'v3' && <DrillRunner setId={setKey(id, 'tu-vung', 'v3')} questions={v3} shuffleItems title="V3 · Nghe → gõ" />}
        {mode === 'v4' &&
          (v4.length ? (
            <DrillRunner setId={setKey(id, 'tu-vung', 'v4')} questions={v4} title="V4 · Điền từ vào câu" />
          ) : (
            <Empty title="Bài điền từ vào câu cho bài này đang được bổ sung." />
          ))}
        {mode === 'test' && <DrillRunner setId={setKey(id, 'tu-vung', 'test')} questions={testQs} shuffleItems title="Kiểm tra từ vựng" />}
        {mode === 'weak' &&
          (weak.length ? (
            <DrillRunner setId={setKey(id, 'tu-vung', 'weak')} questions={weak} shuffleItems title="Ôn câu sai" />
          ) : (
            <Empty title="Không có câu sai nào cần ôn.">Làm V1–V4 hoặc bài kiểm tra; câu nào sai sẽ hiện ở đây.</Empty>
          ))}
      </Card>
      {mode === 'v1' && <p className="text-xs text-sub">Mẹo: bật “Gõ romaji → kana” trong Cài đặt nếu máy chưa có bộ gõ tiếng Nhật.</p>}
    </div>
  )
}
