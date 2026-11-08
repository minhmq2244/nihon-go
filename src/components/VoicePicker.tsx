// Pick the reading voice right where you listen: tap a voice to hear a sample and use it.
import { useEffect, useRef, useState } from 'react'
import { Check, Mic, Play } from 'lucide-react'
import { friendlyVoiceName, japaneseVoices, onVoicesChanged, speak, ttsSupported, voiceHelp } from '../lib/speech'
import { useSettings } from '../store/settings'
import { cx } from './ui'

const SAMPLE = 'こんにちは。一緒（いっしょ）に 日本語（にほんご）を 練習（れんしゅう）しましょう。'
const ROLES = [
  { key: 'voiceA', label: 'Người đọc · nhân vật A', fallback: 0 },
  { key: 'voiceB', label: 'Nhân vật B (hội thoại)', fallback: 1 },
] as const

const shortName = (v: SpeechSynthesisVoice) => friendlyVoiceName(v).replace(/\s*\(.*$/, '')

export function VoicePicker() {
  const settings = useSettings()
  const [voices, setVoices] = useState(() => japaneseVoices())
  const [open, setOpen] = useState(false)
  const [up, setUp] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  useEffect(() => onVoicesChanged(() => setVoices(japaneseVoices())), [])
  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !box.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])
  if (!ttsSupported()) return null

  // the voice a role really uses: the chosen one, else the same default the speech module picks
  const current = (k: (typeof ROLES)[number]) => voices.find((v) => v.voiceURI === settings[k.key]) ?? voices[k.fallback] ?? voices[0]
  const toggle = () => {
    // open upwards only when there is no room below (e.g. the floating player at the bottom of the screen)
    const r = box.current?.getBoundingClientRect()
    setUp(!!r && window.innerHeight - r.bottom < 320 && r.top > window.innerHeight - r.bottom)
    setOpen(!open)
  }

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-lg bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent transition hover:brightness-95 cursor-pointer"
        title="Chọn giọng đọc"
      >
        <Mic size={14} />
        Giọng: {voices.length ? shortName(current(ROLES[0])!) : 'mặc định'}
      </button>
      {open && (
        <div
          className={cx(
            'absolute right-0 z-50 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-line bg-surface p-3 text-left shadow-xl',
            up ? 'bottom-full mb-2' : 'top-full mt-2',
          )}
        >
          {!voices.length ? (
            <p className="text-sm text-bad">Máy chưa có giọng tiếng Nhật. {voiceHelp()}</p>
          ) : (
            <div className="max-h-[60vh] space-y-3 overflow-y-auto">
              {ROLES.map((role) => (
                <div key={role.key}>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-sub">{role.label}</p>
                  <ul className="space-y-0.5">
                    {voices.map((v) => {
                      const on = current(role)?.voiceURI === v.voiceURI
                      return (
                        <li key={v.voiceURI}>
                          <button
                            type="button"
                            onClick={() => {
                              settings.set({ [role.key]: v.voiceURI })
                              void speak(SAMPLE, { voiceURI: v.voiceURI })
                            }}
                            className={cx(
                              'flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-sm transition cursor-pointer',
                              on ? 'bg-accent-soft font-bold text-accent' : 'text-ink hover:bg-muted',
                            )}
                          >
                            {on ? <Check size={15} className="shrink-0" /> : <Play size={13} className="shrink-0 text-sub" />}
                            <span className="truncate">{friendlyVoiceName(v)}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
              <p className="text-xs text-sub">Bấm vào một giọng để nghe thử và dùng luôn. Giọng có ⭐ nghe tự nhiên nhất (Edge có Nanami, Keita).</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
