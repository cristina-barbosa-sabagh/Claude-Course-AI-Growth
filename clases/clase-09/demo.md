# DEMO PASO A PASO — Reporte semanal automático, alertas y tracker en Google Sheets

---

**Paso 1.** Abre claude.ai en el navegador y haz clic en "New conversation". Abre también una segunda pestaña con sheets.new para crear un Google Sheet en blanco.

- Deberías ver esto en pantalla: dos pestañas abiertas — Claude en una, Google Sheets en blanco en la otra.

---

**Paso 2.** En el Google Sheet en blanco, crea la estructura de datos. En la hoja por defecto (renómbrala "Métricas"), agrega estos encabezados en la fila 1 y estos datos de ejemplo en las filas 2 y 3:

Fila 1 (encabezados): `Semana | Canal | Inversión | Conversiones | CAC | Activación_% | Conversión_Trial_Pago_%`

Fila 2: `2024-01-15 | Meta Ads | 4500 | 38 | 118.4 | 47 | 12`
Fila 3: `2024-01-15 | Google Ads | 3200 | 29 | 110.3 | 47 | 12`
Fila 4: `2024-01-15 | Email | 800 | 22 | 36.4 | 47 | 12`
Fila 5: `2024-01-08 | Meta Ads | 4200 | 40 | 105 | 44 | 11`
Fila 6: `2024-01-08 | Google Ads | 3000 | 28 | 107.1 | 44 | 11`
Fila 7: `2024-01-08 | Email | 750 | 23 | 32.6 | 44 | 11`

Crea una segunda hoja llamada "Experimentos" con encabezados: `ID | Nombre | Canal | Métrica_Primaria | Baseline | Resultado_Actual | Impacto_Estimado_%`

- Deberías ver esto en pantalla: Google Sheet con dos pestañas (Métricas y Experimentos), datos visibles en la hoja Métricas.

---

**Paso 3.** En Claude, pega este prompt completo y presiona Enter:

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

- Deberías ver esto en pantalla: un bloque de código JavaScript largo con funciones de Google Apps Script, botón "Copy code" visible en la esquina superior derecha.

---

**Paso 4.** Haz clic en "Copy code". Vuelve al Google Sheet. Ve a Extensiones → Apps Script.

- Deberías ver esto en pantalla: editor de Apps Script con el código por defecto `function myFunction() {}`.

---

**Paso 5.** Selecciona todo el código por defecto (Cmd+A o Ctrl+A), bórralo. Pega el script copiado de Claude. Guarda con Cmd+S o Ctrl+S.

- Deberías ver esto en pantalla: el editor de Apps Script con el código nuevo pegado, nombre del proyecto en la barra superior cambiado a "Sin título" o el que tenía antes.

---

**Paso 6.** Haz clic en el botón de play (triángulo) para ejecutar el script. Cuando Google pida autorización, haz clic en "Revisar permisos" → elige tu cuenta → "Avanzado" → "Ir al script (no seguro)" → "Permitir".

- Deberías ver esto en pantalla: ventana de autorización de Google, botones "Avanzado" y "Ir al script", finalmente "Permitir". Luego, el editor de Apps Script muestra "Running..." brevemente.

---

**Paso 7.** Vuelve al Google Sheet. Verifica que aparece una nueva hoja llamada "Reportes".

- Deberías ver esto en pantalla: nueva pestaña "Reportes" en la parte inferior del Sheet, con al menos una fila con el resumen del reporte generado automáticamente, incluyendo el texto formateado con los datos de CAC y conversión.

---

**Paso 8.** Configura el trigger automático. En el editor de Apps Script, haz clic en el ícono de reloj (Triggers) en la barra lateral izquierda. Haz clic en "Add Trigger" en la esquina inferior derecha.

Configura: función → `generarReporteSemanal` (o el nombre que usó Claude), tipo de evento → Time-driven, tipo de tiempo → Week timer, día → lunes, hora → 8am-9am. Haz clic en "Save".

- Deberías ver esto en pantalla: el trigger aparece listado en la pantalla de Triggers con el ícono de reloj y la descripción "Every week, on Monday, 8 AM to 9 AM".

---

**Paso 9.** Vuelve a Claude. Nueva conversación. Pega este prompt para el sistema de alertas:

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

- Deberías ver esto en pantalla: un nuevo bloque de código con el script de alertas, con la constante `SLACK_WEBHOOK_URL` visible al inicio del código.

---

**Paso 10.** Obtén la URL del webhook de Slack. Abre Slack en el navegador. Ve a tu workspace → icono de "Add apps" o busca "Incoming WebHooks" en el directorio de apps → "Add to Slack" → elige el canal donde quieres recibir alertas (por ejemplo, `#alertas-growth`) → copia la URL del webhook que aparece.

- Deberías ver esto en pantalla: una URL que empieza con `https://hooks.slack.com/services/...` en la pantalla de configuración de Incoming WebHooks.

---

**Paso 11.** Copia el script de alertas de Claude. En el editor de Apps Script del Google Sheet, crea un nuevo archivo de script con el botón "+" → "Script". Pega el código. Reemplaza el valor placeholder de `SLACK_WEBHOOK_URL` con la URL real de Slack. Guarda. Ejecuta para probar.

- Deberías ver esto en pantalla: si alguna métrica de los datos de ejemplo cruza el umbral, un mensaje llega al canal de Slack configurado con el formato de alerta definido. Si no hay alertas, la ejecución termina sin enviar nada.

---

**Paso 12.** Vuelve a Claude. Nueva conversación. Pega este prompt para el tracker de experimentos:

```
Crea un Google Apps Script que construya un tracker de experimentos de Growth en Google Sheets.

Al ejecutarse, el script debe crear una hoja llamada "Tracker Experimentos" con estas columnas:

A: ID (número secuencial, ancho 50px)
B: Fecha inicio (formato DD/MM/YYYY)
C: Fecha fin estimada (formato DD/MM/YYYY)
D: Área — dropdown: Adquisición, Activación, Retención, Revenue, Referral
E: Hipótesis (texto libre, ancho 280px, wrap)
F: Canal — dropdown: Meta Ads, Google Ads, Email, Onboarding, Pricing page, Otro
G: Métrica primaria (texto libre)
H: Baseline (número)
I: Target (número)
J: Resultado actual (número)
K: % mejora — fórmula: =(J-H)/H*100
L: Estado — dropdown: En diseño, Activo, En análisis, Concluido, Archivado
M: Resultado final — dropdown: Ganó, Perdió, Inconcluso, En curso
N: Aprendizaje clave (texto libre, ancho 230px, wrap)
O: Próximo experimento (texto libre)

Encabezado fila 1: negrita, fondo #1a1a2e, texto blanco.

Colores condicionales columna L: "En diseño" → #E3F2FD | "Activo" → #FFF9C4 | "Concluido" → #E8F5E9
Colores condicionales columna M: "Ganó" → fondo #4CAF50 texto blanco | "Perdió" → fondo #F44336 texto blanco

Incluye 3 filas de ejemplo ficticias pero realistas de experimentos de Growth SaaS B2B. Fondo #F5F5F5 en esas filas.

Crea también una hoja "Resumen" con: total experimentos por área (COUNTIF), tasa de éxito global, experimentos activos.

Script completo con instrucciones de instalación comentadas al final.
```

- Deberías ver esto en pantalla: un bloque de código extenso con el script del tracker, incluyendo las definiciones de columnas, los formatos y las reglas de color condicional.

---

**Paso 13.** Instala el script del tracker igual que los anteriores: copia, pega en un nuevo archivo de script en Apps Script, guarda, ejecuta, autoriza.

- Deberías ver esto en pantalla: nueva pestaña "Tracker Experimentos" en el Google Sheet con todos los encabezados formateados en azul oscuro, dropdowns activos en las columnas correspondientes, tres filas de ejemplo con fondo gris claro, y una pestaña "Resumen" adicional con las métricas agregadas.
