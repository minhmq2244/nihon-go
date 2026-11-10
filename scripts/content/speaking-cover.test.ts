// Content check for Luyện nói nấc 3: every sub-structure of every pattern gets questions.
import { readFileSync, readdirSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { parseGenerated } from './generated'
import { buildPractice } from './practice'
import { coverUses, parseSpeaking } from './speaking'

const DIR = 'content/generated/speaking'
const units = readdirSync(DIR)
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace('.md', ''))

describe('speaking/*.md · @cover của nấc 3 (trả lời)', () => {
  for (const id of units) {
    it(`${id}: mỗi cấu trúc con có ≥ 2 câu hỏi và được chọn vào nấc 3`, () => {
      const g = parseGenerated(readFileSync(`content/generated/${id}.md`, 'utf8'), id)
      const sp = parseSpeaking(readFileSync(`${DIR}/${id}.md`, 'utf8'), id)
      const problems: string[] = []
      for (const p of g.grammar) {
        const set = sp.sets.find((s) => s.code === p.id)
        if (!set) {
          problems.push(`${p.id}: thiếu "## QA ${p.id}"`)
          continue
        }
        if (!set.cover?.length) {
          problems.push(`${p.id}: thiếu @cover`)
          continue
        }
        for (const c of set.cover) {
          const n = set.questions.filter((q) => coverUses(set.cover!, q).includes(c.label)).length
          if (n < 2) problems.push(`${p.id}: "${c.label}" chỉ có ${n} câu`)
        }
      }
      const practice = buildPractice([], g, sp)
      for (const pt of practice.speak.points) {
        const set = sp.sets.find((s) => s.code === pt.id)
        if (!set?.cover) continue
        for (const q of pt.ask) if (!q.uses?.length) problems.push(`${pt.id}: câu được chọn không dùng cấu trúc nào: ${q.q}`)
        const used = new Set(pt.ask.flatMap((q) => q.uses ?? []))
        for (const c of set.cover) if (!used.has(c.label)) problems.push(`${pt.id}: nấc 3 không có câu nào dùng "${c.label}"`)
      }
      expect(problems).toEqual([])
    })
  }
})

