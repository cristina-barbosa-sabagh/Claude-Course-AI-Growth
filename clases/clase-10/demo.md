# DEMO PASO A PASO — Construir un Skill de Growth desde cero y mejorarlo

---

## Paso 1 — Abre Claude y crea una nueva conversación en tu Project de Growth

- Abre claude.ai en el navegador
- Haz clic en tu Project "Growth OS" (o el nombre que tengas)
- Abre una conversación nueva dentro del Project

**Deberías ver esto en pantalla:** interfaz de chat de Claude con el nombre de tu Project en la parte superior izquierda. La conversación está en blanco.

---

## Paso 2 — Usa el meta-prompt para convertir tu prompt en un Skill documentado

Pega exactamente esto en Claude:

```
Ayúdame a convertir este prompt que uso frecuentemente en un Skill reutilizable y documentado.

El prompt es:
"Actúa como estratega de Growth. Genera 5 hipótesis de experimentos para mejorar la tasa de activación de usuarios en los primeros 7 días. Área del funnel: activación. Métrica actual: 38%. Objetivo: 55% en 60 días. Contexto: SaaS de gestión de proyectos para agencias. Restricciones: sin cambios de desarrollo."

Crea para este prompt:
1. Nombre del Skill (accionable, específico)
2. Descripción en 1 línea — cuándo usarlo
3. Inputs requeridos (los campos que cambian cada vez)
4. Prompt template con variables en formato [VARIABLE]
5. Ejemplo de output esperado (basado en el prompt original)
6. Criterios de calidad: cómo sé que el output fue bueno
```

**Deberías ver esto en pantalla:** Claude responde con una estructura completa — nombre del Skill, descripción de cuándo usarlo, lista de inputs con sus descripciones, el prompt template con variables en corchetes como [ÁREA_FUNNEL] y [MÉTRICA_ACTUAL], un ejemplo de output y los criterios de calidad.

---

## Paso 3 — Ejecuta el Skill con datos reales para generar tu output de referencia

Abre una nueva conversación en el mismo Project. Pega esto (ya con valores reales):

```
Actúa como estratega de Growth con experiencia en SaaS B2B.

Genera hipótesis de experimentos para la siguiente situación:

Área del funnel: activación
Métrica actual: 38% de usuarios completan el onboarding en los primeros 7 días
Objetivo: llegar al 55% en 60 días
Contexto del producto: SaaS de gestión de proyectos para agencias creativas — ticket promedio $149/mes, usuarios principales son project managers y directores creativos
Restricciones: sin cambios de desarrollo este sprint — solo copy, email y configuración del onboarding existente

Para cada hipótesis:
1. Hipótesis en formato "Si [acción], entonces [resultado] porque [razón]"
2. Variable exacta a testear
3. Criterio de éxito medible con número concreto
4. Esfuerzo de implementación: Bajo / Medio / Alto
5. Impacto potencial estimado: Bajo / Medio / Alto

Genera 5 hipótesis ordenadas de mayor a menor relación Impacto/Esfuerzo.
Sé específico. Usa el contexto del producto para que las hipótesis sean ejecutables esta semana.
```

**Deberías ver esto en pantalla:** 5 hipótesis numeradas, cada una con la hipótesis en el formato "Si... entonces... porque...", la variable a testear (ej: "envío de email con video a las 2h de registro"), un criterio de éxito con número (ej: "activación a 7 días ≥ 45%"), y los niveles de esfuerzo e impacto. Las hipótesis son específicas para agencias creativas, no genéricas.

---

## Paso 4 — Abre Notion y crea tu tabla de Skills

- Abre Notion
- Crea una nueva página llamada: `[Tu empresa] — Biblioteca de Skills de Growth`
- Dentro de esa página, crea una tabla (Database — Full page)
- Añade estas columnas: Nombre (título, ya existe), Cuándo usar (texto), Prompt (texto), Output de referencia (texto), Versión (número), Última iteración (fecha)

**Deberías ver esto en pantalla:** tabla de Notion vacía con 6 columnas visibles. El cursor está en la primera fila lista para escribir.

---

## Paso 5 — Crea la primera entrada del Skill en Notion

Haz clic en "+ Nueva entrada" y rellena cada campo:

- **Nombre:** `Generador de Hipótesis de Experimentos — v1.0`
- **Cuándo usar:** `Antes de priorizar el backlog de experimentos de cualquier sprint. Input mínimo: área del funnel + métrica actual con número + objetivo con plazo.`
- **Prompt:** pega el prompt template con variables en corchetes (el que Claude generó en el Paso 2, no el del caso específico)
- **Output de referencia:** pega el output completo del Paso 3
- **Versión:** `1`
- **Última iteración:** selecciona la fecha de hoy

**Deberías ver esto en pantalla:** entrada guardada en Notion con todos los campos completos. La fila del Skill aparece en la tabla con el nombre en azul (link a la página de detalle).

---

## Paso 6 — Construye el Skill de Copy para Meta Ads

Vuelve a Claude, abre nueva conversación en el Project. Pega esto:

```
Actúa como copywriter especializado en Meta Ads para productos SaaS.

Brief de campaña:
- Producto: herramienta de gestión de proyectos para agencias creativas
- ICP: directores creativos y project managers en agencias de 10-50 personas
- Dolor principal: pierden horas cada semana en actualizaciones de estado y reuniones que podrían evitarse
- Objetivo: registro para prueba gratuita de 14 días
- Tono: directo, orientado al tiempo que ahorra, sin jerga técnica
- Restricción: no mencionar precio en el anuncio

Genera para Meta Ads:
3 variaciones de anuncio, cada una con un ángulo diferente:
- Variación A: ángulo de tiempo/eficiencia
- Variación B: ángulo de frustración/dolor
- Variación C: ángulo social/equipo

Para cada variación:
- Headline principal (máx 40 caracteres)
- Texto del anuncio (máx 125 caracteres para versión mobile)
- CTA (máx 4 palabras)

Formato: tabla con las 3 variaciones para comparar en un vistazo.
```

**Deberías ver esto en pantalla:** tabla de 3 filas × 4 columnas con las variaciones A, B y C. Cada fila tiene headline, texto del anuncio y CTA. Los headlines respetan el límite de caracteres. Los ángulos son visiblemente diferentes entre sí.

---

## Paso 7 — Documenta el Skill de Copy en Notion

Vuelve a Notion, crea una segunda entrada en la misma tabla:

- **Nombre:** `Generador de Copy Meta Ads — Adquisición SaaS`
- **Cuándo usar:** `Antes de lanzar o testear una campaña nueva en Meta Ads. Input mínimo: producto, ICP con dolor específico, objetivo de conversión y tono.`
- **Prompt:** pega el prompt template del Paso 6 (con los campos en corchetes para variables)
- **Output de referencia:** pega la tabla de copies del output
- **Versión:** `1`
- **Última iteración:** fecha de hoy

**Deberías ver esto en pantalla:** tabla de Notion con dos entradas — el Skill de Hipótesis y el Skill de Copy Meta.

---

## Paso 8 — Ejecuta el loop de mejora sobre el Skill de Copy

Vuelve a Claude, nueva conversación. Pega esto:

```
Este es el output que generó mi Skill de Copy Meta para una campaña de adquisición de una herramienta SaaS de gestión de proyectos:

[OUTPUT]
Variación A — Ángulo tiempo:
Headline: "2 horas menos de reuniones. Por semana."
Texto: "Tus proyectos en un vistazo. Tu equipo siempre alineado. Sin más updates manuales."
CTA: "Pruébalo gratis"

Variación B — Ángulo dolor:
Headline: "¿Cuántas reuniones de estado más?"
Texto: "El caos de proyectos no escala. Tu herramienta de gestión sí debería."
CTA: "Empieza gratis"

Variación C — Ángulo equipo:
Headline: "Tu equipo en la misma página. Siempre."
Texto: "Sin emails. Sin sorpresas. Sin excusas de 'no lo vi'. Pruébalo 14 días."
CTA: "Invita a tu equipo"
[FIN OUTPUT]

¿Qué mejorarías en el prompt template para que el output sea 30% más específico y accionable?
Dime exactamente qué línea del prompt cambiarías y por qué.
```

**Deberías ver esto en pantalla:** Claude señala 2-3 líneas concretas del prompt original que eran vagas (ej: "tono: directo" es demasiado genérico, debería ser "tono: una afirmación de beneficio específico por línea, sin adjetivos como 'potente' o 'increíble'") y propone el texto exacto para reemplazar cada línea.

---

## Paso 9 — Actualiza el Skill en Notion con las mejoras

Vuelve a Notion, abre la entrada del Skill de Copy Meta:

- Actualiza el campo **Prompt** con las mejoras que Claude sugirió
- Cambia **Versión** de 1 a 1.1 (o escribe 1.1 en texto si la columna es tipo texto)
- Actualiza **Última iteración** con la fecha de hoy

**Deberías ver esto en pantalla:** la entrada en Notion tiene el prompt actualizado y la versión es ahora 1.1. La tabla muestra dos entradas — una en v1.0 y otra en v1.1.

---

## Paso 10 — Verifica que el sistema funciona

Vuelve a Claude, nueva conversación. Usa el prompt actualizado (versión 1.1) con el mismo caso del Paso 6.

**Deberías ver esto en pantalla:** los copies de la versión 1.1 son más específicos — los headlines tienen beneficios más concretos, los textos tienen menos frases genéricas. La mejora es visible sin necesidad de un análisis detallado.

**Sabrás que el sistema funciona cuando:** tienes 2 Skills documentados en Notion, uno de ellos en versión 1.1, y puedes explicar en una línea por qué la v1.1 produce mejor que la v1.0.
