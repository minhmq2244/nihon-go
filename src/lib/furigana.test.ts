import { describe, expect, it } from 'vitest'
import { furiganaHtml, parseFurigana, toBase, toReading } from './furigana'
import { isCorrect, norm } from './normalize'

describe('parseFurigana', () => {
  it('attaches the reading to the kanji run before the parenthesis', () => {
    expect(parseFurigana('お名前（なまえ）は？')).toEqual([{ t: 'お' }, { t: '名前', r: 'なまえ' }, { t: 'は？' }])
  })

  it('handles okurigana inside the reading', () => {
    expect(parseFurigana('同じですね（おなじですね）')).toEqual([{ t: '同', r: 'おな' }, { t: 'じですね' }])
    expect(toReading('優（やさ）しい')).toBe('やさしい')
  })

  it('treats digits as part of the base', () => {
    expect(parseFurigana('20才（はたち）です')).toEqual([{ t: '20才', r: 'はたち' }, { t: 'です' }])
  })

  it('ignores blanks, choices and non-kana parentheses', () => {
    const s = '私は（アン ／ アンさん）です。→（        ）'
    expect(parseFurigana(s)).toEqual([{ t: s }])
    expect(toBase('（どうぞ）よろしく')).toBe('（どうぞ）よろしく')
  })

  it('works on nested parentheses and katakana bases', () => {
    expect(toBase('いいえ（会社員（かいしゃいん）です。）')).toBe('いいえ（会社員です。）')
    expect(parseFurigana('ベトナム人（じん）')).toEqual([{ t: 'ベトナム' }, { t: '人', r: 'じん' }])
  })

  it('renders ruby inside html text nodes only', () => {
    expect(furiganaHtml('<td class="a">国（くに）</td>')).toBe('<td class="a"><ruby>国<rt>くに</rt></ruby></td>')
  })
})

describe('isCorrect', () => {
  it('accepts kanji, kana, or a mix', () => {
    const ans = ['私（わたし）は 学生（がくせい）です。']
    expect(isCorrect('私は学生です', ans)).toBe(true)
    expect(isCorrect('わたしはがくせいです', ans)).toBe(true)
    expect(isCorrect('わたしは学生です。', ans)).toBe(true)
    expect(isCorrect('わたしはせんせいです', ans)).toBe(false)
  })

  it('folds katakana and width', () => {
    expect(norm('ＴＶ　テレビ')).toBe('tvてれび')
    expect(isCorrect('てれび', ['テレビ'])).toBe(true)
  })
})
