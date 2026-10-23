import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useSettings } from '../store/settings'
import { stopSpeaking } from '../lib/speech'
import { cx } from './ui'
import { ErrorBoundary } from './ErrorBoundary'

const NAV = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/units', label: 'Học theo bài' },
  { to: '/kaiwa', label: 'Kaiwa' },
  { to: '/exams', label: 'Kiểm tra' },
  { to: '/settings', label: 'Cài đặt' },
]

export function Layout() {
  const { furigana, theme, set } = useSettings()
  const { pathname } = useLocation()
  useEffect(() => {
    stopSpeaking()
    window.scrollTo(0, 0)
  }, [pathname])
  const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
  return (
    <div className="min-h-screen">
      <header className="no-print sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2.5">
          <NavLink to="/" className="flex items-center gap-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white" lang="ja">
              日
            </span>
            <span className="hidden sm:inline">Nihongo N5→N4</span>
          </NavLink>
          <nav className="hidden flex-1 gap-1 md:flex">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) => cx('rounded-lg px-3 py-1.5 text-sm', isActive ? 'bg-accent-soft font-medium text-accent' : 'text-sub hover:bg-muted')}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => set({ furigana: !furigana })}
              className={cx('rounded-lg border px-2.5 py-1 text-sm', furigana ? 'border-accent bg-accent-soft text-accent' : 'border-line text-sub')}
              title="Bật/tắt furigana"
              lang="ja"
            >
              ふりがな {furigana ? 'ON' : 'OFF'}
            </button>
            <button
              type="button"
              onClick={() => set({ theme: dark ? 'light' : 'dark' })}
              className="rounded-lg border border-line px-2.5 py-1 text-sm text-sub"
              title="Sáng / tối"
            >
              {dark ? '☀' : '☾'}
            </button>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-2 md:hidden">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) => cx('shrink-0 rounded-lg px-3 py-1 text-sm', isActive ? 'bg-accent-soft font-medium text-accent' : 'text-sub')}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <ErrorBoundary resetKey={pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </div>
  )
}
