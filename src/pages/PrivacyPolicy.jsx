import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-slate-500">Last updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding pt-0 pb-20">
        <div className="section-max-width max-w-3xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Sky Scrapper Plumbing & Heating (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              We may collect information you provide directly (such as name, email, phone number, and address when you request a quote or contact us),
              information collected automatically (such as IP address, browser type, and usage data), and information from cookies and similar technologies.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services; to respond to your inquiries and schedule appointments;
              to send you updates and marketing communications (where you have opted in); and to comply with legal obligations.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">4. Sharing of Information</h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell your personal information. We may share your information with service providers who assist our operations (e.g., scheduling, email),
              when required by law, or to protect our rights and safety.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">5. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">6. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data, or to object to certain processing.
              To exercise these rights, please contact us using the details in the footer.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">7. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about this Privacy Policy or our practices, please contact us at{' '}
              <a href="mailto:skyscraper.deve@gmail.com" className="text-brand-primary hover:underline">skyscraper.deve@gmail.com</a> or call +1 (778) 723-7740.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
