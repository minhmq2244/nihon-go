import { Gauge } from 'lucide-react'
import { cx } from './ui'

export function SpeedControl({
  rate,
  onChange,
  className,
  presets = [0.7, 0.85, 1.0, 1.2],
  compact = false,
}: {
  rate: number
  onChange: (r: number) => void
  className?: string
  presets?: number[]
  compact?: boolean
}) {
  return (
    <div className={cx('flex flex-wrap items-center gap-2.5', className)}>
      <div className="flex items-center gap-1.5">
        <Gauge size={16} className="text-accent shrink-0" />
        <span className="text-xs font-semibold text-sub">Tốc độ:</span>
        <span className="min-w-[3.25rem] rounded-lg bg-accent-soft px-2 py-0.5 text-center text-xs font-bold text-accent shadow-xs">
          {rate.toFixed(2)}×
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="text-[11px] font-medium text-sub">0.5×</span>
        <input
          type="range"
          min={0.5}
          max={1.5}
          step={0.05}
          value={rate}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-2 w-28 sm:w-36 accent-accent cursor-pointer rounded-lg bg-muted"
          aria-label="Điều chỉnh tốc độ đọc nhanh chậm"
          title={`Tốc độ đọc: ${rate.toFixed(2)}×`}
        />
        <span className="text-[11px] font-medium text-sub">1.5×</span>
      </div>

      {!compact && (
        <div className="flex items-center gap-1">
          {presets.map((p) => {
            const active = Math.abs(rate - p) < 0.02
            return (
              <button
                key={p}
                type="button"
                onClick={() => onChange(p)}
                className={cx(
                  'rounded-lg px-2 py-0.5 text-xs font-semibold transition cursor-pointer',
                  active
                    ? 'bg-accent text-white shadow-xs'
                    : 'bg-muted text-sub hover:bg-muted/80 hover:text-ink',
                )}
                title={`Đặt nhanh tốc độ ${p}×`}
              >
                {p}×
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
