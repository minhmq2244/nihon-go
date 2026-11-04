import { describe, expect, it } from 'vitest'
import type { Unit } from '../types'
import { availableKinds, buildReflexItems } from './reflex'
import { toBase } from './furigana'

function unit(kind: 'bai' | 'cd', num: number): Unit {
  return {
    meta: { id: 'x', vol: 1, kind, num, title: '', subtitle: '', hasGenerated: true },
    vocab: [
      { id: 'v1', jp: '学生（がくせい）', meaning: 'Sinh viên', group: '2.1 Trường học' },
      { id: 'v2', jp: '暇（ひま）（な）', meaning: 'Rảnh', group: '2.4 Tính từ' },
      { id: 'v3', jp: '高（たか）い', meaning: 'Đắt', group: '2.4 Tính từ' },
      { id: 'v4', jp: 'いい（よい）', meaning: 'Tốt', group: '2.4 Tính từ' },
    ],
    verbs: [
      {
        dict: '飲（の）む',
        masu: '飲（の）みます',
        type: 'Nhóm I · Tha động từ',
        particles: [],
        meaning: '',
        patterns: [],
        compare: [],
        mistakes: [],
        examples: [{ jp: '毎朝（まいあさ） コーヒーを 飲（の）みます。', vn: '' }],
      },
      {
        dict: '行（い）く',
        masu: '行（い）きます',
        type: 'Nhóm I · Tự động từ',
        particles: [],
        meaning: '',
        patterns: [],
        compare: [],
        mistakes: [],
        examples: [],
      },
    ],
  } as unknown as Unit
}

const pairs = (u: Unit, kind: Parameters<typeof buildReflexItems>[1][number]) =>
  buildReflexItems(u, [kind]).map((i) => `${toBase(i.from)}→${toBase(i.to[0]!)}`)

describe('availableKinds', () => {
  it('unlocks kinds by the unit where they are taught', () => {
    expect(availableKinds({ kind: 'bai', num: 1 }).map((k) => k.id)).toEqual(['neg'])
    expect(availableKinds({ kind: 'bai', num: 7 }).map((k) => k.id)).toContain('kudasai')
    expect(availableKinds({ kind: 'bai', num: 10 }).map((k) => k.id)).not.toContain('plain')
    expect(availableKinds({ kind: 'cd', num: 0 }).map((k) => k.id)).toContain('polite')
  })
})

describe('buildReflexItems', () => {
  it('Bài 1 only has nouns, polite negative', () => {
    expect(pairs(unit('bai', 1), 'neg')).toEqual(['学生です。→学生じゃ ありません。'])
  })

  it('skips kinds the unit has not reached', () => {
    expect(buildReflexItems(unit('bai', 4), ['plain', 'past'])).toEqual([])
  })

  it('plain forms of verbs keep the example sentence start', () => {
    const p = pairs(unit('bai', 11), 'plain')
    expect(p).toContain('毎朝 コーヒーを 飲みます。→毎朝 コーヒーを 飲む。')
    expect(p).toContain('毎朝 コーヒーを 飲みませんでした。→毎朝 コーヒーを 飲まなかった。')
    expect(p).toContain('行きましたか。→行った？')
  })

  it('adjectives and nouns, including いい → よくない', () => {
    const p = pairs(unit('bai', 11), 'plain')
    expect(p).toContain('高くなかったです。→高くなかった。')
    expect(p).toContain('いいです。→いい。')
    expect(p).toContain('よかったですか。→よかった？')
    expect(p).toContain('暇ですか。→暇？')
    expect(p).toContain('学生じゃ ありませんでした。→学生じゃ なかった。')
  })

  it('pattern → plain and the reverse', () => {
    expect(pairs(unit('bai', 11), 'plainPattern')).toContain('行きませんか。→行かない？')
    expect(pairs(unit('bai', 11), 'plainPattern')).toContain('毎朝 コーヒーを 飲んで ください。→毎朝 コーヒーを 飲んで。')
    expect(pairs(unit('bai', 11), 'polite')).toContain('行かない？→行きませんか。')
  })

  it('ids are unique', () => {
    const items = buildReflexItems(unit('cd', 0), availableKinds({ kind: 'cd', num: 0 }).map((k) => k.id))
    expect(new Set(items.map((i) => i.id)).size).toBe(items.length)
  })
})
