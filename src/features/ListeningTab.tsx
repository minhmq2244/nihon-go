import { useEffect, useMemo, useRef, useState } from 'react'
import type { Line, Listening, ListeningType, Unit } from '../types'
import { setKey } from '../lib/progressInfo'
import { playLines, stopSpeaking } from '../lib/speech'
import { useProgress } from '../store/progress'
import { useSettings } from '../store/settings'
import { DrillItem, DrillRunner, type Question } from '../components/Drill'
import { Jp } from '../components/Jp'
import { Button, Card, Chip, Empty, cx } from '../components/ui'

export const LISTEN_TYPES: Record<ListeningType, string> = {
  task: 'Nghe hiểu nhiệm vụ',
  point: 'Nghe điểm chính',
  response: 'Phản hồi nhanh',
  expression: 'Chọn câu nói',
  dictation: 'Chính tả',
  cloze: 'Nghe điền khuyết',
  numbers: 'Số · giờ · giá · ngày',
  tf: 'Đúng / Sai',
}

export const roleOf = (speaker: string): 'A' | 'B' => (speaker === 'B' || speaker === 'Y' || speaker === 'F' ? 'B' : 'A')

export function ListeningTab({ unit }: { unit: Unit }) {
  const [sel, setSel] = useState<number | null>(null)
  const [filter, setFilter] = useState<ListeningType | 'all'>('all')
  const sets = useProgress((s) => s.sets)
  const list = unit.generated.listenings
  if (!list.length) return <Empty title="Bài nghe của bài này đang được bổ sung." />
  if (sel !== null)
    return <Player unit={unit} l={list[sel]!} onBack={() => setSel(null)} onNext={sel + 1 < list.length ? () => setSel(sel + 1) : undefined} />
  const types = [...new Set(list.map((l) => l.type))]
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
          Tất cả ({list.length})
        </Chip>
        {types.map((t) => (
          <Chip key={t} active={filter === t} onClick={() => setFilter(t)}>
            {LISTEN_TYPES[t] ?? t}
          </Chip>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {list.map((l, i) =>
          filter !== 'all' && l.type !== filter ? null : (
            <button key={l.id} type="button" onClick={() => setSel(i)} className="text-left">
              <Card className="h-full transition hover:border-accent">
                <p className="text-xs text-sub">
                  {l.id.split('-').pop()?.toUpperCase()} · {LISTEN_TYPES[l.type] ?? l.type}
                </p>
                <p className="mt-1 font-semibold">{l.title}</p>
                {sets[setKey(unit.meta.id, 'nghe', l.id)] && (
                  <p className="mt-1 text-sm text-ok">
                    ✓ {sets[setKey(unit.meta.id, 'nghe', l.id)]!.last.correct}/{sets[setKey(unit.meta.id, 'nghe', l.id)]!.last.total}
                  </p>
                )}
              </Card>
            </button>
          ),
        )}
      </div>
    </div>
  )
}

/** Audio controls for a script: play all, speed, auto-pause after each line. */
export function ScriptPlayer({ lines, showScript, onLine }: { lines: Line[]; showScript: boolean; onLine?: (i: number | null) => void }) {
  const { rate, set } = useSettings()
  const [autoPause, setAutoPause] = useState(false)
  const [cur, setCur] = useState<number | null>(null)
  const [next, setNext] = useState(0)
  const stop = useRef<(() => void) | null>(null)
  useEffect(() => () => stopSpeaking(), [])
  useEffect(() => onLine?.(cur), [cur])

  const items = lines.map((l) => ({ text: l.jp, role: roleOf(l.speaker) }))
  const play = (from: number) => {
    stop.current?.()
    if (autoPause) {
      stop.current = playLines(items.slice(from, from + 1), {
        onIndex: (i) => {
          setCur(i === null ? null : from + i)
          if (i === null) setNext(Math.min(from + 1, lines.length))
        },
      })
    } else {
      stop.current = playLines(items, { from, onIndex: (i) => (setCur(i), i === null && setNext(0)), gapMs: 300 })
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {cur === null ? (
          <Button variant="primary" onClick={() => play(autoPause ? next % lines.length : 0)}>
            ▶ {autoPause ? (next === 0 ? 'Phát câu 1' : next >= lines.length ? 'Nghe lại từ đầu' : `Phát câu ${next + 1}/${lines.length}`) : 'Phát cả bài'}
          </Button>
        ) : (
          <Button onClick={() => stop.current?.()}>■ Dừng</Button>
        )}
        {autoPause && next > 0 && cur === null && next < lines.length && (
          <Button variant="ghost" onClick={() => play(next - 1)}>
            ↺ Nghe lại câu {next}
          </Button>
        )}
        <span className="flex-1" />
        {[0.7, 0.85, 1].map((r) => (
          <Chip key={r} active={Math.abs(rate - r) < 0.01} onClick={() => set({ rate: r })}>
            {r}×
          </Chip>
        ))}
        <Chip
          active={autoPause}
          onClick={() => {
            setAutoPause(!autoPause)
            setNext(0)
          }}
        >
          Tự dừng sau mỗi câu
        </Chip>
      </div>
      {showScript && (
        <div className="space-y-1 rounded-lg bg-muted p-3">
          {lines.map((l, i) => (
            <div key={i} className={cx('rounded px-2 py-0.5', cur === i && 'bg-warn-soft')}>
              <span className="mr-2 text-sm font-semibold text-sub">{l.name ?? l.speaker}:</span>
              <Jp text={l.jp} className="text-lg" />
              {l.vn && <p className="text-sm text-sub">{l.vn}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function Player({ unit, l, onBack, onNext }: { unit: Unit; l: Listening; onBack: () => void; onNext?: () => void }) {
  const [script, setScript] = useState(false)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const saveSet = useProgress((s) => s.saveSet)
  const sid = setKey(unit.meta.id, 'nghe', l.id)
  const questions = useMemo(() => l.questions.flatMap((s) => s.items) as Question[], [l])
  const lineQs = useMemo<Question[]>(() => {
    if (l.type === 'dictation') return l.lines.map((x, i) => ({ id: `${l.id}:d${i}`, type: 'SHORT', stem: '', audio: x.jp, answers: [x.jp.replace(/［|］/g, '')], hint: 'Nghe và gõ lại cả câu' }))
    if (l.type === 'cloze')
      return l.lines.filter((x) => /［/.test(x.jp)).map((x, i) => ({ id: `${l.id}:c${i}`, type: 'FILL', stem: x.jp, audio: x.jp, answers: [], hint: x.vn }))
    return []
  }, [l])

  useEffect(() => {
    setResults({})
    setScript(false)
  }, [l])
  useEffect(() => {
    const n = Object.keys(results).length
    if (n && n === questions.length) saveSet(sid, Object.values(results).filter(Boolean).length, n)
  }, [results])

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button size="sm" variant="ghost" onClick={onBack}>
          ← Danh sách bài nghe
        </Button>
      </div>
      <Card className="space-y-3">
        <p className="text-xs text-sub">{LISTEN_TYPES[l.type] ?? l.type}</p>
        <h2 className="text-xl font-bold">{l.title}</h2>
        {l.intro && <p className="rounded-lg bg-accent-soft px-3 py-2 text-sm">{l.intro}</p>}
        {lineQs.length === 0 && (
          <>
            <ScriptPlayer lines={l.lines} showScript={script} />
            <Button size="sm" variant="ghost" onClick={() => setScript(!script)}>
              {script ? 'Ẩn' : 'Hiện'} script
            </Button>
          </>
        )}
      </Card>
      {lineQs.length > 0 && (
        <Card>
          <DrillRunner setId={sid} questions={lineQs} title={l.title} />
        </Card>
      )}
      {lineQs.length === 0 && questions.length > 0 && (
        <Card className="space-y-6">
          <p className="font-semibold">
            Câu hỏi · {Object.values(results).filter(Boolean).length}/{questions.length} đúng
          </p>
          {questions.map((q, i) => (
            <div key={q.id} className="border-t border-line pt-4 first:border-0 first:pt-0">
              <p className="mb-1 text-sm text-sub">Câu {i + 1}</p>
              <DrillItem d={q} autoFocus={false} onAnswered={(ok) => setResults((x) => ({ ...x, [q.id]: ok }))} />
            </div>
          ))}
        </Card>
      )}
      {onNext && (
        <div className="flex justify-end">
          <Button variant="primary" onClick={onNext}>
            Bài nghe tiếp →
          </Button>
        </div>
      )}
    </div>
  )
}
