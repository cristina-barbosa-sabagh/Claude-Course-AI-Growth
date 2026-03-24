# Plantilla de Brief para Claude Code: 3 Herramientas de Growth
## Tracker · Reporte Semanal · Sistema de Alertas

**Módulo 03 · Clase 09 · Claude para Growth**

---

Tres herramientas. Tres prompts listos para copiar y pegar en Claude Code.
Cada una se construye en menos de 5 minutos de generación más 5 minutos de configuración de tu parte.

Hazlas en orden: el tracker primero, luego el reporte, luego las alertas.
Las tres comparten la misma fuente de datos (tu Google Sheet de métricas), así que tiene sentido construirlas en secuencia.

---

## HERRAMIENTA 1 — Tracker de Experimentos de Growth en Google Sheets

### Qué hace
Un Google Sheet estructurado con 12 columnas para registrar hipótesis, estado, resultados y aprendizajes de cada experimento. Incluye colores condicionales automáticos por estado y una fórmula de mejora calculada. Instalable en 3 minutos mediante Google Apps Script — sin código manual.

### Qué necesitas preparar antes de pegar el prompt
Responde estas preguntas para personalizar el tracker:

**¿Cuántas áreas de Growth tienes?** (las que apliquen)
```
[ ] Adquisición    [ ] Activación    [ ] Retención
[ ] Revenue        [ ] Referral      [ ] Otro: _______
```

**¿Cuáles son tus 3–5 canales más importantes?**
```
Ejemplo: Meta Ads, Google Ads, Email, Onboarding flow, Pricing page
Tus canales: _______________________________________________
```

**¿Cuál es tu formato de hipótesis preferido?**
```
[X] "Creemos que [cambio] para [segmento] resultará en [resultado] porque [razón]"
[ ] Otro formato: __________________________________________
```

---

### Prompt para Claude Code — Tracker de Experimentos

Copia este bloque completo, personaliza los campos entre corchetes y pégalo en Claude Code.

```
Eres un desarrollador de Google Apps Script especializado en herramientas de Growth para equipos de producto y marketing.

Tu tarea: construir un tracker de experimentos de Growth en Google Sheets usando Google Apps Script.

INSTRUCCIONES TÉCNICAS:
- El script se instala en un Google Sheet nuevo mediante Extensiones → Apps Script
- Al ejecutarse, crea la hoja con todos los encabezados, formatos y fórmulas
- No requiere ninguna configuración adicional después de ejecutar
- El script debe ser auto-contenido — sin dependencias externas
- Incluye al final del script instrucciones comentadas paso a paso para instalarlo

ESTRUCTURA DEL TRACKER — crea las siguientes columnas en este orden:

Columna A: ID — número secuencial automático (1, 2, 3...)
Columna B: Fecha de inicio — formato DD/MM/YYYY
Columna C: Fecha de fin (estimada) — formato DD/MM/YYYY
Columna D: Área — dropdown con: [REEMPLAZA CON TUS ÁREAS — ej: Adquisición, Activación, Retención, Revenue, Referral]
Columna E: Nombre del experimento — texto libre, máximo 60 caracteres
Columna F: Hipótesis — texto en formato "Creemos que [cambio] para [segmento] resultará en [resultado] porque [razón]"
Columna G: Canal o punto de contacto — dropdown con: [REEMPLAZA CON TUS CANALES — ej: Meta Ads, Google Ads, Email, Onboarding, Pricing page]
Columna H: Métrica primaria — texto libre (ej: "Tasa de activación", "CAC", "Open rate")
Columna I: Baseline — número (valor actual antes del experimento)
Columna J: Target — número (valor que necesitas para declarar éxito)
Columna K: Resultado actual — número (se actualiza durante el experimento)
Columna L: % de mejora vs baseline — fórmula automática: =(K-I)/I*100
Columna M: Estado — dropdown con: En diseño / Activo / En análisis / Concluido / Archivado
Columna N: Resultado final — dropdown con: Ganó / Perdió / Inconcluso / En curso
Columna O: Aprendizaje clave — texto libre, máximo 140 caracteres (una sola línea clara)
Columna P: Próximo experimento sugerido — texto libre

FORMATOS Y COLORES:
- Fila 1: encabezados en negrita, fondo #1a1a2e (azul muy oscuro), texto blanco
- Columna A: ancho 50px, texto centrado
- Columnas B y C: ancho 120px, formato fecha
- Columna F (Hipótesis): ancho 300px, texto wrap
- Columna O (Aprendizaje): ancho 250px, texto wrap

COLORES CONDICIONALES EN COLUMNA M (Estado):
- "En diseño" → fondo #E3F2FD (azul muy claro)
- "Activo" → fondo #FFF9C4 (amarillo claro)
- "En análisis" → fondo #FFF3E0 (naranja muy claro)
- "Concluido" → fondo #E8F5E9 (verde muy claro)
- "Archivado" → fondo #EEEEEE (gris claro)

COLORES CONDICIONALES EN COLUMNA N (Resultado final):
- "Ganó" → fondo #4CAF50, texto blanco (verde)
- "Perdió" → fondo #F44336, texto blanco (rojo)
- "Inconcluso" → fondo #FF9800, texto blanco (naranja)
- "En curso" → fondo #2196F3, texto blanco (azul)

HOJA DE RESUMEN:
Crea una segunda hoja llamada "Resumen" con:
- Total de experimentos por área (tabla con fórmulas COUNTIF)
- Tasa de éxito global (Ganaron / Total concluidos)
- Experimentos activos actualmente
- Los últimos 5 aprendizajes clave (referencia automática a la hoja principal)

DATOS DE EJEMPLO:
Incluye 3 filas de ejemplo con datos ficticios pero realistas para que el usuario entienda cómo llenar el tracker. Cúbrelas con color de fondo #F5F5F5 para que se distingan de los datos reales.

INSTRUCCIONES DE INSTALACIÓN (al final del script, como comentarios):
Paso 1: Abre Google Sheets y crea un Sheet en blanco
Paso 2: Ve a Extensiones → Apps Script
Paso 3: Borra el código que aparece por defecto
Paso 4: Pega este script completo
Paso 5: Haz clic en el ícono de guardar (o Ctrl+S)
Paso 6: Haz clic en "Ejecutar" (el botón de play)
Paso 7: Cuando Google pida autorización, haz clic en "Revisar permisos" → elige tu cuenta → "Avanzado" → "Ir a [nombre del script]" → "Permitir"
Paso 8: El script se ejecuta en 10–15 segundos. Vuelve a tu Sheet — el tracker estará listo.

Genera el Google Apps Script completo y listo para instalar.
```

---

### Cómo instalarlo (resumen rápido)

1. Ve a [sheets.new](https://sheets.new) para crear un Google Sheet en blanco
2. Extensiones → Apps Script → borra el código por defecto
3. Pega el script que generó Claude Code
4. Guardar → Ejecutar → Autorizar
5. Vuelve al Sheet — el tracker está listo

**Tiempo total:** 3 minutos desde que tienes el script.

---

## HERRAMIENTA 2 — Reporte Semanal Automático de Growth

### Qué hace
Un script de Python que lee tus métricas de un Google Sheet, calcula los deltas semana a semana, genera un resumen de texto con los highlights y lo envía a un canal de Slack (o por email) cada lunes a las 8am. Se configura una vez y corre solo.

### Qué necesitas preparar antes de pegar el prompt

**¿Cuáles son tus 5–8 métricas de Growth más importantes?**
```
Ejemplo:
1. Nuevos registros semanales (adquisición)
2. Tasa de activación — % usuarios que completan onboarding (activación)
3. CAC total (adquisición)
4. MRR (revenue)
5. Churn mensual en % (retención)
6. Open rate de emails de campaña (engagement)
7. Conversión de trial a pago (revenue)
8. NPS (satisfacción)

Tus métricas:
1. ____________________________________
2. ____________________________________
3. ____________________________________
4. ____________________________________
5. ____________________________________
6. ____________________________________
7. ____________________________________  (opcional)
8. ____________________________________  (opcional)
```

**¿Dónde vas a cargar las métricas?**
```
[ ] Google Sheet (recomendado — el script lo lee directamente)
[ ] Otro: ________________________
```

**¿Dónde quieres recibir el reporte?**
```
[ ] Slack (canal específico — necesitas un Incoming Webhook)
[ ] Email (necesitas un servidor SMTP o SendGrid)
[ ] Ambos
```

---

### Prompt para Claude Code — Reporte Semanal Automático

```
Eres un desarrollador de Python especializado en automatización de Growth y reporting.

Tu tarea: construir un script de Python que genera y envía automáticamente un reporte semanal de Growth.

INSTRUCCIONES TÉCNICAS:
- Python 3.8+
- Librerías permitidas: gspread (Google Sheets), slack_sdk (Slack), smtplib (email), datetime, os
- El script usa variables de entorno para las credenciales — nunca hardcodeadas
- El script incluye manejo de errores: si una métrica no tiene datos esa semana, lo indica sin romper el script
- Al final del script, incluye instrucciones comentadas para programarlo con cron (Linux/Mac) o Task Scheduler (Windows)

FUENTE DE DATOS — Google Sheet:
El script lee un Google Sheet con esta estructura:
- Columna A: Fecha de la semana (primer día — lunes)
- Columnas B en adelante: una columna por métrica
- El script siempre lee las últimas 2 filas para calcular el delta semana a semana

Métricas a incluir (una columna por métrica en el Sheet):
[REEMPLAZA CON TUS MÉTRICAS — ej:]
1. Nuevos registros
2. Tasa de activación (%)
3. CAC ($)
4. MRR ($)
5. Churn mensual (%)
6. Open rate emails (%)
7. Conversión trial a pago (%)
8. NPS

LÓGICA DEL REPORTE:
1. Lee las dos últimas semanas del Sheet
2. Calcula el delta de cada métrica: valor actual vs. semana anterior (en número absoluto y en porcentaje)
3. Clasifica cada métrica como:
   - SUBIÓ: si el delta es positivo (y subir es bueno para esa métrica)
   - BAJÓ: si el delta es negativo (y bajar es malo para esa métrica)
   - NEUTRAL: si el delta es menor al 1%
4. Identifica las 3 métricas con mayor variación (positiva o negativa)
5. Genera el texto del reporte

FORMATO DEL REPORTE:
```
📊 REPORTE DE GROWTH — Semana del [fecha]

RESUMEN EJECUTIVO:
[2–3 líneas con los highlights más importantes de la semana]

MÉTRICAS CLAVE:
✅ Nuevos registros: 240 (+18% vs semana anterior)
✅ Tasa de activación: 47% (+3 pp vs semana anterior)
⚠️ CAC: $85 (+12% vs semana anterior)
✅ MRR: $42,000 (+6% vs semana anterior)
🔴 Churn mensual: 6.2% (+1.8 pp vs semana anterior — ALERTA)
✅ Open rate emails: 28% (+2 pp vs semana anterior)

PUNTOS DE ATENCIÓN ESTA SEMANA:
1. [métrica con mayor caída] — [delta] — Revisar [área de acción sugerida]
2. [segunda métrica crítica] — [delta]

Reporte generado automáticamente. Datos al [fecha].
```

ENVÍO POR SLACK:
- Usar Incoming Webhook (la URL viene de una variable de entorno llamada SLACK_WEBHOOK_URL)
- Enviar al canal configurado en el webhook
- Si Slack falla, intentar envío por email como fallback

ENVÍO POR EMAIL (opcional — incluir aunque no se use de inmediato):
- Usar SMTP con variables de entorno: EMAIL_FROM, EMAIL_TO, EMAIL_PASSWORD, SMTP_HOST, SMTP_PORT
- Asunto: "Reporte de Growth — Semana del [fecha]"
- Cuerpo en texto plano (no HTML) para compatibilidad máxima

PROGRAMACIÓN AUTOMÁTICA:
Incluye al final del script las instrucciones exactas para programarlo:
- En Mac/Linux: cron job para ejecutar cada lunes a las 8am
- En Windows: Task Scheduler
- Alternativa sin servidor: Google Apps Script con trigger temporal (incluir código alternativo)

VARIABLES DE ENTORNO REQUERIDAS:
Incluye un archivo .env.example con todas las variables necesarias y una línea de descripción de cada una.

Genera el script completo con todos los comentarios necesarios para que alguien sin experiencia en Python pueda instalarlo y configurarlo.
```

---

### Cómo configurarlo (resumen rápido)

1. Guarda el script que generó Claude Code como `reporte_growth.py`
2. Crea el archivo `.env` con tus credenciales (Claude Code te indica cuáles)
3. Para Slack: ve a tu workspace → Apps → Incoming Webhooks → Add to Slack → copia la URL → pégala en el `.env`
4. Para Google Sheets: sigue las instrucciones de autenticación con gspread que incluye el script
5. Prueba corriendo `python reporte_growth.py` manualmente — verifica que llega el mensaje
6. Programa el cron job o Task Scheduler según las instrucciones del script

**Tiempo total:** 15–20 minutos la primera vez. Después corre solo.

---

## HERRAMIENTA 3 — Sistema de Alertas de Growth por Slack

### Qué hace
Un script de Python que lee tus métricas desde el mismo Google Sheet del reporte semanal, compara cada métrica contra umbrales que tú defines, y manda una alerta a Slack si alguna métrica cruza el umbral. Corre diariamente (o con la frecuencia que elijas) y solo genera ruido cuando hay algo que atender.

### Qué necesitas preparar antes de pegar el prompt

**Define tus umbrales de alerta** — para cada métrica, el valor que te haría tomar acción inmediata:

```
Ejemplo:
| Métrica              | Umbral de alerta              | Dirección |
|----------------------|-------------------------------|-----------|
| CAC                  | > $100 (cualquier semana)     | Alerta si SUBE |
| Tasa de activación   | < 35%                         | Alerta si BAJA |
| Churn mensual        | > 5%                          | Alerta si SUBE |
| Open rate emails     | < 18%                         | Alerta si BAJA |
| MRR                  | delta semana-a-semana < -5%   | Alerta si BAJA |

Tus umbrales:
| Métrica              | Umbral de alerta              | Dirección |
|----------------------|-------------------------------|-----------|
| ________________     | ______________________        | Alerta si SUBE/BAJA |
| ________________     | ______________________        | Alerta si SUBE/BAJA |
| ________________     | ______________________        | Alerta si SUBE/BAJA |
| ________________     | ______________________        | Alerta si SUBE/BAJA |
| ________________     | ______________________        | Alerta si SUBE/BAJA |
```

**¿Con qué frecuencia quieres que corra?**
```
[ ] Diariamente (recomendado para métricas de adquisición y activación)
[ ] Lunes y jueves
[ ] Solo los lunes (junto con el reporte semanal)
```

---

### Prompt para Claude Code — Sistema de Alertas de Growth por Slack

```
Eres un desarrollador de Python especializado en sistemas de monitoreo para equipos de Growth.

Tu tarea: construir un sistema de alertas de Growth que detecta cuando una métrica clave cae fuera del umbral definido y notifica a un canal de Slack.

INSTRUCCIONES TÉCNICAS:
- Python 3.8+
- Librerías permitidas: gspread (Google Sheets), slack_sdk, datetime, os, json
- Variables de entorno para credenciales — nunca hardcodeadas
- El script es idempotente: si lo corres dos veces el mismo día, no manda la misma alerta dos veces
- Manejo de errores robusto: si el Sheet no tiene datos, el script lo registra en un log y termina limpiamente
- Incluye un archivo de log rotativo (overwrite diario) para diagnóstico

FUENTE DE DATOS:
Mismo Google Sheet del reporte semanal — misma estructura.
El script lee siempre la última fila de datos disponible.

MÉTRICAS Y UMBRALES (reemplaza con los tuyos):
Define cada métrica como un objeto con:
- nombre: nombre de la métrica
- columna_sheet: letra de la columna en el Sheet (B, C, D...)
- umbral: el valor límite
- direccion: "sube" (alerta si el valor sube por encima del umbral) o "baja" (alerta si cae por debajo)
- prioridad: "alta" (alerta inmediata) o "media" (resumen diario)
- accion_sugerida: texto con la primera acción que el equipo debe tomar

Ejemplo de configuración que el script debe permitir editar sin tocar el código Python:
```json
[
  {
    "nombre": "CAC",
    "columna_sheet": "C",
    "umbral": 100,
    "unidad": "$",
    "direccion": "sube",
    "prioridad": "alta",
    "accion_sugerida": "Revisar CPCs de campañas activas y pausar las de peor rendimiento"
  },
  {
    "nombre": "Tasa de activación",
    "columna_sheet": "D",
    "umbral": 35,
    "unidad": "%",
    "direccion": "baja",
    "prioridad": "alta",
    "accion_sugerida": "Revisar drop-off en paso 3 del onboarding — comparar con semana anterior"
  },
  {
    "nombre": "Churn mensual",
    "columna_sheet": "E",
    "umbral": 5,
    "unidad": "%",
    "direccion": "sube",
    "prioridad": "alta",
    "accion_sugerida": "Revisar segmento con mayor churn — identificar patrón de comportamiento previo"
  },
  {
    "nombre": "Open rate emails",
    "columna_sheet": "F",
    "umbral": 18,
    "unidad": "%",
    "direccion": "baja",
    "prioridad": "media",
    "accion_sugerida": "Revisar asuntos de los últimos 3 emails — posible fatiga de audiencia"
  },
  {
    "nombre": "MRR delta semanal",
    "columna_sheet": "G",
    "umbral": -5,
    "unidad": "%",
    "direccion": "baja",
    "prioridad": "alta",
    "accion_sugerida": "Revisar cancelaciones de la semana y detectar patrón de comportamiento previo al churn"
  }
]
```

Este JSON debe estar en un archivo separado llamado `alertas_config.json` que el usuario puede editar sin tocar el script principal.

LÓGICA DE ALERTAS:
1. Lee la última fila del Google Sheet
2. Para cada métrica en la configuración:
   a. Obtiene el valor actual de la columna correspondiente
   b. Compara contra el umbral según la dirección definida
   c. Si cruza el umbral, agrega la alerta a una lista de alertas pendientes
3. Si hay alertas de prioridad "alta": manda mensaje inmediato a Slack por cada una
4. Si solo hay alertas de "media": agrega al resumen diario
5. Si no hay alertas: no manda nada (sin ruido)
6. Registra en el log: fecha, métricas revisadas, alertas enviadas

FORMATO DEL MENSAJE DE ALERTA EN SLACK (para alertas de prioridad alta):
```
🚨 ALERTA DE GROWTH — [Métrica] — [Fecha] [Hora]

Valor actual: [valor][unidad]
Umbral definido: [umbral][unidad]
Variación: [delta vs umbral]

Acción sugerida:
[accion_sugerida del config]

— Sistema de alertas automático
```

FORMATO DEL RESUMEN DIARIO (para alertas de prioridad media — enviar a las 6pm):
```
📋 RESUMEN DE ALERTAS GROWTH — [Fecha]

Las siguientes métricas requieren atención:
• [Métrica]: [valor actual] (umbral: [umbral])
  → [accion_sugerida]

[Si no hay alertas de media: "Todas las métricas de seguimiento están dentro del rango definido."]
```

ANTI-DUPLICACIÓN:
- El script guarda en un archivo local `alertas_enviadas.json` la fecha y las alertas enviadas ese día
- Si al correr de nuevo el mismo día detecta la misma alerta ya enviada, no la reenvía
- El archivo se resetea automáticamente cada día a medianoche

CONFIGURACIÓN SLACK:
- Incoming Webhook URL en variable de entorno: SLACK_WEBHOOK_URL_ALERTAS
- Puede ser el mismo canal que el reporte o uno diferente (recomendado: canal #alertas-growth separado)

INSTALACIÓN Y PROGRAMACIÓN:
Al final del script, incluye instrucciones comentadas para:
- Instalar las dependencias con pip
- Configurar las variables de entorno
- Crear el archivo alertas_config.json con los umbrales del usuario
- Programar el script para que corra diariamente a las 9am y a las 6pm
  (9am: revisa alertas de prioridad alta; 6pm: envía resumen de prioridad media)

También incluye un modo de prueba: si se ejecuta con el flag --test, usa datos ficticios y muestra el output en consola sin mandar nada a Slack.

Genera el script completo, el archivo alertas_config.json de ejemplo y el archivo .env.example.
```

---

### Cómo configurarlo (resumen rápido)

1. Guarda los archivos que generó Claude Code: `alertas_growth.py`, `alertas_config.json`, `.env.example`
2. Crea tu `.env` con las credenciales (copia `.env.example` y llena los valores)
3. Edita `alertas_config.json` con tus métricas reales y tus umbrales reales
4. Para Slack: crea un segundo Incoming Webhook para el canal `#alertas-growth` (separado del reporte)
5. Prueba con `python alertas_growth.py --test` — verifica el output en consola
6. Prueba sin el flag `--test` — verifica que llega a Slack
7. Programa con cron: 9am para alta prioridad, 6pm para resumen

**Tiempo total:** 20–25 minutos la primera vez. Después es autónomo.

---

## Resumen de las 3 herramientas

| Herramienta | Qué hace | Frecuencia | Dónde vive |
|---|---|---|---|
| Tracker de experimentos | Registra hipótesis, estado y aprendizajes | Manual (tú agregas cada experimento) | Google Sheets |
| Reporte semanal | Agrega métricas y las manda al equipo | Automático — cada lunes a las 8am | Script Python + Slack/Email |
| Sistema de alertas | Detecta anomalías y avisa antes de que escalen | Automático — diario | Script Python + Slack |

Las tres comparten la misma fuente de datos (tu Google Sheet de métricas).
Las tres funcionan sin que vuelvas a tocar el código.

---

**Siguiente módulo:** Growth Estratégico con IA — pasar de operar herramientas a tomar decisiones de Growth con Claude como co-piloto estratégico.
