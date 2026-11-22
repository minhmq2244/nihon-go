import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  ClipboardCheck,
  ChevronDown,
  ChevronUp,
  Headphones,
  Mic,
  Sparkles,
  Store,
  GraduationCap,
  Train,
  Home as HomeIcon,
  BookOpen,
} from 'lucide-react'
import { VOL_NAMES, useIndex, unitLabel } from '../lib/data'
import { useUnitProgress } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import type { UnitMeta } from '../types'
import { Html, Jp } from '../components/Jp'
import { Button, Card, Loading, ProgressBar, cx } from '../components/ui'

// 4 Master Topics consolidating Lessons 1 to 11
const MEGA_TOPICS_B01_B11 = [
  {
    idx: 0,
    titleJp: '学校（がっこう）の 1日（いちにち）と 新（あたら）しい 友達（ともだち）',
    titleVn: 'Trường học, Giờ giải lao & Làm quen bạn mới',
    lessons: 'Bài 1, 2, 3, 5, 8, 9, 10',
    desc: 'Làm quen bạn mới, mượn đồ dùng học tập, rủ ra máy bán nước tự động, tán gẫu về thầy cô, sở thích âm nhạc/anime và đổi mã QR LINE.',
    turns: '38 câu thoại',
    icon: GraduationCap,
    accent: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    idx: 1,
    titleJp: '戦神（せんしん）コンビニと 街（まち）の 買（か）い物（もの）',
    titleVn: 'Chiến thần Konbini & Mua sắm đời sống',
    lessons: 'Bài 2, 6, 10, 11',
    desc: 'Chọn đồ ăn 7-Eleven, đối đáp chuẩn 100% ngoài đời với nhân viên (hâm cơm, đũa thìa, túi 3 yên, tích điểm, mua gà nóng quầy kính, quét mã PayPay).',
    turns: '38 câu thoại',
    icon: Store,
    accent: 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  {
    idx: 2,
    titleJp: '毎日の生活（せいかつ）リズムと 週末（しゅうまつ）の 約束（やくそく）',
    titleVn: 'Nhịp sống hàng ngày, Tàu điện & Hẹn cuối tuần',
    lessons: 'Bài 3, 4, 5, 6, 11',
    desc: 'Lịch thức dậy, đi làm thêm, đi tàu JR Chuo đổi Yamanote ở ga Shinjuku, hẹn đi Akihabara ăn mì ramen 850 yên ở máy bán vé tự động.',
    turns: '31 câu thoại',
    icon: Train,
    accent: 'border-sky-500/40 bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
  {
    idx: 3,
    titleJp: 'アパートの 暮（く）らしと 助（たす）け合（あ）い',
    titleVn: 'Nhà trọ, Mượn đồ & Sinh hoạt tự lập',
    lessons: 'Bài 7, 8, 10, 11',
    desc: 'Bạn đến thăm phòng trọ 45.000 yên, tặng cà phê VN, mượn kéo mở thùng, cài Wi-Fi, quy tắc phân loại rác, tem giảm giá nửa giá (50%) và nấu ăn chung.',
    turns: '32 câu thoại',
    icon: HomeIcon,
    accent: 'border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
]

function UnitCard({ u, current }: { u: UnitMeta; current: boolean }) {
  const { ratio } = useUnitProgress(u.id)
  const status = ratio >= 0.85 ? 'done' : ratio > 0 || current ? 'doing' : 'todo'
  return (
    <Link to={`/u/${u.id}`}>
      <div
        className={cx(
          'h-full rounded-2xl border bg-surface p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lg',
          status === 'done' && 'border-ok/60',
          status === 'doing' && 'border-2 border-accent shadow-sm',
          status === 'todo' && 'border-line',
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">{unitLabel(u)}</span>
          <span
            className={cx(
              'rounded-full px-2.5 py-1 text-xs font-bold',
              status === 'done' && 'bg-ok-soft text-ok',
              status === 'doing' && 'bg-accent-soft text-accent',
              status === 'todo' && 'bg-muted text-sub',
            )}
          >
            {status === 'done' ? (
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Hoàn thành
              </span>
            ) : status === 'doing' ? (
              'Đang học'
            ) : (
              'Chưa học'
            )}
          </span>
        </div>
        <p className="mt-2.5 text-xl sm:text-2xl font-bold leading-snug">
          <Jp text={u.title} />
        </p>
        <p className="mt-1 text-base text-sub">{u.subtitle}</p>
        <ProgressBar value={ratio} className="mt-4 h-2.5" />
      </div>
    </Link>
  )
}

export function Units() {
  const { data: index } = useIndex()
  const lastId = useProgress((s) => s.lastPlace?.unitId)
  const [showOldLessons, setShowOldLessons] = useState(false)
  const [overview, setOverview] = useState(false)
  if (!index) return <Loading />

  const cdUnits = index.units.filter((u) => u.vol === 4)
  const oldUnits = index.units.filter((u) => u.vol <= 3)

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
          Lộ trình Thực chiến & Chủ đề học
        </h1>
        <p className="mt-2 text-base sm:text-lg text-sub font-medium max-w-3xl">
          Toàn bộ kiến thức <b>Bài 1 đến Bài 11 đã được gộp lại</b> thành 4 Siêu Chủ Đề Đời Thường thực tế để bạn ôn tập và luyện nghe ngấm. Sau đó tiếp tục lộ trình chính để <b>hoàn tất N5 và đạt chuẩn N4+</b> qua 10 chủ đề đời sống.
        </p>
      </div>

      {/* SECTION 1: MASTER CONSOLIDATION OF LESSONS 1 TO 11 */}
      <section className="space-y-5">
        <div className="rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-surface to-teal-500/10 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider">
                <Sparkles size={13} /> ĐÃ GỘP TỔNG HỢP TOÀN BỘ BÀI 1 – 11
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-ink">
                Đại Tổng Ôn Thực Chiến Đời Thường (Bài 1 – 11)
              </h2>
              <p className="mt-1 text-sm sm:text-base text-sub font-medium">
                139 lượt thoại chân thực, tái hiện 100% cuộc sống ngoài đời: không học lẻ tẻ từng bài nữa, luyện nghe và nhập vai đối đáp trực tiếp!
              </p>
            </div>
            <Link to="/passive-listening">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-md">
                <Headphones size={18} /> Bật nghe liên tục 40 phút
              </Button>
            </Link>
          </div>

          {/* 4 Master Topic Cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {MEGA_TOPICS_B01_B11.map((t) => {
              const Icon = t.icon
              return (
                <Card key={t.idx} className="p-5 flex flex-col justify-between space-y-4 border hover:border-emerald-500 transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className={cx('inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border', t.accent)}>
                        <Icon size={14} /> Siêu Chủ Đề {t.idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-sub">
                        {t.turns} · {t.lessons}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-ink">
                      {t.titleVn}
                    </h3>
                    <p className="text-xs sm:text-sm text-sub font-medium">
                      <Jp text={t.titleJp} />
                    </p>
                    <p className="text-xs sm:text-sm text-sub leading-relaxed pt-1">
                      {t.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-line/60">
                    <Link
                      to={`/kaiwa/cd00/${t.idx}`}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 px-3.5 py-2 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 transition"
                    >
                      <Mic size={14} />
                      <span>Luyện vai đối đáp 4 bước</span>
                    </Link>

                    <Link
                      to="/passive-listening"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-sub hover:text-ink transition"
                    >
                      <Headphones size={14} />
                      <span>Nghe chạy chữ Spotify →</span>
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Collapsible drawer for reviewing old 11 individual lessons if needed */}
          <div className="mt-6 pt-4 border-t border-line/70">
            <button
              type="button"
              onClick={() => setShowOldLessons(!showOldLessons)}
              className="inline-flex items-center gap-2 text-sm font-bold text-sub hover:text-ink transition cursor-pointer"
            >
              {showOldLessons ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              <span>{showOldLessons ? 'Thu gọn' : 'Xem lại lý thuyết chi tiết của 11 bài cũ (Bài 1 – 11) nếu cần tra cứu'}</span>
            </button>

            {showOldLessons && (
              <div className="mt-4 pt-4 border-t border-line/50 space-y-4">
                <p className="text-xs text-sub font-medium">
                  💡 Các bài này bạn đã học rồi, chỉ cần mở ra khi bạn muốn tra cứu lại điểm ngữ pháp hoặc danh sách từ vựng cụ thể:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {oldUnits.map((u) => (
                    <UnitCard key={u.id} u={u} current={u.id === lastId} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MAIN FORWARD PATH: TOPICS 0–9 (N5+ → N4) */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen size={13} /> LỘ TRÌNH CHÍNH
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
              Tập 4 · Hoàn tất N5 & Chinh phục N4 (Chủ đề 0 – 9)
            </h2>
            <p className="mt-1 text-base text-sub font-medium">
              Phủ 100% N5 còn lại (Bài 12–15) và toàn bộ N4 qua 10 chủ đề giao tiếp đời sống tại Nhật Bản (90 mẫu ngữ pháp, 180 Kanji, 720 từ vựng).
            </p>
          </div>
          <div className="flex gap-2.5">
            <Button size="sm" variant="outline" onClick={() => setOverview(!overview)}>
              {overview ? 'Ẩn' : 'Xem'} bảng phủ kiến thức
            </Button>
            <Link to="/exams/t4">
              <Button size="sm" variant="primary">
                <ClipboardCheck size={16} /> Đề tổng hợp Tập 4
              </Button>
            </Link>
          </div>
        </div>

        {overview && (
          <Card className="p-6">
            <Html html={index.overview.vol4Html} />
          </Card>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cdUnits.map((u) => (
            <UnitCard key={u.id} u={u} current={u.id === lastId} />
          ))}
        </div>
      </section>
    </div>
  )
}
