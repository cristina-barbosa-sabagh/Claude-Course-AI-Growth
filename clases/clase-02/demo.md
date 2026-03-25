# DEMO PASO A PASO — El brief perfecto: del prompt vago al output de producción

---

**Paso 1 — Abre tu Project de Growth en claude.ai**

- Ve a claude.ai → haz clic en "Projects" en el sidebar → abre tu Project de Growth (creado en Clase 01)
- Haz clic en "New chat" dentro del Project
- Deberías ver esto en pantalla: campo de chat vacío, con el nombre de tu Project visible en la parte superior

---

**Paso 2 — Envía el prompt vago (el que nunca más vas a usar)**

- Copia y pega este prompt exactamente como está:

```
Dame ideas de copy para una campaña de Meta Ads de una empresa SaaS B2B.
```

- Presiona Enter y lee el output

Deberías ver esto en pantalla: 5 a 8 bullets con headlines o copies. Todos correctos gramaticalmente. Todos completamente genéricos — podrían ser de cualquier empresa SaaS del mundo. Ninguno menciona un dolor específico ni un ICP real.

---

**Paso 3 — Abre una segunda conversación en el mismo Project**

- Haz clic en "New chat" dentro del mismo Project (no abras un chat fuera del Project)
- Deberías ver esto en pantalla: mismo Project, nueva conversación, campo vacío

---

**Paso 4 — Envía el brief completo con los 5 elementos**

- Copia y pega este prompt completo:

```
ROL:
Actúa como un Growth Marketer B2B SaaS con experiencia en adquisición de usuarios mediante Meta Ads y ciclos de venta de menos de 30 días. Especializado en copy orientado a conversión directa, no a awareness.

CONTEXTO:
Producto: Dataflow ayuda a Sales Managers a eliminar el reporte semanal manual — el equipo registra actividad en Salesforce y Dataflow genera el reporte automáticamente en 20 minutos. Sin IT, sin código.
ICP: Sales Managers en empresas de 50–200 empleados, equipo de 5–15 reps, que usan Salesforce y pierden entre 3 y 4 horas cada viernes consolidando datos manualmente.
Situación actual: campaña de prueba gratuita de 14 días activa en Meta. CTR actual: 0.8%. Hipótesis: el copy no está articulando el dolor específico del ICP.
Lo que ya probé: headlines sobre "automatización de reportes" y "ahorra tiempo". No movieron el CTR en 3 semanas.

TAREA:
Genera 3 variaciones de copy para anuncio de Meta Ads.
Objetivo: click a página de prueba gratuita de 14 días.
Cada variación debe usar un ángulo diferente: uno apela al dolor del viernes perdido, uno al riesgo de datos inconsistentes, uno a la identidad del Sales Manager moderno.

FORMATO:
- 3 variaciones numeradas
- Cada variación: Headline (máx. 6 palabras) + Texto principal (máx. 3 líneas) + CTA (máx. 4 palabras)
- Debajo de cada variación: una línea con el ángulo psicológico que usa

RESTRICCIONES:
- Sin introducciones ni explicaciones antes del output
- No usar: automatización, innovador, potente, solución, plataforma
- Sin jerga técnica que un Sales Manager no diría en una reunión
- El texto debe sonar como si lo escribiera alguien que conoce la oficina del ICP
```

- Presiona Enter

Deberías ver esto en pantalla: 3 bloques numerados, cada uno con headline, texto principal, CTA y una línea de ángulo psicológico. El output comienza directamente con "1." sin introducción. Los headlines mencionan el viernes, los datos o la identidad del Sales Manager.

---

**Paso 5 — Compara los dos outputs lado a lado**

- Abre las dos conversaciones alternando con Alt+Tab (o ponlas en ventanas separadas si tu pantalla lo permite)
- Pregúntate: ¿cuántos de los copies del Paso 2 podrías subir a producción hoy?
- ¿Cuántos del Paso 4?

Deberías ver esto en pantalla: en la conversación del Paso 2, ceros copies listos para producción. En la del Paso 4, al menos 2 de 3 están listos o necesitan ediciones mínimas.

---

**Paso 6 — Itera sobre la variación 2 con una instrucción de refinamiento**

- En la conversación del Paso 4, escribe este prompt sin abrir una nueva conversación:

```
La variación 2 está bien pero el tono es demasiado formal para el ICP. El Sales Manager que tenemos en mente habla directo en reuniones, no escribe presentaciones. Reescribe el texto principal manteniendo el ángulo de datos inconsistentes pero con un tono más de colega que de consultor. Dame 2 opciones.
```

- Presiona Enter

Deberías ver esto en pantalla: 2 versiones del texto principal de la variación 2. Mismo ángulo, tono más directo. Claude no repitió el CONTEXTO porque lo tiene de la conversación anterior.

---

**Paso 7 — Ahora construye tu propio brief con los 5 elementos**

- Abre una conversación nueva en tu Project
- Copia esta plantilla y rellena los campos en MAYÚSCULAS:

```
ROL:
Actúa como un [TU ROL ESPECÍFICO: ej. Growth Marketer especializado en ecommerce de moda / especialista en lifecycle marketing para apps móviles] con experiencia en [TU CANAL O CONTEXTO].

CONTEXTO:
Producto: [TU PRODUCTO en 2 líneas — qué hace y para quién]
ICP: [CARGO EXACTO] en [TIPO DE EMPRESA] que actualmente [COMPORTAMIENTO ACTUAL] y tienen el problema de [DOLOR ESPECÍFICO].
Situación actual: [QUÉ ESTÁ PASANDO en tu funnel ahora — métricas, etapa, problema concreto]
Lo que ya probé: [QUÉ INTENTASTE antes que no funcionó]

TAREA:
[VERBO DE ACCIÓN: genera / reescribe / analiza / prioriza] [QUÉ EXACTAMENTE] para [CONTEXTO DE USO].

FORMATO:
- [NÚMERO] de opciones
- Cada opción incluye: [COMPONENTES]
- Extensión: [LÍMITE DE PALABRAS O LÍNEAS]

RESTRICCIONES:
- Sin [COSA QUE NO QUIERES]
- No usar: [PALABRAS A EVITAR]
- Tono: [DESCRIPCIÓN DEL TONO]
```

- Presiona Enter y evalúa el output

Deberías ver esto en pantalla: un output estructurado que respeta el formato que pediste, usa el tono que especificaste y no contiene las palabras que restringiste.

---

**Paso 8 — Diagnóstico: si el output no está bien, identifica qué elemento falla**

- Output demasiado genérico → le falta CONTEXTO: agrega más datos del ICP y situación actual
- Tono equivocado → le falta precisión en ROL o en RESTRICCIONES: especifica industria en ROL y agrega "Tono: [descripción]"
- Demasiado largo → le faltan RESTRICCIONES: agrega "Sin introducciones. Sin explicaciones previas. Directo al output."
- Variaciones todas iguales → la TAREA no especificó ángulos: agrega "Cada opción usa un ángulo diferente: [lista los ángulos]"
- Estructura incorrecta → le falta FORMATO: especifica cada campo y su extensión máxima

Corrige el elemento que falla y vuelve a enviar el prompt.

---

**Paso 9 — Guarda el brief que funcionó**

- Copia el brief completo que produjo el mejor output
- Guárdalo en un documento de texto con el nombre: `brief-[caso de uso]-[fecha].md`
- Este es tu primer template reutilizable. En la Clase 3 lo integramos en el sistema de contexto de tu Project.

---

**Paso 10 — Ve al entregable de la Clase 02**

- Tienes ahora la estructura de 5 elementos
- El entregable te pide aplicarla a tu caso de uso de mayor impacto con prompts completos y listos
- Tiempo estimado: 20 minutos
