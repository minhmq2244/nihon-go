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
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <aside className="no-print hidden lg:block">
        <div className="sticky top-32 space-y-1 text-sm">
          {unit.theory.map((s) => (
            <a key={s.id} href={`#sec-${s.id}`} onClick={(e) => scrollTo(e, s.id)} className="block rounded px-2 py-1 text-sub hover:bg-muted hover:text-ink">
              {s.title}
            </a>
          ))}
        </div>
      </aside>
      <div className="min-w-0 space-y-5">
        <Card>
          <Html html={unit.info} className="text-sm text-sub" />
          <p className="mt-2 text-xs text-sub">Mẹo: bấm vào từ tiếng Nhật trong bảng từ vựng để nghe phát âm.</p>
        </Card>
        {unit.theory.map((s) => (
          <Card key={s.id} className="scroll-mt-32">
            <div id={`sec-${s.id}`} className="scroll-mt-32" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-bold">{s.title}</h2>
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
            {s.id === '2' && (hideMean || hideWord) && <p className="mt-1 text-xs text-sub">Bấm vào ô bị che để xem đáp án.</p>}
            <Html html={s.html} className={cx(s.id === '2' && hideMean && 'hide-mean', s.id === '2' && hideWord && 'hide-word')} />
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
