// Luyện nói, for every grammar point of the unit:
// ① nhại lại → ② tự nói từ tiếng Việt → ③ trả lời câu hỏi → ④ kéo dài câu. You speak, then rate yourself.
import { useCallback, useEffect, useMemo, useState } from 'react'
import type { PracticeCard, SpeakBuild, SpeakQuestion, Unit } from '../types'
import { setKey } from '../lib/progressInfo'
import { speak, stopSpeaking } from '../lib/speech'
import { useProgress } from '../store/progress'
import { useSettings } from '../store/settings'
import { Jp } from '../components/Jp'
import { SpeedControl } from '../components/SpeedControl'
import { FocusDeck, LevelSteps, PlayBig } from '../components/FocusDeck'
import { Empty, SpeakButton, cx } from '../components/ui'

const LEVELS = [
  { label: 'Nhại lại', hint: 'Nghe câu mẫu rồi nói theo 2–3 lần, bắt chước cả nhịp và ngữ điệu.' },
  { label: 'Tự nói', hint: 'Chỉ nhìn câu tiếng Việt, tự nói câu tiếng Nhật thành tiếng rồi mới xem đáp án.' },
  { label: 'Trả lời', hint: 'Nghe câu hỏi và trả lời thành tiếng bằng mẫu câu của bài. Không cần giống hệt câu mẫu.' },
  { label: 'Kéo dài câu', hint: 'Mỗi bước thêm một cụm. Nói lại cả câu từ đầu đến khi trôi, không dừng giữa chừng.' },
]

type Sentence = { key: string; point: string; card: PracticeCard }
type Ask = { key: string; point: string; q: SpeakQuestion }
type Step = { key: string; chain: SpeakBuild; i: number }

/** Grammar point title without the leading number: "5.1 Mẫu 98 V-て います" → "Mẫu 98 V-て います". */
const pointName = (title: string) => title.replace(/^\d+(\.\d+)*\s*/, '')

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block max-w-full truncate rounded-full bg-violet-soft px-3 py-1 text-sm font-semibold text-violet">
      <Jp text={children} />
    </span>
  )
}

export function SpeakPracticeTab({ unit }: { unit: Unit }) {
  const uid = unit.meta.id
  const { points, mixed } = unit.practice.speak
  const prefix = (n: number) => `${uid}:luyen-noi:${n}:`
  const sentences = useMemo<Sentence[]>(() => points.flatMap((p) => p.sentences.map((card) => ({ key: card.id, point: p.title, card }))), [points])
  const asks = useMemo<Ask[]>(() => points.flatMap((p) => p.ask.map((q) => ({ key: q.id, point: p.title, q }))), [points])
  const steps = useMemo<Step[]>(
    () => [...points.flatMap((p) => p.build), ...mixed].flatMap((chain) => chain.steps.map((_, i) => ({ key: `${chain.id}-${i}`, chain, i }))),
    [points, mixed],
  )
  const marks = useProgress((s) => s.marks ?? {})
  const saveSet = useProgress((s) => s.saveSet)
  const { rate, set } = useSettings()
  const decks = [sentences, sentences, asks, steps].map((d) => d.map((x) => x.key))
  const levels = LEVELS.map((l, i) => ({ ...l, total: decks[i]!.length, done: decks[i]!.filter((k) => marks[prefix(i + 1) + k]).length }))
  const [lv, setLv] = useState(() => Math.max(0, levels.findIndex((l) => l.done < l.total)))
  useEffect(() => stopSpeaking, [lv])
  const complete = useCallback((n: number, total: number) => saveSet(setKey(uid, 'luyen-noi', `L${n}`), total, total), [saveSet, uid])
  const next = lv < 3 ? { label: `Sang nấc ${lv + 2}: ${LEVELS[lv + 1]!.label}`, go: () => setLv(lv + 1) } : undefined
  const say = (jp: string) => void speak(jp)

  if (!sentences.length) return <Empty title="Bài này chưa có nội dung luyện nói." />

  const common = (n: number) => ({ prefix: prefix(n), onComplete: () => complete(n, decks[n - 1]!.length), next })

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <LevelSteps levels={levels} cur={lv} onPick={setLv} />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-base text-sub">{LEVELS[lv]!.hint}</p>
        <SpeedControl rate={rate} onChange={(r) => set({ rate: r })} compact />
      </div>

      {lv === 0 && (
        <FocusDeck<Sentence>
          key={1}
          {...common(1)}
          items={sentences}
          keyOf={(s) => prefix(1) + s.key}
          okLabel="Nói trôi rồi"
          againLabel="Nhại thêm"
          onShow={(s) => say(s.card.jp)}
          render={(s) => (
            <div className="space-y-5">
              <Tag>{pointName(s.point)}</Tag>
              <p className="text-2xl font-bold leading-relaxed text-ink sm:text-3xl">
                <Jp text={s.card.jp} />
              </p>
              <p className="text-lg text-sub">{s.card.vn}</p>
              <PlayBig onClick={() => say(s.card.jp)} />
            </div>
          )}
        />
      )}

      {lv === 1 && (
        <FocusDeck<Sentence>
          key={2}
          {...common(2)}
          items={sentences}
          keyOf={(s) => prefix(2) + s.key}
          reveal
          revealLabel="Xem câu tiếng Nhật"
          okLabel="Nói trôi rồi"
          againLabel="Chưa trôi"
          onReveal={(s) => say(s.card.jp)}
          render={(s, shown) => (
            <div className="space-y-5">
              <Tag>{pointName(s.point)}</Tag>
              <p className="text-2xl font-bold leading-relaxed text-ink sm:text-3xl">{s.card.vn}</p>
              {shown ? (
                <div className="space-y-3 rounded-2xl bg-muted p-4">
                  <p className="text-2xl font-bold leading-relaxed text-accent">
                    <Jp text={s.card.jp} />
                  </p>
                  <SpeakButton text={s.card.jp} label="Nghe lại" className="mx-auto" />
                </div>
              ) : (
                <p className="text-base text-sub">Nói câu này bằng tiếng Nhật thành tiếng.</p>
              )}
            </div>
          )}
        />
      )}

      {lv === 2 &&
        (asks.length ? (
          <FocusDeck<Ask>
            key={3}
          {...common(3)}
            items={asks}
            keyOf={(a) => prefix(3) + a.key}
            reveal
            revealLabel="Xem câu trả lời mẫu"
            okLabel="Trả lời trôi"
            againLabel="Chưa trôi"
            onShow={(a) => say(a.q.q)}
            render={(a, shown) => <AskCard key={a.key} a={a} shown={shown} onPlay={() => say(a.q.q)} />}
          />
        ) : (
          <Empty title="Câu hỏi cho bài này đang được soạn." />
        ))}

      {lv === 3 &&
        (steps.length ? (
          <FocusDeck<Step>
            key={4}
          {...common(4)}
            next={undefined}
            items={steps}
            keyOf={(s) => prefix(4) + s.key}
            reveal
            revealLabel="Xem câu tiếng Nhật"
            okLabel="Nói trôi cả câu"
            againLabel="Chưa trôi"
              onReveal={(s) => say(s.chain.steps[s.i]!.jp)}
            render={(s, shown) => <BuildCard s={s} shown={shown} onPlay={() => say(s.chain.steps[s.i]!.jp)} />}
          />
        ) : (
          <Empty title="Bài kéo dài câu cho bài này đang được soạn." />
        ))}
    </div>
  )
}

function AskCard({ a, shown, onPlay }: { a: Ask; shown: boolean; onPlay: () => void }) {
  const [text, setText] = useState(false)
  return (
    <div className="space-y-4">
      <Tag>{pointName(a.point)}</Tag>
      <PlayBig onClick={onPlay} label="Nghe câu hỏi" />
      {text || shown ? (
        <div>
          <p className="text-2xl font-bold leading-relaxed text-ink">
            <Jp text={a.q.q} />
          </p>
          <p className="text-base text-sub">{a.q.vn}</p>
        </div>
      ) : (
        <button type="button" onClick={() => setText(true)} className="text-base font-semibold text-accent hover:underline cursor-pointer">
          Không nghe kịp? Hiện câu hỏi
        </button>
      )}
      {a.q.hint && !shown && <p className="text-base text-sub">Gợi ý: {a.q.hint}</p>}
      {shown && (
        <div className="space-y-2 rounded-2xl bg-muted p-4 text-left">
          <p className="text-sm font-bold text-sub">Câu trả lời mẫu</p>
          {a.q.answers.map((ans, i) => (
            <div key={i} className="flex items-start gap-2">
              <SpeakButton text={ans.jp} />
              <div>
                <p className="text-xl font-semibold leading-relaxed text-accent">
                  <Jp text={ans.jp} />
                </p>
                <p className="text-sm text-sub">{ans.vn}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function BuildCard({ s, shown, onPlay }: { s: Step; shown: boolean; onPlay: () => void }) {
  const { chain, i } = s
  const step = chain.steps[i]!
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Tag>{chain.code === 'MIX' ? 'Ghép nhiều mẫu' : chain.title}</Tag>
        <span className="text-sm font-semibold text-sub">
          Bước {i + 1}/{chain.steps.length}
        </span>
      </div>
      {i > 0 && (
        <div className="space-y-1 text-left">
          {chain.steps.slice(0, i).map((p, k) => (
            <p key={k} className={cx('text-base leading-relaxed', k === i - 1 ? 'text-ink' : 'text-sub/70')}>
              <Jp text={p.jp} />
            </p>
          ))}
        </div>
      )}
      <p className="text-2xl font-bold leading-relaxed text-ink sm:text-3xl">{step.vn}</p>
      {shown ? (
        <div className="space-y-2 rounded-2xl bg-muted p-4">
          <p className="text-2xl font-bold leading-relaxed text-accent">
            <Jp text={step.jp} />
          </p>
          {step.add && (
            <p className="text-base text-sub">
              Cụm mới: <b className="rounded bg-cta/40 px-1.5 text-ink"><Jp text={step.add} /></b>
            </p>
          )}
          <button type="button" onClick={onPlay} className="text-base font-semibold text-accent hover:underline cursor-pointer">
            🔊 Nghe lại
          </button>
        </div>
      ) : (
        <p className="text-base text-sub">{i ? 'Thêm ý mới vào câu trên và nói lại cả câu.' : 'Bắt đầu bằng câu ngắn này.'}</p>
      )}
    </div>
  )
}
