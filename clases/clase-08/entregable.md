# Plantilla de Brief de Landing Page para Claude Code
## De idea a URL en 20 minutos

**Módulo 03 · Clase 08 · Claude para Growth**

---

Completa los 7 campos con información de tu producto y tu experimento.
Cuando tengas los 7 campos, copia el bloque de prompt de la sección final y pégalo directo en Claude Code.

Tiempo estimado para llenar el brief: **10–15 minutos**.
Tiempo que Claude Code tarda en generar la landing: **2–4 minutos**.

---

## Los 7 campos del brief

---

### CAMPO 1 — Propuesta de valor

**Qué es:** Una sola línea. El beneficio principal que el visitante obtiene al convertir. No el feature — el resultado.

**Regla:** Si puedes aplicar exactamente la misma frase a un competidor, no es lo suficientemente específica.

**Ejemplo:**
> Reduce tu tiempo de reporte semanal de 3 horas a 20 minutos, sin cambiar tu stack de ventas.

**Tu propuesta de valor:**
```
[Escribe aquí — máximo 2 líneas]
```

---

### CAMPO 2 — ICP (Ideal Customer Profile)

**Qué es:** A quién le estás hablando. Rol, tipo de empresa, problema concreto que tienen hoy.

**Regla:** Cuanto más específico, mejor va a ser el copy. "Equipos de ventas" es vago. "Sales Managers en SaaS B2B con equipos de 10–50 reps que usan HubSpot" es específico.

**Ejemplo:**
> Sales Managers en empresas SaaS B2B de 50–200 empleados, que gestionan equipos de 5–15 reps y pierden 2–3 horas cada lunes armando el reporte de pipeline desde cero.

**Tu ICP:**
```
[Escribe aquí — incluye: rol, tipo de empresa, tamaño, problema concreto]
```

---

### CAMPO 3 — CTA principal

**Qué es:** La única acción que quieres que haga el visitante. Un verbo + un objeto + (opcional) un calificador de tiempo o riesgo.

**Regla:** Una landing de experimento tiene un solo CTA. Si tienes dos, tienes cero conversiones.

**Ejemplos:**
> - Reservar demo de 20 minutos
> - Empezar prueba gratuita de 14 días
> - Ver cómo funciona (demo en video)
> - Unirme a la lista de acceso anticipado

**Tu CTA principal:**
```
[Escribe aquí — máximo 5 palabras]
```

---

### CAMPO 4 — Beneficios clave

**Qué es:** 3 a 5 resultados concretos que el visitante obtiene. Cada uno con un número si es posible.

**Regla:** Beneficios, no features. "Dashboard en tiempo real" es un feature. "Ves el estado del pipeline sin abrir Salesforce" es un beneficio.

**Ejemplo:**
> 1. Reportes de pipeline listos en 20 minutos, no 3 horas
> 2. Datos de HubSpot, Salesforce y Excel unificados automáticamente
> 3. Sin código, sin IT — configuración en menos de un día
> 4. Alertas automáticas cuando un deal cae debajo del umbral
> 5. Vista por rep, por territorio y por producto en un clic

**Tus beneficios clave:**
```
1. [Beneficio con número si es posible]
2. [Beneficio con número si es posible]
3. [Beneficio con número si es posible]
4. [Opcional — beneficio adicional]
5. [Opcional — beneficio adicional]
```

---

### CAMPO 5 — Objeciones principales

**Qué es:** Las 3 razones por las que tu ICP no convierte ahora mismo. Nómbralas como preguntas que se hace el visitante.

**Regla:** Las objeciones no resueltas en la landing se convierten en razones para cerrar la pestaña. Claude Code va a construir una sección de FAQ que las desmonta una por una.

**Ejemplos:**
> - "¿Funciona con mi CRM actual o tengo que migrar todo?"
> - "¿Cuánto tiempo toma implementarlo y quién lo hace?"
> - "¿Qué pasa con mis datos si dejo de usar la herramienta?"
> - "¿Tiene soporte en español o solo en inglés?"
> - "¿El precio cambia cuando escalo el equipo?"

**Tus objeciones principales:**
```
1. [Pregunta que se hace tu ICP antes de convertir]
2. [Pregunta que se hace tu ICP antes de convertir]
3. [Pregunta que se hace tu ICP antes de convertir]
```

---

### CAMPO 6 — Prueba social

**Qué es:** Lo que tienes disponible para generar credibilidad. Número de clientes, testimonios reales, logos, resultados medibles.

**Regla:** Si no tienes nada todavía, escribe "ninguna por ahora" — Claude Code va a proponer placeholders realistas que puedes reemplazar cuando tengas los datos reales. No inventes números.

**Opciones:**
> - Número de clientes o usuarios activos
> - Un testimonio real con nombre, cargo y empresa (o iniciales si el cliente prefiere)
> - Logos de empresas que lo usan (si tienes permiso)
> - Resultados medibles de casos reales ("reducción del 80% en tiempo de reporte")
> - Nombre de inversores o aceleradores si son reconocidos por tu ICP

**Ejemplo:**
> Usado por 200+ equipos de ventas en Latam y España.
> "Bajamos el tiempo de cierre de reportes un 80% en la primera semana. Lo que más me sorprendió fue que no necesitamos involucrar a IT." — María G., Directora Comercial, Fintech B2B, México.

**Tu prueba social:**
```
[Describe qué tienes: número de clientes, testimonio, logos, resultados]
[Si no tienes nada todavía, escribe: "Sin prueba social por ahora — usar placeholders"]
```

---

### CAMPO 7 — URL del experimento

**Qué es:** El slug que quieres usar para esta landing. Limpio, descriptivo y rastreable.

**Regla:** Usa algo que te ayude a entender de dónde viene el tráfico cuando veas los datos. Evita slugs genéricos como `/landing1`.

**Ejemplos:**
> - `/demo-reportes`
> - `/prueba-gratis-sales`
> - `/equipos-ventas`
> - `/acceso-anticipado`
> - `/vs-[nombre-del-competidor]`

**Tu URL:**
```
/[slug-del-experimento]
```

---

## El prompt completo para Claude Code

Una vez que tengas los 7 campos, copia el bloque de abajo, reemplaza cada sección entre corchetes con tu información y pégalo directamente en Claude Code.

---

```
Eres un desarrollador frontend especializado en landing pages de conversión.

Tu tarea: construir una landing page completa lista para publicar en Vercel.

**INSTRUCCIONES TÉCNICAS:**
- Genera un solo archivo HTML con CSS interno (no archivos separados)
- Diseño limpio, profesional, mobile-first
- Fuente: Inter o system-ui
- Paleta de colores: fondo blanco, texto oscuro (#1a1a1a), color de acento [elige tú basándote en el tono del producto]
- El formulario de CTA debe capturar email y nombre, con validación básica en JavaScript
- Sin dependencias externas — todo debe funcionar sin conexión a internet excepto Google Fonts
- El archivo se llama index.html

**ESTRUCTURA DE LA PÁGINA (en este orden):**
1. Hero section: H1 con la propuesta de valor, subtítulo de apoyo, formulario de CTA
2. Sección de beneficios: 3–5 puntos con iconos SVG simples
3. Sección de prueba social: número de clientes + testimonio
4. Sección de objeciones: FAQ con 3 preguntas y respuestas
5. CTA final: repetición del formulario con copy diferente
6. Footer mínimo: nombre del producto + link de política de privacidad placeholder

**CONTEXTO DEL PRODUCTO:**

Propuesta de valor:
[Pega aquí tu Campo 1]

ICP:
[Pega aquí tu Campo 2]

CTA principal:
[Pega aquí tu Campo 3]

Beneficios clave:
[Pega aquí tu Campo 4 — lista numerada]

Objeciones principales:
[Pega aquí tu Campo 5 — lista numerada]

Prueba social disponible:
[Pega aquí tu Campo 6]

URL del experimento:
[Pega aquí tu Campo 7]

**INSTRUCCIONES DE COPY:**
- El H1 debe ser exactamente la propuesta de valor (o una versión más directa)
- El subtítulo debe nombrar el ICP y el problema que resuelve
- Los beneficios van con bullet points y un número concreto cuando es posible
- Las respuestas al FAQ son directas, sin rodeos — máximo 3 líneas cada una
- El CTA se repite dos veces: en el hero y al final de la página
- Tono: directo, orientado a resultados, sin jerga técnica, sin adjetivos vacíos

**ANTES DE GENERAR, CONFIRMA:**
- ¿Entendiste el ICP?
- ¿Tienes claro el único CTA de la página?
- Si algo en el brief es vago o contradictorio, pregúntame antes de generar.

Cuando estés listo, genera el archivo index.html completo.
```

---

## Cómo publicar en Vercel una vez que tengas el archivo

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta gratuita (plan Hobby)
2. En tu dashboard, haz clic en **Add New → Project**
3. Selecciona **"Deploy from file"** o arrastra la carpeta con tu `index.html`
4. Vercel detecta automáticamente que es un sitio estático — no hay configuración adicional
5. Haz clic en **Deploy**
6. En menos de 60 segundos tienes tu URL: `[nombre-proyecto].vercel.app`

**Para usar tu propio dominio:** En el panel del proyecto → Settings → Domains → agrega tu dominio. Sigue las instrucciones de DNS que te da Vercel (5 minutos).

---

## Lista de verificación antes de publicar

Antes de enviar tráfico a la landing, revisa:

- [ ] El H1 comunica el beneficio principal en menos de 10 palabras
- [ ] El CTA es claro — el visitante sabe exactamente qué pasa cuando hace clic
- [ ] La página carga en menos de 3 segundos (prueba en [pagespeed.web.dev](https://pagespeed.web.dev))
- [ ] El formulario funciona y captura el email correctamente
- [ ] La página se ve bien en móvil (usa el inspector del navegador para verificar)
- [ ] La URL del experimento está bien configurada y es rastreable
- [ ] Tienes UTM parameters en los links que van a esta página

---

**Siguiente paso:** Con la landing publicada, la Clase 09 te muestra cómo construir el tracker de experimentos para registrar los resultados y el sistema de alertas para saber cuándo algo no está funcionando.
