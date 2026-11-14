import { useEffect, useMemo, useState } from 'react'
import type { Unit, VocabItem } from '../types'
import { toBase, type Seg } from '../lib/furigana'
import { friendlyVoiceName, japaneseVoices, onVoicesChanged, speak } from '../lib/speech'
import { useSettings } from '../store/settings'
import { useFuriBlockStore } from '../store/furiBlock'
import { FloatingPlayer, PlayerControls, usePlaylist } from './AudioPlayer'
import { Jp } from './Jp'
import { SpeedControl } from './SpeedControl'
import { Button, Card, Chip, SpeakButton, cx } from './ui'
import { BookOpen, CheckCircle2, Play, Sparkles, Volume2 } from 'lucide-react'
import { getVocabStory, getVocabStoryCoverage } from '../lib/vocabStoryData'
import { KanjiBlockManagerModal, KanjiBlockPopover, type PopoverState } from './KanjiBlockManager'

/** Lines that start a new speaker or block keep their own line inside the passage */
const NEW_LINE = /^(【|[^\s、。「」]{1,10}[:：]「|「)/

export function VocabStorySection({ unit }: { unit: Unit }) {
  const story = useMemo(() => getVocabStory(unit.meta.id), [unit.meta.id])
  const [showVn, setShowVn] = useState<'none' | 'tap' | 'all'>('tap')
  const [sel, setSel] = useState<number | null>(null)
  const [selectedVocabId, setSelectedVocabId] = useState<string | null>(null)
  const [voices, setVoices] = useState(() => japaneseVoices())

  const blockedItems = useFuriBlockStore((s) => s.items)
  const blockedCount = Object.keys(blockedItems).length
  const [popover, setPopover] = useState<PopoverState | null>(null)
  const [showBlockManager, setShowBlockManager] = useState(false)

  const handleRubyClick = (seg: Seg, e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setPopover({ seg, rect })
  }

  const { rate, voiceA, set } = useSettings()

  const vocabMap = useMemo(() => {
    const map = new Map<string, VocabItem>()
    for (const v of unit.vocab) {
      map.set(v.id, v)
    }
    return map
  }, [unit.vocab])

  const coverage = useMemo(() => {
    if (!story) return { covered: [], missing: [], ratio: 0, allCoveredIds: new Set<string>() }
    return getVocabStoryCoverage(story, unit.vocab)
  }, [story, unit.vocab])

  const playlistTracks = useMemo(() => {
    if (!story) return []
    return story.lines.map((l) => ({ text: l.jp }))
  }, [story])

  const p = usePlaylist(playlistTracks, { gapMs: 380, voiceURI: voiceA || undefined })
  const playing = p.cur
  const at = (p.cur ?? p.pos) + 1

  useEffect(() => {
    return onVoicesChanged(() => setVoices(japaneseVoices()))
  }, [])

  // When story changes or unit changes, reset audio & selection
  useEffect(() => {
    p.stop()
    setSel(null)
    setSelectedVocabId(null)
    setPopover(null)
  }, [unit.meta.id])

  if (!story) return null

  const line = sel !== null ? story.lines[sel] : undefined
  const selectedVocab = selectedVocabId ? vocabMap.get(selectedVocabId) : null

  return (
    <div className="scroll-mt-32 space-y-4">
      <FloatingPlayer p={p} title={`Đoạn văn Từ vựng · ${story.titleVn}`} />

      {/* Top Header & Translation Control Chips */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
          <BookOpen size={14} />
          <span>Đoạn văn ngữ cảnh Từ vựng</span>
          <span>·</span>
          <span>{story.lines.length} câu</span>
        </div>

        <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm">
          <Chip active={showVn === 'tap'} onClick={() => setShowVn('tap')}>
            Bấm câu để xem nghĩa
          </Chip>
          <Chip active={showVn === 'all'} onClick={() => setShowVn('all')}>
            Hiện bản dịch
          </Chip>
          <Chip active={showVn === 'none'} onClick={() => setShowVn('none')}>
            Không dịch
          </Chip>
          <Chip
            active={showBlockManager}
            onClick={() => setShowBlockManager(true)}
            className={blockedCount > 0 ? 'bg-accent/15 text-accent font-semibold ring-1 ring-accent/30' : ''}
            title="Quản lý danh sách các chữ Hán luôn giữ Furigana kể cả khi tắt ふりがな toàn trang web"
          >
            🛡️ Khóa Furigana {blockedCount > 0 ? `(${blockedCount})` : ''}
          </Chip>
        </div>
      </div>

      <div className="flex items-center gap-2 px-1 text-xs text-sub">
        <span className="font-semibold text-emerald-600 dark:text-emerald-400">💡 Mẹo:</span>
        <span>Bấm trực tiếp vào bất kỳ chữ Hán nào trong đoạn văn để <b>Khóa Furigana (Add block)</b> để luôn giữ Furigana kể cả khi tắt Furigana toàn web.</span>
      </div>

      {/* Audio Player Card (styled identically to ReadingTab) */}
      <Card className="p-5 border-emerald-500/30 bg-gradient-to-br from-surface via-surface to-emerald-500/10 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={cx(
                'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-xs transition-all',
                playing !== null ? 'bg-emerald-600 text-white shadow-md' : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
              )}
            >
              <Volume2 size={24} className={playing !== null ? 'animate-pulse' : ''} />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold text-ink">Đọc cả đoạn văn</span>
              <p className="text-xs sm:text-sm text-sub mt-0.5">
                {p.active
                  ? `${playing !== null ? 'Đang đọc' : 'Tạm dừng ở'} câu ${at}/${story.lines.length} · thanh điều khiển luôn hiện ở cuối màn hình khi bạn cuộn`
                  : `Đoạn văn kết nối toàn bộ từ mới gồm ${story.lines.length} câu · bấm số câu để phát từ câu đó`}
              </p>
            </div>
          </div>
          <PlayerControls p={p} startLabel="Đọc cả đoạn" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-3">
          <SpeedControl rate={rate} onChange={(newRate) => set({ rate: newRate })} />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-sub">Giọng đọc:</span>
            <select
              value={voiceA}
              onChange={(e) => set({ voiceA: e.target.value })}
              className="max-w-[230px] sm:max-w-[280px] truncate rounded-xl border border-line bg-surface px-3 py-1.5 text-xs sm:text-sm font-medium text-ink outline-none focus:ring-2 focus:ring-emerald-500/30 cursor-pointer shadow-xs"
              aria-label="Chọn giọng đọc tiếng Nhật"
              title="Chọn giọng đọc tiếng Nhật"
            >
              <option value="">Tự động (Tự nhiên nhất ⭐)</option>
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {friendlyVoiceName(v)}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => speak('こんにちは。単語のストーリーです。', { voiceURI: voiceA || undefined, rate })}
              className="rounded-xl border border-line bg-surface hover:bg-muted px-2.5 py-1.5 text-xs font-semibold text-sub hover:text-emerald-600 transition cursor-pointer shadow-xs"
              title="Thử phát âm giọng đọc này"
            >
              Thử giọng
            </button>
          </div>
        </div>
      </Card>

      {/* Main Text Card (Continuous single passage, identical layout to ReadingTab) */}
      <Card className="p-6 sm:p-7 space-y-4">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              {story.genre}
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-ok bg-ok-soft/70 border border-ok/30 px-2.5 py-0.5 rounded-full">
              <CheckCircle2 size={14} />
              <span>Phủ {coverage.covered.length}/{unit.vocab.length} từ vựng ({Math.round(coverage.ratio * 100)}%)</span>
            </div>
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-ink">
            <Jp text={story.title} onRubyClick={handleRubyClick} />
          </h2>
          <p className="mt-1 text-base text-sub font-medium">{story.titleVn}</p>
        </div>

        {/* Continuous Flowing Paragraph with clickable sentences */}
        <p className="text-xl leading-[2.5] font-medium text-ink">
          {story.lines.map((l, i) => {
            const isPlaying = playing === i
            const isSelected = sel === i
            const containsSelectedVocab = selectedVocabId ? l.vocabIds.includes(selectedVocabId) : false

            return (
              <span key={i}>
                {i > 0 && NEW_LINE.test(toBase(l.jp)) && <br />}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => setSel(sel === i ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key !== 'Enter' && e.key !== ' ') return
                    e.preventDefault()
                    setSel(sel === i ? null : i)
                  }}
                  className={cx(
                    'cursor-pointer rounded-md px-1 py-0.5 transition',
                    isPlaying
                      ? 'bg-emerald-500/20 ring-1 ring-emerald-500/40 text-emerald-950 dark:text-emerald-100 font-semibold'
                      : isSelected
                        ? 'bg-cta/35'
                        : containsSelectedVocab
                          ? 'bg-emerald-500/10 underline decoration-emerald-500 underline-offset-4'
                          : 'hover:bg-muted',
                  )}
                  title={`Câu ${i + 1} · bấm để xem nghĩa / nghe lại`}
                >
                  <Jp text={l.jp} onRubyClick={handleRubyClick} />
                </span>{' '}
              </span>
            )
          })}
        </p>

        {/* Sticky sentence translation and audio drawer (identical to ReadingTab) */}
        {line && (
          <div className="sticky bottom-24 z-10 mt-4 rounded-2xl border border-emerald-500/40 bg-surface p-4 shadow-md animate-in fade-in space-y-2">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                Câu {sel! + 1}/{story.lines.length}
              </span>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" onClick={() => void speak(line.jp, { voiceURI: voiceA || undefined, rate })}>
                  🔊 Nghe câu này
                </Button>
                <Button size="sm" onClick={() => p.playFrom(sel!)}>
                  <Play size={13} /> Đọc từ câu này
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setSel(null)} aria-label="Đóng">
                  ✕
                </Button>
              </div>
            </div>

            <p className="text-lg text-ink font-medium leading-relaxed">
              <Jp text={line.jp} onRubyClick={handleRubyClick} />
            </p>

            {showVn !== 'none' && (
              <p className="text-base font-medium text-sub">{line.vn}</p>
            )}

            {/* Vocab words in this line */}
            {line.vocabIds && line.vocabIds.length > 0 && (
              <div className="pt-2 border-t border-line/60 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-sub font-semibold">Từ mới trong câu:</span>
                {line.vocabIds.map((vid) => {
                  const v = vocabMap.get(vid)
                  if (!v) return null
                  const isTarget = selectedVocabId === vid
                  return (
                    <span
                      key={vid}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedVocabId(isTarget ? null : vid)
                        void speak(v.jp, { voiceURI: voiceA || undefined, rate })
                      }}
                      className={cx(
                        'inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-bold transition cursor-pointer',
                        isTarget
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:brightness-110',
                      )}
                      title={`${v.jp}: ${v.meaning} (Bấm để nghe phát âm)`}
                    >
                      <span>{v.jp.replace(/（[^）]*）/g, '')}</span>
                      <span className="opacity-75 font-normal">· {v.meaning}</span>
                    </span>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Full Vietnamese Translation (shown when showVn === 'all') */}
        {showVn === 'all' && (
          <div className="mt-5 rounded-2xl bg-muted/60 p-4 text-base leading-relaxed text-sub animate-in fade-in">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Bản dịch toàn bộ đoạn văn:
            </p>
            {story.lines.map((l, i) => (
              <span key={i}>
                {i > 0 && NEW_LINE.test(toBase(l.jp)) && <br />}
                {l.vn}{' '}
              </span>
            ))}
          </div>
        )}

        {/* Vocab Coverage Glossary */}
        <div className="mt-6 pt-4 border-t border-line space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-sub flex items-center gap-1.5">
              <Sparkles size={14} className="text-emerald-500" />
              <span>Từ vựng bài học xuất hiện trong đoạn văn ({coverage.covered.length} từ):</span>
            </span>
            {selectedVocabId && (
              <button
                type="button"
                onClick={() => setSelectedVocabId(null)}
                className="text-xs text-sub hover:text-emerald-600 cursor-pointer"
              >
                Bỏ chọn ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {coverage.covered.map((v) => {
              const isSelected = selectedVocabId === v.id
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setSelectedVocabId(isSelected ? null : v.id)
                    void speak(v.jp, { voiceURI: voiceA || undefined, rate })
                  }}
                  className={cx(
                    'flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-bold transition cursor-pointer select-none active:scale-95',
                    isSelected
                      ? 'border-emerald-500 bg-emerald-600 text-white shadow-xs scale-105'
                      : 'border-line bg-surface text-ink hover:border-emerald-500/60 hover:text-emerald-600',
                  )}
                  title={`${v.jp}: ${v.meaning} (Bấm để nghe & làm nổi bật câu)`}
                >
                  <span>{v.jp.replace(/（[^）]*）/g, '')}</span>
                  <span className="text-[10px] opacity-75 font-normal">({v.meaning})</span>
                </button>
              )
            })}
          </div>

          {selectedVocab && (
            <div className="rounded-xl bg-surface border border-emerald-500/40 p-3 text-xs animate-in fade-in space-y-1 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-ink">
                    <Jp text={selectedVocab.jp} onRubyClick={handleRubyClick} />
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    {selectedVocab.meaning}
                  </span>
                </div>
                <SpeakButton text={selectedVocab.jp} className="h-6 w-6" />
              </div>
              {selectedVocab.note && (
                <p className="text-[11px] text-sub leading-relaxed">{selectedVocab.note}</p>
              )}
              <p className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 font-medium">
                👉 Câu chứa từ này đang được gạch chân và làm nổi bật trong đoạn văn ở trên.
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Popover & Modal Quản lý khóa Furigana (Add block) */}
      <KanjiBlockPopover popover={popover} onClose={() => setPopover(null)} />
      <KanjiBlockManagerModal open={showBlockManager} onClose={() => setShowBlockManager(false)} />
    </div>
  )
}
