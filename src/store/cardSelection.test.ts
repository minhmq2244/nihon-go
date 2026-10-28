import { describe, it, expect, beforeEach } from 'vitest'
import { useCardSelection } from './cardSelection'

describe('useCardSelection', () => {
  beforeEach(() => {
    useCardSelection.getState().resetAll()
  })

  it('initially has no selections for a deckKey', () => {
    const { selections } = useCardSelection.getState()
    expect(selections['b01:vocab']).toBeUndefined()
  })

  it('can set specific card selections', () => {
    useCardSelection.getState().setSelection('b01:vocab', ['card-1', 'card-2'])
    const { selections } = useCardSelection.getState()
    expect(selections['b01:vocab']).toEqual(['card-1', 'card-2'])
  })

  it('can toggle cards correctly', () => {
    const allCards = [{ id: 'c1' }, { id: 'c2' }, { id: 'c3' }]

    // First toggle when deck has no prior selection: starts from allCards, removes c2
    useCardSelection.getState().toggleCard('b01:vocab', 'c2', allCards)
    expect(useCardSelection.getState().selections['b01:vocab']).toEqual(['c1', 'c3'])

    // Toggle c2 back: adds c2
    useCardSelection.getState().toggleCard('b01:vocab', 'c2', allCards)
    expect(useCardSelection.getState().selections['b01:vocab']).toEqual(['c1', 'c3', 'c2'])
  })

  it('can select all and clear selection', () => {
    useCardSelection.getState().selectAll('b01:vocab', ['c1', 'c2', 'c3'])
    expect(useCardSelection.getState().selections['b01:vocab']).toEqual(['c1', 'c2', 'c3'])

    useCardSelection.getState().clearSelection('b01:vocab')
    expect(useCardSelection.getState().selections['b01:vocab']).toEqual([])
  })

  it('can reset deck selection back to default', () => {
    useCardSelection.getState().setSelection('b01:vocab', ['c1'])
    expect(useCardSelection.getState().selections['b01:vocab']).toBeDefined()

    useCardSelection.getState().resetDeckSelection('b01:vocab')
    expect(useCardSelection.getState().selections['b01:vocab']).toBeUndefined()
  })
})
