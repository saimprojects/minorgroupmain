import { chromium } from 'playwright-core';
import fs from 'node:fs';
fs.mkdirSync('scrollcraft/builds/minor-systems/research',{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--disable-gpu']});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
await page.addInitScript(()=>{Element.prototype.requestPointerLock=()=>Promise.resolve();Element.prototype.setPointerCapture=()=>{};});
for(const [name,url] of [['instrument','https://www.instrument.com'],['workco','https://work.co'],['ramotion','https://www.ramotion.com']]){
 try{await page.goto(url,{waitUntil:'domcontentloaded',timeout:35000}); await page.waitForTimeout(2000);await page.screenshot({path:`scrollcraft/builds/minor-systems/research/${name}.png`}); console.log(name, await page.locator('body').evaluate(el=>({background:getComputedStyle(el).backgroundColor,color:getComputedStyle(el).color,font:getComputedStyle(el).fontFamily})));await page.evaluate(()=>window.scrollBy(0,900));await page.waitForTimeout(1000);await page.screenshot({path:`scrollcraft/builds/minor-systems/research/${name}-middle.png`});}catch(e){console.log(name,e.message)}
}await browser.close();
