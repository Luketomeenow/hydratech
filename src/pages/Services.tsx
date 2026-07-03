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
              <Link to={`/services/${s.slug}`} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-lg border border-steel-200 bg-white transition-[box-shadow,transform,border-color] duration-300 group-hover:-translate-y-1 group-hover:border-accent-300 group-hover:shadow-lg group-hover:shadow-steel-900/10">
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-steel-950/35 to-transparent transition-opacity duration-300 group-hover:opacity-60"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-7 pb-7">
                    <div className="relative -mt-6 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-600 text-white shadow-md shadow-steel-900/20 transition-[background-color,transform] duration-300 group-hover:scale-110 group-hover:bg-accent-500">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-lg font-semibold text-steel-900">
                      {s.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">
                      {s.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 border-t border-steel-100 pt-4 text-sm font-semibold text-accent-600">
                      View service details
                      <ArrowRight
                        size={14}
                        weight="bold"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
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
