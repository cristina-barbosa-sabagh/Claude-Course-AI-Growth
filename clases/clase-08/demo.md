# Demo en Vivo — Landing page de experimento: de brief a URL en tiempo real
**Clase 08 · Instructor C · Segmento: 11:00–15:00 del guión**

---

## Objetivo del demo

Mostrar el flujo completo en pantalla: brief completado → Claude Code genera la landing → Vercel publica la URL. El estudiante ve que no hay pasos ocultos, no hay código que entender, no hay configuración técnica. Lo que ve en pantalla es exactamente lo que puede replicar en los próximos 20 minutos.

Tiempo de ejecución en pantalla: **< 4 minutos**.

---

## Setup antes de grabar

- [ ] Claude Code abierto en terminal — sesión limpia, sin historial previo visible
- [ ] Vercel.com abierto en una pestaña separada del navegador — cuenta Hobby activa y lista
- [ ] El brief de demo ya completado (ver Paso 2 abajo) — en un archivo de texto aparte para copiar rápido
- [ ] Carpeta de backup ya generada (`/demo-backup/index.html`) — por si Claude Code tarda más de 3 minutos durante la grabación
- [ ] Una segunda pestaña del navegador para previsualizar el `index.html` generado antes de publicar
- [ ] Resolución de pantalla legible — terminal con fuente ≥ 14pt, fondo oscuro para contraste

---

## El demo: paso a paso exacto

---

### PASO 1 — Mostrar Claude Code en terminal [20 seg]

*(Instructor muestra la terminal con Claude Code activo — prompt limpio, sin nada escrito todavía)*

**Narración:**
> "Esto es Claude Code. Una terminal. No un formulario, no una app con botones.
> Le voy a hablar en español, le voy a describir la landing que necesito,
> y él va a escribir el código por mí.
> El producto que voy a usar es ficticio pero el brief es real — el mismo que usarías tú."

---

### PASO 2 — Pegar el brief completo [30 seg]

*(Instructor copia el brief desde el archivo de texto y lo pega en Claude Code — que el estudiante vea que es copy-paste, no escritura manual)*

**El brief exacto del demo:**

```
Eres un desarrollador frontend especializado en landing pages de conversión.

Tu tarea: construir una landing page completa lista para publicar en Vercel.

INSTRUCCIONES TÉCNICAS:
- Genera un solo archivo HTML con CSS interno
- Diseño limpio, profesional, mobile-first
- Fuente: Inter (Google Fonts)
- Paleta: fondo blanco, texto #1a1a1a, acento #2563EB (azul)
- Formulario con campos nombre + email, validación básica en JavaScript
- Sin dependencias externas
- Archivo: index.html

ESTRUCTURA:
1. Hero: H1 + subtítulo + formulario CTA
2. Beneficios: 4 puntos con iconos SVG simples
3. Prueba social: número de clientes + 1 testimonio
4. FAQ: 3 objeciones con respuestas directas
5. CTA final: repetición del formulario
6. Footer mínimo

CONTEXTO DEL PRODUCTO:

Propuesta de valor:
Reduce el tiempo de reporte semanal de ventas de 3 horas a 20 minutos, sin cambiar tu CRM.

ICP:
Sales Managers en empresas SaaS B2B de 50–200 empleados, equipos de 5–15 reps, que usan HubSpot o Salesforce y arman reportes de pipeline manualmente cada lunes.

CTA principal:
Reservar demo de 20 minutos

Beneficios clave:
1. Reportes de pipeline listos en 20 minutos, no 3 horas
2. Datos de HubSpot, Salesforce y Excel unificados automáticamente
3. Sin código, sin IT — configuración en menos de un día
4. Alertas automáticas cuando un deal está en riesgo

Objeciones principales:
1. ¿Funciona con mi CRM actual o tengo que migrar datos?
2. ¿Cuánto tiempo toma implementarlo y quién lo configura?
3. ¿El precio escala cuando crece mi equipo?

Prueba social:
Usado por 200+ equipos de ventas en Latam.
Testimonio: "Pasé de armar el reporte a mano cada lunes a recibirlo listo el domingo a las 11pm. Mi equipo pensó que había contratado a alguien nuevo." — Carlos M., Sales Manager, Fintech México.

URL del experimento:
/demo-reportes

INSTRUCCIONES DE COPY:
- H1: la propuesta de valor, directo
- Subtítulo: nombra el ICP y el problema
- Beneficios con números concretos
- FAQ: respuestas de máximo 3 líneas, directas
- Tono: orientado a resultados, sin adjetivos vacíos

Genera el archivo index.html completo.
```

**Narración mientras pega:**
> "Estoy pegando el brief completo. Los 7 campos que llenamos en el entregable.
> Esto es exactamente el texto del template — lo único que cambié fue el producto.
> Send."

---

### PASO 3 — Esperar y comentar mientras Claude Code genera [1:30 min]

*(Instructor presiona Enter. Claude Code empieza a generar el HTML. Instructor comenta en voz alta lo que va apareciendo — no hay silencio incómodo)*

**Narración mientras Claude Code trabaja:**
> "Está escribiendo el head primero — los estilos, la fuente de Google, los colores que pedí."

*(30 segundos después)*

> "Ahora el hero section. Fíjate en el H1 — está usando exactamente la propuesta de valor que le dí.
> No la parafraseó. No la 'mejoró'. La usó como se la pedí."

*(60 segundos después)*

> "Sección de beneficios. Los cuatro puntos, con iconos SVG que él mismo generó en código.
> Eso antes requería un diseñador."

*(Cuando termina)*

> "Y terminó. Tenemos el index.html completo. Vamos a previsualizarlo antes de subir."

---

### PASO 4 — Previsualizar en el navegador [30 seg]

*(Instructor abre el archivo index.html generado directamente en el navegador — arrastra el archivo a una pestaña del Chrome)*

**Narración:**
> "Arrastro el archivo al navegador.
> Sin servidor, sin configuración — el navegador lo lee directamente."

*(La landing aparece en el navegador)*

> "Ahí está. Hero con el H1, formulario, beneficios, FAQ, CTA al final.
> Mobile-first — si quiero ver cómo se ve en móvil, abro el inspector y cambio la vista.
> Pero no necesito hacerlo ahora. Vamos a Vercel."

---

### PASO 5 — Publicar en Vercel [1 min]

*(Instructor cambia de pantalla a Vercel.com — ya tiene el dashboard abierto)*

**Narración:**
> "Vercel. Dashboard. Add New → Project."

*(Instructor arrastra la carpeta con el index.html al área de Vercel)*

> "Arrastro la carpeta. Vercel detecta que es un sitio estático.
> No hay ninguna configuración adicional que hacer."

*(Instructor hace clic en Deploy)*

> "Deploy. Y esperamos."

*(30 segundos de deploy — instructor no habla, deja que el progreso de Vercel hable)*

*(La URL aparece)*

> "Tenemos la URL. Hago clic."

*(Instructor abre la URL en el navegador — la landing carga en menos de 2 segundos)*

> "Eso es todo. Una URL pública. Funciona en cualquier dispositivo.
> Puedo mandarle esta URL a alguien ahora mismo y convierte.
> Del brief a la URL: menos de 4 minutos."

---

### PASO 6 — El remate [20 seg]

*(Instructor mira a cámara)*

**Narración:**
> "¿Qué experimento tienes tú esperando porque no tenías quién hiciera la landing?
> Ahora lo tienes.
> El brief está en el entregable. Rellénalo y haz este mismo proceso hoy."

---

## Variantes del demo (si el producto del instructor es diferente)

Usa exactamente la misma estructura del Paso 2 pero adapta:
- **Propuesta de valor:** cualquier beneficio medible y concreto de tu producto
- **ICP:** el segmento más específico de tu audiencia — con rol, empresa y problema
- **CTA:** la acción de conversión más relevante para la etapa del funnel que estás testeando

**Regla:** el producto del demo debe ser lo suficientemente reconocible para la audiencia (SaaS B2B funciona para la mayoría de Chiefs of Growth). Si el instructor tiene un producto más nicho, úsalo directamente — es más auténtico y el output de Claude Code va a ser más específico.

---

## Qué NO hacer en el demo

| No hacer | Por qué |
|---|---|
| Escribir el brief en vivo desde cero | Consume tiempo, genera ansiedad y distrae del punto principal |
| Explicar el código que genera Claude Code | No importa — el mensaje es que no necesitas entenderlo |
| Editar el HTML manualmente durante el demo | Rompe la narrativa de "sin tocar código" |
| Usar un brief vago ("hazme una landing bonita") | El output va a ser genérico y el demo pierde fuerza |
| Mostrar errores de Claude Code sin resolverlos en tiempo real | Si Claude Code pide aclaraciones, respóndelas en cámara — es un momento de enseñanza, no de edición |
| Hacer el deploy sin previsualizar | El estudiante necesita ver que hay un paso de verificación antes de publicar |
| Exceder los 4 minutos de demo en vivo | La promesa es "de brief a URL en menos de 4 minutos" — cumplirla en pantalla es la demostración más poderosa |

---

## Métricas de éxito del demo

El demo funcionó si al final el estudiante piensa:

- "Puedo hacer esto hoy mismo con mi producto"
- "El brief es lo único que necesito preparar — lo demás lo hace Claude Code"
- "Publicar en Vercel es literalmente arrastrar una carpeta"

Si hay esas tres reacciones, el demo cumplió su objetivo.

---

## Plan de contingencia

**Si Claude Code tarda más de 3 minutos:**
> "Claude Code está tomando un momento extra — mientras termina, les cuento que el archivo de backup que ya tengo generado mide exactamente [X] líneas de HTML. Esto es normal cuando el brief es denso — está siendo más cuidadoso con el output."
> *(Si llega a 4 minutos, cambia al archivo de backup sin disculpas y continúa.)*

**Si Vercel da error de deploy:**
> "Vercel a veces tiene un paso de verificación adicional en la primera cuenta nueva. Voy a mostrarles el archivo previsualizdo en el navegador, que es idéntico a lo que vería publicado — y en el entregable tienen los pasos de Vercel paso a paso."
> *(Continúa con la previsualización local — el punto queda demostrado.)*

**Si Claude Code genera HTML con errores de sintaxis:**
> "Claude Code aquí cometió un error pequeño de sintaxis — esto pasa cuando el brief es muy largo y complejo. Voy a pedirle que lo corrija."
> *(Escribe en Claude Code: "El HTML tiene un error en la línea [X] — corrígelo." — esto también es un momento de enseñanza valioso.)*
