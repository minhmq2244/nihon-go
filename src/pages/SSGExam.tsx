import { useState, useEffect, useMemo, useCallback } from 'react'
import {
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flame,
  HelpCircle,
  ImageIcon,
  RotateCcw,
  Shuffle,
  Sparkles,
  X,
} from 'lucide-react'
import { SSG_EXAMS, SSG_QUESTIONS, ALL_SSG_QUESTIONS } from '../lib/ssgData'
import type { SSGQuestion } from '../lib/ssgTypes'
import { useSSGStore } from '../store/ssgStore'
import { Button, Card, cx, Empty, ProgressBar } from '../components/ui'

// Category colors for visual clarity
const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  '1. Làm việc nhóm & Tâm lý nhóm': {
    bg: 'bg-blue-500/10 dark:bg-blue-500/20',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-500/30',
  },
  '2. Quyền lực, Xung đột & Đa văn hóa': {
    bg: 'bg-amber-500/10 dark:bg-amber-500/20',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-500/30',
  },
  '3. Tư duy phản biện & Sáng tạo': {
    bg: 'bg-purple-500/10 dark:bg-purple-500/20',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-500/30',
  },
  '4. Giao tiếp công sở & Điều hành họp': {
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-500/30',
  },
  '5. Định hướng nghề nghiệp & Ứng tuyển': {
    bg: 'bg-rose-500/10 dark:bg-rose-500/20',
    text: 'text-rose-600 dark:text-rose-400',
    border: 'border-rose-500/30',
  },
}

export function SSGExamPage() {
  const {
    bookmarkedIds,
    toggleBookmark,
    isBookmarked,
    knownIds,
    toggleKnown,
    isKnown,
    selectedExamId,
    setSelectedExamId,
    isShuffled,
    toggleShuffled,
  } = useSSGStore()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)

  // Count total bookmarks across all 10 exams
  const totalBookmarked = useMemo(() => {
    return Object.keys(bookmarkedIds).length
  }, [bookmarkedIds])

  // Count total known across all 10 exams
  const totalKnown = useMemo(() => {
    return Object.keys(knownIds).length
  }, [knownIds])

  // Determine active questions list
  const activeQuestions = useMemo(() => {
    let list: SSGQuestion[] = []
    if (selectedExamId === 'review') {
      // Aggregate review: all questions from any exam that have been bookmarked
      list = ALL_SSG_QUESTIONS.filter((q) => Boolean(bookmarkedIds[q.id]))
    } else {
      list = SSG_QUESTIONS[selectedExamId] || []
    }

    if (isShuffled) {
      // Deterministic pseudorandom shuffle based on question IDs
      return [...list].sort((a, b) => {
        const hashA = a.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
        const hashB = b.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
        return (hashA % 97) - (hashB % 97)
      })
    }
    return list
  }, [selectedExamId, bookmarkedIds, isShuffled])

  // Reset current index and flip state when exam changes
  useEffect(() => {
    setCurrentIndex(0)
    setIsFlipped(false)
  }, [selectedExamId, isShuffled])

  // Ensure currentIndex stays within bounds if review list shrinks
  useEffect(() => {
    if (activeQuestions.length > 0 && currentIndex >= activeQuestions.length) {
      setCurrentIndex(Math.max(0, activeQuestions.length - 1))
    }
  }, [activeQuestions.length, currentIndex])

  const currentQ: SSGQuestion | undefined = activeQuestions[currentIndex]

  const handlePrev = useCallback(() => {
    if (activeQuestions.length === 0) return
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : activeQuestions.length - 1))
  }, [activeQuestions.length])

  const handleNext = useCallback(() => {
    if (activeQuestions.length === 0) return
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev < activeQuestions.length - 1 ? prev + 1 : 0))
  }, [activeQuestions.length])

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return

      if (e.code === 'Space') {
        e.preventDefault()
        handleFlip()
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.code === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      } else if (e.key === 'b' || e.key === 'B') {
        if (currentQ) {
          e.preventDefault()
          toggleBookmark(currentQ.id)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleFlip, handlePrev, handleNext, currentQ, toggleBookmark])

  const catStyle = (currentQ?.category && CATEGORY_COLORS[currentQ.category]) || {
    bg: 'bg-muted',
    text: 'text-sub',
    border: 'border-line',
  }

  return (
    <div className="mx-auto max-w-4xl pb-16">
      {/* Top Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white font-bold text-sm shadow-sm">
              SSG
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              SSG-FE Ôn Thi Cấp Tốc
            </h1>
          </div>
          <p className="mt-1 text-sm text-sub">
            Flashcard thuần trắc nghiệm 10 bộ đề thi SSG104 • 250 câu hỏi & giải thích chuẩn hóa
          </p>
        </div>

        {/* Aggregate Stats */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedExamId('review')}
            className={cx(
              'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer',
              totalBookmarked > 0
                ? 'bg-warn-soft text-warn ring-1 ring-warn/40 hover:brightness-105'
                : 'bg-muted text-sub',
              selectedExamId === 'review' && 'ring-2 ring-warn',
            )}
            title="Xem danh sách tất cả câu hỏi chưa làm được"
          >
            <Flame size={15} />
            <span>Chưa làm được: {totalBookmarked}</span>
          </button>

          <span
            className={cx(
              'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold',
              totalKnown > 0 ? 'bg-ok-soft text-ok ring-1 ring-ok/30' : 'bg-muted text-sub',
            )}
            title="Số câu đã thuộc"
          >
            <CheckCircle2 size={15} />
            <span>Đã thuộc: {totalKnown}</span>
          </span>
        </div>
      </div>

      {/* Exam Selector Tabs */}
      <div className="no-scrollbar mb-6 flex items-center gap-2 overflow-x-auto pb-2">
        {SSG_EXAMS.map((exam) => {
          const isActive = selectedExamId === exam.id
          // Count bookmarks in this exam
          const examQuestions = SSG_QUESTIONS[exam.id] || []
          const examBookmarks = examQuestions.filter((q) => bookmarkedIds[q.id]).length

          return (
            <button
              key={exam.id}
              type="button"
              onClick={() => setSelectedExamId(exam.id)}
              className={cx(
                'relative flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-semibold transition shrink-0 cursor-pointer shadow-xs',
                isActive
                  ? 'border-accent bg-accent text-white shadow-sm'
                  : 'border-line bg-surface text-sub hover:border-accent/40 hover:text-ink',
              )}
            >
              <span>{exam.title}</span>
              {examBookmarks > 0 && (
                <span
                  className={cx(
                    'flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold',
                    isActive ? 'bg-white text-accent' : 'bg-warn-soft text-warn ring-1 ring-warn/30',
                  )}
                  title={`${examBookmarks} câu cần ôn trong đề này`}
                >
                  {examBookmarks}
                </span>
              )}
            </button>
          )
        })}

        {/* Dedicated "Ôn chung" Tab */}
        <button
          type="button"
          onClick={() => setSelectedExamId('review')}
          className={cx(
            'flex items-center gap-1.5 rounded-xl border px-4 py-2 text-sm font-bold transition shrink-0 cursor-pointer shadow-xs',
            selectedExamId === 'review'
              ? 'border-warn bg-warn text-white shadow-sm'
              : 'border-warn/40 bg-warn-soft text-warn hover:border-warn hover:brightness-105',
          )}
        >
          <Flame size={16} />
          <span>Ôn chung ({totalBookmarked})</span>
        </button>
      </div>

      {/* Main Flashcard Container */}
      {activeQuestions.length === 0 ? (
        <Card className="p-12 text-center">
          <Empty title="Chưa có câu hỏi nào trong danh mục này">
            {selectedExamId === 'review' ? (
              <div className="max-w-md mx-auto space-y-3">
                <p className="text-sub text-sm">
                  Bạn chưa tích chọn câu hỏi nào là <strong>"Chưa làm được"</strong>.
                </p>
                <p className="text-sub text-sm">
                  👉 Hãy chọn bất kỳ đề nào từ <strong>Đề 01 → Đề 10</strong>, sau đó nhấn nút{' '}
                  <span className="inline-flex items-center gap-1 text-warn font-semibold">
                    <Bookmark size={14} /> Cần ôn lại
                  </span>{' '}
                  ở câu hỏi bạn chưa làm được để hệ thống tự động gom vào đây ôn chung!
                </p>
                <div className="pt-2">
                  <Button variant="primary" onClick={() => setSelectedExamId('de1')}>
                    Bắt đầu học Đề số 01
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-sub text-sm">Không tìm thấy câu hỏi nào cho đề này.</p>
            )}
          </Empty>
        </Card>
      ) : currentQ ? (
        <div className="space-y-4">
          {/* Question Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-ink">
                Câu {currentIndex + 1} / {activeQuestions.length}
              </span>
              <span className="text-xs text-sub">({currentQ.examTitle})</span>
              {currentQ.category && (
                <span
                  className={cx(
                    'rounded-lg border px-2.5 py-1 text-xs font-semibold',
                    catStyle.bg,
                    catStyle.text,
                    catStyle.border,
                  )}
                >
                  {currentQ.category}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Shuffle button */}
              <button
                type="button"
                onClick={toggleShuffled}
                className={cx(
                  'flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition cursor-pointer',
                  isShuffled
                    ? 'border-accent bg-accent text-white'
                    : 'border-line bg-surface text-sub hover:text-ink',
                )}
                title="Xáo trộn thứ tự câu hỏi"
              >
                <Shuffle size={13} />
                <span>Xáo trộn</span>
              </button>

              {/* View original image button */}
              {currentQ.imgFile && (
                <button
                  type="button"
                  onClick={() => setShowImageModal(true)}
                  className="flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-sub hover:text-ink hover:border-accent/40 transition cursor-pointer"
                  title="Xem ảnh chụp gốc từ đề thi"
                >
                  <ImageIcon size={13} />
                  <span>Ảnh gốc</span>
                </button>
              )}

              {/* Mark as Known toggle */}
              <button
                type="button"
                onClick={() => toggleKnown(currentQ.id)}
                className={cx(
                  'flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition cursor-pointer',
                  isKnown(currentQ.id)
                    ? 'border-ok bg-ok-soft text-ok'
                    : 'border-line bg-surface text-sub hover:text-ink',
                )}
                title="Đánh dấu đã thuộc câu này"
              >
                <CheckCircle2 size={14} />
                <span>{isKnown(currentQ.id) ? 'Đã thuộc' : 'Thuộc'}</span>
              </button>

              {/* Bookmark (Chưa làm được) toggle */}
              <button
                type="button"
                onClick={() => toggleBookmark(currentQ.id)}
                className={cx(
                  'flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-bold transition cursor-pointer shadow-xs',
                  isBookmarked(currentQ.id)
                    ? 'border-warn bg-warn text-white shadow-xs'
                    : 'border-line bg-surface text-sub hover:text-warn hover:border-warn/50',
                )}
                title="Tích chọn câu chưa làm được (Phím tắt B)"
              >
                {isBookmarked(currentQ.id) ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                <span>{isBookmarked(currentQ.id) ? 'Chưa làm được' : 'Cần ôn lại'}</span>
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <ProgressBar value={(currentIndex + 1) / activeQuestions.length} />

          {/* Quick Pill Navigator */}
          <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto py-1">
            {activeQuestions.map((q, idx) => {
              const isCur = idx === currentIndex
              const isBmk = isBookmarked(q.id)
              const isKn = isKnown(q.id)

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    setIsFlipped(false)
                    setCurrentIndex(idx)
                  }}
                  className={cx(
                    'relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition cursor-pointer',
                    isCur
                      ? 'bg-accent text-white shadow-sm ring-2 ring-accent/40'
                      : isBmk
                      ? 'bg-warn-soft text-warn border border-warn/40'
                      : isKn
                      ? 'bg-ok-soft text-ok border border-ok/30'
                      : 'border border-line bg-surface text-sub hover:bg-muted',
                  )}
                  title={`Câu ${idx + 1}${isBmk ? ' (Chưa làm được)' : isKn ? ' (Đã thuộc)' : ''}`}
                >
                  <span>{idx + 1}</span>
                  {isBmk && !isCur && (
                    <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-warn ring-1 ring-surface" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Pure Flashcard Card with Flip Effect */}
          <div
            onClick={handleFlip}
            className="group relative min-h-[360px] sm:min-h-[400px] cursor-pointer rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-accent/40 active:scale-[0.99]"
          >
            {/* Flip badge indicator */}
            <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2">
                <span
                  className={cx(
                    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase',
                    isFlipped
                      ? 'bg-ok-soft text-ok border border-ok/30'
                      : 'bg-accent-soft text-accent border border-accent/20',
                  )}
                >
                  <Sparkles size={12} />
                  {isFlipped ? 'Mặt sau: Đáp án & Giải thích' : 'Mặt trước: Câu hỏi & Lựa chọn'}
                </span>
                <span className="text-xs text-sub hidden sm:inline">
                  (Nhấn <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-ink">Space</kbd> hoặc click để lật)
                </span>
              </div>

              <span className="text-xs font-medium text-sub group-hover:text-accent transition flex items-center gap-1">
                <RotateCcw size={13} />
                <span>{isFlipped ? 'Xem câu hỏi' : 'Lật đáp án'}</span>
              </span>
            </div>

            {/* Front Side: Question + Options */}
            {!isFlipped ? (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-ink leading-relaxed">
                    {currentQ.question}
                  </h2>
                </div>

                {/* 4 Choices */}
                <div className="grid grid-cols-1 gap-2.5">
                  {currentQ.options.map((opt) => (
                    <div
                      key={opt.letter}
                      className="flex items-start gap-3 rounded-xl border border-line bg-surface/60 p-3.5 transition group-hover:border-line"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted font-bold text-xs text-ink">
                        {opt.letter}
                      </span>
                      <span className="text-sm sm:text-base text-ink pt-0.5 leading-snug">
                        {opt.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center text-xs text-sub font-medium">
                  💡 Bấm vào thẻ để xem ngay đáp án (A, B, C, D) và phần giải thích
                </div>
              </div>
            ) : (
              /* Back Side: Clean Answer + Rationale */
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Big Answer Letter */}
                <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-ok-soft to-accent-soft border border-ok/30 p-6 text-center shadow-inner">
                  <span className="text-xs font-bold uppercase tracking-wider text-sub mb-1">
                    Đáp án chính xác
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-5xl sm:text-6xl font-black text-ok drop-shadow-xs">
                      {currentQ.answer}
                    </span>
                  </div>
                  <div className="mt-3 text-base sm:text-lg font-semibold text-ink max-w-xl">
                    {currentQ.options.find((o) => o.letter === currentQ.answer)?.text}
                  </div>
                </div>

                {/* Concise Explanation */}
                {currentQ.explanation && (
                  <div className="rounded-xl border border-line bg-muted/40 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-sub uppercase mb-1.5">
                      <HelpCircle size={14} className="text-accent" />
                      <span>Cơ sở lý thuyết & Giải thích</span>
                    </div>
                    <p className="text-sm sm:text-base text-ink leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </div>
                )}

                {/* Quick actions on back face */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleBookmark(currentQ.id)
                    }}
                    className={cx(
                      'flex items-center gap-1.5 rounded-xl border px-4 py-2 text-sm font-bold transition shadow-xs cursor-pointer',
                      isBookmarked(currentQ.id)
                        ? 'border-warn bg-warn text-white'
                        : 'border-line bg-surface text-sub hover:text-warn hover:border-warn',
                    )}
                  >
                    <Bookmark size={15} />
                    <span>{isBookmarked(currentQ.id) ? '✓ Đang lưu trong Ôn chung' : '+ Thêm vào Ôn chung'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleKnown(currentQ.id)
                    }}
                    className={cx(
                      'flex items-center gap-1.5 rounded-xl border px-4 py-2 text-sm font-semibold transition cursor-pointer',
                      isKnown(currentQ.id)
                        ? 'border-ok bg-ok-soft text-ok'
                        : 'border-line bg-surface text-sub hover:text-ink',
                    )}
                  >
                    <CheckCircle2 size={15} />
                    <span>{isKnown(currentQ.id) ? '✓ Đã thuộc câu này' : 'Đánh dấu đã thuộc'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <Button
              variant="default"
              onClick={handlePrev}
              className="flex-1 sm:flex-none gap-2"
              title="Câu trước (Phím mũi tên trái ←)"
            >
              <ChevronLeft size={18} />
              <span>Câu trước</span>
            </Button>

            <Button
              variant="primary"
              onClick={handleFlip}
              className="flex-1 sm:px-8 gap-2 font-bold"
              title="Lật thẻ (Phím Space)"
            >
              <RotateCcw size={17} />
              <span>{isFlipped ? 'Xem lại câu hỏi' : 'Lật xem đáp án'}</span>
            </Button>

            <Button
              variant="default"
              onClick={handleNext}
              className="flex-1 sm:flex-none gap-2"
              title="Câu tiếp theo (Phím mũi tên phải →)"
            >
              <span>Câu sau</span>
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      ) : null}

      {/* Original Image Modal */}
      {showImageModal && currentQ?.imgFile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
          onClick={() => setShowImageModal(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between border-b border-line pb-2">
              <span className="font-bold text-ink">
                Ảnh đề thi gốc: {currentQ.imgFile} ({currentQ.examTitle} - Câu {currentQ.qIndex})
              </span>
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="rounded-lg p-1 text-sub hover:bg-muted hover:text-ink transition cursor-pointer"
                title="Đóng"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex items-center justify-center overflow-auto rounded-xl bg-muted/40 p-4">
              <img
                src={`/ssg/images/${currentQ.imgFile}`}
                alt={`Đề thi gốc ${currentQ.imgFile}`}
                className="max-h-[65vh] w-auto rounded-lg object-contain shadow-sm"
              />
            </div>

            <div className="mt-3 text-center text-xs text-sub">
              Ảnh chụp nguyên bản từ đề thi được trích xuất trực tiếp từ tệp lưu trữ.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
