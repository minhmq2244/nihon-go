import { Marked, type Tokens } from 'marked'
import { furiganaHtml, toReading } from '../../src/lib/furigana'

export interface Block {
  title: string
  body: string
}

/** Split markdown into blocks at headings of exactly `level` (ignores fenced code). */
export function splitHeadings(md: string, level: number): { pre: string; blocks: Block[] } {
  const lines = md.split(/\r?\n/)
  const marker = '#'.repeat(level) + ' '
  const blocks: Block[] = []
  const pre: string[] = []
  let cur: { title: string; lines: string[] } | null = null
  let fence = false
  for (const line of lines) {
    if (/^\s*```/.test(line)) fence = !fence
    if (!fence && line.startsWith(marker)) {
      if (cur) blocks.push({ title: cur.title, body: cur.lines.join('\n') })
      cur = { title: line.slice(marker.length).trim(), lines: [] }
      continue
    }
    if (cur) cur.lines.push(line)
    else pre.push(line)
  }
  if (cur) blocks.push({ title: cur.title, body: cur.lines.join('\n') })
  return { pre: pre.join('\n'), blocks }
}

export const stripMd = (s: string) =>
  s
    .replace(/\*\*|__/g, '')
    .replace(/`/g, '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/^\*(.*)\*$/, '$1')
    .trim()

const isMeaningHeader = (h: string) => /nghĩa/i.test(h)

/** Work out which table columns hold a word and which its meaning (vocab tables vary a lot). */
export function vocabColumns(headers: string[]): { word: number; meaning: number; notes: number[] }[] {
  const means = headers.map((h, i) => (isMeaningHeader(h) ? i : -1)).filter((i) => i >= 0)
  const groups: { word: number; meaning: number; notes: number[] }[] = []
  let start = 0
  means.forEach((m, gi) => {
    let word = start
    while (word < m && /^#?$/.test(headers[word]!.trim())) word++
    if (word >= m) {
      start = m + 1
      return
    }
    const notes: number[] = []
    for (let c = word + 1; c < m; c++) notes.push(c)
    if (gi === means.length - 1) for (let c = m + 1; c < headers.length; c++) notes.push(c)
    groups.push({ word, meaning: m, notes })
    start = m + 1
  })
  return groups
}

const escAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

export interface RenderCtx {
  vocab?: boolean
}

let ctx: RenderCtx = {}

const marked = new Marked({ gfm: true })
marked.use({
  renderer: {
    table(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Table) {
      const headers = token.header.map((c) => stripMd(c.text))
      const groups = ctx.vocab ? vocabColumns(headers) : []
      const wordCols = new Set(groups.map((g) => g.word))
      const meanCols = new Set(groups.map((g) => g.meaning))
      const cell = (c: Tokens.TableCell, i: number, tag: 'th' | 'td') => {
        const inner = this.parser.parseInline(c.tokens)
        if (tag === 'td' && wordCols.has(i) && c.text.trim()) {
          return `<td class="vw" data-speak="${escAttr(toReading(stripMd(c.text)))}">${inner}</td>`
        }
        if (tag === 'td' && meanCols.has(i)) return `<td class="vm">${inner}</td>`
        return `<${tag}>${inner}</${tag}>`
      }
      const head = `<tr>${token.header.map((c, i) => cell(c, i, 'th')).join('')}</tr>`
      const body = token.rows.map((r) => `<tr>${r.map((c, i) => cell(c, i, 'td')).join('')}</tr>`).join('')
      return `<div class="table-wrap"><table${ctx.vocab && groups.length ? ' class="vocab"' : ''}><thead>${head}</thead><tbody>${body}</tbody></table></div>`
    },
  },
})

export function render(md: string, c: RenderCtx = {}): string {
  ctx = c
  const html = marked.parse(md, { async: false }) as string
  ctx = {}
  return furiganaHtml(html)
}

export function renderInline(md: string): string {
  return furiganaHtml(marked.parseInline(md, { async: false }) as string)
}

export const lexer = (md: string) => marked.lexer(md)
