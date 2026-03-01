import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <section className="section-padding pt-24 sm:pt-28 pb-12">
        <div className="section-max-width">
          <Link
            to="/"
            className="text-sm font-medium text-brand-primary hover:underline mb-6 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-slate-500">Last updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding pt-0 pb-20">
        <div className="section-max-width max-w-3xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the Skyscraper Plumbing & Heating website and services, you agree to be bound by these Terms of Service.
              If you do not agree, please do not use our website or services.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">2. Services</h2>
            <p className="text-slate-600 leading-relaxed">
              Skyscraper provides plumbing and heating services as described on our website. We reserve the right to modify, suspend, or discontinue any service at any time.
              Quotes and estimates are valid for the period stated and may be subject to change after inspection.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">3. Booking and Payment</h2>
            <p className="text-slate-600 leading-relaxed">
              Appointments are subject to availability. You agree to provide accurate contact and property information when booking.
              Payment terms will be communicated at the time of service or in your estimate. We may require a deposit for larger projects.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">4. Cancellation and Rescheduling</h2>
            <p className="text-slate-600 leading-relaxed">
              Please provide reasonable notice if you need to cancel or reschedule. Repeated no-shows or late cancellations may result in fees or refusal of future bookings,
              as outlined in our appointment policy.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">5. Warranties and Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              We stand behind our workmanship as described in our guarantees. Our liability is limited to the scope of the work performed and the amount paid for that work.
              We are not liable for indirect, incidental, or consequential damages arising from the use of our services or website.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">6. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property of Skyscraper or its licensors and is protected by applicable intellectual property laws.
              You may not reproduce, distribute, or use our content without prior written permission.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">7. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms are governed by the laws of the jurisdiction in which Skyscraper operates. Any disputes shall be resolved in the courts of that jurisdiction.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">8. Contact</h2>
            <p className="text-slate-600 leading-relaxed">
              For questions about these Terms of Service, contact us at{' '}
              <a href="mailto:skyscraper.deve@gmail.com" className="text-brand-primary hover:underline">skyscraper.deve@gmail.com</a> or +1 (778) 723-7740.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
