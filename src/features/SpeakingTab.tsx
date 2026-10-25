// Luyện nói: grammar Q&A drills, long roleplay dialogues and free talk topics.
// No pronunciation scoring — you speak, compare with the model answer and rate yourself.
import { useEffect, useMemo, useState } from 'react'
import type { Dialogue, Line, SpeakQuestion, SpeakTalk, Unit } from '../types'
import { useProgress } from '../store/progress'
import { setKey } from '../lib/progressInfo'
import { shuffle } from '../lib/data'
import { playUrl, record, speak, stopSpeaking } from '../lib/speech'
import { Jp } from '../components/Jp'
import { FloatingPlayer, PlayerControls, usePlaylist } from '../components/AudioPlayer'
import { Button, Card, Chip, Empty, ProgressBar, SpeakButton, cx } from '../components/ui'

const roleOf = (speaker: string): 'A' | 'B' => (speaker === 'B' ? 'B' : 'A')
const THINK_SECONDS = 8

/** Record yourself and play it back. */
function RecordButton({ maxMs = 20000, label = 'Ghi âm giọng tôi' }: { maxMs?: number; label?: string }) {
  const [rec, setRec] = useState<{ stop: () => void } | null>(null)
  const [url, setUrl] = useState<string>()
  const [secs, setSecs] = useState(0)
  const [err, setErr] = useState('')
  useEffect(() => {
    if (!rec) return
    const t = setInterval(() => setSecs((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [rec])
  const start = async () => {
    setErr('')
    stopSpeaking()
    try {
      const r = await record(maxMs)
      setSecs(0)
      setRec(r)
      void r.done.then((u) => {
        setUrl(u)
        setRec(null)
      })
    } catch {
      setErr('Không mở được micro.')
    }
  }
  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      {rec ? (
        <Button size="sm" variant="bad" onClick={() => rec.stop()}>
          ⏹ Dừng ({secs}s)
        </Button>
      ) : (
        <Button size="sm" onClick={start}>
          🎙 {url ? 'Ghi lại' : label}
        </Button>
      )}
      {url && !rec && (
        <Button size="sm" onClick={() => void playUrl(url)}>
          ▶ Nghe giọng tôi
        </Button>
      )}
      {err && <span className="text-sm text-bad">{err}</span>}
    </span>
  )
}

// ---------- Part 1: Q&A by grammar pattern ----------

type Rating = 'ok' | 'slow' | 'no'

function QaDrill({ questions, listenOnly, saveId, onExit }: { questions: SpeakQuestion[]; listenOnly: boolean; saveId: string; onExit: () => void }) {
  const markItem = useProgress((s) => s.markItem)
  const saveSet = useProgress((s) => s.saveSet)
  const [queue, setQueue] = useState(questions)
  const [i, setI] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [showText, setShowText] = useState(!listenOnly)
  const [showHint, setShowHint] = useState(false)
  const [count, setCount] = useState(THINK_SECONDS)
  const [first, setFirst] = useState<Record<string, Rating>>({})
  const q = queue[i]

  /** Move to question n with a fresh card. */
  const goTo = (n: number) => {
    setRevealed(false)
    setShowText(!listenOnly)
    setShowHint(false)
    setCount(THINK_SECONDS)
    setI(n)
  }

  // read each new question aloud
  useEffect(() => {
    if (q) void speak(q.q)
  }, [i, q])

  useEffect(() => {
    if (!listenOnly || revealed || !q || count <= 0) return
    const t = setTimeout(() => setCount((c) => c - 1), 1000)
    return () => clearTimeout(t)
  }, [listenOnly, revealed, q, count])

  const reveal = () => {
    setRevealed(true)
    setShowText(true)
    stopSpeaking()
    void speak(q!.answers[0]!.jp)
  }
  const rate = (r: Rating) => {
    if (!q) return
    markItem(q.id, r !== 'no')
    setFirst((f) => (f[q.id] ? f : { ...f, [q.id]: r }))
    // slow or missed: ask again a few questions later (at most twice)
    const seen = queue.filter((x) => x.id === q.id).length
    if (r !== 'ok' && seen < 3) setQueue((qs) => [...qs.slice(0, i + 4), q, ...qs.slice(i + 4)])
    goTo(i + 1)
  }

  // keyboard: Enter / Space = show answer, 1 2 3 = rate
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement | null)?.closest?.('input, textarea')) return
      if (!revealed && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        reveal()
      } else if (revealed && ['1', '2', '3'].includes(e.key)) rate((['ok', 'slow', 'no'] as const)[Number(e.key) - 1]!)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const done = !q
  const unique = new Set(questions.map((x) => x.id)).size
  const okCount = Object.values(first).filter((r) => r === 'ok').length
  useEffect(() => {
    if (done) saveSet(saveId, okCount, unique)
  }, [done, saveSet, saveId, okCount, unique])

  if (done) {
    const missed = questions.filter((x) => first[x.id] && first[x.id] !== 'ok')
    return (
      <Card className="space-y-4 text-center">
        <p className="text-2xl font-bold text-ink">Xong {unique} câu 🎉</p>
        <p className="text-lg text-sub">
          Nói được ngay: <b className="text-ok">{okCount}</b> · Cần luyện thêm: <b className="text-bad">{missed.length}</b>
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {missed.length > 0 && (
            <Button
              variant="primary"
              onClick={() => {
                setQueue(shuffle(missed))
                setFirst({})
                goTo(0)
              }}
            >
              Luyện lại {missed.length} câu chưa tốt
            </Button>
          )}
          <Button
            onClick={() => {
              setQueue(shuffle(questions))
              setFirst({})
              goTo(0)
            }}
          >
            Làm lại cả bộ (xáo trộn)
          </Button>
          <Button variant="ghost" onClick={onExit}>
            Chọn bộ khác
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between gap-3 text-sm text-sub">
        <span>
          Câu {i + 1}/{queue.length}
        </span>
        <Button variant="ghost" size="sm" onClick={onExit}>
          ✕ Thoát
        </Button>
      </div>
      <ProgressBar value={i / queue.length} />

      <div className="rounded-2xl bg-muted/60 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" onClick={() => void speak(q.q)}>
            🔊 Nghe câu hỏi
          </Button>
          {!showText && (
            <Button size="sm" variant="ghost" onClick={() => setShowText(true)}>
              Hiện chữ
            </Button>
          )}
          {listenOnly && !revealed && (
            <span className={cx('ml-auto font-mono text-2xl font-bold', count <= 3 ? 'text-bad' : 'text-accent')}>{count > 0 ? `${count}s` : 'Hết giờ!'}</span>
          )}
        </div>
        {showText ? (
          <div className="mt-3">
            <Jp text={q.q} className="text-2xl sm:text-3xl font-semibold leading-loose" />
            <p className="mt-1 text-base text-sub">{q.vn}</p>
          </div>
        ) : (
          <p className="mt-3 text-lg text-sub">🎧 Nghe và trả lời ngay — chưa hiện chữ.</p>
        )}
        {q.hint && (
          <p className="mt-2 text-sm">
            {showHint ? (
              <span className="rounded-lg bg-warn-soft px-2.5 py-1 font-medium text-warn">💡 {q.hint}</span>
            ) : (
              <button type="button" className="text-accent underline-offset-2 hover:underline cursor-pointer" onClick={() => setShowHint(true)}>
                💡 Xem gợi ý ý trả lời
              </button>
            )}
          </p>
        )}
      </div>

      <p className="text-sm text-sub">Nói câu trả lời của bạn thành tiếng (cả câu, dùng đúng mẫu), rồi mới xem câu mẫu.</p>
      <RecordButton key={`${q.id}-${i}`} />

      {!revealed ? (
        <Button variant="primary" size="lg" className="w-full" onClick={reveal}>
          Xem câu trả lời mẫu <span className="text-sm font-normal opacity-80">(Enter)</span>
        </Button>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2 rounded-2xl border border-ok/30 bg-ok-soft/40 p-4">
            <p className="text-sm font-semibold text-ok">Câu trả lời mẫu</p>
            {q.answers.map((a, k) => (
              <div key={k}>
                <Jp text={a.jp} speakable className="text-xl leading-loose" />
                <p className="text-sm text-sub">{a.vn}</p>
              </div>
            ))}
          </div>
          {q.next && (
            <div className="rounded-2xl border border-accent/30 bg-accent-soft/40 p-4">
              <p className="text-sm font-semibold text-accent">Hỏi tiếp — trả lời thêm câu này</p>
              <Jp text={q.next.jp} speakable className="text-xl leading-loose" />
              <p className="text-sm text-sub">{q.next.vn}</p>
            </div>
          )}
          <p className="text-sm font-semibold text-ink">Bạn nói thế nào?</p>
          <div className="grid gap-2 sm:grid-cols-3">
            <Button variant="ok" onClick={() => rate('ok')}>
              😀 Nói được <span className="text-xs opacity-70">(1)</span>
            </Button>
            <Button onClick={() => rate('slow')}>
              😐 Nói chậm, còn ngập ngừng <span className="text-xs opacity-70">(2)</span>
            </Button>
            <Button variant="bad" onClick={() => rate('no')}>
              😣 Chưa nói được <span className="text-xs opacity-70">(3)</span>
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}

function QaPart({ unit }: { unit: Unit }) {
  const sets = unit.speaking!.sets
  const items = useProgress((s) => s.items)
  const [pick, setPick] = useState<string>('all')
  const [listenOnly, setListenOnly] = useState(false)
  const [running, setRunning] = useState<{ questions: SpeakQuestion[]; saveId: string; key: number } | null>(null)
  const all = useMemo(() => sets.flatMap((s) => s.questions), [sets])
  const weak = all.filter((q) => {
    const s = items[q.id]
    return s && s.bad > 0 && s.bad >= s.ok
  })

  if (running)
    return <QaDrill key={running.key} questions={running.questions} listenOnly={listenOnly} saveId={running.saveId} onExit={() => setRunning(null)} />

  const start = () => {
    const set = sets.find((s) => s.id === pick)
    const questions = pick === 'weak' ? shuffle(weak) : set ? set.questions : shuffle(all)
    setRunning({ questions, saveId: setKey(unit.meta.id, 'noi', `qa-${pick}`), key: Date.now() })
  }
  const chosen = sets.find((s) => s.id === pick)
  const count = pick === 'weak' ? weak.length : chosen ? chosen.questions.length : all.length

  return (
    <div className="space-y-5">
      <Card className="space-y-4">
        <p className="font-semibold text-ink">1. Chọn mẫu ngữ pháp</p>
        <div className="flex flex-wrap gap-2">
          {sets.map((s) => (
            <Chip key={s.id} active={pick === s.id} onClick={() => setPick(s.id)}>
              <Jp text={`${s.code} · ${s.title}`} /> <span className="opacity-70">({s.questions.length})</span>
            </Chip>
          ))}
          <Chip active={pick === 'all'} onClick={() => setPick('all')}>
            🔀 Trộn tất cả ({all.length})
          </Chip>
          {weak.length > 0 && (
            <Chip active={pick === 'weak'} onClick={() => setPick('weak')}>
              🔁 Cần luyện lại ({weak.length})
            </Chip>
          )}
        </div>
        {chosen?.tip && (
          <p className="rounded-xl bg-warn-soft px-3 py-2 text-sm font-medium text-warn">
            📌 <Jp text={chosen.tip} />
          </p>
        )}
        <p className="font-semibold text-ink">2. Chọn cách luyện</p>
        <div className="flex flex-wrap gap-2">
          <Chip active={!listenOnly} onClick={() => setListenOnly(false)}>
            📖 Có chữ và gợi ý
          </Chip>
          <Chip active={listenOnly} onClick={() => setListenOnly(true)}>
            🎧 Chỉ nghe · {THINK_SECONDS} giây suy nghĩ
          </Chip>
        </div>
        <Button variant="primary" size="lg" disabled={!count} onClick={start}>
          Bắt đầu {count} câu →
        </Button>
      </Card>
      <p className="text-sm text-sub">
        Mẹo: trả lời bằng câu đầy đủ, nói về chính bạn. Câu nào chọn “Nói chậm” hay “Chưa nói được” sẽ được hỏi lại sau vài câu và lưu vào mục “Cần luyện lại”.
      </p>
    </div>
  )
}

// ---------- Part 2: long roleplay dialogues ----------

type HintLevel = 'jp' | 'vn' | 'none'

function Bubble({ l, mine, showVn, children, active }: { l: Line; mine: boolean; showVn: boolean; children?: React.ReactNode; active?: boolean }) {
  return (
    <div className={cx('flex', mine ? 'justify-end' : 'justify-start')}>
      <div
        className={cx(
          'max-w-[90%] rounded-2xl px-4 py-3 shadow-xs sm:px-5',
          mine ? 'rounded-br-sm bg-accent-soft' : 'rounded-bl-sm border border-line bg-surface',
          active && 'ring-2 ring-accent',
        )}
      >
        <p className="text-xs font-bold uppercase tracking-wider text-accent">{l.name ?? l.speaker}</p>
        {children ?? (
          <>
            <div className="mt-1 flex items-start gap-2">
              <Jp text={l.jp} className="text-lg sm:text-xl leading-loose" />
              <SpeakButton text={l.jp} role={roleOf(l.speaker)} className="mt-1" />
            </div>
            {showVn && l.vn && <p className="mt-1 text-sm text-sub">{l.vn}</p>}
          </>
        )}
      </div>
    </div>
  )
}

function Listen({ d }: { d: Dialogue }) {
  const [vn, setVn] = useState(true)
  const p = usePlaylist(d.lines.map((l) => ({ text: l.jp, role: roleOf(l.speaker) })), { gapMs: 350 })
  return (
    <div className="space-y-3">
      <FloatingPlayer p={p} title={d.title} />
      <div className="flex flex-wrap items-center gap-2">
        <PlayerControls p={p} startLabel="Nghe cả hội thoại" />
        <Chip active={vn} onClick={() => setVn(!vn)}>
          Dịch tiếng Việt
        </Chip>
      </div>
      <div className="space-y-2">
        {d.lines.map((l, i) => (
          <div key={i} className="cursor-pointer" onClick={() => p.playFrom(i)}>
            <Bubble l={l} mine={l.speaker === 'B'} showVn={vn} active={p.cur === i} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Roleplay({ d, me, hint, onDone }: { d: Dialogue; me: string; hint: HintLevel; onDone: () => void }) {
  const [i, setI] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [showVn, setShowVn] = useState(false)
  const finished = i >= d.lines.length
  const l = d.lines[Math.min(i, d.lines.length - 1)]!
  const mine = l.speaker === me

  const advance = () => {
    setRevealed(false)
    setShowVn(false)
    setI((x) => x + 1)
  }

  // the computer says the other role's lines and moves on; the end reports back
  useEffect(() => {
    if (finished) {
      onDone()
      return
    }
    if (mine) return
    let alive = true
    void speak(l.jp, { role: roleOf(l.speaker) }).then(() => alive && setTimeout(() => alive && advance(), 450))
    return () => {
      alive = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs once per turn
  }, [i, finished])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished || !mine || (e.target as HTMLElement | null)?.closest?.('input, textarea')) return
      if (e.key !== 'Enter' && e.key !== ' ') return
      e.preventDefault()
      if (!revealed) {
        setRevealed(true)
        void speak(l.jp, { role: roleOf(l.speaker) })
      } else advance()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  useEffect(() => {
    document.getElementById(`turn-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [i])

  const myTotal = d.lines.filter((x) => x.speaker === me).length
  const myDone = d.lines.slice(0, i).filter((x) => x.speaker === me).length

  return (
    <div className="space-y-2">
      <div className="sticky top-32 z-[5] rounded-xl border border-line bg-surface/95 px-3 py-2 text-sm backdrop-blur">
        <div className="mb-1 flex justify-between text-sub">
          <span>
            Lượt của bạn: {Math.min(myDone + (mine && !finished ? 1 : 0), myTotal)}/{myTotal}
          </span>
          <span>Enter: xem mẫu → câu tiếp</span>
        </div>
        <ProgressBar value={myDone / myTotal} />
      </div>
      {d.lines.slice(0, Math.min(i + 1, d.lines.length)).map((x, k) => {
        const isMine = x.speaker === me
        const current = k === i && !finished
        if (!isMine) return <div id={`turn-${k}`} key={k}><Bubble l={x} mine={false} showVn={hint !== 'none'} /></div>
        if (!current) return <div id={`turn-${k}`} key={k}><Bubble l={x} mine showVn={false} /></div>
        return (
          <div id={`turn-${k}`} key={k}>
            <Bubble l={x} mine showVn={false} active>
              <div className="mt-1 space-y-2">
                {x.free && <p className="inline-block rounded-full bg-violet-soft px-2.5 py-0.5 text-xs font-bold text-violet">🗣 Nói theo ý bạn</p>}
                {!revealed && hint === 'jp' && (
                  <div className="opacity-60">
                    <Jp text={x.jp} className="text-lg leading-loose" />
                  </div>
                )}
                {!revealed && (hint !== 'none' || showVn) && <p className="text-base font-medium text-ink">🎯 {x.vn}</p>}
                {!revealed && hint === 'none' && !showVn && (
                  <p className="text-base text-sub">
                    Đến lượt bạn — trả lời tự nhiên.{' '}
                    <button type="button" className="text-accent hover:underline cursor-pointer" onClick={() => setShowVn(true)}>
                      Xem ý cần nói
                    </button>
                  </p>
                )}
                {revealed && (
                  <div>
                    <div className="flex items-start gap-2">
                      <Jp text={x.jp} className="text-lg sm:text-xl leading-loose" />
                      <SpeakButton text={x.jp} role={roleOf(x.speaker)} className="mt-1" />
                    </div>
                    <p className="text-sm text-sub">{x.vn}</p>
                    {x.free && <p className="mt-1 text-xs text-sub">Đây chỉ là câu mẫu — câu của bạn khác vẫn được, miễn đúng ngữ pháp.</p>}
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-2">
                  <RecordButton key={k} label="Ghi âm" />
                  {!revealed ? (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => {
                        setRevealed(true)
                        void speak(x.jp, { role: roleOf(x.speaker) })
                      }}
                    >
                      Xem câu mẫu
                    </Button>
                  ) : (
                    <Button size="sm" variant="primary" onClick={advance}>
                      Tiếp →
                    </Button>
                  )}
                </div>
              </div>
            </Bubble>
          </div>
        )
      })}
    </div>
  )
}

function DialogueRun({ d, unitId, onBack }: { d: Dialogue; unitId: string; onBack: () => void }) {
  const saveSet = useProgress((s) => s.saveSet)
  const speakers = [...new Set(d.lines.map((l) => l.speaker))]
  const [step, setStep] = useState<'listen' | 'role'>('listen')
  const [me, setMe] = useState(speakers.includes('B') ? 'B' : speakers[0]!)
  const [hint, setHint] = useState<HintLevel>('vn')
  const [run, setRun] = useState(0)
  const runKey = `${me}-${hint}-${run}`
  const [finishedRun, setFinishedRun] = useState<string | null>(null)
  const finished = finishedRun === runKey
  useEffect(() => () => stopSpeaking(), [])
  const other = speakers.find((s) => s !== me) ?? me

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onBack}>
          ← Danh sách hội thoại
        </Button>
        <h3 className="text-xl font-bold text-ink">{d.title}</h3>
      </div>
      {d.scene && <p className="rounded-lg bg-muted px-3 py-2 text-sm">🎬 <Jp text={d.scene} /></p>}
      <div className="flex flex-wrap items-center gap-2">
        <Chip active={step === 'listen'} onClick={() => setStep('listen')}>
          1. Nghe cả bài
        </Chip>
        <Chip active={step === 'role'} onClick={() => setStep('role')}>
          2. Đóng vai và nói
        </Chip>
      </div>
      {step === 'role' && (
        <Card className="space-y-3 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-ink">Vai của bạn:</span>
            {speakers.map((s) => (
              <Chip key={s} active={me === s} onClick={() => setMe(s)}>
                {d.roles[s] ?? s} ({d.lines.filter((l) => l.speaker === s).length} câu)
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-ink">Gợi ý:</span>
            <Chip active={hint === 'jp'} onClick={() => setHint('jp')}>
              Chữ Nhật mờ + tiếng Việt
            </Chip>
            <Chip active={hint === 'vn'} onClick={() => setHint('vn')}>
              Chỉ tiếng Việt
            </Chip>
            <Chip active={hint === 'none'} onClick={() => setHint('none')}>
              Không gợi ý (như nói thật)
            </Chip>
          </div>
        </Card>
      )}
      {step === 'listen' && <Listen d={d} />}
      {step === 'role' && !finished && (
        <Roleplay
          key={runKey}
          d={d}
          me={me}
          hint={hint}
          onDone={() => {
            const n = d.lines.filter((l) => l.speaker === me).length
            saveSet(setKey(unitId, 'noi', `${d.id}-${me}`), n, n)
            setFinishedRun(runKey)
          }}
        />
      )}
      {step === 'role' && finished && (
        <Card className="space-y-3 text-center">
          <p className="text-xl font-bold text-ink">Hoàn thành vai {d.roles[me] ?? me} 🎉</p>
          <p className="text-sub">Đổi vai để nói phần còn lại, hoặc giảm gợi ý để luyện như nói thật.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {other !== me && (
              <Button variant="primary" onClick={() => setMe(other)}>
                Đổi sang vai {d.roles[other] ?? other}
              </Button>
            )}
            {hint !== 'none' && <Button onClick={() => setHint(hint === 'jp' ? 'vn' : 'none')}>Giảm gợi ý</Button>}
            <Button variant="ghost" onClick={() => setRun((r) => r + 1)}>
              Làm lại
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}

function DialoguePart({ unit }: { unit: Unit }) {
  const dialogues = unit.speaking!.dialogues
  const sets = useProgress((s) => s.sets)
  const [cur, setCur] = useState<Dialogue | null>(null)
  if (cur) return <DialogueRun key={cur.id} d={cur} unitId={unit.meta.id} onBack={() => setCur(null)} />
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {dialogues.map((d, n) => {
        const speakers = [...new Set(d.lines.map((l) => l.speaker))]
        const doneRoles = speakers.filter((s) => sets[setKey(unit.meta.id, 'noi', `${d.id}-${s}`)])
        return (
          <button key={d.id} type="button" className="text-left cursor-pointer" onClick={() => setCur(d)}>
            <Card className="h-full space-y-2 p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-bold text-accent">Hội thoại {n + 1}</p>
              <p className="text-lg font-bold leading-snug text-ink">{d.title}</p>
              {d.scene && <p className="text-sm text-sub"><Jp text={d.scene} /></p>}
              <p className="text-sm text-sub">
                {d.lines.length} lượt · {speakers.map((s) => `${d.roles[s] ?? s} ${d.lines.filter((l) => l.speaker === s).length} câu`).join(' · ')}
              </p>
              {doneRoles.length > 0 && <p className="text-sm font-semibold text-ok">✓ Đã đóng vai: {doneRoles.map((s) => d.roles[s] ?? s).join(', ')}</p>}
            </Card>
          </button>
        )
      })}
    </div>
  )
}

// ---------- Part 3: free talk ----------

function TalkCard({ t, unitId }: { t: SpeakTalk; unitId: string }) {
  const saveSet = useProgress((s) => s.saveSet)
  const done = useProgress((s) => s.sets[setKey(unitId, 'noi', t.id)])
  const [ticks, setTicks] = useState<boolean[]>(() => t.must.map(() => false))
  const [model, setModel] = useState(false)
  const p = usePlaylist(t.model.map((l) => ({ text: l.jp })), { gapMs: 300 })
  return (
    <Card className="space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-xl font-bold text-ink">{t.title}</p>
        {done && <span className="text-sm font-semibold text-ok">✓ Đã nói</span>}
      </div>
      <p className="text-base">
        <Jp text={t.prompt} />
      </p>
      {t.must.length > 0 && (
        <div>
          <p className="mb-1 text-sm font-semibold text-ink">Phải dùng (tự đánh dấu khi đã nói):</p>
          <div className="flex flex-wrap gap-2">
            {t.must.map((m, i) => (
              <Chip key={i} active={ticks[i]} onClick={() => setTicks((x) => x.map((v, k) => (k === i ? !v : v)))}>
                {ticks[i] ? '✓ ' : ''}
                <Jp text={m} />
              </Chip>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <RecordButton maxMs={180000} label="Ghi âm bài nói (tối đa 3 phút)" />
        <Button size="sm" variant="ghost" onClick={() => setModel(!model)}>
          {model ? 'Ẩn bài nói mẫu' : 'Xem bài nói mẫu'}
        </Button>
        <Button size="sm" variant="ok" onClick={() => saveSet(setKey(unitId, 'noi', t.id), 1, 1)}>
          Đánh dấu đã nói
        </Button>
      </div>
      {model && (
        <div className="space-y-2 rounded-2xl bg-muted/60 p-4">
          <PlayerControls p={p} startLabel="Nghe bài mẫu" />
          {t.model.map((l, i) => (
            <div key={i} className={cx('rounded-lg px-2 py-1', p.cur === i && 'bg-accent-soft')}>
              <Jp text={l.jp} className="text-lg leading-loose" />
              <p className="text-sm text-sub">{l.vn}</p>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}

export function SpeakingTab({ unit }: { unit: Unit }) {
  const sp = unit.speaking
  const [part, setPart] = useState<'qa' | 'dlg' | 'talk'>('qa')
  useEffect(() => () => stopSpeaking(), [])
  if (!sp) return <Empty title="Bài này chưa có phần luyện nói" />
  const nq = sp.sets.reduce((n, s) => n + s.questions.length, 0)
  return (
    <div className="space-y-6">
      <Card className="space-y-2 p-5">
        <p className="text-lg font-bold text-ink">🗣 Luyện nói</p>
        <p className="text-base text-sub">
          Nói thành tiếng mọi câu, càng nhiều lần càng tốt. Không chấm phát âm: bạn tự nói, so với câu mẫu rồi tự đánh giá. Có thể ghi âm để nghe lại giọng mình.
        </p>
      </Card>
      <div className="flex flex-wrap gap-2">
        <Chip active={part === 'qa'} onClick={() => setPart('qa')}>
          1. Hỏi đáp theo mẫu ({nq} câu)
        </Chip>
        <Chip active={part === 'dlg'} onClick={() => setPart('dlg')}>
          2. Hội thoại đóng vai ({sp.dialogues.length})
        </Chip>
        <Chip active={part === 'talk'} onClick={() => setPart('talk')}>
          3. Nói tự do ({sp.talks.length} đề)
        </Chip>
      </div>
      {part === 'qa' && <QaPart unit={unit} />}
      {part === 'dlg' && <DialoguePart unit={unit} />}
      {part === 'talk' && (
        <div className="grid gap-4 xl:grid-cols-2">
          {sp.talks.map((t) => (
            <TalkCard key={t.id} t={t} unitId={unit.meta.id} />
          ))}
        </div>
      )}
    </div>
  )
}
