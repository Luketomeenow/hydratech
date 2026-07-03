import { CheckCircle } from '@phosphor-icons/react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { rentalFleet } from '../data/site'

export default function RentalFleet() {
  return (
    <>
      <PageHeader
        title="Rental Fleet"
        intro="Testing skids to 35,000 PSI, flushing rigs, particle counters, filter skids, gas boosters and sampling cylinders, maintained in-house and ready to mobilize."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:grid-cols-3">
        {rentalFleet.map((r, i) => (
          <Reveal key={r.slug} delay={(i % 3) * 0.06} className="h-full">
            <article
              id={r.slug}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-steel-200 bg-white"
            >
              <div className="flex items-center justify-center border-b border-steel-100 bg-steel-50 p-6">
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  className="h-44 w-auto object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-semibold text-steel-900">{r.title}</h2>
                {r.description.map((d) => (
                  <p
                    key={d.slice(0, 32)}
                    className="mt-3 text-sm leading-relaxed text-steel-600"
                  >
                    {d}
                  </p>
                ))}
                {r.items && (
                  <ul className="mt-4 space-y-2">
                    {r.items.map((item) => (
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
