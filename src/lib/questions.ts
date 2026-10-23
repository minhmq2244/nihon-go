// Builds practice questions from a unit's vocab and kanji tables.
import type { KanjiItem, Unit, VocabItem } from '../types'
import type { Question } from '../components/Drill'
import { parseFurigana, toBase, toReading } from './furigana'
import { sample, shuffle } from './data'
import { splitTopLevel } from './normalize'

export interface Card {
  id: string
  front: string // Japanese, furigana notation
  back: string
  extra?: string
  speak: string
}

const hasKanji = (s: string) => /[一-鿿々]/.test(s)

/** Main form of a vocab cell: "行きます（いきます）［行く］(I)" → "行きます（いきます）". */
export function vocabForm(jp: string): string {
  const cleaned = jp
    .replace(/［[^］]*］/g, '')
    .replace(/\((?:I|II|III|N|い|な)\)/g, '')
    .replace(/（\s*(?:します|な|の|に)\s*）$/, '')
  return splitTopLevel(cleaned, '／・↔')[0] ?? cleaned.trim()
}

/** Drop optional parts such as （お）, （します）, （＋PĐ） but keep furigana readings. */
const stripOptional = (f: string) =>
  parseFurigana(f)
    .map((s) => (s.r ? `${s.t}（${s.r}）` : s.t.replace(/（[^（）]*）/g, '')))
    .join('')
    .trim()

/** All accepted ways of writing a vocab word. */
export function vocabAnswers(jp: string): string[] {
  const cleaned = jp.replace(/［[^］]*］/g, '').replace(/\((?:I|II|III|N|い|な)\)/g, '')
  const forms = splitTopLevel(cleaned, '／↔').map((f) => f.replace(/^〜/, '').trim())
  return [...new Set(forms.flatMap((f) => [f, stripOptional(f)]).filter(Boolean))]
}

export const vocabCards = (vocab: VocabItem[]): Card[] =>
  vocab.map((v) => ({ id: v.id, front: vocabForm(v.jp), back: v.meaning, extra: v.note, speak: vocabForm(v.jp) }))

export const kanjiCards = (kanji: KanjiItem[]): Card[] =>
  kanji.map((k) => ({
    id: k.id,
    front: k.char,
    back: `${k.hanviet}`,
    extra: [k.onkun, k.compounds.map((c) => `${c.jp} ${c.meaning}`).join(' · ')].filter(Boolean).join('\n'),
    speak: k.compounds[0]?.jp ?? k.char,
  }))

export function vocabV1(u: Unit): Question[] {
  return u.vocab.map((v) => ({
    id: `${v.id}:v1`,
    type: 'SHORT',
    stem: v.meaning,
    answers: vocabAnswers(v.jp),
  }))
}

export function vocabV2(u: Unit): Question[] {
  return u.vocab
    .filter((v) => hasKanji(vocabForm(v.jp)) && toReading(vocabForm(v.jp)) !== toBase(vocabForm(v.jp)))
    .map((v) => ({
      id: `${v.id}:v2`,
      type: 'SHORT',
      stem: toBase(vocabForm(v.jp)),
      answers: [toReading(vocabForm(v.jp))],
      hint: `Gõ cách đọc hiragana · nghĩa: ${v.meaning}`,
    }))
}

export function vocabV3(u: Unit): Question[] {
  return u.vocab.map((v) => ({
    id: `${v.id}:v3`,
    type: 'SHORT',
    stem: '',
    audio: vocabForm(v.jp),
    answers: vocabAnswers(v.jp),
    hint: 'Nghe và gõ lại từ (chữ Hán hoặc hiragana)',
  }))
}

export function meaningMC(cards: Card[], card: Card, idSuffix = 'mc'): Question {
  const others = sample(
    cards.filter((c) => c.back !== card.back),
    3,
  ).map((c) => c.back)
  const options = shuffle([card.back, ...others])
  return { id: `${card.id}:${idSuffix}`, type: 'MC', stem: card.front, options, correct: options.indexOf(card.back), answers: [] }
}

export function reverseMC(cards: Card[], card: Card): Question {
  const others = sample(
    cards.filter((c) => c.front !== card.front),
    3,
  ).map((c) => c.front)
  const options = shuffle([card.front, ...others])
  return { id: `${card.id}:rmc`, type: 'MC', stem: card.back, options, correct: options.indexOf(card.front), answers: [] }
}

export function kanjiK1(u: Unit): Question[] {
  return u.kanji.flatMap((k) =>
    k.compounds
      .filter((c) => toReading(c.jp) !== toBase(c.jp))
      .slice(0, 3)
      .map((c, i) => ({
        id: `${k.id}:k1:${i}`,
        type: 'SHORT' as const,
        stem: toBase(c.jp),
        answers: [toReading(c.jp)],
        hint: `Gõ cách đọc · ${c.meaning}`,
      })),
  )
}

export function kanjiK2(u: Unit): Question[] {
  const cards = kanjiCards(u.kanji)
  return cards.flatMap((c, i) => (i % 2 === 0 ? [reverseMC(cards, c)] : [{ ...meaningMC(cards, c, 'hv'), stem: c.front }]))
}

export function kanjiK3(u: Unit): Question[] {
  return u.confuse.flatMap((g, gi) =>
    g.chars.map((c, ci) => {
      const options = shuffle(g.chars.map((x) => x.char))
      return {
        id: `${u.meta.id}:k3:${gi}:${ci}`,
        type: 'MC' as const,
        stem: `Chữ nào là「${c.hanviet}」— ${c.meaning}?`,
        options,
        correct: options.indexOf(c.char),
        answers: [],
      }
    }),
  )
}

/** Mixed test over cards: meaning MC, reverse MC and typing. */
export function cardTest(cards: Card[], typing: Question[], n = 20): Question[] {
  const picked = sample(cards, Math.min(n, cards.length))
  return picked.map((c, i) => {
    if (i % 3 === 2) {
      const t = typing.find((q) => q.id.startsWith(c.id + ':'))
      if (t) return { ...t, id: `${c.id}:test` }
    }
    return i % 3 === 1 ? reverseMC(cards, c) : meaningMC(cards, c)
  })
}
