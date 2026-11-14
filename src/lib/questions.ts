// Builds practice questions from a unit's vocab and kanji tables.
import type { KanjiItem, Unit, VocabItem, VerbDetail } from '../types'
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
  verbDetail?: VerbDetail
}

const hasKanji = (s: string) => /[一-鿿々]/.test(s)

/** Clean auxiliary markers from Japanese text for normalized comparison. */
const cleanVerbMatchKey = (s: string) =>
  s
    .replace(/［[^］]*］/g, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/（[^）]*）/g, '')
    .replace(/[〜～・／\s]/g, '')
    .trim()

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
export function vocabAnswers(jp: string, rawJp?: string): string[] {
  const sources = [jp, ...(rawJp && rawJp !== jp ? [rawJp] : [])]
  const allForms = sources.flatMap((source) => {
    const cleaned = source.replace(/［[^］]*］/g, '').replace(/\((?:I|II|III|N|い|な)\)/g, '')
    const forms = splitTopLevel(cleaned, '／↔').map((f) => f.replace(/^〜/, '').trim())
    return forms.flatMap((f) => [f, stripOptional(f)]).filter(Boolean)
  })
  return [...new Set(allForms)]
}

export const vocabCards = (vocab: VocabItem[], verbs?: VerbDetail[]): Card[] => {
  // Build lookup index from unit.verbs if available
  const verbIndex = new Map<string, VerbDetail>()
  if (verbs && verbs.length > 0) {
    for (const vd of verbs) {
      const keys = [
        cleanVerbMatchKey(toBase(vd.dict)),
        cleanVerbMatchKey(toReading(vd.dict)),
        cleanVerbMatchKey(toBase(vd.masu)),
        cleanVerbMatchKey(toReading(vd.masu)),
      ]
      if (vd.dict.endsWith('する')) {
        const stem = vd.dict.replace(/する$/, '')
        keys.push(cleanVerbMatchKey(toBase(stem)), cleanVerbMatchKey(toReading(stem)))
      }
      for (const k of keys) {
        if (k && k.length >= 2) {
          verbIndex.set(k, vd)
        }
      }
    }
  }

  return vocab.map((v) => {
    const front = vocabForm(v.jp)
    let vd: VerbDetail | undefined
    if (verbs && verbs.length > 0) {
      const k1 = cleanVerbMatchKey(toBase(v.jp))
      const k2 = cleanVerbMatchKey(toReading(v.jp))
      const k3 = cleanVerbMatchKey(toBase(front))
      const k4 = cleanVerbMatchKey(toReading(front))
      vd = verbIndex.get(k1) || verbIndex.get(k2) || verbIndex.get(k3) || verbIndex.get(k4)

      if (!vd) {
        for (const candidate of verbs) {
          const cDict = cleanVerbMatchKey(toBase(candidate.dict))
          const cMasu = cleanVerbMatchKey(toBase(candidate.masu))
          if (cDict && (k1.includes(cDict) || cDict.includes(k1))) {
            vd = candidate
            break
          }
          if (cMasu && (k1.includes(cMasu) || cMasu.includes(k1))) {
            vd = candidate
            break
          }
        }
      }
    }

    return {
      id: v.id,
      front,
      back: v.meaning,
      extra: v.note,
      speak: front,
      verbDetail: vd,
    }
  })
}

export const kanjiCharCards = (kanji: KanjiItem[]): Card[] =>
  kanji.map((k) => ({
    id: k.id,
    front: k.char,
    back: `${k.hanviet}`,
    speak: k.compounds[0]?.jp ?? k.char,
  }))

export const kanjiCompoundCards = (kanji: KanjiItem[]): Card[] => {
  const cards: Card[] = []
  const seen = new Map<string, Card>()

  for (const k of kanji) {
    for (let i = 0; i < k.compounds.length; i++) {
      const comp = k.compounds[i]!
      const key = comp.jp.trim()
      const existing = seen.get(key)
      if (existing) {
        const kanjiTag = `${k.char} (${k.hanviet})`
        if (existing.extra && !existing.extra.includes(k.char)) {
          existing.extra += ` · ${kanjiTag}`
        }
        continue
      }

      const card: Card = {
        id: `${k.id}:comp:${i}`,
        front: comp.jp,
        back: comp.meaning,
        extra: `Chữ Hán: ${k.char} (${k.hanviet})`,
        speak: comp.jp,
      }
      seen.set(key, card)
      cards.push(card)
    }
  }

  return cards
}

export const kanjiCards = (kanji: KanjiItem[]): Card[] => {
  const cards: Card[] = []
  const seenCompounds = new Map<string, Card>()

  for (const k of kanji) {
    // 1. Single character card: only Hán-Việt meaning
    cards.push({
      id: k.id,
      front: k.char,
      back: `${k.hanviet}`,
      speak: k.compounds[0]?.jp ?? k.char,
    })

    // 2. Its compound cards
    for (let i = 0; i < k.compounds.length; i++) {
      const comp = k.compounds[i]!
      const key = comp.jp.trim()
      const existing = seenCompounds.get(key)
      if (existing) {
        const kanjiTag = `${k.char} (${k.hanviet})`
        if (existing.extra && !existing.extra.includes(k.char)) {
          existing.extra += ` · ${kanjiTag}`
        }
        continue
      }
      const compCard: Card = {
        id: `${k.id}:comp:${i}`,
        front: comp.jp,
        back: comp.meaning,
        extra: `Chữ Hán: ${k.char} (${k.hanviet})`,
        speak: comp.jp,
      }
      seenCompounds.set(key, compCard)
      cards.push(compCard)
    }
  }

  return cards
}

export function vocabV1(u: Unit): Question[] {
  return u.vocab.map((v) => ({
    id: `${v.id}:v1`,
    type: 'SHORT',
    stem: v.meaning,
    answers: vocabAnswers(v.jp, v.rawJp),
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
    answers: vocabAnswers(v.jp, v.rawJp),
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
  const cards = kanjiCharCards(u.kanji)
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
/** Every self-contained question of a unit (used by the global review page). */
export function allQuestions(u: Unit): Question[] {
  const g = u.generated
  return [
    ...vocabV1(u),
    ...vocabV2(u),
    ...vocabV3(u),
    ...kanjiK1(u),
    ...kanjiK3(u),
    ...(g.vocabCloze.flatMap((s) => s.items) as Question[]),
    ...(g.kanji.flatMap((s) => s.items) as Question[]),
    ...(g.grammar.flatMap((p) => p.sets.flatMap((s) => s.items)) as Question[]),
    ...(g.writing.flatMap((s) => s.items) as Question[]),
  ]
}

export const unitOfItem = (id: string) => /^(b\d\d|cd\d\d)/.exec(id)?.[1]
