import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SSGStore {
  // Set of question IDs bookmarked as "Chưa làm được / Cần ôn lại"
  bookmarkedIds: Record<string, boolean>
  toggleBookmark: (id: string) => void
  isBookmarked: (id: string) => boolean
  clearBookmarks: () => void

  // Set of question IDs marked as "Đã thuộc"
  knownIds: Record<string, boolean>
  toggleKnown: (id: string) => void
  isKnown: (id: string) => boolean

  // Currently selected exam or 'review'
  selectedExamId: string
  setSelectedExamId: (id: string) => void

  // Shuffle toggle
  isShuffled: boolean
  toggleShuffled: () => void
}

export const useSSGStore = create<SSGStore>()(
  persist(
    (set, get) => ({
      bookmarkedIds: {},
      toggleBookmark: (id: string) =>
        set((state) => {
          const current = Boolean(state.bookmarkedIds[id])
          const updated = { ...state.bookmarkedIds }
          if (current) {
            delete updated[id]
          } else {
            updated[id] = true
          }
          return { bookmarkedIds: updated }
        }),
      isBookmarked: (id: string) => Boolean(get().bookmarkedIds[id]),
      clearBookmarks: () => set({ bookmarkedIds: {} }),

      knownIds: {},
      toggleKnown: (id: string) =>
        set((state) => {
          const current = Boolean(state.knownIds[id])
          const updated = { ...state.knownIds }
          if (current) {
            delete updated[id]
          } else {
            updated[id] = true
          }
          return { knownIds: updated }
        }),
      isKnown: (id: string) => Boolean(get().knownIds[id]),

      selectedExamId: 'de1',
      setSelectedExamId: (id: string) => set({ selectedExamId: id }),

      isShuffled: false,
      toggleShuffled: () => set((state) => ({ isShuffled: !state.isShuffled })),
    }),
    {
      name: 'nihon-ssg-storage',
      version: 1,
    },
  ),
)
