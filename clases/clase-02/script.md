# Clase 02 — El brief perfecto: cómo hablarle a Claude para obtener outputs de elite — GUIÓN EN PANTALLA

---

## 1. Abro Claude y muestro lo que NO hay que hacer

[ACCIÓN EN PANTALLA: abrir claude.ai, abrir el Project creado en Clase 01, crear una conversación nueva]

Abro Claude. Estoy en mi Project de Growth. Conversación nueva.

Voy a escribir el prompt que me llega el 80% de las veces cuando alguien dice que Claude "no le sirve":

```
Dame ideas de copy para una campaña de Meta Ads de una empresa SaaS B2B.
```

[ACCIÓN EN PANTALLA: pegar ese prompt de una línea, presionar Enter, esperar el output completo]

Miren el output. Es correcto. Es razonable. Y es completamente inútil para producción.

Podría ser de cualquier empresa SaaS del planeta. No habla de ningún dolor específico. No tiene ángulos diferenciados. Para subir alguno de estos a producción necesitaría editarlo todo: el tono, el ángulo, el ICP, el CTA.

Ese trabajo de edición es exactamente lo que queremos eliminar.

El problema no es Claude. Es el prompt.

---

## 2. Ahora muestro el brief perfecto con los 5 elementos

[ACCIÓN EN PANTALLA: abrir una segunda conversación nueva en el mismo Project]

Segunda conversación. Mismo producto, mismo canal, mismo objetivo. Brief diferente.

Voy a pegar esto:

```
ROL:
Actúa como un Growth Marketer B2B SaaS con experiencia en adquisición de usuarios mediante Meta Ads y ciclos de venta de menos de 30 días. Especializado en copy orientado a conversión directa, no a awareness.

CONTEXTO:
Producto: Dataflow ayuda a Sales Managers a eliminar el reporte semanal manual — el equipo registra actividad en Salesforce y Dataflow genera el reporte automáticamente en 20 minutos. Sin IT, sin código.
ICP: Sales Managers en empresas de 50–200 empleados, equipo de 5–15 reps, que usan Salesforce y pierden entre 3 y 4 horas cada viernes consolidando datos manualmente.
Situación actual: campaña de prueba gratuita de 14 días activa en Meta. CTR actual: 0.8%. Hipótesis: el copy no está articulando el dolor específico del ICP.
Lo que ya probé: headlines sobre "automatización de reportes" y "ahorra tiempo". No movieron el CTR en 3 semanas.

TAREA:
Genera 3 variaciones de copy para anuncio de Meta Ads.
Objetivo: click a página de prueba gratuita de 14 días.
Cada variación debe usar un ángulo diferente: uno apela al dolor del viernes perdido, uno al riesgo de datos inconsistentes, uno a la identidad del Sales Manager moderno.

FORMATO:
- 3 variaciones numeradas
- Cada variación: Headline (máx. 6 palabras) + Texto principal (máx. 3 líneas) + CTA (máx. 4 palabras)
- Debajo de cada variación: una línea con el ángulo psicológico que usa

RESTRICCIONES:
- Sin introducciones ni explicaciones antes del output
- No usar: automatización, innovador, potente, solución, plataforma
- Sin jerga técnica que un Sales Manager no diría en una reunión
- El texto debe sonar como si lo escribiera alguien que conoce la oficina del ICP
```

[ACCIÓN EN PANTALLA: pegar el brief completo, presionar Enter, esperar el output completo, hacer scroll para mostrar las 3 variaciones con sus ángulos]

Miren la diferencia.

La variación 1 habla del viernes. Del momento exacto donde el dolor del ICP es más alto. No habla del producto — habla del problema.

La variación 3 habla de cómo se ve el Sales Manager que ya superó esto. Eso es el ángulo de identidad.

¿Puedo subir alguna hoy? Sí. La 1 y la 3 — directo al equipo de diseño.

Mismo producto. Mismo canal. Mismo objetivo. Un prompt de una línea dio basura. Un brief de 5 elementos dio producción.

---

## 3. Desgloso los 5 elementos en pantalla mientras los señalo

[ACCIÓN EN PANTALLA: desplazarse hacia arriba en el chat para mostrar el brief completo, señalar con el cursor cada sección mientras se habla]

Los 5 elementos son: ROL, CONTEXTO, TAREA, FORMATO, RESTRICCIONES.

Mientras señalo cada sección del brief que acabo de pegar:

**ROL.** Le digo quién es en este contexto. No "experto en marketing". Cargo específico, industria específica, especialización específica. Claude ajusta su nivel de razonamiento basándose en el rol. Un rol vago produce razonamiento vago.

[ACCIÓN EN PANTALLA: señalar con el cursor la sección ROL del brief visible en pantalla]

**CONTEXTO.** Le doy los datos que necesita para no inventar supuestos. Producto, ICP, situación actual y — esto es clave — lo que ya probé. Si no le digo qué ya intenté, Claude va a proponer exactamente eso.

[ACCIÓN EN PANTALLA: señalar la sección CONTEXTO]

**TAREA.** Una sola cosa. Un verbo de acción. "Genera", "analiza", "reescribe". Si pones dos tareas en un prompt, el output mezcla ambas y ninguna queda bien. Dos tareas: dos prompts.

[ACCIÓN EN PANTALLA: señalar la sección TAREA]

**FORMATO.** Le digo exactamente cómo quiero el output. Cuántas variaciones, qué componentes tiene cada una, límite de palabras. Si no especifico el formato, Claude decide solo. Y cuando decide solo, agrega secciones que no pedí y extensión que no uso.

[ACCIÓN EN PANTALLA: señalar la sección FORMATO]

**RESTRICCIONES.** Lo más subestimado de los cinco. Aquí elimino el relleno: qué palabras no quiero, qué tono evitar, qué estructura no usar. Sin restricciones, Claude improvisa safe — que es lo opuesto a útil para Growth.

[ACCIÓN EN PANTALLA: señalar la sección RESTRICCIONES, luego desplazarse hacia abajo para mostrar el output]

---

## 4. Muestro cómo itero si el primer output no es perfecto

[ACCIÓN EN PANTALLA: seguir en la misma conversación del brief completo, desplazarse al campo de texto]

El brief perfecto no garantiza perfección en la primera ronda. Garantiza un punto de partida de calidad que se refina rápido.

En la misma conversación, escribo esto:

```
La variación 2 está bien pero el tono es demasiado formal para el ICP. El Sales Manager que tenemos en mente habla directo en reuniones, no escribe presentaciones. Reescribe el texto principal manteniendo el ángulo de datos inconsistentes pero con un tono más de colega que de consultor. Dame 2 opciones.
```

[ACCIÓN EN PANTALLA: pegar el prompt de iteración, presionar Enter, mostrar las 2 opciones que devuelve Claude]

Dos opciones con el tono ajustado. Una sola instrucción de refinamiento. Sin repetir todo el CONTEXTO. Sin explicar desde cero.

Eso es porque Claude mantiene el contexto de la conversación. No repito el ICP. No repito el producto. Solo digo qué ajustar y por qué.

---

## 5. El diagnóstico: cómo saber qué elemento le falta a un prompt

[ACCIÓN EN PANTALLA: abrir una conversación nueva en Claude, mostrar el campo de texto vacío]

Hay un truco rápido para diagnosticar qué le falta a un prompt cuando el output no sirve.

Si el output es demasiado genérico, le falta CONTEXTO.
Si el tono está mal, le falta especificidad en el ROL o en RESTRICCIONES.
Si es demasiado largo y lleno de explicaciones, le faltan RESTRICCIONES.
Si las variaciones son todas iguales, la TAREA no especificó ángulos diferentes.
Si la estructura no es la que necesitas, le falta FORMATO.

El diagnóstico tarda 10 segundos. La corrección tarda 30.

---

## 6. Lo que viene en la Clase 3

[ACCIÓN EN PANTALLA: mostrar el sidebar de Claude con las conversaciones de la clase, señalar el nombre del Project]

Ahora ya sabes cómo construir un brief. El problema es que el campo de CONTEXTO — el que más tarda en escribir — tienes que repetirlo en cada prompt.

En la Clase 3 lo cargamos en Claude una sola vez. El ICP, las métricas, el tono, la propuesta de valor — todo dentro de tu Project. Desde ese momento, cada respuesta de Claude tiene ese contexto sin que lo pidas.

Tu tarea ahora: ve al entregable, construye tu primer brief con los 5 elementos para tu caso de uso de mayor impacto. Lo usas en la Clase 3.
