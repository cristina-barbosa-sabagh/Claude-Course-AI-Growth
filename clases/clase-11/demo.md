# Demo en Vivo — Lanzamiento de feature con 4 agentes en paralelo
**Clase 11 · Instructor B · Segmento: 11:00–15:00 del guión**

---

## Objetivo del demo

Mostrar el flujo completo de coordinación de los 4 agentes ante un caso real: el lanzamiento de una nueva feature. El estudiante debe ver con claridad que los agentes producen outputs especializados y no solapados, y que el tablero de Notion funciona como punto de convergencia — no como repositorio de información.

Tiempo de ejecución en pantalla: **< 4 minutos** (versión condensada del flujo real de 20 minutos).

---

## Setup antes de grabar

- [ ] 4 Claude Projects ya configurados con los system prompts del entregable (con el contexto real del instructor)
- [ ] Tablero de Notion abierto con las 5 secciones ya creadas (pero vacías para el demo)
- [ ] Brief del caso ya redactado en un archivo de texto aparte — para copiar rápido al Notion
- [ ] Prompts de cada agente preparados en un archivo de texto — para no escribirlos desde cero en pantalla
- [ ] Pantalla compartida activa — layout: Notion en el lado izquierdo, Claude en el derecho (split screen)
- [ ] Tabs de los 4 Projects ya abiertos en el navegador para cambiar rápido

**Caso del demo:**
Feature nueva: "reportes automáticos" — genera reportes de proyecto en 1 clic.
Deploy previsto: jueves de esta semana.
Necesidades: copies de anuncio a usuarios activos + flujo de onboarding de la feature + impacto proyectado para el board.

---

## El demo: paso a paso exacto

---

### PASO 1 — Contextualizar el caso en vivo [30 seg]

*(Instructor en cámara antes de compartir pantalla)*

**Narración:**
> "Escenario real. Es martes. El equipo de producto acaba de aprobar una nueva feature para este jueves.
> Necesito tres cosas antes de que salga: los copies para anunciarla a los usuarios activos, el flujo de onboarding para que la activen, y un modelo de impacto para presentarle al CEO.
> Normalmente esto toma dos días de trabajo distribuido en el equipo.
> Voy a hacer las tres con mis agentes. En el tiempo que dure este demo."

*(Comparte pantalla — split: Notion + Claude)*

---

### PASO 2 — Brief en Notion [30 seg]

*(Instructor escribe en Notion — Sección 1: Brief de la Semana)*

**Lo que escribe:**

```
Objetivo: lanzar la feature "reportes automáticos" el jueves con máxima activación en los primeros 7 días
Métrica clave: % de usuarios activos que activan la feature en 7 días — objetivo: 60%
Contexto: feature lista para deploy / necesitamos copies de anuncio, flujo de onboarding y modelo de impacto para el board
Lo que NO se toca: no hay capacidad de desarrollo adicional esta semana — solo copy, email y configuración de flows existentes
```

**Narración:**
> "Ese es el brief. Cuatro líneas. Los cuatro agentes trabajan desde el mismo punto de partida."

---

### PASO 3 — Agente de Adquisición: copies del anuncio [1 min]

*(Instructor abre el Project del Agente de Adquisición)*

**Lo que escribe:**

```
Nueva feature que lanzamos el jueves: "reportes automáticos"
— genera reportes de estado del proyecto en 1 clic, sin configuración manual
— ahorra ~45 minutos por semana a los project managers

Necesito copies para anunciar la feature a:
1. Usuarios activos (email + notificación in-app)
2. Leads en nurturing que no convirtieron (email de reactivación — esta feature puede ser el motivo de conversión)

Para cada formato:
- Asunto + preview (email) o headline (in-app) — máx 50 caracteres
- Copy principal — máx 100 palabras
- CTA específico
Tono: orientado al tiempo que ahorra, no a la tecnología. Sin jerga de producto.
```

*(Output aparece — instructor espera en silencio hasta que termine)*

**Narración mientras señala el output:**
> "Fíjate: copies diferenciados para los dos segmentos. El email a usuarios activos usa el beneficio de tiempo. El email de reactivación usa la novedad como razón para volver.
> ¿Pude haber pedido esto a un agente genérico? Sí. ¿Con este nivel de coherencia con el contexto de adquisición que ya tiene cargado? No.
> Ahí está el valor de la especialización."

*(Instructor copia el output y lo pega en Notion — Sección 2, columna Agente de Adquisición)*

---

### PASO 4 — Agente de Retención: flujo de onboarding [1 min]

*(Instructor cambia al Project del Agente de Retención)*

**Lo que escribe:**

```
Lanzamos la feature "reportes automáticos" el jueves.
Necesito el flujo de onboarding para maximizar activación en los primeros 7 días.

Diseña:
1. El trigger de activación (qué comportamiento dispara el onboarding de esta feature)
2. El mensaje de primer contacto in-app (tooltip o modal — copy + CTA)
3. Secuencia de 3 emails para usuarios que no activan en 48h:
   — Email 1: a las 48h de no activar
   — Email 2: a los 5 días
   — Email 3: a los 7 días (último intento)
   Para cada email: asunto + preview + cuerpo (máx 120 palabras) + CTA
4. Email de confirmación cuando activan por primera vez

Objetivo: 60% de usuarios activos activan la feature en 7 días.
Restricción: sin cambios de UI — solo emails y mensajes in-app con los templates existentes.
```

*(Output aparece)*

**Narración:**
> "El Agente de Retención me da el flujo completo. Trigger, mensaje de primer contacto, secuencia de 3 emails con timing específico, email de confirmación.
> No me habló de campañas. No me recomendó invertir más en paid. Pensó en activación. Solo en activación.
> Ese foco es lo que hace que el output sea usable directamente."

*(Copia output a Notion — columna Agente de Retención)*

---

### PASO 5 — Agente de Revenue: impacto proyectado [45 seg]

*(Instructor cambia al Project del Agente de Revenue)*

**Lo que escribe:**

```
Nueva feature: "reportes automáticos" — lanza jueves.
Contexto del negocio:
- 2,400 usuarios activos
- Distribución: 65% plan básico $49/mes, 35% plan pro $149/mes
- Churn mensual: 4.2%
- MRR actual: $184,000

La feature "reportes automáticos" es exclusiva del plan Pro.
Los usuarios del plan básico la ven pero necesitan hacer upgrade para acceder.

Proyecta:
1. Conversión esperada de básico a pro por esta feature (escenario conservador y optimista)
2. Impacto en MRR de los upgrades en 90 días
3. Impacto en churn del plan pro (hipótesis: los usuarios que activan features premium retienen mejor)
4. ¿Cuándo es el mejor momento para presentar el upgrade a un usuario del plan básico que intenta usar la feature?

Muestra las asunciones que usas.
```

*(Output aparece)*

**Narración:**
> "Proyección de MRR. Dos escenarios. Con las asunciones explícitas.
> Ese es el slide que le presento al CEO esta tarde.
> No una hoja de cálculo que tardé dos horas en construir. Una proyección con lógica clara que puedo defender.
> Y tardé 45 segundos en pedirla."

*(Copia output a Notion — columna Agente de Revenue)*

---

### PASO 6 — El tablero como sala de guerra [30 seg]

*(Instructor muestra el tablero de Notion con los 3 outputs ya pegados)*

**Narración:**
> "Miren el tablero ahora. Brief arriba. Tres outputs de agentes especializados en las columnas.
> Tengo copies listos para subir, flujo de onboarding para ejecutar, modelo de impacto para el board.
> Solo falta tomar tres decisiones: qué variación de copy subo primero, en qué orden ejecuto el onboarding, y qué número pongo en el slide del CEO.
> Eso lo hago yo. El resto lo hicieron los agentes.
> Esa es la división de trabajo correcta entre el Chief of Growth y su equipo de agentes."

---

## Variantes del demo

Si el producto del instructor no tiene features en lanzamiento, usar uno de estos escenarios alternativos:

| Escenario alternativo | Agentes que trabajan | Output esperado |
|---|---|---|
| Caída inesperada del CAC en 25% | Adquisición + Análisis | Diagnóstico de causa + acciones para capitalizar |
| Churn sube 2 puntos en el último mes | Retención + Análisis | Intervenciones inmediatas + investigación de causa raíz |
| Preparación del reporte de fin de quarter | Análisis + Revenue | Diagnóstico de funnel + proyección de MRR próximo quarter |

---

## Qué NO hacer en el demo

| No hacer | Por qué |
|---|---|
| Mostrar los 4 agentes trabajando en el mismo tiempo real | Confunde. Muestra uno a uno, en orden lógico |
| Leer el output completo de cada agente en voz alta | Pierde el ritmo — destacar solo los 2-3 puntos clave de cada output |
| Saltarse la parte de pegar en Notion | Ese paso es lo que convierte 3 conversaciones sueltas en un sistema coordinado |
| Usar Projects sin context cargado | Si los Projects están vacíos, los outputs son genéricos — el demo pierde su argumento central |
| Mostrar más de 3 agentes en 4 minutos | Mejor 3 agentes bien ejecutados que 4 a medias |

---

## Métricas de éxito del demo

El demo funcionó si al terminar el estudiante piensa:
- "Vi con claridad por qué los agentes especializados producen mejor que uno genérico"
- "Entiendo cómo el tablero de Notion convierte outputs en decisiones"
- "Puedo configurar esto en mi negocio con el entregable de la clase"

Las tres respuestas son sí: el demo cumplió.
