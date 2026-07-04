import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { services } from '../data/site'
import { serviceIcons } from '../data/serviceIcons'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-steel-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(44rem 22rem at 82% 0%, rgba(255, 111, 71, 0.10), transparent 65%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <Reveal>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-steel-400 transition-colors hover:text-accent-300"
            >
              <ArrowLeft
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              All services
            </Link>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {service.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-lg border border-steel-200 object-cover"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-steel-600">
            {service.description.map((d) => (
              <p key={d.slice(0, 32)}>{d}</p>
            ))}
          </div>
        </Reveal>

        <div>
          {service.bullets && (
            <Reveal delay={0.1}>
              <div className="rounded-lg border border-steel-200 bg-steel-50 p-7">
                <h2 className="font-semibold text-steel-900">
                  {service.bullets.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {service.bullets.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-steel-700">
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-accent-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div className="mt-8 rounded-lg border border-steel-200 p-7">
              <h2 className="font-semibold text-steel-900">Related services</h2>
              <ul className="mt-4 space-y-3">
                {others.map((o) => {
                  const Icon = serviceIcons[o.slug]
                  return (
                    <li key={o.slug}>
                      <Link
                        to={`/services/${o.slug}`}
                        className="group flex items-center gap-3 text-sm font-medium text-steel-700 transition-colors hover:text-accent-600"
                      >
                        <Icon size={20} className="text-accent-600" />
                        {o.title}
                        <ArrowRight
                          size={13}
                          weight="bold"
                          className="text-steel-300 transition-transform group-hover:translate-x-0.5 group-hover:text-accent-600"
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
