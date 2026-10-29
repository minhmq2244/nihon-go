import { useEffect, useMemo, useState } from 'react'
import type { Unit, VerbDetail } from '../types'
import { Jp } from '../components/Jp'
import { Button, Card, Chip, ProgressBar, SpeakButton, cx } from '../components/ui'
import { useProgress } from '../store/progress'
import { setKey } from '../lib/progressInfo'
import { toBase } from '../lib/furigana'
import { conjugateVerb, getFormList, type VerbFormKey } from '../lib/verbConjugation'
import { generateUnitVerbQuestions, type VerbQuestion } from '../lib/verbQuestions'

// Particle color styling for vibrant, instant visual recognition
const PARTICLE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  に: { bg: 'bg-emerald-500/10 dark:bg-emerald-500/20', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-500/40' },
  を: { bg: 'bg-indigo-500/10 dark:bg-indigo-500/20', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-500/40' },
  で: { bg: 'bg-purple-500/10 dark:bg-purple-500/20', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-500/40' },
  が: { bg: 'bg-amber-500/10 dark:bg-amber-500/20', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-500/40' },
  へ: { bg: 'bg-rose-500/10 dark:bg-rose-500/20', text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-500/40' },
  と: { bg: 'bg-sky-500/10 dark:bg-sky-500/20', text: 'text-sky-700 dark:text-sky-300', border: 'border-sky-500/40' },
  から: { bg: 'bg-teal-500/10 dark:bg-teal-500/20', text: 'text-teal-700 dark:text-teal-300', border: 'border-teal-500/40' },
  まで: { bg: 'bg-orange-500/10 dark:bg-orange-500/20', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-500/40' },
  より: { bg: 'bg-cyan-500/10 dark:bg-cyan-500/20', text: 'text-cyan-700 dark:text-cyan-300', border: 'border-cyan-500/40' },
}

export function VerbTab({ unit }: { unit: Unit }) {
  const unitVerbs = useMemo(() => unit.verbs ?? [], [unit.verbs])
  const allQuestions = useMemo(() => generateUnitVerbQuestions(unitVerbs, unit.meta.id), [unitVerbs, unit.meta.id])

  const [selectedVerbDict, setSelectedVerbDict] = useState<string>('all')
  const [selectedFormFilter, setSelectedFormFilter] = useState<string>('all')
  const [practiceMode, setPracticeMode] = useState<'both' | 'particle' | 'verb'>('both')

  // Filter questions based on selected verb & form
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchVerb = selectedVerbDict === 'all' || q.verbDict === selectedVerbDict
      const matchForm = selectedFormFilter === 'all' || q.targetFormKey === selectedFormFilter
      return matchVerb && matchForm
    })
  }, [allQuestions, selectedVerbDict, selectedFormFilter])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [pickedParticle, setPickedParticle] = useState<string | null>(null)
  const [pickedVerbForm, setPickedVerbForm] = useState<VerbFormKey | null>(null)
  const [isChecked, setIsChecked] = useState(false)
  const [showMeaning, setShowMeaning] = useState(false)
  const [activeSentenceForm, setActiveSentenceForm] = useState<VerbFormKey | null>(null)
  const [modalVerb, setModalVerb] = useState<VerbDetail | null>(null)

  // Scoring
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [history, setHistory] = useState<Record<number, { isOk: boolean; pickedParticle: string | null; pickedForm: VerbFormKey | null }>>({})

  const saveSet = useProgress((s) => s.saveSet)

  // Active question
  const currentQ: VerbQuestion | undefined = filteredQuestions[currentIndex]

  // Reset answer state when changing question or filter
  useEffect(() => {
    setPickedParticle(null)
    setPickedVerbForm(null)
    setIsChecked(false)
    setShowMeaning(false)
    setActiveSentenceForm(null)
  }, [currentIndex, selectedVerbDict, selectedFormFilter, practiceMode])

  // Save progress
  useEffect(() => {
    if (Object.keys(history).length > 0 && filteredQuestions.length > 0) {
      saveSet(setKey(unit.meta.id, 'dong-tu', 'quiz'), score, filteredQuestions.length)
    }
  }, [score, history, filteredQuestions.length, unit.meta.id, saveSet])

  if (!unitVerbs.length || !allQuestions.length) {
    return (
      <Card className="p-8 text-center text-sub">
        <p className="text-xl font-bold text-ink">Bài học này không có động từ trọng tâm.</p>
        <p className="mt-2 text-base">Bạn có thể chuyển sang các tab Lý thuyết, Từ vựng hoặc Ngữ pháp để tiếp tục học.</p>
      </Card>
    )
  }

  const isParticleCorrect = currentQ && pickedParticle === currentQ.targetParticle
  const isVerbCorrect = currentQ && pickedVerbForm === currentQ.targetFormKey

  const isQuestionOk =
    practiceMode === 'both' ? isParticleCorrect && isVerbCorrect : practiceMode === 'particle' ? isParticleCorrect : isVerbCorrect

  const canCheck =
    practiceMode === 'both' ? !!pickedParticle && !!pickedVerbForm : practiceMode === 'particle' ? !!pickedParticle : !!pickedVerbForm

  const handleCheck = () => {
    if (!currentQ || isChecked || !canCheck) return
    setIsChecked(true)
    const ok = isQuestionOk
    setHistory((prev) => ({
      ...prev,
      [currentIndex]: { isOk: ok, pickedParticle, pickedForm: pickedVerbForm },
    }))
    if (ok) {
      setScore((s) => s + 1)
      setStreak((st) => {
        const next = st + 1
        setMaxStreak((m) => Math.max(m, next))
        return next
      })
    } else {
      setStreak(0)
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((i) => i + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setScore(0)
    setStreak(0)
    setHistory({})
    setPickedParticle(null)
    setPickedVerbForm(null)
    setIsChecked(false)
    setShowMeaning(false)
    setActiveSentenceForm(null)
  }

  // Active verb object for modal & current verb highlight
  const currentVerbObj = unitVerbs.find((v) => v.dict === currentQ?.verbDict)

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Deck */}
      <Card className="bg-gradient-to-br from-surface to-accent-soft/30 p-6 sm:p-7 border border-line shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-bold text-accent">
              <span>🎯 Ôn tập Động từ & Trợ từ</span>
              <span>·</span>
              <span>{unitVerbs.length} động từ</span>
              <span>·</span>
              <span>{allQuestions.length} câu hỏi</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-ink">Luyện Trợ Từ & Biến Đổi Thể Động Từ</h2>
            <p className="mt-1 text-sub text-base max-w-2xl">
              Nắm vững trọn bộ trợ từ đi kèm（に・を・で・が・へ・と…）và rèn luyện khả năng nhận biết, biến đổi thể động từ theo ngữ cảnh câu.
            </p>
          </div>

          {/* Streak & Score pills */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-xl border border-line bg-surface px-4 py-2 shadow-xs">
              <span className="text-xl">🔥</span>
              <div>
                <p className="text-xs font-semibold text-sub">Chuỗi đúng (Kỷ lục: {maxStreak})</p>
                <p className="text-lg font-bold text-ink">{streak}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-line bg-surface px-4 py-2 shadow-xs">
              <span className="text-xl">🏆</span>
              <div>
                <p className="text-xs font-semibold text-sub">Điểm số</p>
                <p className="text-lg font-bold text-accent">
                  {score} / {Object.keys(history).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Practice Mode */}
        <div className="mt-6 pt-5 border-t border-line/70 flex flex-col gap-4">
          {/* Verb selector pills */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sub mb-2">1. Chọn động từ muốn ôn tập:</p>
            <div className="no-print flex gap-2 overflow-x-auto pb-1">
              <Chip
                active={selectedVerbDict === 'all'}
                onClick={() => {
                  setSelectedVerbDict('all')
                  setCurrentIndex(0)
                }}
              >
                Tất cả động từ ({unitVerbs.length})
              </Chip>
              {unitVerbs.map((v) => (
                <Chip
                  key={v.dict}
                  active={selectedVerbDict === v.dict}
                  onClick={() => {
                    setSelectedVerbDict(v.dict)
                    setCurrentIndex(0)
                  }}
                >
                  <Jp text={v.dict} /> · <span className="text-xs opacity-80">{v.particles.length} trợ từ</span>
                </Chip>
              ))}
            </div>
          </div>

          {/* Practice mode & form filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sub mr-1">Chế độ:</span>
              <button
                type="button"
                onClick={() => setPracticeMode('both')}
                className={cx(
                  'rounded-lg px-3 py-1.5 text-sm font-semibold transition',
                  practiceMode === 'both' ? 'bg-accent text-white shadow-xs' : 'bg-surface border border-line text-sub hover:text-ink',
                )}
              >
                Trợ từ + Thể động từ
              </button>
              <button
                type="button"
                onClick={() => setPracticeMode('particle')}
                className={cx(
                  'rounded-lg px-3 py-1.5 text-sm font-semibold transition',
                  practiceMode === 'particle' ? 'bg-accent text-white shadow-xs' : 'bg-surface border border-line text-sub hover:text-ink',
                )}
              >
                Chỉ điền Trợ từ
              </button>
              <button
                type="button"
                onClick={() => setPracticeMode('verb')}
                className={cx(
                  'rounded-lg px-3 py-1.5 text-sm font-semibold transition',
                  practiceMode === 'verb' ? 'bg-accent text-white shadow-xs' : 'bg-surface border border-line text-sub hover:text-ink',
                )}
              >
                Chỉ chọn Thể động từ
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sub">Lọc thể:</span>
              <select
                value={selectedFormFilter}
                onChange={(e) => {
                  setSelectedFormFilter(e.target.value)
                  setCurrentIndex(0)
                }}
                className="rounded-lg border border-line bg-surface px-3 py-1 text-sm font-medium text-ink focus:border-accent focus:outline-none"
              >
                <option value="all">Tất cả các thể</option>
                <option value="masu">Thể Masu (〜ます)</option>
                <option value="masuPast">Thể Quá khứ (〜ました)</option>
                <option value="dict">Thể Từ điển (辞書形)</option>
                <option value="te">Thể Te (〜て)</option>
                <option value="masuNeg">Thể Phủ định (〜ません)</option>
                <option value="tai">Thể Mong muốn (〜たい)</option>
                <option value="volitionalMasu">Thể Rủ rê (〜ましょう)</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Practice Deck */}
      {filteredQuestions.length > 0 && currentQ ? (
        <Card className="p-6 sm:p-8 space-y-6 relative overflow-hidden border-2 border-line">
          {/* Header of Question Card */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-line">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-muted px-2.5 py-1 text-sm font-bold text-sub">
                Câu {currentIndex + 1} / {filteredQuestions.length}
              </span>
              <span className="rounded-lg bg-accent-soft px-3 py-1 text-sm font-bold text-accent">
                Động từ: <Jp text={currentQ.verbDict} /> · <Jp text={currentQ.verbMasu} />
              </span>
              <span className="text-xs text-sub hidden sm:inline-block">({currentQ.verbType})</span>
            </div>

            <div className="flex items-center gap-2">
              <SpeakButton text={currentQ.audioText} className="h-9 w-9 bg-accent-soft text-accent" />
              {currentVerbObj && (
                <Button size="sm" variant="default" onClick={() => setModalVerb(currentVerbObj)}>
                  📖 Bảng chia thể
                </Button>
              )}
            </div>
          </div>

          {/* Progress Bar for the current set */}
          <ProgressBar value={(currentIndex + 1) / filteredQuestions.length} />

          {/* Sentence Stem Display with Interactive Blanks */}
          <div className="my-6 rounded-2xl bg-muted/40 p-6 sm:p-8 border border-line/60">
            <p className="text-xs font-semibold uppercase tracking-wider text-sub mb-3">Điền vào chỗ trống:</p>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-loose text-ink flex flex-wrap items-center gap-x-2 gap-y-3">
              {/* Pre-particle text */}
              <Jp text={currentQ.preParticle} />

              {/* Particle Blank Box */}
              {practiceMode !== 'verb' ? (
                <span
                  className={cx(
                    'inline-flex min-w-[64px] h-[52px] items-center justify-center rounded-xl border-2 px-3 text-2xl font-black transition-all shadow-xs',
                    isChecked
                      ? isParticleCorrect
                        ? 'border-ok bg-ok-soft text-ok'
                        : 'border-bad bg-bad-soft text-bad'
                      : pickedParticle
                        ? 'border-accent bg-accent-soft text-accent scale-105'
                        : 'border-dashed border-accent/60 bg-surface text-sub/60 animate-pulse',
                  )}
                >
                  {isChecked ? currentQ.targetParticle : pickedParticle ?? '？'}
                </span>
              ) : (
                <span className="inline-flex min-w-[50px] items-center justify-center rounded-lg bg-muted px-2.5 py-1 text-xl font-bold text-ink">
                  {currentQ.targetParticle}
                </span>
              )}

              {/* Between text */}
              {currentQ.between && <Jp text={currentQ.between} />}

              {/* Verb Blank Box */}
              {practiceMode !== 'particle' ? (
                <span
                  className={cx(
                    'inline-flex min-w-[120px] h-[52px] items-center justify-center rounded-xl border-2 px-4 text-xl sm:text-2xl font-black transition-all shadow-xs',
                    isChecked
                      ? isVerbCorrect
                        ? 'border-ok bg-ok-soft text-ok'
                        : 'border-bad bg-bad-soft text-bad'
                      : pickedVerbForm
                        ? 'border-accent bg-accent-soft text-accent scale-105'
                        : 'border-dashed border-accent/60 bg-surface text-sub/60 animate-pulse',
                  )}
                >
                  {isChecked ? (
                    <Jp text={currentQ.targetVerbText} />
                  ) : pickedVerbForm ? (
                    <Jp text={currentQ.allForms.find((f) => f.key === pickedVerbForm)?.text ?? currentQ.targetVerbText} />
                  ) : (
                    '？ Động từ'
                  )}
                </span>
              ) : (
                <span className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-xl font-bold text-ink">
                  <Jp text={currentQ.targetVerbText} />
                </span>
              )}

              {/* Post-verb text */}
              {currentQ.postVerb && <Jp text={currentQ.postVerb} />}
            </div>

            {/* Toggle Mechanism to Reveal Vietnamese Meaning */}
            <div className="mt-5 pt-4 border-t border-line/60 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowMeaning(!showMeaning)}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-bold text-sub hover:text-accent hover:border-accent transition cursor-pointer"
              >
                <span>{showMeaning ? '🙈 Ẩn nghĩa tiếng Việt' : '👁️ Xem nghĩa tiếng Việt'}</span>
                <span className="text-xs text-sub/80 font-normal">(bấm để {showMeaning ? 'ẩn' : 'hiện'})</span>
              </button>

              {showMeaning && (
                <div className="w-full rounded-xl bg-surface border border-line/80 p-4 shadow-xs animate-in fade-in duration-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Nghĩa tiếng Việt của câu:</p>
                  <p className="text-lg font-bold text-ink">{currentQ.meaningVn}</p>
                  <p className="mt-1 text-xs text-sub">💡 Mẹo: Quan sát từ chỉ thời gian hoặc đối tượng trong câu để chọn trợ từ và thể phù hợp.</p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Selection Area */}
          <div className="space-y-6">
            {/* PART 1: Choose Particle */}
            {practiceMode !== 'verb' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs font-extrabold">1</span>
                    <span>Chọn trợ từ thích hợp:</span>
                  </label>
                  {pickedParticle && !isChecked && (
                    <span className="text-xs font-semibold text-accent">Đã chọn: 「{pickedParticle}」</span>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentQ.particleOptions.map((p) => {
                    const isSelected = pickedParticle === p
                    const isCorrectAnswer = isChecked && p === currentQ.targetParticle
                    const isWrongSelection = isChecked && isSelected && !isCorrectAnswer
                    const colorStyle = PARTICLE_COLORS[p] ?? { bg: 'bg-muted', text: 'text-ink', border: 'border-line' }

                    return (
                      <button
                        key={p}
                        type="button"
                        disabled={isChecked}
                        onClick={() => setPickedParticle(p)}
                        className={cx(
                          'relative flex h-14 items-center justify-center rounded-xl border-2 text-2xl font-black transition-all cursor-pointer select-none active:scale-95',
                          isChecked
                            ? isCorrectAnswer
                              ? 'border-ok bg-ok-soft text-ok ring-2 ring-ok'
                              : isWrongSelection
                                ? 'border-bad bg-bad-soft text-bad'
                                : 'border-line bg-surface/50 text-sub/50'
                            : isSelected
                              ? 'border-accent bg-accent text-white shadow-md scale-102 ring-2 ring-accent/30'
                              : `${colorStyle.bg} ${colorStyle.border} ${colorStyle.text} hover:scale-[1.02] hover:border-accent/80 hover:shadow-xs`,
                        )}
                      >
                        {p}
                        {isCorrectAnswer && <span className="absolute right-3 text-lg font-bold">✓</span>}
                        {isWrongSelection && <span className="absolute right-3 text-lg font-bold">✗</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* PART 2: Choose Verb Form */}
            {practiceMode !== 'particle' && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs font-extrabold">
                      {practiceMode === 'both' ? '2' : '1'}
                    </span>
                    <span>Chọn thể của động từ ({currentQ.verbDict}):</span>
                  </label>
                  {pickedVerbForm && !isChecked && (
                    <span className="text-xs font-semibold text-accent">
                      Đã chọn: {currentQ.verbFormOptions.find((f) => f.formKey === pickedVerbForm)?.label}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ.verbFormOptions.map((opt) => {
                    const isSelected = pickedVerbForm === opt.formKey
                    const isCorrectAnswer = isChecked && opt.formKey === currentQ.targetFormKey
                    const isWrongSelection = isChecked && isSelected && !isCorrectAnswer

                    return (
                      <button
                        key={opt.formKey}
                        type="button"
                        disabled={isChecked}
                        onClick={() => setPickedVerbForm(opt.formKey)}
                        className={cx(
                          'relative flex flex-col items-start justify-center rounded-xl border-2 p-3.5 text-left transition-all cursor-pointer select-none active:scale-[0.99]',
                          isChecked
                            ? isCorrectAnswer
                              ? 'border-ok bg-ok-soft text-ok ring-2 ring-ok'
                              : isWrongSelection
                                ? 'border-bad bg-bad-soft text-bad'
                                : 'border-line bg-surface/50 text-sub/50'
                            : isSelected
                              ? 'border-accent bg-accent-soft text-ink ring-2 ring-accent/30 shadow-xs'
                              : 'border-line bg-surface text-ink hover:border-accent/60 hover:bg-muted/50',
                        )}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span className="text-xl font-extrabold">
                            <Jp text={opt.text} />
                          </span>
                          {isCorrectAnswer && <span className="text-ok font-bold text-lg">✓ Đúng</span>}
                          {isWrongSelection && <span className="text-bad font-bold text-lg">✗ Sai</span>}
                        </div>
                        <span className="mt-1 text-xs font-semibold text-sub">{opt.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Live Verb Form Conjugation Switcher: "Biến đổi câu sang thể khác" */}
            <div className="rounded-xl border border-line bg-muted/20 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sub">🔄 Khám phá: Xem câu ở các thể khác nhau</span>
                <span className="text-xs text-sub">Bấm thể để thử đổi động từ trong câu</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentQ.allForms.slice(0, 8).map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setActiveSentenceForm(f.key)}
                    className={cx(
                      'rounded-lg px-2.5 py-1 text-xs font-semibold transition',
                      activeSentenceForm === f.key
                        ? 'bg-accent text-white shadow-xs'
                        : 'bg-surface border border-line text-sub hover:text-ink hover:border-accent',
                    )}
                  >
                    {f.shortLabel}: <Jp text={f.text} />
                  </button>
                ))}
              </div>

              {activeSentenceForm && (
                <div className="mt-3 rounded-lg bg-surface border border-line p-3 text-sm animate-in fade-in">
                  <p className="font-bold text-ink">
                    <Jp text={currentQ.preParticle} /> {currentQ.targetParticle} {currentQ.between ? currentQ.between + ' ' : ''}
                    <span className="text-accent underline font-extrabold">
                      <Jp text={currentQ.allForms.find((f) => f.key === activeSentenceForm)?.text ?? ''} />
                    </span>
                    {currentQ.postVerb}
                  </p>
                  <p className="mt-1 text-xs text-sub">{currentQ.allForms.find((f) => f.key === activeSentenceForm)?.desc}</p>
                </div>
              )}
            </div>

            {/* Action Buttons: Check, Next, Prev */}
            <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <Button variant="default" size="md" onClick={handlePrev} disabled={currentIndex === 0}>
                  ← Câu trước
                </Button>
                <Button variant="ghost" size="md" onClick={handleRestart}>
                  Làm lại từ đầu 🔄
                </Button>
              </div>

              <div className="flex gap-2">
                {!isChecked ? (
                  <Button variant="primary" size="lg" disabled={!canCheck} onClick={handleCheck}>
                    Kiểm tra đáp án 🚀
                  </Button>
                ) : (
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={currentIndex < filteredQuestions.length - 1 ? handleNext : handleRestart}
                  >
                    {currentIndex < filteredQuestions.length - 1 ? 'Câu tiếp theo →' : 'Hoàn thành bài tập 🎉'}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Feedback & Detailed Explanation Section */}
          {isChecked && (
            <div
              className={cx(
                'rounded-2xl border-2 p-6 animate-in slide-in-from-bottom-2 duration-300 space-y-4 shadow-sm',
                isQuestionOk ? 'border-ok/40 bg-ok-soft/30' : 'border-bad/40 bg-bad-soft/30',
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{isQuestionOk ? '🎉' : '💡'}</span>
                  <div>
                    <h3 className={cx('text-lg font-bold', isQuestionOk ? 'text-ok' : 'text-bad')}>
                      {isQuestionOk ? 'Chính xác! Làm rất tốt!' : 'Chưa chính xác — Hãy xem giải thích bên dưới:'}
                    </h3>
                    <p className="text-xs text-sub">Đáp án đúng cho câu này:</p>
                  </div>
                </div>
                <SpeakButton text={currentQ.audioText} className="h-10 w-10 bg-surface shadow-xs text-accent" />
              </div>

              {/* Correct Sentence Display */}
              <div className="rounded-xl bg-surface border border-line p-4 text-xl sm:text-2xl font-bold text-ink">
                <Jp text={currentQ.fullJp} />
                <p className="mt-1 text-sm font-medium text-sub">{currentQ.meaningVn}</p>
              </div>

              {/* Explanations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Particle Explanation */}
                <div className="rounded-xl bg-surface border border-line p-4 space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                    <span>📌 Giải thích Trợ từ 「{currentQ.targetParticle}」</span>
                  </p>
                  <p className="text-sm text-ink leading-relaxed font-medium">{currentQ.particleExplain}</p>
                </div>

                {/* Verb Form Explanation */}
                <div className="rounded-xl bg-surface border border-line p-4 space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                    <span>⚙️ Giải thích Thể Động từ 「{currentQ.targetVerbText}」</span>
                  </p>
                  <p className="text-sm text-ink leading-relaxed font-medium">{currentQ.verbFormExplain}</p>
                </div>
              </div>

              {/* Full Particles Spectrum for this Verb */}
              <div className="rounded-xl bg-surface border border-line p-4 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-sub">
                  📚 Trọn bộ trợ từ của động từ <Jp text={currentQ.verbDict} />:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {currentQ.allParticles.map((vp) => (
                    <div key={vp.particle} className="rounded-lg bg-muted/60 p-2.5 text-xs">
                      <span className="font-extrabold text-accent text-sm mr-1.5">「{vp.particle}」</span>
                      <span className="font-medium text-ink">{vp.usage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Story Section if available */}
              {currentQ.story && (
                <details className="rounded-xl bg-surface border border-line p-4 group">
                  <summary className="text-xs font-bold uppercase tracking-wider text-accent cursor-pointer flex items-center justify-between">
                    <span>📖 Đoạn văn câu chuyện ngữ cảnh (Trọn bộ trợ từ)</span>
                    <span className="text-sub group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="mt-3 space-y-2 text-sm">
                    <p className="font-bold text-ink leading-relaxed">
                      <Jp text={currentQ.story.jp.replace(/\*\*/g, '')} />
                    </p>
                    <p className="text-sub text-xs leading-relaxed">{currentQ.story.vn}</p>
                  </div>
                </details>
              )}
            </div>
          )}
        </Card>
      ) : (
        <Card className="p-8 text-center text-sub">
          <p className="text-lg font-bold text-ink">Không có câu hỏi nào khớp với bộ lọc đã chọn.</p>
          <Button
            variant="default"
            size="sm"
            className="mt-3"
            onClick={() => {
              setSelectedVerbDict('all')
              setSelectedFormFilter('all')
            }}
          >
            Đặt lại bộ lọc
          </Button>
        </Card>
      )}

      {/* ALL VERBS REFERENCE LIST (Bảng tổng hợp tất cả động từ bài này) */}
      <div className="mt-10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-ink">Danh Mục Động Từ Trọng Tâm Trong Bài</h3>
            <p className="text-sm text-sub">Xem tóm tắt đầy đủ trợ từ, ý nghĩa và bảng chia thể của từng động từ.</p>
          </div>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-sub">{unitVerbs.length} động từ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {unitVerbs.map((v) => {
            const forms = conjugateVerb(v)
            return (
              <Card key={v.dict} className="p-5 hover:border-accent/60 transition space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-extrabold text-ink">
                      <Jp text={v.dict} /> · <Jp text={v.masu} />
                    </h4>
                    <span className="text-xs font-bold text-accent">{v.type}</span>
                  </div>
                  <div className="flex gap-1.5">
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => {
                        setSelectedVerbDict(v.dict)
                        setCurrentIndex(0)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      Luyện từ này 🎯
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setModalVerb(v)}>
                      Bảng thể 📖
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-ink font-medium leading-relaxed">{v.meaning}</p>

                {/* Particle Tags */}
                <div className="space-y-1.5 pt-2 border-t border-line">
                  <p className="text-xs font-bold text-sub">Trợ từ đi kèm:</p>
                  <div className="space-y-1">
                    {v.particles.map((p, i) => (
                      <div key={i} className="text-xs text-sub leading-snug">
                        • {p}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini quick forms preview */}
                <div className="pt-2 border-t border-line flex flex-wrap gap-1 text-xs">
                  <span className="rounded bg-muted px-2 py-0.5 text-sub">
                    て: <Jp text={forms.te.text} />
                  </span>
                  <span className="rounded bg-muted px-2 py-0.5 text-sub">
                    た: <Jp text={forms.ta.text} />
                  </span>
                  <span className="rounded bg-muted px-2 py-0.5 text-sub">
                    ない: <Jp text={forms.nai.text} />
                  </span>
                  <span className="rounded bg-muted px-2 py-0.5 text-sub">
                    たい: <Jp text={forms.tai.text} />
                  </span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* CONJUGATION MODAL */}
      {modalVerb && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setModalVerb(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-line p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-line">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Bảng chia thể chuẩn</span>
                <h3 className="text-2xl font-black text-ink">
                  <Jp text={modalVerb.dict} /> · <Jp text={modalVerb.masu} />
                </h3>
                <p className="text-sm text-sub">{modalVerb.type}</p>
              </div>
              <button
                type="button"
                onClick={() => setModalVerb(null)}
                className="rounded-full p-2 text-sub hover:bg-muted hover:text-ink transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Conjugation List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {getFormList(modalVerb).map((f) => (
                <div key={f.key} className="rounded-xl border border-line bg-muted/30 p-3.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-accent">{f.label}</span>
                    <SpeakButton text={toBase(f.text)} className="h-6 w-6 text-sub hover:text-accent" />
                  </div>
                  <p className="text-lg font-black text-ink">
                    <Jp text={f.text} />
                  </p>
                  <p className="text-xs text-sub">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-line flex justify-end">
              <Button variant="primary" onClick={() => setModalVerb(null)}>
                Đóng
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
