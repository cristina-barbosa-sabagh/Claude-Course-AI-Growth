# Clase 11 — Tu equipo de agentes: roles especializados que trabajan en paralelo
**Instructor B · 16 minutos · Módulo 04**

---

## GUIÓN COMPLETO

---

### INTRO — [0:00–1:00]

*(Pantalla: slide con título de la clase. Instructor en cámara.)*

Un equipo de Growth de elite tiene especialistas.
Alguien que piensa solo en adquisición. Alguien que piensa solo en retención. Alguien en los datos. Alguien en revenue.

Pero la mayoría de equipos de Growth tiene una, dos, quizás tres personas intentando cubrir los cuatro frentes.
Y cuando cubres todo, no profundizas en nada.

La solución no es contratar más gente. Es crear más especialistas.

Hoy te voy a mostrar cómo construir cuatro agentes de Growth en Claude Projects:
cada uno con su rol, su contexto y sus restricciones.
Cada uno especializado. Trabajando en paralelo.

Y cómo coordinarlos en Notion para que los outputs de los cuatro se conviertan en decisiones de negocio, no en más información que procesar.

16 minutos. Vamos.

---

### DESARROLLO 1 — Los 4 agentes de Growth: roles, contexto y restricciones [1:00–6:00]

*(Pantalla: slide "Tu equipo de 4 agentes — Arquitectura")*

Un agente en Claude Projects es un Project configurado con instrucciones de sistema específicas para un rol y una misión.
No es un chat de propósito general. Es un especialista.

La diferencia está en cómo lo configuras.
Un Project genérico responde a cualquier cosa con contexto general.
Un agente responde desde un rol específico, con prioridades específicas, y se niega a salirse de su especialidad.

Esa negativa es una feature, no un bug.
Cuando le preguntas al Agente de Adquisición sobre retención, te dice: "eso es territorio del Agente de Retención."
Eso mantiene el pensamiento limpio y los outputs enfocados.

---

**Agente 1 — Agente de Adquisición**

Rol: piensa como Head de Paid + Growth Hacker de canales orgánicos.
Su única pregunta es: ¿cómo traemos más usuarios calificados al menor costo posible?

Lo que hace:
— Analiza el rendimiento de campañas y propone optimizaciones
— Genera copies y creatividades para tests
— Identifica canales sin explotar para el ICP
— Calcula CAC objetivo y propone ajustes de presupuesto

Lo que NO hace:
— No habla de retención ni de onboarding
— No propone cambios de producto
— No analiza revenue de usuarios existentes

*(Pausa.)*

Un agente con restricciones claras produce mejor que uno sin restricciones.
Cuando Claude no tiene límites, tiende a dar respuestas completas pero superficiales.
Cuando tiene límites, profundiza en su área.

---

**Agente 2 — Agente de Retención**

Rol: piensa como Head de Customer Success + especialista en onboarding y lifecycle.
Su única pregunta es: ¿cómo hacemos que los usuarios que ya tenemos se queden más tiempo y obtengan más valor?

Lo que hace:
— Diseña y optimiza flujos de onboarding
— Analiza patrones de churn y propone intervenciones
— Crea secuencias de email de activación y rescate
— Propone cambios de UX de baja fricción para mejorar la experiencia

Lo que NO hace:
— No trabaja en adquisición de nuevos usuarios
— No propone estrategias de pricing o upsell activo
— No analiza el rendimiento de campañas pagas

---

**Agente 3 — Agente de Análisis**

Rol: piensa como analista de datos con foco en Growth y decisiones accionables.
Su única pregunta es: ¿qué dicen los datos y qué deberíamos hacer con esa información?

Lo que hace:
— Interpreta métricas y detecta anomalías
— Calcula el impacto de mejorar cada parte del funnel
— Prioriza experimentos por ROI potencial
— Genera el diagnóstico semanal del funnel

Lo que NO hace:
— No genera copies ni contenido
— No hace recomendaciones de canal sin datos que las soporten
— No interpreta datos que no le hayas proporcionado — pregunta antes de asumir

---

**Agente 4 — Agente de Revenue**

Rol: piensa como Revenue Manager + especialista en monetización y expansión.
Su única pregunta es: ¿cómo extraemos más valor del negocio que ya existe?

Lo que hace:
— Identifica oportunidades de upsell y cross-sell en la base activa
— Diseña flujos de expansión de revenue
— Analiza el pricing y propone ajustes
— Construye el modelo de LTV y proyecciones de MRR

Lo que NO hace:
— No trabaja en adquisición de nuevos usuarios
— No analiza campañas pagas
— No propone estrategias de retención genéricas — su foco es expansión de valor, no reducción de churn

---

*(Pantalla: slide con los 4 agentes en cuadrícula — cada uno con su nombre, rol y misión)*

Cuatro especialistas. Cuatro focos. Cero solapamiento.
En el entregable tienes los system prompts completos — listos para pegar en Claude Projects.

---

### DESARROLLO 2 — Sala de guerra en Notion: cómo coordinar los 4 agentes sin reuniones [6:00–11:00]

*(Pantalla: slide "El tablero de coordinación en Notion")*

El problema de tener cuatro agentes sin sistema de coordinación es que los outputs se acumulan sin convertirse en decisiones.

El tablero de Notion resuelve eso.
No es un repositorio de outputs. Es una sala de guerra donde los cuatro agentes convergen.

Tiene cinco secciones:

---

**Sección 1 — Brief de la semana**

Una página de Notion con tres campos:
- El objetivo principal de la semana (una línea)
- La métrica que más importa mover esta semana (una sola)
- El contexto relevante (campañas activas, experimentos en curso, cambios de producto)

Eso es lo que alimenta a los cuatro agentes al inicio de cada semana.
No cuatro briefs diferentes. Uno. Que cada agente interpreta desde su especialidad.

---

**Sección 2 — Outputs por agente**

Cuatro columnas — una por agente.
Cada semana, cada agente produce un output principal: su diagnóstico de situación + su recomendación para la semana.
No cinco páginas de análisis. Un output concreto: qué está viendo + qué recomiendo hacer.

La regla: máximo 300 palabras por agente. Si no cabe en 300 palabras, el output no está lo suficientemente destilado.

---

**Sección 3 — Decisiones de la semana**

Aquí es donde el tablero se convierte en sala de guerra real.
Con los cuatro outputs sobre la mesa, el Chief of Growth toma tres decisiones:
1. La iniciativa de mayor impacto para ejecutar esta semana
2. El experimento que se lanza
3. La métrica que se monitorea diariamente

No veinte pendientes. Tres decisiones. Eso es lo que produce tener cuatro especialistas bien alineados.

---

**Sección 4 — Registro de experimentos**

Una tabla Notion con cada experimento activo:
Hipótesis / Agente que lo propuso / Fecha de inicio / Criterio de éxito / Estado / Resultado

Cuando termina el experimento, el Agente de Análisis lo cierra con el resultado y la conclusión.
Ese registro es la memoria colectiva de tu equipo de Growth.

---

**Sección 5 — Reporte semanal**

Al final de la semana, el Agente de Revenue (o de Análisis, según la semana) genera el reporte para stakeholders usando el Skill 05 de la clase anterior.
Se pega en esta sección. Listo para enviar.

*(Pantalla: slide con el tablero de Notion esquematizado — cinco secciones visibles)*

Cinco secciones. Un tablero. La coordinación de cuatro agentes especializados sin una sola reunión de sincronización.

---

### DEMO/CASO EN VIVO — Lanzamiento de una nueva feature: 4 agentes, 20 minutos [11:00–15:00]

*(Pantalla: pantalla completa — tablero de Notion abierto + Claude Projects en otro tab)*

*(Instructor comparte pantalla)*

Voy a mostrarte un caso real: el equipo acaba de aprobar una nueva feature.
Tenemos que: crear los copies de adquisición, diseñar el flujo de onboarding de la feature, reportar el impacto proyectado a stakeholders.

Normalmente: dos días de trabajo distribuido. Con los 4 agentes: 20 minutos.

*(Nota: la demo muestra el proceso, no los 20 minutos completos — se muestran 4 minutos representativos)*

---

**Brief del caso [30 seg]**

*(Instructor escribe en Notion — sección "Brief de la semana")*

```
Objetivo: lanzar la nueva feature de "reportes automáticos" a la base de usuarios activos
Métrica clave: % de usuarios que activan la feature en los primeros 7 días post-lanzamiento
Contexto: feature lista para deploy el jueves — necesitamos copies de anuncio,
secuencia de onboarding de la feature y reporte de impacto proyectado para el board
```

---

**Agente de Adquisición — copies del anuncio [1 min]**

*(Instructor abre el Project del Agente de Adquisición)*

**Lo que escribe:**
```
Nueva feature: reportes automáticos — genera reportes de proyecto en 1 clic
sin configuración manual.

Necesito copies para anunciar la feature a:
1. Usuarios activos en el producto (email + notificación in-app)
2. Leads en nurturing que no convirtieron (email de reactivación)

Para cada formato:
- Asunto / headline (máx 50 caracteres)
- Copy principal (máx 150 palabras)
- CTA específico

Tono: enfocado en el tiempo que ahorra, no en la tecnología.
```

*(Output aparece — instructor lee el headline y el CTA del email a usuarios activos)*

**Narración:**
> "Fíjate: el agente de adquisición se enfocó en el mensaje. No me dio recomendaciones de onboarding, no me habló de churn. Solo copies. Ese foco es el punto."

---

**Agente de Retención — flujo de onboarding de la feature [1 min]**

*(Instructor abre el Project del Agente de Retención)*

**Lo que escribe:**
```
Lanzamos la feature "reportes automáticos" el jueves.
Necesito el flujo de onboarding para que los usuarios la activen en los primeros 7 días.

Diseña:
1. El trigger de activación (qué evento dispara el onboarding)
2. El tooltip o modal de primer contacto (copy + CTA)
3. La secuencia de 3 emails si no activan en 48h (asunto + copy breve + CTA)
4. El email de confirmación cuando activan la feature por primera vez

Objetivo: 60% de usuarios activos activan la feature en 7 días.
Restricción: no podemos hacer cambios de UI — solo emails y mensajes in-app existentes.
```

*(Output aparece)*

**Narración:**
> "El Agente de Retención me da el flujo completo. No me habló de campañas pagas, no me dijo que debería invertir más en adquisición. Pensó solo en activación de la feature. Eso es lo que quiero de un especialista."

---

**Agente de Revenue — impacto proyectado [1 min]**

*(Instructor abre el Project del Agente de Revenue)*

**Lo que escribe:**
```
Nueva feature: reportes automáticos.
Contexto del negocio: 2,400 usuarios activos / ticket promedio $149/mes / churn mensual 4.2%

Proyecta el impacto de esta feature en:
1. Reducción de churn (si la retención de usuarios que activan la feature es mayor)
2. Oportunidad de upsell (si la feature es exclusiva de plan premium)
3. Impacto en MRR a 90 días — escenario conservador y escenario optimista

Asunciones a usar si no tienes los datos: dímelas y las proveo.
```

*(Output aparece)*

**Narración:**
> "El Agente de Revenue me da el modelo financiero. Tres minutos. Sin que yo haga un solo cálculo.
> Ese es el reporte que le presento al board esta semana."

---

**Coordinación en Notion [30 seg]**

*(Instructor vuelve a Notion — pega los tres outputs en las columnas correspondientes)*

**Narración:**
> "Cuatro agentes — tres de ellos activos en este caso. Los outputs en el tablero.
> Ahora tengo: copies listos para subir, flujo de onboarding diseñado, modelo financiero para el board.
> En 20 minutos. Sin reuniones. Sin briefs internos. Sin emails de coordinación.
> Eso es un equipo de Growth con agentes especializados."

---

### CIERRE — [15:00–16:00]

*(Instructor en cámara. Slide con entregable visible.)*

Tu entregable de esta clase son los system prompts de los 4 agentes y la plantilla del tablero de coordinación en Notion.

Configura los 4 Claude Projects esta semana.
No esperes tener el contexto perfecto para empezar. Empieza con lo que tienes y afina las instrucciones en el uso.

El sistema mejora cuando lo usas, no cuando lo piensas.

La próxima clase es la última del curso: los tres instructores mostramos en vivo cómo nuestros sistemas de Growth con Claude operan en nuestros negocios reales.
Y te damos el plan de 7 días para que tu sistema esté completamente operativo esta semana.

Nos vemos ahí.

---

## NOTAS DE PRODUCCIÓN

| Elemento | Detalle |
|---|---|
| Duración objetivo | 16 minutos exactos |
| Slides necesarios | 4: título, arquitectura de 4 agentes (cuadrícula), tablero Notion (esquema), slide de cierre |
| Demo | Pantalla completa — Notion + 3 Claude Projects abiertos en tabs. Ver demo.md |
| Ritmo | Desarrollo 1: ritmo moderado — dar tiempo para que cada agente quede claro. Demo: ritmo rápido, mostrar la velocidad del sistema |
| Tono | Operacional. No teórico. Cada agente se explica con lo que hace y lo que NO hace |
| Énfasis | Las restricciones de cada agente son tan importantes como sus capacidades |
| Preparación previa | 4 Claude Projects configurados con los system prompts del entregable, tablero de Notion clonado y abierto |
