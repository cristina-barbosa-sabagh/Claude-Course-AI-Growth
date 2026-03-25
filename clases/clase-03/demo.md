# DEMO PASO A PASO — Configura tu cerebro de Growth en Claude: ICP, métricas y contexto

---

**Paso 1 — Abre tu Project y ve a Project Instructions**

- Ve a claude.ai → sidebar izquierdo → "Projects" → abre tu Project de Growth
- Haz clic en el ícono de configuración del Project (arriba a la derecha, puede aparecer como engranaje o "Edit project")
- Busca el campo "Project Instructions"
- Deberías ver esto en pantalla: campo de texto vacío o con el texto mínimo de la Clase 01

---

**Paso 2 — Pega las instrucciones de sistema completas**

- Copia este template, reemplaza los campos en MAYÚSCULAS y pégalo en Project Instructions:

```
Eres el co-piloto de Growth de [NOMBRE DE TU EMPRESA].

Mi rol: [TU CARGO]. Mi foco en los próximos 90 días es [TU OBJETIVO PRINCIPAL EN 1 LÍNEA: ej. escalar adquisición — reducir CAC y subir conversión de trial a pago del X% al Y%].

Tienes acceso al documento de contexto de Growth de mi empresa en este Project. Úsalo como referencia activa en cada respuesta cuando sea relevante.

Cuando respondas:
- La primera línea es lo más importante. Ve directo al punto.
- Sin introducciones. Sin "Claro, aquí tienes:".
- Si no tienes suficiente contexto para dar una respuesta útil, pregunta antes de responder.
- Prioriza lo ejecutable esta semana sobre lo óptimo a largo plazo.
- Si ves un error en mi razonamiento o en mis datos, dímelo directamente.

Nunca:
- Incluyas disclaimers sobre limitaciones de IA
- Propongas "hacer A/B testing" sin especificar qué testear exactamente
- Uses: innovador, disruptivo, potente, robusto, solución integral, transformación
- Repitas el brief o la tarea antes de responder
- Termines con "espero que esto ayude" o variantes
```

- Haz clic en guardar
- Deberías ver esto en pantalla: el texto de instrucciones guardado y visible en el campo de Project Instructions

---

**Paso 3 — Prepara tu documento de contexto en un archivo de texto**

- Abre un editor de texto (Notion, Google Docs, TextEdit, lo que uses)
- Copia la plantilla del entregable de esta clase (los 4 bloques: ICP, Propuesta de Valor, Métricas Norte, Tono de Marca)
- Rellena los 4 bloques con la información de tu negocio
- Guarda el archivo como `contexto-growth-[tu-empresa].md`
- Deberías ver esto en pantalla: documento con 4 secciones completas, sin campos en blanco ni corchetes sin rellenar

---

**Paso 4 — Sube el documento de contexto al Project**

- Vuelve a la configuración del Project en claude.ai
- Busca la sección "Knowledge" o "Add content"
- Haz clic en "Upload file" o arrastra el archivo `contexto-growth-[tu-empresa].md`
- Espera a que se procese (puede tardar unos segundos)
- Deberías ver esto en pantalla: el nombre del archivo aparece en la lista de documentos del Project con un indicador de que fue procesado correctamente

---

**Paso 5 — Ejecuta la prueba de alineación**

- Haz clic en "New chat" dentro del Project
- Pega exactamente este prompt:

```
¿Qué entiendes sobre mi negocio, mi ICP y mis métricas norte basándote en el contexto que tienes? Dame un resumen en formato tabla con tres columnas: "Qué sé", "El detalle específico", "Por qué importa para Growth".
```

- Presiona Enter y espera el output completo

Deberías ver esto en pantalla: una tabla con al menos 6 filas. Cada fila menciona información específica de tu documento (cargo del ICP, dolor específico, métricas actuales, vocabulario prohibido). No hay información inventada que no estuviera en el documento.

---

**Paso 6 — Verifica la prueba contra esta lista**

Revisa el output del Paso 5:

- ¿Menciona el ICP con el cargo correcto y el dolor específico (no genérico)?
- ¿Nombra las métricas norte con los valores actuales que pusiste?
- ¿Cita el diferenciador real de tu propuesta de valor (no una descripción genérica)?
- ¿El tono del output refleja los adjetivos de tu marca?
- ¿Hay algo que Claude inventó que no estaba en tu documento?

Si algo falla: vuelve al documento de contexto, corrige el bloque correspondiente, vuelve a subirlo y repite el Paso 5. No sigas con el contexto mal calibrado.

---

**Paso 7 — Prueba con una tarea real sin CONTEXTO en el prompt**

- En la misma conversación o en una nueva, pega este prompt SIN agregar nada de contexto del producto:

```
Escribe el subject line y el primer párrafo de un email de reactivación para usuarios que compraron hace 60 días y no han vuelto a loguearse.
```

- Presiona Enter

Deberías ver esto en pantalla: un email que habla del ICP y el dolor específico de tu negocio, no un email genérico de "te echamos de menos". Si el output menciona información específica del documento de contexto (el cargo del usuario, el tipo de problema que resuelve el producto), el sistema está funcionando.

---

**Paso 8 — Compara el output del Paso 7 con lo que hubiera dado sin contexto**

- Abre una conversación fuera del Project (haz clic en "New chat" en el sidebar, fuera de cualquier Project)
- Pega exactamente el mismo prompt del Paso 7
- Presiona Enter

Deberías ver esto en pantalla: un email genérico con "Hola [nombre], hace tiempo que no te vemos" o variante. Sin mención al ICP específico, sin el dolor real, sin el tono de tu marca.

Esa diferencia — entre el output dentro del Project y el de fuera — es el valor del contexto cargado.

---

**Paso 9 — Ajusta las instrucciones de sistema si el tono no está bien**

- Si el output de los pasos anteriores suena demasiado formal, demasiado casual, o usa palabras que querías evitar, vuelve a Project Instructions
- Agrega una línea de RESTRICCIONES más específica, por ejemplo:

```
El tono de todos los outputs debe ser [DESCRIPCIÓN: ej. directo y concreto, como un colega senior / cercano pero profesional, sin exclamaciones]. Nunca uses [PALABRAS ESPECÍFICAS QUE QUIERES EVITAR].
```

- Guarda y repite la prueba de alineación del Paso 5

Deberías ver esto en pantalla: el output de la prueba de alineación usando el tono que especificaste.

---

**Paso 10 — Establece tu rutina de actualización del contexto**

- El documento de contexto se actualiza cuando cambian las métricas norte (mínimo una vez por trimestre)
- Para actualizar: sube la nueva versión del documento en la sección Knowledge y elimina la versión anterior
- Para verificar que la actualización funcionó: vuelve a ejecutar la prueba de alineación del Paso 5

Deberías ver esto en pantalla: cada vez que hagas la prueba de alineación, los valores de métricas en la tabla deben coincidir con los del documento más reciente que subiste.
