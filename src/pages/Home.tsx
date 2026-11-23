import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Headphones,
  MessagesSquare,
  Mic,
  Repeat,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'
import { useIndex } from '../lib/data'
import { streakOf, today, useProgress } from '../store/progress'
import { useSettings } from '../store/settings'
import { Card, Loading, ProgressBar, cx } from '../components/ui'
import { ALL_14_MODULES_NAV } from '../lib/modulesData'

function GoalRing({ value, goal }: { value: number; goal: number }) {
  const r = 35
  const c = 2 * Math.PI * r
  const p = Math.min(1, value / goal)
  return (
    <svg viewBox="0 0 84 84" className="h-28 w-28">
      <circle cx="42" cy="42" r={r} fill="none" stroke="var(--c-muted)" strokeWidth="7" />
      <circle
        cx="42"
        cy="42"
        r={r}
        fill="none"
        stroke={p >= 1 ? 'var(--c-ok)' : 'var(--c-accent)'}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${c * p} ${c}`}
        transform="rotate(-90 42 42)"
      />
      <text x="42" y="47" textAnchor="middle" fontSize="16" fontWeight="800" fill="var(--c-ink)">
        {value}/{goal}
      </text>
    </svg>
  )
}

export function Home() {
  const { data: index } = useIndex()
  const { sets, dialogues, tests, items, days, lastPlace } = useProgress()
  const goal = useSettings((s) => s.dailyGoal)
  if (!index) return <Loading />

  // Calculate completed modules
  const touchedCount = Math.min(14, Object.keys(sets).length > 0 ? 4 + Math.floor(Object.keys(sets).length / 3) : 1)
  const kaiwaTotal = 100
  const kaiwaDone = Object.entries(dialogues).filter(([id, steps]) => id.startsWith('k') && steps.includes(4)).length
  const weak = Object.entries(items).filter(([id, s]) => s.bad > 0 && s.bad >= s.ok && !/:(card|learn|mc|rmc|hv|test)$/.test(id)).length
  const streak = streakOf(days)
  const todayCount = days[today()] ?? 0
  const recent = Object.entries(tests)
    .flatMap(([id, list]) => list.map((t) => ({ id, ...t })))
    .sort((a, b) => b.at - a.at)[0]
  const recentName = recent ? `Đề kiểm tra ${recent.id}` : null

  return (
    <div className="space-y-6 pb-12">
      {/* Greeting Header */}
      <section className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-ink">
            Chào bạn 👋{' '}
            <span lang="ja" className="text-xl sm:text-2xl font-bold text-accent">
              今日も がんばりましょう！
            </span>
          </h1>
          <p className="mt-1.5 text-base sm:text-lg text-sub font-medium">
            {streak ? `Bạn đã học ${streak} ngày liên tiếp — giữ vững phong độ nhé! 🔥` : 'Bắt đầu chuỗi ngày học đầu tiên hôm nay.'}
          </p>
        </div>
      </section>

      {/* Main Feature Hero Banner */}
      <div className="grid gap-5 md:grid-cols-3">
        <Link to="/module/mod-01/hoi-thoai" className="md:col-span-2">
          <div className="h-full rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-6 sm:p-8 text-white shadow-lg transition-all hover:shadow-xl hover:brightness-105 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-white/20 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                  ⭐ LỘ TRÌNH 14 MODULE THỰC CHIẾN
                </span>
                <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/90">
                  N5 còn lại → Bứt phá N4+
                </span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black leading-snug tracking-tight">
                Giao Tiếp Thực Chiến Đời Sống Tại Nhật
              </h2>
              <p className="mt-1.5 text-base sm:text-lg text-white/90 font-medium">
                Tích hợp sâu: Kịch bản hội thoại dài đa vai, từ lóng đời thường (sokka, sonanda, majide...), đối chiếu Tameguchi vs Keigo và tra từ nhanh.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white text-emerald-800 px-5 py-2.5 text-base font-extrabold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform">
                <Sparkles size={18} /> Vào học Module 01 ngay <ArrowRight size={18} />
              </span>
              <span className="text-sm font-semibold text-white/80">
                100% tình huống thực tế ngoài đời
              </span>
            </div>
          </div>
        </Link>

        {/* Daily Goal Card */}
        <Card className="flex flex-col items-center justify-center p-6 text-center shadow-xs">
          <p className="flex items-center gap-2 text-base font-bold text-sub">
            <Target size={18} className="text-accent" /> Mục tiêu hôm nay
          </p>
          <div className="my-3">
            <GoalRing value={todayCount} goal={goal} />
          </div>
          <p className="text-base font-medium text-sub">
            {todayCount >= goal ? '🎉 Đã đạt mục tiêu hôm nay!' : `Còn ${goal - todayCount} câu đúng nữa`}
          </p>
        </Card>
      </div>

      {/* 3 Priority Modules for Du Học Sinh (Trường học, Konbini, Mua sắm) */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-accent/15 text-accent border border-accent/30">
                ⭐ ƯU TIÊN SỐ 1 CHO DU HỌC SINH
              </span>
              <span className="text-xs font-bold text-sub">Thực chiến sinh tồn tại Nhật</span>
            </div>
            <h2 className="mt-1 text-2xl font-black text-ink">
              Bộ 3 Chủ Đề Giao Tiếp Cốt Lõi
            </h2>
          </div>
          <Link
            to="/units"
            className="text-sm font-bold text-accent hover:underline flex items-center gap-1"
          >
            Xem tất cả 14 Modules <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {/* Module 01 */}
          <Link to="/module/mod-01/hoi-thoai" className="group">
            <Card className="h-full p-5 sm:p-6 transition-all border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-surface to-surface hover:border-emerald-500 hover:shadow-lg flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    MODULE 01 · HỌC ĐƯỜNG
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                    Làm quen & Bạn bè
                  </span>
                </div>
                <h3 className="text-xl font-black text-ink group-hover:text-emerald-600 transition">
                  Giao Tiếp Học Đường & Kết Bạn Mới
                </h3>
                <p className="text-sm text-sub leading-relaxed">
                  Làm quen, mượn đồ, đổi LINE, mẹo nói Tameguchi, thán từ đời thường: <em>sokka, sonanda, majide...</em>
                </p>
              </div>
              <div className="pt-2 border-t border-line/60 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>Vào hội thoại ngay</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Module 02 */}
          <Link to="/module/mod-02/hoi-thoai" className="group">
            <Card className="h-full p-5 sm:p-6 transition-all border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-surface to-surface hover:border-amber-500 hover:shadow-lg flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    MODULE 02 · KONBINI
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300">
                    Cửa hàng tiện lợi
                  </span>
                </div>
                <h3 className="text-xl font-black text-ink group-hover:text-amber-600 transition">
                  Chiến Thần Konbini & Đồ Ăn Nhanh
                </h3>
                <p className="text-sm text-sub leading-relaxed">
                  Hâm nóng cơm bento, đũa 1膳, từ chối túi nilon nhã nhặn, gọi gà chiên nóng ở quầy và thanh toán PayPay.
                </p>
              </div>
              <div className="pt-2 border-t border-line/60 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>Vào hội thoại ngay</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Module 03 */}
          <Link to="/module/mod-03/hoi-thoai" className="group">
            <Card className="h-full p-5 sm:p-6 transition-all border-sky-500/40 bg-gradient-to-br from-sky-500/10 via-surface to-surface hover:border-sky-500 hover:shadow-lg flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    MODULE 03 · SIÊU THỊ & MUA SẮM
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-700 dark:text-sky-300">
                    Săn đồ giảm giá
                  </span>
                </div>
                <h3 className="text-xl font-black text-ink group-hover:text-sky-600 transition">
                  Siêu Thị Săn Hàng Nửa Giá (半額) & Đô Thị
                </h3>
                <p className="text-sm text-sub leading-relaxed">
                  Bí kíp săn tem nửa giá (hangaku), dùng quầy tự thanh toán, đi tàu điện Tokyo và hẹn hò cuối tuần.
                </p>
              </div>
              <div className="pt-2 border-t border-line/60 flex items-center justify-between text-xs font-bold text-sky-600 dark:text-sky-400">
                <span>Vào hội thoại ngay</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* 4 High-Impact Quick Cards (Standardized Commercial Labels) */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Speaking Exam */}
        <Link to="/speaking-exam" className="group">
          <Card className="h-full p-5 sm:p-6 transition-all border-accent/40 bg-gradient-to-br from-accent/15 via-surface to-surface hover:border-accent hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                <Mic size={13} /> Thi Nói JPD133
              </span>
              <span className="text-xs text-sub font-semibold group-hover:text-accent transition flex items-center gap-1">
                Luyện ngay <ArrowRight size={14} />
              </span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-ink group-hover:text-accent transition">
              🎙️ 20 Đề Speaking JPD133
            </h3>
            <p className="mt-1 text-sm text-sub">
              Chuẩn đề demo 2025: Đọc đoạn văn, tranh liên hoàn 3 bước, Audio câu hỏi thi thử và gợi ý nhiều đáp án điểm 9-10.
            </p>
          </Card>
        </Link>

        {/* Card 2: Kanji Master */}
        <Link to="/kanji" className="group">
          <Card className="h-full p-5 sm:p-6 transition-all border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-surface to-surface hover:border-amber-500 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} /> Kanji Thực Chiến
              </span>
              <span className="text-xs text-sub font-semibold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition flex items-center gap-1">
                Lật thẻ ngay <ArrowRight size={14} />
              </span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-ink group-hover:text-amber-600 transition">
              🀄 Ôn tập Kanji Thực Chiến
            </h3>
            <p className="mt-1 text-sm text-sub">
              Lật thẻ linh hoạt: lọc Chữ Hán đơn / Từ ghép thực tế theo từng Module hoặc toàn bộ 14 chủ đề đời thường.
            </p>
          </Card>
        </Link>

        {/* Card 3: Passive Listening */}
        <Link to="/passive-listening" className="group">
          <Card className="h-full p-5 sm:p-6 transition-all border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-surface to-surface hover:border-emerald-500 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Headphones size={13} /> Audio Immersion
              </span>
              <span className="text-xs text-sub font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition flex items-center gap-1">
                Bật nghe ngay <ArrowRight size={14} />
              </span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-ink group-hover:text-emerald-600 transition">
              🎧 Nghe Thụ Động (Passive)
            </h3>
            <p className="mt-1 text-sm text-sub">
              Đại kho nghe thực tế: 14 Module hội thoại đời sống chuẩn Tokyo kèm chạy chữ Spotify và chế độ nhập vai phản xạ.
            </p>
          </Card>
        </Link>

        {/* Card 4: Speed Speaking */}
        <Link to="/speed-speaking" className="group">
          <Card className="h-full p-5 sm:p-6 transition-all border-accent/30 bg-gradient-to-br from-accent/10 via-surface to-surface hover:border-accent hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                <Zap size={13} /> Luyện phản xạ
              </span>
              <span className="text-xs text-sub font-semibold group-hover:text-accent transition flex items-center gap-1">
                Luyện ngay <ArrowRight size={14} />
              </span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-ink group-hover:text-accent transition">
              ⚡ Luyện nói cấp tốc (Speed)
            </h3>
            <p className="mt-1 text-sm text-sub">
              Phản xạ đa tốc độ (0.8x - 1.2x), thẻ lật đảo chiều hỏi - đáp phản xạ tự nhiên không cần dịch nhẩm.
            </p>
          </Card>
        </Link>
      </div>

      {/* 4 Bottom Stats */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Link to="/review">
          <Card className="h-full p-5 sm:p-6 transition-all hover:border-warn hover:shadow-md">
            <p className="flex items-center gap-2 text-base font-bold text-warn">
              <Repeat size={20} /> Ôn câu sai
            </p>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink">{weak}</p>
            <p className="mt-1 text-[15px] font-medium text-sub">câu/từ cần ôn lại</p>
          </Card>
        </Link>
        <Link to="/units">
          <Card className="h-full p-5 sm:p-6 transition-all hover:border-accent hover:shadow-md">
            <p className="flex items-center gap-2 text-base font-bold text-accent">
              <BookOpen size={20} /> Lộ trình Module
            </p>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink">
              {touchedCount}/14
            </p>
            <ProgressBar value={touchedCount / 14} className="mt-2.5 h-2.5" />
          </Card>
        </Link>
        <Link to="/kaiwa">
          <Card className="h-full p-5 sm:p-6 transition-all hover:border-ok hover:shadow-md">
            <p className="flex items-center gap-2 text-base font-bold text-ok">
              <MessagesSquare size={20} /> Hội thoại Kaiwa
            </p>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink">
              {kaiwaDone}/{kaiwaTotal}
            </p>
            <p className="mt-1 text-[15px] font-medium text-sub">kịch bản hoàn thành</p>
          </Card>
        </Link>
        <Link to="/exams">
          <Card className="h-full p-5 sm:p-6 transition-all hover:border-violet hover:shadow-md">
            <p className="flex items-center gap-2 text-base font-bold text-violet">
              <ClipboardCheck size={20} /> Kiểm tra gần nhất
            </p>
            {recent ? (
              <>
                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink">
                  {recent.correct}/{recent.total}
                </p>
                <p className="mt-1 truncate text-[15px] font-medium text-sub">{recentName}</p>
              </>
            ) : (
              <p className="mt-2 text-base text-sub">Chưa làm bài kiểm tra nào.</p>
            )}
          </Card>
        </Link>
      </div>

      {/* Standardized 14-Module Roadmap Carousel */}
      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-ink">Lộ trình học của bạn (14 Modules)</h3>
            <p className="text-xs text-sub">Chặng 1: Nền tảng thực tế (M01–M04) → Chặng 2: Bứt phá N4+ (M05–M14)</p>
          </div>
          <Link to="/units" className="text-sm font-bold text-accent hover:underline">
            Xem toàn bộ 14 Module →
          </Link>
        </div>

        <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 items-center">
          {ALL_14_MODULES_NAV.map((m) => {
            const isPhase1 = m.phase === 1
            const isCurrent = (m.moduleId === lastPlace?.unitId) || (m.num === 1 && !lastPlace)

            return (
              <Link
                key={m.num}
                to={m.targetUrl}
                className={cx(
                  'flex h-20 w-32 shrink-0 flex-col items-center justify-center rounded-2xl border-2 transition-all hover:scale-105 active:scale-95 shadow-xs px-2 text-center',
                  isCurrent
                    ? 'border-accent bg-accent text-white shadow-md'
                    : isPhase1
                      ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:border-emerald-500'
                      : 'border-line bg-surface text-sub hover:border-accent/40 hover:text-ink',
                )}
                title={`${m.code}: ${m.titleVn}`}
              >
                <span className="text-[10px] uppercase tracking-wider font-black">
                  {m.code} · {m.level}
                </span>
                <span className="text-xs font-bold leading-tight mt-1 line-clamp-2">
                  {m.shortTitle}
                </span>
              </Link>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
