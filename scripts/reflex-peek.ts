// Dev helper: prints the Luyện phản xạ items built for a unit (checks the generator on real data).
// Run: npx tsx scripts/reflex-peek.ts b11
import { readFileSync } from 'node:fs'
import type { Unit } from '../src/types'
import { availableKinds, buildReflexItems } from '../src/lib/reflex'
import { toBase } from '../src/lib/furigana'

for (const id of process.argv.slice(2)) {
  const u: Unit = JSON.parse(readFileSync(`public/data/unit/${id}.json`, 'utf8'))
  const kinds = availableKinds(u.meta).map((k) => k.id)
  const items = buildReflexItems(u, kinds)
  console.log(`# ${id}: ${items.length} câu`)
  for (const k of kinds) {
    const xs = items.filter((i) => i.kind === k)
    console.log(`  ${k} (${xs.length})`)
    const step = Math.max(1, Math.floor(xs.length / 4))
    for (let i = 0; i < xs.length && i < step * 4; i += step) console.log(`    ${toBase(xs[i]!.from)} → ${xs[i]!.to.map(toBase).join(' / ')}`)
  }
}
