# Clase 07 — Claude Code sin miedo: tu primer output en 10 minutos
**Instructor C · 14 minutos · Módulo 03**

---

## GUIÓN COMPLETO

---

### INTRO — [0:00–1:00]

*(Pantalla: slide con título de la clase. Instructor en cámara.)*

Hasta ahora, si querías una calculadora de CAC/LTV personalizada para tu negocio, tenías dos opciones: pedírsela a un desarrollador y esperar dos semanas, o conformarte con una hoja de cálculo que no hace lo que necesitas.

Claude Code es la tercera opción.

No es programar. No necesitas saber qué es Python ni qué es JavaScript. Es describir lo que quieres en español — o en inglés, da igual — y Claude construye la herramienta.

En los próximos 14 minutos instalas Claude Code, haces tu primera petición y tienes una calculadora de CAC/LTV funcional que puedes compartir con tu equipo hoy.

Sin terminal. Sin GitHub. Sin "espera, déjame revisar con el dev".

Vamos.

---

### DESARROLLO 1 — Qué es Claude Code y por qué existe para ti [1:00–5:00]

*(Pantalla: slide — "Claude Code: lo que cambia para Growth")*

Antes de instalar nada, necesito que entiendas qué es Claude Code porque la mayoría de la gente lo confunde con dos cosas que no es.

---

**Lo que NO es Claude Code**

No es un editor de código donde tienes que escribir funciones y variables.
No es para desarrolladores que quieren que Claude les ayude a codificar más rápido.
No es una herramienta técnica que requiere configuración previa o conocimiento de programación.

---

**Lo que SÍ es Claude Code para un Chief of Growth**

Claude Code es una interfaz donde describes lo que quieres construir en lenguaje natural y Claude escribe el código, lo ejecuta y te entrega el resultado.

Tú describes. Claude construye. Tú usas.

*(Pantalla: ejemplo visual — texto a la izquierda "Quiero una calculadora que tome mi CAC y mi LTV y me diga cuántos meses para recuperar la inversión" → flecha → resultado a la derecha: interfaz funcional)*

---

**Por qué esto cambia Growth específicamente**

Piensa en cuántas herramientas necesitas que no existen en el mercado exactamente como las necesitas.

Una calculadora de payback period con tus supuestos específicos.
Un tracker de cohortes con las columnas que tú defines.
Un generador de copies que siga tu brief exacto en formato de tabla.
Un calculador de mix de canales que use tus CPAs reales.

Estas herramientas no existen como producto porque son demasiado específicas para cada negocio. Pero son exactamente las que más necesitas en el día a día de Growth.

Antes: encargárselas a un dev y esperar. O no tenerlas.
Ahora: describírselas a Claude Code y tenerlas en 10 minutos.

*(Pausa.)*

Hay una sola condición: tienes que saber describir lo que quieres con suficiente detalle. No en código — en negocio. Qué inputs tiene la herramienta, qué calcula, cómo quieres ver el resultado.

Esa es la habilidad que entrenas hoy.

---

**El loop de trabajo con Claude Code**

Funciona en tres pasos que se repiten:

1. **Describes** lo que quieres — en español, con contexto de negocio
2. **Claude construye** — escribe el código y lo ejecuta
3. **Revisas el resultado** — si algo no está bien, lo describes y Claude lo corrige

No hay paso cuatro donde tienes que entender el código. Si el resultado es lo que pediste, lo usas. Si no lo es, lo describes mejor.

*(Pantalla: loop visual con los tres pasos)*

Este loop tarda entre 5 y 15 minutos para la mayoría de herramientas de Growth simples.
Para herramientas más complejas, puede tardar 30 minutos — pero son herramientas que antes tomaban días.

---

### DESARROLLO 2 — Cómo instalar Claude Code: 5 pasos, menos de 5 minutos [5:00–9:00]

*(Pantalla: slide con los 5 pasos de instalación — uno a la vez mientras el instructor habla)*

Claude Code se instala desde la terminal de tu computadora. Sé que dije "sin terminal" — me refería a que no necesitas saber usarla. Hay exactamente dos comandos que vas a escribir. Solo dos. Y te los doy copiados.

*(Pantalla: slide con los dos comandos listos para copiar)*

---

**Paso 1 — Instalar Node.js**

Node.js es el motor que corre Claude Code. Si ya lo tienes instalado, sáltate este paso.

Para verificar si lo tienes: abre la Terminal (Mac: busca "Terminal" en Spotlight, Windows: busca "cmd") y escribe:

```
node --version
```

Si ves un número como `v20.x.x`, ya lo tienes. Sigue al Paso 2.
Si ves un error, ve a [nodejs.org](https://nodejs.org), descarga el instalador LTS y sigue los pasos. Tarda 2 minutos.

---

**Paso 2 — Instalar Claude Code**

En la misma Terminal, escribe exactamente esto:

```
npm install -g @anthropic-ai/claude-code
```

Presiona Enter. Espera 30 segundos. Cuando veas que vuelve el cursor, está instalado.

---

**Paso 3 — Autenticarte con tu cuenta de Anthropic**

Escribe:

```
claude
```

La primera vez, Claude Code te va a pedir autenticarte. Abre el link que aparece en pantalla, inicia sesión con tu cuenta de claude.ai y autoriza. Eso es todo.

---

**Paso 4 — Crear una carpeta de trabajo**

No es técnico: crea una carpeta en tu computadora donde van a vivir tus herramientas de Growth. Nómbrala `Growth Tools` o como quieras.

En la Terminal, navega a esa carpeta:
- Mac: `cd ~/Desktop/Growth\ Tools`
- Windows: `cd C:\Users\[tuusuario]\Desktop\Growth Tools`

*(Instructor nota: si el estudiante no sabe navegar en Terminal, puede abrir la carpeta en Finder/Explorer, hacer clic derecho y seleccionar "Open in Terminal" o "New Terminal at Folder")*

---

**Paso 5 — Primera ejecución**

Escribe `claude` en la Terminal y presiona Enter. Deberías ver el prompt de Claude Code activo. Estás listo.

*(Pantalla: screenshot de Claude Code activo con el prompt visible)*

Tiempo total para los 5 pasos: **menos de 5 minutos** si no tuviste que instalar Node.js. Menos de 8 si lo instalaste desde cero.

---

*(Instructor en cámara)*

Eso es todo. Claude Code está instalado. Sin GitHub. Sin configuración de entorno. Sin entender qué es npm.

A partir de ahora, cada vez que quieras construir una herramienta de Growth, abres Terminal, navegas a tu carpeta de Growth Tools y escribes `claude`.

En el entregable de esta clase tienes los 5 pasos con screenshots y 10 instrucciones de Growth listas para copiar y ejecutar. Guárdalas — son tu punto de partida.

---

### DEMO EN VIVO — Calculadora de CAC/LTV en 10 minutos [9:00–13:00]

*(Pantalla: pantalla completa — Terminal con Claude Code activo)*

*(Instructor ejecuta el demo — ver archivo demo.md para los pasos exactos)*

*(Mientras trabaja en vivo)*

Lo que estoy haciendo ahora es exactamente lo que harás tú en los próximos días. Le estoy describiendo a Claude Code qué quiero: una calculadora de CAC/LTV con mis supuestos específicos. No estoy escribiendo código. Estoy describiendo un problema de negocio.

*(Mientras Claude Code genera el resultado)*

Fíjense que Claude no solo escribe el código — lo ejecuta y me muestra el resultado en tiempo real. Si algo no está bien, lo voy a describir en lenguaje natural y Claude lo corrige.

*(Cuando el resultado está listo)*

Esto es una herramienta funcional. La puedo abrir en el navegador, la puedo compartir con mi equipo, la puedo usar hoy.

---

### CIERRE — [13:00–14:00]

*(Instructor en cámara. Slide con entregable visible.)*

Tu tarea antes de la próxima clase: instala Claude Code, ejecuta al menos una de las 10 instrucciones de Growth del entregable y trae el resultado a la sesión.

No importa si el primer resultado no es perfecto. El punto es completar el loop: describir, ver el output, iterar.

Una vez que haces ese loop una vez, ya no tienes miedo de Claude Code. Y desde ahí, cada herramienta que necesitas para tu operación de Growth la construyes en minutos, no en días.

Clase 8: construimos algo más complejo — un tracker de experimentos de Growth con Claude Code.

---

## NOTAS DE PRODUCCIÓN

| Elemento | Detalle |
|---|---|
| Duración objetivo | 14 minutos exactos |
| Slides necesarios | 5: título, Claude Code vs lo que no es, loop de trabajo, 5 pasos de instalación, entregable |
| Demo | Terminal pantalla completa — ver demo.md |
| Ritmo | Desarrollo 1 puede ir más rápido (es conceptual). Desarrollo 2 más lento — hay pasos que el estudiante querrá anotar o pausar el video. |
| Tono | Desmitificador. El mensaje constante es "esto no es difícil, no requiere ser técnico". Nunca usar jerga de programación sin explicarla inmediatamente. |
| Énfasis | Remarcar con pausa: "Tú describes. Claude construye. Tú usas." — es el mantra de la clase. |
| Advertencia técnica | Si hay problemas con permisos de Terminal en Mac (especialmente en Apple Silicon), el estudiante puede necesitar ejecutar `sudo` — incluir esto en el entregable como nota de troubleshooting. |
| Para el instructor | Practicar el demo al menos 2 veces antes de grabar. Claude Code puede tardar más de lo esperado en la primera ejecución si hay latencia. Tener el prompt de la calculadora ya redactado en un archivo aparte. |
