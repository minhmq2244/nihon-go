import { useEffect, useRef } from 'react'
import {
  ChevronDown,
  Clock,
  Pause,
  Play,
  Repeat,
  RotateCcw,
  SkipBack,
  SkipForward,
  Sparkles,
} from 'lucide-react'
import { getCurrentTrack, usePassivePlayer } from '../store/passivePlayer'
import { Jp } from './Jp'
import { cx } from './ui'

export function PassiveFullPlayer() {
  const isExpanded = usePassivePlayer((s) => s.isExpanded)
  const isPlaying = usePassivePlayer((s) => s.isPlaying)
  const playlist = usePassivePlayer((s) => s.playlist)
  const trackIndex = usePassivePlayer((s) => s.trackIndex)
  const lineIndex = usePassivePlayer((s) => s.lineIndex)
  const mode = usePassivePlayer((s) => s.mode)
  const gapMs = usePassivePlayer((s) => s.gapMs)
  const repeat = usePassivePlayer((s) => s.repeat)
  const rate = usePassivePlayer((s) => s.rate)
  const sleepMinutes = usePassivePlayer((s) => s.sleepMinutes)
  const sleepExpiresAt = usePassivePlayer((s) => s.sleepExpiresAt)

  const togglePlay = usePassivePlayer((s) => s.togglePlay)
  const nextTrack = usePassivePlayer((s) => s.nextTrack)
  const prevTrack = usePassivePlayer((s) => s.prevTrack)
  const seekLine = usePassivePlayer((s) => s.seekLine)
  const setMode = usePassivePlayer((s) => s.setMode)
  const setGapMs = usePassivePlayer((s) => s.setGapMs)
  const setRepeat = usePassivePlayer((s) => s.setRepeat)
  const setRate = usePassivePlayer((s) => s.setRate)
  const setSleepTimer = usePassivePlayer((s) => s.setSleepTimer)
  const setIsExpanded = usePassivePlayer((s) => s.setIsExpanded)

  const lyricsContainerRef = useRef<HTMLDivElement>(null)
  const activeLineRef = useRef<HTMLDivElement>(null)

  const currentTrack = getCurrentTrack(usePassivePlayer.getState())

  // Auto-scroll lyrics to keep active line centered
  useEffect(() => {
    if (activeLineRef.current && isExpanded) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [lineIndex, isExpanded])

  if (!isExpanded || !playlist) return null

  // Calculate remaining sleep timer minutes
  const remainingMinutes = sleepExpiresAt
    ? Math.max(0, Math.ceil((sleepExpiresAt - Date.now()) / (60 * 1000)))
    : null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Trình phát nghe thụ động toàn màn hình"
      className="fixed inset-0 z-50 bg-zinc-950 text-white flex flex-col animate-in fade-in zoom-in-95 duration-200"
    >
      {/* Top Header Bar */}
      <header className="px-5 py-4 border-b border-zinc-800/80 flex items-center justify-between gap-3 bg-zinc-900/60 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
          title="Thu nhỏ về thanh phát đáy"
          aria-label="Thu nhỏ"
        >
          <ChevronDown size={24} />
        </button>

        <div className="text-center min-w-0 flex-1 px-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={12} />
            <span>{playlist.badge || 'Trình phát nghe thụ động'}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-zinc-100 truncate mt-0.5">
            {playlist.titleVn}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Sleep timer indicator / button */}
          <button
            type="button"
            onClick={() => {
              if (sleepMinutes === null) setSleepTimer(15)
              else if (sleepMinutes === 15) setSleepTimer(30)
              else if (sleepMinutes === 30) setSleepTimer(45)
              else setSleepTimer(null)
            }}
            className={cx(
              'flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer',
              remainingMinutes !== null
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800',
            )}
            title="Hẹn giờ tắt (15p · 30p · 45p · Tắt)"
          >
            <Clock size={14} />
            <span>{remainingMinutes !== null ? `${remainingMinutes}m` : 'Hẹn giờ'}</span>
          </button>
        </div>
      </header>

      {/* Main Lyrics / Transcript View (Spotify Style Sync Lyrics) */}
      <div
        ref={lyricsContainerRef}
        className="flex-1 overflow-y-auto px-6 sm:px-12 py-12 space-y-8 scroll-smooth"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="pb-4 border-b border-zinc-800/60">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {currentTrack?.tag} · Bài {trackIndex + 1}/{playlist.tracks.length}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              {currentTrack?.titleVn}
            </h2>
          </div>

          {currentTrack?.lines.map((l, idx) => {
            const isActive = lineIndex === idx
            return (
              <div
                key={idx}
                ref={isActive ? activeLineRef : null}
                onClick={() => seekLine(idx)}
                className={cx(
                  'p-4 rounded-2xl transition-all cursor-pointer group',
                  isActive
                    ? 'bg-emerald-500/15 border-l-4 border-emerald-400 pl-5 text-white scale-[1.01] shadow-lg shadow-emerald-950/50'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/40',
                )}
              >
                {l.speaker && (
                  <span
                    className={cx(
                      'inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-1',
                      isActive ? 'bg-emerald-500/30 text-emerald-300' : 'bg-zinc-800/60 text-zinc-400',
                    )}
                  >
                    {l.speaker}
                  </span>
                )}
                <div
                  className={cx(
                    'text-xl sm:text-2xl leading-relaxed font-semibold transition-colors',
                    isActive ? 'text-emerald-300 font-bold' : 'text-zinc-400 group-hover:text-zinc-200',
                  )}
                >
                  <Jp text={l.jp} />
                </div>
                {l.vn && (
                  <p
                    className={cx(
                      'mt-1.5 text-sm sm:text-base leading-relaxed',
                      isActive ? 'text-zinc-300 font-medium' : 'text-zinc-500',
                    )}
                  >
                    {l.vn}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Control Bar */}
      <footer className="px-6 py-5 border-t border-zinc-800 bg-zinc-900/90 backdrop-blur-md space-y-4">
        {/* Playback Controls & Progress */}
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setRepeat(repeat === 'all' ? 'one' : repeat === 'one' ? 'none' : 'all')}
            className={cx(
              'p-2 rounded-full transition cursor-pointer',
              repeat !== 'none' ? 'text-emerald-400' : 'text-zinc-500 hover:text-white',
            )}
            title={`Chế độ lặp: ${repeat === 'all' ? 'Lặp cả danh sách' : repeat === 'one' ? 'Lặp bài này' : 'Không lặp'}`}
          >
            <Repeat size={18} />
          </button>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prevTrack}
              className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
              title="Bài trước đó"
            >
              <SkipBack size={22} />
            </button>

            <button
              type="button"
              onClick={togglePlay}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition cursor-pointer"
              title={isPlaying ? 'Tạm dừng' : 'Phát tiếp'}
            >
              {isPlaying ? <Pause size={26} /> : <Play size={26} className="ml-1" />}
            </button>

            <button
              type="button"
              onClick={nextTrack}
              className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
              title="Bài tiếp theo"
            >
              <SkipForward size={22} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => seekLine(0)}
            className="p-2 text-zinc-500 hover:text-white rounded-full transition cursor-pointer"
            title="Phát lại từ câu đầu bài"
          >
            <RotateCcw size={18} />
          </button>
        </div>

        {/* Audio Mode & Timing Adjustments */}
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-800/80 text-xs">
          {/* Audio Language Mode */}
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-400 font-medium">Chế độ:</span>
            <button
              type="button"
              onClick={() => setMode('bilingual')}
              className={cx(
                'px-2.5 py-1 rounded-lg font-bold transition cursor-pointer',
                mode === 'bilingual' ? 'bg-emerald-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
              )}
            >
              🇻🇳 Song ngữ (Nhật + Việt)
            </button>
            <button
              type="button"
              onClick={() => setMode('jp_only')}
              className={cx(
                'px-2.5 py-1 rounded-lg font-bold transition cursor-pointer',
                mode === 'jp_only' ? 'bg-emerald-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
              )}
            >
              🇯🇵 Chỉ tiếng Nhật
            </button>
          </div>

          {/* Gap Between Lines */}
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-400 font-medium">Khoảng nghỉ:</span>
            {[500, 1000, 1500, 2000].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGapMs(g)}
                className={cx(
                  'px-2 py-0.5 rounded font-bold transition cursor-pointer',
                  gapMs === g ? 'bg-emerald-500/30 text-emerald-400 ring-1 ring-emerald-500/50' : 'bg-zinc-800/80 text-zinc-400 hover:text-white',
                )}
              >
                {g / 1000}s
              </button>
            ))}
          </div>

          {/* Speed Rate */}
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-400 font-medium">Tốc độ:</span>
            {[0.8, 1.0, 1.2].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRate(r)}
                className={cx(
                  'px-2 py-0.5 rounded font-bold transition cursor-pointer',
                  rate === r ? 'bg-emerald-500/30 text-emerald-400 ring-1 ring-emerald-500/50' : 'bg-zinc-800/80 text-zinc-400 hover:text-white',
                )}
              >
                {r}x
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
