// Builds public/data/*.json from content/source (textbook) and content/generated (practice).
// Run: npx tsx scripts/build-content.ts
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ContentIndex, Generated, KaiwaTopic, Unit, UnitMeta, VerbDetail } from '../src/types'
import { parseExam, parsePractice, parseTheory, splitVolume } from './content/source'
import { DslError, parseGenerated, parseKaiwa } from './content/generated'
import { render, stripMd } from './content/markdown'
import { injectVerbDetails, parseVerbs } from './content/verbs'

const ROOT = process.cwd()
const OUT = join(ROOT, 'public', 'data')
const EMPTY: Generated = { vocabCloze: [], kanji: [], grammar: [], writing: [], readings: [], listenings: [], dialogues: [] }

function write(path: string, data: unknown) {
  writeFileSync(join(OUT, path), JSON.stringify(data))
}

export function buildContent(): { units: number; errors: string[] } {
  const errors: string[] = []
  rmSync(OUT, { recursive: true, force: true })
  for (const d of ['unit', 'exam', 'kaiwa']) mkdirSync(join(OUT, d), { recursive: true })

  const index: ContentIndex = { units: [], exams: [], kaiwa: [], overview: { vol4Html: '' } }
  const cdTitles: Record<string, { title: string; subtitle: string }> = {}
  const verbsDir = join(ROOT, 'content', 'generated', 'verbs')
  const verbs = existsSync(verbsDir)
    ? parseVerbs(
        readdirSync(verbsDir)
          .filter((f) => f.endsWith('.md'))
          .map((f) => readFileSync(join(verbsDir, f), 'utf8'))
          .join('\n\n'),
      )
    : new Map()

  for (const vol of [1, 2, 3, 4] as const) {
    const md = readFileSync(join(ROOT, 'content', 'source', `tap${vol}.md`), 'utf8')
    const { units, exam, preface } = splitVolume(md, vol)
    if (vol === 4) index.overview.vol4Html = render(preface)
    for (const raw of units) {
      const theory = parseTheory(raw.theory, raw.id)
      const usedVerbs = new Set<VerbDetail>()
      const practice = parsePractice(raw.practice, raw.answers)
      const genPath = join(ROOT, 'content', 'generated', `${raw.id}.md`)
      let generated = EMPTY
      if (existsSync(genPath)) {
        try {
          generated = parseGenerated(readFileSync(genPath, 'utf8'), raw.id)
        } catch (e) {
          if (!(e instanceof DslError)) throw e
          errors.push(`${raw.id}.md: ${e.message}`)
        }
      }
      const headerLines = raw.header.split(/\r?\n/)
      const subtitle = stripMd(headerLines.find((l) => /^\*\*.+\*\*$/.test(l.trim())) ?? '')
      const meta: UnitMeta = {
        id: raw.id,
        vol,
        kind: raw.kind,
        num: raw.num,
        title: raw.heading,
        subtitle,
        hasGenerated: generated !== EMPTY,
      }
      if (raw.kind === 'cd') cdTitles[raw.id] = { title: raw.heading, subtitle }
      const unit: Unit = {
        meta,
        info: render(headerLines.filter((l) => !/^\*\*.+\*\*$/.test(l.trim()) && l.trim() !== '---').join('\n')),
        // verb notes go only into the vocabulary section (2)
        theory: theory.sections.map((sec) => (sec.id === '2' ? { ...sec, html: injectVerbDetails(sec.html, verbs, usedVerbs) } : sec)),
        grammarPoints: theory.grammarPoints,
        vocab: theory.vocab,
        kanji: theory.kanji,
        confuse: theory.confuse,
        ...practice,
        generated,
      }
      index.units.push(meta)
      write(`unit/${raw.id}.json`, unit)
    }
    if (exam) {
      const e = parseExam(exam)
      index.exams.push(e.meta)
      write(`exam/${e.meta.id}.json`, e)
    }
  }

  for (const [id, t] of Object.entries(cdTitles)) {
    const path = join(ROOT, 'content', 'generated', 'kaiwa', `${id}.md`)
    let topic: KaiwaTopic = { meta: { id, ...t, chunkCount: 0, dialogueCount: 0 }, chunks: [], frames: [], dialogues: [] }
    if (existsSync(path)) {
      try {
        topic = parseKaiwa(readFileSync(path, 'utf8'), id, t.title, t.subtitle)
      } catch (e) {
        if (!(e instanceof DslError)) throw e
        errors.push(`kaiwa/${id}.md: ${e.message}`)
      }
    }
    index.kaiwa.push(topic.meta)
    write(`kaiwa/${id}.json`, topic)
  }

  write('index.json', index)
  return { units: index.units.length, errors }
}

if (process.argv[1]?.endsWith('build-content.ts')) {
  const t = Date.now()
  const { units, errors } = buildContent()
  for (const e of errors) console.error('  ✗ ' + e)
  console.log(`content: ${units} units built in ${Date.now() - t}ms${errors.length ? `, ${errors.length} lỗi` : ''}`)
}
