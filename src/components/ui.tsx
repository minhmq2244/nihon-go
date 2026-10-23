import { forwardRef, useEffect, useRef, type ButtonHTMLAttributes, type ComponentProps, type InputHTMLAttributes, type ReactNode } from 'react'
import { bind, unbind } from 'wanakana'
import { speak, stopSpeaking } from '../lib/speech'
import { useSettings } from '../store/settings'

const cx = (...c: (string | false | undefined | null)[]) => c.filter(Boolean).join(' ')

export function Button({
  variant = 'default',
  size = 'md',
  className,
  ...p
}: ComponentProps<'button'> & { variant?: 'default' | 'primary' | 'ghost' | 'ok' | 'bad'; size?: 'sm' | 'md' }) {
  return (
    <button
      type="button"
      className={cx(
        'inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
        size === 'sm' ? 'px-2.5 py-1 text-sm' : 'px-4 py-2',
        variant === 'primary' && 'bg-accent text-white hover:opacity-90',
        variant === 'default' && 'border border-line bg-surface hover:bg-muted',
        variant === 'ghost' && 'hover:bg-muted',
        variant === 'ok' && 'bg-ok-soft text-ok border border-ok/30',
        variant === 'bad' && 'bg-bad-soft text-bad border border-bad/30',
        className,
      )}
      {...p}
    />
  )
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx('rounded-xl border border-line bg-surface p-4 sm:p-5', className)}>{children}</div>
}

export function Chip({ active, className, ...p }: ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      className={cx(
        'rounded-full border px-3 py-1 text-sm transition whitespace-nowrap',
        active ? 'border-accent bg-accent-soft text-accent font-medium' : 'border-line bg-surface hover:bg-muted',
        className,
      )}
      {...p}
    />
  )
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cx('h-1.5 overflow-hidden rounded-full bg-muted', className)}>
      <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${Math.round(Math.min(1, Math.max(0, value)) * 100)}%` }} />
    </div>
  )
}

export function SpeakButton({ text, role, className, label }: { text: string; role?: 'A' | 'B'; className?: string; label?: string }) {
  return (
    <button
      type="button"
      title="Nghe"
      aria-label={label ?? 'Nghe phát âm'}
      className={cx('inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sub hover:bg-muted hover:text-accent', className)}
      onClick={(e) => {
        e.stopPropagation()
        stopSpeaking()
        void speak(text, { role })
      }}
    >
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
      </svg>
    </button>
  )
}

/** Text input for Japanese answers; optionally converts romaji to kana while typing. */
export const JpInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { state?: 'ok' | 'bad' | null }>(function JpInput(
  { className, state, ...p },
  outer,
) {
  const inner = useRef<HTMLInputElement | null>(null)
  const romaji = useSettings((s) => s.romaji)
  useEffect(() => {
    const el = inner.current
    if (!el || !romaji) return
    bind(el, { IMEMode: 'toHiragana' })
    return () => unbind(el)
  }, [romaji])
  return (
    <input
      lang="ja"
      autoComplete="off"
      autoCorrect="off"
      spellCheck={false}
      ref={(el) => {
        inner.current = el
        if (typeof outer === 'function') outer(el)
        else if (outer) outer.current = el
      }}
      className={cx(
        'rounded-lg border bg-surface px-3 py-1.5 outline-none focus:ring-2 focus:ring-accent/30',
        state === 'ok' ? 'border-ok bg-ok-soft' : state === 'bad' ? 'border-bad bg-bad-soft' : 'border-line',
        className,
      )}
      {...p}
    />
  )
})

export function Empty({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-line p-8 text-center text-sub">
      <p className="font-medium text-ink">{title}</p>
      {children && <div className="mt-1 text-sm">{children}</div>}
    </div>
  )
}

export function Loading() {
  return <div className="p-10 text-center text-sub">Đang tải…</div>
}

export function Verdict({ ok, children }: { ok: boolean; children?: ReactNode }) {
  return (
    <div className={cx('mt-3 rounded-lg px-3 py-2 text-sm', ok ? 'bg-ok-soft text-ok' : 'bg-bad-soft text-bad')}>
      <span className="font-semibold">{ok ? '✓ Đúng' : '✗ Chưa đúng'}</span>
      {children && <div className="mt-1 text-ink">{children}</div>}
    </div>
  )
}

export { cx }
