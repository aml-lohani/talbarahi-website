import puppeteer from 'puppeteer-core';
import fs from 'fs';

const chromePath = `${process.env.HOME}/.cache/puppeteer/chrome/mac_arm-148.0.7778.167/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;

const dir = './temporary screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

const pages = [
  ['http://localhost:3001/about', 'about'],
  ['http://localhost:3001/wool-categories', 'wool'],
  ['http://localhost:3001/certifications', 'certs'],
  ['http://localhost:3001/leadership', 'leadership'],
  ['http://localhost:3001/contact', 'contact'],
  ['http://localhost:3001/gallery', 'gallery'],
  ['http://localhost:3001/industries', 'industries'],
];

let n = 10;
for (const [url, name] of pages) {
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: `${dir}/screenshot-${n}-${name}.png`, fullPage: false });
  console.log('Saved:', name);
  n++;
}

await browser.close();
