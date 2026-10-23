import { memo, type MouseEvent } from 'react'
import { parseFurigana } from '../lib/furigana'
import { speak } from '../lib/speech'

/** Japanese text written with 漢字（かな） notation, rendered as ruby. */
export const Jp = memo(function Jp({ text, className, speakable }: { text: string; className?: string; speakable?: boolean }) {
  const segs = parseFurigana(text.replace(/［|］|〔|〕/g, ''))
  const onClick = speakable
    ? (e: MouseEvent) => {
        e.stopPropagation()
        void speak(text)
      }
    : undefined
  return (
    <span lang="ja" className={(speakable ? 'cursor-pointer hover:text-accent ' : '') + (className ?? '')} onClick={onClick}>
      {segs.map((s, i) =>
        s.r === undefined ? (
          <span key={i}>{s.t}</span>
        ) : (
          <ruby key={i}>
            {s.t}
            <rt>{s.r}</rt>
          </ruby>
        ),
      )}
    </span>
  )
})

/** Pre-rendered textbook HTML. Elements with data-speak are read aloud on click. */
export function Html({ html, className }: { html: string; className?: string }) {
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const t = e.target as HTMLElement
    const td = t.closest('td.vm, td.vw') as HTMLElement | null
    if (td && (td.closest('.hide-mean') || td.closest('.hide-word'))) {
      td.classList.toggle('reveal')
      return
    }
    const el = t.closest('[data-speak]') as HTMLElement | null
    if (el?.dataset.speak) void speak(el.dataset.speak)
  }
  return <div lang="ja" className={'prose-jp ' + (className ?? '')} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
