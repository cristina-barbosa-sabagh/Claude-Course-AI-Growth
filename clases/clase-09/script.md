# Clase 09 — Automatiza tu Growth: reportes, alertas y trackers sin tocar código
**Instructor B · 16 minutos · Módulo 03**

---

## GUIÓN COMPLETO

---

### INTRO — [0:00–1:00]

*(Pantalla: slide con título de la clase. Instructor en cámara.)*

Hay una pregunta que se hacen todos los Chiefs of Growth en algún momento:

¿Por qué tengo que exportar datos a mano, armar el reporte en un Google Sheet, copiar los números de tres plataformas distintas y mandarlo por Slack cada lunes?

Eso no es Growth. Eso es administración.

Hoy construimos las tres herramientas que eliminan esa administración:
un tracker de experimentos, un reporte semanal automático y un sistema de alertas que te avisa antes de que el problema sea grande.

Los tres con Claude Code. Los tres sin tocar código después de que Claude Code los genera.

Dieciséis minutos. Empezamos.

---

### DESARROLLO 1 — El tracker de experimentos conectado a Google Sheets [1:00–6:00]

*(Pantalla: slide "Tracker de experimentos — qué es y por qué lo necesitas")*

Un tracker de experimentos de Growth tiene un solo trabajo:
que cualquier miembro del equipo pueda responder en 30 segundos estas cuatro preguntas:

- ¿Qué estamos testeando ahora mismo?
- ¿Cuál es la hipótesis detrás de cada experimento?
- ¿Cuáles son los resultados de lo que ya terminó?
- ¿Qué aprendimos y cómo cambió nuestra estrategia?

La mayoría de equipos no puede responder ninguna de las cuatro.
No porque no hagan experimentos — sino porque no los registran de forma sistemática.

---

*(Pantalla: slide "La estructura del tracker")*

El tracker que vamos a construir con Claude Code tiene estas columnas:

1. **ID del experimento** — número secuencial, para referencia rápida
2. **Fecha de inicio**
3. **Área** — adquisición, activación, retención, revenue, referral
4. **Hipótesis** — "Creemos que [cambio] para [segmento] resultará en [resultado] porque [razón]"
5. **Canal o punto de contacto** — Meta, email, onboarding, pricing page, etc.
6. **Métrica primaria** — la única que determina si el experimento ganó o perdió
7. **Baseline** — el valor actual de esa métrica antes del experimento
8. **Target** — el valor que necesitas ver para declarar el experimento exitoso
9. **Estado** — En diseño / Activo / En análisis / Concluido / Archivado
10. **Resultado** — Ganó / Perdió / Inconcluso
11. **Aprendizaje clave** — una sola línea: qué cambió en tu entendimiento del problema
12. **Próximo paso** — qué experimento lanzas basándote en este resultado

---

*(Pantalla: slide "Por qué Google Sheets y no otra herramienta")*

Google Sheets porque:
- Todo el equipo puede acceder sin instalar nada
- Puedes filtrar por estado, área o canal en segundos
- Puedes conectarlo con Google Data Studio para visualizaciones
- No tiene límite de filas que te vaya a importar para un tracker de experimentos
- Y lo más importante: Claude Code sabe generar fórmulas de Sheets perfectas en español

Lo que vamos a construir no es solo la estructura del Sheet.
Claude Code también va a generar:
- Las fórmulas para calcular el porcentaje de mejora automáticamente
- Un sistema de colores condicionales por estado (verde = ganó, rojo = perdió, amarillo = activo)
- Una hoja de resumen con las métricas agregadas de todos los experimentos

Y lo va a hacer con un prompt. En cuatro minutos.

---

### DESARROLLO 2 — El reporte semanal automático y el sistema de alertas de Slack [6:00–11:00]

*(Pantalla: slide "Reporte semanal automático — el problema real")*

El reporte semanal de Growth tiene un problema estructural:
la persona que lo arma es la que menos tiempo tiene para armarlo.

Típicamente: el Chief de Growth o el Founder saca métricas de Meta, de Google, del CRM, del email y las pone en un doc. Eso tarda entre 1 y 3 horas cada semana. 52 semanas al año. Eso son entre 52 y 156 horas al año armando un reporte.

Con Claude Code, ese proceso se convierte en un script de Python de 80 líneas
que corre cada lunes a las 8am y te manda el resumen por email o Slack.

---

*(Pantalla: slide "Qué contiene el reporte automático")*

El script que Claude Code va a construir hace esto:

1. Lee los datos de un Google Sheet donde tienes tus métricas semanales cargadas
   (sí, todavía necesitas cargar los números — pero solo los números, no hacer el análisis)
2. Calcula semana a semana el delta de cada métrica vs. la semana anterior
3. Identifica automáticamente qué métricas subieron, cuáles bajaron y cuánto
4. Genera un resumen de texto con los highlights de la semana
5. Envía ese resumen a un canal de Slack o por email

Lo configuras una vez. Corre solo cada semana.

---

*(Pantalla: slide "El sistema de alertas — Growth en tiempo real")*

Las alertas son la pieza que más valor entrega por esfuerzo.

El concepto es simple: defines un umbral para cada métrica clave.
Si la métrica cae por debajo del umbral, recibes una alerta en Slack.

Ejemplos de alertas de Growth:
- CAC sube más de un 20% semana a semana → alerta inmediata
- Tasa de activación cae por debajo del 40% → alerta
- Open rate de email baja del 20% → alerta
- Churn mensual supera el 5% → alerta de alta prioridad

Claude Code construye un script de Python que:
- Lee tus métricas desde Google Sheets (la misma fuente que el reporte semanal)
- Compara cada métrica contra el umbral que definiste
- Si alguna métrica cruza el umbral, manda un mensaje a Slack con el nombre de la métrica, el valor actual y el umbral definido
- Si todo está dentro del umbral, no hace nada — no hay ruido

El mensaje en Slack tiene este formato:
```
⚠️ ALERTA DE GROWTH — [Fecha]
Métrica: Tasa de activación
Valor actual: 34%
Umbral definido: 40%
Diferencia: -6 puntos porcentuales
Acción sugerida: Revisar flujo de onboarding — paso 3 tiene mayor caída
```

---

*(Pantalla: slide "¿Cómo se conecta Slack sin API keys?")*

Aquí la pregunta que me van a hacer: ¿no necesito un developer para conectar Slack?

No. Slack tiene Incoming Webhooks — una URL que generates en 2 minutos desde la configuración de tu workspace. Pegas esa URL en el script de Claude Code y listo. No hay autenticación compleja, no hay API keys en código, no hay infraestructura que mantener.

El proceso completo:
1. Claude Code genera el script con un placeholder para la URL del webhook
2. Tú vas a Slack → Apps → Incoming Webhooks → creas uno → copias la URL
3. Pegas la URL en el script donde indica Claude Code
4. El script funciona

Dos minutos. Sin código.

---

### DEMO / EJERCICIO EN VIVO — Construir el tracker de experimentos en pantalla [11:00–15:00]

*(Pantalla: Claude Code abierto en terminal)*

Vamos a construir el tracker de experimentos en vivo.
El reporte y las alertas los dejé en el entregable con prompts listos para copiar y pegar — los vamos a ver ahora pero el ejercicio en vivo es el tracker porque es el más visual.

*(Instructor comparte pantalla — ver demo.md para los pasos exactos)*

*(Mientras Claude Code genera la estructura del Sheet)*

Lo que está generando Claude Code ahora son dos cosas al mismo tiempo:
un Google Apps Script que crea la estructura del tracker con todos los encabezados y los formatos,
y las instrucciones paso a paso para instalarlo en tu Google Sheets en menos de 3 minutos.

No tienes que entender el script. Solo tienes que copiarlo y pegarlo en el lugar correcto.

*(Cuando Claude Code termina)*

Tenemos el script. Vamos a Google Sheets a instalarlo.

*(Instructor cambia a Google Sheets, crea un nuevo Sheet, va a Extensiones → Apps Script)*

Pego el script. Ejecuto. Autorizo.

*(El tracker aparece con la estructura completa, colores y fórmulas)*

Eso es el tracker. Con formato, con colores condicionales, con la fórmula de mejora calculada automáticamente.

El primer experimento lo registras tú. Eso sí lo tienes que hacer tú.

---

### CIERRE — [15:00–16:00]

*(Instructor en cámara. Slide con los tres entregables visibles)*

Terminamos el módulo.

En tres clases construiste lo que antes requería un developer y semanas de trabajo:
una landing page publicada, un tracker de experimentos, un reporte automático y un sistema de alertas.

Ninguno de esos requiere que vuelvas a Claude Code para mantenerlos.
Los generaste una vez. Funcionan solos.

Eso es lo que significa tener un laboratorio de Growth sin código:
no que el código desaparezca — sino que tú no tienes que tocarlo nunca más.

El entregable de esta clase tiene los tres briefs listos para copiar y pegar en Claude Code.
Hazlos en orden: primero el tracker, luego el reporte, luego las alertas.
Cada uno tarda menos de 5 minutos de Claude Code más 5 minutos de configuración tuya.

Eso es Growth operado con IA. Nos vemos en el módulo 4.

---

## NOTAS DE PRODUCCIÓN

| Elemento | Detalle |
|---|---|
| Duración objetivo | 16 minutos exactos |
| Slides necesarios | 6: título, estructura del tracker, por qué Google Sheets, reporte semanal, sistema de alertas, flujo de Slack webhook |
| Demo | Claude Code en terminal + Google Sheets en navegador — ver demo.md |
| Ritmo | Desarrollo 1 es denso y detallado (estructura del tracker campo por campo). Desarrollo 2 es más rápido — el concepto es simple. Demo: sin pausa. |
| Tono | Orientado a la eliminación de trabajo manual. El énfasis es "configuras una vez, funciona solo". |
| Énfasis | Pausar en la estructura de las 12 columnas del tracker. Pausar en el cálculo de tiempo perdido en reportes. El webhook de Slack es donde más preguntas va a haber. |
| Riesgo técnico | Tener el script de Google Apps Script ya generado como backup. La autorización de Apps Script puede dar pasos adicionales dependiendo del workspace de Google — prepararse para eso. |
