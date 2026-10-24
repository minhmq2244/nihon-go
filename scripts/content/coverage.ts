// Vocabulary coverage: which words of a unit never appear in its readings / listenings.
import type { Line, VocabItem } from '../../src/types'

const KANA = '[ぁ-んァ-ヶー]'
const READING_PAREN = new RegExp(`（(${KANA}+(?:／${KANA}+)*)）`, 'g')
const SEP = /↔|／|\/|・|─+▶/

/** Written form: drop readings, then notes like （例：…）, （＋PĐ）, ［dict form］, (II). */
const written = (s: string) => dropNotes(s.replace(READING_PAREN, ''))
/** Reading form: 走（はし）ります → はしります (first reading when several). */
const reading = (s: string) =>
  dropNotes(s.replace(new RegExp(`[\\u4e00-\\u9fff々〆]+（(${KANA}+)(?:／${KANA}+)*）`, 'g'), '$1').replace(READING_PAREN, ''))

function dropNotes(s: string): string {
  // a slot like （〜は） splits the phrase: すみません。（〜は）ちょっと…… needs both halves
  let out = s.replace(/［[^］]*］/g, '').replace(/\((?:I|II|III)\)/g, '').replace(/^\*?\([^)]*\)\*?/, '').replace(/（〜[^（）]*）/g, '・')
  for (let prev = ''; prev !== out; ) [prev, out] = [out, out.replace(/（[^（）]*）/g, '')]
  return out
}

/** Text normalised for matching: no spaces, punctuation, brackets or 〜. */
const norm = (s: string) => s.replace(/[\s　〜~*。、！？!?…「」『』［］.,]/g, '').replace(/(^|[^A-Za-z])N$/, '$1')

/** Substrings that show a word was used, covering conjugation (通います → 通い / 通). */
function keys(word: string): string[] {
  const w = norm(word)
  if (!w) return []
  const out = [w]
  const verb = w.match(/^(.*)ます$/)
  if (verb) {
    const st = verb[1]!.replace(/を?し$/, '')
    out.push(st)
    const m = st.match(/^(.*[一-鿿々])[ぁ-ん]$/)
    if (m) out.push(m[1]!)
  } else if (/[一-鿿々][ぁ-ん]*い$/.test(w)) out.push(w.slice(0, -1))
  return out
}

/**
 * Words of one vocab entry, each with the forms that count as using it (the ［dictionary form］ too).
 * Every word must appear; alternatives read the same (〜歳／〜才) count once.
 */
function words(jp: string): string[][] {
  const ws = written(jp).split(SEP)
  const rs = reading(jp).split(SEP)
  const dict = jp.match(/［([^］]*)］/)?.[1]
  const byReading = new Map<string, string[]>()
  ws.forEach((w, i) => {
    if (!norm(w)) return
    const r = norm(rs[i] ?? w)
    byReading.set(r, [...(byReading.get(r) ?? []), w.trim()])
  })
  return [...byReading.values()].map((forms) => (dict && ws.length === 1 ? [...forms, written(dict)] : forms))
}

export function missingVocab(vocab: VocabItem[], lines: Line[]): string[] {
  // written text only (a reading like おとし would match お年（とし）), lines kept apart by ｜
  const hay = norm(written(lines.map((l) => l.jp).join('｜')))
  const used = (forms: string[]) => forms.some((f) => keys(f).some((k) => hay.includes(k)))
  return vocab.filter((v) => !words(v.jp).every(used)).map((v) => v.jp)
}
