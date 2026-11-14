import { chromium } from 'playwright-core';
import fs from 'node:fs';
const out='scrollcraft/builds/minor-systems/logo-qa';fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const icon=await browser.newPage({viewport:{width:256,height:256},deviceScaleFactor:1});
await icon.setContent(`<style>body{margin:0}</style>${fs.readFileSync('public/brand/favicon.svg','utf8')}`);
await icon.locator('svg').screenshot({path:'public/brand/apple-touch-icon.png'});await icon.close();
const results=[];
for(const width of [1440,768,390,360]){
 const page=await browser.newPage({viewport:{width,height:900}});await page.addInitScript(()=>{Element.prototype.requestPointerLock=()=>Promise.resolve();Element.prototype.setPointerCapture=()=>{};});
 await page.goto('http://127.0.0.1:5174/',{waitUntil:'networkidle'});
 await page.locator('.brand-logo').evaluate(img=>img.decode());await page.screenshot({path:`${out}/header-${width}.png`});
 await page.locator('.footer-logo-image').scrollIntoViewIfNeeded();await page.locator('.footer-logo-image').evaluate(img=>img.decode());await page.screenshot({path:`${out}/footer-${width}.png`});
 const images=await page.locator('.brand-logo,.footer-logo-image').evaluateAll(items=>items.map(el=>({source:el.getAttribute('src'),loaded:el.complete&&el.naturalWidth>0,width:Math.round(el.getBoundingClientRect().width),height:Math.round(el.getBoundingClientRect().height)})));
 results.push({viewport:width,overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),images});await page.close();
}
await browser.close();fs.writeFileSync(`${out}/report.json`,JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
