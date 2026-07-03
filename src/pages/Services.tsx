import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { services } from '../data/site'
import { serviceIcons } from '../data/serviceIcons'

export default function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        intro="Complete hydraulic service scope: plating, machining, repair, tubing, testing, flushing and cleaning, in the workshop or at your site."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.slug]
          return (
            <Reveal key={s.slug} delay={(i % 2) * 0.08} className="h-full">
              <Link
                to={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-steel-200 bg-white transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-steel-900/10"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <Icon size={26} className="shrink-0 text-accent-600" />
                    <h2 className="text-lg font-semibold text-steel-900">
                      {s.title}
                    </h2>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                    View service details
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </section>

      <CtaBand />
    </>
  )
}
