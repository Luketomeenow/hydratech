import { CheckCircle } from '@phosphor-icons/react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { about, company, industries } from '../data/site'

export default function About() {
  return (
    <>
      <PageHeader
        title="About HydraTech"
        intro={`A subsidiary of ${company.parent}, delivering specialist hydraulic engineering from Jebel Ali Free Zone since ${company.founded}.`}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="space-y-5 leading-relaxed text-steel-600">
            {about.intro.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-semibold text-steel-900">
            Our commitment to customers
          </h2>
          <p className="mt-3 leading-relaxed text-steel-600">
            The company is committed to customer satisfaction and continual
            improvement, enabled through:
          </p>
          <ul className="mt-4 space-y-3">
            {about.commitments.map((c) => (
              <li key={c} className="flex gap-3 text-steel-700">
                <CheckCircle
                  size={22}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-accent-500"
                />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <img
            src="/images/about-us.jpg"
            alt="HydraTech facility and equipment"
            className="w-full rounded-lg border border-steel-200 object-cover"
          />

          <div className="mt-8 rounded-lg border border-steel-200 bg-steel-50 p-6">
            <h3 className="font-semibold text-steel-900">Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-steel-600">
              {company.certifications.map((c) => (
                <li key={c} className="flex gap-2.5">
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-accent-500"
                  />
                  {c} certified via {company.parent}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-lg border border-steel-200 bg-steel-50 p-6">
            <h3 className="font-semibold text-steel-900">Industries we serve</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {industries.map((ind) => (
                <li
                  key={ind}
                  className="rounded-full border border-steel-200 bg-white px-3.5 py-1.5 text-sm text-steel-700"
                >
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Vision & values */}
      <section className="border-t border-steel-200 bg-steel-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-steel-900">
              Our Vision
            </h2>
            <p className="mt-4 leading-relaxed text-steel-600">{about.vision}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl font-semibold tracking-tight text-steel-900">
              Our Values
            </h2>
            <p className="mt-4 leading-relaxed text-steel-600">{about.values}</p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
