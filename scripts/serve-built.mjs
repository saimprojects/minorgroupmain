import http from 'node:http'
import path from 'node:path'
import { readFile, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
const root = fileURLToPath(new URL('../dist/', import.meta.url))
const port = Number(process.env.PORT || 4173)
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2'}
http.createServer(async (req,res) => {
  try {
    const url = new URL(req.url, 'http://localhost')
    const pathname = decodeURIComponent(url.pathname)
    if (pathname.endsWith('.html') && pathname !== '/404.html') { res.writeHead(308,{Location:pathname.slice(0,-5) + url.search});res.end();return }
    if (pathname.length>1 && pathname.endsWith('/')) { res.writeHead(308,{Location:pathname.replace(/\/+$/,'') + url.search});res.end();return }
    const relative = pathname === '/' ? 'index.html' : pathname.slice(1)
    const target = path.resolve(root, relative)
    if (!target.startsWith(root)) {res.writeHead(403);res.end();return}
    const candidates = path.extname(target) ? [target] : [target, target+'.html']
    let file
    for (const candidate of candidates) {try {if ((await stat(candidate)).isFile()) {file=candidate;break}}catch{}}
    const status = file && pathname !== '/404.html' ? 200 : 404
    file ||= path.join(root,'404.html')
    const body = await readFile(file)
    res.writeHead(status,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'})
    res.end(req.method==='HEAD'?undefined:body)
  } catch {res.writeHead(500);res.end('Preview server error')}
}).listen(port,'127.0.0.1',()=>console.log(`Built site preview: http://127.0.0.1:${port}`))









