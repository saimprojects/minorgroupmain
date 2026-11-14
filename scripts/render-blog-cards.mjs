import fs from 'node:fs'
import { chromium } from 'playwright-core'
import { posts } from '../src/data/blog.js'
const browser=await chromium.launch({executablePath:process.env.SCROLLCRAFT_CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true})
const page=await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1})
const mark=fs.readFileSync('public/brand/mg-mark.svg').toString('base64')
const escape=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
fs.mkdirSync('public/brand/blog',{recursive:true})
for(const post of posts){
 await page.setContent(`<html><head><style>*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#18191b;color:#f4f3f0;font-family:Arial,sans-serif;padding:55px 64px;display:flex;flex-direction:column}.brand{display:flex;align-items:center;gap:18px;font-size:22px;letter-spacing:-.5px}img{width:55px;height:36px}.category{margin:42px 0 18px;color:#f04b32;font-size:17px}h1{font-size:64px;font-weight:500;line-height:1.08;letter-spacing:-2.8px;margin:0;max-width:1060px}footer{margin-top:auto;padding-top:22px;border-top:1px solid #4b4c50;font-size:16px;color:#b4b5ba;display:flex;justify-content:space-between}</style></head><body><div class="brand"><img src="data:image/svg+xml;base64,${mark}" alt="">minor group</div><div class="category">${escape(post.category)} / A guide for US businesses</div><h1>${escape(post.title)}</h1><footer><span>The Minor Group journal</span><span>minorgroup.site/blog</span></footer></body></html>`)
 await page.locator('img').evaluate(img=>img.decode())
 await page.screenshot({path:`public/brand/blog/${post.slug}.png`})
 console.log(`Rendered ${post.slug} 1200x630`)
}
await browser.close()
