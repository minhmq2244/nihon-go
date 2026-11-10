// Content check: the readings of Bài 8–11 (tab Đọc hiểu) review every kanji of Tập 1–2 (Bài 1–7).
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { missingKanji } from './coverage'
import { parseGenerated } from './generated'
import { parseTheory, splitVolume } from './source'

const reviewKanji = ([1, 2] as const).flatMap((vol) =>
  splitVolume(readFileSync(`content/source/tap${vol}.md`, 'utf8'), vol).units.flatMap((u) => parseTheory(u.theory, u.id).kanji.map((k) => k.char)),
)

describe('bài đọc Bài 8–11 · kanji Tập 1–2', () => {
  it('reads all Bài 1–7 kanji from the textbook', () => {
    expect(reviewKanji.length).toBeGreaterThanOrEqual(70)
    expect(new Set(reviewKanji).size).toBe(reviewKanji.length)
  })

  for (const id of ['b08', 'b09', 'b10', 'b11']) {
    it(`${id}: 11 bài đọc dùng đủ kanji Tập 1–2`, () => {
      const g = parseGenerated(readFileSync(`content/generated/${id}.md`, 'utf8'), id)
      expect(missingKanji(reviewKanji, g.readings.flatMap((r) => r.lines)).join(' ')).toBe('')
    })
  }
})

