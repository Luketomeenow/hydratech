import Reveal from './Reveal'

interface PageHeaderProps {
  title: string
  intro?: string
}

export default function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-steel-950">
      {/* Same restrained wash as the home hero, keeping interior pages in the brand frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(44rem 22rem at 82% 0%, rgba(45, 127, 211, 0.14), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
