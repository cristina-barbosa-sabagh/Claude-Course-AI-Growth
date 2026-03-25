# DEMO PASO A PASO — Copies de Meta, Google y email en minutos

---

**Paso 1 — Abre tu Project de Growth en Claude.ai**

- Ve a claude.ai → haz clic en el Project de Growth
- Abre una nueva conversación ("New Chat")
- Deberías ver esto en pantalla: el campo de texto vacío, y en la barra lateral el nombre del Project con instrucciones de sistema ya cargadas (ICP, tono de marca, descripción del producto)

---

**Paso 2 — Prepara los datos de campaña en un archivo de texto separado**

- Abre un archivo .txt o Notas con este bloque exacto (reemplaza los valores con los tuyos reales):

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
  Headline: "Reportes de ventas en minutos con SalesFlow"
  Texto: "SalesFlow conecta con Salesforce para automatizar tus reportes semanales.
  Más tiempo. Menos errores. Equipos más eficientes."
  CTA: "Probar ahora"
  CTR: 0.6%

ICP: Sales Managers en empresas B2B de 50–200 empleados. Usan Salesforce.
Oferta activa: prueba gratuita de 14 días, sin tarjeta de crédito.
Restricciones: no mencionar precio en el copy.
```

- Deberías ver esto en pantalla: el bloque de texto completo listo para copiar

---

**Paso 3 — Pega los datos en Claude y pide el análisis previo**

- Selecciona todo el bloque de datos (Cmd+A en el archivo)
- Cópialo y pégalo en el chat de Claude
- Inmediatamente debajo de los datos, escribe este prompt exacto:

```
Antes de generar copy nuevo, analiza los datos que te compartí y dime:

1. ¿Qué patrón tienen los anuncios con mejor CTR? (ángulo, estructura, punto de entrada del copy)
2. ¿Qué ángulo o hook está resonando más con mi audiencia según los datos?
3. ¿Por qué crees que el anuncio con peor performance no está funcionando? ¿Qué cambiarías primero?
4. ¿Cuál es el siguiente ángulo que recomendarías testear y por qué?

Sé específico. Usa los datos que te di. No me des respuestas genéricas.
```

- Presiona Enter
- Deberías ver esto en pantalla: un análisis de 4 puntos donde Claude identifica que el anuncio ganador empieza con una pregunta que nombra el dolor del ICP, mientras el perdedor empieza con el nombre del producto

---

**Paso 4 — Pide las 5 variaciones para Meta Ads**

- En el mismo chat (sin abrir una conversación nueva), pega este prompt:

```
Con base en tu análisis, genera 5 variaciones de anuncio para Meta Ads.

Objetivo de campaña: conversiones (registro a prueba gratuita)
Audiencia: fría — Sales Managers en empresas B2B de 50 a 200 empleados que no conocen el producto

Formato exacto para cada variación:
---
VARIACIÓN [número]
Ángulo: [describe el ángulo en 1 línea — para que yo sepa qué estoy testeando]
Headline (máx. 40 caracteres): [texto]
Texto principal (máx. 3 líneas):
[línea 1 — el hook]
[línea 2 — el desarrollo]
[línea 3 — el cierre o prueba social]
CTA (máx. 20 caracteres): [texto]
---

Reglas:
- Cada variación con ángulo diferente al anuncio ganador actual
- El hook no puede empezar con el nombre del producto
- Sin frases como "descubre", "transforma", "potencia"
- El copy debe leerse como algo que un humano escribiría
```

- Deberías ver esto en pantalla: 5 bloques claramente separados con el formato solicitado, cada uno con un ángulo distinto nombrado en la primera línea (dato de industria, objeción directa, historia de un rep, pregunta de lunes, afirmación sobre competidores)

---

**Paso 5 — Refina el headline de la variación que más te convence**

- Elige la variación más interesante (por ejemplo la variación 2)
- Pega este prompt adaptando el número:

```
La variación 2 me interesa pero el headline es demasiado largo.
Dame 3 versiones del headline en máximo 35 caracteres, manteniendo el ángulo de la objeción.
Explica en 1 línea por qué cada versión podría funcionar.
```

- Deberías ver esto en pantalla: 3 opciones de headline numeradas, cada una seguida de una línea de explicación de la lógica

---

**Paso 6 — Abre nueva conversación para Google Search Ads**

- Haz clic en "New Chat" dentro del mismo Project (el contexto de negocio sigue cargado)
- Pega este prompt directamente sin necesidad de pegar datos nuevos:

```
Con base en el contexto de mi negocio que ya conoces, genera 5 variaciones de anuncio para Google Search.

Contexto de intención de búsqueda:
- Palabras clave principales: "software reportes ventas", "automatizar reportes Salesforce", "reportes equipo ventas"
- Etapa del funnel: intención de compra alta — el usuario está buscando una solución activamente
- Competidores directos en esa búsqueda: Clari, Gong, Tableau

Formato exacto para cada variación:
---
VARIACIÓN [número]
Ángulo: [describe en 1 línea]
Título 1 (máx. 30 caracteres): [texto]
Título 2 (máx. 30 caracteres): [texto]
Título 3 (máx. 30 caracteres): [texto]
Descripción 1 (máx. 90 caracteres): [texto]
Descripción 2 (máx. 90 caracteres): [texto]
---

Reglas:
- Al menos un título por variación debe incluir una de las palabras clave principales
- Las descripciones deben terminar con una acción implícita o explícita
- No repitas el mismo beneficio en Título 1 y Descripción 1
- Cada variación debe tener estructura diferente en los titulares
```

- Deberías ver esto en pantalla: 5 variaciones con todos los campos dentro de los límites de caracteres de Google Ads (30 chars por título, 90 por descripción)

---

**Paso 7 — Verifica los límites de caracteres de Google manualmente**

- Para cada variación, cuenta los caracteres de los títulos (deben ser máximo 30)
- Si algún título supera el límite, pide:

```
El Título 2 de la variación 3 tiene [N] caracteres — supera el límite de 30.
Dame 2 alternativas de ese título en máximo 28 caracteres manteniendo el mismo ángulo.
```

- Deberías ver esto en pantalla: 2 opciones alternativas de título dentro del límite

---

**Paso 8 — Abre nueva conversación para email frío**

- Haz clic en "New Chat" dentro del mismo Project
- Pega este prompt:

```
Con base en el contexto de mi negocio, genera 3 variaciones de email frío para outbound.

ICP objetivo: Sales Managers en empresas B2B de 50 a 200 empleados. Usan Salesforce. Equipo de 5 a 15 reps. Odian hacer reportes manuales los lunes.
Objetivo del email: conseguir una respuesta o un clic — no vender en el primer contacto.
Longitud: corto, máximo 120 palabras por email.

Formato exacto para cada variación:
---
VARIACIÓN [número]
Ángulo: [describe en 1 línea]
Asunto (máx. 50 caracteres): [texto]
Preheader (máx. 90 caracteres): [texto]
Cuerpo:
[Párrafo 1 — hook: conecta con el dolor o contexto del lector]
[Párrafo 2 — puente: cómo resuelves ese dolor en términos concretos]
[Párrafo 3 — CTA: una sola acción, no dos]
---

Reglas:
- El cuerpo no puede empezar con el nombre de la empresa ni con "Hola [nombre]"
- Sin frases de relleno: "espero que estés bien", "me permito contactarte"
- El tono debe sonar como un mensaje de un colega, no de un vendedor
- El CTA debe ser una sola pregunta o una sola acción — no ambas
```

- Deberías ver esto en pantalla: 3 emails completos con asunto + preheader + cuerpo de 3 párrafos cortos, ninguno comenzando con el nombre de la empresa

---

**Paso 9 — Elige un email y pide 5 variaciones de asunto para A/B test**

- Elige el email que más te convence (por ejemplo variación 1)
- Pega:

```
Del email de la variación 1, quiero testear el asunto en A/B.
Dame 5 versiones del asunto con ángulos diferentes:
- 1 con pregunta directa
- 1 con dato numérico
- 1 con nombre de empresa del destinatario (usa [empresa] como placeholder)
- 1 con urgencia real (solo si la hay — si no, no la inventes)
- 1 muy corto (máximo 25 caracteres)

Cada asunto en máximo 50 caracteres.
```

- Deberías ver esto en pantalla: 5 asuntos numerados con el ángulo identificado junto a cada uno

---

**Paso 10 — Guarda los outputs**

- Para cada canal (Meta, Google, Email): copia el output de Claude y pégalo en un documento separado
- Nombra cada documento: "Variaciones Meta — [fecha]", "Variaciones Google — [fecha]", "Emails fríos — [fecha]"
- Marca con destacado la variación que subirás primero y la hipótesis de por qué va a funcionar

- Deberías ver esto en pantalla: tres documentos guardados con los outputs listos para subir a las plataformas
