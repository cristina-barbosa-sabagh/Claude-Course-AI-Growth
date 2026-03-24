# Demo en Vivo — Tracker de Experimentos de Growth: de prompt a Google Sheet en tiempo real
**Clase 09 · Instructor B · Segmento: 11:00–15:00 del guión**

---

## Objetivo del demo

Mostrar que Claude Code puede generar un Google Apps Script funcional que crea un tracker de experimentos completo — con estructura, formatos, colores condicionales y fórmulas — instalable en un Google Sheet real en menos de 3 minutos. El estudiante ve que no hay código que entender y no hay configuración técnica. Solo copiar, pegar y ejecutar.

Tiempo de ejecución en pantalla: **< 4 minutos**.

---

## Setup antes de grabar

- [ ] Claude Code abierto en terminal — sesión limpia
- [ ] Google Sheets abierto en una pestaña del navegador — cuenta de Google activa
- [ ] Un Google Sheet en blanco ya creado (no hace falta nombrarlo — lo hace el script)
- [ ] El prompt del tracker ya preparado en un archivo de texto separado para copiar rápido
- [ ] Apps Script abierto en una segunda pestaña (Extensiones → Apps Script) — para ahorrar tiempo de navegación durante el demo
- [ ] Carpeta de backup con el script ya generado (`/demo-backup/tracker_script.gs`) — por si Claude Code tarda más de lo esperado
- [ ] Resolución de pantalla legible — terminal con fuente ≥ 14pt

---

## El demo: paso a paso exacto

---

### PASO 1 — Mostrar Claude Code en terminal [20 seg]

*(Instructor muestra la terminal con Claude Code activo — prompt limpio)*

**Narración:**
> "Claude Code. Terminal. Le voy a describir exactamente qué necesito que construya
> y en menos de 3 minutos voy a tener un script que instalo en Google Sheets.
> Voy a usar el prompt del entregable — el mismo que ustedes van a pegar hoy."

---

### PASO 2 — Pegar el prompt del tracker [30 seg]

*(Instructor copia el prompt desde el archivo de texto y lo pega en Claude Code — sin escribir en vivo)*

**El prompt exacto del demo (versión abreviada para el demo en pantalla — más legible):**

```
Eres un desarrollador de Google Apps Script especializado en herramientas de Growth.

Tu tarea: construir un tracker de experimentos de Growth en Google Sheets.

INSTRUCCIONES TÉCNICAS:
- Google Apps Script que se instala en un Sheet vacío
- Al ejecutarse, crea la hoja con encabezados, formatos, validaciones y fórmulas
- Sin dependencias externas
- Incluye instrucciones de instalación comentadas al final

COLUMNAS (en orden):
A: ID — número secuencial
B: Fecha de inicio (DD/MM/YYYY)
C: Fecha de fin estimada (DD/MM/YYYY)
D: Área — dropdown: Adquisición, Activación, Retención, Revenue, Referral
E: Nombre del experimento (máx 60 chars)
F: Hipótesis — formato: "Creemos que [cambio] para [segmento] resultará en [resultado] porque [razón]"
G: Canal — dropdown: Meta Ads, Google Ads, Email, Onboarding, Pricing page, Otro
H: Métrica primaria (texto libre)
I: Baseline (número)
J: Target (número)
K: Resultado actual (número)
L: % mejora vs baseline — fórmula: =(K-I)/I*100
M: Estado — dropdown: En diseño, Activo, En análisis, Concluido, Archivado
N: Resultado final — dropdown: Ganó, Perdió, Inconcluso, En curso
O: Aprendizaje clave (máx 140 chars)
P: Próximo experimento sugerido

FORMATOS:
- Fila 1: negrita, fondo #1a1a2e, texto blanco
- Colores condicionales en columna M:
  "En diseño" → #E3F2FD | "Activo" → #FFF9C4 | "Concluido" → #E8F5E9 | "Archivado" → #EEEEEE
- Colores condicionales en columna N:
  "Ganó" → fondo #4CAF50 texto blanco | "Perdió" → fondo #F44336 texto blanco

INCLUIR:
- 3 filas de ejemplo con fondo #F5F5F5 (datos ficticios de SaaS B2B)
- Segunda hoja "Resumen" con: total de experimentos por área, tasa de éxito global, experimentos activos

Genera el Google Apps Script completo listo para instalar.
```

**Narración mientras pega:**
> "Pego el prompt. Estos son exactamente los campos del tracker que vimos en la clase.
> Le estoy describiendo estructura, formatos, colores y qué quiero en la hoja de resumen.
> Claude Code hace el resto. Send."

---

### PASO 3 — Esperar y comentar mientras Claude Code genera [1:30 min]

*(Instructor presiona Enter. Claude Code empieza a generar el Apps Script. Instructor comenta lo que aparece en pantalla.)*

**Narración mientras Claude Code trabaja:**
> "Está generando el script. Primero define la función principal — `crearTracker()`."

*(30 segundos después)*

> "Ahora está creando las columnas. Fíjate que para cada columna define el ancho,
> el nombre del encabezado y si tiene validación de datos con dropdown.
> No estoy eligiendo eso yo — Claude Code lo está interpretando del brief."

*(60 segundos después)*

> "Ahora los colores condicionales. Son reglas de formato — el mismo concepto
> que usarías en Sheets manualmente, pero automatizadas en código.
> Nunca más vas a tener que configurar esto a mano."

*(Cuando termina)*

> "Y terminó. Tenemos el script. Ahora vamos a Google Sheets a instalarlo."

---

### PASO 4 — Instalar el script en Google Sheets [1 min]

*(Instructor cambia de pantalla al Google Sheet en blanco. Ya tiene Apps Script abierto en otra pestaña.)*

**Narración:**
> "Google Sheets. Tengo un Sheet en blanco.
> Voy a Extensiones → Apps Script."

*(Instructor cambia a la pestaña de Apps Script)*

> "Borro el código que aparece por defecto — esto que dice 'function myFunction'."

*(Instructor selecciona todo el código por defecto y lo borra)*

> "Pego el script que generó Claude Code."

*(Instructor pega el script)*

> "Guardo. Y ejecuto — este botón de play."

*(Instructor hace clic en Run/Ejecutar)*

> "Google va a pedir autorización la primera vez. Eso es normal — está pidiendo permiso
> para modificar el Sheet. Hago clic en 'Revisar permisos', elijo mi cuenta,
> y le doy permiso."

*(Instructor completa el flujo de autorización de Google — 20–30 segundos)*

> "Y ahora volvemos al Sheet."

*(Instructor cambia de vuelta al Google Sheet)*

> "Ahí está."

---

### PASO 5 — Mostrar el tracker generado [30 seg]

*(La pantalla muestra el Google Sheet con el tracker completo — encabezados formateados, dropdowns activos, colores, filas de ejemplo)*

**Narración:**
> "El tracker completo. Encabezados formateados. Las columnas con el ancho correcto.
> Voy a hacer clic en la columna de Estado para que vean el dropdown."

*(Instructor hace clic en la columna M — aparece el dropdown con las opciones)*

> "En diseño, Activo, En análisis, Concluido, Archivado.
> Cambia el color automáticamente cuando seleccionas."

*(Instructor selecciona 'Activo' — la celda cambia al amarillo claro)*

> "Y la hoja de Resumen — aquí."

*(Instructor cambia a la hoja 'Resumen')*

> "Muestra el total de experimentos por área, la tasa de éxito y los activos ahora mismo.
> Todo con fórmulas que se actualizan solas cuando agregas datos en la hoja principal."

---

### PASO 6 — El remate [20 seg]

*(Instructor mira a cámara)*

**Narración:**
> "Del prompt al tracker funcional: menos de 4 minutos.
> El primer experimento lo registran ustedes — ese sí requiere que lo pienses tú.
> Todo lo demás lo hizo Claude Code.
> El prompt está en el entregable. Cópialo y ejecútalo hoy."

---

## Variantes del demo (si el instructor quiere personalizar)

Ajusta estos elementos del prompt según el producto o industria de referencia del curso:
- **Áreas del dropdown:** si la audiencia es más de ecommerce, agrega "Conversión" y "Carrito abandonado"
- **Canales del dropdown:** ajusta a los canales más relevantes para la audiencia (TikTok, WhatsApp Business, LinkedIn)
- **Datos de ejemplo:** elige experimentos ficticios que resuenen con la audiencia del curso

**Regla:** los datos de ejemplo en el tracker deben ser lo suficientemente específicos para que el estudiante entienda exactamente cómo llenar cada campo — no datos abstractos.

---

## Qué NO hacer en el demo

| No hacer | Por qué |
|---|---|
| Explicar el código de Apps Script línea por línea | El punto es que no necesitas entenderlo |
| Mostrar la hoja de resumen antes de mostrar el tracker principal | Pierde el efecto visual — el tracker principal es la revelación |
| Saltarse el paso de autorización de Google | Es el momento donde más estudiantes tienen dudas — mostrarlo en cámara lo normaliza |
| Usar un prompt vago en el demo | El output va a ser genérico y el tracker va a quedar incompleto |
| Editar el script manualmente si algo falla | Pide a Claude Code que lo corrija — eso también es parte del flujo |
| Mostrar solo el script sin instalarlo en Sheets | La instalación es la mitad del demo — sin ella, el estudiante no ve el resultado |

---

## Métricas de éxito del demo

El demo funcionó si al final el estudiante piensa:

- "Puedo instalar esto en mi Google Sheets ahora mismo"
- "Entiendo qué tipo de experimentos registrar desde hoy"
- "El reporte y las alertas que están en el entregable siguen exactamente el mismo proceso"

Si hay esas tres reacciones, el demo cumplió su objetivo.

---

## Plan de contingencia

**Si Claude Code tarda más de 2 minutos en generar el script:**
> "Claude Code está siendo minucioso — cuando el brief es detallado, el output también lo es. Mientras termina, les anticipo que la hoja de Resumen que va a generar tiene [descripción de las métricas del resumen]."
> *(Si llega a 3 minutos, cambia al backup sin disculpas y continúa.)*

**Si la autorización de Google Apps Script da pasos adicionales:**
> "Dependiendo del workspace de Google que tengan — corporativo o personal — este proceso puede tener un paso adicional. Si aparece una pantalla que dice 'Esta aplicación no está verificada', hagan clic en 'Avanzado' y luego en 'Ir a [nombre del script]'. Es normal para scripts que ustedes mismos crean."

**Si el script genera un error al ejecutarse:**
> "Apps Script nos está diciendo que hay un error. Copio el mensaje de error, vuelvo a Claude Code y le pido que lo corrija."
> *(Copia el error, vuelve a Claude Code, escribe: "El script da este error al ejecutarse: [pega el error]. Corrígelo." — esto también es un momento de enseñanza valioso sobre cómo iterar con Claude Code.)*

**Si Google Sheets muestra el tracker sin los colores condicionales:**
> "Los colores pueden tardar unos segundos en aplicarse si el Sheet es nuevo. Si no aparecen, pídele a Claude Code que revise la sección de formato condicional del script — es probable que la sintaxis de la versión de Apps Script que estás usando necesite un ajuste menor."
