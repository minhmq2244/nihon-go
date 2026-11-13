import { useState } from 'react'
import {
  Flame,
  Headphones,
  Languages,
  Play,
  Pause,
  Volume2,
  BookOpen,
  Store,
  Clock,
  ListMusic,
} from 'lucide-react'
import {
  getExamPlaylists,
  getMegaMixPlaylist,
  getTopicPlaylists,
} from '../lib/passiveListeningData'
import { usePassivePlayer } from '../store/passivePlayer'
import { Card, cx } from '../components/ui'
import { Jp } from '../components/Jp'

export function PassiveListeningPage() {
  const [activeTab, setActiveTab] = useState<'exam' | 'topic'>('exam')
  const currentPlaylist = usePassivePlayer((s) => s.playlist)
  const isPlaying = usePassivePlayer((s) => s.isPlaying)
  const trackIndex = usePassivePlayer((s) => s.trackIndex)
  const playPlaylist = usePassivePlayer((s) => s.playPlaylist)
  const togglePlay = usePassivePlayer((s) => s.togglePlay)
  const setIsExpanded = usePassivePlayer((s) => s.setIsExpanded)

  const megaMix = getMegaMixPlaylist()
  const examPlaylists = getExamPlaylists()
  const topicPlaylists = getTopicPlaylists()

  const isMegaPlaying = currentPlaylist?.id === megaMix.id && isPlaying

  return (
    <div className="space-y-8 pb-20">
      {/* Top Banner Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
          <Headphones size={15} />
          <span>Passive Listening Hub</span>
          <span>·</span>
          <span>Podcast phản xạ đời sống & Ôn thi</span>
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-ink">
          Nghe Thụ Động Thông Minh
        </h1>
        <p className="mt-2 text-base sm:text-lg text-sub font-medium leading-relaxed max-w-3xl">
          Treo tai nghe và ngấm tiếng Nhật mọi lúc mọi nơi. Kết hợp chế độ <b>Song ngữ (Nhật $\rightarrow$ Việt)</b> và <b>khoảng nghỉ tiêu hóa</b> để não bộ tự động bắt phản xạ từ vựng và ngữ điệu tự nhiên mà không cần nhìn màn hình.
        </p>
      </div>

      {/* Featured Mega Mix Banner Card (Cấp tốc phục vụ kỳ thi Bài 8-11) */}
      <Card className="relative overflow-hidden border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/15 via-surface to-orange-500/10 p-6 sm:p-7 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-xs">
              <Flame size={14} />
              <span>Đề xuất cấp tốc cho kỳ thi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-ink">
              {megaMix.titleVn}
            </h2>
            <p className="text-sm sm:text-base text-sub leading-relaxed font-medium">
              {megaMix.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-sub font-semibold">
              <span className="flex items-center gap-1">
                <ListMusic size={14} className="text-amber-500" />
                <span>{megaMix.tracks.length} track liên hoàn</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={14} className="text-amber-500" />
                <span>Khoảng 40 phút nghe</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Languages size={14} className="text-amber-500" />
                <span>Hỗ trợ Song ngữ & Chạy chữ Spotify</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (currentPlaylist?.id === megaMix.id) {
                  togglePlay()
                } else {
                  playPlaylist(megaMix, 0)
                }
              }}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-base shadow-lg shadow-amber-500/25 transition-all active:scale-95 cursor-pointer"
            >
              {isMegaPlaying ? <Pause size={20} /> : <Play size={20} className="fill-black" />}
              <span>{isMegaPlaying ? 'Tạm dừng nghe' : 'Phát Mega Mix ngay'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (currentPlaylist?.id !== megaMix.id) playPlaylist(megaMix, 0)
                setIsExpanded(true)
              }}
              className="px-4 py-3 rounded-2xl border border-amber-500/50 bg-surface/80 hover:bg-surface text-ink text-sm font-bold transition cursor-pointer"
            >
              Xem lời thoại đồng bộ
            </button>
          </div>
        </div>
      </Card>

      {/* Two Channels Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('exam')}
            className={cx(
              'flex items-center gap-2 px-4 py-2 rounded-xl text-sm sm:text-base font-bold transition cursor-pointer',
              activeTab === 'exam'
                ? 'bg-amber-500 text-black shadow-xs'
                : 'bg-muted text-sub hover:text-ink hover:bg-muted/80',
            )}
          >
            <BookOpen size={16} />
            <span>Kênh 1: Ôn thi theo bài (Bài 8 – 11)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('topic')}
            className={cx(
              'flex items-center gap-2 px-4 py-2 rounded-xl text-sm sm:text-base font-bold transition cursor-pointer',
              activeTab === 'topic'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-muted text-sub hover:text-ink hover:bg-muted/80',
            )}
          >
            <Store size={16} />
            <span>Kênh 2: Chủ đề đời sống thực tế ({topicPlaylists.length} chủ đề)</span>
          </button>
        </div>

        <span className="text-xs text-sub font-medium">
          💡 Âm thanh tiếp tục phát nền kể cả khi bạn chuyển trang khác
        </span>
      </div>

      {/* Playlists Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {(activeTab === 'exam' ? examPlaylists : topicPlaylists).map((pl) => {
          const isThisActive = currentPlaylist?.id === pl.id
          const isThisPlaying = isThisActive && isPlaying

          return (
            <Card
              key={pl.id}
              className={cx(
                'p-6 transition-all border-2 relative flex flex-col justify-between space-y-4 hover:shadow-md',
                isThisActive ? 'border-emerald-500 bg-emerald-500/5' : 'hover:border-line/80',
              )}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cx(
                      'text-[11px] font-black px-2.5 py-0.5 rounded-full border',
                      pl.accentColor,
                    )}
                  >
                    {pl.badge}
                  </span>
                  <span className="text-xs text-sub font-semibold">
                    {pl.tracks.length} track đối thoại
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-ink">
                  {pl.titleVn}
                </h3>
                <p className="text-xs sm:text-sm text-sub font-medium">
                  <Jp text={pl.title} />
                </p>
                <p className="text-xs sm:text-sm text-sub leading-relaxed pt-1">
                  {pl.description}
                </p>
              </div>

              {/* Sample Track list preview */}
              <div className="pt-2 border-t border-line/60 space-y-1 text-xs">
                <p className="font-semibold text-sub/80 text-[11px] uppercase tracking-wider">
                  Nội dung danh sách phát:
                </p>
                <div className="space-y-1">
                  {pl.tracks.slice(0, 3).map((t, idx) => (
                    <div
                      key={t.id}
                      onClick={() => playPlaylist(pl, idx)}
                      className={cx(
                        'p-1.5 rounded-lg flex items-center justify-between gap-2 cursor-pointer transition',
                        isThisActive && trackIndex === idx
                          ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold'
                          : 'hover:bg-muted/70 text-sub',
                      )}
                    >
                      <span className="truncate">
                        {idx + 1}. {t.titleVn}
                      </span>
                      {isThisActive && trackIndex === idx && (
                        <Volume2 size={13} className="shrink-0 text-emerald-500 animate-pulse" />
                      )}
                    </div>
                  ))}
                  {pl.tracks.length > 3 && (
                    <p className="text-[11px] text-sub/60 pl-1.5">
                      + thêm {pl.tracks.length - 3} track đàm thoại khác...
                    </p>
                  )}
                </div>
              </div>

              {/* Action Controls */}
              <div className="pt-3 border-t border-line/60 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (isThisActive) {
                      togglePlay()
                    } else {
                      playPlaylist(pl, 0)
                    }
                  }}
                  className={cx(
                    'flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer',
                    isThisPlaying
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20',
                  )}
                >
                  {isThisPlaying ? <Pause size={16} /> : <Play size={16} />}
                  <span>{isThisPlaying ? 'Tạm dừng' : 'Bật playlist này'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!isThisActive) playPlaylist(pl, 0)
                    setIsExpanded(true)
                  }}
                  className="px-3 py-1.5 rounded-xl border border-line hover:bg-muted text-xs font-semibold text-sub transition cursor-pointer"
                >
                  Xem lời thoại
                </button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
