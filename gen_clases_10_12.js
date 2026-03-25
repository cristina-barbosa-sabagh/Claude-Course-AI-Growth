const PptxGenJS = require('/Users/mariacristinabarbosa/Claude-Course-AI-Growth/node_modules/pptxgenjs');

// ─── PALETTE ────────────────────────────────────────────────────────────────
const C = {
  red:    'FF0000',
  orange: 'FF6B00',
  yellow: 'EEFF89',
  white:  'FFFFFF',
  black:  '000000',
};

// ─── HELPERS ────────────────────────────────────────────────────────────────
function newPptx() {
  const p = new PptxGenJS();
  p.defineLayout({ name: 'LAYOUT_WIDE', width: 13.33, height: 7.5 });
  p.layout = 'LAYOUT_WIDE';
  return p;
}

// Cover slide: black bg, centered title/subtitle, red accent bar
function addCover(pptx, title, subtitle, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  // Red accent bar top
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.18, fill: { color: C.red } });

  // Orange accent bar bottom
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.32, w: 13.33, h: 0.18, fill: { color: C.orange } });

  slide.addText(title, {
    x: 0.6, y: 1.8, w: 12.1, h: 2.4,
    fontSize: 44, bold: true, fontFace: 'Arial Black',
    color: C.white, align: 'center', valign: 'middle',
  });

  slide.addShape(pptx.ShapeType.rect, { x: 4.5, y: 4.4, w: 4.33, h: 0.06, fill: { color: C.red } });

  slide.addText(subtitle, {
    x: 0.6, y: 4.6, w: 12.1, h: 1.2,
    fontSize: 18, fontFace: 'Calibri',
    color: C.orange, align: 'center', valign: 'middle',
  });

  slide.addNotes(notes);
  return slide;
}

// Section divider: black bg, big red number + white section title
function addDivider(pptx, number, title, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.5, h: 7.5, fill: { color: C.red } });

  slide.addText(number, {
    x: 0.8, y: 1.5, w: 3, h: 3,
    fontSize: 120, bold: true, fontFace: 'Arial Black',
    color: C.red, align: 'left', valign: 'middle',
  });

  slide.addText(title, {
    x: 4.2, y: 2.5, w: 8.7, h: 2.5,
    fontSize: 36, bold: true, fontFace: 'Arial Black',
    color: C.white, align: 'left', valign: 'middle',
  });

  slide.addNotes(notes);
  return slide;
}

// Big stat slide: white bg, huge colored stat centered
function addBigStat(pptx, stat, label, context, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: C.red } });

  slide.addText(stat, {
    x: 0.5, y: 1.0, w: 12.33, h: 3.0,
    fontSize: 100, bold: true, fontFace: 'Arial Black',
    color: C.red, align: 'center', valign: 'middle',
  });

  slide.addText(label, {
    x: 0.5, y: 4.1, w: 12.33, h: 1.2,
    fontSize: 28, bold: true, fontFace: 'Arial Black',
    color: C.black, align: 'center',
  });

  slide.addShape(pptx.ShapeType.rect, { x: 2.0, y: 5.5, w: 9.33, h: 1.4, fill: { color: C.yellow } });
  slide.addText(context, {
    x: 2.2, y: 5.6, w: 8.93, h: 1.2,
    fontSize: 14, fontFace: 'Calibri',
    color: C.black, align: 'center', valign: 'middle',
  });

  slide.addNotes(notes);
  return slide;
}

// Bullet list slide: white bg, red title bar, bullet points
function addBulletList(pptx, title, bullets, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.3, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.1, w: 12.5, h: 1.1,
    fontSize: 36, bold: true, fontFace: 'Arial Black',
    color: C.white, align: 'left', valign: 'middle',
  });

  const bulletObjs = bullets.map(b => ({
    text: b,
    options: { bullet: { type: 'number' }, fontSize: 15, fontFace: 'Calibri', color: C.black, paraSpaceAfter: 8 }
  }));

  // Orange accent dots
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.6, w: 0.12, h: 0.12, fill: { color: C.orange } });

  slide.addText(bullets.map((b, i) => [
    { text: `${i + 1}.  `, options: { bold: true, color: C.orange, fontSize: 15, fontFace: 'Calibri' } },
    { text: b + '\n', options: { color: C.black, fontSize: 15, fontFace: 'Calibri', paraSpaceAfter: 10 } }
  ]).flat(), {
    x: 0.5, y: 1.5, w: 12.3, h: 5.6,
    valign: 'top',
  });

  slide.addNotes(notes);
  return slide;
}

// Two column slide: white bg, two colored panels
function addTwoColumn(pptx, title, leftHead, leftItems, rightHead, rightItems, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Title bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.2, fill: { color: C.black } });
  slide.addText(title, {
    x: 0.4, y: 0.1, w: 12.5, h: 1.0,
    fontSize: 32, bold: true, fontFace: 'Arial Black',
    color: C.white, align: 'left', valign: 'middle',
  });

  // Left panel
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.4, w: 6.0, h: 0.7, fill: { color: C.red } });
  slide.addText(leftHead, {
    x: 0.4, y: 1.45, w: 5.8, h: 0.6,
    fontSize: 18, bold: true, fontFace: 'Arial Black', color: C.white, align: 'center', valign: 'middle',
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 2.1, w: 6.0, h: 5.0, fill: { color: 'F5F5F5' } });
  slide.addText(leftItems.join('\n\n'), {
    x: 0.5, y: 2.2, w: 5.7, h: 4.8,
    fontSize: 14, fontFace: 'Calibri', color: C.black, valign: 'top',
  });

  // Right panel
  slide.addShape(pptx.ShapeType.rect, { x: 7.0, y: 1.4, w: 6.0, h: 0.7, fill: { color: C.orange } });
  slide.addText(rightHead, {
    x: 7.1, y: 1.45, w: 5.8, h: 0.6,
    fontSize: 18, bold: true, fontFace: 'Arial Black', color: C.white, align: 'center', valign: 'middle',
  });
  slide.addShape(pptx.ShapeType.rect, { x: 7.0, y: 2.1, w: 6.0, h: 5.0, fill: { color: 'F5F5F5' } });
  slide.addText(rightItems.join('\n\n'), {
    x: 7.2, y: 2.2, w: 5.7, h: 4.8,
    fontSize: 14, fontFace: 'Calibri', color: C.black, valign: 'top',
  });

  slide.addNotes(notes);
  return slide;
}

// Three column slide: white bg, three boxes side by side
function addThreeColumn(pptx, title, cols, notes) {
  // cols = [{head, color, items[]}]
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.2, fill: { color: C.black } });
  slide.addText(title, {
    x: 0.4, y: 0.1, w: 12.5, h: 1.0,
    fontSize: 32, bold: true, fontFace: 'Arial Black',
    color: C.white, align: 'center', valign: 'middle',
  });

  const colW = 3.9;
  const startX = [0.3, 4.7, 9.1];
  cols.forEach((col, i) => {
    slide.addShape(pptx.ShapeType.rect, { x: startX[i], y: 1.4, w: colW, h: 0.7, fill: { color: col.color } });
    slide.addText(col.head, {
      x: startX[i] + 0.1, y: 1.45, w: colW - 0.2, h: 0.6,
      fontSize: 16, bold: true, fontFace: 'Arial Black', color: C.white, align: 'center', valign: 'middle',
    });
    slide.addShape(pptx.ShapeType.rect, { x: startX[i], y: 2.1, w: colW, h: 5.0, fill: { color: 'F8F8F8' } });
    slide.addText(col.items.join('\n\n'), {
      x: startX[i] + 0.15, y: 2.2, w: colW - 0.3, h: 4.8,
      fontSize: 13, fontFace: 'Calibri', color: C.black, valign: 'top',
    });
  });

  slide.addNotes(notes);
  return slide;
}

// Callout / Quote slide: white bg, big centered colored box with text
function addCallout(pptx, title, quote, attribution, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: C.orange } });

  if (title) {
    slide.addText(title, {
      x: 0.5, y: 0.3, w: 12.33, h: 0.9,
      fontSize: 28, bold: true, fontFace: 'Arial Black',
      color: C.black, align: 'center',
    });
  }

  slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.4, w: 11.73, h: 4.5, fill: { color: C.yellow } });
  slide.addText('\u201C' + quote + '\u201D', {
    x: 1.1, y: 1.6, w: 11.13, h: 4.0,
    fontSize: 22, fontFace: 'Calibri', bold: true,
    color: C.black, align: 'center', valign: 'middle',
  });

  if (attribution) {
    slide.addText('\u2014 ' + attribution, {
      x: 0.8, y: 6.1, w: 11.73, h: 0.7,
      fontSize: 14, fontFace: 'Calibri', italic: true,
      color: C.orange, align: 'right',
    });
  }

  slide.addNotes(notes);
  return slide;
}

// Step-by-step slide: white bg, numbered steps with colored circles
function addSteps(pptx, title, steps, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.2, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.1, w: 12.5, h: 1.0,
    fontSize: 34, bold: true, fontFace: 'Arial Black',
    color: C.white, align: 'left', valign: 'middle',
  });

  const stepColors = [C.red, C.orange, C.red, C.orange, C.red, C.orange];
  const startY = 1.5;
  const stepH = (7.5 - startY - 0.3) / steps.length;

  steps.forEach((step, i) => {
    const y = startY + i * stepH;
    const col = stepColors[i % stepColors.length];
    slide.addShape(pptx.ShapeType.ellipse, { x: 0.3, y: y + 0.05, w: 0.55, h: 0.55, fill: { color: col } });
    slide.addText(String(i + 1), {
      x: 0.3, y: y + 0.05, w: 0.55, h: 0.55,
      fontSize: 16, bold: true, fontFace: 'Arial Black', color: C.white, align: 'center', valign: 'middle',
    });
    slide.addText(step, {
      x: 1.05, y: y, w: 11.9, h: stepH - 0.05,
      fontSize: 14, fontFace: 'Calibri', color: C.black, valign: 'middle',
    });
  });

  slide.addNotes(notes);
  return slide;
}

// Before/After slide: black left, white right
function addBeforeAfter(pptx, title, beforeItems, afterItems, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Left half (before) - dark
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 6.5, h: 7.5, fill: { color: C.black } });
  slide.addText('ANTES', {
    x: 0.3, y: 0.3, w: 5.9, h: 0.9,
    fontSize: 28, bold: true, fontFace: 'Arial Black', color: C.orange, align: 'center',
  });
  slide.addText(beforeItems.join('\n\n'), {
    x: 0.4, y: 1.4, w: 5.8, h: 5.8,
    fontSize: 14, fontFace: 'Calibri', color: C.white, valign: 'top',
  });

  // Right half (after)
  slide.addShape(pptx.ShapeType.rect, { x: 6.5, y: 0, w: 6.83, h: 0.6, fill: { color: C.red } });
  slide.addText('DESPUES', {
    x: 6.6, y: 0.05, w: 6.63, h: 0.5,
    fontSize: 28, bold: true, fontFace: 'Arial Black', color: C.white, align: 'center',
  });
  slide.addText(afterItems.join('\n\n'), {
    x: 6.65, y: 1.4, w: 6.3, h: 5.8,
    fontSize: 14, fontFace: 'Calibri', color: C.black, valign: 'top',
  });

  // Separator
  slide.addShape(pptx.ShapeType.rect, { x: 6.4, y: 0, w: 0.1, h: 7.5, fill: { color: C.red } });

  // Title overlay at top
  slide.addText(title, {
    x: 0, y: 0.0, w: 6.4, h: 0.6,
    fontSize: 16, bold: true, fontFace: 'Arial Black', color: C.orange, align: 'center', valign: 'middle',
  });

  slide.addNotes(notes);
  return slide;
}

// Closing slide: black bg, white text, red accent
function addClosing(pptx, heading, body, cta, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.18, fill: { color: C.red } });
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.32, w: 13.33, h: 0.18, fill: { color: C.orange } });

  slide.addText(heading, {
    x: 0.6, y: 1.0, w: 12.1, h: 1.8,
    fontSize: 40, bold: true, fontFace: 'Arial Black',
    color: C.red, align: 'center', valign: 'middle',
  });

  slide.addText(body, {
    x: 1.0, y: 2.9, w: 11.33, h: 2.8,
    fontSize: 16, fontFace: 'Calibri',
    color: C.white, align: 'center', valign: 'top',
  });

  slide.addShape(pptx.ShapeType.rect, { x: 2.5, y: 5.9, w: 8.33, h: 0.9, fill: { color: C.orange } });
  slide.addText(cta, {
    x: 2.5, y: 5.9, w: 8.33, h: 0.9,
    fontSize: 18, bold: true, fontFace: 'Arial Black',
    color: C.black, align: 'center', valign: 'middle',
  });

  slide.addNotes(notes);
  return slide;
}

// Content slide with yellow callout box at bottom
function addContentWithCallout(pptx, title, body, callout, notes) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.2, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.1, w: 12.5, h: 1.0,
    fontSize: 34, bold: true, fontFace: 'Arial Black',
    color: C.white, align: 'left', valign: 'middle',
  });

  slide.addText(body, {
    x: 0.5, y: 1.4, w: 12.33, h: 3.8,
    fontSize: 15, fontFace: 'Calibri', color: C.black, valign: 'top',
  });

  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.4, w: 12.33, h: 1.7, fill: { color: C.yellow } });
  slide.addText(callout, {
    x: 0.7, y: 5.5, w: 11.93, h: 1.5,
    fontSize: 15, bold: true, fontFace: 'Calibri', color: C.black, valign: 'middle', align: 'center',
  });

  slide.addNotes(notes);
  return slide;
}

// Four-box grid slide (2x2)
function addFourBox(pptx, title, boxes, notes) {
  // boxes = [{head, text, color}] × 4
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.1, fill: { color: C.black } });
  slide.addText(title, {
    x: 0.4, y: 0.05, w: 12.5, h: 1.0,
    fontSize: 32, bold: true, fontFace: 'Arial Black',
    color: C.white, align: 'center', valign: 'middle',
  });

  const positions = [
    { x: 0.3, y: 1.25 },
    { x: 6.82, y: 1.25 },
    { x: 0.3, y: 4.3 },
    { x: 6.82, y: 4.3 },
  ];
  const bW = 6.2, bH = 2.8;

  boxes.forEach((box, i) => {
    const { x, y } = positions[i];
    slide.addShape(pptx.ShapeType.rect, { x, y, w: bW, h: 0.55, fill: { color: box.color } });
    slide.addText(box.head, {
      x: x + 0.1, y: y + 0.05, w: bW - 0.2, h: 0.45,
      fontSize: 16, bold: true, fontFace: 'Arial Black', color: C.white, align: 'center', valign: 'middle',
    });
    slide.addShape(pptx.ShapeType.rect, { x, y: y + 0.55, w: bW, h: bH - 0.55, fill: { color: 'F5F5F5' } });
    slide.addText(box.text, {
      x: x + 0.15, y: y + 0.65, w: bW - 0.3, h: bH - 0.75,
      fontSize: 13, fontFace: 'Calibri', color: C.black, valign: 'top',
    });
  });

  slide.addNotes(notes);
  return slide;
}


// ============================================================================
//  CLASE 10
// ============================================================================
async function generateClase10() {
  const pptx = newPptx();

  // 1. COVER
  addCover(pptx,
    'Skills de Growth de Elite',
    'Prompts que se reutilizan y mejoran solos\nMódulo 04 · Clase 10 · 16 minutos',
    'Bienvenido al Módulo 04. Este módulo es donde todo lo que aprendiste se convierte en sistema. El primer componente de ese sistema son los skills. Un skill es un prompt que ya probaste, que ya produce resultados, y que está guardado de forma que cualquier miembro de tu equipo —o tú dentro de seis meses— puede usarlo sin pensar. No es una carpeta de "prompts que algún día voy a usar". Es una librería de producción. Con nombre. Con instrucciones. Con ejemplos de output.'
  );

  // 2. BIG STAT
  addBigStat(pptx,
    '15',
    'Skills de Growth de Elite',
    'Listos para copiar, personalizar y usar hoy.\nUn skill maduro produce resultados que no podrías replicar manualmente en el mismo tiempo.',
    'En los próximos 16 minutos te voy a dar los 15 skills más impactantes para un equipo de Growth. Listos para copiar, personalizar y usar hoy.'
  );

  // 3. BEFORE/AFTER — Prompt vs. Skill
  addBeforeAfter(pptx,
    'Prompt vs. Skill',
    [
      '❌ Sin nombre claro',
      '❌ Sin contexto de cuándo usarlo',
      '❌ Sin variables definidas',
      '❌ Sin output de referencia',
      '❌ Se reconstruye desde cero cada vez',
      '❌ Suerte que no escala',
    ],
    [
      '✅ Nombre de acción específico',
      '✅ Cuándo usarlo (1 línea)',
      '✅ Prompt con variables en corchetes',
      '✅ Output real de referencia',
      '✅ Versión + fecha de última iteración',
      '✅ Sistema que mejora solo',
    ],
    'La mayoría de equipos que empiezan con Claude cae en la misma trampa: encuentran un prompt que funciona bien, lo usan una vez, y la próxima vez tienen que reconstruirlo desde cero. Eso no es un sistema. Eso es suerte que no escala.'
  );

  // 4. STEPS — Anatomía de un Skill
  addSteps(pptx,
    'Anatomía de un Skill de Growth — 4 Componentes',
    [
      'NOMBRE DE ACCIÓN — No "Prompt para copies". Sí: "Generador de copies para Meta — ICP SaaS B2B". El nombre dice exactamente qué hace y para quién.',
      'CUÁNDO USARLO — Una sola línea. "Usar cuando necesitas 3+ variaciones de copy para campañas pagas de adquisición." No un manual. Una instrucción.',
      'PROMPT CON VARIABLES — El prompt en sí con campos en corchetes donde cambia el contexto: [PRODUCTO], [ICP], [CANAL], [OBJETIVO]. Solo hay que rellenar los corchetes.',
      'OUTPUT DE REFERENCIA REAL — Un output que realmente generaste. No uno inventado. Uno real, del trabajo de tu equipo, que muestra qué nivel de calidad esperar.',
    ],
    'Un skill tiene cuatro componentes. Cuatro, no más. Con esos cuatro componentes, un prompt se convierte en skill. Y un skill bien documentado multiplica la capacidad de tu equipo sin contratar a nadie más.'
  );

  // 5. CALLOUT — Mejora continua
  addCallout(pptx,
    'El Sistema de Mejora Continua',
    'Una sola pregunta después de cada uso:\n¿El output fue mejor o peor que la última vez?\n\nSi fue mejor → nada cambia.\nSi fue peor → añades el contexto que faltó.\nSi fue mucho mejor → guardas como versión actual.\n\nEso es la ventaja compuesta del sistema.',
    'Clase 10 — Módulo 04',
    'No necesitas un sistema de evaluación complejo. Necesitas una sola pregunta después de cada uso: ¿El output fue mejor o peor que la última vez? Un Growth skill maduro —uno que llevas 3 meses usando y mejorando— produce outputs que no podrías replicar manualmente en el mismo tiempo ni con el mismo nivel de consistencia.'
  );

  // 6. THREE COLUMNS — Skills 1, 2, 3
  addThreeColumn(pptx,
    'Los 5 Skills de Mayor Impacto — Parte 1',
    [
      {
        head: '01 Generador de Hipótesis',
        color: C.red,
        items: [
          'Input: área del funnel + métrica + objetivo',
          '',
          'Output: 5 hipótesis priorizadas por impacto/esfuerzo',
          '',
          'Elimina el sesgo del HiPPO. Los datos son la fuente, no la opinión.',
        ],
      },
      {
        head: '02 Analizador de Funnel',
        color: C.orange,
        items: [
          'Input: números de cada etapa del funnel',
          '',
          'Output: cuello de botella + impacto en MRR si cada etapa mejora 10%',
          '',
          'Eso es lo que le presentas al board.',
        ],
      },
      {
        head: '03 Copies Multicanal',
        color: C.red,
        items: [
          'Input: brief de 6 campos',
          '',
          'Output: tabla por canal — headline, copy, CTA listos para ad manager',
          '',
          'Consistencia de mensaje entre Meta, Google, email y LinkedIn.',
        ],
      },
    ],
    'Voy a presentarte los 5 skills que más impacto generan en una operación de Growth. Skill 1: Generador de hipótesis — elimina el sesgo del HiPPO. Skill 2: Analizador de funnel — calcula impacto en revenue. Skill 3: Copies multicanal — consistencia entre canales desde un mismo brief.'
  );

  // 7. TWO COLUMN — Skills 4 y 5
  addTwoColumn(pptx,
    'Los 5 Skills de Mayor Impacto — Parte 2',
    'Skill 04 — Revisor de Métricas Semanales',
    [
      'Usar: Cada lunes antes del standup de Growth',
      '',
      'Input: métricas de la semana + contexto de campañas',
      '',
      'Output:',
      '• Top 3 anomalías vs. semana anterior',
      '• Top 3 anomalías vs. baseline 4 semanas',
      '• Métrica prioritaria + semáforo Verde/Amarillo/Rojo',
      '',
      'No para análisis profundo. Para no perderte lo obvio en el ruido.',
    ],
    'Skill 05 — Redactor de Reportes para Stakeholders',
    [
      'El skill que más tiempo ahorra en términos absolutos',
      '',
      'Input: métricas brutas + contexto de experimentos',
      '',
      'Output: reporte ejecutivo de 1 página',
      '• Estado actual',
      '• Movimientos del período',
      '• Hipótesis para el próximo',
      '• Riesgos identificados',
      '',
      'Listo para enviar al CEO o al board sin edición de fondo.',
    ],
    'Skill 4: Revisor de métricas semanales. Cada semana pegas las métricas clave y Claude detecta anomalías, calcula variaciones y genera tres preguntas que deberías estar respondiendo. Skill 5: Redactor de reportes para stakeholders. El que más tiempo ahorra en absolute terms. Output: reporte ejecutivo en formato de 1 página listo para enviar al CEO, al board o al equipo directivo.'
  );

  // 8. STEPS — Demo en vivo: construir un skill
  addSteps(pptx,
    'Demo en Vivo — Del Prompt al Skill Documentado en Notion',
    [
      'PASO 1 — Construir el prompt base con variables en corchetes: [ÁREA], [MÉTRICA], [OBJETIVO], [CONTEXTO], [RESTRICCIONES]',
      'PASO 2 — Rellenar con un caso real y ejecutar en Claude. Silencio mientras llega el output. El 80% está listo para trabajar.',
      'PASO 3 — Documentar en Notion en 90 segundos: nombre, cuándo usar, prompt, output de referencia, versión v1.0',
      'PASO 4 — La regla de oro: la semana que viene, si el output es mejor, actualiza el prompt. Sube a versión 1.1.',
    ],
    'Voy a construir un skill completo en vivo. Desde el prompt hasta la entrada en Notion. Cuatro minutos. Sin cortes. Fíjate en la estructura: tengo un contexto claro, una tarea específica, y un formato de output definido. Los corchetes son las variables — lo único que cambia cada vez que uso este skill.'
  );

  // 9. CONTENT WITH CALLOUT — Notion structure
  addContentWithCallout(pptx,
    'Estructura en Notion — Cómo Vive un Skill',
    'En Notion, cada skill vive en una tabla con seis columnas:\n\n• Nombre del skill — identificación rápida\n• Cuándo usar — condición de activación\n• Prompt (con variables) — el prompt listo para copiar\n• Output de referencia — ejemplo real de qué nivel esperar\n• Versión — control de iteraciones (v1.0 → v1.1 → v2.0)\n• Última iteración — cuándo se mejoró por última vez\n\nLos skills no son estáticos. Son organismos vivos en tu operación de Growth.\nLa versión 1 era genérica. La versión 3, después de tres semanas de uso real, está ajustada a tu modelo de negocio.',
    'Un skill activo vale más que quince skills guardados.',
    'La próxima vez que alguien del equipo necesite generar hipótesis — tú, un junior, alguien nuevo — abre esta entrada, rellena los corchetes, pega en Claude. No hay curva de aprendizaje. El sistema trabaja. La semana que viene, cuando uses este skill y el output sea mejor de lo esperado, actualiza el prompt. En tres meses, ese skill va a ser tuyo de verdad.'
  );

  // 10. CLOSING
  addClosing(pptx,
    'Tu Entregable — Biblioteca de 15 Skills',
    'No es para leer y guardar. Es para usar esta semana.\n\nElije uno de los 15 skills, personaliza las variables con tu contexto real, ejecútalo y guarda el output como referencia.\n\nUn skill activo vale más que quince skills guardados.\n\nSiguiente clase: construyes tu equipo de agentes — cuatro Claude Projects especializados que trabajan en paralelo.',
    'Elige 1 skill hoy. Personaliza. Ejecuta. Guarda.',
    'Tu entregable de esta clase es la biblioteca de 15 skills en Notion. No es para leer y guardar. Es para usar esta semana. Elige uno de los 15 skills, personaliza las variables con tu contexto real, ejecútalo y guarda el output como referencia. Eso es todo. Un skill activo vale más que quince skills guardados.'
  );

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-10/clase-10.pptx' });
  console.log('✅ clase-10.pptx generado');
}


// ============================================================================
//  CLASE 11
// ============================================================================
async function generateClase11() {
  const pptx = newPptx();

  // 1. COVER
  addCover(pptx,
    'Tu Equipo de Agentes',
    'Roles especializados que trabajan en paralelo\nMódulo 04 · Clase 11 · 16 minutos',
    'Un equipo de Growth de elite tiene especialistas. Alguien que piensa solo en adquisición. Alguien que piensa solo en retención. Alguien en los datos. Alguien en revenue. Pero la mayoría de equipos de Growth tiene una, dos, quizás tres personas intentando cubrir los cuatro frentes. La solución no es contratar más gente. Es crear más especialistas.'
  );

  // 2. CALLOUT — Un agente no es un prompt
  addCallout(pptx,
    'Un Agente No Es un Prompt',
    'Un agente en Claude Projects es un Project configurado con instrucciones de sistema específicas para un rol y una misión.\n\nNo es un chat de propósito general. Es un especialista.\n\nCuando le preguntas al Agente de Adquisición sobre retención, te dice: "eso es territorio del Agente de Retención."\nEsa negativa es una feature, no un bug.',
    'Clase 11 — Módulo 04',
    'Un agente en Claude Projects es un Project configurado con instrucciones de sistema específicas para un rol y una misión. No es un chat de propósito general. Es un especialista. La diferencia está en cómo lo configuras. Un Project genérico responde a cualquier cosa con contexto general. Un agente responde desde un rol específico, con prioridades específicas, y se niega a salirse de su especialidad. Esa negativa es una feature, no un bug.'
  );

  // 3. BIG STAT
  addBigStat(pptx,
    '4',
    'Agentes Especializados de Growth',
    'Adquisición · Retención · Análisis · Revenue\nCuatro especialistas. Cuatro focos. Cero solapamiento.',
    'Hoy te voy a mostrar cómo construir cuatro agentes de Growth en Claude Projects: cada uno con su rol, su contexto y sus restricciones. Cada uno especializado. Trabajando en paralelo.'
  );

  // 4. FOUR BOX — Los 4 agentes
  addFourBox(pptx,
    'Arquitectura — Tu Equipo de 4 Agentes',
    [
      {
        head: 'Agente de ADQUISICIÓN',
        color: C.red,
        text: '¿Cómo traemos más usuarios calificados al menor costo?\n\n✅ Analiza campañas y propone optimizaciones\n✅ Genera copies para tests\n✅ Identifica canales sin explotar\n✅ Calcula CAC objetivo\n\n❌ No habla de retención ni onboarding',
      },
      {
        head: 'Agente de RETENCIÓN',
        color: C.orange,
        text: '¿Cómo hacemos que los usuarios se queden más tiempo y obtengan más valor?\n\n✅ Diseña flujos de onboarding\n✅ Analiza patrones de churn\n✅ Crea secuencias de email de activación\n\n❌ No trabaja en adquisición de nuevos usuarios',
      },
      {
        head: 'Agente de ANÁLISIS',
        color: C.red,
        text: '¿Qué dicen los datos y qué deberíamos hacer?\n\n✅ Interpreta métricas y detecta anomalías\n✅ Calcula impacto por etapa del funnel\n✅ Prioriza experimentos por ROI\n\n❌ No genera copies ni contenido',
      },
      {
        head: 'Agente de REVENUE',
        color: C.orange,
        text: '¿Cómo extraemos más valor del negocio que ya existe?\n\n✅ Identifica oportunidades de upsell/cross-sell\n✅ Diseña flujos de expansión de revenue\n✅ Analiza pricing y proyecta MRR\n\n❌ No trabaja en adquisición de usuarios nuevos',
      },
    ],
    'Un agente con restricciones claras produce mejor que uno sin restricciones. Cuando Claude no tiene límites, tiende a dar respuestas completas pero superficiales. Cuando tiene límites, profundiza en su área. En el entregable tienes los system prompts completos — listos para pegar en Claude Projects.'
  );

  // 5. TWO COLUMN — Agente Adquisición (SÍ/NO)
  addTwoColumn(pptx,
    'Agente de Adquisición — Rol y Restricciones',
    'LO QUE HACE',
    [
      '✅ Analiza rendimiento de campañas pagas',
      '✅ Genera copies y ángulos para tests (Meta, Google, LinkedIn)',
      '✅ Identifica canales sin explotar para el ICP',
      '✅ Calcula CAC por canal',
      '✅ Propone ajustes de presupuesto',
      '✅ Crea briefs de creatividades',
      '✅ Detecta saturación de audiencias',
    ],
    'LO QUE NO HACE',
    [
      '❌ No recomienda cambios de producto',
      '❌ No propone estrategias de retención',
      '❌ No genera reportes de retención o revenue',
      '❌ No habla de onboarding ni lifecycle',
      '',
      'Si le preguntas por retención:',
      '"Eso es territorio del Agente de Retención. Mi foco es adquisición."',
      '',
      'Esa restricción es lo que lo hace especialista.',
    ],
    'Su única pregunta es: ¿cómo traemos más usuarios calificados al menor costo posible? Lo que NO hace: no habla de retención ni de onboarding, no propone cambios de producto, no analiza revenue de usuarios existentes. Un agente con restricciones claras produce mejor que uno sin restricciones.'
  );

  // 6. TWO COLUMN — Sala de guerra Notion
  addTwoColumn(pptx,
    'Sala de Guerra en Notion — 5 Secciones',
    'SECCIONES 1-3',
    [
      '1. BRIEF DE LA SEMANA',
      '   • Objetivo principal (1 línea)',
      '   • Métrica que más importa',
      '   • Contexto relevante',
      '',
      '2. OUTPUTS POR AGENTE',
      '   • 4 columnas — una por agente',
      '   • Máximo 300 palabras por agente',
      '   • Diagnóstico + recomendación',
      '',
      '3. DECISIONES DE LA SEMANA',
      '   • Iniciativa de mayor impacto',
      '   • Experimento que se lanza',
      '   • Métrica a monitorear diariamente',
    ],
    'SECCIONES 4-5',
    [
      '4. REGISTRO DE EXPERIMENTOS',
      '   • Hipótesis / Agente / Fecha inicio',
      '   • Criterio de éxito / Estado / Resultado',
      '   • La memoria colectiva de tu equipo',
      '',
      '5. REPORTE SEMANAL',
      '   • Output del Skill 05 de la Clase 10',
      '   • Estado del negocio + movimientos',
      '   • Hipótesis + riesgos + decisiones',
      '',
      'Flujo semanal: ~40 min de coordinación',
      'en vez de 4 horas de reuniones.',
    ],
    'El tablero de Notion resuelve el problema de tener cuatro agentes sin sistema de coordinación. No es un repositorio de outputs. Es una sala de guerra donde los cuatro agentes convergen. Cinco secciones. Un tablero. La coordinación de cuatro agentes especializados sin una sola reunión de sincronización.'
  );

  // 7. STEPS — Demo: lanzamiento de feature
  addSteps(pptx,
    'Demo — 4 Agentes, 20 Minutos: Lanzamiento de Feature',
    [
      'BRIEF — Escribir en Notion: "Lanzar feature de reportes automáticos. Métrica: % usuarios que activan en 7 días."',
      'AGENTE DE ADQUISICIÓN — Copies para email de usuarios activos + email de reactivación para leads en nurturing.',
      'AGENTE DE RETENCIÓN — Flujo de onboarding: trigger, tooltip de primer contacto, 3 emails si no activan en 48h.',
      'AGENTE DE REVENUE — Impacto proyectado en MRR: reducción de churn + oportunidad de upsell. Escenario conservador y optimista.',
      'COORDINACIÓN — Pegar los tres outputs en las columnas del tablero. Decisiones tomadas. Sin reuniones. Sin briefs internos.',
    ],
    'Voy a mostrarte un caso real: el equipo acaba de aprobar una nueva feature. Normalmente: dos días de trabajo distribuido. Con los 4 agentes: 20 minutos. El Agente de Adquisición se enfocó en el mensaje. No me dio recomendaciones de onboarding, no me habló de churn. Solo copies. Ese foco es el punto.'
  );

  // 8. CONTENT WITH CALLOUT — System prompt key elements
  addContentWithCallout(pptx,
    'Cómo Configurar Cada Agente — Las 3 Secciones Clave',
    'Todo system prompt de agente tiene tres secciones fundamentales:\n\n1. ROL Y MISIÓN — Una declaración clara de quién es el agente y su única pregunta. Ejemplo: "Tu único foco es traer más usuarios calificados al menor costo posible."\n\n2. CONTEXTO DEL NEGOCIO — El producto, el ICP, las métricas actuales, los canales activos, los objetivos. Cuanto más específico, mejor el output.\n\n3. RESTRICCIONES EXPLÍCITAS — Lo que el agente NO hace. "No recomiendes cambios de producto. No propongas estrategias de retención. Si te piden salir de tu área, responde solo la parte que corresponde."',
    '"El sistema mejora cuando lo usas, no cuando lo piensas."',
    'Configura los 4 Claude Projects esta semana. No esperes tener el contexto perfecto para empezar. Empieza con lo que tienes y afina las instrucciones en el uso.'
  );

  // 9. BIG STAT — Flujo semanal
  addBigStat(pptx,
    '40 min',
    'de coordinación semanal total',
    'Lunes AM: Brief (5 min) + Outputs agentes (15 min) + Decisiones (10 min)\nViernes PM: Diagnóstico (5 min) + Reporte (5 min)\nvs. 4 horas de reuniones de sincronización',
    'El flujo semanal de operación del tablero toma aproximadamente 40 minutos. Lunes en la mañana: actualizar Brief de la Semana (5 min), alimentar el brief a cada agente y guardar sus outputs (15 min), completar Decisiones de la Semana (10 min). Viernes en la tarde: alimentar métricas al Agente de Análisis (5 min), generar reporte con Skill 05 (5 min).'
  );

  // 10. CLOSING
  addClosing(pptx,
    'Tu Entregable — 4 Agentes + Tablero de Coordinación',
    'System prompts completos listos para pegar en Claude Projects.\nPlantilla del tablero de coordinación en Notion.\n\nConfigura el Agente de Adquisición primero.\nEs el de mayor impacto inmediato para la mayoría de operaciones de Growth.\n\nPróxima clase: clase final — los tres instructores muestran sus sistemas en vivo + tu plan de 7 días para tener todo operativo.',
    'Configura tu primer agente hoy. El sistema mejora cuando lo usas.',
    'Tu entregable de esta clase son los system prompts de los 4 agentes y la plantilla del tablero de coordinación en Notion. Configura los 4 Claude Projects esta semana. No esperes tener el contexto perfecto para empezar. Empieza con lo que tienes y afina las instrucciones en el uso. El sistema mejora cuando lo usas, no cuando lo piensas.'
  );

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-11/clase-11.pptx' });
  console.log('✅ clase-11.pptx generado');
}


// ============================================================================
//  CLASE 12
// ============================================================================
async function generateClase12() {
  const pptx = newPptx();

  // 1. COVER — Special: 3 instructors
  const cover = pptx.addSlide();
  cover.background = { color: C.black };
  cover.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.18, fill: { color: C.red } });
  cover.addShape(pptx.ShapeType.rect, { x: 0, y: 7.32, w: 13.33, h: 0.18, fill: { color: C.orange } });
  cover.addText('Proyecto Final', {
    x: 0.5, y: 1.3, w: 12.33, h: 1.8,
    fontSize: 52, bold: true, fontFace: 'Arial Black',
    color: C.white, align: 'center',
  });
  cover.addText('Tu sistema de Growth operando desde hoy', {
    x: 0.5, y: 3.2, w: 12.33, h: 1.0,
    fontSize: 24, fontFace: 'Calibri',
    color: C.red, align: 'center',
  });
  cover.addShape(pptx.ShapeType.rect, { x: 1.5, y: 4.4, w: 3.1, h: 0.65, fill: { color: C.red } });
  cover.addShape(pptx.ShapeType.rect, { x: 5.12, y: 4.4, w: 3.1, h: 0.65, fill: { color: C.orange } });
  cover.addShape(pptx.ShapeType.rect, { x: 8.73, y: 4.4, w: 3.1, h: 0.65, fill: { color: C.red } });
  cover.addText('Instructor A', { x: 1.5, y: 4.4, w: 3.1, h: 0.65, fontSize: 14, bold: true, fontFace: 'Arial Black', color: C.white, align: 'center', valign: 'middle' });
  cover.addText('Instructor B', { x: 5.12, y: 4.4, w: 3.1, h: 0.65, fontSize: 14, bold: true, fontFace: 'Arial Black', color: C.white, align: 'center', valign: 'middle' });
  cover.addText('Instructor C', { x: 8.73, y: 4.4, w: 3.1, h: 0.65, fontSize: 14, bold: true, fontFace: 'Arial Black', color: C.white, align: 'center', valign: 'middle' });
  cover.addText('Módulo 04 · Clase 12 · Clase Final · 14 minutos', {
    x: 0.5, y: 5.3, w: 12.33, h: 0.7,
    fontSize: 16, fontFace: 'Calibri', color: C.white, align: 'center',
  });
  cover.addNotes('Esta es la última clase del curso. Y no vamos a hacer una recapitulación. Vamos a hacer lo que los tres hacemos cada día: operar nuestros sistemas de Growth con Claude. En los próximos 14 minutos vas a ver tres sistemas reales funcionando. No demos. No slides. No teoría. Métricas de ayer. Decisiones de esta mañana. Outputs que ya están en producción.');

  // 2. CALLOUT — Este no es un cierre
  addCallout(pptx,
    null,
    'Esta es la última clase del curso.\nY no vamos a hacer una recapitulación.\n\nVamos a hacer lo que los tres hacemos cada día:\noperar nuestros sistemas de Growth con Claude.\n\nMétricas de ayer. Decisiones de esta mañana.\nOutputs que ya están en producción.',
    'Los tres instructores',
    'Esta es la última clase del curso. Y no vamos a hacer una recapitulación. Vamos a hacer lo que los tres hacemos cada día: operar nuestros sistemas de Growth con Claude. En los próximos 14 minutos vas a ver tres sistemas reales funcionando. No demos. No slides. No teoría. Métricas de ayer. Decisiones de esta mañana. Outputs que ya están en producción. Y al final, tienes el plan de 7 días para que tu sistema esté operando completamente esta semana. No una lista de pendientes. Un roadmap con días, acciones específicas y criterios de éxito.'
  );

  // 3. FOUR BOX — Recap 4 módulos
  addFourBox(pptx,
    'El Sistema que Construiste en 12 Clases',
    [
      {
        head: 'Módulo 01 — FUNDAMENTOS (Clases 1-3)',
        color: C.red,
        text: 'Claude como herramienta de producción.\nProjects, instrucciones de sistema, contexto cargado.\n\nBase: Claude entiende tu negocio.',
      },
      {
        head: 'Módulo 02 — PRODUCCIÓN (Clases 4-6)',
        color: C.orange,
        text: 'Outputs de alta calidad para Growth.\nCopies, análisis, experimentación.\n\nResultado: producción consistente sin reconstruir desde cero.',
      },
      {
        head: 'Módulo 03 — AUTOMATIZACIÓN (Clases 7-9)',
        color: C.red,
        text: 'Flujos que trabajan solos.\nIntegraciones, triggers, workflows.\n\nResultado: procesos que ocurren sin tu intervención manual.',
      },
      {
        head: 'Módulo 04 — SISTEMA (Clases 10-11)',
        color: C.orange,
        text: 'Skills + Agentes especializados.\nBiblioteca de 15 skills, 4 agentes, tablero de coordinación.\n\nResultado: equipo de Growth operando en paralelo.',
      },
    ],
    'El sistema que construiste en 12 clases: Fundamentos (1-3), Producción (4-6), Automatización (7-9), Sistema (10-11). Ahora tienes el stack completo: Projects + Skills + Agentes + Automatizaciones. Todos los componentes encajan.'
  );

  // 4. THREE COLUMNS — Stack completo
  addThreeColumn(pptx,
    'Tu Stack de Growth con IA — Cómo Encajan',
    [
      {
        head: 'PROJECTS + CONTEXTO',
        color: C.red,
        items: [
          'La base de operaciones.',
          '',
          'Claude entiende tu negocio, tu ICP, tus métricas.',
          '',
          'Cada Project = un agente especializado con memoria de contexto.',
          '',
          'Setup: 1 vez. Uso: todos los días.',
        ],
      },
      {
        head: 'SKILLS DE PRODUCCIÓN',
        color: C.orange,
        items: [
          'Tu librería de prompts probados.',
          '',
          '15 skills activos en Notion.',
          '',
          'Cada skill: nombre + cuándo + prompt con variables + output de referencia.',
          '',
          'Mejoran solos con el uso.',
        ],
      },
      {
        head: 'AGENTES + TABLERO',
        color: C.red,
        items: [
          'Tu equipo especializado.',
          '',
          '4 agentes coordinados en el tablero de Notion.',
          '',
          '40 min/semana de coordinación vs. horas de reuniones.',
          '',
          'Outputs que se convierten en decisiones.',
        ],
      },
    ],
    'Tu stack de Growth con IA: Projects + Skills + Agentes + Automatizaciones. Projects: la base de operaciones. Claude entiende tu negocio. Skills: tu librería de prompts probados. Mejoran solos con el uso. Agentes: tu equipo especializado coordinado en el tablero de Notion.'
  );

  // 5. DIVIDER — Instructor showcases
  addDivider(pptx,
    '3',
    'Sistemas Reales\nFuncionando en Vivo',
    'En los próximos minutos vas a ver tres sistemas reales funcionando. No demos. No slides. No teoría. Métricas de ayer. Decisiones de esta mañana. Outputs que ya están en producción.'
  );

  // 6. STEPS — Sistema Instructor A
  addSteps(pptx,
    'Instructor A — Su Sistema de Growth en Vivo',
    [
      'Abre el tablero. El brief de la semana estaba puesto desde el lunes (5 minutos de trabajo).',
      'El Agente de Análisis tenía las métricas de ayer. Diagnóstico en el tablero a las 9am.',
      'Una sola decisión a partir del output del agente. Una anomalía detectada, una acción definida.',
      'Esa decisión se tradujo en un prompt al Agente de Adquisición → output de campaña en producción.',
    ],
    'Ese es mi día. No perfecto. No mágico. Pero consistente. Tengo contexto antes del primer café. Tomo decisiones con datos. Ejecuto sin esperar a nadie. Eso vale más que cualquier herramienta que uses una vez y olvides. Hace dos meses, ese número me habría tomado 45 minutos de análisis manual y una reunión de equipo para interpretar. Hoy, el Agente de Análisis lo detectó en la revisión semanal.'
  );

  // 7. BEFORE/AFTER — Sistema B (equipo de 3)
  addBeforeAfter(pptx,
    'Instructor B',
    [
      'Con equipo de 3 personas:',
      '',
      '2 horas los viernes para el reporte semanal',
      '',
      'Reuniones de coordinación internas',
      '',
      'Briefs que van y vienen por email',
      '',
      'Cada persona construye sus prompts desde cero',
      '',
      'El lead de Growth es el intermediario de todo',
    ],
    [
      'Con el sistema de agentes:',
      '',
      '20 min para el reporte semanal con Skill 05',
      '',
      'Tablero de Notion como sala de guerra',
      '',
      'Cada persona sabe qué agente consultar',
      '',
      'Skills del entregable: abren, rellenan, ejecutan',
      '',
      'El sistema multiplica la capacidad sin contratar',
    ],
    'Mi contexto es diferente. Tengo un equipo de tres personas. El reto no es solo generar outputs — es que el equipo use el sistema sin que yo sea el intermediario. El sistema multiplicó la capacidad de un equipo de tres personas sin contratar a nadie más. No porque Claude sea mágico. Porque el contexto está bien cargado, los roles están claros y el proceso está documentado.'
  );

  // 8. CONTENT WITH CALLOUT — Sistema C (solo founder)
  addContentWithCallout(pptx,
    'Instructor C — El Sistema Mínimo Viable (Founder Solo)',
    'Mi caso es el más pequeño — soy founder, soy el equipo de Growth.\nUna persona. Múltiples frentes. Cero tiempo para fricción.\n\nEl flujo mínimo viable:\n• Un solo Project con el contexto completo y el foco de la semana\n• Cada semana el foco cambia: esta semana retención → las instrucciones priorizan retención\n• 10 minutos cada mañana: contexto del funnel + 2 acciones del día + 1 draft para clientes en riesgo\n\nNo me importa tener el sistema más sofisticado.\nMe importa tener el sistema que voy a usar todos los días.\nEse es el punto de partida para cualquiera que empieza solo.\nCuando creces, el sistema crece.',
    '"Empieza simple, empieza ahora. Cuando creces, el sistema crece."',
    'Mi caso es el más pequeño — soy founder, soy el equipo de Growth. Una persona. Múltiples frentes. Cero tiempo para fricción. Lo que voy a mostrar es el flujo mínimo viable: el sistema que funciona cuando no tienes horas para operar algo complejo. Diez minutos cada mañana: contexto del funnel, dos acciones para ejecutar hoy, y un draft del mensaje para clientes en riesgo de churn.'
  );

  // 9. STEPS — Plan de 7 días
  addSteps(pptx,
    'Tu Plan de 7 Días — Roadmap de Implementación',
    [
      'DÍA 1 — Fundamentos activos. Criterio: Claude responde con contexto específico de tu negocio. "¿Qué entiendes sobre mi negocio?" → respuesta específica.',
      'DÍA 2-3 — Primeros 3 skills en Notion. Criterio: 3 skills documentados, al menos 1 ejecutado con output real que podría entrar en producción.',
      'DÍA 4 — Agente de Adquisición configurado. Criterio: diagnóstico real con al menos 1 acción concreta que vas a ejecutar esta semana.',
      'DÍA 5 — Agentes de Retención + Análisis/Revenue. Criterio: 3 agentes activos con outputs complementarios y específicos.',
      'DÍA 6 — Tablero de coordinación operativo. Criterio: brief cargado + outputs de agentes + decisiones de la semana tomadas.',
      'DÍA 7 — Primera revisión y ajuste. Criterio: al menos 1 skill en v1.1 y 1 agente actualizado. Primer post en la comunidad.',
    ],
    'No vas a implementar todo el sistema de una vez. Nadie lo hace. Lo que voy a darte es un orden. Un ritmo. Y cómo saber si cada paso funcionó antes de pasar al siguiente. Al final del Día 7, tienes un sistema de Growth con IA funcionando en tu operación real. No perfecto. Pero funcionando. Y un sistema que funciona mejora. Uno que no existe, no.'
  );

  // 10. BIG STAT
  addBigStat(pptx,
    '~6h',
    'distribuidas en 7 días',
    'Para tener tu sistema de Growth con IA completamente operativo.\n30-60 minutos por día. No un sprint. Un hábito.',
    'Tiempo diario estimado: 30-60 minutos por día. Resultado al final del Día 7: sistema de Growth con Claude completamente operativo. Día 1: 45 min. Día 2: 45 min. Día 3: 60 min. Día 4: 45 min. Día 5: 60 min. Día 6: 45 min. Día 7: 30 min. Total: aproximadamente 6 horas distribuidas en 7 días.'
  );

  // 11. CONTENT WITH CALLOUT — Señales de que funciona
  addContentWithCallout(pptx,
    'Señales de que el Sistema está Funcionando',
    'Al final de la primera semana completa de operación, deberías ver:\n\n✅ Empiezas el día con más contexto sobre tu negocio del que tenías antes\n✅ Tomas decisiones con datos en menos tiempo\n✅ Produces copies o análisis en minutos, no en horas\n✅ El equipo usa los skills sin preguntarte cómo\n\nSeñales de que algo necesita ajuste:\n❌ Outputs genéricos → ajusta las instrucciones de sistema, necesitan más contexto específico\n❌ Los agentes salen de su área → refuerza las restricciones en el system prompt\n❌ Skills que no usas → el "cuándo usar" no está bien definido\n❌ No abres Claude todos los días → define un momento fijo diario',
    'El sistema no termina — evoluciona.',
    'Al final de la primera semana completa de operación, deberías ver que empiezas el día con más contexto, tomas decisiones con datos en menos tiempo, produces copies o análisis en minutos, y el equipo usa los skills sin preguntarte cómo. Señales de que algo necesita ajuste: outputs genéricos significa que las instrucciones de sistema necesitan más contexto específico. Los agentes que salen de su área necesitan restricciones reforzadas.'
  );

  // 12. CLOSING — emotional
  const closing = pptx.addSlide();
  closing.background = { color: C.black };
  closing.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.18, fill: { color: C.red } });
  closing.addShape(pptx.ShapeType.rect, { x: 0, y: 7.32, w: 13.33, h: 0.18, fill: { color: C.orange } });

  closing.addText('Lo más poderoso que vas a descubrir', {
    x: 0.5, y: 0.5, w: 12.33, h: 1.0,
    fontSize: 30, bold: true, fontFace: 'Arial Black',
    color: C.red, align: 'center',
  });

  closing.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.6, w: 12.33, h: 3.6, fill: { color: '111111' } });
  closing.addText(
    'No es un prompt.\nNo es un skill.\nNo es un agente.\n\nEs que tu sistema de Growth mejora contigo.\nCada semana que lo usas, Claude entiende mejor tu negocio.\nCada skill que iteras, produce mejor.\nCada agente que ajustas, piensa más alineado a tu estrategia.',
    {
      x: 0.7, y: 1.7, w: 11.93, h: 3.4,
      fontSize: 16, fontFace: 'Calibri', color: C.white,
      align: 'center', valign: 'middle',
    }
  );

  closing.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.4, w: 12.33, h: 0.8, fill: { color: C.orange } });
  closing.addText('Empezaste esta semana. No pares. Nos vemos en el grupo.', {
    x: 0.5, y: 5.4, w: 12.33, h: 0.8,
    fontSize: 18, bold: true, fontFace: 'Arial Black',
    color: C.black, align: 'center', valign: 'middle',
  });

  closing.addText('Claude para Growth — Clase 12 de 12', {
    x: 0.5, y: 6.5, w: 12.33, h: 0.6,
    fontSize: 13, fontFace: 'Calibri', color: C.white, align: 'center',
  });

  closing.addNotes('Una última cosa. Lo más poderoso que vas a descubrir en las próximas semanas no es un prompt. No es un skill. No es un agente. Es que tu sistema de Growth mejora contigo. Cada semana que lo usas, Claude entiende mejor tu negocio. Cada skill que iteras, produce mejor. Cada agente que ajustas, piensa más alineado a tu estrategia. Ese es el compuesto que nadie te puede dar en un curso. Solo te lo da el uso constante. Empezaste esta semana. No pares. Nos vemos en el grupo.');

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-12/clase-12.pptx' });
  console.log('✅ clase-12.pptx generado');
}


// ─── MAIN ────────────────────────────────────────────────────────────────────
(async () => {
  try {
    console.log('Generando presentaciones...');
    await generateClase10();
    await generateClase11();
    await generateClase12();
    console.log('\n✅ Todos los archivos .pptx generados correctamente.');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
