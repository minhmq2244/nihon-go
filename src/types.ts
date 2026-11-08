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

export interface VerbDetail {
  dict: string // dictionary form, furigana notation
  masu: string
  type: string // group · transitive / intransitive
  particles: string[] // which particle (に・を・が…) and why
  meaning: string
  patterns: string[]
  nuance?: string
  compare: string[]
  mistakes: string[]
  examples: { jp: string; vn: string }[]
  story?: { jp: string; vn: string }
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
  /** Speaking roleplay: answer in your own words; the line is only a model. */
  free?: boolean
}

export interface Reading {
  id: string
  genre: string
  title: string
  titleVn: string
  lines: Line[]
  gloss: { jp: string; meaning: string }[]
  questions: DrillSet[]
  /** Open questions you answer out loud (12 per passage, 4 shown at a time). */
  ask?: SpeakQuestion[]
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
  /** Words / patterns beyond Bài 1–11 to learn before listening. */
  vocab?: { jp: string; meaning: string }[]
  grammar?: { jp: string; meaning: string }[]
  /** "Tìm hiểu thêm" pointers shown after the dialogue. */
  more?: string[]
}

/** One question of the speaking Q&A drill. */
export interface SpeakQuestion {
  id: string
  q: string
  vn: string
  hint?: string
  answers: { jp: string; vn: string }[]
  /** Follow-up question to keep the conversation going. */
  next?: { jp: string; vn: string }
}

/** Questions that make you use one grammar pattern. */
export interface SpeakSet {
  id: string
  code: string
  title: string
  tip?: string
  questions: SpeakQuestion[]
}

/** Free talk topic: speak for a minute using the listed patterns. */
export interface SpeakTalk {
  id: string
  title: string
  prompt: string
  must: string[]
  model: Line[]
}

/** Phản xạ hội thoại: a short chain of questions on one topic, asked one after another. */
export interface SpeakChain {
  id: string
  title: string
  scene?: string
  questions: SpeakQuestion[]
}

/** Luyện nói nấc 4: one sentence grown step by step; each step adds one chunk (`add`). */
export interface SpeakBuild {
  id: string
  /** Grammar point id (5.1) or MIX for chains that join several patterns. */
  code: string
  title: string
  steps: { jp: string; vn: string; add?: string }[]
}

export interface Speaking {
  sets: SpeakSet[]
  dialogues: Dialogue[]
  talks: SpeakTalk[]
  /** Phản xạ hỏi đơn: hear a question, answer fast. */
  reflex: SpeakQuestion[]
  chains: SpeakChain[]
  build: SpeakBuild[]
}

// ---- Luyện nghe / Luyện nói ladders (assembled at build time) ----

/** One card of a ladder: Japanese, Vietnamese, and what to speak when it differs from jp. */
export interface PracticeCard {
  id: string
  jp: string
  vn: string
  say?: string
  /** Unit words heard in this sentence. */
  words?: string[]
}

export interface SpeakPoint {
  id: string // grammar point id, 5.1
  title: string
  /** Nấc 1 (nhại lại) and nấc 2 (tự nói từ tiếng Việt). */
  sentences: PracticeCard[]
  /** Nấc 3: questions to answer with this pattern. */
  ask: SpeakQuestion[]
  /** Nấc 4: sentences grown chunk by chunk. */
  build: SpeakBuild[]
}

export interface Practice {
  listen: {
    words: PracticeCard[]
    sentences: PracticeCard[]
    /** Ids of generated listenings used as short conversations. */
    talks: string[]
  }
  speak: {
    points: SpeakPoint[]
    /** Nấc 4 chains that join several patterns of the unit. */
    mixed: SpeakBuild[]
  }
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
  /** Verbs parsed for this unit (from content/generated/verbs/*.md). */
  verbs?: VerbDetail[]
  /** Luyện nói tab (only some units have it). */
  speaking?: Speaking
  practice: Practice
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
