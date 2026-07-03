import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-xl bg-accent-600 px-8 py-12 md:px-14 md:py-16">
          {/* Single quiet tonal sweep so the panel reads as brand, not flat fill */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(40rem 20rem at 85% 10%, rgba(255, 255, 255, 0.14), transparent 60%)',
            }}
          />
          <div className="relative flex flex-col items-start gap-7 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Need advanced hydraulic solutions? Our dedicated team is ready to
              help you anytime.
            </h2>
            <Link
              to="/contact"
              className="inline-block whitespace-nowrap rounded-md bg-white px-6 py-3 text-sm font-semibold text-accent-700 transition-[background-color,transform] duration-200 hover:bg-accent-100 active:translate-y-px"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
