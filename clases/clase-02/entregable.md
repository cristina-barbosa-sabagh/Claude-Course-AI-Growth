# Plantilla de Brief Universal para Growth
## El prompt que convierte Claude en una máquina de producción

**Módulo 01 · Clase 02 · Claude para Growth**

---

Copia esta plantilla. Llena los campos para tu caso de uso actual.
Pégala en Claude y observa la diferencia.

Tiempo estimado para llenar: **10–15 minutos la primera vez. 3 minutos a partir de la segunda.**

---

## La plantilla

```
ROL:
Actúa como [título del rol específico] con experiencia en [industria/contexto].
Especializado en [área específica relevante para esta tarea].

CONTEXTO:
Producto: [qué hace tu producto en 1–2 líneas]
ICP: [quién es tu cliente ideal — cargo, tamaño de empresa, dolor principal]
Situación actual: [qué está pasando que genera esta necesidad — métricas, etapa del funnel, problema a resolver]
Lo que ya sé / ya probé: [qué has intentado antes — evita que Claude proponga lo obvio]

TAREA:
[Un verbo de acción] + [qué exactamente] + [para quién o en qué contexto].

Ejemplos de verbos de acción: genera, reescribe, analiza, compara, prioriza, estructura, evalúa.

FORMATO:
- Número de opciones: [cuántas variaciones quieres]
- Estructura de cada opción: [qué componentes debe tener cada una]
- Extensión: [límite de palabras o líneas por sección]
- Forma de presentación: [tabla / lista numerada / bullet points / texto corrido]

RESTRICCIONES:
- No [cosa que no quieres que haga]
- No [tono, estilo o enfoque que quieres evitar]
- Sin [elemento que genera relleno]
- Solo [lo que sí quieres — acota el scope]
```

---

## Ejemplo completo — listo para copiar y adaptar

Este ejemplo es para generación de copy de campaña de adquisición.
Adapta los campos a tu producto, canal y objetivo.

```
ROL:
Actúa como un Growth Marketer B2B SaaS con experiencia en adquisición
de usuarios mediante Meta Ads y ciclos de venta de menos de 30 días.
Especializado en copy orientado a conversión, no a awareness.

CONTEXTO:
Producto: [Tu producto] ayuda a [tu ICP] a [beneficio principal] sin [fricción que evitas].
ICP: [Cargo] en empresas de [rango de empleados] que actualmente [comportamiento actual del ICP] y tienen el problema de [dolor principal].
Situación actual: Estamos lanzando una campaña de prueba gratuita en Meta. ROAS actual: [X]. CTR actual: [X%]. La hipótesis es que el copy no está diferenciando el ángulo de valor.
Lo que ya probé: Headlines basados en beneficio funcional. No han movido el CTR en las últimas 3 semanas.

TAREA:
Genera 3 variaciones de copy para anuncio de Meta Ads.
Objetivo: clicks a página de prueba gratuita de 14 días.
Cada variación debe usar un ángulo diferente de conversión.

FORMATO:
- 3 variaciones
- Cada variación incluye: Headline (máx. 7 palabras) + Texto principal (máx. 3 líneas) + CTA (máx. 4 palabras)
- Después de cada variación, una línea que explica el ángulo psicológico que usa

RESTRICCIONES:
- Sin introducciones ni explicaciones previas al output
- No usar las palabras: innovador, potente, revolucionario, solución
- No apelar solo al beneficio funcional — incluir al menos un ángulo emocional o de identidad
- Sin jerga técnica que no usaría mi ICP en una conversación normal
```

---

## Guía de campos — por qué cada uno importa

### ROL — Por qué importa

El ROL calibra el nivel de razonamiento de Claude.
Un rol genérico ("experto en marketing") produce outputs de manual universitario.
Un rol específico ("Growth Marketer B2B con experiencia en ciclos de venta cortos") produce outputs de practitioner.

**Señal de ROL bien definido:** si puedes leer el ROL en voz alta y suena como un brief de reclutamiento, está bien.

---

### CONTEXTO — Por qué importa

Sin CONTEXTO, Claude rellena huecos con supuestos de internet.
Los supuestos de internet son promedio de todo. El promedio de todo es inútil para Growth.

**Regla:** si hay información que un nuevo analista de tu equipo necesitaría para hacer bien la tarea, va en el CONTEXTO.

**Señal de CONTEXTO bien definido:** Claude no hace suposiciones sobre tu producto o tu ICP en el output.

---

### TAREA — Por qué importa

Una TAREA vaga produce esfuerzo difuso.
Una TAREA específica produce un output evaluable: o sirve o no sirve. Sin zona gris.

**Regla:** si no puedes evaluar el output en menos de 60 segundos, la TAREA no fue específica.

**Señal de TAREA bien definida:** hay un verbo de acción, un objeto específico y un contexto de uso.

---

### FORMATO — Por qué importa

El FORMATO no es cosmético. Es funcional.
Si Claude no sabe el formato, decide solo. Y cuando decide solo, agrega contexto que no necesitas,
secciones que no pediste y longitud que no usas.

**Regla:** especifica el formato como si el output fuera a ir directo a una presentación sin editar.

**Señal de FORMATO bien definido:** el output se puede copiar y pegar sin reformatear.

---

### RESTRICCIONES — Por qué importa

Las RESTRICCIONES son donde eliminas el 80% del relleno.
Claude sin restricciones juega safe: agrega contexto, explica lo obvio, usa adjetivos de catálogo.
Las RESTRICCIONES le dicen exactamente dónde no ir.

**Regla:** anota las tres últimas cosas que borraste de un output de Claude. Esas son tus restricciones permanentes.

**Señal de RESTRICCIONES bien definidas:** el primer output ya no tiene las cosas que normalmente editas.

---

## Tabla de diagnóstico rápido — ¿por qué mi output no sirve?

| Síntoma en el output | Elemento faltante | Corrección en 10 segundos |
|---|---|---|
| Demasiado genérico, aplica a cualquier empresa | CONTEXTO incompleto | Agrega producto + ICP + situación actual |
| Tono equivocado (muy formal, muy casual) | ROL mal definido o sin RESTRICCIONES de tono | Especifica industria en el ROL + agrega "Tono: [descripción]" en RESTRICCIONES |
| Demasiado largo, lleno de explicaciones | Sin RESTRICCIONES | Agrega "Sin introducciones. Sin explicar la metodología. Solo el output." |
| Variaciones todas iguales, sin diferenciación | TAREA no especifica ángulos | Agrega "Cada opción debe usar un ángulo diferente: [lista los ángulos]" |
| Estructura diferente a la que necesitas | Sin FORMATO | Especifica exactamente los campos y extensión de cada uno |
| Propone cosas que ya probaste | CONTEXTO sin historial | Agrega "Lo que ya probé: [lista]" al CONTEXTO |

---

## Checklist de validación — antes de enviar el prompt

Antes de presionar Enter, verifica:

- [ ] ¿El ROL incluye industria y especialización específicas?
- [ ] ¿El CONTEXTO tiene producto, ICP y situación actual?
- [ ] ¿La TAREA tiene un verbo de acción y es una sola cosa?
- [ ] ¿El FORMATO especifica cantidad, estructura y extensión?
- [ ] ¿Las RESTRICCIONES mencionan al menos 3 cosas que no quieres?

Si falta alguno de los cinco, complétalo antes de enviar.
El tiempo que inviertes en el brief es menor que el tiempo que perderías editando un output mediocre.

---

## Iteración — qué hacer con el primer output

El brief perfecto no garantiza perfección en la primera ronda.
Garantiza un punto de partida de calidad que se puede refinar rápido.

Protocolo de dos rondas:

**Ronda 1:** envías el brief completo. Evalúas el output.

**Ronda 2:** envías una instrucción de refinamiento específica:
```
[Elemento que funcionó]: está bien, mantenlo.
[Elemento que no funcionó]: reescríbelo con [criterio específico de mejora].
Dame [número] opciones de esa parte solamente.
```

Dos rondas bien ejecutadas casi siempre producen un output listo para usar.
Si en la tercera ronda todavía no funciona, el problema es el CONTEXTO — vuelve y enriquécelo.

---

**Siguiente clase:** Clase 03 — Configura tu cerebro de Growth en Claude.
Vamos a cargar en Claude todo el contexto de tu negocio de una sola vez,
para que el campo CONTEXTO de este brief se llene automáticamente en cada conversación.
