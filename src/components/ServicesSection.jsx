import { memo, useMemo } from 'react'
import ServiceCard from './ServiceCard.jsx'
import { services } from '../data/services.js'
import useReveal from '../utils/useReveal.js'

function ServicesSection() {
  const ref = useReveal()
  const featured = useMemo(() => services.slice(0, 9), [])

  return (
    <section id="services" className="section-padding">
      <div ref={ref} className="reveal section-max-width space-y-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl space-y-3">
            <span className="badge-soft">Comprehensive plumbing expertise</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Premium plumbing services designed for modern homes & businesses.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              From rapid response to long-term system upgrades, Sky Scrapper delivers
              immaculate work that feels as thoughtful as it looks.
            </p>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-slate-500">
            Every service visit includes a multi-point health check, meticulous clean-up, and
            transparent documentation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(ServicesSection)
