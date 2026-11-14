import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/company.js'
export default function Footer(){return <footer className="site-footer"><div className="shell"><div className="footer-top"><Link className="footer-logo-link" to="/" aria-label="Minor Group home"><img className="footer-logo-image" src="/brand/logo-720.webp" srcSet="/brand/logo-360.webp 360w, /brand/logo-720.webp 720w" sizes="(max-width: 480px) 280px, (max-width: 700px) 300px, 340px" alt="Minor Group of Technologies" width="720" height="240" loading="lazy" /></Link><a className="footer-email" href={`mailto:${company.email}`}>{company.email} <ArrowUpRight size={18}/></a></div><div className="footer-info"><p>Digital systems.<br/>Considered from every angle.</p><div><Link to="/services">Expertise</Link><Link to="/about">Studio</Link><Link to="/blog">Blog</Link><Link to="/contact">Start a project</Link></div><div><a href={`tel:${company.phone}`}>{company.phoneDisplay}</a><a href={`mailto:${company.email}`}>Email our team <ArrowUpRight size={13}/></a><span>Pakistan · Working worldwide</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Minor Group of Technologies</span><div><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/cookies">Cookies</Link><Link to="/refund">Refunds</Link><Link to="/disclaimer">Disclaimer</Link><Link to="/legal">Legal</Link></div></div></div></footer>}





