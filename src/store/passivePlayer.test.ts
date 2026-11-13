import { beforeEach, describe, expect, it } from 'vitest'
import { getCurrentLine, getCurrentTrack, usePassivePlayer } from './passivePlayer'
import { getPlaylistById } from '../lib/passiveListeningData'

describe('passivePlayer store', () => {
  beforeEach(() => {
    const pl = getPlaylistById('pl-b08')!
    usePassivePlayer.getState().playPlaylist(pl, 0, 0)
    usePassivePlayer.getState().pause()
  })

  it('initializes with active track and line', () => {
    const state = usePassivePlayer.getState()
    const track = getCurrentTrack(state)
    const line = getCurrentLine(state)

    expect(track).toBeDefined()
    expect(line).toBeDefined()
    expect(track?.unitId).toBe('b08')
  })

  it('can toggle play and pause', () => {
    const store = usePassivePlayer.getState()
    expect(store.isPlaying).toBe(false)

    store.togglePlay()
    expect(usePassivePlayer.getState().isPlaying).toBe(true)

    store.togglePlay()
    expect(usePassivePlayer.getState().isPlaying).toBe(false)
  })

  it('navigates next and previous tracks correctly', () => {
    const pl = getPlaylistById('pl-b08')!
    usePassivePlayer.getState().playPlaylist(pl, 0)

    usePassivePlayer.getState().nextTrack()
    expect(usePassivePlayer.getState().trackIndex).toBe(1)

    usePassivePlayer.getState().prevTrack()
    expect(usePassivePlayer.getState().trackIndex).toBe(0)
  })

  it('can configure mode, gap and sleep timer', () => {
    const store = usePassivePlayer.getState()

    store.setMode('jp_only')
    expect(usePassivePlayer.getState().mode).toBe('jp_only')

    store.setGapMs(1500)
    expect(usePassivePlayer.getState().gapMs).toBe(1500)

    store.setSleepTimer(30)
    expect(usePassivePlayer.getState().sleepMinutes).toBe(30)
    expect(usePassivePlayer.getState().sleepExpiresAt).toBeGreaterThan(Date.now())

    store.setSleepTimer(null)
    expect(usePassivePlayer.getState().sleepMinutes).toBeNull()
    expect(usePassivePlayer.getState().sleepExpiresAt).toBeNull()
  })
})

