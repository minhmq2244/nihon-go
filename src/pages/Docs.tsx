import { useCallback, useEffect, useRef, useState, type ChangeEvent, type DragEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, FileText, Maximize2, Minus, Plus, Trash2, Upload } from 'lucide-react'
import { addDoc, deleteDoc, formatSize, getDoc, getDocFile, updateDoc, useDocs, type DocMeta } from '../lib/docs'
import { openPdf, type PDFDocumentProxy } from '../lib/pdf'
import { Button, Card, Empty, Loading, ProgressBar, cx } from '../components/ui'

const ZOOMS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3]

export function DocsList() {
  const { docs, reload } = useDocs()
  const input = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [dragging, setDragging] = useState(false)

  const importFiles = async (files: File[]) => {
    const pdfs = files.filter((f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name))
    const errs = files.filter((f) => !pdfs.includes(f)).map((f) => `"${f.name}" không phải file PDF.`)
    setBusy(true)
    for (const f of pdfs) {
      try {
        await addDoc(f)
      } catch (e) {
        errs.push((e as Error).message)
      }
    }
    setErrors(errs)
    setBusy(false)
    await reload()
  }

  const onPick = (e: ChangeEvent<HTMLInputElement>) => {
    void importFiles([...(e.target.files ?? [])])
    e.target.value = ''
  }
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    void importFiles([...e.dataTransfer.files])
  }
  const remove = async (d: DocMeta) => {
    if (!confirm(`Xoá "${d.name}" khỏi trình duyệt này?`)) return
    await deleteDoc(d.id)
    await reload()
  }

  return (
    <div
      className="space-y-8"
      onDragOver={(e) => {
        e.preventDefault()
        setDragging(true)
      }}
      onDragLeave={(e) => e.currentTarget === e.target && setDragging(false)}
      onDrop={onDrop}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Tài liệu PDF</h1>
          <p className="mt-2 text-base sm:text-lg text-sub font-medium">
            Nhập file PDF (giáo trình, bài tập, đề thi…) để đọc ngay trên web. File được lưu trong trình duyệt của máy này.
          </p>
        </div>
        <Button variant="primary" onClick={() => input.current?.click()} disabled={busy}>
          <Upload size={18} /> {busy ? 'Đang nhập…' : 'Nhập file PDF'}
        </Button>
        <input ref={input} type="file" accept="application/pdf,.pdf" multiple hidden onChange={onPick} data-testid="pdf-input" />
      </div>

      <button
        type="button"
        onClick={() => input.current?.click()}
        className={cx(
          'w-full rounded-2xl border-2 border-dashed p-8 text-center transition cursor-pointer',
          dragging ? 'border-accent bg-accent-soft text-accent' : 'border-line text-sub hover:border-accent/50',
        )}
      >
        <Upload className="mx-auto mb-2" size={28} />
        <span className="font-semibold">Kéo thả file PDF vào đây</span> hoặc bấm để chọn file
      </button>

      {errors.length > 0 && (
        <div className="rounded-xl border border-bad/30 bg-bad-soft p-4 text-bad">
          {errors.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>
      )}

      {!docs ? (
        <Loading />
      ) : docs.length === 0 ? (
        <Empty title="Chưa có tài liệu nào">Bấm “Nhập file PDF” hoặc kéo thả file vào trang này.</Empty>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {docs.map((d) => (
            <Card key={d.id} className="flex h-full flex-col gap-3 p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
              <Link to={`/docs/${d.id}`} className="flex flex-1 gap-3">
                <FileText className="mt-1 shrink-0 text-accent" size={26} />
                <div className="min-w-0">
                  <p className="line-clamp-2 break-words text-lg font-bold leading-snug text-ink">{d.name}</p>
                  <p className="mt-1 text-sm text-sub">
                    {d.pages} trang · {formatSize(d.size)}
                  </p>
                </div>
              </Link>
              <div>
                <div className="mb-1 flex justify-between text-sm text-sub">
                  <span>{d.openedAt ? `Đang đọc trang ${d.lastPage}` : 'Chưa đọc'}</span>
                  <span>{new Date(d.addedAt).toLocaleDateString('vi-VN')}</span>
                </div>
                <ProgressBar value={d.openedAt ? d.lastPage / d.pages : 0} />
              </div>
              <div className="flex gap-2">
                <Link to={`/docs/${d.id}`} className="flex-1">
                  <Button variant="primary" size="sm" className="w-full">
                    {d.openedAt ? 'Đọc tiếp' : 'Đọc'}
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={() => void remove(d)} aria-label={`Xoá ${d.name}`} title="Xoá">
                  <Trash2 size={17} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export function DocReader() {
  const { id = '' } = useParams()
  const [meta, setMeta] = useState<DocMeta | null>()
  const [pdf, setPdf] = useState<PDFDocumentProxy>()
  const [file, setFile] = useState<Blob>()
  const [error, setError] = useState('')
  const [baseSize, setBaseSize] = useState<{ w: number; h: number }>()
  const [width, setWidth] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [page, setPage] = useState(1)
  /** what the user is typing in the page box; null = show the current page */
  const [draft, setDraft] = useState<string | null>(null)
  const area = useRef<HTMLDivElement>(null)
  const restored = useRef(false)

  // load metadata + file, open with pdf.js
  useEffect(() => {
    let alive = true
    let doc: PDFDocumentProxy | undefined
    ;(async () => {
      const m = await getDoc(id)
      if (!alive) return
      setMeta(m ?? null)
      if (!m) return
      const blob = await getDocFile(id)
      if (!blob) throw new Error('missing')
      doc = await openPdf(await blob.arrayBuffer())
      const first = await doc.getPage(1)
      const vp = first.getViewport({ scale: 1 })
      if (!alive) return void doc.loadingTask.destroy()
      setFile(blob)
      setBaseSize({ w: vp.width, h: vp.height })
      setPdf(doc)
      setPage(m.lastPage)
      void updateDoc(id, { openedAt: Date.now() })
    })().catch(() => alive && setError('Không mở được tài liệu này.'))
    return () => {
      alive = false
      void doc?.loadingTask.destroy()
    }
  }, [id])

  // fit-to-width follows the reading area's width
  useEffect(() => {
    const el = area.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setWidth(Math.floor(e!.contentRect.width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [pdf])

  const fitWidth = Math.min(width, 980)
  const pageWidth = Math.round(fitWidth * zoom)

  const goTo = useCallback((n: number, smooth = true) => {
    document.getElementById(`pdf-page-${n}`)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
  }, [])

  // jump to the remembered page once the layout exists
  useEffect(() => {
    if (!pdf || !pageWidth || restored.current) return
    restored.current = true
    requestAnimationFrame(() => goTo(page, false))
  }, [pdf, pageWidth, page, goTo])

  // keep the current page in view when zooming
  const zoomTo = (z: number) => {
    setZoom(z)
    requestAnimationFrame(() => requestAnimationFrame(() => goTo(page, false)))
  }

  // remember the page being read
  useEffect(() => {
    if (!restored.current) return
    const t = setTimeout(() => void updateDoc(id, { lastPage: page }), 600)
    return () => clearTimeout(t)
  }, [id, page])

  const openInBrowser = () => {
    if (!file) return
    const url = URL.createObjectURL(file)
    window.open(url, '_blank', 'noopener')
    setTimeout(() => URL.revokeObjectURL(url), 60_000)
  }

  if (meta === null) return <Empty title="Không tìm thấy tài liệu">Có thể tài liệu đã bị xoá hoặc được nhập trên máy khác.</Empty>
  if (error) return <Empty title={error}>Thử xoá rồi nhập lại file PDF.</Empty>

  const zi = ZOOMS.indexOf(zoom)
  return (
    <div className="-mx-6 md:-mx-10 lg:-mx-12">
      <div className="sticky top-16 z-10 flex items-center gap-2 border-b border-line bg-surface/95 px-3 py-2 backdrop-blur md:px-6">
        <Link to="/docs" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sub hover:bg-muted" aria-label="Quay lại danh sách">
          <ArrowLeft size={20} />
        </Link>
        <p className="hidden min-w-0 flex-1 truncate font-bold text-ink sm:block" title={meta?.name}>
          {meta?.name}
        </p>
        <form
          className="flex items-center gap-1.5 text-sm text-sub max-sm:flex-1"
          onSubmit={(e) => {
            e.preventDefault()
            const n = Math.min(Math.max(1, Number(draft) || page), pdf?.numPages ?? 1)
            setDraft(null)
            goTo(n)
          }}
        >
          <input
            value={draft ?? String(page)}
            onChange={(e) => setDraft(e.target.value.replace(/\D/g, ''))}
            onBlur={() => setDraft(null)}
            inputMode="numeric"
            aria-label="Trang"
            className="w-12 rounded-lg border border-line bg-bg px-1.5 py-1 text-center font-semibold text-ink"
          />
          <span>/ {pdf?.numPages ?? '…'}</span>
        </form>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="px-2!" disabled={zi <= 0} onClick={() => zoomTo(ZOOMS[zi - 1]!)} aria-label="Thu nhỏ">
            <Minus size={17} />
          </Button>
          <button type="button" onClick={() => zoomTo(1)} className="w-14 rounded-lg py-1 text-sm font-semibold text-ink hover:bg-muted" title="Vừa khung">
            {Math.round(zoom * 100)}%
          </button>
          <Button variant="ghost" size="sm" className="px-2!" disabled={zi >= ZOOMS.length - 1} onClick={() => zoomTo(ZOOMS[zi + 1]!)} aria-label="Phóng to">
            <Plus size={17} />
          </Button>
          <Button variant="ghost" size="sm" className="px-2! max-sm:hidden" onClick={() => zoomTo(1)} title="Vừa khung" aria-label="Vừa khung">
            <Maximize2 size={16} />
          </Button>
          <Button variant="ghost" size="sm" className="px-2!" onClick={openInBrowser} disabled={!file} title="Mở bằng trình xem PDF của trình duyệt (tìm kiếm, chọn chữ)" aria-label="Mở trong tab mới">
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>

      <div ref={area} className="overflow-x-auto px-3 py-4 md:px-6">
        {!pdf || !baseSize || !pageWidth ? (
          <Loading />
        ) : (
          <div className="mx-auto flex flex-col items-center gap-4" style={{ width: pageWidth }}>
            {Array.from({ length: pdf.numPages }, (_, i) => (
              <PdfPage key={i + 1} pdf={pdf} n={i + 1} width={pageWidth} ratio={baseSize.h / baseSize.w} onCurrent={setPage} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/** One page: drawn when near the viewport, cleared when far away to keep memory low. */
function PdfPage({ pdf, n, width, ratio: guess, onCurrent }: { pdf: PDFDocumentProxy; n: number; width: number; ratio: number; onCurrent: (n: number) => void }) {
  const box = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const [near, setNear] = useState(false)
  const [ratio, setRatio] = useState(guess)

  useEffect(() => {
    const el = box.current!
    const nearIo = new IntersectionObserver(([e]) => setNear(e!.isIntersecting), { rootMargin: '150% 0px' })
    // the page crossing a line 40% down the screen is the one being read
    const curIo = new IntersectionObserver(([e]) => e!.isIntersecting && onCurrent(n), { rootMargin: '-40% 0px -59% 0px' })
    nearIo.observe(el)
    curIo.observe(el)
    return () => {
      nearIo.disconnect()
      curIo.disconnect()
    }
  }, [n, onCurrent])

  useEffect(() => {
    const c = canvas.current!
    if (!near) {
      c.width = 0
      c.height = 0
      return
    }
    let cancelled = false
    let task: { cancel(): void } | undefined
    void pdf.getPage(n).then((p) => {
      if (cancelled) return
      const base = p.getViewport({ scale: 1 })
      setRatio(base.height / base.width)
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const vp = p.getViewport({ scale: (width / base.width) * dpr })
      c.width = Math.floor(vp.width)
      c.height = Math.floor(vp.height)
      const render = p.render({ canvas: c, viewport: vp })
      render.promise.catch(() => {}) // cancelled when scrolled away or re-zoomed
      task = render
    })
    return () => {
      cancelled = true
      task?.cancel()
    }
  }, [near, pdf, n, width])

  return (
    <div id={`pdf-page-${n}`} ref={box} className="relative scroll-mt-32 bg-white shadow-md ring-1 ring-line" style={{ width, height: Math.round(width * ratio) }}>
      <canvas ref={canvas} className="block h-full w-full" />
      <span className="absolute bottom-1.5 right-2 rounded bg-black/40 px-1.5 text-xs text-white">{n}</span>
    </div>
  )
}
