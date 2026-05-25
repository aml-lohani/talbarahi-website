import puppeteer from 'puppeteer-core';

const chromePath = `${process.env.HOME}/.cache/puppeteer/chrome/mac_arm-148.0.7778.167/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 2500));

const totalHeight = await page.evaluate(() => document.body.scrollHeight);
const sections = [
  { name: 'hero', y: 0 },
  { name: 'trust-strip', y: 870 },
  { name: 'about', y: 1000 },
  { name: 'wool', y: 1900 },
  { name: 'certifications', y: 2900 },
  { name: 'industries', y: 3850 },
  { name: 'testimonials', y: 4800 },
  { name: 'cta', y: totalHeight - 900 },
];

let n = 30;
for (const section of sections) {
  await page.evaluate((y) => window.scrollTo(0, y), section.y);
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: `./temporary screenshots/screenshot-${n}-${section.name}.png` });
  console.log(`Captured: ${section.name}`);
  n++;
}

await browser.close();
