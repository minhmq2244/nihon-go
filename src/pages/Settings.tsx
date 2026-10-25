import { useEffect, useRef, useState } from 'react'
import { useSettings, type FontSize, type Theme } from '../store/settings'
import { exportProgress, useProgress } from '../store/progress'
import { friendlyVoiceName, japaneseVoices, onVoicesChanged, probeSpeech, speak, sttSupported, ttsSupported, voiceHelp, type ProbeResult } from '../lib/speech'
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
          <p className="text-sm text-bad">Không tìm thấy giọng tiếng Nhật. {voiceHelp()}</p>
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

      <SoundCheck />

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

const PROBES = [
  { label: '1. Tiếng Nhật · giọng đang chọn', text: 'こんにちは。音（おと）の テストです。', lang: 'ja-JP', chosen: true },
  { label: '2. Tiếng Nhật · giọng mặc định của máy', text: 'こんにちは。音（おと）の テストです。', lang: 'ja-JP', chosen: false },
  { label: '3. Tiếng Anh', text: 'Hello. This is a sound test.', lang: 'en-US', chosen: false },
]

/** Plays a few test sentences and shows what the browser reported, to find out why a device stays silent. */
function SoundCheck() {
  const voiceA = useSettings((s) => s.voiceA)
  const [results, setResults] = useState<(ProbeResult | null)[]>([])
  const [running, setRunning] = useState(false)

  const run = async () => {
    setRunning(true)
    setResults([])
    const ja = japaneseVoices()
    const chosen = ja.find((v) => v.voiceURI === voiceA) ?? ja[0]
    const out: (ProbeResult | null)[] = []
    for (const p of PROBES) {
      if (p.chosen && !chosen) out.push(null)
      else out.push(await probeSpeech(p.text.replace(/（[^）]*）/g, ''), p.lang, p.chosen ? chosen : undefined))
      setResults([...out])
      await new Promise((r) => setTimeout(r, 600))
    }
    setRunning(false)
  }

  const all = ttsSupported() ? speechSynthesis.getVoices() : []
  const ja = all.filter((v) => /^ja/i.test(v.lang))
  return (
    <Card className="space-y-3">
      <p className="font-semibold">Kiểm tra âm thanh</p>
      <p className="text-sm text-sub">Bấm nút rồi để ý nghe sau mỗi bước. Nếu vẫn im lặng, chụp màn hình phần này gửi lại và cho biết bước nào nghe được tiếng.</p>
      <Button size="sm" onClick={run} disabled={running}>
        {running ? 'Đang kiểm tra…' : 'Chạy kiểm tra'}
      </Button>
      <ul className="space-y-1 text-sm">
        {PROBES.map((p, i) => {
          const r = results[i]
          const status =
            i >= results.length ? (running && i === results.length ? 'đang đọc…' : '—')
            : r === null ? 'bỏ qua (không có giọng Nhật)'
            : r.ended ? 'máy báo đã đọc xong'
            : `lỗi: ${r.error}${r.started ? ' (đã bắt đầu)' : ' (không bắt đầu)'}`
          return (
            <li key={p.label}>
              <b>{p.label}:</b> <span className={r && r.ended ? 'text-ok' : r ? 'text-bad' : 'text-sub'}>{status}</span>
            </li>
          )
        })}
      </ul>
      <div className="rounded-xl bg-muted px-3 py-2 text-xs text-sub break-words">
        <p>Giọng trong máy: {all.length} · tiếng Nhật: {ja.length ? ja.map((v) => `${v.name} [${v.lang}${v.localService ? ', trong máy' : ', mạng'}]`).join(' · ') : 'không có'}</p>
        <p>Trình duyệt: {navigator.userAgent}</p>
      </div>
      <p className="text-xs text-sub">
        Máy báo "đã đọc xong" mà không nghe gì: tăng âm lượng media (bấm nút tăng âm lượng khi đang phát) và kiểm tra tai nghe Bluetooth. Trên Android, vào Cài đặt → Chuyển văn bản thành giọng nói, chọn bộ đọc của Google làm mặc định và tải dữ liệu Tiếng Nhật.
      </p>
    </Card>
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
