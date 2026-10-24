// Parses content/generated/verbs.md (detailed verb notes) and attaches them to vocabulary items.
import type { VerbDetail, VocabItem } from '../../src/types'
import { toBase } from '../../src/lib/furigana'
import { splitHeadings } from './markdown'

const list = (v: string | undefined) => (v ?? '').split(/\s*;\s*/).filter(Boolean)
const attr = (body: string, name: string) => new RegExp(`^@${name}:\s*(.+)$`, 'm').exec(body)?.[1]?.trim()

/** Plain lookup key: kanji form without readings, spaces or trailing notes like ［返す］(I). */
export const verbKey = (jp: string) => toBase(jp).replace(/\s+/g, '').replace(/[［(（\[].*$/, '')

export function parseVerbs(md: string): Map<string, VerbDetail> {
  const map = new Map<string, VerbDetail>()
  for (const sec of splitHeadings(md, 2).blocks) {
    const [dict = '', masu = ''] = sec.title.split(/\s*·\s*/)
    if (!attr(sec.body, 'meaning')) continue
    const d: VerbDetail = {
      dict,
      masu,
      type: attr(sec.body, 'type') ?? '',
      particles: list(attr(sec.body, 'particle')),
      meaning: attr(sec.body, 'meaning')!,
      patterns: list(attr(sec.body, 'pattern')),
      nuance: attr(sec.body, 'nuance'),
      compare: list(attr(sec.body, 'compare')),
      mistakes: list(attr(sec.body, 'mistake')),
      examples: sec.body
        .split(/\r?\n/)
        .filter((l) => /^-\s+/.test(l))
        .map((l) => {
          const [jp = '', vn = ''] = l.replace(/^-\s+/, '').split(/\s\|\|\s/)
          return { jp: jp.trim(), vn: vn.trim() }
        }),
    }
    for (const k of [verbKey(dict), verbKey(masu)]) if (k) map.set(k, d)
  }
  return map
}

/** Attach details by the vocab word itself or by the dictionary form written in its note. */
export function attachVerbs(vocab: VocabItem[], verbs: Map<string, VerbDetail>): VocabItem[] {
  return vocab.map((v) => {
    const dict = /Thể từ điển:\s*([^·]+)/.exec(v.note ?? '')?.[1]
    const detail = verbs.get(verbKey(v.jp)) ?? (dict ? verbs.get(verbKey(dict)) : undefined)
    return detail ? { ...v, detail } : v
  })
}
