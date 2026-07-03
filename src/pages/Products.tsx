import { CheckCircle } from '@phosphor-icons/react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { products } from '../data/site'

export default function Products() {
  return (
    <>
      <PageHeader
        title="Products"
        intro="Power packs, cylinders, testing units and flushing equipment, manufactured and supplied from our Jebel Ali facility."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className="h-full">
            <article
              id={p.slug}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-steel-200 bg-white"
            >
              <div className="flex items-center justify-center border-b border-steel-100 bg-steel-50 p-8">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="max-h-56 w-auto object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="text-xl font-semibold tracking-tight text-steel-900">
                  {p.title}
                </h2>
                {p.description.map((d) => (
                  <p
                    key={d.slice(0, 32)}
                    className="mt-3 text-sm leading-relaxed text-steel-600"
                  >
                    {d}
                  </p>
                ))}
                {p.items && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-steel-700">
                        <CheckCircle
                          size={16}
                          weight="fill"
                          className="mt-0.5 shrink-0 text-accent-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBand />
    </>
  )
}
