import { useMemo, useState } from 'react'
import type { Unit, WritingTask } from '../types'
import { setKey } from '../lib/progressInfo'
import { printDocument, textToHtml } from '../lib/print'
import { useProgress } from '../store/progress'
import { DrillRunner, type Question } from '../components/Drill'
import { Html } from '../components/Jp'
import { Button, Card, Chip, Empty } from '../components/ui'

const NO_ANSWERS: Record<string, string> = {}

export function WritingTab({ unit }: { unit: Unit }) {
  const [mode, setMode] = useState<'w1' | 'w2' | 'w3' | 'pdf'>('w3')
  const [task, setTask] = useState(0)
  const id = unit.meta.id
  const w1 = useMemo(() => unit.generated.writing.flatMap((s) => s.items) as Question[], [unit])
  const w2 = useMemo<Question[]>(
    () =>
      unit.translations
        .filter((t) => t.answer)
        .map((t) => ({ id: `${id}:b${t.n}`, type: 'TRANS', stem: t.vn.replace(/\*\(([^)]*)\)\*/g, '').trim(), answers: [t.answer!], hint: t.group || undefined })),
    [unit, id],
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Chip active={mode === 'w1'} onClick={() => setMode('w1')}>
          W1 · Viết câu theo gợi ý
        </Chip>
        <Chip active={mode === 'w2'} onClick={() => setMode('w2')}>
          W2 · Dịch câu ({w2.length})
        </Chip>
        <Chip active={mode === 'w3'} onClick={() => setMode('w3')}>
          W3 · Viết đoạn văn ({unit.writingTasks.length})
        </Chip>
        <Chip active={mode === 'pdf'} onClick={() => setMode('pdf')}>
          Xuất PDF bài dịch
        </Chip>
      </div>
      {mode === 'w1' && (
        <Card>
          {w1.length ? (
            <DrillRunner setId={setKey(id, 'viet', 'w1')} questions={w1} title="W1 · Viết câu theo gợi ý" />
          ) : (
            <Empty title="Bài viết câu theo gợi ý cho bài này đang được bổ sung." />
          )}
        </Card>
      )}
      {mode === 'w2' && (
        <Card>
          <p className="mb-3 text-sm text-sub">Dịch câu tiếng Việt sang tiếng Nhật. Câu dịch có nhiều cách đúng — nếu khác đáp án nhưng bạn chắc là đúng, bấm “Câu của tôi cũng đúng”.</p>
          <DrillRunner setId={setKey(id, 'viet', 'w2')} questions={w2} title="W2 · Dịch câu" />
        </Card>
      )}
      {mode === 'w3' &&
        (unit.writingTasks.length ? (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {unit.writingTasks.map((t, i) => (
                <Chip key={t.id} active={task === i} onClick={() => setTask(i)}>
                  {t.id}
                </Chip>
              ))}
            </div>
            <WritingEditor key={unit.writingTasks[task]!.id} unit={unit} t={unit.writingTasks[task]!} />
            {unit.rubricHtml && (
              <details className="rounded-xl border border-line bg-surface p-4">
                <summary className="cursor-pointer font-semibold">Thang điểm & quy trình luyện viết</summary>
                <Html html={unit.rubricHtml} className="mt-2" />
              </details>
            )}
          </div>
        ) : (
          <Empty title="Bài này không có đề viết đoạn văn." />
        ))}
      {mode === 'pdf' && <TranslationPdf unit={unit} />}
    </div>
  )
}

function WritingEditor({ unit, t }: { unit: Unit; t: WritingTask }) {
  const key = `${unit.meta.id}:${t.id}`
  const draft = useProgress((s) => s.drafts[key] ?? '')
  const saveDraft = useProgress((s) => s.saveDraft)
  const saveSet = useProgress((s) => s.saveSet)
  const [showModel, setShowModel] = useState(false)
  const chars = draft.replace(/\s/g, '').length
  const sentences = draft.split(/[。！？!?]/).filter((s) => s.trim()).length

  const exportPdf = () => {
    saveSet(setKey(unit.meta.id, 'viet', `w3-${t.id}`), 1, 1)
    printDocument(`${unit.meta.kind === 'bai' ? 'Bài' : 'Chủ đề'} ${unit.meta.num} · ${t.title}`, [
      `<h2>Đề bài</h2><div class="box">${t.promptHtml}</div>`,
      `<h2>Bài làm của tôi</h2><div class="box">${draft.trim() ? textToHtml(draft) : '<i>(chưa viết)</i>'}</div>`,
      t.modelHtml ? `<h2>Đáp án mẫu</h2><div class="box answer">${t.modelHtml}</div>` : '',
      unit.rubricHtml ? `<h2>Thang điểm</h2>${unit.rubricHtml}` : '',
      `<h2>Yêu cầu chấm</h2><div class="box">Hãy chấm bài làm trên theo thang điểm, chỉ ra từng lỗi (từ vựng, ngữ pháp, trợ từ, chính tả Kanji), giải thích bằng tiếng Việt và viết lại bản sửa hoàn chỉnh.</div>`,
    ].join(''))
  }

  return (
    <Card className="space-y-3">
      <h2 className="text-lg font-bold">{t.title}</h2>
      <Html html={t.promptHtml} />
      <textarea
        lang="ja"
        rows={9}
        className="w-full rounded-lg border border-line bg-surface p-3 text-lg leading-loose outline-none focus:ring-2 focus:ring-accent/30"
        placeholder="Viết đoạn văn tiếng Nhật ở đây… (tự động lưu)"
        value={draft}
        onChange={(e) => saveDraft(key, e.target.value)}
      />
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-sub">
          {chars} ký tự · {sentences} câu
        </span>
        <span className="flex-1" />
        {t.modelHtml && (
          <Button variant="ghost" onClick={() => setShowModel(!showModel)}>
            {showModel ? 'Ẩn' : 'Xem'} bài mẫu
          </Button>
        )}
        <Button variant="primary" onClick={exportPdf}>
          Xuất PDF (đề + bài làm + đáp án)
        </Button>
      </div>
      {showModel && t.modelHtml && (
        <div className="rounded-lg bg-muted p-3">
          <Html html={t.modelHtml} />
        </div>
      )}
    </Card>
  )
}

function TranslationPdf({ unit }: { unit: Unit }) {
  const answers = useProgress((s) => s.answers[`${unit.meta.id}:B`]) ?? NO_ANSWERS
  const saveAnswers = useProgress((s) => s.saveAnswers)
  const set = (n: number, v: string) => saveAnswers(`${unit.meta.id}:B`, { ...answers, [n]: v })
  const exportPdf = () =>
    printDocument(
      `${unit.meta.kind === 'bai' ? 'Bài' : 'Chủ đề'} ${unit.meta.num} · Dịch câu Việt → Nhật`,
      `<table><thead><tr><th>#</th><th>Câu tiếng Việt</th><th>Bài làm</th><th>Đáp án mẫu</th></tr></thead><tbody>${unit.translations
        .map((t) => `<tr><td>${t.n}</td><td>${textToHtml(t.vn)}</td><td>${textToHtml(answers[t.n] ?? '')}</td><td>${textToHtml(t.answer ?? '')}</td></tr>`)
        .join('')}</tbody></table><h2>Yêu cầu chấm</h2><div class="box">Chấm từng câu dịch: đúng/sai, chỉ ra lỗi và viết câu sửa.</div>`,
    )
  return (
    <Card className="space-y-3">
      <p className="text-sm text-sub">Viết bài dịch của bạn vào từng ô rồi xuất PDF để đưa AI chấm.</p>
      {unit.translations.map((t) => (
        <div key={t.n}>
          <p className="text-sm">
            <b>{t.n}.</b> {t.vn.replace(/\*\(([^)]*)\)\*/g, '')}
          </p>
          <input lang="ja" className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-1.5" value={answers[t.n] ?? ''} onChange={(e) => set(t.n, e.target.value)} />
        </div>
      ))}
      <Button variant="primary" onClick={exportPdf}>
        Xuất PDF
      </Button>
    </Card>
  )
}
