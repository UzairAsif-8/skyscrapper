import { memo } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const ServiceCard = memo(function ServiceCard({ service, index }) {
  if (!service) return null

  return (
    <article className="card-premium-glow group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-100/80 bg-white/70 backdrop-blur-lg shadow-brand-soft hover:-translate-y-2 hover:border-red-200/60 hover:shadow-brand-xl">
      <div className="service-card-images image-gradient-overlay h-48 sm:h-52">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          decoding="async"
          className="img-primary h-full w-full object-cover"
        />
        {service.hoverImage && (
          <img
            src={service.hoverImage}
            alt={`${service.name} detail`}
            loading="lazy"
            decoding="async"
            className="img-hover h-full w-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="badge-soft text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="uppercase tracking-[0.18em]">{service.category}</span>
            </span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-brand-primary transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600">{service.summary}</p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100/80 pt-4">
          <span className="text-[11px] text-slate-400">Explore details</span>
          <Link
            to={`/services/${service.id}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-primary to-red-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-red-500/20 transition-[transform,box-shadow,opacity] duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30 hover:opacity-90"
          >
            <span>View</span>
            <FiArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </article>
  )
})

export default ServiceCard
