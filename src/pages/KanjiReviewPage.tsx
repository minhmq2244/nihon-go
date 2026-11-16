import { useEffect, useMemo, useState } from 'react'
import { Check, CheckSquare, Filter, Layers, Search, Sparkles, Square } from 'lucide-react'
import { load, unitLabel, useIndex } from '../lib/data'
import { kanjiCharCards, kanjiCompoundCards } from '../lib/questions'
import { Flashcards } from '../components/Study'
import { Card, Chip, Empty, Loading, cx } from '../components/ui'
import { Jp } from '../components/Jp'
import type { Unit } from '../types'

const PRESETS = [
  { id: 'exam', label: '🔥 Cấp tốc ôn thi (Bài 8 - 11)', ids: ['b08', 'b09', 'b10', 'b11'] },
  { id: 'tap1', label: 'Tập 1 (Bài 1 - 5)', ids: ['b01', 'b02', 'b03', 'b04', 'b05'] },
  { id: 'tap2', label: 'Tập 2 (Bài 6 - 11)', ids: ['b06', 'b07', 'b08', 'b09', 'b10', 'b11'] },
  { id: 'all-basic', label: 'Tất cả bài học (Bài 1 - 11)', ids: ['b01', 'b02', 'b03', 'b04', 'b05', 'b06', 'b07', 'b08', 'b09', 'b10', 'b11'] },
  { id: 'chude', label: 'Chuyên đề (CD00 - CD09)', ids: ['cd00', 'cd01', 'cd02', 'cd03', 'cd04', 'cd05', 'cd06', 'cd07', 'cd08', 'cd09'] },
]

export function KanjiReviewPage() {
  const { data: index } = useIndex()

  // Selected unit IDs (default to upcoming exam lessons b08..b11 or all basic)
  const [selectedUnitIds, setSelectedUnitIds] = useState<string[]>(['b08', 'b09', 'b10', 'b11'])
  const [cardType, setCardType] = useState<'all' | 'char' | 'compound'>('all')
  const [unitsMap, setUnitsMap] = useState<Record<string, Unit>>({})
  const [loading, setLoading] = useState(false)
  const [showLookupTable, setShowLookupTable] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Load selected units that are not in unitsMap yet
  useEffect(() => {
    let alive = true
    const needed = selectedUnitIds.filter((id) => !unitsMap[id])
    if (needed.length === 0) return

    setLoading(true)
    Promise.all(
      needed.map((id) =>
        load<Unit>(`unit/${id}.json`)
          .then((u) => ({ id, u }))
          .catch(() => null),
      ),
    ).then((results) => {
      if (!alive) return
      setUnitsMap((prev) => {
        const next = { ...prev }
        for (const res of results) {
          if (res) next[res.id] = res.u
        }
        return next
      })
      setLoading(false)
    })

    return () => {
      alive = false
    }
  }, [selectedUnitIds, unitsMap])

  // Collect all kanji from selected units
  const selectedUnitsList = useMemo(
    () => selectedUnitIds.map((id) => unitsMap[id]).filter((u): u is Unit => Boolean(u)),
    [selectedUnitIds, unitsMap],
  )

  const allKanji = useMemo(() => {
    return selectedUnitsList.flatMap((u) => u.kanji ?? [])
  }, [selectedUnitsList])

  // Generate cards
  const charCards = useMemo(() => kanjiCharCards(allKanji), [allKanji])
  const compoundCards = useMemo(() => kanjiCompoundCards(allKanji), [allKanji])
  const allCards = useMemo(() => [...charCards, ...compoundCards], [charCards, compoundCards])

  const activeCards = useMemo(() => {
    if (cardType === 'char') return charCards
    if (cardType === 'compound') return compoundCards
    return allCards
  }, [cardType, charCards, compoundCards, allCards])

  // Presets handlers
  const applyPreset = (ids: string[]) => {
    setSelectedUnitIds(ids)
  }

  const toggleUnit = (id: string) => {
    setSelectedUnitIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  const selectAll = () => {
    if (!index) return
    setSelectedUnitIds(index.units.map((u) => u.id))
  }

  const clearAll = () => {
    setSelectedUnitIds([])
  }

  // Filtered Kanji list for lookup table
  const filteredKanjiList = useMemo(() => {
    if (!searchQuery.trim()) return allKanji
    const q = searchQuery.trim().toLowerCase()
    return allKanji.filter((k) => {
      const matchChar = k.char.toLowerCase().includes(q)
      const matchHanViet = k.hanviet.toLowerCase().includes(q)
      const matchOnkun = k.onkun.toLowerCase().includes(q)
      const matchCompound = k.compounds.some(
        (c) => c.jp.toLowerCase().includes(q) || c.meaning.toLowerCase().includes(q),
      )
      return matchChar || matchHanViet || matchOnkun || matchCompound
    })
  }, [allKanji, searchQuery])

  if (!index) return <Loading />

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-2">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Kho tài nguyên Kanji tổng hợp</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
          Ôn tập Kanji toàn diện
        </h1>
        <p className="mt-1.5 text-base sm:text-lg text-sub font-medium">
          Luyện nhớ chữ Hán, âm Hán-Việt, âm On/Kun và từ ghép thực tế. Chọn linh hoạt từng bài hoặc gộp nhiều bài để ôn thi cấp tốc.
        </p>
      </div>

      {/* Unit Selector Card */}
      <Card className="p-5 sm:p-6 space-y-4 shadow-sm border-line/80">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-bold text-ink">Chọn bài học để ôn tập</h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <button
              type="button"
              onClick={selectAll}
              className="inline-flex items-center gap-1 rounded-lg bg-muted px-2.5 py-1.5 text-sub hover:text-ink hover:bg-muted/80 transition cursor-pointer"
            >
              <CheckSquare className="h-3.5 w-3.5" /> Chọn tất cả
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1 rounded-lg bg-muted px-2.5 py-1.5 text-sub hover:text-ink hover:bg-muted/80 transition cursor-pointer"
            >
              <Square className="h-3.5 w-3.5" /> Bỏ chọn
            </button>
          </div>
        </div>

        {/* Presets */}
        <div className="space-y-1.5">
          <p className="text-xs font-bold uppercase tracking-wider text-sub">Gợi ý chọn nhanh:</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => {
              const isActive =
                p.ids.length === selectedUnitIds.length &&
                p.ids.every((id) => selectedUnitIds.includes(id))
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => applyPreset(p.ids)}
                  className={cx(
                    'rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer border',
                    isActive
                      ? 'bg-accent text-white border-accent shadow-xs'
                      : 'bg-muted/60 text-sub border-line hover:border-accent/40 hover:text-ink',
                  )}
                >
                  {p.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Unit Chips Grid */}
        <div className="space-y-1.5 pt-1">
          <p className="text-xs font-bold uppercase tracking-wider text-sub">
            Danh sách bài học ({selectedUnitIds.length}/{index.units.length} đã chọn):
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 max-h-48 overflow-y-auto p-1 border border-line/40 rounded-2xl bg-muted/20">
            {index.units.map((u) => {
              const isSelected = selectedUnitIds.includes(u.id)
              return (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => toggleUnit(u.id)}
                  className={cx(
                    'inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-xs font-bold transition cursor-pointer border',
                    isSelected
                      ? 'bg-accent-soft text-accent border-accent/40 shadow-2xs'
                      : 'bg-surface text-sub border-line/60 hover:border-line hover:text-ink',
                  )}
                >
                  {isSelected && <Check className="h-3.5 w-3.5" />}
                  <span>{unitLabel(u)}</span>
                </button>
              )
            })}
          </div>
        </div>
      </Card>

      {/* Mode & Card Type Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <Chip
            active={cardType === 'all'}
            onClick={() => setCardType('all')}
          >
            Tất cả thẻ ({allCards.length})
          </Chip>
          <Chip
            active={cardType === 'char'}
            onClick={() => setCardType('char')}
          >
            Chữ Hán đơn ({charCards.length})
          </Chip>
          <Chip
            active={cardType === 'compound'}
            onClick={() => setCardType('compound')}
          >
            Từ ghép Kanji ({compoundCards.length})
          </Chip>
        </div>

        <button
          type="button"
          onClick={() => setShowLookupTable(!showLookupTable)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline cursor-pointer ml-auto"
        >
          <Layers className="h-4 w-4" />
          <span>{showLookupTable ? 'Ẩn bảng tra cứu' : 'Hiện bảng tra cứu Kanji'}</span>
        </button>
      </div>

      {/* Main Flashcard Deck */}
      {selectedUnitIds.length === 0 ? (
        <Empty title="Chưa chọn bài học nào">
          <p className="text-sub text-sm">
            Hãy chọn ít nhất 1 bài học ở phía trên để bắt đầu ôn tập thẻ ghi nhớ Kanji.
          </p>
        </Empty>
      ) : loading && selectedUnitsList.length === 0 ? (
        <div className="py-12">
          <Loading />
        </div>
      ) : activeCards.length === 0 ? (
        <Card className="p-8 text-center text-sub space-y-3">
          <p className="text-2xl">📖</p>
          <p className="text-lg font-bold text-ink">Các bài được chọn không có thẻ Kanji nào.</p>
          <p className="text-sm">Hãy thử chọn thêm các bài khác ở phía trên.</p>
        </Card>
      ) : (
        <Flashcards key={`${selectedUnitIds.sort().join(',')}:${cardType}`} cards={activeCards} />
      )}

      {/* Kanji Lookup Table (Collapsible) */}
      {showLookupTable && selectedUnitIds.length > 0 && (
        <Card className="p-5 sm:p-6 space-y-4 shadow-sm border-line/80 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-3">
            <div>
              <h3 className="text-lg font-bold text-ink flex items-center gap-2">
                <Layers className="h-5 w-5 text-accent" />
                <span>Bảng tra cứu Kanji ({allKanji.length} chữ)</span>
              </h3>
              <p className="text-xs text-sub">
                Xem lại danh sách chi tiết các chữ Hán và từ ghép thuộc các bài đang chọn.
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sub" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm chữ Hán, Hán-Việt, từ ghép..."
                className="w-full rounded-xl border border-line bg-surface pl-9 pr-3 py-1.5 text-xs font-medium text-ink placeholder:text-sub/60 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[32rem] overflow-y-auto p-1">
            {filteredKanjiList.map((k) => (
              <div
                key={k.id}
                className="rounded-2xl border border-line bg-surface p-3.5 space-y-2 shadow-2xs hover:border-line-hover transition"
              >
                <div className="flex items-baseline justify-between gap-2 border-b border-line/40 pb-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl font-extrabold text-ink font-serif">{k.char}</span>
                    <span className="text-lg font-extrabold text-accent">{k.hanviet}</span>
                  </div>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-sub">
                    {k.strokes} nét
                  </span>
                </div>

                {k.onkun && (
                  <p className="text-xs font-medium text-sub">
                    <span className="font-bold text-ink">On/Kun:</span> {k.onkun}
                  </p>
                )}

                {k.story && (
                  <p className="text-xs text-ink/80 leading-relaxed bg-amber-500/10 border border-amber-500/20 rounded-xl p-2">
                    💡 {k.story}
                  </p>
                )}

                {k.compounds && k.compounds.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-sub">Từ ghép:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {k.compounds.map((comp, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-lg bg-muted/60 border border-line/60 px-2 py-0.5 text-xs font-medium text-ink"
                        >
                          <span className="font-bold">
                            <Jp text={comp.jp} />
                          </span>
                          <span className="text-sub">({comp.meaning.replace(/\s*\*.*?\*/g, '').trim()})</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
