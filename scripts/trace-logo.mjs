import sharp from 'sharp';
import potrace from 'potrace';
import { promisify } from 'util';
import { writeFileSync, unlinkSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';

const trace = promisify(potrace.trace);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'public', 'logo.png');
const OUT = path.join(ROOT, 'public', 'bimi-logo.svg');

const SIZE = 512;

async function extractLayerPng(color, threshold, outPath) {
  const { r: tr, g: tg, b: tb } = color;

  const { data, info } = await sharp(SRC)
    .resize(SIZE, SIZE, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Build greyscale mask: 0 (black) where pixel matches colour, 255 (white) elsewhere
  const mask = Buffer.alloc(info.width * info.height);
  for (let i = 0; i < info.width * info.height; i++) {
    const pr = data[i * info.channels];
    const pg = data[i * info.channels + 1];
    const pb = data[i * info.channels + 2];
    const dist = Math.sqrt((pr - tr) ** 2 + (pg - tg) ** 2 + (pb - tb) ** 2);
    mask[i] = dist < threshold ? 0 : 255;
  }

  await sharp(mask, { raw: { width: info.width, height: info.height, channels: 1 } })
    .png()
    .toFile(outPath);
}

async function pathsFromPng(pngPath) {
  const svg = await trace(pngPath, {
    threshold: 128,
    turdSize: 3,
    alphaMax: 1,
    optCurve: true,
    optTolerance: 0.2,
  });
  const paths = [];
  const re = /<path[^>]+d="([^"]+)"/g;
  let m;
  while ((m = re.exec(svg)) !== null) paths.push(m[1]);
  return paths;
}

async function main() {
  const tmp1 = path.join(os.tmpdir(), 'bimi-crimson.png');
  const tmp2 = path.join(os.tmpdir(), 'bimi-dark.png');

  console.log('Extracting crimson layer…');
  await extractLayerPng({ r: 139, g: 44, b: 44 }, 80, tmp1);
  const crimsonPaths = await pathsFromPng(tmp1);
  console.log(`  ${crimsonPaths.length} paths`);

  console.log('Extracting dark layer…');
  await extractLayerPng({ r: 43, g: 43, b: 41 }, 70, tmp2);
  const darkPaths = await pathsFromPng(tmp2);
  console.log(`  ${darkPaths.length} paths`);

  // Clean up temp files
  try { unlinkSync(tmp1); unlinkSync(tmp2); } catch {}

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     version="1.2"
     baseProfile="tiny-ps"
     viewBox="0 0 ${SIZE} ${SIZE}"
     width="${SIZE}"
     height="${SIZE}">
  <title>Tal Barahi Handicraft</title>
  <circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="#FDF9F7"/>
  <g fill="#8B2C2C">
    ${crimsonPaths.map((d) => `<path d="${d}"/>`).join('\n    ')}
  </g>
  <g fill="#2B2B29">
    ${darkPaths.map((d) => `<path d="${d}"/>`).join('\n    ')}
  </g>
</svg>`;

  writeFileSync(OUT, svg, 'utf8');
  console.log(`\nSaved → ${OUT}`);
  console.log(`File size: ${(svg.length / 1024).toFixed(1)} KB`);
}

main().catch(console.error);
