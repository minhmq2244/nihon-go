import { useMemo, useState } from 'react'
import {
  Check,
  CheckSquare,
  Play,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import type { Card as StudyCard } from '../lib/questions'
import { useProgress } from '../store/progress'
import { Jp } from './Jp'
import { Button, Chip, SpeakButton, cx } from './ui'

interface WordSelectorProps {
  title: string
  deckKey: string
  cards: StudyCard[]
  selectedIds: string[] | null // null means all cards selected by default
  onSaveSelection: (newSelectedIds: string[] | null) => void
  onClose: () => void
  onStartPractice: (mode: 'cards' | 'learn' | 'match') => void
}

type FilterTab = 'all' | 'selected' | 'unselected' | 'unknown' | 'known'

export function WordSelector({
  title,
  cards,
  selectedIds,
  onSaveSelection,
  onClose,
  onStartPractice,
}: WordSelectorProps) {
  const items = useProgress((s) => s.items)

  // Determine if card is known
  const isCardKnown = (c: StudyCard) => (items[`${c.id}:card`]?.ok ?? 0) > (items[`${c.id}:card`]?.bad ?? 0)

  // Initialize selected IDs set (if null, all cards are selected)
  const [selectedSet, setSelectedSet] = useState<Set<string>>(() => {
    if (selectedIds === null) {
      return new Set(cards.map((c) => c.id))
    }
    return new Set(selectedIds)
  })

  const [search, setSearch] = useState('')
  const [filterTab, setFilterTab] = useState<FilterTab>('all')

  const totalCount = cards.length
  const selectedCount = selectedSet.size
  const knownCount = useMemo(() => cards.filter(isCardKnown).length, [cards, items])
  const unknownCount = totalCount - knownCount

  // Filtered cards according to search query and active tab
  const filteredCards = useMemo(() => {
    const q = search.trim().toLowerCase()
    return cards.filter((c) => {
      // Tab filter
      if (filterTab === 'selected' && !selectedSet.has(c.id)) return false
      if (filterTab === 'unselected' && selectedSet.has(c.id)) return false
      if (filterTab === 'unknown' && isCardKnown(c)) return false
      if (filterTab === 'known' && !isCardKnown(c)) return false

      // Text search
      if (!q) return true
      const inFront = c.front.toLowerCase().includes(q)
      const inBack = c.back.toLowerCase().includes(q)
      const inExtra = c.extra ? c.extra.toLowerCase().includes(q) : false
      return inFront || inBack || inExtra
    })
  }, [cards, search, filterTab, selectedSet, items])

  // Handlers for selection
  const toggleCard = (id: string) => {
    setSelectedSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handleSelectAll = () => {
    setSelectedSet(new Set(cards.map((c) => c.id)))
  }

  const handleDeselectAll = () => {
    setSelectedSet(new Set())
  }

  const handleSelectOnlyUnknown = () => {
    const unknownIds = cards.filter((c) => !isCardKnown(c)).map((c) => c.id)
    setSelectedSet(new Set(unknownIds))
  }

  const handleInvertSelection = () => {
    setSelectedSet((prev) => {
      const next = new Set<string>()
      for (const c of cards) {
        if (!prev.has(c.id)) next.add(c.id)
      }
      return next
    })
  }

  const handleSelectPreset = (count: number) => {
    const subset = cards.slice(0, count).map((c) => c.id)
    setSelectedSet(new Set(subset))
  }

  // Save current selection to store/parent
  const applySelection = (idsSet: Set<string>) => {
    if (idsSet.size === totalCount) {
      // If all are selected, store null to indicate default (unfiltered)
      onSaveSelection(null)
    } else {
      onSaveSelection(Array.from(idsSet))
    }
  }

  const handleSaveAndClose = () => {
    applySelection(selectedSet)
    onClose()
  }

  const handleStart = (mode: 'cards' | 'learn' | 'match') => {
    applySelection(selectedSet)
    onStartPractice(mode)
  }

  const handleResetToAll = () => {
    onSaveSelection(null)
    onClose()
  }

  return (
    <div className="relative space-y-5 rounded-3xl border border-line bg-surface p-4 sm:p-6 shadow-sm">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-sm">
            <CheckSquare className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
                Chế độ chọn từ luyện tập
              </h3>
              <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent">
                {title}
              </span>
            </div>
            <p className="mt-0.5 text-xs sm:text-sm text-sub">
              Tick chọn các từ bạn muốn học. Lật thẻ, Learn và Match sẽ chỉ luyện tập các từ đã chọn.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={onClose}
            className="flex items-center gap-1.5 text-sub hover:text-ink"
            title="Đóng không lưu thay đổi"
          >
            <X className="h-4 w-4" />
            <span>Đóng</span>
          </Button>

          <Button
            size="sm"
            variant="primary"
            onClick={handleSaveAndClose}
            disabled={selectedCount === 0}
            className="flex items-center gap-1.5"
          >
            <Check className="h-4 w-4" />
            <span>Áp dụng ({selectedCount} từ)</span>
          </Button>
        </div>
      </div>

      {/* Control Panel: Filters, Search & Batch Actions */}
      <div className="space-y-3 rounded-2xl border border-line/80 bg-muted/40 p-3 sm:p-4">
        {/* Search & Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sub" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm theo chữ Hán, Hiragana, nghĩa..."
              className="w-full rounded-xl border border-line bg-surface py-2 pl-9 pr-8 text-sm text-ink placeholder:text-sub/60 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sub hover:text-ink cursor-pointer"
                title="Xóa tìm kiếm"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
            {(
              [
                ['all', `Tất cả (${totalCount})`],
                ['selected', `Đã chọn (${selectedCount})`],
                ['unselected', `Chưa chọn (${totalCount - selectedCount})`],
                ['unknown', `Chưa thuộc (${unknownCount})`],
                ['known', `Đã thuộc (${knownCount})`],
              ] as const
            ).map(([tabKey, label]) => (
              <Chip
                key={tabKey}
                active={filterTab === tabKey}
                onClick={() => setFilterTab(tabKey)}
                className="py-1 px-3 text-xs"
              >
                {label}
              </Chip>
            ))}
          </div>
        </div>

        {/* Quick Selection Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-line/50 text-xs">
          <span className="font-semibold text-sub mr-1 flex items-center gap-1">
            <SlidersHorizontal className="h-3.5 w-3.5 text-accent" />
            Chọn nhanh:
          </span>

          <Button size="sm" variant="default" onClick={handleSelectAll} className="h-7 px-2.5 text-xs">
            Chọn tất cả ({totalCount})
          </Button>

          <Button size="sm" variant="default" onClick={handleDeselectAll} className="h-7 px-2.5 text-xs">
            Bỏ chọn hết
          </Button>

          <Button
            size="sm"
            variant="default"
            onClick={handleSelectOnlyUnknown}
            disabled={unknownCount === 0}
            className="h-7 px-2.5 text-xs text-warn"
            title="Chọn tất cả các từ chưa đánh dấu thuộc"
          >
            Chỉ từ chưa thuộc ({unknownCount})
          </Button>

          <Button size="sm" variant="default" onClick={handleInvertSelection} className="h-7 px-2.5 text-xs">
            Đảo ngược chọn
          </Button>

          {totalCount >= 15 && (
            <>
              <span className="text-sub/40">|</span>
              <Button size="sm" variant="ghost" onClick={() => handleSelectPreset(10)} className="h-7 px-2 text-xs">
                10 từ đầu
              </Button>
              {totalCount >= 20 && (
                <Button size="sm" variant="ghost" onClick={() => handleSelectPreset(20)} className="h-7 px-2 text-xs">
                  20 từ đầu
                </Button>
              )}
            </>
          )}

          <div className="ml-auto flex items-center gap-1.5 text-xs text-sub">
            <span>Đang hiển thị:</span>
            <strong className="text-ink">{filteredCards.length}</strong> / {totalCount} từ
          </div>
        </div>
      </div>

      {/* Cards Selection List */}
      {filteredCards.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line p-8 text-center text-sub space-y-2">
          <p className="text-base font-semibold text-ink">Không tìm thấy từ nào phù hợp</p>
          <p className="text-xs">Thử xóa bộ lọc tìm kiếm hoặc chuyển sang tab "Tất cả".</p>
          {search && (
            <Button size="sm" variant="default" onClick={() => setSearch('')} className="mt-2 text-xs">
              Xóa từ khóa "{search}"
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 max-h-[58vh] overflow-y-auto pr-1">
          {filteredCards.map((card, idx) => {
            const isSelected = selectedSet.has(card.id)
            const isKnown = isCardKnown(card)

            return (
              <div
                key={card.id}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => toggleCard(card.id)}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault()
                    toggleCard(card.id)
                  }
                }}
                className={cx(
                  'group relative flex flex-col justify-between rounded-2xl border p-3.5 sm:p-4 text-left transition select-none cursor-pointer outline-none',
                  isSelected
                    ? 'border-accent bg-accent-soft/35 dark:bg-accent-soft/20 shadow-xs ring-1 ring-accent/30'
                    : 'border-line bg-surface hover:border-line hover:bg-muted/40 opacity-80 hover:opacity-100',
                )}
              >
                <div>
                  {/* Top line: Checkbox + Status badge + Audio */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={cx(
                          'flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border transition',
                          isSelected
                            ? 'border-accent bg-accent text-white shadow-xs'
                            : 'border-line bg-surface group-hover:border-accent/60',
                        )}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5 stroke-[2.5]" />}
                      </div>

                      <span className="text-xs font-semibold text-sub/70">#{idx + 1}</span>

                      {isKnown ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-ok-soft px-2 py-0.5 text-[11px] font-semibold text-ok border border-ok/20">
                          <Check className="h-3 w-3" /> Đã thuộc
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-sub">
                          Chưa thuộc
                        </span>
                      )}
                    </div>

                    <div
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                      className="shrink-0"
                    >
                      <SpeakButton
                        text={card.speak}
                        className="h-7 w-7 text-sub hover:bg-surface hover:text-accent border border-transparent hover:border-line transition"
                      />
                    </div>
                  </div>

                  {/* Japanese front text */}
                  <div className="font-bold text-lg sm:text-xl text-ink tracking-tight mb-1">
                    <Jp text={card.front} />
                  </div>

                  {/* Vietnamese meaning */}
                  <div className="text-sm font-medium text-ink/90 leading-snug">{card.back}</div>
                </div>

                {/* Extra note / kanji tag if available */}
                {card.extra && (
                  <div className="mt-2.5 pt-2 border-t border-line/40 text-xs text-sub leading-relaxed line-clamp-2">
                    <Jp text={card.extra} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Sticky Bottom Bar with Direct Study Actions */}
      <div className="sticky bottom-0 z-20 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 rounded-b-3xl border-t border-line bg-surface/95 px-4 py-3.5 sm:px-6 backdrop-blur-md shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-accent text-white font-bold text-xs shadow-xs">
                {selectedCount}
              </span>
              <div>
                <p className="text-sm font-bold text-ink">
                  {selectedCount === 0 ? (
                    <span className="text-bad">Chưa chọn từ nào</span>
                  ) : (
                    <>
                      Đã chọn <strong className="text-accent">{selectedCount}</strong> / {totalCount} từ
                    </>
                  )}
                </p>
                <p className="text-xs text-sub">
                  {selectedCount === 0
                    ? 'Hãy tick chọn ít nhất 1 từ để luyện tập'
                    : selectedCount === totalCount
                    ? 'Đang chọn toàn bộ bài học'
                    : `Sẽ chỉ luyện tập ${selectedCount} từ này`}
                </p>
              </div>
            </div>

            {selectedCount < totalCount && (
              <Button
                size="sm"
                variant="ghost"
                onClick={handleResetToAll}
                className="hidden md:inline-flex text-xs text-sub hover:text-accent"
                title="Khôi phục luyện tập tất cả các từ trong bài"
              >
                Luyện tất cả ({totalCount})
              </Button>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 ml-auto">
            <Button
              size="sm"
              variant="primary"
              disabled={selectedCount === 0}
              onClick={() => handleStart('cards')}
              className="flex items-center gap-1.5 shadow-sm"
              title="Luyện tập lật thẻ với các từ đã chọn"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Lật thẻ ({selectedCount})</span>
            </Button>

            <Button
              size="sm"
              variant="default"
              disabled={selectedCount === 0}
              onClick={() => handleStart('learn')}
              className="flex items-center gap-1.5"
              title="Luyện tập chế độ Learn với các từ đã chọn"
            >
              <span>Learn ({selectedCount})</span>
            </Button>

            <Button
              size="sm"
              variant="default"
              disabled={selectedCount === 0}
              onClick={() => handleStart('match')}
              className="flex items-center gap-1.5"
              title="Chơi trò chơi ghép thẻ Match với các từ đã chọn"
            >
              <span>Match ({selectedCount})</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
