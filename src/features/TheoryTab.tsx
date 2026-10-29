import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        {unit.verbs && unit.verbs.length > 0 && (
          <Card className="border-2 border-accent/40 bg-gradient-to-r from-accent-soft/40 to-surface p-5 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div>
              <span className="inline-block rounded-full bg-accent text-white text-xs font-bold px-2.5 py-0.5 mb-1.5">
                Ôn tập chuyên sâu
              </span>
              <h3 className="text-lg font-extrabold text-ink">
                Luyện Trợ Từ & Biến Đổi Thể Động Từ ({unit.verbs.length} động từ)
              </h3>
              <p className="text-sm text-sub mt-0.5">
                Tạo câu hỏi điền trợ từ, cơ chế che/hiện nghĩa và thực hành chọn thể của động từ.
              </p>
            </div>
            <Link
              to={`/u/${unit.meta.id}/dong-tu`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-bold text-white shadow-xs hover:brightness-110 transition cursor-pointer"
            >
              Vào ôn tập động từ ngay →
            </Link>
          </Card>
        )}
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
