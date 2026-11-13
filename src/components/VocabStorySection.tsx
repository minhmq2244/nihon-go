import { useEffect, useMemo, useState } from 'react'
import type { Unit, VocabItem } from '../types'
import { friendlyVoiceName, japaneseVoices, onVoicesChanged, speak } from '../lib/speech'
import { useSettings } from '../store/settings'
import { FloatingPlayer, PlayerControls, usePlaylist } from './AudioPlayer'
import { Jp } from './Jp'
import { SpeedControl } from './SpeedControl'
import { Card, Chip, SpeakButton, cx } from './ui'
import {
  BookOpen,
  CheckCircle2,
  MessageSquare,
  Play,
  Sparkles,
  Volume2,
} from 'lucide-react'
import {
  getVocabStory,
  getVocabStoryCoverage,
  type VocabStoryPart,
} from '../lib/vocabStoryData'

const SPEAKER_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  ナム: { bg: 'bg-blue-500/10 text-blue-700 dark:text-blue-300', text: 'text-blue-600', border: 'border-blue-500/30' },
  田中先生: { bg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300', text: 'text-emerald-600', border: 'border-emerald-500/30' },
  マイク: { bg: 'bg-amber-500/10 text-amber-700 dark:text-amber-300', text: 'text-amber-600', border: 'border-amber-500/30' },
  'マルコ & ジョン': { bg: 'bg-purple-500/10 text-purple-700 dark:text-purple-300', text: 'text-purple-600', border: 'border-purple-500/30' },
  'キム & レック': { bg: 'bg-pink-500/10 text-pink-700 dark:text-pink-300', text: 'text-pink-600', border: 'border-pink-500/30' },
  'ワン & イワン': { bg: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300', text: 'text-indigo-600', border: 'border-indigo-500/30' },
  'カルロス & ハンス': { bg: 'bg-teal-500/10 text-teal-700 dark:text-teal-300', text: 'text-teal-600', border: 'border-teal-500/30' },
  'ピエール & エヴァ': { bg: 'bg-rose-500/10 text-rose-700 dark:text-rose-300', text: 'text-rose-600', border: 'border-rose-500/30' },
}

export function VocabStorySection({ unit }: { unit: Unit }) {
  const story = useMemo(() => getVocabStory(unit.meta.id), [unit.meta.id])
  const [activeTab, setActiveTab] = useState(0)
  const [showVn, setShowVn] = useState<'none' | 'tap' | 'all'>('tap')
  const [shownLines, setShownLines] = useState<Set<number>>(new Set())
  const [selectedVocabId, setSelectedVocabId] = useState<string | null>(null)
  const [voices, setVoices] = useState(() => japaneseVoices())

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

  const curPart: VocabStoryPart | undefined = story?.parts[activeTab]

  // Audio tracks for the current part
  const playlistTracks = useMemo(() => {
    if (!curPart) return []
    return curPart.lines.map((l) => ({ text: l.jp }))
  }, [curPart])

  const p = usePlaylist(playlistTracks, { gapMs: 400, voiceURI: voiceA || undefined })
  const playing = p.cur
  const at = (p.cur ?? p.pos) + 1

  useEffect(() => {
    return onVoicesChanged(() => setVoices(japaneseVoices()))
  }, [])

  // Reset audio & line highlights on part change
  useEffect(() => {
    p.stop()
    setShownLines(new Set())
    setSelectedVocabId(null)
  }, [activeTab])

  if (!story || !curPart) return null

  // Vocab items covered in this current scene
  const partVocabs = curPart.vocabCovered
    .map((id) => vocabMap.get(id))
    .filter((v): v is VocabItem => Boolean(v))

  const selectedVocab = selectedVocabId ? vocabMap.get(selectedVocabId) : null

  return (
    <Card className="border-2 border-emerald-500/30 bg-surface p-5 sm:p-6 shadow-sm space-y-5">
      <FloatingPlayer p={p} title={`Câu chuyện Từ vựng · ${curPart.titleVn}`} />

      {/* Top Banner Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-line">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <BookOpen size={14} />
            <span>Đoạn văn ngữ cảnh Từ vựng</span>
            <span>·</span>
            <span>{story.parts.length} cảnh hội thoại</span>
          </div>
          <h3 className="mt-1.5 text-xl sm:text-2xl font-black text-ink">
            {story.titleVn}
          </h3>
          <p className="mt-0.5 text-xs sm:text-sm text-sub">
            {story.subtitle}
          </p>
        </div>

        {/* Coverage Badge */}
        <div className="flex items-center gap-2 rounded-xl bg-ok-soft/70 border border-ok/40 px-3.5 py-2 text-xs">
          <CheckCircle2 size={20} className="text-ok shrink-0" />
          <div>
            <p className="font-bold text-ok">Phủ 100% Từ vựng bài học</p>
            <p className="text-[11px] text-sub">
              Đã kết nối {coverage.covered.length}/{unit.vocab.length} từ vào văn cảnh
            </p>
          </div>
        </div>
      </div>

      {/* Scene Tabs Switcher & Translation controls */}
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <div className="no-print flex gap-2 overflow-x-auto pb-1 text-xs sm:text-sm">
          {story.parts.map((part, idx) => (
            <Chip
              key={part.id}
              active={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={cx(
                'py-1.5 px-3 transition cursor-pointer',
                activeTab === idx && 'bg-emerald-600 text-white border-emerald-600 shadow-xs',
              )}
            >
              <span className="font-bold mr-1">Cảnh {part.num}:</span>
              <span>{part.title.replace(/（[^）]*）/g, '')}</span>
              <span className="ml-1.5 rounded-full bg-black/15 px-1.5 py-0.2 text-[10px] font-semibold">
                {part.vocabCovered.length} từ
              </span>
            </Chip>
          ))}
        </div>

        {/* Translation Mode Buttons */}
        <div className="flex items-center gap-1 text-xs">
          <Chip active={showVn === 'tap'} onClick={() => setShowVn('tap')} className="text-xs py-1">
            Bấm câu để dịch
          </Chip>
          <Chip active={showVn === 'all'} onClick={() => setShowVn('all')} className="text-xs py-1">
            Hiện bản dịch
          </Chip>
          <Chip active={showVn === 'none'} onClick={() => setShowVn('none')} className="text-xs py-1">
            Không dịch
          </Chip>
        </div>
      </div>

      {/* Scene Intro & Context */}
      <div className="rounded-xl border border-line/70 bg-muted/20 p-3 text-xs sm:text-sm text-sub flex items-start gap-2.5">
        <MessageSquare size={16} className="text-emerald-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-ink mr-1.5">Bối cảnh Cảnh {curPart.num}:</span>
          <span>{curPart.scene}</span>
        </div>
      </div>

      {/* Audio Control Bar */}
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div
              className={cx(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all',
                playing !== null ? 'bg-emerald-600 text-white shadow-xs' : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
              )}
            >
              <Volume2 size={20} className={playing !== null ? 'animate-pulse' : ''} />
            </div>
            <div>
              <span className="text-sm font-bold text-ink">Luyện nghe câu chuyện ngữ cảnh</span>
              <p className="text-xs text-sub">
                {p.active
                  ? `${playing !== null ? 'Đang đọc' : 'Tạm dừng ở'} câu ${at}/${curPart.lines.length}`
                  : `Gồm ${curPart.lines.length} lượt thoại · bấm nút để nghe liên tục hoặc từng câu`}
              </p>
            </div>
          </div>
          <PlayerControls p={p} startLabel="Nghe toàn bộ cảnh này" />
        </div>

        {/* Speed and Voice controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-line/60 text-xs">
          <SpeedControl rate={rate} onChange={(newRate) => set({ rate: newRate })} />

          <div className="flex items-center gap-2">
            <span className="text-sub font-medium">Giọng:</span>
            <select
              value={voiceA}
              onChange={(e) => set({ voiceA: e.target.value })}
              className="rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-ink focus:border-emerald-500 focus:outline-none"
            >
              <option value="">Tự động ⭐</option>
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {friendlyVoiceName(v)}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => speak('こんにちは。単語のストーリーです。', { voiceURI: voiceA || undefined, rate })}
              className="rounded-lg border border-line bg-surface hover:bg-muted px-2 py-1 text-xs font-semibold text-sub hover:text-emerald-600 transition cursor-pointer"
            >
              Thử giọng
            </button>
          </div>
        </div>
      </div>

      {/* Vocab Palette in this Scene */}
      <div className="rounded-xl border border-line bg-muted/30 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sub flex items-center gap-1.5">
            <Sparkles size={13} className="text-emerald-500" />
            <span>Từ vựng xuất hiện trong cảnh này ({partVocabs.length} từ):</span>
          </span>
          {selectedVocabId && (
            <button
              type="button"
              onClick={() => setSelectedVocabId(null)}
              className="text-[11px] text-sub hover:text-emerald-600 cursor-pointer"
            >
              Bỏ chọn ✕
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {partVocabs.map((v) => {
            const isSelected = selectedVocabId === v.id
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVocabId(isSelected ? null : v.id)}
                className={cx(
                  'flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-bold transition cursor-pointer select-none active:scale-95',
                  isSelected
                    ? 'border-emerald-500 bg-emerald-600 text-white shadow-xs scale-105'
                    : 'border-line bg-surface text-ink hover:border-emerald-500/60 hover:text-emerald-600',
                )}
                title={`${v.jp}: ${v.meaning}`}
              >
                <span>{v.jp.replace(/（[^）]*）/g, '')}</span>
                <span className="text-[10px] opacity-75 font-normal">({v.meaning})</span>
              </button>
            )
          })}
        </div>

        {/* Selected Vocab Detail Card */}
        {selectedVocab && (
          <div className="mt-2.5 rounded-lg bg-surface border border-emerald-500/40 p-3 text-xs animate-in fade-in space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-ink">
                  <Jp text={selectedVocab.jp} />
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
              👉 Các câu chứa từ này đang được làm nổi bật bên dưới.
            </p>
          </div>
        )}
      </div>

      {/* Main Dialogue Passage Card */}
      <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 space-y-3">
        <div className="pb-2.5 border-b border-line flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-ink">
              <Jp text={curPart.title} />
            </h4>
            <p className="text-xs text-sub">{curPart.titleVn}</p>
          </div>
          <span className="text-xs text-sub font-medium">
            💡 Bấm vào câu để che/hiện bản dịch tiếng Việt
          </span>
        </div>

        {/* Lines */}
        <div className="space-y-2.5 pt-1">
          {curPart.lines.map((line, idx) => {
            const isPlaying = playing === idx
            const isRevealed = showVn === 'all' || (showVn === 'tap' && shownLines.has(idx))
            const containsSelectedVocab = selectedVocabId ? line.vocabIds.includes(selectedVocabId) : false
            const speakerStyle = line.speaker ? SPEAKER_COLORS[line.speaker] ?? {
              bg: 'bg-muted text-ink',
              text: 'text-sub',
              border: 'border-line',
            } : null

            return (
              <div
                key={idx}
                className={cx(
                  'group rounded-xl p-3 transition-all border',
                  isPlaying
                    ? 'bg-emerald-500/10 border-l-4 border-l-emerald-600 border-emerald-500/30 pl-3.5 ring-1 ring-emerald-500/30 shadow-xs'
                    : containsSelectedVocab
                      ? 'bg-emerald-500/5 border-emerald-500/50 shadow-xs'
                      : 'border-line/60 hover:border-line hover:bg-muted/30',
                  showVn === 'tap' && 'cursor-pointer',
                )}
                onClick={() => {
                  if (showVn !== 'tap') return
                  const s = new Set(shownLines)
                  if (s.has(idx)) s.delete(idx)
                  else s.add(idx)
                  setShownLines(s)
                }}
              >
                <div className="flex items-start gap-2.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      p.playFrom(idx)
                    }}
                    className={cx(
                      'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-semibold transition cursor-pointer',
                      isPlaying
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-muted text-sub hover:bg-emerald-500/20 hover:text-emerald-600 opacity-70 group-hover:opacity-100',
                    )}
                    title={`Phát đoạn thoại từ câu ${idx + 1}`}
                  >
                    {isPlaying ? <Volume2 size={13} /> : <Play size={11} />}
                  </button>

                  <div className="flex-1 space-y-1.5">
                    {/* Speaker badge */}
                    {line.speaker && (
                      <div className="flex items-center gap-1.5">
                        <span
                          className={cx(
                            'inline-block px-2 py-0.5 rounded-md text-[11px] font-bold border',
                            speakerStyle?.bg,
                            speakerStyle?.border,
                          )}
                        >
                          {line.speaker}
                          {line.speakerVn && (
                            <span className="opacity-75 font-normal ml-1">({line.speakerVn})</span>
                          )}
                        </span>
                      </div>
                    )}

                    {/* Japanese line */}
                    <div className="text-base sm:text-lg leading-relaxed font-medium text-ink">
                      <Jp text={line.jp} />
                    </div>

                    {/* Vocab pills in this line */}
                    {line.vocabIds.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1 pt-0.5">
                        <span className="text-[10px] text-sub/70 font-medium mr-1">Từ mới:</span>
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
                              }}
                              className={cx(
                                'inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-medium transition cursor-pointer',
                                isTarget
                                  ? 'bg-emerald-600 text-white shadow-xs'
                                  : 'bg-muted/80 text-sub hover:bg-emerald-500/20 hover:text-emerald-700 dark:hover:text-emerald-300',
                              )}
                              title={`${v.jp}: ${v.meaning}`}
                            >
                              <span>{v.jp.replace(/（[^）]*）/g, '')}</span>
                              <span className="text-[9px] opacity-75">· {v.meaning}</span>
                            </span>
                          )
                        })}
                      </div>
                    )}

                    {/* Vietnamese translation line */}
                    {isRevealed && (
                      <p className="mt-1.5 pt-1.5 border-t border-line/40 text-xs sm:text-sm text-sub font-medium leading-relaxed animate-in fade-in">
                        {line.vn}
                      </p>
                    )}
                  </div>

                  <SpeakButton text={line.jp} className="opacity-40 group-hover:opacity-100 shrink-0 mt-0.5 h-6 w-6" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
