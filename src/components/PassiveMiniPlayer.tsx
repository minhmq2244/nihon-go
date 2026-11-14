import { Play, Pause, SkipBack, SkipForward, ChevronUp, Volume2, Languages, X } from 'lucide-react'
import { getCurrentLine, getCurrentTrack, usePassivePlayer } from '../store/passivePlayer'
import { Jp } from './Jp'
import { cx } from './ui'

export function PassiveMiniPlayer() {
  const isPlaying = usePassivePlayer((s) => s.isPlaying)
  const playlist = usePassivePlayer((s) => s.playlist)
  const trackIndex = usePassivePlayer((s) => s.trackIndex)
  const lineIndex = usePassivePlayer((s) => s.lineIndex)
  const mode = usePassivePlayer((s) => s.mode)
  const isExpanded = usePassivePlayer((s) => s.isExpanded)
  const isDismissed = usePassivePlayer((s) => s.isDismissed)

  const togglePlay = usePassivePlayer((s) => s.togglePlay)
  const nextTrack = usePassivePlayer((s) => s.nextTrack)
  const prevTrack = usePassivePlayer((s) => s.prevTrack)
  const setIsExpanded = usePassivePlayer((s) => s.setIsExpanded)
  const dismiss = usePassivePlayer((s) => s.dismiss)

  const currentTrack = getCurrentTrack(usePassivePlayer.getState())
  const currentLine = getCurrentLine(usePassivePlayer.getState())

  if (!playlist || isExpanded || isDismissed) return null

  const progress = currentTrack && currentTrack.lines.length > 0
    ? ((lineIndex + 1) / currentTrack.lines.length) * 100
    : 0

  return (
    <aside
      aria-label="Trình phát nghe thụ động"
      className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 dark:bg-zinc-900/95 backdrop-blur-md border-t border-line/80 shadow-2xl transition-all"
    >
      {/* Progress track at top of player */}
      <div className="w-full h-1 bg-muted/60 overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3 sm:gap-6">
        {/* Track info & Lyrics preview (tap to expand) */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer group select-none"
          title="Bấm để mở chế độ lời thoại toàn màn hình (Spotify Lyrics Mode)"
        >
          <div
            className={cx(
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all shadow-xs',
              isPlaying
                ? 'bg-emerald-500 text-white shadow-emerald-500/20 shadow-md'
                : 'bg-muted text-sub group-hover:bg-emerald-500/10 group-hover:text-emerald-600',
            )}
          >
            <Volume2 size={22} className={isPlaying ? 'animate-pulse' : ''} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 truncate max-w-[150px]">
                {playlist.badge || playlist.titleVn}
              </span>
              <span className="text-xs text-sub/70 truncate hidden sm:inline">
                Bài {trackIndex + 1}/{playlist.tracks.length}
              </span>
              {mode === 'bilingual' && (
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 hidden md:flex">
                  <Languages size={11} /> Song ngữ
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base font-bold text-ink truncate mt-0.5 group-hover:text-emerald-600 transition">
              {currentTrack?.titleVn || currentTrack?.title}
            </p>

            {currentLine && (
              <p className="text-xs text-sub truncate leading-tight">
                <span className="text-ink/80 font-medium mr-1.5">
                  <Jp text={currentLine.jp} />
                </span>
                <span className="opacity-75">· {currentLine.vn}</span>
              </p>
            )}
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={prevTrack}
            className="flex h-9 w-9 items-center justify-center rounded-full text-sub hover:text-ink hover:bg-muted/70 transition cursor-pointer"
            title="Bài trước đó"
            aria-label="Bài trước đó"
          >
            <SkipBack size={18} />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className={cx(
              'flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition-all active:scale-95 cursor-pointer',
              isPlaying
                ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30'
                : 'bg-emerald-600 hover:bg-emerald-500 hover:scale-105',
            )}
            title={isPlaying ? 'Tạm dừng' : 'Phát tiếp'}
            aria-label={isPlaying ? 'Tạm dừng' : 'Phát tiếp'}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
          </button>

          <button
            type="button"
            onClick={nextTrack}
            className="flex h-9 w-9 items-center justify-center rounded-full text-sub hover:text-ink hover:bg-muted/70 transition cursor-pointer"
            title="Bài tiếp theo"
            aria-label="Bài tiếp theo"
          >
            <SkipForward size={18} />
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-sub hover:text-emerald-600 hover:bg-emerald-500/10 transition cursor-pointer ml-1"
            title="Mở toàn màn hình (Lời thoại đồng bộ)"
            aria-label="Mở toàn màn hình"
          >
            <ChevronUp size={20} />
          </button>

          <button
            type="button"
            onClick={dismiss}
            className="flex h-9 w-9 items-center justify-center rounded-full text-sub hover:text-rose-500 hover:bg-rose-500/10 transition cursor-pointer"
            title="Đóng / Tắt thanh nghe thụ động"
            aria-label="Tắt nghe thụ động"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </aside>
  )
}
