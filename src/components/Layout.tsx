import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { BookOpen, ClipboardCheck, FileText, Flame, Home, Menu, MessagesSquare, Moon, Repeat, Settings, Sun } from 'lucide-react'
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
  { to: '/docs', label: 'Tài liệu PDF', short: 'Tài liệu', icon: FileText },
]

function FuriganaToggle() {
  const { furigana, set } = useSettings()
  return (
    <button
      type="button"
      onClick={() => set({ furigana: !furigana })}
      className={cx(
        'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition shadow-xs',
        furigana ? 'bg-accent-soft text-accent ring-1 ring-accent/30' : 'bg-muted text-sub hover:text-ink',
      )}
      title="Bật/tắt furigana"
    >
      <span lang="ja" className="font-bold">ふりがな</span> {furigana ? 'ON' : 'OFF'}
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
      className="flex h-9 w-9 items-center justify-center rounded-full text-sub hover:bg-muted transition"
      title="Sáng / tối"
      aria-label="Đổi giao diện sáng / tối"
    >
      {dark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  )
}

function Streak() {
  const days = useProgress((s) => s.days)
  const n = streakOf(days)
  return (
    <span
      className={cx(
        'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold',
        n ? 'bg-warn-soft text-warn ring-1 ring-warn/30' : 'bg-muted text-sub',
      )}
      title="Số ngày học liên tiếp"
    >
      <Flame size={16} /> {n}
    </span>
  )
}

export function Layout() {
  const { pathname } = useLocation()
  const { sidebarCollapsed, set } = useSettings()
  const toggleSidebar = () => set({ sidebarCollapsed: !sidebarCollapsed })

  useEffect(() => {
    stopSpeaking()
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={cx('min-h-screen transition-[padding] duration-300 ease-in-out', sidebarCollapsed ? 'md:pl-20' : 'md:pl-64')}>
      <aside
        className={cx(
          'no-print fixed inset-y-0 left-0 z-30 hidden flex-col border-r border-line bg-surface py-5 transition-[width,padding] duration-300 ease-in-out md:flex',
          sidebarCollapsed ? 'w-20 px-3 items-center' : 'w-64 px-4',
        )}
      >
        <div className={cx('mb-6 flex items-center', sidebarCollapsed ? 'flex-col gap-3 justify-center' : 'gap-2.5 px-0.5')}>
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface hover:bg-muted text-sub hover:text-ink transition cursor-pointer shadow-xs active:scale-95"
            title={sidebarCollapsed ? 'Mở rộng menu' : 'Thu gọn menu'}
            aria-label={sidebarCollapsed ? 'Mở rộng menu' : 'Thu gọn menu'}
          >
            <Menu size={20} />
          </button>
          {!sidebarCollapsed ? (
            <NavLink to="/" className="flex min-w-0 items-center gap-2.5 overflow-hidden transition-all">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 text-xl font-bold text-white shadow-sm" lang="ja">
                日
              </span>
              <div className="min-w-0">
                <span className="block text-xl font-extrabold tracking-tight text-accent truncate">Nihongo</span>
                <span className="block text-[11px] font-medium text-sub truncate">Luyện N5 → N4</span>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/" title="Nihongo - Trang chủ" className="transition-transform hover:scale-105">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 text-xl font-bold text-white shadow-sm" lang="ja">
                日
              </span>
            </NavLink>
          )}
        </div>
        <nav className={cx('flex flex-1 flex-col gap-1.5', sidebarCollapsed ? 'w-full items-center' : '')}>
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              title={sidebarCollapsed ? n.label : undefined}
              className={({ isActive }) =>
                cx(
                  'group relative flex items-center rounded-xl transition-all',
                  sidebarCollapsed
                    ? 'h-11 w-11 justify-center'
                    : 'w-full gap-3.5 px-3.5 py-3 text-[16px] font-medium',
                  isActive ? 'bg-accent-soft font-semibold text-accent shadow-xs' : 'text-sub hover:bg-muted/80 hover:text-ink',
                )
              }
            >
              <n.icon size={21} className="shrink-0" />
              {!sidebarCollapsed && <span className="truncate">{n.label}</span>}
              {sidebarCollapsed && (
                <span className="pointer-events-none absolute left-full ml-3 hidden rounded-lg bg-surface border border-line px-2.5 py-1 text-xs font-semibold text-ink shadow-lg group-hover:block z-50 whitespace-nowrap">
                  {n.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/settings"
          title={sidebarCollapsed ? 'Cài đặt' : undefined}
          className={({ isActive }) =>
            cx(
              'group relative flex items-center rounded-xl transition-all',
              sidebarCollapsed
                ? 'h-11 w-11 justify-center'
                : 'w-full gap-3.5 px-3.5 py-3 text-[16px] font-medium',
              isActive ? 'bg-accent-soft font-semibold text-accent shadow-xs' : 'text-sub hover:bg-muted/80 hover:text-ink',
            )
          }
        >
          <Settings size={21} className="shrink-0" />
          {!sidebarCollapsed && <span>Cài đặt</span>}
          {sidebarCollapsed && (
            <span className="pointer-events-none absolute left-full ml-3 hidden rounded-lg bg-surface border border-line px-2.5 py-1 text-xs font-semibold text-ink shadow-lg group-hover:block z-50 whitespace-nowrap">
              Cài đặt
            </span>
          )}
        </NavLink>
      </aside>

      <header className="no-print sticky top-0 z-20 border-b border-line bg-surface/85 backdrop-blur-md">
        <div className="flex h-16 w-full items-center justify-between px-6 md:px-10 lg:px-12">
          <NavLink to="/" className="flex items-center gap-2.5 font-bold text-accent md:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-lg text-white" lang="ja">
              日
            </span>
            <span className="text-xl font-extrabold">Nihongo</span>
          </NavLink>
          <div className="hidden md:block" />
          <div className="flex items-center gap-2.5">
            <Streak />
            <FuriganaToggle />
            <ThemeToggle />
            <NavLink
              to="/settings"
              className="flex h-9 w-9 items-center justify-center rounded-full text-sub hover:bg-muted md:hidden"
              aria-label="Cài đặt"
            >
              <Settings size={19} />
            </NavLink>
          </div>
        </div>
      </header>

      <main className="w-full px-6 md:px-10 lg:px-12 pt-6 pb-28 md:pb-12">
        <ErrorBoundary resetKey={pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>

      <nav className="no-print fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.end}
            className={({ isActive }) => cx('flex flex-col items-center gap-0.5 py-2.5 text-xs', isActive ? 'font-bold text-accent' : 'text-sub')}
          >
            <n.icon size={22} />
            {n.short}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
