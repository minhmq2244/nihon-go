// Parses practice content written in the DSL described in content/generated/README.md.
import type { Dialogue, Drill, DrillSet, DrillType, Generated, GrammarPractice, KaiwaTopic, Line, Listening, ListeningType, Reading } from '../../src/types'
import { splitAlternatives } from '../../src/lib/normalize'
import { splitHeadings } from './markdown'

const DRILL_TYPES: DrillType[] = ['FILL', 'MC', 'ORDER', 'FIX', 'TRANS', 'STAR', 'TF', 'SHORT']

export class DslError extends Error {}

/** Split "stem => answers || hint >> explain" (markers in any order). */
function splitMarkers(s: string): { head: string; answers?: string; hint?: string; explain?: string } {
  const parts = s.split(/\s(=>|\|\||>>)\s/)
  const out: { head: string; answers?: string; hint?: string; explain?: string } = { head: parts[0]!.trim() }
  for (let i = 1; i < parts.length; i += 2) {
    const v = parts[i + 1]!.trim()
    if (parts[i] === '=>') out.answers = v
    else if (parts[i] === '||') out.hint = v
    else out.explain = v
  }
  return out
}

function parseDrill(type: DrillType, line: string, id: string): Drill {
  const { head, answers, hint, explain } = splitMarkers(line)
  const d: Drill = { id, type, stem: head, answers: answers ? splitAlternatives(answers) : [], hint, explain }
  if (type === 'MC') {
    const m = /\{([^{}]+)\}\s*$/.exec(head)
    if (!m) throw new DslError(`MC thiếu {lựa chọn}: ${line}`)
    const opts = m[1]!.split(/[|｜]/).map((o) => o.trim())
    d.correct = opts.findIndex((o) => o.startsWith('*'))
    if (d.correct < 0) throw new DslError(`MC thiếu đáp án *: ${line}`)
    d.options = opts.map((o) => o.replace(/^\*/, ''))
    d.stem = head.slice(0, m.index).trim()
  } else if (type === 'ORDER') {
    d.chunks = head.split(/\s+\/\s+/).map((c) => c.trim())
    if (d.chunks.length < 2) throw new DslError(`ORDER cần ≥2 mảnh: ${line}`)
  } else if (type === 'STAR') {
    const star = /★\s*(\d)\s*$/.exec(head)
    d.chunks = [...head.matchAll(/〔([^〔〕]+)〕/g)].map((m) => m[1]!)
    if (!star || d.chunks.length !== 4) throw new DslError(`STAR cần 4 mảnh 〔〕 và ★N: ${line}`)
    d.correct = Number(star[1]) - 1
    d.stem = head.slice(0, star.index).trim()
  } else if (type === 'FILL') {
    if (!/［[^［］]+］/.test(head)) throw new DslError(`FILL thiếu ［đáp án］: ${line}`)
  } else if (type === 'TF') {
    if (!d.answers[0] || !/^(đúng|sai)$/i.test(d.answers[0])) throw new DslError(`TF cần => đúng/sai: ${line}`)
  } else if (!d.answers.length) {
    throw new DslError(`${type} thiếu => đáp án: ${line}`)
  }
  return d
}

const items = (body: string) =>
  body
    .split(/\r?\n/)
    .filter((l) => /^-\s+/.test(l))
    .map((l) => l.replace(/^-\s+/, ''))

/** "### TYPE · CODE · Title" blocks inside a section. */
function drillSets(body: string, idPrefix: string): DrillSet[] {
  return splitHeadings(body, 3).blocks.map((b, si) => {
    const [typeRaw, code = '', ...rest] = b.title.split(/\s*·\s*/)
    const type = typeRaw!.trim().toUpperCase() as DrillType
    if (!DRILL_TYPES.includes(type)) throw new DslError(`Loại bài không hợp lệ "${typeRaw}" trong ${idPrefix}`)
    const id = `${idPrefix}-${code || type}${si}`
    return {
      id,
      code: code.trim(),
      type,
      title: rest.join(' · ') || code,
      items: items(b.body).map((l, i) => parseDrill(type, l, `${id}-${i + 1}`)),
    }
  })
}

function parseLine(raw: string): Line | null {
  const m = /^([A-Za-zＡ-Ｚ]{1,2})(?:\[([^\]]+)\])?\s*[:：]\s*(.+)$/.exec(raw.trim())
  if (!m) return null
  return { speaker: m[1]!, name: m[2], ...lineBody(m[3]!) }
}

function lineBody(s: string): Omit<Line, 'speaker'> {
  let rest = s
  let task: string | undefined
  let alts: string[] | undefined
  const t = rest.split(/\s##\s/)
  if (t.length > 1) {
    rest = t[0]!
    task = t[1]!.trim()
  }
  const a = rest.split(/\s~~\s/)
  if (a.length > 1) {
    rest = a[0]!
    alts = splitAlternatives(a[1]!)
  }
  const { head, hint, explain } = splitMarkers(rest)
  return { jp: head, vn: hint ?? '', note: explain, alts, task }
}

const attr = (body: string, name: string) => new RegExp(`^@${name}:\\s*(.+)$`, 'm').exec(body)?.[1]?.trim()

function parseGloss(s: string | undefined) {
  if (!s) return []
  return s
    .split(/\s*;\s*/)
    .map((g) => g.split(/\s*=\s*/))
    .filter((p) => p.length === 2)
    .map(([jp, meaning]) => ({ jp: jp!, meaning: meaning! }))
}

/** Body before the first ### (story / script lines). */
const headBody = (body: string) => body.split(/^### /m)[0]!

function parseDialogue(title: string, body: string, id: string): Dialogue {
  const roles: Record<string, string> = {}
  for (const r of (attr(body, 'roles') ?? '').split(/\s*;\s*/)) {
    const [k, v] = r.split(/\s*=\s*/)
    if (k && v) roles[k] = v
  }
  const lines = headBody(body)
    .split(/\r?\n/)
    .map(parseLine)
    .filter((l): l is Line => !!l)
  return { id, title, scene: attr(body, 'scene'), roles, lines }
}

const titleParts = (t: string) => t.split(/\s*·\s*/).map((x) => x.trim())

export function parseGenerated(md: string, unitId: string): Generated {
  const g: Generated = { vocabCloze: [], kanji: [], grammar: [], writing: [], readings: [], listenings: [], dialogues: [] }
  for (const sec of splitHeadings(md, 2).blocks) {
    const [head, ...rest] = titleParts(sec.title)
    const [kind, code] = head!.split(/\s+/)
    const id = `${unitId}-${(code ?? kind!).toLowerCase()}`
    switch (kind) {
      case 'VOCAB':
        g.vocabCloze.push(...drillSets(sec.body, id))
        break
      case 'KANJI':
        g.kanji.push(...drillSets(sec.body, id))
        break
      case 'WRITING':
        g.writing.push(...drillSets(sec.body, id))
        break
      case 'GRAMMAR': {
        const gp: GrammarPractice = { id: code!, title: rest.join(' · '), sets: drillSets(sec.body, `${unitId}-g${code}`) }
        g.grammar.push(gp)
        break
      }
      case 'READING': {
        const [genre = '', title = '', titleVn = ''] = rest
        const lines = headBody(sec.body)
          .split(/\r?\n/)
          .filter((l) => /^>\s?/.test(l))
          .map((l) => ({ speaker: 'N', ...lineBody(l.replace(/^>\s?/, '')) }))
        const r: Reading = { id, genre, title, titleVn, lines, gloss: parseGloss(attr(sec.body, 'gloss')), questions: drillSets(sec.body, id) }
        g.readings.push(r)
        break
      }
      case 'LISTENING': {
        const [type = 'point', title = ''] = rest
        const l: Listening = {
          id,
          type: type as ListeningType,
          title,
          intro: attr(sec.body, 'intro'),
          lines: headBody(sec.body)
            .split(/\r?\n/)
            .map(parseLine)
            .filter((x): x is Line => !!x),
          questions: drillSets(sec.body, id),
        }
        g.listenings.push(l)
        break
      }
      case 'DIALOGUE':
        g.dialogues.push(parseDialogue(rest.join(' · '), sec.body, id))
        break
      default:
        throw new DslError(`Phần không hợp lệ "## ${sec.title}" trong ${unitId}`)
    }
  }
  return g
}

export function parseKaiwa(md: string, id: string, title: string, subtitle: string): KaiwaTopic {
  const topic: KaiwaTopic = {
    meta: { id, title, subtitle, chunkCount: 0, dialogueCount: 0 },
    chunks: [],
    frames: [],
    dialogues: [],
  }
  for (const sec of splitHeadings(md, 2).blocks) {
    const [head, ...rest] = titleParts(sec.title)
    const [kind, code] = head!.split(/\s+/)
    if (kind === 'CHUNKS') {
      topic.chunks = items(sec.body).map((l) => {
        const { head: jp, hint, explain } = splitMarkers(l)
        return { jp, meaning: hint ?? '', note: explain }
      })
    } else if (kind === 'FRAMES') {
      topic.frames = items(sec.body).map((l) => {
        const { head: pattern, hint } = splitMarkers(l)
        return { pattern, meaning: hint ?? '' }
      })
    } else if (kind === 'DIALOGUE') {
      topic.dialogues.push(parseDialogue(rest.join(' · '), sec.body, `k${id}-${(code ?? '').toLowerCase()}`))
    }
  }
  topic.meta.chunkCount = topic.chunks.length
  topic.meta.dialogueCount = topic.dialogues.length
  return topic
}
