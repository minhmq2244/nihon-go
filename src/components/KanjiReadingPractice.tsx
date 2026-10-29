import { useEffect, useMemo, useState } from 'react'
import type { Unit } from '../types'
import { setKey } from '../lib/progressInfo'
import { friendlyVoiceName, japaneseVoices, onVoicesChanged, speak } from '../lib/speech'
import { useProgress } from '../store/progress'
import { useSettings } from '../store/settings'
import { FloatingPlayer, PlayerControls, usePlaylist } from './AudioPlayer'
import { Jp } from './Jp'
import { SpeedControl } from './SpeedControl'
import { Card, Chip, SpeakButton, cx } from './ui'
import { BookOpen, CheckCircle2, Play, Volume2 } from 'lucide-react'
import { getKanjiCoverage, getKanjiPassages, type KanjiPassage } from '../lib/kanjiReadingsData'

export function KanjiReadingPractice({ unit }: { unit: Unit }) {
  const passages = useMemo(() => getKanjiPassages(unit), [unit])
  const [activeTab, setActiveTab] = useState(0)
  const [showVn, setShowVn] = useState<'none' | 'tap' | 'all'>('tap')
  const [shownLines, setShownLines] = useState<Set<number>>(new Set())
  const [selectedKanji, setSelectedKanji] = useState<string | null>(null)
  const [showQuiz, setShowQuiz] = useState(true)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
  const [voices, setVoices] = useState(() => japaneseVoices())

  const { rate, voiceA, set } = useSettings()
  const saveSet = useProgress((s) => s.saveSet)

  const curPassage: KanjiPassage | undefined = passages[activeTab]
  const unitKanji = unit.kanji ?? []

  const coverage = useMemo(() => {
    if (!curPassage) return { covered: [], missing: [], ratio: 1 }
    return getKanjiCoverage(curPassage, unitKanji)
  }, [curPassage, unitKanji])

  // Playlist for full audio playback
  const playlistTracks = useMemo(() => {
    if (!curPassage) return []
    return curPassage.lines.map((l) => ({ text: l.jp }))
  }, [curPassage])

  const p = usePlaylist(playlistTracks, { gapMs: 380, voiceURI: voiceA || undefined })
  const playing = p.cur
  const at = (p.cur ?? p.pos) + 1

  useEffect(() => {
    return onVoicesChanged(() => setVoices(japaneseVoices()))
  }, [])

  // When changing passage, reset audio & answer state
  useEffect(() => {
    p.stop()
    setShownLines(new Set())
    setSelectedKanji(null)
  }, [activeTab])

  // Save progress when all questions for the passage are answered
  useEffect(() => {
    if (!curPassage || !curPassage.questions.length) return
    const answeredCount = curPassage.questions.filter((q) => quizAnswers[q.id] !== undefined).length
    if (answeredCount === curPassage.questions.length) {
      const correctCount = curPassage.questions.filter((q) => quizAnswers[q.id] === q.correct).length
      saveSet(setKey(unit.meta.id, 'ly-thuyet', `kanji-p${curPassage.num}`), correctCount, curPassage.questions.length)
    }
  }, [quizAnswers, curPassage, unit.meta.id, saveSet])

  if (!curPassage || !unitKanji.length) return null

  return (
    <Card className="border-2 border-accent/30 bg-surface p-5 sm:p-6 shadow-sm space-y-5">
      <FloatingPlayer p={p} title={`Luyện đọc chữ Hán · ${curPassage.titleVn}`} />

      {/* Top Banner Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-line">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
            <BookOpen size={14} />
            <span>Luyện đọc ứng dụng chữ Hán</span>
            <span>·</span>
            <span>3 đoạn văn</span>
          </div>
          <h3 className="mt-1.5 text-xl sm:text-2xl font-black text-ink">
            Đoạn Văn Thực Hành Trọn Bộ Kanji Đã Học
          </h3>
          <p className="mt-0.5 text-xs sm:text-sm text-sub">
            Củng cố cách đọc và ghi nhớ ngữ cảnh bằng 3 đoạn văn sử dụng toàn bộ {unitKanji.length} chữ Hán trong bài.
          </p>
        </div>

        {/* Kanji Coverage Badge */}
        <div className="flex items-center gap-2 rounded-xl bg-ok-soft/60 border border-ok/40 px-3 py-2 text-xs">
          <CheckCircle2 size={18} className="text-ok shrink-0" />
          <div>
            <p className="font-bold text-ok">Phủ 100% Kanji bài học</p>
            <p className="text-[11px] text-sub">
              {coverage.covered.length}/{unitKanji.length} chữ Hán đã xuất hiện
            </p>
          </div>
        </div>
      </div>

      {/* 3 Passage Switcher Chips */}
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <div className="no-print flex gap-2 overflow-x-auto pb-1 text-xs sm:text-sm">
          {passages.map((psg, idx) => (
            <Chip
              key={psg.id}
              active={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className="py-1.5 px-3"
            >
              <span className="font-bold mr-1">Đoạn {psg.num}:</span>
              <span>{psg.title.replace(/（[^）]*）/g, '')}</span>
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
          <Chip active={showQuiz} onClick={() => setShowQuiz(!showQuiz)} className="text-xs py-1">
            Câu hỏi: {showQuiz ? 'bật' : 'tắt'}
          </Chip>
        </div>
      </div>

      {/* Interactive Kanji Bar (Click any Kanji to see its details and highlight) */}
      <div className="rounded-xl border border-line bg-muted/30 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sub">
            Chữ Hán trong bài (bấm chữ để làm nổi bật & xem âm Hán Việt):
          </span>
          {selectedKanji && (
            <button
              type="button"
              onClick={() => setSelectedKanji(null)}
              className="text-[11px] text-sub hover:text-accent cursor-pointer"
            >
              Bỏ chọn ✕
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {unitKanji.map((k) => {
            const isCovered = coverage.covered.includes(k.char)
            const isSelected = selectedKanji === k.char

            return (
              <button
                key={k.char}
                type="button"
                onClick={() => setSelectedKanji(isSelected ? null : k.char)}
                className={cx(
                  'flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-bold transition cursor-pointer select-none active:scale-95',
                  isSelected
                    ? 'border-accent bg-accent text-white shadow-xs scale-105'
                    : isCovered
                      ? 'border-line bg-surface text-ink hover:border-accent hover:text-accent'
                      : 'border-line/40 bg-surface/40 text-sub/50',
                )}
                title={`${k.char} (${k.hanviet}): ${k.onkun}`}
              >
                <span className="text-sm font-black">{k.char}</span>
                <span className="text-[10px] opacity-80">{k.hanviet}</span>
              </button>
            )
          })}
        </div>

        {selectedKanji && (
          <div className="mt-2 rounded-lg bg-surface border border-accent/40 p-2.5 text-xs animate-in fade-in space-y-1">
            {(() => {
              const kObj = unitKanji.find((k) => k.char === selectedKanji)
              if (!kObj) return null
              return (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-accent">{kObj.char}</span>
                    <span className="font-bold text-ink text-sm">Hán-Việt: {kObj.hanviet}</span>
                    <span className="text-sub">({kObj.onkun})</span>
                  </div>
                  {kObj.compounds && kObj.compounds.length > 0 && (
                    <div className="text-sub flex items-center gap-1.5">
                      <span className="font-semibold text-ink">Từ ghép:</span>
                      {kObj.compounds.slice(0, 3).map((c, ci) => (
                        <span key={ci} className="rounded bg-muted px-1.5 py-0.5 text-ink">
                          <Jp text={c.jp} /> ({c.meaning})
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })()}
          </div>
        )}
      </div>

      {/* Audio Playback Player Bar (giống ReadingTab) */}
      <div className="rounded-xl border border-line bg-muted/20 p-3.5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div
              className={cx(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all',
                playing !== null ? 'bg-accent text-white shadow-xs' : 'bg-accent-soft text-accent',
              )}
            >
              <Volume2 size={20} className={playing !== null ? 'animate-pulse' : ''} />
            </div>
            <div>
              <span className="text-sm font-bold text-ink">Nghe phát âm đoạn văn</span>
              <p className="text-xs text-sub">
                {p.active
                  ? `${playing !== null ? 'Đang đọc' : 'Tạm dừng ở'} câu ${at}/${curPassage.lines.length}`
                  : `Gồm ${curPassage.lines.length} câu · bấm nút để nghe toàn bộ hoặc từng câu`}
              </p>
            </div>
          </div>
          <PlayerControls p={p} startLabel="Đọc cả đoạn" />
        </div>

        {/* Speed and Voice controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-line/60 text-xs">
          <SpeedControl rate={rate} onChange={(newRate) => set({ rate: newRate })} />

          <div className="flex items-center gap-2">
            <span className="text-sub font-medium">Giọng:</span>
            <select
              value={voiceA}
              onChange={(e) => set({ voiceA: e.target.value })}
              className="rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-ink focus:border-accent focus:outline-none"
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
              onClick={() => speak('こんにちは。漢字の読み方です。', { voiceURI: voiceA || undefined, rate })}
              className="rounded-lg border border-line bg-surface hover:bg-muted px-2 py-1 text-xs font-semibold text-sub hover:text-accent transition cursor-pointer"
            >
              Thử giọng
            </button>
          </div>
        </div>
      </div>

      {/* Main Passage Text Card */}
      <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 space-y-3">
        <div className="pb-2 border-b border-line">
          <p className="text-[11px] font-bold uppercase tracking-wider text-accent">{curPassage.genre}</p>
          <h4 className="text-lg sm:text-xl font-bold text-ink mt-0.5">
            <Jp text={curPassage.title} />
          </h4>
          <p className="text-xs text-sub">{curPassage.titleVn}</p>
        </div>

        {/* Lines */}
        <div className="space-y-1.5">
          {curPassage.lines.map((line, idx) => {
            const isPlaying = playing === idx
            const isRevealed = showVn === 'all' || (showVn === 'tap' && shownLines.has(idx))

            return (
              <div
                key={idx}
                className={cx(
                  'group rounded-xl p-2.5 transition-all',
                  isPlaying
                    ? 'bg-accent/15 border-l-4 border-accent pl-3 ring-1 ring-accent/30 shadow-xs'
                    : 'hover:bg-muted/50',
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
                <div className="flex items-start gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      p.playFrom(idx)
                    }}
                    className={cx(
                      'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-semibold transition cursor-pointer',
                      isPlaying
                        ? 'bg-accent text-white shadow-xs'
                        : 'bg-muted text-sub hover:bg-accent-soft hover:text-accent opacity-60 group-hover:opacity-100',
                    )}
                    title={`Phát bài đọc từ câu ${idx + 1}`}
                  >
                    {isPlaying ? <Volume2 size={13} /> : <Play size={11} />}
                  </button>

                  <div className="flex-1 text-base sm:text-lg leading-relaxed font-medium text-ink">
                    {/* Render Japanese text, highlighting selected kanji if any */}
                    {selectedKanji && line.jp.includes(selectedKanji) ? (
                      <span className="highlight-kanji">
                        <Jp text={line.jp} />
                      </span>
                    ) : (
                      <Jp text={line.jp} />
                    )}
                  </div>

                  <SpeakButton text={line.jp} className="opacity-40 group-hover:opacity-100 shrink-0 mt-0.5 h-6 w-6" />
                </div>

                {isRevealed && (
                  <p className="mt-1 pl-8 text-xs sm:text-sm text-sub font-medium leading-relaxed">
                    {line.vn}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* Glossary of Kanji compounds used in this passage */}
        {curPassage.gloss.length > 0 && (
          <div className="mt-4 pt-3 border-t border-line/60 rounded-lg bg-muted/40 p-3 text-xs">
            <p className="font-bold text-ink mb-1.5 flex items-center gap-1.5">
              <span>📚 Từ vựng chữ Hán xuất hiện trong đoạn văn:</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {curPassage.gloss.map((g, gi) => (
                <div key={gi} className="flex items-center gap-1.5">
                  <span className="font-bold text-ink">
                    <Jp text={g.jp} />
                  </span>
                  <span className="text-sub">— {g.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comprehension Quiz (Câu hỏi đọc hiểu) */}
      {showQuiz && curPassage.questions.length > 0 && (
        <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-line">
            <h5 className="font-bold text-sm sm:text-base text-ink flex items-center gap-2">
              <span>🎯 Câu hỏi đọc hiểu đoạn văn</span>
            </h5>
            <span className="text-xs text-sub">
              {curPassage.questions.filter((q) => quizAnswers[q.id] === q.correct).length}/
              {curPassage.questions.length} câu đúng
            </span>
          </div>

          <div className="space-y-4">
            {curPassage.questions.map((q, qi) => {
              const selectedIdx = quizAnswers[q.id]
              const isAnswered = selectedIdx !== undefined
              const isCorrect = selectedIdx === q.correct

              return (
                <div key={q.id} className="space-y-2">
                  <p className="text-xs sm:text-sm font-bold text-ink flex items-start gap-1.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent text-xs font-black">
                      {qi + 1}
                    </span>
                    <span>
                      <Jp text={q.stem} />
                    </span>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6">
                    {q.options.map((opt, oi) => {
                      const isPicked = selectedIdx === oi
                      const isOptionCorrect = oi === q.correct

                      return (
                        <button
                          key={oi}
                          type="button"
                          onClick={() => setQuizAnswers((prev) => ({ ...prev, [q.id]: oi }))}
                          className={cx(
                            'rounded-lg border p-2 text-left text-xs sm:text-sm font-medium transition cursor-pointer select-none active:scale-[0.99]',
                            isAnswered
                              ? isOptionCorrect
                                ? 'border-ok bg-ok-soft text-ok font-bold ring-1 ring-ok'
                                : isPicked
                                  ? 'border-bad bg-bad-soft text-bad font-bold'
                                  : 'border-line bg-surface text-sub/50'
                              : isPicked
                                ? 'border-accent bg-accent-soft text-accent font-bold ring-1 ring-accent'
                                : 'border-line bg-surface hover:border-accent hover:bg-muted/40 text-ink',
                          )}
                        >
                          <span className="mr-1.5 font-bold text-sub">{String.fromCharCode(65 + oi)}.</span>
                          <Jp text={opt} />
                          {isAnswered && isOptionCorrect && <span className="float-right font-bold text-ok">✓</span>}
                          {isAnswered && isPicked && !isOptionCorrect && (
                            <span className="float-right font-bold text-bad">✗</span>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {isAnswered && q.explanation && (
                    <div
                      className={cx(
                        'ml-6 rounded-lg p-2 text-xs leading-relaxed',
                        isCorrect ? 'bg-ok-soft/40 text-ok border border-ok/30' : 'bg-muted/60 text-sub border border-line',
                      )}
                    >
                      <span className="font-bold mr-1">{isCorrect ? '🎉 Chính xác!' : '💡 Giải thích:'}</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </Card>
  )
}
