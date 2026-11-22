import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  CheckCircle2,
  Headphones,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Volume2,
  Zap,
} from 'lucide-react'
import { Jp } from '../components/Jp'
import { Button, Card, Empty, SpeakButton, cx } from '../components/ui'
import { getModuleById, REAL_LIFE_MODULES } from '../lib/modulesData'
import { usePassivePlayer } from '../store/passivePlayer'
import { getPlaylistById } from '../lib/passiveListeningData'
import { speak } from '../lib/speech'

type TabKey = 'vocab' | 'grammar' | 'kanji' | 'listening' | 'quiz' | 'dialogue'

export function ModuleDetailPage() {
  const { id = 'mod-01', tab = 'vocab' } = useParams()
  const activeTab = (['vocab', 'grammar', 'kanji', 'listening', 'quiz', 'dialogue'].includes(tab)
    ? tab
    : 'vocab') as TabKey

  const moduleData = getModuleById(id)
  const playPlaylist = usePassivePlayer((s) => s.playPlaylist)

  // Sub-states
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showMeaning, setShowMeaning] = useState<boolean>(true)
  
  // Flashcard review state inside Vocab
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false)
  const [fcIndex, setFcIndex] = useState<number>(0)
  const [fcFlipped, setFcFlipped] = useState<boolean>(false)

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({})

  // Listening Q&A state
  const [listeningAnswers, setListeningAnswers] = useState<Record<string, number>>({})
  const [listeningRevealed, setListeningRevealed] = useState<Record<string, boolean>>({})

  // Dialogue roleplay state
  const [roleplayRole, setRoleplayRole] = useState<'all' | 'A' | 'B'>('all')

  if (!moduleData) {
    return (
      <Empty title="Không tìm thấy Module">
        <Link to="/units">
          <Button variant="primary" className="mt-4">
            ← Quay lại Lộ trình Module
          </Button>
        </Link>
      </Empty>
    )
  }

  // Categories for vocab filtering
  const categories = ['all', ...Array.from(new Set(moduleData.vocab.map((v) => v.category)))]
  const filteredVocab =
    selectedCategory === 'all'
      ? moduleData.vocab
      : moduleData.vocab.filter((v) => v.category === selectedCategory)

  // Current module index in list
  const currentIdx = REAL_LIFE_MODULES.findIndex((m) => m.id === moduleData.id)
  const prevModule = currentIdx > 0 ? REAL_LIFE_MODULES[currentIdx - 1] : null
  const nextModule = currentIdx < REAL_LIFE_MODULES.length - 1 ? REAL_LIFE_MODULES[currentIdx + 1] : null

  // Launch passive listening for this module
  const handleOpenPassivePlayer = () => {
    const pl = getPlaylistById('mega-b01-b11')
    if (pl) {
      playPlaylist(pl, currentIdx)
    }
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Breadcrumb & Navigation Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/units"
          className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-sub hover:text-accent transition"
        >
          <ArrowLeft size={16} /> Lộ trình Module Thực Chiến
        </Link>
        <div className="flex items-center gap-2">
          {prevModule && (
            <Link to={`/module/${prevModule.id}/${activeTab}`}>
              <Button size="sm" variant="ghost">
                ← M{prevModule.num < 10 ? `0${prevModule.num}` : prevModule.num}
              </Button>
            </Link>
          )}
          {nextModule && (
            <Link to={`/module/${nextModule.id}/${activeTab}`}>
              <Button size="sm" variant="ghost">
                M{nextModule.num < 10 ? `0${nextModule.num}` : nextModule.num} →
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Hero Module Banner */}
      <div className={cx('rounded-3xl border-2 p-6 sm:p-8 shadow-sm bg-gradient-to-br', moduleData.accentColor)}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface text-ink text-xs font-black uppercase tracking-wider shadow-xs border border-line">
                <Sparkles size={13} className="text-accent" /> {moduleData.badge}
              </span>
              <span className="rounded-full bg-surface/80 px-3 py-1 text-xs font-bold text-sub border border-line">
                ⏱️ {moduleData.estimatedHours}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-ink tracking-tight leading-snug">
              {moduleData.titleVn}
            </h1>
            <p className="text-lg sm:text-xl font-bold text-sub">
              <Jp text={moduleData.titleJp} />
            </p>
            <p className="text-base text-sub leading-relaxed">{moduleData.subtitle}</p>
          </div>

          <div className="flex flex-col gap-2.5 sm:items-end">
            <Button
              variant="cta"
              size="md"
              onClick={handleOpenPassivePlayer}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-md"
            >
              <Headphones size={18} /> Nghe thụ động Spotify
            </Button>
            <span className="text-xs text-sub font-semibold">Tự động phát lời đồng bộ 2 giọng nam nữ</span>
          </div>
        </div>

        {/* 6 Pillars Stat Grid */}
        <div className="mt-6 pt-6 border-t border-line/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">📝 Từ vựng</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.stats.vocab} từ</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">📐 Ngữ pháp</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.stats.grammar} mẫu</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">🀄 Kanji</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.stats.kanji} chữ</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">🎧 Luyện nghe</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.listening.length} bài</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">⚡ Ôn tập & Drill</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.quiz.length} câu</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">💬 Hội thoại</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.dialogue.lines.length} câu</span>
          </div>
        </div>
      </div>

      {/* Sticky Tab Navigation Bar */}
      <nav className="sticky top-16 z-20 -mx-4 border-b border-line bg-bg/95 px-4 py-2.5 backdrop-blur-md shadow-xs">
        <div className="flex gap-2 overflow-x-auto pb-1 items-center">
          {[
            { key: 'vocab', label: '📝 Từ vựng', count: moduleData.vocab.length },
            { key: 'grammar', label: '📐 Ngữ pháp', count: moduleData.grammar.length },
            { key: 'kanji', label: '🀄 Kanji Thực Chiến', count: moduleData.kanji.length },
            { key: 'listening', label: '🎧 Luyện nghe Q&A', count: moduleData.listening.length },
            { key: 'quiz', label: '⚡ Ôn tập & Quiz', count: moduleData.quiz.length },
            { key: 'dialogue', label: '💬 Hội thoại Kaiwa', count: moduleData.dialogue.lines.length },
          ].map((t) => {
            const isActive = activeTab === t.key
            return (
              <Link
                key={t.key}
                to={`/module/${moduleData.id}/${t.key}`}
                className={cx(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-extrabold whitespace-nowrap transition cursor-pointer',
                  isActive
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-surface border border-line text-sub hover:text-ink hover:border-accent/40',
                )}
              >
                <span>{t.label}</span>
                <span
                  className={cx(
                    'px-2 py-0.5 rounded-full text-xs font-black',
                    isActive ? 'bg-white/25 text-white' : 'bg-muted text-sub',
                  )}
                >
                  {t.count}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* TAB 1: TỪ VỰNG (VOCAB HUB) */}
      {activeTab === 'vocab' && (
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-surface p-4 rounded-2xl border border-line">
            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sub mr-1">Chủ đề nhỏ:</span>
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCategory(c)}
                  className={cx(
                    'px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer',
                    selectedCategory === c
                      ? 'bg-accent text-white shadow-xs'
                      : 'bg-muted text-sub hover:text-ink',
                  )}
                >
                  {c === 'all' ? 'Tất cả' : c}
                </button>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowMeaning(!showMeaning)}
                className="px-3 py-1.5 rounded-xl border border-line bg-surface text-xs font-bold text-sub hover:text-ink transition cursor-pointer"
              >
                {showMeaning ? 'Ẩn nghĩa tiếng Việt' : 'Hiện nghĩa tiếng Việt'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFlashcardMode(!flashcardMode)
                  setFcIndex(0)
                  setFcFlipped(false)
                }}
                className={cx(
                  'px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center gap-1.5',
                  flashcardMode ? 'bg-amber-500 text-black' : 'bg-surface border border-line text-sub hover:text-ink',
                )}
              >
                <Zap size={14} />
                <span>{flashcardMode ? 'Thoát Lật Thẻ' : 'Chế độ Lật Thẻ (Flashcard)'}</span>
              </button>
            </div>
          </div>

          {/* Flashcard review mode */}
          {flashcardMode ? (
            <div className="max-w-xl mx-auto space-y-4">
              <div className="flex items-center justify-between text-sm font-bold text-sub">
                <span>
                  Thẻ {fcIndex + 1} / {filteredVocab.length}
                </span>
                <span className="text-xs bg-muted px-2.5 py-1 rounded-full">
                  {filteredVocab[fcIndex]?.category}
                </span>
              </div>

              <div
                onClick={() => setFcFlipped(!fcFlipped)}
                className="h-64 rounded-3xl border-2 border-accent/40 bg-gradient-to-br from-surface to-accent/5 p-8 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg hover:border-accent transition select-none"
              >
                {!fcFlipped ? (
                  <div className="space-y-4">
                    <p className="text-3xl sm:text-4xl font-black text-ink">
                      <Jp text={filteredVocab[fcIndex]?.jp || ''} />
                    </p>
                    <p className="text-sm font-mono text-sub">{filteredVocab[fcIndex]?.romaji}</p>
                    <p className="text-xs font-semibold text-accent mt-4">👉 Chạm để lật xem nghĩa</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-2xl sm:text-3xl font-extrabold text-ink">
                      {filteredVocab[fcIndex]?.vn}
                    </p>
                    {filteredVocab[fcIndex]?.example && (
                      <div className="mt-4 pt-4 border-t border-line/60 text-left">
                        <p className="text-sm font-bold text-accent">
                          <Jp text={filteredVocab[fcIndex].example!.jp} />
                        </p>
                        <p className="text-xs text-sub">{filteredVocab[fcIndex].example!.vn}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3">
                <Button
                  size="md"
                  variant="ghost"
                  disabled={fcIndex === 0}
                  onClick={() => {
                    setFcIndex((prev) => Math.max(0, prev - 1))
                    setFcFlipped(false)
                  }}
                >
                  ← Thẻ trước
                </Button>

                <SpeakButton text={filteredVocab[fcIndex]?.jp || ''} />

                <Button
                  size="md"
                  variant="primary"
                  onClick={() => {
                    if (fcIndex < filteredVocab.length - 1) {
                      setFcIndex((prev) => prev + 1)
                      setFcFlipped(false)
                    } else {
                      setFlashcardMode(false)
                    }
                  }}
                >
                  {fcIndex < filteredVocab.length - 1 ? 'Thẻ tiếp theo →' : 'Hoàn thành 🎉'}
                </Button>
              </div>
            </div>
          ) : (
            /* Vocab Grid List */
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVocab.map((v) => (
                <Card key={v.id} className="p-5 flex flex-col justify-between space-y-3 hover:border-accent/40 transition">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-muted text-sub">
                        {v.category}
                      </span>
                      <SpeakButton text={v.jp} />
                    </div>

                    <p className="text-xl sm:text-2xl font-black text-ink">
                      <Jp text={v.jp} />
                    </p>
                    <p className="text-xs font-mono text-sub">{v.romaji}</p>

                    {showMeaning && (
                      <p className="text-base font-bold text-ink/90 pt-1 border-t border-line/40">
                        {v.vn}
                      </p>
                    )}
                  </div>

                  {v.example && (
                    <div className="pt-2 border-t border-line/50 text-xs text-sub space-y-1 bg-muted/30 p-2.5 rounded-xl">
                      <div className="flex items-start justify-between gap-1">
                        <span className="font-bold text-accent">
                          <Jp text={v.example.jp} />
                        </span>
                        <SpeakButton text={v.example.jp} className="h-6 w-6" />
                      </div>
                      <p className="text-sub/90">{v.example.vn}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </section>
      )}

      {/* TAB 2: NGỮ PHÁP (GRAMMAR LAB) */}
      {activeTab === 'grammar' && (
        <section className="space-y-6">
          <div className="grid gap-6">
            {moduleData.grammar.map((g, idx) => (
              <Card key={g.id} className="p-6 sm:p-7 space-y-5 border-2 hover:border-accent/40 transition">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-accent text-white font-black text-sm">
                      {idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-ink">{g.title}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-extrabold uppercase">
                    Cấu trúc trọng tâm
                  </span>
                </div>

                {/* Formula box */}
                <div className="rounded-2xl bg-muted/60 p-4 border border-line">
                  <span className="text-xs font-bold uppercase tracking-wider text-sub block mb-1">
                    📐 Công thức ghép từ:
                  </span>
                  <p className="text-base sm:text-lg font-mono font-bold text-ink">{g.formula}</p>
                </div>

                {/* Meaning & Usage */}
                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-bold text-ink">
                    <span className="text-sub">Ý nghĩa: </span> {g.meaning}
                  </p>
                  <p className="text-sm sm:text-base text-sub leading-relaxed">{g.usageNote}</p>
                </div>

                {/* Spoken Tip (Conversational Nuance) */}
                <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-600 dark:text-amber-400">
                    <Lightbulb size={16} /> Bật mí văn nói đời thường ngoài đời
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ink leading-relaxed">
                    {g.spokenTip}
                  </p>
                </div>

                {/* Examples */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sub block">
                    Ví dụ hội thoại thực tế:
                  </span>
                  <div className="grid gap-2.5">
                    {g.examples.map((ex, exIdx) => (
                      <div
                        key={exIdx}
                        className="rounded-xl bg-surface border border-line p-3 flex items-start justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <p className="text-base sm:text-lg font-bold text-ink">
                            <Jp text={ex.jp} />
                          </p>
                          <p className="text-sm text-sub">{ex.vn}</p>
                        </div>
                        <SpeakButton text={ex.jp} />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* TAB 3: KANJI THỰC CHIẾN (KANJI MASTER) */}
      {activeTab === 'kanji' && (
        <section className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moduleData.kanji.map((k) => (
              <Card key={k.char} className="p-5 flex flex-col justify-between space-y-4 hover:border-accent transition">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2 border-b border-line pb-3">
                    <div className="flex items-center gap-3">
                      <span className="h-16 w-16 rounded-2xl bg-accent-soft text-accent text-4xl font-black flex items-center justify-center border border-accent/20">
                        {k.char}
                      </span>
                      <div>
                        <h4 className="text-lg font-black text-ink">{k.hanviet}</h4>
                        <span className="text-xs text-sub font-semibold">{k.strokes} nét</span>
                      </div>
                    </div>
                    <SpeakButton text={k.char} />
                  </div>

                  <div className="text-xs sm:text-sm text-sub space-y-1">
                    <p>
                      <b className="text-ink">Âm On/Kun:</b> {k.onkun}
                    </p>
                    <p>
                      <b className="text-ink">Ý nghĩa:</b> {k.meaning}
                    </p>
                  </div>
                </div>

                {/* Practical compounds */}
                <div className="pt-2 border-t border-line/60 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sub block">
                    Từ ghép đời sống:
                  </span>
                  <div className="grid gap-1">
                    {k.compounds.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center justify-between text-xs sm:text-sm bg-muted/40 px-2.5 py-1.5 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-ink">
                            <Jp text={c.jp} />
                          </span>
                          <span className="text-sub">— {c.vn}</span>
                        </div>
                        <SpeakButton text={c.jp} className="h-6 w-6" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* TAB 4: LUYỆN NGHE & PHẢN XẠ (LISTENING Q&A) */}
      {activeTab === 'listening' && (
        <section className="space-y-6 max-w-3xl mx-auto">
          {moduleData.listening.map((l, qIdx) => {
            const isRevealed = listeningRevealed[l.id]
            const selectedOpt = listeningAnswers[l.id]

            return (
              <Card key={l.id} className="p-6 sm:p-7 space-y-5 border-2 hover:border-emerald-500/40 transition">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase">
                    🎧 Tình huống {qIdx + 1}: {l.context}
                  </span>
                  <span className="text-xs text-sub font-semibold">Bấm loa để nghe giọng đọc bản xứ</span>
                </div>

                {/* Audio Trigger Box */}
                <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/10 p-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      Đoạn Audio Thực Tế
                    </span>
                    <p className="text-lg font-bold text-ink">
                      Nghe hội thoại và chọn đáp án chính xác nhất
                    </p>
                  </div>
                  <Button
                    variant="cta"
                    size="md"
                    onClick={() => {
                      void speak(l.audioText)
                    }}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-md"
                  >
                    <Volume2 size={18} /> Nghe Audio 🔊
                  </Button>
                </div>

                {/* Question */}
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-extrabold text-ink">
                    <Jp text={l.questionJp} />
                  </p>
                  <p className="text-sm text-sub">{l.questionVn}</p>
                </div>

                {/* Options */}
                <div className="grid gap-2.5">
                  {l.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx
                    const showCorrect = isRevealed && opt.isCorrect
                    const showWrong = isRevealed && isSelected && !opt.isCorrect

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => {
                          setListeningAnswers({ ...listeningAnswers, [l.id]: optIdx })
                          setListeningRevealed({ ...listeningRevealed, [l.id]: true })
                        }}
                        className={cx(
                          'p-4 rounded-2xl border text-left transition flex items-start justify-between gap-3 cursor-pointer',
                          showCorrect
                            ? 'border-ok bg-ok-soft text-ink font-bold'
                            : showWrong
                              ? 'border-bad bg-bad-soft text-ink'
                              : isSelected
                                ? 'border-accent bg-accent-soft text-ink'
                                : 'border-line bg-surface hover:border-accent/40',
                        )}
                      >
                        <div className="space-y-0.5">
                          <p className="text-base font-bold">
                            <Jp text={opt.jp} />
                          </p>
                          <p className="text-xs text-sub">{opt.vn}</p>
                        </div>
                        {showCorrect && <CheckCircle2 size={20} className="text-ok shrink-0" />}
                      </button>
                    )
                  })}
                </div>

                {/* Explanation */}
                {isRevealed && (
                  <div className="rounded-2xl border border-line bg-muted/40 p-4 space-y-1 text-sm">
                    <span className="font-extrabold text-accent block">💡 Giải thích chi tiết:</span>
                    <p className="text-sub leading-relaxed">{l.explanation}</p>
                  </div>
                )}
              </Card>
            )
          })}
        </section>
      )}

      {/* TAB 5: ÔN TẬP & QUIZ (REVIEW & SPEED DRILL) */}
      {activeTab === 'quiz' && (
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-surface p-5 rounded-2xl border border-line flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-black text-ink">⚡ Speed Drill: Kiểm tra phản xạ tức thì</h3>
              <p className="text-xs sm:text-sm text-sub">
                Độ phủ 100% ngữ pháp, từ vựng và Kanji của Module này.
              </p>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setQuizAnswers({})
                setQuizSubmitted({})
              }}
            >
              <RotateCcw size={14} /> Làm lại từ đầu
            </Button>
          </div>

          <div className="grid gap-5">
            {moduleData.quiz.map((q, idx) => {
              const selectedOpt = quizAnswers[q.id]
              const isSubmitted = quizSubmitted[q.id]

              return (
                <Card key={q.id} className="p-6 space-y-4 border-2 hover:border-accent/30 transition">
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-lg bg-accent/20 text-accent font-black text-xs flex items-center justify-center">
                      Q{idx + 1}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-ink leading-snug">{q.stem}</h4>
                  </div>

                  <div className="grid gap-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx
                      const isCorrect = optIdx === q.correct

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => {
                            setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })
                            setQuizSubmitted({ ...quizSubmitted, [q.id]: true })
                          }}
                          className={cx(
                            'p-3.5 rounded-xl border text-left text-sm font-semibold transition flex items-center justify-between gap-3 cursor-pointer',
                            isSubmitted && isCorrect
                              ? 'border-ok bg-ok-soft text-ok font-bold'
                              : isSubmitted && isSelected && !isCorrect
                                ? 'border-bad bg-bad-soft text-bad'
                                : isSelected
                                  ? 'border-accent bg-accent text-white'
                                  : 'border-line bg-surface hover:border-accent/40 text-ink',
                          )}
                        >
                          <span>{opt}</span>
                          {isSubmitted && isCorrect && <CheckCircle2 size={18} className="text-ok shrink-0" />}
                        </button>
                      )
                    })}
                  </div>

                  {isSubmitted && (
                    <div className="mt-3 pt-3 border-t border-line text-xs sm:text-sm text-sub space-y-1">
                      <span className="font-bold text-accent">Phân tích:</span> {q.explain}
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </section>
      )}

      {/* TAB 6: HỘI THOẠI THỰC CHIẾN (KAIWA IMMERSION) */}
      {activeTab === 'dialogue' && (
        <section className="space-y-6 max-w-4xl mx-auto">
          {/* Scene Header */}
          <div className="rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-surface to-teal-500/10 p-6 sm:p-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider">
                  💬 HỘI THOẠI ĐỜI SỐNG THỰC TẾ (30–40 CÂU THOẠI)
                </span>
                <h3 className="mt-2 text-2xl font-black text-ink">{moduleData.dialogue.title}</h3>
                <p className="mt-1 text-sm text-sub leading-relaxed">{moduleData.dialogue.scene}</p>
              </div>
              <Button
                variant="cta"
                size="md"
                onClick={handleOpenPassivePlayer}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-md shrink-0"
              >
                <Headphones size={18} /> Nghe liên tục kiểu Spotify
              </Button>
            </div>

            {/* Roleplay Selector */}
            <div className="pt-3 border-t border-line/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase text-sub">Chế độ luyện vai:</span>
                <button
                  type="button"
                  onClick={() => setRoleplayRole('all')}
                  className={cx(
                    'px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer',
                    roleplayRole === 'all'
                      ? 'bg-accent text-white shadow-xs'
                      : 'bg-muted text-sub hover:text-ink',
                  )}
                >
                  Đầy đủ cả 2 người
                </button>
                <button
                  type="button"
                  onClick={() => setRoleplayRole('A')}
                  className={cx(
                    'px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer',
                    roleplayRole === 'A'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-muted text-sub hover:text-ink',
                  )}
                >
                  Nhập vai A (Ẩn lời thoại A)
                </button>
                <button
                  type="button"
                  onClick={() => setRoleplayRole('B')}
                  className={cx(
                    'px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer',
                    roleplayRole === 'B'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-muted text-sub hover:text-ink',
                  )}
                >
                  Nhập vai B (Ẩn lời thoại B)
                </button>
              </div>

              <div className="text-xs text-sub font-semibold">
                Tổng cộng: <b>{moduleData.dialogue.lines.length} lượt đối đáp</b>
              </div>
            </div>
          </div>

          {/* Dialogue Lines */}
          <div className="space-y-3">
            {moduleData.dialogue.lines.map((line, lIdx) => {
              const isA = line.speaker === 'A'
              const isHidden = (roleplayRole === 'A' && isA) || (roleplayRole === 'B' && !isA)

              return (
                <div
                  key={lIdx}
                  className={cx(
                    'rounded-2xl border p-4 sm:p-5 transition-all flex items-start gap-3 sm:gap-4',
                    isA
                      ? 'border-emerald-500/30 bg-emerald-500/5 mr-4 sm:mr-12'
                      : 'border-purple-500/30 bg-purple-500/5 ml-4 sm:ml-12',
                  )}
                >
                  {/* Speaker Avatar Badge */}
                  <div
                    className={cx(
                      'h-10 w-10 shrink-0 rounded-2xl flex items-center justify-center font-black text-sm shadow-xs',
                      isA ? 'bg-emerald-600 text-white' : 'bg-purple-600 text-white',
                    )}
                  >
                    {line.speaker}
                  </div>

                  {/* Dialogue Content */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-sub">
                        {line.name || (isA ? 'Nhân vật A' : 'Bạn (B)')}
                      </span>
                      <SpeakButton text={line.jp} role={isA ? 'A' : 'B'} />
                    </div>

                    {isHidden ? (
                      <div className="p-3 rounded-xl border border-dashed border-accent/40 bg-accent/5 text-center text-xs font-bold text-accent cursor-pointer hover:bg-accent/10">
                        🎙️ Đến lượt bạn nói! Hãy tự phản xạ bằng tiếng Nhật (Bấm để xem đáp án)
                      </div>
                    ) : (
                      <>
                        <p className="text-base sm:text-lg font-bold text-ink leading-relaxed">
                          <Jp text={line.jp} />
                        </p>
                        <p className="text-sm text-sub leading-relaxed pt-0.5">{line.vn}</p>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Module Footer */}
          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line">
            <Link to="/units">
              <Button variant="ghost">← Xem tất cả 14 Module</Button>
            </Link>

            {nextModule && (
              <Link to={`/module/${nextModule.id}/vocab`}>
                <Button variant="primary" size="lg" className="shadow-md">
                  Học tiếp: Module {nextModule.num < 10 ? `0${nextModule.num}` : nextModule.num} →
                </Button>
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  )
}
