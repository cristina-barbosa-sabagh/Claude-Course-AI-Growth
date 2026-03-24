# Clase 06 — War Room de Growth: un dashboard en vivo donde Claude es tu estratega
**Instructor A · 16 minutos · Módulo 02**

---

## GUIÓN COMPLETO

---

### INTRO — [0:00–1:00]

*(Pantalla: slide con título de la clase. Instructor en cámara.)*

Pregunta directa: ¿cuántas veces por semana revisas tus métricas de Meta, Google y email en tres pestañas distintas, calculas a mano dónde está cayendo el funnel y terminas tomando la misma decisión de siempre porque no tienes tiempo para analizar todo a la vez?

La respuesta honesta para la mayoría de equipos es: todos los días.

Hoy eso se termina.

En los próximos 16 minutos construyes tu War Room de Growth: una sola pantalla en Google Sheets donde pegas tus métricas cada mañana, Claude las lee, detecta dónde se está rompiendo el funnel y te da **una** recomendación clara de dónde mover presupuesto o esfuerzo ese día.

Una. No cinco. Una.

Porque el problema no es que falten datos. Es que sobran y nadie decide.

Vamos.

---

### DESARROLLO 1 — La estructura del War Room: qué va dónde y por qué [1:00–6:00]

*(Pantalla: slide con la estructura visual del War Room en Google Sheets — tres secciones coloreadas)*

El War Room tiene una lógica muy específica. No es un reporte. No es un dashboard de vanity metrics. Es una pantalla de decisión. Y tiene exactamente tres zonas.

---

**Zona 1 — Métricas de entrada (el tráfico que pagas)**

Aquí pegas cada mañana los números de ayer. Meta Ads, Google Ads y email. Nada más.

Columnas: fecha, canal, impresiones, clics, CTR, CPM, CPC, conversiones, costo por conversión.

No necesitas exportar. No necesitas una integración. Abres la plataforma, copias la tabla de ayer, pegas en el Sheet. Dos minutos.

*(Pausa.)*

¿Por qué solo ayer? Porque la decisión que tomas hoy es sobre lo que pasó ayer. El análisis semanal lo haces el viernes. El War Room es para decisiones de hoy.

---

**Zona 2 — Métricas de activación y retención (lo que pasa después del clic)**

Esta es la zona que la mayoría ignora y donde vive el verdadero problema.

Columnas: registros completados, usuarios que llegaron al primer valor, porcentaje de activación, usuarios activos de los últimos 7 días, churn de la semana.

Fuente: tu CRM, Mixpanel, Amplitude, o incluso una hoja manual si estás en etapa temprana. No importa de dónde venga — lo que importa es que esté en el mismo Sheet que las métricas de adquisición.

*(Pausa.)*

¿Por qué en el mismo Sheet? Porque el problema rara vez es donde parece estar.

Si tu CAC subió esta semana, el reflejo es ajustar las pujas en Meta. Pero si tu activación cayó al mismo tiempo, el problema es que estás trayendo a las personas equivocadas — y subir o bajar pujas no lo resuelve.

Claude necesita ver los dos bloques juntos para hacer ese diagnóstico. Tú solo, mirando pestañas separadas, raramente lo notas a tiempo.

---

**Zona 3 — La celda de comando: donde Claude entra al War Room**

Esta es la parte que hace que todo funcione.

Debajo de las dos zonas de métricas, hay una celda que dice: "ANÁLISIS DE HOY — PEGAR AQUÍ".

Lo que haces: seleccionas todo el rango de métricas de las dos zonas, lo copias, abres Claude con tu prompt de sistema ya cargado, pegas los datos y envías.

Treinta segundos. No es una integración. No es una API. Es copy-paste.

*(Pantalla: zoom en la celda de comando del War Room de ejemplo)*

El prompt de sistema de Claude ya sabe que eres Chief of Growth, ya conoce tu etapa, ya sabe qué métricas priorizar y ya sabe que quieres una sola recomendación accionable — no un ensayo.

Cuando pegas los datos, Claude lee el funnel completo y detecta la ruptura más crítica del día.

---

*(Pantalla: slide con el flujo completo: Sheet → copy → Claude → recomendación)*

Así se ve el flujo completo.

Abres el Sheet. Pegas las métricas de ayer. Copias todo. Abres Claude. Pegas. Recibes una recomendación. La ejecutas o la delegas.

Tiempo total: menos de diez minutos. Todos los días.

---

### DESARROLLO 2 — El prompt de sistema: cómo configurar a Claude como tu estratega de Growth [6:00–11:00]

*(Pantalla: slide con el prompt de sistema completo visible — texto en caja oscura)*

El prompt de sistema es lo que convierte a Claude de chatbot genérico a estratega de tu War Room. Voy a darte el prompt exacto que usarás. Está en el entregable de esta clase. Y te voy a explicar cada bloque.

---

**Bloque 1 — El rol**

```
Eres el estratega de Growth de [nombre de empresa].
Tu rol en esta conversación es analizar las métricas diarias del War Room
y producir exactamente una recomendación accionable para hoy.
```

Esto no es decorativo. Claude necesita saber que su output tiene un formato específico: **una** recomendación, no un análisis completo. Sin esto, Claude te da cinco párrafos cuando necesitas una decisión.

---

**Bloque 2 — El contexto de negocio**

```
Contexto del negocio:
- Producto: [descripción en 1 línea]
- Etapa: [early stage / growth stage / scale]
- Canales activos: Meta Ads, Google Ads, email
- Métrica norte: [CAC / activación al día 1 / LTV / churn]
- Presupuesto semanal de adquisición: [monto aproximado]
```

Este bloque es el que hace que las recomendaciones sean relevantes. Sin él, Claude puede recomendarte mover presupuesto hacia un canal que ni siquiera usas.

*(Pausa.)*

Nota el campo "métrica norte". Este es el campo más importante. Si tu métrica norte es activación al día 1, Claude va a priorizar las señales de activación sobre las de adquisición aunque el CPM esté subiendo. Si tu métrica norte es CAC, va a priorizar la eficiencia de adquisición aunque la activación esté bien.

Define tu métrica norte antes de cargar el prompt. Si no la tienes clara, escríbela en el chat de Claude antes de empezar — te ayuda a definirla en dos minutos.

---

**Bloque 3 — Las instrucciones de análisis**

```
Cuando recibas las métricas del War Room:
1. Identifica el punto de mayor ruptura en el funnel (de tráfico a conversión a activación)
2. Determina si el problema es de adquisición, de mensaje o de producto
3. Produce UNA recomendación concreta para hoy: qué mover, cuánto y en qué dirección
4. Si necesitas un dato que no está en las métricas para hacer el diagnóstico, pídelo

Formato de output:
- DIAGNÓSTICO: [1-2 líneas: dónde y qué está cayendo]
- CAUSA PROBABLE: [1 línea: por qué está cayendo]
- RECOMENDACIÓN: [1 línea de acción concreta con canal, ajuste y magnitud]
- EXPERIMENTO OPCIONAL: [1 línea: qué testear esta semana si quieres ir más lejos]
```

*(Instructor señala el formato en pantalla)*

Fíjate en la estructura. Cuatro campos. Todos de una o dos líneas. El objetivo no es que Claude te impresione con su análisis — es que en 30 segundos puedas decidir y ejecutar.

---

**Bloque 4 — Las restricciones**

```
Restricciones:
- No hagas recomendaciones sin datos que las soporten
- Si no puedes hacer un diagnóstico con los datos disponibles, di qué dato específico necesitas
- No repitas la misma recomendación dos días seguidos a menos que los datos lo justifiquen
- El output siempre en español
```

La restricción más importante es la segunda: Claude no alucina cuando le das un marco de salida claro. Si falta un dato, te pregunta. Eso es mejor que una recomendación basada en suposiciones.

---

*(Pantalla: slide — "Este prompt no es una guía. Es el sistema operativo de tu morning review.")*

Este prompt, cargado en tu Project de Claude, convierte los primeros diez minutos de tu día en la decisión más importante de la jornada.

No porque Claude sea perfecto. Sino porque tú vas a tener que leer las métricas, pegarlas y leer la recomendación — y ese proceso de cinco minutos te obliga a pensar en el funnel completo antes de que la operación del día te consuma.

El War Room no es solo un dashboard. Es un ritual de decisión.

---

### DEMO EN VIVO — War Room en acción: métricas reales, diagnóstico real [11:00–15:00]

*(Pantalla: pantalla completa — Google Sheets con War Room abierto y datos cargados)*

*(Instructor ejecuta el demo — ver archivo demo.md para los pasos exactos)*

*(Mientras navega en vivo)*

Lo que ven es el War Room con métricas de una campaña real — los números están ligeramente modificados pero el patrón es el mismo que encontré la semana pasada en una revisión real.

Observen lo que Claude detecta: el CTR de Meta está bien — 2.1%, dentro de rango.
El CPC subió 18% respecto al lunes. Eso normalmente dispara el reflejo de ajustar pujas.

Pero miren la Zona 2: la activación cayó de 34% a 19% en tres días.

Eso no es un problema de Meta. Es un problema de lo que pasa después del clic.

Vean lo que dice Claude.

*(Instructor muestra el output de Claude en pantalla)*

"DIAGNÓSTICO: Caída en activación del día 1 de 34% a 19% en 72 horas — el tráfico entra pero no completa el primer valor.

CAUSA PROBABLE: Desconexión entre el mensaje del anuncio y el onboarding — el usuario llega con una expectativa que el producto no cumple inmediatamente.

RECOMENDACIÓN: Pausar el Ad Set 3 (mayor volumen, menor activación) y mover ese presupuesto al Ad Set 1 que muestra la activación más alta (31%). Mañana revisar si la activación sube.

EXPERIMENTO OPCIONAL: Crear una versión del onboarding que entregue el primer valor en menos de 2 minutos — testear contra el flujo actual la próxima semana."

*(Pausa. Instructor mira a cámara.)*

Eso tomó cuarenta segundos. Y la recomendación está lista para ejecutar o para mandar al equipo.

No porque Claude sea adivino. Sino porque el formato del War Room le dio los dos bloques juntos — adquisición y activación — y el prompt de sistema le dijo exactamente qué buscar y cómo responder.

---

### CIERRE — [15:00–16:00]

*(Instructor en cámara. Slide con entregable visible.)*

Tu entregable de esta clase tiene dos cosas: la plantilla del War Room lista para duplicar en Google Sheets y el prompt de sistema completo para cargar en tu Project de Claude.

Tiempo para configurarlo: veinte minutos.

A partir de mañana, los primeros diez minutos de tu día tienen un output claro: una decisión, soportada por datos, lista para ejecutar.

El War Room no va a reemplazar tu juicio. Va a asegurarse de que tu juicio tenga todos los datos del funnel antes de decidir.

Clase 7: Claude Code. Construimos tu primera herramienta de Growth sin escribir una línea de código.

---

## NOTAS DE PRODUCCIÓN

| Elemento | Detalle |
|---|---|
| Duración objetivo | 16 minutos exactos |
| Slides necesarios | 5: título, estructura del War Room (3 zonas), flujo completo, prompt de sistema, entregable |
| Demo | Pantalla completa Google Sheets + Claude — ver demo.md |
| Ritmo | Denso en Desarrollo 1. El Desarrollo 2 puede ir ligeramente más lento — hay texto en pantalla que el estudiante quiere leer. |
| Tono | Estratégico, práctico. El instructor habla como alguien que usa esto todos los días, no como alguien que está vendiendo una idea. |
| Énfasis | Remarcar con pausa: "una recomendación, no cinco" y "el problema rara vez está donde parece" |
| Advertencia técnica | No intentar conectar Google Sheets con Claude via API — el flujo es copy-paste. Si alguien pregunta en vivo, la respuesta es: el copy-paste funciona hoy. La integración técnica viene después. |
