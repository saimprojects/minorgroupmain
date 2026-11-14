import fs from 'node:fs';
import { chromium } from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
const logo=fs.readFileSync('public/brand/logo-720.webp').toString('base64');
await page.setContent(`<html><head><style>*{box-sizing:border-box}body{margin:0;background:#f4f3f0;color:#18191b;font-family:Arial,sans-serif;padding:60px 75px;width:1200px;height:630px}.top{height:6px;background:#f04b32;width:100px}img{display:block;width:900px;height:300px;object-fit:contain;margin:10px 0 5px}h1{font-size:46px;font-weight:500;letter-spacing:-2px;margin:0 0 28px}footer{border-top:1px solid #c6c5c0;padding-top:25px;display:flex;justify-content:space-between;color:#535458;font-size:18px}</style></head><body><div class=top></div><img src="data:image/webp;base64,${logo}" alt="Minor Group of Technologies"><h1>SaaS, websites &amp; business systems.</h1><footer><span>Software. With substance.</span><span>minorgroup.site</span></footer></body></html>`);
await page.locator('img').evaluate(img=>img.decode());await page.screenshot({path:'public/brand/social-card.png'});await browser.close();console.log('Saved social card 1200×630');
