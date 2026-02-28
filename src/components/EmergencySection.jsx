import { FiPhoneCall, FiAlertTriangle } from 'react-icons/fi'

export default function EmergencySection() {
  return (
    <section className="section-padding">
      <div className="section-max-width relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-primaryDark via-red-700 to-slate-900 p-7 sm:p-9 shadow-brand-xl">
        <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-red-400/20 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3 max-w-xl text-slate-50">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-100 ring-1 ring-rose-400/40">
              <FiAlertTriangle className="text-sm" />
              <span>24/7 emergency response</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Burst pipe? Sewer backup? Water everywhere?
            </h2>
            <p className="text-sm text-slate-200/90">
              Our live dispatch team can have a licensed technician routed to you in minutes—not
              hours. We stabilize the emergency first, then walk you through clear, calm next steps.
            </p>
          </div>

          <div className="space-y-3 text-slate-50">
            <div className="glow-pulse inline-flex rounded-full bg-emerald-400/15 px-4 py-2 text-xs font-medium text-emerald-100 ring-1 ring-emerald-300/40">
              <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Currently accepting emergency calls
            </div>
            <a
              href="tel:+18005550123"
              className="btn-primary ripple-button inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-2xl shadow-emerald-400/40 hover:bg-slate-50 sm:w-auto"
            >
              <FiPhoneCall className="text-base" />
              <span>Call Emergency Line</span>
            </a>
            <p className="text-[11px] text-slate-200/80">
              No call center scripts. You speak directly with our in-house dispatch team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

