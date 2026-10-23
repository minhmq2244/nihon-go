// Dev helper: prints how well the textbook parser understood each unit.
import { readFileSync } from 'node:fs'
import { parseExam, parsePractice, parseTheory, splitVolume } from './content/source'

for (const vol of [1, 2, 3, 4] as const) {
  const md = readFileSync(`content/source/tap${vol}.md`, 'utf8')
  const { units, exam } = splitVolume(md, vol)
  for (const u of units) {
    const t = parseTheory(u.theory, u.id)
    const p = parsePractice(u.practice, u.answers)
    const items = p.exercises.flatMap((e) => e.blocks.filter((b) => b.type === 'item').map((b) => (b as { item: { kind: string; groups?: { correct?: number }[]; accept?: unknown } }).item))
    const kinds = { choice: 0, choiceOk: 0, input: 0, open: 0 }
    for (const it of items) {
      if (it.kind === "choice") {
        kinds.choice++
        if (it.groups?.every((g: { correct?: number }) => g.correct !== undefined)) kinds.choiceOk++
      } else if (it.kind === 'input') kinds.input++
      else kinds.open++
    }
    console.log(
      `${u.id} ${u.heading.slice(0, 14).padEnd(14)} sec=${t.sections.length} gp=${t.grammarPoints.length} vocab=${t.vocab.length} kanji=${t.kanji.length} conf=${t.confuse.length} ex=${p.exercises.length} items=${items.length} choice=${kinds.choice}/${kinds.choiceOk}ok input=${kinds.input} open=${kinds.open} B=${p.translations.length}(${p.translations.filter((x) => x.answer).length}ans) C=${p.writingTasks.length}(${p.writingTasks.filter((x) => x.modelHtml).length}model)`,
    )
  }
  if (exam) {
    const e = parseExam(exam)
    const items = e.parts.flatMap((p) => p.blocks.filter((b) => b.type === 'item').map((b) => (b as { item: { kind: string; groups?: { correct?: number }[]; answerHtml?: string } }).item))
    console.log(
      `EXAM ${e.meta.id} q=${e.meta.questionCount} parts=${e.parts.length} choice=${items.filter((i) => i.kind === 'choice').length}/${items.filter((i) => i.kind === 'choice' && i.groups?.every((g) => g.correct !== undefined)).length}ok input=${items.filter((i) => i.kind === 'input').length} open=${items.filter((i) => i.kind === 'open').length} noAns=${items.filter((i) => !i.answerHtml).length} diag=${e.diagnosis.length}`,
    )
  }
}
