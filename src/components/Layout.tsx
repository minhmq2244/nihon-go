import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { BookOpen, ClipboardCheck, Flame, Home, MessagesSquare, Moon, Repeat, Settings, Sun } from 'lucide-react'
import { useSettings } from '../store/settings'
import { streakOf, useProgress } from '../store/progress'
import { stopSpeaking } from '../lib/speech'
import { cx } from './ui'
import { ErrorBoundary } from './ErrorBoundary'

const NAV = [
  { to: '/', label: 'Trang chủ', short: 'Chủ', icon: Home, end: true },
  { to: '/units', label: 'Học theo bài', short: 'Bài học', icon: BookOpen },
  { to: '/kaiwa', label: 'Kaiwa', short: 'Kaiwa', icon: MessagesSquare },
  { to: '/review', label: 'Ôn tập', short: 'Ôn tập', icon: Repeat },
  { to: '/exams', label: 'Kiểm tra', short: 'Kiểm tra', icon: ClipboardCheck },
]

function FuriganaToggle() {
  const { furigana, set } = useSettings()
  return (
    <button
      type="button"
      onClick={() => set({ furigana: !furigana })}
      className={cx('rounded-full px-3 py-1 text-xs font-semibold transition', furigana ? 'bg-accent-soft text-accent' : 'bg-muted text-sub')}
      title="Bật/tắt furigana"
    >
      <span lang="ja">ふりがな</span> {furigana ? 'ON' : 'OFF'}
    </button>
  )
}

function ThemeToggle() {
  const { theme, set } = useSettings()
  const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
  return (
    <button
      type="button"
      onClick={() => set({ theme: dark ? 'light' : 'dark' })}
      className="flex h-8 w-8 items-center justify-center rounded-full text-sub hover:bg-muted"
      title="Sáng / tối"
      aria-label="Đổi giao diện sáng / tối"
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}

function Streak() {
  const days = useProgress((s) => s.days)
  const n = streakOf(days)
  return (
    <span
      className={cx('flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold', n ? 'bg-warn-soft text-warn' : 'bg-muted text-sub')}
      title="Số ngày học liên tiếp"
    >
      <Flame size={14} /> {n}
    </span>
  )
}

export function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    stopSpeaking()
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen md:pl-60">
      <aside className="no-print fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-line bg-surface px-3 py-4 md:flex">
        <NavLink to="/" className="mb-6 flex items-center gap-2 px-3 text-lg font-bold text-accent">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white" lang="ja">
            日
          </span>
          Nihongo
        </NavLink>
        <nav className="flex flex-1 flex-col gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                cx(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition',
                  isActive ? 'bg-accent-soft font-semibold text-accent' : 'text-sub hover:bg-muted hover:text-ink',
                )
              }
            >
              <n.icon size={19} />
              {n.label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cx('flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px]', isActive ? 'bg-accent-soft font-semibold text-accent' : 'text-sub hover:bg-muted')
          }
        >
          <Settings size={19} /> Cài đặt
        </NavLink>
      </aside>

      <header className="no-print sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-accent md:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white" lang="ja">
              日
            </span>
            Nihongo
          </NavLink>
          <span className="flex-1" />
          <Streak />
          <FuriganaToggle />
          <ThemeToggle />
          <NavLink to="/settings" className="flex h-8 w-8 items-center justify-center rounded-full text-sub hover:bg-muted md:hidden" aria-label="Cài đặt">
            <Settings size={17} />
          </NavLink>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pt-5 pb-28 md:pb-10">
        <ErrorBoundary resetKey={pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>

      <nav className="no-print fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.end}
            className={({ isActive }) => cx('flex flex-col items-center gap-0.5 py-2 text-[11px]', isActive ? 'font-semibold text-accent' : 'text-sub')}
          >
            <n.icon size={21} />
            {n.short}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
