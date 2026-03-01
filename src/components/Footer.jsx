import { Link } from 'react-router-dom'

const LOGO_URL = 'https://res.cloudinary.com/dxommxt6d/image/upload/v172266092/icon_oww0vp.png'

const COMPANY_PHONE = '+923131471263'
const WHATSAPP_LINK = 'https://wa.me/923131471263'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const services = [
  { name: 'TAM System Development', slug: '/services/tam-system-development' },
  { name: 'SaaS MVP Development', slug: '/services/saas-mvp-development' },
  { name: 'Business Dashboards', slug: '/services/business-dashboard-development' },
  { name: 'Company Websites', slug: '/services/company-website-development' },
  { name: 'Automation & Integration', slug: '/services/automation-system-integration' },
]

// Legal pages data
const legalPages = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookies' },
  { label: 'Disclaimer', to: '/disclaimer' },
  { label: 'Refund Policy', to: '/refund' },
]

// Social media links
const socialLinks = [
  { 
    icon: 'f', 
    href: '#', 
    label: 'Facebook',
    bgColor: 'bg-[#1877F2]'
  },
  { 
    icon: 'in', 
    href: '#', 
    label: 'LinkedIn',
    bgColor: 'bg-[#0A66C2]'
  },
  { 
    icon: 't', 
    href: '#', 
    label: 'Twitter',
    bgColor: 'bg-[#1DA1F2]'
  },
  { 
    icon: 'ig', 
    href: '#', 
    label: 'Instagram',
    bgColor: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]'
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sky-900 text-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Main Footer Grid - Updated to 5 columns for legal pages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand - Column 1 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src={LOGO_URL}
                  alt="Minor Group of Technologies"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <span className="font-bold text-white text-base leading-tight block">
                  Minor Group
                </span>
                <span className="text-xs font-medium text-sky-200">
                  of Technologies
                </span>
              </div>
            </div>

            <p className="text-sm text-sky-200 leading-relaxed mb-4">
              Building scalable digital systems that drive business clarity and structured growth.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-2 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 ${social.bgColor} rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-90 transition-all hover:scale-110 shadow-md`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white/20 px-3 py-2 text-xs font-semibold text-white hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="inline-flex items-center justify-center rounded-lg bg-white/20 px-3 py-2 text-xs font-semibold text-white hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call
              </a>
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-sky-200 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Column 3 */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.slug}
                    className="text-sm text-sky-200 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages - Column 4 (NEW) */}
          <div>
            <Link to="/legal" className="text-sm text-sky-200 hover:text-white">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h4></Link>

            <ul className="space-y-2">
              {legalPages.map((page) => (
                <li key={page.to}>
                  <Link 
                    to={page.to}
                    className="text-sm text-sky-200 hover:text-white transition-colors duration-200"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Column 5 */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              {/* Email */}
              <li className="flex items-start gap-2 group">
                <svg className="w-4 h-4 mt-0.5 text-sky-300 flex-shrink-0 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:saimpkf@gmail.com" className="text-sm text-sky-200 hover:text-white transition-colors break-all">
                  saimpkf@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-2 group">
                <svg className="w-4 h-4 mt-0.5 text-sky-300 flex-shrink-0 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-1.5 1.5a2.5 2.5 0 003.5 3.5L13 15l7 3v-2a2 2 0 00-1-1.73l-4.5-2.57" />
                </svg>
                <a href={`tel:${COMPANY_PHONE}`} className="text-sm text-sky-200 hover:text-white transition-colors">
                  {COMPANY_PHONE}
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-2 group">
                <svg className="w-4 h-4 mt-0.5 text-sky-300 flex-shrink-0 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12a8 8 0 10-16 0 8 8 0 0016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13V8M12 16h.01" />
                </svg>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-sky-200 hover:text-white transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-2 group">
                <svg className="w-4 h-4 mt-0.5 text-sky-300 flex-shrink-0 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-sky-200">Pakistan (Headquarters)</span>
              </li>

              {/* Timing */}
              <li className="flex items-start gap-2 group">
                <svg className="w-4 h-4 mt-0.5 text-sky-300 flex-shrink-0 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-sky-200">Mon – Sat, 9AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Enhanced with legal links */}
        <div className="border-t border-sky-800 mt-12 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-sky-300 text-center lg:text-left">
              &copy; {currentYear} Minor Group of Technologies. All rights reserved.
            </p>

            {/* Legal Links Row */}
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              {legalPages.map((page, index) => (
                <span key={page.to} className="flex items-center">
                  <Link 
                    to={page.to}
                    className="text-sky-300 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                  {index < legalPages.length - 1 && (
                    <span className="ml-3 text-sky-700">•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Built with love */}
            <p className="text-xs text-sky-300 flex items-center gap-1">
              Built with 
              <svg className="w-3.5 h-3.5 text-red-400 mx-0.5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              by Minor Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}