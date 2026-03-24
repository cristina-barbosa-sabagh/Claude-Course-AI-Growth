# Clase 02 — El brief perfecto: cómo hablarle a Claude para obtener outputs de elite
**Instructor A · 14 minutos · Módulo 01**

---

## GUIÓN COMPLETO

---

### INTRO — [0:00–1:00]

*(Pantalla: slide con título de la clase. Instructor en cámara.)*

En la clase anterior viste que Claude puede producir outputs usables en minutos.
Hoy vas a entender por qué a veces no lo hace — y cómo corregirlo en segundos.

La diferencia entre un output mediocre y un output que copias y pegas directo
no está en Claude. Está en cómo le hablas.

Hay una estructura. Cinco elementos. Y cuando los dominas,
el output de Claude cambia de categoría.

Catorce minutos. Vamos.

---

### DESARROLLO 1 — La estructura de prompt que separa outputs mediocres de outputs de elite [1:00–5:30]

*(Pantalla: slide con los 5 elementos — ROL, CONTEXTO, TAREA, FORMATO, RESTRICCIONES)*

Voy a darte la estructura que uso para todo.
No importa si es copy de campaña, análisis de métricas o emails de onboarding.
La estructura es siempre la misma.

Cinco elementos. Ninguno es opcional.

---

**Elemento 1 — ROL**

Le dices a Claude quién es en este contexto.

No "sé un experto en marketing". Eso es demasiado vago.
Sino: *"Actúa como un Growth Marketer con experiencia en SaaS B2B de ciclo de venta corto,
especializado en optimización de conversión en landing pages."*

¿Por qué importa el ROL?
Porque Claude ajusta su nivel de razonamiento, su vocabulario y sus supuestos
basándose en el rol que le das.
Un rol vago produce razonamiento vago.

*(Pantalla: ejemplo visual — prompt sin ROL vs. prompt con ROL específico)*

---

**Elemento 2 — CONTEXTO**

Le das la información que necesita para no inventar supuestos.

Tres datos mínimos para Growth:
- Qué hace tu producto y para quién
- En qué etapa está el funnel del que hablas
- Qué ya sabes o ya has probado

Sin CONTEXTO, Claude rellena los huecos con supuestos genéricos.
Y los supuestos genéricos producen outputs genéricos.

---

**Elemento 3 — TAREA**

La instrucción específica de lo que quieres que haga.

Aquí está el error más común que veo: pedir dos cosas en una tarea.
"Analiza mis métricas y dime qué hacer" — eso son dos tareas.
Primero el análisis. Luego la recomendación. Dos prompts separados dan dos outputs más finos.

La TAREA debe ser una sola cosa, formulada con un verbo de acción:
genera, analiza, reescribe, compara, prioriza.

---

**Elemento 4 — FORMATO**

Le dices exactamente cómo quieres el output.

¿Bullet points o párrafos? ¿Cuántas opciones? ¿Máximo de palabras?
¿Tabla o lista numerada? ¿Con o sin explicaciones?

El FORMATO le ahorra a Claude adivinar tu preferencia —
y te ahorra a ti reformatear el output manualmente.

*(Pantalla: ejemplo de prompt con FORMATO especificado vs. sin especificar)*

---

**Elemento 5 — RESTRICCIONES**

Le dices qué NO quieres.

Esto es lo más subestimado de los cinco.
Las RESTRICCIONES son donde eliminas el relleno:
"Sin introducciones", "Sin explicar lo obvio", "Sin usar la palabra 'innovador'",
"No me des teoría — solo ejemplos accionables".

Un prompt sin RESTRICCIONES le da a Claude permiso para improvisar.
Y cuando improvisa, improvisa safe — que es lo opuesto a útil para Growth.

---

*(Pantalla: slide con la estructura completa — los 5 elementos en una sola vista)*

Eso es el brief perfecto.
ROL + CONTEXTO + TAREA + FORMATO + RESTRICCIONES.

En el entregable tienes una plantilla lista para copiar y llenar.
Úsala las primeras diez veces hasta que la estructura sea automática.

---

### DESARROLLO 2 — Los 5 errores que cometen Chiefs of Growth al usar Claude [5:30–10:00]

*(Pantalla: slide "Los 5 errores — y cómo corregirlos")*

He visto estas sesiones con equipos de Growth de distintas industrias.
Los errores son siempre los mismos cinco. Te los doy en orden de frecuencia.

---

**Error 1 — El prompt de una línea**

"Dame ideas de copy para mi campaña de Meta."

¿Qué falta? El ROL, el CONTEXTO, el FORMATO y las RESTRICCIONES.
Solo hay TAREA — y vaga.

La corrección: agrega los otros cuatro elementos.
No tienes que escribir un ensayo. El brief completo puede ser 10 líneas.

*(Pausa de un segundo.)*

Si tu prompt tiene menos de 5 líneas, probablemente le falta alguno de los cinco elementos.

---

**Error 2 — Confundir cantidad con calidad**

"Dame 20 ideas de headlines."

El problema no es pedir 20. Es que Claude va a darte las primeras 5 buenas
y rellenar las otras 15 con variaciones cada vez más mediocres.

La corrección: pide 3 o 5, con criterio diferenciador.
"Dame 3 headlines. Cada uno con un ángulo diferente: uno apela al miedo,
uno al beneficio económico, uno a la prueba social."

Tres outputs con criterio dan más material útil que veinte sin criterio.

---

**Error 3 — Aceptar el primer output sin iterar**

El primer output de Claude es el punto de partida, no el destino.

La mayoría de Chiefs of Growth que no sacan valor de Claude lo hacen aquí:
leen el output, dicen "no está mal" o "no me convence" y cierran la ventana.

La corrección: siempre da una instrucción de refinamiento en la segunda ronda.
"La opción 2 está bien pero el tono es demasiado formal. Reescríbela manteniendo el mismo ángulo pero con un tono más directo."

Dos rondas de iteración casi siempre producen un output listo para usar.

---

**Error 4 — Cambiar de tema sin cambiar de conversación**

Están en el mismo chat: analizaron métricas, luego pidieron copy, luego preguntaron por estrategia.

El problema: Claude acumula contexto de conversación y a veces confunde los marcos.
El output empieza a mezclar las instrucciones de las distintas tareas.

La corrección: conversaciones separadas para tareas distintas.
Un chat para análisis. Un chat para copy. Un chat para estrategia.
Dentro de tu Project, cada tarea vive en su propia conversación.

---

**Error 5 — No decirle a Claude cuándo está equivocado**

Claude puede estar equivocado. Sobre tu industria, sobre tus números, sobre tu ICP.
Y si no lo corriges, el error se propaga en el output.

La corrección: trátalo como tratas a un analista inteligente pero nuevo en tu equipo.
Si dice algo incorrecto, díselo directamente:
"Eso no aplica a mi caso. En mi industria, el CAC promedio es X y el ciclo de venta es Y. Ajusta la recomendación."

Claude no se ofende. Y el output siguiente va a ser mucho más preciso.

---

*(Pantalla: slide con los 5 errores y sus correcciones en formato tabla)*

Cinco errores. Cinco correcciones.
Cada uno tarda menos de 30 segundos en aplicar.

---

### DEMO EN VIVO — Del prompt vago al brief de elite: comparación lado a lado [10:00–13:00]

*(Pantalla: pantalla completa — claude.ai abierto en el Project del curso)*

Ahora lo vemos en vivo.
Voy a tomar un prompt real que me ha llegado de Chiefs of Growth —
tal como lo escribieron — y lo voy a transformar en un brief de elite.
Después comparo los dos outputs lado a lado.

*(Instructor ejecuta el demo — ver archivo demo.md para los pasos exactos)*

*(Mientras ejecuta)*

Noten la diferencia en el output.
No es sutil. Es una categoría completamente diferente.

El primer output podría ser de cualquier empresa del planeta.
El segundo podría ir directamente al equipo de diseño.

Esa diferencia se hizo en menos de dos minutos de trabajo extra.
Eso es el ROI del brief perfecto.

---

### CIERRE — [13:00–14:00]

*(Instructor en cámara. Slide con entregable visible.)*

Tu entregable de esta clase es la Plantilla de Brief Universal para Growth.
Cinco campos. Quince minutos para llenarla con tu primer caso de uso.

Cuando la uses, vas a notar algo:
el tiempo que tardas en escribir el brief es menor que el tiempo que tardarías
revisando un output mediocre.

El brief no es overhead. Es el atajo.

Clase 3: cargamos todo el contexto de tu negocio en Claude de una vez.
Desde ese momento, no vas a tener que poner el CONTEXTO en cada prompt
porque Claude ya lo va a tener.

Nos vemos ahí.

---

## NOTAS DE PRODUCCIÓN

| Elemento | Detalle |
|---|---|
| Duración objetivo | 14 minutos exactos |
| Slides necesarios | 5: título, los 5 elementos, prompt sin/con formato, los 5 errores + correcciones, entregable |
| Demo | Pantalla completa — ver demo.md |
| Ritmo | Denso. Cada error se presenta en 60–75 segundos. Sin explicaciones redundantes. |
| Tono | Directo, experto, como alguien que ha visto estos errores cien veces |
| Énfasis | Marcar con pausa el nombre de cada elemento y cada error antes de explicarlo |
| Transición demo | Antes del demo, tener el prompt vago ya copiado en un archivo de texto listo para pegar |
