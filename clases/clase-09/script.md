# Automatiza tu Growth: reportes, alertas y trackers sin tocar código — GUIÓN EN PANTALLA
**Instructor B · 16 minutos · Módulo 03**

---

## 1. ABRO CLAUDE Y ARRANCO CON EL REPORTE SEMANAL

Abro claude.ai. Conversación nueva. El objetivo de hoy: construir un reporte semanal de Growth que se genera solo — con Google Sheets como fuente de datos y Google Apps Script como motor.

[ACCIÓN EN PANTALLA: abrir chrome, ir a claude.ai, abrir también una pestaña de Google Sheets con un sheet en blanco, mostrar las dos ventanas en pantalla]

No voy a explicar qué es Apps Script. Lo voy a usar y vas a ver exactamente qué hace.

---

## 2. PROMPT PRINCIPAL: EL REPORTE SEMANAL AUTOMÁTICO

Pego este prompt en Claude:

[ACCIÓN EN PANTALLA: pegar el prompt completo en Claude, mostrar todo el texto antes de enviarlo]

```
Crea un Google Apps Script que tome datos de esta hoja de cálculo y genere automáticamente un resumen semanal con: CAC por canal, conversión por etapa del funnel, y top 3 experimentos por impacto estimado.

La hoja de cálculo tiene esta estructura:
- Hoja "Métricas": columnas Semana | Canal | Inversión | Conversiones | CAC | Activación_% | Conversión_Trial_Pago_%
- Hoja "Experimentos": columnas ID | Nombre | Canal | Métrica_Primaria | Baseline | Resultado_Actual | Impacto_Estimado_%

El script debe:
1. Leer la última semana de datos de la hoja "Métricas"
2. Calcular el CAC por canal (inversión / conversiones)
3. Calcular el promedio de activación y conversión de trial a pago de esa semana
4. Leer la hoja "Experimentos" y ordenar por Impacto_Estimado_% de mayor a menor
5. Generar un resumen de texto con este formato exacto:

--- REPORTE DE GROWTH — Semana del [fecha] ---

CAC POR CANAL:
• Meta Ads: $[valor] ([delta]% vs semana anterior)
• Google Ads: $[valor] ([delta]% vs semana anterior)
• Email: $[valor] ([delta]% vs semana anterior)

CONVERSIÓN DEL FUNNEL:
• Activación: [valor]% ([delta] pp vs semana anterior)
• Trial a pago: [valor]% ([delta] pp vs semana anterior)

TOP 3 EXPERIMENTOS (por impacto estimado):
1. [nombre] — Canal: [canal] — Impacto estimado: [%]
2. [nombre] — Canal: [canal] — Impacto estimado: [%]
3. [nombre] — Canal: [canal] — Impacto estimado: [%]

6. Guardar el resumen generado en una nueva hoja llamada "Reportes" — una fila por semana
7. Incluir al final del script las instrucciones de instalación y cómo programarlo para que corra automáticamente cada lunes a las 8am usando triggers de Apps Script

Genera el Google Apps Script completo listo para instalar.
```

[ACCIÓN EN PANTALLA: presionar Enter, mostrar cómo Claude genera el código de Apps Script, hacer scroll para que se vea el bloque de código completo]

---

## 3. COPIO EL SCRIPT Y LO INSTALO EN GOOGLE SHEETS

[ACCIÓN EN PANTALLA: hacer clic en "Copy code" en el bloque de código de Claude, cambiar a la pestaña de Google Sheets, ir a Extensiones → Apps Script]

Extensiones → Apps Script. Se abre el editor.

[ACCIÓN EN PANTALLA: mostrar el editor de Apps Script con el código por defecto "function myFunction() {}", seleccionar todo con Cmd+A, borrar, pegar el script copiado de Claude]

Pego el script. Guardo con Cmd+S. Ahora ejecuto.

[ACCIÓN EN PANTALLA: hacer clic en el botón de play (triángulo) en la barra de herramientas de Apps Script]

Google pide autorización. Esto es normal — le estoy dando permiso al script para leer y escribir en mi Sheet.

[ACCIÓN EN PANTALLA: pantalla de autorización de Google → "Revisar permisos" → elegir la cuenta de Google → hacer clic en "Avanzado" → "Ir al script" → "Permitir"]

Autorizado. El script corrió.

[ACCIÓN EN PANTALLA: volver al Google Sheet, mostrar que aparece una nueva hoja llamada "Reportes" con la primera fila de datos del reporte generado automáticamente]

Ahí está el primer reporte en la hoja Reportes. Generado automáticamente a partir de los datos de la hoja Métricas.

---

## 4. CONFIGURO EL TRIGGER PARA QUE CORRA CADA LUNES

[ACCIÓN EN PANTALLA: en el editor de Apps Script, hacer clic en el ícono de reloj (Triggers) en la barra lateral izquierda]

El trigger es lo que hace que el script corra solo, sin que yo tenga que abrir el Sheet.

[ACCIÓN EN PANTALLA: hacer clic en "Add Trigger" en la esquina inferior derecha]

Configuro: función → `generarReporteSemanal`, fuente del evento → "Time-driven", tipo → "Week timer", día → lunes, hora → 8am a 9am. Guardar.

[ACCIÓN EN PANTALLA: mostrar el trigger configurado apareciendo en la lista de triggers activos]

Listo. Cada lunes a las 8am, el script corre solo y agrega una fila nueva a la hoja Reportes.

---

## 5. PROMPT DE ALERTAS: DETECCIÓN DE ANOMALÍAS EN SLACK

Ahora el sistema de alertas. Le pido a Claude que genere el código para detectar cuando el CAC sube más de 20% respecto a la semana anterior.

[ACCIÓN EN PANTALLA: volver a Claude, nueva conversación, pegar el siguiente prompt]

```
Crea un Google Apps Script que funcione como sistema de alertas de Growth.

El script lee el mismo Google Sheet del reporte semanal (hoja "Métricas") y compara la última semana con la anterior.

Alertas que debe detectar y notificar:
1. CAC de cualquier canal sube más de 20% semana a semana → ALERTA ALTA
2. Tasa de activación cae por debajo de 35% → ALERTA ALTA
3. Conversión de trial a pago cae más de 3 puntos porcentuales → ALERTA MEDIA
4. CAC blended (promedio de todos los canales) supera $120 → ALERTA ALTA

Para cada alerta, el script debe enviar un mensaje a Slack usando un Incoming Webhook.

Formato del mensaje de Slack:
🚨 ALERTA DE GROWTH — [Nombre de la métrica]
Valor actual: [valor]
Valor semana anterior: [valor]
Variación: [delta en % o pp]
Acción sugerida: [una línea con la primera acción a tomar]

Si no hay alertas activas, el script no envía nada (sin ruido).

La URL del webhook de Slack va en una constante al inicio del script llamada SLACK_WEBHOOK_URL — con un comentario que explique cómo obtenerla en 2 minutos desde la configuración de Slack.

Incluye al final las instrucciones para programar este script con un trigger diario a las 9am.

Genera el Google Apps Script completo.
```

[ACCIÓN EN PANTALLA: enviar el prompt, mostrar el código generado por Claude]

---

## 6. INSTALO EL SCRIPT DE ALERTAS Y CONFIGURO EL WEBHOOK

[ACCIÓN EN PANTALLA: copiar el código del script de alertas, ir al editor de Apps Script en Google Sheets, crear un nuevo archivo dentro del mismo proyecto con el botón "+", pegar el script de alertas]

Ahora necesito la URL del webhook de Slack. El script ya incluye las instrucciones. Las sigo.

[ACCIÓN EN PANTALLA: abrir Slack en el navegador, ir a la configuración del workspace → Apps → buscar "Incoming WebHooks" → hacer clic en "Add to Slack" → elegir el canal → copiar la URL del webhook]

Copio la URL. La pego en el script donde dice `SLACK_WEBHOOK_URL`.

[ACCIÓN EN PANTALLA: reemplazar el valor placeholder de SLACK_WEBHOOK_URL con la URL real copiada de Slack, guardar el script]

Ejecuto el script manualmente para probar.

[ACCIÓN EN PANTALLA: seleccionar la función del script de alertas en el selector de funciones, hacer clic en play, mostrar el mensaje de Slack llegando al canal configurado]

El mensaje llega a Slack. Funciona.

---

## 7. PROMPT DEL TRACKER DE EXPERIMENTOS

El último componente: el tracker de experimentos. Le pido a Claude que genere el script que crea la estructura completa con dropdowns, colores condicionales y hoja de resumen.

[ACCIÓN EN PANTALLA: volver a Claude, abrir nueva conversación, pegar el siguiente prompt]

```
Crea un Google Apps Script que construya un tracker de experimentos de Growth en Google Sheets.

Al ejecutarse, el script debe crear una hoja llamada "Experimentos" con estas columnas y configuraciones:

Columna A: ID (número secuencial, ancho 50px)
Columna B: Fecha inicio (formato DD/MM/YYYY, ancho 110px)
Columna C: Fecha fin estimada (formato DD/MM/YYYY, ancho 110px)
Columna D: Área — dropdown con opciones: Adquisición, Activación, Retención, Revenue, Referral
Columna E: Hipótesis (texto libre, ancho 280px, wrap)
Columna F: Canal — dropdown con opciones: Meta Ads, Google Ads, Email, Onboarding, Pricing page, Otro
Columna G: Métrica primaria (texto libre, ancho 150px)
Columna H: Baseline (número)
Columna I: Target (número)
Columna J: Resultado actual (número)
Columna K: % mejora — fórmula automática: =(J-H)/H*100
Columna L: Estado — dropdown con opciones: En diseño, Activo, En análisis, Concluido, Archivado
Columna M: Resultado final — dropdown: Ganó, Perdió, Inconcluso, En curso
Columna N: Aprendizaje clave (texto libre, ancho 230px, wrap)
Columna O: Próximo experimento (texto libre, ancho 200px)

Formato del encabezado (fila 1): negrita, fondo #1a1a2e, texto blanco.

Colores condicionales en columna L (Estado):
- "En diseño" → fondo #E3F2FD
- "Activo" → fondo #FFF9C4
- "Concluido" → fondo #E8F5E9
- "Archivado" → fondo #EEEEEE

Colores condicionales en columna M (Resultado final):
- "Ganó" → fondo #4CAF50, texto blanco
- "Perdió" → fondo #F44336, texto blanco

Incluye 3 filas de ejemplo con datos ficticios realistas de experimentos de Growth para una empresa SaaS B2B. Resáltalas con fondo #F5F5F5.

Crea también una segunda hoja "Resumen Experimentos" con:
- Total de experimentos por área (tabla con COUNTIF)
- Tasa de éxito global (Ganaron / Total concluidos)
- Número de experimentos activos ahora mismo

Genera el Apps Script completo con instrucciones de instalación comentadas al final.
```

[ACCIÓN EN PANTALLA: enviar el prompt, mostrar el código generado, hacer scroll para ver toda la extensión del script]

---

## 8. INSTALO EL TRACKER Y MUESTRO EL RESULTADO FINAL

[ACCIÓN EN PANTALLA: copiar el script del tracker, ir al Google Sheet, Extensiones → Apps Script, crear un tercer archivo en el proyecto, pegar, guardar, ejecutar, autorizar si pide autorización adicional]

El script corre. Vuelvo al Sheet.

[ACCIÓN EN PANTALLA: cambiar al Google Sheet, mostrar la hoja "Experimentos" recién creada con los encabezados formateados, los dropdowns activos y las tres filas de ejemplo con color de fondo]

El tracker completo. Con dropdowns, colores condicionales y filas de ejemplo para entender cómo usarlo.

[ACCIÓN EN PANTALLA: hacer clic en una celda de la columna Estado, mostrar el dropdown con las opciones, seleccionar "Activo" y ver cómo cambia el color de la celda a amarillo]

Así funciona. Lo tienes que rellenar tú — pero la estructura, los formatos y los colores los construyó Claude.

---

## 9. LO QUE TIENES AL FINAL DE ESTA CLASE

Tres herramientas operativas en tu Google Sheets:
- Reporte semanal que se genera solo cada lunes a las 8am
- Sistema de alertas que avisa a Slack cuando una métrica cruza el umbral
- Tracker de experimentos con estructura, dropdowns y colores listos para usar

Las tres construidas con tres prompts. Las tres corren solas de ahora en adelante.

Tu tarea está en el entregable. Hazlas en orden.
