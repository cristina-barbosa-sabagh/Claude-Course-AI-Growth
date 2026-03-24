# Demo en Vivo — Del prompt al skill documentado en Notion
**Clase 10 · Instructor A · Segmento: 11:00–15:00 del guión**

---

## Objetivo del demo

Mostrar el proceso completo de convertir un prompt que funciona en un skill documentado en Notion — en tiempo real, sin cortes, en menos de 4 minutos. El estudiante debe salir con claridad total sobre qué hace diferente a un skill de un prompt suelto.

Tiempo de ejecución en pantalla: **< 4 minutos**.

---

## Setup antes de grabar

- [ ] Claude.ai abierto en el Project de Growth del instructor (con contexto cargado)
- [ ] Notion abierto con la tabla de skills en blanco (columnas ya creadas: Nombre, Cuándo usar, Prompt, Output de referencia, Versión, Última iteración)
- [ ] El prompt del Skill 01 (Generador de Hipótesis) preparado en un archivo de texto aparte — para escribirlo con edición visible, no copiar-pegar instantáneo
- [ ] Pantalla compartida activa, resolución legible, interfaz limpia (pestañas innecesarias cerradas)
- [ ] Caso de ejemplo preparado: SaaS de gestión de proyectos para agencias, tasa de activación 38%, objetivo 55%

---

## El demo: paso a paso exacto

---

### PASO 1 — Contexto: el problema que resuelve el skill [30 seg]

*(Instructor en cámara antes de compartir pantalla)*

**Narración:**
> "Antes de mostrar el demo, quiero que entiendas el problema que estamos resolviendo.
> La semana pasada usaste un prompt que funcionó bien. Esta semana lo necesitas de nuevo.
> ¿Lo tienes guardado? ¿Sabes dónde? ¿Está en el formato que alguien más pueda usar?
> Si la respuesta a alguna de esas preguntas es no, lo que tienes es suerte, no un sistema.
> Voy a mostrarte cómo construir el sistema."

*(Instructor comparte pantalla — Claude abierto)*

---

### PASO 2 — Construir y ejecutar el prompt base [1 min]

*(Pantalla: Claude — nueva conversación en el Project)*

**Lo que escribe el instructor (escribe visible, no copia instantáneo):**

```
Actúa como estratega de Growth con experiencia en SaaS B2B.

Genera hipótesis de experimentos para la siguiente situación:

Área del funnel: activación
Métrica actual: 38% de usuarios completan onboarding en los primeros 7 días
Objetivo: llegar al 55% en 60 días
Contexto del producto: SaaS de gestión de proyectos para agencias creativas — ticket promedio $149/mes
Restricciones: sin cambios de desarrollo este sprint — solo copy, email y configuración del onboarding

Para cada hipótesis:
1. Hipótesis en formato "Si [acción], entonces [resultado] porque [razón]"
2. Variable exacta a testear
3. Criterio de éxito medible
4. Esfuerzo: Bajo / Medio / Alto
5. Impacto potencial: Bajo / Medio / Alto

Genera 5 hipótesis ordenadas de mayor a menor relación Impacto/Esfuerzo.
```

**Narración mientras escribe:**
> "Fíjate en la estructura. Rol. Contexto cuantificado. Objetivo con número y plazo. Restricciones reales.
> Y un formato de output que me dice exactamente qué va a producir Claude antes de enviarlo.
> Eso no es un prompt — eso es un brief de Growth. La diferencia importa."

*(Envía. Silencio mientras aparece el output.)*

---

### PASO 3 — Revisar el output y comentarlo [45 seg]

*(Instructor lee el output en pantalla — no lo lée completo, hace énfasis en los elementos clave)*

**Narración:**
> "Cinco hipótesis. Priorizadas. Cada una con la acción específica, la variable, el criterio de éxito.
> Esta hipótesis sobre el email a las 2 horas — ¿ven la especificidad? No dice 'mejora el email de bienvenida'.
> Dice: email a las 2 horas de registro, video de 90 segundos, mostrando el primer caso de uso.
> Eso es ejecutable esta semana. Eso es lo que diferencia a un prompt estructurado de uno genérico."

> "¿Puedo mejorar alguna de estas hipótesis? Sí. ¿Necesito editar el 80%? No.
> Y eso es suficiente para empezar a testear.
> Ahora: a documentar en Notion."

---

### PASO 4 — Documentar el skill en Notion [1.5 min]

*(Instructor cambia a Notion — tabla de skills)*

*(Crea nueva fila en la tabla — escribe en cada campo de forma visible)*

**Campo 1 — Nombre:**
> "Generador de Hipótesis de Experimentos — v1.0"

**Narración:**
> "El nombre dice qué hace. Sin ambigüedad. Si alguien lo busca en Notion en 6 meses, lo encuentra."

**Campo 2 — Cuándo usar:**
> "Usar antes de priorizar el backlog de experimentos de cualquier sprint. Input mínimo: área del funnel + métrica actual + objetivo."

**Narración:**
> "Una línea. Cuándo activarlo. Eso elimina el 'no sé si este prompt aplica a mi caso'."

**Campo 3 — Prompt:**
*(Pega el prompt completo con variables en corchetes — versión template, no la del caso específico)*

**Narración:**
> "El prompt en formato template — los valores específicos en corchetes. No el caso concreto que acabo de ejecutar. La plantilla reutilizable."

**Campo 4 — Output de referencia:**
*(Pega el output que acaba de generar Claude)*

**Narración:**
> "Este es el output real. No uno inventado. No idealizado. El que Claude produjo hace 90 segundos.
> Cuando alguien use este skill por primera vez, esto le dice qué nivel de calidad esperar."

**Campo 5 — Versión:** `1.0`
**Campo 6 — Última iteración:** *(fecha de hoy)*

**Narración:**
> "Versión 1.0 porque es la primera. La semana que viene, si el output mejora o si añado contexto, sube a 1.1.
> La fecha me dice cuándo fue la última vez que alguien pensó en este skill — si lleva 3 meses sin tocar, probablemente necesita revisión."

---

### PASO 5 — El remate: qué hace diferente a este sistema [30 seg]

*(Instructor mira a cámara)*

**Narración:**
> "Eso fue menos de 4 minutos. Prompt construido, ejecutado, output revisado, skill documentado en Notion.
> A partir de este momento, ese skill existe en tu operación.
> Cualquier persona del equipo puede usarlo. Tú puedes usarlo en seis meses sin recordar cómo lo construiste.
> Y cada vez que alguien lo mejore, la mejora queda guardada para todos.
> Eso es lo que hace que un sistema de Growth con IA sea mejor que una persona con IA.
> Las mejoras son colectivas. El conocimiento no se va cuando alguien se va."

---

## Variantes del demo

Si el producto del instructor es diferente, adaptar estos campos del caso de ejemplo:

| Campo | Alternativa SaaS | Alternativa eCommerce | Alternativa marketplace |
|---|---|---|---|
| Área del funnel | Activación | Recompra | Oferta de proveedores |
| Métrica actual | % onboarding completado | Tasa de recompra a 60 días | Proveedores activos/mes |
| Restricción | Sin dev este sprint | Sin presupuesto extra | Sin cambios de plataforma |

**Regla:** El caso debe ser lo suficientemente específico para que Claude genere hipótesis ejecutables, no genéricas. Si el output de Claude en el demo es vago, el caso estaba mal definido.

---

## Qué NO hacer en el demo

| No hacer | Por qué |
|---|---|
| Copiar y pegar el prompt sin explicar cada sección | El estudiante no aprende qué hace que el prompt funcione — solo ve el output |
| Mostrar Notion ya pre-rellenado | Pierde el efecto de ver el proceso de documentación en tiempo real |
| Leer todo el output en voz alta | Consume tiempo y pierde ritmo — destacar los 2-3 elementos clave |
| Usar más de 4 minutos | El efecto del demo depende de que parezca rápido y asequible |
| Hacer el demo con un prompt vago | El output será débil y el estudiante pensará que el skill system no funciona |

---

## Métricas de éxito del demo

El demo funcionó si al terminar el estudiante piensa:
- "Puedo replicar esto exactamente en mi negocio hoy"
- "Entiendo la diferencia entre un prompt y un skill"
- "Tengo claridad sobre qué va en cada campo de la tabla en Notion"

Si las tres respuestas son sí, el demo cumplió su objetivo.
