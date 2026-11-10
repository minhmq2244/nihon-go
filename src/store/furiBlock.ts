import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface FuriBlockItem {
  kanji: string
  reading?: string
  addedAt: number
}

interface FuriBlockState {
  items: Record<string, FuriBlockItem>
  addWord: (kanji: string, reading?: string) => void
  removeWord: (kanji: string) => void
  toggleWord: (kanji: string, reading?: string) => boolean
  isBlocked: (kanji: string) => boolean
  clearAll: () => void
}

export const useFuriBlockStore = create<FuriBlockState>()(
  persist(
    (set, get) => ({
      items: {},
      addWord: (kanji, reading) => {
        const k = kanji.trim()
        if (!k) return
        set((state) => ({
          items: {
            ...state.items,
            [k]: { kanji: k, reading: reading?.trim() || state.items[k]?.reading, addedAt: Date.now() },
          },
        }))
      },
      removeWord: (kanji) => {
        const k = kanji.trim()
        set((state) => {
          const next = { ...state.items }
          delete next[k]
          return { items: next }
        })
      },
      toggleWord: (kanji, reading) => {
        const k = kanji.trim()
        if (!k) return false
        const exists = Boolean(get().items[k])
        if (exists) {
          get().removeWord(k)
          return false
        }
        get().addWord(k, reading)
        return true
      },
      isBlocked: (kanji) => {
        const k = kanji.trim()
        if (!k) return false
        return Boolean(get().items[k])
      },
      clearAll: () => set({ items: {} }),
    }),
    {
      name: 'nihon-furi-block',
      version: 1,
    },
  ),
)

