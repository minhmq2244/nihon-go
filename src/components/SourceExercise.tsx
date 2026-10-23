// Interactive rendering of the textbook's own exercises and exam parts.
import { useEffect, useMemo, useState } from 'react'
import type { FillTable, SourceExercise, SourceItem } from '../types'
import { isCorrect } from '../lib/normalize'
import { useProgress } from '../store/progress'
import { Html, Jp } from './Jp'
import { Button, JpInput, cx } from './ui'

export interface SheetResult {
  correct: number
  total: number
  wrong: number[]
}

type Answers = Record<string, string>

const MARKS = '①②③④⑤⑥⑦⑧⑨⑩⑪⑫'

/** null = cannot be checked automatically (the learner marks it). */
function autoResult(item: SourceItem, a: Answers): boolean | null {
  if (item.kind === 'choice') {
    const groups = item.groups ?? []
    if (groups.some((g) => g.correct === undefined)) return null
    return groups.every((g, gi) => a[`${item.n}.${gi}`] === String(g.correct))
  }
  if (item.kind === 'input' && item.accept) return item.accept.every((alts, bi) => isCorrect(a[`${item.n}.b${bi}`] ?? '', alts))
  return null
}

function tableResults(t: FillTable, ti: number, a: Answers): { n?: number; ok: boolean }[] {
  return t.rows
    .map((r, ri): { n?: number; ok: boolean } | null => {
      const blanks = r.cells.map((c, ci) => ({ c, ci })).filter((x) => 'accept' in x.c)
      if (!blanks.length) return null
      const ok = blanks.every(({ c, ci }) => 'accept' in c && c.accept.length > 0 && isCorrect(a[`t${ti}.${ri}.${ci}`] ?? '', c.accept))
      return { n: r.n, ok }
    })
    .filter((x): x is { n?: number; ok: boolean } => !!x)
}

function ItemView({ item, a, set, checked }: { item: SourceItem; a: Answers; set: (k: string, v: string) => void; checked: boolean }) {
  const auto = checked ? autoResult(item, a) : null
  const self = a[`${item.n}.self`]
  const ok = auto ?? (self === undefined ? null : self === '1')
  return (
    <div className={cx('rounded-lg border p-3', checked && ok === true && 'border-ok/40 bg-ok-soft/40', checked && ok === false && 'border-bad/40 bg-bad-soft/40', (!checked || ok === null) && 'border-line')}>
      <div className="flex gap-2">
        <span className="w-6 shrink-0 text-right font-semibold text-sub">{item.n}.</span>
        <div className="min-w-0 flex-1">
          <Html html={item.html} className="leading-loose [&_p]:m-0" />
          {item.kind === 'choice' &&
            item.groups!.map((g, gi) => (
              <div key={gi} className="mt-2 flex flex-wrap items-center gap-2">
                {item.groups!.length > 1 && <span className="text-sm text-sub">{MARKS[gi]}</span>}
                {g.options.map((o, oi) => {
                  const chosen = a[`${item.n}.${gi}`] === String(oi)
                  const right = checked && g.correct === oi
                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={checked}
                      onClick={() => set(`${item.n}.${gi}`, String(oi))}
                      className={cx(
                        'rounded-lg border px-3 py-1 text-left',
                        chosen && !checked && 'border-accent bg-accent-soft',
                        right && 'border-ok bg-ok-soft',
                        checked && chosen && g.correct !== oi && 'border-bad bg-bad-soft',
                        !chosen && !right && 'border-line bg-surface hover:border-accent',
                      )}
                    >
                      {g.options.length > 2 && <span className="mr-1 text-xs text-sub">{String.fromCharCode(65 + oi)}.</span>}
                      <Jp text={o} />
                    </button>
                  )
                })}
              </div>
            ))}
          {item.kind === 'input' && (
            <div className="mt-2 flex flex-wrap gap-2">
              {Array.from({ length: item.blanks ?? 1 }, (_, bi) => (
                <label key={bi} className="flex items-center gap-1">
                  {(item.blanks ?? 1) > 1 && <span className="text-sm text-sub">{MARKS[bi]}</span>}
                  <JpInput
                    className={(item.blanks ?? 1) > 1 ? 'w-32' : 'w-full min-w-64 sm:w-96'}
                    value={a[`${item.n}.b${bi}`] ?? ''}
                    disabled={checked}
                    state={checked ? (isCorrect(a[`${item.n}.b${bi}`] ?? '', item.accept?.[bi] ?? []) ? 'ok' : 'bad') : null}
                    onChange={(e) => set(`${item.n}.b${bi}`, e.target.value)}
                  />
                </label>
              ))}
            </div>
          )}
          {item.kind === 'open' && (
            <textarea
              lang="ja"
              rows={2}
              disabled={checked}
              className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-accent/30"
              value={a[`${item.n}.b0`] ?? ''}
              onChange={(e) => set(`${item.n}.b0`, e.target.value)}
            />
          )}
          {checked && item.answerHtml && (
            <div className="mt-2 rounded-md bg-muted px-3 py-1.5 text-sm">
              <span className="text-sub">Đáp án: </span>
              <Html html={item.answerHtml} className="inline [&_p]:inline" />
            </div>
          )}
          {checked && auto === null && (
            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="text-sub">Tự chấm:</span>
              <Button size="sm" variant={self === '1' ? 'ok' : 'default'} onClick={() => set(`${item.n}.self`, '1')}>
                Đúng
              </Button>
              <Button size="sm" variant={self === '0' ? 'bad' : 'default'} onClick={() => set(`${item.n}.self`, '0')}>
                Sai
              </Button>
            </div>
          )}
          {checked && auto === false && self === undefined && item.kind === 'input' && (
            <button type="button" className="mt-1 text-xs text-sub underline" onClick={() => set(`${item.n}.self`, '1')}>
              Câu của tôi cũng đúng
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function TableView({ t, ti, a, set, checked }: { t: FillTable; ti: number; a: Answers; set: (k: string, v: string) => void; checked: boolean }) {
  return (
    <div className="prose-jp">
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {t.head.map((h, i) => (
                <th key={i} dangerouslySetInnerHTML={{ __html: h }} />
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r, ri) => (
              <tr key={ri}>
                {r.cells.map((c, ci) =>
                  'html' in c ? (
                    <td key={ci} dangerouslySetInnerHTML={{ __html: c.html }} />
                  ) : (
                    <td key={ci}>
                      <JpInput
                        className="w-full min-w-24"
                        value={a[`t${ti}.${ri}.${ci}`] ?? ''}
                        disabled={checked}
                        state={checked && c.accept.length ? (isCorrect(a[`t${ti}.${ri}.${ci}`] ?? '', c.accept) ? 'ok' : 'bad') : null}
                        onChange={(e) => set(`t${ti}.${ri}.${ci}`, e.target.value)}
                      />
                      {checked && c.accept[0] && !isCorrect(a[`t${ti}.${ri}.${ci}`] ?? '', c.accept) && (
                        <div className="mt-1 text-xs text-ok">
                          <Jp text={c.accept[0]} />
                        </div>
                      )}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function computeResult(ex: SourceExercise, a: Answers): SheetResult {
  let correct = 0
  let total = 0
  const wrong: number[] = []
  let ti = 0
  for (const b of ex.blocks) {
    if (b.type === 'item') {
      const auto = autoResult(b.item, a)
      const self = a[`${b.item.n}.self`]
      const ok = self === '1' ? true : auto ?? (self === undefined ? null : false)
      if (ok === null) continue
      total++
      if (ok) correct++
      else wrong.push(b.item.n)
    } else if (b.type === 'table') {
      for (const r of tableResults(b.table, ti, a)) {
        total++
        if (r.ok) correct++
        else if (r.n) wrong.push(r.n)
      }
      ti++
    }
  }
  return { correct, total, wrong }
}

interface Props {
  ex: SourceExercise
  storeId: string
  /** Controlled mode (exams): the parent decides when the sheet is checked. */
  checked?: boolean
  onChecked?: (r: SheetResult) => void
}

export function SourceExerciseView({ ex, storeId, checked: checkedProp, onChecked }: Props) {
  const saved = useProgress((s) => s.answers[storeId])
  const saveAnswers = useProgress((s) => s.saveAnswers)
  const [a, setA] = useState<Answers>(saved ?? {})
  const [checkedState, setChecked] = useState(saved?.__checked === '1')
  const [showAll, setShowAll] = useState(false)
  const checked = checkedProp ?? checkedState
  useEffect(() => setA(useProgress.getState().answers[storeId] ?? {}), [storeId])
  const set = (k: string, v: string) => {
    const next = { ...a, [k]: v }
    setA(next)
    saveAnswers(storeId, next)
  }
  const result = useMemo(() => computeResult(ex, a), [ex, a])
  useEffect(() => {
    if (checked) onChecked?.(result)
  }, [checked, result])

  let ti = 0
  const hasItems = ex.blocks.some((b) => b.type !== 'html')
  return (
    <div className="space-y-3">
      {ex.blocks.map((b, i) =>
        b.type === 'html' ? (
          <Html key={i} html={b.html} />
        ) : b.type === 'item' ? (
          <ItemView key={i} item={b.item} a={a} set={set} checked={checked} />
        ) : (
          <TableView key={i} t={b.table} ti={ti++} a={a} set={set} checked={checked} />
        ),
      )}
      {checkedProp === undefined && (
        <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
          {hasItems && !checked && (
            <Button
              variant="primary"
              onClick={() => {
                setChecked(true)
                set('__checked', '1')
              }}
            >
              Chấm bài
            </Button>
          )}
          {checked && (
            <>
              <span className="font-semibold">
                Điểm: {result.correct}/{result.total}
              </span>
              <Button
                onClick={() => {
                  setA({})
                  saveAnswers(storeId, {})
                  setChecked(false)
                }}
              >
                Làm lại
              </Button>
            </>
          )}
          {ex.answerHtml && (
            <Button variant="ghost" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Ẩn' : 'Xem'} đáp án đầy đủ
            </Button>
          )}
        </div>
      )}
      {showAll && ex.answerHtml && (
        <div className="rounded-lg bg-muted p-3">
          <Html html={ex.answerHtml} />
        </div>
      )}
    </div>
  )
}
