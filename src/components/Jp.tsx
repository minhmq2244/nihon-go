import { memo, type MouseEvent } from 'react'
import { parseFurigana, type Seg } from '../lib/furigana'
import { speak } from '../lib/speech'
import { useFuriBlockStore } from '../store/furiBlock'

/** Japanese text written with 漢字（かな） notation, rendered as ruby. */
export const Jp = memo(function Jp({
  text,
  className,
  speakable,
  onRubyClick,
}: {
  text: string
  className?: string
  speakable?: boolean
  onRubyClick?: (seg: Seg, e: MouseEvent) => void
}) {
  const isBlocked = useFuriBlockStore((s) => s.isBlocked)
  const segs = parseFurigana(text.replace(/［|］|〔|〕/g, ''))
  const onClick = speakable
    ? (e: MouseEvent) => {
        e.stopPropagation()
        void speak(text)
      }
    : undefined
  return (
    <span lang="ja" className={(speakable ? 'cursor-pointer hover:text-accent ' : '') + (className ?? '')} onClick={onClick}>
      {segs.map((s, i) => {
        if (s.r === undefined) {
          return <span key={i}>{s.t}</span>
        }
        const blocked = isBlocked(s.t)
        return (
          <ruby
            key={i}
            className={(blocked ? 'keep-furi ' : '') + (onRubyClick ? 'ruby-interactive ' : '')}
            onClick={
              onRubyClick
                ? (e) => {
                    e.stopPropagation()
                    onRubyClick(s, e)
                  }
                : undefined
            }
          >
            {s.t}
            <rt className={blocked ? 'keep-furi' : undefined}>{s.r}</rt>
          </ruby>
        )
      })}
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
