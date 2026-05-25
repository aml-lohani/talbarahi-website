import puppeteer from 'puppeteer-core';

const chromePath = `${process.env.HOME}/.cache/puppeteer/chrome/mac_arm-148.0.7778.167/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 2000));
await page.screenshot({ path: './temporary screenshots/screenshot-20-home-full.png', fullPage: true });
console.log('Full home page captured');

await page.goto('http://localhost:3001/wool-categories', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: './temporary screenshots/screenshot-21-wool-full.png', fullPage: true });
console.log('Full wool page captured');

await browser.close();
