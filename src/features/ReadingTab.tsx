import { useEffect, useMemo, useRef, useState } from 'react'
import type { Reading, Unit } from '../types'
import { setKey } from '../lib/progressInfo'
import { friendlyVoiceName, japaneseVoices, onVoicesChanged, speak } from '../lib/speech'
import { useProgress } from '../store/progress'
import { useSettings } from '../store/settings'
import { DrillItem, type Question } from '../components/Drill'
import { Jp } from '../components/Jp'
import { SpeedControl } from '../components/SpeedControl'
import { Button, Card, Chip, Empty, SpeakButton, cx } from '../components/ui'
import { Play, Volume2 } from 'lucide-react'
import { FloatingPlayer, PlayerControls, usePlaylist } from '../components/AudioPlayer'

export function ReadingTab({ unit }: { unit: Unit }) {
  const [sel, setSel] = useState<number | null>(null)
  const sets = useProgress((s) => s.sets)
  const list = unit.generated.readings
  if (!list.length) return <Empty title="Bài đọc của bài này đang được bổ sung." />
  if (sel !== null) return <Reader unit={unit} r={list[sel]!} onBack={() => setSel(null)} onNext={sel + 1 < list.length ? () => setSel(sel + 1) : undefined} />
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {list.map((r, i) => {
        const done = sets[setKey(unit.meta.id, 'doc', r.id)]
        return (
          <button key={r.id} type="button" onClick={() => setSel(i)} className="text-left">
            <Card className="h-full transition hover:border-accent">
              <div className="flex items-center justify-between text-xs text-sub">
                <span>
                  {r.id.split('-').pop()?.toUpperCase()} · {r.genre}
                </span>
                <span>{r.lines.length} câu</span>
              </div>
              <p className="mt-1 text-lg font-semibold">
                <Jp text={r.title} />
              </p>
              <p className="text-sm text-sub">{r.titleVn}</p>
              {done && (
                <p className="mt-1 text-sm text-ok">
                  ✓ {done.last.correct}/{done.last.total} câu hỏi
                </p>
              )}
            </Card>
          </button>
        )
      })}
    </div>
  )
}

function Reader({ unit, r, onBack, onNext }: { unit: Unit; r: Reading; onBack: () => void; onNext?: () => void }) {
  const { rate, voiceA, set } = useSettings()
  const [showVn, setShowVn] = useState<'none' | 'tap' | 'all'>('tap')
  const [shown, setShown] = useState<Set<number>>(new Set())
  const [quiz, setQuiz] = useState(true)
  const [voices, setVoices] = useState(() => japaneseVoices())
  const [results, setResults] = useState<Record<string, boolean>>({})
  const saveSet = useProgress((s) => s.saveSet)
  const questions = useMemo(() => r.questions.flatMap((s) => s.items) as Question[], [r])
  const top = useRef<HTMLDivElement>(null)
  const p = usePlaylist(
    r.lines.map((l) => ({ text: l.jp })),
    { gapMs: 380, voiceURI: voiceA || undefined },
  )
  const playing = p.cur

  useEffect(() => {
    return onVoicesChanged(() => setVoices(japaneseVoices()))
  }, [])

  useEffect(() => {
    setResults({})
    setShown(new Set())
    p.stop()
    top.current?.scrollIntoView({ behavior: 'smooth' })
  }, [r])

  useEffect(() => {
    const n = Object.keys(results).length
    if (n && n === questions.length) saveSet(setKey(unit.meta.id, 'doc', r.id), Object.values(results).filter(Boolean).length, n)
  }, [results, questions.length, r.id, saveSet, unit.meta.id])

  const at = (p.cur ?? p.pos) + 1

  return (
    <div ref={top} className="scroll-mt-32 space-y-5">
      <FloatingPlayer p={p} title={`Bài đọc · ${r.titleVn}`} />
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" variant="ghost" onClick={onBack}>
          ← Danh sách bài đọc
        </Button>
        <span className="flex-1" />
        <Chip active={showVn === 'tap'} onClick={() => setShowVn('tap')}>
          Bấm câu để dịch
        </Chip>
        <Chip active={showVn === 'all'} onClick={() => setShowVn('all')}>
          Hiện bản dịch
        </Chip>
        <Chip active={showVn === 'none'} onClick={() => setShowVn('none')}>
          Không dịch
        </Chip>
        <Chip active={quiz} onClick={() => setQuiz(!quiz)}>
          Câu hỏi: {quiz ? 'bật' : 'tắt'}
        </Chip>
      </div>

      <Card className="p-5 border-accent/40 bg-gradient-to-br from-surface via-surface to-accent-soft/25 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={cx(
                'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-xs transition-all',
                playing !== null ? 'bg-accent text-white shadow-md' : 'bg-accent-soft text-accent',
              )}
            >
              <Volume2 size={24} className={playing !== null ? 'animate-pulse' : ''} />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold text-ink">Đọc nguyên bài</span>
              <p className="text-xs sm:text-sm text-sub mt-0.5">
                {p.active
                  ? `${playing !== null ? 'Đang đọc' : 'Tạm dừng ở'} câu ${at}/${r.lines.length} · thanh điều khiển luôn hiện ở cuối màn hình khi bạn cuộn`
                  : `Toàn bộ bài đọc gồm ${r.lines.length} câu · bấm số câu để phát từ câu đó`}
              </p>
            </div>
          </div>
          <PlayerControls p={p} startLabel="Đọc cả bài" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-3">
          <SpeedControl rate={rate} onChange={(newRate) => set({ rate: newRate })} />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-sub">Giọng đọc:</span>
            <select
              value={voiceA}
              onChange={(e) => set({ voiceA: e.target.value })}
              className="max-w-[230px] sm:max-w-[280px] truncate rounded-xl border border-line bg-surface px-3 py-1.5 text-xs sm:text-sm font-medium text-ink outline-none focus:ring-2 focus:ring-accent/30 cursor-pointer shadow-xs"
              aria-label="Chọn giọng đọc tiếng Nhật"
              title="Chọn giọng đọc tiếng Nhật"
            >
              <option value="">Tự động (Tự nhiên nhất ⭐)</option>
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {friendlyVoiceName(v)}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => speak('こんにちは。日本語（にほんご）の 読（よ）み方（かた）です。', { voiceURI: voiceA || undefined, rate })}
              className="rounded-xl border border-line bg-surface hover:bg-muted px-2.5 py-1.5 text-xs font-semibold text-sub hover:text-accent transition cursor-pointer shadow-xs"
              title="Thử phát âm giọng đọc này"
            >
              Thử giọng
            </button>
          </div>
        </div>
      </Card>

      {/* Main Text Card */}
      <Card className="p-6 sm:p-7">
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">{r.genre}</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-ink">
            <Jp text={r.title} />
          </h2>
          <p className="mt-1 text-base text-sub font-medium">{r.titleVn}</p>
        </div>
        <div className="space-y-2">
          {r.lines.map((l, i) => (
            <div
              key={i}
              className={cx(
                'group rounded-xl p-3 transition-all',
                playing === i
                  ? 'bg-accent/15 border-l-4 border-accent pl-4 ring-1 ring-accent/30 shadow-xs'
                  : 'hover:bg-muted/70',
                showVn === 'tap' && 'cursor-pointer',
              )}
              onClick={() => {
                if (showVn !== 'tap') return
                const s = new Set(shown)
                if (s.has(i)) s.delete(i)
                else s.add(i)
                setShown(s)
              }}
            >
              <div className="flex items-start gap-2.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    p.playFrom(i)
                  }}
                  className={cx(
                    'mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold transition cursor-pointer',
                    playing === i
                      ? 'bg-accent text-white shadow-xs'
                      : 'bg-muted text-sub hover:bg-accent-soft hover:text-accent opacity-60 group-hover:opacity-100',
                  )}
                  title={`Phát bài đọc từ câu ${i + 1}`}
                  aria-label={`Phát bài đọc từ câu ${i + 1}`}
                >
                  {playing === i ? <Volume2 size={15} /> : <Play size={13} />}
                </button>
                <p className="flex-1 text-xl leading-[2.3] font-medium text-ink">
                  <Jp text={l.jp} />
                </p>
                <SpeakButton text={l.jp} className="opacity-40 group-hover:opacity-100 shrink-0 mt-0.5" />
              </div>
              {(showVn === 'all' || (showVn === 'tap' && shown.has(i))) && (
                <p className="mt-1 pl-9 text-base text-sub font-medium">{l.vn}</p>
              )}
            </div>
          ))}
        </div>
        {r.gloss.length > 0 && (
          <div className="mt-6 rounded-2xl bg-muted/70 p-4 text-base">
            <p className="mb-2 font-bold text-ink">Từ mới trong bài</p>
            <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {r.gloss.map((g, i) => (
                <li key={i}>
                  <Jp text={g.jp} speakable className="font-semibold" /> — {g.meaning}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
      {quiz && questions.length > 0 && (
        <Card className="space-y-6">
          <p className="font-semibold">
            Câu hỏi đọc hiểu · {Object.values(results).filter(Boolean).length}/{questions.length} đúng
          </p>
          {questions.map((q, i) => (
            <div key={q.id} className="border-t border-line pt-4 first:border-0 first:pt-0">
              <p className="mb-1 text-sm text-sub">
                Câu {i + 1} · {q.type === 'TF' ? 'Đúng hay sai?' : q.type === 'ORDER' ? 'Sắp xếp thứ tự sự việc' : q.type === 'SHORT' ? 'Trả lời ngắn' : 'Chọn đáp án'}
              </p>
              <DrillItem d={q} autoFocus={false} onAnswered={(ok) => setResults((x) => ({ ...x, [q.id]: ok }))} />
            </div>
          ))}
        </Card>
      )}
      {onNext && (
        <div className="flex justify-end">
          <Button variant="primary" onClick={onNext}>
            Bài đọc tiếp →
          </Button>
        </div>
      )}
    </div>
  )
}
