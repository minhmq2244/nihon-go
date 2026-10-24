// Parses content/generated/verbs.md (detailed verb notes) and inserts them into the theory
// vocabulary tables: under each verb row, an expandable row with particles, usage and 3 examples.
import type { VerbDetail } from '../../src/types'
import { toBase } from '../../src/lib/furigana'
import { renderInline, splitHeadings } from './markdown'

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
    // する-verbs are often listed as just the noun: 結婚（けっこん）（します）
    const stem = /する$/.test(verbKey(dict)) ? verbKey(dict).replace(/する$/, '') : ''
    const aliases = (attr(sec.body, 'alias') ?? '').split(/\s*[;,、]\s*/).map(verbKey)
    for (const k of [verbKey(dict), verbKey(masu), stem, ...aliases]) if (k) map.set(k, d)
  }
  return map
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const ul = (title: string, items: string[], cls = '') =>
  items.length ? `<p class="vd-h ${cls}">${title}</p><ul>${items.map((x) => `<li>${renderInline(x)}</li>`).join('')}</ul>` : ''

function detailHtml(d: VerbDetail): string {
  return [
    `<details class="vd"><summary>📘 Chi tiết ${renderInline(d.dict)} — trợ từ đi kèm, cách dùng, lỗi hay gặp, 3 ví dụ</summary><div class="vd-body">`,
    `<p class="vd-type">${renderInline(d.dict)} · ${renderInline(d.masu)} · ${renderInline(d.type)}</p>`,
    `<div class="vd-particle"><p class="vd-h">Trợ từ đi kèm（に・を・が…）</p><ul>${d.particles.map((p) => `<li>${renderInline(p)}</li>`).join('')}</ul></div>`,
    `<p class="vd-h">Nghĩa và cách dùng</p><p>${renderInline(d.meaning)}</p>`,
    ul('Mẫu câu', d.patterns),
    d.nuance ? `<p class="vd-h">Sắc thái, lưu ý</p><p>${renderInline(d.nuance)}</p>` : '',
    ul('Phân biệt với từ dễ nhầm', d.compare),
    ul('Lỗi hay gặp', d.mistakes, 'vd-bad'),
    `<p class="vd-h">Ví dụ</p><ol class="vd-ex">${d.examples
      .map((e) => `<li><span class="vd-jp" data-speak="${esc(e.jp)}">${renderInline(e.jp)} 🔊</span><br><span class="vd-vn">${esc(e.vn)}</span></li>`)
      .join('')}</ol>`,
    `</div></details>`,
  ].join('')
}

/** A cell may hold several verbs: 行きます・来ます, 集めます / 貯めます, 太ります ↔ 痩せます. */
const cellKeys = (cell: string) =>
  cell
    .replace(/<rt>[\s\S]*?<\/rt>/g, '')
    .replace(/<[^>]+>/g, '')
    .split(/[・／/↔、,]/)
    .map((x) => x.replace(/\s+/g, '').replace(/[［(（\[].*$/, ''))
    .filter(Boolean)

/** Insert a detail row after each table row that contains a known verb (once per verb per unit). */
export function injectVerbDetails(html: string, verbs: Map<string, VerbDetail>, used: Set<VerbDetail>): string {
  return html.replace(/<tr(?:\s[^>]*)?>([\s\S]*?)<\/tr>/g, (row, inner: string) => {
    const cells = [...inner.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1]!)
    if (!cells.length) return row
    const found: VerbDetail[] = []
    for (const c of cells)
      for (const k of cellKeys(c)) {
        const d = verbs.get(k)
        if (d && !used.has(d) && !found.includes(d)) found.push(d)
      }
    found.forEach((d) => used.add(d))
    return row + found.map((d) => `<tr class="verb-detail"><td colspan="${cells.length}">${detailHtml(d)}</td></tr>`).join('')
  })
}
