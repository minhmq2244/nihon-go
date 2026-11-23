import { useMemo, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import {
  Check,
  CheckCircle2,
  Headphones,
  Lightbulb,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react'
import { Jp } from '../components/Jp'
import { Button, Card, Chip, Empty, SpeakButton, cx } from '../components/ui'
import { getModuleById, REAL_LIFE_MODULES } from '../lib/modulesData'
import { usePassivePlayer } from '../store/passivePlayer'
import { getPlaylistById } from '../lib/passiveListeningData'
import { DialoguePractice } from '../components/DialoguePractice'
import { speak, stopSpeaking } from '../lib/speech'
import type { Dialogue } from '../types'
import { LongDialogueViewer } from '../components/LongDialogueViewer'

export interface ModuleSection {
  id: string
  label: string
  hint: string
  tabs: readonly string[]
  extra?: boolean
}

// The 6 standard sections:
// 1. Hội thoại (Kịch bản thực chiến & Khẩu ngữ đời thường)
// 2. Học (Lý thuyết, Thẻ từ vựng, Kanji)
// 3. Luyện nghe (3 nấc thang: Từ & cụm -> Câu -> Hội thoại)
// 4. Luyện nói (Phản xạ câu)
// 5. Đọc hiểu (Bài đọc ngữ cảnh)
// 6. Bài tập thêm (Kiểm tra & Speed Quiz)
export const MODULE_SECTIONS: readonly ModuleSection[] = [
  { id: 'hoi-thoai', label: 'Hội thoại', hint: 'Kịch bản thực chiến & Khẩu ngữ', tabs: ['hoi-thoai', 'dialogue', 'kaiwa'] },
  { id: 'hoc', label: 'Học', hint: 'Lý thuyết và từ vựng', tabs: ['ly-thuyet', 'the', 'vocab', 'kanji', 'grammar'] },
  { id: 'luyen-nghe', label: 'Luyện nghe', hint: '3 nấc: từ, câu, hội thoại', tabs: ['luyen-nghe', 'listening'] },
  { id: 'luyen-noi', label: 'Luyện nói', hint: 'Phản xạ nói câu', tabs: ['luyen-noi', 'speaking'] },
  { id: 'doc', label: 'Đọc hiểu', hint: 'Bài đọc và hỏi đáp', tabs: ['doc'] },
  { id: 'them', label: 'Bài tập thêm', hint: 'Ôn tập & Speed Quiz', tabs: ['kiem-tra', 'quiz'], extra: true },
]

export function ModuleDetailPage() {
  const { id = 'mod-01', tab = 'hoi-thoai' } = useParams()
  const moduleData = getModuleById(id)
  const playPlaylist = usePassivePlayer((s) => s.playPlaylist)
  const [dialogueViewMode, setDialogueViewMode] = useState<'stream' | 'practice'>('stream')

  // Map any tab to section
  const currentSection = useMemo(() => {
    const sec = MODULE_SECTIONS.find((s) => (s.tabs as readonly string[]).includes(tab))
    return sec ?? MODULE_SECTIONS[0]
  }, [tab])

  // Sub-tab under "Học": 'ly-thuyet' or 'the' (flashcard)
  const currentSubTab = tab === 'the' ? 'the' : 'ly-thuyet'

  // Theory Tab States (like TheoryTab.tsx)
  const [hideMean, setHideMean] = useState<boolean>(false)
  const [hideWord, setHideWord] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Flashcard Tab States
  const [fcIndex, setFcIndex] = useState<number>(0)
  const [fcFlipped, setFcFlipped] = useState<boolean>(false)

  // Luyện Nghe States (3 nấc thang: Từ & cụm -> Câu -> Hội thoại)
  const [listenLevel, setListenLevel] = useState<1 | 2 | 3>(1)
  const [listenIndex, setListenIndex] = useState<number>(0)
  const [listenRevealed, setListenRevealed] = useState<boolean>(false)
  const [listenSpeechRate, setListenSpeechRate] = useState<number>(1.0)
  const [listenMarks, setListenMarks] = useState<Record<string, 'ok' | 'bad'>>({})

  // Luyện Nghe Level 3 Q&A States
  const [listeningAnswers, setListeningAnswers] = useState<Record<string, number>>({})
  const [listeningRevealedQA, setListeningRevealedQA] = useState<Record<string, boolean>>({})

  // Luyện Nói (Speed Speaking) States
  const [speakIndex, setSpeakIndex] = useState<number>(0)
  const [speakRevealed, setSpeakRevealed] = useState<boolean>(false)

  // Quiz States
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({})

  // Current module index in list
  const currentIdx = moduleData ? REAL_LIFE_MODULES.findIndex((m) => m.id === moduleData.id) : -1
  const prevModule = currentIdx > 0 ? REAL_LIFE_MODULES[currentIdx - 1] : null
  const nextModule = currentIdx < REAL_LIFE_MODULES.length - 1 ? REAL_LIFE_MODULES[currentIdx + 1] : null

  // Sentences extracted from grammar examples for Level 2 listening
  const sentenceList = useMemo(() => {
    if (!moduleData) return []
    return moduleData.grammar.flatMap((g) => g.examples)
  }, [moduleData])

  // Dialogue lines for Level 3 listening
  const dialogueLines = useMemo(() => {
    if (!moduleData) return []
    return moduleData.dialogue.lines
  }, [moduleData])

  // Format module dialogue for DialoguePractice component
  const dialogueForPractice: Dialogue | null = useMemo(() => {
    if (!moduleData) return null
    return {
      id: `${moduleData.id}-dialogue`,
      title: moduleData.dialogue.title,
      scene: moduleData.dialogue.scene,
      roles: moduleData.dialogue.roles,
      lines: moduleData.dialogue.lines,
    }
  }, [moduleData])

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

  // Launch passive listening for this module
  const handleOpenPassivePlayer = () => {
    const pl = getPlaylistById('mega-b01-b11')
    if (pl) {
      playPlaylist(pl, currentIdx)
    }
  }

  // Handler for play audio
  const playCurrentListenItem = (text: string) => {
    stopSpeaking()
    void speak(text, { rate: listenSpeechRate })
  }

  // Smooth scroll handler for sidebar links
  const scrollTo = (e: React.MouseEvent, secId: string) => {
    e.preventDefault()
    document.getElementById(`sec-${secId}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="space-y-6 pb-20">
      {/* 1. Top Header: Breadcrumb & Title Bar (Identical to UnitPage.tsx) */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Link
            to="/units"
            className="inline-flex items-center gap-1 text-base font-semibold text-sub hover:text-accent transition"
          >
            ← Tất cả bài học
          </Link>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight text-ink">
            <span className="mr-3 rounded-xl bg-accent-soft px-3 py-1 text-base sm:text-lg font-bold text-accent align-middle">
              MODULE {moduleData.num} · N5
            </span>
            <Jp text={moduleData.titleJp} />
          </h1>
          <p className="mt-1.5 text-base sm:text-lg text-sub font-medium">{moduleData.titleVn} — {moduleData.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-base font-semibold">
          <button
            type="button"
            onClick={handleOpenPassivePlayer}
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1.5 text-sm font-bold hover:bg-emerald-500/20 active:scale-95 transition cursor-pointer"
            title="Bật nghe thụ động Spotify cho bài này"
          >
            <Headphones size={16} /> Nghe thụ động Spotify
          </button>
          {prevModule && (
            <Link
              className="rounded-lg bg-surface border border-line px-3 py-1.5 text-sub hover:border-accent hover:text-accent transition text-sm"
              to={`/module/${prevModule.id}/${tab}`}
            >
              ← M0{prevModule.num}
            </Link>
          )}
          {nextModule && (
            <Link
              className="rounded-lg bg-surface border border-line px-3 py-1.5 text-sub hover:border-accent hover:text-accent transition text-sm"
              to={`/module/${nextModule.id}/${tab}`}
            >
              M0{nextModule.num} →
            </Link>
          )}
        </div>
      </div>

      {/* 2. Phase 1 Roadmap Header (Matching User's Screenshot Exactly) */}
      <div className="rounded-2xl border border-line bg-surface/80 p-4 shadow-xs">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-bold text-sub">
            Chặng 1: Nền tảng thực tế (M01 – M04) • Chặng 2: Bứt phá N4+ (M05 – M14)
          </p>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            Trọng tâm phản xạ sinh tồn Tokyo
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {REAL_LIFE_MODULES.map((m) => {
            const isCurrent = m.id === moduleData.id
            return (
              <Link
                key={m.id}
                to={`/module/${m.id}/${tab}`}
                className={cx(
                  'flex flex-col items-center justify-center p-3 rounded-2xl border-2 text-center transition-all cursor-pointer shadow-xs',
                  isCurrent
                    ? 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 ring-2 ring-emerald-500/30 font-black'
                    : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:border-emerald-500 hover:bg-emerald-500/20',
                )}
              >
                <span className="text-[11px] font-black tracking-wider uppercase">
                  M0{m.num} · N5
                </span>
                <span className="text-xs sm:text-sm font-extrabold mt-0.5 line-clamp-1">
                  {m.num === 1 && 'Học đường & Bạn bè'}
                  {m.num === 2 && 'Konbini & Mua sắm'}
                  {m.num === 3 && 'Tàu điện & Hẹn hò'}
                  {m.num === 4 && 'Nhà trọ & Tự lập'}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* 3. Sticky 6-Section Navigation Bar (Exact same layout as user's screenshot) */}
      <nav className="no-print sticky top-16 z-20 -mx-4 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur-md shadow-xs">
        <div className="grid grid-cols-6 gap-1 sm:gap-2">
          {MODULE_SECTIONS.map((sec, i) => {
            const active = sec.id === currentSection.id
            const targetTab = sec.tabs[0]
            return (
              <Link
                key={sec.id}
                to={`/module/${moduleData.id}/${targetTab}`}
                title={sec.hint}
                className={cx(
                  'flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-2 text-center transition lg:flex-row lg:justify-center lg:gap-2 lg:px-2',
                  active
                    ? 'bg-accent text-white shadow-sm'
                    : sec.extra
                      ? 'border border-dashed border-line text-sub hover:border-accent/50 hover:text-ink'
                      : 'bg-surface text-ink ring-1 ring-line hover:ring-accent/40',
                )}
              >
                <span
                  className={cx(
                    'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                    active ? 'bg-white/25 text-white' : 'bg-muted text-sub',
                  )}
                >
                  {sec.extra ? '+' : i + 1}
                </span>
                <span className={cx('text-xs leading-tight sm:text-sm', active ? 'font-bold' : 'font-semibold')}>
                  {sec.label}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Sub-tabs under "1. Học" (Lý thuyết ● and Thẻ từ vựng) */}
        {currentSection.id === 'hoc' && (
          <div className="mt-2.5 flex gap-1 overflow-x-auto [scrollbar-width:none]">
            <NavLink
              to={`/module/${moduleData.id}/ly-thuyet`}
              className={cx(
                'shrink-0 rounded-lg px-3 py-1.5 text-[15px] transition font-semibold cursor-pointer flex items-center gap-1.5',
                currentSubTab === 'ly-thuyet'
                  ? 'bg-accent-soft font-bold text-accent'
                  : 'text-sub hover:bg-muted hover:text-ink',
              )}
            >
              <span>Lý thuyết</span>
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            </NavLink>
            <NavLink
              to={`/module/${moduleData.id}/the`}
              className={cx(
                'shrink-0 rounded-lg px-3 py-1.5 text-[15px] transition font-semibold cursor-pointer',
                currentSubTab === 'the'
                  ? 'bg-accent-soft font-bold text-accent'
                  : 'text-sub hover:bg-muted hover:text-ink',
              )}
            >
              Thẻ từ vựng
            </NavLink>
          </div>
        )}
      </nav>

      {/* ======================================================================= */}
      {/* 4. TAB 1: HỌC - SUB-TAB: LÝ THUYẾT (Exact same 2-column format as TheoryTab) */}
      {/* ======================================================================= */}
      {currentSection.id === 'hoc' && currentSubTab === 'ly-thuyet' && (
        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          {/* Left Column: Aside Sidebar Outline Navigation (Exact match to screenshot) */}
          <aside className="no-print hidden lg:block">
            <div className="sticky top-32 space-y-1.5 text-base">
              <a
                href="#sec-overview"
                onClick={(e) => scrollTo(e, 'overview')}
                className="block rounded-lg px-3 py-1.5 text-sub hover:bg-muted hover:text-ink font-medium transition"
              >
                1. Mục tiêu
              </a>
              <div className="space-y-1">
                <a
                  href="#sec-vocab"
                  onClick={(e) => scrollTo(e, 'vocab')}
                  className="block rounded-lg px-3 py-1.5 text-sub hover:bg-muted hover:text-ink font-medium transition"
                >
                  2. Từ vựng theo tình huống ({moduleData.vocab.length} từ – M0{moduleData.num})
                </a>
              </div>
              <div className="space-y-1">
                <a
                  href="#sec-kanji"
                  onClick={(e) => scrollTo(e, 'kanji')}
                  className="block rounded-lg px-3 py-1.5 text-sub hover:bg-muted hover:text-ink font-medium transition"
                >
                  3. Kanji ({moduleData.kanji.length} chữ: Chuẩn N5/N4)
                </a>
                <a
                  href="#sec-kanji-readings"
                  onClick={(e) => scrollTo(e, 'kanji')}
                  className="ml-3 flex items-center gap-1.5 rounded-lg bg-accent-soft/60 px-2.5 py-1 text-xs font-bold text-accent hover:bg-accent hover:text-white transition"
                >
                  <span>📖 Từ ghép & Luyện đọc</span>
                </a>
              </div>
              <a
                href="#sec-grammar"
                onClick={(e) => scrollTo(e, 'grammar')}
                className="block rounded-lg px-3 py-1.5 text-sub hover:bg-muted hover:text-ink font-medium transition"
              >
                4. Ngữ pháp ({moduleData.grammar.length} cấu trúc trọng tâm)
              </a>
              <a
                href="#sec-phrases"
                onClick={(e) => scrollTo(e, 'phrases')}
                className="block rounded-lg px-3 py-1.5 text-sub hover:bg-muted hover:text-ink font-medium transition"
              >
                5. Mẫu câu theo vai (Tình huống thực tế)
              </a>
            </div>
          </aside>

          {/* Right Column: Main Content Cards (Exact match to screenshot) */}
          <div className="min-w-0 space-y-6">
            {/* Card 1: Overview Scope Card (Format giống hệt screenshot) */}
            <Card className="p-6">
              <div className="text-base text-sub leading-relaxed space-y-2">
                <p>
                  <strong className="text-ink">Phạm vi: </strong>
                  Tổng ôn {moduleData.titleVn} · {moduleData.grammar.map((g) => g.title).join(' · ')} · {moduleData.vocab.length} từ mới · {moduleData.kanji.length} kanji mới
                </p>
                <p className="text-sm">
                  <strong className="text-ink">Ghi chú: </strong>
                  Toàn bộ chữ Hán đều được chuẩn hóa nằm trong phạm vi N5/N4. Các từ vựng ngoài N4 đều được ghi bằng chữ Hiragana/Katakana chuẩn bản xứ để không gây gánh nặng học tập.
                </p>
              </div>
              <p className="mt-3 text-sm font-medium text-sub">
                💡 Mẹo: bấm vào từ tiếng Nhật trong bảng từ vựng để nghe phát âm.
              </p>
            </Card>

            {/* Card 2: Special Focus Banner (Like Verbs banner in screenshot) */}
            <Card className="border-2 border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 to-surface p-5 flex flex-wrap items-center justify-between gap-4 shadow-xs">
              <div>
                <span className="inline-block rounded-full bg-emerald-600 text-white text-xs font-bold px-2.5 py-0.5 mb-1.5">
                  Thực hành nấc thang
                </span>
                <h3 className="text-lg font-extrabold text-ink">
                  Luyện Nghe 3 Nấc Thang & Hội Thoại Kaiwa 4 Bước
                </h3>
                <p className="text-sm text-sub mt-0.5">
                  Học xong lý thuyết hãy lên nấc thang luyện nghe bắt tai và nhập vai phản xạ tự nhiên.
                </p>
              </div>
              <Link
                to={`/module/${moduleData.id}/luyen-nghe`}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-xs hover:bg-emerald-500 transition cursor-pointer"
              >
                Vào luyện nghe ngay →
              </Link>
            </Card>

            {/* 1. MỤC TIÊU */}
            <div id="sec-overview" className="scroll-mt-32">
              <Card className="p-6 sm:p-7 space-y-3">
                <h2 className="text-2xl font-bold text-ink">1. Mục tiêu</h2>
                <div className="space-y-2 text-base text-sub leading-relaxed">
                  <p>• Làm chủ toàn diện ngữ cảnh giao tiếp: <strong className="text-ink">{moduleData.subtitle}</strong>.</p>
                  <p>• Nắm chắc {moduleData.vocab.length} từ vựng then chốt và {moduleData.kanji.length} chữ Hán N5/N4 thông dụng.</p>
                  <p>• Vận dụng linh hoạt {moduleData.grammar.length} cấu trúc ngữ pháp vào đối đáp đời thường không cần dịch nhẩm.</p>
                </div>
              </Card>
            </div>

            {/* 2. TỪ VỰNG THEO TÌNH HUỐNG */}
            <div id="sec-vocab" className="scroll-mt-32">
              <Card className="p-6 sm:p-7 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
                  <div>
                    <h2 className="text-2xl font-bold text-ink">
                      2. Từ vựng theo tình huống ({moduleData.vocab.length} từ – M0{moduleData.num})
                    </h2>
                    <p className="text-sm text-sub">Bấm vào từ tiếng Nhật để nghe giọng đọc bản xứ.</p>
                  </div>
                  <div className="no-print flex gap-2">
                    <Chip active={hideMean} onClick={() => setHideMean(!hideMean)}>
                      Che nghĩa
                    </Chip>
                    <Chip active={hideWord} onClick={() => setHideWord(!hideWord)}>
                      Che từ
                    </Chip>
                  </div>
                </div>

                {/* Categories filter */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-sub mr-1">Chủ đề:</span>
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setSelectedCategory(c)}
                      className={cx(
                        'px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer',
                        selectedCategory === c
                          ? 'bg-accent text-white shadow-xs'
                          : 'bg-muted text-sub hover:text-ink',
                      )}
                    >
                      {c === 'all' ? 'Tất cả' : c}
                    </button>
                  ))}
                </div>

                {(hideMean || hideWord) && (
                  <p className="text-sm text-accent font-semibold">💡 Bấm vào ô bị che để xem đáp án.</p>
                )}

                {/* Vocab List Table Layout */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {filteredVocab.map((v) => {
                    const [wordRevealed, setWordRevealed] = useState(false)
                    const [meanRevealed, setMeanRevealed] = useState(false)

                    const isWordHidden = hideWord && !wordRevealed
                    const isMeanHidden = hideMean && !meanRevealed

                    return (
                      <div
                        key={v.id}
                        className="rounded-xl border border-line bg-surface p-4 flex flex-col justify-between space-y-2 hover:border-accent/40 transition"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-sub">
                            {v.category}
                          </span>
                          <SpeakButton text={v.jp} />
                        </div>

                        <div className="space-y-1">
                          {isWordHidden ? (
                            <div
                              onClick={() => setWordRevealed(true)}
                              className="py-2 bg-muted/60 rounded-lg text-center text-xs font-bold text-sub cursor-pointer hover:bg-muted"
                            >
                              [Bấm để xem từ]
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => void speak(v.jp)}
                              className="text-left group cursor-pointer"
                            >
                              <p className="text-xl sm:text-2xl font-black text-ink group-hover:text-accent transition">
                                <Jp text={v.jp} />
                              </p>
                              <p className="text-xs font-mono text-sub">{v.romaji}</p>
                            </button>
                          )}

                          {isMeanHidden ? (
                            <div
                              onClick={() => setMeanRevealed(true)}
                              className="py-1.5 bg-muted/60 rounded-lg text-center text-xs font-semibold text-sub cursor-pointer hover:bg-muted"
                            >
                              [Bấm để xem nghĩa]
                            </div>
                          ) : (
                            <p className="text-base font-bold text-ink/90 pt-1 border-t border-line/40">
                              {v.vn}
                            </p>
                          )}
                        </div>

                        {v.example && (
                          <div className="pt-2 border-t border-line/40 text-xs text-sub space-y-1 bg-muted/20 p-2 rounded-lg">
                            <div className="flex items-start justify-between gap-1">
                              <span className="font-bold text-accent">
                                <Jp text={v.example.jp} />
                              </span>
                              <SpeakButton text={v.example.jp} className="h-5 w-5" />
                            </div>
                            <p className="text-sub/90">{v.example.vn}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </Card>
            </div>

            {/* 3. KANJI THỰC CHIẾN (CHUẨN N5/N4) */}
            <div id="sec-kanji" className="scroll-mt-32">
              <Card className="p-6 sm:p-7 space-y-5">
                <div className="border-b border-line pb-3">
                  <h2 className="text-2xl font-bold text-ink">
                    3. Kanji ({moduleData.kanji.length} chữ: Chuẩn N5/N4)
                  </h2>
                  <p className="text-sm text-sub">Chữ Hán đơn kèm các từ ghép thực tế đời thường.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {moduleData.kanji.map((k) => (
                    <div
                      key={k.char}
                      className="rounded-2xl border border-line bg-surface p-4 space-y-3 hover:border-amber-500/40 transition"
                    >
                      <div className="flex items-start justify-between gap-2 border-b border-line pb-2.5">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => void speak(k.char)}
                            className="h-14 w-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl font-black text-amber-600 dark:text-amber-400 hover:scale-105 active:scale-95 transition cursor-pointer"
                          >
                            {k.char}
                          </button>
                          <div>
                            <p className="text-lg font-black text-ink">{k.hanviet}</p>
                            <p className="text-xs text-sub">{k.strokes} nét · {k.meaning}</p>
                          </div>
                        </div>
                        <SpeakButton text={k.char} />
                      </div>

                      <div className="rounded-lg bg-muted/60 p-2 text-xs">
                        <p className="font-mono text-sub">
                          <span className="font-bold text-ink">Âm: </span>{k.onkun}
                        </p>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <span className="font-bold text-sub uppercase tracking-wider block text-[10px]">
                          Từ ghép thực tế:
                        </span>
                        {k.compounds.map((comp, compIdx) => (
                          <div
                            key={compIdx}
                            className="flex items-center justify-between p-1.5 rounded-lg bg-muted/30 border border-line/60"
                          >
                            <div>
                              <span className="font-bold text-ink mr-1.5">
                                <Jp text={comp.jp} />
                              </span>
                              <span className="text-sub">({comp.vn})</span>
                            </div>
                            <SpeakButton text={comp.jp} className="h-5 w-5" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* 4. NGỮ PHÁP TRỌNG TÂM */}
            <div id="sec-grammar" className="scroll-mt-32">
              <Card className="p-6 sm:p-7 space-y-6">
                <div className="border-b border-line pb-3">
                  <h2 className="text-2xl font-bold text-ink">
                    4. Ngữ pháp ({moduleData.grammar.length} cấu trúc trọng tâm)
                  </h2>
                  <p className="text-sm text-sub">Công thức ghép từ, ý nghĩa, giải thích cách dùng và câu ví dụ âm thanh.</p>
                </div>

                <div className="space-y-6">
                  {moduleData.grammar.map((g, idx) => (
                    <div
                      key={g.id}
                      className="rounded-2xl border border-line bg-surface p-5 space-y-3.5 hover:border-accent/40 transition"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="h-7 w-7 rounded-lg bg-accent text-white font-black text-xs flex items-center justify-center">
                            #{idx + 1}
                          </span>
                          <h3 className="text-xl font-black text-ink">{g.title}</h3>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-accent-soft text-accent text-xs font-extrabold uppercase">
                          Trọng tâm
                        </span>
                      </div>

                      <div className="rounded-xl bg-muted/60 p-3 border border-line">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sub block mb-0.5">
                          📐 Công thức:
                        </span>
                        <p className="text-base font-mono font-bold text-ink">{g.formula}</p>
                      </div>

                      <div className="space-y-1.5 text-base">
                        <p className="font-bold text-ink">
                          <span className="text-sub">Ý nghĩa: </span> {g.meaning}
                        </p>
                        <p className="text-sm text-sub leading-relaxed">{g.usageNote}</p>
                      </div>

                      <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-600 dark:text-amber-400">
                          <Lightbulb size={15} /> Bật mí văn nói đời thường ngoài đời:
                        </div>
                        <p className="text-sm font-medium text-ink leading-relaxed">
                          {g.spokenTip}
                        </p>
                      </div>

                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sub block">
                          Ví dụ hội thoại thực tế:
                        </span>
                        <div className="grid gap-2">
                          {g.examples.map((ex, exIdx) => (
                            <div
                              key={exIdx}
                              className="rounded-xl bg-muted/30 border border-line p-3 flex items-start justify-between gap-3"
                            >
                              <div className="space-y-0.5">
                                <p className="text-base font-bold text-ink">
                                  <Jp text={ex.jp} />
                                </p>
                                <p className="text-xs text-sub">{ex.vn}</p>
                              </div>
                              <SpeakButton text={ex.jp} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* 5. MẪU CÂU THEO VAI */}
            <div id="sec-phrases" className="scroll-mt-32">
              <Card className="p-6 sm:p-7 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
                  <div>
                    <h2 className="text-2xl font-bold text-ink">5. Mẫu câu theo vai (Tình huống thực tế)</h2>
                    <p className="text-sm text-sub">{moduleData.dialogue.title} · {moduleData.dialogue.scene}</p>
                  </div>
                  <Link
                    to={`/module/${moduleData.id}/hoi-thoai`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-1.5 text-xs font-bold text-white hover:brightness-110 transition cursor-pointer"
                  >
                    Vào luyện Kaiwa 4 bước →
                  </Link>
                </div>

                <div className="space-y-2.5">
                  {moduleData.dialogue.lines.map((l, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-3.5 rounded-xl border border-line bg-surface flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                          {l.name ?? l.speaker}:
                        </span>
                        <p className="text-lg font-bold text-ink leading-relaxed">
                          <Jp text={l.jp} />
                        </p>
                        <p className="text-sm text-sub">{l.vn}</p>
                      </div>
                      <SpeakButton text={l.jp} />
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Bottom Next Step Link */}
            <div className="pt-6 border-t border-line text-center">
              <Link to={`/module/${moduleData.id}/luyen-nghe`}>
                <Button variant="primary" size="lg" className="shadow-md">
                  Chuyển sang 2. Luyện nghe (3 Nấc thang) 🎧 →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================= */}
      {/* 4. TAB 1: HỌC - SUB-TAB: THẺ TỪ VỰNG (FLASHCARD) */}
      {/* ======================================================================= */}
      {currentSection.id === 'hoc' && currentSubTab === 'the' && (
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-sm font-bold text-sub">
            <span>
              Thẻ {fcIndex + 1} / {moduleData.vocab.length}
            </span>
            <span className="text-xs bg-muted px-2.5 py-1 rounded-full">
              {moduleData.vocab[fcIndex]?.category}
            </span>
          </div>

          <div
            onClick={() => setFcFlipped(!fcFlipped)}
            className="h-64 rounded-3xl border-2 border-accent/40 bg-gradient-to-br from-surface to-accent/5 p-8 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg hover:border-accent transition select-none"
          >
            {!fcFlipped ? (
              <div className="space-y-4">
                <p className="text-3xl sm:text-4xl font-black text-ink">
                  <Jp text={moduleData.vocab[fcIndex]?.jp || ''} />
                </p>
                <p className="text-sm font-mono text-sub">{moduleData.vocab[fcIndex]?.romaji}</p>
                <p className="text-xs font-semibold text-accent mt-4">👉 Chạm để lật xem nghĩa</p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-2xl sm:text-3xl font-extrabold text-ink">
                  {moduleData.vocab[fcIndex]?.vn}
                </p>
                {moduleData.vocab[fcIndex]?.example && (
                  <div className="mt-4 pt-4 border-t border-line/60 text-left">
                    <p className="text-sm font-bold text-accent">
                      <Jp text={moduleData.vocab[fcIndex].example!.jp} />
                    </p>
                    <p className="text-xs text-sub">{moduleData.vocab[fcIndex].example!.vn}</p>
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

            <SpeakButton text={moduleData.vocab[fcIndex]?.jp || ''} />

            <Button
              size="md"
              variant="primary"
              onClick={() => {
                if (fcIndex < moduleData.vocab.length - 1) {
                  setFcIndex((prev) => prev + 1)
                  setFcFlipped(false)
                } else {
                  setFcIndex(0)
                  setFcFlipped(false)
                }
              }}
            >
              {fcIndex < moduleData.vocab.length - 1 ? 'Thẻ tiếp theo →' : 'Luyện lại từ đầu 🔄'}
            </Button>
          </div>
        </div>
      )}

      {/* ======================================================================= */}
      {/* 5. TAB 2: LUYỆN NGHE (3 NẤC THANG CHUẨN CƠ CHẾ CŨ) */}
      {/* ======================================================================= */}
      {currentSection.id === 'luyen-nghe' && (
        <section className="space-y-6 max-w-3xl mx-auto">
          {/* Level Switcher */}
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
                { lv: 3 as const, title: '③ Hội thoại thực tế', hint: 'Luyện nghe toàn bài' },
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
                <p className="text-xs text-sub font-semibold mt-3">Từ này nghĩa là gì? Bấm vào loa để nghe</p>
              </div>

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
                    Xem từ & Bật phụ đề
                  </Button>
                </div>
              )}

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
                    } else {
                      setListenLevel(2)
                      setListenIndex(0)
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

              <div className="py-4">
                <button
                  type="button"
                  onClick={() => playCurrentListenItem(sentenceList[listenIndex]?.jp || '')}
                  className="h-24 w-24 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-105 active:scale-95 transition cursor-pointer"
                  title="Bấm để nghe câu"
                >
                  <Play size={36} className="fill-white ml-1" />
                </button>
                <p className="text-xs text-sub font-semibold mt-3">Bạn bắt được những từ nào? Nghe và đoán ý</p>
              </div>

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
                    } else {
                      setListenLevel(3)
                      setListenIndex(0)
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

          {/* Level 3: Luyện nghe Hội thoại & Hỏi đáp Q&A */}
          {listenLevel === 3 && (
            <div className="space-y-6">
              <Card className="p-8 text-center space-y-6 border-2 shadow-sm">
                <div className="flex items-center justify-between text-xs font-bold text-sub">
                  <span>
                    Lời thoại {listenIndex + 1} / {dialogueLines.length}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-muted">
                    {dialogueLines[listenIndex]?.name ?? dialogueLines[listenIndex]?.speaker}
                  </span>
                </div>

                <div className="py-4">
                  <button
                    type="button"
                    onClick={() => playCurrentListenItem(dialogueLines[listenIndex]?.jp || '')}
                    className="h-24 w-24 rounded-full bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-105 active:scale-95 transition cursor-pointer"
                    title="Bấm để nghe lượt thoại"
                  >
                    <Play size={36} className="fill-white ml-1" />
                  </button>
                  <p className="text-xs text-sub font-semibold mt-3">Nghe phản xạ câu hội thoại</p>
                </div>

                {listenRevealed ? (
                  <div className="space-y-2 pt-2 border-t border-line/60 animate-in fade-in">
                    <p className="text-2xl sm:text-3xl font-black text-ink leading-relaxed">
                      <Jp text={dialogueLines[listenIndex]?.jp || ''} />
                    </p>
                    <p className="text-base sm:text-lg font-bold text-accent">{dialogueLines[listenIndex]?.vn}</p>
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

                <div className="pt-4 border-t border-line/60 flex items-center justify-center gap-3">
                  <Button
                    variant="bad"
                    size="md"
                    onClick={() => {
                      if (listenIndex < dialogueLines.length - 1) {
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
                      if (listenIndex < dialogueLines.length - 1) {
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

              {/* Tình huống Q&A */}
              <div className="space-y-4 pt-4 border-t border-line">
                <h3 className="text-lg font-black text-ink flex items-center gap-2">
                  <Sparkles size={18} className="text-accent" />
                  Kiểm tra khả năng bắt ý (Hỏi - Đáp thực tế)
                </h3>
                {moduleData.listening.map((l, qIdx) => {
                  const isRevealed = listeningRevealedQA[l.id]
                  const selectedOpt = listeningAnswers[l.id]

                  return (
                    <Card key={l.id} className="p-6 sm:p-7 space-y-5 border-2 hover:border-emerald-500/40 transition">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase">
                          🎧 Đoạn thoại {qIdx + 1}: {l.context}
                        </span>
                        <Button
                          size="sm"
                          variant="cta"
                          onClick={() => playCurrentListenItem(l.audioText)}
                          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
                        >
                          <Volume2 size={16} /> Nghe Audio
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
                          <span className="font-extrabold text-accent block">💡 Phân tích đáp án:</span>
                          <p className="text-sub leading-relaxed">{l.explanation}</p>
                        </div>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          )}

          <div className="pt-4 text-center">
            <Link to={`/module/${moduleData.id}/hoi-thoai`}>
              <Button variant="primary" size="lg" className="shadow-md">
                Lên nấc thang 4: Hội thoại Kaiwa (4 Bước) 💬 →
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* ======================================================================= */}
      {/* 6. TAB 3: LUYỆN NÓI (SPEAK PRACTICE) */}
      {/* ======================================================================= */}
      {currentSection.id === 'luyen-noi' && (
        <section className="space-y-6 max-w-3xl mx-auto">
          <Card className="p-8 text-center space-y-6 border-2 shadow-sm">
            <div className="flex items-center justify-between text-xs font-bold text-sub">
              <span>
                Mẫu câu {speakIndex + 1} / {sentenceList.length}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-muted">Luyện phản xạ nói đa tốc độ</span>
            </div>

            <div className="py-4">
              <button
                type="button"
                onClick={() => playCurrentListenItem(sentenceList[speakIndex]?.jp || '')}
                className="h-24 w-24 rounded-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-105 active:scale-95 transition cursor-pointer"
                title="Bấm để nghe mẫu câu"
              >
                <Play size={36} className="fill-white ml-1" />
              </button>
              <p className="text-xs text-sub font-semibold mt-3">Nghe và nhại theo thật to chuẩn ngữ điệu</p>
            </div>

            {speakRevealed ? (
              <div className="space-y-2 pt-2 border-t border-line/60 animate-in fade-in">
                <p className="text-2xl sm:text-3xl font-black text-ink leading-relaxed">
                  <Jp text={sentenceList[speakIndex]?.jp || ''} />
                </p>
                <p className="text-base sm:text-lg font-bold text-accent">{sentenceList[speakIndex]?.vn}</p>
              </div>
            ) : (
              <div className="pt-2">
                <Button
                  variant="ghost"
                  size="md"
                  onClick={() => setSpeakRevealed(true)}
                  className="border border-line font-bold"
                >
                  Hiện mẫu câu để luyện nói
                </Button>
              </div>
            )}

            <div className="pt-4 border-t border-line/60 flex items-center justify-between gap-3">
              <Button
                variant="ghost"
                size="md"
                disabled={speakIndex === 0}
                onClick={() => {
                  setSpeakIndex((prev) => Math.max(0, prev - 1))
                  setSpeakRevealed(false)
                }}
              >
                ← Câu trước
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  if (speakIndex < sentenceList.length - 1) {
                    setSpeakIndex((prev) => prev + 1)
                    setSpeakRevealed(false)
                  } else {
                    setSpeakIndex(0)
                    setSpeakRevealed(false)
                  }
                }}
              >
                {speakIndex < sentenceList.length - 1 ? 'Câu tiếp theo →' : 'Luyện lại từ đầu 🔄'}
              </Button>
            </div>
          </Card>
        </section>
      )}

      {/* ======================================================================= */}
      {/* 7. TAB 1: HỘI THOẠI THỰC CHIẾN (LONG DIALOGUE & KAIWA) */}
      {/* ======================================================================= */}
      {currentSection.id === 'hoi-thoai' && (
        <section className="space-y-6 max-w-4xl mx-auto">
          {/* Sub-mode Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-surface border border-line shadow-xs">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-muted/80">
              <button
                type="button"
                onClick={() => setDialogueViewMode('stream')}
                className={cx(
                  'px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5',
                  dialogueViewMode === 'stream'
                    ? 'bg-accent text-white shadow-xs'
                    : 'text-sub hover:text-ink',
                )}
              >
                <span>💬 Kịch bản hội thoại dài (Toggles & Nuance)</span>
              </button>
              <button
                type="button"
                onClick={() => setDialogueViewMode('practice')}
                className={cx(
                  'px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5',
                  dialogueViewMode === 'practice'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-sub hover:text-ink',
                )}
              >
                <span>🎭 Luyện nhập vai 4 bước</span>
              </button>
            </div>

            <Button
              variant="cta"
              size="sm"
              onClick={handleOpenPassivePlayer}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-xs"
            >
              <Headphones size={15} /> Nghe thụ động Spotify
            </Button>
          </div>

          {dialogueViewMode === 'stream' ? (
            <LongDialogueViewer dialogue={moduleData.dialogue} />
          ) : (
            dialogueForPractice && (
              <Card className="p-6 sm:p-7 shadow-sm">
                <DialoguePractice key={dialogueForPractice.id} d={dialogueForPractice} />
              </Card>
            )
          )}

          <div className="pt-4 text-center">
            <Link to={`/module/${moduleData.id}/ly-thuyet`}>
              <Button variant="primary" size="lg" className="shadow-md">
                Chuyển sang Từ vựng & Ngữ pháp bài học 📚 →
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* ======================================================================= */}
      {/* 8. TAB 5: ĐỌC HIỂU (READING TAB) */}
      {/* ======================================================================= */}
      {currentSection.id === 'doc' && (
        <section className="space-y-6 max-w-3xl mx-auto">
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="border-b border-line pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-accent">
                📖 BÀI ĐỌC HIỂU NGỮ CẢNH THỰC TẾ
              </span>
              <h3 className="mt-1 text-2xl font-black text-ink">{moduleData.titleVn}</h3>
              <p className="text-sm text-sub mt-1">Đọc đoạn văn tổng hợp từ vựng và Kanji của bài học.</p>
            </div>

            <div className="rounded-2xl bg-muted/30 border border-line p-5 space-y-4 text-lg leading-loose text-ink">
              <p>
                <Jp text={moduleData.titleJp} />。
                {moduleData.dialogue.lines.map((l) => l.jp).join(' ')}
              </p>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <Link to={`/module/${moduleData.id}/hoi-thoai`}>
                <Button variant="ghost">← Luyện Hội thoại</Button>
              </Link>
              <Link to={`/module/${moduleData.id}/kiem-tra`}>
                <Button variant="primary">Làm kiểm tra cuối bài →</Button>
              </Link>
            </div>
          </Card>
        </section>
      )}

      {/* ======================================================================= */}
      {/* 9. TAB 6: BÀI TẬP THÊM / KIỂM TRA (SPEED QUIZ) */}
      {/* ======================================================================= */}
      {currentSection.id === 'them' && (
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

            {nextModule ? (
              <Link to={`/module/${nextModule.id}/ly-thuyet`}>
                <Button variant="primary" size="lg" className="shadow-md">
                  Chuyển sang Module 0{nextModule.num}: {nextModule.num === 2 ? 'Konbini & Mua sắm' : nextModule.num === 3 ? 'Tàu điện & Hẹn hò' : 'Nhà trọ & Tự lập'} →
                </Button>
              </Link>
            ) : (
              <Link to="/u/cd00">
                <Button variant="primary" size="lg" className="shadow-md">
                  Chuyển sang Chặng 2: Bứt phá N4+ (M05 – M14) →
                </Button>
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  )
}
