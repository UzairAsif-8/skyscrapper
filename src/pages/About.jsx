import StatsSection from '../components/StatsSection.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import { FiCheck } from 'react-icons/fi'

const highlights = [
  'A single, clear point of contact from start to finish.',
  'Detailed digital estimates and project photos for your records.',
  'Technicians who treat your home like a carefully designed space.',
  'Post-visit check-ins to ensure everything continues to run smoothly.',
]

export default function About() {
  return (
    <div className="space-y-6">
      <section className="section-padding pt-10 sm:pt-14">
        <div className="section-max-width">
          {/* Hero banner */}
          <div className="animate-fade-in relative mb-10 overflow-hidden rounded-3xl shadow-brand-xl">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80"
              alt="Skyscraper Plumbing and Heating team"
              loading="lazy"
              decoding="async"
              className="h-56 w-full object-cover sm:h-64 lg:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="badge-soft mb-2 bg-white/20 text-white ring-white/20 backdrop-blur-sm">About Skyscraper</span>
              <h1 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.1]">
                A modern plumbing company built on old-school craftsmanship.
              </h1>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
            <div className="animate-fade-in-up space-y-5">
              <p className="text-base leading-relaxed text-slate-700">
                Skyscraper was founded by technicians who were tired of rushed appointments, vague
                pricing, and messy projects. We set out to create a premium, detail-obsessed
                plumbing experience — one that feels more like working with a design studio than a
                typical trade contractor.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Today, our teams serve homeowners, property managers, and commercial partners
                across the region with the same core values: clarity, calm, and uncompromising
                workmanship.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-100/80 bg-white/70 backdrop-blur-xl p-6 shadow-brand-soft">
              <h2 className="text-sm font-semibold tracking-tight text-slate-900">
                What it feels like to work with us
              </h2>
              <ul className="mt-4 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-600">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-400 text-white">
                      <FiCheck className="text-[10px]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />
      <StatsSection />
      <div className="section-divider" />
      <WhyChooseUs />
    </div>
  )
}
