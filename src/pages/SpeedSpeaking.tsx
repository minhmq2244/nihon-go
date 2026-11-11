import { useEffect, useState } from 'react'
import { ArrowLeft, BookOpen, CheckCircle2, ChevronRight, Lightbulb, RotateCcw, Volume2, Zap } from 'lucide-react'
import {
  GRAMMAR_SPEAKING_TOPICS,
  READING_COMPREHENSION_TOPICS,
  SPEED_SPEAKING_TOPICS,
  formatQuestionDisplay,
  formatQuestionSpeech,
  type SpeedSpeakingQuestion,
  type SpeedSpeakingTopic,
} from '../lib/speedSpeakingData'
import { shuffle } from '../lib/data'
import { speak, stopSpeaking } from '../lib/speech'
import { useSettings } from '../store/settings'
import { SpeedControl } from '../components/SpeedControl'
import { Button, Card, ProgressBar, cx } from '../components/ui'

// 4 progression stages
const STAGE_LISTEN = 0 // Chỉ nghe câu hỏi
const STAGE_SCRIPT = 1 // Hiện chữ câu hỏi (script)
const STAGE_HINT = 2 // Hiện gợi ý ý trả lời
const STAGE_ANSWER = 3 // Hiện câu trả lời mẫu

export function SpeedSpeakingPage() {
  const { learnerName, rate, set } = useSettings()
  const [activeTopic, setActiveTopic] = useState<SpeedSpeakingTopic | null>(null)
  const [editingName, setEditingName] = useState(false)
  const [tempName, setTempName] = useState(learnerName || 'あなた')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'comprehension' | 'grammar'>('all')

  // Prepare questions
  const startTopic = (topic: SpeedSpeakingTopic) => {
    stopSpeaking()
    setActiveTopic(topic)
  }

  const startMixed = (category: 'all' | 'comprehension' | 'grammar') => {
    stopSpeaking()
    const pool =
      category === 'all'
        ? SPEED_SPEAKING_TOPICS
        : SPEED_SPEAKING_TOPICS.filter((t) => t.category === category)
    const all = pool.flatMap((t) => t.questions)
    const title =
      category === 'comprehension'
        ? 'Luyện ngẫu nhiên 132 câu hiểu bài đọc'
        : category === 'grammar'
        ? 'Luyện ngẫu nhiên 66 câu phản xạ mẫu câu'
        : 'Luyện ngẫu nhiên tất cả 198 câu hỏi'
    const badge = `${all.length} câu ngẫu nhiên`
    const description =
      category === 'comprehension'
        ? 'Xáo trộn toàn bộ câu hỏi kiểm tra độ hiểu nội dung từ 11 câu chuyện bài đọc Bài 11.'
        : category === 'grammar'
        ? 'Xáo trộn toàn bộ câu hỏi từ tất cả 9 chủ đề mẫu câu ngữ pháp thông dụng N5 → N4.'
        : 'Xáo trộn toàn bộ câu hỏi từ cả bài đọc hiểu và phản xạ mẫu câu.'

    const mixedTopic: SpeedSpeakingTopic = {
      id: `mixed-${category}`,
      title,
      shortTitle: 'Tổng hợp ngẫu nhiên',
      badge,
      description,
      category: category === 'all' ? 'comprehension' : category,
      questions: shuffle(all),
    }
    setActiveTopic(mixedTopic)
  }

  const visibleTopics = SPEED_SPEAKING_TOPICS.filter(
    (t) => selectedCategory === 'all' || t.category === selectedCategory,
  )

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Top Breadcrumb / Title Bar */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/30">
              <Zap size={24} className="fill-amber-500" />
            </span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Luyện nói cấp tốc</h1>
              <p className="text-sm sm:text-base text-sub font-medium">
                Phản xạ 4 bước: 🎧 Nghe câu hỏi → 📄 Hiện script → 💡 Gợi ý trả lời → 👁️ Đáp án mẫu
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <SpeedControl rate={rate} onChange={(r) => set({ rate: r })} compact />
          </div>
        </div>
      </div>

      {!activeTopic ? (
        // DASHBOARD: Topic list
        <div className="space-y-6">
          {/* Custom learner name banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-4 text-sm shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-sub">Xưng hô khi đọc câu hỏi:</span>
              {editingName ? (
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    placeholder="ví dụ: あなた, フン, ナム..."
                    className="h-8 w-36 rounded-lg border border-accent bg-surface px-2.5 text-sm font-semibold text-accent focus:outline-hidden"
                    autoFocus
                  />
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => {
                      set({ learnerName: tempName.trim() || 'あなた' })
                      setEditingName(false)
                    }}
                  >
                    Lưu
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setTempName(learnerName || 'あなた')
                      setEditingName(false)
                    }}
                  >
                    Huỷ
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-accent-soft px-2.5 py-1 font-bold text-accent">
                    {learnerName || 'あなた'}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setTempName(learnerName || 'あなた')
                      setEditingName(true)
                    }}
                    className="text-xs text-sub hover:text-accent hover:underline cursor-pointer"
                  >
                    (Đổi tên)
                  </button>
                </div>
              )}
            </div>
            <p className="text-xs text-sub">Máy sẽ tự động thay thế “～さん” bằng tên này khi đọc câu hỏi.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-line pb-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={cx(
                'rounded-xl px-4 py-2 text-sm font-bold transition cursor-pointer',
                selectedCategory === 'all'
                  ? 'bg-accent text-white shadow-xs'
                  : 'bg-surface text-sub hover:bg-muted hover:text-ink border border-line',
              )}
            >
              Tất cả ({SPEED_SPEAKING_TOPICS.length} chủ đề)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('comprehension')}
              className={cx(
                'rounded-xl px-4 py-2 text-sm font-bold transition cursor-pointer flex items-center gap-2',
                selectedCategory === 'comprehension'
                  ? 'bg-accent text-white shadow-xs'
                  : 'bg-surface text-sub hover:bg-muted hover:text-ink border border-line',
              )}
            >
              <BookOpen size={16} />
              Hiểu nội dung bài đọc ({READING_COMPREHENSION_TOPICS.length} bài · 132 câu)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('grammar')}
              className={cx(
                'rounded-xl px-4 py-2 text-sm font-bold transition cursor-pointer flex items-center gap-2',
                selectedCategory === 'grammar'
                  ? 'bg-accent text-white shadow-xs'
                  : 'bg-surface text-sub hover:bg-muted hover:text-ink border border-line',
              )}
            >
              <Zap size={16} />
              Phản xạ mẫu câu ({GRAMMAR_SPEAKING_TOPICS.length} chủ đề · 66 câu)
            </button>
          </div>

          {/* Special Card: Mixed All */}
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-surface to-accent/5 p-6 shadow-sm transition hover:shadow-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow-xs">
                    TỔNG HỢP SIÊU TỐC
                  </span>
                  <span className="text-xs font-medium text-sub">
                    {selectedCategory === 'comprehension'
                      ? '132 câu hỏi đọc hiểu'
                      : selectedCategory === 'grammar'
                      ? '66 câu hỏi ngữ pháp'
                      : '198 câu hỏi chọn lọc'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-ink">
                  {selectedCategory === 'comprehension'
                    ? 'Luyện ngẫu nhiên 11 bài đọc hiểu'
                    : selectedCategory === 'grammar'
                    ? 'Luyện ngẫu nhiên tất cả 9 mẫu câu'
                    : 'Luyện ngẫu nhiên tất cả 20 chủ đề'}
                </h2>
                <p className="text-sm text-sub max-w-xl">
                  {selectedCategory === 'comprehension'
                    ? 'Xáo trộn toàn bộ câu hỏi kiểm tra độ hiểu câu chuyện từ 11 bài đọc Bài 11. Trả lời sự việc, nguyên nhân, số liệu và tình huống trong bài!'
                    : selectedCategory === 'grammar'
                    ? 'Xáo trộn toàn bộ câu hỏi từ các chủ đề ngữ pháp N5 → N4. Thử thách phản xạ nhanh mà không biết trước mẫu câu!'
                    : 'Trộn đều toàn bộ câu hỏi đọc hiểu và câu hỏi phản xạ ngữ pháp để thử thách toàn diện!'}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => startMixed(selectedCategory)}
                  className="gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:brightness-105"
                >
                  <Zap size={20} className="fill-white" />
                  Bắt đầu ngẫu nhiên
                </Button>
              </div>
            </div>
          </div>

          {/* Grid of topics */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-ink">
                Danh sách bài luyện tập ({visibleTopics.length} chủ đề)
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {visibleTopics.map((topic, idx) => (
                <div
                  key={topic.id}
                  onClick={() => startTopic(topic)}
                  className="group relative flex flex-col justify-between rounded-2xl border border-line bg-surface p-5 shadow-xs transition-all hover:border-accent/50 hover:bg-muted/40 hover:shadow-md cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={cx(
                            'rounded-lg px-2.5 py-1 text-xs font-bold',
                            topic.category === 'comprehension'
                              ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                              : 'bg-accent-soft text-accent',
                          )}
                        >
                          {topic.badge}
                        </span>
                        {topic.category === 'comprehension' && (
                          <span className="rounded-md bg-muted px-1.5 py-0.5 text-[11px] font-semibold text-sub">
                            Hiểu bài
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-sub">
                        {topic.questions.length} câu
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-ink group-hover:text-accent transition-colors">
                        {idx + 1}. {topic.shortTitle}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-sub leading-relaxed line-clamp-2">
                        {topic.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 text-sm font-semibold text-accent">
                    <span>Luyện bài này</span>
                    <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // ACTIVE SESSION
        <SessionPlayer
          topic={activeTopic}
          learnerName={learnerName || 'あなた'}
          onExit={() => {
            stopSpeaking()
            setActiveTopic(null)
          }}
        />
      )}
    </div>
  )
}

function SessionPlayer({
  topic,
  learnerName,
  onExit,
}: {
  topic: SpeedSpeakingTopic
  learnerName: string
  onExit: () => void
}) {
  const [queue, setQueue] = useState<SpeedSpeakingQuestion[]>(() => topic.questions)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [stage, setStage] = useState<number>(STAGE_LISTEN)
  const [firstRatings, setFirstRatings] = useState<Record<string, 'ok' | 'retry'>>({})
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [showPassage, setShowPassage] = useState(false)
  const [isPlayingPassage, setIsPlayingPassage] = useState(false)

  const currentQ = queue[currentIndex]
  const isDone = !currentQ

  // Speak passage
  const playPassageAudio = async () => {
    if (!topic.passage) return
    setIsPlayingPassage(true)
    try {
      await speak(topic.passage.jp)
    } finally {
      setIsPlayingPassage(false)
    }
  }

  // Speak question
  const playQuestionAudio = async () => {
    if (!currentQ) return
    setIsPlayingAudio(true)
    const spokenText = formatQuestionSpeech(currentQ.q, learnerName)
    try {
      await speak(spokenText)
    } finally {
      setIsPlayingAudio(false)
    }
  }

  // Speak answer
  const playAnswerAudio = async () => {
    if (!currentQ) return
    setIsPlayingAudio(true)
    try {
      await speak(currentQ.aJp)
    } finally {
      setIsPlayingAudio(false)
    }
  }

  // Reset stage and auto-play question on question change
  useEffect(() => {
    if (!currentQ) return
    setStage(STAGE_LISTEN)
    void playQuestionAudio()
    return () => stopSpeaking()
  }, [currentIndex, currentQ?.id])

  // Advance stage helper
  const nextStage = () => {
    if (stage < STAGE_ANSWER) {
      const next = stage + 1
      setStage(next)
      if (next === STAGE_ANSWER && currentQ) {
        // Automatically speak answer when arriving at answer stage
        void playAnswerAudio()
      }
    }
  }

  // Self assessment
  const rateAnswer = (rating: 'ok' | 'retry') => {
    if (!currentQ) return
    stopSpeaking()

    // Record first attempt rating
    setFirstRatings((prev) => (prev[currentQ.id] ? prev : { ...prev, [currentQ.id]: rating }))

    if (rating === 'retry') {
      // Re-insert this question later in the queue so learner gets to master it
      setQueue((prev) => [...prev.slice(0, currentIndex + 3), currentQ, ...prev.slice(currentIndex + 3)])
    }

    setCurrentIndex((prev) => prev + 1)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement | null)?.closest('input, textarea')) return

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (stage < STAGE_ANSWER) {
          nextStage()
        }
      } else if (stage === STAGE_ANSWER) {
        if (e.key === '1') {
          e.preventDefault()
          rateAnswer('ok')
        } else if (e.key === '2') {
          e.preventDefault()
          rateAnswer('retry')
        }
      }

      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault()
        if (stage === STAGE_ANSWER) {
          void playAnswerAudio()
        } else {
          void playQuestionAudio()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [stage, currentQ, currentIndex])

  if (isDone) {
    const uniqueIds = new Set(topic.questions.map((q) => q.id))
    const totalCount = uniqueIds.size
    const okCount = Object.values(firstRatings).filter((r) => r === 'ok').length
    const missedQuestions = topic.questions.filter((q) => firstRatings[q.id] === 'retry')

    return (
      <Card className="space-y-6 text-center py-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-ok-soft text-ok ring-2 ring-ok/30">
          <CheckCircle2 size={36} />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">Hoàn thành bài luyện nói! 🎉</h2>
          <p className="text-base text-sub">Chủ đề: <b className="text-ink">{topic.title}</b></p>
        </div>

        <div className="mx-auto flex max-w-sm justify-center gap-6 rounded-2xl bg-muted/60 p-4 text-center">
          <div>
            <div className="text-3xl font-extrabold text-ok">{okCount}</div>
            <div className="text-xs font-semibold text-sub">Nói tốt lần đầu</div>
          </div>
          <div className="h-10 w-px bg-line self-center" />
          <div>
            <div className="text-3xl font-extrabold text-warn">{missedQuestions.length}</div>
            <div className="text-xs font-semibold text-sub">Cần luyện thêm</div>
          </div>
          <div className="h-10 w-px bg-line self-center" />
          <div>
            <div className="text-3xl font-extrabold text-ink">{totalCount}</div>
            <div className="text-xs font-semibold text-sub">Tổng số câu</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {missedQuestions.length > 0 && (
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setQueue(shuffle(missedQuestions))
                setCurrentIndex(0)
                setFirstRatings({})
              }}
            >
              <RotateCcw size={18} />
              Luyện lại {missedQuestions.length} câu chưa trôi
            </Button>
          )}

          <Button
            size="lg"
            onClick={() => {
              setQueue(shuffle(topic.questions))
              setCurrentIndex(0)
              setFirstRatings({})
            }}
          >
            Làm lại cả bộ (xáo trộn)
          </Button>

          <Button variant="ghost" size="lg" onClick={onExit}>
            Chọn chủ đề khác
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-5">
      {/* Top Header inside session */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-1.5 font-semibold text-sub hover:text-ink cursor-pointer transition"
        >
          <ArrowLeft size={18} />
          Quay lại danh sách
        </button>

        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
            {topic.shortTitle}
          </span>
          <span className="font-mono text-sm font-bold text-sub">
            Câu {currentIndex + 1} / {queue.length}
          </span>
        </div>
      </div>

      <ProgressBar value={currentIndex / queue.length} />

      {/* Step Indicator */}
      <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center text-xs sm:text-sm font-semibold">
        <div
          className={cx(
            'flex items-center justify-center gap-1 rounded-xl py-2 transition',
            stage >= STAGE_LISTEN
              ? 'bg-accent-soft text-accent ring-1 ring-accent/30 font-bold'
              : 'bg-muted text-sub',
          )}
        >
          <span>🎧 1. Nghe</span>
        </div>
        <div
          className={cx(
            'flex items-center justify-center gap-1 rounded-xl py-2 transition',
            stage >= STAGE_SCRIPT
              ? 'bg-accent-soft text-accent ring-1 ring-accent/30 font-bold'
              : 'bg-muted text-sub',
          )}
        >
          <span>📄 2. Script</span>
        </div>
        <div
          className={cx(
            'flex items-center justify-center gap-1 rounded-xl py-2 transition',
            stage >= STAGE_HINT
              ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30 font-bold'
              : 'bg-muted text-sub',
          )}
        >
          <span>💡 3. Gợi ý</span>
        </div>
        <div
          className={cx(
            'flex items-center justify-center gap-1 rounded-xl py-2 transition',
            stage >= STAGE_ANSWER
              ? 'bg-ok-soft text-ok ring-1 ring-ok/30 font-bold'
              : 'bg-muted text-sub',
          )}
        >
          <span>👁️ 4. Đáp án</span>
        </div>
      </div>

      {/* Passage Preview Card if Topic has Reading Passage */}
      {topic.passage && (
        <div className="rounded-2xl border border-line bg-surface p-4 sm:p-5 shadow-xs transition">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20">
                <BookOpen size={18} />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-ink">Nội dung câu chuyện bài đọc</h3>
                <p className="text-xs text-sub">Bấm xem hoặc nghe lại câu chuyện để trả lời câu hỏi</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={playPassageAudio}
                className="gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:bg-blue-500/10"
              >
                <Volume2 size={14} className={isPlayingPassage ? 'animate-pulse text-blue-600' : ''} />
                {isPlayingPassage ? 'Đang đọc...' : 'Nghe câu chuyện'}
              </Button>
              <Button
                size="sm"
                variant="default"
                onClick={() => setShowPassage(!showPassage)}
                className="text-xs"
              >
                {showPassage ? 'Thu gọn ▲' : 'Xem câu chuyện ▼'}
              </Button>
            </div>
          </div>
          {showPassage && (
            <div className="mt-4 space-y-3 border-t border-line/60 pt-3 text-sm">
              <div className="rounded-xl bg-muted/40 p-3.5 leading-relaxed text-ink font-medium" lang="ja">
                {topic.passage.jp}
              </div>
              <div className="text-xs sm:text-sm text-sub leading-relaxed px-1">
                {topic.passage.vn}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Practice Card */}
      <Card className="space-y-6">
        {/* Stage 0: Listen Only Mode */}
        {stage === STAGE_LISTEN && (
          <div className="flex flex-col items-center justify-center space-y-6 py-8 text-center">
            <div className="relative">
              <button
                type="button"
                onClick={playQuestionAudio}
                className={cx(
                  'flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl bg-accent text-white shadow-lg transition-transform active:scale-95 cursor-pointer',
                  isPlayingAudio && 'animate-pulse ring-8 ring-accent/20',
                )}
                title="Bấm để nghe lại câu hỏi"
              >
                <Volume2 size={44} />
              </button>
            </div>

            <div className="space-y-1">
              <p className="text-xl sm:text-2xl font-bold text-ink">
                {isPlayingAudio ? 'Đang phát âm câu hỏi...' : 'Lắng nghe và suy nghĩ câu trả lời'}
              </p>
              <p className="text-sm sm:text-base text-sub max-w-md">
                Tập trung nghe câu hỏi tiếng Nhật và thử nói câu trả lời thành tiếng trước khi xem chữ.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button size="lg" onClick={playQuestionAudio} className="gap-2">
                <Volume2 size={18} />
                Nghe lại (R)
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={() => setStage(STAGE_SCRIPT)}
                className="gap-2"
              >
                📄 Không nghe kịp? Hiện script (Enter)
              </Button>
            </div>

            <div className="flex items-center gap-4 text-xs text-sub pt-2">
              <button
                type="button"
                onClick={() => setStage(STAGE_HINT)}
                className="hover:text-accent hover:underline cursor-pointer"
              >
                💡 Bỏ qua, xem gợi ý
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => {
                  setStage(STAGE_ANSWER)
                  void playAnswerAudio()
                }}
                className="hover:text-accent hover:underline cursor-pointer"
              >
                👁️ Xem đáp án luôn
              </button>
            </div>
          </div>
        )}

        {/* Stage 1, 2, 3: Script is Visible */}
        {stage >= STAGE_SCRIPT && (
          <div className="space-y-5">
            {/* Question Box */}
            <div className="rounded-2xl border border-line bg-muted/40 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2 text-xs font-bold text-sub mb-3">
                <span className="flex items-center gap-1.5 uppercase tracking-wider text-accent">
                  <Volume2 size={16} /> Câu hỏi
                </span>
                <Button size="sm" variant="ghost" onClick={playQuestionAudio} className="h-7 text-xs">
                  🔊 Nghe lại câu hỏi
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl font-extrabold leading-loose text-ink" lang="ja">
                  {formatQuestionDisplay(currentQ.q, learnerName)}
                </p>
                <p className="text-base sm:text-lg text-sub font-medium">
                  {currentQ.qVn}
                </p>
              </div>
            </div>

            {/* Stage 1 action: reveal hint */}
            {stage === STAGE_SCRIPT && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-muted/60 p-4">
                <p className="text-sm text-sub">
                  Bạn đã nghe và hiểu câu hỏi? Hãy bấm để mở gợi ý nội dung cần trả lời.
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setStage(STAGE_HINT)}
                    className="w-full sm:w-auto gap-2"
                  >
                    <Lightbulb size={18} />
                    Hiện gợi ý trả lời (Enter)
                  </Button>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => {
                      setStage(STAGE_ANSWER)
                      void playAnswerAudio()
                    }}
                    className="w-full sm:w-auto"
                  >
                    Đáp án luôn
                  </Button>
                </div>
              </div>
            )}

            {/* Stage 2 & 3: Hint Box is Visible */}
            {stage >= STAGE_HINT && (
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 dark:bg-amber-950/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1.5">
                  <Lightbulb size={16} /> Gợi ý ý trả lời
                </div>
                <p className="text-lg sm:text-xl font-bold text-amber-900 dark:text-amber-200">
                  {currentQ.hint}
                </p>
                <p className="mt-1 text-xs text-sub">
                  Hãy tự nói to thành tiếng câu trả lời tiếng Nhật hoàn chỉnh trước khi xem đáp án mẫu!
                </p>
              </div>
            )}

            {/* Stage 2 action: reveal answer */}
            {stage === STAGE_HINT && (
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setStage(STAGE_ANSWER)
                    void playAnswerAudio()
                  }}
                  className="w-full gap-2 text-lg py-4"
                >
                  👁️ Xem câu trả lời mẫu (Enter)
                </Button>
              </div>
            )}

            {/* Stage 3: Answer is Visible */}
            {stage === STAGE_ANSWER && (
              <div className="space-y-5 animate-in fade-in duration-300">
                {/* Model Answer Box */}
                <div className="rounded-2xl border border-ok/40 bg-ok-soft/50 p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-2 text-xs font-bold text-ok mb-2">
                    <span className="flex items-center gap-1.5 uppercase tracking-wider">
                      <CheckCircle2 size={16} /> Câu trả lời mẫu
                    </span>
                    <Button size="sm" variant="ghost" onClick={playAnswerAudio} className="h-7 text-xs text-ok hover:bg-ok-soft">
                      🔊 Nghe lại đáp án (R)
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <p className="text-2xl sm:text-3xl font-extrabold leading-loose text-ok" lang="ja">
                      {currentQ.aJp}
                    </p>
                    <p className="text-base text-sub font-medium">
                      {currentQ.aVn}
                    </p>
                  </div>
                </div>

                {/* Self Rating Buttons */}
                <div className="space-y-3 rounded-2xl bg-muted/60 p-5 text-center">
                  <p className="text-sm font-bold text-ink">
                    Bạn vừa nói phản xạ thế nào?
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Button
                      variant="ok"
                      size="lg"
                      onClick={() => rateAnswer('ok')}
                      className="gap-2 py-3.5 text-base font-bold"
                    >
                      <span>😀 Nói tốt / Đúng mẫu</span>
                      <span className="rounded bg-ok/20 px-2 py-0.5 text-xs font-mono">(Phím 1)</span>
                    </Button>
                    <Button
                      variant="default"
                      size="lg"
                      onClick={() => rateAnswer('retry')}
                      className="gap-2 py-3.5 text-base font-semibold border-amber-500/40 hover:bg-amber-500/10"
                    >
                      <span>🔁 Cần luyện lại</span>
                      <span className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-sub">(Phím 2)</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}
