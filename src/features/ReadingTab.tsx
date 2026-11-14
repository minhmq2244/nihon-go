import { useEffect, useMemo, useRef, useState } from 'react'
import type { Reading, SpeakQuestion, Unit } from '../types'
import { setKey } from '../lib/progressInfo'
import { shuffle } from '../lib/data'
import { toBase, type Seg } from '../lib/furigana'
import { friendlyVoiceName, japaneseVoices, onVoicesChanged, speak, stopSpeaking } from '../lib/speech'
import { useProgress } from '../store/progress'
import { useSettings } from '../store/settings'
import { useFuriBlockStore } from '../store/furiBlock'
import { DrillItem, type Question } from '../components/Drill'
import { Jp } from '../components/Jp'
import { SpeedControl } from '../components/SpeedControl'
import { Button, Card, Chip, Empty, SpeakButton, cx } from '../components/ui'
import { Play, Volume2 } from 'lucide-react'
import { FloatingPlayer, PlayerControls, usePlaylist } from '../components/AudioPlayer'
import { KanjiBlockManagerModal, KanjiBlockPopover, type PopoverState } from '../components/KanjiBlockManager'

/** Lines that start a new speaker or block (キム:「…」, 【…】) keep their own line inside the passage. */
const NEW_LINE = /^(【|[^\s、。「」]{1,10}[:：]「)/

/** Questions shown at a time; the 12 are cycled in shuffled groups of 4. */
const ASK_SHOWN = 4

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
  const blockedItems = useFuriBlockStore((s) => s.items)
  const blockedCount = Object.keys(blockedItems).length

  const [showVn, setShowVn] = useState<'none' | 'tap' | 'all'>('tap')
  const [sel, setSel] = useState<number | null>(null)
  const [quiz, setQuiz] = useState(true)
  const [voices, setVoices] = useState(() => japaneseVoices())
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [popover, setPopover] = useState<PopoverState | null>(null)
  const [showBlockManager, setShowBlockManager] = useState(false)

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
    setSel(null)
    setPopover(null)
    p.stop()
    top.current?.scrollIntoView({ behavior: 'smooth' })
  }, [r])

  useEffect(() => {
    const n = Object.keys(results).length
    if (n && n === questions.length) saveSet(setKey(unit.meta.id, 'doc', r.id), Object.values(results).filter(Boolean).length, n)
  }, [results, questions.length, r.id, saveSet, unit.meta.id])

  const at = (p.cur ?? p.pos) + 1
  const line = sel !== null ? r.lines[sel] : undefined

  const handleRubyClick = (seg: Seg, e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setPopover({ seg, rect })
  }

  return (
    <div ref={top} className="scroll-mt-32 space-y-5">
      <FloatingPlayer p={p} title={`Bài đọc · ${r.titleVn}`} />
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" variant="ghost" onClick={onBack}>
          ← Danh sách bài đọc
        </Button>
        <span className="flex-1" />
        <Chip active={showVn === 'tap'} onClick={() => setShowVn('tap')}>
          Bấm câu để xem nghĩa
        </Chip>
        <Chip active={showVn === 'all'} onClick={() => setShowVn('all')}>
          Hiện bản dịch
        </Chip>
        <Chip active={showVn === 'none'} onClick={() => setShowVn('none')}>
          Không dịch
        </Chip>
        <Chip active={quiz} onClick={() => setQuiz(!quiz)}>
          Trắc nghiệm: {quiz ? 'bật' : 'tắt'}
        </Chip>
        <Chip
          active={showBlockManager}
          onClick={() => setShowBlockManager(true)}
          className={blockedCount > 0 ? 'bg-accent/15 text-accent font-semibold ring-1 ring-accent/30' : ''}
          title="Quản lý danh sách các từ luôn giữ Furigana khi tắt ふりがな toàn trang web"
        >
          🛡️ Giữ Furigana {blockedCount > 0 ? `(${blockedCount})` : ''}
        </Chip>
      </div>

      <div className="flex items-center gap-2 px-1 text-xs text-sub">
        <span className="font-semibold text-accent">💡 Mẹo:</span>
        <span>Bấm trực tiếp vào chữ Hán trong bài đọc để chọn <b>Add block</b> (giữ Furigana kể cả khi tắt Furigana toàn web).</span>
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
            <Jp text={r.title} onRubyClick={handleRubyClick} />
          </h2>
          <p className="mt-1 text-base text-sub font-medium">{r.titleVn}</p>
        </div>
        <p className="text-xl leading-[2.5] font-medium text-ink">
          {r.lines.map((l, i) => (
            <span key={i}>
              {i > 0 && NEW_LINE.test(toBase(l.jp)) && <br />}
              <span
                role="button"
                tabIndex={0}
                onClick={() => setSel(sel === i ? null : i)}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter' && e.key !== ' ') return
                  e.preventDefault()
                  setSel(sel === i ? null : i)
                }}
                className={cx(
                  'cursor-pointer rounded-md px-0.5 transition',
                  playing === i ? 'bg-accent/20 ring-1 ring-accent/40' : sel === i ? 'bg-cta/35' : 'hover:bg-muted',
                )}
                title={`Câu ${i + 1} · bấm để xem nghĩa / nghe lại`}
              >
                <Jp text={l.jp} onRubyClick={handleRubyClick} />
              </span>{' '}
            </span>
          ))}
        </p>
        {line && (
          <div className="sticky bottom-24 z-10 mt-4 rounded-2xl border border-accent/40 bg-surface p-4 shadow-md">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <span className="text-xs font-bold text-accent">
                Câu {sel! + 1}/{r.lines.length}
              </span>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" onClick={() => void speak(line.jp, { voiceURI: voiceA || undefined, rate })}>
                  🔊 Nghe câu này
                </Button>
                <Button size="sm" onClick={() => p.playFrom(sel!)}>
                  <Play size={13} /> Đọc từ câu này
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setSel(null)} aria-label="Đóng">
                  ✕
                </Button>
              </div>
            </div>
            <p className="mt-1 text-lg text-ink">
              <Jp text={line.jp} onRubyClick={handleRubyClick} />
            </p>
            {showVn !== 'none' && <p className="mt-1 text-base font-medium text-sub">{line.vn}</p>}
          </div>
        )}
        {showVn === 'all' && (
          <div className="mt-5 rounded-2xl bg-muted/60 p-4 text-base leading-relaxed text-sub">
            {r.lines.map((l, i) => (
              <span key={i}>
                {i > 0 && NEW_LINE.test(toBase(l.jp)) && <br />}
                {l.vn}{' '}
              </span>
            ))}
          </div>
        )}
        {r.gloss.length > 0 && (
          <div className="mt-6 rounded-2xl bg-muted/70 p-4 text-base">
            <p className="mb-2 font-bold text-ink">Từ mới trong bài</p>
            <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {r.gloss.map((g, i) => (
                <li key={i}>
                  <Jp text={g.jp} onRubyClick={handleRubyClick} speakable className="font-semibold" /> — {g.meaning}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
      {r.ask && r.ask.length > 0 && <AskPart key={r.id} r={r} />}
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

      {/* Popover & Modal Quản lý khóa Furigana (Add block) */}
      <KanjiBlockPopover popover={popover} onClose={() => setPopover(null)} />
      <KanjiBlockManagerModal open={showBlockManager} onClose={() => setShowBlockManager(false)} />
    </div>
  )
}

/** "Cô giáo hỏi": answer out loud (read or listen to the question), then compare with the model answer. */
function AskPart({ r }: { r: Reading }) {
  const ask = r.ask!
  const [mode, setMode] = useState<'read' | 'listen'>('read')
  const [round, setRound] = useState(0)
  const groups = Math.max(1, Math.ceil(ask.length / ASK_SHOWN))
  const cycle = Math.floor(round / groups)
  // reshuffle every full cycle so each question comes up once before any repeats
  const order = useMemo(() => shuffle(ask), [ask, cycle])
  const from = (round % groups) * ASK_SHOWN
  const shown = order.slice(from, from + ASK_SHOWN)
  useEffect(() => () => stopSpeaking(), [])
  return (
    <Card className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-lg font-bold text-ink">🗣 Cô giáo hỏi — trả lời bằng miệng</p>
          <p className="text-sm text-sub">
            Nói câu trả lời đầy đủ thành tiếng rồi mới xem câu trả lời mẫu · Bộ {(round % groups) + 1}/{groups} ({ask.length} câu hỏi)
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip active={mode === 'read'} onClick={() => setMode('read')}>
            📖 Đọc câu hỏi
          </Chip>
          <Chip active={mode === 'listen'} onClick={() => setMode('listen')}>
            🎧 Nghe câu hỏi
          </Chip>
          <Button
            size="sm"
            variant="primary"
            onClick={() => {
              stopSpeaking()
              setRound((n) => n + 1)
            }}
          >
            🔀 Đổi câu hỏi
          </Button>
        </div>
      </div>
      <div className="space-y-3">
        {shown.map((q, i) => (
          <AskCard key={`${q.id}-${mode}-${round}`} q={q} n={i + 1} listen={mode === 'listen'} />
        ))}
      </div>
    </Card>
  )
}

function AskCard({ q, n, listen }: { q: SpeakQuestion; n: number; listen: boolean }) {
  const [revealed, setRevealed] = useState(false)
  const [showText, setShowText] = useState(!listen)
  const textVisible = showText || revealed
  return (
    <div className="rounded-xl border border-line p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-sm font-bold text-accent">{n}</span>
        {listen && (
          <Button size="sm" variant="primary" onClick={() => void speak(q.q)}>
            🔊 Nghe câu hỏi
          </Button>
        )}
        {textVisible ? (
          <span className="flex flex-1 items-center gap-1 text-lg font-medium text-ink">
            <Jp text={q.q} />
            {!listen && <SpeakButton text={q.q} label="Nghe câu hỏi" />}
          </span>
        ) : (
          <button
            type="button"
            onClick={() => setShowText(true)}
            className="cursor-pointer text-sm text-sub underline-offset-2 hover:text-accent hover:underline"
          >
            Hiện chữ câu hỏi
          </button>
        )}
      </div>
      {revealed ? (
        <div className="mt-3 space-y-2 border-t border-line pt-3">
          <p className="text-sm text-sub">{q.vn}</p>
          {q.answers.map((a, i) => (
            <div key={i} className="rounded-lg bg-ok-soft px-3 py-2">
              <div className="flex items-center gap-1 text-lg font-semibold text-ink">
                <Jp text={a.jp} />
                <SpeakButton text={a.jp} />
              </div>
              <p className="text-sm text-sub">{a.vn}</p>
            </div>
          ))}
        </div>
      ) : (
        <Button
          className="mt-3"
          size="sm"
          onClick={() => {
            stopSpeaking()
            setRevealed(true)
          }}
        >
          Tôi đã trả lời · xem câu trả lời mẫu
        </Button>
      )}
    </div>
  )
}
