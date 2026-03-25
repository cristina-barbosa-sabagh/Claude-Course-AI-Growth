const puppeteer = require('./node_modules/puppeteer-core');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function mdToHtml(md, title) {
  let html = md
    .replace(/```[\w]*\n([\s\S]*?)```/g, (_, code) =>
      '<pre><code>' + code.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^---+$/gm, '<hr>')
    .replace(/\[ACCIÓN EN PANTALLA: ([^\]]+)\]/g, '<span class="action-tag">[ACCIÓN EN PANTALLA: $1]</span>')
    .replace(/^[*-] (.+)$/gm, '<li>$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, m => '<ul>' + m + '</ul>');
  const blocks = html.split(/\n{2,}/);
  html = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    if (/^<(h[1-4]|ul|pre|hr)/.test(block)) return block;
    return '<p>' + block.replace(/\n/g, '<br>') + '</p>';
  }).join('\n');

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title}</title>
<style>
body{font-family:Arial,sans-serif;font-size:11pt;line-height:1.65;color:#1a1a1a;padding:40px 52px}
h1{font-size:22pt;font-weight:800;color:#CC0000;border-bottom:3px solid #FF0000;padding-bottom:8px;margin:0 0 6px}
h2{font-size:15pt;color:#CC0000;border-left:4px solid #FF6B00;padding-left:10px;margin:28px 0 8px}
h3{font-size:12pt;font-weight:700;color:#333;margin:20px 0 6px}
p{margin:8px 0}
hr{border:none;border-top:1px solid #ddd;margin:20px 0}
pre{background:#0d0d0d;color:#EEFF89;font-family:monospace;font-size:9pt;padding:16px;border-radius:6px;margin:12px 0;white-space:pre-wrap;word-break:break-word;border-left:4px solid #FF6B00;page-break-inside:avoid}
code{background:#f4f4f4;color:#c0392b;font-family:monospace;font-size:9.5pt;padding:1px 5px;border-radius:3px}
pre code{background:none;color:#EEFF89;padding:0}
ul{margin:8px 0 8px 22px}
li{margin:4px 0}
.action-tag{display:inline-block;background:#1a1a1a;color:#FF6B00;font-family:monospace;font-size:9pt;padding:4px 10px;border-radius:4px;margin:4px 0}
@page{margin:18mm}
</style></head><body>${html}</body></html>`;
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const md = fs.readFileSync('./clases/clase-01/script.md', 'utf8');
  const html = mdToHtml(md, 'clase-01 — script');
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.pdf({
    path: './clases/clase-01/script.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '18mm', right: '18mm', bottom: '20mm', left: '18mm' }
  });
  await page.close();
  await browser.close();
  const size = require('fs').statSync('./clases/clase-01/script.pdf').size;
  console.log('Done: clase-01/script.pdf (' + size + ' bytes)');
})().catch(e => { console.error(e.message); process.exit(1); });
