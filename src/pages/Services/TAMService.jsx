import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button.jsx'
import SectionTitle from '../../components/SectionTitle.jsx'
import Card from '../../components/Card.jsx'

// Custom Icons as Components (for better visuals)
const CheckIcon = () => (
  <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const FeatureIcon = ({ children }) => (
  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center text-2xl">
    {children}
  </div>
)

export default function TAMService() {
  useEffect(() => {
    document.title = 'TAM – Travel Agency Management Software in Pakistan | Minor Group'
  }, [])

  // Core features data
  const coreFeatures = [
    {
      icon: '📋',
      title: 'Booking Management System',
      items: [
        'Create & manage Umrah/Hajj bookings',
        'Document attachment system',
        'Group tracking for family/teams',
        'Booking history & status updates'
      ]
    },
    {
      icon: '🛂',
      title: 'Visa Tracking Module',
      items: [
        'Multi-stage visa processing',
        'Real-time status updates',
        'Client notification system',
        'Document expiry alerts'
      ]
    },
    {
      icon: '💰',
      title: 'Payment & Accounting',
      items: [
        'Payment tracking dashboard',
        'Pending balance alerts',
        'Automated invoice generation',
        'Commission management'
      ]
    },
    {
      icon: '👥',
      title: 'Multi-User Role System',
      items: [
        'Owner dashboard (full control)',
        'Manager panel (operations)',
        'Agent panel (bookings)',
        'Accountant access (finance)'
      ]
    },
    {
      icon: '📊',
      title: 'Analytics & Reports',
      items: [
        'Monthly revenue reports',
        'Agent performance tracking',
        'Booking trends overview',
        'Financial summaries'
      ]
    },
    {
      icon: '🔐',
      title: 'Secure Access Control',
      items: [
        'Role-based authentication',
        'Agency status verification',
        'Active agencies only',
        'Secure API architecture'
      ]
    }
  ]

  // Tech stack data
  const techStack = [
    { category: 'Backend', items: ['Django', 'REST APIs', 'PostgreSQL'] },
    { category: 'Frontend', items: ['React', 'TailwindCSS', 'Context API'] },
    { category: 'Security', items: ['JWT Auth', 'Role-Based Access', 'Data Encryption'] },
    { category: 'Deployment', items: ['Cloud Ready', 'Scalable', 'Optimized'] }
  ]

  // Problems solved
  const problems = [
    'Manual Excel sheets & registers',
    'Data loss & inconsistency',
    'Delayed client follow-ups',
    'Accounting errors',
    'Lack of transparency',
    'Difficult team coordination'
  ]

  // Business impact stats
  const impacts = [
    { value: '40%', label: 'Operational Time Saved' },
    { value: '100%', label: 'Digital Transparency' },
    { value: '24/7', label: 'System Availability' },
    { value: '∞', label: 'Scalable Growth' }
  ]

  return (
    <div className="pt-16">
      {/* HERO SECTION - TAM Specific */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 text-white overflow-hidden">
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-sky-200 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">TAM System</span>
            </div>

            {/* Product badge */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-6 border border-sky-400/30 px-3 py-1 rounded-full bg-sky-800/30 backdrop-blur-sm">
              ✈️ Featured Product
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              TAM – Travel Agency Management Software Built for Pakistani Agencies
            </h1>

            <p className="text-xl text-sky-100 leading-relaxed mb-8 max-w-3xl">
              Complete SaaS solution for Umrah, Hajj, and Visa-based agencies to manage bookings, 
              visa processing, payments, and multi-agent operations in one powerful system.
            </p>

            {/* Live demo link */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button to="/contact" size="lg" variant="primary">
                Request Demo Access
              </Button>
              <a 
                href="https://tam.minorgroup.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition-all"
              >
                <span>View Live Portal</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-sky-200">
              <span className="flex items-center gap-1">
                <CheckIcon /> Secure Login System
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Active Agencies Only
              </span>
              <span className="flex items-center gap-1">
                <CheckIcon /> Real-time Status
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION / PROBLEM SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="The Challenge"
                title="Why Travel Agencies Need TAM"
                align="left"
              />
              <p className="text-lg text-sky-700 mb-6 leading-relaxed">
                Travel agencies in Pakistan face daily operational challenges — managing bookings, 
                tracking visa processes, handling payments, and coordinating with multiple agents.
              </p>
              <p className="text-sky-600 mb-8">
                To solve this problem, I developed <span className="font-semibold text-sky-900">TAM (Travel Agency Management Software)</span> — 
                a complete SaaS solution designed specifically for Umrah, Hajj, and Visa-based agencies.
              </p>

              {/* Problems Grid */}
              <div className="grid grid-cols-2 gap-3">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-sky-700">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    {problem}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats / Impact Preview */}
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100 shadow-xl">
              <div className="text-6xl mb-6">✈️</div>
              <h3 className="text-2xl font-bold text-sky-900 mb-4">Project Overview</h3>
              <p className="text-sky-700 mb-6">
                TAM is a custom-built web-based management system that helps agencies:
              </p>
              <ul className="space-y-3">
                {[
                  'Manage client bookings',
                  'Track visa status',
                  'Monitor payments',
                  'Generate invoices',
                  'Control agent access',
                  'View financial reports'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sky-800">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-sky-500 italic">
                Built as a scalable SaaS architecture with multi-role dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Powerful Features"
            title="Everything You Need to Run Your Agency"
            subtitle="Complete toolkit for modern travel agency management"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                items={feature.items}
                variant="bordered"
                className="h-full hover:border-sky-500 transition-all hover:shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY TAM IS DIFFERENT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-sky-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-sky-100">Why TAM is Different</h3>
                <p className="text-sky-200 mb-6">
                  Unlike generic CRM systems, TAM is built specifically for:
                </p>
                <ul className="space-y-4">
                  {[
                    'Pakistani travel agencies',
                    'Umrah & Hajj operators',
                    'Visa processing businesses',
                    'Multi-agent setups',
                    'Localized workflow & PKR-based financial handling'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sky-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionTitle
                label="Localized Excellence"
                title="Built for Pakistani Travel Industry"
                align="left"
              />
              <p className="text-sky-700 mb-6">
                TAM understands the unique workflow of Pakistani travel agencies — 
                from PKR-based accounting to multi-agent commission structures.
              </p>
              
              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {impacts.map((stat, i) => (
                  <div key={i} className="bg-sky-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-sky-900">{stat.value}</div>
                    <div className="text-xs text-sky-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Technology Stack"
            title="Built for Performance & Scalability"
            subtitle="Modern, robust architecture that grows with your business"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-sky-100 shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-sky-900 mb-3">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-sky-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Architecture note */}
          <div className="mt-8 text-center text-sm text-sky-600">
            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Secure API Architecture • Cloud Deployment Ready • Scalable Database Design
            </span>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Real Results"
                title="Business Impact of TAM"
                align="left"
              />
              <p className="text-sky-700 mb-8">
                Agencies using TAM transform their operations from manual chaos to digital clarity.
              </p>

              <div className="space-y-4">
                {[
                  { value: '40%', label: 'Operational time saved', desc: 'Staff focuses on growth, not paperwork' },
                  { value: '100%', label: 'Digital transparency', desc: 'Every transaction is tracked and visible' },
                  { value: '24/7', label: 'System availability', desc: 'Access from anywhere, anytime' },
                  { value: '0', label: 'Data loss', desc: 'Centralized database with backups' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-sky-50 rounded-lg">
                    <div className="text-2xl font-bold text-sky-900 min-w-[60px]">{item.value}</div>
                    <div>
                      <div className="font-semibold text-sky-900">{item.label}</div>
                      <div className="text-sm text-sky-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-sky-100">What Agencies Achieve</h3>
              <ul className="space-y-4">
                {[
                  'Save 40% operational time',
                  'Reduce payment mismanagement',
                  'Increase booking efficiency',
                  'Monitor complete business flow',
                  'Better team coordination',
                  'Professional client experience'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sky-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-lg">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-2xl font-bold text-sky-900 mb-4">My Role in This Project</h3>
              <p className="text-sky-700 mb-6">
                As a full-stack web developer, I owned the entire development lifecycle:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'System architecture',
                  'Database schema design',
                  'Backend API development',
                  'Frontend dashboards',
                  'Role-based security',
                  'Performance optimization',
                  'UX design',
                  'Cloud deployment'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-sky-800">
                    <CheckIcon />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle
                label="Future Scope"
                title="What's Next for TAM"
                align="left"
              />
              <p className="text-sky-700 mb-6">
                TAM is continuously evolving with planned features:
              </p>
              <ul className="space-y-3">
                {[
                  { feature: 'Online payment gateway integration', status: 'In Development' },
                  { feature: 'SMS notification system', status: 'Planned' },
                  { feature: 'API integration for visa tracking', status: 'Research' },
                  { feature: 'Mobile app version', status: 'Future Release' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-sky-100">
                    <span className="text-sky-800 font-medium">{item.feature}</span>
                    <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded-full">{item.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-900 to-sky-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-6xl mb-6">✈️</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Travel Agency?
          </h2>
          <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
            If you're a travel agency owner looking to digitize your operations, 
            TAM can help streamline your entire workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" variant="primary">
              Request Demo Access
            </Button>
            <Button to="/contact" size="lg" variant="outline-white">
              Contact for Collaboration
            </Button>
          </div>

          {/* Live portal link */}
          <div className="mt-8">
            <a 
              href="https://tam.minorgroup.site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-200 hover:text-white transition-colors text-sm"
            >
              <span>View live portal</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}