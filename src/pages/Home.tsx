import { Link } from 'react-router-dom'
import { useIndex, unitLabel } from '../lib/data'
import { useProgress, weakItems } from '../store/progress'
import { Jp } from '../components/Jp'
import { Card, Loading, ProgressBar } from '../components/ui'

export function Home() {
  const { data: index } = useIndex()
  const { sets, visited, dialogues, tests } = useProgress()
  if (!index) return <Loading />

  const unitsTouched = index.units.filter((u) => Object.keys(sets).some((k) => k.startsWith(u.id + ':')))
  const lastId = Object.entries(visited).sort((a, b) => b[1] - a[1])[0]?.[0]
  const last = index.units.find((u) => u.id === lastId)
  const kaiwaTotal = index.kaiwa.reduce((s, k) => s + k.dialogueCount, 0)
  const kaiwaDone = Object.entries(dialogues).filter(([id, steps]) => id.startsWith('k') && steps.includes(4)).length
  const weak = weakItems()
  const recentTests = Object.entries(tests)
    .flatMap(([id, list]) => list.map((t) => ({ id, ...t })))
    .sort((a, b) => b.at - a.at)
    .slice(0, 5)

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold">
          <span lang="ja">こんにちは！</span> Hôm nay học gì nào?
        </h1>
        <p className="text-sub">21 đơn vị (Bài 1–11, Chủ đề 0–9) · 10 chủ đề Kaiwa · 4 đề tổng hợp</p>
      </section>

      {last && (
        <Link to={`/u/${last.id}`} className="block">
          <Card className="flex items-center justify-between gap-4 border-accent/40 hover:bg-accent-soft">
            <div>
              <p className="text-sm text-sub">Học tiếp</p>
              <p className="text-lg font-semibold">
                {unitLabel(last)} · <Jp text={last.title} />
              </p>
            </div>
            <span className="text-accent">→</span>
          </Card>
        </Link>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <Link to="/units">
          <Card className="h-full hover:border-accent">
            <p className="text-lg font-semibold">📘 Học theo bài</p>
            <p className="text-sm text-sub">Lý thuyết · Từ vựng · Kanji · Ngữ pháp · Viết · Đọc · Nghe · Hội thoại · Kiểm tra</p>
            <ProgressBar value={unitsTouched.length / index.units.length} className="mt-3" />
            <p className="mt-1 text-sm text-sub">
              Đã luyện {unitsTouched.length}/{index.units.length} đơn vị
            </p>
          </Card>
        </Link>
        <Link to="/kaiwa">
          <Card className="h-full hover:border-accent">
            <p className="text-lg font-semibold">💬 Kaiwa theo chủ đề</p>
            <p className="text-sm text-sub">Cụm phản xạ + hội thoại 2 người luyện 4 bước</p>
            <ProgressBar value={kaiwaTotal ? kaiwaDone / kaiwaTotal : 0} className="mt-3" />
            <p className="mt-1 text-sm text-sub">
              Hoàn thành {kaiwaDone}/{kaiwaTotal} kịch bản
            </p>
          </Card>
        </Link>
      </div>

      <Card>
        <p className="font-semibold">Hôm nay nên ôn</p>
        <ul className="mt-2 space-y-1 text-sm">
          <li>
            {weak.length ? (
              <>
                <b>{weak.length}</b> câu/từ bạn hay sai — vào từng bài, chọn chế độ <i>Ôn câu sai</i> ở tab Từ vựng, Kanji hoặc Ngữ pháp.
              </>
            ) : (
              'Chưa có câu sai nào được ghi lại. Bắt đầu luyện để web theo dõi giúp bạn.'
            )}
          </li>
          {index.units
            .filter((u) => unitsTouched.includes(u) && !tests[`${u.id}:kiem-tra`])
            .slice(0, 3)
            .map((u) => (
              <li key={u.id}>
                <Link className="text-accent hover:underline" to={`/u/${u.id}/kiem-tra`}>
                  Kiểm tra cuối {unitLabel(u)}
                </Link>{' '}
                — chưa làm
              </li>
            ))}
        </ul>
      </Card>

      {recentTests.length > 0 && (
        <Card>
          <p className="font-semibold">Kết quả kiểm tra gần đây</p>
          <ul className="mt-2 space-y-1 text-sm">
            {recentTests.map((t, i) => (
              <li key={i} className="flex justify-between">
                <span>{testName(t.id, index)}</span>
                <span className="font-medium">
                  {t.correct}/{t.total} · {new Date(t.at).toLocaleDateString('vi-VN')}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  )
}

function testName(id: string, index: { units: { id: string; kind: string; num: number }[]; exams: { id: string; title: string }[] }) {
  const [uid] = id.split(':')
  const u = index.units.find((x) => x.id === uid)
  if (u) return `Kiểm tra cuối ${unitLabel(u)}`
  return index.exams.find((e) => e.id === uid)?.title ?? id
}
