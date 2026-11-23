import { describe, expect, it } from 'vitest'
import {
  ALL_14_MODULES_NAV,
  REAL_LIFE_MODULES,
  getModuleById,
} from './modulesData'

describe('modulesData - Standardized 14 Modules Architecture', () => {
  it('contains exactly 4 foundation modules in Phase 1 (Modules 01 - 04)', () => {
    expect(REAL_LIFE_MODULES.length).toBe(4)
    expect(REAL_LIFE_MODULES.map((m) => m.id)).toEqual([
      'mod-01',
      'mod-02',
      'mod-03',
      'mod-04',
    ])
  })

  it('guarantees every Phase 1 module has all 6 core pillars complete and non-empty', () => {
    for (const mod of REAL_LIFE_MODULES) {
      // 1. Meta information
      expect(mod.num).toBeGreaterThanOrEqual(1)
      expect(mod.code).toMatch(/^MOD-0[1-4]$/)
      expect(mod.titleJp.length).toBeGreaterThan(0)
      expect(mod.titleVn.length).toBeGreaterThan(0)
      expect(mod.subtitle.length).toBeGreaterThan(0)
      expect(mod.badge.length).toBeGreaterThan(0)

      // 2. Pillar 1: Từ vựng (Vocab)
      expect(mod.vocab.length).toBeGreaterThanOrEqual(25)
      for (const v of mod.vocab) {
        expect(v.id).toBeDefined()
        expect(v.jp.length).toBeGreaterThan(0)
        expect(v.romaji.length).toBeGreaterThan(0)
        expect(v.vn.length).toBeGreaterThan(0)
        expect(v.category.length).toBeGreaterThan(0)
      }

      // 3. Pillar 2: Ngữ pháp (Grammar)
      expect(mod.grammar.length).toBeGreaterThanOrEqual(5)
      for (const g of mod.grammar) {
        expect(g.id).toBeDefined()
        expect(g.title.length).toBeGreaterThan(0)
        expect(g.formula.length).toBeGreaterThan(0)
        expect(g.meaning.length).toBeGreaterThan(0)
        expect(g.spokenTip.length).toBeGreaterThan(0) // Conversational nuance tip
        expect(g.examples.length).toBeGreaterThan(0)
        for (const ex of g.examples) {
          expect(ex.jp.length).toBeGreaterThan(0)
          expect(ex.vn.length).toBeGreaterThan(0)
        }
      }

      // 4. Pillar 3: Kanji Thực Chiến
      expect(mod.kanji.length).toBeGreaterThanOrEqual(12)
      for (const k of mod.kanji) {
        expect(k.char.length).toBe(1)
        expect(k.hanviet.length).toBeGreaterThan(0)
        expect(k.strokes).toBeGreaterThan(0)
        expect(k.compounds.length).toBeGreaterThan(0)
        for (const c of k.compounds) {
          expect(c.jp.length).toBeGreaterThan(0)
          expect(c.vn.length).toBeGreaterThan(0)
        }
      }

      // 5. Pillar 4: Luyện nghe & Phản xạ (Listening Q&A)
      expect(mod.listening.length).toBeGreaterThanOrEqual(2)
      for (const l of mod.listening) {
        expect(l.id).toBeDefined()
        expect(l.audioText.length).toBeGreaterThan(0)
        expect(l.questionJp.length).toBeGreaterThan(0)
        expect(l.options.length).toBeGreaterThanOrEqual(2)
        expect(l.options.some((opt) => opt.isCorrect)).toBe(true)
        expect(l.explanation.length).toBeGreaterThan(0)
      }

      // 6. Pillar 5: Ôn tập & Speed Quiz
      expect(mod.quiz.length).toBeGreaterThanOrEqual(3)
      for (const q of mod.quiz) {
        expect(q.id).toBeDefined()
        expect(q.stem.length).toBeGreaterThan(0)
        expect(q.options.length).toBeGreaterThanOrEqual(3)
        expect(q.correct).toBeGreaterThanOrEqual(0)
        expect(q.correct).toBeLessThan(q.options.length)
        expect(q.explain.length).toBeGreaterThan(0)
      }

      // 7. Pillar 6: Hội thoại thực chiến (Kaiwa Immersion)
      expect(mod.dialogue.lines.length).toBeGreaterThanOrEqual(30)
      expect(mod.dialogue.title.length).toBeGreaterThan(0)
      expect(mod.dialogue.scene.length).toBeGreaterThan(0)
      for (const line of mod.dialogue.lines) {
        expect(['A', 'B']).toContain(line.speaker)
        expect(line.jp.length).toBeGreaterThan(0)
        expect(line.vn.length).toBeGreaterThan(0)
      }
    }
  })

  it('correctly retrieves module by ID using getModuleById', () => {
    expect(getModuleById('mod-01')?.code).toBe('MOD-01')
    expect(getModuleById('mod-02')?.code).toBe('MOD-02')
    expect(getModuleById('mod-03')?.code).toBe('MOD-03')
    expect(getModuleById('mod-04')?.code).toBe('MOD-04')
    expect(getModuleById('non-existent')).toBeUndefined()
  })

  it('validates ALL_14_MODULES_NAV covers 14 modules in sequence from M01 to M14', () => {
    expect(ALL_14_MODULES_NAV.length).toBe(14)

    ALL_14_MODULES_NAV.forEach((m, idx) => {
      expect(m.num).toBe(idx + 1)
      const expectedCode = `M${m.num < 10 ? `0${m.num}` : m.num}`
      expect(m.code).toBe(expectedCode)
      expect(m.targetUrl.length).toBeGreaterThan(0)
      expect(m.shortTitle.length).toBeGreaterThan(0)
      expect(m.titleJp.length).toBeGreaterThan(0)
      expect(m.titleVn.length).toBeGreaterThan(0)

      if (m.num <= 4) {
        expect(m.phase).toBe(1)
        expect(m.level).toBe('N5')
        expect(m.targetUrl).toBe(`/module/mod-0${m.num}`)
      } else {
        expect(m.phase).toBe(2)
        expect(['N5+', 'N4', 'N4+']).toContain(m.level)
        expect(m.targetUrl).toMatch(/^\/u\/cd0[0-9]$/)
      }
    })
  })

  it('validates Priority Modules (01, 02, 03) contain rich colloquial nuances and quick-lookup keywords', () => {
    const m1 = getModuleById('mod-01')!
    const m2 = getModuleById('mod-02')!
    const m3 = getModuleById('mod-03')!

    // Module 01: School & Friends - must have colloquial particles like 'そうなんだ', 'マジで', 'タメ口'
    const m1Text = m1.dialogue.lines.map((l) => l.jp).join(' ')
    expect(m1Text).toContain('そうなんだ')
    expect(m1Text).toContain('マジで')
    expect(m1Text).toContain('タメ口')
    expect(m1.dialogue.lines.some((l) => l.nuances && l.nuances.length > 0)).toBe(true)
    expect(m1.dialogue.lines.some((l) => l.keywords && l.keywords.length > 0)).toBe(true)
    expect(m1.dialogue.lines.some((l) => Boolean(l.politeJp))).toBe(true)

    // Module 02: Konbini - must have heated bento, chopsticks, plastic bag refusal
    const m2Text = m2.dialogue.lines.map((l) => l.jp).join(' ')
    expect(m2Text).toContain('温（あたた）めますか')
    expect(m2Text).toContain('1膳（いちぜん）')
    expect(m2Text).toContain('結構（けっこう）です')
    expect(m2.dialogue.lines.some((l) => l.nuances && l.nuances.length > 0)).toBe(true)
    expect(m2.dialogue.lines.some((l) => l.keywords && l.keywords.length > 0)).toBe(true)

    // Module 03: Supermarket & Urban Life - must have hangaku (50% off sticker) and train transfer
    const m3Text = m3.dialogue.lines.map((l) => l.jp).join(' ')
    expect(m3Text).toContain('スーパー')
    expect(m3Text).toContain('半額（はんがく）')
    expect(m3Text).toContain('乗（の）り換（か）える')
    expect(m3.dialogue.lines.some((l) => l.nuances && l.nuances.length > 0)).toBe(true)
    expect(m3.dialogue.lines.some((l) => l.keywords && l.keywords.length > 0)).toBe(true)
  })
})
