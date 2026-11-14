import { chromium } from 'playwright-core';
import fs from 'node:fs';
const out='scrollcraft/builds/minor-systems/qa';fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--disable-gpu']});
const report={errors:[],layouts:[],functional:[]};
for(const [name,width,height] of [['desktop',1440,900],['phone',390,844],['compact',360,640]]){
 const page=await browser.newPage({viewport:{width,height}});await page.addInitScript(()=>{Element.prototype.requestPointerLock=()=>Promise.resolve();Element.prototype.setPointerCapture=()=>{};});page.on('pageerror',e=>report.errors.push(e.message));
 await page.goto('http://127.0.0.1:5174/',{waitUntil:'networkidle'});await page.screenshot({path:`${out}/${name}-hero.png`});
 report.layouts.push({name,...await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,font:getComputedStyle(document.querySelector('h1')).fontFamily,engine:!!window.ScrollCraft?.instances.length}))});
 const act=page.locator('.systems-act');const box=await act.boundingBox();const actTop=box.y+await page.evaluate(()=>scrollY);for(const fraction of [0,.5,1]){await page.evaluate(({top,h,f})=>scrollTo(0,top+(h-innerHeight)*f),{top:actTop,h:box.height,f:fraction});await page.waitForTimeout(450);await page.screenshot({path:`${out}/${name}-system-${fraction}.png`});}
 await page.goto('http://127.0.0.1:5174/services',{waitUntil:'networkidle'});await page.screenshot({path:`${out}/${name}-services.png`});report.layouts.push({name:`${name}-services`,...await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}))});
 await page.goto('http://127.0.0.1:5174/contact',{waitUntil:'networkidle'});await page.screenshot({path:`${out}/${name}-contact.png`,fullPage:true});
 report.layouts.push({name:`${name}-contact`,...await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}))});
 await page.close();
}
const page=await browser.newPage({viewport:{width:1440,height:900}});await page.addInitScript(()=>{Element.prototype.requestPointerLock=()=>Promise.resolve();Element.prototype.setPointerCapture=()=>{};});
for(const route of ['/about','/services/tam-system-development','/services/saas-mvp-development','/services/business-dashboard-development','/services/company-website-development','/services/automation-system-integration','/privacy','/terms','/cookies','/disclaimer','/refund','/legal']){await page.goto(`http://127.0.0.1:5174${route}`,{waitUntil:'networkidle'});report.functional.push({route,h1:await page.locator('h1').innerText(),overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)});if(['/about','/services/tam-system-development','/privacy'].includes(route))await page.screenshot({path:`${out}/${route.replaceAll('/','-')}.png`,fullPage:true});}
await page.goto('http://127.0.0.1:5174/contact',{waitUntil:'networkidle'});let payload;await page.route('https://formspree.io/**',async route=>{payload=JSON.parse(route.request().postData());await route.fulfill({status:200,contentType:'application/json',body:'{"ok":true}'})});
await page.getByLabel('Your name').fill('Website QA');await page.getByLabel('Email address').fill('qa@example.com');await page.getByLabel('WhatsApp number').fill('+923000000000');await page.getByLabel('What can we help with?').selectOption('SaaS MVP');await page.getByLabel('A little about your project').fill('Local mocked submission verification.');await page.getByRole('button',{name:'Send project request'}).click();await page.getByText('Message received.').waitFor();report.functional.push({mockFormSuccess:true,payloadFields:Object.keys(payload),focus:await page.evaluate(()=>document.activeElement.className)});
await page.emulateMedia({reducedMotion:'reduce'});await page.goto('http://127.0.0.1:5174/',{waitUntil:'networkidle'});report.functional.push({reducedMotion:true,systemHeight:await page.locator('.systems-act').evaluate(e=>e.offsetHeight),connected:await page.locator('.systems-act').evaluate(e=>getComputedStyle(e).getPropertyValue('--connect'))});await page.screenshot({path:`${out}/reduced-hero.png`});
fs.writeFileSync(`${out}/functional-report.json`,JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));await browser.close();


