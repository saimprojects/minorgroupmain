import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Card from '../components/Card.jsx'

const whatWeBuild = [
  {
    icon: '☁️',
    title: 'SaaS Platforms',
    description: 'Multi-role cloud-based systems designed for scalability and long-term operations.',
  },
  {
    icon: '📊',
    title: 'Business Management Systems',
    description: 'Dashboards that manage bookings, payments, CRM, staff, and reporting.',
  },
  {
    icon: '🖥️',
    title: 'Custom Admin Panels',
    description: 'Clean and powerful back-office systems tailored to unique business models.',
  },
  {
    icon: '⚙️',
    title: 'Automation & Workflow Systems',
    description: 'Structured task flows, notifications, role-based access control, and reporting pipelines.',
  },
]

const missionPoints = [
  'Eliminate workflow confusion',
  'Prevent operational leakage',
  'Centralize data management',
  'Improve decision-making visibility',
  'Scale with long-term growth',
]

const whyUs = [
  'Product-First Development Strategy',
  'Clean, Scalable Architecture',
  'Structured Workflow Planning',
  'Business-Oriented Feature Design',
  'Long-Term System Thinking',
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '20+', label: 'Active Clients' },
  { value: '10+', label: 'Industry Niches Served' },
  { value: '100%', label: 'System-Driven Approach' },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Minor Group of Technologies — Scalable Digital Systems'
  }, [])

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6 border border-gray-700 px-3 py-1 rounded-full">
              Minor Group of Technologies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Build Scalable Digital Systems That Drive{' '}
              <span className="text-gray-300">Business Clarity</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
              Minor Group of Technologies is a product-focused technology company building SaaS platforms, management systems, and automation solutions designed to replace operational chaos with structured growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg" variant="primary">
                Book a Free Consultation
              </Button>
              <Button to="/services" size="lg" variant="outline-white">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Who We Are"
                title="Technology Built Around Business Structure"
                align="left"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Minor Group of Technologies is a modern technology company focused on building structured, scalable, and performance-driven digital systems.
                </p>
                <p>
                  We do not just develop software — we design business infrastructure. Our goal is to help companies move from manual processes to organized, trackable, and growth-ready systems.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/about" variant="outline" size="md">
                  Learn More About Us
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle
                label="Our Mission"
                title="Structured Growth Through Digital Systems"
                align="left"
              />
              <ul className="space-y-3 mb-8">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 italic text-sm border-l-4 border-gray-900 pl-4">
                "We build technology that strengthens structure."
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Why Minor Group of Technologies</h3>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-gray-400 italic text-sm border-l-4 border-gray-600 pl-4">
                "We build for sustainability, not shortcuts."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="What We Build"
            title="Products Designed for Real Business Problems"
            subtitle="Every system we build is engineered for clarity, scalability, and long-term operational value."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeBuild.map((item) => (
              <Card
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT — TAM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                Featured Product
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                TAM — Travel Agency Management
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                TAM is a specialized management platform built for travel agencies. It enables agency owners to operate with complete control while maintaining structured team workflows.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Bookings', 'Client Records', 'Payments & Dues', 'Invoices & Receipts', 'Staff Roles', 'Performance Reports'].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              <Button to="/contact" size="lg" variant="primary">
                Request TAM Demo
              </Button>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-3">Built for Travel Agencies</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                TAM centralizes every operational aspect of a travel agency — from the first client inquiry to the final payment reconciliation — into one structured, role-based platform.
              </p>
              <div className="space-y-3">
                {['Multi-role access control', 'Real-time booking management', 'Automated invoice generation', 'Financial reporting dashboard'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT COUNTERS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle
            label="Our Impact"
            title="Growing Portfolio Milestones"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '20+', label: 'Active Clients' },
              { value: '10+', label: 'Industry Niches Served' },
              { value: '∞', label: 'System-Driven Approach' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-400 italic">
            Numbers represent growing portfolio milestones.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business Infrastructure?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Let us design a structured digital system that drives clarity, eliminates chaos, and scales with your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" variant="primary">
              Start Your Project
            </Button>
            <Button to="/contact" size="lg" variant="outline-white">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
