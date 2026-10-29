import { describe, expect, it } from 'vitest'
import { conjugateVerb, getVerbGroup, identifyVerbForm } from './verbConjugation'

describe('verbConjugation', () => {
  it('correctly classifies verb groups', () => {
    expect(getVerbGroup({ dict: '会（あ）う', masu: '会（あ）います', type: 'Nhóm I · Tự động từ' })).toBe('I')
    expect(getVerbGroup({ dict: '食（た）べる', masu: '食（た）べます', type: 'Nhóm II · Tha động từ' })).toBe('II')
    expect(getVerbGroup({ dict: '勉強（べんきょう）する', masu: '勉強（べんきょう）します', type: 'Nhóm III · Tha động từ' })).toBe('III')
    expect(getVerbGroup({ dict: '来（く）る', masu: '来（き）ます', type: 'Nhóm III · Tự động từ' })).toBe('III')
  })

  it('conjugates Group 1 verbs correctly', () => {
    const au = conjugateVerb({ dict: '会（あ）う', masu: '会（あ）います', type: 'Nhóm I · Tự động từ' })
    expect(au.masu.plainText).toBe('会います')
    expect(au.masuPast.plainText).toBe('会いました')
    expect(au.masuNeg.plainText).toBe('会いません')
    expect(au.dict.plainText).toBe('会う')
    expect(au.te.plainText).toBe('会って')
    expect(au.ta.plainText).toBe('会った')
    expect(au.nai.plainText).toBe('会わない')
    expect(au.tai.plainText).toBe('会いたい')
    expect(au.volitionalMasu.plainText).toBe('会いましょう')

    // 行く exception: 行って / 行った
    const iku = conjugateVerb({ dict: '行（い）く', masu: '行（い）きます', type: 'Nhóm I · Tự động từ' })
    expect(iku.te.plainText).toBe('行って')
    expect(iku.ta.plainText).toBe('行った')
    expect(iku.nai.plainText).toBe('行かない')

    // ある exception: ない
    const aru = conjugateVerb({ dict: 'ある', masu: 'あります', type: 'Nhóm I · Tự động từ' })
    expect(aru.te.plainText).toBe('あって')
    expect(aru.ta.plainText).toBe('あった')
    expect(aru.nai.plainText).toBe('ない')

    // 入る (Group 1 exception that looks like Group 2)
    const hairu = conjugateVerb({ dict: '入（はい）る', masu: '入（はい）ります', type: 'Nhóm I · Tự động từ' })
    expect(hairu.te.plainText).toBe('入って')
    expect(hairu.ta.plainText).toBe('入った')
    expect(hairu.nai.plainText).toBe('入らない')
  })

  it('conjugates Group 2 verbs correctly', () => {
    const taberu = conjugateVerb({ dict: '食（た）べる', masu: '食（た）べます', type: 'Nhóm II · Tha động từ' })
    expect(taberu.masu.plainText).toBe('食べます')
    expect(taberu.masuPast.plainText).toBe('食べました')
    expect(taberu.te.plainText).toBe('食べて')
    expect(taberu.ta.plainText).toBe('食べた')
    expect(taberu.nai.plainText).toBe('食べない')
    expect(taberu.tai.plainText).toBe('食べたい')
  })

  it('conjugates Group 3 verbs correctly', () => {
    const benkyou = conjugateVerb({ dict: '勉強（べんきょう）する', masu: '勉強（べんきょう）します', type: 'Nhóm III · Tha động từ' })
    expect(benkyou.masu.plainText).toBe('勉強します')
    expect(benkyou.te.plainText).toBe('勉強して')
    expect(benkyou.ta.plainText).toBe('勉強した')
    expect(benkyou.nai.plainText).toBe('勉強しない')
    expect(benkyou.tai.plainText).toBe('勉強したい')

    const kuru = conjugateVerb({ dict: '来（く）る', masu: '来（き）ます', type: 'Nhóm III · Tự động từ' })
    expect(kuru.masu.plainText).toBe('来ます')
    expect(kuru.masuPast.plainText).toBe('来ました')
    expect(kuru.te.plainText).toBe('来て')
    expect(kuru.ta.plainText).toBe('来た')
    expect(kuru.nai.plainText).toBe('来ない')
  })

  it('identifies verb form in sentence', () => {
    const verb = { dict: '会（あ）う', masu: '会（あ）います', type: 'Nhóm I · Tự động từ' }
    const matchPast = identifyVerbForm('昨日、駅で 友達に 会いました。', verb)
    expect(matchPast?.key).toBe('masuPast')

    const matchTe = identifyVerbForm('友達と 会って、ご飯を食べました。', verb)
    expect(matchTe?.key).toBe('te')

    const matchTai = identifyVerbForm('先生に 会いたいです。', verb)
    expect(matchTai?.key).toBe('tai')
  })
})
