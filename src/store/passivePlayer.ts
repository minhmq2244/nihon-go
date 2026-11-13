import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { PassiveLine, PassivePlaylist, PassiveTrack } from '../lib/passiveListeningData'
import { getMegaMixPlaylist } from '../lib/passiveListeningData'

export type PassiveAudioMode = 'jp_only' | 'bilingual'
export type PassiveRepeatMode = 'all' | 'one' | 'none'

export interface PassivePlayerState {
  playlist: PassivePlaylist | null
  trackIndex: number
  lineIndex: number
  isPlaying: boolean
  mode: PassiveAudioMode
  gapMs: number
  repeat: PassiveRepeatMode
  rate: number
  voiceURI: string
  sleepMinutes: number | null
  sleepExpiresAt: number | null
  isExpanded: boolean

  // Actions
  playPlaylist: (pl: PassivePlaylist, startTrackIdx?: number, startLineIdx?: number) => void
  playTrack: (track: PassiveTrack, inPlaylist?: PassivePlaylist) => void
  togglePlay: () => void
  pause: () => void
  resume: () => void
  stop: () => void
  nextTrack: () => void
  prevTrack: () => void
  seekLine: (idx: number) => void
  setLineIndex: (idx: number) => void
  setMode: (mode: PassiveAudioMode) => void
  setGapMs: (gap: number) => void
  setRepeat: (repeat: PassiveRepeatMode) => void
  setRate: (rate: number) => void
  setVoiceURI: (uri: string) => void
  setSleepTimer: (minutes: number | null) => void
  setIsExpanded: (expanded: boolean) => void
}

export const usePassivePlayer = create<PassivePlayerState>()(
  persist(
    (set, get) => ({
      playlist: getMegaMixPlaylist(),
      trackIndex: 0,
      lineIndex: 0,
      isPlaying: false,
      mode: 'bilingual',
      gapMs: 1000,
      repeat: 'all',
      rate: 1.0,
      voiceURI: '',
      sleepMinutes: null,
      sleepExpiresAt: null,
      isExpanded: false,

      playPlaylist: (pl, startTrackIdx = 0, startLineIdx = 0) => {
        set({
          playlist: pl,
          trackIndex: Math.max(0, Math.min(startTrackIdx, pl.tracks.length - 1)),
          lineIndex: startLineIdx,
          isPlaying: true,
        })
      },

      playTrack: (track, inPlaylist) => {
        const pl = inPlaylist || get().playlist || getMegaMixPlaylist()
        const idx = pl.tracks.findIndex((t) => t.id === track.id)
        set({
          playlist: pl,
          trackIndex: idx >= 0 ? idx : 0,
          lineIndex: 0,
          isPlaying: true,
        })
      },

      togglePlay: () => {
        const { isPlaying } = get()
        set({ isPlaying: !isPlaying })
      },

      pause: () => set({ isPlaying: false }),
      resume: () => set({ isPlaying: true }),

      stop: () => {
        set({ isPlaying: false, lineIndex: 0 })
      },

      nextTrack: () => {
        const { playlist, trackIndex, repeat } = get()
        if (!playlist || playlist.tracks.length === 0) return

        if (trackIndex + 1 < playlist.tracks.length) {
          set({ trackIndex: trackIndex + 1, lineIndex: 0, isPlaying: true })
        } else if (repeat === 'all') {
          set({ trackIndex: 0, lineIndex: 0, isPlaying: true })
        } else {
          set({ isPlaying: false, lineIndex: 0 })
        }
      },

      prevTrack: () => {
        const { playlist, trackIndex } = get()
        if (!playlist || playlist.tracks.length === 0) return

        if (trackIndex > 0) {
          set({ trackIndex: trackIndex - 1, lineIndex: 0, isPlaying: true })
        } else {
          set({ lineIndex: 0 })
        }
      },

      seekLine: (idx: number) => {
        set({ lineIndex: idx, isPlaying: true })
      },

      setLineIndex: (idx: number) => {
        set({ lineIndex: idx })
      },

      setMode: (mode) => set({ mode }),
      setGapMs: (gapMs) => set({ gapMs }),
      setRepeat: (repeat) => set({ repeat }),
      setRate: (rate) => set({ rate }),
      setVoiceURI: (voiceURI) => set({ voiceURI }),

      setSleepTimer: (minutes) => {
        if (!minutes) {
          set({ sleepMinutes: null, sleepExpiresAt: null })
        } else {
          set({
            sleepMinutes: minutes,
            sleepExpiresAt: Date.now() + minutes * 60 * 1000,
          })
        }
      },

      setIsExpanded: (isExpanded) => set({ isExpanded }),
    }),
    {
      name: 'nihon-passive-player',
      partialize: (s) => ({
        mode: s.mode,
        gapMs: s.gapMs,
        repeat: s.repeat,
        rate: s.rate,
        voiceURI: s.voiceURI,
      }),
    },
  ),
)

/** Helper to get currently active track from the player */
export function getCurrentTrack(state: PassivePlayerState): PassiveTrack | null {
  if (!state.playlist || !state.playlist.tracks.length) return null
  return state.playlist.tracks[state.trackIndex] || null
}

/** Helper to get currently active line from the player */
export function getCurrentLine(state: PassivePlayerState): PassiveLine | null {
  const track = getCurrentTrack(state)
  if (!track || !track.lines.length) return null
  return track.lines[state.lineIndex] || null
}
