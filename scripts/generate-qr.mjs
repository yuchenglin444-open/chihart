/**
 * Generate downloadable member-page QR codes into public/qr/<slug>.png.
 * Runs automatically via the predev / prebuild npm scripts.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const membersDir = path.join(root, 'src/content/members');
const outDir = path.join(root, 'public/qr');

const site = 'https://yuchenglin444-open.github.io';
const base = '/chihart';

const slugs = fs
  .readdirSync(membersDir)
  .filter((f) => /\.ya?ml$/i.test(f))
  .map((f) => f.replace(/\.ya?ml$/i, ''))
  .sort();

fs.mkdirSync(outDir, { recursive: true });

for (const slug of slugs) {
  const url = `${site}${base}/zh/members/${slug}/`;
  const dest = path.join(outDir, `${slug}.png`);
  await QRCode.toFile(dest, url, {
    width: 640,
    margin: 2,
    errorCorrectionLevel: 'M',
    color: { dark: '#163A4D', light: '#FFFFFF' },
  });
  console.log(`QR ${slug} → ${url}`);
}

console.log(`Generated ${slugs.length} QR codes in public/qr/`);
