# Guía de Instalación de Claude Code + 10 Instrucciones de Growth
## Tu primer output en 10 minutos

**Módulo 03 · Clase 07 · Claude para Growth**

---

Completa la instalación primero. Luego elige cualquiera de las 10 instrucciones y ejecútala.
Tu objetivo antes de la próxima clase: completar el loop una vez — describir, ver el output, iterar.

---

## PARTE 1 — Instalación de Claude Code en 5 pasos

Tiempo estimado: **5–8 minutos**.

---

### PASO 1 — Verifica si tienes Node.js instalado

Node.js es el motor que corre Claude Code. La mayoría de computadoras no lo tienen por defecto.

**En Mac:**
1. Abre Spotlight (Cmd + Espacio)
2. Escribe "Terminal" y presiona Enter
3. En la ventana que se abre, escribe: `node --version`
4. Si ves algo como `v20.11.0` → tienes Node.js. Salta al Paso 2.
5. Si ves "command not found" → sigue la instrucción de abajo.

**En Windows:**
1. Presiona la tecla Windows, escribe "cmd" y presiona Enter
2. Escribe: `node --version`
3. Si ves un número de versión → tienes Node.js. Salta al Paso 2.
4. Si ves un error → sigue la instrucción de abajo.

**Si necesitas instalar Node.js:**
- Ve a [nodejs.org](https://nodejs.org)
- Haz clic en el botón verde que dice **"LTS"** (no "Current")
- Descarga e instala como cualquier aplicación
- Al terminar, cierra y vuelve a abrir la Terminal
- Verifica con `node --version` — ahora debe mostrar un número

> **Nota para Mac con Apple Silicon (M1/M2/M3):** si el instalador de Node.js te da un error de permisos al ejecutar el siguiente paso, escribe `sudo` antes del comando (ej: `sudo npm install -g @anthropic-ai/claude-code`) y escribe tu contraseña del sistema cuando la pida.

---

### PASO 2 — Instala Claude Code

En tu Terminal (o cmd en Windows), copia y pega exactamente este comando:

```
npm install -g @anthropic-ai/claude-code
```

Presiona Enter. Verás texto apareciendo — eso es normal. Espera hasta que vuelva el cursor (el símbolo `$` o `>`). Puede tardar entre 30 segundos y 2 minutos dependiendo de tu conexión.

Cuando el cursor vuelva, la instalación terminó.

---

### PASO 3 — Crea tu carpeta de trabajo

Antes de abrir Claude Code, crea una carpeta donde van a vivir tus herramientas de Growth.

**En Mac:**
1. Abre Finder
2. Ve a tu Escritorio o Documentos
3. Crea una carpeta nueva llamada `Growth Tools`

**En Windows:**
1. Abre el Explorador de archivos
2. Ve a Documentos o Escritorio
3. Crea una carpeta nueva llamada `Growth Tools`

Ahora tienes que llevar la Terminal a esa carpeta. La forma más fácil:

**En Mac:** abre la carpeta en Finder → haz clic derecho en ella → selecciona "New Terminal at Folder" (si no aparece, arrastra la carpeta al ícono de Terminal en el Dock mientras la Terminal está abierta).

**En Windows:** abre la carpeta en el Explorador → haz clic en la barra de direcciones → escribe `cmd` → presiona Enter.

---

### PASO 4 — Inicia sesión en Claude Code

Con la Terminal en tu carpeta `Growth Tools`, escribe:

```
claude
```

Presiona Enter.

La primera vez, Claude Code te muestra un mensaje de autenticación con un link. Cópialo y ábrelo en tu navegador. Inicia sesión con la misma cuenta que usas en claude.ai y haz clic en "Authorize".

Regresa a la Terminal — deberías ver el prompt de Claude Code activo, algo como:

```
>
```

Estás dentro. Claude Code está listo.

---

### PASO 5 — Verifica que todo funciona

Con Claude Code activo, escribe esta frase exacta y presiona Enter:

```
Crea un archivo de texto llamado "test.txt" con el contenido "Claude Code instalado correctamente"
```

Claude Code debe crear el archivo en tu carpeta `Growth Tools`. Si lo ves ahí, todo funciona.

Para salir de Claude Code: escribe `/exit` o presiona Ctrl+C.

**Cada vez que quieras usar Claude Code:**
1. Abre Terminal
2. Navega a tu carpeta `Growth Tools`
3. Escribe `claude` y presiona Enter
4. Empieza a describir lo que quieres construir

---

## PARTE 2 — 10 Instrucciones de Growth listas para ejecutar

Estas instrucciones están pensadas para copiarlas y pegarlas directamente en Claude Code. Están escritas para ser lo suficientemente específicas para producir resultados útiles desde el primer intento.

Para cada una: abre Claude Code, pega la instrucción, presiona Enter y observa el resultado. Si algo no está bien, descríbelo en lenguaje natural y Claude lo corrige.

---

### INSTRUCCIÓN 01 — Calculadora de CAC/LTV y Payback Period

```
Construye una calculadora de CAC/LTV interactiva en HTML que funcione en el navegador.

La calculadora debe tener estos inputs:
- Gasto mensual en adquisición (campo numérico, en dólares o la moneda que ponga el usuario)
- Nuevos clientes por mes (campo numérico)
- Ticket promedio mensual o MRR por cliente (campo numérico)
- Margen bruto del negocio en porcentaje (campo numérico, por defecto 70%)
- Churn mensual en porcentaje (campo numérico)

Y debe mostrar estos outputs calculados automáticamente:
- CAC (Costo de Adquisición de Cliente)
- LTV (valor de vida del cliente, usando la fórmula LTV = ARPU × margen / churn)
- Ratio LTV:CAC (con indicador visual: rojo si < 3x, amarillo si 3x-5x, verde si > 5x)
- Payback period en meses

Diseño: limpio, sin librerías externas, todo en un solo archivo HTML.
Guarda el resultado como "cac-ltv-calculator.html" en la carpeta actual.
```

---

### INSTRUCCIÓN 02 — Generador de Copy para Campañas en formato tabla

```
Construye una herramienta HTML de generador de copy para anuncios que funcione en el navegador.

La herramienta tiene dos partes:

Parte 1 — Inputs:
- Nombre del producto (texto)
- Beneficio principal en 1 línea (texto)
- Perfil del cliente ideal (texto largo)
- Objeción principal del cliente (texto)
- Canal: selector entre Meta Ads, Google Ads, LinkedIn, Email
- Objetivo: selector entre Adquisición, Activación, Retención, Upsell

Parte 2 — Output:
Una tabla con 5 filas, una por variación de copy. Columnas: Ángulo | Headline (máx. 7 palabras) | Texto principal (máx. 3 líneas) | CTA (máx. 4 palabras)

El botón "Generar Copy" no necesita conectarse a una IA — simplemente muestra la estructura de tabla vacía lista para que el usuario la llene con los copies que generó en Claude.ai.

Guarda el resultado como "copy-generator.html".
```

---

### INSTRUCCIÓN 03 — Tracker de Experimentos de Growth

```
Construye una aplicación web de una página para trackear experimentos de Growth.

Funcionalidades:
- Formulario para agregar nuevo experimento: hipótesis, canal, métrica de éxito, fecha inicio, fecha fin estimada, responsable
- Tabla de todos los experimentos con columnas: Hipótesis | Canal | Métrica | Estado (En curso / Completado / Cancelado) | Resultado | Decisión (Escalar / Descartar / Iterar)
- Los experimentos se guardan en localStorage del navegador (no se pierden al cerrar)
- Botón para cambiar el estado de cada experimento
- Botón para exportar la tabla completa como CSV

Sin librerías externas. Todo en un solo archivo HTML.
Guarda el resultado como "experiment-tracker.html".
```

---

### INSTRUCCIÓN 04 — Calculadora de Mix de Canales

```
Construye una calculadora de mix de canales en HTML para optimizar presupuesto de adquisición.

Inputs:
- Presupuesto total mensual disponible (número)
- Para cada canal activo (hasta 5 canales): nombre del canal, CPA actual, capacidad máxima mensual de conversiones estimada

La calculadora debe:
1. Mostrar el costo total si asigno el 100% a cada canal individualmente
2. Calcular la distribución óptima para maximizar conversiones dado el presupuesto total
3. Mostrar un slider para ajustar la distribución manualmente y ver el impacto en tiempo real
4. Mostrar el número de conversiones proyectadas y el CPA blended con cada distribución

Sin librerías externas. Un solo archivo HTML.
Guarda el resultado como "channel-mix-calculator.html".
```

---

### INSTRUCCIÓN 05 — Analizador de Cohortes de Retención

```
Construye una herramienta de análisis de cohortes en HTML.

La herramienta permite ingresar datos de retención de hasta 6 cohortes mensuales.

Inputs: tabla donde el usuario ingresa manualmente el porcentaje de usuarios retenidos por mes para cada cohorte. Formato: cohorte (mes/año) en filas, mes de retención (Mes 1, Mes 2... Mes 6) en columnas.

Output:
- Tabla de cohortes con código de color: rojo (<40%), amarillo (40-70%), verde (>70%)
- Gráfico de líneas simple (sin librerías, usando SVG) que muestra la curva de retención de cada cohorte
- Comparación entre la cohorte más reciente y el promedio de las anteriores

Sin librerías externas. Un solo archivo HTML.
Guarda el resultado como "cohort-analyzer.html".
```

---

### INSTRUCCIÓN 06 — Generador de Secuencia de Emails de Onboarding

```
Construye un generador de briefing para secuencias de emails de onboarding en HTML.

La herramienta toma como input:
- Nombre del producto (texto)
- Qué hace el producto en 1 línea (texto)
- El "primer valor" que debe sentir el usuario (texto — qué tiene que lograr para que entienda el producto)
- El mayor obstáculo para llegar a ese primer valor (texto)
- Número de emails en la secuencia: selector 3, 5 o 7 emails
- Tono: selector Formal / Neutral / Conversacional

El output es una tabla con una fila por email. Columnas: Día de envío | Objetivo del email | Asunto sugerido | Idea central del cuerpo | CTA principal

El botón "Generar Estructura" produce la tabla con las ideas completas (no placeholders vacíos — ideas concretas basadas en los inputs).

Sin librerías externas. Un solo archivo HTML.
Guarda el resultado como "onboarding-email-planner.html".
```

---

### INSTRUCCIÓN 07 — Dashboard de KPIs de Growth Semanal

```
Construye un dashboard de KPIs de Growth en HTML que el equipo puede abrir en el navegador.

El dashboard tiene tres secciones visuales:

Sección 1 — Adquisición: tarjetas con valores para CAC, conversiones de la semana, gasto total, CPA por canal (hasta 3 canales)

Sección 2 — Activación: tarjetas con activación día 1 (%), tiempo promedio al primer valor, usuarios activos semana

Sección 3 — Retención y Revenue: tarjetas con retención 7 días (%), churn semanal, MRR, variación MRR vs semana anterior

Funcionalidad: todos los valores son editables con un clic (contenteditable) y se guardan en localStorage. Un botón "Reset semana" limpia los valores para la siguiente semana.

Sin librerías externas. Un solo archivo HTML con diseño limpio y colores profesionales.
Guarda el resultado como "weekly-kpi-dashboard.html".
```

---

### INSTRUCCIÓN 08 — Calculadora de ROI de Contenido

```
Construye una calculadora de ROI de contenido y SEO en HTML.

Inputs:
- Horas de equipo invertidas en producción de contenido por mes (número)
- Costo por hora del equipo (número)
- Herramientas de contenido / SEO que se pagan mensualmente (número)
- Visitas orgánicas actuales por mes (número)
- Tasa de conversión de tráfico orgánico a lead (porcentaje)
- Tasa de conversión de lead a cliente (porcentaje)
- Ticket promedio (número)

Outputs calculados automáticamente:
- Inversión total mensual en contenido
- Clientes adquiridos por mes via orgánico
- Revenue atribuido al contenido mensual
- ROI del contenido (revenue / inversión)
- CAC via contenido vs CAC pagado (campo manual para comparar)
- Meses para recuperar la inversión acumulada en contenido

Sin librerías externas. Un solo archivo HTML.
Guarda el resultado como "content-roi-calculator.html".
```

---

### INSTRUCCIÓN 09 — Generador de Hipótesis de Experimentos

```
Construye una herramienta de generación de hipótesis de experimentos de Growth en HTML.

La herramienta guía al usuario a través del framework "Si [acción] → Entonces [resultado] → Porque [razón]".

Inputs:
- Área del funnel: selector (Adquisición / Activación / Retención / Revenue / Referidos)
- Métrica que quiero mejorar (texto libre)
- Comportamiento actual observado (texto libre)
- Cambio que quiero probar (texto libre)
- Resultado esperado y magnitud (texto libre)
- Razón por la que creo que funcionará (texto libre)

Output:
- La hipótesis formateada en el framework "Si → Entonces → Porque"
- Criterio de éxito: qué métrica y qué umbral confirma la hipótesis
- Tipo de test sugerido basado en el área del funnel (A/B test, test de mensaje, cambio de flujo, etc.)
- Estimación de tiempo mínimo para resultados estadísticamente válidos (basado en reglas simples — ej: "necesitas al menos 200 conversiones por variante")
- Botón para guardar la hipótesis en una lista local (localStorage) y ver todas las hipótesis guardadas

Sin librerías externas. Un solo archivo HTML.
Guarda el resultado como "hypothesis-generator.html".
```

---

### INSTRUCCIÓN 10 — Calculadora de Pricing y Empaquetado

```
Construye una calculadora de pricing y empaquetado para SaaS o productos digitales en HTML.

La herramienta simula el impacto en MRR y LTV de diferentes estrategias de pricing.

Inputs:
- Número actual de clientes activos (número)
- Precio actual por cliente/mes (número)
- Churn mensual actual (porcentaje)
- Tres opciones de precio a evaluar (tres campos numéricos)
- Elasticidad estimada por precio: para cada nuevo precio, cuánto % de clientes actuales crees que cancelarían por el aumento (tres campos de porcentaje)
- Cuántos nuevos clientes adicionales por mes esperarías a cada precio (tres campos numéricos)

Outputs por cada opción de precio:
- MRR proyectado a 3 meses
- LTV promedio por cliente (usando el churn actual)
- Comparación de MRR vs precio actual en %

Visualización: tabla comparativa de las tres opciones vs la situación actual, con código de color verde/rojo para impacto positivo/negativo.

Sin librerías externas. Un solo archivo HTML.
Guarda el resultado como "pricing-calculator.html".
```

---

## Troubleshooting frecuente

| Problema | Solución |
|---|---|
| `npm: command not found` | Node.js no está instalado. Ve a nodejs.org y descarga la versión LTS. |
| `Error: EACCES permission denied` (Mac) | Escribe `sudo` antes del comando de instalación y usa tu contraseña del sistema. |
| Claude Code tarda más de 5 minutos en instalar | Revisa tu conexión a internet. Si sigue sin funcionar, cierra la Terminal y repite el Paso 2. |
| El archivo HTML se crea pero no abre bien | Haz doble clic en el archivo `.html` — debería abrirse en tu navegador por defecto. |
| Claude Code pide una clave de API | Usa el flujo de autenticación con tu cuenta de claude.ai (Paso 4). No necesitas una clave de API separada. |
| El resultado no es lo que pedí | Describe en lenguaje natural qué está mal: "el botón no funciona", "falta la columna de X", "el cálculo de LTV usa la fórmula incorrecta". Claude corrige en segundos. |

---

## Cómo usar las herramientas que construiste

Todas las herramientas del entregable son archivos `.html` que:
- Se abren en cualquier navegador sin instalar nada
- Funcionan sin conexión a internet (excepto las que se conectan a APIs)
- Se pueden compartir con tu equipo enviando el archivo
- Se pueden publicar en Vercel con un solo comando si quieres que sean accesibles por URL (lo hacemos en el Módulo 03)

---

**Siguiente clase:** Tracker de experimentos de Growth — construyes algo más complejo con Claude Code y aprendes a iterar sobre el output.
