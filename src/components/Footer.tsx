import { Link } from 'react-router-dom'
import { MapPin, Phone, EnvelopeSimple, Printer, LinkedinLogo } from '@phosphor-icons/react'
import { company, services } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-steel-950 text-steel-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/logo.png"
            alt="HydraTech ME"
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {company.tagline}. A subsidiary of {company.parent}, serving the oil
            and gas industry since {company.founded}.
          </p>
          <p className="mt-3 text-xs text-steel-400">
            Certified {company.certifications.join(', ')}
          </p>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HydraTech ME on LinkedIn"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-steel-800 text-steel-300 transition-colors hover:bg-accent-600 hover:text-white"
          >
            <LinkedinLogo size={20} weight="fill" />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link className="link-underline transition-colors hover:text-accent-300" to="/about">About Us</Link></li>
            <li><Link className="link-underline transition-colors hover:text-accent-300" to="/products">Products</Link></li>
            <li><Link className="link-underline transition-colors hover:text-accent-300" to="/services">Services</Link></li>
            <li><Link className="link-underline transition-colors hover:text-accent-300" to="/rental-fleet">Rental Fleet</Link></li>
            <li><Link className="link-underline transition-colors hover:text-accent-300" to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  className="link-underline transition-colors hover:text-accent-300"
                  to={`/services/${s.slug}`}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Head Office
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent-400" />
              {company.address}
            </li>
            <li className="flex gap-2.5">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <a
                className="link-underline transition-colors hover:text-accent-300"
                href={`tel:${company.phone.replace(/\s/g, '')}`}
              >
                {company.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Printer size={18} className="mt-0.5 shrink-0 text-accent-400" />
              Fax {company.fax}
            </li>
            <li className="flex gap-2.5">
              <EnvelopeSimple size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <a
                className="link-underline transition-colors hover:text-accent-300"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-800">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-steel-400 sm:px-6">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
