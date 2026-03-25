# DEMO PASO A PASO — Sistema de Growth completo operando en vivo
**Clase 12 · Instructores A + B + C · Módulo 04**

---

## Setup antes de grabar

- [ ] Cada instructor tiene su tablero de Notion abierto con datos REALES de esta semana
- [ ] Cada instructor tiene Claude abierto con sus Projects activos
- [ ] Los outputs que se van a mostrar son de ayer o hoy — sin preparar ni embellecer
- [ ] Pantalla compartida lista para alternar entre los tres setups

---

## DEMO INSTRUCTOR A — Diagnóstico y decisión en tiempo real

**Paso 1 — Abrir el tablero de Growth OS**
- Abrir Notion → tablero principal
- Mostrar el Brief de la Semana en la parte superior
- Leerlo en voz alta: foco, métrica norte, experimento activo, contexto de la semana pasada
- *Deberías ver en pantalla: una tabla con 4-5 filas, texto real, sin lorem ipsum*

**Paso 2 — Abrir el output real del Agente de Análisis**
- Abrir Claude → Project "Agente de Análisis"
- Abrir la última conversación (de ayer o esta mañana)
- Hacer scroll por el diagnóstico sin editar
- *Deberías ver en pantalla: un output de Claude con diagnosis en puntos numerados y recomendaciones*

**Paso 3 — Mostrar la decisión que tomaste a partir del output**
- Abrir el Project del Agente de Adquisición
- Abrir nueva conversación
- Pegar el prompt de acción derivado del diagnóstico:

```
El tiempo de activación subió de 4 a 6 días esta semana. Hipótesis: el email de día 1 del onboarding no genera la primera acción. Reescribe el email de día 1 con foco en reducir fricción del primer paso. El primer paso es: [completar la integración con Slack]. Máx 150 palabras. Un solo CTA.
```

- *Deberías ver en pantalla: Claude generando un email reescrito, listo para copiar y pegar en la herramienta de email*

**Paso 4 — Mostrar que el email ya está en producción**
- Abrir la herramienta de email (Klaviyo / Customer.io / HubSpot)
- Mostrar el email de día 1 con la versión actualizada cargada
- *Deberías ver en pantalla: el email en el flujo de automatización, activo, con la fecha de hoy*

---

## DEMO INSTRUCTOR B — El sistema con equipo

**Paso 5 — Mostrar el tablero compartido del equipo**
- Abrir Notion → tablero compartido
- Mostrar las columnas: Agente de Adquisición / Retención / Análisis / Contenido
- Mostrar que cada columna tiene outputs de esta semana
- *Deberías ver en pantalla: un tablero con 4 columnas y filas con outputs reales de lunes a hoy*

**Paso 6 — Abrir un Skill en uso**
- Abrir la biblioteca de Skills en Notion
- Abrir Skill 03 "Reporte Semanal"
- Mostrar el output guardado de ayer:

```
Skill: Reporte Semanal de Growth
Inputs usados: [métricas de la semana]
Output: [resumen con CAC por canal, conversión por etapa, top 3 experimentos]
Tiempo de ejecución: 5 minutos
```

- *Deberías ver en pantalla: el skill documentado + el output de esta semana pegado debajo*

**Paso 7 — Mostrar cómo el equipo usa el skill sin instrucción**
- Abrir el Skill desde la perspectiva de un miembro del equipo
- Ejecutarlo en Claude con los datos de esta semana
- *Deberías ver en pantalla: el prompt del skill con variables rellenadas + el output de Claude*

---

## DEMO INSTRUCTOR C — El sistema mínimo viable (founder solo)

**Paso 8 — Mostrar el Project único con foco de semana**
- Abrir Claude → el único Project del sistema
- Abrir Project Instructions
- Leer la sección "Foco de esta semana" en voz alta
- *Deberías ver en pantalla: instrucciones de sistema con una sección destacada que dice "Foco: retención — semana del [fecha]"*

**Paso 9 — Mostrar la sesión matutina de hoy (3 prompts, 10 minutos)**
- Abrir nueva conversación en el Project
- Pegar el prompt de diagnóstico rápido:

```
Dame el diagnóstico de retención de esta semana basándote en estos datos:
- Churn rate: 3.2% (vs 2.8% semana pasada)
- NPS: 42 (vs 45 mes pasado)
- 3 tickets de cancelación — razón declarada: "precio"

¿Es el precio la causa real o hay otra causa detrás? Dame 2 hipótesis y la acción que tomaría hoy para investigar.
```

- Mostrar el output completo
- *Deberías ver en pantalla: diagnóstico de Claude con 2 hipótesis priorizadas + acción concreta*

**Paso 10 — Mostrar el borrador de mensaje para clientes en riesgo**
- En la misma conversación, pegar:

```
Basándote en el diagnóstico anterior, escribe el mensaje que enviaría hoy por WhatsApp o email a los 3 clientes que cancelaron esta semana. El objetivo: entender si el precio es la razón real o hay otra fricción. Tono: founder directo, sin scripts de ventas. Máx 80 palabras.
```

- *Deberías ver en pantalla: un mensaje conversacional, personalizable, listo para enviar*

---

## DEMO FINAL — El plan de 7 días

**Paso 11 — Abrir el entregable de la clase**
- Abrir el entregable.md de esta clase (o la versión en Notion)
- Recorrer el plan de 7 días en pantalla
- *Deberías ver en pantalla: 7 días con criterio de éxito específico para cada uno*

**Paso 12 — Cerrar con el tablero operando**
- Volver al tablero de Notion (Instructor A o B)
- Mostrar el estado del sistema completo: Brief + Agentes + Skills + Experimento activo
- *Deberías ver en pantalla: un tablero con todas las secciones activas, datos reales de esta semana*
