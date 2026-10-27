// Parses the textbook volumes (content/source/tapN.md) into units and exams.
import type {
  ConfuseGroup,
  FillTable,
  Exam,
  KanjiItem,
  Section,
  SourceBlock,
  SourceExercise,
  SourceItem,
  TranslationItem,
  VocabItem,
  WritingTask,
} from '../../src/types'
import { toBase } from '../../src/lib/furigana'
import { norm } from '../../src/lib/normalize'
import { lexer, render, renderInline, splitHeadings, stripMd, vocabColumns, type Block } from './markdown'

export interface RawUnit {
  id: string
  vol: 1 | 2 | 3 | 4
  kind: 'bai' | 'cd'
  num: number
  heading: string
  header: string
  theory: string
  practice: string
  answers: string
}

export interface RawExam {
  id: string
  vol: 1 | 2 | 3 | 4
  heading: string
  intro: string
  questions: string
  diagnosis: string
  answers: string
}

const UNIT_RE = /^(Bài|Chủ đề)\s+(\d+)\s*(.*)$/

export function splitVolume(md: string, vol: 1 | 2 | 3 | 4): { units: RawUnit[]; exam?: RawExam; preface: string } {
  const { pre, blocks } = splitHeadings(md.replace(/&lt;(\/?)u&gt;/g, '<$1u>'), 1)
  const units: RawUnit[] = []
  let exam: RawExam | undefined
  let preface = pre
  let mode: 'none' | 'unit' | 'exam' = 'none'
  for (const b of blocks) {
    const um = UNIT_RE.exec(b.title)
    if (um) {
      const kind = um[1] === 'Bài' ? 'bai' : 'cd'
      const num = Number(um[2])
      units.push({
        id: kind === 'bai' ? `b${String(num).padStart(2, '0')}` : `cd${String(num).padStart(2, '0')}`,
        vol,
        kind,
        num,
        heading: um[3]!.trim(),
        header: b.body,
        theory: '',
        practice: '',
        answers: '',
      })
      mode = 'unit'
      continue
    }
    if (b.title.startsWith('Kiểm tra tổng hợp')) {
      exam = { id: `t${vol}`, vol, heading: b.title, intro: b.body, questions: '', diagnosis: '', answers: '' }
      mode = 'exam'
      continue
    }
    if (mode === 'unit') {
      const u = units[units.length - 1]!
      if (b.title.startsWith('Phần I.')) u.theory = b.body
      else if (b.title.startsWith('Phần II.')) u.practice = b.body
      else if (b.title.startsWith('Đáp án')) u.answers = b.body
    } else if (mode === 'exam' && exam) {
      if (b.title.startsWith('Đề kiểm tra')) exam.questions = b.body
      else if (b.title.startsWith('Bảng chẩn đoán')) exam.diagnosis = b.body
      else if (b.title.startsWith('Đáp án')) exam.answers = b.body
    } else {
      preface += `\n# ${b.title}\n${b.body}`
    }
  }
  // Some lessons (Bài 9, 10) lack the "# Phần II" heading: practice starts at "## A.".
  for (const u of units) {
    const at = u.theory.search(/^## A\. /m)
    if (!u.practice && at >= 0) {
      u.practice = u.theory.slice(at)
      u.theory = u.theory.slice(0, at)
    }
  }
  return { units, exam, preface }
}

const secId = (title: string) => /^(\d+)\./.exec(title)?.[1] ?? title

// ---------------- Theory ----------------

export function parseTheory(theory: string, unitId: string) {
  const { blocks } = splitHeadings(theory, 2)
  const sections: Section[] = []
  const grammarPoints: Section[] = []
  let vocab: VocabItem[] = []
  let kanji: KanjiItem[] = []
  let confuse: ConfuseGroup[] = []
  for (const b of blocks) {
    const id = secId(b.title)
    const isVocab = /Từ vựng/.test(b.title) && id === '2'
    sections.push({ id, title: b.title, html: render(b.body, { vocab: isVocab }) })
    if (isVocab) vocab = parseVocab(b.body, unitId)
    if (/^3\./.test(b.title) && /Kanji/.test(b.title)) {
      kanji = parseKanji(b.body, unitId)
      confuse = parseConfuse(b.body)
    }
    if (/^5\./.test(b.title) && /Ngữ pháp/.test(b.title)) {
      for (const g of splitHeadings(b.body, 3).blocks) {
        grammarPoints.push({ id: /^(\d+\.\d+)/.exec(g.title)?.[1] ?? g.title, title: g.title, html: render(g.body) })
      }
    }
  }
  return { sections, grammarPoints, vocab, kanji, confuse }
}

function tables(md: string): { group: string; t: { header: string[]; rows: string[][] } }[] {
  const out: { group: string; t: { header: string[]; rows: string[][] } }[] = []
  let group = ''
  for (const tok of lexer(md)) {
    if (tok.type === 'heading') group = stripMd(tok.text)
    if (tok.type === 'table') {
      const t = tok as { header: { text: string }[]; rows: { text: string }[][] }
      out.push({ group, t: { header: t.header.map((c) => stripMd(c.text)), rows: t.rows.map((r) => r.map((c) => c.text.trim())) } })
    }
  }
  return out
}

function parseVocab(md: string, unitId: string): VocabItem[] {
  const items: VocabItem[] = []
  const seen = new Set<string>()
  for (const { group, t } of tables(md)) {
    const groups = vocabColumns(t.header)
    for (const row of t.rows) {
      for (const g of groups) {
        const jp = stripMd(row[g.word] ?? '')
        // Editorial marks like *(bổ sung)* or *(chú ý: び)* go to the note, not the meaning.
        const marks: string[] = []
        const meaning = stripMd((row[g.meaning] ?? '').replace(/\*\(([^)]*)\)\*/g, (_, m: string) => (marks.push(m), ''))).trim()
        if (!jp || !meaning || !/[぀-ヿ一-鿿]/.test(jp)) continue
        const key = jp + '|' + meaning
        if (seen.has(key)) continue
        seen.add(key)
        const note = g.notes
          .map((c) => {
            const v = stripMd(row[c] ?? '')
            return v ? `${t.header[c]}: ${v}` : ''
          })
          .concat(marks.filter((m) => !/^bổ sung|ghi chép/i.test(m)))
          .filter(Boolean)
          .join(' · ')
        items.push({ id: `${unitId}-v${items.length + 1}`, jp, meaning, note: note || undefined, group })
      }
    }
  }
  return items
}

function parseKanji(md: string, unitId: string): KanjiItem[] {
  const out: KanjiItem[] = []
  for (const { t } of tables(md)) {
    const col = (name: RegExp) => t.header.findIndex((h) => name.test(h))
    const ck = col(/^Kanji$/)
    const chv = col(/Hán Việt/)
    if (ck < 0 || chv < 0) continue
    const cs = col(/Số nét/)
    const co = col(/Âm On/)
    const cp = col(/Bộ cấu thành/)
    const cst = col(/Câu chuyện/)
    const cc = col(/Từ ghép/)
    for (const r of t.rows) {
      const char = stripMd(r[ck] ?? '')
      if (!char) continue
      const compounds = cc >= 0 ? splitCompounds(r[cc] ?? '') : []
      out.push({
        id: `${unitId}-k${out.length + 1}`,
        char,
        hanviet: stripMd(r[chv] ?? ''),
        strokes: cs >= 0 ? stripMd(r[cs] ?? '') : '',
        onkun: co >= 0 ? stripMd(r[co] ?? '') : '',
        parts: cp >= 0 ? stripMd(r[cp] ?? '') : undefined,
        story: cst >= 0 ? stripMd(r[cst] ?? '') : undefined,
        compounds,
      })
    }
  }
  return out
}

function splitCompounds(cell: string) {
  return cell
    .split(/<br\s*\/?>|\n|·|•/i)
    .map((raw) => {
      const s = stripMd(raw).trim()
      if (!s) return null
      let jp = ''
      let meaning = ''
      if (/[:：]/.test(s)) {
        const idx = s.search(/[:：]/)
        jp = s.slice(0, idx).trim()
        meaning = s.slice(idx + 1).trim()
      } else {
        const m = /^(\S+)\s*(.*)$/.exec(s)
        if (m) {
          jp = m[1]!.trim()
          meaning = m[2]!.trim()
        }
      }
      return jp && /[一-鿿]/.test(jp) ? { jp, meaning } : null
    })
    .filter((x): x is { jp: string; meaning: string } => !!x)
}

function parseConfuse(md: string): ConfuseGroup[] {
  const out: ConfuseGroup[] = []
  for (const { t } of tables(md)) {
    if (t.header[0] !== 'Cặp' || !/Phân biệt/.test(t.header[1] ?? '')) continue
    for (const r of t.rows) {
      const raw = r[1] ?? ''
      const chars = [...raw.matchAll(/\*\*(.)\*\*\s*\(([^:：)]+)[:：]\s*([^)]+)\)/g)].map((m) => ({
        char: m[1]!,
        hanviet: m[2]!.trim(),
        meaning: m[3]!.trim(),
      }))
      if (chars.length >= 2) out.push({ chars, html: renderInline(raw) })
    }
  }
  return out
}

// ---------------- Exercises (shared with exams) ----------------

const BLANK_RE = /（[\s　]*）|＿{3,}|_{4,}/g

/** Find every `（A ／ B）` choice group, respecting nested furigana parentheses. */
export function findChoices(text: string): string[][] {
  const groups: string[][] = []
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== '（') continue
    let depth = 0
    const opts: string[] = []
    let cur = ''
    for (let j = i; j < text.length; j++) {
      const c = text[j]!
      if (c === '（') {
        depth++
        if (depth === 1) continue
      }
      if (c === '）') {
        depth--
        if (depth === 0) {
          opts.push(cur.trim())
          if (opts.length >= 2 && opts.every((o) => o)) {
            groups.push(opts)
            i = j
          }
          break
        }
      }
      if (depth === 1 && c === '／') {
        opts.push(cur.trim())
        cur = ''
        continue
      }
      cur += c
    }
  }
  return groups
}

/** Strip Vietnamese explanations from an answer, keeping the Japanese answer. */
export function answerCore(raw: string): string {
  const bold = [...raw.matchAll(/\*\*([^*]+)\*\*/g)].map((m) => m[1]!.trim())
  let s = bold.length && !/^\s*\*\*\(/.test(raw) ? bold.join('／') : raw
  s = s.replace(/\s+[—–]\s.*$/s, '')
  s = s.replace(/\s*\((?:[^()]*[A-Za-zÀ-ỹ][^()]*)\)\s*$/u, '')
  return stripMd(s).trim()
}

/** "A（＝ B）", "A（Hoặc: B）", "A（hoặc B）" → [A, B]. */
function withAlternatives(answer: string): string[] {
  const alts: string[] = []
  const main = answer.replace(/（\s*(?:＝|=|[Hh]oặc[:：]?)\s*([^（）]*(?:（[^（）]*）[^（）]*)*)）/g, (_, alt: string) => {
    alts.push(alt.trim())
    return ''
  })
  // "（／ X）" offers a partial rewrite we cannot rebuild reliably; drop it from the main answer.
  return [main.replace(/（\s*／[^（）]*(?:（[^（）]*）[^（）]*)*）/g, '').trim(), ...alts].filter(Boolean)
}

function choiceIndex(options: string[], core: string): number | undefined {
  const c = norm(toBase(core))
  if (!c) return undefined
  let idx = options.findIndex((o) => norm(toBase(o)) === c)
  if (idx < 0) idx = options.findIndex((o) => c.includes(norm(toBase(o))) && norm(toBase(o)).length > 0)
  return idx >= 0 ? idx : undefined
}

/** Map "1. X · 2. Y", numbered lines or a numbered table to answers keyed by number (with (a)/(b) part prefixes). */
export function parseAnswerMap(md: string): Map<string, string> {
  const map = new Map<string, string>()
  const lines = md.split(/\r?\n/)
  let prefix = ''
  for (const line of lines) {
    const part = /^\s*(?:\*\*)?\(([a-z])\)/.exec(line)
    if (part) prefix = part[1]!
    if (/^\s*\|/.test(line)) {
      const cells = line.split('|').slice(1, -1).map((c) => c.trim())
      const n = /^\(?(\d+)\)?$/.exec(stripMd(cells[0] ?? ''))
      if (n && cells.length > 1) map.set(prefix + n[1], cells.slice(1).filter(Boolean).join(' — '))
      continue
    }
    const body = part ? line.replace(/^\s*(?:\*\*)?\([a-z]\)(?:\*\*)?/, '') : line
    const starts = [...body.matchAll(/(?:^|·|\s)\s*\(?(\d+)[.)]\s+/g)]
    starts.forEach((m, i) => {
      const from = m.index! + m[0].length
      const to = i + 1 < starts.length ? starts[i + 1]!.index! : body.length
      const v = body.slice(from, to).replace(/\s*·\s*$/, '').trim()
      if (v && !map.has(prefix + m[1])) map.set(prefix + m[1], v)
    })
  }
  return map
}

/** JLPT-style options written as "A. …　B. …　C. …　D. …" (usually on the line after the stem). */
function findLetterOptions(text: string): { stem: string; options: string[] } | null {
  const at = text.search(/(?:^|<br>|[\s　])A[.．]\s/)
  if (at < 0) return null
  const tail = text.slice(at).replace(/^(?:<br>|[\s　])/, '')
  const optsPart = tail.split(/<br>|→/)[0]!
  const options = optsPart
    .split(/[\s　]+(?=[B-F][.．]\s)/)
    .map((o) => o.replace(/^[A-F][.．]\s*/, '').trim())
    .filter(Boolean)
  if (options.length < 2) return null
  return { stem: text.slice(0, at).replace(/(<br>)+$/, ''), options }
}

const letterAnswer = (raw: string) =>
  /Đáp án:\s*\*\*([A-F])\*\*/.exec(raw)?.[1] ?? /^\s*\*\*([A-F])\b/.exec(raw)?.[1] ?? /^\s*([A-F])\s*(?:[.(（]|$)/.exec(raw)?.[1]

function makeItem(n: number, text: string, answerRaw: string | undefined): SourceItem {
  const core = answerRaw ? answerCore(answerRaw) : ''
  const answerHtml = answerRaw ? renderInline(answerRaw) : undefined
  const lettered = findLetterOptions(text)
  if (lettered) {
    const letter = answerRaw ? letterAnswer(answerRaw) : undefined
    return {
      n,
      html: renderInline(lettered.stem),
      kind: 'choice',
      groups: [{ options: lettered.options, correct: letter ? letter.charCodeAt(0) - 65 : undefined }],
      answerHtml,
    }
  }
  const choices = findChoices(text)
  if (choices.length) {
    const coreParts = choices.length > 1 ? core.split(/\s*[／/]\s*/) : [core]
    const groups = choices.map((options, gi) => ({ options, correct: coreParts[gi] ? choiceIndex(options, coreParts[gi]!) : undefined }))
    // "（A ／ B — hint） → ＿＿＿" is a writing prompt, not a choice, when the answer matches no option.
    const isPrompt = /＿{3,}/.test(text) && groups.every((g) => g.correct === undefined)
    if (!isPrompt) {
      return { n, html: renderInline(text.replace(/→\s*（[\s　]*）\s*$/, '').trim()), kind: 'choice', groups, answerHtml }
    }
  }
  const blanks = text.match(BLANK_RE)?.length ?? 0
  let i = 0
  const marks = '①②③④⑤⑥⑦⑧⑨⑩⑪⑫'
  const stem = text.replace(BLANK_RE, () => `（**${marks[i++] ?? '＿'}**）`)
  const parts = core ? core.split(/\s*[／/]\s*/).filter(Boolean) : []
  if (blanks >= 1 && core) {
    if (blanks === 1) return { n, html: renderInline(stem), kind: 'input', blanks: 1, accept: [withAlternatives(core)], answerHtml }
    if (parts.length === blanks) return { n, html: renderInline(stem), kind: 'input', blanks, accept: parts.map(withAlternatives), answerHtml }
  }
  return { n, html: renderInline(stem), kind: 'open', answerHtml }
}

const ITEM_RE = /^\s{0,3}(\d+)\.\s+(.*)$/

const isBlankCell = (s: string) => stripMd(s).replace(/[\s　＿_]/g, '') === ''

/** A table with empty cells becomes a fill-in table, answered from the matching answer-key table. */
function fillTable(t: { header: string[]; rows: string[][] }, answerTables: { header: string[]; rows: string[][] }[]): FillTable {
  const key = (r: string[]) => stripMd(r[0] ?? '')
  const ans =
    answerTables.find((a) => a.header.length === t.header.length && t.rows.some((r) => a.rows.some((ar) => key(ar) === key(r)))) ??
    answerTables.find((a) => t.rows.some((r) => a.rows.some((ar) => key(ar) === key(r))))
  return {
    head: t.header.map((h) => renderInline(h)),
    rows: t.rows.map((r) => {
      const ar = ans?.rows.find((x) => key(x) === key(r))
      const n = /^\d+$/.test(key(r)) ? Number(key(r)) : undefined
      return {
        n,
        cells: r.map((c, ci) => {
          if (ci === 0 || !isBlankCell(c)) return { html: renderInline(c) }
          const a = ar?.[ar.length === r.length ? ci : ci - (r.length - ar.length)]
          return { accept: a ? withAlternatives(answerCore(a)) : [] }
        }),
      }
    }),
  }
}

/** Turn an exercise body into html blocks and numbered items. */
export function parseItems(body: string, answers: Map<string, string>, answerMd = ''): SourceBlock[] {
  const blocks: SourceBlock[] = []
  const lines = body.split(/\r?\n/)
  let buf: string[] = []
  let prefix = ''
  const prefixed = [...answers.keys()].some((k) => /^[a-z]/.test(k))
  const answerFor = (n: number) => answers.get((prefixed ? prefix : '') + n)
  const answerTables = tables(answerMd).map((x) => x.t)
  const pushHtml = (md: string) => {
    let raw = ''
    for (const tok of lexer(md)) {
      if (tok.type === 'table') {
        const t = tok as { header: { text: string }[]; rows: { text: string }[][] }
        const rows = t.rows.map((r) => r.map((c) => c.text.trim()))
        if (rows.some((r) => r.slice(1).some(isBlankCell))) {
          if (raw.trim()) blocks.push({ type: 'html', html: render(raw) })
          raw = ''
          blocks.push({ type: 'table', table: fillTable({ header: t.header.map((c) => c.text), rows }, answerTables) })
          continue
        }
      }
      raw += tok.raw
    }
    if (raw.trim()) blocks.push({ type: 'html', html: render(raw) })
  }
  const flush = () => {
    const md = buf.join('\n').trim()
    buf = []
    if (!md) return
    pushHtml(md)
    // Dialogues with numbered gaps: **(6)**＿＿＿
    for (const m of md.matchAll(/\*\*\((\d+)\)\*\*\s*[＿_]{2,}/g)) {
      const n = Number(m[1])
      blocks.push({ type: 'item', item: makeItem(n, `Chỗ trống (${n}) （　）`, answerFor(n)) })
    }
  }
  let fence = false
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!
    if (/^\s*```/.test(line)) fence = !fence
    const part = /^\s*\*\*\(([a-z])\)/.exec(line)
    if (part) prefix = part[1]!
    const m = !fence ? ITEM_RE.exec(line) : null
    if (!m) {
      buf.push(line)
      continue
    }
    flush()
    let text = m[2]!
    while (i + 1 < lines.length && /^\s+\S/.test(lines[i + 1]!) && !ITEM_RE.exec(lines[i + 1]!)) {
      text += '\n' + lines[++i]!.trim()
    }
    const n = Number(m[1])
    text = text.replace(/\n→\s*Thứ tự đúng:.*$/m, '')
    blocks.push({ type: 'item', item: makeItem(n, text.replace(/\n→/g, ' →').replace(/\n/g, '<br>'), answerFor(n)) })
  }
  flush()
  return blocks
}

/** Vocab matching tables (Tiếng Việt | Đáp án | Tiếng Nhật) become typing items instead. */
function matchingToItems(body: string, answerMd: string): SourceBlock[] | null {
  const t = tables(body).find(({ t }) => t.header[0] === 'Tiếng Việt' && t.header[2] === 'Tiếng Nhật')?.t
  if (!t) return null
  const jpByLetter = new Map<string, string>()
  for (const r of t.rows) {
    const m = /^([a-z])\.\s*(.+)$/.exec(stripMd(r[2] ?? ''))
    if (m) jpByLetter.set(m[1]!, m[2]!)
  }
  const pairs = new Map([...answerMd.matchAll(/(\d+)\s*[–-]\s*([a-z])/g)].map((m) => [m[1]!, m[2]!]))
  const blocks: SourceBlock[] = [{ type: 'html', html: render('Gõ từ tiếng Nhật cho nghĩa tiếng Việt (chữ Hán hoặc hiragana đều được).') }]
  for (const r of t.rows) {
    const m = /^(\d+)\.\s*(.+)$/.exec(stripMd(r[0] ?? ''))
    if (!m) continue
    const jp = jpByLetter.get(pairs.get(m[1]!) ?? '')
    blocks.push({
      type: 'item',
      item: jp
        ? { n: Number(m[1]), html: renderInline(m[2]!), kind: 'input', blanks: 1, accept: [[jp.replace(/（な）$/, '')]], answerHtml: renderInline(jp) }
        : { n: Number(m[1]), html: renderInline(m[2]!), kind: 'open' },
    })
  }
  return blocks
}

function answerBlocks(md: string, key: RegExp): Map<string, string> {
  const out = new Map<string, string>()
  const parts = md.split(new RegExp(`^\\*\\*(${key.source})\\.\\*\\*`, 'm'))
  for (let i = 1; i < parts.length; i += 2) out.set(parts[i]!, parts[i + 1]!.trim())
  return out
}

export function parsePractice(practice: string, answers: string) {
  const ans = splitHeadings(answers, 2).blocks
  const ansA = answerBlocks(ans.find((b) => b.title.startsWith('Phần A'))?.body ?? '', /A\d+/)
  const ansB = parseAnswerMap(ans.find((b) => b.title.startsWith('Phần B'))?.body ?? '')
  const ansC = answerBlocks(ans.find((b) => b.title.startsWith('Phần C'))?.body ?? '', /C\d+/)

  const exercises: SourceExercise[] = []
  const translations: TranslationItem[] = []
  const writingTasks: WritingTask[] = []
  const extraHtml: string[] = []
  for (const sec of splitHeadings(practice, 2).blocks) {
    if (/^A\./.test(sec.title)) {
      for (const ex of splitHeadings(sec.body, 3).blocks) {
        const id = /^(A\d+)\./.exec(ex.title)?.[1] ?? ex.title
        const amd = ansA.get(id) ?? ''
        const blocks = matchingToItems(ex.body, amd) ?? parseItems(ex.body, parseAnswerMap(amd), amd)
        exercises.push({ id, title: ex.title, blocks, answerHtml: amd ? render(amd) : undefined })
      }
    } else if (/^B\./.test(sec.title)) {
      let group = ''
      for (const line of sec.body.split(/\r?\n/)) {
        const g = /^\*\*(.+)\*\*\s*$/.exec(line.trim())
        if (g) group = g[1]!
        const m = ITEM_RE.exec(line)
        if (m) {
          const n = Number(m[1])
          translations.push({ n, group, vn: m[2]!.trim(), answer: ansB.get(String(n)) })
        }
      }
    } else if (/^C\./.test(sec.title)) {
      for (const c of splitHeadings(sec.body, 3).blocks) {
        const id = /^(C\d+)\./.exec(c.title)?.[1] ?? c.title
        const prompt = c.body.replace(/```[\s\S]*?```/g, '').trim()
        const model = ansC.get(id)
        writingTasks.push({
          id,
          title: c.title,
          promptHtml: render(prompt),
          promptText: stripMd(prompt.replace(/^>\s?/gm, '')),
          modelHtml: model ? render(model) : undefined,
          modelText: model ? stripMd(model.replace(/^>\s?/gm, '')) : undefined,
        })
      }
    } else if (/Thang điểm|Quy trình/.test(sec.title)) {
      extraHtml.push(`<h3>${sec.title}</h3>` + render(sec.body))
    }
  }
  return { exercises, translations, writingTasks, rubricHtml: extraHtml.join('') || undefined }
}

// ---------------- Exams ----------------

function parseNumberList(s: string): number[] {
  const out: number[] = []
  for (const part of s.replace(/Câu/g, '').split(/[,、]/)) {
    const r = /(\d+)\s*[–-]\s*(\d+)/.exec(part)
    if (r) for (let i = Number(r[1]); i <= Number(r[2]); i++) out.push(i)
    else {
      const n = /(\d+)/.exec(part)
      if (n) out.push(Number(n[1]))
    }
  }
  return out
}

export function parseExam(raw: RawExam): Exam {
  const answers = new Map<string, string>()
  for (const b of splitHeadings(raw.answers, 2).blocks) for (const [k, v] of parseAnswerMap(b.body)) answers.set(k, v)
  const parts: SourceExercise[] = splitHeadings(raw.questions, 2).blocks.map((b: Block, i) => ({
    id: `P${i + 1}`,
    title: b.title,
    blocks: parseItems(b.body, answers, raw.answers),
  }))
  const diagnosis: Exam['diagnosis'] = []
  for (const { t } of tables(raw.diagnosis)) {
    for (const r of t.rows) {
      const qs = parseNumberList(stripMd(r[0] ?? ''))
      if (qs.length) diagnosis.push({ questions: qs, topic: stripMd(r[1] ?? ''), where: [r[2], r[3]].map((x) => stripMd(x ?? '')).filter(Boolean).join(' · ') })
    }
  }
  const questionCount = parts.reduce(
    (s, p) => s + p.blocks.reduce((c, b) => c + (b.type === 'item' ? 1 : b.type === 'table' ? b.table.rows.filter((r) => r.n).length : 0), 0),
    0,
  )
  return {
    meta: { id: raw.id, vol: raw.vol, title: raw.heading, questionCount },
    introHtml: render(raw.intro),
    parts,
    diagnosis,
  }
}
