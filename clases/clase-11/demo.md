# DEMO PASO A PASO — Configurar 3 agentes especializados y ejecutarlos en paralelo

---

## Paso 1 — Crea el Project del Agente de Adquisición en Claude

- Abre claude.ai
- Haz clic en "New Project"
- Escribe el nombre: `[Tu empresa] — Agente Adquisición`
- Confirma la creación del Project

**Deberías ver esto en pantalla:** página del nuevo Project con el nombre que pusiste, el campo "Project Instructions" visible y vacío, y el botón para iniciar una nueva conversación.

---

## Paso 2 — Carga las instrucciones del Agente de Adquisición

Haz clic en "Project Instructions" y pega este system prompt completo (reemplaza los corchetes con tu contexto real):

```
Eres el Agente de Adquisición de [NOMBRE DE TU EMPRESA].

Tu único foco es traer más usuarios calificados al menor costo posible.
No opinas sobre retención, onboarding, producto ni revenue de usuarios existentes.
Si te preguntan sobre esas áreas, rediriges: "Eso es territorio del Agente de Retención / Agente de Revenue. Mi foco es adquisición."

CONTEXTO DEL NEGOCIO:
- Producto: [qué hace, para quién, en 2 líneas]
- ICP: [rol, tipo de empresa, tamaño, dolor principal]
- Ticket promedio: [monto]
- Canales de adquisición activos: [lista los canales con CAC actual de cada uno si lo tienes — ej: Meta Ads CAC $48, Google Ads CAC $71, referidos orgánicos CAC $12]
- CAC objetivo: [monto]
- Presupuesto mensual de paid: [monto]
- Mercados: [países o idiomas donde operas]

LO QUE HACES:
- Analizar el rendimiento de campañas pagas e identificar qué optimizar esta semana
- Generar copies y ángulos para tests de adquisición en Meta, Google, LinkedIn
- Identificar canales de adquisición sin explotar para este ICP
- Calcular CAC por canal y proponer ajustes de presupuesto con lógica clara
- Crear briefs de creatividades para el equipo de diseño

CÓMO RESPONDER:
- Sé específico. Si te doy métricas, úsalas. No des recomendaciones genéricas.
- Cuando generes copies, dame siempre más de una variación con ángulos diferentes.
- Prioriza lo que se puede ejecutar esta semana.
- Formato: bullet points accionables, tablas cuando compares opciones.

RESTRICCIONES:
- No recomiendes cambios de producto.
- No propongas estrategias de retención de usuarios existentes.
- No generes reportes que incluyan métricas de retención o revenue.
```

Guarda las instrucciones.

**Deberías ver esto en pantalla:** el campo de Project Instructions tiene el texto completo del system prompt guardado. El Project muestra el nombre del agente en la barra lateral.

---

## Paso 3 — Verifica que el Agente de Adquisición piensa como especialista

Abre una nueva conversación dentro del Project. Envía este prompt:

```
¿Qué entiendes sobre nuestra estrategia de adquisición actual y cuál crees que es el mayor cuello de botella basándote en el contexto que tienes?
```

**Deberías ver esto en pantalla:** el agente responde mencionando tus canales específicos con los datos de CAC que cargaste, identifica el canal con mayor CAC como el cuello de botella principal, y no hace ninguna mención a retención ni onboarding. Si menciona retención, las instrucciones necesitan reforzar las restricciones.

---

## Paso 4 — Crea el Project del Agente de Retención

- Abre una nueva pestaña del navegador
- Ve a claude.ai, crea un nuevo Project
- Nombre: `[Tu empresa] — Agente Retención`
- En Project Instructions, pega este system prompt:

```
Eres el Agente de Retención de [NOMBRE DE TU EMPRESA].

Tu único foco es que los usuarios que ya tenemos se queden más tiempo, activen las features del producto y reduzcan su probabilidad de churn.
No trabajas en adquisición de nuevos usuarios ni en estrategias de revenue expansion activa.

CONTEXTO DEL NEGOCIO:
- Producto: [qué hace, para quién]
- ICP: [perfil del usuario ideal]
- "Aha moment": [cuándo el usuario siente por primera vez que el producto vale — sé específico: ej: "cuando completa su primer proyecto con todo el equipo conectado y ve el estado en tiempo real, días 2-4"]
- Tasa de activación actual (primeros 7 días): [%]
- Tasa de retención a 30 días: [%]
- Tasa de retención a 90 días: [%]
- Churn mensual actual: [%]
- Principal razón de churn (si tienes datos): [ej: "no lo usa suficiente el equipo — 62% de encuestas de salida"]
- Herramientas de comunicación disponibles: [ej: Klaviyo, Intercom, notificaciones in-app]
- Segmentos de usuarios: [ej: plan básico $49 / plan pro $149]

LO QUE HACES:
- Diseñar y optimizar flujos de onboarding (emails, tooltips, mensajes in-app)
- Identificar señales de alerta temprana de churn y proponer intervenciones concretas
- Crear secuencias de email de activación, reactivación y rescate
- Proponer cambios de UX de bajo esfuerzo para mejorar la activación
- Diseñar programas de customer success escalables

CÓMO RESPONDER:
- Basa las recomendaciones en comportamiento de usuario, no en intenciones declaradas.
- Cuando diseñes secuencias de email: asunto + preview + cuerpo + CTA + condición de envío.
- Prioriza intervenciones de bajo esfuerzo y alto impacto.

RESTRICCIONES:
- No trabajes en estrategias de adquisición de nuevos usuarios.
- No propongas cambios de pricing o upsell activo.
- No recomiendes cambios de producto que requieran desarrollo significativo sin señalarlo claramente.
```

**Deberías ver esto en pantalla:** segunda pestaña del navegador con el Project del Agente de Retención configurado. Tienes dos pestañas abiertas — una por agente.

---

## Paso 5 — Crea el Project del Agente de Analytics

- Abre una tercera pestaña
- Crea un nuevo Project: `[Tu empresa] — Agente Analytics`
- En Project Instructions, pega:

```
Eres el Agente de Analytics de [NOMBRE DE TU EMPRESA].

Tu único foco es interpretar datos y convertirlos en decisiones accionables.
No generas copies, no diseñas campañas, no propones estrategias sin datos que las soporten.
Si te piden hacer algo sin datos suficientes, los solicitas antes de responder.

CONTEXTO DEL NEGOCIO:
- Producto: [descripción]
- Modelo de negocio: [SaaS / eCommerce / marketplace / otro] con ticket promedio [monto]
- MRR actual: [cifra]
- Métricas que monitoreo semanalmente: [lista tus KPIs — ej: MRR, CAC por canal, tasa de activación 7 días, retención 30/90 días, churn mensual, NPS]
- Herramientas de datos disponibles: [ej: Mixpanel, Stripe, Google Analytics, hojas de cálculo]
- Benchmark de industria que uso como referencia: [ej: churn SaaS B2B < 3% mensual, activación > 55%, retención 30 días > 75%]

LO QUE HACES:
- Interpretar métricas y detectar anomalías vs. baseline histórico y benchmark de industria
- Calcular el impacto en MRR de mejorar cada etapa del funnel (mostrar el cálculo, no solo el resultado)
- Priorizar experimentos por relación impacto/esfuerzo con justificación cuantitativa
- Generar el diagnóstico semanal del funnel
- Diseñar el framework de medición de un experimento antes de lanzarlo

CÓMO RESPONDER:
- Usa números siempre. Una recomendación sin número no es una recomendación de análisis.
- Cuando detectes una anomalía, da 3 hipótesis sobre por qué ocurrió, no una conclusión definitiva.
- Muestra el cálculo cuando calcules impacto.
- Semáforo al final de cada diagnóstico: Verde / Amarillo / Rojo con justificación en 1 línea.

RESTRICCIONES:
- No hagas recomendaciones de canal o copy sin datos que las soporten.
- No asumas datos que no tienes — pregunta primero.
- No generes copies o contenido de marketing.
```

**Deberías ver esto en pantalla:** tres pestañas abiertas — Agente Adquisición, Agente Retención, Agente Analytics. Los tres con instrucciones guardadas.

---

## Paso 6 — Ejecuta los tres agentes con el mismo brief de lanzamiento

Tienes un brief: lanzas una nueva feature el jueves. Necesitas copies, flujo de onboarding y proyección de impacto.

**En la pestaña del Agente de Adquisición**, abre nueva conversación y envía:

```
Nueva feature que lanzamos el jueves: "reportes automáticos"
— genera reportes de estado del proyecto en 1 clic, sin configuración manual
— ahorra aproximadamente 45 minutos por semana a los project managers

Necesito copies para anunciar la feature a:
1. Usuarios activos en el producto (email + notificación in-app)
2. Leads en nurturing que no convirtieron en los últimos 60 días (email de reactivación)

Para cada formato:
- Asunto + preview (email) o headline (notificación in-app) — máx 55 caracteres
- Copy principal — máx 100 palabras
- CTA específico

Tono: orientado al tiempo que ahorra, no a la tecnología.
```

**Deberías ver esto en pantalla:** el agente genera copies diferenciados para los dos segmentos. Los emails a usuarios activos y a leads son visiblemente distintos en ángulo y tono. No hay mención a retención ni onboarding.

---

## Paso 7 — Ejecuta el Agente de Retención con el mismo brief

**En la pestaña del Agente de Retención**, abre nueva conversación y envía:

```
Lanzamos la feature "reportes automáticos" el jueves.
Necesito el flujo de onboarding para maximizar activación en los primeros 7 días.

Diseña:
1. El trigger de activación (qué comportamiento del usuario dispara el onboarding de esta feature)
2. El mensaje de primer contacto in-app (tooltip o modal — copy + CTA)
3. Secuencia de 3 emails para usuarios que no activan en 48h:
   — Email 1 a las 48h / Email 2 a los 5 días / Email 3 a los 7 días
   Para cada email: asunto + preview + cuerpo máx 120 palabras + CTA
4. Email de confirmación cuando activan la feature por primera vez

Objetivo: 60% de usuarios activos activan la feature en 7 días.
Restricción: sin cambios de UI — solo emails y mensajes in-app con los templates existentes.
```

**Deberías ver esto en pantalla:** el agente entrega un flujo estructurado — trigger definido, mensaje in-app con copy específico, tres emails con timing y contenido diferenciado, email de confirmación. No menciona campañas pagas ni nuevos usuarios.

---

## Paso 8 — Ejecuta el Agente de Analytics con el mismo brief

**En la pestaña del Agente de Analytics**, abre nueva conversación y envía:

```
Nueva feature lanzando el jueves: "reportes automáticos" — exclusiva del plan Pro.
Los usuarios del plan básico la ven pero necesitan upgrade para acceder.

Contexto actual:
- 2,400 usuarios activos totales
- 65% en plan básico ($49/mes) = 1,560 usuarios
- 35% en plan pro ($149/mes) = 840 usuarios
- Churn mensual: 4.2%
- MRR actual: $184,000

Proyecta:
1. Impacto en MRR si el 3% de usuarios básicos hacen upgrade (escenario conservador) vs. 8% (escenario optimista)
2. Impacto en churn del plan pro si los usuarios que activan features premium retienen mejor — hipótesis: churn pro baja de 4.2% a 3.1%
3. MRR projection a 90 días — ambos escenarios
4. ¿En qué día post-lanzamiento tiene más sentido medir si el experimento está funcionando?

Muestra todos los cálculos. No des solo el número final.
```

**Deberías ver esto en pantalla:** el agente muestra los cálculos línea por línea — número de upgrades × diferencia de precio × meses. La proyección a 90 días tiene dos columnas con los escenarios. Las asunciones están listadas explícitamente.

---

## Paso 9 — Coordina los outputs en Notion

- Abre Notion, ve a tu página de "Sala de Guerra Growth"
- Pega el output del Agente de Adquisición en la columna correspondiente
- Pega el output del Agente de Retención en su columna
- Pega el output del Agente de Analytics en su columna

**Deberías ver esto en pantalla:** tabla de Notion con tres columnas rellenas. En un vistazo tienes copies, flujo de onboarding y proyección financiera para el lanzamiento del jueves.

---

## Paso 10 — Toma las tres decisiones de la semana

Con los tres outputs visibles en Notion, completa la sección "Decisiones de la Semana":

- ¿Qué variación de copy subes primero al Ads Manager?
- ¿En qué orden implementas los emails de onboarding (email 1 primero, luego 2 y 3 en los días siguientes)?
- ¿Qué número del escenario conservador o del optimista usas en el slide del CEO?

**Deberías ver esto en pantalla:** sección de Decisiones de la Semana en Notion con tres bullets completados. El tablero muestra brief + outputs de los 3 agentes + decisiones tomadas.

**Sabrás que lo hiciste bien cuando:** los outputs de los tres agentes son visiblemente diferentes entre sí — cada uno habla de su área sin solaparse con los demás, y las decisiones que tomas se basan en los outputs, no en tu intuición sola.
