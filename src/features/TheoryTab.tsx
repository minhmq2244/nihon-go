import { useEffect, useState } from 'react'
import type { Unit } from '../types'
import { Html } from '../components/Jp'
import { Card, Chip, cx } from '../components/ui'
import { useProgress } from '../store/progress'
import { setKey } from '../lib/progressInfo'

export function TheoryTab({ unit }: { unit: Unit }) {
  const [hideMean, setHideMean] = useState(false)
  const [hideWord, setHideWord] = useState(false)
  const saveSet = useProgress((s) => s.saveSet)
  useEffect(() => saveSet(setKey(unit.meta.id, 'ly-thuyet', 'seen'), 1, 1), [unit.meta.id, saveSet])

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <aside className="no-print hidden lg:block">
        <div className="sticky top-32 space-y-1.5 text-base">
          {unit.theory.map((s) => (
            <a key={s.id} href={`#sec-${s.id}`} onClick={(e) => scrollTo(e, s.id)} className="block rounded-lg px-3 py-1.5 text-sub hover:bg-muted hover:text-ink font-medium transition">
              {s.title}
            </a>
          ))}
        </div>
      </aside>
      <div className="min-w-0 space-y-6">
        <Card className="p-6">
          <Html html={unit.info} className="text-base text-sub leading-relaxed" />
          <p className="mt-3 text-sm font-medium text-sub">💡 Mẹo: bấm vào từ tiếng Nhật trong bảng từ vựng để nghe phát âm.</p>
        </Card>
        {unit.theory.map((s) => (
          <Card key={s.id} className="scroll-mt-32 p-6 sm:p-7">
            <div id={`sec-${s.id}`} className="scroll-mt-32" />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-ink">{s.title}</h2>
              {s.id === '2' && (
                <div className="no-print flex gap-2">
                  <Chip active={hideMean} onClick={() => setHideMean(!hideMean)}>
                    Che nghĩa
                  </Chip>
                  <Chip active={hideWord} onClick={() => setHideWord(!hideWord)}>
                    Che từ
                  </Chip>
                </div>
              )}
            </div>
            {s.id === '2' && (hideMean || hideWord) && <p className="mt-2 text-sm text-sub">Bấm vào ô bị che để xem đáp án.</p>}
            <Html html={s.html} className={cx('mt-4', s.id === '2' && hideMean && 'hide-mean', s.id === '2' && hideWord && 'hide-word')} />
          </Card>
        ))}
      </div>
    </div>
  )
}

function scrollTo(e: React.MouseEvent, id: string) {
  e.preventDefault()
  document.getElementById(`sec-${id}`)?.scrollIntoView({ behavior: 'smooth' })
}
