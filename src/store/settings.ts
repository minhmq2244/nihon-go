import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark' | 'system'
export type FontSize = 'sm' | 'base' | 'lg'

interface Settings {
  theme: Theme
  fontSize: FontSize
  furigana: boolean
  romaji: boolean // type romaji, get kana
  sidebarCollapsed: boolean
  voiceA: string // voiceURI; '' = first Japanese voice
  voiceB: string
  rate: number
  dailyGoal: number // correct answers per day
  set: (p: Partial<Omit<Settings, 'set'>>) => void
}

export const useSettings = create<Settings>()(
  persist(
    (set) => ({
      theme: 'system',
      fontSize: 'base',
      furigana: true,
      romaji: true,
      sidebarCollapsed: false,
      voiceA: '',
      voiceB: '',
      rate: 0.9,
      dailyGoal: 20,
      set: (p) => set(p),
    }),
    {
      name: 'nihon-settings',
      version: 1,
      // v1: romaji → kana typing is on by default (answers are graded by reading, so no IME is needed).
      migrate: (state, version) => (version < 1 ? { ...(state as Settings), romaji: true } : (state as Settings)),
    },
  ),
)
