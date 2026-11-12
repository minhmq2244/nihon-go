import { parseFurigana, toReading } from './furigana'

const KANJI_RE = /[\u4e00-\u9fff々]/
const KANJI_GLOBAL = /[\u4e00-\u9fff々]/g

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

/** Check if all Kanji characters in `text` exist in `learnedKanji`. */
export function areAllKanjiLearned(text: string, learnedKanji: Set<string>): boolean {
  const kanjis = text.match(KANJI_GLOBAL)
  if (!kanjis) return true
  return kanjis.every((k) => learnedKanji.has(k))
}

/** Extract reading map of kanji -> reading from furigana pairs in a string. */
export function extractReadingMap(text: string): Map<string, string> {
  const map = new Map<string, string>()
  const segs = parseFurigana(text)
  for (const s of segs) {
    if (s.r !== undefined && KANJI_RE.test(s.t)) {
      map.set(s.t, s.r)
    }
  }
  return map
}

/**
 * Filter a single word or token.
 * If it contains ANY unlearned Kanji, converts it to its phonetic reading.
 */
export function filterSingleToken(token: string, learnedKanji: Set<string>, readingMap?: Map<string, string>): string {
  const t = token.trim()
  if (!t || !KANJI_RE.test(t)) return token

  // If all kanji in this token are learned, keep original notation
  if (areAllKanjiLearned(t, learnedKanji)) return token

  // At least one kanji is not learned. Convert to reading form.
  let converted = toReading(t)

  // If there are still unlearned kanji (e.g. without furigana in token),
  // substitute using the local reading map
  if (KANJI_RE.test(converted) && readingMap) {
    for (const [k, r] of readingMap) {
      if (converted.includes(k)) {
        converted = converted.replaceAll(k, r)
      }
    }
  }

  return converted
}

/**
 * Filter a phrase that may have multiple words separated by spaces (e.g. "私の 趣味（しゅみ）は 料理（りょうり）です。").
 */
export function filterPhrase(phrase: string, learnedKanji: Set<string>, readingMap?: Map<string, string>): string {
  if (!phrase || !KANJI_RE.test(phrase)) return phrase

  // If the whole phrase has all kanji learned, keep untouched
  if (areAllKanjiLearned(phrase, learnedKanji)) return phrase

  // If phrase contains spaces, filter word by word
  if (phrase.includes(' ')) {
    return phrase
      .split(' ')
      .map((part) => filterSingleToken(part, learnedKanji, readingMap))
      .join(' ')
  }

  return filterSingleToken(phrase, learnedKanji, readingMap)
}

/**
 * Filter a vocab entry or table cell (handles separators like A／B, A ↔ B, A・B).
 */
export function filterVocabWord(raw: string, learnedKanji: Set<string>): string {
  if (!raw || !KANJI_RE.test(raw)) return raw

  const readingMap = extractReadingMap(raw)

  // Split by top-level opposite if present: ' ↔ '
  if (raw.includes(' ↔ ')) {
    return raw
      .split(' ↔ ')
      .map((part) => filterVocabWord(part, learnedKanji))
      .join(' ↔ ')
  }

  // Split by top-level bullet: '・'
  if (raw.includes('・')) {
    return raw
      .split('・')
      .map((part) => filterVocabWord(part, learnedKanji))
      .join('・')
  }

  // Handle slash alternatives (e.g. 〜歳（さい）／〜才（さい）, 何歳（なんさい）／何才（なんさい）)
  if (raw.includes('／') || raw.includes(' / ') || raw.includes('/')) {
    const sep = raw.includes('／') ? '／' : raw.includes(' / ') ? ' / ' : '/'
    const parts = raw.split(sep).map((p) => filterPhrase(p, learnedKanji, readingMap))
    // Deduplicate identical readings (e.g. "なんさい／なんさい" -> "なんさい")
    const unique = [...new Set(parts.map((p) => p.trim()))]
    return unique.join(sep)
  }

  return filterPhrase(raw, learnedKanji, readingMap)
}

/**
 * Filter vocabulary tables in Section 2 markdown body based on learnedKanji.
 * Any word or dictionary form in table rows containing unlearned Kanji is converted to phonetic reading.
 */
export function filterVocabSectionMd(md: string, learnedKanji: Set<string>): string {
  const lines = md.split(/\r?\n/)
  const out: string[] = []
  let inTable = false
  let wordCols = new Set<number>()

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!
    const trimmed = line.trim()

    // Check if line is a table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const cells = trimmed
        .slice(1, -1)
        .split('|')
        .map((c) => c.trim())

      // If this is the delimiter row (| --- | --- |), pass through
      if (/^:?-+:?$/.test(cells[0] ?? '')) {
        out.push(line)
        continue
      }

      // Check if the NEXT line is a delimiter row -> this line is the table header!
      const nextLine = lines[i + 1]?.trim() ?? ''
      const isHeader = nextLine.startsWith('|') && /^\|(?:\s*:?-+:?\s*\|)+\s*$/.test(nextLine)

      if (isHeader) {
        const groups = vocabColumns(cells)
        const words = groups.map((g) => g.word)
        const dicts = cells.map((h, idx) => (/từ điển/i.test(h) ? idx : -1)).filter((idx) => idx >= 0)
        wordCols = new Set([...words, ...dicts])
        inTable = true
        out.push(line)
        continue
      }

      // If we are inside a table with word columns identified:
      if (inTable && wordCols.size > 0) {
        const transformed = cells.map((cell, idx) => {
          if (wordCols.has(idx)) {
            return filterVocabWord(cell, learnedKanji)
          }
          return cell
        })
        out.push(`| ${transformed.join(' | ')} |`)
        continue
      }

      out.push(line)
    } else {
      inTable = false
      wordCols.clear()
      out.push(line)
    }
  }

  return out.join('\n')
}
