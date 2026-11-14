import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Travel agency systems',
    description: 'A connected operation, from the first inquiry to the final payment.',
    slug: 'tam-system-development',
    items: ['Booking & client management', 'Payments & financial reporting', 'Role-based team workspaces'],
  },
  {
    title: 'SaaS & MVP development',
    description: 'Give a good idea a strong product foundation. Launch with focus, then build on what works.',
    slug: 'saas-mvp-development',
    items: ['Product architecture', 'Authentication & user roles', 'Scalable application development'],
  },
  {
    title: 'Business dashboards',
    description: 'Bring the moving parts of your business into a workspace your team can actually use.',
    slug: 'business-dashboard-development',
    items: ['Operations & inventory', 'Reporting & analytics', 'CRM & staff management'],
  },
  {
    title: 'Company websites',
    description: 'A clear, considered digital presence that tells your story and makes the next step easy.',
    slug: 'company-website-development',
    items: ['Website strategy & structure', 'Responsive interface design', 'Custom development'],
  },
  {
    title: 'Automation & integrations',
    description: 'Connect the tools, handoffs and information that keep your business moving.',
    slug: 'automation-system-integration',
    items: ['Workflow triggers', 'Notifications & reporting', 'Connected data & permissions'],
  },
]

export default function Services() {

  return <div className="page-shell services-page">
    <section className="page-hero shell">
      <p className="page-kicker">Our capabilities</p>
      <h1 className="page-title">Good thinking.<br />Built to work.</h1>
      <p className="page-lead">Digital products, websites and business systems. Thoughtfully designed, carefully engineered.</p>
    </section>

    <section className="content-section shell" aria-label="Explore our services">
      <div className="service-index">
        {services.map((service, index) => <Link className="service-index-row" to={`/services/${service.slug}`} key={service.slug}>
          <span className="service-index-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <div className="service-index-title">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <ArrowUpRight className="service-index-arrow" aria-hidden="true" />
        </Link>)}
      </div>
    </section>

    <section className="content-section shell split-layout">
      <div><p className="page-kicker">How we get there</p><h2 className="section-heading-text">A clear process.<br />A considered outcome.</h2></div>
      <ol className="numbered-list">
        <li><span>Discover</span><h3>Start with the right questions.</h3><p>We map the business need, the people using the product, and what success should look like.</p></li>
        <li><span>Define & design</span><h3>Make the complex feel simple.</h3><p>Workflows, structure and interface decisions come together before development starts.</p></li>
        <li><span>Develop & deliver</span><h3>Build for the everyday.</h3><p>We bring the experience to life, test the details, and prepare it for real use.</p></li>
      </ol>
    </section>

    <section className="page-cta shell">
      <h2>What are you<br />working on?</h2>
      <p>Tell us about the challenge. We’ll help you find the right place to start.</p>
      <Link className="inline-action" to="/contact">Start a project <ArrowRight size={20} aria-hidden="true" /></Link>
    </section>
  </div>
}

