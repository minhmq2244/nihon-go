// Imported PDFs live in this browser's IndexedDB: metadata in "meta", the file itself in "files".
import { useCallback, useEffect, useState } from 'react'
import { openPdf } from './pdf'

export interface DocMeta {
  id: string
  name: string
  size: number
  pages: number
  addedAt: number
  openedAt?: number
  /** 1-based page the reader was on last time */
  lastPage: number
}

const DB = 'nihon-docs'
const META = 'meta'
const FILES = 'files'

let dbPromise: Promise<IDBDatabase> | undefined
function db(): Promise<IDBDatabase> {
  dbPromise ??= new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1)
    req.onupgradeneeded = () => {
      req.result.createObjectStore(META, { keyPath: 'id' })
      req.result.createObjectStore(FILES)
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  return dbPromise
}

function run<T>(stores: string[], mode: IDBTransactionMode, fn: (tx: IDBTransaction) => IDBRequest<T> | void): Promise<T> {
  return db().then(
    (d) =>
      new Promise<T>((resolve, reject) => {
        const tx = d.transaction(stores, mode)
        const req = fn(tx)
        tx.oncomplete = () => resolve(req ? req.result : (undefined as T))
        tx.onerror = () => reject(tx.error)
        tx.onabort = () => reject(tx.error ?? new Error('Không lưu được tài liệu (bộ nhớ trình duyệt đầy?)'))
      }),
  )
}

export const listDocs = () =>
  run<DocMeta[]>([META], 'readonly', (tx) => tx.objectStore(META).getAll()).then((all) =>
    all.sort((a, b) => (b.openedAt ?? b.addedAt) - (a.openedAt ?? a.addedAt)),
  )

export const getDoc = (id: string) => run<DocMeta | undefined>([META], 'readonly', (tx) => tx.objectStore(META).get(id))

export const getDocFile = (id: string) => run<Blob | undefined>([FILES], 'readonly', (tx) => tx.objectStore(FILES).get(id))

export async function updateDoc(id: string, patch: Partial<Omit<DocMeta, 'id'>>) {
  const cur = await getDoc(id)
  if (cur) await run([META], 'readwrite', (tx) => void tx.objectStore(META).put({ ...cur, ...patch }))
}

export const deleteDoc = (id: string) =>
  run([META, FILES], 'readwrite', (tx) => {
    tx.objectStore(META).delete(id)
    tx.objectStore(FILES).delete(id)
  })

/** Validate the file with pdf.js (counts pages), then store it. */
export async function addDoc(file: File): Promise<DocMeta> {
  let pdf
  try {
    pdf = await openPdf(await file.arrayBuffer())
  } catch (e) {
    const name = (e as Error)?.name
    throw new Error(name === 'PasswordException' ? `"${file.name}" có mật khẩu, chưa mở được.` : `"${file.name}" không phải file PDF hợp lệ.`)
  }
  const meta: DocMeta = { id: crypto.randomUUID(), name: file.name.replace(/\.pdf$/i, ''), size: file.size, pages: pdf.numPages, addedAt: Date.now(), lastPage: 1 }
  await pdf.loadingTask.destroy()
  await run([META, FILES], 'readwrite', (tx) => {
    tx.objectStore(META).put(meta)
    tx.objectStore(FILES).put(file, meta.id)
  })
  // Ask the browser not to evict stored files when space runs low.
  void navigator.storage?.persist?.()
  return meta
}

export function useDocs() {
  const [docs, setDocs] = useState<DocMeta[] | null>(null)
  const reload = useCallback(() => listDocs().then(setDocs), [])
  useEffect(() => {
    void reload()
  }, [reload])
  return { docs, reload }
}

export function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}
