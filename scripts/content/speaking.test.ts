import { describe, expect, it } from 'vitest'
import { parseSpeaking } from './speaking'
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

  it('rejects a question without a model answer', () => {
    expect(() => parseSpeaking('## QA 1 · x\n- 何（なに）？ || Gì?\n', 'b11')).toThrow(DslError)
  })
})
