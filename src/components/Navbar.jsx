import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/blogs', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 16)
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 bg-transparent transition-all duration-300">
      <div className="px-3 py-2 sm:px-6 sm:py-3 lg:px-10">
        <div
          className={`section-max-width flex items-center justify-between rounded-full border px-3 py-2 sm:px-5 sm:py-2.5 text-sm transition-all duration-300 ${
            isScrolled
              ? 'border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5'
              : 'border-slate-100/60 bg-white/80 backdrop-blur-lg shadow-sm'
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 rounded-full px-1.5 py-1 transition-colors hover:bg-slate-50/60 min-w-0"
          >
            <span className="size-10 text-[10px] sm:text-sm font-bold">
              <img src="/logored.png" alt="Logo" />
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-[14px] sm:text-[18px] font-bold tracking-tight text-slate-900 truncate leading-tight">
                Skyscraper
              </span>
              <span className="text-[10px] sm:text-[12px] font-medium text-slate-400 truncate leading-tight">
                Plumbing & Heating
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-[14px] sm:text-[16px] font-medium text-slate-600 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group relative px-1 py-1 transition-colors duration-300 ${
                    isActive ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span
                      className={`pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left rounded-full bg-gradient-to-r from-brand-primary to-red-400 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="btn-primary ripple-button hidden px-4 py-2 text-[11px] sm:inline-flex"
            >
              Request a Quote
            </Link>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {open ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-1.5 md:hidden animate-fade-in">
            <div className="section-max-width rounded-2xl border border-slate-100/80 bg-white/95 backdrop-blur-xl px-3 py-3 shadow-xl">
              <nav className="flex flex-col gap-0.5 text-[14px] font-medium text-slate-700">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center rounded-xl px-3 py-2 transition-all duration-200 ${
                        isActive
                          ? 'bg-red-50 text-brand-primary font-semibold'
                          : 'hover:bg-slate-50 hover:text-brand-primary'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="mt-1.5 flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-primary to-red-500 px-4 py-2.5 text-[14px] font-semibold text-white shadow-md"
                >
                  Request a Quote
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}