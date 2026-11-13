import { Link } from 'react-router-dom'
import { Headphones, Play, Sparkles } from 'lucide-react'
import { getMegaMixPlaylist, getPlaylistById } from '../lib/passiveListeningData'
import { usePassivePlayer } from '../store/passivePlayer'
import { cx } from './ui'

interface PassiveUnitBannerProps {
  unitId: string
  className?: string
}

export function PassiveUnitBanner({ unitId, className }: PassiveUnitBannerProps) {
  const playlist = getPlaylistById(`pl-${unitId}`)
  const playPlaylist = usePassivePlayer((s) => s.playPlaylist)
  const currentPlaylist = usePassivePlayer((s) => s.playlist)
  const isPlaying = usePassivePlayer((s) => s.isPlaying)
  const setIsExpanded = usePassivePlayer((s) => s.setIsExpanded)

  const isCurrentPlaying = currentPlaylist?.id === playlist?.id && isPlaying
  const isExamUnit = ['b08', 'b09', 'b10', 'b11'].includes(unitId)

  if (!playlist) return null

  return (
    <aside
      aria-label="Nghe thụ động bài học"
      className={cx(
        'mb-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-surface p-4 sm:p-5 shadow-xs transition-all hover:border-emerald-500/50',
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
            <Headphones size={22} className={isCurrentPlaying ? 'animate-bounce' : ''} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                <Sparkles size={11} /> Nghe thụ động chạy ngầm
              </span>
              {isExamUnit && (
                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                  🔥 Trọng tâm ôn thi
                </span>
              )}
            </div>
            <h4 className="mt-1 text-base sm:text-lg font-bold text-ink">
              {playlist.titleVn}
            </h4>
            <p className="mt-0.5 text-xs sm:text-sm text-sub">
              {playlist.tracks.length} đoạn nghe liền mạch · Tự động cuộn lời thoại karaoke Nhật - Việt kiểu Spotify
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:self-center">
          <button
            type="button"
            onClick={() => {
              if (isCurrentPlaying) {
                setIsExpanded(true)
              } else {
                playPlaylist(playlist, 0)
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-md hover:bg-emerald-600 active:scale-95 transition cursor-pointer"
          >
            <Play size={16} fill="currentColor" />
            <span>{isCurrentPlaying ? 'Đang phát · Mở lời' : 'Phát bài này ngay'}</span>
          </button>

          {isExamUnit && (
            <button
              type="button"
              onClick={() => playPlaylist(getMegaMixPlaylist(), 0)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 active:scale-95 transition cursor-pointer"
              title="Phát liên tục cả 4 bài 8-11"
            >
              🔥 Mega Mix (B08-B11)
            </button>
          )}

          <Link
            to="/passive-listening"
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline px-2 py-1 ml-auto sm:ml-0"
          >
            Kho playlist →
          </Link>
        </div>
      </div>
    </aside>
  )
}
