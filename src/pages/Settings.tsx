import { useEffect, useRef, useState } from 'react'
import { useSettings, type FontSize, type Theme } from '../store/settings'
import { exportProgress, useProgress } from '../store/progress'
import { friendlyVoiceName, japaneseVoices, onVoicesChanged, speak, sttSupported, ttsSupported } from '../lib/speech'
import { Button, Card, Chip } from '../components/ui'

export function SettingsPage() {
  const s = useSettings()
  const importData = useProgress((p) => p.importData)
  const reset = useProgress((p) => p.reset)
  const [voices, setVoices] = useState(() => japaneseVoices())
  const file = useRef<HTMLInputElement>(null)
  useEffect(() => onVoicesChanged(() => setVoices(japaneseVoices())), [])

  const download = () => {
    const blob = new Blob([JSON.stringify(exportProgress())], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `nihongo-tien-do-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
  }

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Cài đặt</h1>
      <Card className="space-y-6 p-6">
        <Row label="Giao diện">
          {(['light', 'dark', 'system'] as Theme[]).map((t) => (
            <Chip key={t} active={s.theme === t} onClick={() => s.set({ theme: t })}>
              {t === 'light' ? 'Sáng' : t === 'dark' ? 'Tối' : 'Theo máy'}
            </Chip>
          ))}
        </Row>
        <Row label="Cỡ chữ">
          {(['sm', 'base', 'lg'] as FontSize[]).map((f) => (
            <Chip key={f} active={s.fontSize === f} onClick={() => s.set({ fontSize: f })}>
              {f === 'sm' ? 'Nhỏ' : f === 'base' ? 'Vừa' : 'Lớn'}
            </Chip>
          ))}
        </Row>
        <Row label="Furigana">
          <Chip active={s.furigana} onClick={() => s.set({ furigana: true })}>
            Hiện
          </Chip>
          <Chip active={!s.furigana} onClick={() => s.set({ furigana: false })}>
            Ẩn
          </Chip>
        </Row>
        <Row label="Mục tiêu mỗi ngày" hint="Số câu trả lời đúng mỗi ngày để giữ chuỗi ngày học 🔥.">
          {[10, 20, 30, 50, 100].map((g) => (
            <Chip key={g} active={s.dailyGoal === g} onClick={() => s.set({ dailyGoal: g })}>
              {g} câu
            </Chip>
          ))}
        </Row>
        <Row label="Gõ romaji → kana" hint="Gõ “yomimasu” sẽ thành “よみます”. Máy chấm theo cách đọc nên không cần gõ Kanji: よみます vẫn đúng với 読みます.">
          <Chip active={s.romaji} onClick={() => s.set({ romaji: !s.romaji })}>
            {s.romaji ? 'Đang bật' : 'Đang tắt'}
          </Chip>
        </Row>
      </Card>

      <Card className="space-y-4">
        <p className="font-semibold">Giọng đọc</p>
        {!ttsSupported() && <p className="text-sm text-bad">Trình duyệt không hỗ trợ đọc văn bản.</p>}
        {ttsSupported() && voices.length === 0 && (
          <p className="text-sm text-bad">Không tìm thấy giọng tiếng Nhật. Trên Windows: Cài đặt → Thời gian & Ngôn ngữ → Giọng nói → thêm Japanese, hoặc dùng trình duyệt Edge.</p>
        )}
        {(['voiceA', 'voiceB'] as const).map((k) => (
          <Row key={k} label={k === 'voiceA' ? 'Nhân vật A / người đọc' : 'Nhân vật B'}>
            <select className="max-w-full rounded-lg border border-line bg-surface px-2 py-1.5" value={s[k]} onChange={(e) => s.set({ [k]: e.target.value })}>
              <option value="">Tự chọn</option>
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {friendlyVoiceName(v)}
                </option>
              ))}
            </select>
            <Button size="sm" onClick={() => speak('こんにちは。日本語（にほんご）の 勉強（べんきょう）を 頑張（がんば）りましょう。', { role: k === 'voiceA' ? 'A' : 'B' })}>
              Thử
            </Button>
          </Row>
        ))}
        <Row label={`Tốc độ đọc: ${s.rate.toFixed(2)}×`}>
          <input type="range" min={0.6} max={1.2} step={0.05} value={s.rate} onChange={(e) => s.set({ rate: Number(e.target.value) })} />
        </Row>
        <p className="text-xs text-sub">
          Nhận dạng giọng nói (luyện nói): {sttSupported() ? 'có hỗ trợ ✓' : 'không hỗ trợ trên trình duyệt này — hãy dùng Chrome hoặc Edge'}.
        </p>
      </Card>

      <Card className="space-y-3">
        <p className="font-semibold">Tiến độ học</p>
        <p className="text-sm text-sub">Tiến độ chỉ lưu trong trình duyệt này. Hãy sao lưu ra file để chuyển sang máy khác hoặc phòng khi xoá dữ liệu trình duyệt.</p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={download}>Tải file sao lưu</Button>
          <Button onClick={() => file.current?.click()}>Nhập từ file</Button>
          <input
            ref={file}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={async (e) => {
              const f = e.target.files?.[0]
              if (!f) return
              try {
                importData(JSON.parse(await f.text()))
                alert('Đã nhập tiến độ.')
              } catch {
                alert('File không hợp lệ.')
              }
            }}
          />
          <Button variant="bad" onClick={() => confirm('Xoá toàn bộ tiến độ? Không thể hoàn tác.') && reset()}>
            Xoá tiến độ
          </Button>
        </div>
      </Card>
    </div>
  )
}

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-base font-bold text-ink">{label}</p>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
      {hint && <p className="mt-1.5 text-sm text-sub font-medium">{hint}</p>}
    </div>
  )
}
