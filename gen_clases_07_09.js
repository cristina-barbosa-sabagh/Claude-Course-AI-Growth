const PptxGenJS = require('/Users/mariacristinabarbosa/Claude-Course-AI-Growth/node_modules/pptxgenjs');

// ─── COLOR PALETTE ────────────────────────────────────────────────────────────
const C = {
  red:    'FF0000',
  orange: 'FF6B00',
  yellow: 'EEFF89',
  white:  'FFFFFF',
  black:  '000000',
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function newPptx() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'LAYOUT_WIDE', width: 13.33, height: 7.5 });
  pptx.layout = 'LAYOUT_WIDE';
  return pptx;
}

// Cover slide (black bg, centered)
function addCover(pptx, title, subtitle, tag, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  // Red accent bar top
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.18, fill: { color: C.red } });

  // Tag label
  slide.addText(tag, {
    x: 0.6, y: 0.45, w: 12, h: 0.4,
    fontSize: 13, fontFace: 'Calibri', color: C.orange, bold: true, align: 'left',
  });

  // Title
  slide.addText(title, {
    x: 0.6, y: 1.4, w: 12.1, h: 2.8,
    fontSize: 40, fontFace: 'Arial Black', color: C.white,
    bold: true, align: 'left', wrap: true,
  });

  // Red underline accent
  slide.addShape(pptx.ShapeType.rect, { x: 0.6, y: 4.3, w: 3.2, h: 0.12, fill: { color: C.red } });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.6, y: 4.6, w: 12.1, h: 1.0,
    fontSize: 18, fontFace: 'Calibri', color: C.yellow, align: 'left', wrap: true,
  });

  // Bottom bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.15, w: 13.33, h: 0.35, fill: { color: C.red } });
  slide.addText('Claude para Growth · Módulo 03', {
    x: 0.4, y: 7.17, w: 12, h: 0.3,
    fontSize: 11, fontFace: 'Calibri', color: C.white, align: 'left',
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

// Content slide with title bar (white bg)
function addContent(pptx, title, bodyFn, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Red title bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.12, w: 12.5, h: 0.86,
    fontSize: 28, fontFace: 'Arial Black', color: C.white, bold: true, align: 'left',
  });

  // Orange accent left stripe
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 1.1, w: 0.12, h: 6.4, fill: { color: C.orange } });

  if (bodyFn) bodyFn(slide, pptx);
  if (notes) slide.addNotes(notes);
  return slide;
}

// Closing slide (black bg)
function addClosing(pptx, headline, body, cta, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.18, fill: { color: C.red } });

  // Big red label
  slide.addText('ENTREGABLE', {
    x: 0.6, y: 0.45, w: 5, h: 0.5,
    fontSize: 14, fontFace: 'Arial Black', color: C.red, bold: true,
  });

  slide.addText(headline, {
    x: 0.6, y: 1.1, w: 12, h: 2.0,
    fontSize: 36, fontFace: 'Arial Black', color: C.white, bold: true, align: 'left', wrap: true,
  });

  // Yellow callout box
  slide.addShape(pptx.ShapeType.rect, { x: 0.6, y: 3.3, w: 12.1, h: 2.5, fill: { color: C.yellow }, line: { color: C.orange, width: 2 } });
  slide.addText(body, {
    x: 0.85, y: 3.45, w: 11.7, h: 2.2,
    fontSize: 15, fontFace: 'Calibri', color: C.black, align: 'left', wrap: true,
  });

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.15, w: 13.33, h: 0.35, fill: { color: C.red } });
  slide.addText(cta, {
    x: 0.4, y: 7.17, w: 12, h: 0.3,
    fontSize: 11, fontFace: 'Calibri', color: C.white, align: 'left',
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

// Big stat slide
function addBigStat(pptx, title, stat, unit, context, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.black } });
  slide.addText(title, {
    x: 0.4, y: 0.12, w: 12.5, h: 0.86,
    fontSize: 28, fontFace: 'Arial Black', color: C.white, bold: true,
  });

  // Stat number
  slide.addText(stat, {
    x: 1.5, y: 1.5, w: 10.3, h: 3.2,
    fontSize: 120, fontFace: 'Arial Black', color: C.red, bold: true, align: 'center',
  });
  slide.addText(unit, {
    x: 1.5, y: 4.6, w: 10.3, h: 0.8,
    fontSize: 28, fontFace: 'Arial Black', color: C.orange, bold: true, align: 'center',
  });

  // Context box
  slide.addShape(pptx.ShapeType.rect, { x: 2.0, y: 5.55, w: 9.3, h: 1.4, fill: { color: C.yellow } });
  slide.addText(context, {
    x: 2.2, y: 5.65, w: 8.9, h: 1.2,
    fontSize: 16, fontFace: 'Calibri', color: C.black, align: 'center', wrap: true,
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

// Two-column slide
function addTwoCol(pptx, title, leftHeader, leftItems, rightHeader, rightItems, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.12, w: 12.5, h: 0.86,
    fontSize: 28, fontFace: 'Arial Black', color: C.white, bold: true,
  });

  // Left column
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.25, w: 6.0, h: 0.6, fill: { color: C.black } });
  slide.addText(leftHeader, { x: 0.45, y: 1.3, w: 5.7, h: 0.5, fontSize: 16, fontFace: 'Arial Black', color: C.white, bold: true });
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.85, w: 6.0, h: 5.2, fill: { color: 'F5F5F5' }, line: { color: 'DDDDDD', width: 1 } });
  const leftBullets = leftItems.map(t => ({ text: t, options: { bullet: { type: 'bullet' }, paraSpaceAfter: 8 } }));
  slide.addText(leftBullets, { x: 0.5, y: 2.0, w: 5.6, h: 4.8, fontSize: 14, fontFace: 'Calibri', color: C.black, wrap: true });

  // Right column
  slide.addShape(pptx.ShapeType.rect, { x: 7.0, y: 1.25, w: 6.0, h: 0.6, fill: { color: C.red } });
  slide.addText(rightHeader, { x: 7.15, y: 1.3, w: 5.7, h: 0.5, fontSize: 16, fontFace: 'Arial Black', color: C.white, bold: true });
  slide.addShape(pptx.ShapeType.rect, { x: 7.0, y: 1.85, w: 6.0, h: 5.2, fill: { color: 'FFF8F0' }, line: { color: C.orange, width: 1 } });
  const rightBullets = rightItems.map(t => ({ text: t, options: { bullet: { type: 'bullet' }, paraSpaceAfter: 8 } }));
  slide.addText(rightBullets, { x: 7.2, y: 2.0, w: 5.6, h: 4.8, fontSize: 14, fontFace: 'Calibri', color: C.black, wrap: true });

  if (notes) slide.addNotes(notes);
  return slide;
}

// Three-column layout
function addThreeCol(pptx, title, cols, notes) {
  // cols: [{header, icon, items[]}, ...]
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.12, w: 12.5, h: 0.86,
    fontSize: 28, fontFace: 'Arial Black', color: C.white, bold: true,
  });

  const colors = [C.red, C.orange, C.black];
  const xs = [0.25, 4.67, 9.08];
  const w = 4.2;

  cols.forEach((col, i) => {
    slide.addShape(pptx.ShapeType.rect, { x: xs[i], y: 1.25, w, h: 0.65, fill: { color: colors[i] } });
    slide.addText(col.header, { x: xs[i] + 0.1, y: 1.28, w: w - 0.2, h: 0.58, fontSize: 15, fontFace: 'Arial Black', color: C.white, bold: true, align: 'center' });

    if (col.icon) {
      slide.addText(col.icon, { x: xs[i], y: 1.95, w, h: 0.8, fontSize: 32, align: 'center' });
    }

    slide.addShape(pptx.ShapeType.rect, { x: xs[i], y: col.icon ? 2.75 : 1.9, w, h: col.icon ? 4.5 : 5.35, fill: { color: 'FAFAFA' }, line: { color: 'E0E0E0', width: 1 } });
    const bullets = col.items.map(t => ({ text: t, options: { bullet: { type: 'bullet' }, paraSpaceAfter: 10 } }));
    slide.addText(bullets, { x: xs[i] + 0.15, y: col.icon ? 2.9 : 2.05, w: w - 0.3, h: 4.2, fontSize: 13, fontFace: 'Calibri', color: C.black, wrap: true });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

// Step-by-step slide
function addSteps(pptx, title, steps, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.12, w: 12.5, h: 0.86,
    fontSize: 28, fontFace: 'Arial Black', color: C.white, bold: true,
  });

  const stepColors = [C.red, C.orange, 'CC9900', '228B22', '1565C0'];
  const yBase = 1.35;
  const rowH = 1.02;

  steps.forEach((step, i) => {
    const y = yBase + i * rowH;
    // Number circle
    slide.addShape(pptx.ShapeType.ellipse, { x: 0.3, y: y + 0.08, w: 0.72, h: 0.72, fill: { color: stepColors[i] || C.orange } });
    slide.addText(`${i + 1}`, { x: 0.3, y: y + 0.08, w: 0.72, h: 0.72, fontSize: 20, fontFace: 'Arial Black', color: C.white, bold: true, align: 'center', valign: 'middle' });
    // Step text
    slide.addShape(pptx.ShapeType.rect, { x: 1.2, y: y + 0.06, w: 11.7, h: 0.8, fill: { color: i % 2 === 0 ? 'FFF3E0' : 'F5F5F5' }, line: { color: i % 2 === 0 ? C.orange : 'CCCCCC', width: 1 } });
    slide.addText(step, { x: 1.4, y: y + 0.1, w: 11.4, h: 0.7, fontSize: 14, fontFace: 'Calibri', color: C.black, valign: 'middle', wrap: true });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

// Quote / callout slide
function addQuote(pptx, title, quote, attribution, bgColor, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: bgColor || C.black };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.18, fill: { color: C.red } });

  // Quote marks
  slide.addText('\u201C', {
    x: 0.4, y: 0.5, w: 2, h: 2,
    fontSize: 100, fontFace: 'Georgia', color: C.red, bold: true,
  });

  slide.addText(quote, {
    x: 1.2, y: 1.5, w: 11.5, h: 3.5,
    fontSize: 28, fontFace: 'Arial Black', color: bgColor === C.white ? C.black : C.white,
    bold: true, align: 'left', wrap: true, italic: false,
  });

  if (attribution) {
    slide.addShape(pptx.ShapeType.rect, { x: 1.2, y: 5.3, w: 6, h: 0.08, fill: { color: C.orange } });
    slide.addText(attribution, {
      x: 1.2, y: 5.5, w: 11, h: 0.5,
      fontSize: 16, fontFace: 'Calibri', color: bgColor === C.white ? C.black : C.yellow, italic: true,
    });
  }

  if (title) {
    slide.addText(title, {
      x: 0.4, y: 6.7, w: 12.5, h: 0.5,
      fontSize: 13, fontFace: 'Calibri', color: C.orange, bold: true,
    });
  }

  if (notes) slide.addNotes(notes);
  return slide;
}

// Before / After slide
function addBeforeAfter(pptx, title, beforeTitle, beforeItems, afterTitle, afterItems, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.red } });
  slide.addText(title, { x: 0.4, y: 0.12, w: 12.5, h: 0.86, fontSize: 28, fontFace: 'Arial Black', color: C.white, bold: true });

  // Before (dark)
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.25, w: 6.0, h: 0.65, fill: { color: '555555' } });
  slide.addText(beforeTitle, { x: 0.45, y: 1.3, w: 5.7, h: 0.55, fontSize: 18, fontFace: 'Arial Black', color: C.white, bold: true, align: 'center' });
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.9, w: 6.0, h: 5.25, fill: { color: 'F0F0F0' } });
  const bBullets = beforeItems.map(t => ({ text: t, options: { bullet: { type: 'bullet' }, paraSpaceAfter: 10 } }));
  slide.addText(bBullets, { x: 0.5, y: 2.1, w: 5.6, h: 4.8, fontSize: 14, fontFace: 'Calibri', color: '444444', wrap: true });

  // After (orange/warm)
  slide.addShape(pptx.ShapeType.rect, { x: 7.0, y: 1.25, w: 6.0, h: 0.65, fill: { color: C.orange } });
  slide.addText(afterTitle, { x: 7.15, y: 1.3, w: 5.7, h: 0.55, fontSize: 18, fontFace: 'Arial Black', color: C.white, bold: true, align: 'center' });
  slide.addShape(pptx.ShapeType.rect, { x: 7.0, y: 1.9, w: 6.0, h: 5.25, fill: { color: 'FFFEF0' }, line: { color: C.orange, width: 2 } });
  const aBullets = afterItems.map(t => ({ text: t, options: { bullet: { type: 'bullet' }, paraSpaceAfter: 10 } }));
  slide.addText(aBullets, { x: 7.2, y: 2.1, w: 5.6, h: 4.8, fontSize: 14, fontFace: 'Calibri', color: C.black, wrap: true });

  // Arrow between
  slide.addShape(pptx.ShapeType.rect, { x: 6.3, y: 3.8, w: 0.7, h: 0.0, fill: { color: C.red } });
  slide.addText('→', { x: 6.15, y: 3.4, w: 1.0, h: 0.8, fontSize: 36, fontFace: 'Arial Black', color: C.red, align: 'center' });

  if (notes) slide.addNotes(notes);
  return slide;
}

// Bullet list slide
function addBulletSlide(pptx, title, intro, bullets, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.red } });
  slide.addText(title, { x: 0.4, y: 0.12, w: 12.5, h: 0.86, fontSize: 28, fontFace: 'Arial Black', color: C.white, bold: true });

  if (intro) {
    slide.addText(intro, { x: 0.45, y: 1.25, w: 12.4, h: 0.65, fontSize: 16, fontFace: 'Calibri', color: C.orange, bold: true, italic: true });
  }

  // Orange accent left
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 1.1, w: 0.12, h: 6.4, fill: { color: C.orange } });

  const yStart = intro ? 2.0 : 1.5;
  bullets.forEach((b, i) => {
    const bgColors = [C.yellow, 'FFF0E0', 'E8FFE8', 'E8F0FF', 'FFE8E8'];
    slide.addShape(pptx.ShapeType.rect, { x: 0.35, y: yStart + i * 1.0, w: 12.5, h: 0.88, fill: { color: bgColors[i % bgColors.length] }, line: { color: 'DDDDDD', width: 1 } });
    // Bullet accent
    slide.addShape(pptx.ShapeType.rect, { x: 0.35, y: yStart + i * 1.0, w: 0.18, h: 0.88, fill: { color: i % 2 === 0 ? C.red : C.orange } });
    slide.addText(b, { x: 0.65, y: yStart + i * 1.0 + 0.08, w: 12.1, h: 0.72, fontSize: 15, fontFace: 'Calibri', color: C.black, valign: 'middle', wrap: true });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

// Demo / live slide
function addDemo(pptx, title, tag, description, steps, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.18, fill: { color: C.red } });

  slide.addShape(pptx.ShapeType.rect, { x: 0.4, y: 0.35, w: 2.5, h: 0.55, fill: { color: C.red } });
  slide.addText(tag, { x: 0.4, y: 0.35, w: 2.5, h: 0.55, fontSize: 14, fontFace: 'Arial Black', color: C.white, bold: true, align: 'center' });

  slide.addText(title, { x: 0.4, y: 1.05, w: 12.5, h: 1.4, fontSize: 36, fontFace: 'Arial Black', color: C.white, bold: true, align: 'left', wrap: true });

  if (description) {
    slide.addText(description, { x: 0.4, y: 2.6, w: 12.5, h: 0.65, fontSize: 16, fontFace: 'Calibri', color: C.yellow, italic: true, wrap: true });
  }

  steps.forEach((s, i) => {
    slide.addShape(pptx.ShapeType.rect, { x: 0.4, y: 3.4 + i * 0.88, w: 12.5, h: 0.78, fill: { color: i % 2 === 0 ? '1A1A1A' : '222222' }, line: { color: C.orange, width: 1 } });
    slide.addShape(pptx.ShapeType.rect, { x: 0.4, y: 3.4 + i * 0.88, w: 0.65, h: 0.78, fill: { color: C.orange } });
    slide.addText(`${i + 1}`, { x: 0.4, y: 3.4 + i * 0.88, w: 0.65, h: 0.78, fontSize: 16, fontFace: 'Arial Black', color: C.white, bold: true, align: 'center', valign: 'middle' });
    slide.addText(s, { x: 1.15, y: 3.45 + i * 0.88, w: 11.7, h: 0.68, fontSize: 14, fontFace: 'Calibri', color: C.white, valign: 'middle', wrap: true });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

// ════════════════════════════════════════════════════════════════════════════════
//  CLASE 07
// ════════════════════════════════════════════════════════════════════════════════
async function buildClase07() {
  const pptx = newPptx();

  // Slide 1: Cover
  addCover(pptx,
    'Claude Code sin miedo:\ntu primer output\nen 10 minutos',
    'Módulo 03 · Clase 07 · 14 minutos',
    'MÓDULO 03 — CLAUDE CODE',
    'Hasta ahora, si querías una calculadora de CAC/LTV personalizada para tu negocio, tenías dos opciones: pedírsela a un desarrollador y esperar dos semanas, o conformarte con una hoja de cálculo que no hace lo que necesitas. Claude Code es la tercera opción.'
  );

  // Slide 2: Before/After — el problema con quote
  addQuote(pptx,
    'Clase 07 · Módulo 03 — La tercera opción',
    'Tú describes. Claude construye. Tú usas.',
    null,
    C.black,
    'Claude Code no es programar. No necesitas saber qué es Python ni qué es JavaScript. Es describir lo que quieres en español y Claude construye la herramienta. Sin terminal. Sin GitHub. Sin "espera, déjame revisar con el dev".'
  );

  // Slide 3: Two-col — qué NO es vs qué SÍ es
  addTwoCol(pptx,
    'Claude Code: lo que cambia para Growth',
    '✗ Lo que NO es Claude Code',
    [
      'Un editor donde tienes que escribir código',
      'Una herramienta para desarrolladores',
      'Algo que requiere configuración técnica',
      'Una plataforma que exige conocimiento de programación',
      'Un sustituto de ingenieros de software',
    ],
    '✓ Lo que SÍ es para un Chief of Growth',
    [
      'Una interfaz donde describes lo que quieres en lenguaje natural',
      'Claude escribe el código, lo ejecuta y te entrega el resultado',
      'Tu fábrica de herramientas de Growth personalizadas',
      'La respuesta a "no existe exactamente lo que necesito"',
      'Lista de herramientas en minutos, no en días',
    ],
    'La mayoría de la gente confunde Claude Code con dos cosas que no es. No es un editor de código donde tienes que escribir funciones y variables. No es para desarrolladores que quieren que Claude les ayude a codificar más rápido.'
  );

  // Slide 4: Big stat
  addBigStat(pptx,
    'El costo real de no tener las herramientas correctas',
    '2',
    'semanas de espera por cada herramienta personalizada',
    'Tiempo promedio de espera cuando el dev lo hace. Con Claude Code: 10 minutos. Las herramientas que más necesitas son siempre demasiado específicas para existir en el mercado.',
    'Piensa en cuántas herramientas necesitas que no existen exactamente como las necesitas: calculadora de payback, tracker de cohortes, generador de copies con tu brief exacto, calculador de mix de canales con tus CPAs reales.'
  );

  // Slide 5: Three-col — casos de uso Growth
  addThreeCol(pptx,
    'Los 3 casos de uso de Growth sin código',
    [
      {
        header: 'Generadores de Reportes',
        icon: '📊',
        items: ['Calculadora de CAC/LTV', 'Dashboard de KPIs semanal', 'ROI por canal', 'Análisis de cohortes'],
      },
      {
        header: 'Scripts de Análisis',
        icon: '🔬',
        items: ['Tracker de experimentos', 'Analizador de retención', 'Mix de canales óptimo', 'Calculadora de pricing'],
      },
      {
        header: 'Automatizaciones',
        icon: '⚡',
        items: ['Reporte semanal auto', 'Alertas de anomalías', 'Generador de copies', 'Planificador de emails'],
      },
    ],
    'Los tres grandes usos de Claude Code para Growth: si no requieres un backend complejo, Claude Code lo construye en minutos.'
  );

  // Slide 6: Step-by-step — el loop de trabajo
  addSteps(pptx,
    'El loop de trabajo con Claude Code',
    [
      'DESCRIBES: el problema en lenguaje natural, con contexto de negocio — qué inputs tiene, qué calcula, cómo quieres ver el resultado',
      'CLAUDE CONSTRUYE: escribe el código, lo ejecuta y te entrega el resultado en tiempo real — tú no ves el código si no quieres',
      'REVISAS: si el resultado es lo que pediste, lo usas — si no, describes qué está mal en lenguaje natural y Claude corrige',
      'ITERAS (si necesario): el loop se repite hasta que el output es exactamente lo que necesitabas',
      'USAS: compartes con tu equipo, abres en el navegador, o publicas con un comando',
    ],
    'Este loop tarda entre 5 y 15 minutos para la mayoría de herramientas de Growth simples. Para herramientas más complejas, puede tardar 30 minutos — pero son herramientas que antes tomaban días.'
  );

  // Slide 7: Step-by-step — instalación
  addSteps(pptx,
    'Instala Claude Code en 5 pasos (menos de 8 minutos)',
    [
      'PASO 1 — Verifica Node.js: abre Terminal, escribe node --version. Si ves un número → ya lo tienes. Si ves un error → ve a nodejs.org y descarga la versión LTS',
      'PASO 2 — Instala Claude Code: pega en Terminal: npm install -g @anthropic-ai/claude-code → presiona Enter → espera 30 seg',
      'PASO 3 — Crea tu carpeta de trabajo: en Finder/Explorer crea una carpeta llamada "Growth Tools" → abre Terminal en esa carpeta',
      'PASO 4 — Autentícate: escribe claude → abre el link que aparece → inicia sesión con tu cuenta de claude.ai → autoriza',
      'PASO 5 — Verifica: con Claude Code activo, escribe "Crea un archivo test.txt" → si lo crea, todo funciona',
    ],
    'Solo dos comandos: npm install -g @anthropic-ai/claude-code y claude. Eso es todo lo técnico que necesitas saber. A partir de ahora: abres Terminal, navegas a Growth Tools y escribes claude.'
  );

  // Slide 8: Bullet list — las 10 instrucciones de Growth
  addBulletSlide(pptx,
    '10 Instrucciones de Growth listas para ejecutar',
    'Copia, pega en Claude Code, presiona Enter:',
    [
      '01. Calculadora de CAC/LTV con ratio LTV:CAC y payback period',
      '02. Generador de copy para campañas en formato tabla (5 variaciones)',
      '03. Tracker de experimentos de Growth con localStorage',
      '04. Calculadora de mix de canales y presupuesto óptimo',
      '05. Analizador de cohortes de retención con código de color',
    ],
    'En el entregable de esta clase tienes las 10 instrucciones completas con prompts listos para copiar. Cada una produce un archivo HTML funcional que puedes compartir con tu equipo hoy.'
  );

  // Slide 9: Demo slide
  addDemo(pptx,
    'Demo en vivo: Calculadora de CAC/LTV en 10 minutos',
    '🔴 EN VIVO',
    'De cero a calculadora funcional — sin tocar una línea de código',
    [
      'Abrir Terminal → navegar a carpeta Growth Tools → escribir claude',
      'Describir la calculadora: inputs de CAC, LTV, margen, churn → outputs calculados automáticamente',
      'Claude genera el HTML en tiempo real → revisar el resultado en el navegador',
      'Si algo no está bien → describir en lenguaje natural → Claude corrige al instante',
      'Resultado: cac-ltv-calculator.html — lista para compartir con el equipo hoy',
    ],
    'Lo que hago ahora es exactamente lo que harás tú. Le estoy describiendo a Claude Code qué quiero: una calculadora de CAC/LTV con mis supuestos específicos. No estoy escribiendo código. Estoy describiendo un problema de negocio.'
  );

  // Slide 10: Closing / Entregable
  addClosing(pptx,
    'Tu primer script de Growth\ncon Claude Code',
    'ENTREGABLE:\n✓ Guía de instalación de 5 pasos (con screenshots)\n✓ 10 instrucciones de Growth listas para copiar y ejecutar en Claude Code\n✓ Troubleshooting de los problemas más comunes\n✓ Checklist de verificación: tu loop completo\n\nTU TAREA: instala Claude Code, ejecuta al menos 1 instrucción del entregable y trae el resultado a la próxima clase.',
    'Clase 08: Landing page de experimento en vivo — de idea a URL en 20 minutos',
    'Tu tarea antes de la próxima clase: instala Claude Code, ejecuta al menos una de las 10 instrucciones de Growth del entregable y trae el resultado. No importa si el primer resultado no es perfecto. El punto es completar el loop: describir, ver el output, iterar. Una vez que haces ese loop una vez, ya no tienes miedo de Claude Code.'
  );

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-07/clase-07.pptx' });
  console.log('✓ clase-07.pptx generado');
}

// ════════════════════════════════════════════════════════════════════════════════
//  CLASE 08
// ════════════════════════════════════════════════════════════════════════════════
async function buildClase08() {
  const pptx = newPptx();

  // Slide 1: Cover
  addCover(pptx,
    'Landing page de experimento\nen vivo: de idea a URL\nen 20 minutos',
    'Módulo 03 · Clase 08 · 16 minutos',
    'MÓDULO 03 — CLAUDE CODE',
    '¿Cuántas ideas de experimento tienes ahora mismo que no han llegado a producción porque necesitabas a un desarrollador para hacer la landing? La mayoría de Chiefs of Growth tienen entre tres y cinco de esas ideas esperando. Hoy las desbloqueamos todas.'
  );

  // Slide 2: Big stat
  addBigStat(pptx,
    'El experimento más rápido es el que prueba antes de construir',
    '3–5',
    'ideas de experimento bloqueadas esperando al desarrollador',
    'Hoy las desbloqueamos todas. Dieciséis minutos. Al final tienes una URL funcionando con tu página de experimento publicada. No una maqueta. No un boceto. Una URL real.',
    'La pregunta directa: ¿cuántas ideas de experimento tienes ahora mismo que no han llegado a producción porque necesitabas a un desarrollador para hacer la landing?'
  );

  // Slide 3: Bullet list — los 7 campos del brief
  addBulletSlide(pptx,
    'El brief perfecto para Claude Code: 7 campos',
    'Claude Code no lee mentes — pero sí lee briefs bien escritos:',
    [
      'Campo 1 — PROPUESTA DE VALOR: una sola línea, el beneficio que obtiene el visitante al convertir (no el feature — el resultado)',
      'Campo 2 — ICP: rol, tipo de empresa, problema concreto — cuanto más específico, mejor el copy',
      'Campo 3 — CTA PRINCIPAL: una sola acción — "Reservar demo de 20 minutos" es mejor que "Contáctanos"',
      'Campo 4 — BENEFICIOS CLAVE: 3–5 resultados concretos, cada uno con un número si es posible',
      'Campo 5 — OBJECIONES: las 3 razones por las que tu ICP no convierte ahora mismo',
    ],
    'Con 7 campos, Claude Code construye una landing de conversión completa: H1, subtítulo, beneficios, objeciones, prueba social, formulario y CTA. No necesitas saber HTML. Solo tienes que saber tu negocio.'
  );

  // Slide 4: Two-col — campos 6 y 7 + principio del brief
  addTwoCol(pptx,
    'Completando el brief: prueba social y URL',
    'Campo 6 — Prueba Social',
    [
      'Lo que tienes disponible para generar credibilidad',
      'Número de clientes activos o usuarios',
      'Testimonios reales con nombre y cargo',
      'Logos de empresas que lo usan (si tienes permiso)',
      'Si no tienes nada: "usar placeholders" — Claude propone opciones realistas',
      'Regla: no inventes números',
    ],
    'Campo 7 — URL del Experimento',
    [
      'El slug que quieres usar para esta landing',
      'Limpio, descriptivo y rastreable en Analytics',
      'Ejemplos válidos: /demo-reportes, /prueba-gratis-sales',
      'Evita slugs genéricos como /landing1',
      'Con UTM params en los links que van a esta URL',
      'Una landing = una URL = un experimento',
    ],
    'Siete campos. Cuanto más específico seas en cada campo, mejor va a ser la landing que genera Claude Code. El H1 viene de tu propuesta de valor. El copy viene de tu ICP.'
  );

  // Slide 5: Three-col — anatomía de la landing que Claude genera
  addThreeCol(pptx,
    'La landing que Claude Code construye con tu brief',
    [
      {
        header: 'Hero Section',
        icon: null,
        items: [
          'H1: tu propuesta de valor exacta',
          'Subtítulo: ICP + problema que resuelve',
          'Formulario: email + nombre',
          'CTA en el fold (visible sin scroll)',
          'Sin distracciones — un solo camino',
        ],
      },
      {
        header: 'Cuerpo de la Página',
        icon: null,
        items: [
          'Sección de beneficios con iconos SVG',
          'Prueba social: clientes + testimonio',
          'FAQ: 3 objeciones desmontadas',
          'CTA repetido al final con copy diferente',
          'Footer mínimo',
        ],
      },
      {
        header: 'Specs Técnicas',
        icon: null,
        items: [
          'Un solo archivo HTML (todo incluido)',
          'CSS interno — sin archivos separados',
          'Mobile-first y responsive',
          'Sin dependencias externas',
          'Funciona sin internet (excepto Google Fonts)',
        ],
      },
    ],
    'Siete campos → una landing completa en 2–4 minutos de generación. No tienes que saber HTML. No tienes que saber CSS. Solo tienes que saber tu negocio.'
  );

  // Slide 6: Step-by-step — de archivos a URL (Vercel)
  addSteps(pptx,
    'De código a URL: deploy en Vercel en 3 pasos',
    [
      'Ir a vercel.com → crear cuenta gratuita con tu email de trabajo (plan Hobby, sin tarjeta de crédito)',
      'Dashboard → Add New → Project → arrastrar la carpeta que generó Claude Code (o seleccionar "Deploy from file")',
      'Vercel detecta automáticamente el proyecto estático → Deploy → en menos de 60 segundos tienes tu URL: [nombre].vercel.app',
      'OPCIONAL: conectar tu dominio propio → Settings → Domains → seguir instrucciones de DNS (5 minutos)',
      'RESULTADO: URL pública lista para recibir tráfico y medir conversiones',
    ],
    'Una vez que Claude Code genera tu landing, tienes una carpeta con archivos. Probablemente un index.html. Publicarla en internet tarda literalmente dos minutos. Vercel es gratis para experimentos, el deploy es instantáneo y las páginas cargan rápido.'
  );

  // Slide 7: Big stat — el tiempo real
  addBigStat(pptx,
    'El tiempo real de idea a URL publicada',
    '10',
    'minutos de la idea a la URL funcionando',
    'Brief: 5 min · Generación Claude Code: 3 min · Deploy Vercel: 2 min\nLos otros 10 minutos de la clase son para hacerlo en vivo juntos.',
    '5 minutos llenar el brief, 3 minutos Claude Code genera la landing, 2 minutos subir a Vercel. Total: 10 minutos de la idea a la URL.'
  );

  // Slide 8: Quote — por qué Vercel
  addQuote(pptx,
    'Por qué Vercel y no otra opción',
    'Sin tickets en Jira. Sin reuniones de estimación. Sin esperar al dev.',
    'Chief of Growth — después de publicar su primera landing en Vercel',
    C.black,
    'Vercel es la opción porque es gratis para experimentos, el deploy es instantáneo (sin servidores, sin configuración), las páginas cargan rápido (y la velocidad afecta la conversión), y puedes tener múltiples experimentos en URLs separadas sin costo adicional. Netlify también funciona con exactamente el mismo proceso.'
  );

  // Slide 9: Demo slide
  addDemo(pptx,
    'Demo en vivo: de brief a URL en 20 minutos',
    '🔴 EN VIVO',
    'Producto de ejemplo → brief completo → Claude Code genera el HTML → Vercel publica la URL',
    [
      'Completar los 7 campos del brief con el producto de ejemplo',
      'Pegar el prompt completo en Claude Code → esperar 2–4 minutos',
      'Revisar la landing en el navegador → verificar H1, beneficios, CTA',
      'Arrastrar la carpeta a Vercel → hacer clic en Deploy',
      'Compartir la URL en el chat del curso — la landing está viva',
    ],
    'Lo que ves no es un truco de demo. Es exactamente cómo publicas tus experimentos de Growth de ahora en adelante. Fíjate en lo que está pasando: Claude Code está escribiendo el HTML estructura por estructura. No estoy tocando nada.'
  );

  // Slide 10: Antes / Después — flujo completo
  addBeforeAfter(pptx,
    'Antes y después: cómo publicas un experimento',
    'ANTES (sin Claude Code)',
    [
      'Tienes la idea → abres Jira o el chat del dev',
      'Escribes el brief → esperas que el dev tenga slot',
      'Primera versión: 3–5 días hábiles',
      'Revisiones: 1–2 rondas más de espera',
      'Deploy: otro ticket, otro tiempo',
      'Total: 2–3 semanas para probar una hipótesis',
    ],
    'AHORA (con Claude Code + Vercel)',
    [
      'Tienes la idea → llenas el brief en 5 minutos',
      'Pegas el prompt en Claude Code → 3 minutos',
      'Revisas la landing en el navegador → ok',
      'Arrastras a Vercel → 60 segundos de deploy',
      'URL lista → mandas tráfico y mides',
      'Total: 10 minutos para probar la hipótesis',
    ],
    'Tu tarea: completa el brief de landing del entregable. Siete campos. Quince minutos. Al final tienes los inputs para que Claude Code construya tu primera landing de experimento.'
  );

  // Slide 11: Closing
  addClosing(pptx,
    'Template de landing page\nde experimento',
    'ENTREGABLE:\n✓ Plantilla de brief de 7 campos lista para llenar con tu producto\n✓ Prompt completo para pegar en Claude Code (genera la landing completa)\n✓ Lista de verificación antes de publicar (7 puntos)\n✓ Instrucciones de deploy en Vercel paso a paso\n\nTU TAREA: completa los 7 campos del brief, ejecuta el prompt en Claude Code y publica tu primera landing de experimento.',
    'Clase 09: Automatiza tu Growth — reportes, alertas y trackers sin tocar código',
    'Lo que acabas de ver no es un truco de demo. Es exactamente cómo publicas tus experimentos de Growth de ahora en adelante. Sin esperar al desarrollador. Sin tickets en Jira. Sin reuniones de estimación. La clase 9 construimos el resto de tu stack: tracker, reportes y alertas.'
  );

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-08/clase-08.pptx' });
  console.log('✓ clase-08.pptx generado');
}

// ════════════════════════════════════════════════════════════════════════════════
//  CLASE 09
// ════════════════════════════════════════════════════════════════════════════════
async function buildClase09() {
  const pptx = newPptx();

  // Slide 1: Cover
  addCover(pptx,
    'Automatiza tu Growth:\nreportes, alertas y trackers\nsin tocar código',
    'Módulo 03 · Clase 09 · 16 minutos',
    'MÓDULO 03 — CLAUDE CODE',
    '¿Por qué tengo que exportar datos a mano, armar el reporte en un Google Sheet, copiar los números de tres plataformas distintas y mandarlo por Slack cada lunes? Eso no es Growth. Eso es administración. Hoy construimos las tres herramientas que eliminan esa administración.'
  );

  // Slide 2: Big stat — el problema del reporte manual
  addBigStat(pptx,
    'El costo oculto del reporte semanal manual',
    '156',
    'horas al año armando reportes que pueden automatizarse',
    '52 semanas × 3 horas promedio por reporte = 156 horas/año. Con Claude Code: un script de Python que corre cada lunes a las 8am y manda el resumen a Slack.',
    'El reporte semanal de Growth tiene un problema estructural: la persona que lo arma es la que menos tiempo tiene para armarlo. Típicamente el Chief de Growth o el Founder saca métricas de Meta, Google, CRM, email. 52 semanas al año.'
  );

  // Slide 3: Three-col — los 3 tipos de automatización
  addThreeCol(pptx,
    'Los 3 tipos de automatización de Growth',
    [
      {
        header: 'Tracker de Experimentos',
        icon: '📋',
        items: [
          'Google Sheet con 12 columnas estructuradas',
          'Hipótesis, estado, métricas, aprendizajes',
          'Colores condicionales automáticos',
          'Hoja de resumen con tasas de éxito',
          'Manual — tú agregas cada experimento',
        ],
      },
      {
        header: 'Reporte Semanal Auto',
        icon: '📊',
        items: [
          'Script Python que lee tu Google Sheet',
          'Calcula deltas semana a semana',
          'Genera resumen de texto con highlights',
          'Envía a Slack o email cada lunes 8am',
          'Automático — configuras una vez',
        ],
      },
      {
        header: 'Sistema de Alertas',
        icon: '🚨',
        items: [
          'Detecta cuando una métrica cruza el umbral',
          'Alerta inmediata en Slack con acción sugerida',
          'Cero ruido cuando todo está dentro del rango',
          'Config JSON editable sin tocar código',
          'Automático — corre diariamente',
        ],
      },
    ],
    'Tres herramientas. Las tres construidas con Claude Code. Las tres sin tocar código después de que Claude Code las genera.'
  );

  // Slide 4: Bullet list — estructura del tracker (12 columnas)
  addBulletSlide(pptx,
    'Estructura del Tracker de Experimentos: 12 columnas',
    'Lo que cualquier miembro del equipo debe responder en 30 segundos:',
    [
      'ID · Fecha de inicio · Fecha de fin estimada · Área del funnel',
      'Nombre del experimento · Hipótesis en formato "Creemos que... resultará en... porque..."',
      'Canal o punto de contacto · Métrica primaria (la única que define ganó/perdió)',
      'Baseline · Target · Resultado actual → % mejora calculado automáticamente',
      'Estado (En diseño/Activo/En análisis/Concluido) · Resultado final · Aprendizaje clave · Próximo experimento',
    ],
    'La mayoría de equipos no puede responder en 30 segundos qué están testeando, cuál es la hipótesis, cuáles son los resultados y qué aprendieron. No porque no hagan experimentos — sino porque no los registran de forma sistemática.'
  );

  // Slide 5: Two-col — por qué Google Sheets + lo que Claude genera extra
  addTwoCol(pptx,
    'Por qué Google Sheets y qué genera Claude Code',
    'Por qué Google Sheets',
    [
      'Todo el equipo accede sin instalar nada',
      'Filtros por estado, área o canal en segundos',
      'Conectable con Google Data Studio',
      'Claude Code genera fórmulas perfectas en español',
      'Sin límite de filas para un tracker de experimentos',
      'Compartible como link — no como adjunto',
    ],
    'Lo que Claude Code genera extra',
    [
      'Fórmulas automáticas de % de mejora vs baseline',
      'Colores condicionales por estado y resultado',
      'Hoja de resumen con métricas agregadas',
      'Dropdowns con tus áreas y canales',
      '3 filas de ejemplo con datos ficticios realistas',
      'Instrucciones de instalación comentadas en el script',
    ],
    'Lo que vamos a construir no es solo la estructura del Sheet. Claude Code también va a generar las fórmulas, los colores condicionales y una hoja de resumen. Con un prompt. En cuatro minutos.'
  );

  // Slide 6: Bullet — el reporte semanal automático
  addBulletSlide(pptx,
    'Qué hace el script de reporte semanal automático',
    'Un script de Python de ~80 líneas que corre solo cada lunes a las 8am:',
    [
      '1. Lee los datos de tu Google Sheet donde tienes tus métricas semanales cargadas',
      '2. Calcula el delta de cada métrica vs. la semana anterior (en número y porcentaje)',
      '3. Clasifica cada métrica: SUBIÓ ✅ / BAJÓ 🔴 / NEUTRAL (variación <1%)',
      '4. Genera el resumen de texto con los highlights de la semana automáticamente',
      '5. Envía el reporte a Slack o email — si Slack falla, usa email como fallback',
    ],
    'Lo configuras una vez. Corre solo cada semana. El script lee las dos últimas filas del Sheet para calcular el delta. Solo necesitas cargar los números — no hacer el análisis.'
  );

  // Slide 7: Step-by-step — sistema de alertas + Slack webhook
  addSteps(pptx,
    'El sistema de alertas: cómo conectar Slack sin API keys',
    [
      'Claude Code genera el script con un placeholder para la URL del webhook de Slack',
      'Ve a tu workspace de Slack → Apps → Incoming Webhooks → Add to Slack',
      'Selecciona el canal #alertas-growth → haz clic en "Add" → copia la URL del webhook',
      'Pega la URL en el archivo .env donde el script indica → SLACK_WEBHOOK_URL_ALERTAS=...',
      'Prueba con: python alertas_growth.py --test → verifica el output en consola antes de enviar a Slack',
    ],
    'Aquí la pregunta que me van a hacer: ¿no necesito un developer para conectar Slack? No. Slack tiene Incoming Webhooks — una URL que generates en 2 minutos desde la configuración de tu workspace. No hay autenticación compleja, no hay API keys en código.'
  );

  // Slide 8: Quote — el mantra de la automatización
  addQuote(pptx,
    'El principio de automatización de Growth',
    'La automatización no es para ingenieros — es para quien sabe qué automatizar.',
    null,
    C.black,
    'La clave no es saber programar — es saber qué datos entran, qué sale, y cuándo se ejecuta. Eso es lo que describes en el brief de automatización. Claude Code hace el resto.'
  );

  // Slide 9: Three-col — stack de automatización
  addThreeCol(pptx,
    'Stack de automatización de Growth (cero código)',
    [
      {
        header: 'Fuente de Datos',
        icon: null,
        items: [
          'Google Sheets como fuente única',
          'Tú cargas los números (solo los números)',
          'Una pestaña de métricas semanales',
          'Columna A: fecha de la semana',
          'Columnas B+: una columna por métrica',
        ],
      },
      {
        header: 'Generado por Claude Code',
        icon: null,
        items: [
          'Script Python de reporte semanal',
          'Script Python de alertas diarias',
          'Google Apps Script del tracker',
          'Archivo .env.example con variables',
          'Config JSON editable para umbrales',
        ],
      },
      {
        header: 'Destino de Salida',
        icon: null,
        items: [
          'Slack: reporte en #growth-weekly',
          'Slack: alertas en #alertas-growth',
          'Email como fallback automático',
          'Google Sheets: tracker actualizado',
          'Log diario para diagnóstico',
        ],
      },
    ],
    'Claude Code + Google Sheets + Slack Webhooks. Sin Make, sin Zapier, sin n8n. Un script Python que corre con cron (Mac/Linux) o Task Scheduler (Windows).'
  );

  // Slide 10: Demo slide
  addDemo(pptx,
    'Demo en vivo: Tracker de experimentos en Google Sheets',
    '🔴 EN VIVO',
    'De prompt a tracker instalado con colores, fórmulas y estructura — en menos de 5 minutos',
    [
      'Pegar el prompt del tracker en Claude Code → esperar que genere el Google Apps Script',
      'Abrir sheets.new → crear Sheet en blanco → Extensiones → Apps Script',
      'Borrar código por defecto → pegar el script de Claude Code → Guardar → Ejecutar',
      'Autorizar permisos de Google (Revisar permisos → Avanzado → Permitir)',
      'Volver al Sheet → el tracker está listo con todas las columnas, colores y fórmulas',
    ],
    'Lo que está generando Claude Code son dos cosas al mismo tiempo: un Google Apps Script que crea la estructura del tracker con todos los encabezados y los formatos, y las instrucciones paso a paso para instalarlo. No tienes que entender el script. Solo tienes que copiarlo y pegarlo.'
  );

  // Slide 11: Before/After — el stack de Growth
  addBeforeAfter(pptx,
    'El antes y después del stack de Growth operacional',
    'ANTES: administración manual',
    [
      'Exportar datos de Meta, Google, CRM cada semana',
      'Copiar números en Google Sheet manualmente',
      'Armar el reporte en un doc → compartir por email',
      'Enterarse de un problema cuando ya es grande',
      'Experimentos sin registro → aprendizajes perdidos',
      '3+ horas por semana de trabajo administrativo',
    ],
    'AHORA: Growth operado con IA',
    [
      'Tú solo cargas los números en el Sheet',
      'El reporte se genera y se manda solo cada lunes',
      'Las alertas te avisan antes de que el problema escale',
      'El tracker registra cada experimento e hipótesis',
      'Aprendizajes acumulados → estrategia más inteligente',
      '15 minutos por semana de trabajo administrativo',
    ],
    'En tres clases construiste lo que antes requería un developer y semanas de trabajo: una landing page publicada, un tracker de experimentos, un reporte automático y un sistema de alertas. Ninguno requiere que vuelvas a Claude Code para mantenerlos.'
  );

  // Slide 12: Closing
  addClosing(pptx,
    'Sistema de automatización\nde reportes de Growth',
    'ENTREGABLE (3 herramientas en 1):\n✓ Tracker: prompt listo para Google Apps Script + instrucciones de instalación\n✓ Reporte semanal: script Python + .env.example + instrucciones de cron\n✓ Alertas: script Python + alertas_config.json + modo --test para verificar\n\nTU TAREA: hazlos en orden — tracker primero, reporte, alertas. Cada uno tarda <5 min de Claude Code + 5 min de tu configuración.',
    'Fin del Módulo 03 · Módulo 04: Growth Estratégico con IA',
    'Terminamos el módulo. En tres clases construiste lo que antes requería un developer y semanas de trabajo: una landing page publicada, un tracker de experimentos, un reporte automático y un sistema de alertas. Eso es lo que significa tener un laboratorio de Growth sin código.'
  );

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-09/clase-09.pptx' });
  console.log('✓ clase-09.pptx generado');
}

// ─── RUN ──────────────────────────────────────────────────────────────────────
(async () => {
  try {
    console.log('Generando presentaciones...');
    await buildClase07();
    await buildClase08();
    await buildClase09();
    console.log('\n✓ Los 3 archivos .pptx fueron generados exitosamente.');
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
})();
