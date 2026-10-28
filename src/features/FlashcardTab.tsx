import { useMemo, useState } from 'react'
import { CheckSquare, Pencil } from 'lucide-react'
import type { Unit } from '../types'
import { kanjiCards, kanjiCharCards, kanjiCompoundCards, vocabCards, vocabV1 } from '../lib/questions'
import { setKey } from '../lib/progressInfo'
import { useCustomCards } from '../store/customCards'
import { useCardSelection } from '../store/cardSelection'
import { Flashcards, Learn, Match } from '../components/Study'
import { DeckEditor } from '../components/DeckEditor'
import { WordSelector } from '../components/WordSelector'
import { Button, Card, Chip, Empty } from '../components/ui'

const MODES = [
  { id: 'cards', label: 'Lật thẻ' },
  { id: 'learn', label: 'Learn' },
  { id: 'match', label: 'Match' },
] as const

/** Quizlet-style study: pick the vocabulary deck or the kanji deck, then flip cards / learn / match. */
export function FlashcardTab({ unit }: { unit: Unit }) {
  const [deck, setDeck] = useState<'vocab' | 'kanji'>('vocab')
  const [kanjiFilter, setKanjiFilter] = useState<'all' | 'char' | 'compound'>('all')
  const [mode, setMode] = useState<(typeof MODES)[number]['id']>('cards')
  const [isEditing, setIsEditing] = useState(false)
  const [isSelecting, setIsSelecting] = useState(false)
  const id = unit.meta.id

  const { decks, saveDeck, resetDeck } = useCustomCards()
  const { selections, setSelection, resetDeckSelection } = useCardSelection()

  const vocab = useMemo(() => vocabCards(unit.vocab), [unit])
  const kanjiAll = useMemo(() => kanjiCards(unit.kanji), [unit])
  const kanjiChars = useMemo(() => kanjiCharCards(unit.kanji), [unit])
  const kanjiCompounds = useMemo(() => kanjiCompoundCards(unit.kanji), [unit])

  const kanjiDefault = useMemo(() => {
    if (kanjiFilter === 'char') return kanjiChars
    if (kanjiFilter === 'compound') return kanjiCompounds
    return kanjiAll
  }, [kanjiFilter, kanjiChars, kanjiCompounds, kanjiAll])

  const deckKey = deck === 'vocab' ? `${id}:vocab` : `${id}:kanji:${kanjiFilter}`
  const isCustomized = Boolean(decks[deckKey])
  const defaultCards = deck === 'vocab' ? vocab : kanjiDefault
  const cards = decks[deckKey] ?? defaultCards

  // Card selection state for this deck
  const rawSelectedIds = selections[deckKey] ?? null
  const activeCards = useMemo(() => {
    if (rawSelectedIds === null) return cards
    const set = new Set(rawSelectedIds)
    return cards.filter((c) => set.has(c.id))
  }, [cards, rawSelectedIds])

  const hasActiveSelection = rawSelectedIds !== null && rawSelectedIds.length < cards.length
  const selectionKey = rawSelectedIds ? rawSelectedIds.slice().sort().join(',') : 'all'

  const v1 = useMemo(() => vocabV1(unit), [unit])

  const vocabCount = decks[`${id}:vocab`]?.length ?? vocab.length
  const kanjiAllCount = decks[`${id}:kanji:all`]?.length ?? kanjiAll.length
  const kanjiCharsCount = decks[`${id}:kanji:char`]?.length ?? kanjiChars.length
  const kanjiCompoundsCount = decks[`${id}:kanji:compound`]?.length ?? kanjiCompounds.length

  const deckTitle =
    deck === 'vocab'
      ? 'Từ vựng'
      : kanjiFilter === 'char'
      ? 'Kanji (Chữ Hán)'
      : kanjiFilter === 'compound'
      ? 'Kanji (Từ ghép)'
      : 'Kanji (Tất cả)'

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-2xl bg-muted p-1">
          {(
            [
              ['vocab', `Từ vựng (${vocabCount})`],
              ['kanji', `Kanji (${kanjiAllCount})`],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                setDeck(k)
                setIsEditing(false)
                setIsSelecting(false)
              }}
              className={`rounded-xl px-5 py-2 text-base font-semibold transition cursor-pointer ${deck === k ? 'bg-surface text-accent shadow-sm' : 'text-sub hover:text-ink'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {deck === 'kanji' && (
          <div className="flex rounded-2xl bg-muted p-1 text-sm">
            {(
              [
                ['all', `Tất cả (${kanjiAllCount})`],
                ['char', `Chữ Hán (${kanjiCharsCount})`],
                ['compound', `Từ ghép (${kanjiCompoundsCount})`],
              ] as const
            ).map(([kf, label]) => (
              <button
                key={kf}
                type="button"
                onClick={() => {
                  setKanjiFilter(kf)
                  setIsEditing(false)
                  setIsSelecting(false)
                }}
                className={`rounded-xl px-3.5 py-1.5 font-medium transition cursor-pointer ${
                  kanjiFilter === kf
                    ? 'bg-surface text-accent font-semibold shadow-xs'
                    : 'text-sub hover:text-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <span className="flex-1" />

        <div className="flex items-center gap-2">
          {!isEditing && !isSelecting &&
            MODES.map((m) => (
              <Chip key={m.id} active={mode === m.id} onClick={() => setMode(m.id)}>
                {m.label}
              </Chip>
            ))}

          <Button
            size="sm"
            variant={isSelecting ? 'primary' : hasActiveSelection ? 'ok' : 'default'}
            onClick={() => {
              setIsSelecting(!isSelecting)
              setIsEditing(false)
            }}
            className="flex items-center gap-1.5"
            title="Chọn các từ vựng cụ thể để luyện tập"
          >
            <CheckSquare className="h-4 w-4" />
            <span>
              {isSelecting
                ? 'Đóng chọn từ'
                : hasActiveSelection
                ? `Đã chọn (${activeCards.length}/${cards.length})`
                : 'Chọn từ'}
            </span>
          </Button>

          <Button
            size="sm"
            variant={isEditing ? 'primary' : 'default'}
            onClick={() => {
              setIsEditing(!isEditing)
              setIsSelecting(false)
            }}
            className="flex items-center gap-1.5"
            title="Sửa toàn bộ thẻ trong bộ này"
          >
            <Pencil className="h-4 w-4" />
            <span>{isEditing ? 'Đóng sửa' : 'Sửa thẻ'}</span>
          </Button>
        </div>
      </div>

      {isEditing ? (
        <DeckEditor
          key={deckKey}
          deckKey={deckKey}
          title={deckTitle}
          initialCards={cards}
          isCustomized={isCustomized}
          onSave={(newCards) => {
            saveDeck(deckKey, newCards)
            setIsEditing(false)
          }}
          onReset={() => {
            resetDeck(deckKey)
            setIsEditing(false)
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : isSelecting ? (
        <WordSelector
          key={deckKey}
          deckKey={deckKey}
          title={deckTitle}
          cards={cards}
          selectedIds={rawSelectedIds}
          onSaveSelection={(newIds) => {
            if (newIds === null) {
              resetDeckSelection(deckKey)
            } else {
              setSelection(deckKey, newIds)
            }
          }}
          onClose={() => setIsSelecting(false)}
          onStartPractice={(selectedMode) => {
            setMode(selectedMode)
            setIsSelecting(false)
          }}
        />
      ) : !cards.length ? (
        <Empty title={deck === 'vocab' ? 'Bài này chưa có bảng từ vựng.' : 'Bài này chưa có bảng Kanji.'} />
      ) : !activeCards.length ? (
        <Card className="text-center py-10 space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-warn-soft text-warn">
            <CheckSquare className="h-8 w-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-ink">Chưa có từ nào được chọn</h3>
            <p className="text-sm text-sub max-w-md mx-auto">
              Bạn đã bỏ chọn toàn bộ từ trong bộ này. Hãy chọn ít nhất 1 từ để bắt đầu luyện tập hoặc chọn lại tất cả.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <Button variant="primary" onClick={() => resetDeckSelection(deckKey)}>
              Chọn tất cả ({cards.length} từ)
            </Button>
            <Button variant="default" onClick={() => setIsSelecting(true)}>
              Mở bộ chọn từ
            </Button>
          </div>
        </Card>
      ) : (
        <Card key={`${deck}-${kanjiFilter}-${mode}-${isCustomized}-${selectionKey}`}>
          {hasActiveSelection && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-accent/25 bg-accent-soft/30 px-4 py-2.5 text-sm text-ink backdrop-blur-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-accent text-white shadow-xs">
                  <CheckSquare className="h-3.5 w-3.5" />
                </span>
                <span>
                  Đang luyện <strong className="text-accent font-bold">{activeCards.length}</strong> / {cards.length} từ đã chọn
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsSelecting(true)}
                  className="text-xs font-semibold text-accent hover:underline cursor-pointer"
                >
                  Đổi từ chọn
                </button>
                <span className="text-sub/50">·</span>
                <button
                  type="button"
                  onClick={() => resetDeckSelection(deckKey)}
                  className="text-xs font-medium text-sub hover:text-bad cursor-pointer"
                >
                  Luyện tất cả ({cards.length})
                </button>
              </div>
            </div>
          )}

          {mode === 'cards' && <Flashcards cards={activeCards} big={deck === 'kanji'} />}
          {mode === 'learn' && (
            <Learn
              cards={activeCards}
              setId={setKey(id, 'the', deck === 'vocab' ? `${deck}-learn` : `${deck}-${kanjiFilter}-learn`)}
              typing={(c) => (deck === 'vocab' ? (v1.find((q) => q.id === `${c.id}:v1`) ?? null) : null)}
            />
          )}
          {mode === 'match' && (
            <Match
              cards={activeCards}
              setId={setKey(id, 'the', deck === 'vocab' ? `${deck}-match` : `${deck}-${kanjiFilter}-match`)}
            />
          )}
        </Card>
      )}
    </div>
  )
}
