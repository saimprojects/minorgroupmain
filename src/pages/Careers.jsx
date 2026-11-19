import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { company } from '../data/company.js'
import { openings } from '../data/careers.js'
import './Careers.css'

const applicationEmail = company.email.toLowerCase()

function applicationLink(opening) {
  const subject = encodeURIComponent(`Application - ${opening.title}`)
  const body = encodeURIComponent([
    'Hello Minor Group team,',
    '',
    `I’m applying for the ${opening.title} role.`,
    '',
    'Name:',
    ...opening.emailPrompt,
  ].join('\r\n'))

  return `mailto:${applicationEmail}?subject=${subject}&body=${body}`
}

export default function Careers() {
  return (
    <div className="page-shell careers-page">
      <section className="page-hero shell careers-hero" aria-labelledby="careers-heading">
        <div>
          <p className="page-kicker">Minor Group of Technologies</p>
          <h1 className="page-title" id="careers-heading">Careers</h1>
          <p className="page-lead">Open positions in sales, video editing, and Next.js development. Find your role below and email us your CV.</p>
        </div>
        <nav className="careers-index" aria-labelledby="open-roles-heading">
          <h2 id="open-roles-heading">Open roles</h2>
          <ul>
            {openings.map(opening => (
              <li key={opening.id}>
                <a href={`#${opening.id}`}>
                  {opening.title} <ArrowDown size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="shell careers-openings" aria-label="Role details">
        {openings.map(opening => (
          <article className="career-opening" id={opening.id} key={opening.id} aria-labelledby={`${opening.id}-heading`}>
            <header className="career-overview">
              {opening.arrangement && <p className="career-arrangement">{opening.arrangement}</p>}
              <h2 id={`${opening.id}-heading`}>{opening.title}</h2>
              <p>{opening.summary}</p>
            </header>
            <div className="career-details">
              <div className="career-criteria">
                <div>
                  <h3>What you’ll do</h3>
                  <ul>{opening.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <h3>What you’ll bring</h3>
                  <ul>{opening.requirements.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
              <div className="career-apply">
                <div>
                  <h3>How to apply</h3>
                  <p>Attach your CV as a PDF. {opening.applicationDetails}</p>
                </div>
                <a className="career-apply-link" href={applicationLink(opening)} aria-label={`Email your CV for ${opening.title}`}>
                  Email your CV <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="shell careers-contact" aria-labelledby="careers-email-heading">
        <h2 id="careers-email-heading">Applying from your inbox?</h2>
        <p>Send your CV to <a href={`mailto:${applicationEmail}`}>{applicationEmail}</a> with the position title in the subject line.</p>
      </section>
    </div>
  )
}
