import { Link } from 'react-router-dom'

const LOGO_URL =
  'https://res.cloudinary.com/dxommxt6d/image/upload/v1772266092/icon_oww0vp.png'

const COMPANY_PHONE = '+923131471263'
const WHATSAPP_LINK = 'https://wa.me/923131471263'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const services = [
  'TAM System Development',
  'SaaS MVP Development',
  'Business Dashboards',
  'Company Websites',
  'Automation & Integration',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={LOGO_URL}
                  alt="Minor Group of Technologies"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="font-bold text-white text-sm leading-tight">
                Minor Group
                <br />
                <span className="text-xs font-medium text-gray-400">of Technologies</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Building scalable digital systems that drive business clarity and structured growth.
            </p>

            {/* Quick action buttons */}
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15 transition"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15 transition"
              >
                Call
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm text-gray-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:saimpkf@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  saimpkf@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-1.5 1.5a2.5 2.5 0 003.5 3.5L13 15l7 3v-2a2 2 0 00-1-1.73l-4.5-2.57" />
                </svg>
                <a href={`tel:${COMPANY_PHONE}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {COMPANY_PHONE}
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12a8 8 0 10-16 0 8 8 0 0016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01" />
                </svg>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>

              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400">Pakistan</span>
              </li>

              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-400">Monday – Saturday</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Minor Group of Technologies. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">Built with precision by Minor Group of Technologies.</p>
        </div>
      </div>
    </footer>
  )
}