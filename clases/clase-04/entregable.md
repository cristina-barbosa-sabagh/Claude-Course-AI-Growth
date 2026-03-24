# Plantilla de Generación de Copies Multi-Canal
## Pega tus datos, obtén 5 variaciones por canal listas para subir

**Módulo 02 · Clase 04 · Claude para Growth**

---

Usa esta plantilla directamente en tu Project de Claude. Está dividida en tres bloques: contexto de negocio (rellenas una vez), datos de campaña (actualizas por ciclo de análisis) y los prompts de generación por canal.

Tiempo estimado por ciclo: **10–15 minutos**.
Output por ciclo: **análisis de campañas activas + 5 variaciones por canal seleccionado**.

---

## BLOQUE 1 — Contexto de negocio (rellena una sola vez)

Pega este bloque al inicio de tu conversación o cárgalo en las instrucciones de tu Project si aún no lo tienes ahí.

```
CONTEXTO DE NEGOCIO

Empresa: [nombre de tu empresa]
Producto/servicio: [qué hace, en 1 línea — sin jerga]
Propuesta de valor principal: [el beneficio más concreto y medible que ofreces]

ICP (cliente ideal):
- Perfil: [cargo, industria, tamaño de empresa]
- Dolor principal que resuelves: [el problema específico, no genérico]
- Objeción más común: [por qué no compran al principio]
- Lo que celebran cuando funciona: [el resultado que buscan]

Métricas que importan en adquisición:
- CPA objetivo: [número]
- ROAS objetivo (si aplica): [número]
- Canal con mejor desempeño histórico: [Meta / Google / Email / otro]

Tono de marca: [ej: directo y técnico / aspiracional y cercano / provocador]
Palabras o frases que NUNCA usamos: [lista]
```

---

## BLOQUE 2 — Datos de campaña (actualizas por ciclo)

Copia este bloque, rellena con los datos de tu período de análisis (últimos 7 o 14 días) y pégalo después del Bloque 1.

```
DATOS DE CAMPAÑAS ACTIVAS — PERÍODO: [fecha inicio] a [fecha fin]

CANAL: [Meta Ads / Google Ads / Email — usar uno por ciclo]

Campaña 1:
- Nombre: [nombre de campaña]
- Objetivo: [conversiones / clicks / alcance]
- Presupuesto diario: [número]
- CTR: [%]
- CPC / CPM: [número]
- Costo por resultado: [número]
- Copy del anuncio ganador:
  Headline: [texto]
  Texto principal: [texto]
  CTA: [texto]
- Copy del anuncio con peor performance:
  Headline: [texto]
  Texto principal: [texto]
  CTA: [texto]

Campaña 2 (si aplica):
[misma estructura]

Campaña 3 (si aplica):
[misma estructura]

Oferta activa esta semana (si hay): [ej: "prueba gratuita 14 días" / "demo personalizada" / sin oferta especial]
Restricciones de copy esta semana: [ej: "no mencionar precio" / "incluir nombre del cliente potencial" / ninguna]
```

> Por qué importa: Claude no puede analizar lo que no ve. Cuantos más datos reales pegues, más específico y accionable será el análisis. No necesitas todos los campos — pero CTR, copy del ganador y copy del perdedor son los mínimos.

---

## BLOQUE 3 — Prompts de generación por canal

Usa el prompt del canal que necesitas esta semana. Siempre después de pegar los Bloques 1 y 2.

---

### PROMPT A — Análisis previo a la generación (usar siempre primero)

```
Antes de generar copy nuevo, analiza los datos que te compartí y dime:

1. ¿Qué patrón tienen los anuncios con mejor CTR? (ángulo, estructura, punto de entrada del copy)
2. ¿Qué ángulo o hook está resonando más con mi audiencia según los datos?
3. ¿Por qué crees que el anuncio con peor performance no está funcionando? ¿Qué cambiarías primero?
4. ¿Cuál es el siguiente ángulo que recomendarías testear y por qué?

Sé específico. Usa los datos que te di. No me des respuestas genéricas sobre "probar diferentes ángulos".
```

---

### PROMPT B — Generación para Meta Ads

```
Con base en tu análisis y el contexto de mi negocio, genera 5 variaciones de anuncio para Meta Ads.

Requisitos:
- Objetivo de campaña: [conversiones / leads / clicks — especifica]
- Audiencia: [fría / retargeting — especifica]
- Cada variación debe tener un ángulo diferente (no solo cambiar palabras)

Formato exacto para cada variación:
---
VARIACIÓN [número]
Ángulo: [describe el ángulo en 1 línea — para que yo sepa qué estoy testeando]
Headline (máx. 40 caracteres): [texto]
Texto principal (máx. 125 caracteres para móvil):
[línea 1 — el hook]
[línea 2 — el desarrollo]
[línea 3 — el cierre o prueba social]
CTA (máx. 20 caracteres): [texto]
---

Reglas:
- El hook de cada variación debe ser diferente: pregunta, afirmación provocadora, dato, historia, objeción directa
- No uses frases genéricas como "descubre", "transforma", "potencia"
- El copy debe leerse como algo que un humano escribiría, no como publicidad corporativa
```

---

### PROMPT C — Generación para Google Search Ads

```
Con base en tu análisis, genera 5 variaciones de anuncio para Google Search.

Contexto de intención de búsqueda:
- Palabras clave principales que activan este anuncio: [lista]
- Etapa del funnel: [consideración / intención de compra alta]
- Competidores directos que también aparecen en esa búsqueda: [nombres si los tienes]

Formato exacto para cada variación:
---
VARIACIÓN [número]
Ángulo: [describe en 1 línea]
Título 1 (máx. 30 caracteres): [texto]
Título 2 (máx. 30 caracteres): [texto]
Título 3 (máx. 30 caracteres): [texto]
Descripción 1 (máx. 90 caracteres): [texto]
Descripción 2 (máx. 90 caracteres): [texto]
---

Reglas:
- Al menos un título por variación debe incluir una de las palabras clave principales
- Las descripciones deben terminar con una acción implícita o explícita
- No repitas el mismo beneficio en Título 1 y Descripción 1
- Diferencia: no copies la estructura de los titulares entre variaciones
```

---

### PROMPT D — Generación para Email de Adquisición (frío o nurture)

```
Con base en el análisis y mi ICP, genera 5 variaciones de email de adquisición.

Tipo de email: [frío / nurture de lead / reactivación de lead frío — especifica]
Herramienta de envío: [Mailchimp / Klaviyo / otro]
Longitud objetivo: [corto <150 palabras / medio 150–300 palabras]

Formato exacto para cada variación:
---
VARIACIÓN [número]
Ángulo: [describe en 1 línea]
Asunto (máx. 50 caracteres): [texto]
Preheader (máx. 90 caracteres): [texto]
Cuerpo:
[Párrafo 1 — apertura: el hook que conecta con el dolor o contexto del lector]
[Párrafo 2 — el puente: cómo tu producto/servicio resuelve ese dolor específico]
[Párrafo 3 — prueba o credibilidad: dato, resultado de cliente, o mecanismo concreto]
[CTA — 1 sola acción, con enlace en texto: "texto del link"]
---

Reglas:
- Cada asunto debe probarse con un ángulo diferente: curiosidad, utilidad, personalización, urgencia, pregunta
- El cuerpo no debe empezar nunca con el nombre de tu empresa
- El CTA debe ser una sola cosa — sin ofrecer dos opciones
```

---

### PROMPT E — Refinamiento de variación seleccionada

Una vez que Claude generó las 5 variaciones y elegiste la más prometedora, usa este prompt para afinarla antes de subir.

```
La variación [número] es la que más me convence. Quiero refinarla.

Problema específico:
[ej: "el headline es bueno pero el hook del cuerpo es genérico" / "el CTA es demasiado suave" / "el tono no suena como nosotros"]

Restricción adicional que no te di antes:
[ej: "no podemos mencionar 'gratis' en el copy" / "el cliente ya nos conoce — no empieces desde cero"]

Dame 3 versiones del elemento que necesito mejorar, manteniendo todo lo demás igual.
Explica brevemente qué cambió y por qué cada versión podría funcionar mejor.
```

---

## Tabla de seguimiento: qué testear esta semana

Usa esta tabla para registrar qué variaciones subes y con qué hipótesis.

| Canal | Variación | Ángulo | Hipótesis | Status |
|---|---|---|---|---|
| Meta | Var. 1 | [ángulo] | "Este hook va a tener mayor CTR porque..." | Por subir |
| Meta | Var. 2 | [ángulo] | [hipótesis] | Por subir |
| Google | Var. 1 | [ángulo] | [hipótesis] | Por subir |
| Email | Var. 1 | [ángulo] | [hipótesis] | Por subir |

> Por qué importa: Si no escribes la hipótesis antes de subir, no puedes aprender nada cuando el test termina. La hipótesis convierte el test en conocimiento acumulable.

---

## Ciclo de uso recomendado

**Lunes:** Pega datos de la semana anterior → Ejecuta Prompt A (análisis) → Actualiza tabla de seguimiento
**Martes:** Ejecuta Prompts B/C/D según canal prioritario → Sube variaciones nuevas
**Viernes:** Revisa resultados → Anota qué ángulo ganó → Lleva esa información al lunes siguiente

Este ciclo de una semana te da 4 iteraciones al mes. La mayoría de equipos hace 1.

---

**Siguiente clase:** Motor de retención — onboarding, reactivación y upsell con Claude.
Los usuarios que ya adquiriste necesitan un sistema para quedarse. Eso construimos en la Clase 05.
