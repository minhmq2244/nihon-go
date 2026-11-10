// Assembles the Luyện nghe / Luyện nói ladders of a unit from content it already has.
import type { Generated, PracticeCard, Practice, SpeakQuestion, SpeakSet, Speaking, VocabItem } from '../../src/types'
import { usesVocab, vocabSpeech } from './coverage'
import { coverUses } from './speaking'

/** Sentences picked for nghe nấc 2 (enough to cover the unit's words). */
export const LISTEN_SENTENCES_MAX = 32
/** Short conversations for nghe nấc 3. */
export const LISTEN_TALKS = 6
/** Questions per grammar point for nói nấc 3 (more when the pattern has many sub-structures). */
export const ASK_PER_POINT = 5
/** Questions picked for each sub-structure (@cover label) of a pattern. */
export const ASK_PER_COVER = 2

const plain = (jp: string) => jp.replace(/（[^（）]*）|［|］|\s/g, '')

/**
 * Nấc 3 questions of one pattern: up to 2 per @cover label (unpicked ones first), topped up to
 * ASK_PER_POINT with other questions that use a label; file order kept, each tagged with `uses`.
 * Without @cover: the first ASK_PER_POINT questions.
 */
export function pickAsks(set: SpeakSet | undefined): SpeakQuestion[] {
  if (!set) return []
  if (!set.cover?.length) return set.questions.slice(0, ASK_PER_POINT)
  const cover = set.cover
  const qs = set.questions.map((q) => ({ ...q, uses: coverUses(cover, q) }))
  const picked = new Set<number>()
  for (const c of cover) {
    const hits = qs.flatMap((q, i) => (q.uses.includes(c.label) ? [i] : []))
    const order = [...hits.filter((i) => !picked.has(i)), ...hits.filter((i) => picked.has(i))]
    order.slice(0, ASK_PER_COVER).forEach((i) => picked.add(i))
  }
  for (let i = 0; i < qs.length && picked.size < ASK_PER_POINT; i++) if (qs[i]!.uses.length) picked.add(i)
  return qs.filter((_, i) => picked.has(i))
}

/**
 * Greedy cover: keep taking the sentence that adds the most unheard unit words (shorter wins a tie),
 * until every word that appears somewhere is covered or the limit is reached.
 */
export function pickSentences(vocab: VocabItem[], pool: PracticeCard[], max = LISTEN_SENTENCES_MAX): PracticeCard[] {
  const cands = pool.map((c) => ({ c, hits: vocab.filter((v) => usesVocab(v, c.jp)).map((v) => v.id) }))
  const covered = new Set<string>()
  const picked: { c: PracticeCard; hits: string[] }[] = []
  while (picked.length < max) {
    let best: (typeof cands)[number] | undefined
    let bestNew = 0
    for (const x of cands) {
      const n = x.hits.filter((h) => !covered.has(h)).length
      if (n > bestNew || (n === bestNew && n > 0 && best && plain(x.c.jp).length < plain(best.c.jp).length)) {
        best = x
        bestNew = n
      }
    }
    if (!best || !bestNew) break
    best.hits.forEach((h) => covered.add(h))
    picked.push(best)
    cands.splice(cands.indexOf(best), 1)
  }
  const byId = new Map(vocab.map((v) => [v.id, v.jp]))
  return picked.map(({ c, hits }) => ({ ...c, words: hits.map((h) => byId.get(h)!) }))
}

export function buildPractice(vocab: VocabItem[], g: Generated, sp?: Speaking): Practice {
  const seen = new Set<string>()
  const pool: PracticeCard[] = []
  const add = (id: string, jp: string, vn: string) => {
    const len = plain(jp).length
    if (!vn || len < 4 || len > 40 || seen.has(plain(jp))) return
    seen.add(plain(jp))
    pool.push({ id, jp, vn })
  }
  for (const l of g.listenings) l.lines.forEach((x, i) => add(`${l.id}-s${i}`, x.jp, x.vn))
  for (const d of g.dialogues) d.lines.forEach((x, i) => add(`${d.id}-s${i}`, x.jp, x.vn))
  for (const r of g.readings) r.lines.forEach((x, i) => add(`${r.id}-s${i}`, x.jp, x.vn))
  for (const p of g.grammar) for (const s of p.sets) if (s.type === 'TRANS') for (const d of s.items) if (d.answers[0]) add(d.id, d.answers[0], d.stem)

  // conversations (≥ 4 lines) that use the most unit words
  const talks = g.listenings
    .filter((l) => l.lines.length >= 4)
    .map((l, i) => ({ id: l.id, i, n: vocab.filter((v) => l.lines.some((x) => usesVocab(v, x.jp))).length }))
    .sort((a, b) => b.n - a.n || a.i - b.i)
    .slice(0, LISTEN_TALKS)
    .sort((a, b) => a.i - b.i)
    .map((t) => t.id)

  return {
    listen: {
      words: vocab.map((v) => ({ id: v.id, jp: v.jp, vn: v.meaning, say: vocabSpeech(v.jp) })),
      sentences: pickSentences(vocab, pool),
      talks,
    },
    speak: {
      points: g.grammar.map((p) => ({
        id: p.id,
        title: p.title,
        sentences: p.sets
          .filter((s) => s.type === 'TRANS')
          .flatMap((s) => s.items)
          .filter((d) => d.answers[0])
          .map((d) => ({ id: d.id, jp: d.answers[0]!, vn: d.stem })),
        ask: pickAsks(sp?.sets.find((s) => s.code === p.id)),
        build: sp?.build.filter((b) => b.code === p.id) ?? [],
      })),
      mixed: sp?.build.filter((b) => b.code === 'MIX') ?? [],
    },
  }
}
