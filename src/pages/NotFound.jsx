import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
export default function NotFound() {
  return <div className="page-shell"><section className="page-hero shell">
    <p className="page-kicker">404 · Page not found</p>
    <h1 className="page-title">This page took<br />a different route.</h1>
    <p className="page-lead">The address may have changed, or the page no longer exists. Explore our services or head back home.</p>
    <Link className="inline-action" to="/">Back to home <ArrowUpRight size={20}/></Link>
    <p><Link className="inline-action" to="/services">Explore our services <ArrowUpRight size={20}/></Link></p>
  </section></div>
}

