import { useState } from 'react'
import type { Dialogue, Unit } from '../types'
import { setKey } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import { useKaiwa } from '../lib/data'
import { DialoguePractice } from '../components/DialoguePractice'
import { Button, Card, Empty } from '../components/ui'

export function DialogueList({ dialogues, onPick, doneOf }: { dialogues: Dialogue[]; onPick: (i: number) => void; doneOf: (d: Dialogue) => number[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {dialogues.map((d, i) => {
        const done = doneOf(d)
        return (
          <button key={d.id} type="button" onClick={() => onPick(i)} className="text-left">
            <Card className="h-full transition hover:border-accent">
              <p className="text-xs text-sub">
                {d.id.split('-').pop()?.toUpperCase()} · {d.lines.length} lượt
              </p>
              <p className="mt-1 font-semibold">{d.title}</p>
              {d.scene && <p className="line-clamp-2 text-sm text-sub">{d.scene}</p>}
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4].map((s) => (
                  <span key={s} className={`h-1.5 flex-1 rounded-full ${done.includes(s) ? 'bg-ok' : 'bg-muted'}`} />
                ))}
              </div>
            </Card>
          </button>
        )
      })}
    </div>
  )
}

export function DialogueTab({ unit }: { unit: Unit }) {
  const [sel, setSel] = useState<number | null>(null)
  const dialogues = useProgress((s) => s.dialogues)
  const saveSet = useProgress((s) => s.saveSet)
  // Topic units (CD00–09) share the dialogues of the Kaiwa topic with the same id.
  const { data: topic } = useKaiwa(unit.meta.kind === 'cd' && !unit.generated.dialogues.length ? unit.meta.id : undefined)
  const list = unit.generated.dialogues.length ? unit.generated.dialogues : (topic?.dialogues ?? [])
  if (!list.length) return <Empty title="Hội thoại của bài này đang được bổ sung." />
  if (sel !== null) {
    const d = list[sel]!
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" onClick={() => setSel(null)}>
            ← Danh sách hội thoại
          </Button>
          <span className="flex-1" />
          {sel + 1 < list.length && (
            <Button size="sm" onClick={() => setSel(sel + 1)}>
              Hội thoại tiếp →
            </Button>
          )}
        </div>
        <Card>
          <h2 className="mb-3 text-xl font-bold">{d.title}</h2>
          <DialoguePractice key={d.id} d={d} />
        </Card>
      </div>
    )
  }
  return (
    <DialogueList
      dialogues={list}
      onPick={(i) => {
        setSel(i)
        saveSet(setKey(unit.meta.id, 'hoi-thoai', list[i]!.id), 1, 1)
      }}
      doneOf={(d) => dialogues[d.id] ?? []}
    />
  )
}
