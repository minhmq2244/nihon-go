import { describe, expect, it } from 'vitest'
import { attachReadingQuestions, parseSpeaking } from './speaking'
import { DslError } from './generated'

const md = `# b11 · Luyện nói

## QA 5.1 · Thói quen
@tip: Dùng 〜て います.
- 毎朝（まいあさ） 何（なに）を して いますか。 || Sáng nào bạn cũng làm gì?
  ? chạy bộ
  = ジョギングして います。 || Tôi chạy bộ.
  = 散歩（さんぽ）して います。 || Tôi đi dạo.
  + どこで？ || Ở đâu?
- 毎晩（まいばん） 何時（なんじ）に 寝（ね）て いますか。 || Tối bạn ngủ lúc mấy giờ?
  = 11時（じ）に 寝（ね）て います。 || 11 giờ.

## DIALOGUE D01 · Gặp lại bạn cũ
@scene: Ở ga.
@roles: A=ユキ; B=Bạn
A[ユキ]: 久（ひさ）しぶり！ || Lâu rồi không gặp!
B[あなた]: ＊うん、元気（げんき）。 || Ừ, khỏe.

## TALK T1 · Cuộc sống của tôi
@prompt: Nói 1 phút về cuộc sống bây giờ.
@must: 〜て います; 〜たり〜たり します
> 私（わたし）は 毎朝（まいあさ） 走（はし）って います。 || Sáng nào tôi cũng chạy.

## REFLEX · Hỏi đơn
- 暇（ひま）な とき、何（なに）を しますか。 || Khi rảnh bạn làm gì?
  ? な-Adj ＋ な とき
  = 暇（ひま）な とき、散歩（さんぽ）します。 || Tôi đi dạo.

## CHAIN C01 · Hỏi thăm
@scene: Ở hành lang.
- 今（いま）、どこに 住（す）んで いますか。 || Em sống ở đâu?
  = 寮（りょう）に 住（す）んで います。 || Em sống ở ký túc xá.
- 学校（がっこう）まで 何（なん）で 来（き）て いますか。 || Em đến trường bằng gì?
  = 自転車（じてんしゃ）で 来（き）て います。 || Bằng xe đạp.
`

describe('parseSpeaking', () => {
  const sp = parseSpeaking(md, 'b11')

  it('reads question sets with hints, answers and follow-ups', () => {
    expect(sp.sets).toHaveLength(1)
    const [q1, q2] = sp.sets[0]!.questions
    expect(sp.sets[0]!.tip).toBe('Dùng 〜て います.')
    expect(q1).toMatchObject({ id: 'b11-speak-5.1-1', vn: 'Sáng nào bạn cũng làm gì?', hint: 'chạy bộ', next: { jp: 'どこで？', vn: 'Ở đâu?' } })
    expect(q1!.answers).toHaveLength(2)
    expect(q2!.answers[0]).toEqual({ jp: '11時（じ）に 寝（ね）て います。', vn: '11 giờ.' })
  })

  it('marks ＊ lines as free answers', () => {
    const d = sp.dialogues[0]!
    expect(d.roles).toEqual({ A: 'ユキ', B: 'Bạn' })
    expect(d.lines[0]!.free).toBeUndefined()
    expect(d.lines[1]).toMatchObject({ jp: 'うん、元気（げんき）。', free: true })
  })

  it('reads talk topics', () => {
    expect(sp.talks[0]).toMatchObject({ prompt: 'Nói 1 phút về cuộc sống bây giờ.', must: ['〜て います', '〜たり〜たり します'] })
    expect(sp.talks[0]!.model).toHaveLength(1)
  })

  it('reads quick-answer questions and question chains', () => {
    expect(sp.reflex).toHaveLength(1)
    expect(sp.reflex[0]).toMatchObject({ id: 'b11-reflex-1', hint: 'な-Adj ＋ な とき' })
    expect(sp.chains).toHaveLength(1)
    expect(sp.chains[0]).toMatchObject({ id: 'b11-speak-c01', title: 'Hỏi thăm', scene: 'Ở hành lang.' })
    expect(sp.chains[0]!.questions.map((q) => q.id)).toEqual(['b11-speak-c01-1', 'b11-speak-c01-2'])
  })

  it('rejects a one-question chain', () => {
    expect(() => parseSpeaking('## CHAIN C01 · x\n- 何（なに）？ || Gì?\n  = これ。 || Cái này.\n', 'b11')).toThrow(DslError)
  })

  it('rejects a question without a model answer', () => {
    expect(() => parseSpeaking('## QA 1 · x\n- 何（なに）？ || Gì?\n', 'b11')).toThrow(DslError)
  })
})

describe('attachReadingQuestions', () => {
  const reading = (id: string) => ({ id, genre: '', title: '', titleVn: '', lines: [], gloss: [], questions: [] })
  const qs = (n: number) =>
    Array.from({ length: n }, (_, i) => `- 質問（しつもん）${i + 1}ですか。 || Câu hỏi ${i + 1}?\n  = はい、そうです。 || Vâng.`).join('\n')

  it('attaches 12 questions to the matching passage', () => {
    const out = attachReadingQuestions(`# b11\n\n## R02\n${qs(12)}\n`, [reading('b11-r01'), reading('b11-r02')], 'b11')
    expect(out[0]!.ask).toBeUndefined()
    expect(out[1]!.ask).toHaveLength(12)
    expect(out[1]!.ask![0]!.answers[0]!.jp).toBe('はい、そうです。')
  })

  it('rejects an unknown passage or the wrong number of questions', () => {
    expect(() => attachReadingQuestions(`## R09\n${qs(12)}`, [reading('b11-r01')], 'b11')).toThrow(DslError)
    expect(() => attachReadingQuestions(`## R01\n${qs(11)}`, [reading('b11-r01')], 'b11')).toThrow(/12/)
  })
})
