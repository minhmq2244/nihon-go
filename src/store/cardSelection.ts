import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CardSelectionState {
  /**
   * Selected card IDs keyed by deck identifier (e.g. `${unitId}:vocab`, `${unitId}:kanji:all`).
   * If a deckKey is not present in selections, all cards in that deck are selected by default.
   */
  selections: Record<string, string[]>
  setSelection: (deckKey: string, cardIds: string[]) => void
  toggleCard: (deckKey: string, cardId: string, allDeckCards: { id: string }[]) => void
  selectAll: (deckKey: string, allIds: string[]) => void
  clearSelection: (deckKey: string) => void
  resetDeckSelection: (deckKey: string) => void
  resetAll: () => void
}

export const useCardSelection = create<CardSelectionState>()(
  persist(
    (set) => ({
      selections: {},
      setSelection: (deckKey, cardIds) =>
        set((state) => ({
          selections: { ...state.selections, [deckKey]: cardIds },
        })),
      toggleCard: (deckKey, cardId, allDeckCards) =>
        set((state) => {
          const current = state.selections[deckKey] ?? allDeckCards.map((c) => c.id)
          const next = current.includes(cardId)
            ? current.filter((id) => id !== cardId)
            : [...current, cardId]
          return {
            selections: { ...state.selections, [deckKey]: next },
          }
        }),
      selectAll: (deckKey, allIds) =>
        set((state) => ({
          selections: { ...state.selections, [deckKey]: allIds },
        })),
      clearSelection: (deckKey) =>
        set((state) => ({
          selections: { ...state.selections, [deckKey]: [] },
        })),
      resetDeckSelection: (deckKey) =>
        set((state) => {
          const next = { ...state.selections }
          delete next[deckKey]
          return { selections: next }
        }),
      resetAll: () => set({ selections: {} }),
    }),
    {
      name: 'nihon-card-selection',
      version: 1,
    },
  ),
)
