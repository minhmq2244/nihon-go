import { memo } from 'react'
import type { ComicPanel } from '../lib/speakingExamData'
import { cx } from './ui'

interface Props {
  characterName: string
  timelineHint: string
  panels: [ComicPanel, ComicPanel, ComicPanel]
  className?: string
}

function SceneIllustration({ panel }: { panel: ComicPanel }) {
  const { sceneType } = panel

  // Authentic black & white line-art with gentle ink shading (Japanese textbook exam style)
  switch (sceneType) {
    case 'meet':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          {/* Station / Street background */}
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          <rect x="25" y="20" width="35" height="95" rx="3" strokeWidth="1.5" stroke="#666" fill="#f8f9fa" />
          <line x1="30" y1="35" x2="55" y2="35" stroke="#999" strokeWidth="1" />
          <line x1="30" y1="50" x2="55" y2="50" stroke="#999" strokeWidth="1" />
          <line x1="30" y1="65" x2="55" y2="65" stroke="#999" strokeWidth="1" />
          {/* Person 1 (left) */}
          <circle cx="85" cy="45" r="14" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M75 42 Q85 32 95 42" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M85 59 L85 92 M85 92 L75 115 M85 92 L95 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <path d="M85 70 L102 58" strokeWidth="2.2" stroke="#222" strokeLinecap="round" /> {/* waving hand */}
          <path d="M85 72 L72 88" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Person 2 (right) */}
          <circle cx="140" cy="46" r="13" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M130 43 Q140 33 150 43" strokeWidth="2.5" stroke="#222" fill="#444" />
          <path d="M140 59 L140 92 M140 92 L132 115 M140 92 L148 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <path d="M140 70 L123 60" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <path d="M140 72 L152 88" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Chat bubble / emotion */}
          <path d="M106 32 Q115 22 125 32 Q120 40 112 38 L108 42 Z" strokeWidth="1.5" stroke="#444" fill="#fff" />
          <text x="115" y="32" fontSize="9" textAnchor="middle" fill="#222" fontWeight="bold">♪</text>
        </svg>
      )

    case 'museum':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          {/* Framed Paintings on wall */}
          <rect x="25" y="22" width="45" height="40" rx="2" strokeWidth="2" stroke="#444" fill="#f8f9fa" />
          <path d="M30 52 L42 35 L52 48 L65 30" strokeWidth="1.5" stroke="#666" />
          <circle cx="60" cy="30" r="3" fill="#666" />
          <rect x="80" y="20" width="55" height="45" rx="2" strokeWidth="2" stroke="#444" fill="#f8f9fa" />
          <ellipse cx="107" cy="42" rx="16" ry="12" strokeWidth="1.5" stroke="#666" />
          {/* Person looking at pictures */}
          <circle cx="160" cy="50" r="13" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M150 48 Q158 36 170 48" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M160 63 L158 95 M158 95 L150 115 M158 95 L166 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <path d="M160 72 L145 68" strokeWidth="2" stroke="#222" strokeLinecap="round" /> {/* pointing */}
          <path d="M160 74 L165 92" strokeWidth="2" stroke="#222" strokeLinecap="round" />
          {/* Small backpack */}
          <rect x="163" y="65" width="8" height="18" rx="3" strokeWidth="1.5" stroke="#444" fill="#ddd" />
        </svg>
      )

    case 'eat':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          {/* Restaurant dining table */}
          <ellipse cx="100" cy="88" rx="65" ry="16" strokeWidth="2" stroke="#333" fill="#fff" />
          <path d="M35 88 L35 115 M165 88 L165 115" strokeWidth="2.2" stroke="#333" />
          {/* Plates and bowls on table */}
          <ellipse cx="80" cy="85" rx="14" ry="6" strokeWidth="1.5" stroke="#444" fill="#eee" />
          <ellipse cx="120" cy="85" rx="14" ry="6" strokeWidth="1.5" stroke="#444" fill="#eee" />
          <rect x="96" y="78" width="8" height="12" rx="2" strokeWidth="1.2" stroke="#555" fill="#fff" /> {/* cup */}
          {/* Person 1 (sitting left) */}
          <circle cx="55" cy="52" r="12" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M46 50 Q55 40 64 50" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M55 64 L55 88 M55 72 L72 80" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Person 2 (sitting right) */}
          <circle cx="145" cy="52" r="12" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M136 50 Q145 40 154 50" strokeWidth="2.5" stroke="#222" fill="#444" />
          <path d="M145 64 L145 88 M145 72 L128 80" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Steam / delicious food lines */}
          <path d="M78 76 Q81 72 78 68 M118 76 Q121 72 118 68" strokeWidth="1.5" stroke="#888" strokeLinecap="round" />
        </svg>
      )

    case 'shop':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          {/* Shelves with goods */}
          <rect x="20" y="25" width="60" height="90" strokeWidth="2" stroke="#444" fill="#f8f9fa" />
          <line x1="20" y1="55" x2="80" y2="55" strokeWidth="1.8" stroke="#444" />
          <line x1="20" y1="85" x2="80" y2="1.8" strokeWidth="1.8" stroke="#444" />
          {/* Items on shelves */}
          <rect x="28" y="38" width="10" height="15" strokeWidth="1.2" stroke="#666" fill="#ddd" />
          <rect x="44" y="38" width="10" height="15" strokeWidth="1.2" stroke="#666" fill="#ddd" />
          <circle cx="34" cy="72" r="7" strokeWidth="1.2" stroke="#666" fill="#eee" />
          <circle cx="55" cy="72" r="7" strokeWidth="1.2" stroke="#666" fill="#eee" />
          {/* Person holding basket */}
          <circle cx="140" cy="46" r="13" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M130 43 Q140 33 150 43" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M140 59 L140 92 M140 92 L132 115 M140 92 L148 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <path d="M140 70 L115 76" strokeWidth="2" stroke="#222" strokeLinecap="round" />
          {/* Shopping basket */}
          <rect x="105" y="75" width="22" height="16" rx="2" strokeWidth="1.8" stroke="#222" fill="#fff" />
          <path d="M110 75 Q116 66 122 75" strokeWidth="1.5" stroke="#222" />
        </svg>
      )

    case 'cook':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          {/* Kitchen counter / stove */}
          <rect x="100" y="65" width="85" height="50" strokeWidth="2" stroke="#333" fill="#f8f9fa" />
          {/* Frying pan with handle */}
          <ellipse cx="140" cy="65" rx="18" ry="6" strokeWidth="2" stroke="#222" fill="#ddd" />
          <line x1="122" y1="65" x2="105" y2="60" strokeWidth="3" stroke="#222" strokeLinecap="round" />
          {/* Person cooking with apron */}
          <circle cx="65" cy="45" r="13" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M55 42 Q65 32 75 42" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M65 58 L65 92 M65 92 L58 115 M65 92 L72 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Apron */}
          <path d="M58 64 L72 64 L75 88 L55 88 Z" strokeWidth="1.5" stroke="#555" fill="#eee" />
          {/* Arm holding spatula */}
          <path d="M65 68 L100 62 L128 62" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Steam from pan */}
          <path d="M135 55 Q138 48 135 42 M145 55 Q148 48 145 42" strokeWidth="1.5" stroke="#888" strokeLinecap="round" />
        </svg>
      )

    case 'bus':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          {/* Bus body */}
          <rect x="35" y="30" width="135" height="65" rx="8" strokeWidth="2.2" stroke="#222" fill="#fff" />
          {/* Windows */}
          <rect x="45" y="38" width="22" height="22" rx="2" strokeWidth="1.5" stroke="#444" fill="#eef2f5" />
          <rect x="74" y="38" width="25" height="22" rx="2" strokeWidth="1.5" stroke="#444" fill="#eef2f5" />
          <rect x="105" y="38" width="25" height="22" rx="2" strokeWidth="1.5" stroke="#444" fill="#eef2f5" />
          <rect x="136" y="38" width="25" height="42" rx="2" strokeWidth="1.8" stroke="#222" fill="#fff" /> {/* door */}
          <line x1="148" y1="38" x2="148" y2="80" strokeWidth="1.2" stroke="#666" />
          {/* Wheels */}
          <circle cx="65" cy="95" r="14" strokeWidth="2.5" stroke="#222" fill="#fff" />
          <circle cx="65" cy="95" r="6" strokeWidth="1.5" stroke="#444" fill="#333" />
          <circle cx="125" cy="95" r="14" strokeWidth="2.5" stroke="#222" fill="#fff" />
          <circle cx="125" cy="95" r="6" strokeWidth="1.5" stroke="#444" fill="#333" />
          {/* Bus sign / destination */}
          <rect x="75" y="24" width="45" height="10" rx="2" strokeWidth="1.2" stroke="#222" fill="#333" />
          <text x="97" y="32" fontSize="7" textAnchor="middle" fill="#fff" fontWeight="bold">TOUR BUS</text>
        </svg>
      )

    case 'study':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          {/* Desk */}
          <rect x="40" y="70" width="120" height="45" strokeWidth="2" stroke="#333" fill="#f8f9fa" />
          {/* Open Laptop on desk */}
          <rect x="85" y="52" width="30" height="18" rx="1.5" strokeWidth="1.8" stroke="#222" fill="#fff" />
          <line x1="80" y1="70" x2="120" y2="70" strokeWidth="2.5" stroke="#222" strokeLinecap="round" />
          {/* Books / Notepad */}
          <rect x="52" y="66" width="22" height="6" strokeWidth="1.2" stroke="#555" fill="#ddd" />
          <rect x="54" y="61" width="18" height="5" strokeWidth="1.2" stroke="#555" fill="#eee" />
          {/* Person seated studying */}
          <circle cx="140" cy="45" r="13" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M130 42 Q140 32 150 42" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M140 58 L140 85 M140 70 L118 70" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <rect x="135" y="78" width="12" height="28" strokeWidth="1.8" stroke="#444" fill="#fff" /> {/* chair */}
          {/* Lamp */}
          <path d="M165 70 L165 35 L155 35" strokeWidth="1.8" stroke="#444" />
          <path d="M150 35 L160 30 L160 40 Z" strokeWidth="1.5" stroke="#444" fill="#eee" />
        </svg>
      )

    case 'clean':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          {/* Person cleaning / wiping */}
          <circle cx="85" cy="45" r="13" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M75 42 Q85 32 95 42" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M85 58 L85 92 M85 92 L78 115 M85 92 L92 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Broom / Mop */}
          <line x1="85" y1="70" x2="135" y2="108" strokeWidth="2.5" stroke="#444" strokeLinecap="round" />
          <rect x="130" y="105" width="22" height="10" rx="2" strokeWidth="1.8" stroke="#222" fill="#ddd" />
          {/* Sparkles / Cleanliness */}
          <path d="M150 45 L153 35 L156 45 L166 48 L156 51 L153 61 L150 51 L140 48 Z" strokeWidth="1.2" stroke="#444" fill="#fff" />
          <path d="M45 55 L47 48 L49 55 L56 57 L49 59 L47 66 L45 59 L38 57 Z" strokeWidth="1.2" stroke="#444" fill="#fff" />
          {/* Bucket */}
          <path d="M30 95 L46 95 L43 115 L33 115 Z" strokeWidth="1.8" stroke="#333" fill="#eee" />
          <path d="M32 95 Q38 88 44 95" strokeWidth="1.2" stroke="#555" fill="none" />
        </svg>
      )

    case 'camera':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          {/* Mountain / Fuji in background */}
          <path d="M85 115 L140 35 L195 115" strokeWidth="2" stroke="#555" fill="#f8f9fa" />
          <path d="M125 56 L133 64 L140 52 L148 64 L155 56" strokeWidth="1.5" stroke="#777" /> {/* snow cap */}
          {/* Sun */}
          <circle cx="175" cy="30" r="10" strokeWidth="1.5" stroke="#555" fill="#fff" />
          {/* Person taking photo with camera */}
          <circle cx="50" cy="52" r="13" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M40 49 Q50 39 60 49" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M50 65 L50 92 M50 92 L42 115 M50 92 L58 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Camera held up */}
          <rect x="56" y="52" width="20" height="14" rx="2" strokeWidth="1.8" stroke="#222" fill="#333" />
          <circle cx="66" cy="59" r="4" strokeWidth="1.5" stroke="#fff" fill="#eee" />
          <path d="M50 68 L60 58 M50 72 L66 65" strokeWidth="2" stroke="#222" strokeLinecap="round" />
          {/* Flash line */}
          <line x1="78" y1="52" x2="90" y2="46" strokeWidth="1.5" stroke="#888" strokeLinecap="round" />
        </svg>
      )

    case 'gift':
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          {/* Person 1 (giver - left) */}
          <circle cx="60" cy="46" r="13" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M50 43 Q60 33 70 43" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M60 59 L60 92 M60 92 L52 115 M60 92 L68 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <path d="M60 70 L86 70" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Gift Box with ribbon */}
          <rect x="86" y="58" width="28" height="24" rx="2" strokeWidth="1.8" stroke="#222" fill="#fff" />
          <line x1="100" y1="58" x2="100" y2="82" strokeWidth="2" stroke="#c00" />
          <line x1="86" y1="70" x2="114" y2="70" strokeWidth="2" stroke="#c00" />
          <path d="M96 58 Q100 50 100 58 Q100 50 104 58" strokeWidth="1.8" stroke="#c00" fill="none" />
          {/* Person 2 (receiver - right smiling) */}
          <circle cx="140" cy="46" r="13" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M130 43 Q140 33 150 43" strokeWidth="2.5" stroke="#222" fill="#444" />
          <path d="M140 59 L140 92 M140 92 L132 115 M140 92 L148 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <path d="M140 70 L116 70" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          {/* Joy symbols */}
          <text x="140" y="28" fontSize="12" textAnchor="middle" fill="#c00">♥</text>
        </svg>
      )

    default:
      // Fallback clean scene with character and activity
      return (
        <svg viewBox="0 0 200 130" className="w-full h-auto drop-shadow-xs" fill="none" stroke="currentColor">
          <path d="M10 115 L190 115" strokeWidth="2.5" stroke="#333" strokeLinecap="round" />
          <circle cx="100" cy="46" r="14" strokeWidth="2" stroke="#222" fill="#fff" />
          <path d="M90 43 Q100 33 110 43" strokeWidth="2.5" stroke="#222" fill="#333" />
          <path d="M100 60 L100 92 M100 92 L92 115 M100 92 L108 115" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <path d="M100 72 L82 82 M100 72 L118 82" strokeWidth="2.2" stroke="#222" strokeLinecap="round" />
          <rect x="135" y="45" width="40" height="70" rx="3" strokeWidth="1.5" stroke="#666" fill="#f8f9fa" />
          <line x1="145" y1="60" x2="165" y2="60" strokeWidth="1.2" stroke="#999" />
          <line x1="145" y1="75" x2="165" y2="75" strokeWidth="1.2" stroke="#999" />
        </svg>
      )
  }
}

export const SpeakingPictureComic = memo(function SpeakingPictureComic({
  characterName,
  timelineHint,
  panels,
  className,
}: Props) {
  return (
    <div className={cx('bg-card rounded-2xl border-2 border-stone-800/80 dark:border-stone-400/80 shadow-md p-4 sm:p-6 overflow-hidden', className)}>
      {/* Header banner like official Japanese test */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-stone-800/80 dark:border-stone-400/80 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-stone-900 text-white font-bold text-sm">
            2
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink">
            Q&A · Tranh hành động liên hoàn
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded-full text-sub">
          <span>Nhân vật chính: <strong className="text-accent">{characterName}</strong></span>
          <span>•</span>
          <span>Thời điểm: <strong className="text-ink">{timelineHint}</strong></span>
        </div>
      </div>

      {/* 3 Panels grid with connecting arrows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {panels.map((panel, idx) => (
          <div key={panel.stepNumber} className="relative flex flex-col">
            {/* Step badge */}
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-stone-800 text-stone-900 dark:border-stone-200 dark:text-stone-100 font-extrabold text-sm bg-white dark:bg-stone-800">
                {panel.stepNumber === 1 ? '①' : panel.stepNumber === 2 ? '②' : '③'}
              </span>

              {/* Character labels badge above head */}
              <div className="flex items-center gap-1.5">
                {panel.characterLabels.map((lbl, li) => (
                  <span
                    key={li}
                    className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-200 text-stone-900 dark:bg-stone-700 dark:text-stone-100 border border-stone-400"
                  >
                    {lbl}
                  </span>
                ))}
              </div>
            </div>

            {/* Panel box (Manga frame) */}
            <div className="relative border-2 border-stone-800 dark:border-stone-300 rounded-xl bg-white dark:bg-stone-900/60 p-2 sm:p-3 flex-1 flex flex-col items-center justify-center min-h-[140px] shadow-xs">
              <SceneIllustration panel={panel} />

              {/* Location tag */}
              <div className="absolute bottom-2 left-2 text-[10px] font-medium text-stone-500 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded border border-stone-200 dark:border-stone-700">
                📍 {panel.location}
              </div>
            </div>

            {/* Action caption */}
            <div className="mt-2 text-center">
              <p className="text-xs sm:text-sm font-bold text-ink leading-tight">
                {panel.actionDescJp}
              </p>
              <p className="text-[11px] sm:text-xs text-sub mt-0.5 leading-tight">
                {panel.actionDescVi}
              </p>
            </div>

            {/* Sequence arrow on desktop between columns */}
            {idx < 2 && (
              <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-6 z-10 w-7 h-7 rounded-full bg-stone-800 text-white items-center justify-center font-bold text-xs shadow-md">
                ➔
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
})
