// pdf.js setup: worker plus the runtime assets vite.config.ts copies into public/pdfjs.
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from 'pdfjs-dist'
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

GlobalWorkerOptions.workerSrc = workerUrl

const asset = (dir: string) => new URL(`${import.meta.env.BASE_URL}pdfjs/${dir}/`, document.baseURI).href

/** Open a PDF from bytes. pdf.js takes ownership of the buffer, so pass a copy if you still need it. */
export function openPdf(data: ArrayBuffer): Promise<PDFDocumentProxy> {
  return getDocument({
    data,
    cMapUrl: asset('cmaps'),
    cMapPacked: true,
    standardFontDataUrl: asset('standard_fonts'),
    wasmUrl: asset('wasm'),
    iccUrl: asset('iccs'),
  }).promise
}

export type { PDFDocumentProxy }
