import { describe, expect, it } from 'vitest'
import {
  SPEED_SPEAKING_TOPICS,
  formatQuestionDisplay,
  formatQuestionSpeech,
} from './speedSpeakingData'

describe('speedSpeakingData', () => {
  it('has all 9 topics defined', () => {
    expect(SPEED_SPEAKING_TOPICS).toHaveLength(9)
  })

  it('contains expected question counts per topic', () => {
    const counts = SPEED_SPEAKING_TOPICS.map((t) => ({ id: t.id, count: t.questions.length }))
    expect(counts).toEqual([
      { id: 'tari-tari', count: 4 },
      { id: 'narimasu', count: 4 },
      { id: 'kanou-base', count: 10 },
      { id: 'kanou-char', count: 10 },
      { id: 'ryouto', count: 10 },
      { id: 'toki', count: 8 },
      { id: 'te-iru', count: 6 },
      { id: 'shumi-kikou', count: 8 },
      { id: 'cho-nhan', count: 6 },
    ])
  })

  it('has non-empty fields in every question', () => {
    for (const topic of SPEED_SPEAKING_TOPICS) {
      for (const q of topic.questions) {
        expect(q.id).toBeTruthy()
        expect(q.q).toBeTruthy()
        expect(q.qVn).toBeTruthy()
        expect(q.hint).toBeTruthy()
        expect(q.aJp).toBeTruthy()
        expect(q.aVn).toBeTruthy()
      }
    }
  })

  it('properly formats question for speech synthesis', () => {
    const rawQ = '～さんは日曜日、なにをしますか。'
    // Default / Bạn -> あなた
    expect(formatQuestionSpeech(rawQ)).toBe('あなたは日曜日、なにをしますか。')
    expect(formatQuestionSpeech(rawQ, 'Bạn')).toBe('あなたは日曜日、なにをしますか。')
    expect(formatQuestionSpeech(rawQ, 'あなた')).toBe('あなたは日曜日、なにをしますか。')

    // Custom name -> Name + さん
    expect(formatQuestionSpeech(rawQ, 'フン')).toBe('フンさんは日曜日、なにをしますか。')
    expect(formatQuestionSpeech(rawQ, 'ナム')).toBe('ナムさんは日曜日、なにをしますか。')
  })

  it('properly formats question for display', () => {
    const rawQ = '～さんは日曜日、なにをしますか。'
    expect(formatQuestionDisplay(rawQ)).toBe('～さん(Bạn)は日曜日、なにをしますか。')
    expect(formatQuestionDisplay(rawQ, 'フン')).toBe('フンさんは日曜日、なにをしますか。')
  })
})

