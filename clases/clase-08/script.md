# Clase 08 — Landing page de experimento en vivo: de idea a URL en 20 minutos
**Instructor C · 16 minutos · Módulo 03**

---

## GUIÓN COMPLETO

---

### INTRO — [0:00–1:00]

*(Pantalla: slide con título de la clase. Instructor en cámara.)*

Voy a empezar con una pregunta directa:

¿Cuántas ideas de experimento tienes ahora mismo que no han llegado a producción porque necesitabas a un desarrollador para hacer la landing?

La mayoría de Chiefs of Growth tienen entre tres y cinco de esas ideas esperando.
Hoy las desbloqueamos todas.

Dieciséis minutos. Al final tienes una URL funcionando con tu página de experimento publicada.
No una maqueta. No un boceto. Una URL real.

Vamos.

---

### DESARROLLO 1 — Cómo describir una landing page en español para que Claude Code la construya [1:00–6:00]

*(Pantalla: slide "El brief perfecto para Claude Code")*

Lo primero que tienes que entender es que Claude Code no lee mentes.
Pero sí lee briefs bien escritos.

Y un brief de landing page tiene exactamente siete campos.
No más. No menos.

---

**Campo 1 — Propuesta de valor**

Una sola línea. El beneficio principal que el visitante obtiene al convertir.
No el feature. El beneficio.

Mal: "Plataforma de analytics con IA integrada."
Bien: "Reduce tu tiempo de reporte semanal de 3 horas a 20 minutos, sin cambiar tu stack."

Claude Code va a usar esta línea como el H1 de tu landing.
Si es vaga, el H1 va a ser vago. Si es específica, el H1 va a ser específico.

---

**Campo 2 — ICP (Ideal Customer Profile)**

A quién le estás hablando. Rol, empresa, problema concreto.
Cuanto más específico, mejor va a ser el copy.

Ejemplo: "Sales Managers en SaaS B2B, equipos de 10–50 personas, que usan HubSpot y pierden horas cada lunes armando el reporte de pipeline."

Claude Code va a usar esto para ajustar el tono, el vocabulario y los ejemplos de la página.

---

**Campo 3 — CTA principal**

Una sola acción. ¿Qué quieres que haga el visitante?
Opciones comunes: registrarse para demo, empezar prueba gratuita, dejar email, reservar llamada.

Sé específico: "Reservar demo de 20 minutos" es mejor que "Contáctanos".

---

**Campo 4 — Beneficios clave**

Tres a cinco puntos concretos. Cada uno con un número si es posible.
No listas de features — listas de resultados.

Ejemplo:
- Reportes listos en 20 minutos, no 3 horas
- Datos de HubSpot, Salesforce y Excel en un solo lugar
- Sin código, sin IT, listo en un día

---

**Campo 5 — Objeciones principales**

¿Qué le impide a tu ICP convertir ahora mismo?
Nómbralas. Claude Code va a construir una sección de la landing que las desmonta.

Ejemplo: "¿Funciona con mi CRM actual?", "¿Cuánto tiempo toma implementarlo?", "¿Tengo que migrar datos?"

---

**Campo 6 — Prueba social**

Qué tienes disponible: número de clientes, testimonios, logos de empresas que lo usan, resultados medibles.
Si no tienes nada todavía, dilo — Claude Code va a proponer placeholders realistas.

Ejemplo: "Usado por 200+ equipos de ventas. Testimonio: 'Bajamos el tiempo de reporte un 80% en la primera semana.' — Directora Comercial, Fintech B2B."

---

**Campo 7 — URL del experimento**

El slug que quieres usar. Algo limpio y rastreable.
Ejemplo: `/demo-reportes`, `/prueba-gratis`, `/equipos-ventas`

Esto le dice a Claude Code cómo nombrar los archivos y te ayuda a rastrear el tráfico en Google Analytics.

---

*(Pantalla: slide con los 7 campos en lista)*

Siete campos. Con eso, Claude Code construye una landing de conversión completa:
H1, subtítulo, sección de beneficios, sección de objeciones, prueba social, formulario y CTA.

No tienes que saber HTML. No tienes que saber CSS. No tienes que saber nada de código.
Solo tienes que saber tu negocio. Y eso ya lo sabes.

---

### DESARROLLO 2 — Publicar en Vercel: arrastras una carpeta y haces clic [6:00–11:00]

*(Pantalla: slide "De archivos a URL en 3 pasos")*

Una vez que Claude Code genera tu landing, tienes una carpeta con archivos.
Probablemente un `index.html`, un `styles.css` y quizás un `script.js`.

Publicarla en internet tarda literalmente dos minutos.

---

**Paso 1 — Vercel.com**

Entra a vercel.com. Crea una cuenta gratis con tu email de trabajo.
No necesitas tarjeta de crédito para el plan Hobby — que es suficiente para experimentos de Growth.

---

**Paso 2 — Drag and drop**

En el dashboard de Vercel, hay un botón que dice "Add New" y luego "Project".
Selecciona "Deploy from file" o arrastra directamente la carpeta que te generó Claude Code.

Vercel detecta automáticamente qué tipo de proyecto es.
Para una landing estática, no hay ninguna configuración adicional.

---

**Paso 3 — Tu URL**

Vercel te da una URL automática: `[nombre-del-proyecto].vercel.app`
Puedes usarla directamente o conectar tu dominio propio — pero para un experimento, la URL de Vercel funciona perfectamente.

En menos de 60 segundos desde que subes la carpeta, la página está viva.

---

*(Pantalla: slide con diagrama del flujo: Brief → Claude Code → Carpeta → Vercel → URL)*

El flujo completo es:
- Llenas el brief en 5 minutos
- Claude Code genera la landing en 3 minutos
- Subes a Vercel en 2 minutos

Total: 10 minutos de la idea a la URL.

Los otros 10 minutos de la clase son para hacerlo en vivo juntos.

---

*(Pantalla: slide "Por qué Vercel y no [otra opción]")*

Vercel es la opción porque:
- Es gratis para experimentos
- El deploy es instantáneo — sin servidores, sin configuración
- Las páginas cargan rápido — y la velocidad de carga afecta la tasa de conversión
- Puedes tener múltiples experimentos en URLs separadas sin costo adicional

Netlify también funciona con exactamente el mismo proceso.
Elige uno y quédate con él. No importa cuál — importa que lo uses.

---

### DEMO / EJERCICIO EN VIVO — Brief de landing, Claude Code la construye, la publicamos [11:00–15:00]

*(Pantalla: Claude Code abierto — terminal en pantalla completa)*

Ahora hacemos esto en vivo. Voy a usar un producto de ejemplo y vamos a construir la landing juntos.

*(Instructor comparte pantalla — ver demo.md para los pasos exactos)*

*(Mientras Claude Code genera la landing, instructor comenta)*

Fíjate en lo que está pasando:
Claude Code está escribiendo el HTML estructura por estructura.
Primero el head con los estilos.
Luego el hero con el H1 y el subtítulo.
Luego la sección de beneficios con iconos.
Luego las objeciones en formato de preguntas frecuentes.
Luego el CTA final.

No estoy tocando nada. Solo leo el output mientras aparece.

*(Cuando Claude Code termina)*

Tenemos una carpeta. Vamos a Vercel.

*(Instructor cambia de pantalla a Vercel.com)*

Arrastro la carpeta aquí. Espero 30 segundos.
Y tenemos la URL.

Eso es todo.

---

### CIERRE — [15:00–16:00]

*(Instructor en cámara. Slide con el entregable visible)*

Lo que acabas de ver no es un truco de demo.
Es exactamente cómo publicas tus experimentos de Growth de ahora en adelante.

Sin esperar a que el desarrollador tenga tiempo.
Sin tickets en Jira.
Sin reuniones de estimación.

Tu tarea: completa el brief de landing que te dejamos como entregable.
Siete campos. Quince minutos.
Al final tienes los inputs para que Claude Code construya tu primera landing de experimento.

La clase 9 construimos el resto de tu stack de Growth: tracker, reportes y alertas.
Nos vemos ahí.

---

## NOTAS DE PRODUCCIÓN

| Elemento | Detalle |
|---|---|
| Duración objetivo | 16 minutos exactos |
| Slides necesarios | 5: título, los 7 campos del brief, flujo de Vercel, diagrama completo del proceso, entregable |
| Demo | Claude Code en terminal + Vercel en navegador — ver demo.md |
| Ritmo | Denso en Desarrollo 1 (cada campo necesita 45 seg). Fluido en Desarrollo 2. En vivo en el ejercicio. |
| Tono | Directo. El énfasis está en "esto lo puedes hacer tú solo en 20 minutos". |
| Énfasis | Marcar con pausa cada campo del brief. Dejar silencio cuando Claude Code genera la landing — que el output hable. |
| Riesgo técnico | Tener la carpeta de backup lista por si Claude Code tarda más de lo esperado. Vercel siempre funciona. |
