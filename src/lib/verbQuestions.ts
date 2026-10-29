import type { VerbDetail } from '../types'
import { toBase } from './furigana'
import { conjugateVerb, identifyVerbForm, type VerbFormInfo, type VerbFormKey } from './verbConjugation'

export interface VerbParticleInfo {
  particle: string
  usage: string
  target: string
  warning?: string
}

export interface VerbQuestion {
  id: string
  verbDict: string
  verbMasu: string
  verbType: string
  verbMeaning: string

  // Stem with blanks
  stem: string
  preParticle: string
  targetParticle: string
  between: string
  targetVerbText: string
  targetFormKey: VerbFormKey
  postVerb: string

  fullJp: string
  audioText: string
  meaningVn: string

  particleOptions: string[]
  particleExplain: string

  verbFormOptions: {
    formKey: VerbFormKey
    text: string
    label: string
  }[]
  verbFormExplain: string

  allForms: VerbFormInfo[]
  allParticles: VerbParticleInfo[]
  story?: { jp: string; vn: string }
}

const COMMON_PARTICLES = ['を', 'に', 'で', 'が', 'へ', 'と', 'から', 'まで']

/** Parse raw particle string (e.g. "に — [Người] に 会う (gặp ai — dùng に, KHÔNG dùng を)") */
export function parseParticleDefinition(raw: string): VerbParticleInfo[] {
  const [partStr = '', ...rest] = raw.split(/\s*—\s*/)
  const detail = rest.join(' — ').trim()

  // If there are warnings like "KHÔNG dùng を..."
  if (/^KHÔNG dùng/i.test(partStr)) {
    return []
  }

  const parts = partStr.split(/[／/]/).map((p) => p.trim()).filter(Boolean)
  const results: VerbParticleInfo[] = []

  for (const p of parts) {
    if (!p || p.length > 3) continue
    const targetMatch = detail.match(/\[([^\]]+)\]/)
    const target = targetMatch ? `[${targetMatch[1]}]` : ''
    const warning = detail.includes('KHÔNG') ? detail.slice(detail.indexOf('KHÔNG')) : undefined
    results.push({
      particle: p,
      usage: detail || raw,
      target,
      warning,
    })
  }

  return results
}

/** Extract all particle definitions from a VerbDetail. */
export function getVerbParticles(verb: VerbDetail): VerbParticleInfo[] {
  return verb.particles.flatMap(parseParticleDefinition)
}

/** Find the last index of particle in str that is strictly outside of furigana parentheses （...）. */
export function findParticleIndexOutsideParens(str: string, particle: string): number {
  for (let i = str.length - particle.length; i >= 0; i--) {
    if (str.startsWith(particle, i)) {
      let openCount = 0
      for (let j = 0; j < i; j++) {
        const ch = str[j]
        if (ch === '（' || ch === '(') openCount++
        else if (ch === '）' || ch === ')') openCount = Math.max(0, openCount - 1)
      }
      if (openCount === 0) {
        return i
      }
    }
  }
  return -1
}

/** Generate a realistic explanation for why a verb form is used. */
function explainVerbForm(formKey: VerbFormKey, sentence: string): string {
  const base = toBase(sentence)
  if (formKey === 'masuPast' || formKey === 'ta') {
    if (/昨日|きのう|先週|せんしゅう|去年|きょねん|さっき|昔|むかし|〜た/.test(base)) {
      return 'Động từ chia ở thể Quá khứ vì câu diễn tả hành động đã xảy ra trong quá khứ (có mốc thời gian quá khứ).'
    }
    return 'Động từ chia ở thể Quá khứ để diễn tả hành động đã hoàn tất.'
  }
  if (formKey === 'masuNeg' || formKey === 'nai') {
    return 'Động từ chia ở thể Phủ định để diễn tả việc không thực hiện hành động.'
  }
  if (formKey === 'te') {
    return 'Động từ chia ở thể Te (〜て) để liên kết nối tiếp với vế câu tiếp theo.'
  }
  if (formKey === 'tai') {
    return 'Động từ chia ở thể Mong muốn (〜たい) để diễn tả ý muốn của người nói.'
  }
  if (formKey === 'teKudasai') {
    return 'Động từ chia ở thể 〜てください để đưa ra lời yêu cầu hoặc đề nghị lịch sự.'
  }
  if (formKey === 'volitionalMasu') {
    return 'Động từ chia ở thể 〜ましょう để rủ rê, đề xuất cùng làm.'
  }
  if (formKey === 'dict') {
    return 'Động từ dùng ở thể Từ điển (thể thông thường / ngắn) trong văn phong thân mật hoặc trước các cấu trúc ngữ pháp.'
  }
  return 'Động từ chia ở thể Masu lịch sự (hiện tại / tương lai) tiêu chuẩn.'
}

/** Build 4 distinct particle options including the correct one and distractors. */
function buildParticleOptions(target: string, verb: VerbDetail): string[] {
  const options = new Set<string>([target])

  // 1. Look for mistake particles in @mistake
  for (const m of verb.mistakes) {
    const wrongMatch = m.match(/✗\s*[^✓→]+\s([をにでがへとからまで])\s/i)
    if (wrongMatch?.[1] && wrongMatch[1] !== target) {
      options.add(wrongMatch[1])
    }
  }

  // 2. Add other particles of this verb
  const verbParticles = getVerbParticles(verb)
  for (const vp of verbParticles) {
    if (vp.particle !== target) {
      options.add(vp.particle)
      if (options.size >= 4) break
    }
  }

  // 3. Fill with common particles
  for (const cp of COMMON_PARTICLES) {
    if (options.size >= 4) break
    options.add(cp)
  }

  // Deterministic shuffle based on target
  return Array.from(options).slice(0, 4).sort()
}

/** Build 4 distinct verb form options for multiple-choice selection. */
function buildVerbFormOptions(
  targetKey: VerbFormKey,
  forms: Record<VerbFormKey, VerbFormInfo>,
): { formKey: VerbFormKey; text: string; label: string }[] {
  const chosenKeys = new Set<VerbFormKey>([targetKey])
  const preferred: VerbFormKey[] = ['masu', 'masuPast', 'dict', 'te', 'masuNeg', 'tai', 'volitionalMasu']

  for (const k of preferred) {
    if (chosenKeys.size >= 4) break
    chosenKeys.add(k)
  }

  return Array.from(chosenKeys).map((k) => ({
    formKey: k,
    text: forms[k].text,
    label: forms[k].label,
  }))
}

/** Create questions from a single verb. */
export function generateQuestionsForVerb(verb: VerbDetail, unitId: string): VerbQuestion[] {
  const questions: VerbQuestion[] = []
  const forms = conjugateVerb(verb)
  const allFormsList = Object.values(forms)
  const verbParticles = getVerbParticles(verb)
  const seenStems = new Set<string>()

  // 1. Generate questions from examples
  for (let i = 0; i < verb.examples.length; i++) {
    const ex = verb.examples[i]!
    const matched = identifyVerbForm(ex.jp, verb)
    if (!matched) continue

    const baseJp = toBase(ex.jp)
    // Find particles before the verb
    // Check which verb particles appear in baseJp before the verb match
    const preVerbBase = baseJp.slice(0, matched.matchIndex)
    const candidates = verbParticles.filter((vp) => preVerbBase.includes(vp.particle))

    if (!candidates.length) {
      // Fallback: look for common particles in preVerbBase
      for (const cp of ['に', 'を', 'で', 'と', 'へ', 'が', 'から', 'まで']) {
        if (preVerbBase.includes(cp)) {
          candidates.push({ particle: cp, usage: `${cp} đi kèm với ${verb.dict}`, target: '' })
          break
        }
      }
    }

    for (const cand of candidates) {
      const targetParticle = cand.particle
      const verbTextInSentence = ex.jp.includes(matched.info.text)
        ? matched.info.text
        : ex.jp.includes(matched.info.plainText)
          ? matched.info.plainText
          : matched.matchText
      const verbFuriIndex = ex.jp.lastIndexOf(verbTextInSentence)
      if (verbFuriIndex === -1) continue

      const beforeVerb = ex.jp.slice(0, verbFuriIndex)
      const afterVerb = ex.jp.slice(verbFuriIndex + verbTextInSentence.length)

      // Find the particle in beforeVerb (from right to left, outside furigana)
      const pIdx = findParticleIndexOutsideParens(beforeVerb, targetParticle)
      if (pIdx === -1) continue

      const preParticle = beforeVerb.slice(0, pIdx).trim()
      const between = beforeVerb.slice(pIdx + targetParticle.length).trim()
      const postVerb = afterVerb.trim()

      const stem = `${preParticle} ［${targetParticle}］ ${between ? between + ' ' : ''}［${verbTextInSentence}］${postVerb}`
      if (seenStems.has(stem)) continue
      seenStems.add(stem)

      const particleExplain = cand.usage || `Trợ từ 「${targetParticle}」 đi kèm với động từ ${toBase(verb.dict)}.`
      const verbFormExplain = explainVerbForm(matched.key, ex.jp)

      questions.push({
        id: `${unitId}:${toBase(verb.dict)}:ex:${i}:${targetParticle}`,
        verbDict: verb.dict,
        verbMasu: verb.masu,
        verbType: verb.type,
        verbMeaning: verb.meaning,
        stem,
        preParticle,
        targetParticle,
        between,
        targetVerbText: verbTextInSentence,
        targetFormKey: matched.key,
        postVerb,
        fullJp: ex.jp,
        audioText: toBase(ex.jp),
        meaningVn: ex.vn,
        particleOptions: buildParticleOptions(targetParticle, verb),
        verbFormOptions: buildVerbFormOptions(matched.key, forms),
        verbFormExplain,
        particleExplain,
        allForms: allFormsList,
        allParticles: verbParticles,
        story: verb.story,
      })
    }
  }

  // 2. If story exists, generate questions from story
  if (verb.story) {
    const storySentences = verb.story.jp.split(/(?<=[。！？!?])\s*/).filter(Boolean)
    const storyVnSentences = verb.story.vn.split(/(?<=[.!?])\s*/).filter(Boolean)

    for (let si = 0; si < storySentences.length; si++) {
      const sJp = storySentences[si]!.replace(/\*\*/g, '')
      const sVn = storyVnSentences[si] ?? verb.story.vn
      const matched = identifyVerbForm(sJp, verb)
      if (!matched) continue

      const baseJp = toBase(sJp)
      const preVerbBase = baseJp.slice(0, matched.matchIndex)
      const candidates = verbParticles.filter((vp) => preVerbBase.includes(vp.particle))

      for (const cand of candidates) {
        const targetParticle = cand.particle
        const verbTextInSentence = sJp.includes(matched.info.text)
          ? matched.info.text
          : sJp.includes(matched.info.plainText)
            ? matched.info.plainText
            : matched.matchText
        const verbFuriIndex = sJp.lastIndexOf(verbTextInSentence)
        if (verbFuriIndex === -1) continue

        const beforeVerb = sJp.slice(0, verbFuriIndex)
        const afterVerb = sJp.slice(verbFuriIndex + verbTextInSentence.length)
        const pIdx = findParticleIndexOutsideParens(beforeVerb, targetParticle)
        if (pIdx === -1) continue

        const preParticle = beforeVerb.slice(0, pIdx).trim()
        const between = beforeVerb.slice(pIdx + targetParticle.length).trim()
        const postVerb = afterVerb.trim()

        const stem = `${preParticle} ［${targetParticle}］ ${between ? between + ' ' : ''}［${verbTextInSentence}］${postVerb}`
        if (seenStems.has(stem)) continue
        seenStems.add(stem)

        questions.push({
          id: `${unitId}:${toBase(verb.dict)}:st:${si}:${targetParticle}`,
          verbDict: verb.dict,
          verbMasu: verb.masu,
          verbType: verb.type,
          verbMeaning: verb.meaning,
          stem,
          preParticle,
          targetParticle,
          between,
          targetVerbText: verbTextInSentence,
          targetFormKey: matched.key,
          postVerb,
          fullJp: sJp,
          audioText: toBase(sJp),
          meaningVn: sVn,
          particleOptions: buildParticleOptions(targetParticle, verb),
          verbFormOptions: buildVerbFormOptions(matched.key, forms),
          verbFormExplain: explainVerbForm(matched.key, sJp),
          particleExplain: cand.usage || `Trợ từ 「${targetParticle}」 đi kèm với động từ ${toBase(verb.dict)}.`,
          allForms: allFormsList,
          allParticles: verbParticles,
          story: verb.story,
        })
      }
    }
  }

  // 3. Guarantee that EVERY particle in verb.particles is represented!
  // If a particle has no question yet, generate one from the verb's patterns or templates
  for (const vp of verbParticles) {
    const hasParticleQuestion = questions.some((q) => q.targetParticle === vp.particle)
    if (!hasParticleQuestion) {
      // Find pattern matching this particle
      const pat = verb.patterns.find((p) => p.includes(`] ${vp.particle}`) || p.includes(`］${vp.particle}`))
      const defaultStemPre = pat ? pat.replace(/\[[^\]]+\]/g, '＿＿').replace(new RegExp(`\\s*${vp.particle}.*$`), '') : `＿＿`
      const verbText = forms.masu.text
      const full = `${defaultStemPre} ${vp.particle} ${verbText}。`
      const stem = `${defaultStemPre} ［${vp.particle}］ ［${verbText}］。`

      questions.push({
        id: `${unitId}:${toBase(verb.dict)}:pat:${vp.particle}`,
        verbDict: verb.dict,
        verbMasu: verb.masu,
        verbType: verb.type,
        verbMeaning: verb.meaning,
        stem,
        preParticle: defaultStemPre,
        targetParticle: vp.particle,
        between: '',
        targetVerbText: verbText,
        targetFormKey: 'masu',
        postVerb: '。',
        fullJp: full,
        audioText: toBase(full),
        meaningVn: `Mẫu câu: ${vp.usage}`,
        particleOptions: buildParticleOptions(vp.particle, verb),
        verbFormOptions: buildVerbFormOptions('masu', forms),
        verbFormExplain: 'Dùng thể Masu lịch sự tiêu chuẩn.',
        particleExplain: vp.usage,
        allForms: allFormsList,
        allParticles: verbParticles,
        story: verb.story,
      })
    }
  }

  return questions
}

/** Generate all verb questions for a unit. */
export function generateUnitVerbQuestions(verbs: VerbDetail[], unitId: string): VerbQuestion[] {
  return verbs.flatMap((v) => generateQuestionsForVerb(v, unitId))
}
