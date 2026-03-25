# War Room de Growth: un dashboard en vivo donde Claude es tu estratega — GUIÓN EN PANTALLA
**Instructor A · 16 minutos · Módulo 02**

---

## 1. ABRO EL WAR ROOM EN GOOGLE SHEETS

Abro directamente Google Sheets. El War Room ya está configurado con los datos de los últimos 3 días.

[ACCIÓN EN PANTALLA: abrir Google Sheets con el archivo "War Room de Growth — [Empresa]" ya abierto, mostrar la hoja "War Room" con las dos zonas visibles — Zona 1 en azul claro, Zona 2 en verde claro]

Este es el War Room. No lo estoy construyendo ahora en vivo — ya está configurado. Lo que voy a hacer es lo que hago cada mañana: leer los datos, copiarlos y pegarlos en Claude.

Antes de hacerlo, te muestro el patrón que hay en estos números.

---

## 2. SEÑALO EL PATRÓN ANTES DEL ANÁLISIS

[ACCIÓN EN PANTALLA: hacer zoom en la Zona 1 — columna CPC, señalar con el cursor los valores de los 3 días: $0.37, $0.40, $0.44]

Mira la Zona 1. Meta Ads: el CPC subió de $0.37 a $0.44 en tres días. Las conversiones cayeron de 38 a 22. El instinto natural de cualquier equipo es: problema de Meta, hay que ajustar pujas o cambiar creativos.

[ACCIÓN EN PANTALLA: hacer scroll hasta la Zona 2, señalar la columna "% ACT DÍA 1": 33.9%, 25.5%, 19.5%]

Ahora mira la Zona 2. Activación día 1: de 33.9% a 19.5% en el mismo período. Y el 23 de marzo entró un nuevo diseño de landing — está en la columna de notas.

[ACCIÓN EN PANTALLA: señalar la celda de nota del 23/03 que dice "Nuevo diseño landing activo"]

¿El problema es Meta o es el landing? Ahí está la pregunta. Vamos a ver qué dice Claude.

---

## 3. COPIO LOS DATOS Y LOS PEGO EN CLAUDE

[ACCIÓN EN PANTALLA: seleccionar todo el rango — desde el encabezado de Zona 1 hasta la última fila de Zona 2 incluyendo notas, presionar Cmd+C / Ctrl+C]

Selecciono todo. Zona 1, encabezados, Zona 2, notas. Copio.

[ACCIÓN EN PANTALLA: abrir claude.ai en una nueva pestaña del navegador, entrar al Project de Growth, hacer clic en "New Chat"]

Abro Claude. Mi Project de Growth. Nueva conversación — el prompt de sistema ya está cargado en el Project, no tengo que escribir nada más que los datos.

[ACCIÓN EN PANTALLA: hacer clic en el campo de texto de Claude, presionar Cmd+V / Ctrl+V — los datos aparecen en el campo como texto tabulado]

Pego.

[ACCIÓN EN PANTALLA: presionar Enter — pausa en silencio de 3 a 5 segundos mientras Claude procesa]

Envío. Y esperamos.

---

## 4. LEO EL OUTPUT DE CLAUDE EN VOZ ALTA

[ACCIÓN EN PANTALLA: cuando el output empieza a aparecer, hacer scroll lentamente mientras se lee cada sección en voz alta, señalando con el cursor]

Mira el diagnóstico:

"DIAGNÓSTICO: Caída sostenida en activación día 1 de 33.9% a 19.5% en 72 horas — el tráfico de Meta entra pero casi la mitad no completa el primer valor. El costo por conversión sube como consecuencia, no como causa."

[ACCIÓN EN PANTALLA: subrayar con el cursor la frase "como consecuencia, no como causa"]

Fíjate en esa frase: "como consecuencia, no como causa". Eso es lo que cambia todo. Si hubiéramos ajustado pujas en Meta sin revisar activación, habríamos resuelto el síntoma y dejado el problema intacto.

[ACCIÓN EN PANTALLA: hacer scroll hasta la sección CAUSA PROBABLE]

"CAUSA PROBABLE: El nuevo diseño de landing activado el 23/03 está generando desconexión entre la promesa del anuncio y la experiencia de llegada."

Usó la nota de la columna H. Eso estaba en los datos que pegué. Claude lo incorporó al diagnóstico.

[ACCIÓN EN PANTALLA: hacer scroll hasta la sección RECOMENDACIÓN]

"RECOMENDACIÓN: Revertir temporalmente al diseño anterior de landing y medir activación día 1 mañana — si sube a más del 28%, el nuevo diseño es el problema. No ajustar pujas ni creativos de Meta hasta confirmar."

Una acción. Con qué métrica medir el resultado. Y qué no tocar. Sin ambigüedad.

[ACCIÓN EN PANTALLA: hacer scroll hasta la sección EXPERIMENTO OPCIONAL]

"EXPERIMENTO OPCIONAL: Crear un test A/B del landing nuevo vs. anterior con tráfico dividido 50/50 esta semana para confirmar la hipótesis antes de descartarlo definitivamente."

Para quien quiere ir más lejos. No es obligatorio para la decisión de hoy.

---

## 5. MUESTRO EL TIEMPO TOTAL

[ACCIÓN EN PANTALLA: volver al Google Sheet y al Claude abiertos en pestañas del navegador, alternar entre las dos pestañas]

Eso tomó menos de 2 minutos desde que abrí el Sheet. La decisión está clara: revertir el landing, medir mañana, no tocar Meta hasta tener el dato.

Sin el War Room, la conversación de equipo hubiera sido "Meta está mal, subamos el presupuesto" o "cambiemos los creativos". Con dos días de trabajo en la dirección equivocada.

El valor no son los datos — esos ya los tenías. El valor es ver la Zona 1 y la Zona 2 juntas, en el mismo lugar, y pasárselas a Claude con el contexto correcto.

---

## 6. MUESTRO EL PROMPT DE SISTEMA DEL PROJECT

[ACCIÓN EN PANTALLA: ir al Project de Claude, hacer clic en "Project Instructions" (esquina superior derecha o ícono de configuración según la interfaz)]

Te muestro qué hay cargado en el Project para que Claude pueda hacer ese diagnóstico.

[ACCIÓN EN PANTALLA: mostrar el contenido del prompt de sistema — desplazarse lentamente por él para que sea legible en pantalla]

Cuatro bloques. El rol — "estratega de Growth, produce exactamente UNA recomendación accionable para hoy". El contexto del negocio — producto, etapa, métrica norte. Las instrucciones de análisis — leer Zona 1 y Zona 2 juntas, identificar la ruptura del funnel. Y las restricciones — "no hagas recomendaciones sin datos que las soporten".

[ACCIÓN EN PANTALLA: señalar con el cursor el campo "Métrica norte" en el prompt de sistema]

El campo más importante es este: "métrica norte". Si tu métrica norte es activación día 1, Claude va a priorizar las señales de activación aunque el CPM esté subiendo. Si es CAC, prioriza eficiencia de adquisición. Defínela antes de cargar el prompt.

---

## 7. MUESTRO EL PROMPT DE DIAGNÓSTICO DE LA SEMANA

En el mismo Project, abro otra conversación para el análisis semanal del viernes. Pego este prompt:

```
Aquí están los datos del War Room de esta semana completa (lunes a viernes):

[datos de Zona 1 y Zona 2 de los 5 días]

Analiza la semana completa y dime:

1. ¿Cuál fue el punto de mayor ruptura del funnel esta semana y qué lo causó?
2. ¿Qué experimento de los que corrimos funcionó (o al menos mostró señal positiva)?
3. ¿Qué NO debemos repetir la próxima semana y por qué?
4. ¿Cuáles son los 3 experimentos que recomiendas priorizar la próxima semana?

Para cada experimento recomendado, usa este formato:
---
EXPERIMENTO [número]
Hipótesis: [qué esperas que pase]
Canal: [dónde se ejecuta]
Métrica de éxito: [qué número tiene que moverse para que sea un éxito]
Tiempo estimado para tener resultado: [días]
---
```

[ACCIÓN EN PANTALLA: mostrar el prompt pegado en el chat sin enviarlo — hacer zoom para que el formato sea legible]

Este prompt lo ejecutas el viernes. Te da el cierre de semana y el plan de la siguiente. Con los datos de la hoja "Histórico" del Sheet que fuiste llenando de lunes a jueves.

---

## 8. RESUMEN Y LLAMADA A LA ACCIÓN

[ACCIÓN EN PANTALLA: mostrar las dos pestañas abiertas — Google Sheets y Claude — en una vista del navegador]

Dos herramientas. Un flujo. Menos de 10 minutos por mañana.

El War Room no reemplaza tu juicio. Asegura que tu juicio tenga todos los datos del funnel — adquisición y activación juntos — antes de decidir.

Tu entregable tiene la plantilla de Google Sheets lista para duplicar y el prompt de sistema completo para cargar en tu Project. Tiempo de configuración: 20 minutos. A partir de mañana, los primeros 10 minutos de tu día tienen un output claro.

Empiézalo esta tarde.

---

*Duración estimada del guión: 14–16 minutos de grabación en pantalla*
