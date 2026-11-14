import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { renderSeoHead } from '../seo/site.js'

// The prerenderer uses the same renderer, so direct requests and SPA navigation agree.
// Unrelated resources, verification tokens and preconnect hints remain untouched.
export default function Seo() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    const template = document.createElement('template')
    template.innerHTML = renderSeoHead(pathname)
    document.head.querySelectorAll('[data-seo]').forEach(node => node.remove())
    const inserted = [...template.content.children]
    document.head.append(...inserted)
    return () => inserted.forEach(node => node.remove())
  }, [pathname])
  return null
}
