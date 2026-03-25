// gen_clases_04_06.js
// Generates professional .pptx presentations for classes 04, 05, and 06
// of the Claude para Growth course using pptxgenjs

const PptxGenJS = require('/Users/mariacristinabarbosa/Claude-Course-AI-Growth/node_modules/pptxgenjs');

// ─── COLOR PALETTE ───────────────────────────────────────────────────────────
const C = {
  red:    'FF0000',
  orange: 'FF6B00',
  yellow: 'EEFF89',
  white:  'FFFFFF',
  black:  '000000',
};

// ─── FONT HELPERS ─────────────────────────────────────────────────────────────
const F = {
  titleLg:  { name: 'Arial Black', size: 44, bold: true },
  titleMd:  { name: 'Arial Black', size: 36, bold: true },
  titleSm:  { name: 'Arial Black', size: 28, bold: true },
  heading:  { name: 'Arial Black', size: 22, bold: true },
  body:     { name: 'Calibri',     size: 16 },
  bodySm:   { name: 'Calibri',     size: 14 },
  stat:     { name: 'Arial Black', size: 72, bold: true },
  statSub:  { name: 'Calibri',     size: 20 },
  callout:  { name: 'Calibri',     size: 18, bold: true, italic: true },
  label:    { name: 'Arial Black', size: 12, bold: true },
};

// ─── SLIDE BUILDERS ──────────────────────────────────────────────────────────

/** LAYOUT 1 — Cover slide (black bg, white/red text) */
function addCoverSlide(pptx, { title, subtitle, module: mod, duration, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  // Red accent bar top
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: C.red } });

  // Module pill
  slide.addShape(pptx.ShapeType.rect, { x: 0.6, y: 0.55, w: 2.8, h: 0.42, fill: { color: C.red }, line: { color: C.red } });
  slide.addText(mod, { x: 0.6, y: 0.55, w: 2.8, h: 0.42, color: C.white, fontSize: 13, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });

  // Main title
  slide.addText(title, {
    x: 0.6, y: 1.3, w: 12.1, h: 3.4,
    color: C.white, fontSize: 42, bold: true, fontFace: 'Arial Black',
    align: 'left', valign: 'top', breakLine: true, wrap: true,
  });

  // Orange accent line
  slide.addShape(pptx.ShapeType.rect, { x: 0.6, y: 4.85, w: 3.5, h: 0.08, fill: { color: C.orange } });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.6, y: 5.05, w: 11.0, h: 1.2,
    color: C.yellow, fontSize: 18, fontFace: 'Calibri', align: 'left', valign: 'top', wrap: true,
  });

  // Duration badge
  slide.addShape(pptx.ShapeType.rect, { x: 10.5, y: 6.7, w: 2.2, h: 0.5, fill: { color: C.orange } });
  slide.addText(duration, { x: 10.5, y: 6.7, w: 2.2, h: 0.5, color: C.white, fontSize: 14, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });

  // Bottom red bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: C.red } });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** LAYOUT 2 — Two-column comparison */
function addTwoColumnSlide(pptx, { title, leftTitle, leftItems, rightTitle, rightItems, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Title bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.black } });
  slide.addText(title, { x: 0.4, y: 0, w: 12.5, h: 1.1, color: C.white, fontSize: 26, bold: true, fontFace: 'Arial Black', valign: 'middle' });
  // Red accent
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 1.08, w: 13.33, h: 0.06, fill: { color: C.red } });

  // Left panel header
  slide.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.35, w: 5.8, h: 0.55, fill: { color: C.red } });
  slide.addText(leftTitle, { x: 0.4, y: 1.35, w: 5.8, h: 0.55, color: C.white, fontSize: 16, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });

  // Left content box
  slide.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.9, w: 5.8, h: 5.2, fill: { color: 'F9F9F9' }, line: { color: 'E0E0E0', pt: 1 } });

  // Left items
  leftItems.forEach((item, i) => {
    // Bullet dot
    slide.addShape(pptx.ShapeType.ellipse, { x: 0.65, y: 2.15 + i * 0.82, w: 0.18, h: 0.18, fill: { color: C.red } });
    slide.addText(item, { x: 0.98, y: 2.05 + i * 0.82, w: 5.0, h: 0.72, color: C.black, fontSize: 14, fontFace: 'Calibri', valign: 'middle', wrap: true });
  });

  // Right panel header
  slide.addShape(pptx.ShapeType.rect, { x: 7.1, y: 1.35, w: 5.8, h: 0.55, fill: { color: C.orange } });
  slide.addText(rightTitle, { x: 7.1, y: 1.35, w: 5.8, h: 0.55, color: C.white, fontSize: 16, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });

  // Right content box
  slide.addShape(pptx.ShapeType.rect, { x: 7.1, y: 1.9, w: 5.8, h: 5.2, fill: { color: 'F9F9F9' }, line: { color: 'E0E0E0', pt: 1 } });

  // Right items
  rightItems.forEach((item, i) => {
    slide.addShape(pptx.ShapeType.ellipse, { x: 7.35, y: 2.15 + i * 0.82, w: 0.18, h: 0.18, fill: { color: C.orange } });
    slide.addText(item, { x: 7.68, y: 2.05 + i * 0.82, w: 5.0, h: 0.72, color: C.black, fontSize: 14, fontFace: 'Calibri', valign: 'middle', wrap: true });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** LAYOUT 3 — Big stat slide */
function addBigStatSlide(pptx, { stat, statLabel, context, eyebrow, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  // Top accent
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.1, fill: { color: C.red } });

  // Eyebrow
  if (eyebrow) {
    slide.addText(eyebrow, { x: 1, y: 0.4, w: 11.33, h: 0.5, color: C.orange, fontSize: 16, bold: true, fontFace: 'Calibri', align: 'center' });
  }

  // Big stat
  slide.addText(stat, {
    x: 0.5, y: 1.2, w: 12.33, h: 2.8,
    color: C.yellow, fontSize: 96, bold: true, fontFace: 'Arial Black', align: 'center', valign: 'middle',
  });

  // Stat label
  slide.addShape(pptx.ShapeType.rect, { x: 3.0, y: 4.1, w: 7.33, h: 0.08, fill: { color: C.orange } });
  slide.addText(statLabel, {
    x: 1, y: 4.25, w: 11.33, h: 0.7,
    color: C.white, fontSize: 22, bold: true, fontFace: 'Calibri', align: 'center',
  });

  // Context text
  slide.addText(context, {
    x: 1.5, y: 5.2, w: 10.33, h: 1.8,
    color: 'CCCCCC', fontSize: 16, fontFace: 'Calibri', align: 'center', wrap: true,
  });

  // Bottom accent
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: C.red } });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** LAYOUT 4 — Bullet list with colored markers */
function addBulletSlide(pptx, { title, bullets, accentColor, notes }) {
  const accent = accentColor || C.red;
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Left red stripe
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: accent } });

  // Title area
  slide.addShape(pptx.ShapeType.rect, { x: 0.18, y: 0, w: 13.15, h: 1.25, fill: { color: C.black } });
  slide.addText(title, { x: 0.5, y: 0, w: 12.5, h: 1.25, color: C.white, fontSize: 26, bold: true, fontFace: 'Arial Black', valign: 'middle' });

  // Yellow underline
  slide.addShape(pptx.ShapeType.rect, { x: 0.18, y: 1.23, w: 13.15, h: 0.08, fill: { color: C.yellow } });

  // Bullets
  const startY = 1.55;
  const rowH = 0.8;
  bullets.forEach((bullet, i) => {
    const y = startY + i * rowH;
    // Number badge
    slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: y + 0.08, w: 0.42, h: 0.42, fill: { color: accent } });
    slide.addText(String(i + 1), { x: 0.5, y: y + 0.08, w: 0.42, h: 0.42, color: C.white, fontSize: 15, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });
    // Text
    slide.addText(bullet, { x: 1.1, y: y, w: 11.8, h: 0.7, color: C.black, fontSize: 15, fontFace: 'Calibri', valign: 'middle', wrap: true });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** LAYOUT 5 — Three-column boxes */
function addThreeColumnSlide(pptx, { title, col1Title, col1Items, col2Title, col2Items, col3Title, col3Items, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Title bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.red } });
  slide.addText(title, { x: 0.4, y: 0, w: 12.5, h: 1.1, color: C.white, fontSize: 26, bold: true, fontFace: 'Arial Black', valign: 'middle' });

  const cols = [
    { title: col1Title, items: col1Items, color: C.red,    x: 0.35 },
    { title: col2Title, items: col2Items, color: C.orange, x: 4.75 },
    { title: col3Title, items: col3Items, color: C.black,  x: 9.15 },
  ];

  cols.forEach(col => {
    // Column header
    slide.addShape(pptx.ShapeType.rect, { x: col.x, y: 1.3, w: 4.0, h: 0.6, fill: { color: col.color } });
    slide.addText(col.title, { x: col.x, y: 1.3, w: 4.0, h: 0.6, color: C.white, fontSize: 15, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });

    // Column box
    slide.addShape(pptx.ShapeType.rect, { x: col.x, y: 1.9, w: 4.0, h: 5.3, fill: { color: 'FAFAFA' }, line: { color: 'DDDDDD', pt: 1 } });

    // Items
    col.items.forEach((item, i) => {
      slide.addShape(pptx.ShapeType.rect, { x: col.x + 0.12, y: 2.1 + i * 0.88, w: 0.06, h: 0.52, fill: { color: col.color } });
      slide.addText(item, { x: col.x + 0.3, y: 2.08 + i * 0.88, w: 3.6, h: 0.72, color: C.black, fontSize: 13, fontFace: 'Calibri', valign: 'middle', wrap: true });
    });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** LAYOUT 6 — Quote / callout slide */
function addCalloutSlide(pptx, { quote, attribution, bgColor, textColor, accentColor, notes }) {
  const bg = bgColor || C.black;
  const txt = textColor || C.white;
  const accent = accentColor || C.red;

  const slide = pptx.addSlide();
  slide.background = { color: bg };

  // Top bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: accent } });

  // Large quote mark
  slide.addText('\u201C', { x: 0.5, y: 0.5, w: 2.0, h: 2.0, color: accent, fontSize: 96, fontFace: 'Arial Black', align: 'left', valign: 'top' });

  // Quote text
  slide.addText(quote, {
    x: 1.5, y: 1.2, w: 10.3, h: 4.5,
    color: txt, fontSize: 22, fontFace: 'Calibri', italic: true, align: 'center', valign: 'middle', wrap: true,
  });

  // Bottom accent line
  slide.addShape(pptx.ShapeType.rect, { x: 4.0, y: 5.9, w: 5.33, h: 0.08, fill: { color: accent } });

  // Attribution
  if (attribution) {
    slide.addText(attribution, {
      x: 1.5, y: 6.1, w: 10.3, h: 0.7,
      color: C.yellow, fontSize: 15, fontFace: 'Calibri', bold: true, align: 'center',
    });
  }

  // Bottom bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: accent } });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** LAYOUT 7 — Step-by-step numbered */
function addStepsSlide(pptx, { title, steps, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Header
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.black } });
  slide.addText(title, { x: 0.4, y: 0, w: 12.5, h: 1.1, color: C.white, fontSize: 26, bold: true, fontFace: 'Arial Black', valign: 'middle' });
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 1.08, w: 13.33, h: 0.07, fill: { color: C.yellow } });

  const startY = 1.35;
  const rowH = 1.02;
  const colors = [C.red, C.orange, C.black, C.red, C.orange, C.black];

  steps.forEach((step, i) => {
    const y = startY + i * rowH;
    const color = colors[i % colors.length];

    // Step number circle
    slide.addShape(pptx.ShapeType.ellipse, { x: 0.35, y: y + 0.1, w: 0.7, h: 0.7, fill: { color } });
    slide.addText(String(i + 1), { x: 0.35, y: y + 0.1, w: 0.7, h: 0.7, color: C.white, fontSize: 20, bold: true, fontFace: 'Arial Black', align: 'center', valign: 'middle' });

    // Connector line (not for last step)
    if (i < steps.length - 1) {
      slide.addShape(pptx.ShapeType.rect, { x: 0.68, y: y + 0.8, w: 0.04, h: 0.35, fill: { color: 'DDDDDD' } });
    }

    // Step content box
    slide.addShape(pptx.ShapeType.rect, { x: 1.25, y: y + 0.05, w: 11.6, h: 0.82, fill: { color: 'F5F5F5' }, line: { color: color, pt: 2 } });
    slide.addText(step, { x: 1.45, y: y + 0.05, w: 11.2, h: 0.82, color: C.black, fontSize: 14, fontFace: 'Calibri', valign: 'middle', wrap: true });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** LAYOUT 8 — Before/After split */
function addBeforeAfterSlide(pptx, { title, beforeTitle, beforeItems, afterTitle, afterItems, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Title
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.0, fill: { color: C.black } });
  slide.addText(title, { x: 0.4, y: 0, w: 12.5, h: 1.0, color: C.white, fontSize: 24, bold: true, fontFace: 'Arial Black', valign: 'middle' });

  // BEFORE — left dark panel
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 1.0, w: 6.3, h: 6.5, fill: { color: '1A1A1A' } });
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.18, w: 2.4, h: 0.5, fill: { color: 'FF4444' } });
  slide.addText(beforeTitle, { x: 0.3, y: 1.18, w: 2.4, h: 0.5, color: C.white, fontSize: 14, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });

  beforeItems.forEach((item, i) => {
    slide.addText('✕  ' + item, { x: 0.4, y: 1.88 + i * 0.9, w: 5.6, h: 0.78, color: 'FF8888', fontSize: 13, fontFace: 'Calibri', valign: 'middle', wrap: true });
  });

  // VS divider
  slide.addShape(pptx.ShapeType.rect, { x: 6.25, y: 1.0, w: 0.85, h: 6.5, fill: { color: C.orange } });
  slide.addText('VS', { x: 6.25, y: 3.8, w: 0.85, h: 0.9, color: C.white, fontSize: 20, bold: true, fontFace: 'Arial Black', align: 'center', valign: 'middle' });

  // AFTER — right light panel
  slide.addShape(pptx.ShapeType.rect, { x: 7.1, y: 1.0, w: 6.23, h: 6.5, fill: { color: 'F0FFF0' } });
  slide.addShape(pptx.ShapeType.rect, { x: 7.4, y: 1.18, w: 2.5, h: 0.5, fill: { color: C.red } });
  slide.addText(afterTitle, { x: 7.4, y: 1.18, w: 2.5, h: 0.5, color: C.white, fontSize: 14, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });

  afterItems.forEach((item, i) => {
    slide.addText('✓  ' + item, { x: 7.3, y: 1.88 + i * 0.9, w: 5.8, h: 0.78, color: '1A6B1A', fontSize: 13, fontFace: 'Calibri', valign: 'middle', wrap: true });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** LAYOUT 9 — Closing / CTA slide */
function addClosingSlide(pptx, { title, cta, nextClass, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  // Top bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: C.red } });

  // Entregable tag
  slide.addShape(pptx.ShapeType.rect, { x: 0.6, y: 0.5, w: 3.0, h: 0.5, fill: { color: C.orange } });
  slide.addText('ENTREGABLE DE LA CLASE', { x: 0.6, y: 0.5, w: 3.0, h: 0.5, color: C.white, fontSize: 11, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });

  // Title
  slide.addText(title, {
    x: 0.6, y: 1.2, w: 12.1, h: 2.4,
    color: C.white, fontSize: 32, bold: true, fontFace: 'Arial Black', align: 'left', valign: 'top', wrap: true,
  });

  // CTA box
  slide.addShape(pptx.ShapeType.rect, { x: 0.6, y: 3.8, w: 12.1, h: 1.8, fill: { color: C.red } });
  slide.addText(cta, {
    x: 0.8, y: 3.85, w: 11.7, h: 1.7,
    color: C.white, fontSize: 17, fontFace: 'Calibri', align: 'left', valign: 'middle', wrap: true,
  });

  // Yellow accent bar
  slide.addShape(pptx.ShapeType.rect, { x: 0.6, y: 5.75, w: 12.1, h: 0.06, fill: { color: C.yellow } });

  // Next class text
  slide.addText('Siguiente clase: ' + nextClass, {
    x: 0.6, y: 5.95, w: 12.1, h: 0.8,
    color: C.yellow, fontSize: 15, fontFace: 'Calibri', italic: true, align: 'left', valign: 'middle',
  });

  // Bottom bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: C.red } });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** LAYOUT 10 — Prompt/code display slide */
function addPromptSlide(pptx, { title, promptLines, context, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Title bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.05, fill: { color: C.black } });
  slide.addText(title, { x: 0.4, y: 0, w: 12.5, h: 1.05, color: C.white, fontSize: 24, bold: true, fontFace: 'Arial Black', valign: 'middle' });
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 1.03, w: 13.33, h: 0.06, fill: { color: C.orange } });

  // Code block background
  slide.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.28, w: 12.5, h: 4.8, fill: { color: '1E1E1E' } });

  // Prompt label
  slide.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.28, w: 2.0, h: 0.38, fill: { color: C.orange } });
  slide.addText('PROMPT', { x: 0.4, y: 1.28, w: 2.0, h: 0.38, color: C.white, fontSize: 11, bold: true, fontFace: 'Calibri', align: 'center', valign: 'middle' });

  // Prompt text
  slide.addText(promptLines, {
    x: 0.6, y: 1.75, w: 12.1, h: 4.1,
    color: C.yellow, fontSize: 13, fontFace: 'Courier New', valign: 'top', wrap: true,
  });

  // Context below
  if (context) {
    slide.addText(context, {
      x: 0.4, y: 6.2, w: 12.5, h: 1.0,
      color: C.black, fontSize: 13, fontFace: 'Calibri', italic: true, valign: 'middle', wrap: true,
    });
  }

  if (notes) slide.addNotes(notes);
  return slide;
}

// ─── CLASE 04 ──────────────────────────────────────────────────────────────────

async function generateClase04() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'LAYOUT_WIDE', width: 13.33, height: 7.5 });
  pptx.layout = 'LAYOUT_WIDE';
  pptx.title = 'Clase 04 — Máquina de adquisición';
  pptx.author = 'Claude para Growth';

  // Slide 1 — Cover
  addCoverSlide(pptx, {
    title: 'Máquina de adquisición:\ncopies de Meta, Google\ny email en minutos',
    subtitle: 'Módulo 02 · Clase 04 · Instructor B',
    module: 'MÓDULO 02',
    duration: '16 minutos',
    notes: `INTRO [0:00–1:00]
Esta clase es sobre velocidad. No sobre cómo escribir mejor copy. Sobre cómo producir en minutos lo que hoy tarda días.
Si tienes campañas activas en Meta o Google — y casi seguro que sí — al final de estos 16 minutos vas a tener un flujo que puedes aplicar esta semana. No la próxima. Esta.
Vamos directo al grano.`,
  });

  // Slide 2 — Big stat: the real bottleneck
  addBigStatSlide(pptx, {
    stat: '3 días',
    statLabel: 'es lo que tarda el algoritmo en quemar tus creativos',
    eyebrow: 'EL PROBLEMA REAL',
    context: 'Tu equipo tarda una semana en producir las variaciones siguientes. Eso es el cuello de botella. No el presupuesto.',
    notes: `DESARROLLO 1 [1:00–6:00]
Cuántos equipos de Growth conozco que tienen el presupuesto de Meta desbloqueado pero no escalan porque no tienen suficientes variaciones creativas para testear. El algoritmo las quema en 3 días. El equipo tarda una semana en producir las siguientes.
Eso es lo que rompemos hoy.`,
  });

  // Slide 3 — Steps: 3-step production flow
  addStepsSlide(pptx, {
    title: 'El flujo de producción de copies en 3 pasos',
    steps: [
      'PASO 1: Pega tus métricas — CTR por campaña, CPC, costo por resultado, copy ganador actual. Exporta de Meta Ads Manager o Google Ads (últimos 7 días).',
      'PASO 2: Entrega el contexto que Claude no tiene — ICP específico, objetivo de campaña (número concreto), canal exacto, restricciones de plataforma, qué está ganando ahora y por qué.',
      'PASO 3: Pide variaciones con formato exacto — Headline de 7 palabras máximo, texto de 125 caracteres, CTA de 3 palabras. Claude trabaja con ese molde.',
    ],
    notes: `El flujo tiene tres pasos. Son siempre los mismos.
Paso 1: No necesitas todas las métricas. Necesitas las que importan: CTR, CPC, costo por resultado, copy ganador.
Paso 2: Los 5 elementos de contexto que nunca pueden faltar: ICP, objetivo, canal, restricciones, qué está ganando ahora.
Paso 3: El error que comete el 80% de los equipos — le piden "ideas" sin especificar el formato de entrega. La regla: si sabes cómo se ve el output correcto, descríbelo.`,
  });

  // Slide 4 — Bullet: 5 elements of context
  addBulletSlide(pptx, {
    title: 'Los 5 elementos de contexto que nunca pueden faltar',
    accentColor: C.orange,
    bullets: [
      'ICP específico — No "emprendedores". "Fundadores de SaaS B2B en etapa seed con 2 a 10 personas en el equipo".',
      'Objetivo de campaña — Clicks, conversiones, ROAS, costo por lead. Un número concreto.',
      'El canal — Meta, Google Search, Google Display, email frío. Cada uno tiene su gramática.',
      'Las restricciones — Límite de caracteres, palabras prohibidas, oferta activa, precio que no quieres mencionar.',
      'Qué está ganando ahora y por qué — Si sabes por qué funciona, se lo dices. Si no, se lo preguntas primero.',
    ],
    notes: `Hay cinco elementos que nunca pueden faltar. Los marcamos con pausa porque son el corazón del sistema.
Recuerden: Claude lo sabe sobre los canales, pero TÚ debes especificárselo. No asumas que Claude sabe cuál es tu canal objetivo.`,
  });

  // Slide 5 — Callout: the principle that changes everything
  addCalloutSlide(pptx, {
    quote: 'Lo que hace que este flujo funcione no es Claude.\nEs que por primera vez estás alimentando el proceso creativo\ncon datos reales en tiempo real.',
    attribution: 'Inteligencia de mercado aplicada a velocidad de ejecución',
    bgColor: C.black,
    textColor: C.white,
    accentColor: C.red,
    notes: `El principio que lo cambia todo [final de DESARROLLO 1]:
Antes: el equipo creativo trabajaba con un brief estático que describía el ICP desde hace 6 meses.
Ahora: Claude ve las métricas de esta semana y genera la siguiente iteración basada en lo que realmente está funcionando.
Eso no es automatización. Es inteligencia de mercado aplicada a velocidad de ejecución.`,
  });

  // Slide 6 — Steps: the 4-moment sequence
  addStepsSlide(pptx, {
    title: 'La secuencia completa: 4 momentos para escalar lo que funciona',
    steps: [
      'MOMENTO 1 — Análisis: "¿Qué está ganando y por qué?" → Claude identifica patrones de CTR, ángulos ganadores, estructuras que convierten.',
      'MOMENTO 2 — Hipótesis: "¿Cuál es el siguiente ángulo a probar?" → De la evidencia real a la próxima apuesta creativa.',
      'MOMENTO 3 — Generación: "Dame 5 variaciones con ese ángulo, en este formato" → Output directo listo para subir.',
      'MOMENTO 4 — Refinamiento: "La variación 3 está bien pero el hook es genérico — reescríbelo con el dolor más específico."',
    ],
    notes: `DESARROLLO 2 [6:00–11:00]
La pregunta que debes hacerle a Claude ANTES de pedir variaciones:
"Antes de generar copy nuevo, analiza los datos que te compartí... ¿Qué patrón tienen los anuncios con mejor CTR? ¿Qué ángulo está resonando más? ¿Qué cambiarías del anuncio con peor performance?"
En vez de pedirle que genere en el vacío, lo estás convirtiendo en analista.
Cuatro momentos. En Meta puede tomar 10 minutos. En Google, igual. En email, igual. El canal cambia. La lógica no.`,
  });

  // Slide 7 — Three-column: differences per channel
  addThreeColumnSlide(pptx, {
    title: 'Diferencias por canal — lo que debes confirmarle a Claude',
    col1Title: 'META ADS',
    col1Items: [
      'El hook visual es el 70% del trabajo',
      'Las primeras 2 líneas deciden si leen el resto',
      'Abre con dolor o afirmación provocadora',
      'Especifica: awareness, consideración o conversión',
    ],
    col2Title: 'GOOGLE SEARCH',
    col2Items: [
      'El usuario ya tiene intención de compra',
      'Titulares de 30 caracteres por campo máximo',
      'Compite con 3 anuncios más en el mismo instante',
      'Incluir palabras clave sin sonar robótico',
    ],
    col3Title: 'EMAIL ADQUISICIÓN',
    col3Items: [
      'Asunto + preheader = 80% de la apertura',
      '10 variaciones de asunto en un minuto',
      'Con/sin emojis, con/sin personalización',
      'Estructura de 4 párrafos que Claude domina',
    ],
    notes: `META ADS: El hook visual es el 70% del trabajo, pero el texto de los primeros 2 líneas decide si leen el resto. Los mejores anuncios en Meta abren con el dolor o con una afirmación provocadora.
GOOGLE SEARCH: Aquí el usuario ya tiene intención. Los titulares de Google tienen 30 caracteres por campo — si no le dices esto, Claude genera titulares que no entran.
EMAIL: El asunto y el preheader son el 80% de la apertura. Claude puede generar 10 variaciones de asunto en un minuto.`,
  });

  // Slide 8 — Prompt slide: analysis prompt
  addPromptSlide(pptx, {
    title: 'El prompt de análisis que lo cambia todo',
    promptLines: `Tengo estos datos de mis últimas campañas en Meta:

[pega aquí: nombre de campaña, CTR, CPC, copy de los anuncios]

Antes de generar variaciones nuevas, dime:
1. ¿Qué patrón tienen las campañas con mejor CTR?
2. ¿Qué ángulo o hook está resonando más?
3. ¿Qué cambiarías del anuncio con peor performance?
4. ¿Cuál es el siguiente ángulo a testear y por qué?

Sé específico. Usa los datos que te doy.`,
    context: 'Esta pregunta convierte a Claude en analista — razona sobre evidencia real ANTES de crear. Úsalo siempre como Paso 0.',
    notes: `DEMO [11:00–15:00]
Voy a tomar una campaña real — datos anonimizados — y vamos a hacer exactamente lo que acabo de describir.
Métricas pegadas. Análisis. Hipótesis. Cinco variaciones por canal. En pantalla. En tiempo real.
Fíjate en el tiempo. Este análisis con un equipo humano tomaría una reunión de 45 minutos. Claude lo hace en 90 segundos.`,
  });

  // Slide 9 — Before/After: old way vs new way
  addBeforeAfterSlide(pptx, {
    title: 'Antes vs. Ahora: cómo produce copy tu equipo',
    beforeTitle: 'ANTES',
    beforeItems: [
      'Brief estático de hace 6 meses',
      'Una semana para producir variaciones',
      'Sin datos de performance como input',
      'Opiniones subjetivas sobre qué funciona',
      'El algoritmo quema los creativos antes de iterar',
    ],
    afterTitle: 'CON CLAUDE',
    afterItems: [
      'Métricas de esta semana como input',
      '5 variaciones por canal en 10 minutos',
      'Análisis de patrones ganadores primero',
      'Hipótesis accionables basadas en datos',
      '4 iteraciones al mes vs. 1 sin sistema',
    ],
    notes: `La diferencia no es solo velocidad. Es que la consistencia es lo que separa los equipos que escalan de los que corren sin sistema.
Este flujo + el entregable de la clase = la máquina de adquisición que van a llevar esta semana.`,
  });

  // Slide 10 — Closing
  addClosingSlide(pptx, {
    title: 'Sistema de producción de copy\ncon Claude — el entregable',
    cta: 'Tu tarea: Abre el entregable de esta clase. Llena los campos con tu campaña actual — la que más te importa esta semana. Ejecuta el Prompt A (análisis) primero, luego elige tu canal y genera las 5 variaciones. Trae el output a la siguiente sesión.\n\nNo esperes tener los datos perfectos. Usa lo que tienes ahora.',
    nextClass: 'Motor de retención — onboarding, reactivación y upsell con Claude.',
    notes: `CIERRE [15:00–16:00]
Tu tarea es una sola: Abre el entregable de esta clase. Llena los campos con tu campaña actual. Pega el prompt en Claude y trae el output a la siguiente sesión.
No lo analices demasiado. No esperes tener los datos perfectos. Usa lo que tienes ahora.
El siguiente paso del módulo es retención. Cómo convertir a los usuarios que ya adquiriste en revenue recurrente. Te espero ahí.`,
  });

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-04/clase-04.pptx' });
  console.log('✓ clase-04.pptx generado');
}

// ─── CLASE 05 ──────────────────────────────────────────────────────────────────

async function generateClase05() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'LAYOUT_WIDE', width: 13.33, height: 7.5 });
  pptx.layout = 'LAYOUT_WIDE';
  pptx.title = 'Clase 05 — Motor de retención';
  pptx.author = 'Claude para Growth';

  // Slide 1 — Cover
  addCoverSlide(pptx, {
    title: 'Motor de retención:\nonboarding, reactivación\ny upsell con Claude',
    subtitle: 'Módulo 02 · Clase 05 · Instructor C',
    module: 'MÓDULO 02',
    duration: '16 minutos',
    notes: `INTRO [0:00–1:00]
Adquiriste el usuario. Lo más caro ya pasó.
Ahora viene la pregunta que separa los negocios que escalan de los que corren en una cinta: ¿qué pasa después del registro?
Si la respuesta es "una secuencia de bienvenida genérica que escribimos hace un año" — esta clase es para ti.
En los próximos 16 minutos construimos tres flujos con Claude: onboarding, reactivación y upsell. Tres sistemas. Un solo motor.`,
  });

  // Slide 2 — Big stat: cost of acquisition vs retention
  addBigStatSlide(pptx, {
    stat: '60%',
    statLabel: 'de usuarios que no activan en los primeros 7 días nunca vuelven',
    eyebrow: 'EL ERROR MÁS CARO EN RETENCIÓN',
    context: 'Adquirir es caro. Retener es donde está el dinero. Tres emails genéricos en Mailchimp de hace 8 meses no son un sistema de retención.',
    notes: `DESARROLLO 1 [1:00–6:00]
El onboarding es el momento más importante del ciclo de vida de un usuario. Y es donde más equipos de Growth dejan dinero sobre la mesa.
¿Por qué? Porque escriben 3 emails genéricos, los cargan en Mailchimp hace 8 meses y nunca los tocan.
Claude puede escribir los 5 emails de activación de tu producto, adaptados a tu ICP y a tu tono de marca, en 20 minutos.`,
  });

  // Slide 3 — Bullet: 6 inputs for onboarding
  addBulletSlide(pptx, {
    title: '6 inputs para que Claude escriba el onboarding que activa',
    accentColor: C.red,
    bullets: [
      'Tu producto en una línea — qué hace, para quién, cuál es el resultado concreto.',
      'El momento "aha" — ¿cuándo entiende el usuario que tu producto funciona? ¿Qué paso completó?',
      'Los pasos de activación — los 3 a 5 pasos que debe completar en los primeros 7 días.',
      'El obstáculo más común en cada paso — ¿dónde se cae la gente? Eso va en el email del día correcto.',
      'Tono de marca — directo y técnico, cálido y cercano, con humor. Claude adapta todo.',
      'Herramienta de email — Mailchimp o Klaviyo, con merge tags si aplica.',
    ],
    notes: `Qué necesitas darle a Claude para que la secuencia funcione.
La diferencia no es solo velocidad. Es especificidad.
Un equipo humano sin contexto profundo del producto escribe emails vagos. Claude, con los 6 inputs que le das, escribe un email que menciona el paso específico donde el usuario está, el obstáculo que probablemente encontró y el resultado concreto que va a conseguir si avanza.
Eso no es email marketing. Es onboarding como producto.`,
  });

  // Slide 4 — Steps: 5-email architecture
  addStepsSlide(pptx, {
    title: 'La arquitectura de los 5 emails de activación',
    steps: [
      'EMAIL 1 (Día 0 — inmediato): Bienvenida + primer paso. Un solo CTA. Objetivo: conseguir la primera acción que acerca al momento aha.',
      'EMAIL 2 (Día 2 — si NO completó el paso 1): El empujón en el punto de fricción. Nombra el obstáculo específico y ofrece la solución concreta.',
      'EMAIL 3 (Día 3–4 — si SÍ completó el paso 1): El momento aha explicado. Conecta la acción que hizo con el resultado que buscaba.',
      'EMAIL 4 (Día 5): Prueba social contextual. Caso de cliente específico a lo que el usuario ya hizo en esa misma etapa.',
      'EMAIL 5 (Día 7 — si no activó): Cierre de la ventana de activación. Urgencia real, no falsa. Tono más directo.',
    ],
    notes: `La arquitectura de los 5 emails — marcar con pausa cada punto porque son el bloque más accionable de la clase.
Email 1: El objetivo no es "dar la bienvenida". Es conseguir que el usuario haga la primera acción que lo acerca al momento aha.
Email 2: Este email sabe dónde está el usuario: no terminó la configuración.
Email 3: El usuario avanzó. Ahora necesita entender qué acaba de lograr.
Email 4: Caso de cliente específico — no una historia genérica.
Email 5: El que no activó en 7 días está a punto de irse. La urgencia tiene que ser verdad.`,
  });

  // Slide 5 — Two-column: reactivation segments
  addTwoColumnSlide(pptx, {
    title: 'Flujo de reactivación: dos segmentos, dos mensajes distintos',
    leftTitle: 'USUARIO QUE NUNCA ACTIVÓ',
    leftItems: [
      'Se registró pero no completó el onboarding',
      'El mensaje central: lo que se perdió + solución al obstáculo',
      'Tono: directo, sin drama, orientado al primer paso',
      'Email 1: reconoce ausencia sin culpa',
      'Email 2: novedades del producto + bajo compromiso',
      'Email 3: despedida que invita a volver',
    ],
    rightTitle: 'USUARIO QUE USABA Y SE FUE',
    rightItems: [
      'Tuvo engagement, luego se desconectó',
      'El mensaje central: lo que logró antes + qué mejoró',
      'Tono: cálido, reconociendo que la vida está ocupada',
      'Email 1: muestra progreso de lo que alcanzó antes',
      'Email 2: resultado concreto de otro usuario similar',
      'Email 3: incentivo real si hay, si no — lo que pierde',
    ],
    notes: `DESARROLLO 2 [6:00–11:00]
Un usuario dormido no es uno que pidió cancelar. Es uno que dejó de usar el producto. Y hay una ventana — normalmente de 14 a 30 días — antes de que decida irse de verdad.
Claude puede ayudarte en tres maneras: identificar el patrón de churn, generar el mensaje correcto para cada segmento, escribir la secuencia de recuperación.
No es el mismo email para el usuario que nunca activó que para el que usó activamente durante 60 días y se desconectó.`,
  });

  // Slide 6 — Prompt: churn analysis prompt
  addPromptSlide(pptx, {
    title: 'El prompt de análisis de churn que funciona',
    promptLines: `Voy a describirte el comportamiento de usuarios que se dieron
de baja en los últimos 90 días.

[Describe el patrón: días activos antes de irse, último paso
completado, si llegaron a activar o no, evento común antes
del churn]

Basado en esto:
1. ¿Cuál es el patrón de churn más probable?
2. ¿En qué momento exacto debo activar el flujo?
3. ¿Cuál debería ser el mensaje central de la recuperación?
4. Dame la estructura de 3 emails con el ángulo correcto
   — sin descuentos si es posible.`,
    context: 'Este prompt convierte a Claude en analista de churn. No reemplaza tu análisis de datos — lo complementa con hipótesis accionables.',
    notes: `Ese prompt convierte a Claude en analista de churn. No reemplaza tu análisis de datos — lo complementa. Claude puede razonar sobre el patrón que describes y darte hipótesis que tu equipo puede validar.
Nota importante: tres emails máximo. Si no reactivaron después del tercero, los sacas del flujo.`,
  });

  // Slide 7 — Three-column: three retention systems
  addThreeColumnSlide(pptx, {
    title: 'Los tres sistemas de retención: un motor completo',
    col1Title: 'ONBOARDING',
    col1Items: [
      '5 emails en 20 minutos',
      'Adapta a cada paso de activación',
      'Menciona el obstáculo por nombre',
      'Urgencia real en el email 5',
    ],
    col2Title: 'REACTIVACIÓN',
    col2Items: [
      '3 emails máximo por segmento',
      'Diagnóstico de patrón de churn',
      'Sin desesperación en el Email 1',
      'Incentivo en Email 2 o 3, no en 1',
    ],
    col3Title: 'UPSELL',
    col3Items: [
      'Trigger basado en comportamiento',
      'Beneficio específico, no features',
      'Canal: email + in-app',
      'Sin urgencia falsa — solo si es real',
    ],
    notes: `Onboarding, reactivación, upsell. Tres sistemas. El mismo motor: Claude con el contexto correcto, en el momento correcto, generando el mensaje correcto.
Onboarding sin reactivación: pierdes el 30% de usuarios que casi activaron.
Reactivación sin upsell: rescatas usuarios sin expandir revenue.
Upsell sin onboarding: intentas crecer cuentas que no entienden el valor base.
Los tres juntos son un sistema de revenue de ciclo completo.`,
  });

  // Slide 8 — Bullet: 3 inputs for upsell
  addBulletSlide(pptx, {
    title: 'Upsell: los 3 inputs para el mensaje correcto en el momento correcto',
    accentColor: C.orange,
    bullets: [
      'El indicador de expansión — ¿qué comportamiento señala que está listo? Usos frecuentes, límite de plan alcanzado, número de usuarios invitados.',
      'El beneficio específico del plan superior PARA ESTE usuario AHORA — no los features genéricos del plan Pro, sino lo que resuelve para alguien que acaba de alcanzar ese límite.',
      'El canal y el momento — ¿in-app? ¿Email? ¿Cuántos días después del evento? Claude adapta el tono y la urgencia.',
    ],
    notes: `La mayoría de los upsells fallan porque llegan en el momento equivocado o con el mensaje equivocado.
"Actualiza a Pro" en el día 3 — cuando el usuario no entiende todavía el valor del plan básico — es un error.
"Actualiza a Pro" en el día 21, después de que usó 3 de las 5 features del plan básico, es una conversación que tiene sentido.
Con esos tres inputs, Claude genera el mensaje de upsell que llega en el momento correcto con la propuesta correcta. No es spam. Es relevancia.`,
  });

  // Slide 9 — Callout: what changes
  addCalloutSlide(pptx, {
    quote: 'La diferencia no es solo velocidad. Es especificidad.\nClaude con los 6 inputs correctos escribe el email que menciona el paso exacto donde está el usuario, el obstáculo que encontró y el resultado concreto si avanza.',
    attribution: 'Eso no es email marketing. Es onboarding como producto.',
    bgColor: C.black,
    textColor: C.white,
    accentColor: C.orange,
    notes: `DEMO [11:00–15:00]
Voy a construir una secuencia completa de onboarding en vivo. Cinco emails. Un producto real — anonimizado. Los 6 inputs. En menos de 8 minutos.
Noten el nivel de especificidad en los emails que genera Claude. Menciona el paso exacto donde está el usuario. Menciona el obstáculo por nombre. Tiene el tono de la marca.
Esto no es un template genérico de "bienvenida a la familia". Esto es onboarding que activa.`,
  });

  // Slide 10 — Closing
  addClosingSlide(pptx, {
    title: 'Templates de secuencias de retención\n— el entregable',
    cta: 'Tu tarea: El entregable tiene tres plantillas — onboarding, reactivación y upsell. Elige UNA. La que más impacto tendría en tu negocio esta semana. Rellena los inputs. Ejecuta el prompt. Carga la secuencia en Mailchimp o Klaviyo.\n\nNo esperes a tenerla perfecta — tenla activa.',
    nextClass: 'War Room de Growth — donde adquisición y retención convergen en un sistema de decisión.',
    notes: `CIERRE [15:00–16:00]
El entregable de esta clase tiene las tres plantillas: onboarding, reactivación y upsell.
Tu tarea: elige una. Solo una. La que más impacto tendría en tu negocio esta semana.
Rellena los inputs. Ejecuta el prompt. Carga la secuencia en Mailchimp o Klaviyo. No esperes a tenerla perfecta — tenla activa.
La siguiente clase es el War Room de Growth. Donde todo lo que construiste en adquisición y retención converge en un sistema de decisión. Nos vemos ahí.`,
  });

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-05/clase-05.pptx' });
  console.log('✓ clase-05.pptx generado');
}

// ─── CLASE 06 ──────────────────────────────────────────────────────────────────

async function generateClase06() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'LAYOUT_WIDE', width: 13.33, height: 7.5 });
  pptx.layout = 'LAYOUT_WIDE';
  pptx.title = 'Clase 06 — War Room de Growth';
  pptx.author = 'Claude para Growth';

  // Slide 1 — Cover
  addCoverSlide(pptx, {
    title: 'War Room de Growth:\nun dashboard en vivo donde\nClaude es tu estratega',
    subtitle: 'Módulo 02 · Clase 06 · Instructor A',
    module: 'MÓDULO 02',
    duration: '16 minutos',
    notes: `INTRO [0:00–1:00]
Pregunta directa: ¿cuántas veces por semana revisas tus métricas de Meta, Google y email en tres pestañas distintas, calculas a mano dónde está cayendo el funnel y terminas tomando la misma decisión de siempre porque no tienes tiempo para analizar todo a la vez?
La respuesta honesta para la mayoría de equipos es: todos los días.
Hoy eso se termina.
En los próximos 16 minutos construyes tu War Room de Growth: una sola pantalla en Google Sheets donde pegas tus métricas cada mañana, Claude las lee, detecta dónde se está rompiendo el funnel y te da UNA recomendación clara.`,
  });

  // Slide 2 — Callout: the core principle
  addCalloutSlide(pptx, {
    quote: 'El problema no es que falten datos.\nEs que sobran y nadie decide.\nUna recomendación. No cinco. Una.',
    attribution: 'War Room de Growth — el sistema de decisión diaria',
    bgColor: C.black,
    textColor: C.white,
    accentColor: C.red,
    notes: `El War Room tiene una lógica muy específica. No es un reporte. No es un dashboard de vanity metrics. Es una pantalla de decisión.
Remarcar con pausa: "una recomendación, no cinco". El objetivo es que en 30 segundos puedas decidir y ejecutar.`,
  });

  // Slide 3 — Three-column: 3 zones of the War Room
  addThreeColumnSlide(pptx, {
    title: 'La estructura del War Room: 3 zonas, una pantalla',
    col1Title: 'ZONA 1 — ADQUISICIÓN',
    col1Items: [
      'Métricas de ayer de Meta, Google y email',
      'Fecha, canal, impresiones, clics, CTR',
      'CPM, CPC, gasto total, conversiones',
      'Costo por conversión, variación vs. lunes',
      'Fuente: plataformas. Tiempo: 3–4 min.',
    ],
    col2Title: 'ZONA 2 — ACTIVACIÓN',
    col2Items: [
      'Lo que pasa DESPUÉS del clic',
      'Nuevos registros, onboarding completado',
      '% activación día 1, usuarios activos 7d',
      'Churn de la semana, % retención 7d',
      'Nota del día (contexto cualitativo)',
    ],
    col3Title: 'ZONA 3 — COMANDO',
    col3Items: [
      'Celda debajo de las dos zonas',
      'Texto: "ANÁLISIS DE HOY — PEGAR AQUÍ"',
      'Seleccionar Zona 1 + Zona 2 → copiar',
      'Pegar en Claude → enviar',
      'Diagnóstico en menos de 40 segundos',
    ],
    notes: `DESARROLLO 1 [1:00–6:00]
Zona 1: Aquí pegas cada mañana los números de ayer. ¿Por qué solo ayer? Porque la decisión que tomas hoy es sobre lo que pasó ayer.
Zona 2: Esta es la zona que la mayoría ignora y donde vive el verdadero problema. Debes ver las dos zonas juntas porque el problema rara vez es donde parece estar.
Zona 3: Lo que haces — seleccionas todo el rango de métricas, lo copias, abres Claude con tu prompt de sistema ya cargado, pegas los datos y envías. Treinta segundos.`,
  });

  // Slide 4 — Big stat: 10 minutes
  addBigStatSlide(pptx, {
    stat: '< 10 min',
    statLabel: 'todos los días para tener una decisión soportada por datos',
    eyebrow: 'EL FLUJO COMPLETO DEL WAR ROOM',
    context: 'Sheet → pega métricas → copia todo → Claude → recomendación → ejecutar o delegar. Eso es todo.',
    notes: `El flujo completo:
Abres el Sheet. Pegas las métricas de ayer. Copias todo. Abres Claude. Pegas. Recibes una recomendación. La ejecutas o la delegas.
Tiempo total: menos de diez minutos. Todos los días.
Si tu CAC subió esta semana, el reflejo es ajustar las pujas en Meta. Pero si tu activación cayó al mismo tiempo, el problema es que estás trayendo a las personas equivocadas — y subir o bajar pujas no lo resuelve. Claude necesita ver los dos bloques juntos.`,
  });

  // Slide 5 — Steps: system prompt 4 blocks
  addStepsSlide(pptx, {
    title: 'El prompt de sistema: los 4 bloques que configuran a Claude como estratega',
    steps: [
      'BLOQUE 1 — El rol: "Eres el estratega de Growth de [empresa]. Tu rol es analizar las métricas diarias y producir exactamente UNA recomendación accionable para hoy."',
      'BLOQUE 2 — El contexto: Producto, modelo de negocio, etapa, canales activos, MÉTRICA NORTE (el campo más importante), presupuesto semanal.',
      'BLOQUE 3 — Instrucciones de análisis: Leer Zona 1 + Zona 2 juntas → identificar ruptura mayor → diagnóstico de causa → UNA recomendación → pedir dato si falta.',
      'BLOQUE 4 — Restricciones: Sin recomendaciones sin datos que las soporten. Si no puede diagnosticar, dice qué dato necesita. Sin repetir la misma recomendación dos días seguidos sin justificación.',
    ],
    notes: `DESARROLLO 2 [6:00–11:00]
El prompt de sistema es lo que convierte a Claude de chatbot genérico a estratega de tu War Room.
Nota el campo "métrica norte" — es el más importante. Si tu métrica norte es activación al día 1, Claude va a priorizar las señales de activación sobre las de adquisición aunque el CPM esté subiendo.
Define tu métrica norte antes de cargar el prompt.`,
  });

  // Slide 6 — Prompt: the system prompt itself
  addPromptSlide(pptx, {
    title: 'El formato de output — siempre el mismo, sin excepciones',
    promptLines: `DIAGNÓSTICO: [1-2 líneas: qué está cayendo y dónde en el funnel]

CAUSA PROBABLE: [1 línea: por qué está pasando, basado en datos]

RECOMENDACIÓN: [1 línea de acción concreta — canal, ajuste y magnitud]
Ejemplo: "Pausar Ad Set 3 en Meta y mover $X al Ad Set 1
— mayor activación en últimas 72h"

EXPERIMENTO OPCIONAL: [1 línea: qué testear esta semana]`,
    context: 'Cuatro campos. Todos de 1–2 líneas. El objetivo: que en 30 segundos puedas decidir y ejecutar. No que Claude te impresione con su análisis.',
    notes: `Fíjate en la estructura. Cuatro campos. Todos de una o dos líneas.
La restricción más importante: Claude no alucina cuando le das un marco de salida claro. Si falta un dato, te pregunta. Eso es mejor que una recomendación basada en suposiciones.
Este prompt, cargado en tu Project de Claude, convierte los primeros diez minutos de tu día en la decisión más importante de la jornada.`,
  });

  // Slide 7 — Two-column: adquisición vs activación diagnosis
  addTwoColumnSlide(pptx, {
    title: 'Por qué necesitas las dos zonas juntas: el diagnóstico que salva presupuesto',
    leftTitle: 'LO QUE VES SI MIRAS SOLO ZONA 1',
    leftItems: [
      'CPC subió 18% respecto al lunes',
      'Reflejo: ajustar pujas en Meta',
      'Resultado: gastas más para traer los mismos usuarios',
      'El problema sigue ahí — no lo resolviste',
      'Decisión basada en síntoma, no en causa',
    ],
    rightTitle: 'LO QUE VE CLAUDE CON ZONA 1 + 2',
    rightItems: [
      'CTR de Meta: 2.1% — dentro de rango normal',
      'Pero activación cayó de 34% a 19% en 3 días',
      'Diagnóstico: problema de lo que pasa POST-clic',
      'Recomendación: pausar ad set de mayor volumen/menor activación',
      'Causa probable: desconexión entre anuncio y onboarding',
    ],
    notes: `DEMO EN VIVO [11:00–15:00]
Lo que ven es el War Room con métricas de una campaña real — los números están ligeramente modificados.
CTR de Meta: 2.1%, dentro de rango. CPC subió 18%. Eso normalmente dispara el reflejo de ajustar pujas.
Pero miren la Zona 2: la activación cayó de 34% a 19% en tres días.
Eso no es un problema de Meta. Es un problema de lo que pasa después del clic.
Remarcar con pausa: "el problema rara vez está donde parece".`,
  });

  // Slide 8 — Bullet: the 4 analysis types Claude does best
  addBulletSlide(pptx, {
    title: 'Los 4 tipos de análisis que Claude hace mejor en el War Room',
    accentColor: C.orange,
    bullets: [
      'Identificar la caída en el funnel — en qué punto exacto se pierde más valor entre tráfico, registro y activación.',
      'Diagnosticar causas probables — separar si el problema es de adquisición (audiencia/mensaje), de producto (onboarding) o de retención (churn/engagement).',
      'Priorizar el experimento más accionable — UNA recomendación con canal, magnitud y dirección. No cinco hipótesis.',
      'Proyectar el impacto — qué debería cambiar si la recomendación funciona, y qué métrica confirmaría el diagnóstico al día siguiente.',
    ],
    notes: `Los datos sin interpretación son ruido. Claude convierte datos en decisiones.
Hay cuatro tipos de análisis que Claude hace mejor — y todos están diseñados para tener un output accionable, no teórico.
El War Room no va a reemplazar tu juicio. Va a asegurarse de que tu juicio tenga todos los datos del funnel antes de decidir.`,
  });

  // Slide 9 — Steps: daily War Room ritual
  addStepsSlide(pptx, {
    title: 'El ritual diario del War Room: 10 minutos, una decisión',
    steps: [
      'Min 0–3: Abrir War Room en Sheets. Pegar métricas de Meta, Google y email de ayer en Zona 1.',
      'Min 3–5: Pegar métricas de activación y retención en Zona 2. Escribir nota del día si hay contexto relevante.',
      'Min 5–6: Seleccionar Zona 1 + Zona 2 completas. Copiar (Cmd+C / Ctrl+C).',
      'Min 6–7: Abrir Claude → Project de Growth → nueva conversación. Pegar los datos. Enviar.',
      'Min 7–8: Leer el output de Claude: Diagnóstico → Causa → Recomendación → Experimento.',
      'Min 8–10: Ejecutar la recomendación o delegarla con contexto claro al equipo.',
    ],
    notes: `Este prompt no es una guía. Es el sistema operativo de tu morning review.
El War Room no es solo un dashboard. Es un ritual de decisión.
Nota técnica importante: NO intentar conectar Google Sheets con Claude via API. El flujo es copy-paste. El copy-paste funciona hoy. La integración técnica viene después.`,
  });

  // Slide 10 — Closing
  addClosingSlide(pptx, {
    title: 'Template del War Room de Growth\n— el entregable',
    cta: 'Tu entregable tiene dos cosas: la plantilla del War Room lista para duplicar en Google Sheets y el prompt de sistema completo para cargar en tu Project de Claude.\n\nTiempo para configurarlo: 20 minutos. A partir de mañana, los primeros 10 minutos de tu día tienen un output claro: una decisión, soportada por datos, lista para ejecutar.',
    nextClass: 'Claude Code — construyes tu primera herramienta de Growth sin escribir una línea de código.',
    notes: `CIERRE [15:00–16:00]
Tu entregable de esta clase tiene dos cosas: la plantilla del War Room lista para duplicar en Google Sheets y el prompt de sistema completo para cargar en tu Project de Claude.
Tiempo para configurarlo: veinte minutos.
A partir de mañana, los primeros diez minutos de tu día tienen un output claro: una decisión, soportada por datos, lista para ejecutar.
El War Room no va a reemplazar tu juicio. Va a asegurarse de que tu juicio tenga todos los datos del funnel antes de decidir.
Clase 7: Claude Code. Construimos tu primera herramienta de Growth sin escribir una línea de código.`,
  });

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-06/clase-06.pptx' });
  console.log('✓ clase-06.pptx generado');
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Generando presentaciones para Clases 04, 05 y 06...\n');
  try {
    await generateClase04();
    await generateClase05();
    await generateClase06();
    console.log('\nTodas las presentaciones generadas exitosamente.');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
