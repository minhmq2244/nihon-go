// Shared playlist playback (play / pause / resume / prev / next / stop) and a player bar
// that floats at the bottom of the screen while audio is active, so it stays reachable when scrolling.
import { useEffect, useRef, useState } from 'react'
import { Pause, Play, SkipBack, SkipForward, Square } from 'lucide-react'
import { speak, stopSpeaking } from '../lib/speech'
import { useSettings } from '../store/settings'
import { SpeedControl } from './SpeedControl'
import { cx } from './ui'

export interface Track {
  text: string
  role?: 'A' | 'B'
}

export interface Playlist {
  cur: number | null // line being spoken
  pos: number // where resume continues
  paused: boolean
  active: boolean
  total: number
  playFrom: (i: number) => void
  pause: () => void
  resume: () => void
  toggle: () => void
  stop: () => void
  prev: () => void
  next: () => void
}

export function usePlaylist(
  tracks: Track[],
  opts: { gapMs?: number; voiceURI?: string; single?: boolean; onEnd?: () => void } = {},
): Playlist {
  const [cur, setCur] = useState<number | null>(null)
  const [pos, setPos] = useState(0)
  const [paused, setPaused] = useState(false)
  const run = useRef(0)
  const latest = useRef({ tracks, opts, cur, pos })
  latest.current = { tracks, opts, cur, pos }

  useEffect(
    () => () => {
      run.current++
      stopSpeaking()
    },
    [],
  )

  const finish = () => {
    setCur(null)
    setPaused(false)
    setPos(0)
    latest.current.opts.onEnd?.()
  }

  const playFrom = (from: number) => {
    const my = ++run.current
    stopSpeaking()
    setPaused(false)
    void (async () => {
      const { tracks: list } = latest.current
      for (let i = Math.max(0, Math.min(from, list.length - 1)); i < list.length; i++) {
        if (run.current !== my) return
        setCur(i)
        setPos(i)
        const o = latest.current.opts
        await speak(list[i]!.text, { role: list[i]!.role, voiceURI: o.voiceURI, rate: useSettings.getState().rate })
        if (run.current !== my) return
        if (o.single) {
          if (i + 1 >= list.length) return finish()
          setCur(null)
          setPaused(true)
          setPos(i + 1)
          return
        }
        if (o.gapMs) await new Promise((r) => setTimeout(r, o.gapMs))
      }
      if (run.current === my) finish()
    })()
  }

  const pause = () => {
    run.current++
    stopSpeaking()
    setCur(null)
    setPaused(true)
  }
  const stop = () => {
    run.current++
    stopSpeaking()
    setCur(null)
    setPaused(false)
    setPos(0)
  }
  const at = () => latest.current.cur ?? latest.current.pos
  const resume = () => playFrom(latest.current.pos)

  return {
    cur,
    pos,
    paused,
    active: cur !== null || paused,
    total: tracks.length,
    playFrom,
    pause,
    resume,
    toggle: () => (latest.current.cur !== null ? pause() : paused ? resume() : playFrom(0)),
    stop,
    prev: () => playFrom(Math.max(0, at() - 1)),
    next: () => playFrom(Math.min(tracks.length - 1, at() + 1)),
  }
}

const iconBtn = 'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-sub shadow-xs transition hover:bg-muted hover:text-ink cursor-pointer disabled:opacity-40'

/** Play / pause / prev / next / stop buttons. */
export function PlayerControls({ p, startLabel = 'Phát cả bài', className }: { p: Playlist; startLabel?: string; className?: string }) {
  const playing = p.cur !== null
  return (
    <div className={cx('flex items-center gap-2', className)}>
      {p.active && (
        <button type="button" className={iconBtn} onClick={p.prev} title="Câu trước" aria-label="Câu trước">
          <SkipBack size={18} />
        </button>
      )}
      <button
        type="button"
        onClick={p.toggle}
        className={cx(
          'flex h-10 items-center gap-2 rounded-xl px-4 text-base font-semibold shadow-xs transition cursor-pointer',
          playing ? 'border border-line bg-surface text-ink hover:bg-muted' : 'bg-accent text-white hover:brightness-110',
        )}
      >
        {playing ? <Pause size={17} /> : <Play size={17} />}
        {playing ? 'Tạm dừng' : p.paused ? 'Tiếp tục' : startLabel}
      </button>
      {p.active && (
        <>
          <button type="button" className={iconBtn} onClick={p.next} title="Câu sau" aria-label="Câu sau">
            <SkipForward size={18} />
          </button>
          <button type="button" className={cx(iconBtn, 'text-bad hover:text-bad')} onClick={p.stop} title="Dừng hẳn" aria-label="Dừng hẳn">
            <Square size={16} />
          </button>
        </>
      )}
    </div>
  )
}

/** Fixed bar at the bottom of the screen, visible only while something is playing or paused. */
export function FloatingPlayer({ p, title }: { p: Playlist; title?: string }) {
  const { rate, set, sidebarCollapsed } = useSettings()
  if (!p.active) return null
  const at = (p.cur ?? p.pos) + 1
  return (
    <div className={cx('no-print fixed inset-x-0 bottom-20 z-40 flex justify-center px-3 md:bottom-6', sidebarCollapsed ? 'md:pl-24' : 'md:pl-68')}>
      <div className="w-full max-w-[720px] rounded-2xl border border-accent/40 bg-surface/95 px-4 py-3 shadow-lg backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="w-full min-w-0 sm:w-auto sm:flex-1">
            <p className="truncate text-sm font-bold text-ink">{title ?? 'Đang nghe'}</p>
            <p className={cx('whitespace-nowrap text-xs font-semibold', p.cur !== null ? 'text-ok' : 'text-warn')}>
              {p.cur !== null ? 'Đang phát' : 'Tạm dừng'} · câu {at}/{p.total}
            </p>
          </div>
          <PlayerControls p={p} />
          <SpeedControl rate={rate} onChange={(r) => set({ rate: r })} compact className="w-full sm:w-auto" />
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-accent transition-all duration-300" style={{ width: `${Math.round((at / Math.max(1, p.total)) * 100)}%` }} />
        </div>
      </div>
    </div>
  )
}
