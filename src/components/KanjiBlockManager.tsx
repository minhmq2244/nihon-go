import { useMemo, useState } from 'react'
import { Volume2 } from 'lucide-react'
import type { Seg } from '../lib/furigana'
import { speak } from '../lib/speech'
import { useFuriBlockStore } from '../store/furiBlock'
import { Button } from './ui'

export interface PopoverState {
  seg: Seg
  rect: DOMRect
}

export function KanjiBlockPopover({
  popover,
  onClose,
}: {
  popover: PopoverState | null
  onClose: () => void
}) {
  const { isBlocked, addWord, removeWord } = useFuriBlockStore()

  if (!popover) return null

  const popoverWidth = 280
  const popoverHeight = 180
  let top = popover.rect.bottom + 8
  if (top + popoverHeight > window.innerHeight) {
    top = Math.max(10, popover.rect.top - popoverHeight - 8)
  }
  let left = popover.rect.left + popover.rect.width / 2 - popoverWidth / 2
  left = Math.max(10, Math.min(window.innerWidth - popoverWidth - 10, left))
  const blocked = isBlocked(popover.seg.t)

  return (
    <>
      <div className="fixed inset-0 z-40 bg-transparent" onClick={onClose} />
      <div
        className="fixed z-50 w-72 rounded-2xl border border-line bg-surface p-4 shadow-2xl space-y-3"
        style={{ top: `${top}px`, left: `${left}px` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line pb-2">
          <span className="text-xs font-bold text-accent">Khóa Furigana chữ Hán</span>
          <button
            type="button"
            onClick={onClose}
            className="text-sub hover:text-ink text-sm p-1 rounded-md cursor-pointer"
            aria-label="Đóng"
          >
            ✕
          </button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <ruby className="text-2xl font-black text-ink">
            {popover.seg.t}
            <rt className="text-xs font-bold text-accent">{popover.seg.r}</rt>
          </ruby>
          <button
            type="button"
            onClick={() => void speak(popover.seg.r ? `${popover.seg.t}（${popover.seg.r}）` : popover.seg.t)}
            className="flex items-center gap-1 rounded-xl bg-muted hover:bg-accent-soft hover:text-accent px-2.5 py-1.5 text-xs font-semibold text-sub transition cursor-pointer"
            title="Phát âm"
          >
            <Volume2 size={14} /> Nghe
          </button>
        </div>

        {blocked ? (
          <div className="space-y-1.5 pt-1">
            <Button
              size="sm"
              variant="default"
              className="w-full justify-center border border-ok/50 bg-ok-soft text-ok hover:bg-bad-soft hover:text-bad hover:border-bad/50 transition-colors"
              onClick={() => removeWord(popover.seg.t)}
            >
              ✓ Đang khóa / giữ Furigana (Ấn để bỏ)
            </Button>
            <p className="text-[11px] text-sub text-center leading-tight">
              Từ này luôn hiển thị furigana kể cả khi tắt Furigana toàn web.
            </p>
          </div>
        ) : (
          <div className="space-y-1.5 pt-1">
            <Button
              size="sm"
              variant="primary"
              className="w-full justify-center"
              onClick={() => addWord(popover.seg.t, popover.seg.r)}
            >
              🔒 Khóa Furigana (Luôn hiện Furigana)
            </Button>
            <p className="text-[11px] text-sub text-center leading-tight">
              Giữ furigana cho từ này kể cả khi ấn OFF furigana toàn web.
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export function KanjiBlockManagerModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { items: blockedItems, addWord, removeWord, clearAll } = useFuriBlockStore()
  const [manualKanji, setManualKanji] = useState('')
  const blockedList = useMemo(() => Object.values(blockedItems), [blockedItems])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-md rounded-2xl bg-surface border border-line p-5 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <div>
            <h3 className="font-bold text-lg text-ink">Quản lý khóa Furigana (Add block)</h3>
            <p className="text-xs text-sub">Các từ luôn hiển thị cách đọc khi tắt Furigana toàn trang web</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-sub hover:text-ink text-sm p-1.5 rounded-lg hover:bg-muted cursor-pointer"
            aria-label="Đóng"
          >
            ✕
          </button>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={manualKanji}
            onChange={(e) => setManualKanji(e.target.value)}
            placeholder="Nhập chữ Hán cần khóa Furigana..."
            className="flex-1 rounded-xl border border-line bg-surface px-3 py-1.5 text-sm text-ink outline-none focus:ring-2 focus:ring-accent/30"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && manualKanji.trim()) {
                addWord(manualKanji.trim())
                setManualKanji('')
              }
            }}
          />
          <Button
            size="sm"
            onClick={() => {
              if (manualKanji.trim()) {
                addWord(manualKanji.trim())
                setManualKanji('')
              }
            }}
          >
            Thêm
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 min-h-[140px] pr-1">
          {blockedList.length === 0 ? (
            <div className="text-center py-8 text-sub space-y-2">
              <p className="text-sm">Chưa có từ nào được khóa Furigana.</p>
              <p className="text-xs">
                Trong bài đọc hoặc đoạn văn từ vựng, bấm trực tiếp vào bất kỳ chữ Hán nào rồi chọn <b>Khóa Furigana</b>.
              </p>
            </div>
          ) : (
            blockedList.map((item) => (
              <div key={item.kanji} className="flex items-center justify-between p-2.5 rounded-xl bg-muted/60 border border-line/60">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-ink">{item.kanji}</span>
                  {item.reading && <span className="text-xs font-semibold text-accent">（{item.reading}）</span>}
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => void speak(item.reading ? `${item.kanji}（${item.reading}）` : item.kanji)}
                    className="p-1.5 rounded-lg text-sub hover:text-accent hover:bg-surface transition cursor-pointer"
                    title="Nghe"
                  >
                    <Volume2 size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeWord(item.kanji)}
                    className="p-1.5 rounded-lg text-sub hover:text-bad hover:bg-surface transition cursor-pointer"
                    title="Xóa khỏi danh sách"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {blockedList.length > 0 && (
          <div className="flex justify-between items-center border-t border-line pt-3 text-xs text-sub">
            <span>Tổng cộng: {blockedList.length} từ</span>
            <button
              type="button"
              onClick={clearAll}
              className="text-bad hover:underline font-semibold cursor-pointer"
            >
              Xóa tất cả
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
