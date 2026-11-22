import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  Sparkles,
  Mic,
  ArrowRight,
} from 'lucide-react'
import {
  getExamPlaylists,
  getMegaMixPlaylist,
  getMegaRealLifePlaylist,
  getTopicPlaylists,
} from '../lib/passiveListeningData'
import { usePassivePlayer } from '../store/passivePlayer'
import { Card, cx } from '../components/ui'
import { Jp } from '../components/Jp'

export function PassiveListeningPage() {
  const [activeTab, setActiveTab] = useState<'topic' | 'exam'>('topic')
  const [megaMode, setMegaMode] = useState<'life' | 'exam'>('life')
  const currentPlaylist = usePassivePlayer((s) => s.playlist)
  const isPlaying = usePassivePlayer((s) => s.isPlaying)
  const trackIndex = usePassivePlayer((s) => s.trackIndex)
  const playPlaylist = usePassivePlayer((s) => s.playPlaylist)
  const togglePlay = usePassivePlayer((s) => s.togglePlay)
  const setIsExpanded = usePassivePlayer((s) => s.setIsExpanded)

  const megaLife = getMegaRealLifePlaylist()
  const megaExam = getMegaMixPlaylist()
  const activeMega = megaMode === 'life' ? megaLife : megaExam
  const examPlaylists = getExamPlaylists()
  const topicPlaylists = getTopicPlaylists()

  const isMegaPlaying = currentPlaylist?.id === activeMega.id && isPlaying

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

      {/* Featured Mega Mix Switcher & Card */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setMegaMode('life')}
            className={cx(
              'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-extrabold transition cursor-pointer',
              megaMode === 'life'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-surface border border-line text-sub hover:text-ink',
            )}
          >
            <Sparkles size={16} />
            <span>⭐ Mega Thực Chiến Đời Thường (Bài 1 – 11)</span>
          </button>
          <button
            type="button"
            onClick={() => setMegaMode('exam')}
            className={cx(
              'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-extrabold transition cursor-pointer',
              megaMode === 'exam'
                ? 'bg-amber-500 text-black shadow-md'
                : 'bg-surface border border-line text-sub hover:text-ink',
            )}
          >
            <Flame size={16} />
            <span>🔥 Mega Cấp Tốc Ôn Thi (Bài 8 – 11)</span>
          </button>
        </div>

        <Card
          className={cx(
            'relative overflow-hidden border-2 p-6 sm:p-7 shadow-md transition-all',
            megaMode === 'life'
              ? 'border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-surface to-teal-500/10'
              : 'border-amber-500/40 bg-gradient-to-br from-amber-500/15 via-surface to-orange-500/10',
          )}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div
                className={cx(
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-xs',
                  megaMode === 'life' ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-black',
                )}
              >
                {megaMode === 'life' ? <Sparkles size={14} /> : <Flame size={14} />}
                <span>{activeMega.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-ink">
                {activeMega.titleVn}
              </h2>
              <p className="text-sm sm:text-base text-sub leading-relaxed font-medium">
                {activeMega.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-sub font-semibold">
                <span className="flex items-center gap-1">
                  <ListMusic size={14} className={megaMode === 'life' ? 'text-emerald-500' : 'text-amber-500'} />
                  <span>{activeMega.tracks.length} trường đoạn liên hoàn</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className={megaMode === 'life' ? 'text-emerald-500' : 'text-amber-500'} />
                  <span>Khoảng 45 phút nghe</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Languages size={14} className={megaMode === 'life' ? 'text-emerald-500' : 'text-amber-500'} />
                  <span>Hỗ trợ Song ngữ & Chạy chữ Spotify</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (currentPlaylist?.id === activeMega.id) {
                    togglePlay()
                  } else {
                    playPlaylist(activeMega, 0)
                  }
                }}
                className={cx(
                  'flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-extrabold text-base shadow-lg transition-all active:scale-95 cursor-pointer',
                  megaMode === 'life'
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25'
                    : 'bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/25',
                )}
              >
                {isMegaPlaying ? <Pause size={20} /> : <Play size={20} className={megaMode === 'life' ? 'fill-white' : 'fill-black'} />}
                <span>{isMegaPlaying ? 'Tạm dừng nghe' : 'Phát Mega Mix ngay'}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  if (currentPlaylist?.id !== activeMega.id) playPlaylist(activeMega, 0)
                  setIsExpanded(true)
                }}
                className="px-4 py-3 rounded-2xl border border-line bg-surface/80 hover:bg-surface text-ink text-sm font-bold transition cursor-pointer"
              >
                Xem lời thoại Spotify
              </button>
            </div>
          </div>

          {/* Quick list of tracks inside this Mega Mix with direct Play & Interactive Roleplay links */}
          <div className="mt-6 pt-5 border-t border-line/60">
            <p className="text-xs font-bold uppercase tracking-wider text-sub mb-3">
              Các trường đoạn trong Mega Mix (Bấm để nghe hoặc vào Luyện tương tác):
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {activeMega.tracks.map((t, idx) => {
                const isThisTrackPlaying = currentPlaylist?.id === activeMega.id && trackIndex === idx && isPlaying
                return (
                  <div
                    key={t.id}
                    className={cx(
                      'flex items-center justify-between gap-3 p-3 rounded-xl border transition',
                      currentPlaylist?.id === activeMega.id && trackIndex === idx
                        ? 'bg-emerald-500/10 border-emerald-500/50 text-ink'
                        : 'bg-surface/60 border-line hover:border-line/80 text-sub',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => playPlaylist(activeMega, idx)}
                      className="flex items-center gap-2.5 text-left flex-1 min-w-0 cursor-pointer"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold text-ink">
                        {isThisTrackPlaying ? <Volume2 size={15} className="text-emerald-500 animate-pulse" /> : idx + 1}
                      </div>
                      <div className="truncate">
                        <p className="text-sm font-bold text-ink truncate">{t.titleVn}</p>
                        <p className="text-xs text-sub truncate">{t.tag}</p>
                      </div>
                    </button>

                    {megaMode === 'life' && (
                      <Link
                        to={`/kaiwa/cd00/${idx}`}
                        className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 transition shrink-0"
                        title="Vào luyện Shadowing / Nhập vai đối đáp 4 bước"
                      >
                        <Mic size={12} />
                        <span>Luyện vai</span>
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </Card>
      </div>

      {/* Two Channels Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
        <div className="flex gap-2">
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
            <span>Kênh 1: Chủ đề đời sống thực tế ({topicPlaylists.length} chủ đề)</span>
          </button>

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
            <span>Kênh 2: Ôn thi theo bài ({examPlaylists.length} bài)</span>
          </button>
        </div>

        <span className="text-xs text-sub font-medium">
          💡 Âm thanh tiếp tục phát nền kể cả khi bạn chuyển trang khác
        </span>
      </div>

      {/* Playlists Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {(activeTab === 'topic' ? topicPlaylists : examPlaylists).map((pl) => {
          const isThisActive = currentPlaylist?.id === pl.id

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
                  {pl.tracks.slice(0, 4).map((t, idx) => (
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
                  {pl.tracks.length > 4 && (
                    <p className="text-[11px] text-sub/60 pl-1.5">
                      + thêm {pl.tracks.length - 4} track đối thoại khác...
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => playPlaylist(pl, 0)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-xs active:scale-95 transition cursor-pointer"
                >
                  <Play size={14} className="fill-white" />
                  <span>Phát danh sách</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (currentPlaylist?.id !== pl.id) playPlaylist(pl, 0)
                    setIsExpanded(true)
                  }}
                  className="text-xs sm:text-sm font-semibold text-sub hover:text-ink transition cursor-pointer"
                >
                  Mở trình phát lời →
                </button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
