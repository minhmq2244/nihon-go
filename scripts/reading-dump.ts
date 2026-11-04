// Dev helper: prints a unit's reading passages (used when writing reading-qa/<unit>.md).
// Run: npx tsx scripts/reading-dump.ts b11 [r01 r02 …]
import { readFileSync } from 'node:fs'
import type { Unit } from '../src/types'

const [id, ...only] = process.argv.slice(2)
const u: Unit = JSON.parse(readFileSync(`public/data/unit/${id}.json`, 'utf8'))
for (const r of u.generated.readings) {
  if (only.length && !only.includes(r.id.split('-').pop()!)) continue
  console.log(`\n## ${r.id.split('-').pop()!.toUpperCase()} · ${r.genre} · ${r.title} · ${r.titleVn}${r.ask ? ` (đã có ${r.ask.length} câu)` : ''}`)
  for (const l of r.lines) console.log(`${l.jp} || ${l.vn}`)
}
