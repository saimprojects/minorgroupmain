import assert from 'node:assert/strict'
import fs from 'node:fs'
import { chromium } from 'playwright-core'
import { routes, siteUrl } from '../src/seo/site.js'
const out='docs/routing-evidence';fs.mkdirSync(out,{recursive:true})
assert.equal(siteUrl,'https://www.minorgroup.site')
const config=JSON.parse(fs.readFileSync('vercel.json','utf8'))
assert.equal(config.redirects,undefined,'Domain routing must not override the existing Vercel Domains redirect')
for(const route of routes){const html=fs.readFileSync('dist/'+(route.path==='/'?'index':route.path.slice(1))+'.html','utf8');assert(html.includes(`rel="canonical" href="${siteUrl}${route.path}"`));assert(!html.includes('https://minorgroup.site/'))}
const browser=await chromium.launch({executablePath:process.env.SCROLLCRAFT_CHROME||'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true})
const page=await browser.newPage({viewport:{width:1440,height:900}})
await page.addInitScript(()=>{Element.prototype.requestPointerLock=()=>Promise.reject();Element.prototype.setPointerCapture=()=>{};Element.prototype.releasePointerCapture=()=>{}})
const errors=[],assets=[]
page.on('pageerror',error=>errors.push(error.message))
page.on('response',response=>{if(response.url().includes('/assets/'))assets.push({url:response.url(),status:response.status(),redirected:!!response.request().redirectedFrom()})})
try{
 const response=await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'})
 assert.equal(response.status(),200)
 await page.locator('.brand-logo').evaluate(img=>img.decode())
 assert.equal(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(24, 25, 27)')
 assert.equal(await page.locator('meta[property="og:url"]').getAttribute('content'),siteUrl+'/')
 await page.screenshot({path:`${out}/fixed-build-homepage.png`})
 for(const pathname of ['/brand/mg-mark.svg','/brand/favicon.svg']){
  const resource=await fetch('http://127.0.0.1:4173'+pathname,{redirect:'manual'});assert.equal(resource.status,200);assert(resource.headers.get('content-type').startsWith('image/svg+xml'))
 }
 assert(assets.some(asset=>asset.url.includes('.css')))
 assert(assets.some(asset=>asset.url.includes('.js')))
 assert(assets.every(asset=>asset.status===200&&!asset.redirected))
 assert.equal(errors.length,0,JSON.stringify(errors))
 console.log(JSON.stringify({canonicalPages:routes.length,domain:siteUrl,assets,errors,icons:'200 without redirects',liveDeployment:'pending'},null,2))
 fs.writeFileSync(`${out}/local-fix-report.json`,JSON.stringify({canonicalPages:routes.length,domain:siteUrl,assets,errors,icons:'200 without redirects',liveDeployment:'pending'},null,2))
}finally{await browser.close()}
