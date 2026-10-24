import { forwardRef, type ButtonHTMLAttributes, type ComponentProps, type InputHTMLAttributes, type ReactNode } from 'react'
import { toHiragana } from 'wanakana'
import { speak, stopSpeaking } from '../lib/speech'
import { useSettings } from '../store/settings'

const cx = (...c: (string | false | undefined | null)[]) => c.filter(Boolean).join(' ')

export function Button({
  variant = 'default',
  size = 'md',
  className,
  ...p
}: ComponentProps<'button'> & { variant?: 'default' | 'primary' | 'cta' | 'ghost' | 'ok' | 'bad'; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <button
      type="button"
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
        size === 'sm' ? 'px-3.5 py-1.5 text-sm' : size === 'lg' ? 'px-6 py-3.5 text-lg font-bold' : 'px-5 py-2.5 text-base',
        variant === 'primary' && 'bg-accent text-white shadow-sm hover:brightness-110',
        variant === 'cta' && 'bg-cta text-on-cta shadow-sm hover:brightness-105',
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
  return <div className={cx('rounded-2xl border border-line bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-6', className)}>{children}</div>
}

export function Chip({ active, className, ...p }: ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      className={cx(
        'rounded-full border px-4 py-2 text-[15px] font-medium transition whitespace-nowrap cursor-pointer',
        active ? 'border-accent bg-accent text-white font-semibold shadow-xs' : 'border-line bg-surface text-ink hover:border-accent/50 hover:bg-accent-soft',
        className,
      )}
      {...p}
    />
  )
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cx('h-2 overflow-hidden rounded-full bg-muted', className)}>
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
  { className, state, onChange, ...p },
  ref,
) {
  const romaji = useSettings((s) => s.romaji)
  return (
    <input
      lang="ja"
      autoComplete="off"
      autoCorrect="off"
      spellCheck={false}
      ref={ref}
      onChange={(e) => {
        // Convert in the change handler (not via wanakana.bind) so React state receives the kana.
        if (romaji && !(e.nativeEvent as InputEvent).isComposing) {
          const kana = toHiragana(e.target.value, { IMEMode: true })
          if (kana !== e.target.value) e.target.value = kana
        }
        onChange?.(e)
      }}
      className={cx(
        'rounded-xl border bg-surface px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-accent/30',
        state === 'ok' ? 'border-ok bg-ok-soft' : state === 'bad' ? 'border-bad bg-bad-soft' : 'border-line',
        className,
      )}
      {...p}
    />
  )
})

export function Empty({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-line p-10 text-center text-sub">
      <p className="text-lg font-semibold text-ink">{title}</p>
      {children && <div className="mt-2 text-base">{children}</div>}
    </div>
  )
}

export function Loading() {
  return <div className="p-12 text-center text-lg font-medium text-sub">Đang tải…</div>
}

export function Verdict({ ok, children }: { ok: boolean; children?: ReactNode }) {
  return (
    <div className={cx('mt-4 rounded-xl px-4 py-3 text-base', ok ? 'bg-ok-soft text-ok' : 'bg-bad-soft text-bad')}>
      <span className="font-bold">{ok ? '✓ Đúng' : '✗ Chưa đúng'}</span>
      {children && <div className="mt-1.5 text-ink">{children}</div>}
    </div>
  )
}

export { cx }
