import { describe, expect, it } from 'vitest'
import { getKanjiCoverage, getKanjiPassages } from './kanjiReadingsData'
import type { Unit } from '../types'

describe('kanjiReadingsData', () => {
  it('returns 3 passages for b05 with full kanji coverage', async () => {
    // Mock b05 unit with its 11 kanji
    const mockUnit = {
      meta: { id: 'b05', vol: 1, kind: 'bai' as const, num: 5, title: '休みの 日', subtitle: 'Ngày nghỉ', hasGenerated: true },
      info: '',
      theory: [],
      grammarPoints: [],
      vocab: [],
      kanji: [
        { id: '1', char: '食', hanviet: 'THỰC', strokes: '9', onkun: '', compounds: [] },
        { id: '2', char: '飲', hanviet: 'ẨM', strokes: '12', onkun: '', compounds: [] },
        { id: '3', char: '買', hanviet: 'MÃI', strokes: '12', onkun: '', compounds: [] },
        { id: '4', char: '行', hanviet: 'HÀNH', strokes: '6', onkun: '', compounds: [] },
        { id: '5', char: '見', hanviet: 'KIẾN', strokes: '7', onkun: '', compounds: [] },
        { id: '6', char: '休', hanviet: 'HƯU', strokes: '6', onkun: '', compounds: [] },
        { id: '7', char: '物', hanviet: 'VẬT', strokes: '8', onkun: '', compounds: [] },
        { id: '8', char: '週', hanviet: 'CHU', strokes: '11', onkun: '', compounds: [] },
        { id: '9', char: '毎', hanviet: 'MỖI', strokes: '6', onkun: '', compounds: [] },
        { id: '10', char: '午', hanviet: 'NGỌ', strokes: '4', onkun: '', compounds: [] },
        { id: '11', char: '後', hanviet: 'HẬU', strokes: '9', onkun: '', compounds: [] },
      ],
      confuse: [],
      exercises: [],
      translations: [],
      writingTasks: [],
      generated: { vocabCloze: [], kanji: [], grammar: [], writing: [], readings: [], listenings: [], dialogues: [] },
    } as Unit

    const passages = getKanjiPassages(mockUnit)
    expect(passages).toHaveLength(3)

    // Verify each passage covers all 11 kanji
    for (const p of passages) {
      const coverage = getKanjiCoverage(p, mockUnit.kanji)
      expect(coverage.covered.length).toBe(11)
      expect(coverage.ratio).toBe(1)
      expect(p.lines.length).toBeGreaterThanOrEqual(3)
      expect(p.questions.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('generates 3 passages for generic unit with fallback', () => {
    const genericUnit = {
      meta: { id: 'test01', vol: 1, kind: 'bai' as const, num: 99, title: 'Test', subtitle: 'Test', hasGenerated: true },
      info: '',
      theory: [],
      grammarPoints: [],
      vocab: [],
      kanji: [
        { id: '1', char: '山', hanviet: 'SƠN', strokes: '3', onkun: 'サン / やま', compounds: [{ jp: '山（やま）', meaning: 'núi' }] },
        { id: '2', char: '川', hanviet: 'XUYÊN', strokes: '3', onkun: 'セン / かわ', compounds: [{ jp: '川（かわ）', meaning: 'sông' }] },
      ],
      confuse: [],
      exercises: [],
      translations: [],
      writingTasks: [],
      generated: { vocabCloze: [], kanji: [], grammar: [], writing: [], readings: [], listenings: [], dialogues: [] },
    } as Unit

    const passages = getKanjiPassages(genericUnit)
    expect(passages).toHaveLength(3)
    for (const p of passages) {
      const coverage = getKanjiCoverage(p, genericUnit.kanji)
      expect(coverage.ratio).toBe(1)
    }
  })
})
