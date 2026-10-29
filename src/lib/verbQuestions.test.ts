import { describe, expect, it } from 'vitest'
import { findParticleIndexOutsideParens, generateQuestionsForVerb, getVerbParticles, parseParticleDefinition } from './verbQuestions'
import type { VerbDetail } from '../types'

const sampleVerb: VerbDetail = {
  dict: '会（あ）う',
  masu: '会（あ）います',
  type: 'Nhóm I · Tự động từ',
  particles: [
    'に — [Người] に 会（あ）う (gặp ai — dùng に, KHÔNG dùng を)',
    'と — [Người] と 会（あ）う (hẹn gặp nhau, hai bên chủ động)',
    'で — [Nơi gặp] で 会（あ）う',
  ],
  meaning: 'Gặp (người). Dùng cho gặp có hẹn hoặc tình cờ gặp.',
  patterns: ['[Nơi] で [Người] に 会（あ）います', '[Người] と 会（あ）います'],
  compare: [],
  mistakes: ['✗ 友達（ともだち）を 会（あ）いました → ✓ 友達（ともだち）に 会（あ）いました'],
  examples: [
    { jp: '昨日（きのう）、駅（えき）で 先生（せんせい）に 会（あ）いました。', vn: 'Hôm qua tôi gặp thầy ở ga.' },
    { jp: '土曜日（どようび）に 友達（ともだち）と 会（あ）って、映画（えいが）を 見（み）ます。', vn: 'Thứ Bảy tôi gặp bạn rồi đi xem phim.' },
    { jp: '国（くに）の 家族（かぞく）に 会（あ）いたいです。', vn: 'Tôi muốn gặp gia đình ở quê.' },
  ],
}

describe('verbQuestions', () => {
  it('parses particle definitions correctly', () => {
    const p = parseParticleDefinition('に — [Người] に 会（あ）う (gặp ai — dùng に, KHÔNG dùng を)')
    expect(p).toHaveLength(1)
    expect(p[0]?.particle).toBe('に')
    expect(p[0]?.target).toBe('[Người]')

    const multi = parseParticleDefinition('に／から — [Người cho mượn] に／から 借りる')
    expect(multi).toHaveLength(2)
    expect(multi[0]?.particle).toBe('に')
    expect(multi[1]?.particle).toBe('から')
  })

  it('extracts all particles of a verb', () => {
    const list = getVerbParticles(sampleVerb)
    expect(list.map((x) => x.particle)).toEqual(['に', 'と', 'で'])
  })

  it('generates questions covering all particles and verb forms', () => {
    const qs = generateQuestionsForVerb(sampleVerb, 'b05')
    expect(qs.length).toBeGreaterThanOrEqual(3)

    // Check that 'に', 'と', 'で' are all covered
    const particles = qs.map((q) => q.targetParticle)
    expect(particles).toContain('に')
    expect(particles).toContain('と')
    expect(particles).toContain('で')

    // Check that particleOptions has 4 items including the target
    const qNi = qs.find((q) => q.targetParticle === 'に')!
    expect(qNi.particleOptions).toContain('に')
    expect(qNi.particleOptions.length).toBe(4)

    // Check that mistake particle を was included as a distractor
    expect(qNi.particleOptions).toContain('を')

    // Check that target verb form is detected
    expect(qNi.targetVerbText).toBe('会（あ）いました')
    expect(qNi.targetFormKey).toBe('masuPast')
    expect(qNi.meaningVn).toBe('Hôm qua tôi gặp thầy ở ga.')
  })

  it('finds particle indices strictly outside furigana parentheses', () => {
    // 'に' is inside furigana in 日本（にほん）へ, but outside in 日本（にほん）に
    const textWithInsideNi = '日本（にほん）へ'
    expect(findParticleIndexOutsideParens(textWithInsideNi, 'に')).toBe(-1)
    expect(findParticleIndexOutsideParens(textWithInsideNi, 'へ')).toBe(textWithInsideNi.length - 1)

    const textWithBoth = '日本（にほん）に'
    expect(findParticleIndexOutsideParens(textWithBoth, 'に')).toBe(textWithBoth.length - 1)
  })
})
