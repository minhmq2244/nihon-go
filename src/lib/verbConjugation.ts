import { toBase } from './furigana'

export type VerbGroup = 'I' | 'II' | 'III'

export type VerbFormKey =
  | 'masu'
  | 'masuNeg'
  | 'masuPast'
  | 'masuPastNeg'
  | 'dict'
  | 'te'
  | 'ta'
  | 'nai'
  | 'tai'
  | 'volitionalMasu'
  | 'teKudasai'
  | 'teIru'

export interface VerbFormInfo {
  key: VerbFormKey
  label: string
  shortLabel: string
  text: string // Furigana notation, e.g. "会（あ）います"
  plainText: string // Plain text, e.g. "会います"
  desc: string // Explanatory nuance
}

export const FORM_METADATA: Record<VerbFormKey, { label: string; shortLabel: string; desc: string }> = {
  masu: { label: 'Thể Masu (〜ます)', shortLabel: '〜ます', desc: 'Hiện tại / tương lai lịch sự' },
  masuNeg: { label: 'Thể Masu phủ định (〜ません)', shortLabel: '〜ません', desc: 'Phủ định lịch sự' },
  masuPast: { label: 'Thể Quá khứ (〜ました)', shortLabel: '〜ました', desc: 'Quá khứ lịch sự' },
  masuPastNeg: { label: 'Thể Quá khứ phủ định (〜ませんでした)', shortLabel: '〜ませんでした', desc: 'Quá khứ phủ định lịch sự' },
  dict: { label: 'Thể Từ điển (辞書形)', shortLabel: 'Thể ngắn', desc: 'Nguyên dạng / thể thông thường' },
  te: { label: 'Thể Te (〜て)', shortLabel: '〜て', desc: 'Nối tiếp hành động / liên kết câu' },
  ta: { label: 'Thể Ta (〜た)', shortLabel: '〜た', desc: 'Quá khứ thông thường (thể ngắn)' },
  nai: { label: 'Thể Nai (〜ない)', shortLabel: '〜ない', desc: 'Phủ định thông thường (thể ngắn)' },
  tai: { label: 'Thể Mong muốn (〜たい)', shortLabel: '〜たい', desc: 'Diễn tả mong muốn làm gì' },
  volitionalMasu: { label: 'Thể Rủ rê (〜ましょう)', shortLabel: '〜ましょう', desc: 'Rủ rê, đề nghị cùng làm' },
  teKudasai: { label: 'Thể Xin hãy (〜てください)', shortLabel: '〜てください', desc: 'Yêu cầu, đề nghị lịch sự' },
  teIru: { label: 'Thể Tiếp diễn (〜ています)', shortLabel: '〜ています', desc: 'Đang diễn ra hoặc kết quả hành động' },
}

/** Determine verb group from type and dictionary / masu forms. */
export function getVerbGroup(verb: { dict: string; masu?: string; type?: string }): VerbGroup {
  const type = verb.type ?? ''
  const dictBase = toBase(verb.dict).replace(/\s+/g, '')

  if (type.includes('Nhóm III') || dictBase.endsWith('する') || dictBase.endsWith('くる') || dictBase.endsWith('来る')) {
    return 'III'
  }
  if (type.includes('Nhóm II')) {
    return 'II'
  }
  if (type.includes('Nhóm I')) {
    return 'I'
  }

  // Fallback heuristic if type is not specified:
  if (!dictBase.endsWith('る')) return 'I'
  // If ends in る, check masu stem if available
  if (verb.masu) {
    const masuStem = toBase(verb.masu).replace(/ます$/, '')
    if (dictBase === masuStem + 'る') return 'II'
  }
  return 'I'
}

/** Conjugates a verb into all key forms while preserving furigana notation. */
export function conjugateVerb(verb: { dict: string; masu: string; type?: string }): Record<VerbFormKey, VerbFormInfo> {
  const group = getVerbGroup(verb)
  const dictFuri = verb.dict.trim()
  const masuFuri = verb.masu.trim()
  const dictBase = toBase(dictFuri).replace(/\s+/g, '')

  // masuStem is masu without "ます"
  const masuStem = masuFuri.replace(/ます$/, '')

  const f: Record<VerbFormKey, string> = {
    masu: masuStem + 'ます',
    masuNeg: masuStem + 'ません',
    masuPast: masuStem + 'ました',
    masuPastNeg: masuStem + 'ませんでした',
    tai: masuStem + 'たい',
    volitionalMasu: masuStem + 'ましょう',
    dict: dictFuri,
    te: '',
    ta: '',
    nai: '',
    teKudasai: '',
    teIru: '',
  }

  if (group === 'III') {
    if (dictBase.endsWith('来る') || dictBase.endsWith('くる')) {
      f.te = '来（き）て'
      f.ta = '来（き）た'
      f.nai = '来（こ）ない'
    } else {
      // e.g. 勉強（べんきょう）する -> prefix is 勉強（べんきょう）
      const prefix = dictFuri.replace(/する$/, '')
      f.te = prefix + 'して'
      f.ta = prefix + 'した'
      f.nai = prefix + 'しない'
    }
  } else if (group === 'II') {
    f.te = masuStem + 'て'
    f.ta = masuStem + 'た'
    f.nai = masuStem + 'ない'
  } else {
    // Group I (Godan)
    const root = dictFuri.slice(0, -1)
    const last = dictBase.slice(-1)

    // te & ta
    if (dictBase.endsWith('行く') || dictBase === 'いく') {
      f.te = root + 'って'
      f.ta = root + 'った'
    } else if ('うつる'.includes(last)) {
      f.te = root + 'って'
      f.ta = root + 'った'
    } else if ('むぶぬ'.includes(last)) {
      f.te = root + 'んで'
      f.ta = root + 'んだ'
    } else if (last === 'く') {
      f.te = root + 'いて'
      f.ta = root + 'いた'
    } else if (last === 'ぐ') {
      f.te = root + 'いで'
      f.ta = root + 'いだ'
    } else if (last === 'す') {
      f.te = root + 'して'
      f.ta = root + 'した'
    } else {
      f.te = root + 'って'
      f.ta = root + 'った'
    }

    // nai
    if (dictBase === 'ある') {
      f.nai = 'ない'
    } else {
      const naiEnd: Record<string, string> = {
        う: 'わない',
        つ: 'たない',
        る: 'らない',
        く: 'かない',
        ぐ: 'がない',
        す: 'さない',
        む: 'まない',
        ぶ: 'ばない',
        ぬ: 'なない',
      }
      f.nai = root + (naiEnd[last] ?? 'かない')
    }
  }

  f.teKudasai = f.te + ' ください'
  f.teIru = f.te + ' います'

  const result = {} as Record<VerbFormKey, VerbFormInfo>
  for (const k of Object.keys(FORM_METADATA) as VerbFormKey[]) {
    result[k] = {
      key: k,
      label: FORM_METADATA[k].label,
      shortLabel: FORM_METADATA[k].shortLabel,
      text: f[k],
      plainText: toBase(f[k]),
      desc: FORM_METADATA[k].desc,
    }
  }
  return result
}

/** Get list of all forms for display in cheat sheet or selection menus. */
export function getFormList(verb: { dict: string; masu: string; type?: string }): VerbFormInfo[] {
  const record = conjugateVerb(verb)
  const order: VerbFormKey[] = ['masu', 'masuPast', 'masuNeg', 'masuPastNeg', 'dict', 'te', 'ta', 'nai', 'tai', 'volitionalMasu', 'teKudasai', 'teIru']
  return order.map((k) => record[k])
}

/** Identify which form of a verb appears in a given sentence. */
export function identifyVerbForm(
  sentence: string,
  verb: { dict: string; masu: string; type?: string },
): { key: VerbFormKey; info: VerbFormInfo; matchIndex: number; matchText: string } | null {
  const forms = conjugateVerb(verb)
  const baseSentence = toBase(sentence)

  // Prioritize longer forms first to avoid partial prefix collisions
  const sortedKeys = (Object.keys(forms) as VerbFormKey[]).sort((a, b) => forms[b].plainText.length - forms[a].plainText.length)

  for (const k of sortedKeys) {
    const plain = forms[k].plainText
    const idx = baseSentence.indexOf(plain)
    if (idx !== -1) {
      return {
        key: k,
        info: forms[k],
        matchIndex: idx,
        matchText: plain,
      }
    }
  }

  // Also check if sentence ends with a variant like 〜たいです, 〜てください, etc.
  if (baseSentence.includes(forms.tai.plainText + 'です')) {
    return {
      key: 'tai',
      info: forms.tai,
      matchIndex: baseSentence.indexOf(forms.tai.plainText),
      matchText: forms.tai.plainText + 'です',
    }
  }

  return null
}
