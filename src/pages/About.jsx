import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const founderImage = 'https://res.cloudinary.com/dxommxt6d/image/upload/v1767509276/Saim_smxepz.webp'

export default function About() {

  return <div className="page-shell about-page">
    <section className="page-hero shell">
      <p className="page-kicker">Minor Group of Technologies</p>
      <h1 className="page-title">Thoughtful people.<br />Purposeful systems.</h1>
      <p className="page-lead">We help businesses turn complicated operations into clear, useful digital experiences.</p>
    </section>

    <section className="content-section shell split-layout">
      <h2 className="section-heading-text">Technology with<br />the business in mind.</h2>
      <div className="editorial-copy">
        <p>Minor Group of Technologies is a product-focused technology company based in Pakistan. We design and develop SaaS platforms, business management systems, websites and workflow automation.</p>
        <p>Our starting point is the way a business works. The information people need. The decisions they make. The everyday tasks that take more effort than they should.</p>
        <p>From there, we build structure. A clearer workflow, a more useful interface, a system that can grow alongside the team using it.</p>
        <Link className="inline-action" to="/services">Explore our capabilities <ArrowUpRight size={20} aria-hidden="true" /></Link>
      </div>
    </section>

    <section className="content-section shell split-layout">
      <div><p className="page-kicker">What guides our work</p><h2 className="section-heading-text">Clarity is<br />a design decision.</h2></div>
      <ol className="numbered-list">
        <li><span>Structure</span><h3>Understand the whole picture.</h3><p>Useful software starts with an understanding of the business around it.</p></li>
        <li><span>Clarity</span><h3>Make the next step obvious.</h3><p>We work through complexity so the people using a system have less of it to deal with.</p></li>
        <li><span>Continuity</span><h3>Think beyond the launch.</h3><p>We make decisions with future workflows, new requirements and long-term maintainability in mind.</p></li>
      </ol>
    </section>

    <section className="content-section shell split-layout founder-section">
      <figure className="about-founder">
        <img src={founderImage} alt="Muhammad Saim, founder of Minor Group of Technologies" width="800" height="1000" loading="lazy" />
        <figcaption className="founder-caption"><strong>Muhammad Saim</strong><span>Founder & Chief Executive Officer</span></figcaption>
      </figure>
      <div className="editorial-copy">
        <p className="page-kicker">The person behind the work</p>
        <h2 className="section-heading-text">A product mindset.<br />A practical approach.</h2>
        <p>Muhammad Saim focuses on SaaS platforms, automation and business infrastructure. His approach brings technical decisions back to a simple question: how will this make the business work better?</p>
        <p>That thinking runs through Minor Group’s work, from the first workflow discussion to the details of the final interface.</p>
        <Link className="inline-action" to="/contact">Start a project <ArrowUpRight size={20} aria-hidden="true" /></Link>
      </div>
    </section>

    <section className="page-cta shell">
      <h2>Let’s work<br />through it together.</h2>
      <p>A new product, a better process, or a website that feels more like you.</p>
      <Link className="inline-action" to="/contact">Start a project <ArrowUpRight size={20} aria-hidden="true" /></Link>
    </section>
  </div>
}

