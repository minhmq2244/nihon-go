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

/** Words of one vocab entry; each must appear (alternatives that only differ in kanji count once). */
function words(jp: string): { w: string; r: string }[] {
  const ws = written(jp).split(SEP)
  const rs = reading(jp).split(SEP)
  const dict = jp.match(/［([^］]*)］/)?.[1]
  const seen = new Set<string>()
  return ws
    .map((w, i) => ({ w: w.trim(), r: (rs[i] ?? w).trim() + (dict && ws.length === 1 ? '|' + written(dict) + '|' + reading(dict) : '') }))
    .filter(({ w, r }) => norm(w) && !seen.has(norm(r)) && seen.add(norm(r)))
}

export function missingVocab(vocab: VocabItem[], lines: Line[]): string[] {
  const text = lines.map((l) => l.jp).join('\n')
  const hay = [norm(written(text)), norm(reading(text))]
  const found = (k: string) => k.length > 0 && hay.some((h) => h.includes(k))
  return vocab
    .filter((v) =>
      words(v.jp).some(({ w, r }) => ![w, ...r.split('|')].some((x) => keys(x).some(found))),
    )
    .map((v) => v.jp)
}
