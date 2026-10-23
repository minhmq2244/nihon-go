import { useEffect, useState } from 'react'
import type { ContentIndex, Exam, KaiwaTopic, Unit } from '../types'

const cache = new Map<string, Promise<unknown>>()

export function load<T>(path: string): Promise<T> {
  if (!cache.has(path)) {
    cache.set(
      path,
      fetch(`${import.meta.env.BASE_URL}data/${path}`).then((r) => {
        if (!r.ok) throw new Error(`Không tải được ${path}`)
        return r.json()
      }),
    )
  }
  return cache.get(path) as Promise<T>
}

export function useData<T>(path: string | null): { data?: T; error?: string } {
  const [state, setState] = useState<{ path?: string; data?: T; error?: string }>({})
  useEffect(() => {
    if (!path) return
    let alive = true
    load<T>(path).then(
      (data) => alive && setState({ path, data }),
      (e: Error) => alive && setState({ path, error: e.message }),
    )
    return () => {
      alive = false
    }
  }, [path])
  return state.path === path ? state : {}
}

export const useIndex = () => useData<ContentIndex>('index.json')
export const useUnit = (id?: string) => useData<Unit>(id ? `unit/${id}.json` : null)
export const useExam = (id?: string) => useData<Exam>(id ? `exam/${id}.json` : null)
export const useKaiwa = (id?: string) => useData<KaiwaTopic>(id ? `kaiwa/${id}.json` : null)

export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j]!, a[i]!]
  }
  return a
}

export const sample = <T,>(arr: readonly T[], n: number) => shuffle(arr).slice(0, n)

export const VOL_NAMES: Record<number, string> = {
  1: 'Tập 1 · JPD113 · Bài 1–3',
  2: 'Tập 2 · JPD123 · Bài 4–7',
  3: 'Tập 3 · JPD133 · Bài 8–11',
  4: 'Tập 4 · N5+ → N4 · Chủ đề 0–9',
}

export const unitLabel = (u: { kind: string; num: number }) => (u.kind === 'bai' ? `Bài ${u.num}` : `Chủ đề ${u.num}`)
