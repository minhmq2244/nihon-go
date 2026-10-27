import { useMemo, useState } from 'react'
import { Pencil } from 'lucide-react'
import type { Unit } from '../types'
import { kanjiCards, kanjiCharCards, kanjiCompoundCards, vocabCards, vocabV1 } from '../lib/questions'
import { setKey } from '../lib/progressInfo'
import { useCustomCards } from '../store/customCards'
import { Flashcards, Learn, Match } from '../components/Study'
import { DeckEditor } from '../components/DeckEditor'
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
  const id = unit.meta.id

  const { decks, saveDeck, resetDeck } = useCustomCards()

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
          {!isEditing &&
            MODES.map((m) => (
              <Chip key={m.id} active={mode === m.id} onClick={() => setMode(m.id)}>
                {m.label}
              </Chip>
            ))}

          <Button
            size="sm"
            variant={isEditing ? 'primary' : 'default'}
            onClick={() => setIsEditing(!isEditing)}
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
      ) : !cards.length ? (
        <Empty title={deck === 'vocab' ? 'Bài này chưa có bảng từ vựng.' : 'Bài này chưa có bảng Kanji.'} />
      ) : (
        <Card key={`${deck}-${kanjiFilter}-${mode}-${isCustomized}`}>
          {mode === 'cards' && <Flashcards cards={cards} big={deck === 'kanji'} />}
          {mode === 'learn' && (
            <Learn
              cards={cards}
              setId={setKey(id, 'the', deck === 'vocab' ? `${deck}-learn` : `${deck}-${kanjiFilter}-learn`)}
              typing={(c) => (deck === 'vocab' ? (v1.find((q) => q.id === `${c.id}:v1`) ?? null) : null)}
            />
          )}
          {mode === 'match' && (
            <Match
              cards={cards}
              setId={setKey(id, 'the', deck === 'vocab' ? `${deck}-match` : `${deck}-${kanjiFilter}-match`)}
            />
          )}
        </Card>
      )}
    </div>
  )
}
