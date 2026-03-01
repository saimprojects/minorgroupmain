import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Card from '../components/Card.jsx'

const services = [
  {
    icon: '✈️',
    title: 'TAM Website & System Development',
    description: 'Designed for clarity and operational control.',
    slug: 'tam-system-development',
    items: [
      'Landing website',
      'Admin dashboard UI',
      'Role-based panels',
      'Booking and payment structure',
      'Reports interface',
      'Client management system',
    ],
  },
  {
    icon: '☁️',
    title: 'SaaS MVP Development',
    description: 'From concept to a fully functional, scalable SaaS product.',
    slug: 'saas-mvp-development',
    items: [
      'User authentication flows',
      'Role-based dashboards',
      'Structured UI architecture',
      'Scalable system planning',
      'Future expansion readiness',
    ],
  },
  {
    icon: '📊',
    title: 'Business Dashboard Development',
    description: 'Centralize your business operations into one powerful dashboard.',
    slug: 'business-dashboard-development',
    items: [
      'Orders management',
      'Inventory tracking',
      'Staff management',
      'Reporting & analytics',
      'CRM integration',
    ],
  },
  {
    icon: '🌐',
    title: 'Company Website Development',
    description: 'Professional, conversion-focused websites for modern businesses.',
    slug: 'company-website-development',
    items: [
      'Landing pages',
      'Service pages',
      'Product showcases',
      'Portfolio systems',
      'Contact systems',
    ],
  },
  {
    icon: '⚙️',
    title: 'Automation & System Integration',
    description: 'Eliminate manual work with structured automation pipelines.',
    slug: 'automation-system-integration',
    items: [
      'Email notifications',
      'Workflow triggers',
      'Performance tracking',
      'Data centralization',
      'Role permissions',
    ],
  },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services — Minor Group of Technologies'
  }, [])

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-4 border border-sky-400/30 px-3 py-1 rounded-full bg-sky-800/30 backdrop-blur-sm">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Scalable systems, structured dashboards, and performance-focused platforms built for modern businesses.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Capabilities"
            title="Engineered for Business Clarity"
            subtitle="Every service we offer is designed to replace operational chaos with structured, scalable digital infrastructure."
          />
          
          {/* Service Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link 
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group block transition-all duration-300 hover:-translate-y-1"
              >
                <Card
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  items={service.items.slice(0, 4)} // Show only first 4 items on main page
                  variant="bordered"
                  className="h-full cursor-pointer group-hover:border-sky-500 group-hover:shadow-xl"
                />
                <div className="mt-2 text-right">
                  <span className="inline-flex items-center text-sm font-medium text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Process"
            title="How We Work"
            subtitle="A structured, transparent process from discovery to delivery."
          />
          
          {/* Process Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: '01', 
                title: 'Discovery', 
                desc: 'We understand your business, goals, and current pain points.',
                icon: '🔍'
              },
              { 
                step: '02', 
                title: 'Planning', 
                desc: 'We design the system architecture and workflow structure.',
                icon: '📋'
              },
              { 
                step: '03', 
                title: 'Development', 
                desc: 'We build with clean, scalable code and regular progress updates.',
                icon: '💻'
              },
              { 
                step: '04', 
                title: 'Delivery', 
                desc: 'We deploy, test, and hand over with full documentation.',
                icon: '🚀'
              },
            ].map((item) => (
              <div 
                key={item.step} 
                className="bg-white rounded-xl p-6 border border-sky-100 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-2xl font-bold text-sky-200 group-hover:text-sky-300 transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-sky-900 mb-2">{item.title}</h3>
                <p className="text-sm text-sky-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Additional Process Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-sky-100">
              <span className="text-sky-600 text-sm">Typical project timeline:</span>
              <span className="font-semibold text-sky-900">4-12 weeks</span>
              <span className="text-sky-400 text-sm ml-2">depending on complexity</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Why Choose Us"
                title="We Build Systems, Not Just Code"
                align="left"
              />
              <div className="space-y-4 text-sky-700 leading-relaxed">
                <p>
                  Unlike traditional development agencies, we focus on building structured systems that grow with your business. Every line of code is written with scalability and long-term maintainability in mind.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Projects Delivered', value: '50+' },
                  { label: 'Client Satisfaction', value: '98%' },
                  { label: 'Avg. Development Time', value: '6 weeks' },
                  { label: 'Long-term Partners', value: '20+' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-sky-50 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-sky-900">{stat.value}</div>
                    <div className="text-xs text-sky-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-sky-100">Our Development Philosophy</h3>
              <ul className="space-y-3">
                {[
                  'Clean, maintainable code architecture',
                  'Scalable system design patterns',
                  'Regular client communication',
                  'Post-launch support & maintenance',
                  'Future-proof technology choices',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sky-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-900 to-sky-800 text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-5xl mb-6">💡</div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Not sure what solution fits your business?
          </h2>
          <p className="text-sky-100 mb-8 text-lg">
            Book a free consultation and our team will help you identify the right system for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg" variant="primary">
              Book a Free Consultation
            </Button>
            <Button to="/contact" size="lg" variant="outline-white">
              Contact Sales
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-sky-200">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">✓</svg>
              No obligation
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">✓</svg>
              30-min call
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">✓</svg>
              Expert advice
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}