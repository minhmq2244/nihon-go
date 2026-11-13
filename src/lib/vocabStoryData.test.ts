import { describe, expect, it } from 'vitest'
import { getVocabStory, getVocabStoryCoverage, hasVocabStory } from './vocabStoryData'
import type { Unit } from '../types'
import b01Data from '../../public/data/unit/b01.json'
import b02Data from '../../public/data/unit/b02.json'
import b03Data from '../../public/data/unit/b03.json'
import b04Data from '../../public/data/unit/b04.json'
import b05Data from '../../public/data/unit/b05.json'
import b06Data from '../../public/data/unit/b06.json'
import b07Data from '../../public/data/unit/b07.json'
import b08Data from '../../public/data/unit/b08.json'
import b09Data from '../../public/data/unit/b09.json'
import b10Data from '../../public/data/unit/b10.json'
import b11Data from '../../public/data/unit/b11.json'

const UNIT_DATA: Record<string, Unit> = {
  b01: b01Data as unknown as Unit,
  b02: b02Data as unknown as Unit,
  b03: b03Data as unknown as Unit,
  b04: b04Data as unknown as Unit,
  b05: b05Data as unknown as Unit,
  b06: b06Data as unknown as Unit,
  b07: b07Data as unknown as Unit,
  b08: b08Data as unknown as Unit,
  b09: b09Data as unknown as Unit,
  b10: b10Data as unknown as Unit,
  b11: b11Data as unknown as Unit,
}

describe('vocabStoryData for units b01 to b11', () => {
  const unitIds = ['b01', 'b02', 'b03', 'b04', 'b05', 'b06', 'b07', 'b08', 'b09', 'b10', 'b11']

  it('has curated story for all 11 units (b01 through b11)', () => {
    for (const id of unitIds) {
      expect(hasVocabStory(id)).toBe(true)
      const story = getVocabStory(id)
      expect(story).toBeDefined()
      expect(story?.unitId).toBe(id)
      expect(story?.title.length).toBeGreaterThan(0)
      expect(story?.titleVn.length).toBeGreaterThan(0)
      expect(story?.genre.length).toBeGreaterThan(0)
      expect(story?.lines.length).toBeGreaterThan(0)
    }
  })

  it('contains valid vocabIds referencing existing vocab in each unit', () => {
    for (const id of unitIds) {
      const story = getVocabStory(id)!
      const unit = UNIT_DATA[id]
      expect(unit).toBeDefined()
      const validIds = new Set(unit.vocab.map((v) => v.id))

      for (const line of story.lines) {
        expect(line.jp.length).toBeGreaterThan(0)
        expect(line.vn.length).toBeGreaterThan(0)
        for (const vid of line.vocabIds) {
          expect(validIds.has(vid), `Invalid vocabId "${vid}" in story ${id}`).toBe(true)
        }
      }

      for (const vid of story.vocabCovered) {
        expect(validIds.has(vid), `Invalid vocabCovered id "${vid}" in story ${id}`).toBe(true)
      }
    }
  })

  it('b01 covers 100% of vocabulary (66/66 words)', () => {
    const story = getVocabStory('b01')!
    const unit = UNIT_DATA.b01
    const coverage = getVocabStoryCoverage(story, unit.vocab)
    expect(coverage.covered.length).toBe(66)
    expect(coverage.missing.length).toBe(0)
    expect(coverage.ratio).toBe(1)
  })

  it('calculates coverage metrics correctly for all units', () => {
    for (const id of unitIds) {
      const story = getVocabStory(id)!
      const unit = UNIT_DATA[id]
      const coverage = getVocabStoryCoverage(story, unit.vocab)
      expect(coverage.covered.length).toBeGreaterThan(10)
      expect(coverage.ratio).toBeGreaterThan(0.2)
      expect(coverage.allCoveredIds.size).toBe(coverage.covered.length)
    }
  })
})
