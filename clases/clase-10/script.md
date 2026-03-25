# Skills de Growth de elite: prompts que se reutilizan y mejoran solos — GUIÓN EN PANTALLA
**Instructor A · 16 minutos · Módulo 04**

---

## 1. Abro Claude y construyo un Skill desde cero

Abro Claude en mi Project de Growth. Tengo una conversación en blanco frente a mí.

[ACCIÓN EN PANTALLA: abrir claude.ai, hacer clic en el Project "Growth OS", abrir nueva conversación]

Lo primero que voy a hacer es tomar un prompt que ya uso — el de generación de hipótesis — y convertirlo en un Skill documentado. Un Skill no es un prompt guardado en algún lugar. Es un prompt con nombre, con instrucciones de cuándo usarlo, con variables en corchetes y con un output real de referencia.

Pego este prompt directamente en Claude:

[ACCIÓN EN PANTALLA: pegar el siguiente prompt en el chat y enviarlo]

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

[ACCIÓN EN PANTALLA: esperar el output de Claude, hacer scroll para ver la respuesta completa]

Miren lo que devuelve Claude. Ya tiene el nombre: "Generador de Hipótesis de Experimentos — Growth". Tiene los inputs en corchetes. Tiene los criterios de calidad. En 30 segundos tengo la estructura de un Skill documentado.

---

## 2. Ejecuto el Skill con un caso real

Ahora voy a ejecutar ese mismo Skill con los datos reales de mi negocio para ver el output de referencia.

[ACCIÓN EN PANTALLA: abrir una nueva conversación en el mismo Project, pegar el prompt template con las variables ya rellenadas]

Pego el prompt template que me dio Claude, pero ahora con valores reales:

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

[ACCIÓN EN PANTALLA: enviar el prompt, esperar el output, hacer scroll mostrando las 5 hipótesis]

Cinco hipótesis. Priorizadas. Con criterios de éxito con número. Cada una ejecutable. Esto es lo que un Skill bien construido produce.

---

## 3. Documento el Skill en Notion

Abro Notion. Tengo una tabla con estas columnas: Nombre, Cuándo usar, Prompt, Output de referencia, Versión, Última iteración.

[ACCIÓN EN PANTALLA: cambiar de pestaña a Notion, abrir la tabla "Biblioteca de Skills de Growth", hacer clic en "+ Nueva entrada"]

Creo la entrada y relleno cada campo de forma visible:

**Nombre:** Generador de Hipótesis de Experimentos — v1.0

[ACCIÓN EN PANTALLA: escribir el nombre en el campo Nombre de la tabla]

**Cuándo usar:** Antes de priorizar el backlog de experimentos de cualquier sprint. Input mínimo: área del funnel + métrica actual con número + objetivo con plazo.

[ACCIÓN EN PANTALLA: escribir en el campo Cuándo usar]

**Prompt:** pego el template con variables en corchetes — no el prompt con los datos del caso específico. La plantilla reutilizable.

[ACCIÓN EN PANTALLA: pegar el prompt template en el campo Prompt]

**Output de referencia:** pego el output real que Claude acaba de generar.

[ACCIÓN EN PANTALLA: volver a la pestaña de Claude, copiar el output completo, volver a Notion y pegarlo en el campo Output de referencia]

**Versión:** 1.0
**Última iteración:** fecha de hoy

[ACCIÓN EN PANTALLA: rellenar los últimos dos campos, hacer clic fuera de la entrada para guardarla]

Listo. Un Skill documentado en menos de tres minutos.

---

## 4. Construyo el Skill de Copy para Meta — el más usado en adquisición

Ahora voy a construir el segundo Skill en vivo. Este es el de Copy de adquisición para Meta Ads.

[ACCIÓN EN PANTALLA: volver a Claude, nueva conversación]

Pego este prompt directamente:

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

[ACCIÓN EN PANTALLA: enviar el prompt, esperar el output, mostrar la tabla de 3 variaciones]

Ahí están las tres variaciones. La tabla está lista para copiar directo al Ads Manager.

Ahora documento este Skill en Notion exactamente igual que el anterior. Dos minutos.

[ACCIÓN EN PANTALLA: cambiar a Notion, crear nueva entrada, rellenar los campos con el nombre "Generador de Copy Meta Ads — SaaS B2C", cuándo usar, prompt y output de referencia]

---

## 5. El loop de mejora: hago que el Skill mejore solo

Esta es la parte que la mayoría de personas omite y es donde está el 80% del valor a largo plazo.

[ACCIÓN EN PANTALLA: volver a Claude, nueva conversación en el Project]

Pego este prompt:

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

[ACCIÓN EN PANTALLA: enviar el prompt, esperar la respuesta de Claude con las sugerencias de mejora]

Claude me dice qué mejorar en el prompt, no en el output. Esa es la diferencia. No me pule los copies — me dice qué instrucción del template estaba incompleta para que la próxima vez el output sea mejor por defecto.

Aplico las mejoras al prompt en Notion y subo la versión a 1.1.

[ACCIÓN EN PANTALLA: volver a Notion, abrir la entrada del Skill de Copy Meta, actualizar el prompt con las mejoras, cambiar Versión de 1.0 a 1.1, actualizar Última iteración]

---

## 6. El sistema que acabas de ver

En esta clase construí dos Skills desde cero, los documenté en Notion y ejecuté el loop de mejora en uno de ellos.

[ACCIÓN EN PANTALLA: mostrar la tabla de Notion con las dos entradas ya guardadas — Hipótesis de Experimentos v1.0 y Copy Meta Ads v1.1]

Lo que tienes ahora en tu entregable son 15 Skills listos para documentar. Mi recomendación: no intentes hacer los 15 en un día. Elige el más urgente para esta semana, ejecútalo con tu contexto real, guarda el output, y empieza a construir desde ahí.

Un Skill que usas vale más que quince que tienes guardados.

En la siguiente clase construyes tu equipo de agentes: tres Claude Projects especializados que trabajan en paralelo para el lanzamiento de un producto. Nos vemos ahí.

[ACCIÓN EN PANTALLA: cerrar pestaña de Claude, mostrar la tabla de Notion con los dos Skills documentados como imagen de cierre]
