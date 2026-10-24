import { describe, expect, it } from 'vitest'
import { toHiragana } from 'wanakana'
import { isCorrect } from './normalize'

describe('isCorrect', () => {
  it('accepts kana typed (via romaji) for an answer written in kanji with readings', () => {
    expect(isCorrect(toHiragana('yomimasu'), ['読（よ）みます'])).toBe(true)
    expect(isCorrect('ともだちと あそびます', ['友達（ともだち）と 遊（あそ）びます。'])).toBe(true)
  })
  it('accepts the kanji form and mixes', () => {
    expect(isCorrect('読みます', ['読（よ）みます'])).toBe(true)
    expect(isCorrect('友だちと遊びます', ['友達（ともだち）と 遊（あそ）びます。'])).toBe(false)
    expect(isCorrect('ともだちと遊びます', ['友達（ともだち）と 遊（あそ）びます。'])).toBe(true)
  })
  it('rejects a wrong reading', () => {
    expect(isCorrect('よみました', ['読（よ）みます'])).toBe(false)
  })
})
