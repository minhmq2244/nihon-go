// Parses content/generated/speaking/<unit>.md (Luyện nói tab). Format: content/generated/README.md.
import type { Line, SpeakQuestion, SpeakSet, SpeakTalk, Speaking } from '../../src/types'
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
function parseQuestions(body: string, setId: string): SpeakQuestion[] {
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

/** A leading ＊ marks a roleplay line you say in your own words. */
const freeLine = (l: Line): Line => (l.jp.startsWith('＊') ? { ...l, jp: l.jp.slice(1).trim(), free: true } : l)

export function parseSpeaking(md: string, unitId: string): Speaking {
  const sp: Speaking = { sets: [], dialogues: [], talks: [] }
  for (const sec of splitHeadings(md, 2).blocks) {
    const [head = '', ...rest] = sec.title.split(/\s*·\s*/)
    const [kind, code = ''] = head.trim().split(/\s+/)
    const title = rest.join(' · ')
    const id = `${unitId}-speak-${code.toLowerCase()}`
    if (kind === 'QA') {
      const set: SpeakSet = { id, code, title, tip: attr(sec.body, 'tip'), questions: parseQuestions(sec.body, id) }
      sp.sets.push(set)
    } else if (kind === 'DIALOGUE') {
      const d = parseDialogue(title, sec.body, id)
      if (d.lines.length < 2) throw new DslError(`Hội thoại "${title}" quá ngắn`)
      sp.dialogues.push({ ...d, lines: d.lines.map(freeLine) })
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
