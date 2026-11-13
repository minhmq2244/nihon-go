// Luyện nghe: ① từ & cụm → ② câu → ③ hội thoại ngắn. No quiz — listen, check, rate yourself.
import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Listening, PracticeCard, Unit } from '../types'
import { setKey } from '../lib/progressInfo'
import { playLines, speak, stopSpeaking } from '../lib/speech'
import { useProgress } from '../store/progress'
import { useSettings } from '../store/settings'
import { Jp } from '../components/Jp'
import { SpeedControl } from '../components/SpeedControl'
import { FocusDeck, LevelSteps, PlayBig } from '../components/FocusDeck'
import { PassiveUnitBanner } from '../components/PassiveUnitBanner'
import { Button, Empty, cx } from '../components/ui'
import { roleOf } from './ListeningTab'

const LEVELS = [
  { label: 'Từ & cụm', hint: 'Nghe từng từ của bài, đoán nghĩa trong đầu rồi mới mở ra xem.' },
  { label: 'Câu', hint: 'Nghe cả câu khi chưa có chữ. Bắt được những từ nào? Bật phụ đề để kiểm tra.' },
  { label: 'Hội thoại', hint: 'Nghe một đoạn hội thoại ngắn, nghe lại nhiều lần (có thể chỉnh chậm) đến khi hiểu hết.' },
]

export function ListenPracticeTab({ unit }: { unit: Unit }) {
  const uid = unit.meta.id
  const { words, sentences, talks: talkIds } = unit.practice.listen
  const talks = useMemo(
    () => talkIds.map((id) => unit.generated.listenings.find((l) => l.id === id)).filter((l): l is Listening => !!l),
    [talkIds, unit.generated.listenings],
  )
  const marks = useProgress((s) => s.marks ?? {})
  const saveSet = useProgress((s) => s.saveSet)
  const { rate, set } = useSettings()
  const prefix = (n: number) => `${uid}:luyen-nghe:${n}:`
  const decks = [words.map((w) => w.id), sentences.map((s) => s.id), talks.map((t) => t.id)]
  const levels = LEVELS.map((l, i) => ({ ...l, total: decks[i]!.length, done: decks[i]!.filter((id) => marks[prefix(i + 1) + id]).length }))
  // start at the first level not finished yet
  const [lv, setLv] = useState(() => Math.max(0, levels.findIndex((l) => l.done < l.total)))
  useEffect(() => stopSpeaking, [lv])
  const complete = useCallback((n: number, total: number) => saveSet(setKey(uid, 'luyen-nghe', `L${n}`), total, total), [saveSet, uid])
  const next = lv < 2 ? { label: `Sang nấc ${lv + 2}: ${LEVELS[lv + 1]!.label}`, go: () => setLv(lv + 1) } : undefined

  if (!words.length) return <Empty title="Bài này chưa có nội dung luyện nghe." />

  const cardDeck = (cards: PracticeCard[], n: 1 | 2) => (
    <FocusDeck
      key={n}
      items={cards}
      prefix={prefix(n)}
      keyOf={(c) => prefix(n) + c.id}
      reveal
      revealLabel={n === 1 ? 'Xem từ' : 'Bật phụ đề'}
      okLabel="Nghe ra rồi"
      againLabel="Chưa nghe ra"
      onShow={(c) => void speak(c.say ?? c.jp)}
      onComplete={() => complete(n, cards.length)}
      next={next}
      render={(c, shown) => (
        <div className="space-y-5">
          <PlayBig onClick={() => void speak(c.say ?? c.jp)} />
          {shown ? (
            <div className="space-y-2">
              <p className={cx('font-bold leading-relaxed text-ink', n === 1 ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl')}>
                <Jp text={c.jp} />
              </p>
              <p className="text-lg text-sub">{c.vn}</p>
              {!!c.words?.length && (
                <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                  <span className="text-sm text-sub">Từ của bài:</span>
                  {c.words.map((w) => (
                    <span key={w} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-sm font-semibold text-accent">
                      <Jp text={w} />
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-base text-sub">{n === 1 ? 'Từ này nghĩa là gì?' : 'Bạn bắt được những từ nào?'}</p>
          )}
        </div>
      )}
    />
  )

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PassiveUnitBanner unitId={uid} />
      <LevelSteps levels={levels} cur={lv} onPick={setLv} />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-base text-sub">{LEVELS[lv]!.hint}</p>
        <SpeedControl rate={rate} onChange={(r) => set({ rate: r })} compact />
      </div>
      {lv === 0 && cardDeck(words, 1)}
      {lv === 1 && cardDeck(sentences, 2)}
      {lv === 2 &&
        (talks.length ? (
          <FocusDeck
            key={3}
            items={talks}
            prefix={prefix(3)}
            keyOf={(t) => prefix(3) + t.id}
            okLabel="Hiểu hết rồi"
            againLabel="Nghe lại sau"
            onComplete={() => complete(3, talks.length)}
            render={(t) => <TalkCard key={t.id} talk={t} />}
          />
        ) : (
          <Empty title="Bài này chưa có hội thoại để nghe." />
        ))}
    </div>
  )
}

/** A short conversation: play all, transcript hidden until asked, tap a line to hear it again. */
function TalkCard({ talk }: { talk: Listening }) {
  const [cur, setCur] = useState<number | null>(null)
  const [script, setScript] = useState(false)
  const [stop, setStop] = useState<(() => void) | null>(null)
  const play = (from = 0) => {
    stop?.()
    const s = playLines(
      talk.lines.map((l) => ({ text: l.jp, role: roleOf(l.speaker) })),
      {
        from,
        gapMs: 350,
        onIndex: (i) => {
          setCur(i)
          if (i === null) setStop(null)
        },
      },
    )
    setStop(() => s)
  }
  useEffect(() => () => stopSpeaking(), [])
  return (
    <div className="space-y-4 text-left">
      <div className="text-center">
        <p className="text-xl font-bold text-ink">{talk.title}</p>
        {talk.intro && <p className="mt-1 text-base text-sub">{talk.intro}</p>}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {stop ? (
          <Button variant="primary" size="lg" onClick={stop}>
            ⏸ Dừng
          </Button>
        ) : (
          <Button variant="primary" size="lg" onClick={() => play()}>
            ▶ Nghe cả đoạn
          </Button>
        )}
        <Button size="lg" onClick={() => setScript(!script)}>
          {script ? 'Ẩn lời thoại' : 'Hiện lời thoại'}
        </Button>
      </div>
      {script ? (
        <ol className="space-y-1.5">
          {talk.lines.map((l, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => play(i)}
                className={cx('w-full rounded-xl px-3 py-2 text-left transition cursor-pointer', cur === i ? 'bg-accent-soft' : 'hover:bg-muted')}
              >
                <span className="mr-2 text-sm font-bold text-accent">{l.name ?? l.speaker}</span>
                <Jp text={l.jp} className="text-lg" />
                <span className="block text-sm text-sub">{l.vn}</span>
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-center text-base text-sub">
          {cur !== null ? `Đang nghe câu ${cur + 1}/${talk.lines.length}…` : `${talk.lines.length} câu · nghe đến khi hiểu hết rồi mới mở lời thoại.`}
        </p>
      )}
    </div>
  )
}
