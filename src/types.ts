// Shapes of the JSON produced by scripts/build-content.ts and consumed by the app.

export type UnitKind = 'bai' | 'cd'

export interface UnitMeta {
  id: string // b01..b11, cd00..cd09
  vol: 1 | 2 | 3 | 4
  kind: UnitKind
  num: number
  title: string // Japanese title, may contain furigana notation
  subtitle: string // Vietnamese title
  hasGenerated: boolean
}

export interface ExamMeta {
  id: string // t1..t4
  vol: 1 | 2 | 3 | 4
  title: string
  questionCount: number
}

export interface KaiwaMeta {
  id: string // cd00..cd09
  title: string
  subtitle: string
  chunkCount: number
  dialogueCount: number
}

export interface ContentIndex {
  units: UnitMeta[]
  exams: ExamMeta[]
  kaiwa: KaiwaMeta[]
  overview: { vol4Html: string }
}

export interface Section {
  id: string
  title: string
  html: string
}

export interface VocabItem {
  id: string
  jp: string // with furigana notation
  meaning: string
  note?: string
  group: string
}

export interface KanjiCompound {
  jp: string
  meaning: string
}

export interface KanjiItem {
  id: string
  char: string
  hanviet: string
  strokes: string
  onkun: string
  parts?: string
  story?: string
  compounds: KanjiCompound[]
}

export interface ConfuseGroup {
  chars: { char: string; hanviet: string; meaning: string }[]
  html: string
}

/** One question parsed from the textbook's own exercises or exams. */
export interface SourceItem {
  n: number
  html: string
  kind: 'choice' | 'input' | 'open'
  groups?: { options: string[]; correct?: number }[] // choice: one group per （A ／ B） in the stem
  blanks?: number // input: number of answer boxes
  accept?: string[][] // per blank, accepted answers
  answerHtml?: string
}

export type TableCell = { html: string } | { accept: string[] }

export interface FillTable {
  head: string[]
  rows: { n?: number; cells: TableCell[] }[]
}

export type SourceBlock = { type: 'html'; html: string } | { type: 'item'; item: SourceItem } | { type: 'table'; table: FillTable }

export interface SourceExercise {
  id: string // A1, B, C1, exam part id
  title: string
  blocks: SourceBlock[]
  answerHtml?: string
}

export interface WritingTask {
  id: string // C1..C6
  title: string
  promptHtml: string
  promptText: string
  modelHtml?: string
  modelText?: string
}

export interface TranslationItem {
  n: number
  group: string
  vn: string
  answer?: string
}

// ---- Generated practice content (content/generated/*.md) ----

export type DrillType = 'FILL' | 'MC' | 'ORDER' | 'FIX' | 'TRANS' | 'STAR' | 'TF' | 'SHORT'

export interface Drill {
  id: string
  type: DrillType
  stem: string // furigana notation; FILL blanks are ［ans｜alt］
  answers: string[] // FIX/TRANS/SHORT/KANJI accepted answers; TF: ['đúng'|'sai']
  options?: string[] // MC
  correct?: number // MC index, STAR chunk index (0-based)
  chunks?: string[] // ORDER/STAR in correct order
  hint?: string
  explain?: string
}

export interface DrillSet {
  id: string
  code: string // G1, G2..., V4, K3, K4, W1
  type: DrillType
  title: string
  items: Drill[]
}

export interface GrammarPractice {
  id: string // 5.1
  title: string
  sets: DrillSet[]
}

export interface Line {
  speaker: string // A, B, N...
  name?: string
  jp: string
  vn: string
  note?: string // key chunk explanation
  alts?: string[] // natural alternatives (Kaiwa summary)
  task?: string // blind roleplay mission (VN)
}

export interface Reading {
  id: string
  genre: string
  title: string
  titleVn: string
  lines: Line[]
  gloss: { jp: string; meaning: string }[]
  questions: DrillSet[]
}

export type ListeningType = 'task' | 'point' | 'response' | 'expression' | 'dictation' | 'cloze' | 'numbers' | 'tf'

export interface Listening {
  id: string
  type: ListeningType
  title: string
  intro?: string
  lines: Line[]
  questions: DrillSet[]
}

export interface Dialogue {
  id: string
  title: string
  scene?: string
  roles: Record<string, string>
  lines: Line[]
}

export interface Generated {
  vocabCloze: DrillSet[]
  kanji: DrillSet[]
  grammar: GrammarPractice[]
  writing: DrillSet[]
  readings: Reading[]
  listenings: Listening[]
  dialogues: Dialogue[]
}

export interface Unit {
  meta: UnitMeta
  info: string
  theory: Section[]
  grammarPoints: Section[]
  vocab: VocabItem[]
  kanji: KanjiItem[]
  confuse: ConfuseGroup[]
  exercises: SourceExercise[]
  translations: TranslationItem[]
  writingTasks: WritingTask[]
  rubricHtml?: string
  generated: Generated
}

export interface Exam {
  meta: ExamMeta
  introHtml: string
  parts: SourceExercise[]
  diagnosis: { questions: number[]; topic: string; where: string }[]
}

export interface KaiwaTopic {
  meta: KaiwaMeta
  chunks: { jp: string; reading?: string; meaning: string; note?: string }[]
  frames: { pattern: string; meaning: string }[]
  dialogues: Dialogue[]
}
