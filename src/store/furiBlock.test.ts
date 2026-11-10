import { beforeEach, describe, expect, it } from 'vitest'
import { useFuriBlockStore } from './furiBlock'

describe('useFuriBlockStore', () => {
  beforeEach(() => {
    useFuriBlockStore.getState().clearAll()
  })

  it('initially has no blocked items', () => {
    expect(useFuriBlockStore.getState().items).toEqual({})
    expect(useFuriBlockStore.getState().isBlocked('学校')).toBe(false)
  })

  it('can add, check, and remove blocked words', () => {
    const { addWord, removeWord, isBlocked } = useFuriBlockStore.getState()

    addWord('学校', 'がっこう')
    expect(isBlocked('学校')).toBe(true)
    expect(useFuriBlockStore.getState().items['学校']?.reading).toBe('がっこう')

    removeWord('学校')
    expect(isBlocked('学校')).toBe(false)
    expect(useFuriBlockStore.getState().items['学校']).toBeUndefined()
  })

  it('can toggle words correctly', () => {
    const { toggleWord, isBlocked } = useFuriBlockStore.getState()

    const added = toggleWord('料理', 'りょうり')
    expect(added).toBe(true)
    expect(isBlocked('料理')).toBe(true)

    const removed = toggleWord('料理')
    expect(removed).toBe(false)
    expect(isBlocked('料理')).toBe(false)
  })

  it('can clear all blocked words', () => {
    const { addWord, clearAll } = useFuriBlockStore.getState()

    addWord('日本', 'にほん')
    addWord('勉強', 'べんきょう')
    expect(Object.keys(useFuriBlockStore.getState().items)).toHaveLength(2)

    clearAll()
    expect(Object.keys(useFuriBlockStore.getState().items)).toHaveLength(0)
  })
})

