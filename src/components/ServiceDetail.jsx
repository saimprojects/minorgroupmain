
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { services } from '../data/services.js'
import { posts } from '../data/blog.js'

export default function ServiceDetail({ serviceKey }) {
  const service = services.find((item) => item.key === serviceKey)
  const guides = posts.filter(post => post.serviceKeys?.includes(serviceKey)).slice(0, 4)

  return (
    <div className="page-shell service-detail-page">
      <section className="page-hero detail-hero">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb">
          <Link to="/services"><ArrowLeft size={15} /> All services</Link>
          <span aria-current="page">{service.label}</span>
        </nav>
        <p className="page-kicker">{service.label}</p>
        <h1 className="page-title">{service.title}</h1>
        <p className="page-lead">{service.intro}</p>
        <Link className="text-action" to="/contact">Start a project <ArrowUpRight size={20} /></Link>
      </section>

      <section className="service-overview">
        <h2>{service.overview}</h2>
        <div className="overview-copy"><p>{service.body}</p><p className="service-audience">{service.audience}</p></div>
      </section>

      <section className="detail-capabilities" aria-labelledby="capabilities-heading">
        <h2 id="capabilities-heading">What we can build.</h2>
        <div className="detail-list">
          {service.capabilities.map((item) => (
            <article className="deliverable-row" key={item.title}>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
              <ul>{item.items.map((text) => <li key={text}>{text}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="service-process" aria-labelledby="process-heading">
        <h2 id="process-heading">A clear path from here.</h2>
        <ol className="process-list">
          {service.process.map((step) => <li key={step.title}><strong>{step.title}</strong><p>{step.copy}</p></li>)}
        </ol>
      </section>

      {guides.length>0&&<section className="service-guides" aria-labelledby="guides-heading"><p className="page-kicker">Before you build</p><h2 id="guides-heading">Work through the decisions.</h2><div>{guides.map(post=><Link key={post.slug} to={`/blog/${post.slug}`}><span>{post.category}</span><h3>{post.title}</h3><ArrowUpRight size={20}/></Link>)}</div></section>}

      <section className="detail-cta">
        <h2>{service.closing}</h2>
        <p>{service.closingCopy}</p>
        <Link className="text-action" to="/contact">Start a project <ArrowUpRight size={20} /></Link>
      </section>

      <section className="related-services" aria-labelledby="related-heading">
        <h2 id="related-heading">Explore the other possibilities.</h2>
        <div>{services.filter((item) => item.key !== service.key).map((item) => <Link key={item.key} to={`/services/${item.slug}`}>{item.label}<ArrowUpRight size={18} /></Link>)}</div>
      </section>
    </div>
  )
}


