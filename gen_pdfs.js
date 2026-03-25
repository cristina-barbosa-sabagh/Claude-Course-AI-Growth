const puppeteer = require('./node_modules/puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases';

// Simple markdown → HTML converter (no external deps)
function mdToHtml(md, title) {
  let html = md
    // Fenced code blocks
    .replace(/```[\w]*\n([\s\S]*?)```/g, (_, code) =>
      `<pre><code>${code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>`)
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // H1
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // H2
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // H4
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    // Horizontal rule
    .replace(/^---+$/gm, '<hr>')
    // Checkboxes
    .replace(/^☐ /gm, '<span class="checkbox">☐</span> ')
    .replace(/^✅ /gm, '<span class="check">✅</span> ')
    // Unordered list items
    .replace(/^[\-\*] (.+)$/gm, '<li>$1</li>')
    // Ordered list items
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // Blockquote
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // Tables — basic pass
    .replace(/^\|(.+)\|$/gm, (line) => {
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
    })
    .replace(/^<tr><td>[-:| ]+<\/td><\/tr>$/gm, '') // remove separator rows
    // ACCIÓN EN PANTALLA tags
    .replace(/\[ACCIÓN EN PANTALLA: ([^\]]+)\]/g,
      '<span class="action-tag">[ACCIÓN EN PANTALLA: $1]</span>')
    // Bold emphasis remaining **text**
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`);
  // Wrap consecutive <tr> in <table>
  html = html.replace(/(<tr>.*<\/tr>\n?)+/g, m => `<table>${m}</table>`);

  // Split into paragraphs (lines separated by blank lines)
  const blocks = html.split(/\n{2,}/);
  html = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    if (/^<(h[1-4]|ul|ol|li|pre|hr|table|blockquote|tr)/.test(block)) return block;
    // plain text line → paragraph
    return `<p>${block.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.65;
    color: #1a1a1a;
    padding: 40px 52px;
    max-width: 100%;
  }
  h1 {
    font-size: 22pt;
    font-weight: 800;
    color: #CC0000;
    margin: 0 0 6px;
    line-height: 1.2;
    border-bottom: 3px solid #FF0000;
    padding-bottom: 8px;
  }
  h2 {
    font-size: 15pt;
    font-weight: 700;
    color: #CC0000;
    margin: 28px 0 8px;
    border-left: 4px solid #FF6B00;
    padding-left: 10px;
  }
  h3 {
    font-size: 12pt;
    font-weight: 700;
    color: #333;
    margin: 20px 0 6px;
  }
  h4 {
    font-size: 11pt;
    font-weight: 700;
    color: #555;
    margin: 14px 0 4px;
  }
  p {
    margin: 8px 0;
  }
  strong { color: #111; }
  em { color: #444; }
  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 20px 0;
  }
  pre {
    background: #0d0d0d;
    color: #EEFF89;
    font-family: 'Courier New', monospace;
    font-size: 9pt;
    padding: 16px 18px;
    border-radius: 6px;
    margin: 12px 0;
    white-space: pre-wrap;
    word-break: break-word;
    border-left: 4px solid #FF6B00;
    page-break-inside: avoid;
  }
  code {
    background: #f4f4f4;
    color: #c0392b;
    font-family: 'Courier New', monospace;
    font-size: 9.5pt;
    padding: 1px 5px;
    border-radius: 3px;
  }
  pre code {
    background: none;
    color: #EEFF89;
    padding: 0;
  }
  ul {
    margin: 8px 0 8px 22px;
    padding: 0;
  }
  ul li {
    margin: 4px 0;
    list-style: disc;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 14px 0;
    font-size: 10pt;
  }
  td, th {
    border: 1px solid #ccc;
    padding: 7px 10px;
    text-align: left;
  }
  tr:first-child td {
    background: #1a1a1a;
    color: #fff;
    font-weight: 700;
  }
  tr:nth-child(even) td { background: #fafafa; }
  blockquote {
    border-left: 4px solid #EEFF89;
    background: #fffde7;
    margin: 10px 0;
    padding: 10px 16px;
    font-style: italic;
    color: #555;
    border-radius: 0 4px 4px 0;
  }
  .action-tag {
    display: inline-block;
    background: #1a1a1a;
    color: #FF6B00;
    font-family: 'Courier New', monospace;
    font-size: 9pt;
    padding: 3px 8px;
    border-radius: 4px;
    margin: 4px 0;
  }
  .checkbox { color: #888; font-size: 13pt; }
  .check { font-size: 13pt; }
  @media print {
    body { padding: 20px 30px; }
    h1 { page-break-after: avoid; }
    h2, h3 { page-break-after: avoid; }
    pre { page-break-inside: avoid; }
  }
  @page {
    margin: 18mm 18mm 20mm;
  }
</style>
</head>
<body>
${html}
</body>
</html>`;
}

async function generatePDFs() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const classes = fs.readdirSync(BASE)
    .filter(d => d.startsWith('clase-'))
    .sort();

  let ok = 0, fail = 0;

  for (const cls of classes) {
    const dir = path.join(BASE, cls);
    for (const fname of ['script.md', 'demo.md', 'entregable.md']) {
      const mdPath = path.join(dir, fname);
      const pdfPath = path.join(dir, fname.replace('.md', '.pdf'));
      if (!fs.existsSync(mdPath)) { console.log(`SKIP ${cls}/${fname} (not found)`); continue; }

      try {
        const md = fs.readFileSync(mdPath, 'utf8');
        const title = `${cls} — ${fname.replace('.md', '')}`;
        const htmlContent = mdToHtml(md, title);

        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.pdf({
          path: pdfPath,
          format: 'A4',
          printBackground: true,
          margin: { top: '18mm', right: '18mm', bottom: '20mm', left: '18mm' }
        });
        await page.close();
        console.log(`✓ ${cls}/${fname.replace('.md', '.pdf')}`);
        ok++;
      } catch (e) {
        console.error(`✗ ${cls}/${fname}: ${e.message}`);
        fail++;
      }
    }
  }

  await browser.close();
  console.log(`\nDone: ${ok} PDFs generated, ${fail} failed.`);
}

generatePDFs().catch(console.error);
