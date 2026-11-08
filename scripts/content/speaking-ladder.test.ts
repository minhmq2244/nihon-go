// Content check for Luyện nói nấc 3–4: every unit can be practised all the way up.
import { readFileSync, readdirSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { parseSpeaking } from './speaking'

const DIR = 'content/generated/speaking'
const files = readdirSync(DIR).filter((f) => f.endsWith('.md'))

describe('speaking/*.md · nấc 3 (trả lời) và nấc 4 (kéo dài câu)', () => {
  it('covers all 21 units', () => {
    expect(files).toHaveLength(21)
  })

  for (const f of files) {
    const id = f.replace('.md', '')
    it(`${id}: questions per pattern, chains that grow one chunk at a time`, () => {
      const sp = parseSpeaking(readFileSync(`${DIR}/${f}`, 'utf8'), id)
      expect(sp.sets.length).toBeGreaterThanOrEqual(5)
      for (const s of sp.sets) expect(s.questions.length, s.code).toBeGreaterThanOrEqual(4)
      expect(sp.build.filter((b) => b.code === 'MIX')).toHaveLength(2)
      for (const b of sp.build) {
        // each step is longer than the one before, and says what it added
        b.steps.forEach((s, i) => {
          if (!i) return
          expect(s.jp.length, `${b.title} bước ${i + 1}`).toBeGreaterThan(b.steps[i - 1]!.jp.length)
          expect(s.add, `${b.title} bước ${i + 1}`).toBeTruthy()
        })
      }
    })
  }
})
