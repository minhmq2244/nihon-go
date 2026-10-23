// Dev helper: prints a unit's vocab, kanji and grammar points (used when writing practice content).
// Run: npx tsx scripts/syllabus.ts b01
import { readFileSync } from 'node:fs'
import type { Unit } from '../src/types'

const id = process.argv[2]
const u: Unit = JSON.parse(readFileSync(`public/data/unit/${id}.json`, 'utf8'))
const strip = (h: string) => h.replace(/<rt>[^<]*<\/rt>/g, '').replace(/<[^>]+>/g, '')
console.log(`# ${id} ${u.meta.title} — ${u.meta.subtitle}`)
console.log('\n## Grammar')
for (const g of u.grammarPoints) console.log('-', strip(g.title))
console.log('\n## Kanji:', u.kanji.map((k) => `${k.char}(${k.hanviet})`).join(' '))
console.log('\n## Vocab')
console.log(u.vocab.map((v) => `${v.jp}=${v.meaning}`).join(' ; '))
if (process.argv[3] === 'grammar') for (const g of u.grammarPoints) console.log('\n### ' + strip(g.title) + '\n' + strip(g.html).replace(/\n{2,}/g, '\n').slice(0, 1800))
