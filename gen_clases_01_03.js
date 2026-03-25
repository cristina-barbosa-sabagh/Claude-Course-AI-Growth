'use strict';
const PptxGenJS = require('/Users/mariacristinabarbosa/Claude-Course-AI-Growth/node_modules/pptxgenjs');

// ─── COLOR PALETTE ────────────────────────────────────────────────────────────
const C = {
  red:    'FF0000',
  orange: 'FF6B00',
  yellow: 'EEFF89',
  white:  'FFFFFF',
  black:  '000000',
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function newPptx() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'LAYOUT_WIDE', width: 13.33, height: 7.5 });
  pptx.layout = 'LAYOUT_WIDE';
  return pptx;
}

/** Cover / closing slide: black bg, big title in red, subtitle in white */
function addCoverSlide(pptx, { title, subtitle, eyebrow, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  // Red accent bar top
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: C.red } });

  if (eyebrow) {
    slide.addText(eyebrow, {
      x: 0.7, y: 0.55, w: 12, h: 0.4,
      fontSize: 13, bold: false, color: C.orange, fontFace: 'Calibri', align: 'left',
    });
  }

  slide.addText(title, {
    x: 0.7, y: 1.3, w: 11.9, h: 2.8,
    fontSize: 44, bold: true, color: C.red, fontFace: 'Arial Black',
    align: 'left', valign: 'top', wrap: true,
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.7, y: 4.4, w: 10, h: 1.8,
      fontSize: 18, bold: false, color: C.white, fontFace: 'Calibri',
      align: 'left', wrap: true,
    });
  }

  // Bottom accent bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.3, w: 13.33, h: 0.2, fill: { color: C.orange } });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** Content slide: white bg, red title bar, body area */
function addTitleContentSlide(pptx, { title, bullets, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Red title band
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.15, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.1, w: 12.5, h: 0.95,
    fontSize: 28, bold: true, color: C.white, fontFace: 'Arial Black', valign: 'middle',
  });

  // Left orange accent stripe
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 1.15, w: 0.18, h: 6.35, fill: { color: C.orange } });

  const bulletObjs = bullets.map((b, i) => {
    const isHead = b.startsWith('##');
    const text = b.replace(/^##\s*/, '');
    return {
      text,
      options: {
        fontSize: isHead ? 17 : 15,
        bold: isHead,
        color: isHead ? C.red : C.black,
        fontFace: isHead ? 'Arial Black' : 'Calibri',
        bullet: isHead ? false : { type: 'bullet', characterCode: '25B8', color: C.orange },
        breakLine: true,
        paraSpaceBefore: isHead ? 10 : 4,
      },
    };
  });

  slide.addText(bulletObjs, {
    x: 0.5, y: 1.3, w: 12.5, h: 5.9,
    valign: 'top', wrap: true,
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** Two-column comparison slide */
function addTwoColumnSlide(pptx, { title, leftTitle, leftItems, rightTitle, rightItems, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Title bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.05, fill: { color: C.black } });
  slide.addText(title, {
    x: 0.4, y: 0.08, w: 12.5, h: 0.88,
    fontSize: 26, bold: true, color: C.red, fontFace: 'Arial Black', valign: 'middle',
  });

  // Left column
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.2, w: 5.9, h: 0.55, fill: { color: C.orange } });
  slide.addText(leftTitle, {
    x: 0.3, y: 1.2, w: 5.9, h: 0.55,
    fontSize: 16, bold: true, color: C.white, fontFace: 'Arial Black', align: 'center', valign: 'middle',
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.75, w: 5.9, h: 5.4, fill: { color: 'F5F5F5' } });

  const leftBullets = leftItems.map(t => ({
    text: t,
    options: { fontSize: 14, color: C.black, fontFace: 'Calibri', bullet: { type: 'bullet', characterCode: '25B8', color: C.orange }, breakLine: true, paraSpaceBefore: 5 },
  }));
  slide.addText(leftBullets, { x: 0.5, y: 1.9, w: 5.5, h: 5.1, valign: 'top', wrap: true });

  // Right column
  slide.addShape(pptx.ShapeType.rect, { x: 7.1, y: 1.2, w: 5.9, h: 0.55, fill: { color: C.red } });
  slide.addText(rightTitle, {
    x: 7.1, y: 1.2, w: 5.9, h: 0.55,
    fontSize: 16, bold: true, color: C.white, fontFace: 'Arial Black', align: 'center', valign: 'middle',
  });
  slide.addShape(pptx.ShapeType.rect, { x: 7.1, y: 1.75, w: 5.9, h: 5.4, fill: { color: 'F5F5F5' } });

  const rightBullets = rightItems.map(t => ({
    text: t,
    options: { fontSize: 14, color: C.black, fontFace: 'Calibri', bullet: { type: 'bullet', characterCode: '25B8', color: C.red }, breakLine: true, paraSpaceBefore: 5 },
  }));
  slide.addText(rightBullets, { x: 7.3, y: 1.9, w: 5.5, h: 5.1, valign: 'top', wrap: true });

  // Divider
  slide.addShape(pptx.ShapeType.rect, { x: 6.55, y: 1.15, w: 0.25, h: 6.1, fill: { color: C.yellow } });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** Big stat slide */
function addBigStatSlide(pptx, { stat, label, subtext, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  // Decorative circle behind stat
  slide.addShape(pptx.ShapeType.ellipse, { x: 3.9, y: 0.7, w: 5.5, h: 5.5, fill: { color: C.red }, line: { color: C.orange, width: 3 } });

  slide.addText(stat, {
    x: 1.5, y: 1.3, w: 10.3, h: 3.2,
    fontSize: 88, bold: true, color: C.yellow, fontFace: 'Arial Black', align: 'center', valign: 'middle',
  });

  slide.addText(label, {
    x: 1.5, y: 4.3, w: 10.3, h: 1.0,
    fontSize: 24, bold: true, color: C.white, fontFace: 'Arial Black', align: 'center',
  });

  if (subtext) {
    slide.addText(subtext, {
      x: 1.5, y: 5.5, w: 10.3, h: 1.2,
      fontSize: 15, color: C.orange, fontFace: 'Calibri', align: 'center', wrap: true,
    });
  }

  if (notes) slide.addNotes(notes);
  return slide;
}

/** Three-column layout */
function addThreeColumnSlide(pptx, { title, cols, notes }) {
  // cols: [{header, icon, items}]
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.05, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.08, w: 12.5, h: 0.88,
    fontSize: 26, bold: true, color: C.white, fontFace: 'Arial Black', valign: 'middle',
  });

  const colColors = [C.red, C.orange, '555555'];
  const colW = 3.8;
  const positions = [0.3, 4.77, 9.23];

  cols.forEach((col, i) => {
    const x = positions[i];
    slide.addShape(pptx.ShapeType.rect, { x, y: 1.2, w: colW, h: 0.7, fill: { color: colColors[i] } });
    slide.addText(col.header, {
      x, y: 1.2, w: colW, h: 0.7,
      fontSize: 14, bold: true, color: C.white, fontFace: 'Arial Black', align: 'center', valign: 'middle',
    });
    slide.addShape(pptx.ShapeType.rect, { x, y: 1.9, w: colW, h: 5.3, fill: { color: 'F7F7F7' } });

    const colBullets = col.items.map(t => ({
      text: t,
      options: { fontSize: 13, color: C.black, fontFace: 'Calibri', bullet: { type: 'bullet', characterCode: '25B8', color: colColors[i] }, breakLine: true, paraSpaceBefore: 6 },
    }));
    slide.addText(colBullets, { x: x + 0.15, y: 2.05, w: colW - 0.3, h: 4.9, valign: 'top', wrap: true });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** Callout / quote slide */
function addCalloutSlide(pptx, { eyebrow, quote, attribution, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  // Big red left bar
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.6, h: 7.5, fill: { color: C.red } });

  if (eyebrow) {
    slide.addText(eyebrow, {
      x: 1.0, y: 0.6, w: 11.5, h: 0.5,
      fontSize: 14, bold: true, color: C.orange, fontFace: 'Calibri',
    });
  }

  // Yellow callout box
  slide.addShape(pptx.ShapeType.rect, { x: 1.0, y: 1.3, w: 11.2, h: 4.2, fill: { color: C.yellow }, line: { color: C.orange, width: 2 } });

  slide.addText(quote, {
    x: 1.4, y: 1.5, w: 10.4, h: 3.8,
    fontSize: 22, bold: true, color: C.black, fontFace: 'Arial Black',
    align: 'left', valign: 'middle', wrap: true,
  });

  if (attribution) {
    slide.addText(attribution, {
      x: 1.0, y: 5.7, w: 11.2, h: 0.8,
      fontSize: 14, color: C.red, bold: true, fontFace: 'Calibri', align: 'right',
    });
  }

  // Bottom decoration
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.25, w: 13.33, h: 0.25, fill: { color: C.orange } });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** Step-by-step numbered slide */
function addStepsSlide(pptx, { title, steps, notes }) {
  // steps: [{num, heading, text}]
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.05, fill: { color: C.black } });
  slide.addText(title, {
    x: 0.4, y: 0.08, w: 12.5, h: 0.88,
    fontSize: 26, bold: true, color: C.yellow, fontFace: 'Arial Black', valign: 'middle',
  });

  const rowH = 1.18;
  steps.forEach((step, i) => {
    const y = 1.2 + i * rowH;
    slide.addShape(pptx.ShapeType.ellipse, { x: 0.3, y: y + 0.05, w: 0.75, h: 0.75, fill: { color: i % 2 === 0 ? C.red : C.orange } });
    slide.addText(String(step.num), {
      x: 0.3, y: y + 0.05, w: 0.75, h: 0.75,
      fontSize: 20, bold: true, color: C.white, fontFace: 'Arial Black', align: 'center', valign: 'middle',
    });
    slide.addText(step.heading, {
      x: 1.3, y: y + 0.02, w: 11.5, h: 0.42,
      fontSize: 15, bold: true, color: C.black, fontFace: 'Arial Black',
    });
    slide.addText(step.text, {
      x: 1.3, y: y + 0.46, w: 11.5, h: 0.6,
      fontSize: 13, color: '333333', fontFace: 'Calibri', wrap: true,
    });
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** Before / After split slide */
function addBeforeAfterSlide(pptx, { title, before, after, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.white };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 1.05, fill: { color: C.red } });
  slide.addText(title, {
    x: 0.4, y: 0.08, w: 12.5, h: 0.88,
    fontSize: 26, bold: true, color: C.white, fontFace: 'Arial Black', valign: 'middle',
  });

  // Before
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.2, w: 5.9, h: 6.0, fill: { color: '1A1A1A' } });
  slide.addText('ANTES', {
    x: 0.3, y: 1.2, w: 5.9, h: 0.6,
    fontSize: 18, bold: true, color: C.white, fontFace: 'Arial Black', align: 'center', valign: 'middle',
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.3, y: 1.8, w: 5.9, h: 0.04, fill: { color: C.orange } });
  const bBullets = before.map(t => ({
    text: t,
    options: { fontSize: 13, color: 'CCCCCC', fontFace: 'Calibri', bullet: { type: 'bullet', characterCode: '25B8', color: C.orange }, breakLine: true, paraSpaceBefore: 6 },
  }));
  slide.addText(bBullets, { x: 0.5, y: 1.95, w: 5.5, h: 5.0, valign: 'top', wrap: true });

  // After
  slide.addShape(pptx.ShapeType.rect, { x: 7.1, y: 1.2, w: 5.9, h: 6.0, fill: { color: C.red } });
  slide.addText('CON CLAUDE', {
    x: 7.1, y: 1.2, w: 5.9, h: 0.6,
    fontSize: 18, bold: true, color: C.white, fontFace: 'Arial Black', align: 'center', valign: 'middle',
  });
  slide.addShape(pptx.ShapeType.rect, { x: 7.1, y: 1.8, w: 5.9, h: 0.04, fill: { color: C.yellow } });
  const aBullets = after.map(t => ({
    text: t,
    options: { fontSize: 13, color: C.white, fontFace: 'Calibri', bullet: { type: 'bullet', characterCode: '25B8', color: C.yellow }, breakLine: true, paraSpaceBefore: 6 },
  }));
  slide.addText(aBullets, { x: 7.3, y: 1.95, w: 5.5, h: 5.0, valign: 'top', wrap: true });

  // Center divider
  slide.addShape(pptx.ShapeType.rect, { x: 6.42, y: 1.2, w: 0.5, h: 6.0, fill: { color: C.yellow } });
  slide.addText('VS', {
    x: 6.42, y: 3.7, w: 0.5, h: 0.7,
    fontSize: 11, bold: true, color: C.black, fontFace: 'Arial Black', align: 'center', valign: 'middle',
  });

  if (notes) slide.addNotes(notes);
  return slide;
}

/** Closing slide (black bg, checklist style) */
function addClosingSlide(pptx, { title, subtitle, items, label, notes }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.black };

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: C.red } });

  slide.addText(title, {
    x: 0.7, y: 0.5, w: 11.9, h: 1.4,
    fontSize: 36, bold: true, color: C.red, fontFace: 'Arial Black', wrap: true,
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.7, y: 2.0, w: 11.9, h: 0.6,
      fontSize: 17, color: C.orange, fontFace: 'Calibri', bold: true,
    });
  }

  if (items && items.length) {
    const checkBullets = items.map(t => ({
      text: t,
      options: { fontSize: 14, color: C.white, fontFace: 'Calibri', bullet: { type: 'bullet', characterCode: '2713', color: C.yellow }, breakLine: true, paraSpaceBefore: 5 },
    }));
    slide.addText(checkBullets, { x: 0.7, y: 2.7, w: 11.5, h: 4.1, valign: 'top', wrap: true });
  }

  if (label) {
    slide.addShape(pptx.ShapeType.rect, { x: 0.7, y: 6.6, w: 4, h: 0.55, fill: { color: C.orange } });
    slide.addText(label, {
      x: 0.7, y: 6.6, w: 4, h: 0.55,
      fontSize: 13, bold: true, color: C.white, fontFace: 'Calibri', align: 'center', valign: 'middle',
    });
  }

  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.3, w: 13.33, h: 0.2, fill: { color: C.orange } });
  if (notes) slide.addNotes(notes);
  return slide;
}

// ─── CLASE 01 ─────────────────────────────────────────────────────────────────
async function buildClase01() {
  const pptx = newPptx();

  // 1. Cover
  addCoverSlide(pptx, {
    eyebrow: 'MÓDULO 01 · CLASE 01',
    title: 'Claude para Growth:\nqué cambia y por qué importa ahora',
    subtitle: 'Instructor A · 12 minutos · De cero a tu primera máquina de producción con IA',
    notes: `Bienvenido al curso.

Antes de explicarte qué vas a aprender, te voy a decir qué vas a dejar de hacer:
vas a dejar de perder horas generando copies que nadie aprueba,
de escribir briefs que no producen nada usable,
y de pedirle a Claude cosas genéricas y recibir outputs genéricos.

Este módulo es de fundamentos. Pero no de teoría — de configuración.
Al final de estas tres clases, Claude va a trabajar como si te conociera de años.
Esta clase es el primer paso.

Doce minutos. Sin relleno. Vamos.`,
  });

  // 2. Big stat slide
  addBigStatSlide(pptx, {
    stat: '3 min',
    label: 'De brief a 5 variaciones de copy listas para subir a Meta',
    subtext: 'Lo que hoy tarda 1–2 días, con Claude bien configurado tarda minutos — no como punto de partida, listas para producción.',
    notes: `Voy a darte tres casos reales. No hipotéticos. Los tres pasan en operaciones de Growth reales hoy.

Caso 1 — Adquisición: Hoy tu equipo necesita 5 variaciones de copy para una campaña de Meta. Alguien redacta un brief. Alguien más escribe las variaciones. Hay revisiones. Tarda un día, a veces dos.

Con Claude bien configurado: pegas las métricas de tu campaña actual, el ICP y el objetivo. En 3 minutos tienes 5 variaciones con ángulos diferentes, hooks y CTAs — listas para subir.

Ese es el primer cambio de mentalidad que necesitas: Claude no es un asistente de escritura. Es una máquina de producción de Growth configurada para tu negocio.`,
  });

  // 3. Three column — 3 casos
  addThreeColumnSlide(pptx, {
    title: 'Tres áreas, el mismo patrón: días → minutos',
    cols: [
      {
        header: 'ADQUISICIÓN',
        items: [
          'Brief de copy para Meta',
          '5 variaciones: ángulos, hooks y CTAs diferentes',
          'Hoy: 1–2 días con revisiones',
          'Con Claude: 3 minutos',
          'Output listo para subir — no borrador',
        ],
      },
      {
        header: 'RETENCIÓN',
        items: [
          'Usuario no completó onboarding',
          'Secuencia de 5 emails personalizada',
          'Hoy: template genérico de hace 8 meses',
          'Con Claude: 15 minutos',
          'Listo para cargar en Klaviyo o Mailchimp',
        ],
      },
      {
        header: 'REVENUE',
        items: [
          'Upsell a usuario activo',
          'Momento exacto + mensaje + canal correcto',
          'Hoy: intuición o regla fija ("a los 30 días")',
          'Con Claude: análisis de patrón de comportamiento',
          'Decisión basada en datos, no en rutina',
        ],
      },
    ],
    notes: `Voy a darte tres casos reales. No hipotéticos. Los tres pasan en operaciones de Growth reales hoy.

Caso 2 — Retención: Hoy un usuario no completó onboarding. ¿Qué le mandas? La mayoría de equipos tiene una secuencia genérica de 3 emails que escribieron hace 8 meses. Con Claude: le describes tu producto, tu ICP, el punto exacto donde se cayó el usuario, y en 15 minutos tienes una secuencia de 5 emails personalizada al comportamiento de ese segmento. Lista para cargar en Klaviyo o Mailchimp.

Caso 3 — Revenue: Hoy ¿cuándo y cómo le ofreces un upsell a un usuario activo? La mayoría lo hace por intuición o por reglas fijas — "a los 30 días" — sin contexto. Con Claude: defines el patrón de comportamiento que indica intención de expansión, le das los datos, y Claude te da el momento exacto, el mensaje exacto y el canal correcto.

Tres áreas. El mismo patrón en todas: lo que tardaba días ahora tarda minutos. Y no porque Claude haga magia — sino porque tú vas a aprender a hablarle bien.`,
  });

  // 4. Before / After
  addBeforeAfterSlide(pptx, {
    title: 'La realidad de tu operación de Growth: Hoy vs. Con Claude',
    before: [
      'Brief → revisión → redacción → aprobación: 1–2 días',
      'Secuencias de email genéricas de hace meses',
      'Upsell por intuición o reglas fijas sin contexto',
      'Cada tarea requiere coordinar 2–3 personas',
      'El output final todavía necesita edición significativa',
    ],
    after: [
      'Pega ICP + métricas + objetivo → output en 3 minutos',
      'Secuencia personalizada al comportamiento del segmento',
      'Timing y mensaje de upsell basados en datos reales',
      'Una persona, una herramienta, output listo para producción',
      'El output no es "un punto de partida" — es el producto final',
    ],
    notes: `Tres áreas. El mismo patrón en todas: lo que tardaba días ahora tarda minutos. Y no porque Claude haga magia — sino porque tú vas a aprender a hablarle bien.`,
  });

  // 5. Callout — mindset shift
  addCalloutSlide(pptx, {
    eyebrow: 'CAMBIO DE MENTALIDAD NECESARIO',
    quote: '"Claude no es un asistente de escritura. Es una máquina de producción de Growth configurada para tu negocio."',
    attribution: '— Clase 01 · Módulo 01',
    notes: `Este es el primer cambio de mentalidad que necesitas. Claude no es un chatbot. Cuando está bien configurado con tu contexto, opera como un miembro senior de tu equipo que conoce tu ICP, tus métricas y tu tono.`,
  });

  // 6. Three column — Claude vs ChatGPT
  addThreeColumnSlide(pptx, {
    title: 'Claude vs ChatGPT: Las 3 diferencias que importan para Growth',
    cols: [
      {
        header: 'MEMORIA DE CONTEXTO',
        items: [
          'ChatGPT: cada conversación empieza desde cero',
          'Claude Projects: carga el contexto una sola vez',
          'Desde ese momento, Claude trabaja con ese contexto en cada conversación',
          'No repites. No explicas. Solo pides.',
          'Para un Chief of Growth: vale horas a la semana',
        ],
      },
      {
        header: 'INSTRUCCIONES DE SISTEMA',
        items: [
          'Bloque de texto donde defines quién eres',
          'Tu ICP, métricas, tono de marca y qué NO quieres',
          'Cada respuesta queda alineada sin pedirlo cada vez',
          'La diferencia entre instruir cada mañana vs. que ya sepa cómo operas',
          'Se configura una vez, funciona siempre',
        ],
      },
      {
        header: 'RAZONAMIENTO ESTRATÉGICO',
        items: [
          'Claude no solo genera texto',
          'Puede razonar sobre decisiones de Growth',
          'Lee métricas, identifica dónde cae el funnel',
          'Propone el experimento correcto',
          'Co-piloto estratégico, no chatbot',
        ],
      },
    ],
    notes: `Esta es la pregunta que me hacen siempre. Y la respuesta corta es: no es una cuestión de calidad de redacción. Es una cuestión de arquitectura para el trabajo continuo.

Diferencia 1 — Memoria de contexto: ChatGPT olvida. Cada conversación empieza desde cero. Si no pegas tu ICP, tu producto y tus métricas en cada prompt, el output es genérico. Claude tiene Projects. Un Project es un espacio donde cargas el contexto de tu negocio una sola vez. Desde ese momento, Claude trabaja con ese contexto en cada conversación. No repites. No explicas. Solo pides.

Diferencia 2 — Instrucciones de sistema: Claude acepta instrucciones de sistema persistentes: un bloque de texto donde defines quién eres, cuál es tu ICP, qué métricas importan, cuál es tu tono de marca y qué NO quieres. Cada respuesta de Claude queda alineada a esas instrucciones sin que tú lo pidas cada vez.

Diferencia 3 — Razonamiento estratégico: Claude no solo genera texto. Puede razonar sobre decisiones de Growth: leer tus métricas, identificar dónde se cae el funnel, proponer el experimento correcto. No como consultor que cobra 10 mil dólares la hora. Como alguien en tu equipo que entiende tu negocio y puede pensar contigo.`,
  });

  // 7. Two-column — Projects feature
  addTwoColumnSlide(pptx, {
    title: 'Claude Projects: Tu base de operaciones con IA',
    leftTitle: 'QUÉ ES UN PROJECT',
    leftItems: [
      'Espacio de trabajo con contexto persistente',
      'Instrucciones de sistema que Claude lee antes de cada conversación',
      'Base de conocimiento: documentos de tu negocio cargados',
      'Historial de conversaciones organizado por proyecto',
      'Disponible en plan Pro ($20/mes)',
    ],
    rightTitle: 'QUÉ CAMBIA CON UN PROJECT',
    rightItems: [
      'No explicas tu producto en cada prompt',
      'No repites el ICP cada vez',
      'Cada output lleva tu tono de marca sin pedirlo',
      'Claude conoce tus métricas y prioridades actuales',
      'La diferencia entre un asistente genérico y un co-piloto estratégico',
    ],
    notes: `Claude tiene Projects. Un Project es un espacio donde cargas el contexto de tu negocio una sola vez. Desde ese momento, Claude trabaja con ese contexto en cada conversación. No repites. No explicas. Solo pides.

Para un Chief of Growth que opera con velocidad, esa diferencia vale horas a la semana.`,
  });

  // 8. Steps — Demo
  addStepsSlide(pptx, {
    title: 'Demo en vivo: De cero a primer output útil en 5 minutos',
    steps: [
      { num: 1, heading: 'Abre claude.ai', text: 'Sin cuenta de pago. Sin configuración. Cero fricción. Empieza desde una conversación nueva.' },
      { num: 2, heading: 'Describe tu contexto mínimo', text: 'Producto + ICP + objetivo. Sin detallar. Sin instrucciones largas. Lo mínimo para que Claude no invente.' },
      { num: 3, heading: 'Pide el output específico', text: 'Un verbo de acción + qué + para quién. Ejemplo: "Genera 3 variaciones de copy para Meta dirigidas a [ICP]. Objetivo: prueba gratuita."' },
      { num: 4, heading: 'Evalúa el output', text: '¿Puedes usarlo esta semana? Si la respuesta es "casi" — itera. Si es "no" — el contexto era insuficiente.' },
      { num: 5, heading: 'Nota lo que falta', text: 'El output sin configuración es "usable". Con contexto completo cargado (Clase 3) será "listo para producción".' },
    ],
    notes: `Voy a mostrarte exactamente lo que puedes hacer tú, hoy, en los próximos 5 minutos. Sin cuenta de pago. Sin configuración. Cero fricción.

Noto lo siguiente mientras hago esto:
— No describí mi producto en detalle
— No di contexto de mercado
— No expliqué nada que un equipo de Growth no sepa ya

Y aun así, el output es usable. No perfecto — pero usable.

Eso es lo que te da Claude sin ninguna configuración.

En la clase 3 vamos a cargarle TODO tu contexto. Cuando eso pase, el output no va a ser "usable" — va a ser "listo para producción".`,
  });

  // 9. Title-content — Entregable overview
  addTitleContentSlide(pptx, {
    title: 'Entregable: Checklist de Activación (10 pasos · 15 minutos)',
    bullets: [
      '## Pasos 1–3: Infraestructura',
      'Crear cuenta Pro en Claude.ai (necesitas Projects)',
      'Crear tu primer Project de Growth con nombre y descripción',
      'Explorar las 3 áreas clave: Instructions, Knowledge, Chat',
      '## Pasos 4–5: Primera configuración',
      'Escribir instrucción de sistema versión mínima (plantilla incluida)',
      'Hacer prueba de alineación: ¿Claude entiende tu negocio?',
      '## Pasos 6–7: Velocidad de acceso',
      'Instalar app de escritorio (Mac/Windows)',
      'Crear acceso rápido a tu Project en Dock o barra de favoritos',
      '## Pasos 8–10: Primer uso real',
      'Generar tu primer output de Growth real con el prompt plantilla',
      'Identificar tu caso de uso de mayor impacto inmediato',
      'Definir tu rutina mínima diaria con Claude',
    ],
    notes: `Lo que acabas de ver no es una demo de producto. Es el punto de partida de tu operación de Growth con IA.

Tu tarea para antes de la próxima clase: completa el checklist de activación que te dejamos como entregable. Diez pasos. Quince minutos. Al final de eso, Claude está listo para trabajar contigo.

No lo postergues. Hazlo ahora.

Clase 2: aprendemos a hablarle a Claude para obtener outputs de elite. El brief perfecto. Nos vemos ahí.`,
  });

  // 10. Closing
  addClosingSlide(pptx, {
    title: 'Claude está listo.\n¿Lo estás tú?',
    subtitle: 'Antes de la Clase 2 — completa el Checklist de Activación',
    items: [
      'Cuenta Pro creada y Project de Growth configurado',
      'Instrucciones de sistema mínimas cargadas',
      'Primera prueba de alineación completada',
      'Primer output de Growth real generado',
      'Caso de uso de mayor impacto identificado',
      'Rutina mínima definida',
      'Clase 2: El brief perfecto — cómo hablarle a Claude para outputs de elite',
    ],
    label: 'PRÓXIMA CLASE →',
    notes: `Lo que acabas de ver no es una demo de producto. Es el punto de partida de tu operación de Growth con IA.

Tu tarea para antes de la próxima clase: completa el checklist de activación que te dejamos como entregable. Diez pasos. Quince minutos. Al final de eso, Claude está listo para trabajar contigo.

Clase 2: aprendemos a hablarle a Claude para obtener outputs de elite. El brief perfecto. Nos vemos ahí.`,
  });

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-01/clase-01.pptx' });
  console.log('✓ clase-01.pptx generado');
}

// ─── CLASE 02 ─────────────────────────────────────────────────────────────────
async function buildClase02() {
  const pptx = newPptx();

  // 1. Cover
  addCoverSlide(pptx, {
    eyebrow: 'MÓDULO 01 · CLASE 02',
    title: 'El brief perfecto:\ncómo hablarle a Claude para obtener outputs de elite',
    subtitle: 'Instructor A · 14 minutos · La estructura que separa outputs mediocres de outputs de elite',
    notes: `En la clase anterior viste que Claude puede producir outputs usables en minutos. Hoy vas a entender por qué a veces no lo hace — y cómo corregirlo en segundos.

La diferencia entre un output mediocre y un output que copias y pegas directo no está en Claude. Está en cómo le hablas.

Hay una estructura. Cinco elementos. Y cuando los dominas, el output de Claude cambia de categoría.

Catorce minutos. Vamos.`,
  });

  // 2. Callout — core insight
  addCalloutSlide(pptx, {
    eyebrow: 'LA VERDAD QUE CAMBIA TODO',
    quote: '"La diferencia entre un output mediocre y uno que copias y pegas directo no está en Claude. Está en cómo le hablas."',
    attribution: '— Clase 02 · Módulo 01',
    notes: `La diferencia entre un output mediocre y un output que copias y pegas directo no está en Claude. Está en cómo le hablas. Hay una estructura. Cinco elementos. Y cuando los dominas, el output de Claude cambia de categoría.`,
  });

  // 3. Five elements — title-content
  addTitleContentSlide(pptx, {
    title: 'La estructura del brief perfecto: 5 elementos, ninguno opcional',
    bullets: [
      '## ROL',
      'Quién es Claude en este contexto — específico, no genérico. "Growth Marketer B2B SaaS con experiencia en ciclos de venta cortos" no "experto en marketing"',
      '## CONTEXTO',
      'Qué hace tu producto, para quién, en qué etapa del funnel, qué ya probaste. Sin esto, Claude rellena con supuestos genéricos.',
      '## TAREA',
      'Un verbo de acción + qué + en qué contexto. Una sola cosa. "Analiza y recomienda" son dos tareas — sepáralas.',
      '## FORMATO',
      'Número de opciones, estructura de cada una, extensión, forma de presentación (tabla, lista, bullets). El formato no es cosmético — es funcional.',
      '## RESTRICCIONES',
      'Lo que NO quieres. "Sin introducciones", "Sin explicar lo obvio", "No usar: innovador, disruptivo". Las restricciones eliminan el 80% del relleno.',
    ],
    notes: `Voy a darte la estructura que uso para todo. No importa si es copy de campaña, análisis de métricas o emails de onboarding. La estructura es siempre la misma. Cinco elementos. Ninguno es opcional.

El ROL calibra el nivel de razonamiento. Un rol vago produce razonamiento vago.
El CONTEXTO le da la información que necesita para no inventar supuestos.
La TAREA debe ser una sola cosa, con un verbo de acción.
El FORMATO le ahorra adivinar tu preferencia — y te ahorra reformatear manualmente.
Las RESTRICCIONES son donde eliminas el relleno. Un prompt sin restricciones le da a Claude permiso para improvisar. Y cuando improvisa, improvisa safe — que es lo opuesto a útil para Growth.`,
  });

  // 4. Three column — ROL, CONTEXTO, TAREA deep dive
  addThreeColumnSlide(pptx, {
    title: 'ROL + CONTEXTO + TAREA: los tres fundamentos',
    cols: [
      {
        header: 'ROL',
        items: [
          'Calibra el nivel de razonamiento de Claude',
          'Específico = "Growth Marketer B2B SaaS, ciclos de venta <30 días"',
          'Vago = "experto en marketing"',
          'El ROL ajusta vocabulario, supuestos y nivel de profundidad',
          'Señal: si suena como un brief de reclutamiento, está bien',
        ],
      },
      {
        header: 'CONTEXTO',
        items: [
          'Producto + ICP + etapa del funnel + qué ya probaste',
          'Sin contexto, Claude usa promedios de internet',
          'Los promedios de internet son inútiles para Growth específico',
          'Regla: si un analista nuevo lo necesitaría para hacer bien la tarea, va aquí',
          'Señal: Claude no hace suposiciones sobre tu ICP en el output',
        ],
      },
      {
        header: 'TAREA',
        items: [
          'Un verbo de acción + qué + para quién',
          'Verbos: genera, analiza, reescribe, compara, prioriza, evalúa',
          'Error: pedir dos cosas en una tarea',
          'Separar = dos outputs más finos',
          'Señal: puedes evaluar el output en menos de 60 segundos',
        ],
      },
    ],
    notes: `Voy a darte la estructura que uso para todo. No importa si es copy de campaña, análisis de métricas o emails de onboarding. La estructura es siempre la misma.

Elemento 1 — ROL: Le dices a Claude quién es en este contexto. No "sé un experto en marketing". Eso es demasiado vago. Sino: "Actúa como un Growth Marketer con experiencia en SaaS B2B de ciclo de venta corto, especializado en optimización de conversión en landing pages." Un rol vago produce razonamiento vago.

Elemento 2 — CONTEXTO: Le das la información que necesita para no inventar supuestos. Tres datos mínimos para Growth: Qué hace tu producto y para quién; en qué etapa está el funnel del que hablas; qué ya sabes o ya has probado. Sin CONTEXTO, Claude rellena los huecos con supuestos genéricos.

Elemento 3 — TAREA: La instrucción específica de lo que quieres que haga. Aquí está el error más común que veo: pedir dos cosas en una tarea. La TAREA debe ser una sola cosa, formulada con un verbo de acción: genera, analiza, reescribe, compara, prioriza.`,
  });

  // 5. Two column — FORMATO + RESTRICCIONES
  addTwoColumnSlide(pptx, {
    title: 'FORMATO + RESTRICCIONES: donde se gana la batalla del output',
    leftTitle: 'FORMATO — especifica todo',
    leftItems: [
      '¿Bullet points o párrafos?',
      '¿Cuántas opciones? (3, no 20)',
      '¿Máximo de palabras por sección?',
      '¿Tabla o lista numerada?',
      '¿Con o sin explicaciones?',
      'El FORMATO le ahorra a Claude adivinar tu preferencia',
      'Y te ahorra a ti reformatear el output manualmente',
      'Regla: el output debe poder copiarse sin reformatear',
    ],
    rightTitle: 'RESTRICCIONES — lo más subestimado',
    rightItems: [
      '"Sin introducciones"',
      '"Sin explicar lo obvio"',
      '"No usar la palabra innovador"',
      '"Solo ejemplos accionables — no teoría"',
      '"Sin disclaimers"',
      'Las restricciones eliminan el 80% del relleno',
      'Sin restricciones, Claude improvisa safe',
      'Safe = genérico = inútil para Growth',
    ],
    notes: `Elemento 4 — FORMATO: Le dices exactamente cómo quieres el output. ¿Bullet points o párrafos? ¿Cuántas opciones? ¿Máximo de palabras? ¿Tabla o lista numerada? ¿Con o sin explicaciones? El FORMATO le ahorra a Claude adivinar tu preferencia — y te ahorra a ti reformatear el output manualmente.

Elemento 5 — RESTRICCIONES: Le dices qué NO quieres. Esto es lo más subestimado de los cinco. Las RESTRICCIONES son donde eliminas el relleno: "Sin introducciones", "Sin explicar lo obvio", "Sin usar la palabra 'innovador'", "No me des teoría — solo ejemplos accionables". Un prompt sin RESTRICCIONES le da a Claude permiso para improvisar. Y cuando improvisa, improvisa safe — que es lo opuesto a útil para Growth.`,
  });

  // 6. Steps — 5 errors
  addStepsSlide(pptx, {
    title: 'Los 5 errores que cometen Chiefs of Growth al usar Claude',
    steps: [
      { num: 1, heading: 'El prompt de una línea', text: '"Dame ideas de copy para mi campaña de Meta." — Falta ROL, CONTEXTO, FORMATO y RESTRICCIONES. Solo hay TAREA vaga. Si tu prompt tiene menos de 5 líneas, probablemente le falta algo.' },
      { num: 2, heading: 'Confundir cantidad con calidad', text: '"Dame 20 ideas de headlines." — Claude da 5 buenas y rellena 15 con variaciones mediocres. Pide 3 con un ángulo diferente cada una. Tres con criterio > veinte sin criterio.' },
      { num: 3, heading: 'Aceptar el primer output sin iterar', text: 'El primer output es el punto de partida, no el destino. Siempre da una instrucción de refinamiento en la segunda ronda. Dos rondas casi siempre producen un output listo.' },
      { num: 4, heading: 'Cambiar de tema sin cambiar de conversación', text: 'Análisis + copy + estrategia en el mismo chat: Claude mezcla los marcos. Solución: conversaciones separadas para tareas distintas dentro de tu Project.' },
      { num: 5, heading: 'No decirle a Claude cuándo está equivocado', text: 'Si dice algo incorrecto, corrígelo: "Eso no aplica a mi caso. En mi industria, el CAC es X." Claude no se ofende. Y el output siguiente será mucho más preciso.' },
    ],
    notes: `He visto estas sesiones con equipos de Growth de distintas industrias. Los errores son siempre los mismos cinco.

Error 1 — El prompt de una línea: "Dame ideas de copy para mi campaña de Meta." ¿Qué falta? El ROL, el CONTEXTO, el FORMATO y las RESTRICCIONES. Solo hay TAREA — y vaga. Si tu prompt tiene menos de 5 líneas, probablemente le falta alguno de los cinco elementos.

Error 2 — Confundir cantidad con calidad: "Dame 20 ideas de headlines." El problema no es pedir 20. Es que Claude va a darte las primeras 5 buenas y rellenar las otras 15 con variaciones cada vez más mediocres. Pide 3 o 5, con criterio diferenciador.

Error 3 — Aceptar el primer output sin iterar: El primer output de Claude es el punto de partida, no el destino. La corrección: siempre da una instrucción de refinamiento en la segunda ronda.

Error 4 — Cambiar de tema sin cambiar de conversación: El problema: Claude acumula contexto de conversación y a veces confunde los marcos. La corrección: conversaciones separadas para tareas distintas.

Error 5 — No decirle a Claude cuándo está equivocado: Claude puede estar equivocado. Y si no lo corriges, el error se propaga en el output.`,
  });

  // 7. Two-column — Prompt vago vs Elite
  addTwoColumnSlide(pptx, {
    title: 'El ROI del brief perfecto: Prompt vago vs. Brief de elite',
    leftTitle: 'PROMPT VAGO',
    leftItems: [
      '"Dame ideas de copy para mi campaña de Meta."',
      '',
      'Output: genérico, aplica a cualquier empresa del planeta',
      'Requiere edición significativa antes de usar',
      'Ciclos de revisión: 3–5',
      'Tiempo hasta output usable: 45–90 minutos',
      'El equipo de diseño no puede trabajar con esto sin más input',
    ],
    rightTitle: 'BRIEF DE ELITE',
    rightItems: [
      'ROL + CONTEXTO + TAREA + FORMATO + RESTRICCIONES',
      '',
      'Output: habla el idioma de tu ICP específico',
      'Puede ir directamente al equipo de diseño',
      'Ciclos de revisión: 1–2',
      'Tiempo hasta output usable: 5–10 minutos + brief',
      'La diferencia se hace en menos de 2 minutos de trabajo extra',
    ],
    notes: `Ahora lo vemos en vivo. Voy a tomar un prompt real que me ha llegado de Chiefs of Growth — tal como lo escribieron — y lo voy a transformar en un brief de elite. Después comparo los dos outputs lado a lado.

Noten la diferencia en el output. No es sutil. Es una categoría completamente diferente.

El primer output podría ser de cualquier empresa del planeta. El segundo podría ir directamente al equipo de diseño.

Esa diferencia se hizo en menos de dos minutos de trabajo extra. Eso es el ROI del brief perfecto.`,
  });

  // 8. Big stat
  addBigStatSlide(pptx, {
    stat: '2 min',
    label: 'El tiempo extra que cuesta escribir un brief de elite',
    subtext: 'Menos tiempo que el que pierdes revisando un output mediocre. El brief no es overhead — es el atajo.',
    notes: `Tu entregable de esta clase es la Plantilla de Brief Universal para Growth. Cinco campos. Quince minutos para llenarla con tu primer caso de uso.

Cuando la uses, vas a notar algo: el tiempo que tardas en escribir el brief es menor que el tiempo que tardarías revisando un output mediocre.

El brief no es overhead. Es el atajo.`,
  });

  // 9. Title-content — La plantilla completa
  addTitleContentSlide(pptx, {
    title: 'Entregable: Plantilla de Brief Universal para Growth',
    bullets: [
      '## La estructura lista para copiar y llenar',
      'ROL: Actúa como [título del rol específico] con experiencia en [industria/contexto]. Especializado en [área específica].',
      'CONTEXTO: Producto + ICP + Situación actual + Lo que ya probé',
      'TAREA: [Un verbo de acción] + [qué exactamente] + [para quién o en qué contexto]',
      'FORMATO: Número de opciones + estructura de cada opción + extensión + forma de presentación',
      'RESTRICCIONES: No [X] / No [tono] / Sin [elemento de relleno] / Solo [scope acotado]',
      '## Protocolo de iteración (2 rondas)',
      'Ronda 1: brief completo. Evalúa el output.',
      'Ronda 2: instrucción específica — "mantén esto, reescribe esto con este criterio"',
      'Si en ronda 3 no funciona: el problema es el CONTEXTO — vuelve y enriquécelo',
      '## Tabla de diagnóstico incluida',
      'Síntoma en el output → Elemento faltante → Corrección en 10 segundos',
    ],
    notes: `Tu entregable de esta clase es la Plantilla de Brief Universal para Growth. Cinco campos. Quince minutos para llenarla con tu primer caso de uso.

Cuando la uses, vas a notar algo: el tiempo que tardas en escribir el brief es menor que el tiempo que tardarías revisando un output mediocre.

El brief no es overhead. Es el atajo.

Clase 3: cargamos todo el contexto de tu negocio en Claude de una vez. Desde ese momento, no vas a tener que poner el CONTEXTO en cada prompt porque Claude ya lo va a tener.`,
  });

  // 10. Closing
  addClosingSlide(pptx, {
    title: 'El brief perfecto:\ntu ventaja de producción',
    subtitle: 'Entregable — Plantilla de Brief Universal lista para copiar',
    items: [
      'Descarga la Plantilla de Brief Universal (entregable de esta clase)',
      'Úsala con el caso de uso que identificaste en la Clase 1',
      'Usa el protocolo de 2 rondas de iteración',
      'Si el output no sirve en ronda 3: revisa el CONTEXTO',
      'Usa la Tabla de diagnóstico si el output tiene síntomas conocidos',
      'Clase 3: cargamos todo el contexto de tu negocio en Claude de una sola vez',
    ],
    label: 'PRÓXIMA CLASE →',
    notes: `Tu entregable de esta clase es la Plantilla de Brief Universal para Growth. Cinco campos. Quince minutos para llenarla con tu primer caso de uso.

Clase 3: cargamos todo el contexto de tu negocio en Claude de una vez. Desde ese momento, no vas a tener que poner el CONTEXTO en cada prompt porque Claude ya lo va a tener.

Nos vemos ahí.`,
  });

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-02/clase-02.pptx' });
  console.log('✓ clase-02.pptx generado');
}

// ─── CLASE 03 ─────────────────────────────────────────────────────────────────
async function buildClase03() {
  const pptx = newPptx();

  // 1. Cover
  addCoverSlide(pptx, {
    eyebrow: 'MÓDULO 01 · CLASE 03',
    title: 'Configura tu cerebro de Growth en Claude:\nICP, métricas y contexto',
    subtitle: 'Instructor B · 14 minutos · De asistente genérico a co-piloto estratégico',
    notes: `En las dos clases anteriores aprendiste qué hace Claude diferente y cómo construir un brief que produce outputs de elite.

Hoy hacemos algo diferente: eliminamos el 80% del trabajo que requiere ese brief.

El campo de CONTEXTO — el que más tardas en escribir — va a estar precargado en Claude desde hoy. Permanentemente. En cada conversación. Sin repetirlo nunca más.

Catorce minutos. Al final de esta clase, Claude trabaja como si te conociera de años.`,
  });

  // 2. Callout
  addCalloutSlide(pptx, {
    eyebrow: 'EL PUNTO DE INFLEXIÓN',
    quote: '"Claude sin contexto = asistente genérico. Claude con tu contexto = co-piloto estratégico que ya sabe quién eres, a quién le hablas y qué métricas importan."',
    attribution: '— Clase 03 · Módulo 01',
    notes: `El campo de CONTEXTO — el que más tardas en escribir — va a estar precargado en Claude desde hoy. Permanentemente. En cada conversación. Sin repetirlo nunca más.`,
  });

  // 3. Two-column — antes vs después del contexto
  addBeforeAfterSlide(pptx, {
    title: 'Con contexto vs. Sin contexto: lo que cambia en cada output',
    before: [
      'Cada prompt tiene que incluir producto + ICP + etapa + métricas',
      'Claude hace supuestos genéricos que no aplican a tu negocio',
      'El output habla de cualquier empresa, no de la tuya',
      'Tiempo de setup por prompt: 5–10 minutos de contexto manual',
      'Error frecuente: Claude propone lo que ya probaste y no funcionó',
    ],
    after: [
      'El contexto está cargado — nunca más lo repites',
      'Claude conoce tu ICP, tus métricas y tu tono antes de que hables',
      'El output habla de TU negocio, TU cliente, TU etapa',
      'Tiempo de setup por prompt: 0 minutos — ya está',
      'Claude sabe qué ya probaste y qué no recomendar',
    ],
    notes: `Cuando cargas un documento de contexto en Claude Projects, Claude lo tiene disponible en cada conversación. No tienes que repetirlo. No tienes que recordarlo. Solo trabajas.`,
  });

  // 4. Four blocks — content slide
  addTitleContentSlide(pptx, {
    title: 'El documento de contexto de Growth: 4 bloques que lo cambian todo',
    bullets: [
      '## BLOQUE 1 — ICP: tu cliente ideal con la precisión que necesita Claude',
      'Quién es (cargo exacto, tamaño, sector, herramientas), Qué le duele (en sus palabras, no las tuyas), Qué considera éxito (métrica o resultado el viernes), Por qué no resolvió esto todavía (objeción real)',
      '## BLOQUE 2 — Propuesta de valor única',
      'Lo que haces que ningún competidor hace igual + Resultado cuantificable más fuerte + Palabras exactas que han usado clientes reales + Lo que NO eres',
      '## BLOQUE 3 — Métricas norte',
      'Adquisición (CAC, CPL, conversión a trial) + Retención (churn, NPS, DAU/MAU) + Revenue (MRR, ARR, LTV) + Benchmarks actuales aunque sean malos',
      '## BLOQUE 4 — Tono de marca',
      'Cómo SÍ suenas (3 adjetivos + ejemplo real) + Cómo NO suenas (3 cosas a evitar) + Referencia de estilo + Vocabulario prohibido',
    ],
    notes: `Claude Projects tiene una función que muy pocos usan bien: las instrucciones de sistema y la base de conocimiento del proyecto.

El documento de contexto de Growth tiene cuatro bloques. Te explico cada uno.

Bloque 1 — ICP: El error más común: escribir el ICP como si fuera para una presentación interna. "Empresas medianas del sector tecnológico que buscan optimizar sus procesos." Eso no sirve. Claude necesita el ICP de la misma forma en que lo necesita un redactor de copy senior antes de escribir su primer headline.

Bloque 2 — Propuesta de valor única: No tu USP de la landing page. La diferencia específica que hace que un cliente que probó tres competidores se quede contigo.

Bloque 3 — Métricas norte: Claude necesita saber qué cuenta para ti. Sin eso, optimiza para lo que está en internet — que rara vez coincide con lo que importa en tu etapa específica.

Bloque 4 — Tono de marca: Con el tono cargado, Claude no va a escribirte headlines de startup genérica cuando tu marca habla con la voz de un practitioner con años de experiencia.`,
  });

  // 5. Three column — ICP deep dive
  addThreeColumnSlide(pptx, {
    title: 'Bloque 1: El ICP que realmente necesita Claude',
    cols: [
      {
        header: 'ICP VAGO (no sirve)',
        items: [
          '"Empresas medianas del sector tecnológico"',
          '"Buscan optimizar sus procesos"',
          '"Perfil tomador de decisión"',
          '"Valoran la eficiencia"',
          'Aplica a 10.000 empresas simultáneamente',
        ],
      },
      {
        header: 'ICP PARA CLAUDE (sirve)',
        items: [
          'Cargo: Head of Sales en SaaS B2B 50-200 empleados',
          '"Mis reportes semanales me consumen 4 horas que no tengo"',
          'Éxito: "Reduje el reporte de 4h a 20min — le muestro a mi VP el viernes"',
          'Herramientas actuales: Salesforce + Excel + Notion',
          'No resolvió: cree que necesita IT para cualquier herramienta nueva',
        ],
      },
      {
        header: 'QUÉ CAMBIA EN EL OUTPUT',
        items: [
          'Copy usa las palabras que tu cliente usa para su dolor',
          'Los ángulos de mensaje resuenan con su realidad',
          'Las secuencias de email hablan de su momento de vida',
          'Las objeciones en el copy son las reales, no las diplomáticas',
          'Claude no propone mensajes que tu ICP no reconocería como suyos',
        ],
      },
    ],
    notes: `El error más común: escribir el ICP como si fuera para una presentación interna. "Empresas medianas del sector tecnológico que buscan optimizar sus procesos." Eso no sirve.

El ICP para Claude tiene cuatro dimensiones: Quién es (cargo exacto, tamaño de empresa, sector, herramientas que usa hoy), Qué le duele (el problema específico que lo quita del sueño — con las palabras que él usaría, no las que usas tú), Qué considera éxito (la métrica o el resultado concreto que le diría a su jefe el viernes), Por qué no ha resuelto esto todavía (la objeción real, no la diplomática).

Con ese ICP cargado, cada copy que genera Claude habla el idioma de tu cliente. Sin que tengas que explicarlo en cada prompt.`,
  });

  // 6. Two-column — System instructions
  addTwoColumnSlide(pptx, {
    title: 'Instrucciones de sistema: la configuración que lo cambia todo',
    leftTitle: 'INSTRUCCIONES DE SISTEMA',
    leftItems: [
      'Definen CÓMO debe comportarse Claude',
      'Aplican en CADA respuesta, siempre',
      'Viven en "Project Instructions"',
      'Cambian poco — cuando cambia tu forma de operar',
      'Las 3 instrucciones clave:',
      '1. Tu rol y el rol de Claude en este Project',
      '2. Cómo quieres que responda (directamente, sin intro, pregunta si necesita contexto)',
      '3. Restricciones permanentes (nunca disclaimers, nunca "A/B test" genérico, nunca adjetivos de catálogo)',
    ],
    rightTitle: 'DOCUMENTO DE CONTEXTO',
    rightItems: [
      'Define QUÉ sabe Claude sobre tu negocio',
      'Se activa cuando la tarea lo requiere',
      'Vive en Knowledge / archivos del Project',
      'Se actualiza regularmente (trimestral mínimo)',
      'Los 4 bloques de contenido:',
      '1. ICP con las 4 dimensiones',
      '2. Propuesta de valor con números y citas reales',
      '3. Métricas norte con benchmarks actuales',
      '4. Tono de marca con ejemplos y vocabulario prohibido',
    ],
    notes: `Las instrucciones de sistema son el texto que Claude lee antes de cada conversación. Viven en el campo "Project Instructions" dentro de tu Project.

No son un documento de bienvenida. Son el briefing operativo de tu co-piloto.

Hay tres cosas que siempre van en las instrucciones de sistema — y que son distintas del documento de contexto.

Instrucción 1 — Tu rol y el rol de Claude: Le dices quién eres tú y qué se supone que hace Claude en este Project.

Instrucción 2 — Cómo quieres que responda: No das por sentado que Claude sabe cómo operas. Se lo dices explícitamente.

Instrucción 3 — Las restricciones permanentes: Las cosas que nunca quieres en ningún output de este Project.

Estas tres instrucciones toman 15 minutos en escribir. Y eliminan el 80% del ruido en cada respuesta de Claude para siempre.`,
  });

  // 7. Big stat
  addBigStatSlide(pptx, {
    stat: '80%',
    label: 'Del ruido en cada respuesta de Claude que eliminan las instrucciones de sistema',
    subtext: '15 minutos de configuración. Una sola vez. Funciona en cada conversación para siempre.',
    notes: `Estas tres instrucciones toman 15 minutos en escribir. Y eliminan el 80% del ruido en cada respuesta de Claude para siempre.`,
  });

  // 8. Steps — Demo load context
  addStepsSlide(pptx, {
    title: 'Demo: Cargar el contexto completo en 10 minutos',
    steps: [
      { num: 1, heading: 'Abre tu Project en Claude', text: 'Ve al Project que creaste en la Clase 1. Navega a "Project Instructions" (arriba a la derecha).' },
      { num: 2, heading: 'Pega las instrucciones de sistema', text: 'Usa la plantilla del entregable: tu rol + cómo responder + restricciones permanentes. 3 bloques, 15 líneas máximo.' },
      { num: 3, heading: 'Crea el documento de contexto', text: 'Llena los 4 bloques en el template: ICP + propuesta de valor + métricas norte + tono de marca. Guarda como contexto-growth.md.' },
      { num: 4, heading: 'Sube el documento al Project', text: 'En la sección Knowledge o Files del Project, sube el archivo contexto-growth.md. Claude lo tendrá disponible en cada conversación.' },
      { num: 5, heading: 'Haz la prueba de alineación', text: '¿Qué entiendes sobre mi negocio, mi ICP y mis métricas basándote en el contexto que tienes? Dame un resumen en tabla. Evalúa contra el checklist del entregable.' },
    ],
    notes: `Ahora lo hacemos en vivo. Voy a construir el documento de contexto de Growth completo y cargarlo en Claude. Y al final, voy a hacer una sola pregunta para probar si funciona.

Lo que acabo de hacer es la versión mínima viable. No tiene que ser perfecta para que funcione. Tiene que ser específica.

¿Ven la diferencia? Claude no me preguntó quién es mi cliente. No asumió que soy una empresa grande o pequeña. No me propuso lo genérico.

Habló de mi ICP, usó mis métricas, y habló en mi tono. Eso es lo que cambia cuando cargas el contexto.`,
  });

  // 9. Title-content — Entregable
  addTitleContentSlide(pptx, {
    title: 'Entregable: Plantilla de Contexto de Growth (4 bloques)',
    bullets: [
      '## BLOQUE 1: ICP',
      'Cargo exacto + industria + tamaño + herramientas + momento de compra + dolor en sus palabras + definición de éxito + objeción real',
      '## BLOQUE 2: Propuesta de Valor',
      'Qué hacemos (formulación exacta) + diferencia específica vs. competidores + resultado más fuerte documentado + frases de clientes reales + lo que NO somos',
      '## BLOQUE 3: Métricas Norte',
      'Etapa del negocio + foco 90 días + métricas de adquisición/retención/revenue con valores actuales y benchmarks + lo que NO optimizamos ahora',
      '## BLOQUE 4: Tono de Marca',
      'Cómo SÍ suenas (3 adjetivos + ejemplo real) + cómo NO suenas + referencia de estilo + vocabulario prohibido',
      '## PLUS: Plantilla de Instrucciones de Sistema',
      'Lista para pegar en Project Instructions — 3 bloques: rol de Claude, cómo responder, restricciones permanentes',
      '## Tiempo estimado: 30 minutos',
      'Vale cada minuto. Al terminar, el campo CONTEXTO de tu brief se llena automáticamente en cada conversación.',
    ],
    notes: `Tu entregable de esta clase es la Plantilla de Contexto de Growth para Claude. Cuatro bloques. Llénala hoy — en 30 minutos si lo haces con foco.

Una vez que la cargues en tu Project, el brief que aprendiste en la Clase 2 se vuelve el 40% más rápido de escribir. Porque el CONTEXTO ya está.

A partir de aquí, el Módulo 01 está completo. Tienes Claude configurado. Sabes cómo hablarle. Sabes qué cargarle.

El Módulo 02 es donde empieza la ejecución real: Copy, campañas, análisis y experimentos. Todo con Claude ya configurado para tu negocio.`,
  });

  // 10. Closing
  addClosingSlide(pptx, {
    title: 'Módulo 01 completo.\nTu Growth OS está encendido.',
    subtitle: 'Lo que construiste en estas 3 clases',
    items: [
      'Claude Pro con Project de Growth configurado',
      'Instrucciones de sistema: Claude sabe cómo trabajar contigo',
      'Contexto cargado: ICP, propuesta de valor, métricas y tono',
      'Brief de elite: la estructura de 5 elementos dominada',
      'Primer output de Growth real generado y evaluado',
      'Protocolo de iteración de 2 rondas aplicado',
      'Módulo 02: Copy, campañas, análisis y experimentos — Claude ya listo',
    ],
    label: 'MÓDULO 02 →',
    notes: `Tu entregable de esta clase es la Plantilla de Contexto de Growth para Claude. Cuatro bloques. Llénala hoy — en 30 minutos si lo haces con foco.

Una vez que la cargues en tu Project, el brief que aprendiste en la Clase 2 se vuelve el 40% más rápido de escribir. Porque el CONTEXTO ya está.

A partir de aquí, el Módulo 01 está completo. Tienes Claude configurado. Sabes cómo hablarle. Sabes qué cargarle.

El Módulo 02 es donde empieza la ejecución real: Copy, campañas, análisis y experimentos. Todo con Claude ya configurado para tu negocio.

Nos vemos ahí.`,
  });

  await pptx.writeFile({ fileName: '/Users/mariacristinabarbosa/Claude-Course-AI-Growth/clases/clase-03/clase-03.pptx' });
  console.log('✓ clase-03.pptx generado');
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
(async () => {
  try {
    await buildClase01();
    await buildClase02();
    await buildClase03();
    console.log('\nTodos los archivos .pptx generados correctamente.');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
