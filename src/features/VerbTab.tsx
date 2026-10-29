import { useEffect, useMemo, useState } from 'react'
import type { Unit, VerbDetail } from '../types'
import { Jp } from '../components/Jp'
import { Button, Card, Chip, ProgressBar, SpeakButton, cx } from '../components/ui'
import { useProgress } from '../store/progress'
import { setKey } from '../lib/progressInfo'
import { toBase } from '../lib/furigana'
import { conjugateVerb, getFormList, type VerbFormKey } from '../lib/verbConjugation'
import { generateUnitVerbQuestions, type VerbQuestion } from '../lib/verbQuestions'

// Particle color styling for clean, readable recognition
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
      <Card className="mx-auto max-w-2xl p-6 text-center text-sub">
        <p className="text-lg font-bold text-ink">Bài học này không có động từ trọng tâm.</p>
        <p className="mt-1 text-sm">Bạn có thể chuyển sang các tab Lý thuyết, Từ vựng hoặc Ngữ pháp để tiếp tục học.</p>
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

  const currentVerbObj = unitVerbs.find((v) => v.dict === currentQ?.verbDict)

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {/* Top Banner & Control Deck - Compact & Clean */}
      <Card className="border border-line bg-surface p-3.5 sm:p-4 shadow-xs space-y-3">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-ink flex items-center gap-1.5">
              <span>🎯 Ôn tập Động từ & Trợ từ</span>
            </h2>
            <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
              {unitVerbs.length} động từ · {allQuestions.length} câu
            </span>
          </div>

          {/* Compact streak & score pills */}
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-lg border border-line bg-muted/40 px-2.5 py-1 font-semibold text-ink">
              🔥 <span className="font-bold">{streak}</span>
              {maxStreak > 0 && <span className="text-sub font-normal">(Kỷ lục: {maxStreak})</span>}
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-accent-soft px-2.5 py-1 font-bold text-accent">
              🏆 {score}/{Object.keys(history).length}
            </span>
          </div>
        </div>

        {/* Filter row: Verb selector */}
        <div className="pt-2 border-t border-line/60">
          <div className="no-print flex gap-1.5 overflow-x-auto pb-1 text-xs">
            <Chip
              active={selectedVerbDict === 'all'}
              onClick={() => {
                setSelectedVerbDict('all')
                setCurrentIndex(0)
              }}
            >
              Tất cả ({unitVerbs.length})
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
                <Jp text={v.dict} /> · <span className="opacity-75">{v.particles.length} trợ từ</span>
              </Chip>
            ))}
          </div>
        </div>

        {/* Mode & Form selectors row */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-line/60">
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sub mr-1">Chế độ:</span>
            <button
              type="button"
              onClick={() => setPracticeMode('both')}
              className={cx(
                'rounded-md px-2 py-1 text-xs font-semibold transition cursor-pointer',
                practiceMode === 'both' ? 'bg-accent text-white shadow-xs' : 'bg-muted/50 text-sub hover:text-ink',
              )}
            >
              Trợ từ + Thể
            </button>
            <button
              type="button"
              onClick={() => setPracticeMode('particle')}
              className={cx(
                'rounded-md px-2 py-1 text-xs font-semibold transition cursor-pointer',
                practiceMode === 'particle' ? 'bg-accent text-white shadow-xs' : 'bg-muted/50 text-sub hover:text-ink',
              )}
            >
              Chỉ Trợ từ
            </button>
            <button
              type="button"
              onClick={() => setPracticeMode('verb')}
              className={cx(
                'rounded-md px-2 py-1 text-xs font-semibold transition cursor-pointer',
                practiceMode === 'verb' ? 'bg-accent text-white shadow-xs' : 'bg-muted/50 text-sub hover:text-ink',
              )}
            >
              Chỉ Thể
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sub">Lọc thể:</span>
            <select
              value={selectedFormFilter}
              onChange={(e) => {
                setSelectedFormFilter(e.target.value)
                setCurrentIndex(0)
              }}
              className="rounded-md border border-line bg-surface px-2 py-1 text-xs font-medium text-ink focus:border-accent focus:outline-none"
            >
              <option value="all">Tất cả thể</option>
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
      </Card>

      {/* Main Practice Deck - Compact, ergonomic card */}
      {filteredQuestions.length > 0 && currentQ ? (
        <Card className="border border-line bg-surface p-4 sm:p-5 shadow-xs space-y-4">
          {/* Header of Question Card */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-line">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-bold text-sub">
                Câu {currentIndex + 1} / {filteredQuestions.length}
              </span>
              <span className="rounded-md bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent">
                Động từ: <Jp text={currentQ.verbDict} /> · <Jp text={currentQ.verbMasu} />
              </span>
              <span className="text-[11px] text-sub hidden sm:inline-block">({currentQ.verbType})</span>
            </div>

            <div className="flex items-center gap-1.5">
              <SpeakButton text={currentQ.audioText} className="h-7 w-7 text-accent bg-accent-soft" />
              {currentVerbObj && (
                <Button size="sm" variant="default" className="text-xs py-1 px-2.5 h-auto" onClick={() => setModalVerb(currentVerbObj)}>
                  📖 Bảng thể
                </Button>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <ProgressBar value={(currentIndex + 1) / filteredQuestions.length} />

          {/* Sentence Stem Display with Interactive Inline Blanks */}
          <div className="rounded-xl bg-muted/30 p-3.5 sm:p-4 border border-line/60">
            <p className="text-[11px] font-bold uppercase tracking-wider text-sub mb-2">Điền vào chỗ trống trong câu:</p>
            <div className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-ink flex flex-wrap items-center gap-x-1.5 gap-y-2">
              {/* Pre-particle text */}
              <Jp text={currentQ.preParticle} />

              {/* Particle Blank Box */}
              {practiceMode !== 'verb' ? (
                <span
                  className={cx(
                    'inline-flex min-w-[38px] h-[32px] items-center justify-center rounded-lg border-2 px-2 text-base font-black transition-all align-middle select-none',
                    isChecked
                      ? isParticleCorrect
                        ? 'border-ok bg-ok-soft text-ok'
                        : 'border-bad bg-bad-soft text-bad'
                      : pickedParticle
                        ? 'border-accent bg-accent-soft text-accent shadow-xs'
                        : 'border-dashed border-accent/60 bg-surface text-sub/50',
                  )}
                >
                  {isChecked ? currentQ.targetParticle : pickedParticle ?? '？'}
                </span>
              ) : (
                <span className="inline-flex min-w-[32px] h-[30px] items-center justify-center rounded-md bg-muted px-2 text-base font-bold text-ink">
                  {currentQ.targetParticle}
                </span>
              )}

              {/* Between text */}
              {currentQ.between && <Jp text={currentQ.between} />}

              {/* Verb Blank Box */}
              {practiceMode !== 'particle' ? (
                <span
                  className={cx(
                    'inline-flex min-w-[72px] h-[32px] items-center justify-center rounded-lg border-2 px-2.5 text-sm sm:text-base font-black transition-all align-middle select-none',
                    isChecked
                      ? isVerbCorrect
                        ? 'border-ok bg-ok-soft text-ok'
                        : 'border-bad bg-bad-soft text-bad'
                      : pickedVerbForm
                        ? 'border-accent bg-accent-soft text-accent shadow-xs'
                        : 'border-dashed border-accent/60 bg-surface text-sub/50',
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
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-base font-bold text-ink">
                  <Jp text={currentQ.targetVerbText} />
                </span>
              )}

              {/* Post-verb text */}
              {currentQ.postVerb && <Jp text={currentQ.postVerb} />}
            </div>

            {/* Toggle Mechanism to Reveal Vietnamese Meaning */}
            <div className="mt-3 pt-2.5 border-t border-line/60">
              <button
                type="button"
                onClick={() => setShowMeaning(!showMeaning)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sub hover:text-accent transition cursor-pointer"
              >
                <span>{showMeaning ? '🙈 Ẩn nghĩa tiếng Việt' : '👁️ Xem nghĩa tiếng Việt'}</span>
                <span className="text-[11px] opacity-70">({showMeaning ? 'bấm để ẩn' : 'bấm để hiện gợi ý'})</span>
              </button>

              {showMeaning && (
                <div className="mt-2 rounded-lg bg-surface border border-line p-2.5 text-sm animate-in fade-in duration-150">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-accent mb-0.5">Nghĩa tiếng Việt:</p>
                  <p className="font-semibold text-ink leading-snug">{currentQ.meaningVn}</p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Selection Area */}
          <div className="space-y-4">
            {/* PART 1: Choose Particle */}
            {practiceMode !== 'verb' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-[11px] font-extrabold">1</span>
                    <span>Chọn trợ từ:</span>
                  </label>
                  {pickedParticle && !isChecked && (
                    <span className="text-xs font-semibold text-accent">Đã chọn: 「{pickedParticle}」</span>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-2">
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
                          'relative flex h-10 sm:h-11 items-center justify-center rounded-lg border text-lg sm:text-xl font-bold transition-all cursor-pointer select-none active:scale-95',
                          isChecked
                            ? isCorrectAnswer
                              ? 'border-ok bg-ok-soft text-ok ring-2 ring-ok'
                              : isWrongSelection
                                ? 'border-bad bg-bad-soft text-bad'
                                : 'border-line bg-surface/50 text-sub/40'
                            : isSelected
                              ? 'border-accent bg-accent text-white shadow-xs font-black ring-2 ring-accent/30'
                              : `${colorStyle.bg} ${colorStyle.border} ${colorStyle.text} hover:scale-[1.02] hover:border-accent/70`,
                        )}
                      >
                        {p}
                        {isCorrectAnswer && <span className="absolute right-2 text-xs font-bold">✓</span>}
                        {isWrongSelection && <span className="absolute right-2 text-xs font-bold">✗</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* PART 2: Choose Verb Form */}
            {practiceMode !== 'particle' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-[11px] font-extrabold">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                          'relative flex items-center justify-between rounded-lg border px-3 py-2 text-left transition-all cursor-pointer select-none active:scale-[0.99]',
                          isChecked
                            ? isCorrectAnswer
                              ? 'border-ok bg-ok-soft text-ok ring-2 ring-ok'
                              : isWrongSelection
                                ? 'border-bad bg-bad-soft text-bad'
                                : 'border-line bg-surface/50 text-sub/40'
                            : isSelected
                              ? 'border-accent bg-accent-soft text-ink ring-2 ring-accent/30 shadow-xs'
                              : 'border-line bg-surface text-ink hover:border-accent/60 hover:bg-muted/40',
                        )}
                      >
                        <div className="flex flex-col">
                          <span className="text-sm sm:text-base font-bold">
                            <Jp text={opt.text} />
                          </span>
                          <span className="text-[11px] text-sub">{opt.label}</span>
                        </div>
                        {isCorrectAnswer && <span className="text-ok font-bold text-xs ml-2">✓ Đúng</span>}
                        {isWrongSelection && <span className="text-bad font-bold text-xs ml-2">✗ Sai</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Live Verb Form Conjugation Switcher: "Biến đổi câu sang thể khác" - Collapsible & Compact */}
            <details className="rounded-lg border border-line bg-muted/20 p-2.5 group">
              <summary className="text-xs font-bold text-sub cursor-pointer flex items-center justify-between select-none">
                <span>🔄 Khám phá: Xem câu này ở các thể khác nhau</span>
                <span className="text-[11px] text-sub group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="mt-2 space-y-2">
                <div className="flex flex-wrap gap-1">
                  {currentQ.allForms.slice(0, 8).map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setActiveSentenceForm(f.key)}
                      className={cx(
                        'rounded-md px-2 py-0.5 text-xs font-semibold transition cursor-pointer',
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
                  <div className="rounded-md bg-surface border border-line p-2 text-xs sm:text-sm animate-in fade-in">
                    <p className="font-bold text-ink">
                      <Jp text={currentQ.preParticle} /> {currentQ.targetParticle} {currentQ.between ? currentQ.between + ' ' : ''}
                      <span className="text-accent underline font-extrabold">
                        <Jp text={currentQ.allForms.find((f) => f.key === activeSentenceForm)?.text ?? ''} />
                      </span>
                      {currentQ.postVerb}
                    </p>
                    <p className="mt-0.5 text-[11px] text-sub">{currentQ.allForms.find((f) => f.key === activeSentenceForm)?.desc}</p>
                  </div>
                )}
              </div>
            </details>

            {/* Action Buttons: Check, Next, Prev */}
            <div className="pt-3 border-t border-line flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-1.5">
                <Button variant="default" size="sm" onClick={handlePrev} disabled={currentIndex === 0}>
                  ← Trước
                </Button>
                <Button variant="ghost" size="sm" onClick={handleRestart}>
                  Làm lại 🔄
                </Button>
              </div>

              <div className="flex gap-2">
                {!isChecked ? (
                  <Button variant="primary" size="md" disabled={!canCheck} onClick={handleCheck}>
                    Kiểm tra đáp án 🚀
                  </Button>
                ) : (
                  <Button
                    variant="cta"
                    size="md"
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
                'rounded-xl border p-3.5 sm:p-4 space-y-3 animate-in fade-in duration-200',
                isQuestionOk ? 'border-ok/40 bg-ok-soft/30' : 'border-bad/40 bg-bad-soft/30',
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{isQuestionOk ? '🎉' : '💡'}</span>
                  <div>
                    <h3 className={cx('text-sm sm:text-base font-bold', isQuestionOk ? 'text-ok' : 'text-bad')}>
                      {isQuestionOk ? 'Chính xác! Làm rất tốt!' : 'Chưa chính xác — Xem phân tích chi tiết:'}
                    </h3>
                  </div>
                </div>
                <SpeakButton text={currentQ.audioText} className="h-8 w-8 bg-surface shadow-xs text-accent" />
              </div>

              {/* Correct Sentence Display */}
              <div className="rounded-lg bg-surface border border-line p-3 text-base sm:text-lg font-bold text-ink">
                <Jp text={currentQ.fullJp} />
                <p className="mt-0.5 text-xs font-medium text-sub">{currentQ.meaningVn}</p>
              </div>

              {/* Explanations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <div className="rounded-lg bg-surface border border-line p-3 space-y-0.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-accent">
                    📌 Trợ từ 「{currentQ.targetParticle}」
                  </p>
                  <p className="text-xs text-ink leading-relaxed font-medium">{currentQ.particleExplain}</p>
                </div>

                <div className="rounded-lg bg-surface border border-line p-3 space-y-0.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-accent">
                    ⚙️ Thể Động từ 「{currentQ.targetVerbText}」
                  </p>
                  <p className="text-xs text-ink leading-relaxed font-medium">{currentQ.verbFormExplain}</p>
                </div>
              </div>

              {/* Full Particles Spectrum */}
              <div className="rounded-lg bg-surface border border-line p-3 space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-sub">
                  📚 Trọn bộ trợ từ của <Jp text={currentQ.verbDict} />:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {currentQ.allParticles.map((vp) => (
                    <div key={vp.particle} className="rounded bg-muted/60 px-2 py-1 text-xs">
                      <span className="font-extrabold text-accent mr-1">「{vp.particle}」</span>
                      <span className="text-ink">{vp.usage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contextual story */}
              {currentQ.story && (
                <details className="rounded-lg bg-surface border border-line p-3 group">
                  <summary className="text-xs font-bold uppercase tracking-wider text-accent cursor-pointer flex items-center justify-between">
                    <span>📖 Đoạn văn ngữ cảnh (Trọn bộ trợ từ)</span>
                    <span className="text-sub group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="font-bold text-ink leading-relaxed">
                      <Jp text={currentQ.story.jp.replace(/\*\*/g, '')} />
                    </p>
                    <p className="text-sub leading-relaxed">{currentQ.story.vn}</p>
                  </div>
                </details>
              )}
            </div>
          )}
        </Card>
      ) : (
        <Card className="p-6 text-center text-sub">
          <p className="text-base font-bold text-ink">Không có câu hỏi nào khớp với bộ lọc đã chọn.</p>
          <Button
            variant="default"
            size="sm"
            className="mt-2.5"
            onClick={() => {
              setSelectedVerbDict('all')
              setSelectedFormFilter('all')
            }}
          >
            Đặt lại bộ lọc
          </Button>
        </Card>
      )}

      {/* ALL VERBS REFERENCE LIST - Collapsible so it doesn't clutter the screen */}
      <details className="group rounded-2xl border border-line bg-surface p-4 shadow-xs">
        <summary className="cursor-pointer flex items-center justify-between font-bold text-sm sm:text-base text-ink select-none">
          <span className="flex items-center gap-2">
            <span>📚 Danh mục {unitVerbs.length} động từ trong bài</span>
            <span className="text-xs font-normal text-sub">(bấm để xem tóm tắt trợ từ & bảng chia thể)</span>
          </span>
          <span className="text-sub group-open:rotate-180 transition">▼</span>
        </summary>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-3 border-t border-line">
          {unitVerbs.map((v) => {
            const forms = conjugateVerb(v)
            return (
              <Card key={v.dict} className="p-3.5 hover:border-accent/60 transition space-y-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base font-extrabold text-ink">
                      <Jp text={v.dict} /> · <Jp text={v.masu} />
                    </h4>
                    <span className="text-[11px] font-bold text-accent">{v.type}</span>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="default"
                      className="text-xs py-0.5 px-2 h-auto"
                      onClick={() => {
                        setSelectedVerbDict(v.dict)
                        setCurrentIndex(0)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      Luyện từ này 🎯
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-xs py-0.5 px-2 h-auto"
                      onClick={() => setModalVerb(v)}
                    >
                      Bảng thể 📖
                    </Button>
                  </div>
                </div>

                <p className="text-ink font-medium leading-relaxed">{v.meaning}</p>

                {/* Particle Tags */}
                <div className="space-y-1 pt-1.5 border-t border-line">
                  <p className="font-bold text-sub">Trợ từ:</p>
                  <div className="space-y-0.5">
                    {v.particles.map((p, i) => (
                      <div key={i} className="text-sub leading-snug">
                        • {p}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick forms preview */}
                <div className="pt-1.5 border-t border-line flex flex-wrap gap-1 text-[11px]">
                  <span className="rounded bg-muted px-1.5 py-0.5 text-sub">
                    て: <Jp text={forms.te.text} />
                  </span>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-sub">
                    た: <Jp text={forms.ta.text} />
                  </span>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-sub">
                    ない: <Jp text={forms.nai.text} />
                  </span>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-sub">
                    たい: <Jp text={forms.tai.text} />
                  </span>
                </div>
              </Card>
            )
          })}
        </div>
      </details>

      {/* CONJUGATION MODAL */}
      {modalVerb && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setModalVerb(null)}
        >
          <div
            className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl bg-surface border border-line p-5 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-line">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">Bảng chia thể chuẩn</span>
                <h3 className="text-xl font-bold text-ink">
                  <Jp text={modalVerb.dict} /> · <Jp text={modalVerb.masu} />
                </h3>
                <p className="text-xs text-sub">{modalVerb.type}</p>
              </div>
              <button
                type="button"
                onClick={() => setModalVerb(null)}
                className="rounded-full p-1.5 text-sub hover:bg-muted hover:text-ink transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Conjugation List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {getFormList(modalVerb).map((f) => (
                <div key={f.key} className="rounded-lg border border-line bg-muted/30 p-2.5 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-accent">{f.label}</span>
                    <SpeakButton text={toBase(f.text)} className="h-5 w-5 text-sub hover:text-accent" />
                  </div>
                  <p className="text-base font-bold text-ink">
                    <Jp text={f.text} />
                  </p>
                  <p className="text-[11px] text-sub">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-line flex justify-end">
              <Button variant="primary" size="sm" onClick={() => setModalVerb(null)}>
                Đóng
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
