import { useMemo } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import { getServiceById, services } from '../data/services.js'

export default function ServiceDetails() {
  const { serviceId } = useParams()
  const navigate = useNavigate()

  const service = useMemo(() => getServiceById(serviceId), [serviceId])

  if (!service) {
    return (
      <section className="section-padding pt-14">
        <div className="section-max-width space-y-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Service not found
          </h1>
          <p className="text-sm text-slate-600">
            The service you're looking for doesn't exist or may have been updated.
          </p>
          <button
            type="button"
            onClick={() => navigate('/services')}
            className="btn-primary ripple-button mx-auto mt-2 text-sm"
          >
            Back to all services
          </button>
        </div>
      </section>
    )
  }

  const related = useMemo(
    () => services.filter((s) => s.id !== service.id && s.category === service.category),
    [service],
  )

  return (
    <div className="space-y-14 sm:space-y-20">
      <section className="section-padding pt-10 sm:pt-14">
        <div className="section-max-width">
          {/* Hero image */}
          <div className="animate-fade-in relative mb-10 overflow-hidden rounded-3xl shadow-brand-xl">
            <img
              src={service.image}
              alt={service.name}
              loading="lazy"
              decoding="async"
              className="h-56 w-full object-cover sm:h-72 lg:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm ring-1 ring-white/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {service.category} plumbing
              </span>
              <h1 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {service.name}
              </h1>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
            <div className="animate-fade-in-up space-y-5">
              <p className="text-base leading-relaxed text-slate-700">{service.description}</p>
              <div className="rounded-2xl border border-red-100/80 bg-gradient-to-r from-red-50/80 to-red-50/60 p-5 text-sm text-slate-700 backdrop-blur-sm">
                <span className="font-semibold text-brand-primary">Highlight:</span>{' '}
                {service.heroHighlight}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/contact" className="btn-glow ripple-button text-sm">
                  Request this service
                </Link>
                <a
                  href="tel:+18005550123"
                  className="btn-outline ripple-button text-sm"
                >
                  Call for scheduling
                </a>
              </div>
            </div>

            <aside className="overflow-hidden rounded-3xl border border-slate-100/80 bg-white/70 backdrop-blur-xl p-6 shadow-brand-soft">
              <h2 className="text-sm font-semibold tracking-tight text-slate-900">
                What this service typically includes
              </h2>
              <ul className="mt-4 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-600">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-400 text-white">
                      <FiCheck className="text-[10px]" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding pt-0 pb-20">
          <div className="section-max-width space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Related services
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  to={`/services/${item.id}`}
                  className="group overflow-hidden rounded-2xl border border-slate-100/80 bg-white/70 backdrop-blur-lg shadow-brand-soft transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-brand-xl"
                >
                  <div className="image-gradient-overlay h-36">
                    <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{item.category}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-brand-primary transition-colors">{item.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
