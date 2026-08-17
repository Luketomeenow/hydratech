import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  MapPin,
  Phone,
  Printer,
  EnvelopeSimple,
  PaperPlaneTilt,
  CheckCircle,
  WarningCircle,
  SpinnerGap,
  LinkedinLogo,
} from '@phosphor-icons/react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { company } from '../data/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const inputClasses =
  'w-full rounded-md border border-steel-300 bg-white px-4 py-2.5 text-steel-900 placeholder:text-steel-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/25'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        intro="Our dedicated team is ready to help you anytime. Reach us by phone, email or the form below."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[2fr_3fr]">
        <Reveal>
          <h2 className="text-xl font-semibold text-steel-900">Head Office</h2>
          <ul className="mt-6 space-y-5 text-steel-700">
            <li className="flex gap-3.5">
              <MapPin size={24} className="shrink-0 text-accent-600" />
              <span>
                PO Box 18214
                <br />
                Jebel Ali Free Zone
                <br />
                Dubai, UAE
              </span>
            </li>
            <li className="flex items-center gap-3.5">
              <Phone size={24} className="shrink-0 text-accent-600" />
              <a
                className="transition-colors hover:text-accent-600"
                href={`tel:${company.phone.replace(/\s/g, '')}`}
              >
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-3.5">
              <Printer size={24} className="shrink-0 text-accent-600" />
              Fax {company.fax}
            </li>
            <li className="flex items-center gap-3.5">
              <EnvelopeSimple size={24} className="shrink-0 text-accent-600" />
              <a
                className="transition-colors hover:text-accent-600"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3.5">
              <LinkedinLogo size={24} className="shrink-0 text-accent-600" />
              <a
                className="transition-colors hover:text-accent-600"
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                HydraTech on LinkedIn
              </a>
            </li>
          </ul>

          <div className="mt-10 overflow-hidden rounded-lg border border-steel-200">
            <iframe
              title="HydraTech ME location, Jebel Ali Free Zone, Dubai"
              src="https://www.google.com/maps?q=Jebel+Ali+Free+Zone,+Dubai,+UAE&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-steel-200 bg-steel-50 p-7 md:p-9">
            <h2 className="text-xl font-semibold text-steel-900">
              Send us a message
            </h2>

            {status === 'sent' ? (
              <div className="mt-6 flex items-start gap-3 rounded-md border border-accent-300 bg-accent-100 p-5 text-steel-800">
                <CheckCircle size={24} weight="fill" className="shrink-0 text-accent-600" />
                <div>
                  <p className="font-semibold">Message sent</p>
                  <p className="mt-1 text-sm">
                    Thank you for contacting HydraTech. Our team will get back
                    to you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="mt-6 grid gap-5 sm:grid-cols-2"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden aria-hidden="true">
                  <label>
                    Leave this field empty: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-steel-800">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-steel-800">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-steel-800">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" required className={inputClasses} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-steel-800">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={6} required className={inputClasses} />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2.5 rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-800 sm:col-span-2">
                    <WarningCircle size={20} weight="fill" className="shrink-0 text-red-600" />
                    Something went wrong sending your message. Please try again,
                    or email us directly at {company.email}.
                  </div>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-sheen inline-flex items-center gap-2 rounded-md bg-accent-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-500 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>
                        <SpinnerGap size={16} weight="bold" className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send Message
                        <PaperPlaneTilt size={16} weight="bold" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  )
}
