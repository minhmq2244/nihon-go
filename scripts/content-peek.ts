import { readFileSync } from 'node:fs'
import { parsePractice, splitVolume, parseExam } from './content/source'
const [vol, unit, ex] = process.argv.slice(2)
const { units, exam } = splitVolume(readFileSync(`content/source/tap${vol}.md`, 'utf8'), Number(vol) as 1)
if (unit === 'exam') {
  const e = parseExam(exam!)
  for (const p of e.parts) { console.log('##', p.title); for (const b of p.blocks) if (b.type==='item') console.log(b.item.n, b.item.kind, JSON.stringify(b.item.groups ?? b.item.accept)?.slice(0,120), '|', b.item.html.slice(0,80)) }
} else {
  const u = units.find(u => u.id === unit)!
  const p = parsePractice(u.practice, u.answers)
  for (const e of p.exercises.filter(e => !ex || e.id === ex)) {
    console.log('###', e.title)
    for (const b of e.blocks) if (b.type === 'item') console.log(' ', b.item.n, b.item.kind, JSON.stringify(b.item.groups ?? b.item.accept)?.slice(0, 140), '|', b.item.html.replace(/<[^>]+>/g,'').slice(0, 70))
  }
}
