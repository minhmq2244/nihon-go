// Furigana in the source books is written inline as 漢字（かな）.
// This module turns that notation into segments usable for <ruby>, speech and answer checking.

export type Seg = { t: string; r?: string }

const KANJI = /[㐀-䶿一-鿿豈-﫿々〆ヶ0-9０-９]/
const READING = /^[ぁ-ゖァ-ヺー・／]+$/
const TOKEN_CHAR = /[㐀-䶿一-鿿豈-﫿々〆ヶ0-9０-９ぁ-ゖァ-ヺーA-Za-zＡ-Ｚａ-ｚ〜～]/
const MAX_TOKEN = 16

export function toHiragana(s: string): string {
  return s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Split `base` into kanji/kana runs and map each kanji run to its part of `reading`. */
function align(base: string, reading: string): Seg[] | null {
  const runs: { k: boolean; s: string }[] = []
  for (const ch of base) {
    const k = KANJI.test(ch)
    const last = runs[runs.length - 1]
    if (last && last.k === k) last.s += ch
    else runs.push({ k, s: ch })
  }
  if (!runs.some((r) => r.k)) return null
  const re = new RegExp('^' + runs.map((r) => (r.k ? '(.+?)' : escapeRe(toHiragana(r.s)))).join('') + '$', 'd')
  const m = re.exec(toHiragana(reading))
  if (!m || !m.indices) return null
  const out: Seg[] = []
  let g = 1
  for (const r of runs) {
    if (r.k) {
      const [a, b] = m.indices[g++]!
      out.push({ t: r.s, r: reading.slice(a, b) })
    } else out.push({ t: r.s })
  }
  return out
}

function pushPlain(out: Seg[], t: string) {
  if (!t) return
  const last = out[out.length - 1]
  if (last && last.r === undefined) last.t += t
  else out.push({ t })
}

export function parseFurigana(text: string): Seg[] {
  const out: Seg[] = []
  const re = /（([^（）]+)）/g
  let cursor = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    const inner = m[1]!
    if (!READING.test(inner)) continue
    const pre = text.slice(cursor, m.index)
    let start = pre.length
    while (start > 0 && pre.length - start < MAX_TOKEN && TOKEN_CHAR.test(pre[start - 1]!)) start--
    const token = pre.slice(start)
    let segs: Seg[] | null = null
    let i = 0
    for (; i < token.length; i++) {
      if (!KANJI.test(token[i]!)) continue
      segs = align(token.slice(i), inner)
      if (segs) break
    }
    if (!segs) continue
    pushPlain(out, pre.slice(0, start + i))
    for (const s of segs) {
      if (s.r === undefined) pushPlain(out, s.t)
      else out.push(s)
    }
    cursor = m.index + m[0].length
  }
  pushPlain(out, text.slice(cursor))
  return out
}

export const toBase = (text: string) => parseFurigana(text).map((s) => s.t).join('')
export const toReading = (text: string) => parseFurigana(text).map((s) => s.r ?? s.t).join('')

export function segsToHtml(segs: Seg[]): string {
  return segs.map((s) => (s.r === undefined ? s.t : `<ruby>${s.t}<rt>${s.r}</rt></ruby>`)).join('')
}

/** Apply furigana to the text nodes of an HTML string (tags are left untouched). */
export function furiganaHtml(html: string): string {
  return html
    .split(/(<[^>]+>)/)
    .map((part) => (part.startsWith('<') ? part : segsToHtml(parseFurigana(part))))
    .join('')
}
