import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { render } from '../dist-ssr/entry-server.js'
import { routes, renderSeoHead, siteUrl } from '../src/seo/site.js'
const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const output = path.join(projectRoot, 'dist')
const template = await readFile(path.join(output, 'index.html'), 'utf8')
const outlet = '<div id="root" data-prerendered="false"></div>'
if (!template.includes('<!--seo-head-->') || !template.includes(outlet)) throw new Error('Missing static rendering placeholders')
for (const route of [...routes, { path: '/404' }]) {
  const html = template.replace('<!--seo-head-->', () => renderSeoHead(route.path))
    .replace(outlet, () => `<div id="root" data-prerendered="true">${render(route.path)}</div>`)
  const destination = path.join(output, route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`)
  await mkdir(path.dirname(destination), { recursive: true })
  await writeFile(destination, html)
  console.log(`Prerendered ${route.path}`)
}

const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(route => '  <url><loc>' + siteUrl + route.path + '</loc></url>').join('\n') + '\n</urlset>\n'
await writeFile(path.join(output, 'sitemap.xml'), sitemap)
