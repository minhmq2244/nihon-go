import { useState, useRef, useEffect, useMemo } from 'react'
import {
  Play,
  Square,
  Eye,
  Languages,
  Lightbulb,
  ChevronRight,
} from 'lucide-react'
import { Jp } from './Jp'
import { Button, SpeakButton, cx } from './ui'
import { WordQuickLookupModal } from './WordQuickLookupModal'
import { speak, stopSpeaking } from '../lib/speech'
import type { Line, KeywordItem } from '../types'

interface LongDialogueViewerProps {
  dialogue: {
    title: string
    scene: string
    roles: Record<string, string>
    lines: Line[]
  }
  className?: string
}

export function LongDialogueViewer({ dialogue, className }: LongDialogueViewerProps) {
  // Settings & Toggles
  const [showFurigana, setShowFurigana] = useState<boolean>(true)
  const [showMeaning, setShowMeaning] = useState<boolean>(true)
  const [showNuance, setShowNuance] = useState<boolean>(true)
  const [tone, setTone] = useState<'casual' | 'polite'>('casual')
  const [speechRate, setSpeechRate] = useState<number>(1.0)

  // Interactive popup & audio playback state
  const [selectedKeyword, setSelectedKeyword] = useState<KeywordItem | null>(null)
  const [activeLineIdx, setActiveLineIdx] = useState<number | null>(null)
  const [isPlayingAll, setIsPlayingAll] = useState<boolean>(false)
  const isPlayingRef = useRef<boolean>(false)
  const stopRequestedRef = useRef<boolean>(false)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopRequestedRef.current = true
      stopSpeaking()
    }
  }, [])

  // Sequential audio player
  const handlePlayAll = async () => {
    if (isPlayingAll) {
      stopRequestedRef.current = true
      isPlayingRef.current = false
      setIsPlayingAll(false)
      setActiveLineIdx(null)
      stopSpeaking()
      return
    }

    setIsPlayingAll(true)
    isPlayingRef.current = true
    stopRequestedRef.current = false

    for (let i = 0; i < dialogue.lines.length; i++) {
      if (stopRequestedRef.current) break
      setActiveLineIdx(i)
      const line = dialogue.lines[i]
      const textToSpeak = tone === 'polite' && line.politeJp ? line.politeJp : line.jp
      const role = line.speaker === 'A' ? 'A' : 'B'

      await speak(textToSpeak, { role, rate: speechRate })
      if (stopRequestedRef.current) break

      // Small natural pause between speaker turns
      await new Promise((res) => setTimeout(res, 450))
    }

    setIsPlayingAll(false)
    isPlayingRef.current = false
    setActiveLineIdx(null)
  }

  // Count nuances in the entire dialogue
  const totalNuances = useMemo(() => {
    return dialogue.lines.reduce((acc, l) => acc + (l.nuances?.length || (l.note ? 1 : 0)), 0)
  }, [dialogue.lines])

  return (
    <div className={cx('space-y-6', className)}>
      {/* 1. Header Toolbar: Tone & Toggles */}
      <div className="rounded-3xl border border-line bg-surface p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Tone Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-muted/80 border border-line">
            <button
              type="button"
              onClick={() => setTone('casual')}
              className={cx(
                'px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5',
                tone === 'casual'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-sub hover:text-ink',
              )}
            >
              <span>🌱 Thân mật (Tameguchi)</span>
            </button>
            <button
              type="button"
              onClick={() => setTone('polite')}
              className={cx(
                'px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5',
                tone === 'polite'
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'text-sub hover:text-ink',
              )}
            >
              <span>👔 Lịch sự (Desu/Masu)</span>
            </button>
          </div>

          {/* Play All Sequential Audio */}
          <div className="flex items-center gap-2">
            <select
              value={speechRate}
              onChange={(e) => setSpeechRate(Number(e.target.value))}
              className="text-xs font-bold px-2.5 py-1.5 rounded-xl border border-line bg-surface text-ink cursor-pointer"
              title="Tốc độ đọc"
            >
              <option value={0.8}>0.8x Chậm</option>
              <option value={1.0}>1.0x Chuẩn</option>
              <option value={1.2}>1.2x Tự nhiên</option>
            </select>

            <Button
              variant={isPlayingAll ? 'bad' : 'primary'}
              size="sm"
              onClick={handlePlayAll}
              className="font-bold shadow-xs flex items-center gap-1.5"
            >
              {isPlayingAll ? (
                <>
                  <Square size={14} className="fill-current" /> Dừng phát
                </>
              ) : (
                <>
                  <Play size={14} className="fill-current ml-0.5" /> Nghe toàn bộ
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Action Toggles */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-line/60">
          <span className="text-xs font-bold text-sub uppercase tracking-wider mr-1">Hiển thị:</span>

          <button
            type="button"
            onClick={() => setShowFurigana(!showFurigana)}
            className={cx(
              'px-3 py-1 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5',
              showFurigana
                ? 'bg-accent/10 border-accent/30 text-accent'
                : 'bg-muted border-line text-sub line-through',
            )}
          >
            <Languages size={14} />
            <span>Furigana</span>
          </button>

          <button
            type="button"
            onClick={() => setShowMeaning(!showMeaning)}
            className={cx(
              'px-3 py-1 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5',
              showMeaning
                ? 'bg-accent/10 border-accent/30 text-accent'
                : 'bg-muted border-line text-sub line-through',
            )}
          >
            <Eye size={14} />
            <span>Dịch nghĩa</span>
          </button>

          <button
            type="button"
            onClick={() => setShowNuance(!showNuance)}
            className={cx(
              'px-3 py-1 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5',
              showNuance
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-800 dark:text-amber-300 font-extrabold'
                : 'bg-muted border-line text-sub line-through',
            )}
          >
            <Lightbulb size={14} />
            <span>Khẩu ngữ Nuance ({totalNuances})</span>
          </button>
        </div>
      </div>

      {/* 2. Scene Context Header */}
      <div className="rounded-3xl border border-line bg-gradient-to-br from-surface to-muted/40 p-5 sm:p-6 space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-accent text-white">
            Kịch Bản Hội Thoại Thực Chiến
          </span>
          <span className="text-xs text-sub font-semibold">{dialogue.lines.length} lượt thoại</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-ink">{dialogue.title}</h3>
        <p className="text-sm text-sub leading-relaxed">{dialogue.scene}</p>
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold text-sub">
          <span>Nhân vật:</span>
          {Object.entries(dialogue.roles).map(([key, name]) => (
            <span key={key} className="px-2.5 py-1 rounded-lg bg-surface border border-line text-ink">
              {key}: {name}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Dialogue Message Stream */}
      <div className={cx('space-y-5', !showFurigana && 'no-furi')}>
        {dialogue.lines.map((line, idx) => {
          const isYou = line.name === 'あなた' || line.speaker === 'B'
          const isActive = activeLineIdx === idx
          const displayedJp = tone === 'polite' && line.politeJp ? line.politeJp : line.jp
          const hasNuance = (line.nuances && line.nuances.length > 0) || Boolean(line.note)

          return (
            <div
              key={idx}
              className={cx(
                'flex gap-3 sm:gap-4 transition-all duration-200',
                isYou ? 'flex-row-reverse' : 'flex-row',
              )}
            >
              {/* Speaker Avatar */}
              <div
                className={cx(
                  'h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm',
                  isYou
                    ? 'bg-accent text-white'
                    : 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30',
                )}
                title={line.name}
              >
                {line.name ? line.name.slice(0, 2) : line.speaker}
              </div>

              {/* Message Bubble Body */}
              <div
                className={cx(
                  'max-w-[85%] sm:max-w-[78%] rounded-3xl p-4 sm:p-5 border transition-all space-y-2.5',
                  isActive
                    ? 'border-accent ring-2 ring-accent/30 shadow-md bg-accent-soft/30'
                    : isYou
                    ? 'bg-accent/5 border-accent/20'
                    : 'bg-surface border-line shadow-xs',
                )}
              >
                {/* Speaker Name & Role */}
                <div
                  className={cx(
                    'flex items-center gap-2 flex-wrap text-xs font-extrabold',
                    isYou ? 'justify-end' : 'justify-start',
                  )}
                >
                  <span className="text-ink">{line.name || `Người nói ${line.speaker}`}</span>
                  {line.role && (
                    <span className="px-2 py-0.5 rounded-full text-[11px] bg-muted text-sub">
                      {line.role}
                    </span>
                  )}
                  {tone === 'polite' && line.politeJp && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30">
                      Bản lịch sự
                    </span>
                  )}
                </div>

                {/* Japanese Dialogue Line */}
                <div className="flex items-start justify-between gap-3">
                  <div className="text-lg sm:text-xl font-bold text-ink leading-relaxed">
                    <Jp text={displayedJp} />
                  </div>
                  <SpeakButton
                    text={displayedJp}
                    role={line.speaker === 'A' ? 'A' : 'B'}
                    className="shrink-0 h-8 w-8 text-sub hover:text-accent hover:bg-muted"
                  />
                </div>

                {/* Clickable Keywords for Quick Lookup if available */}
                {line.keywords && line.keywords.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] font-bold text-sub">Tra từ nhanh:</span>
                    {line.keywords.map((kw, kwIdx) => (
                      <button
                        key={kwIdx}
                        type="button"
                        onClick={() => setSelectedKeyword(kw)}
                        className="px-2 py-0.5 rounded-lg text-xs font-bold border border-accent/30 bg-accent/10 text-accent hover:bg-accent hover:text-white transition cursor-pointer flex items-center gap-1"
                      >
                        <span>{kw.word}</span>
                        <ChevronRight size={10} />
                      </button>
                    ))}
                  </div>
                )}

                {/* Vietnamese Meaning Translation */}
                {showMeaning && (
                  <p className="text-sm sm:text-base font-semibold text-sub border-t border-line/50 pt-2 leading-relaxed">
                    {line.vn}
                  </p>
                )}

                {/* Amber Nuance Box for Real Spoken Japanese */}
                {showNuance && hasNuance && (
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3 sm:p-3.5 space-y-1.5 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 font-extrabold text-amber-900 dark:text-amber-200">
                      <Lightbulb size={15} className="shrink-0 text-amber-600 dark:text-amber-400" />
                      <span>Khẩu ngữ & Nuance đời thường:</span>
                    </div>

                    {line.nuances && line.nuances.length > 0 ? (
                      <div className="space-y-1.5 pl-5">
                        {line.nuances.map((nu, nuIdx) => (
                          <div key={nuIdx} className="space-y-0.5">
                            <p className="font-bold text-amber-950 dark:text-amber-100">
                              <span className="underline decoration-amber-500/60 font-black">{nu.phrase}</span>: {nu.meaning}
                            </p>
                            <p className="text-amber-900/80 dark:text-amber-300/80 text-[13px] leading-relaxed">
                              {nu.tip}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : line.note ? (
                      <p className="text-amber-900 dark:text-amber-200 pl-5 font-medium leading-relaxed">
                        {line.note}
                      </p>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* 4. Quick Lookup Modal */}
      <WordQuickLookupModal
        item={selectedKeyword}
        onClose={() => setSelectedKeyword(null)}
      />
    </div>
  )
}
