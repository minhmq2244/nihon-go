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

describe('QA @cover (nấc 3)', () => {
  const md = `## QA 5.3 · 前は 〜が、今は 〜 · それで
@cover: 前は〜が、今は〜 = 前（まえ）は+今（いま）は; それで = それで; どう = ?どう|どうですか
- q1 || v
  = 前（まえ）は 好（す）きでしたが、今（いま）は 好（す）きじゃ ありません。 || v
- q2 || v
  = 雨（あめ）でした。 || v
- q3 || v
  = 前（まえ）は 遠（とお）かったですが、今（いま）は 近（ちか）いです。 || v
- q4 || v
  = 前（まえ）は 寒（さむ）かったですが、今（いま）は 暖（あたた）かいです。 || v
- 今日（きょう）は どうですか。 || v
  = 暑（あつ）いです。それで、アイスを 食（た）べました。 || v
- q6 || v
  = 疲（つか）れました。それで、早（はや）く 寝（ね）ました。 || v
- q7 || v
  = それで、帰（かえ）りました。 || v
`
  const sp = parseSpeaking(md, 'b11')
  const g: Generated = { vocabCloze: [], kanji: [], writing: [], readings: [], listenings: [], dialogues: [], grammar: [{ id: '5.3', title: 't', sets: [] }] }

  it('parses labels, alternatives and pieces', () => {
    expect(sp.sets[0]!.cover).toEqual([
      { label: '前は〜が、今は〜', match: [['前は', '今は']] },
      { label: 'それで', match: [['それで']] },
      { label: 'どう', match: [['?どう'], ['どうですか']] },
    ])
  })

  it('picks 2 questions per label, tops up to 5 with questions that use a label, keeps file order', () => {
    const ask = buildPractice([], g, sp).speak.points[0]!.ask
    expect(ask.map((q) => q.id)).toEqual(['b11-speak-5.3-1', 'b11-speak-5.3-3', 'b11-speak-5.3-4', 'b11-speak-5.3-5', 'b11-speak-5.3-6'])
    expect(ask[3]!.uses).toEqual(['それで', 'どう'])
  })

  it('keeps the first 5 questions when there is no @cover', () => {
    const plain = parseSpeaking(md.replace(/^@cover.*$/m, ''), 'b11')
    expect(buildPractice([], g, plain).speak.points[0]!.ask.map((q) => q.id.split('-').pop())).toEqual(['1', '2', '3', '4', '5'])
  })

  it('rejects broken @cover lines', () => {
    for (const bad of ['それで', '= それで', 'a = x+', 'a = x; a = y'])
      expect(() => parseSpeaking(`## QA 5.1 · t\n@cover: ${bad}\n- q || v\n  = a || v\n`, 'b11')).toThrow(DslError)
  })
})
