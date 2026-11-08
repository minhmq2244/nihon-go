import { describe, expect, it } from 'vitest'
import type { Generated, VocabItem } from '../../src/types'
import { buildPractice, pickSentences } from './practice'
import { parseSpeaking } from './speaking'
import { DslError } from './generated'

const v = (id: string, jp: string, meaning = ''): VocabItem => ({ id, jp, meaning, group: '' })

describe('pickSentences', () => {
  const vocab = [v('a', '図書館（としょかん）'), v('b', '本（ほん）'), v('c', '読（よ）みます'), v('d', '公園（こうえん）')]

  it('covers the words with as few sentences as possible and lists the words heard', () => {
    const pool = [
      { id: 's1', jp: '本（ほん）を 買（か）いました。', vn: '' },
      { id: 's2', jp: '図書館（としょかん）で 本（ほん）を 読（よ）みます。', vn: '' },
      { id: 's3', jp: '公園（こうえん）へ 行（い）きます。', vn: '' },
    ]
    const got = pickSentences(vocab, pool)
    expect(got.map((s) => s.id)).toEqual(['s2', 's3'])
    expect(got[0]!.words).toEqual(['図書館（としょかん）', '本（ほん）', '読（よ）みます'])
  })

  it('prefers the shorter sentence when two add the same words', () => {
    const pool = [
      { id: 'long', jp: '昨日（きのう） 友達（ともだち）と 公園（こうえん）へ 行（い）きました。', vn: '' },
      { id: 'short', jp: '公園（こうえん）です。', vn: '' },
    ]
    expect(pickSentences(vocab, pool).map((s) => s.id)).toEqual(['short'])
  })

  it('stops at the limit', () => {
    const pool = vocab.map((x, i) => ({ id: `s${i}`, jp: `${x.jp}です。`, vn: '' }))
    expect(pickSentences(vocab, pool, 2)).toHaveLength(2)
  })
})

describe('BUILD sections', () => {
  const md = `## BUILD 5.1 · Đọc sách
- 本（ほん）を 読（よ）みます。 || Tôi đọc sách.
- 図書館（としょかん）で 本（ほん）を 読（よ）みます。 || Tôi đọc sách ở thư viện. >> 図書館（としょかん）で
- 毎日（まいにち） 図書館（としょかん）で 本（ほん）を 読（よ）みます。 || Ngày nào tôi cũng đọc sách ở thư viện. >> 毎日（まいにち）

## BUILD MIX · Ghép mẫu
- 寝（ね）ます。 || Tôi ngủ.
- 早（はや）く 寝（ね）ます。 || Tôi ngủ sớm. >> 早（はや）く
- 疲（つか）れた とき、早（はや）く 寝（ね）ます。 || Khi mệt tôi ngủ sớm. >> 疲（つか）れた とき
`

  it('parses steps with the added chunk and goes to the right grammar point', () => {
    const sp = parseSpeaking(md, 'b11')
    expect(sp.build.map((b) => [b.code, b.title, b.steps.length])).toEqual([
      ['5.1', 'Đọc sách', 3],
      ['MIX', 'Ghép mẫu', 3],
    ])
    expect(sp.build[0]!.steps[1]).toEqual({ jp: '図書館（としょかん）で 本（ほん）を 読（よ）みます。', vn: 'Tôi đọc sách ở thư viện.', add: '図書館（としょかん）で' })

    const g: Generated = {
      vocabCloze: [],
      kanji: [],
      writing: [],
      readings: [],
      listenings: [],
      dialogues: [],
      grammar: [{ id: '5.1', title: 'V-て います', sets: [] }],
    }
    const p = buildPractice([], g, sp)
    expect(p.speak.points[0]!.build.map((b) => b.title)).toEqual(['Đọc sách'])
    expect(p.speak.mixed.map((b) => b.title)).toEqual(['Ghép mẫu'])
  })

  it('rejects chains that are too short', () => {
    expect(() => parseSpeaking('## BUILD 5.1 · Ngắn\n- 本（ほん）です。 || Sách.\n- 私（わたし）の 本（ほん）です。 || Sách của tôi.\n', 'b11')).toThrow(DslError)
  })
})
