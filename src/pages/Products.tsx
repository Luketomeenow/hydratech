import { CheckCircle } from '@phosphor-icons/react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { products } from '../data/site'
import type { Product } from '../data/site'

function Highlights({ items }: { items?: string[] }) {
  if (!items?.length) return null
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((h) => (
        <li
          key={h}
          className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700"
        >
          {h}
        </li>
      ))}
    </ul>
  )
}

function ItemList({ items }: { items?: string[] }) {
  if (!items?.length) return null
  return (
    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
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
  )
}

function FeaturedProduct({ p, flip }: { p: Product; flip?: boolean }) {
  return (
    <article
      id={p.slug}
      className="group grid overflow-hidden rounded-lg border border-steel-200 bg-white transition-[box-shadow,border-color] duration-300 hover:border-accent-300 hover:shadow-lg hover:shadow-steel-900/10 lg:grid-cols-2"
    >
      <div
        className={`flex items-center justify-center overflow-hidden border-b border-steel-100 bg-steel-50 p-10 lg:border-b-0 ${
          flip ? 'lg:order-last lg:border-l' : 'lg:border-r'
        }`}
      >
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="max-h-64 w-auto object-contain transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-steel-900">
          {p.title}
        </h2>
        <Highlights items={p.highlights} />
        {p.description.map((d) => (
          <p key={d.slice(0, 32)} className="mt-4 leading-relaxed text-steel-600">
            {d}
          </p>
        ))}
        <ItemList items={p.items} />
      </div>
    </article>
  )
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article
      id={p.slug}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-steel-200 bg-white transition-[box-shadow,border-color] duration-300 hover:border-accent-300 hover:shadow-lg hover:shadow-steel-900/10"
    >
      <div className="flex h-64 shrink-0 items-center justify-center overflow-hidden border-b border-steel-100 bg-steel-50 p-8">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h2 className="text-xl font-semibold tracking-tight text-steel-900">
          {p.title}
        </h2>
        <Highlights items={p.highlights} />
        {p.description.map((d) => (
          <p
            key={d.slice(0, 32)}
            className="mt-3 text-sm leading-relaxed text-steel-600"
          >
            {d}
          </p>
        ))}
        <ItemList items={p.items} />
      </div>
    </article>
  )
}

export default function Products() {
  const [featured, ...rest] = products
  const gridProducts = rest.slice(0, -1)
  const closing = rest[rest.length - 1]

  return (
    <>
      <PageHeader
        title="Products"
        intro="Power packs, cylinders, testing units and flushing equipment, manufactured and supplied from our Jebel Ali facility."
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <FeaturedProduct p={featured} />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {gridProducts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className="h-full">
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <FeaturedProduct p={closing} flip />
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}
