import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getPost, getRelatedPosts, formatPostDate } from '../data/blog.js'
import NotFound from './NotFound.jsx'

function ArticleBlock({block}) {
  if(block.type==='paragraph') return <p>{block.text}</p>
  if(block.type==='list') return <ul>{block.items.map(item=><li key={item}>{item}</li>)}</ul>
  if(block.type==='table') return <div className="article-table" role="region" aria-label="Comparison table" tabIndex={0}><table><thead><tr>{block.headers.map(header=><th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{block.rows.map((row,index)=><tr key={index}>{row.map((cell,i)=><td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>
  if(block.type==='link') return block.external ? <p className="article-reference"><a href={block.to} target="_blank" rel="noopener noreferrer">{block.text} <ArrowUpRight size={14}/></a></p> : <p className="article-reference"><Link to={block.to}>{block.text} <ArrowUpRight size={14}/></Link></p>
  return null
}
export default function BlogPost() {
  const {slug}=useParams()
  const post=getPost(slug)
  if(!post) return <NotFound/>
  return <div className="page-shell blog-post-page">
    <article lang="en-US">
      <header className="article-hero shell">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><Link to="/blog">Blog</Link><span aria-current="page">{post.category}</span></nav>
        <p className="page-kicker">{post.category} · A guide for US businesses</p>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.description}</p>
        <div className="article-byline"><Link to="/about">By Minor Group of Technologies</Link><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span>{post.readTime}</span></div>
      </header>
      <div className={`article-layout shell${post.quickAnswer?' has-answer':''}`}>
        {post.quickAnswer&&<section className="article-answer" id="quick-answer" aria-labelledby="answer-heading"><h2 id="answer-heading">The short answer</h2><p>{post.quickAnswer}</p></section>}
        <aside className="article-toc"><nav aria-label="On this page"><h2>In this guide</h2><ol>{post.quickAnswer&&<li><a href="#quick-answer">The short answer</a></li>}{post.sections.map(section=><li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}{post.faqs?.length>0&&<li><a href="#common-questions">Common questions</a></li>}</ol></nav></aside>
        <div className="article-body">
          <p className="article-intro">{post.intro}</p>
          {post.sections.map(section=><section key={section.id} id={section.id}><h2>{section.title}</h2>{section.blocks.map((block,i)=><ArticleBlock key={i} block={block}/>)}</section>)}
          {post.faqs?.length>0&&<section className="article-faq" id="common-questions"><h2>Common questions</h2>{post.faqs.map(faq=><div className="article-faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>}
          <aside className="article-takeaway"><h2>The useful next step</h2><p>{post.takeaway}</p><Link className="inline-action" to={post.relatedService.to}>{post.relatedService.label} <ArrowUpRight size={18}/></Link></aside>
          {post.sources?.length>0&&<section className="article-sources"><h2>Further reading</h2><ul>{post.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} <ArrowUpRight size={14}/></a></li>)}</ul></section>}
          <Link className="inline-action" to="/blog"><ArrowLeft size={16}/> All articles</Link>
        </div>
      </div>
    </article>
    <section className="related-reading shell"><h2>Keep thinking.</h2>{getRelatedPosts(post).map(item=><Link key={item.slug} to={`/blog/${item.slug}`}><span>{item.category}</span><h3>{item.title}</h3><ArrowUpRight size={24}/></Link>)}</section>
    <section className="page-cta shell"><h2>Let’s work<br/>through your brief.</h2><p>Share what you need to build, who it is for and where the current process gets in the way.</p><Link className="inline-action" to="/contact">Start a project <ArrowUpRight size={20}/></Link></section>
  </div>
}
