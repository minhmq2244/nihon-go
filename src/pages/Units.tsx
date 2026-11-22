import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Headphones,
  Sparkles,
  Store,
  GraduationCap,
  Train,
  Home as HomeIcon,
  Layers,
  ArrowRight,
  Zap,
} from 'lucide-react'
import { useIndex, unitLabel } from '../lib/data'
import { useUnitProgress } from '../lib/progressInfo'
import { useProgress } from '../store/progress'
import type { UnitMeta } from '../types'
import { Html, Jp } from '../components/Jp'
import { Button, Card, Loading, ProgressBar, cx } from '../components/ui'
import { REAL_LIFE_MODULES } from '../lib/modulesData'

const MODULE_ICONS = [GraduationCap, Store, Train, HomeIcon]

function UnitCard({ u, current }: { u: UnitMeta; current: boolean }) {
  const { ratio } = useUnitProgress(u.id)
  const status = ratio >= 0.85 ? 'done' : ratio > 0 || current ? 'doing' : 'todo'
  return (
    <Link to={`/u/${u.id}`}>
      <div
        className={cx(
          'h-full rounded-2xl border bg-surface p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-4',
          status === 'done' && 'border-ok/60',
          status === 'doing' && 'border-2 border-accent shadow-sm',
          status === 'todo' && 'border-line',
        )}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-black text-accent uppercase tracking-wider">
              {u.kind === 'cd' ? `MODULE ${u.num + 5 < 10 ? `0${u.num + 5}` : u.num + 5}` : unitLabel(u)}
            </span>
            <span
              className={cx(
                'rounded-full px-2.5 py-0.5 text-xs font-bold',
                status === 'done' && 'bg-ok-soft text-ok',
                status === 'doing' && 'bg-accent-soft text-accent',
                status === 'todo' && 'bg-muted text-sub',
              )}
            >
              {status === 'done' ? (
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> Hoàn thành
                </span>
              ) : status === 'doing' ? (
                'Đang học'
              ) : (
                'Chưa học'
              )}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-ink leading-snug">
            <Jp text={u.title} />
          </h3>
          <p className="text-sm text-sub leading-relaxed">{u.subtitle}</p>
        </div>

        <div>
          <ProgressBar value={ratio} className="h-2" />
          <div className="mt-3 flex items-center justify-between text-xs font-bold text-sub">
            <span>Tiến độ</span>
            <span>{Math.round(ratio * 100)}%</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function Units() {
  const { data: index } = useIndex()
  const lastId = useProgress((s) => s.lastPlace?.unitId)
  const [showOldIndex, setShowOldIndex] = useState(false)
  const [overview, setOverview] = useState(false)
  if (!index) return <Loading />

  const cdUnits = index.units.filter((u) => u.vol === 4)
  const oldUnits = index.units.filter((u) => u.vol <= 3)

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-extrabold uppercase tracking-wider mb-2">
          <Layers size={13} /> HỆ THỐNG MODULE THỰC CHIẾN CHUẨN HOÁ
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-ink">
          Lộ Trình Học Thực Chiến (14 Modules)
        </h1>
        <p className="mt-2 text-base sm:text-lg text-sub font-medium max-w-3xl leading-relaxed">
          Chương trình thiết kế theo <b>14 Module đời sống chuẩn mực</b> (kết hợp trọn gói: Từ vựng, Ngữ pháp, Chữ Hán, Luyện nghe phản xạ, Ôn tập Flashcard và Kịch bản hội thoại thực chiến), đưa bạn từ <b>Nền tảng N5 bứt phá vững vàng đến N4+</b>.
        </p>
      </div>

      {/* SECTION 1: PHASE 1 (MODULES 01 - 04) */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider mb-1">
              <Sparkles size={13} /> CHẶNG 1 · NỀN TẢNG THỰC CHIẾN ĐỜI SỐNG (MODULE 01 – 04)
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-ink">
              Giao Tiếp Sinh Hoạt Hàng Ngày & Tự Lập
            </h2>
            <p className="mt-1 text-sm sm:text-base text-sub font-medium">
              4 Module chuẩn hóa tích hợp đầy đủ 6 phần học trọng tâm. Không học dàn trải, tập trung phản xạ thực tế ngoài đời.
            </p>
          </div>
          <Link to="/passive-listening">
            <Button size="md" className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-md">
              <Headphones size={18} /> Nghe thụ động Spotify Chặng 1
            </Button>
          </Link>
        </div>

        {/* 4 Standardized Module Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {REAL_LIFE_MODULES.map((m, idx) => {
            const Icon = MODULE_ICONS[idx] || Sparkles
            return (
              <Card
                key={m.id}
                className="p-6 sm:p-7 flex flex-col justify-between space-y-5 border-2 hover:border-emerald-500 transition-all shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                      <Icon size={14} /> {m.code}
                    </span>
                    <span className="text-xs font-bold text-sub">⏱️ {m.estimatedHours}</span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-ink leading-snug">
                      {m.titleVn}
                    </h3>
                    <p className="text-sm font-bold text-sub mt-1">
                      <Jp text={m.titleJp} />
                    </p>
                  </div>

                  <p className="text-sm text-sub leading-relaxed">{m.subtitle}</p>

                  {/* 6 Pillars Badges */}
                  <div className="pt-2 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                    <span className="p-2 rounded-xl bg-muted/70 text-sub">
                      📝 {m.stats.vocab} Từ vựng
                    </span>
                    <span className="p-2 rounded-xl bg-muted/70 text-sub">
                      📐 {m.stats.grammar} Ngữ pháp
                    </span>
                    <span className="p-2 rounded-xl bg-muted/70 text-sub">
                      🀄 {m.stats.kanji} Kanji
                    </span>
                    <span className="p-2 rounded-xl bg-muted/70 text-sub">
                      🎧 Luyện nghe
                    </span>
                    <span className="p-2 rounded-xl bg-muted/70 text-sub">
                      ⚡ Ôn tập & Quiz
                    </span>
                    <span className="p-2 rounded-xl bg-muted/70 text-sub">
                      💬 {m.dialogue.lines.length} Lượt thoại
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-line/60 flex flex-wrap items-center justify-between gap-3">
                  <Link to={`/module/${m.id}/vocab`} className="flex-1">
                    <Button variant="primary" size="md" className="w-full font-bold shadow-xs">
                      Vào học trọn gói 6 phần <ArrowRight size={16} />
                    </Button>
                  </Link>

                  <Link to={`/module/${m.id}/dialogue`}>
                    <Button variant="ghost" size="md" className="font-bold text-sub hover:text-ink">
                      💬 Xem kịch bản
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* SECTION 2: PHASE 2 (MODULES 05 - 14) */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-xs font-black uppercase tracking-wider mb-1">
              <Zap size={13} /> CHẶNG 2 · BỨT PHÁ GIAO TIẾP N4+ TOÀN DIỆN (MODULE 05 – 14)
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-ink">
              10 Chủ Đề Chuyên Sâu Đời Sống Tại Nhật
            </h2>
            <p className="mt-1 text-sm sm:text-base text-sub font-medium">
              Bao phủ 100% ngữ pháp N5 còn lại và toàn bộ JLPT N4: Kính ngữ, Thể khả năng, Sai khiến, Bị động, Cho - Nhận và Phỏng vấn Baito.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" onClick={() => setOverview(!overview)}>
              {overview ? 'Ẩn' : 'Xem'} bảng phủ 90 mẫu N4
            </Button>
            <Link to="/exams/t4">
              <Button size="sm" variant="primary">
                Đề kiểm tra tổng hợp
              </Button>
            </Link>
          </div>
        </div>

        {overview && (
          <Card className="p-6">
            <Html html={index.overview.vol4Html} />
          </Card>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cdUnits.map((u) => (
            <UnitCard key={u.id} u={u} current={u.id === lastId} />
          ))}
        </div>
      </section>

      {/* SECTION 3: EXPANDABLE TEXTBOOK REFERENCE DRAWER */}
      <div className="pt-4 border-t border-line">
        <button
          type="button"
          onClick={() => setShowOldIndex(!showOldIndex)}
          className="inline-flex items-center gap-2 text-sm font-bold text-sub hover:text-ink transition cursor-pointer"
        >
          {showOldIndex ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          <span>{showOldIndex ? 'Thu gọn tra cứu' : 'Tra cứu mục lục giáo trình truyền thống (Bài 1 – 11) khi cần'}</span>
        </button>

        {showOldIndex && (
          <div className="mt-4 pt-4 border-t border-line/60 space-y-4">
            <p className="text-xs text-sub font-medium">
              💡 Bảng tra cứu này dành riêng khi bạn cần tìm lại số bài cũ trong giáo trình sơ cấp:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {oldUnits.map((u) => (
                <UnitCard key={u.id} u={u} current={u.id === lastId} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
