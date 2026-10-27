import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Card } from '../lib/questions'

interface CustomCardsState {
  /** User-edited card decks keyed by `${unitId}:${deckKey}` */
  decks: Record<string, Card[]>
  saveDeck: (deckKey: string, cards: Card[]) => void
  resetDeck: (deckKey: string) => void
  resetAll: () => void
  hasCustom: (deckKey: string) => boolean
}

export const useCustomCards = create<CustomCardsState>()(
  persist(
    (set, get) => ({
      decks: {},
      saveDeck: (deckKey, cards) =>
        set((state) => ({
          decks: { ...state.decks, [deckKey]: cards },
        })),
      resetDeck: (deckKey) =>
        set((state) => {
          const next = { ...state.decks }
          delete next[deckKey]
          return { decks: next }
        }),
      resetAll: () => set({ decks: {} }),
      hasCustom: (deckKey) => Boolean(get().decks[deckKey]),
    }),
    {
      name: 'nihon-custom-cards',
      version: 1,
    },
  ),
)
