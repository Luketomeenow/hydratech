import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

interface CountUpProps {
  to: number
  /** Formats the animated value, e.g. thousands separators. Defaults to rounded string. */
  format?: (n: number) => string
  className?: string
}

export default function CountUp({ to, format, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const fmt = format ?? ((n: number) => String(Math.round(n)))

  useEffect(() => {
    const el = ref.current
    if (!el || !inView) return
    if (reduce) {
      el.textContent = fmt(to)
      return
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = fmt(v)
      },
    })
    return () => controls.stop()
    // fmt is stable per usage; re-running on identity change would restart the count
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, to])

  return (
    <span ref={ref} className={className}>
      {fmt(reduce ? to : 0)}
    </span>
  )
}
