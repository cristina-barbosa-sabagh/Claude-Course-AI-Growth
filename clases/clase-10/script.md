# Clase 10 — Skills de Growth de elite: prompts que se reutilizan y mejoran solos
**Instructor A · 16 minutos · Módulo 04**

---

## GUIÓN COMPLETO

---

### INTRO — [0:00–1:00]

*(Pantalla: slide con título de la clase. Instructor en cámara.)*

Bienvenido al Módulo 04. Este módulo es donde todo lo que aprendiste se convierte en sistema.

Y el primer componente de ese sistema son los skills.

Un skill es un prompt que ya probaste, que ya produce resultados, y que está guardado de forma que cualquier miembro de tu equipo —o tú dentro de seis meses— puede usarlo sin pensar.

No es una carpeta de "prompts que algún día voy a usar".
Es una librería de producción. Con nombre. Con instrucciones. Con ejemplos de output.

En los próximos 16 minutos te voy a dar los 15 skills más impactantes para un equipo de Growth.
Listos para copiar, personalizar y usar hoy.

Vamos.

---

### DESARROLLO 1 — De prompt a skill: cómo convertir lo que funciona en algo reutilizable [1:00–6:00]

*(Pantalla: slide "Prompt vs. Skill — La diferencia que multiplica")*

La mayoría de equipos que empiezan con Claude cae en la misma trampa:
encuentran un prompt que funciona bien, lo usan una vez, y la próxima vez tienen que reconstruirlo desde cero.

Eso no es un sistema. Eso es suerte que no escala.

Un skill tiene cuatro componentes. Cuatro, no más.

---

**Componente 1 — Nombre de acción**

No "Prompt para copies". Sino "Generador de copies para Meta — ICP SaaS B2B".
El nombre dice exactamente qué hace y para quién.
Cuando alguien del equipo lo busca, lo encuentra en 5 segundos.

---

**Componente 2 — Cuándo usarlo**

Una línea. Literalmente una línea.
"Usar cuando necesitas 3+ variaciones de copy para campañas pagas de adquisición."
No un manual. Una instrucción de cuándo activar este skill y cuándo no.

---

**Componente 3 — El prompt con variables**

El prompt en sí — pero con campos en corchetes donde cambia el contexto.
`[PRODUCTO]`, `[ICP]`, `[CANAL]`, `[OBJETIVO]`.
La persona que lo usa solo rellena los corchetes. No tiene que pensar en la estructura.

---

**Componente 4 — Ejemplo de output real**

Un output que realmente generaste. No uno inventado. No uno idealizado.
Uno real, del trabajo de tu equipo, que muestra qué nivel de calidad esperar.

*(Pausa.)*

Con esos cuatro componentes, un prompt se convierte en skill.
Y un skill bien documentado multiplica la capacidad de tu equipo sin contratar a nadie más.

---

*(Pantalla: slide "Estructura en Notion — Cómo se ve un skill bien documentado")*

En Notion, cada skill vive en una tabla con esas cuatro columnas.
Más dos extras: **Última iteración** (fecha) y **Versión actual** (número).

¿Por qué la versión? Porque los skills evolucionan.
La versión 1 de tu generador de hipótesis probablemente era genérica.
La versión 3, después de tres semanas de uso real, está ajustada a tu modelo de negocio, a tu tipo de métricas, a los sesgos que detectaste en los outputs.

Los skills no son estáticos. Son organismos vivos en tu operación de Growth.

---

**El sistema de mejora continua — cómo iterar sin tecnicismos**

No necesitas un sistema de evaluación complejo.
Necesitas una sola pregunta después de cada uso: **¿El output fue mejor o peor que la última vez?**

Si fue mejor: nada cambia.
Si fue peor: revisas qué contexto faltó y lo añades al prompt.
Si fue mucho mejor: guardas el prompt nuevo como la versión actual y archivas la anterior.

Eso es iteración. Sin formularios. Sin reuniones. Sin metodología.

Un Growth skill maduro — uno que llevas 3 meses usando y mejorando — produce outputs que no podrías replicar manualmente en el mismo tiempo ni con el mismo nivel de consistencia.

Eso es la ventaja compuesta del sistema.

---

### DESARROLLO 2 — Los 5 skills de mayor impacto: qué hacen y cómo adaptarlos [6:00–11:00]

*(Pantalla: slide "Los 5 skills de Growth de elite")*

Voy a presentarte los 5 skills que más impacto generan en una operación de Growth.
En el entregable los tienes completos, con el prompt, las variables y los ejemplos de output.
Aquí te explico la lógica detrás de cada uno.

---

**Skill 1 — Generador de hipótesis de experimentos**

Este skill es el punto de partida de cualquier proceso de experimentación serio.
El input es simple: área del funnel, métrica actual, objetivo.
El output: 5 hipótesis priorizadas por impacto potencial vs. esfuerzo de implementación, con la variable a testear, el criterio de éxito y el tamaño de muestra estimado.

¿Por qué es el más importante? Porque elimina el sesgo del HiPPO.
El Highest Paid Person's Opinion deja de ser la fuente de hipótesis.
Los datos y el razonamiento estructurado de Claude se convierten en la fuente.

---

**Skill 2 — Analizador de funnel**

Le das a Claude los números de tu funnel: visitas, registros, activación, conversión, retención a 30 días.
Claude identifica el cuello de botella principal, calcula el impacto en revenue de mejorar cada etapa en un 10%, y propone los tres experimentos de mayor ROI.

Lo que hace diferente a este skill es el cálculo de impacto.
No es "tienes un problema de activación". Es "si tu tasa de activación sube del 42% al 52%, tu MRR potencial aumenta en X dólares — ese es tu experimento prioritario".

Eso es lo que le presentas al board.

---

**Skill 3 — Creador de copies multicanal**

Un solo skill que genera copies para Meta, Google, email y LinkedIn desde el mismo brief.
El brief tiene 6 campos: producto, ICP, canal prioritario, objetivo de conversión, tono y restricciones.
El output es una tabla: canal, formato, copy, headline, CTA — lista para copiar al ad manager.

La ventaja de este skill no es la velocidad. Es la consistencia de mensaje entre canales.
El mismo ángulo, adaptado al formato y la intención de cada plataforma. Eso es lo que la mayoría de equipos pierde cuando trabaja en silos.

---

**Skill 4 — Revisor de métricas semanales**

Cada semana, antes de tu reunión de Growth, pegas las métricas clave en este skill.
Claude detecta las anomalías, calcula las variaciones respecto a la semana anterior y al baseline histórico, y genera tres preguntas que deberías estar respondiendo esta semana — no generando, respondiendo.

Este skill no es para análisis profundo. Es para no perderte lo obvio en el ruido de los datos.

---

**Skill 5 — Redactor de reportes para stakeholders**

El skill que más tiempo ahorra en absolute terms.
Input: métricas brutas del período, contexto de los experimentos activos, resultado de las iniciativas principales.
Output: reporte ejecutivo en formato de 1 página — estado actual, movimientos del período, hipótesis para el próximo, riesgos identificados.

Listo para enviar al CEO, al board o al equipo directivo. Sin edición de fondo, solo ajustes de estilo.

*(Pantalla: slide con los 5 skills resumidos)*

Cinco skills. Cinco áreas críticas de Growth. Cada uno resuelve un cuello de botella real.
En el entregable tienes los 15 — estos cinco más detallados, y diez más con el prompt listo.

---

### DEMO EN VIVO — Del brief al skill documentado en Notion: tiempo real [11:00–15:00]

*(Pantalla: pantalla completa — Notion abierto con tabla de skills en blanco)*

*(Instructor comparte pantalla)*

Voy a construir un skill completo en vivo. Desde el prompt hasta la entrada en Notion.
Cuatro minutos. Sin cortes.

---

**PASO 1 — El prompt base [1 min]**

*(Instructor abre Claude en una nueva conversación dentro del Project)*

**Lo que escribe el instructor:**

```
Actúa como estratega de Growth con experiencia en SaaS B2B.

Necesito que generes hipótesis de experimentos para la siguiente situación:

Área del funnel: [ÁREA — ej: activación]
Métrica actual: [MÉTRICA — ej: 38% de usuarios completan onboarding]
Objetivo: [OBJETIVO — ej: llegar al 55% en 60 días]
Contexto del producto: [CONTEXTO — ej: herramienta de project management para agencias]
Restricciones: [RESTRICCIONES — ej: sin cambios de producto este sprint]

Para cada hipótesis, dame:
1. La hipótesis en formato "Si [acción], entonces [resultado] porque [razón]"
2. Variable a testear
3. Criterio de éxito medible
4. Esfuerzo de implementación: bajo / medio / alto
5. Impacto potencial: bajo / medio / alto

Genera 5 hipótesis priorizadas de mayor a menor relación impacto/esfuerzo.
```

**Narración mientras construye:**
> "Fíjate en la estructura. Tengo un contexto claro, una tarea específica, y un formato de output definido. Los corchetes son las variables — lo único que cambia cada vez que uso este skill."

---

**PASO 2 — Rellenar con un caso real y ejecutar [1 min]**

*(Instructor rellena las variables con un caso concreto)*

```
Área del funnel: activación
Métrica actual: 38% de usuarios completan el onboarding en los primeros 7 días
Objetivo: llegar al 55% en 60 días
Contexto del producto: SaaS de gestión de proyectos para agencias creativas, ticket promedio $149/mes
Restricciones: sin cambios de desarrollo este sprint — solo cambios de contenido, email y flujo de onboarding existente
```

*(Envía. Silencio mientras llega el output.)*

**Narración cuando llega el output:**
> "Cinco hipótesis. Priorizadas. Con criterio de éxito medible. Esto es lo que normalmente tardaría una hora de reunión de equipo en producir.
> ¿El output es perfecto? No. Pero el 80% está listo para trabajar.
> Y eso es suficiente para empezar a experimentar esta semana."

---

**PASO 3 — Documentar en Notion en 90 segundos [1.5 min]**

*(Instructor cambia a Notion — tabla de skills abierta)*

*(Crea nueva entrada)*

- **Nombre:** Generador de Hipótesis de Experimentos — v1
- **Cuándo usar:** Antes de priorizar el backlog de experimentos del sprint. Input mínimo: área del funnel + métrica actual + objetivo.
- **Prompt:** *(pega el prompt con variables en corchetes)*
- **Output de referencia:** *(pega el output real que acaba de generar)*
- **Última iteración:** *(fecha de hoy)*
- **Versión:** 1.0

**Narración:**
> "Eso es todo. Un skill documentado en menos de dos minutos.
> La próxima vez que alguien del equipo necesite generar hipótesis — tú, un junior, alguien nuevo — abre esta entrada, rellena los corchetes, pega en Claude.
> No hay curva de aprendizaje. El sistema trabaja."

---

**PASO 4 — La regla de oro de la iteración [30 seg]**

*(Instructor mira a cámara)*

> "La semana que viene, cuando uses este skill y el output sea mejor de lo esperado, actualiza el prompt. Sube a versión 1.1.
> En tres meses, ese skill va a ser tuyo de verdad — ajustado a tu negocio, a tu vocabulario, a tus tipos de experimentos.
> Eso es lo que hace que un sistema de Growth con IA mejore solo."

---

### CIERRE — [15:00–16:00]

*(Instructor en cámara. Slide con entregable visible.)*

Tu entregable de esta clase es la biblioteca de 15 skills en Notion.

No es para leer y guardar. Es para usar esta semana.

Elige uno de los 15 skills, personaliza las variables con tu contexto real, ejecútalo y guarda el output como referencia. Eso es todo.

Un skill activo vale más que quince skills guardados.

Siguiente clase: construyes tu equipo de agentes — cuatro Claude Projects especializados que trabajan en paralelo y se coordinan sin que tú tengas que hacer de intermediario.

Nos vemos ahí.

---

## NOTAS DE PRODUCCIÓN

| Elemento | Detalle |
|---|---|
| Duración objetivo | 16 minutos exactos |
| Slides necesarios | 4: título, "Prompt vs. Skill", "Los 5 skills de elite", slide de cierre con entregable |
| Demo | Pantalla completa — Notion + Claude. Ver demo.md para pasos exactos |
| Ritmo | Denso en Desarrollo 1 y 2. Demo más pausado — dar tiempo para que el estudiante absorba cada paso |
| Tono | Práctico, sin teoría. Cada concepto tiene un ejemplo inmediato |
| Énfasis | Los cuatro componentes de un skill y la lógica de los 5 skills de mayor impacto |
| Preparación previa | Notion abierto con tabla de skills en blanco, Claude Project activo con contexto cargado |
