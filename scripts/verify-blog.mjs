import assert from 'node:assert/strict'
import fs from 'node:fs'
import { chromium } from 'playwright-core'
import { posts } from '../src/data/blog.js'
import { company } from '../src/data/company.js'
const out='docs/blog-evidence';fs.mkdirSync(out,{recursive:true})
const browser=await chromium.launch({executablePath:process.env.SCROLLCRAFT_CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true})
const report=[]
try{
 for(const width of [1440,768,390,360]){
  const page=await browser.newPage({viewport:{width,height:900}})
  await page.addInitScript(()=>{Element.prototype.requestPointerLock=()=>Promise.reject();Element.prototype.setPointerCapture=()=>{};Element.prototype.releasePointerCapture=()=>{}})
  await page.goto('http://127.0.0.1:4173/blog',{waitUntil:'networkidle'})
  await page.screenshot({path:`${out}/index-${width}.png`,fullPage:true})
  assert.equal(await page.locator('.blog-index-entry').count(),2)
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false)
  for(const post of posts){
   await page.goto(`http://127.0.0.1:4173/blog/${post.slug}`,{waitUntil:'networkidle'})
   await page.screenshot({path:`${out}/${post.slug}-${width}-top.png`})
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false)
   assert.equal(await page.locator('.article-toc a').count(),post.sections.length)
   for(const section of post.sections)assert.equal(await page.locator(`#${section.id}`).count(),1)
   const anchor=page.locator('.article-toc a').nth(3);await anchor.click();await page.waitForTimeout(300)
   assert((await page.evaluate(()=>location.hash)).includes(post.sections[3].id))
   await page.screenshot({path:`${out}/${post.slug}-${width}-body.png`})
   await page.locator('.article-table').first().scrollIntoViewIfNeeded();await page.screenshot({path:`${out}/${post.slug}-${width}-table.png`})
   const share=await page.locator('meta[property="og:image"]').getAttribute('content');assert(share.includes('/brand/blog/'+post.slug+'.png'))
   report.push({width,slug:post.slug,overflow:false,sections:post.sections.length,table:await page.locator('.article-table').first().evaluate(el=>({width:el.clientWidth,contentWidth:el.scrollWidth})),socialImage:share})
  }
  await page.goto('http://127.0.0.1:4173/contact',{waitUntil:'networkidle'})
  assert(await page.locator('.contact-details').innerText().then(text=>text.includes(company.phoneDisplay)&&text.includes(company.email)))
  assert.equal(await page.locator('.contact-details a[href="tel:'+company.phone+'"]').count(),1)
  assert.equal(await page.locator('.contact-details a[href="mailto:'+company.email+'"]').count(),1)
  assert.equal(await page.locator('a[href*="wa.me"]').count(),0)
  await page.screenshot({path:`${out}/contact-${width}.png`,fullPage:true})
  await page.close()
 }
 const page=await browser.newPage({viewport:{width:390,height:844}})
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'})
 await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Blog',exact:true}).click();assert.equal(new URL(page.url()).pathname,'/blog')
 await page.getByRole('link',{name:posts[0].title,exact:true}).click();assert(page.url().includes(posts[0].slug))
 await page.locator('.article-sources').scrollIntoViewIfNeeded();await page.screenshot({path:`${out}/sources-mobile.png`})
 console.log(JSON.stringify({layouts:report,mobileNavigation:true,companyContact:company},null,2))
}finally{fs.writeFileSync(`${out}/report.json`,JSON.stringify(report,null,2));await browser.close()}
