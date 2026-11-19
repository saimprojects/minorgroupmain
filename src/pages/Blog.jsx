import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { posts, formatPostDate } from '../data/blog.js'
export default function Blog() {
  return <div className="page-shell blog-page">
    <section className="page-hero shell">
      <p className="page-kicker">The Minor Group journal</p>
      <h1 className="page-title">Better questions.<br/>Better builds.</h1>
      <p className="page-lead">Practical guides to dashboards, reporting automation, custom software and websites for US business owners and teams.</p>
    </section>
    <section className="shell blog-index" aria-label="Latest articles">
      {posts.map(post=><article className="blog-index-entry" key={post.slug}>
        <div className="post-topic"><span>{post.category}</span><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time></div>
        <div className="post-summary"><h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link className="inline-action" to={`/blog/${post.slug}`}>Read the guide <ArrowUpRight size={19}/></Link></div>
        <span className="post-read-time">{post.readTime}</span>
      </article>)}
    </section>
    <section className="page-cta shell"><h2>From reading<br/>to building.</h2><p>Bring your project questions. We’ll help you turn the brief into a practical next step.</p><Link className="inline-action" to="/contact">Start a project <ArrowUpRight size={20}/></Link></section>
  </div>
}
