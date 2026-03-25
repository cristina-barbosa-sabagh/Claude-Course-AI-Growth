# Clase 03 — Configura tu cerebro de Growth en Claude: ICP, métricas y contexto — GUIÓN EN PANTALLA

---

## 1. Abro Claude Projects y voy directo a Project Instructions

[ACCIÓN EN PANTALLA: abrir claude.ai, hacer clic en "Projects" en el sidebar, abrir el Project de Growth creado en Clase 01, mostrar la pantalla principal del Project]

Abro mi Project de Growth. Voy a hacer clic en la configuración del Project — el botón de ajustes arriba a la derecha.

[ACCIÓN EN PANTALLA: hacer clic en el ícono de configuración o en "Edit project" en la parte superior del Project, mostrar el campo "Project Instructions" vacío o con el texto mínimo de Clase 01]

Aquí está el campo de Project Instructions. Esto es lo que Claude lee antes de cada conversación en este Project. Cada respuesta que da parte desde aquí.

Voy a pegarlo ahora. Este es el template de instrucciones de sistema completo:

```
Eres el co-piloto de Growth de Dataflow.

Mi rol: Head of Growth. Mi foco en los próximos 90 días es escalar adquisición — bajar el CAC en Meta y subir la conversión de trial a pago del 22% al 35%.

Tienes acceso al documento de contexto de Growth de Dataflow en este Project. Úsalo como referencia activa en cada respuesta cuando sea relevante.

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

[ACCIÓN EN PANTALLA: pegar el texto completo en el campo de Project Instructions, mostrar el texto pegado en pantalla]

Guardo. Estas instrucciones están activas en cada conversación de este Project desde ahora.

[ACCIÓN EN PANTALLA: hacer clic en guardar o "Save", confirmar que las instrucciones quedaron guardadas]

---

## 2. Subo el documento de contexto de Growth

[ACCIÓN EN PANTALLA: seguir en la configuración del Project, buscar la sección "Knowledge" o "Add content", mostrar la opción de subir archivos]

Ahora el documento de contexto. Esto es diferente a las instrucciones de sistema: las instrucciones le dicen a Claude cómo comportarse, el documento de contexto le dice qué sabe de mi negocio.

Tengo el documento ya preparado. Lo muestro antes de subirlo.

[ACCIÓN EN PANTALLA: abrir el documento en un editor de texto o en el Finder para mostrarlo brevemente, hacer scroll para que se vean los 4 bloques: ICP, Propuesta de Valor, Métricas Norte, Tono de Marca]

Cuatro bloques. ICP, propuesta de valor, métricas norte y tono de marca. Lo construí con la plantilla del entregable de esta clase. Tarda 30 minutos llenarlo la primera vez.

Lo subo ahora.

[ACCIÓN EN PANTALLA: arrastrar el archivo al campo de Knowledge o hacer clic en "Upload file", mostrar el archivo cargándose y procesándose, confirmar que aparece en la lista de archivos del Project]

Listo. Claude tiene acceso a ese documento en cada conversación de este Project.

---

## 3. La prueba de alineación — el momento que lo confirma todo

[ACCIÓN EN PANTALLA: hacer clic en "New chat" dentro del Project, mostrar la conversación nueva en blanco]

Conversación nueva. Voy a hacer la prueba de alineación: un prompt que verifica si Claude entendió todo el contexto que acabo de cargar.

```
¿Qué entiendes sobre mi negocio, mi ICP y mis métricas norte basándote en el contexto que tienes? Dame un resumen en formato tabla con tres columnas: "Qué sé", "El detalle específico", "Por qué importa para Growth".
```

[ACCIÓN EN PANTALLA: pegar el prompt, presionar Enter, esperar el output completo sin hablar, hacer scroll para mostrar la tabla completa]

Miren la tabla. Claude sabe que el ICP es un Sales Manager que pierde el viernes en reportes. Sabe que la métrica norte es conversión de trial del 22% al 35%. Sabe que el tono es directo, sin condescendencia. Sabe que el vocabulario prohibido incluye "automatización" y "disruptivo".

No le pregunté nada de eso individualmente. Lo tiene todo de una carga de 10 minutos.

---

## 4. Muestro el antes y el después en una tarea real

[ACCIÓN EN PANTALLA: abrir una segunda conversación nueva en el Project]

Ahora le pido algo sin dar nada de CONTEXTO en el prompt. Solo la tarea.

```
Necesito 2 ángulos de copy para el email de activación que enviamos cuando un usuario se registra a la prueba gratuita pero no conecta Salesforce en las primeras 24 horas.
```

[ACCIÓN EN PANTALLA: pegar el prompt, presionar Enter, esperar el output, hacer scroll para mostrar los 2 ángulos completos]

No le dije quién es el usuario. No describí el problema. No expliqué el producto ni el tono.

Claude ya lo tenía. El output menciona el viernes, el reporte manual, el setup sin IT — todo lo que está en el documento de contexto.

Comparen esto con lo que habría salido si hubiera hecho ese mismo prompt en una conversación sin el contexto cargado. Sin el contexto: un email genérico de "hola, vemos que no completaste tu registro". Con el contexto: un email que habla exactamente del dolor del Sales Manager.

---

## 5. Actualizo el contexto cuando cambian las métricas

[ACCIÓN EN PANTALLA: volver a la configuración del Project, ir a la sección de Knowledge, mostrar el archivo de contexto ya cargado]

El contexto no es estático. Cuando cambien las métricas — cuando el CTR suba, cuando el trial conversion llegue al 30% — actualizo el documento y lo vuelvo a subir.

[ACCIÓN EN PANTALLA: mostrar el botón de eliminar o reemplazar el archivo en Knowledge, señalarlo con el cursor sin hacer clic]

Un archivo por trimestre. Máximo. No es mantenimiento — es calibración.

---

## 6. El ICP tiene que estar escrito para Claude, no para una presentación

[ACCIÓN EN PANTALLA: abrir una conversación nueva en el Project]

Antes de terminar, voy a mostrar la diferencia entre un ICP inútil y un ICP que sirve.

Pego esto:

```
Tengo dos versiones del ICP de un producto. Dime cuál es más útil para generar copy específico y por qué.

Versión A: "Empresas medianas del sector tecnológico que buscan optimizar sus procesos de reporting."

Versión B: "Sales Managers en empresas de 50–200 empleados, equipo de 5–15 reps, que usan Salesforce y pierden entre 3 y 4 horas cada viernes consolidando datos en hojas de cálculo. En sus propias palabras: 'Me paso los viernes haciendo el reporte para tenerlo listo el lunes. Son horas que debería estar cerrando deals.' El resultado que quieren: llegar a la reunión del lunes con el reporte del viernes a las 5pm, no del miércoles."

No expliques la respuesta. Solo dime cuál y el motivo en 1 línea.
```

[ACCIÓN EN PANTALLA: pegar el prompt, presionar Enter, mostrar la respuesta de Claude]

La Versión B. Siempre. La A no tiene dolor, no tiene contexto, no tiene las palabras del cliente. La B tiene todo lo que Claude necesita para hablar en el idioma del ICP sin que yo se lo repita en cada prompt.

Esa es la diferencia que hace que el output de Claude pase de genérico a producción.

---

## 7. Lo que tienes ahora y lo que sigue

[ACCIÓN EN PANTALLA: mostrar el Project configurado con las instrucciones de sistema y el documento de contexto cargado, hacer clic en "New chat" para mostrar que la próxima conversación parte desde ese contexto]

Tienes Claude configurado con tu contexto. Sabes construir briefs con los 5 elementos. Tienes el sistema base funcionando.

Tu tarea: llena la plantilla de contexto del entregable de esta clase con tu negocio real. 30 minutos. Una sola vez. Desde ese momento, Claude trabaja como si te conociera.

El Módulo 02 es ejecución: copy de campañas, análisis de métricas, diseño de experimentos — todo con Claude ya alineado a tu negocio.
