// Luyện phản xạ: build "hear this form → say that form" items from a unit's own verbs, adjectives and nouns.
// Each kind unlocks at the unit where its grammar is taught, so a unit only drills what has been learned.
import type { Unit, UnitMeta } from '../types'
import { toBase } from './furigana'
import { conjugateVerb } from './verbConjugation'

export type ReflexKind =
  | 'neg'
  | 'past'
  | 'tai'
  | 'sasoi'
  | 'kudasai'
  | 'teiru'
  | 'temoii'
  | 'dekiru'
  | 'naide'
  | 'plain'
  | 'plainPattern'
  | 'polite'

export interface ReflexItem {
  id: string
  kind: ReflexKind
  /** What you hear (furigana notation). */
  from: string
  /** What you should say; first is the model, the rest are also fine. */
  to: string[]
  /** Short Vietnamese cue: what to turn it into. */
  cue: string
}

/** b01..b11 → 1..11, cd00..cd09 → 12..21. */
export const unitOrder = (m: Pick<UnitMeta, 'kind' | 'num'>) => (m.kind === 'bai' ? m.num : 12 + m.num)

export const REFLEX_KINDS: { id: ReflexKind; label: string; cue: string; from: number; example: string }[] = [
  { id: 'neg', label: 'Khẳng định → Phủ định', cue: 'Phủ định', from: 1, example: '学生です → 学生じゃ ありません' },
  { id: 'past', label: 'Hiện tại → Quá khứ', cue: 'Quá khứ', from: 5, example: '行きます → 行きました' },
  { id: 'tai', label: 'V-ます → V-たいです', cue: 'Muốn ~ (たいです)', from: 5, example: '食べます → 食べたいです' },
  { id: 'sasoi', label: 'V-ます → V-ませんか', cue: 'Rủ rê (ませんか)', from: 6, example: '行きます → 行きませんか' },
  { id: 'kudasai', label: 'V-ます → V-て ください', cue: 'Nhờ (て ください)', from: 7, example: '待ちます → 待って ください' },
  { id: 'teiru', label: 'V-ます → V-て います', cue: 'Đang ~ (て います)', from: 7, example: '読みます → 読んで います' },
  { id: 'temoii', label: 'V-ます → V-ても いいですか', cue: 'Xin phép (ても いいですか)', from: 7, example: '座ります → 座っても いいですか' },
  { id: 'dekiru', label: 'V-ます → V-る ことが できます', cue: 'Có thể (ことが できます)', from: 9, example: '泳ぎます → 泳ぐ ことが できます' },
  { id: 'naide', label: 'V-ます → V-ないで ください', cue: 'Đừng ~ (ないで ください)', from: 10, example: '吸います → 吸わないで ください' },
  { id: 'plain', label: 'Lịch sự → Thông thường', cue: 'Thông thường', from: 11, example: '行きませんでした → 行かなかった' },
  { id: 'plainPattern', label: 'Mẫu câu → Thông thường', cue: 'Thông thường', from: 11, example: '待って ください → 待って' },
  { id: 'polite', label: 'Thông thường → Lịch sự', cue: 'Lịch sự', from: 11, example: '行かなかった → 行きませんでした' },
]

export const availableKinds = (meta: Pick<UnitMeta, 'kind' | 'num'>) => REFLEX_KINDS.filter((k) => k.from <= unitOrder(meta))

// ---------- words of the unit ----------

interface Verb {
  dict: string
  masu: string
  type?: string
  /** Sentence start before the verb, taken from an example in the present tense. */
  prefix?: string
}
interface Word {
  w: string
}

/** Polite / plain forms of one predicate in the 4 tense × polarity slots. */
interface Forms {
  polite: [string, string, string, string] // KĐ, PĐ, QK KĐ, QK PĐ
  plain: [string, string, string, string]
}

const END = /。$/

/** Present-tense example sentence start ("毎朝 7時に ") so drills sound like real sentences. */
function examplePrefix(masu: string, examples: { jp: string }[]): string | undefined {
  const stem = masu.replace(/ます$/, '')
  for (const e of examples) {
    const jp = e.jp.trim().replace(END, '')
    for (const end of ['ます', 'ません']) {
      if (jp.endsWith(stem + end)) {
        const pre = jp.slice(0, jp.length - stem.length - end.length)
        // skip sentences that only make sense in the past, or join two clauses
        if (/昨日|きのう|先週|去年|さっき|、.*て /.test(toBase(pre))) continue
        if (pre.length > 28) continue
        return pre
      }
    }
  }
  return undefined
}

function unitVerbs(unit: Unit): Verb[] {
  const out = new Map<string, Verb>()
  for (const v of unit.verbs ?? []) {
    out.set(toBase(v.dict), { dict: v.dict, masu: v.masu, type: v.type, prefix: examplePrefix(v.masu, v.examples) })
  }
  // vocab written as "遊（あそ）びます［遊（あそ）ぶ］（Nhóm I）"
  for (const it of unit.vocab) {
    const m = /^([^［\s〜]+ます)［([^］]+)］(?:（(Nhóm [I]+)）)?$/.exec(it.jp.trim())
    if (m && !out.has(toBase(m[2]!))) out.set(toBase(m[2]!), { dict: m[2]!, masu: m[1]!, type: m[3] })
  }
  return [...out.values()].filter((v) => /ます$/.test(v.masu) && /[うくぐすつぬぶむる]$/.test(toBase(v.dict)))
}

function unitAdjectives(unit: Unit): { i: Word[]; na: Word[] } {
  const i: Word[] = []
  const na: Word[] = []
  for (const it of unit.vocab) {
    const jp = it.jp.trim().replace(/^（〜[^）]*）/, '')
    if (jp.includes('〜') || /ます|です/.test(jp)) continue
    if (jp.endsWith('（な）')) {
      na.push({ w: jp.slice(0, -3) })
      continue
    }
    const adjGroup = /tính từ|adj/i.test(it.group)
    const base = toBase(jp.replace(/（よい）$/, ''))
    if (adjGroup && base.endsWith('い')) i.push({ w: jp.replace(/（よい）$/, '') })
  }
  return { i, na }
}

function unitNouns(unit: Unit): Word[] {
  return unit.vocab
    .filter((it) => !/động từ|tính từ|phó từ|từ để hỏi|liên từ|trợ từ/i.test(it.group))
    .map((it) => it.jp.trim())
    .filter((jp) => {
      const base = toBase(jp)
      return (
        /[一-鿿゠-ヿ]/.test(base) &&
        !/[〜～\s？?。！!・／/]/.test(jp) &&
        !/(ます|ません|ました|です|か|ね|よ|て|い|な)$/.test(base) &&
        base.length <= 7
      )
    })
    .map((w) => ({ w }))
}

// ---------- forms ----------

function verbForms(v: Verb): Forms & { f: ReturnType<typeof conjugateVerb> } {
  const f = conjugateVerb(v)
  const naiStem = f.nai.text.replace(/い$/, '')
  return {
    f,
    polite: [f.masu.text, f.masuNeg.text, f.masuPast.text, f.masuPastNeg.text],
    plain: [f.dict.text, f.nai.text, f.ta.text, naiStem + 'かった'],
  }
}

function iAdjForms(w: string): Forms {
  // いい／かっこいい conjugate from よい
  const stem = toBase(w).endsWith('いい') ? w.slice(0, -2) + 'よ' : w.slice(0, -1)
  return {
    polite: [w + 'です', stem + 'くないです', stem + 'かったです', stem + 'くなかったです'],
    plain: [w, stem + 'くない', stem + 'かった', stem + 'くなかった'],
  }
}

function naForms(w: string): Forms {
  return {
    polite: [w + 'です', w + 'じゃ ありません', w + 'でした', w + 'じゃ ありませんでした'],
    plain: [w + 'だ', w + 'じゃ ない', w + 'だった', w + 'じゃ なかった'],
  }
}

// ---------- items ----------

const dot = (s: string) => s + '。'
const ask = (s: string) => s + '？'

type Pair = [from: string, to: string[]]

/** Polite ⇄ plain pairs for one predicate (statements + questions). Questions drop か and だ. */
function plainPairs(fm: Forms, pre: string, isNoun: boolean): Pair[] {
  const out: Pair[] = []
  for (let k = 0; k < 4; k++) out.push([dot(pre + fm.polite[k]), [dot(pre + fm.plain[k])]])
  // questions: present KĐ and past KĐ
  const q0 = isNoun ? fm.plain[0].replace(/だ$/, '') : fm.plain[0]
  out.push([pre + fm.polite[0] + 'か。', [ask(pre + q0)]])
  out.push([pre + fm.polite[2] + 'か。', [ask(pre + fm.plain[2])]])
  return out
}

/** Prefix for requests / wishes / invitations: only when it has no subject of its own (犬が, 授業は…). */
const patternPrefix = (v: Verb) => (v.prefix && !/[はが](\s|$)/.test(toBase(v.prefix)) ? v.prefix : '')

function patternPairs(v: Verb): Pair[] {
  const { f } = verbForms(v)
  const pre = patternPrefix(v)
  const te = f.te.text
  return [
    [dot(pre + te + ' ください'), [dot(pre + te)]],
    [dot(pre + te + ' います'), [dot(pre + te + ' いる'), dot(pre + te + 'る')]],
    [dot(pre + te + ' いません'), [dot(pre + te + ' いない'), dot(pre + te + 'ない')]],
    [pre + te + 'も いいですか。', [ask(pre + te + 'も いい')]],
    [pre + f.masu.text.replace(/ます$/, 'ませんか') + '。', [ask(pre + f.nai.text)]],
    [dot(pre + f.nai.text + 'で ください'), [dot(pre + f.nai.text + 'で')]],
    [dot(pre + f.tai.text + 'です'), [dot(pre + f.tai.text)]],
    [dot(pre + f.dict.text + ' ことが できます'), [dot(pre + f.dict.text + ' ことが できる')]],
    [dot(pre + f.dict.text + ' ことが できません'), [dot(pre + f.dict.text + ' ことが できない')]],
  ]
}

export function buildReflexItems(unit: Unit, kinds: ReflexKind[]): ReflexItem[] {
  const order = unitOrder(unit.meta)
  const verbs = order >= 3 ? unitVerbs(unit) : []
  const adj = order >= 4 ? unitAdjectives(unit) : { i: [], na: [] }
  const nouns = unitNouns(unit)
  const pastOk = order >= 5
  const items: ReflexItem[] = []
  const push = (kind: ReflexKind, key: string, from: string, to: string[]) => {
    const meta = REFLEX_KINDS.find((k) => k.id === kind)!
    items.push({ id: `${unit.meta.id}:rx:${kind}:${key}`, kind, from, to, cue: meta.cue })
  }

  const preds: { key: string; fm: Forms; pre: string; noun: boolean }[] = [
    ...verbs.map((v) => ({ key: toBase(v.dict), fm: verbForms(v), pre: v.prefix ?? '', noun: false })),
    ...adj.i.map((a) => ({ key: toBase(a.w), fm: iAdjForms(a.w), pre: '', noun: false })),
    ...adj.na.map((a) => ({ key: toBase(a.w), fm: naForms(a.w), pre: '', noun: true })),
    ...nouns.map((n) => ({ key: toBase(n.w), fm: naForms(n.w), pre: '', noun: true })),
  ]

  for (const kind of kinds) {
    if (!availableKinds(unit.meta).some((k) => k.id === kind)) continue
    for (const p of preds) {
      const { polite } = p.fm
      if (kind === 'neg') {
        push(kind, `${p.key}:0`, dot(p.pre + polite[0]), [dot(p.pre + polite[1])])
        if (pastOk) push(kind, `${p.key}:2`, dot(p.pre + polite[2]), [dot(p.pre + polite[3])])
      } else if (kind === 'past') {
        push(kind, `${p.key}:0`, dot(p.pre + polite[0]), [dot(p.pre + polite[2])])
        push(kind, `${p.key}:1`, dot(p.pre + polite[1]), [dot(p.pre + polite[3])])
      } else if (kind === 'plain' || kind === 'polite') {
        plainPairs(p.fm, p.pre, p.noun).forEach(([from, to], i) =>
          kind === 'plain' ? push(kind, `${p.key}:${i}`, from, to) : push(kind, `${p.key}:${i}`, to[0]!, [from]),
        )
      }
    }
    for (const v of verbs) {
      const key = toBase(v.dict)
      if (key === 'ある') continue // no request / wish / invitation forms
      const { f } = verbForms(v)
      const pre = patternPrefix(v)
      const masu = dot(pre + f.masu.text)
      if (kind === 'tai') push(kind, key, masu, [dot(pre + f.tai.text + 'です')])
      else if (kind === 'sasoi') push(kind, key, masu, [pre + f.masu.text.replace(/ます$/, 'ませんか') + '。'])
      else if (kind === 'kudasai') push(kind, key, masu, [dot(pre + f.te.text + ' ください')])
      else if (kind === 'teiru') push(kind, key, masu, [dot(pre + f.te.text + ' います')])
      else if (kind === 'temoii') push(kind, key, masu, [pre + f.te.text + 'も いいですか。'])
      else if (kind === 'dekiru') push(kind, key, masu, [dot(pre + f.dict.text + ' ことが できます')])
      else if (kind === 'naide') push(kind, key, masu, [dot(pre + f.nai.text + 'で ください')])
      else if (kind === 'plainPattern' || kind === 'polite') {
        patternPairs(v).forEach(([from, to], i) =>
          kind === 'plainPattern' ? push(kind, `${key}:p${i}`, from, to) : push(kind, `${key}:p${i}`, to[0]!, [from]),
        )
      }
    }
  }
  return items
}
