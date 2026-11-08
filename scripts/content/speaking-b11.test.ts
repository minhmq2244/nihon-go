// Content check for the Phản xạ part of Bài 11 (the pilot unit).
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { parseSpeaking } from './speaking'

describe('speaking/b11.md · Phản xạ', () => {
  const sp = parseSpeaking(readFileSync('content/generated/speaking/b11.md', 'utf8'), 'b11')

  it('has about 30 single questions and 5–6 chains of 4–6 turns', () => {
    expect(sp.reflex.length).toBeGreaterThanOrEqual(30)
    expect(sp.chains.length).toBeGreaterThanOrEqual(5)
    expect(sp.chains.length).toBeLessThanOrEqual(6)
    for (const c of sp.chains) {
      expect(c.questions.length, c.title).toBeGreaterThanOrEqual(4)
      expect(c.questions.length, c.title).toBeLessThanOrEqual(6)
    }
  })

  it('gives every question a hint', () => {
    const all = [...sp.reflex, ...sp.chains.flatMap((c) => c.questions)]
    expect(all.filter((q) => !q.hint).map((q) => q.q)).toEqual([])
  })
})
