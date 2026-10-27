import { useState } from 'react'
import { ArrowDown, ArrowUp, Check, Plus, RotateCcw, Trash2, X, Volume2, Sparkles } from 'lucide-react'
import type { Card as StudyCard } from '../lib/questions'
import { speak } from '../lib/speech'
import { Jp } from './Jp'
import { Button } from './ui'

interface DeckEditorProps {
  initialCards: StudyCard[]
  title: string
  deckKey: string
  isCustomized: boolean
  onSave: (cards: StudyCard[]) => void
  onReset: () => void
  onCancel: () => void
}

interface EditableCard {
  id: string
  front: string
  back: string
  extra: string
}

export function DeckEditor({
  initialCards,
  title,
  isCustomized,
  onSave,
  onReset,
  onCancel,
}: DeckEditorProps) {
  const [cards, setCards] = useState<EditableCard[]>(() =>
    initialCards.map((c, idx) => ({
      id: c.id || `custom-${Date.now()}-${idx}`,
      front: c.front ?? '',
      back: c.back ?? '',
      extra: c.extra ?? '',
    })),
  )

  const [confirmReset, setConfirmReset] = useState(false)

  const handleChange = (index: number, field: keyof EditableCard, value: string) => {
    setCards((prev) => {
      const next = [...prev]
      next[index] = { ...next[index]!, [field]: value }
      return next
    })
  }

  const handleAddCard = () => {
    setCards((prev) => [
      ...prev,
      {
        id: `card-${Date.now()}-${prev.length + 1}`,
        front: '',
        back: '',
        extra: '',
      },
    ])
  }

  const handleDeleteCard = (index: number) => {
    setCards((prev) => prev.filter((_, i) => i !== index))
  }

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= cards.length) return
    setCards((prev) => {
      const next = [...prev]
      const temp = next[index]!
      next[index] = next[targetIndex]!
      next[targetIndex] = temp
      return next
    })
  }

  const handleSave = () => {
    const cleanedCards: StudyCard[] = cards
      .filter((c) => c.front.trim() || c.back.trim())
      .map((c) => ({
        id: c.id,
        front: c.front.trim(),
        back: c.back.trim(),
        extra: c.extra.trim() || undefined,
        speak: c.front.trim(),
      }))

    onSave(cleanedCards)
  }

  return (
    <div className="space-y-6 rounded-3xl border border-line bg-surface p-4 sm:p-6 shadow-sm">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
              Sửa toàn bộ thẻ · {title}
            </h3>
            <span className="rounded-full bg-accent-soft px-3 py-0.5 text-xs font-bold text-accent">
              {cards.length} thẻ
            </span>
            {isCustomized && (
              <span className="rounded-full bg-ok-soft px-2.5 py-0.5 text-xs font-semibold text-ok border border-ok/20">
                Đã tùy chỉnh
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-sub">
            Chỉnh sửa trực tiếp toàn bộ danh sách thẻ bên dưới. Thay đổi sẽ áp dụng ngay cho Lật thẻ, Learn và Match.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {isCustomized && (
            confirmReset ? (
              <div className="flex items-center gap-1.5 rounded-xl border border-bad/30 bg-bad-soft/40 p-1">
                <span className="text-xs font-semibold text-bad px-1">Chắc chắn khôi phục?</span>
                <Button
                  size="sm"
                  variant="bad"
                  onClick={() => {
                    setConfirmReset(false)
                    onReset()
                  }}
                  className="px-2 py-1 text-xs"
                >
                  Có
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setConfirmReset(false)}
                  className="px-2 py-1 text-xs"
                >
                  Không
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                variant="default"
                onClick={() => setConfirmReset(true)}
                className="flex items-center gap-1.5 text-sub hover:text-bad"
                title="Khôi phục lại toàn bộ thẻ gốc ban đầu của giáo trình"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Khôi phục gốc</span>
              </Button>
            )
          )}

          <Button size="sm" variant="ghost" onClick={onCancel} className="flex items-center gap-1">
            <X className="h-4 w-4" />
            <span>Hủy</span>
          </Button>

          <Button
            size="sm"
            variant="primary"
            onClick={handleSave}
            className="flex items-center gap-1.5 shadow-sm"
          >
            <Check className="h-4 w-4" />
            <span>Lưu thay đổi</span>
          </Button>
        </div>
      </div>

      {/* Helper notice */}
      <div className="flex items-start gap-2.5 rounded-2xl bg-muted/60 p-3 sm:p-4 text-xs sm:text-sm text-sub border border-line/60">
        <Sparkles className="h-5 w-5 shrink-0 text-accent mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-ink">Mẹo nhập từ tiếng Nhật kèm cách đọc (Furigana):</p>
          <p>
            Bạn có thể viết cách đọc trong dấu ngoặc đơn dạng <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-accent">漢字（かな）</code>. Ví dụ: <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-ink">駅長（えきちょう）</code> hoặc <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-ink">食（た）べます</code> để hệ thống tự động gắn furigana và phát âm chuẩn.
          </p>
        </div>
      </div>

      {/* Cards Table / List */}
      <div className="space-y-3.5">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="group relative rounded-2xl border border-line bg-surface p-4 transition-all hover:border-accent/40 hover:shadow-xs space-y-3"
          >
            {/* Row Header */}
            <div className="flex items-center justify-between border-b border-line/40 pb-2">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-bold text-sub">
                  {index + 1}
                </span>
                {card.front.trim() && (
                  <span className="text-sm font-semibold text-ink">
                    <Jp text={card.front} />
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1">
                {card.front.trim() && (
                  <button
                    type="button"
                    onClick={() => void speak(card.front)}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-sub hover:bg-accent-soft hover:text-accent transition cursor-pointer"
                    title="Nghe thử phát âm"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                )}

                <button
                  type="button"
                  disabled={index === 0}
                  onClick={() => handleMove(index, 'up')}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-sub hover:bg-muted hover:text-ink disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                  title="Di chuyển lên trên"
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  disabled={index === cards.length - 1}
                  onClick={() => handleMove(index, 'down')}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-sub hover:bg-muted hover:text-ink disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                  title="Di chuyển xuống dưới"
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteCard(index)}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-sub hover:bg-bad-soft hover:text-bad transition cursor-pointer ml-1"
                  title="Xoá thẻ này"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Front Side */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-sub">
                  Mặt trước (Tiếng Nhật)
                </label>
                <input
                  type="text"
                  value={card.front}
                  onChange={(e) => handleChange(index, 'front', e.target.value)}
                  placeholder="Ví dụ: 駅 hoặc 駅長（えきちょう）"
                  className="w-full rounded-xl border border-line bg-surface px-3.5 py-2 text-base font-medium text-ink transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Back Side */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-sub">
                  Mặt sau (Nghĩa tiếng Việt / Hán-Việt)
                </label>
                <input
                  type="text"
                  value={card.back}
                  onChange={(e) => handleChange(index, 'back', e.target.value)}
                  placeholder="Ví dụ: DỊCH hoặc trưởng ga"
                  className="w-full rounded-xl border border-line bg-surface px-3.5 py-2 text-base font-medium text-ink transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>

            {/* Optional Extra details */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-sub">
                Ghi chú / Thông tin bổ sung (tùy chọn)
              </label>
              <input
                type="text"
                value={card.extra}
                onChange={(e) => handleChange(index, 'extra', e.target.value)}
                placeholder="Ví dụ: Chữ Hán gốc, ngữ cảnh hoặc ví dụ minh họa..."
                className="w-full rounded-xl border border-line/60 bg-muted/40 px-3 py-1.5 text-sm text-sub transition focus:border-accent focus:bg-surface focus:text-ink focus:outline-none focus:ring-1 focus:ring-accent/20"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <Button
          type="button"
          variant="default"
          onClick={handleAddCard}
          className="flex items-center gap-1.5 border-dashed border-accent/60 text-accent hover:bg-accent-soft/40"
        >
          <Plus className="h-4 w-4" />
          <span>Thêm thẻ mới</span>
        </Button>

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" onClick={onCancel}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave} className="flex items-center gap-1.5">
            <Check className="h-4 w-4" />
            <span>Lưu toàn bộ thẻ ({cards.length})</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
