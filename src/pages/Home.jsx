import HeroCanvas from '../components/HeroCanvas.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import StatsSection from '../components/StatsSection.jsx'
import ProcessSection from '../components/ProcessSection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="space-y-6">
      {/* ── HERO — full-width immersive header ────────── */}
      <section className="relative -mt-[52px] sm:-mt-[72px] flex min-h-0 lg:min-h-[100svh] items-center overflow-hidden">
        {/* Canvas background — covers entire hero */}
        <HeroCanvas />

        {/* Gradient overlays on top of canvas */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 pt-20 pb-12 sm:pt-24 sm:pb-16 sm:px-6 lg:py-28 lg:px-12 xl:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl space-y-4 sm:space-y-8">
              {/* Badge */}
              <div
                className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-medium text-slate-600 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
                style={{ animationDelay: '0.1s' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Licensed experts · Trusted across the metro</span>
              </div>

              {/* Headline with animated gradient */}
              <h1
                className="animate-fade-in-up text-[26px] font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ lineHeight: 1.1 }}
              >
                Professional{' '}
                <span className="hero-gradient-text">
                  Plumbing & Heating Services
                </span>{' '}
                You Can Trust
              </h1>

              {/* Subtext — staggered fade-in */}
              <p
                className="animate-fade-in-up max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg"
                style={{ animationDelay: '0.2s' }}
              >
                Sky Scrapper brings agency-level polish to essential plumbing &amp; heating work — fast response,
                quiet craftsmanship, and transparent pricing for homeowners and businesses
                who care about the details.
              </p>

              {/* CTA Buttons */}
              <div
                className="animate-fade-in-up flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                style={{ animationDelay: '0.35s' }}
              >
                <Link
                  to="/contact"
                  className="btn-glow ripple-button group inline-flex items-center gap-2 text-sm"
                >
                  <span>Request a Quote</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:+18005550123"
                  className="btn-outline ripple-button inline-flex items-center gap-2 text-sm"
                >
                  <FiPhoneCall className="text-red-500" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Trust signals */}
              <div
                className="animate-fade-in flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1.5 text-[10px] sm:text-[11px] text-slate-500"
                style={{ animationDelay: '0.5s' }}
              >
                <div>
                  <span className="font-semibold text-slate-700">Same-day</span> dispatch
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Clean, respectful</span> technicians
                </div>
                <div>
                  <span className="font-semibold text-slate-700">100%</span> satisfaction guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade to page */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </section>

      <div className="section-divider" />

      <ServicesSection />
      <div className="section-divider" />
      <WhyChooseUs />
      <StatsSection />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <Testimonials />

      <section className="section-padding pb-24">
        <ContactForm compact />
      </section>
    </div>
  )
}
