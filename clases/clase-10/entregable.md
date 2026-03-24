# Biblioteca de 15 Skills de Growth en Notion
## Tu librería de producción con Claude — lista para usar hoy

**Módulo 04 · Clase 10 · Claude para Growth**

---

Copia esta plantilla en tu Notion, crea una tabla con las columnas indicadas y pega cada skill como una entrada. Personaliza los campos en corchetes con tu contexto real antes de usar.

Tiempo estimado para setup: **20 minutos**.
Tiempo para usar el primer skill: **5 minutos después del setup**.

---

## Estructura de la tabla en Notion

Crea una tabla con estas columnas:

| Columna | Tipo | Para qué |
|---|---|---|
| Nombre del skill | Título | Identificación rápida |
| Cuándo usar | Texto | Condición de activación |
| Prompt (con variables) | Texto | El prompt listo para copiar |
| Output de referencia | Texto | Ejemplo real — qué nivel esperar |
| Versión | Número | Control de iteraciones |
| Última iteración | Fecha | Cuándo se mejoró por última vez |

---

## Los 15 Skills — Completos y listos para usar

---

## SKILL 01 — Generador de Hipótesis de Experimentos

**Cuándo usar:** Antes de priorizar el backlog de experimentos de cualquier sprint. Úsalo cuando tengas una métrica que quieres mover y no tengas claridad sobre qué testear primero.

**Prompt:**

```
Actúa como estratega de Growth con experiencia en [INDUSTRIA — ej: SaaS B2B / eCommerce / marketplace].

Genera hipótesis de experimentos para la siguiente situación:

Área del funnel: [ÁREA — ej: activación / adquisición / retención / revenue]
Métrica actual: [MÉTRICA con número — ej: 38% de usuarios completan onboarding en 7 días]
Objetivo: [OBJETIVO con número y plazo — ej: llegar al 55% en 60 días]
Contexto del producto: [1-2 líneas sobre qué hace tu producto y para quién]
Restricciones: [qué no puedes cambiar — ej: sin cambios de desarrollo este sprint]

Para cada hipótesis:
1. Hipótesis en formato: "Si [acción], entonces [resultado] porque [razón]"
2. Variable exacta a testear
3. Criterio de éxito medible (número concreto)
4. Esfuerzo de implementación: Bajo / Medio / Alto
5. Impacto potencial estimado: Bajo / Medio / Alto

Genera 5 hipótesis ordenadas de mayor a menor relación Impacto/Esfuerzo.
Sé específico. No generices. Usa el contexto del producto para que las hipótesis sean ejecutables.
```

**Output de referencia (ejemplo para SaaS de gestión de proyectos):**

```
HIPÓTESIS 1 — Impacto: Alto / Esfuerzo: Bajo
Si enviamos un email de "siguiente paso" a las 2 horas de registro con un video de 90 segundos
mostrando el primer caso de uso de mayor valor, entonces la tasa de activación a 7 días subirá
del 38% al 48% porque la mayoría de los dropouts ocurren en las primeras 3 horas por falta
de claridad sobre qué hacer primero.
Variable: Email de activación temprana con video vs. email actual sin video
Criterio de éxito: Tasa de activación a 7 días ≥ 45% en el grupo de tratamiento
Esfuerzo: Bajo (solo producción de video + cambio en secuencia de email)
...
```

**Versión actual:** 1.0

---

## SKILL 02 — Analizador de Funnel con Impacto en Revenue

**Cuándo usar:** Antes de cada reunión de Growth mensual o cuando necesitas priorizar en qué parte del funnel invertir recursos. Input mínimo: números de cada etapa del funnel.

**Prompt:**

```
Actúa como analista de Growth especializado en optimización de funnels.

Analiza el siguiente funnel y dime dónde está el mayor cuello de botella:

Etapa 1 — Visitas mensuales: [NÚMERO]
Etapa 2 — Registros: [NÚMERO] ([PORCENTAJE]% de conversión)
Etapa 3 — Activación (primer valor): [NÚMERO] ([PORCENTAJE]% de conversión)
Etapa 4 — Conversión a pago: [NÚMERO] ([PORCENTAJE]% de conversión)
Etapa 5 — Retención a 30 días: [NÚMERO] ([PORCENTAJE]% del total pagado)

Ticket promedio: [MONTO]
MRR actual: [MONTO]

Para cada etapa:
1. Tasa de conversión actual
2. Benchmark de industria estimado para [INDUSTRIA]
3. Gap vs. benchmark (si aplica)
4. Impacto en MRR si esa etapa mejora un 10% (cálculo exacto)

Al final:
- Cuello de botella principal (con justificación)
- Top 3 experimentos priorizados por ROI potencial
- El experimento que harías primero si solo pudieras hacer uno
```

**Output de referencia:**

```
ANÁLISIS DE FUNNEL

Etapa con mayor oportunidad: Activación (38% actual vs. 55-65% benchmark SaaS B2B)
Gap: -17 a -27 puntos porcentuales

Impacto de mejorar cada etapa en 10%:
- Visitas +10%: +$1,840 MRR potencial
- Registros +10%: +$2,100 MRR potencial
- Activación +10%: +$4,200 MRR potencial ← MAYOR IMPACTO
- Conversión a pago +10%: +$3,800 MRR potencial
- Retención 30d +10%: +$2,900 MRR potencial

Experimento prioritario: [detalle del experimento]
...
```

**Versión actual:** 1.0

---

## SKILL 03 — Creador de Copies Multicanal

**Cuándo usar:** Cuando necesitas copies para una campaña de adquisición o retención en más de un canal. Ideal antes de subir una campaña nueva.

**Prompt:**

```
Actúa como copywriter especializado en Growth Marketing con experiencia en [INDUSTRIA].

Brief de campaña:
- Producto: [nombre y descripción en 1 línea]
- ICP: [descripción de tu cliente ideal — rol, empresa, dolor principal]
- Objetivo de conversión: [qué quieres que hagan — ej: prueba gratuita / demo / compra]
- Ángulo principal: [el beneficio o dolor que quieres activar]
- Tono: [ej: directo y concreto / aspiracional / técnico / conversacional]
- Restricciones: [qué NO incluir — ej: no mencionar precio, no usar términos técnicos]

Genera copies para estos canales:

META ADS:
- Headline (máx 7 palabras)
- Texto principal (máx 3 líneas)
- CTA (máx 4 palabras)
[3 variaciones con ángulos diferentes]

GOOGLE ADS:
- Headline 1 (máx 30 caracteres)
- Headline 2 (máx 30 caracteres)
- Description (máx 90 caracteres)
[2 variaciones]

EMAIL (asunto + preview):
- Asunto (máx 50 caracteres)
- Preview text (máx 90 caracteres)
[3 variaciones — una urgencia, una curiosidad, una beneficio directo]

LINKEDIN (si aplica a tu ICP):
- Hook (primera línea — máx 150 caracteres, debe parar el scroll)
- Cuerpo (máx 150 palabras)
- CTA final
[1 variación]

Formato de entrega: tabla por canal. Lista para copiar al ad manager.
```

**Output de referencia:** Tabla con copies listos para subir, un ángulo diferente por variación, consistencia de mensaje entre canales.

**Versión actual:** 1.0

---

## SKILL 04 — Revisor de Métricas Semanales

**Cuándo usar:** Cada lunes antes de tu standup de Growth. Pega los números de la semana anterior y Claude hace el diagnóstico en 60 segundos.

**Prompt:**

```
Actúa como analista de Growth. Voy a darte las métricas de la semana pasada.
Tu trabajo es detectar lo que importa, no describir los números.

Métricas de la semana [FECHA]:
[Pega aquí tus métricas en el formato que tengas — tabla, lista, exportación de dashboard]

Contexto:
- Campaña o iniciativa activa: [qué estuvo corriendo esta semana]
- Evento relevante: [algún cambio de producto, campaña nueva, estacionalidad]

Dame:
1. Top 3 anomalías — positivas o negativas — vs. semana anterior
2. Top 3 anomalías vs. baseline de las últimas 4 semanas
3. Una sola métrica que más importa monitorear esta semana (y por qué)
4. Tres preguntas que deberías responder esta semana para entender qué pasó
5. Semáforo general: Verde / Amarillo / Rojo — con justificación en 1 línea

No me expliques los números. Dime qué hacer con ellos.
```

**Output de referencia:**

```
DIAGNÓSTICO SEMANAL — Semana del [fecha]

TOP 3 ANOMALÍAS VS. SEMANA ANTERIOR:
1. CAC de Meta subió 34% (de $42 a $56) — fuera del rango normal de variación
2. Tasa de activación cayó 8 puntos — podría estar relacionado con el deploy del martes
3. NPS promovido subió +0.4 — correlaciona con el nuevo flujo de onboarding

MÉTRICA A MONITOREAR ESTA SEMANA: Tasa de activación a 48h
...

SEMÁFORO: AMARILLO — CAC elevado sin explicación clara, requiere investigación antes del próximo ciclo de inversión.
```

**Versión actual:** 1.0

---

## SKILL 05 — Redactor de Reportes para Stakeholders

**Cuándo usar:** Al final de cada período (semana, mes, quarter) cuando necesitas comunicar resultados al CEO, board o equipo directivo. Input: métricas brutas + contexto de iniciativas.

**Prompt:**

```
Actúa como Chief of Growth redactando el reporte mensual para el equipo directivo.

Período: [MES / QUARTER / SEMANA]

Métricas del período:
[Pega métricas: MRR, nuevos usuarios, churn, NPS, CAC, LTV, o las que apliquen a tu negocio]

Métricas del período anterior (para comparar):
[Pega métricas del período anterior]

Iniciativas principales del período:
1. [Iniciativa + resultado]
2. [Iniciativa + resultado]
3. [Iniciativa + resultado]

Experimentos activos y estado:
[Lista de experimentos en curso o finalizados]

Genera un reporte ejecutivo con esta estructura:

## Estado del negocio — [PERÍODO]
[Párrafo de 3 líneas: número más importante + variación + contexto]

## Movimientos del período
[Bullet points — máx 5 — de las iniciativas con mayor impacto. Solo hechos y números, sin opiniones]

## Hipótesis para el próximo período
[3 hipótesis sobre qué va a mover la aguja, con justificación breve]

## Riesgos identificados
[2-3 riesgos concretos que el equipo directivo debería conocer]

## Decisión necesaria del equipo directivo
[Si hay alguna decisión que depende de ellos, enúnciala en 1 línea]

Tono: ejecutivo. Denso. Sin adjetivos innecesarios. Cada palabra tiene que aportar.
Extensión máxima: 1 página.
```

**Output de referencia:** Reporte de 1 página, listo para enviar, con estructura clara que permite leer en 2 minutos y entender el estado completo del negocio.

**Versión actual:** 1.0

---

## SKILL 06 — Generador de Secuencias de Email de Onboarding

**Cuándo usar:** Cuando necesitas crear o mejorar la secuencia de activación para nuevos usuarios.

**Prompt:**

```
Actúa como especialista en email marketing y onboarding de productos digitales.

Contexto:
- Producto: [descripción]
- ICP: [perfil del usuario]
- Momento de "primer valor" (aha moment): [cuándo el usuario siente el valor por primera vez]
- Tasa de activación actual: [porcentaje]
- Principal razón de dropout en onboarding: [si la conoces]

Genera una secuencia de [NÚMERO] emails de onboarding:
- Email 1: enviado a los [X] minutos de registro
- Email 2: enviado a las [X] horas si no completó [ACCIÓN]
- Email 3: enviado al día [X]
[continúa según el número de emails que necesites]

Para cada email:
- Asunto (máx 50 caracteres)
- Preview text (máx 90 caracteres)
- Cuerpo (máx 200 palabras)
- CTA único y específico
- Condición de envío (triggear solo si [condición])

Tono: [ej: humano y directo / formal / conversacional]
Restricciones: [ej: no mencionar competidores, no usar descuentos en los primeros 3 emails]
```

**Versión actual:** 1.0

---

## SKILL 07 — Analizador de Copy de Campañas Activas

**Cuándo usar:** Cuando una campaña lleva 2+ semanas activa y necesitas diagnosticar por qué performa bien o mal.

**Prompt:**

```
Actúa como especialista en CRO y copywriting de performance marketing.

Tengo esta campaña activa:
Canal: [META / GOOGLE / EMAIL / otro]
Copy actual: [pega el copy completo]
Métricas: CTR: [%] / Conversión a [objetivo]: [%] / CPA: [$]
Benchmark de referencia: CTR esperado [%] / CPA objetivo [$]
ICP: [descripción]

Analiza:
1. Por qué este copy performa como performa (hipótesis basadas en el texto, no en el medio)
2. Los 3 elementos más débiles del copy actual (headline, hook, propuesta de valor, CTA, etc.)
3. 3 variaciones de copy para testear — cada una mejorando uno de los elementos débiles
4. Qué variación testear primero y por qué

Sé específico sobre el texto. No des consejos genéricos de copywriting.
```

**Versión actual:** 1.0

---

## SKILL 08 — Generador de Brief de Experimento

**Cuándo usar:** Antes de iniciar cualquier experimento de Growth. Estandariza el formato y asegura que el equipo esté alineado en la hipótesis, la métrica y los criterios de éxito.

**Prompt:**

```
Actúa como Growth PM. Voy a darte una idea de experimento y necesito que la conviertas en un brief estructurado.

Idea: [describe tu idea de experimento en 1-3 líneas]
Área del funnel: [adquisición / activación / retención / revenue]
Recurso disponible: [ej: 2 días de desarrollo, solo cambios de copy, presupuesto de $500]

Genera el brief con esta estructura:

**Hipótesis:** Si [hacemos X], entonces [métrica Y] mejorará en [Z%] porque [razón]
**Variable de tratamiento:** [qué cambia exactamente]
**Grupo de control:** [qué mantiene igual]
**Métrica primaria:** [una sola métrica — la que decide si el experimento fue exitoso]
**Métricas secundarias:** [2-3 métricas a monitorear pero que no deciden]
**Criterio de éxito:** [número concreto — ej: conversión ≥ X% con p-value < 0.05]
**Tamaño de muestra necesario:** [cálculo estimado]
**Duración recomendada:** [días]
**Riesgos:** [qué puede salir mal / sesgo potencial]
**Costo de oportunidad:** [qué dejamos de hacer para hacer esto]
```

**Versión actual:** 1.0

---

## SKILL 09 — Redactor de Propuesta de Valor por Segmento

**Cuándo usar:** Cuando quieres adaptar tu mensaje a diferentes segmentos de ICP o cuando estás entrando a un nuevo mercado.

**Prompt:**

```
Actúa como estratega de posicionamiento y copywriting.

Producto: [descripción de qué hace y cómo]
Segmentos a analizar:
1. [Segmento A — ej: Startups en early stage, 1-10 empleados]
2. [Segmento B — ej: Empresas medianas, 50-200 empleados]
3. [Segmento C — ej: Enterprise, 500+ empleados]

Para cada segmento:
1. Dolor principal relacionado con [área donde aplica tu producto]
2. Lenguaje que usa ese segmento para describir ese dolor (sin jerga tuya)
3. Propuesta de valor adaptada — en 1 línea, con sus palabras
4. Objeción más probable y cómo responderla
5. Canal de comunicación más efectivo para ese segmento

Al final: mapa de mensajes — tabla con segmento / dolor / propuesta / canal.
```

**Versión actual:** 1.0

---

## SKILL 10 — Generador de Preguntas para Entrevistas de Usuario

**Cuándo usar:** Antes de cualquier sesión de research con usuarios. Evita las preguntas que generan sesgo de confirmación.

**Prompt:**

```
Actúa como investigador de UX especializado en Growth.

Contexto:
- Producto: [descripción]
- Tipo de usuario a entrevistar: [ej: usuarios que se fueron / usuarios que activaron / usuarios enterprise]
- Hipótesis que quiero validar o refutar: [tu hipótesis actual]
- Lo que YA sé: [datos cuantitativos que ya tienes]
- Lo que NO sé y necesito entender: [pregunta que no puedes responder con datos]

Genera:
1. 5 preguntas de apertura (que abran el contexto sin dirigir la respuesta)
2. 5 preguntas de profundidad (para entender el comportamiento real, no la intención declarada)
3. 3 preguntas de cierre (sobre comportamiento futuro y recomendaciones)
4. 3 preguntas que NO debo hacer (y por qué generan sesgo)

Formato: numeradas, con la pregunta y debajo 1 línea sobre para qué sirve.
```

**Versión actual:** 1.0

---

## SKILL 11 — Analizador de Churn

**Cuándo usar:** Cuando el churn sube inesperadamente o cuando quieres entender los patrones de cancelación para anticiparlos.

**Prompt:**

```
Actúa como analista de retención especializado en reducción de churn.

Datos disponibles:
- Tasa de churn actual: [%] mensual
- Tasa de churn del mes anterior: [%]
- Segmento con mayor churn: [ej: usuarios en plan básico / usuarios que registraron hace menos de 30 días]
- Razones de cancelación más frecuentes (si tienes encuesta de salida): [lista]
- Comportamiento previo a cancelación (si tienes datos): [ej: no loguearon en 14 días]

Analiza:
1. Diagnóstico: ¿Es churn involuntario (pago fallido) o voluntario (decisión)?
2. ¿Es churn de activación (primeros 30 días) o churn de largo plazo?
3. Top 3 hipótesis sobre por qué se van, con la evidencia que las soporta
4. 3 intervenciones concretas para reducir churn en los próximos 30 días
5. La señal de alarma temprana que debería triggerear una intervención antes de que cancelen
```

**Versión actual:** 1.0

---

## SKILL 12 — Creador de Flujo de Upsell / Expansión de Revenue

**Cuándo usar:** Cuando quieres identificar oportunidades de expansión de revenue en tu base de usuarios activos.

**Prompt:**

```
Actúa como estratega de Revenue Growth especializado en expansion revenue en SaaS.

Contexto:
- Producto: [descripción + planes disponibles]
- Usuario objetivo del upsell: [perfil — ej: usuarios en plan básico que llevan 90+ días activos]
- Comportamiento que indica intención de expansión: [ej: uso de X feature más de 3 veces por semana]
- Trigger disponibles: [qué señales puedes capturar — uso de features, límites alcanzados, etc.]

Genera:
1. Los 3 momentos óptimos para presentar el upsell (con la lógica de por qué ese momento)
2. El mensaje para cada momento (canal + copy + CTA)
3. La secuencia de seguimiento si no convierten en el primer intento (máx 2 touchpoints)
4. Cómo medir si el flujo de upsell está funcionando (métrica primaria + secundaria)
5. Qué NO hacer: los errores comunes en upsell que generan rechazo o churn
```

**Versión actual:** 1.0

---

## SKILL 13 — Generador de Calendario de Contenido para Growth

**Cuándo usar:** Al inicio de cada mes o quarter cuando necesitas planificar la estrategia de contenido para adquisición y retención.

**Prompt:**

```
Actúa como estratega de contenido especializado en Growth.

Contexto:
- Producto: [descripción]
- ICP: [perfil del cliente ideal]
- Objetivo del contenido este mes: [adquisición orgánica / retención / awareness / leads]
- Canales: [blog / LinkedIn / Instagram / newsletter / YouTube — los que uses]
- Frecuencia de publicación disponible: [ej: 2 posts LinkedIn/semana, 1 newsletter/semana]
- Tema o ángulo del mes: [ej: eficiencia operativa / crecimiento de equipo / reducción de costos]

Genera:
1. Calendario de contenido para [X semanas] con:
   - Fecha / Canal / Formato / Título tentativo / Objetivo específico / CTA
2. Los 3 pilares temáticos del mes (cada pilar agrupa varios contenidos)
3. El contenido de mayor impacto para adquisición (uno solo — el que hay que ejecutar sí o sí)
4. Ideas de contenido que pueden reutilizarse en múltiples canales (formato madre → derivados)
```

**Versión actual:** 1.0

---

## SKILL 14 — Optimizador de Landing Page

**Cuándo usar:** Antes de hacer cambios a una landing page existente o cuando el CVR de una landing está por debajo del benchmark.

**Prompt:**

```
Actúa como especialista en CRO con experiencia en landing pages de adquisición y activación.

Pega aquí el texto completo de tu landing page actual:
[TEXTO DE LA LANDING — headline, subheadline, secciones, bullets, testimonios, CTA]

Contexto adicional:
- CVR actual: [%]
- Tráfico principal: [canal — ej: paid social / SEO / email]
- Intención del visitante: [qué sabe y qué no sabe cuando llega]
- CVR objetivo: [%]

Analiza:
1. Claridad del headline — ¿Se entiende qué hace el producto en 5 segundos?
2. Relevancia para el tráfico principal — ¿El mensaje coincide con lo que vieron antes de llegar?
3. Jerarquía de valor — ¿Los beneficios más importantes están arriba?
4. Fricción en el CTA — ¿Qué impide que el usuario haga clic?
5. Prueba social — ¿Es creíble y específica?

Entrega:
- Top 5 cambios priorizados (de mayor a menor impacto en CVR)
- Para cada cambio: texto actual → texto sugerido
- El test A/B que harías primero
```

**Versión actual:** 1.0

---

## SKILL 15 — Generador de OKRs de Growth

**Cuándo usar:** Al inicio de cada quarter cuando necesitas definir o revisar los OKRs del equipo de Growth.

**Prompt:**

```
Actúa como Chief of Growth definiendo los OKRs del equipo para el próximo quarter.

Contexto:
- Etapa del negocio: [early stage / product-market fit / scale]
- MRR actual: [$]
- Objetivo de MRR al final del quarter: [$]
- Principal bottleneck del funnel hoy: [área]
- Recurso principal disponible: [ej: equipo de 2 personas / presupuesto de $X / capacidad de desarrollo]
- Lo que NO funcionó el quarter anterior: [iniciativas o métricas que decepcionaron]

Genera:
3 Objetivos para el quarter, cada uno con:
- Objective: [aspiracional, motivador, cualitativo]
- KR1: [resultado clave 1 — número concreto, medible, alcanzable]
- KR2: [resultado clave 2]
- KR3: [resultado clave 3]
- Iniciativas principales para lograr este OKR (bullet list, 2-4 iniciativas)
- Cómo sabremos al día 30 que vamos bien (checkpoint intermedio)

Al final: el OKR más importante — si solo pudieras lograr uno, cuál sería y por qué.

Restricción: evita OKRs de actividad (ej: "lanzar 5 campañas"). Solo OKRs de resultado (ej: "reducir CAC a $35").
```

**Versión actual:** 1.0

---

## Sistema de mejora continua — Cómo iterar tus skills

Después de cada uso de un skill, hazte estas tres preguntas:

**1. ¿El output fue mejor, igual o peor que la última vez?**
- Mejor: no cambies nada todavía. Espera 3 usos más para confirmar.
- Igual: el skill está estabilizado en este nivel. Busca el techo — ¿qué contexto adicional podría llevarlo más lejos?
- Peor: identifica qué contexto faltó y añádelo al prompt como campo obligatorio.

**2. ¿Hubo algo en el output que no esperabas y que fue útil?**
Si sí, añade ese tipo de output como instrucción al prompt. Ejemplo: "Claude generó una tabla de priorización que no pedí pero fue muy útil → añadir 'incluye tabla de priorización impacto/esfuerzo' al prompt."

**3. ¿Alguien más en el equipo usó este skill?**
Si sí, pídele que deje un comentario en Notion: qué contexto añadió, qué salió diferente. Eso es tu input para la siguiente versión.

### Regla de versionado

- **v1.0 → v1.1:** Pequeños ajustes en el wording del prompt o añadir una variable
- **v1.X → v2.0:** Cambio significativo en la estructura del prompt o en el formato del output
- **Archivar versión anterior:** Mantén las versiones anteriores en Notion. A veces la v1.0 funciona mejor para ciertos contextos.

---

## Confirmación de activación

Si completaste el setup de tu biblioteca, esto es lo que tienes ahora:

| Qué tienes | Para qué sirve |
|---|---|
| 15 skills documentados en Notion | Producción de Growth sin tener que construir prompts desde cero |
| Sistema de versionado activo | Tus skills mejoran con el uso — no se quedan estáticos |
| Formato estandarizado para el equipo | Cualquier persona puede usar los skills sin curva de aprendizaje |
| 5 skills de mayor impacto identificados | Empieza por esos — generan el 80% del valor en el menor tiempo |

---

**Acción inmediata:** Elige uno de los 15 skills, personaliza las variables con tu contexto real y ejecútalo antes de cerrar esta sesión.

**Siguiente clase:** Construyes tu equipo de 4 agentes especializados en Claude Projects.
