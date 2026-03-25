# TU TAREA — hazlo ahora (tarda 35 minutos)

---

☐ **Crea tu Google Sheet base → agrega los datos de las últimas 2 semanas**

Abre sheets.new. Crea la hoja "Métricas" con estas columnas: `Semana | Canal | Inversión | Conversiones | CAC | Activación_% | Conversión_Trial_Pago_%`. Agrega datos de las últimas 2 semanas de tus canales principales. Si no tienes datos reales, usa los datos de ejemplo del demo.

---

☐ **Abre Claude → pega este prompt → copia el script generado**

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
5. Generar un resumen de texto y guardarlo en una nueva hoja llamada "Reportes" — una fila por semana
6. Incluir las instrucciones para programarlo con un trigger de Apps Script cada lunes a las 8am

Genera el Google Apps Script completo listo para instalar.
```

---

☐ **Instala el script en tu Google Sheet → ejecútalo → verifica la hoja Reportes**

En el Google Sheet: Extensiones → Apps Script → borra el código por defecto → pega el script → guarda → ejecuta → autoriza. Vuelve al Sheet y verifica que aparece la hoja "Reportes" con el primer resumen generado.

---

☐ **Configura el trigger automático → lunes 8am**

En el editor de Apps Script, haz clic en el ícono de reloj → Add Trigger → selecciona la función del reporte → Time-driven → Week timer → lunes → 8am-9am → Save.

---

☐ **Abre Claude → pega este prompt de alertas → instala el script en el mismo Sheet**

```
Crea un Google Apps Script que funcione como sistema de alertas de Growth.

El script lee la hoja "Métricas" del mismo Google Sheet y compara la última semana con la anterior.

Alertas configuradas:
1. CAC de cualquier canal sube más de 20% semana a semana → ALERTA ALTA
2. Tasa de activación cae por debajo de 35% → ALERTA ALTA
3. Conversión de trial a pago cae más de 3 puntos porcentuales → ALERTA MEDIA
4. CAC blended supera $120 → ALERTA ALTA

Formato del mensaje de Slack para cada alerta:
🚨 ALERTA DE GROWTH — [Nombre de la métrica]
Valor actual: [valor]
Valor semana anterior: [valor]
Variación: [delta]
Acción sugerida: [primera acción a tomar]

Si no hay alertas, el script no envía nada.

La URL del webhook de Slack va en una constante SLACK_WEBHOOK_URL al inicio del script, con instrucciones comentadas de cómo obtenerla.

Incluye instrucciones para programarlo con trigger diario a las 9am.

Genera el Google Apps Script completo.
```

---

☐ **Configura el webhook de Slack → pégalo en el script → ejecuta para probar**

En Slack: workspace → Apps → Incoming WebHooks → Add to Slack → elige el canal `#alertas-growth` (créalo si no existe) → copia la URL. En el editor de Apps Script, reemplaza el valor placeholder de `SLACK_WEBHOOK_URL` con la URL real. Ejecuta y verifica que llega un mensaje de prueba a Slack.

---

☐ **Abre Claude → pega este prompt del tracker → instala en el mismo Sheet**

```
Crea un Google Apps Script que construya un tracker de experimentos de Growth en Google Sheets.

Al ejecutarse, el script debe crear una hoja llamada "Tracker Experimentos" con estas columnas:
A: ID | B: Fecha inicio | C: Fecha fin estimada | D: Área (dropdown: Adquisición, Activación, Retención, Revenue, Referral) | E: Hipótesis | F: Canal (dropdown: Meta Ads, Google Ads, Email, Onboarding, Pricing page, Otro) | G: Métrica primaria | H: Baseline | I: Target | J: Resultado actual | K: % mejora (fórmula =(J-H)/H*100) | L: Estado (dropdown: En diseño, Activo, En análisis, Concluido, Archivado) | M: Resultado final (dropdown: Ganó, Perdió, Inconcluso, En curso) | N: Aprendizaje clave | O: Próximo experimento

Formato encabezado fila 1: negrita, fondo #1a1a2e, texto blanco.
Colores condicionales en columna L: "En diseño" → #E3F2FD | "Activo" → #FFF9C4 | "Concluido" → #E8F5E9
Colores condicionales en columna M: "Ganó" → fondo #4CAF50 texto blanco | "Perdió" → fondo #F44336 texto blanco

Incluye 3 filas de ejemplo ficticias realistas de experimentos de Growth SaaS B2B con fondo #F5F5F5.
Crea también una hoja "Resumen" con: total experimentos por área, tasa de éxito global, experimentos activos.

Genera el Google Apps Script completo con instrucciones de instalación comentadas.
```

---

☐ **Agrega tu primer experimento real al tracker**

En la hoja "Tracker Experimentos", agrega la fila 5 (después de las de ejemplo) con un experimento real que tengas activo o en planificación. Llena al menos: Área, Hipótesis, Canal, Métrica primaria, Baseline, Target y Estado.

---

**Sabrás que lo hiciste bien cuando:**

1. La hoja "Reportes" tiene al menos una fila con el resumen generado automáticamente a partir de tus datos de la hoja Métricas.
2. Hay un trigger activo en Apps Script configurado para correr cada lunes a las 8am.
3. El script de alertas está instalado con tu URL de webhook de Slack real y enviaste al menos un mensaje de prueba al canal.
4. La hoja "Tracker Experimentos" tiene los encabezados formateados, los dropdowns funcionando y al menos un experimento real registrado.
