import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
export default function Navbar() {
 const [open,setOpen]=useState(false)
 const location=useLocation()
 const toggle=useRef(null)
 useEffect(()=>{setOpen(false)},[location.pathname])
 useEffect(()=>{if(!open)return;const close=e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus()}};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[open])
 return <header className="site-header"><a href="#main-content" className="skip-link">Skip to content</a><div className="shell nav-inner"><Link to="/" className="brand" aria-label="Minor Group home"><img className="brand-logo" src="/brand/mg-mark.svg" alt="Minor Group" width="144" height="92" fetchPriority="high" /></Link><nav id="main-nav" className={`nav-links ${open?'is-open':''}`} aria-label="Main navigation"><NavLink to="/" end>Home</NavLink><NavLink to="/services">Expertise</NavLink><NavLink to="/about">Studio</NavLink><NavLink to="/blog">Blog</NavLink><NavLink to="/careers">Careers</NavLink><NavLink to="/contact" className="mobile-contact">Start a project <ArrowUpRight size={17}/></NavLink></nav><Link className="nav-cta" to="/contact">Start a project <ArrowUpRight size={16}/></Link><button className="menu-toggle" ref={toggle} onClick={()=>setOpen(!open)} aria-controls="main-nav" aria-expanded={open} aria-label={open?'Close navigation':'Open navigation'}>{open?<X/>:<Menu/>}</button></div></header>
}



