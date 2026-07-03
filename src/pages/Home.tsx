import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import { ArrowRight, CaretLeft, CaretRight, CheckCircle } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import CtaBand from '../components/CtaBand'
import { services, products, rentalFleet, industries, company } from '../data/site'
import { serviceIcons } from '../data/serviceIcons'
import { trackSpot } from '../lib/spotlight'

const stats = [
  { value: 2010, label: 'Established in Jebel Ali Free Zone', format: (n: number) => String(Math.round(n)) },
  { value: 3, label: 'ISO & OHSAS certifications' },
  { value: 35000, label: 'PSI pressure testing capability', format: (n: number) => Math.round(n).toLocaleString('en-US') },
  { value: 9, label: 'Specialist service lines' },
]

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Home() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  // Depth cue: back image drifts down, front image drifts up as the hero scrolls away
  const yBack = useTransform(scrollY, [0, 700], [0, 64])
  const yFront = useTransform(scrollY, [0, 700], [0, -44])

  const railRef = useRef<HTMLDivElement>(null)
  function scrollRail(direction: -1 | 1) {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.8,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }

  return (
    <>
      {/* Hero: dark industrial color block, staggered copy left, parallax image cluster right */}
      <section className="relative overflow-hidden bg-steel-950">
        {/* Restrained atmosphere: one deep-blue wash behind the image cluster, hairline fade at the base */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(52rem 30rem at 78% 22%, rgba(45, 127, 211, 0.16), transparent 65%)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-32 pt-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pb-40 lg:pt-24">
          <motion.div
            variants={reduce ? undefined : heroStagger}
            initial={reduce ? false : 'hidden'}
            animate={reduce ? undefined : 'show'}
          >
            <motion.h1
              variants={heroItem}
              className="text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Advanced hydraulic
              <br />
              <span className="text-steel-400">solutions & services</span>
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300"
            >
              Specialist hydraulic engineering for the oil and gas industry,
              from our Jebel Ali facility to sites worldwide.
            </motion.p>
            <motion.div variants={heroItem} className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="btn-sheen group inline-flex items-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-accent-400 active:translate-y-px"
              >
                Explore Our Services
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                to="/rental-fleet"
                className="inline-flex items-center rounded-md border border-steel-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-steel-400 hover:bg-steel-800 active:translate-y-px"
              >
                View Rental Fleet
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src="/images/home-maersk-project.jpg"
              alt="Offshore jack-up drilling rig on a HydraTech project"
              style={reduce ? undefined : { y: yBack }}
              className="ml-auto aspect-[4/3] w-[85%] rounded-xl border border-steel-700 object-cover shadow-2xl shadow-black/40"
            />
            <motion.img
              src="/images/service-tubing-installation.jpg"
              alt="Stainless steel hydraulic tubing installed by HydraTech"
              style={reduce ? undefined : { y: yFront }}
              className="absolute -bottom-9 left-0 aspect-[16/10] w-[55%] rounded-xl border-4 border-steel-800 object-cover object-right shadow-2xl shadow-black/50"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats card overlapping the hero base */}
      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:-mt-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-xl border border-steel-200 bg-white px-6 py-10 shadow-xl shadow-steel-900/10 sm:px-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-semibold tracking-tight text-accent-600">
                  <CountUp to={s.value} format={s.format} />
                </p>
                <p className="mt-2 max-w-[22ch] text-sm leading-snug text-steel-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Services: editorial sticky heading left, index grid right */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1fr_2.2fr]">
        <div className="self-start lg:sticky lg:top-28">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-steel-900 md:text-4xl">
              What we do
            </h2>
            <p className="mt-4 leading-relaxed text-steel-600">
              One of the few companies in the region to specialize in the
              complete hydraulic service scope, from workshop remanufacture to
              site commissioning.
            </p>
            <Link
              to="/services"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-500"
            >
              All services
              <ArrowRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg border border-steel-200 bg-steel-200 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.slug]
            const spansRow = i === services.length - 1 && services.length % 2 === 1
            return (
              <Reveal
                key={s.slug}
                delay={(i % 2) * 0.05}
                className={`h-full ${spansRow ? 'sm:col-span-2' : ''}`}
              >
                <Link
                  to={`/services/${s.slug}`}
                  onPointerMove={trackSpot}
                  className="spot-parent group flex h-full flex-col bg-white p-7 transition-colors duration-200 hover:bg-steel-50"
                >
                  <span aria-hidden className="spot-overlay" />
                  <Icon
                    size={28}
                    className="text-accent-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                  />
                  <h3 className="mt-4 font-semibold text-steel-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-500">
                    {s.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600">
                    Learn more
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Products: horizontal scroll-snap rail */}
      <section className="border-y border-steel-200 bg-steel-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-steel-900 md:text-4xl">
              Manufactured & supplied by HydraTech
            </h2>
            <div className="flex items-center gap-5">
              <Link
                to="/products"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-500"
              >
                All products
                <ArrowRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <div className="hidden gap-2 md:flex">
                <button
                  type="button"
                  aria-label="Scroll products left"
                  onClick={() => scrollRail(-1)}
                  className="rounded-full border border-steel-300 bg-white p-2.5 text-steel-600 transition-colors duration-200 hover:border-accent-400 hover:text-accent-600 active:translate-y-px"
                >
                  <CaretLeft size={16} weight="bold" />
                </button>
                <button
                  type="button"
                  aria-label="Scroll products right"
                  onClick={() => scrollRail(1)}
                  className="rounded-full border border-steel-300 bg-white p-2.5 text-steel-600 transition-colors duration-200 hover:border-accent-400 hover:text-accent-600 active:translate-y-px"
                >
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="relative mx-auto mt-10 max-w-7xl">
          <div
            ref={railRef}
            className="flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-4 pb-4 sm:px-6"
          >
            {products.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={i * 0.06}
                className="flex w-64 shrink-0 snap-start sm:w-72"
              >
                <Link to="/products" className="group block w-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-lg border border-steel-200 bg-white transition-[box-shadow,transform,border-color] duration-300 group-hover:-translate-y-1 group-hover:border-accent-300 group-hover:shadow-lg group-hover:shadow-steel-900/10">
                    <div className="flex h-44 shrink-0 items-center justify-center overflow-hidden border-b border-steel-100 p-5">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex min-h-[5.25rem] flex-1 items-center justify-between gap-3 px-5 py-4">
                      <h3 className="font-semibold leading-snug text-steel-900">
                        {p.title}
                      </h3>
                      <ArrowRight
                        size={16}
                        weight="bold"
                        className="shrink-0 text-steel-300 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-accent-600"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-gradient-to-l from-steel-50 to-transparent lg:block"
          />
        </div>
      </section>

      {/* About split with offset-frame image */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-steel-900 md:text-4xl">
            Norwegian engineering roots, Gulf presence
          </h2>
          <p className="mt-5 leading-relaxed text-steel-600">
            {company.legalName} is a subsidiary of {company.parent}, an ISO
            9001, 14000 and OHSAS 18000 certified company based in Jebel Ali
            Free Zone, UAE. Since {company.founded} we have provided quality
            services and products at a fair price to the oil industry, both
            domestically and globally.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Complete subcontract capability, workshop to site',
              'Certified ISO 9001, ISO 14000 & OHSAS 18000',
              'Rental fleet available across the Gulf region',
            ].map((point) => (
              <li key={point} className="flex gap-3 text-steel-700">
                <CheckCircle
                  size={22}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-accent-500"
                />
                {point}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-500"
          >
            More about HydraTech
            <ArrowRight
              size={14}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative ml-4 mt-4">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-full w-full rounded-xl bg-accent-100"
            />
            <div className="relative overflow-hidden rounded-xl border border-steel-200">
              <img
                src="/images/about-us.jpg"
                alt="HydraTech workshop facility"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
          <p className="mt-8 text-sm font-medium text-steel-500">
            Industries we serve
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {industries.map((ind, i) => (
              <motion.li
                key={ind}
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-full border border-steel-200 bg-steel-50 px-3.5 py-1.5 text-sm text-steel-700"
              >
                {ind}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Rental fleet band */}
      <section className="border-t border-steel-200 bg-steel-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-steel-900 md:text-4xl">
              Rental fleet, ready to mobilize
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-steel-600">
              Hydro-testing skids, flushing rigs, particle counters, filter
              skids, gas boosters and sampling cylinders, maintained in-house
              and available on rental across the region.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {rentalFleet.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.05}>
                <Link to="/rental-fleet" className="group block">
                  <div className="overflow-hidden rounded-lg border border-steel-200 bg-white transition-[box-shadow,transform,border-color] duration-300 group-hover:-translate-y-1 group-hover:border-accent-300 group-hover:shadow-md group-hover:shadow-steel-900/10">
                    <img
                      src={r.image}
                      alt={r.title}
                      loading="lazy"
                      className="aspect-square w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium leading-snug text-steel-700 group-hover:text-steel-900">
                    {r.title}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
