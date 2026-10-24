import { readdirSync, readFileSync } from 'node:fs'
import { parseVerbs } from './content/verbs'
const files = process.argv.slice(2)
for (const f of files.length ? files : readdirSync('content/generated/verbs')) {
  const m = parseVerbs(readFileSync('content/generated/verbs/' + f, 'utf8'))
  const ds = [...m.values()]
  const bad = ds.filter((d) => d.examples.length !== 3 || !d.particles.length || !d.mistakes.length || !d.compare.length)
  console.log(f, ds.length, 'entries', bad.length ? 'PROBLEMS: ' + bad.map((d) => d.dict + ' ex' + d.examples.length + ' p' + d.particles.length).join(', ') : 'ok')
}
const u = (id: string) => JSON.parse(readFileSync(`public/data/unit/${id}.json`, 'utf8'))
for (const f of files) {
  const id = f.replace('.md', '')
  const n = (u(id).theory.map((s: { html: string }) => s.html).join('').match(/verb-detail/g) || []).length
  console.log(id, 'notes injected in theory:', n)
}
