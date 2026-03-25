# DEMO PASO A PASO — War Room de Growth: diagnóstico de métricas en menos de 2 minutos

---

**Paso 1 — Crea el War Room en Google Sheets**

- Abre Google Sheets → crea un nuevo archivo
- Nómbralo: `War Room de Growth — [Tu Empresa]`
- Crea 3 pestañas: `War Room`, `Histórico`, `Experimentos`
- En la pestaña `War Room`, crea estas dos zonas con los encabezados exactos:

**ZONA 1 — ADQUISICIÓN** (fondo azul claro #D9EAF7):
```
FECHA | CANAL | IMPRESIONES | CLICS | CTR | CPM | CPC | GASTO | CONVERSIONES | COSTO/CONV | NOTA
```

**ZONA 2 — ACTIVACIÓN + RETENCIÓN** (fondo verde claro #D9F2E6, dejar 2 filas en blanco entre zonas):
```
FECHA | REGISTROS | ONBOARDING | % ACT DÍA 1 | ACTIVOS 7d | CHURN | NOTA DEL DÍA
```

- Deberías ver esto en pantalla: un Sheet con dos bloques de color diferente, encabezados en negrita, espacio visual claro entre las dos zonas

---

**Paso 2 — Carga los datos del demo en el Sheet**

- En la Zona 1, pega exactamente estos datos (3 días consecutivos):

```
22/03/2026 | Meta   | 51200 | 1126 | 2.2% | $8.0  | $0.37 | $410 | 38 | $10.79 | —
23/03/2026 | Meta   | 49800 | 1046 | 2.1% | $8.4  | $0.40 | $419 | 31 | $13.52 | —
24/03/2026 | Meta   | 48200 | 965  | 2.0% | $8.7  | $0.44 | $384 | 22 | $17.45 | —

22/03/2026 | Google | 13100 | 393  | 3.0% | $5.6  | $0.17 | $68  | 21 | $3.24  | —
23/03/2026 | Google | 12800 | 371  | 2.9% | $5.7  | $0.18 | $67  | 20 | $3.35  | —
24/03/2026 | Google | 12400 | 380  | 3.1% | $5.8  | $0.18 | $69  | 19 | $3.63  | —
```

- En la Zona 2, pega estos datos:

```
22/03/2026 | 59 | 20 | 33.9% | 348 | 8  | —
23/03/2026 | 51 | 13 | 25.5% | 344 | 10 | Nuevo diseño landing activo
24/03/2026 | 41 | 8  | 19.5% | 340 | 12 | —
```

- Deberías ver esto en pantalla: el Sheet con 6 filas en Zona 1 y 3 filas en Zona 2, la nota del 23/03 visible en la última columna de la Zona 2

---

**Paso 3 — Identifica el patrón antes de pegar en Claude**

- Antes de copiar los datos, observa estas dos columnas en paralelo:
  - Zona 1: columna COSTO/CONV → $10.79, $13.52, $17.45 (sube +62% en 3 días)
  - Zona 2: columna % ACT DÍA 1 → 33.9%, 25.5%, 19.5% (cae casi a la mitad)
- La nota del 23/03 en Zona 2 dice "Nuevo diseño landing activo"
- El instinto es ajustar Meta. La hipótesis correcta es que el landing es el problema.

- Deberías ver esto en pantalla: las dos columnas con tendencias opuestas visibles a simple vista

---

**Paso 4 — Carga el prompt de sistema en tu Project de Claude**

- Ve a claude.ai → entra a tu Project de Growth → "Project Instructions"
- Pega este prompt completo (reemplaza los campos entre corchetes con tus datos reales):

```
Eres el estratega de Growth de [NOMBRE DE TU EMPRESA].

Tu rol en esta conversación es analizar las métricas diarias del War Room
y producir exactamente UNA recomendación accionable para hoy.

CONTEXTO DEL NEGOCIO:
- Producto: SalesFlow — automatiza reportes de ventas para equipos que usan Salesforce
- Modelo de negocio: SaaS B2B
- Etapa: growth stage
- Canales de adquisición activos: Meta Ads, Google Ads
- Métrica norte: activación día 1 (% de usuarios que corren su primer reporte en las primeras 24 horas)
- Presupuesto semanal de adquisición: $3.000
- MRR objetivo: $50.000

CONTEXTO DEL FUNNEL:
- El usuario llega desde el anuncio a una landing page con formulario de registro
- "Primer valor" = correr el primer reporte automático en SalesFlow (Paso 2 del onboarding)
- Punto de mayor caída histórica: Paso 1 — conexión de Salesforce (requiere credenciales de admin)

INSTRUCCIONES DE ANÁLISIS:
Cuando recibas datos del War Room, sigue este proceso:
1. Lee Zona 1 (adquisición) y Zona 2 (activación/retención) juntas
2. Identifica el punto de mayor ruptura en el funnel: ¿dónde se pierde más valor?
3. Determina si el problema es de adquisición, de mensaje o de producto/onboarding
4. Produce UNA recomendación concreta: específica, con canal y magnitud
5. Si falta un dato clave, pídelo antes de dar la recomendación

FORMATO DE OUTPUT — usar siempre:

DIAGNÓSTICO: [1-2 líneas: qué está cayendo y dónde]

CAUSA PROBABLE: [1 línea: por qué, basado en los datos]

RECOMENDACIÓN: [1 línea concreta — canal, ajuste, magnitud]

EXPERIMENTO OPCIONAL: [1 línea: qué testear esta semana si se quiere ir más lejos]

RESTRICCIONES:
- No hagas recomendaciones sin datos que las soporten
- Si falta un dato necesario, pide exactamente cuál es
- No repitas la misma recomendación dos días seguidos sin justificación en los datos
- Incorpora siempre las notas cualitativas de la columna NOTA DEL DÍA al diagnóstico
- Responde siempre en español
- Nunca uses más palabras de las necesarias
```

- Guarda las instrucciones del Project
- Deberías ver esto en pantalla: el prompt guardado en las instrucciones del Project, visible en la barra lateral o sección de configuración

---

**Paso 5 — Selecciona los datos del Sheet y cópialos**

- En el Sheet, selecciona todo el rango: desde el encabezado de Zona 1 hasta la última fila de Zona 2 incluyendo la columna NOTA DEL DÍA
- Presiona Cmd+C / Ctrl+C

- Deberías ver esto en pantalla: el rango completo seleccionado (borde azul alrededor de las dos zonas)

---

**Paso 6 — Pega en Claude y envía**

- Abre Claude → tu Project de Growth → "New Chat" (conversación nueva cada vez que hagas el diagnóstico diario)
- Haz clic en el campo de texto
- Presiona Cmd+V / Ctrl+V — los datos aparecen como texto tabulado
- Presiona Enter sin escribir nada más

- Deberías ver esto en pantalla: los datos pegados en el campo de texto de Claude como texto con tabulaciones, y el botón de envío activo

---

**Paso 7 — Lee el output de Claude**

- Espera la respuesta (5 a 15 segundos)
- El output esperado para estos datos es:

```
DIAGNÓSTICO: Caída sostenida en activación día 1 de 33.9% a 19.5% en 72 horas —
el tráfico de Meta entra pero casi la mitad no completa el primer valor.
El costo por conversión sube como consecuencia, no como causa.

CAUSA PROBABLE: El nuevo diseño de landing activado el 23/03 está generando
desconexión entre la promesa del anuncio y la experiencia de llegada.

RECOMENDACIÓN: Revertir temporalmente al diseño anterior de landing y medir
activación día 1 mañana — si sube a más del 28%, el nuevo diseño es el problema.
No ajustar pujas ni creativos de Meta hasta confirmar.

EXPERIMENTO OPCIONAL: Test A/B del landing nuevo vs. anterior con tráfico 50/50
esta semana para confirmar la hipótesis antes de descartarlo definitivamente.
```

- Deberías ver esto en pantalla: los 4 campos del formato (DIAGNÓSTICO, CAUSA PROBABLE, RECOMENDACIÓN, EXPERIMENTO OPCIONAL) claramente separados, con texto conciso en cada uno

---

**Paso 8 — Pide más detalle si la recomendación necesita contexto**

- Si necesitas más detalle para ejecutar la recomendación, escribe en el mismo chat:

```
¿Cómo revierto el landing anterior sin afectar el tráfico en curso?
¿Qué debo medir exactamente mañana para confirmar o descartar la hipótesis?
```

- Deberías ver esto en pantalla: instrucciones concretas de implementación con los pasos específicos y la métrica de confirmación (activación día 1 > 28% confirma que el landing nuevo es el problema)

---

**Paso 9 — Registra el experimento en la hoja "Experimentos" del Sheet**

- Ve a la pestaña "Experimentos" del Sheet
- Añade una fila con estos datos:

```
FECHA INICIO: [hoy]
HIPÓTESIS: Revertir el landing anterior recuperará la activación día 1 a más del 28%
CANAL: Landing page (impacta Meta y Google)
MÉTRICA: % Activación día 1
RESULTADO: [rellenar mañana]
DECISIÓN: [Escalar / Descartar / Iterar — rellenar cuando tengas el dato]
```

- Deberías ver esto en pantalla: la fila del experimento registrada con la hipótesis clara y la métrica de éxito definida antes de ejecutar

---

**Paso 10 — Configura el flujo semanal del viernes**

- Cada viernes, en una nueva conversación del mismo Project, pega los datos de la semana completa (lunes a viernes de Zona 1 y Zona 2) y añade este prompt:

```
Aquí están los datos del War Room de esta semana completa (lunes a viernes).

Analiza la semana y dime:
1. ¿Cuál fue el punto de mayor ruptura del funnel esta semana y qué lo causó?
2. ¿Qué experimento mostró señal positiva?
3. ¿Qué NO debemos repetir la próxima semana?
4. ¿Cuáles son los 3 experimentos que recomiendas priorizar la próxima semana?

Para cada experimento:
---
EXPERIMENTO [número]
Hipótesis: [qué esperas que pase]
Canal: [dónde se ejecuta]
Métrica de éxito: [qué número tiene que moverse]
Tiempo para tener resultado: [días]
---
```

- Deberías ver esto en pantalla: un análisis semanal con 4 secciones y 3 experimentos en el formato solicitado, listos para priorizar en la reunión de planning de la siguiente semana
