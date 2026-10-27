// Parses content/generated/verbs.md (detailed verb notes) and inserts them into the theory
// vocabulary tables: under each verb row, an expandable row with particles, usage and 3 examples.
import type { VerbDetail } from '../../src/types'
import { toBase, toReading } from '../../src/lib/furigana'
import { renderInline, splitHeadings } from './markdown'

const list = (v: string | undefined) => (v ?? '').split(/\s*;\s*/).filter(Boolean)
const attr = (body: string, name: string) => new RegExp(`^@${name}:\s*(.+)$`, 'm').exec(body)?.[1]?.trim()

const clean = (s: string) => s.replace(/\s+/g, '').replace(/^\*?\([^)]*\)\*?/, '').replace(/[［(（\[].*$/, '')
/** Plain lookup key: kanji form without readings, spaces or trailing notes like ［返す］(I). */
export const verbKey = (jp: string) => clean(toBase(jp))

/**
 * Lookup by written form + reading, so 降（お）ります (get off) and 降（ふ）ります (rain falls) stay apart.
 * Falls back to the written form alone when only one verb has it (cells written without readings).
 */
export class VerbBook {
  private full = new Map<string, VerbDetail>()
  private base = new Map<string, Set<VerbDetail>>()
  add(base: string, reading: string, d: VerbDetail) {
    if (!base) return
    this.full.set(`${base}|${reading}`, d)
    this.base.set(base, (this.base.get(base) ?? new Set()).add(d))
  }
  get(base: string, reading: string): VerbDetail | undefined {
    const hit = this.full.get(`${base}|${reading}`)
    if (hit) return hit
    const cands = this.base.get(base)
    return cands && cands.size === 1 ? [...cands][0] : undefined
  }
  get size() {
    return new Set(this.full.values()).size
  }
  values() {
    return new Set(this.full.values()).values()
  }
}

function parseStory(body: string): { jp: string; vn: string } | undefined {
  const m = /^@story:\s*([\s\S]*?)(?=(?:^@[a-z]+:|^-\s|\r?\n\r?\n|$))/im.exec(body)
  if (!m) return undefined
  const content = m[1]!.trim()
  if (content.includes('||')) {
    const [jp = '', vn = ''] = content.split(/\s*\|\|\s*/)
    if (jp && vn) {
      return {
        jp: jp.trim().replace(/\s*\r?\n\s*/g, ' '),
        vn: vn.trim().replace(/\s*\r?\n\s*/g, ' '),
      }
    }
  }
  return undefined
}

export function parseVerbs(md: string): VerbBook {
  const book = new VerbBook()
  for (const sec of splitHeadings(md, 2).blocks) {
    const [dict = '', masu = ''] = sec.title.split(/\s*·\s*/)
    if (!attr(sec.body, 'meaning')) continue
    const story = parseStory(sec.body)
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
      ...(story ? { story } : {}),
    }
    const forms = [dict, masu, ...(attr(sec.body, 'alias') ?? '').split(/\s*[;,、]\s*/)].filter(Boolean)
    // する-verbs are often listed as just the noun: 結婚（けっこん）（します）
    if (/する$/.test(clean(toBase(dict)))) forms.push(dict.replace(/する\s*$/, ''))
    for (const f of forms) book.add(clean(toBase(f)), clean(toReading(f)), d)
  }
  return book
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const ul = (title: string, items: string[], cls = '') =>
  items.length ? `<p class="vd-h ${cls}">${title}</p><ul>${items.map((x) => `<li>${renderInline(x)}</li>`).join('')}</ul>` : ''

function detailHtml(d: VerbDetail): string {
  return [
    `<details class="vd"><summary>📘 Chi tiết ${renderInline(d.dict)} — trợ từ đi kèm, cách dùng, lỗi hay gặp, ví dụ${d.story ? ', đoạn văn ngữ cảnh' : ''}</summary><div class="vd-body">`,
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
    d.story
      ? `<div class="vd-story">` +
        `<div class="vd-story-header">` +
        `<span class="vd-story-title">📖 Đoạn văn câu chuyện ngữ cảnh (Trọn bộ trợ từ)</span>` +
        `<span class="vd-story-badge">Ngữ cảnh thực tế</span>` +
        `</div>` +
        `<div class="vd-story-jp" data-speak="${esc(d.story.jp)}">${renderInline(d.story.jp)} <span class="vd-audio-btn" title="Bấm để nghe đọc">🔊</span></div>` +
        `<div class="vd-story-vn">${esc(d.story.vn)}</div>` +
        `</div>`
      : '',
    `</div></details>`,
  ].join('')
}

export function summaryStoriesHtml(verbs: VerbDetail[]): string {
  const withStory = verbs.filter((v) => v.story)
  if (!withStory.length) return ''
  return [
    `<div class="vd-summary-section">`,
    `<div class="vd-summary-header">`,
    `<span class="vd-summary-badge">Ôn tập & Ghi nhớ</span>`,
    `<h3 class="vd-summary-title">📖 Câu chuyện ngữ cảnh các động từ trong bài</h3>`,
    `<p class="vd-summary-desc">Đọc các đoạn văn ngắn kết hợp đầy đủ trợ từ（が, を, に, で, と, へ…）để ghi nhớ tự nhiên và làm quen với từng động từ trong ngữ cảnh thực tế. Bấm vào câu tiếng Nhật để nghe phát âm 🔊.</p>`,
    `</div>`,
    `<div class="vd-summary-grid">`,
    withStory
      .map(
        (d) => `
      <div class="vd-summary-card">
        <div class="vd-summary-card-head">
          <span class="vd-summary-card-verb">${renderInline(d.dict)} · ${renderInline(d.masu)}</span>
          <span class="vd-summary-card-type">${renderInline(d.type.split('·')[0]?.trim() || d.type)}</span>
        </div>
        <div class="vd-summary-card-meaning">${renderInline(d.meaning.split('.')[0] || d.meaning)}</div>
        ${
          d.particles.length
            ? `<div class="vd-summary-card-particles"><span class="vd-particle-tag">Trợ từ:</span> ${d.particles
                .map((p) => renderInline(p.split('—')[0]?.trim() || p))
                .join(' · ')}</div>`
            : ''
        }
        <div class="vd-summary-card-jp" data-speak="${esc(d.story!.jp)}">
          ${renderInline(d.story!.jp)} <span class="vd-audio-btn" title="Bấm để nghe đọc">🔊</span>
        </div>
        <div class="vd-summary-card-vn">${esc(d.story!.vn)}</div>
      </div>
    `,
      )
      .join(''),
    `</div>`,
    `</div>`,
  ].join('')
}

/** A cell may hold several verbs: 行きます・来ます, 集めます / 貯めます, 太ります ↔ 痩せます. Returns [written, reading] pairs. */
const cellKeys = (cell: string): [string, string][] => {
  const written = cell.replace(/<rt>[\s\S]*?<\/rt>/g, '').replace(/<[^>]+>/g, '')
  const reading = cell.replace(/<ruby>([\s\S]*?)<rt>([\s\S]*?)<\/rt><\/ruby>/g, '$2').replace(/<[^>]+>/g, '')
  const w = written.split(/[・／/↔、,]|─+▶/)
  const r = reading.split(/[・／/↔、,]|─+▶/)
  return w.map((x, i) => [clean(x), clean(r[i] ?? x)] as [string, string]).filter(([x]) => x)
}

/** Insert a detail row after each table row that contains a known verb (once per verb per unit). */
export function injectVerbDetails(html: string, verbs: VerbBook, used: Set<VerbDetail>): string {
  const replaced = html.replace(/<tr(?:\s[^>]*)?>([\s\S]*?)<\/tr>/g, (row, inner: string) => {
    const cells = [...inner.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1]!)
    if (!cells.length) return row
    const found: VerbDetail[] = []
    for (const c of cells)
      for (const [w, r] of cellKeys(c)) {
        const d = verbs.get(w, r)
        if (d && !used.has(d) && !found.includes(d)) found.push(d)
      }
    found.forEach((d) => used.add(d))
    return row + found.map((d) => `<tr class="verb-detail"><td colspan="${cells.length}">${detailHtml(d)}</td></tr>`).join('')
  })
  const storyVerbs = Array.from(used).filter((d) => d.story)
  if (storyVerbs.length > 0) {
    return replaced + summaryStoriesHtml(storyVerbs)
  }
  return replaced
}
