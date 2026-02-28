import { memo } from 'react'
import { Link } from 'react-router-dom'
import { FiPhoneCall, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

const year = new Date().getFullYear()

const socialLinks = [
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
]

const footerServices = [
  { name: 'Drain Cleaning', id: 'drain-cleaning' },
  { name: 'Leak Repair', id: 'leak-repair' },
  { name: 'Water Heaters', id: 'water-heater-installation' },
  { name: 'Pipe Repair', id: 'pipe-repair' },
  { name: 'Toilet Installation', id: 'toilet-installation' },
  { name: 'Fixture Installation', id: 'fixture-installation' },
  { name: 'Sewer Line Repair', id: 'sewer-line-repair' },
  { name: 'Water Filtration', id: 'water-filtration' },
]

function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-br from-brand-primaryDark via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14 lg:px-12 lg:pb-14 lg:pt-16 xl:px-20">
        <div className="mx-auto max-w-6xl">
          {/* Main grid: 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
            {/* Brand — full width on mobile, then grid takes over */}
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[10px] font-bold sm:text-sm">
                  <img src="/LogoWhite.png" alt="Sky Scrapper" className="h-full w-full object-contain" />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold tracking-tight text-white">Skyscraper</span>
                  <span className="text-[11px] text-slate-400">Plumbing & Heating</span>
                </div>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                Fast, meticulous, and reliable plumbing solutions backed by licensed experts and a
                satisfaction guarantee.
              </p>
              <span className="inline-block rounded-full bg-emerald-400/10 px-3 py-1.5 text-[11px] text-emerald-300 ring-1 ring-emerald-400/30">
                Trusted plumbing professionals
              </span>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Company
              </h3>
              <ul className="space-y-1.5 sm:space-y-2.5">
                <li>
                  <Link to="/about" className="inline-block py-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="inline-block py-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="inline-block py-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
                    Request a Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Services
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-400 sm:space-y-2.5">
                {footerServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-block py-2 text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Contact
              </h3>
              <div className="space-y-3 text-slate-400">
                <a
                  href="tel:+17787237740"
                  className="flex items-center gap-2.5 py-2 text-sm font-semibold text-red-200 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded min-h-[44px]"
                  aria-label="Call Sky Scrapper"
                >
                  <FiPhoneCall className="shrink-0 text-base text-emerald-300" />
                  <span>+1 (778) 723-7740</span>
                </a>
                <a
                  href="mailto:skyscraper.deve@gmail.com"
                  className="flex items-start gap-2.5 py-2 min-w-0 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="Email Sky Scrapper"
                >
                  <FiMail className="mt-0.5 shrink-0 text-base text-red-300" />
                  <span className="break-all text-sm">skyscraper.deve@gmail.com</span>
                </a>
                <div className="flex items-start gap-2.5 py-2">
                  <FiMapPin className="mt-0.5 shrink-0 text-base text-red-300" />
                  <span className="text-sm">Serving Greater Metro Area &amp; Surrounding Cities</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10 transition-[transform,box-shadow,opacity] duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    aria-label={social.label}
                  >
                    <social.icon className="text-base" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-10 mt-10 flex flex-col items-center gap-4 border-t border-slate-800/60 pt-6 text-center sm:mt-12 sm:flex-row sm:justify-between sm:text-left">
            <p className="text-[11px] text-slate-500 order-2 sm:order-1">
              &copy; {year} Sky Scrapper Plumbing &amp; Heating. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 order-1 sm:order-2 sm:gap-6">
              <Link
                to="/privacy-policy"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center py-2.5 px-1 text-[11px] text-slate-500 transition-colors hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center py-2.5 px-1 text-[11px] text-slate-500 transition-colors hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="relative z-10 mt-4 pt-2 text-center text-[11px] text-slate-500 sm:text-left">
            Crafted by Axiolink Systems (Pvt) Ltd
          </p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
