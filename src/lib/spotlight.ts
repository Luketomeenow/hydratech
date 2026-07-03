import type { PointerEvent } from 'react'

/**
 * Feeds the cursor position into CSS vars consumed by `.spot-overlay`
 * (see index.css). Writes styles directly so hover tracking never
 * triggers React re-renders.
 */
export function trackSpot(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--spot-x', `${e.clientX - r.left}px`)
  el.style.setProperty('--spot-y', `${e.clientY - r.top}px`)
}
