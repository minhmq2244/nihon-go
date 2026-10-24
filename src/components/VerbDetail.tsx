// Detailed verb note: particles, meaning, patterns, nuance, look-alikes, common mistakes, 3 examples.
import type { VerbDetail } from '../types'
import { Jp } from './Jp'
import { SpeakButton, cx } from './ui'

function Section({ title, items, tone }: { title: string; items: string[]; tone?: 'warn' | 'bad' }) {
  if (!items.length) return null
  return (
    <div>
      <p className={cx('mb-1 text-sm font-bold', tone === 'bad' ? 'text-bad' : tone === 'warn' ? 'text-warn' : 'text-accent')}>{title}</p>
      <ul className="list-disc space-y-1 pl-5">
        {items.map((x, i) => (
          <li key={i}>
            <Jp text={x} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function VerbDetailCard({ d, className }: { d: VerbDetail; className?: string }) {
  return (
    <div className={cx('space-y-4 rounded-2xl border border-line bg-surface p-5 text-left text-base', className)}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Jp text={d.dict} speakable className="text-2xl font-bold text-ink" />
        <Jp text={d.masu} className="text-lg text-sub" />
        <span className="rounded-full bg-accent-soft px-3 py-0.5 text-sm font-semibold text-accent">{d.type}</span>
      </div>
      <div className="rounded-xl border-2 border-warn/40 bg-warn-soft px-4 py-3">
        <p className="mb-1 text-sm font-bold text-warn">Trợ từ đi kèm（に・を・が…）</p>
        <ul className="space-y-1">
          {d.particles.map((p, i) => (
            <li key={i} className="font-medium">
              <Jp text={p} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-1 text-sm font-bold text-accent">Nghĩa và cách dùng</p>
        <p>{d.meaning}</p>
      </div>
      <Section title="Mẫu câu" items={d.patterns} />
      {d.nuance && (
        <div>
          <p className="mb-1 text-sm font-bold text-accent">Sắc thái, lưu ý</p>
          <p>
            <Jp text={d.nuance} />
          </p>
        </div>
      )}
      <Section title="Phân biệt với từ dễ nhầm" items={d.compare} />
      <Section title="Lỗi hay gặp" items={d.mistakes} tone="bad" />
      <div>
        <p className="mb-1 text-sm font-bold text-accent">Ví dụ</p>
        <ol className="space-y-2">
          {d.examples.map((e, i) => (
            <li key={i} className="rounded-xl bg-muted/70 px-3 py-2">
              <div className="flex items-start gap-2">
                <span className="mt-1 text-sm font-semibold text-sub">{i + 1}.</span>
                <Jp text={e.jp} className="flex-1 text-lg leading-loose" />
                <SpeakButton text={e.jp} className="h-7 w-7 shrink-0" />
              </div>
              <p className="pl-5 text-sm text-sub">{e.vn}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
