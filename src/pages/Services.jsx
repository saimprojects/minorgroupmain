import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Card from '../components/Card.jsx'

const services = [
  {
    icon: '✈️',
    title: 'TAM Website & System Development',
    description: 'Designed for clarity and operational control.',
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
      <section className="bg-gray-950 text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 border border-gray-700 px-3 py-1 rounded-full">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Process"
            title="How We Work"
            subtitle="A structured, transparent process from discovery to delivery."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and current pain points.' },
              { step: '02', title: 'Planning', desc: 'We design the system architecture and workflow structure.' },
              { step: '03', title: 'Development', desc: 'We build with clean, scalable code and regular progress updates.' },
              { step: '04', title: 'Delivery', desc: 'We deploy, test, and hand over with full documentation.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-200 mb-3">{item.step}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Not sure what solution fits your business?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Book a free consultation and our team will help you identify the right system for your needs.
          </p>
          <Button to="/contact" size="lg" variant="primary">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
