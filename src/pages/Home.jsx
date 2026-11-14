import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Plus, RotateCcw } from 'lucide-react'

import { services } from '../data/services.js'
import { posts } from '../data/blog.js'

const modules = [
  { label: 'Bookings', x: -220, y: -95, turn: -12 },
  { label: 'Clients', x: 215, y: -95, turn: 10 },
  { label: 'Payments', x: -220, y: 100, turn: 8 },
  { label: 'Team', x: 215, y: 100, turn: -8 },
]

function SystemDrawing() {
  const diagram = useRef(null)
  const [replaying, setReplaying] = useState(false)
  useEffect(() => {
    if (!replaying) return
    const timer = setTimeout(() => setReplaying(false), 2200)
    return () => clearTimeout(timer)
  }, [replaying])
  return <div className={`system-drawing ${replaying ? 'is-replaying' : ''}`} ref={diagram}>
    <svg className="route-drawing" viewBox="0 0 800 460" aria-hidden="true">
      <g className="diagram-grid" stroke="currentColor" strokeWidth=".5">{[100,200,300,400,500,600,700].map(x=><path key={x} d={`M${x} 0V460`}/>)}{[80,180,280,380].map(y=><path key={y} d={`M0 ${y}H800`}/>)}</g>
      <g className="system-routes" fill="none" stroke="currentColor" strokeWidth="1.5"><path pathLength="1" d="M180 135H290Q310 135 310 155V210Q310 230 330 230H400"/><path pathLength="1" d="M615 135H510Q490 135 490 155V210Q490 230 470 230H400"/><path pathLength="1" d="M180 330H290Q310 330 310 310V250Q310 230 330 230H400"/><path pathLength="1" d="M615 330H510Q490 330 490 310V250Q490 230 470 230H400"/></g>
      <circle className="core-ring" cx="400" cy="230" r="60" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
    <div className="system-core"><span>mg</span><small>ONE SYSTEM</small></div>
    {modules.map((m,i)=><div key={m.label} className={`system-module module-${i}`} style={{'--dx':`${m.x}px`,'--dy':`${m.y}px`,'--turn':`${m.turn}deg`,'--idx':i}}><span className="module-dot"/><strong>{m.label}</strong><Plus size={14}/></div>)}
    <div className="diagram-caption"><span>Conceptual system architecture</span><button type="button" onClick={()=>setReplaying(true)} disabled={replaying} aria-label="Replay the system connection animation"><RotateCcw size={13}/> Replay</button></div>
  </div>
}

export default function Home() {
  const root = useRef(null)
  const hero = useRef(null)
  useEffect(() => {
    let engine
    let frame
    let observer
    let stopped = false
    let heroVisible = true
    let systemVisible = false
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const area = root.current.querySelector('.systems-act')
    const update = () => {
      if (stopped || !root.current || !hero.current) return
      if (!document.hidden) {
        if (systemVisible || reduced.matches) {
          const value = parseFloat(getComputedStyle(area).getPropertyValue('--sc-p')) || 0
          const progress = reduced.matches ? 1 : Math.min(1, value / .8)
          area.style.setProperty('--connect', progress)
          area.dataset.scVerifyState = 'connection:' + Math.round(progress * 100)
        }
        if (heroVisible && !reduced.matches) hero.current.style.setProperty('--hero-progress', Math.min(1, Math.max(0, -hero.current.getBoundingClientRect().top / innerHeight)))
      }
      frame = requestAnimationFrame(update)
    }
    const start = async () => {
      await import('../lib/scrollcraft.js')
      if (stopped || !root.current || !hero.current) return
      engine = window.ScrollCraft.mount(root.current)
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.target === hero.current) heroVisible = entry.isIntersecting
          if (entry.target === area) systemVisible = entry.isIntersecting
        }
      })
      observer.observe(hero.current)
      observer.observe(area)
      frame = requestAnimationFrame(update)
    }
    start()
    return () => { stopped = true; cancelAnimationFrame(frame); observer?.disconnect(); engine?.destroy() }
  }, [])
  const move = (e) => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--px', (e.clientX - rect.left) / rect.width - .5)
    e.currentTarget.style.setProperty('--py', (e.clientY - rect.top) / rect.height - .5)
  }
  return <div ref={root} className="home-page">
    <section className="poster-hero shell" data-sc-act="flow" ref={hero} onPointerMove={move} onPointerLeave={e=>{e.currentTarget.style.setProperty('--px',0);e.currentTarget.style.setProperty('--py',0)}}>
      <p className="hero-intro">Software development. Thought all the way through.</p>
      <h1>Software.<br/><span>With substance.</span></h1>
      <div className="structural-mark" aria-hidden="true"><svg viewBox="0 0 360 440" className="mark-plane mark-back"><path d="M40 385V90L180 230 320 90V385"/></svg><svg viewBox="0 0 360 440" className="mark-plane mark-mid"><path d="M40 385V90L180 230 320 90V385"/></svg><svg viewBox="0 0 360 440" className="mark-plane mark-front"><path d="M40 385V90L180 230 320 90V385"/></svg></div>
      <div className="hero-lower"><p>SaaS platforms, business dashboards, websites and automation. Designed in Pakistan, built for businesses worldwide.</p><Link to="/contact" className="project-link">Start a project <span><ArrowUpRight size={23}/></span></Link></div>
    </section>
    <section className="thesis-section shell" data-sc-act="flow"><div className="thesis-aside">A LITTLE LESS FRICTION.<br/>A LOT MORE POSSIBILITY.</div><div><h2 data-sc-kinetic="words" data-sc-cue="0.08 1 0.24 0">Your business is connected. <br/><span>Your software should be, too.</span></h2><p>Bookings in one place. Payments in another. A team piecing it all together. We build the systems that bring the whole picture into focus.</p></div></section>
    <section className="systems-act" data-sc-act="pin" data-sc-span="2.2" data-sc-verify-state="connection:0"><div data-sc-stage className="systems-stage"><div className="shell systems-content"><div className="systems-top"><h2>From moving parts.<br/><span>To forward motion.</span></h2><p>Good systems make the connections.<br/>Great ones make them feel simple.</p></div><SystemDrawing/><div className="system-bottom"><p>Meet TAM. Travel agency management,<br/>built around how your team actually works.</p><Link to="/services/tam-system-development" className="line-link">Explore TAM <ArrowUpRight size={17}/></Link></div></div></div></section>
    <section className="capabilities-section shell" data-sc-act="flow"><div className="capabilities-intro"><h2>Good thinking.<br/>Built to work.</h2><p>From your first product to the systems behind your next stage of growth.</p></div><div className="home-service-list">{services.map((s)=><Link key={s.key} to={`/services/${s.slug}`} className="home-service" data-sc-in><h3>{s.label}</h3><p>{s.intro.split('. ')[0]}.</p><ArrowUpRight size={24}/></Link>)}</div></section>
    <section className="studio-section" data-sc-act="flow"><div className="shell studio-layout"><div className="studio-word" data-sc-reveal="right" data-sc-cue="0.05 1 0.25 0" aria-hidden="true">Human<br/>by design.</div><div className="studio-copy"><p>Behind every useful system is a team that asks better questions.</p><p>We get close to your business, map what matters and sweat the details. Strategy, design and development move together from the first conversation.</p><Link to="/about" className="line-link">Meet Minor Group <ArrowUpRight size={17}/></Link></div></div></section>
    <section className="home-journal shell"><h2>Practical guides for<br/>your next project.</h2>{posts.map(post=><Link key={post.slug} to={'/blog/'+post.slug}><span>{post.category}</span><h3>{post.title}</h3><ArrowUpRight size={22}/></Link>)}<Link className="line-link" to="/blog">Explore the journal <ArrowUpRight size={17}/></Link></section>
    <section className="project-close shell" data-sc-act="flow"><div><h2>What are you<br/>working on?</h2><Link to="/contact" className="close-link">Start a project <ArrowUpRight size={28}/></Link></div><p>Bring the big idea.<br/>Or the problem that won’t leave you alone.<br/>We’ll work out the next step together.</p></section>
  </div>
}

