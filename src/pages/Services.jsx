import { useMemo, useState } from 'react'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/services.js'

const filters = ['All', 'Residential', 'Commercial']

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return services
    return services.filter((s) => s.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="section-padding pt-10 sm:pt-14">
        <div className="section-max-width space-y-8">
          <div className="animate-fade-in-up max-w-2xl space-y-4">
            <span className="badge-soft">Service catalog</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Plumbing solutions for every{' '}
              <span className="bg-gradient-to-r from-brand-primary to-red-500 bg-clip-text text-transparent">
                space and scenario.
              </span>
            </h1>
            <p className="text-base leading-relaxed text-slate-600">
              From quick fixes to full-scale projects, Sky Scrapper offers a meticulously designed
              service stack for homeowners, property managers, and commercial operators.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'border-red-500 bg-gradient-to-r from-brand-primary to-red-500 text-white shadow-md shadow-red-500/20'
                    : 'border-slate-200 bg-white/70 text-slate-600 hover:border-slate-300 hover:bg-white hover:shadow-sm'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
