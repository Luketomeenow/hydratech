import Reveal from './Reveal'

interface PageHeaderProps {
  title: string
  intro?: string
}

export default function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <section className="border-b border-steel-200 bg-steel-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-steel-900 md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-600">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
