import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  HelpCircle,
  Mic,
  Shield,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { SPEAKING_EXAMS, type ExamQuestion, type SpeakingExam } from '../lib/speakingExamData'
import { speak, stopSpeaking } from '../lib/speech'
import { useProgress } from '../store/progress'
import { useFuriBlockStore } from '../store/furiBlock'
import type { Seg } from '../lib/furigana'
import { Jp } from '../components/Jp'
import { KanjiBlockManagerModal, KanjiBlockPopover, type PopoverState } from '../components/KanjiBlockManager'
import { SpeakingPictureComic } from '../components/SpeakingPictureComic'
import { Button, Card, cx } from '../components/ui'

// Sub-component for individual Question with Audio + Reveal Answers
function cleanQuestion(text: string): string {
  return text
    .replace(/【[^】]*】/g, '')
    .replace(/\[[^\]]*\]/g, '')
    .replace(/^\s*picture\s*p\d+\s*[:：]?/i, '')
    .trim()
}

function QuestionCard({
  q,
  indexLabel,
  examMode,
  onRubyClick,
}: {
  q: ExamQuestion
  indexLabel: string
  examMode: boolean
  onRubyClick?: (seg: Seg, e: React.MouseEvent) => void
}) {
  const [revealed, setRevealed] = useState(!examMode)
  const [playingJp, setPlayingJp] = useState<string | null>(null)

  useEffect(() => {
    setRevealed(!examMode)
  }, [examMode])

  const displayQJp = useMemo(() => cleanQuestion(q.qJp), [q.qJp])
  const displayQVi = useMemo(() => cleanQuestion(q.qVi), [q.qVi])

  const handleSpeak = async (text: string) => {
    const speechTarget = cleanQuestion(text)
    if (playingJp === speechTarget) {
      stopSpeaking()
      setPlayingJp(null)
      return
    }
    setPlayingJp(speechTarget)
    try {
      await speak(speechTarget)
    } finally {
      setPlayingJp(null)
    }
  }

  return (
    <div className="border border-stone-200 dark:border-stone-700/80 rounded-2xl bg-card p-4 sm:p-5 shadow-xs transition hover:shadow-md">
      {/* Question Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-accent/15 text-accent font-extrabold text-sm">
            {indexLabel}
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-sub">
            {q.targetGrammar}
          </span>
        </div>

        {/* Big Audio Question Button */}
        <button
          type="button"
          onClick={() => handleSpeak(displayQJp)}
          className={cx(
            'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs transition active:scale-95',
            playingJp === displayQJp
              ? 'bg-amber-500 text-white animate-pulse'
              : 'bg-accent text-white hover:bg-accent/90',
          )}
          title="Nghe giám khảo đọc câu hỏi"
        >
          {playingJp === displayQJp ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span>{playingJp === displayQJp ? 'Đang phát...' : 'Nghe câu hỏi'}</span>
        </button>
      </div>

      {/* Question Text Area */}
      <div className="mt-3">
        {revealed ? (
          <div className="space-y-1">
            <p className="text-base sm:text-lg font-bold text-ink">
              <Jp text={displayQJp} speakable onRubyClick={onRubyClick} />
            </p>
            <p className="text-xs sm:text-sm text-sub font-medium italic">
              🇻🇳 {displayQVi}
            </p>
          </div>
        ) : (
          <div className="p-3 bg-stone-100 dark:bg-stone-800/60 rounded-xl text-center border border-dashed border-stone-300 dark:border-stone-700">
            <p className="text-xs sm:text-sm text-sub flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 text-accent" />
              <span>Câu hỏi đang ẩn để luyện phản xạ nghe. Bấm <strong>"Nghe câu hỏi"</strong> để luyện nghe.</span>
            </p>
          </div>
        )}
      </div>

      {/* Toggle Answers Button */}
      <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setRevealed((v) => !v)}
          className="text-xs sm:text-sm font-bold text-accent hover:underline flex items-center gap-1.5"
        >
          {revealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{revealed ? 'Ẩn câu hỏi & đáp án mẫu' : 'Xem câu hỏi & các cách trả lời'}</span>
        </button>
        {revealed && (
          <span className="text-[11px] text-sub font-medium">
            {q.answers.length} cách trả lời
          </span>
        )}
      </div>

      {/* Answers List */}
      {revealed && (
        <div className="mt-3 space-y-2.5 pt-1">
          {q.answers.map((ans, aidx) => (
            <div
              key={aidx}
              className={cx(
                'rounded-xl p-3 border text-xs sm:text-sm transition',
                ans.level === 'expanded'
                  ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/50'
                  : ans.level === 'alt'
                    ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50'
                    : 'bg-stone-50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-700',
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span
                  className={cx(
                    'font-bold text-[11px] px-2 py-0.5 rounded-full',
                    ans.level === 'expanded'
                      ? 'bg-emerald-600 text-white'
                      : ans.level === 'alt'
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-700 text-white dark:bg-stone-300 dark:text-stone-900',
                  )}
                >
                  {ans.label}
                </span>

                <button
                  type="button"
                  onClick={() => handleSpeak(ans.jp)}
                  className="p-1 text-sub hover:text-accent rounded-md hover:bg-stone-200 dark:hover:bg-stone-700 transition"
                  title="Nghe phát âm câu trả lời này"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="font-bold text-ink mt-1 text-sm sm:text-base leading-snug">
                <Jp text={ans.jp} speakable onRubyClick={onRubyClick} />
              </p>
              <p className="text-sub text-[11px] sm:text-xs mt-0.5 italic">
                {ans.vi}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Full Exam Detail View
export function SpeakingExamDetail({ exam }: { exam: SpeakingExam }) {
  const navigate = useNavigate()
  const marks = useProgress((s) => s.marks ?? {})
  const mark = useProgress((s) => s.mark)
  const unmark = useProgress((s) => s.unmark)

  const isDone = marks[`speaking-exam:${exam.id}`] !== undefined

  const [examMode, setExamMode] = useState(false)
  const [showViPassage, setShowViPassage] = useState(false)
  const [readingAudioPlaying, setReadingAudioPlaying] = useState(false)

  // Kanji Furigana Blocking (Khóa Furigana chữ Hán)
  const [popover, setPopover] = useState<PopoverState | null>(null)
  const [showBlockManager, setShowBlockManager] = useState(false)
  const blockedCount = useFuriBlockStore((s) => Object.keys(s.items).length)

  const handleRubyClick = (seg: Seg, e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setPopover({ seg, rect })
  }

  // Split reading passage into individual sentences ending with 。
  const sentences = useMemo(() => {
    return exam.reading.passageJp
      .trim()
      .split(/(?<=。)/)
      .map((s) => s.trim())
      .filter(Boolean)
  }, [exam.reading.passageJp])

  // Split Vietnamese translation into sentences
  const sentencesVi = useMemo(() => {
    return exam.reading.passageVi
      .trim()
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean)
  }, [exam.reading.passageVi])

  const [playingSentence, setPlayingSentence] = useState<string | null>(null)
  const [readingViewMode, setReadingViewMode] = useState<'paragraph' | 'sentences'>('paragraph')

  const handlePlaySentence = async (sent: string) => {
    if (playingSentence === sent) {
      stopSpeaking()
      setPlayingSentence(null)
      return
    }
    stopSpeaking()
    setReadingAudioPlaying(false)
    setPlayingSentence(sent)
    try {
      await speak(sent, { rate: 0.9 })
    } finally {
      setPlayingSentence(null)
    }
  }

  // Timer for Exam Mode
  const [timerSeconds, setTimerSeconds] = useState(60)
  const [timerRunning, setTimerRunning] = useState(false)

  useEffect(() => {
    let t: ReturnType<typeof setInterval>
    if (timerRunning && timerSeconds > 0) {
      t = setInterval(() => setTimerSeconds((s) => s - 1), 1000)
    } else if (timerSeconds === 0) {
      setTimerRunning(false)
    }
    return () => clearInterval(t)
  }, [timerRunning, timerSeconds])

  const currentIndex = SPEAKING_EXAMS.findIndex((e) => e.id === exam.id)
  const prevExam = currentIndex > 0 ? SPEAKING_EXAMS[currentIndex - 1] : null
  const nextExam = currentIndex < SPEAKING_EXAMS.length - 1 ? SPEAKING_EXAMS[currentIndex + 1] : null

  const handleToggleReadingAudio = async () => {
    if (readingAudioPlaying) {
      stopSpeaking()
      setReadingAudioPlaying(false)
      return
    }
    stopSpeaking()
    setPlayingSentence(null)
    setReadingAudioPlaying(true)
    try {
      await speak(exam.reading.passageJp, { rate: 0.9 })
    } finally {
      setReadingAudioPlaying(false)
    }
  }

  const toggleDone = () => {
    if (isDone) {
      unmark(`speaking-exam:${exam.id}`)
    } else {
      mark(`speaking-exam:${exam.id}`)
    }
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Top Bar with Navigation & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
        <Link
          to="/speaking-exam"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-sub hover:text-ink transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Danh sách 20 đề</span>
        </Link>

        {/* Quick Exam Switcher Dropdown */}
        <div className="flex items-center gap-2">
          <select
            value={exam.id}
            onChange={(e) => navigate(`/speaking-exam/${e.target.value}`)}
            className="rounded-xl border border-stone-300 dark:border-stone-700 bg-card px-3 py-1.5 text-xs sm:text-sm font-bold text-ink shadow-xs focus:ring-2 focus:ring-accent outline-hidden"
          >
            {SPEAKING_EXAMS.map((e) => (
              <option key={e.id} value={e.id}>
                {e.badge} - {e.shortTitle}
              </option>
            ))}
          </select>

          {/* Mark completed button */}
          <button
            type="button"
            onClick={toggleDone}
            className={cx(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs',
              isDone
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-muted text-sub hover:text-ink',
            )}
            title="Đánh dấu đã ôn luyện xong đề này"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isDone ? 'Đã hoàn thành' : 'Đánh dấu xong'}</span>
          </button>
        </div>
      </div>

      {/* Exam Title Header */}
      <div className="bg-gradient-to-br from-accent/10 via-card to-card border border-accent/20 rounded-3xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-0.5 rounded-full bg-accent text-white font-extrabold text-xs uppercase tracking-wider">
                {exam.badge}
              </span>
              <span className="text-xs font-semibold text-sub">
                Ngữ pháp: <strong className="text-ink">{exam.focusGrammar}</strong>
              </span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              {exam.title}
            </h1>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800 p-1.5 rounded-2xl border border-stone-200 dark:border-stone-700">
            <button
              type="button"
              onClick={() => {
                setExamMode(false)
                setTimerRunning(false)
              }}
              className={cx(
                'px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition',
                !examMode ? 'bg-card text-accent shadow-xs' : 'text-sub hover:text-ink',
              )}
            >
              📖 Chế độ Luyện tập
            </button>
            <button
              type="button"
              onClick={() => {
                setExamMode(true)
                setTimerSeconds(60)
                setTimerRunning(true)
              }}
              className={cx(
                'px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5',
                examMode ? 'bg-amber-600 text-white shadow-xs' : 'text-sub hover:text-ink',
              )}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Chế độ Phòng thi</span>
            </button>
          </div>
        </div>

        {/* Katakana challenging words tag */}
        <div className="mt-4 pt-3 border-t border-accent/15 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-sub">Từ Katakana thử thách:</span>
          {exam.katakanaWords.map((kw, i) => (
            <span
              key={i}
              className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-card border border-stone-200 dark:border-stone-700 text-ink shadow-xs"
            >
              <Jp text={kw} speakable />
            </span>
          ))}
        </div>

        {/* Exam Mode Timer Notification */}
        {examMode && (
          <div className="mt-4 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
              <Clock className="w-4 h-4 text-amber-600 animate-spin" />
              <span>
                <strong>1 phút chuẩn bị:</strong> Hãy đọc thầm bài đọc và quan sát tranh bên dưới.
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono font-black text-amber-600 dark:text-amber-400 text-lg sm:text-xl">
              <span>{Math.floor(timerSeconds / 60)}:{String(timerSeconds % 60).padStart(2, '0')}</span>
              <button
                type="button"
                onClick={() => setTimerRunning((r) => !r)}
                className="text-xs font-bold underline ml-2"
              >
                {timerRunning ? 'Tạm dừng' : 'Bắt đầu'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* SECTION 1: READING (PHẦN 1: BÀI ĐỌC VÀ CÂU HỎI ĐỌC HIỂU) */}
      {/* ============================================================== */}
      <div className="space-y-4">
        {/* Japanese Reading Sheet Container (Mô phỏng tờ giấy thi thật) */}
        <div className="bg-card rounded-3xl border-2 border-stone-800 dark:border-stone-300 p-5 sm:p-7 shadow-md">
          {/* Header of paper */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-stone-800 dark:border-stone-300 pb-3 mb-4 gap-2">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-stone-900 text-white font-bold text-sm">
                1
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
                Reading · {exam.reading.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Kanji Furigana Block Manager Button */}
              <button
                type="button"
                onClick={() => setShowBlockManager(true)}
                className={cx(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold transition shadow-xs',
                  blockedCount > 0
                    ? 'bg-accent/15 text-accent ring-1 ring-accent/30'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300',
                )}
                title="Quản lý danh sách các chữ Hán đã khóa / giữ Furigana"
              >
                <Shield className="w-3.5 h-3.5 text-accent" />
                <span>Khóa Kanji {blockedCount > 0 ? `(${blockedCount})` : ''}</span>
              </button>

              {/* Read Passage Audio Button */}
              <button
                type="button"
                onClick={handleToggleReadingAudio}
                className={cx(
                  'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition shadow-xs',
                  readingAudioPlaying
                    ? 'bg-amber-600 text-white animate-pulse'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-200',
                )}
                title="Nghe mẫu phát âm toàn bộ bài đọc"
              >
                <Volume2 className="w-4 h-4 text-accent" />
                <span>{readingAudioPlaying ? 'Dừng đọc...' : 'Nghe đọc mẫu'}</span>
              </button>
            </div>
          </div>

          {/* Subheader toolbar: Mode Switcher & Guide */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-stone-200/80 dark:border-stone-800">
            <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800/80 p-1 rounded-xl border border-stone-200 dark:border-stone-700 text-xs font-bold">
              <button
                type="button"
                onClick={() => setReadingViewMode('paragraph')}
                className={cx(
                  'px-3 py-1 rounded-lg transition',
                  readingViewMode === 'paragraph'
                    ? 'bg-card text-accent shadow-xs'
                    : 'text-sub hover:text-ink',
                )}
              >
                📄 Toàn đoạn văn
              </button>
              <button
                type="button"
                onClick={() => setReadingViewMode('sentences')}
                className={cx(
                  'px-3 py-1 rounded-lg transition flex items-center gap-1.5',
                  readingViewMode === 'sentences'
                    ? 'bg-card text-accent shadow-xs'
                    : 'text-sub hover:text-ink',
                )}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Tách từng câu để nghe</span>
              </button>
            </div>

            <p className="text-[11px] text-sub font-medium">
              💡 Bấm vào câu để nghe riêng câu đó · Bấm vào chữ Hán để khóa Furigana
            </p>
          </div>

          {/* Reading Passage Body */}
          {readingViewMode === 'paragraph' ? (
            <div className="py-2 text-base sm:text-xl font-medium leading-[2.6] text-ink">
              {sentences.map((sent, idx) => {
                const isPlaying = playingSentence === sent
                return (
                  <span
                    key={idx}
                    onClick={() => handlePlaySentence(sent)}
                    className={cx(
                      'inline cursor-pointer transition-all rounded-lg px-1.5 py-0.5 mx-0.5 group relative select-text',
                      isPlaying
                        ? 'bg-amber-200/70 text-amber-950 dark:bg-amber-950/60 dark:text-amber-100 ring-2 ring-amber-500 shadow-xs'
                        : 'hover:bg-stone-100 dark:hover:bg-stone-800/80',
                    )}
                    title="Bấm để nghe câu này · Bấm vào chữ Hán để khóa Furigana"
                  >
                    <Jp text={sent} onRubyClick={handleRubyClick} />
                    <span
                      className={cx(
                        'inline-flex items-center justify-center ml-1 text-xs transition-opacity align-middle',
                        isPlaying
                          ? 'opacity-100 text-amber-600 animate-pulse'
                          : 'opacity-0 group-hover:opacity-100 text-sub',
                      )}
                    >
                      <Volume2 className="w-3.5 h-3.5 inline" />
                    </span>{' '}
                  </span>
                )
              })}
            </div>
          ) : (
            <div className="space-y-3 py-2">
              {sentences.map((sent, idx) => {
                const isPlaying = playingSentence === sent
                return (
                  <div
                    key={idx}
                    className={cx(
                      'p-3.5 rounded-2xl border transition-all',
                      isPlaying
                        ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 dark:border-amber-600 shadow-sm'
                        : 'bg-stone-50/80 dark:bg-stone-800/40 border-stone-200 dark:border-stone-700 hover:border-accent/40',
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-stone-200 dark:bg-stone-700 text-sub">
                            Câu {idx + 1}
                          </span>
                        </div>
                        <p className="text-base sm:text-lg font-bold text-ink leading-loose">
                          <Jp text={sent} onRubyClick={handleRubyClick} />
                        </p>
                        {sentencesVi[idx] && (
                          <p className="text-xs sm:text-sm text-sub italic pt-0.5">
                            🇻🇳 {sentencesVi[idx]}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handlePlaySentence(sent)}
                        className={cx(
                          'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition shadow-xs shrink-0',
                          isPlaying
                            ? 'bg-amber-600 text-white animate-pulse'
                            : 'bg-accent text-white hover:bg-accent/90',
                        )}
                        title="Nghe câu này"
                      >
                        {isPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                        <span>{isPlaying ? 'Dừng' : 'Nghe câu'}</span>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Vocabulary Notes box */}
          {exam.reading.vocabNotes.length > 0 && (
            <div className="mt-4 pt-4 border-t border-dashed border-stone-300 dark:border-stone-700 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
              <span className="font-bold text-sub">Từ mới:</span>
              {exam.reading.vocabNotes.map((v, idx) => (
                <span key={idx} className="font-semibold text-ink">
                  <Jp text={v.word} speakable onRubyClick={handleRubyClick} />: <span className="text-sub font-normal">{v.meaning}</span>
                </span>
              ))}
            </div>
          )}

          {/* Vietnamese Translation Accordion */}
          <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowViPassage((v) => !v)}
              className="text-xs sm:text-sm font-bold text-sub hover:text-accent flex items-center gap-1.5"
            >
              {showViPassage ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showViPassage ? 'Ẩn bản dịch bài đọc' : 'Xem bản dịch tiếng Việt bài đọc'}</span>
            </button>
          </div>

          {showViPassage && (
            <div className="mt-2 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/50 text-xs sm:text-sm text-sub leading-relaxed border border-stone-200 dark:border-stone-700">
              <p className="font-medium">{exam.reading.passageVi}</p>
            </div>
          )}
        </div>

        {/* 2 Reading Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QuestionCard
            q={exam.reading.questions[0]}
            indexLabel="Q1"
            examMode={examMode}
            onRubyClick={handleRubyClick}
          />
          <QuestionCard
            q={exam.reading.questions[1]}
            indexLabel="Q2"
            examMode={examMode}
            onRubyClick={handleRubyClick}
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* SECTION 2: Q&A (PHẦN 2: MIÊU TẢ TRANH & CÂU HỎI PHỎNG VẤN) */}
      {/* ============================================================== */}
      <div className="space-y-4 pt-4">
        {/* Comic Picture Strip */}
        <SpeakingPictureComic
          characterName={exam.qa.picture.characterName}
          timelineHint={exam.qa.picture.timelineHint}
          panels={exam.qa.picture.panels}
        />

        {/* Picture Question Card */}
        <QuestionCard
          q={exam.qa.picture.question}
          indexLabel="Picture Q1"
          examMode={examMode}
          onRubyClick={handleRubyClick}
        />

        {/* 2 Free Q&A Questions */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white font-bold text-xs">
              ★
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink">
              Câu hỏi phỏng vấn tự do (Free Q&A · Trọng tâm Giao tiếp Đời sống)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuestionCard
              q={exam.qa.freeQuestions[0]}
              indexLabel="Q2"
              examMode={examMode}
              onRubyClick={handleRubyClick}
            />
            <QuestionCard
              q={exam.qa.freeQuestions[1]}
              indexLabel="Q3"
              examMode={examMode}
              onRubyClick={handleRubyClick}
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Next / Previous) */}
      <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-3">
        {prevExam ? (
          <Link
            to={`/speaking-exam/${prevExam.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card border border-stone-200 dark:border-stone-700 text-sm font-bold text-ink hover:border-accent hover:text-accent shadow-xs transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Đề trước: {prevExam.badge}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextExam ? (
          <Link
            to={`/speaking-exam/${nextExam.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-accent text-white text-sm font-bold shadow-md hover:bg-accent/90 transition"
          >
            <span>Đề tiếp: {nextExam.badge}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            to="/speaking-exam"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 text-white text-sm font-bold shadow-md hover:bg-emerald-700 transition"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Hoàn thành trọn bộ 20 đề!</span>
          </Link>
        )}
      </div>

      {/* Popover & Modal Quản lý khóa Furigana (Kanji Block) */}
      <KanjiBlockPopover popover={popover} onClose={() => setPopover(null)} />
      <KanjiBlockManagerModal open={showBlockManager} onClose={() => setShowBlockManager(false)} />
    </div>
  )
}

// Main Page with Exam Grid List or Detail
export function SpeakingExamPage() {
  const { id } = useParams()
  const marks = useProgress((s) => s.marks ?? {})

  const [search, setSearch] = useState('')
  const [filterLesson, setFilterLesson] = useState<string>('all')

  const completedCount = useMemo(() => {
    return SPEAKING_EXAMS.filter((e) => marks[`speaking-exam:${e.id}`] !== undefined).length
  }, [marks])

  const filteredExams = useMemo(() => {
    return SPEAKING_EXAMS.filter((e) => {
      if (filterLesson !== 'all' && !e.focusGrammar.includes(filterLesson)) return false
      if (!search.trim()) return true
      const s = search.toLowerCase()
      return (
        e.id.toLowerCase().includes(s) ||
        e.title.toLowerCase().includes(s) ||
        e.shortTitle.toLowerCase().includes(s) ||
        e.focusGrammar.toLowerCase().includes(s) ||
        e.katakanaWords.some((w) => w.toLowerCase().includes(s))
      )
    })
  }, [search, filterLesson])

  // If ID param is present, render Detail View
  if (id) {
    const exam = SPEAKING_EXAMS.find((e) => e.id.toLowerCase() === id.toLowerCase())
    if (!exam) {
      return (
        <div className="text-center py-16 space-y-4">
          <p className="text-xl font-bold text-ink">Không tìm thấy bộ đề "{id}"</p>
          <Link to="/speaking-exam">
            <Button variant="default">Quay về danh sách 20 đề</Button>
          </Link>
        </div>
      )
    }
    return <SpeakingExamDetail exam={exam} />
  }

  // Otherwise render List View
  return (
    <div className="space-y-8 pb-12">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/10 via-accent/10 to-card border border-accent/20 p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent text-white font-extrabold text-xs uppercase tracking-wider">
            <Mic className="w-3.5 h-3.5" />
            <span>Kho luyện thi Speaking JPD133</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-ink">
            20 Bộ Đề Thi Nói JPD133 (Chuẩn Demo 2025)
          </h1>
          <p className="text-sm sm:text-base text-sub leading-relaxed font-medium">
            Mô phỏng chuẩn xác định dạng phòng thi thực tế: Phần 1 Đọc đoạn văn (Kanji và từ vựng nâng cao) + 2 câu hỏi đọc hiểu; Phần 2 Miêu tả tranh liên hoàn 3 bước + 2 câu hỏi phỏng vấn tự do trọng tâm ngữ pháp <strong>Giao tiếp đời sống thực tế</strong>.
          </p>
        </div>

        {/* Progress Card Banner */}
        <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-accent/15">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl text-accent">{completedCount}</span>
            <span className="text-sm font-semibold text-sub">/ 20 đề đã ôn luyện</span>
          </div>
          <div className="flex-1 max-w-xs h-2.5 rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / 20) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold text-sub">
            {Math.round((completedCount / 20) * 100)}% hoàn thành
          </span>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Lesson Filter tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {[
            { key: 'all', label: 'Tất cả 20 đề' },
            { key: 'Bài 8', label: 'Trọng tâm Bài 8' },
            { key: 'Bài 9', label: 'Trọng tâm Bài 9' },
            { key: 'Bài 10', label: 'Trọng tâm Bài 10' },
            { key: 'Bài 11', label: 'Trọng tâm Bài 11' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilterLesson(tab.key)}
              className={cx(
                'px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition shadow-xs',
                filterLesson === tab.key
                  ? 'bg-accent text-white shadow-xs'
                  : 'bg-card text-sub hover:text-ink border border-stone-200 dark:border-stone-700',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="Tìm theo tên đề, từ khóa..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-stone-300 dark:border-stone-700 bg-card px-4 py-2 text-xs sm:text-sm font-medium text-ink shadow-xs focus:ring-2 focus:ring-accent outline-hidden"
          />
        </div>
      </div>

      {/* 20 Exam Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredExams.map((e) => {
          const isDone = marks[`speaking-exam:${e.id}`] !== undefined
          return (
            <Link key={e.id} to={`/speaking-exam/${e.id}`}>
              <Card className="h-full p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg border border-stone-200 dark:border-stone-700 flex flex-col justify-between group">
                <div className="space-y-3">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-md">
                      {e.badge}
                    </span>
                    {isDone ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Đã luyện</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-sub">
                        Chưa luyện
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-ink leading-snug group-hover:text-accent transition">
                    {e.title}
                  </h3>

                  {/* Grammar focus */}
                  <p className="text-xs text-sub font-medium line-clamp-2">
                    📌 {e.focusGrammar}
                  </p>

                  {/* Katakana Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {e.katakanaWords.slice(0, 3).map((w, wi) => (
                      <span
                        key={wi}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-sub border border-stone-200 dark:border-stone-700"
                      >
                        {w.replace(/（[^）]+）/g, '')}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-bold text-accent">
                  <span className="flex items-center gap-1">
                    <Volume2 className="w-3.5 h-3.5" /> Có Audio & Tranh
                  </span>
                  <span className="group-hover:translate-x-1 transition">Vào luyện thi →</span>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
