import { describe, expect, it } from 'vitest'
import {
  PASSIVE_PLAYLISTS,
  getExamPlaylists,
  getMegaMixPlaylist,
  getMegaRealLifePlaylist,
  getPlaylistById,
  getTopicPlaylists,
} from './passiveListeningData'

describe('passiveListeningData', () => {
  it('loads total playlists correctly (5 exam + 11 topic = 16)', () => {
    expect(PASSIVE_PLAYLISTS.length).toBe(16)
    expect(getExamPlaylists().length).toBe(5)
    expect(getTopicPlaylists().length).toBe(11)
  })

  it('provides the featured Mega Mix playlist for exam preparation (b08 to b11)', () => {
    const mega = getMegaMixPlaylist()
    expect(mega).toBeDefined()
    expect(mega.id).toBe('mega-b08-b11')
    expect(mega.tracks.length).toBeGreaterThanOrEqual(12)

    for (const track of mega.tracks) {
      expect(track.lines.length).toBeGreaterThan(0)
      for (const line of track.lines) {
        expect(line.jp.length).toBeGreaterThan(0)
        expect(line.vn.length).toBeGreaterThan(0)
      }
    }
  })

  it('provides the featured Mega Real-Life playlist for Module 01 to 04', () => {
    const mega = getMegaRealLifePlaylist()
    expect(mega).toBeDefined()
    expect(mega.id).toBe('mega-b01-b11')
    expect(mega.tracks.length).toBe(4)

    for (const track of mega.tracks) {
      expect(track.lines.length).toBeGreaterThan(20)
      for (const line of track.lines) {
        expect(line.jp.length).toBeGreaterThan(0)
        expect(line.vn.length).toBeGreaterThan(0)
      }
    }
  })

  it('contains exam playlists for b08, b09, b10, b11', () => {
    const examIds = ['pl-b08', 'pl-b09', 'pl-b10', 'pl-b11']
    for (const id of examIds) {
      const pl = getPlaylistById(id)
      expect(pl, `Playlist ${id} should exist`).toBeDefined()
      expect(pl?.category).toBe('exam')
      expect(pl?.tracks.length).toBeGreaterThan(0)
    }
  })

  it('contains all 10 life topic playlists (cd00 through cd09)', () => {
    for (let i = 0; i <= 9; i++) {
      const id = `pl-cd0${i}`
      const pl = getPlaylistById(id)
      expect(pl, `Topic playlist ${id} should exist`).toBeDefined()
      expect(pl?.category).toBe('topic')
      expect(pl?.tracks.length).toBe(10)
    }
  })
})

