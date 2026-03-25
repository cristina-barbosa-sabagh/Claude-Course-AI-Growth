# DEMO PASO A PASO — Claude para Growth: adquisición, retención y upsell en tiempo real

---

**Paso 1 — Abre claude.ai con una conversación nueva**

- Ve a claude.ai en tu navegador
- Haz clic en "New chat" (parte superior izquierda)
- No uses ningún Project todavía — conversación libre
- Deberías ver esto en pantalla: campo de texto vacío, sin historial, sin instrucciones cargadas

---

**Paso 2 — Pega el prompt de adquisición (copy para Meta)**

- Copia este prompt completo y pégalo en el chat:

```
Actúa como un Growth Marketer especializado en adquisición B2B SaaS con experiencia en Meta Ads y ciclos de venta cortos.

Producto: Dataflow, una herramienta que ayuda a Sales Managers a eliminar el reporte semanal manual. Se conecta a Salesforce y genera el reporte del equipo en 20 minutos. Sin IT, sin código.

ICP: Sales Managers en empresas de 50–200 empleados, equipo de 5–15 reps, que usan Salesforce y pasan entre 3 y 4 horas cada viernes consolidando datos en hojas de cálculo.

Genera 5 variaciones de copy para anuncio de Meta Ads.
Objetivo: clicks a página de prueba gratuita de 14 días.

Formato por variación:
- Headline (máximo 6 palabras)
- Texto principal (máximo 3 líneas)
- CTA (máximo 4 palabras)

Restricciones: sin jerga técnica, sin la palabra "automatización", sin exclamaciones.
```

- Presiona Enter y espera el output completo

Deberías ver esto en pantalla: 5 bloques numerados, cada uno con headline, texto y CTA. Diferentes ángulos: tiempo perdido, datos inconsistentes, identidad del manager moderno.

---

**Paso 3 — Itera sobre una variación sin salir del chat**

- En la misma conversación, pega este segundo prompt:

```
El headline de la variación 3 es demasiado largo. Reescríbelo en máximo 4 palabras manteniendo el mismo ángulo. Dame 3 opciones.
```

- Presiona Enter

Deberías ver esto en pantalla: 3 opciones de headline, todas en 4 palabras o menos, todas con el mismo ángulo que el original.

---

**Paso 4 — Abre una conversación nueva para el caso de retención**

- Haz clic en "New chat"
- Copia y pega este prompt:

```
Actúa como un especialista en lifecycle marketing para SaaS B2B.

Contexto:
- Producto: Dataflow (herramienta de reporting automatizado para equipos de ventas)
- ICP: Sales Managers que se registraron a la prueba gratuita de 14 días
- Problema: el 39% de los usuarios que se registran no completa la conexión a Salesforce en las primeras 48 horas. Esos usuarios casi nunca convierten a pago.
- El evento de activación que predice conversión: generar el primer reporte automático dentro de las 72h de signup.

Tarea: escribe una secuencia de 3 emails para usuarios que se registraron pero NO conectaron Salesforce en las primeras 24 horas.

Formato por email:
- Subject line
- Preview text (máximo 90 caracteres)
- Cuerpo del email (máximo 120 palabras)
- CTA principal

Restricciones:
- Tono directo, sin condescendencia
- Sin exclamaciones
- El email 1 va a las 24h, el 2 a las 48h, el 3 al día 5
- No mencionar a competidores
- Sin la frase "espero que esto te ayude" ni variantes
```

- Presiona Enter

Deberías ver esto en pantalla: 3 emails completos con subject, preview text, cuerpo y CTA. El email del día 5 debería mencionar el viernes o el momento de reporte — señal de que Claude entendió el dolor del ICP.

---

**Paso 5 — Evalúa si los emails están listos para producción**

- Lee el subject del email 1: ¿evita las palabras genéricas tipo "Recordatorio" o "Hola"?
- Lee el cuerpo del email 2: ¿habla del problema específico (conexión a Salesforce, 48 horas) o es genérico?
- Si algo no encaja, escribe en el mismo chat:

```
El email 2 suena demasiado genérico. Reescribe el cuerpo mencionando específicamente el viernes y el reporte manual. Máximo 100 palabras.
```

Deberías ver esto en pantalla: cuerpo del email 2 reescrito con referencia explícita al dolor del ICP.

---

**Paso 6 — Abre una tercera conversación para el análisis de upsell**

- Haz clic en "New chat"
- Pega este prompt:

```
Actúa como un Growth Analyst especializado en revenue expansion para SaaS B2B.

Contexto:
- Producto: Dataflow (reporting automatizado para equipos de ventas)
- Plan actual de los usuarios: Starter (1 usuario, 1 Salesforce connection, máximo 10 reps)
- Plan de expansión: Pro (5 usuarios, 3 connections, reps ilimitados, $149/mes vs $49/mes actual)
- Señales de comportamiento que ya tenemos: login diario, generación de más de 3 reportes por semana, invitación a un segundo usuario aunque el plan no lo permite formalmente

Tarea: define los 3 criterios de comportamiento que deben cumplirse simultáneamente para activar el trigger de upsell, y para cada criterio explica por qué predice intención de expansión.

Luego: propón el mensaje exacto del in-app notification que se envía cuando se cumplen los 3 criterios.

Formato:
- Criterios: tabla con columna "Criterio", "Señal técnica medible", "Por qué predice upsell"
- Mensaje: Subject + Cuerpo (máximo 2 líneas) + CTA

Restricciones: sin recomendaciones de A/B testing genérico, sin frases de catálogo como "desbloquea tu potencial"
```

- Presiona Enter

Deberías ver esto en pantalla: tabla con 3 criterios definidos con señales técnicas medibles, seguida del mensaje de in-app notification listo para copiar.

---

**Paso 7 — Verifica el tiempo total**

- Mira el reloj: los pasos 2 al 6 deben haberte tomado menos de 15 minutos en total
- Tienes en pantalla: 5 copies de Meta, 3 emails de onboarding y un sistema de trigger de upsell
- Todo esto sin ninguna configuración previa en Claude

Deberías ver esto en pantalla: 3 conversaciones en el sidebar de claude.ai, cada una con su output completo.

---

**Paso 8 — Adapta el prompt de adquisición a tu producto real**

- Abre una conversación nueva
- Toma el prompt del Paso 2 y reemplaza:
  - "Dataflow" por el nombre de tu producto
  - La descripción del producto por la tuya en 2 líneas
  - El ICP por el tuyo (cargo, tamaño de empresa, dolor específico)
- Mantén todo lo demás igual (formato, restricciones)
- Pega el prompt adaptado y presiona Enter

Deberías ver esto en pantalla: 5 variaciones de copy para tu producto real, con los mismos 3 ángulos diferenciados.

---

**Paso 9 — Guarda los outputs que usarías esta semana**

- De los copies de Meta: señala cuál usarías en una campaña real esta semana
- De los emails: ¿cuánto tiempo te hubiera tomado escribir esto desde cero?
- De la tabla de upsell: ¿tienes ya esas señales de comportamiento en tu stack?

Esas tres preguntas son el diagnóstico de cuánto tiempo te devuelve Claude en tu operación actual.

---

**Paso 10 — Cierra las 3 conversaciones y ve al entregable**

- En el sidebar de Claude, verás las 3 conversaciones de esta demo
- Haz clic en el entregable de la Clase 01 y completa los pasos
- Antes de la Clase 02: ten identificado tu caso de uso de mayor impacto inmediato
