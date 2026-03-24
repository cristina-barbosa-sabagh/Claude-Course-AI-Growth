# Demo en Vivo — Campaña real a 5 variaciones de copy en menos de 10 minutos
**Clase 04 · Instructor B · Segmento: 11:00–15:00 del guión**

---

## Objetivo del demo

Mostrar el flujo completo de análisis + generación en tiempo real: desde pegar datos de una campaña activa hasta tener 5 variaciones de copy por canal listas para subir — usando el Project de Growth ya configurado.

Tiempo de ejecución en pantalla: **< 8 minutos**.

---

## Setup antes de grabar

- [ ] Abrir el Project de Growth en Claude.ai (debe tener instrucciones de sistema cargadas — ICP, tono, producto)
- [ ] Tener los datos de campaña anonimizados listos en un archivo de texto separado (preparar antes de grabar — ver datos de ejemplo abajo)
- [ ] Tener el entregable de la clase (entregable.md) abierto en otra pestaña para mostrar la plantilla
- [ ] Pantalla compartida activa, resolución legible
- [ ] Ninguna otra pestaña visible que no sea Claude y los datos de ejemplo

---

## Datos de campaña de ejemplo para el demo

*(Usar estos datos anonimizados durante la grabación. Son lo suficientemente reales para que el output de Claude sea bueno.)*

```
DATOS DE CAMPAÑAS ACTIVAS — PERÍODO: últimos 14 días
CANAL: Meta Ads

Campaña 1 — "Prueba gratuita — audiencia fría"
- Objetivo: conversiones (registro prueba gratuita)
- Presupuesto diario: $80
- CTR: 1.8%
- CPC: $1.20
- Costo por registro: $14
- Copy del anuncio ganador:
  Headline: "¿Tu equipo pierde 3 horas por semana en reportes?"
  Texto: "Los Sales Managers de empresas como [cliente] redujeron su tiempo de reporte
  de 3 horas a 20 minutos. Sin cambiar su CRM. Sin migrar datos.
  Prueba gratuita — sin tarjeta de crédito."
  CTA: "Empieza gratis"

- Copy del anuncio con peor performance:
  Headline: "Reportes de ventas en minutos con [Producto]"
  Texto: "[Producto] conecta con Salesforce para automatizar tus reportes semanales.
  Más tiempo. Menos errores. Equipos más eficientes.
  Prueba 14 días gratis."
  CTA: "Probar ahora"
  CTR: 0.6%

Campaña 2 — "Retargeting — visitaron pricing"
- Objetivo: conversiones
- Presupuesto diario: $40
- CTR: 3.2%
- CPC: $0.85
- Costo por registro: $9
- Copy del anuncio ganador:
  Headline: "Todavía estás pensándolo. Te entiendo."
  Texto: "La mayoría de Sales Managers que prueban [Producto] deciden en el primer reporte.
  14 días. Sin compromiso. Y si no ves el resultado, cancelas en 30 segundos."
  CTA: "Empieza los 14 días"

ICP: Sales Managers en empresas B2B de 50–200 empleados. Usan Salesforce. Equipo de 5–15 reps.
Oferta activa: prueba gratuita de 14 días, sin tarjeta de crédito.
Restricciones: no mencionar precio en el copy.
```

---

## El demo: paso a paso exacto

---

### PASO 1 — Mostrar el Project con contexto cargado [45 seg]

*(Instructor muestra el Project de Growth abierto — instrucciones de sistema visibles)*

**Narración:**
> "Arranco desde el Project. Ya tiene cargado el ICP, el producto y el tono.
> No voy a explicarle a Claude quién soy — ya lo sabe.
> Lo que sí voy a hacer es darle los datos de campaña de esta semana."

---

### PASO 2 — Pegar los datos y lanzar el análisis [1 min 30 seg]

*(Instructor abre nueva conversación dentro del Project. Pega los datos de campaña del archivo de texto.)*

**Narración mientras pega:**
> "Este bloque son los datos de la última quincena. Meta Ads. Dos campañas.
> Fíjate que incluyo el copy de los anuncios que están corriendo — el que gana y el que pierde.
> Esa diferencia es lo más valioso que le puedo dar a Claude para que analice qué está pasando."

*(Después de pegar los datos, el instructor escribe el Prompt A del entregable)*

**Lo que escribe el instructor:**
```
Antes de generar copy nuevo, analiza los datos que te compartí y dime:

1. ¿Qué patrón tienen los anuncios con mejor CTR? (ángulo, estructura, punto de entrada del copy)
2. ¿Qué ángulo o hook está resonando más con mi audiencia según los datos?
3. ¿Por qué crees que el anuncio con peor performance no está funcionando? ¿Qué cambiarías primero?
4. ¿Cuál es el siguiente ángulo que recomendarías testear y por qué?

Sé específico. Usa los datos que te di. No me des respuestas genéricas.
```

*(Presiona Enter. Espera en silencio mientras Claude genera.)*

**Narración mientras aparece el output:**
> "Mira lo que está identificando. El patrón del anuncio ganador es una pregunta que nombra el dolor exacto del ICP — '¿Tu equipo pierde 3 horas por semana?'. El que no funciona empieza con el nombre del producto. Eso es lo que Claude detecta.
> ¿Es obvio en retrospectiva? Sí. Pero nadie en tu equipo va a decirte esto en 40 segundos analizando 14 días de datos."

---

### PASO 3 — Generar las 5 variaciones para Meta [2 min]

*(Sin salir del chat, el instructor escribe el Prompt B del entregable — adaptado al ejemplo)*

**Lo que escribe el instructor:**
```
Con base en tu análisis, genera 5 variaciones de anuncio para Meta Ads.

Objetivo de campaña: conversiones (registro a prueba gratuita)
Audiencia: fría — Sales Managers que no conocen el producto

Formato exacto para cada variación:
---
VARIACIÓN [número]
Ángulo: [describe en 1 línea]
Headline (máx. 40 caracteres): [texto]
Texto principal (máx. 3 líneas):
[línea 1 — hook]
[línea 2 — desarrollo]
[línea 3 — cierre o prueba social]
CTA (máx. 20 caracteres): [texto]
---

Reglas:
- Cada variación con ángulo diferente al anuncio ganador actual
- El hook no puede empezar con el nombre del producto
- Sin frases como "descubre", "transforma", "potencia"
- El copy debe leerse como algo que un humano escribiría
```

*(Espera el output. Lee en voz alta las 5 variaciones mientras aparecen, señalando en pantalla.)*

**Narración mientras lee el output:**
> "Fíjate en los ángulos. Variación 1: entra con un dato de la industria. Variación 2: empieza con la objeción — 'Ya probamos automatización y no funcionó'. Variación 3: historia de un solo rep del equipo. Variación 4: pregunta sobre el lunes de reportes. Variación 5: afirmación sobre los competidores.
> Cinco ángulos distintos. Ninguno es una variación cosmética del otro. Eso es lo que necesito para aprender rápido qué resuena."

---

### PASO 4 — Refinar en tiempo real [1 min]

*(Instructor elige una variación — la 2, por ejemplo — y ejecuta el refinamiento)*

**Lo que escribe:**
```
La variación 2 me interesa pero el headline es demasiado largo.
Dame 3 versiones del headline en máximo 35 caracteres, manteniendo el ángulo de la objeción.
Explica en 1 línea por qué cada versión podría funcionar.
```

*(Espera el output. Lee las 3 opciones.)*

**Narración:**
> "30 segundos. Tres opciones. Cada una con una lógica distinta.
> Ahora puedo tomar una decisión — no tengo que pensar en cómo redactarlo.
> Solo tengo que elegir."

---

### PASO 5 — El cierre del demo: mostrar el entregable [30 seg]

*(Instructor cambia a la pestaña del entregable.md)*

**Narración:**
> "Todo lo que hicimos en este demo está sistematizado en el entregable.
> Bloque 1: tu contexto de negocio — lo rellenas una vez.
> Bloque 2: los datos de campaña — los actualizas cada semana.
> Bloque 3: los prompts listos para cada canal.
> Llevas este archivo a tu operación y el ciclo de análisis + generación tarda 10 minutos.
> No una hora. No una reunión. Diez minutos."

---

## Qué NO hacer en el demo

| No hacer | Por qué |
|---|---|
| Pegar datos sin el copy de los anuncios actuales | El análisis de Claude pierde la mitad de su valor — necesita ver qué está corriendo para identificar patrones |
| Generar variaciones sin hacer el análisis previo (Prompt A) | El output será bueno pero desconectado de la evidencia real — se pierde el diferencial del flujo |
| Mostrar 5 variaciones sin leer los ángulos en voz alta | El estudiante no entiende que son variaciones conceptualmente distintas, no solo variaciones de palabras |
| Saltarse el paso de refinamiento | El refinamiento demuestra que Claude no es un generador de una sola vuelta — la iteración rápida es central al flujo |
| Usar más de 8 minutos | La promesa de la clase es velocidad. Si el demo tarda más, la promesa se rompe en vivo. |
| Mostrar un output perfecto sin señalar lo que editarías | Crea expectativas irreales. Siempre señala 1 cosa que cambiarías — eso refuerza que Claude es co-piloto, no auto-pilot. |

---

## Métricas de éxito del demo

El demo funcionó si al final el estudiante piensa:

- "Puedo hacer esto ahora mismo con mi campaña actual"
- "Entiendo por qué el análisis previo cambia la calidad del output"
- "El ciclo de una semana es realista — no tengo excusa para no implementarlo"

Si hay esas tres reacciones, el demo cumplió su objetivo.
