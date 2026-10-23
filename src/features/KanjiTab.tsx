import { useMemo, useState } from 'react'
import type { KanjiItem, Unit } from '../types'
import { cardTest, kanjiCards, kanjiK1, kanjiK2, kanjiK3 } from '../lib/questions'
import { setKey } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import { DrillRunner, type Question } from '../components/Drill'
import { Flashcards, Learn, Match } from '../components/Study'
import { Jp } from '../components/Jp'
import { Card, Chip, Empty, SpeakButton } from '../components/ui'

const MODES = [
  { id: 'list', label: 'Bảng Kanji' },
  { id: 'cards', label: 'Thẻ ghi nhớ' },
  { id: 'learn', label: 'Learn' },
  { id: 'match', label: 'Match' },
  { id: 'k1', label: 'K1 · Đọc từ ghép' },
  { id: 'k2', label: 'K2 · Hán Việt ↔ Kanji' },
  { id: 'k3', label: 'K3 · Chữ dễ nhầm' },
  { id: 'k4', label: 'K4 · Viết lại bằng Kanji' },
  { id: 'test', label: 'Kiểm tra Kanji' },
  { id: 'weak', label: 'Ôn câu sai' },
] as const

function KanjiCard({ k }: { k: KanjiItem }) {
  return (
    <div className="rounded-xl border border-line p-4">
      <div className="flex items-start gap-4">
        <span lang="ja" className="text-5xl font-semibold leading-none">
          {k.char}
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-accent">{k.hanviet}</p>
          <p className="text-sm" lang="ja">
            {k.onkun}
          </p>
          {k.strokes && <p className="text-xs text-sub">{k.strokes} nét</p>}
        </div>
      </div>
      {k.parts && <p className="mt-2 text-sm text-sub">Bộ: {k.parts}</p>}
      {k.story && <p className="mt-1 text-sm">{k.story}</p>}
      <ul className="mt-2 space-y-0.5 text-sm">
        {k.compounds.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            <Jp text={c.jp} className="font-medium" />
            <span className="text-sub">{c.meaning}</span>
            <SpeakButton text={c.jp} className="h-6 w-6" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function KanjiTab({ unit }: { unit: Unit }) {
  const [mode, setMode] = useState<(typeof MODES)[number]['id']>('list')
  const items = useProgress((s) => s.items)
  const id = unit.meta.id
  const cards = useMemo(() => kanjiCards(unit.kanji), [unit])
  const k1 = useMemo(() => kanjiK1(unit), [unit])
  const k2 = useMemo(() => kanjiK2(unit), [unit, mode])
  const k3 = useMemo(
    () => [...kanjiK3(unit), ...(unit.generated.kanji.filter((s) => s.code === 'K3').flatMap((s) => s.items) as Question[])],
    [unit],
  )
  const k4 = useMemo(() => unit.generated.kanji.filter((s) => s.code !== 'K3').flatMap((s) => s.items) as Question[], [unit])
  const testQs = useMemo(() => [...cardTest(cards, k1, 15), ...k1.slice(0, 5), ...k4.slice(0, 5)], [cards, k1, k4, mode])
  const all = useMemo(() => [...k1, ...k3, ...k4], [k1, k3, k4])
  const weak = useMemo(() => all.filter((q) => (items[q.id]?.bad ?? 0) > 0 && (items[q.id]?.bad ?? 0) >= (items[q.id]?.ok ?? 0)), [all, mode])

  if (!unit.kanji.length) return <Empty title="Bài này chưa có bảng Kanji." />

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
      {mode === 'list' ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {unit.kanji.map((k) => (
            <KanjiCard key={k.id} k={k} />
          ))}
        </div>
      ) : (
        <Card>
          {mode === 'cards' && <Flashcards cards={cards} big />}
          {mode === 'learn' && <Learn cards={cards} setId={setKey(id, 'kanji', 'learn')} typing={() => null} />}
          {mode === 'match' && <Match cards={cards} setId={setKey(id, 'kanji', 'match')} />}
          {mode === 'k1' && <DrillRunner setId={setKey(id, 'kanji', 'k1')} questions={k1} shuffleItems title="K1 · Đọc từ ghép" />}
          {mode === 'k2' && <DrillRunner setId={setKey(id, 'kanji', 'k2')} questions={k2} shuffleItems title="K2 · Hán Việt ↔ Kanji" />}
          {mode === 'k3' &&
            (k3.length ? (
              <DrillRunner setId={setKey(id, 'kanji', 'k3')} questions={k3} shuffleItems title="K3 · Chữ dễ nhầm" />
            ) : (
              <Empty title="Bài này chưa có nhóm chữ dễ nhầm." />
            ))}
          {mode === 'k4' &&
            (k4.length ? (
              <DrillRunner setId={setKey(id, 'kanji', 'k4')} questions={k4} title="K4 · Viết lại bằng Kanji" />
            ) : (
              <Empty title="Bài viết lại bằng Kanji cho bài này đang được bổ sung." />
            ))}
          {mode === 'test' && <DrillRunner setId={setKey(id, 'kanji', 'test')} questions={testQs} shuffleItems title="Kiểm tra Kanji" />}
          {mode === 'weak' &&
            (weak.length ? (
              <DrillRunner setId={setKey(id, 'kanji', 'weak')} questions={weak} shuffleItems title="Ôn câu sai" />
            ) : (
              <Empty title="Không có câu sai nào cần ôn." />
            ))}
        </Card>
      )}
    </div>
  )
}
