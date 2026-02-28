import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi'
import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  return (
    <div className="space-y-14 sm:space-y-20">
      <section className="section-padding pt-10 sm:pt-14">
        <div className="section-max-width grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
          <div className="animate-fade-in-up space-y-6">
            <span className="badge-soft">Contact & scheduling</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Tell us what&apos;s happening —{' '}
              <span className="bg-gradient-to-r from-brand-primary to-red-500 bg-clip-text text-transparent">
                we&apos;ll handle the rest.
              </span>
            </h1>
            <p className="text-base leading-relaxed text-slate-600">
              Share a few details about your plumbing issue, renovation, or maintenance needs. Our
              coordinators will review your request and respond with timing and clear next steps.
            </p>

            <div className="overflow-hidden rounded-3xl border border-slate-100/80 bg-white/70 backdrop-blur-xl p-5 shadow-brand-soft">
              <p className="text-sm font-semibold text-slate-900">Prefer to talk to a human?</p>
              <p className="mt-1 text-sm text-slate-600">
                Call our dispatch team any time at{' '}
                <a href="tel:+18005550123" className="font-semibold text-brand-primary underline">
                  +1(778) 723-7740
                </a>.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-400 text-white shadow-md">
                  <FiPhoneCall className="text-sm" />
                </div>
                <span>+1(778) 723-7740</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-400 text-white shadow-md">
                  <FiMail className="text-sm" />
                </div>
                <span className="break-all">skyscraper.deve@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-400 text-white shadow-md">
                  <FiMapPin className="text-sm" />
                </div>
                <span>Serving Greater Metro Area & Surrounding Cities</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
