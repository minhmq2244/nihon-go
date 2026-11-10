// Parses content/generated/speaking/<unit>.md (Luyện nói tab) and reading-qa/<unit>.md. Format: content/generated/README.md.
import type { Line, Reading, SpeakChain, SpeakCover, SpeakQuestion, SpeakSet, SpeakTalk, Speaking } from '../../src/types'
import { DslError, attr, headBody, lineBody, parseDialogue } from './generated'
import { splitHeadings } from './markdown'

/** "jp || vn" */
function pair(s: string): { jp: string; vn: string } {
  const { jp, vn } = lineBody(s)
  return { jp, vn }
}

/**
 * Questions are "- question || vn" lines, each followed by indented
 * "? hint", "= model answer || vn" (one or more) and "+ follow-up || vn".
 */
export function parseQuestions(body: string, setId: string): SpeakQuestion[] {
  const out: SpeakQuestion[] = []
  for (const raw of body.split(/\r?\n/)) {
    const line = raw.trim()
    if (!line || line.startsWith('@')) continue
    const cur = out[out.length - 1]
    const [mark, rest] = [line[0], line.slice(1).trim()]
    if (mark === '-') {
      const { jp, vn } = pair(rest)
      out.push({ id: `${setId}-${out.length + 1}`, q: jp, vn, answers: [] })
    } else if (!cur) {
      throw new DslError(`Dòng nằm ngoài câu hỏi trong ${setId}: ${line}`)
    } else if (mark === '?') cur.hint = rest
    else if (mark === '=') cur.answers.push(pair(rest))
    else if (mark === '+') cur.next = pair(rest)
    else throw new DslError(`Dòng không hợp lệ trong ${setId}: ${line}`)
  }
  for (const q of out) if (!q.answers.length) throw new DslError(`Câu hỏi thiếu câu trả lời mẫu (=): ${q.q}`)
  return out
}

/** Text compared by @cover: no readings （…）, no spaces, no ［］. */
export const plainJp = (jp: string) => jp.replace(/（[^（）]*）|［|］|\s/g, '')

/**
 * "@cover: label = a+b|c; label 2 = d" → sub-structures of a QA section.
 * | separates alternatives, + joins pieces that must all appear, ?piece is looked for in the question.
 */
export function parseCover(s: string, where: string): SpeakCover[] {
  const out: SpeakCover[] = []
  for (const item of s.split(/\s*;\s*/).filter(Boolean)) {
    const eq = item.lastIndexOf('=')
    if (eq < 0) throw new DslError(`@cover của ${where} thiếu "=" (nhãn = mẫu so khớp): ${item}`)
    const label = item.slice(0, eq).trim()
    const match = item
      .slice(eq + 1)
      .split('|')
      .map((alt) =>
        alt.split('+').map((p) => {
          const piece = p.trim()
          return piece.startsWith('?') ? '?' + plainJp(piece.slice(1)) : plainJp(piece)
        }),
      )
    if (!label) throw new DslError(`@cover của ${where} có mục thiếu nhãn: ${item}`)
    if (match.some((alt) => alt.some((p) => !p || p === '?'))) throw new DslError(`@cover của ${where} có mảnh so khớp rỗng: ${item}`)
    if (out.some((c) => c.label === label)) throw new DslError(`@cover của ${where} trùng nhãn "${label}"`)
    out.push({ label, match })
  }
  if (!out.length) throw new DslError(`@cover của ${where} không có mục nào`)
  return out
}

/** Labels of `cover` whose structure the question's model answers (or, for ?pieces, the question) use. */
export function coverUses(cover: SpeakCover[], q: SpeakQuestion): string[] {
  const ans = q.answers.map((a) => plainJp(a.jp)).join('\n')
  const ask = plainJp(q.q)
  const has = (p: string) => (p.startsWith('?') ? ask.includes(p.slice(1)) : ans.includes(p))
  return cover.filter((c) => c.match.some((alt) => alt.every(has))).map((c) => c.label)
}

/** A leading ＊ marks a roleplay line you say in your own words. */
const freeLine = (l: Line): Line => (l.jp.startsWith('＊') ? { ...l, jp: l.jp.slice(1).trim(), free: true } : l)

export function parseSpeaking(md: string, unitId: string): Speaking {
  const sp: Speaking = { sets: [], dialogues: [], talks: [], reflex: [], chains: [], build: [] }
  for (const sec of splitHeadings(md, 2).blocks) {
    const [head = '', ...rest] = sec.title.split(/\s*·\s*/)
    const [kind, code = ''] = head.trim().split(/\s+/)
    const title = rest.join(' · ')
    const id = `${unitId}-speak-${code.toLowerCase()}`
    if (kind === 'QA') {
      const set: SpeakSet = { id, code, title, tip: attr(sec.body, 'tip'), questions: parseQuestions(sec.body, id) }
      const cover = attr(sec.body, 'cover')
      if (cover !== undefined) set.cover = parseCover(cover, `QA ${code}`)
      sp.sets.push(set)
    } else if (kind === 'DIALOGUE') {
      const d = parseDialogue(title, sec.body, id)
      if (d.lines.length < 2) throw new DslError(`Hội thoại "${title}" quá ngắn`)
      sp.dialogues.push({ ...d, lines: d.lines.map(freeLine) })
    } else if (kind === 'REFLEX') {
      if (sp.reflex.length) throw new DslError(`Chỉ được có một phần "## REFLEX" trong luyện nói ${unitId}`)
      sp.reflex = parseQuestions(sec.body, `${unitId}-reflex`)
    } else if (kind === 'CHAIN') {
      const chain: SpeakChain = { id, title, scene: attr(sec.body, 'scene'), questions: parseQuestions(sec.body, id) }
      if (chain.questions.length < 2) throw new DslError(`Chuỗi hỏi "${title}" cần ít nhất 2 câu`)
      sp.chains.push(chain)
    } else if (kind === 'BUILD') {
      if (!code) throw new DslError(`"## BUILD" cần mã mẫu (5.1) hoặc MIX: ${sec.title}`)
      const steps = headBody(sec.body)
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter((l) => l.startsWith('- '))
        .map((l) => {
          const { jp, vn, note } = lineBody(l.slice(2))
          return note ? { jp, vn, add: note } : { jp, vn }
        })
      if (steps.length < 3) throw new DslError(`Chuỗi kéo dài câu "${title}" cần ít nhất 3 bước`)
      if (steps.some((s) => !s.vn)) throw new DslError(`Chuỗi kéo dài câu "${title}" thiếu nghĩa tiếng Việt (||)`)
      sp.build.push({ id: `${unitId}-build-${sp.build.length + 1}`, code, title, steps })
    } else if (kind === 'TALK') {
      const talk: SpeakTalk = {
        id,
        title,
        prompt: attr(sec.body, 'prompt') ?? '',
        must: (attr(sec.body, 'must') ?? '').split(/\s*;\s*/).filter(Boolean),
        model: headBody(sec.body)
          .split(/\r?\n/)
          .filter((l) => /^>\s?/.test(l))
          .map((l) => ({ speaker: 'N', ...lineBody(l.replace(/^>\s?/, '')) })),
      }
      if (!talk.prompt) throw new DslError(`Đề nói "${title}" thiếu @prompt`)
      sp.talks.push(talk)
    } else {
      throw new DslError(`Phần không hợp lệ "## ${sec.title}" trong luyện nói ${unitId}`)
    }
  }
  return sp
}

/** Questions a reading passage must have (shown 4 at a time). */
export const READING_ASK_COUNT = 12

/** reading-qa/<unit>.md: "## R01" sections of questions, attached to the unit's readings. */
export function attachReadingQuestions(md: string, readings: Reading[], unitId: string): Reading[] {
  const asks = new Map<string, Reading['ask']>()
  for (const sec of splitHeadings(md, 2).blocks) {
    const code = sec.title.trim().split(/\s+/)[0]!.toLowerCase()
    const id = `${unitId}-${code}`
    if (!readings.some((r) => r.id === id)) throw new DslError(`Không có bài đọc ${code.toUpperCase()} cho "## ${sec.title}"`)
    const qs = parseQuestions(sec.body, `${id}-ask`)
    if (qs.length !== READING_ASK_COUNT) throw new DslError(`${code.toUpperCase()} cần đúng ${READING_ASK_COUNT} câu hỏi, đang có ${qs.length}`)
    asks.set(id, qs)
  }
  return readings.map((r) => (asks.has(r.id) ? { ...r, ask: asks.get(r.id) } : r))
}
