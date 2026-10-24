import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useIndex, useKaiwa } from '../lib/data'
import { useProgress } from '../store/progress'
import type { Card as StudyCard } from '../lib/questions'
import { DialoguePractice } from '../components/DialoguePractice'
import { DialogueList } from '../features/DialogueTab'
import { Flashcards, Learn, Match } from '../components/Study'
import { Jp } from '../components/Jp'
import { Button, Card, Chip, Empty, Loading, ProgressBar, SpeakButton } from '../components/ui'

export function KaiwaList() {
  const { data: index } = useIndex()
  const dialogues = useProgress((s) => s.dialogues)
  if (!index) return <Loading />
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Kaiwa theo chủ đề</h1>
        <p className="mt-2 text-base sm:text-lg text-sub font-medium">
          Không cần học theo thứ tự — chọn tình huống bạn cần nói ngay. Mỗi kịch bản luyện qua 4 bước: nghe → nhại → nhập vai có gợi ý → nhập vai mù.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {index.kaiwa.map((k) => {
          const done = Object.entries(dialogues).filter(([id, s]) => id.startsWith(`k${k.id}-`) && s.includes(4)).length
          return (
            <Link key={k.id} to={`/kaiwa/${k.id}`}>
              <Card className="h-full p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-bold text-accent uppercase tracking-wider">Chủ đề {Number(k.id.slice(2))}</p>
                <p className="mt-2 text-xl sm:text-2xl font-bold leading-snug">
                  <Jp text={k.title} />
                </p>
                <p className="mt-1 text-base text-sub">{k.subtitle}</p>
                <p className="mt-3 text-sm font-medium text-sub">
                  {k.chunkCount} cụm phản xạ · {k.dialogueCount} kịch bản
                </p>
                <ProgressBar value={k.dialogueCount ? done / k.dialogueCount : 0} className="mt-3 h-2.5" />
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function KaiwaTopicPage() {
  const { id = '' } = useParams()
  const { data: topic } = useKaiwa(id)
  const dialogues = useProgress((s) => s.dialogues)
  const navigate = useNavigate()
  const [mode, setMode] = useState<'dialogues' | 'chunks' | 'cards' | 'learn' | 'match'>('dialogues')
  const cards = useMemo<StudyCard[]>(
    () => (topic?.chunks ?? []).map((c, i) => ({ id: `k${id}-c${i}`, front: c.jp, back: c.meaning, extra: c.note, speak: c.jp })),
    [topic, id],
  )
  if (!topic) return <Loading />
  return (
    <div className="space-y-6">
      <div>
        <Link to="/kaiwa" className="inline-flex items-center gap-1 text-base font-semibold text-sub hover:text-accent">
          ← Tất cả chủ đề Kaiwa
        </Link>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink">
          <Jp text={topic.meta.title} />
        </h1>
        <p className="mt-1.5 text-base sm:text-lg text-sub font-medium">{topic.meta.subtitle}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Chip active={mode === 'dialogues'} onClick={() => setMode('dialogues')}>
          Kịch bản 2 người ({topic.dialogues.length})
        </Chip>
        <Chip active={mode === 'chunks'} onClick={() => setMode('chunks')}>
          Cụm phản xạ ({topic.chunks.length})
        </Chip>
        <Chip active={mode === 'cards'} onClick={() => setMode('cards')}>
          Thẻ cụm từ
        </Chip>
        <Chip active={mode === 'learn'} onClick={() => setMode('learn')}>
          Learn
        </Chip>
        <Chip active={mode === 'match'} onClick={() => setMode('match')}>
          Match
        </Chip>
      </div>
      {mode === 'dialogues' &&
        (topic.dialogues.length ? (
          <DialogueList dialogues={topic.dialogues} onPick={(i) => navigate(`/kaiwa/${id}/${i}`)} doneOf={(d) => dialogues[d.id] ?? []} />
        ) : (
          <Empty title="Kịch bản của chủ đề này đang được bổ sung." />
        ))}
      {mode === 'chunks' &&
        (topic.chunks.length ? (
          <Card className="space-y-4">
            <ul className="divide-y divide-line">
              {topic.chunks.map((c, i) => (
                <li key={i} className="flex items-start gap-2 py-2">
                  <SpeakButton text={c.jp} />
                  <div>
                    <Jp text={c.jp} className="text-lg font-medium" />
                    <p className="text-sm">{c.meaning}</p>
                    {c.note && <p className="text-xs text-sub">{c.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
            {topic.frames.length > 0 && (
              <div>
                <p className="font-semibold">Khung câu lắp ghép</p>
                <ul className="mt-1 space-y-1">
                  {topic.frames.map((f, i) => (
                    <li key={i} className="rounded-lg bg-muted px-3 py-2">
                      <Jp text={f.pattern} className="text-lg" />
                      <p className="text-sm text-sub">{f.meaning}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ) : (
          <Empty title="Cụm phản xạ của chủ đề này đang được bổ sung." />
        ))}
      {mode !== 'dialogues' && mode !== 'chunks' && !cards.length && <Empty title="Chưa có cụm từ để ôn." />}
      {mode === 'cards' && cards.length > 0 && (
        <Card>
          <Flashcards cards={cards} />
        </Card>
      )}
      {mode === 'learn' && cards.length > 0 && (
        <Card>
          <Learn cards={cards} setId={`k${id}:learn`} typing={() => null} />
        </Card>
      )}
      {mode === 'match' && cards.length > 0 && (
        <Card>
          <Match cards={cards} setId={`k${id}:match`} />
        </Card>
      )}
    </div>
  )
}

export function KaiwaDialoguePage() {
  const { id = '', did = '0' } = useParams()
  const { data: topic } = useKaiwa(id)
  const navigate = useNavigate()
  if (!topic) return <Loading />
  const i = Number(did)
  const d = topic.dialogues[i]
  if (!d) return <Empty title="Không tìm thấy kịch bản." />
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <Link to={`/kaiwa/${id}`} className="text-sm text-sub hover:text-accent">
          ← <Jp text={topic.meta.title} />
        </Link>
        <span className="flex-1" />
        {i > 0 && (
          <Button size="sm" variant="ghost" onClick={() => navigate(`/kaiwa/${id}/${i - 1}`)}>
            ← Kịch bản trước
          </Button>
        )}
        {i + 1 < topic.dialogues.length && (
          <Button size="sm" onClick={() => navigate(`/kaiwa/${id}/${i + 1}`)}>
            Kịch bản tiếp →
          </Button>
        )}
      </div>
      <Card>
        <p className="text-xs text-sub">
          Kịch bản {i + 1}/{topic.dialogues.length}
        </p>
        <h1 className="mb-3 text-xl font-bold">{d.title}</h1>
        <DialoguePractice key={d.id} d={d} />
      </Card>
    </div>
  )
}
