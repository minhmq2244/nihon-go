import { describe, expect, it } from 'vitest'
import { getVocabStory, getVocabStoryCoverage, hasVocabStory } from './vocabStoryData'
import b01Data from '../../public/data/unit/b01.json'
import type { Unit } from '../types'

describe('vocabStoryData', () => {
  it('has story for b01', () => {
    expect(hasVocabStory('b01')).toBe(true)
    expect(hasVocabStory('non_existent')).toBe(false)
  })

  it('covers 100% of b01 vocabulary (66/66 items)', () => {
    const story = getVocabStory('b01')
    expect(story).toBeDefined()
    if (!story) return

    const b01Unit = b01Data as unknown as Unit
    const vocabList = b01Unit.vocab
    expect(vocabList.length).toBe(66)

    const coverage = getVocabStoryCoverage(story, vocabList)
    expect(coverage.covered.length).toBe(66)
    expect(coverage.missing.length).toBe(0)
    expect(coverage.ratio).toBe(1)
  })

  it('contains valid vocabIds referencing existing vocab in the unit', () => {
    const story = getVocabStory('b01')!
    const b01Unit = b01Data as unknown as Unit
    const validIds = new Set(b01Unit.vocab.map((v) => v.id))

    for (const part of story.parts) {
      for (const id of part.vocabCovered) {
        expect(validIds.has(id)).toBe(true)
      }
      for (const line of part.lines) {
        for (const id of line.vocabIds) {
          expect(validIds.has(id)).toBe(true)
        }
      }
    }
  })

  it('has 4 coherent scenes with dialogue lines and translations', () => {
    const story = getVocabStory('b01')!
    expect(story.parts.length).toBe(4)

    for (const part of story.parts) {
      expect(part.lines.length).toBeGreaterThan(0)
      for (const line of part.lines) {
        expect(line.jp.length).toBeGreaterThan(0)
        expect(line.vn.length).toBeGreaterThan(0)
        expect(line.speaker).toBeDefined()
      }
    }
  })
})
