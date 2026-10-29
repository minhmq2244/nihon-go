import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, ClipboardCheck, MessagesSquare, Repeat, Target } from 'lucide-react'
import { useIndex, unitLabel } from '../lib/data'
import { ALL_UNIT_TABS, UNIT_TABS } from '../lib/progressInfo'
import { streakOf, today, useProgress } from '../store/progress'
import { useSettings } from '../store/settings'
import { Jp } from '../components/Jp'
import { Button, Card, Loading, ProgressBar, cx } from '../components/ui'

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

  const unitsTouched = index.units.filter((u) => Object.keys(sets).some((k) => k.startsWith(u.id + ':')))
  const last = index.units.find((u) => u.id === lastPlace?.unitId) ?? index.units[0]!
  const lastTab = ALL_UNIT_TABS.find((t) => t.id === lastPlace?.tab)
  const kaiwaTotal = index.kaiwa.reduce((s, k) => s + k.dialogueCount, 0)
  const kaiwaDone = Object.entries(dialogues).filter(([id, steps]) => id.startsWith('k') && steps.includes(4)).length
  // Flashcard self-marks and randomly built quiz items are not replayable on the review page.
  const weak = Object.entries(items).filter(([id, s]) => s.bad > 0 && s.bad >= s.ok && !/:(card|learn|mc|rmc|hv|test)$/.test(id)).length
  const streak = streakOf(days)
  const todayCount = days[today()] ?? 0
  const recent = Object.entries(tests)
    .flatMap(([id, list]) => list.map((t) => ({ id, ...t })))
    .sort((a, b) => b.at - a.at)[0]
  const recentName = recent
    ? (() => {
        const u = index.units.find((x) => x.id === recent.id.split(':')[0])
        return u ? `Kiểm tra cuối ${unitLabel(u)}` : (index.exams.find((e) => e.id === recent.id)?.title ?? recent.id)
      })()
    : null

  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
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

      <div className="grid gap-5 md:grid-cols-3">
        <Link to={`/u/${last.id}/${lastTab?.id ?? 'ly-thuyet'}`} className="md:col-span-2">
          <div className="h-full rounded-3xl bg-gradient-to-r from-accent via-accent to-accent/90 p-6 sm:p-8 text-white shadow-lg transition-all hover:shadow-xl hover:brightness-105 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-white/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {lastPlace ? 'Tiếp tục bài học' : 'Bắt đầu bài học'}
                </span>
                {lastTab && (
                  <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/90">
                    Đang ở: {lastTab.label}
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight">
                {unitLabel(last)} · <Jp text={last.title} />
              </h2>
              <p className="mt-1.5 text-base sm:text-lg text-white/90 font-medium">
                {last.subtitle}
              </p>
            </div>
            <div className="mt-6">
              <div className="h-2.5 overflow-hidden rounded-full bg-white/25">
                <div
                  className="h-full rounded-full bg-cta transition-all"
                  style={{
                    width: `${Math.round(
                      (new Set(
                        Object.keys(sets)
                          .filter((k) => k.startsWith(last.id + ':'))
                          .map((k) => k.split(':')[1]),
                      ).size /
                        UNIT_TABS.length) *
                        100,
                    )}%`,
                  }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-xl bg-cta px-5 py-2.5 text-base font-bold text-on-cta shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  {lastPlace ? 'Học tiếp' : 'Vào học ngay'} <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Card className="flex flex-col items-center justify-center p-6 text-center">
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
              <BookOpen size={20} /> Học theo bài
            </p>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink">
              {unitsTouched.length}/{index.units.length}
            </p>
            <ProgressBar value={unitsTouched.length / index.units.length} className="mt-2.5 h-2.5" />
          </Card>
        </Link>
        <Link to="/kaiwa">
          <Card className="h-full p-5 sm:p-6 transition-all hover:border-ok hover:shadow-md">
            <p className="flex items-center gap-2 text-base font-bold text-ok">
              <MessagesSquare size={20} /> Kaiwa
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

      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-ink">Lộ trình của bạn</h3>
          <Link to="/units" className="text-sm font-semibold text-accent hover:underline">
            Xem tất cả bài →
          </Link>
        </div>
        <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1">
          {index.units.map((u) => {
            const touched = unitsTouched.includes(u)
            const current = u.id === last.id
            return (
              <Link
                key={u.id}
                to={`/u/${u.id}`}
                className={cx(
                  'flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border-2 transition-all hover:scale-105 active:scale-95 shadow-xs',
                  current
                    ? 'border-accent bg-accent text-white shadow-md'
                    : touched
                      ? 'border-ok bg-ok-soft text-ok font-bold'
                      : 'border-line bg-surface text-sub hover:border-accent/40 hover:text-ink',
                )}
                title={`${unitLabel(u)} · ${u.subtitle}`}
              >
                <span className="text-[11px] font-semibold opacity-85 uppercase tracking-wide">
                  {u.kind === 'bai' ? 'Bài' : 'CĐ'}
                </span>
                <span className="text-lg font-extrabold leading-none mt-0.5">{u.num}</span>
              </Link>
            )
          })}
        </div>
      </Card>

      {!lastPlace && (
        <div className="pt-2 text-center">
          <Link to="/u/b01">
            <Button variant="cta" size="lg">
              Bắt đầu từ Bài 1
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
