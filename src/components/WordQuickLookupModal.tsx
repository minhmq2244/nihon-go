import { useEffect } from 'react'
import { X } from 'lucide-react'
import { Jp } from './Jp'
import { Button, SpeakButton } from './ui'
import type { KeywordItem } from '../types'

interface WordQuickLookupModalProps {
  item: KeywordItem | null
  onClose: () => void
}

export function WordQuickLookupModal({ item, onClose }: WordQuickLookupModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (item) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl border border-line bg-surface p-6 sm:p-7 shadow-2xl space-y-5 animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button */}
        <div className="flex items-start justify-between gap-3 border-b border-line/70 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                {item.type || 'Từ vựng thực tế'}
              </span>
              {item.hanviet && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                  Hán Việt: {item.hanviet}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 pt-1">
              <h3 className="text-3xl font-black text-ink">
                <Jp text={item.furigana ? `${item.word}（${item.furigana}）` : item.word} />
              </h3>
              <SpeakButton
                text={item.furigana || item.word}
                className="h-9 w-9 bg-accent/10 text-accent hover:bg-accent hover:text-white"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-sub hover:bg-muted hover:text-ink transition cursor-pointer"
            title="Đóng cửa sổ"
          >
            <X size={20} />
          </button>
        </div>

        {/* Meaning Section */}
        <div className="space-y-2">
          <p className="text-xs font-bold text-sub uppercase tracking-wider">Ý nghĩa ngữ cảnh</p>
          <p className="text-xl font-bold text-ink leading-snug">{item.meaning}</p>
        </div>

        {/* Example Section if provided */}
        {item.example && (
          <div className="rounded-2xl border border-line bg-muted/60 p-4 space-y-2">
            <p className="text-xs font-bold text-sub uppercase tracking-wider flex items-center gap-1.5">
              <span>Ví dụ thực tế trong câu</span>
            </p>
            <div className="flex items-start justify-between gap-2">
              <p className="text-base font-bold text-ink">
                <Jp text={item.example} />
              </p>
              <SpeakButton text={item.example} className="shrink-0 text-sub hover:text-accent" />
            </div>
          </div>
        )}

        {/* Action Footer */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <p className="text-xs text-sub">Bấm <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-[11px]">Esc</kbd> hoặc chạm ra ngoài để đóng</p>
          <Button variant="primary" size="md" onClick={onClose} className="px-6 font-bold shadow-sm">
            Đã hiểu 🎯
          </Button>
        </div>
      </div>
    </div>
  )
}
