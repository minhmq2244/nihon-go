import { useEffect, useRef } from 'react'
import { speak, stopSpeaking } from './speech'
import { getCurrentTrack, usePassivePlayer } from '../store/passivePlayer'

/** Speak Vietnamese translation if supported by browser */
function speakVn(text: string, rate: number = 1.0): Promise<void> {
  if (typeof speechSynthesis === 'undefined') return Promise.resolve()
  return new Promise((resolve) => {
    try {
      const clean = text.replace(/<[^>]+>/g, '').replace(/［|］|〔|〕|\*\*/g, '').trim()
      if (!clean) return resolve()
      const u = new SpeechSynthesisUtterance(clean)
      u.lang = 'vi-VN'
      u.rate = Math.min(1.2, Math.max(0.8, rate))
      const viVoices = speechSynthesis.getVoices().filter((v) => /^vi/i.test(v.lang))
      if (viVoices.length > 0) u.voice = viVoices[0]
      u.onend = () => resolve()
      u.onerror = () => resolve()
      speechSynthesis.speak(u)
    } catch {
      resolve()
    }
  })
}

/**
 * Background audio player loop that continuously speaks tracks and lines.
 * Mounts once in Layout so audio continues across all route changes.
 */
export function usePassiveEngine() {
  const isPlaying = usePassivePlayer((s) => s.isPlaying)
  const trackIndex = usePassivePlayer((s) => s.trackIndex)
  const lineIndex = usePassivePlayer((s) => s.lineIndex)
  const playlist = usePassivePlayer((s) => s.playlist)
  const mode = usePassivePlayer((s) => s.mode)
  const gapMs = usePassivePlayer((s) => s.gapMs)
  const rate = usePassivePlayer((s) => s.rate)
  const voiceURI = usePassivePlayer((s) => s.voiceURI)
  const sleepExpiresAt = usePassivePlayer((s) => s.sleepExpiresAt)

  const nextTrack = usePassivePlayer((s) => s.nextTrack)
  const setLineIndex = usePassivePlayer((s) => s.setLineIndex)
  const stop = usePassivePlayer((s) => s.stop)

  const runId = useRef(0)

  useEffect(() => {
    if (!isPlaying || !playlist || playlist.tracks.length === 0) {
      runId.current++
      stopSpeaking()
      return
    }

    const currentRun = ++runId.current
    let aborted = false

    const runLoop = async () => {
      const state = usePassivePlayer.getState()
      const track = getCurrentTrack(state)
      if (!track || !track.lines.length) {
        nextTrack()
        return
      }

      let curLine = state.lineIndex
      if (curLine >= track.lines.length) {
        curLine = 0
        setLineIndex(0)
      }

      while (isPlaying && !aborted && runId.current === currentRun) {
        // 1. Check sleep timer
        const currentSleep = usePassivePlayer.getState().sleepExpiresAt
        if (currentSleep && Date.now() >= currentSleep) {
          stop()
          break
        }

        const currentTrack = getCurrentTrack(usePassivePlayer.getState())
        if (!currentTrack || !currentTrack.lines.length) break
        const line = currentTrack.lines[curLine]
        if (!line) {
          // Track finished -> go to next track
          nextTrack()
          break
        }

        // 2. Speak Japanese line
        await speak(line.jp, {
          role: line.speaker === 'B' ? 'B' : 'A',
          voiceURI: voiceURI || undefined,
          rate,
        })
        if (aborted || runId.current !== currentRun) break

        // 3. Speak Vietnamese translation if bilingual mode enabled
        if (mode === 'bilingual' && line.vn) {
          await new Promise((r) => setTimeout(r, 300))
          if (aborted || runId.current !== currentRun) break
          await speakVn(line.vn, rate)
          if (aborted || runId.current !== currentRun) break
        }

        // 4. Interval pause between lines
        if (gapMs > 0) {
          await new Promise((r) => setTimeout(r, gapMs))
          if (aborted || runId.current !== currentRun) break
        }

        // 5. Advance line
        curLine++
        if (curLine < currentTrack.lines.length) {
          setLineIndex(curLine)
        } else {
          // Finished this track -> advance to next track
          nextTrack()
          break
        }
      }
    }

    void runLoop()

    return () => {
      aborted = true
      runId.current++
      stopSpeaking()
    }
  }, [isPlaying, trackIndex, lineIndex, playlist, mode, gapMs, rate, voiceURI, sleepExpiresAt])
}
