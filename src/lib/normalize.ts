import { parseFurigana, toHiragana } from './furigana'

const STRIP = /[\s、。，．,.!！?？「」『』・…‥"'“”‘’〜～*_()（）[\]［］/／:：;；—–-]/g

/** Normalize Japanese text for comparison: width, punctuation, spaces, katakana→hiragana. */
export function norm(s: string): string {
  return toHiragana(s.normalize('NFKC').replace(STRIP, '')).toLowerCase()
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Build a matcher that accepts the kanji form, the kana reading, or any mix of both. */
function answerRegex(answer: string): RegExp {
  const body = parseFurigana(answer)
    .map((s) => {
      const t = escapeRe(norm(s.t))
      if (s.r === undefined) return t
      const readings = s.r.split('／').map((r) => escapeRe(norm(r)))
      return `(?:${[t, ...readings].join('|')})`
    })
    .join('')
  return new RegExp(`^${body}$`)
}

export function isCorrect(input: string, answers: string[]): boolean {
  const n = norm(input)
  if (!n) return false
  return answers.some((a) => {
    try {
      return answerRegex(a).test(n)
    } catch {
      return norm(a) === n
    }
  })
}

/** Split an answer cell like `A ｜ B` into alternatives. */
export const splitAlternatives = (s: string) =>
  s
    .split(/[｜|]/)
    .map((x) => x.trim())
    .filter(Boolean)

/** Split on separators that are outside （…） so readings like 日（にち／か） stay whole. */
export function splitTopLevel(s: string, seps: string): string[] {
  const out: string[] = []
  let depth = 0
  let cur = ''
  for (const c of s) {
    if (c === '（') depth++
    if (c === '）') depth = Math.max(0, depth - 1)
    if (depth === 0 && seps.includes(c)) {
      out.push(cur)
      cur = ''
    } else cur += c
  }
  out.push(cur)
  return out.map((x) => x.trim()).filter(Boolean)
}
