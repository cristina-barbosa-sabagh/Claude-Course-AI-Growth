# Tu equipo de agentes: roles especializados que trabajan en paralelo — GUIÓN EN PANTALLA
**Instructor B · 16 minutos · Módulo 04**

---

## 1. Configuro el Agente de Adquisición desde cero

Abro Claude. Voy a crear un nuevo Project — este será el Agente de Adquisición.

[ACCIÓN EN PANTALLA: abrir claude.ai, hacer clic en "New Project", escribir el nombre "Acme — Agente Adquisición" y confirmar la creación]

Dentro del Project, hago clic en "Project Instructions". Aquí es donde vive el cerebro del agente — sus instrucciones de sistema. Lo que ponga aquí define qué piensa, cómo responde y, tan importante como eso, qué se niega a responder.

[ACCIÓN EN PANTALLA: hacer clic en "Project Instructions" o el ícono de configuración del Project, mostrar el campo de texto vacío de instrucciones]

Pego el system prompt completo del Agente de Adquisición:

```
Eres el Agente de Adquisición de Acme (SaaS de gestión de proyectos para agencias).

Tu único foco es traer más usuarios calificados al menor costo posible.
No opinas sobre retención, onboarding, producto ni revenue de usuarios existentes.
Si te preguntan sobre esas áreas, rediriges: "Eso es territorio del Agente de Retención / Agente de Revenue. Mi foco es adquisición."

CONTEXTO DEL NEGOCIO:
- Producto: herramienta de gestión de proyectos para agencias creativas de 10-50 personas
- ICP: directores creativos y project managers que gestionan 5+ proyectos simultáneos
- Ticket promedio: $149/mes
- Canales de adquisición activos: Meta Ads (CAC actual $48), Google Ads (CAC actual $71), referidos orgánicos (CAC $12)
- CAC objetivo: $40 promedio ponderado
- Presupuesto mensual de paid: $8,500
- Mercados: México, Colombia, Argentina, España

LO QUE HACES:
- Analizar el rendimiento de campañas pagas e identificar qué optimizar esta semana
- Generar copies y ángulos para tests de adquisición en Meta y Google
- Identificar canales de adquisición sin explotar para este ICP
- Calcular CAC por canal y proponer ajustes de presupuesto con lógica clara
- Crear briefs de creatividades para el equipo de diseño
- Detectar señales de saturación de audiencia en canales activos

CÓMO RESPONDER:
- Sé específico. Si te doy métricas, úsalas. No des recomendaciones genéricas.
- Cuando generes copies, dame siempre más de una variación con ángulos diferentes.
- Prioriza lo que se puede ejecutar esta semana sobre lo que requiere planificación larga.
- Formato: bullet points accionables, tablas cuando compares opciones.

RESTRICCIONES:
- No recomiendes cambios de producto.
- No propongas estrategias de retención de usuarios existentes.
- No generes reportes que incluyan métricas de retención o revenue.
```

[ACCIÓN EN PANTALLA: pegar el texto en el campo de instrucciones, hacer scroll para mostrar que está completo, hacer clic en "Save" o "Confirm"]

Guardo las instrucciones. El Agente de Adquisición existe ahora. Tiene su rol, su contexto de negocio específico y sus restricciones.

---

## 2. Verifico que el agente piensa como especialista

Antes de usarlo para una tarea real, verifico que las instrucciones están funcionando.

[ACCIÓN EN PANTALLA: hacer clic en "New Conversation" dentro del Project del Agente de Adquisición, mostrar el chat vacío]

Escribo este prompt de verificación:

```
¿Qué entiendes sobre nuestra estrategia de adquisición actual y cuál crees que es el mayor cuello de botella basándote en el contexto que tienes?
```

[ACCIÓN EN PANTALLA: enviar el prompt, esperar el output]

El agente menciona el CAC de Google ($71) como fuera del objetivo ($40), menciona los canales activos específicos, sugiere que los referidos orgánicos ($12 CAC) están subexplotados. No habla de onboarding ni de retención.

Eso es exactamente lo que quiero. Un especialista que piensa en su área, con los datos específicos de este negocio.

[ACCIÓN EN PANTALLA: hacer scroll por el output mostrando que el agente responde con los datos específicos del contexto cargado]

---

## 3. Configuro el Agente de Retención

Abro una nueva pestaña del navegador. Voy a crear el segundo Project.

[ACCIÓN EN PANTALLA: abrir nueva pestaña, ir a claude.ai, crear nuevo Project con el nombre "Acme — Agente Retención"]

Entro en Project Instructions y pego el system prompt del Agente de Retención:

```
Eres el Agente de Retención de Acme (SaaS de gestión de proyectos para agencias).

Tu único foco es que los usuarios que ya tenemos se queden más tiempo, activen las features del producto y reduzcan su probabilidad de churn.
No trabajas en adquisición de nuevos usuarios ni en estrategias de revenue expansion activa.

CONTEXTO DEL NEGOCIO:
- Producto: herramienta de gestión de proyectos para agencias creativas de 10-50 personas
- ICP: directores creativos y project managers
- "Aha moment": cuando el usuario crea su primer proyecto con todo el equipo conectado y ve el estado en tiempo real (ocurre en los días 2-4 del onboarding)
- Tasa de activación actual (primeros 7 días): 38%
- Tasa de retención a 30 días: 71%
- Tasa de retención a 90 días: 58%
- Churn mensual actual: 4.2%
- Principal razón de churn: "no lo usa suficiente el equipo" (62% de las respuestas a la encuesta de salida)
- Herramientas de comunicación disponibles: Klaviyo (email), notificaciones in-app (Intercom), no hay SMS

LO QUE HACES:
- Diseñar y optimizar flujos de onboarding (emails, tooltips, mensajes in-app)
- Identificar señales de alerta temprana de churn y proponer intervenciones
- Crear secuencias de email de activación, reactivación y rescate
- Proponer cambios de UX de bajo esfuerzo para mejorar la experiencia de activación
- Diseñar programas de customer success escalables

CÓMO RESPONDER:
- Basa las recomendaciones en comportamiento de usuario, no en intenciones declaradas.
- Cuando diseñes secuencias de email: asunto + preview + cuerpo + CTA + condición de envío.
- Prioriza intervenciones de bajo esfuerzo y alto impacto.

RESTRICCIONES:
- No trabajes en estrategias de adquisición de usuarios nuevos.
- No propongas cambios de pricing o upsell activo.
- No recomiendes cambios de producto que requieran desarrollo significativo sin señalarlo.
```

[ACCIÓN EN PANTALLA: pegar el system prompt completo, guardarlo]

Ahora tengo dos agentes activos en dos pestañas del navegador.

---

## 4. Configuro el Agente de Analytics

[ACCIÓN EN PANTALLA: abrir tercera pestaña, crear nuevo Project "Acme — Agente Analytics"]

Project Instructions — pego el system prompt:

```
Eres el Agente de Analytics de Acme (SaaS de gestión de proyectos para agencias).

Tu único foco es interpretar datos y convertirlos en decisiones accionables.
No generas copies, no diseñas campañas, no propones estrategias sin datos que las soporten.

CONTEXTO DEL NEGOCIO:
- Producto: SaaS de gestión de proyectos para agencias creativas
- Modelo de negocio: SaaS con planes $49/mes (básico) y $149/mes (pro)
- MRR actual: $184,000
- Métricas que monitoreo semanalmente: MRR, CAC por canal, tasa de activación 7 días, retención 30/90 días, churn mensual, NPS
- Herramientas de datos: Mixpanel (comportamiento), Stripe (revenue), Google Analytics (tráfico), hojas de cálculo para reporting
- Benchmark de industria: churn SaaS B2B < 3% mensual, activación > 55%, retención 30 días > 75%

LO QUE HACES:
- Interpretar métricas y detectar anomalías vs. baseline histórico y benchmark de industria
- Calcular el impacto en MRR de mejorar cada etapa del funnel (mostrar el cálculo)
- Priorizar experimentos por relación impacto/esfuerzo con justificación cuantitativa
- Generar el diagnóstico semanal del funnel
- Diseñar el framework de medición de un experimento antes de lanzarlo

CÓMO RESPONDER:
- Usa números siempre. Una recomendación sin número no es una recomendación de análisis.
- Cuando detectes una anomalía, da 3 hipótesis sobre por qué ocurrió.
- Muestra el cálculo cuando calcules impacto, no solo el resultado.
- Semáforo al final de cada diagnóstico: Verde / Amarillo / Rojo con justificación en 1 línea.

RESTRICCIONES:
- No hagas recomendaciones de canal o copy sin datos que las soporten.
- No asumas datos que no tienes — pregunta antes de responder.
- No generes copies o contenido de marketing.
```

[ACCIÓN EN PANTALLA: pegar el system prompt, guardarlo, mostrar la tercera pestaña con el agente configurado]

Tres agentes activos. Tres pestañas. Cada uno con su rol, su contexto y sus restricciones.

---

## 5. Ejecuto los tres agentes en paralelo para el mismo brief

Ahora el momento clave. Tengo un brief real: lanzamos la feature "reportes automáticos" el jueves. Necesito tres cosas: copies para anunciarla, flujo de onboarding para que los usuarios la activen, y proyección de impacto para el board.

Voy al Agente de Adquisición primero.

[ACCIÓN EN PANTALLA: cambiar a la pestaña del Agente de Adquisición, abrir nueva conversación, pegar el siguiente prompt]

```
Nueva feature que lanzamos el jueves: "reportes automáticos"
— genera reportes de estado del proyecto en 1 clic, sin configuración manual
— ahorra aproximadamente 45 minutos por semana a los project managers

Necesito copies para anunciar la feature a:
1. Usuarios activos en el producto (email + notificación in-app)
2. Leads en nurturing que no convirtieron en los últimos 60 días (email de reactivación — esta feature puede ser el motivo que les faltaba para convertir)

Para cada formato:
- Asunto + preview (email) o headline (notificación in-app) — máx 55 caracteres
- Copy principal — máx 100 palabras
- CTA específico y medible

Tono: orientado al tiempo que ahorra, no a la tecnología. Sin jerga de producto.
```

[ACCIÓN EN PANTALLA: enviar el prompt, esperar el output, hacer scroll mostrando los copies diferenciados para usuarios activos y para leads en nurturing]

El Agente de Adquisición generó copies separados para los dos segmentos. El email a usuarios activos usa el beneficio de tiempo. El email de reactivación usa la novedad como razón para volver. No me habló de onboarding ni de churn.

[ACCIÓN EN PANTALLA: copiar el output, cambiarlo a un bloc de notas o Notion para guardarlo]

Ahora voy al Agente de Retención.

[ACCIÓN EN PANTALLA: cambiar a la pestaña del Agente de Retención, abrir nueva conversación, pegar el siguiente prompt]

```
Lanzamos la feature "reportes automáticos" el jueves.
Necesito el flujo de onboarding para maximizar activación en los primeros 7 días.

Diseña:
1. El trigger de activación (qué comportamiento del usuario dispara el onboarding de esta feature)
2. El mensaje de primer contacto in-app (tooltip o modal — copy + CTA)
3. Secuencia de 3 emails para usuarios que no activan en 48h:
   — Email 1: a las 48h de no activar
   — Email 2: a los 5 días
   — Email 3: a los 7 días (último intento)
   Para cada email: asunto + preview + cuerpo máx 120 palabras + CTA
4. Email de confirmación cuando activan la feature por primera vez

Objetivo: 60% de usuarios activos activan la feature en 7 días.
Restricción: sin cambios de UI — solo emails y mensajes in-app con los templates existentes en Intercom y Klaviyo.
```

[ACCIÓN EN PANTALLA: enviar el prompt, esperar el output, hacer scroll mostrando el flujo completo — trigger, mensajes in-app y secuencia de 3 emails]

El Agente de Retención entregó el flujo completo. Trigger definido, mensaje de primer contacto, tres emails con timing y CTAs específicos, email de confirmación. No mencionó campañas pagas.

Ahora el Agente de Analytics.

[ACCIÓN EN PANTALLA: cambiar a la pestaña del Agente de Analytics, abrir nueva conversación, pegar el siguiente prompt]

```
Nueva feature lanzando el jueves: "reportes automáticos" — exclusiva del plan Pro ($149/mes).
Los usuarios del plan básico ($49/mes) la ven pero necesitan upgrade para acceder.

Contexto actual:
- 2,400 usuarios activos totales
- 65% en plan básico (1,560 usuarios)
- 35% en plan pro (840 usuarios)
- Churn mensual: 4.2%
- MRR actual: $184,000

Proyecta:
1. Cuántos usuarios del plan básico podrían hacer upgrade por esta feature (escenario conservador: 3% de básicos; escenario optimista: 8% de básicos)
2. Impacto en MRR de esos upgrades — muestra el cálculo
3. Impacto en churn del plan pro si los usuarios que activan features premium retienen mejor (hipótesis: churn pro baja de 4.2% a 3.1%)
4. MRR projection a 90 días — ambos escenarios con las asunciones explícitas

Muestra todos los cálculos. No des solo el número final.
```

[ACCIÓN EN PANTALLA: enviar el prompt, esperar el output, hacer scroll mostrando los cálculos y la proyección con dos escenarios]

La proyección de MRR. Dos escenarios. Los cálculos visibles. Eso es el slide del CEO.

---

## 6. Coordino los outputs en el tablero

Ahora abro Notion y pego los tres outputs en el tablero de coordinación.

[ACCIÓN EN PANTALLA: abrir Notion, ir a la página "Acme — Sala de Guerra Growth", mostrar la tabla con columnas por agente]

En la columna del Agente de Adquisición pego los copies. En la columna del Agente de Retención pego el flujo de onboarding. En la columna del Agente de Analytics pego la proyección.

[ACCIÓN EN PANTALLA: pegar cada output en la columna correspondiente de la tabla de Notion]

Ahora el tablero muestra en un vistazo todo lo que necesito para el lanzamiento del jueves: qué decirle a los usuarios, cómo activar la feature, y cuánto impacto en MRR puede generar. Tres agentes. Veinte minutos. Sin reuniones de coordinación.

---

## 7. Lo que acabas de ver

[ACCIÓN EN PANTALLA: mostrar las tres pestañas del navegador con los agentes y la pestaña de Notion, todo visible]

Tres agentes especializados configurados con el contexto real de un negocio. Cada uno con su rol, sus restricciones y su forma de responder. Ejecutados en paralelo para el mismo brief. Outputs coordinados en Notion.

Tu tarea de esta clase es configurar los tres agentes en tres Projects separados. Los system prompts están en el entregable — listos para pegar y personalizar con tu contexto real.

No esperes tener el contexto perfecto para empezar. Las instrucciones mejoran con el uso. Empieza con lo que tienes hoy.

La próxima clase es la última del curso: los tres instructores muestran sus sistemas operando en vivo con datos reales de esta semana.

[ACCIÓN EN PANTALLA: mostrar la tabla de Notion con los tres outputs guardados como imagen de cierre]
