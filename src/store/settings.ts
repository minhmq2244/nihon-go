import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark' | 'system'
export type FontSize = 'sm' | 'base' | 'lg'

interface Settings {
  theme: Theme
  fontSize: FontSize
  furigana: boolean
  romaji: boolean // type romaji, get kana
  voiceA: string // voiceURI; '' = first Japanese voice
  voiceB: string
  rate: number
  set: (p: Partial<Omit<Settings, 'set'>>) => void
}

export const useSettings = create<Settings>()(
  persist(
    (set) => ({
      theme: 'system',
      fontSize: 'base',
      furigana: true,
      romaji: false,
      voiceA: '',
      voiceB: '',
      rate: 0.9,
      set: (p) => set(p),
    }),
    { name: 'nihon-settings' },
  ),
)
