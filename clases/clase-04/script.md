# Máquina de adquisición: copies de Meta, Google y email en minutos — GUIÓN EN PANTALLA
**Instructor B · 16 minutos · Módulo 02**

---

## 1. ABRO CLAUDE Y MUESTRO EL PROJECT

Abro Claude.ai y entro directamente al Project de Growth que ya tenemos configurado.

[ACCIÓN EN PANTALLA: abrir claude.ai en el navegador, hacer clic en el Project "Growth — [Empresa]", mostrar las instrucciones de sistema cargadas con el ICP y el contexto del producto]

Fíjate que el Project ya tiene el contexto del negocio. No voy a explicarle a Claude quién soy cada vez que abro una conversación. Eso está resuelto. Lo que sí voy a hacer ahora es darle los datos de campaña de esta semana.

[ACCIÓN EN PANTALLA: abrir nueva conversación dentro del Project con clic en "New Chat"]

---

## 2. PEGO LOS DATOS DE CAMPAÑA

Tengo aquí un archivo de texto con los datos de los últimos 14 días en Meta Ads. Lo abro y pego el contenido completo en Claude.

[ACCIÓN EN PANTALLA: abrir el archivo de texto con datos de campaña, seleccionar todo (Cmd+A), copiar, pegar en el campo de texto de Claude]

Lo que estoy pegando incluye el copy de los anuncios que están corriendo ahora mismo: el que gana y el que pierde. Esa diferencia es lo más valioso que le puedo dar a Claude para que analice qué está funcionando y por qué.

Después de pegar los datos, añado este prompt justo debajo:

```
Antes de generar copy nuevo, analiza los datos que te compartí y dime:

1. ¿Qué patrón tienen los anuncios con mejor CTR? (ángulo, estructura, punto de entrada del copy)
2. ¿Qué ángulo o hook está resonando más con mi audiencia según los datos?
3. ¿Por qué crees que el anuncio con peor performance no está funcionando? ¿Qué cambiarías primero?
4. ¿Cuál es el siguiente ángulo que recomendarías testear y por qué?

Sé específico. Usa los datos que te di. No me des respuestas genéricas.
```

[ACCIÓN EN PANTALLA: escribir el prompt debajo de los datos pegados, presionar Enter, esperar en silencio mientras Claude genera la respuesta]

---

## 3. LEO EL ANÁLISIS EN VOZ ALTA

Mira lo que está identificando Claude.

[ACCIÓN EN PANTALLA: hacer scroll lentamente por el output de Claude, señalar con el cursor los puntos clave mientras se habla]

El patrón del anuncio ganador es una pregunta que nombra el dolor exacto del ICP: "¿Tu equipo pierde 3 horas por semana en reportes?". El que no funciona empieza con el nombre del producto. Claude detecta ese patrón en 40 segundos. Un analista humano revisando esos mismos datos tardaría una reunión de 45 minutos y probablemente llegaría a la misma conclusión.

---

## 4. PIDO LAS 5 VARIACIONES PARA META

Ahora, sin salir de este chat, pego el siguiente prompt:

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
- El copy debe leerse como algo que un humano escribiría, no como publicidad corporativa
```

[ACCIÓN EN PANTALLA: pegar el prompt en el campo de texto de Claude, presionar Enter, esperar el output sin hablar]

---

## 5. LEO LAS VARIACIONES Y SEÑALO LOS ÁNGULOS

[ACCIÓN EN PANTALLA: hacer scroll por las 5 variaciones, señalar con el cursor el campo "Ángulo" de cada una mientras se lee en voz alta]

Fíjate en los ángulos. Variación 1: entra con un dato de la industria. Variación 2: empieza con la objeción directa — "Ya probamos automatización y no funcionó". Variación 3: historia de un solo rep del equipo. Variación 4: pregunta sobre el lunes de reportes. Variación 5: afirmación sobre lo que hacen los competidores.

Cinco ángulos distintos. Ninguno es una variación cosmética del otro. Eso es lo que necesito para aprender rápido qué resuena con mi audiencia.

---

## 6. REFINO UNA VARIACIÓN EN TIEMPO REAL

La variación 2 me interesa pero el headline es largo. Pego esto:

```
La variación 2 me interesa pero el headline es demasiado largo.
Dame 3 versiones del headline en máximo 35 caracteres, manteniendo el ángulo de la objeción.
Explica en 1 línea por qué cada versión podría funcionar.
```

[ACCIÓN EN PANTALLA: escribir el prompt de refinamiento, presionar Enter, esperar el output]

Treinta segundos. Tres opciones. Cada una con una lógica distinta. Ahora puedo tomar una decisión sin tener que pensar en cómo redactarlo. Solo tengo que elegir.

---

## 7. PASO A GOOGLE SEARCH ADS

Abro una nueva conversación en el mismo Project y pego este prompt directamente:

```
Con base en el contexto de mi negocio que ya conoces, genera 5 variaciones de anuncio para Google Search.

Contexto de intención de búsqueda:
- Palabras clave principales: "software reportes ventas", "automatizar reportes Salesforce", "reportes equipo ventas"
- Etapa del funnel: intención de compra alta — el usuario está buscando una solución activamente
- Competidores que también aparecen en esa búsqueda: Clari, Gong, Tableau

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

[ACCIÓN EN PANTALLA: abrir nueva conversación en el Project, pegar el prompt completo, presionar Enter, mostrar el output cuando aparece]

---

## 8. TERMINO CON EL EMAIL FRÍO

Último canal. Mismo Project, nueva conversación:

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

[ACCIÓN EN PANTALLA: abrir nueva conversación en el Project, pegar el prompt completo, presionar Enter, esperar el output y hacer scroll por las 3 variaciones mientras se leen en voz alta]

---

## 9. RESUMEN DE LO QUE ACABA DE PASAR

[ACCIÓN EN PANTALLA: mostrar las tres conversaciones abiertas en el Project — Meta, Google, Email — haciendo clic entre pestañas]

En menos de 12 minutos: análisis de campañas activas, 5 variaciones para Meta con ángulos distintos, 5 variaciones para Google con límites de caracteres correctos, y 3 emails fríos listos para cargar.

Todo esto partió de los datos reales de esta semana, no de un brief genérico.

Tu tarea está en el entregable. Lleva tus propios datos de campaña, usa los prompts que acabas de ver, y tráete el output a la siguiente sesión.

---

*Duración estimada del guión: 14–16 minutos de grabación en pantalla*
