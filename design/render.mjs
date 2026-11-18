// Render design/news.html at exactly 1024x1024 into news-20261117/entry.png (Playwright, no root).
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.argv[2] ?? join(here, '..', 'entry.png');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto('file://' + join(here, 'news.html'), { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
await browser.close();
console.log('written', out);