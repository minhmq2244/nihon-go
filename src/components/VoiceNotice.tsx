import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { japaneseVoices, onVoicesChanged, ttsSupported, voiceHelp } from '../lib/speech'

const KEY = 'nihon-voice-notice-hidden'

/** Tells the user why "Nghe" is silent when this device has no Japanese voice (common on tablets). */
export function VoiceNotice() {
  const [hidden, setHidden] = useState(() => {
    try {
      return localStorage.getItem(KEY) === '1'
    } catch {
      return false
    }
  })
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    if (hidden) return
    const check = () => setMissing(!ttsSupported() || japaneseVoices().length === 0)
    // Voices load asynchronously (and Safari may never fire voiceschanged): judge after a moment.
    const t = setTimeout(check, 2000)
    const off = onVoicesChanged(() => japaneseVoices().length && setMissing(false))
    return () => {
      clearTimeout(t)
      off()
    }
  }, [hidden])

  if (hidden || !missing) return null
  const hide = () => {
    setHidden(true)
    try {
      localStorage.setItem(KEY, '1')
    } catch {
      // private mode: hide for this visit only
    }
  }
  return (
    <div className="no-print mb-5 flex items-start gap-3 rounded-2xl border border-warn/30 bg-warn-soft px-4 py-3 text-sm text-ink">
      <div className="flex-1 space-y-1">
        <p className="font-semibold text-warn">
          {ttsSupported() ? 'Máy này chưa có giọng đọc tiếng Nhật nên nút Nghe có thể không phát tiếng.' : 'Trình duyệt này không đọc được văn bản. Hãy mở web bằng Chrome hoặc Safari.'}
        </p>
        {ttsSupported() && <p>{voiceHelp()}</p>}
      </div>
      <button type="button" onClick={hide} className="rounded-full p-1 text-sub hover:bg-muted hover:text-ink" aria-label="Ẩn thông báo">
        <X size={18} />
      </button>
    </div>
  )
}
