import { useMemo, useState } from 'react'
import type { Unit } from '../types'
import { kanjiCards, kanjiCharCards, kanjiCompoundCards, vocabCards, vocabV1 } from '../lib/questions'
import { setKey } from '../lib/progressInfo'
import { Flashcards, Learn, Match } from '../components/Study'
import { Card, Chip, Empty } from '../components/ui'

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
  const id = unit.meta.id
  const vocab = useMemo(() => vocabCards(unit.vocab), [unit])
  const kanjiAll = useMemo(() => kanjiCards(unit.kanji), [unit])
  const kanjiChars = useMemo(() => kanjiCharCards(unit.kanji), [unit])
  const kanjiCompounds = useMemo(() => kanjiCompoundCards(unit.kanji), [unit])

  const kanji = useMemo(() => {
    if (kanjiFilter === 'char') return kanjiChars
    if (kanjiFilter === 'compound') return kanjiCompounds
    return kanjiAll
  }, [kanjiFilter, kanjiChars, kanjiCompounds, kanjiAll])

  const v1 = useMemo(() => vocabV1(unit), [unit])
  const cards = deck === 'vocab' ? vocab : kanji

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-2xl bg-muted p-1">
          {(
            [
              ['vocab', `Từ vựng (${vocab.length})`],
              ['kanji', `Kanji (${kanjiAll.length})`],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              type="button"
              onClick={() => setDeck(k)}
              className={`rounded-xl px-5 py-2 text-base font-semibold transition cursor-pointer ${deck === k ? 'bg-surface text-accent shadow-sm' : 'text-sub hover:text-ink'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {deck === 'kanji' && kanjiCompounds.length > 0 && (
          <div className="flex rounded-2xl bg-muted p-1 text-sm">
            {(
              [
                ['all', `Tất cả (${kanjiAll.length})`],
                ['char', `Chữ Hán (${kanjiChars.length})`],
                ['compound', `Từ ghép (${kanjiCompounds.length})`],
              ] as const
            ).map(([kf, label]) => (
              <button
                key={kf}
                type="button"
                onClick={() => setKanjiFilter(kf)}
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
        {MODES.map((m) => (
          <Chip key={m.id} active={mode === m.id} onClick={() => setMode(m.id)}>
            {m.label}
          </Chip>
        ))}
      </div>
      {!cards.length ? (
        <Empty title={deck === 'vocab' ? 'Bài này chưa có bảng từ vựng.' : 'Bài này chưa có bảng Kanji.'} />
      ) : (
        <Card key={`${deck}-${kanjiFilter}-${mode}`}>
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
