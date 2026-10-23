import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, ClipboardCheck, MessagesSquare, Repeat, Target } from 'lucide-react'
import { useIndex, unitLabel } from '../lib/data'
import { UNIT_TABS } from '../lib/progressInfo'
import { streakOf, today, useProgress } from '../store/progress'
import { useSettings } from '../store/settings'
import { Jp } from '../components/Jp'
import { Button, Card, Loading, ProgressBar, cx } from '../components/ui'

function GoalRing({ value, goal }: { value: number; goal: number }) {
  const r = 34
  const c = 2 * Math.PI * r
  const p = Math.min(1, value / goal)
  return (
    <svg viewBox="0 0 80 80" className="h-24 w-24">
      <circle cx="40" cy="40" r={r} fill="none" stroke="var(--c-muted)" strokeWidth="8" />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke={p >= 1 ? 'var(--c-ok)' : 'var(--c-accent)'}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${c * p} ${c}`}
        transform="rotate(-90 40 40)"
      />
      <text x="40" y="44" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--c-ink)">
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
  const lastTab = UNIT_TABS.find((t) => t.id === lastPlace?.tab)
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
    <div className="space-y-5">
      <section className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold">
            Chào bạn 👋 <span lang="ja" className="text-lg font-medium text-sub">今日も がんばりましょう！</span>
          </h1>
          <p className="text-sub">
            {streak ? `Bạn đã học ${streak} ngày liên tiếp — giữ chuỗi nhé!` : 'Bắt đầu chuỗi ngày học đầu tiên hôm nay.'}
          </p>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <Link to={`/u/${last.id}/${lastTab?.id ?? 'ly-thuyet'}`} className="md:col-span-2">
          <div className="h-full rounded-2xl bg-accent p-5 text-white shadow-md transition hover:brightness-110">
            <p className="text-sm opacity-85">{lastPlace ? 'Tiếp tục học' : 'Bắt đầu học'}</p>
            <p className="mt-1 text-2xl font-bold leading-snug">
              {unitLabel(last)} · <Jp text={last.title} />
            </p>
            <p className="text-sm opacity-85">
              {last.subtitle}
              {lastTab && ` · Đang ở: ${lastTab.label}`}
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/30">
              <div className="h-full rounded-full bg-cta" style={{ width: `${Math.round((new Set(Object.keys(sets).filter((k) => k.startsWith(last.id + ':')).map((k) => k.split(':')[1])).size / UNIT_TABS.length) * 100)}%` }} />
            </div>
            <span className="mt-4 inline-flex items-center gap-1 rounded-xl bg-cta px-4 py-2 font-semibold text-on-cta">
              {lastPlace ? 'Học tiếp' : 'Vào học'} <ArrowRight size={16} />
            </span>
          </div>
        </Link>
        <Card className="flex flex-col items-center justify-center text-center">
          <p className="flex items-center gap-1 text-sm font-semibold text-sub">
            <Target size={16} /> Mục tiêu hôm nay
          </p>
          <GoalRing value={todayCount} goal={goal} />
          <p className="text-sm text-sub">{todayCount >= goal ? 'Đã đạt mục tiêu 🎉' : `Còn ${goal - todayCount} câu đúng nữa`}</p>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link to="/review">
          <Card className="h-full transition hover:border-warn">
            <p className="flex items-center gap-2 font-semibold text-warn">
              <Repeat size={18} /> Ôn câu sai
            </p>
            <p className="mt-1 text-2xl font-bold">{weak}</p>
            <p className="text-sm text-sub">câu/từ cần ôn lại</p>
          </Card>
        </Link>
        <Link to="/units">
          <Card className="h-full transition hover:border-accent">
            <p className="flex items-center gap-2 font-semibold text-accent">
              <BookOpen size={18} /> Học theo bài
            </p>
            <p className="mt-1 text-2xl font-bold">
              {unitsTouched.length}/{index.units.length}
            </p>
            <ProgressBar value={unitsTouched.length / index.units.length} className="mt-1" />
          </Card>
        </Link>
        <Link to="/kaiwa">
          <Card className="h-full transition hover:border-ok">
            <p className="flex items-center gap-2 font-semibold text-ok">
              <MessagesSquare size={18} /> Kaiwa
            </p>
            <p className="mt-1 text-2xl font-bold">
              {kaiwaDone}/{kaiwaTotal}
            </p>
            <p className="text-sm text-sub">kịch bản hoàn thành</p>
          </Card>
        </Link>
        <Link to="/exams">
          <Card className="h-full transition hover:border-violet">
            <p className="flex items-center gap-2 font-semibold text-violet">
              <ClipboardCheck size={18} /> Kiểm tra gần nhất
            </p>
            {recent ? (
              <>
                <p className="mt-1 text-2xl font-bold">
                  {recent.correct}/{recent.total}
                </p>
                <p className="truncate text-sm text-sub">{recentName}</p>
              </>
            ) : (
              <p className="mt-1 text-sm text-sub">Chưa làm bài kiểm tra nào.</p>
            )}
          </Card>
        </Link>
      </div>

      <Card>
        <p className="mb-3 font-semibold">Lộ trình của bạn</p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {index.units.map((u) => {
            const touched = unitsTouched.includes(u)
            const current = u.id === last.id
            return (
              <Link
                key={u.id}
                to={`/u/${u.id}`}
                className={cx(
                  'flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border-2 text-xs font-bold',
                  current ? 'border-accent bg-accent text-white' : touched ? 'border-ok bg-ok-soft text-ok' : 'border-line bg-surface text-sub',
                )}
                title={`${unitLabel(u)} · ${u.subtitle}`}
              >
                <span className="text-[10px] font-medium opacity-80">{u.kind === 'bai' ? 'Bài' : 'CĐ'}</span>
                {u.num}
              </Link>
            )
          })}
        </div>
      </Card>

      {!lastPlace && (
        <div className="text-center">
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
