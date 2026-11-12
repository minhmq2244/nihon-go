import { describe, expect, it } from 'vitest'
import { areAllKanjiLearned, filterVocabWord } from './vocabFilter'

describe('vocabFilter', () => {
  // Bài 1 learned Kanji: 私 人 才 学 生 先 校 大 日 本 語 誕
  const b01Kanji = new Set('私 人 才 学 生 先 校 大 日 本 語 誕'.split(' '))

  it('checks areAllKanjiLearned correctly', () => {
    expect(areAllKanjiLearned('私（わたし）', b01Kanji)).toBe(true)
    expect(areAllKanjiLearned('日本（にほん）', b01Kanji)).toBe(true)
    expect(areAllKanjiLearned('大学（だいがく）', b01Kanji)).toBe(true)
    expect(areAllKanjiLearned('高校（こうこう）', b01Kanji)).toBe(false) // '高' not learned
    expect(areAllKanjiLearned('名前（なまえ）', b01Kanji)).toBe(false)
    expect(areAllKanjiLearned('アメリカ', b01Kanji)).toBe(true) // No kanji
  })

  it('keeps words whose Kanji are all learned in the current cumulative set', () => {
    expect(filterVocabWord('私（わたし）', b01Kanji)).toBe('私（わたし）')
    expect(filterVocabWord('日本（にほん）', b01Kanji)).toBe('日本（にほん）')
    expect(filterVocabWord('大学（だいがく）', b01Kanji)).toBe('大学（だいがく）')
    expect(filterVocabWord('日本語学校（にほんごがっこう）', b01Kanji)).toBe('日本語学校（にほんごがっこう）')
    expect(filterVocabWord('先生（せんせい）', b01Kanji)).toBe('先生（せんせい）')
    expect(filterVocabWord('学生（がくせい）', b01Kanji)).toBe('学生（がくせい）')
    expect(filterVocabWord('大学生（だいがくせい）', b01Kanji)).toBe('大学生（だいがくせい）')
    expect(filterVocabWord('〜人（じん）', b01Kanji)).toBe('〜人（じん）')
    expect(filterVocabWord('〜語（ご）', b01Kanji)).toBe('〜語（ご）')
    expect(filterVocabWord('誕生日（たんじょうび）', b01Kanji)).toBe('誕生日（たんじょうび）')
  })

  it('converts words with unlearned Kanji to plain phonetic reading', () => {
    expect(filterVocabWord('名前（なまえ）', b01Kanji)).toBe('なまえ')
    expect(filterVocabWord('お名前（なまえ）', b01Kanji)).toBe('おなまえ')
    expect(filterVocabWord('国（くに）', b01Kanji)).toBe('くに')
    expect(filterVocabWord('お国（くに）', b01Kanji)).toBe('おくに')
    expect(filterVocabWord('韓国（かんこく）', b01Kanji)).toBe('かんこく')
    expect(filterVocabWord('中国（ちゅうごく）', b01Kanji)).toBe('ちゅうごく')
    expect(filterVocabWord('仕事（しごと）', b01Kanji)).toBe('しごと')
    expect(filterVocabWord('お仕事（しごと）', b01Kanji)).toBe('おしごと')
    expect(filterVocabWord('教師（きょうし）', b01Kanji)).toBe('きょうし')
    expect(filterVocabWord('会社員（かいしゃいん）', b01Kanji)).toBe('かいしゃいん')
    expect(filterVocabWord('社員（しゃいん）', b01Kanji)).toBe('しゃいん')
  })

  it('converts compound words with partial unlearned Kanji completely to hiragana', () => {
    // 高校: '校' is learned in b01, but '高' is not (learned in b08)
    expect(filterVocabWord('高校（こうこう）', b01Kanji)).toBe('こうこう')
    // 英語: '語' is learned in b01, but '英' is not (learned in cd01)
    expect(filterVocabWord('英語（えいご）', b01Kanji)).toBe('えいご')
  })

  it('handles slash alternatives and deduplicates identical readings', () => {
    // 〜歳（さい）／〜才（さい）: '才' learned in b01, '歳' not learned
    expect(filterVocabWord('〜歳（さい）／〜才（さい）', b01Kanji)).toBe('〜さい／〜才（さい）')

    // 何歳（なんさい）／何才（なんさい）: neither '何' nor '歳' learned in b01
    expect(filterVocabWord('何歳（なんさい）／何才（なんさい）', b01Kanji)).toBe('なんさい')

    // In b03: '何' learned in b03, '才' learned in b01
    const b03Kanji = new Set([...b01Kanji, ...'月 火 水 木 金 土 曜 何 年 時 間 分'.split(' ')])
    expect(filterVocabWord('何歳（なんさい）／何才（なんさい）', b03Kanji)).toBe('なんさい／何才（なんさい）')
  })

  it('handles verbs and dictionary form bracketed notations', () => {
    const b05Kanji = new Set('食 飲 買 行 見 休 物 週 毎 午 後'.split(' '))
    // 会: taught in b06, not b05
    expect(filterVocabWord('会（あ）います', b05Kanji)).toBe('あいます')
    expect(filterVocabWord('［会（あ）う］', b05Kanji)).toBe('［あう］')

    // 食 & 物: taught in b05
    expect(filterVocabWord('食べ物（たべもの）', b05Kanji)).toBe('食べ物（たべもの）')
    expect(filterVocabWord('買（か）い物（もの）します', b05Kanji)).toBe('買（か）い物（もの）します')

    // 食事します: '事' taught in cd06, not b05
    expect(filterVocabWord('食事（しょくじ）します', b05Kanji)).toBe('しょくじします')
  })

  it('handles phrases with spaces', () => {
    // "私の 趣味（しゅみ）は 料理（りょうり）です。" -> '私' learned, '趣味' & '料理' not
    expect(filterVocabWord('私の 趣味（しゅみ）は 料理（りょうり）です。', b01Kanji)).toBe('私の しゅみは りょうりです。')
    expect(filterVocabWord('お国（くに）は どちらですか。', b01Kanji)).toBe('おくには どちらですか。')
    expect(filterVocabWord('（どうぞ）よろしく お願い（ねがい）します', b01Kanji)).toBe('（どうぞ）よろしく おねがいします')
  })

  it('handles bullet lists and opposites', () => {
    expect(filterVocabWord('軽（かる）い ↔ 重（おも）い', b01Kanji)).toBe('かるい ↔ おもい')
  })
})

