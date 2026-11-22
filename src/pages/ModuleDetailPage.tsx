import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Headphones,
  Lightbulb,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  X,
  Zap,
} from 'lucide-react'
import { Jp } from '../components/Jp'
import { Button, Card, Empty, SpeakButton, cx } from '../components/ui'
import { getModuleById, REAL_LIFE_MODULES } from '../lib/modulesData'
import { usePassivePlayer } from '../store/passivePlayer'
import { getPlaylistById } from '../lib/passiveListeningData'
import { DialoguePractice } from '../components/DialoguePractice'
import { speak, stopSpeaking } from '../lib/speech'
import type { Dialogue } from '../types'

type TabKey = 'vocab' | 'kanji' | 'grammar' | 'listening' | 'dialogue' | 'quiz'

export function ModuleDetailPage() {
  const { id = 'mod-01', tab = 'vocab' } = useParams()
  const activeTab = (['vocab', 'kanji', 'grammar', 'listening', 'dialogue', 'quiz'].includes(tab)
    ? tab
    : 'vocab') as TabKey

  const moduleData = getModuleById(id)
  const playPlaylist = usePassivePlayer((s) => s.playPlaylist)

  // Sub-states for Vocab
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showMeaning, setShowMeaning] = useState<boolean>(true)
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false)
  const [fcIndex, setFcIndex] = useState<number>(0)
  const [fcFlipped, setFcFlipped] = useState<boolean>(false)

  // Sub-states for Luyện Nghe (3-level ladder)
  const [listenLevel, setListenLevel] = useState<1 | 2 | 3>(1)
  const [listenIndex, setListenIndex] = useState<number>(0)
  const [listenRevealed, setListenRevealed] = useState<boolean>(false)
  const [listenSpeechRate, setListenSpeechRate] = useState<number>(1.0)
  const [listenMarks, setListenMarks] = useState<Record<string, 'ok' | 'bad'>>({})
  
  // Listening Level 3 (Q&A) selection
  const [listeningAnswers, setListeningAnswers] = useState<Record<string, number>>({})
  const [listeningRevealedQA, setListeningRevealedQA] = useState<Record<string, boolean>>({})

  // Sub-states for Quiz
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({})

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

  // Sentences extracted from grammar examples for Level 2 listening
  const sentenceList = useMemo(() => {
    return moduleData.grammar.flatMap((g) => g.examples)
  }, [moduleData])

  // Current module index in list
  const currentIdx = REAL_LIFE_MODULES.findIndex((m) => m.id === moduleData.id)
  const prevModule = currentIdx > 0 ? REAL_LIFE_MODULES[currentIdx - 1] : null
  const nextModule = currentIdx < REAL_LIFE_MODULES.length - 1 ? REAL_LIFE_MODULES[currentIdx + 1] : null

  // Format module dialogue for DialoguePractice component
  const dialogueForPractice: Dialogue = {
    id: `${moduleData.id}-dialogue`,
    title: moduleData.dialogue.title,
    scene: moduleData.dialogue.scene,
    roles: moduleData.dialogue.roles,
    lines: moduleData.dialogue.lines,
  }

  // Launch passive listening for this module
  const handleOpenPassivePlayer = () => {
    const pl = getPlaylistById('mega-b01-b11')
    if (pl) {
      playPlaylist(pl, currentIdx)
    }
  }

  // Handler for big play button in listening
  const playCurrentListenItem = (text: string) => {
    stopSpeaking()
    void speak(text, { rate: listenSpeechRate })
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Breadcrumb & Top Bar */}
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

        {/* 6 Pillars Nấc Thang Stats */}
        <div className="mt-6 pt-6 border-t border-line/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">📝 1. Từ vựng</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.stats.vocab} từ</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">🀄 2. Kanji</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.stats.kanji} chữ</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">📐 3. Ngữ pháp</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.stats.grammar} mẫu</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">🎧 4. Luyện nghe</span>
            <span className="text-xl font-extrabold text-ink">3 Nấc thang</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">💬 5. Hội thoại</span>
            <span className="text-xl font-extrabold text-ink">4 Bước Kaiwa</span>
          </div>
          <div className="bg-surface/70 rounded-2xl p-3 border border-line text-center">
            <span className="text-xs font-bold text-sub block">⚡ 6. Ôn tập & Quiz</span>
            <span className="text-xl font-extrabold text-ink">{moduleData.quiz.length} câu</span>
          </div>
        </div>
      </div>

      {/* Sticky Tab Navigation Bar: Sequential Learning Ladder */}
      <nav className="sticky top-16 z-20 -mx-4 border-b border-line bg-bg/95 px-4 py-2.5 backdrop-blur-md shadow-xs">
        <div className="flex gap-2 overflow-x-auto pb-1 items-center">
          {[
            { key: 'vocab', label: '📝 1. Từ vựng', count: moduleData.vocab.length },
            { key: 'kanji', label: '🀄 2. Kanji Thực Chiến', count: moduleData.kanji.length },
            { key: 'grammar', label: '📐 3. Ngữ pháp', count: moduleData.grammar.length },
            { key: 'listening', label: '🎧 4. Luyện nghe (3 Nấc)', count: 3 },
            { key: 'dialogue', label: '💬 5. Hội thoại (4 Bước)', count: moduleData.dialogue.lines.length },
            { key: 'quiz', label: '⚡ 6. Ôn tập & Quiz', count: moduleData.quiz.length },
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

      {/* NẤC THANG 1: TỪ VỰNG (VOCAB HUB) */}
      {activeTab === 'vocab' && (
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-surface p-4 rounded-2xl border border-line">
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

          <div className="pt-4 text-center">
            <Link to={`/module/${moduleData.id}/kanji`}>
              <Button variant="primary" size="lg" className="shadow-md">
                Lên nấc thang 2: Học Kanji của từ vựng →
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* NẤC THANG 2: KANJI THỰC CHIẾN (KANJI MASTER) */}
      {activeTab === 'kanji' && (
        <section className="space-y-6">
          <div className="bg-surface p-4 rounded-2xl border border-line flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-black text-ink">🀄 Kanji Trọng Tâm N5/N4 ({moduleData.kanji.length} chữ)</h3>
              <p className="text-xs sm:text-sm text-sub">
                Tập trung học cách đọc, Hán Việt và các từ ghép xuất hiện ngoài đời sống (biển hiệu, ga tàu, thực đơn).
              </p>
            </div>
            <Link to={`/module/${moduleData.id}/grammar`}>
              <Button size="sm" variant="ghost">
                Bỏ qua sang Ngữ pháp →
              </Button>
            </Link>
          </div>

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

          <div className="pt-4 text-center">
            <Link to={`/module/${moduleData.id}/grammar`}>
              <Button variant="primary" size="lg" className="shadow-md">
                Lên nấc thang 3: Học Ngữ pháp ghép câu →
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* NẤC THANG 3: NGỮ PHÁP (GRAMMAR LAB) */}
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

                <div className="rounded-2xl bg-muted/60 p-4 border border-line">
                  <span className="text-xs font-bold uppercase tracking-wider text-sub block mb-1">
                    📐 Công thức ghép từ:
                  </span>
                  <p className="text-base sm:text-lg font-mono font-bold text-ink">{g.formula}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-bold text-ink">
                    <span className="text-sub">Ý nghĩa: </span> {g.meaning}
                  </p>
                  <p className="text-sm sm:text-base text-sub leading-relaxed">{g.usageNote}</p>
                </div>

                <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-600 dark:text-amber-400">
                    <Lightbulb size={16} /> Bật mí văn nói đời thường ngoài đời
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ink leading-relaxed">
                    {g.spokenTip}
                  </p>
                </div>

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

          <div className="pt-4 text-center">
            <Link to={`/module/${moduleData.id}/listening`}>
              <Button variant="primary" size="lg" className="shadow-md">
                Lên nấc thang 4: Luyện nghe phản xạ (3 Nấc) →
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* NẤC THANG 4: LUYỆN NGHE THEO CƠ CHẾ NẤC THANG CHUẨN (LISTEN PRACTICE) */}
      {activeTab === 'listening' && (
        <section className="space-y-6 max-w-3xl mx-auto">
          {/* Level Switcher (3 Nấc Thang Luyện Nghe) */}
          <div className="bg-surface p-4 rounded-2xl border border-line space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-accent">
                🎧 CƠ CHẾ LUYỆN NGHE 3 NẤC THANG
              </span>
              <div className="flex items-center gap-1 text-xs text-sub">
                <span>Tốc độ phát:</span>
                {[0.8, 1.0, 1.2].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setListenSpeechRate(r)}
                    className={cx(
                      'px-2 py-0.5 rounded-md font-bold transition cursor-pointer',
                      listenSpeechRate === r ? 'bg-accent text-white' : 'bg-muted text-sub',
                    )}
                  >
                    {r}x
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { lv: 1 as const, title: '① Từ & cụm từ', hint: 'Bắt tai từng từ mới' },
                { lv: 2 as const, title: '② Câu hoàn chỉnh', hint: 'Bắt câu ngữ pháp' },
                { lv: 3 as const, title: '③ Tình huống Q&A', hint: 'Hỏi đáp thực tế' },
              ].map((item) => (
                <button
                  key={item.lv}
                  type="button"
                  onClick={() => {
                    setListenLevel(item.lv)
                    setListenIndex(0)
                    setListenRevealed(false)
                  }}
                  className={cx(
                    'p-3 rounded-xl border text-center transition cursor-pointer flex flex-col justify-center',
                    listenLevel === item.lv
                      ? 'border-accent bg-accent text-white shadow-xs'
                      : 'border-line bg-surface text-sub hover:border-accent/40 hover:text-ink',
                  )}
                >
                  <span className="text-sm font-black">{item.title}</span>
                  <span className="text-[11px] opacity-80 mt-0.5">{item.hint}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Level 1: Luyện nghe Từ & Cụm từ */}
          {listenLevel === 1 && (
            <Card className="p-8 text-center space-y-6 border-2 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-sub">
                <span>
                  Từ {listenIndex + 1} / {moduleData.vocab.length}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-muted">
                  {moduleData.vocab[listenIndex]?.category}
                </span>
              </div>

              {/* Big Play Button */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => playCurrentListenItem(moduleData.vocab[listenIndex]?.jp || '')}
                  className="h-24 w-24 rounded-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-105 active:scale-95 transition cursor-pointer"
                  title="Bấm để nghe âm thanh"
                >
                  <Play size={36} className="fill-white ml-1" />
                </button>
                <p className="text-xs text-sub font-semibold mt-3">Bấm vào loa để nghe từ</p>
              </div>

              {/* Reveal text / furigana */}
              {listenRevealed ? (
                <div className="space-y-2 pt-2 border-t border-line/60 animate-in fade-in">
                  <p className="text-3xl font-black text-ink">
                    <Jp text={moduleData.vocab[listenIndex]?.jp || ''} />
                  </p>
                  <p className="text-sm font-mono text-sub">{moduleData.vocab[listenIndex]?.romaji}</p>
                  <p className="text-lg font-bold text-accent">{moduleData.vocab[listenIndex]?.vn}</p>
                </div>
              ) : (
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => setListenRevealed(true)}
                    className="border border-line font-bold"
                  >
                    Bật phụ đề kiểm tra
                  </Button>
                </div>
              )}

              {/* Rate buttons (Nghe ra rồi vs Chưa nghe ra) */}
              <div className="pt-4 border-t border-line/60 flex items-center justify-center gap-3">
                <Button
                  variant="bad"
                  size="md"
                  onClick={() => {
                    const id = moduleData.vocab[listenIndex]?.id
                    if (id) setListenMarks({ ...listenMarks, [id]: 'bad' })
                    if (listenIndex < moduleData.vocab.length - 1) {
                      setListenIndex((prev) => prev + 1)
                      setListenRevealed(false)
                    }
                  }}
                  className="font-bold px-5"
                >
                  <X size={16} /> Chưa nghe ra
                </Button>
                <Button
                  variant="ok"
                  size="md"
                  onClick={() => {
                    const id = moduleData.vocab[listenIndex]?.id
                    if (id) setListenMarks({ ...listenMarks, [id]: 'ok' })
                    if (listenIndex < moduleData.vocab.length - 1) {
                      setListenIndex((prev) => prev + 1)
                      setListenRevealed(false)
                    }
                  }}
                  className="font-bold px-5"
                >
                  <Check size={16} /> Nghe ra rồi
                </Button>
              </div>
            </Card>
          )}

          {/* Level 2: Luyện nghe Câu hoàn chỉnh */}
          {listenLevel === 2 && (
            <Card className="p-8 text-center space-y-6 border-2 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-sub">
                <span>
                  Câu {listenIndex + 1} / {sentenceList.length}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-muted">Mẫu ngữ pháp đời thường</span>
              </div>

              {/* Big Play Button */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => playCurrentListenItem(sentenceList[listenIndex]?.jp || '')}
                  className="h-24 w-24 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-105 active:scale-95 transition cursor-pointer"
                  title="Bấm để nghe câu"
                >
                  <Play size={36} className="fill-white ml-1" />
                </button>
                <p className="text-xs text-sub font-semibold mt-3">Nghe cả câu và đoán ý nghĩa</p>
              </div>

              {/* Reveal text / furigana */}
              {listenRevealed ? (
                <div className="space-y-2 pt-2 border-t border-line/60 animate-in fade-in">
                  <p className="text-2xl sm:text-3xl font-black text-ink leading-relaxed">
                    <Jp text={sentenceList[listenIndex]?.jp || ''} />
                  </p>
                  <p className="text-base sm:text-lg font-bold text-accent">{sentenceList[listenIndex]?.vn}</p>
                </div>
              ) : (
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => setListenRevealed(true)}
                    className="border border-line font-bold"
                  >
                    Bật phụ đề kiểm tra
                  </Button>
                </div>
              )}

              {/* Rate buttons */}
              <div className="pt-4 border-t border-line/60 flex items-center justify-center gap-3">
                <Button
                  variant="bad"
                  size="md"
                  onClick={() => {
                    if (listenIndex < sentenceList.length - 1) {
                      setListenIndex((prev) => prev + 1)
                      setListenRevealed(false)
                    }
                  }}
                  className="font-bold px-5"
                >
                  <X size={16} /> Chưa nghe ra
                </Button>
                <Button
                  variant="ok"
                  size="md"
                  onClick={() => {
                    if (listenIndex < sentenceList.length - 1) {
                      setListenIndex((prev) => prev + 1)
                      setListenRevealed(false)
                    }
                  }}
                  className="font-bold px-5"
                >
                  <Check size={16} /> Nghe ra rồi
                </Button>
              </div>
            </Card>
          )}

          {/* Level 3: Tình huống & Hỏi đáp thực tế (Q&A) */}
          {listenLevel === 3 && (
            <div className="space-y-6">
              {moduleData.listening.map((l, qIdx) => {
                const isRevealed = listeningRevealedQA[l.id]
                const selectedOpt = listeningAnswers[l.id]

                return (
                  <Card key={l.id} className="p-6 sm:p-7 space-y-5 border-2 hover:border-emerald-500/40 transition">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase">
                        🎧 Đoạn thoại {qIdx + 1}: {l.context}
                      </span>
                      <span className="text-xs text-sub font-semibold">Tình huống thực tế ngoài đời</span>
                    </div>

                    <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/10 p-5 flex flex-wrap items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                          Đoạn Audio Bản Xứ
                        </span>
                        <p className="text-base sm:text-lg font-bold text-ink">
                          Nghe đoạn đối đáp và chọn câu trả lời đúng
                        </p>
                      </div>
                      <Button
                        variant="cta"
                        size="md"
                        onClick={() => playCurrentListenItem(l.audioText)}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-md"
                      >
                        <Volume2 size={18} /> Nghe Audio 🔊
                      </Button>
                    </div>

                    <div className="space-y-1">
                      <p className="text-base sm:text-lg font-extrabold text-ink">
                        <Jp text={l.questionJp} />
                      </p>
                      <p className="text-sm text-sub">{l.questionVn}</p>
                    </div>

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
                              setListeningRevealedQA({ ...listeningRevealedQA, [l.id]: true })
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

                    {isRevealed && (
                      <div className="rounded-2xl border border-line bg-muted/40 p-4 space-y-1 text-sm">
                        <span className="font-extrabold text-accent block">💡 Phân tích đáp án & Văn hóa:</span>
                        <p className="text-sub leading-relaxed">{l.explanation}</p>
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>
          )}

          <div className="pt-4 text-center">
            <Link to={`/module/${moduleData.id}/dialogue`}>
              <Button variant="primary" size="lg" className="shadow-md">
                Lên nấc thang 5: Luyện Hội thoại Kaiwa 4 Bước →
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* NẤC THANG 5: HỘI THOẠI THỰC CHIẾN (KAIWA IMMERSION 4 BƯỚC CHUẨN) */}
      {activeTab === 'dialogue' && (
        <section className="space-y-6 max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-surface to-teal-500/10 p-6 sm:p-7 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider">
                  💬 KAIWA 4 BƯỚC: NGHE → SHADOWING → ĐÓNG VAI GỢI Ý → ĐÓNG VAI CHE CHỮ
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
                <Headphones size={18} /> Nghe thụ động Spotify
              </Button>
            </div>
          </div>

          {/* Genuine 4-Step Kaiwa Mechanism Component */}
          <Card className="p-6 sm:p-7 shadow-sm">
            <DialoguePractice key={dialogueForPractice.id} d={dialogueForPractice} />
          </Card>

          <div className="pt-4 text-center">
            <Link to={`/module/${moduleData.id}/quiz`}>
              <Button variant="primary" size="lg" className="shadow-md">
                Lên nấc thang 6: Ôn tập & Speed Quiz kiểm tra →
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* NẤC THANG 6: ÔN TẬP & SPEED QUIZ (REVIEW & SPEED DRILL) */}
      {activeTab === 'quiz' && (
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-surface p-5 rounded-2xl border border-line flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-black text-ink">⚡ Speed Drill: Kiểm tra phản xạ tức thì</h3>
              <p className="text-xs sm:text-sm text-sub">
                Bao phủ trọn vẹn ngữ pháp, từ vựng và Kanji của Module này.
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

          {/* Module Complete Action */}
          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line">
            <Link to="/units">
              <Button variant="ghost">← Xem tất cả 14 Module</Button>
            </Link>

            {nextModule && (
              <Link to={`/module/${nextModule.id}/vocab`}>
                <Button variant="primary" size="lg" className="shadow-md">
                  Chuyển sang Module {nextModule.num < 10 ? `0${nextModule.num}` : nextModule.num} →
                </Button>
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  )
}
