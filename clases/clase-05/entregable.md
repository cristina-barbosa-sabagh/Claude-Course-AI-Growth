# Plantilla de Secuencia de Retención Completa
## Onboarding + Reactivación + Upsell — lista para cargar en tu herramienta de email

**Módulo 02 · Clase 05 · Claude para Growth**

---

Esta plantilla tiene tres secciones independientes. Cada una genera una secuencia de emails completa con un solo prompt en Claude. Elige la que más impacto tiene en tu negocio esta semana y empieza por ahí.

Tiempo estimado por sección: **20–30 minutos** (incluyendo revisión y carga en la herramienta).

---

## SECCIÓN 1 — Secuencia de Onboarding (5 emails de activación)

### Inputs que debes rellenar antes de ejecutar el prompt

```
INPUTS DE ONBOARDING

Producto: [nombre + qué hace en 1 línea]
ICP: [perfil del usuario que acaba de registrarse — cargo, contexto, qué busca resolver]
Herramienta de email: [Mailchimp / Klaviyo / otra]
¿Usa merge tags para personalización?: [Sí — especifica cuáles / No]

Momento "aha" de tu producto:
[¿Cuándo entiende el usuario que el producto funciona? ¿Qué paso completó? ¿Cuánto tarda en llegar ahí?
Si no lo sabes con certeza, describe lo más parecido que tengas.]

Pasos de activación (los 3 a 5 pasos que debe completar en los primeros 7 días):
1. [paso]
2. [paso]
3. [paso]
4. [paso — si aplica]
5. [paso — si aplica]

Obstáculo principal en cada paso (dónde se cae la gente / qué pregunta hacen):
Paso 1: [obstáculo]
Paso 2: [obstáculo]
Paso 3: [obstáculo]

Tono de marca: [ej: directo y técnico / cálido y cercano / irreverente / profesional pero humano]
Palabras o frases que NUNCA usamos: [lista]

¿Hay alguna oferta o incentivo que puedas usar en el Email 5 (si no activaron)?: [Sí: cuál / No]
```

---

### Prompt de generación — Secuencia de Onboarding

Pega los inputs arriba y luego ejecuta este prompt en tu Project de Claude:

```
Con base en el contexto de mi negocio y los inputs de onboarding que te compartí, escribe
una secuencia completa de 5 emails de activación.

Arquitectura de la secuencia:

Email 1 — Bienvenida + primer paso (envío: inmediato al registro)
- Objetivo: conseguir que complete el Paso 1 de activación
- Un solo CTA, claro y específico
- Tono: cálido pero directo — no celebratorio

Email 2 — Empujón en el punto de fricción (envío: Día 2, si NO completó el Paso 1)
- Reconoce que no avanzó, sin hacerlo sentir mal
- Nombra el obstáculo específico del Paso 1 y ofrece la solución concreta
- CTA: retomar desde donde se quedó

Email 3 — El momento aha explicado (envío: Día 3-4, si SÍ completó el Paso 1)
- Felicita por lo que hizo (específico — no genérico)
- Explica qué acaba de lograr en términos de resultado concreto
- Presenta el siguiente paso como la progresión natural

Email 4 — Prueba social contextual (envío: Día 5)
- Historia breve o resultado de un cliente en la misma etapa que el usuario
- Conecta el resultado del cliente con lo que este usuario está a punto de lograr
- CTA: acción que lleva al siguiente paso de activación

Email 5 — Cierre de ventana de activación (envío: Día 7, si no completó la activación)
- Urgencia real — no falsa
- [Usa el incentivo que definiste, o si no tienes uno: énfasis en lo que pierde si no activa]
- Tono: más directo. Menos cálido. Este es el último email de la secuencia de activación.

Formato para cada email:
---
EMAIL [número]
Condición de envío: [cuándo se envía y a qué segmento]
Asunto: [texto — máx. 50 caracteres]
Preheader: [texto — máx. 90 caracteres]
Cuerpo:
[texto completo del email — con saltos de párrafo claros]
CTA: [texto del botón o enlace]
URL del CTA: [dejar como [URL] para que el equipo la complete]
---

Reglas de redacción:
- Ningún email empieza con "Hola [nombre]" como primera línea — empieza siempre con el contenido
- Sin frases de relleno: "esperamos que estés bien", "como sabes", "en el mundo de hoy"
- Cada email tiene un solo CTA
- El cuerpo de cada email debe tener máximo 4 párrafos cortos
- Escribe como habla la marca — usa el tono que te especifiqué
```

---

### Estructura de referencia — cómo debería verse cada email terminado

*(Usa esto para evaluar el output de Claude antes de cargarlo)*

**Email 1 — ejemplo de estructura correcta:**

> **Asunto:** Tu primer paso en [Producto] — 5 minutos
> **Preheader:** Hazlo ahora y verás el resultado antes de cerrar esta pestaña.
>
> [Nombre],
>
> [Párrafo de apertura: lo que el usuario acaba de hacer y a qué lo lleva. No celebratorio. Orientado al siguiente paso.]
>
> [Párrafo de instrucción: el primer paso, explicado de forma simple. Qué hace, por qué importa, cuánto tarda.]
>
> [Párrafo de anticipación: qué va a ver cuando complete ese paso. El resultado concreto, no genérico.]
>
> **[Texto del CTA]**

---

## SECCIÓN 2 — Secuencia de Reactivación (3 emails para usuarios dormidos)

### Inputs que debes rellenar antes de ejecutar el prompt

```
INPUTS DE REACTIVACIÓN

Definición de "usuario dormido" en tu negocio:
[ej: sin login en 21 días / sin completar una acción clave en 14 días / sin uso en 30 días]

Segmento a reactivar — elige uno:
[ ] Usuarios que nunca activaron (registraron pero nunca completaron el onboarding)
[ ] Usuarios que activaron pero dejaron de usar (tenían engagement, ahora no)
[ ] Usuarios en período de prueba que no convirtieron a pago

Descripción del patrón de este segmento:
[¿Qué hicieron antes de desaparecer? ¿Cuál fue el último paso que completaron?
¿Hay algún evento que correlacione con el drop-off? Describe lo que sabes.]

¿Qué novedades o mejoras tiene el producto desde que se fueron? (si aplica):
[lista de 2 a 3 cambios relevantes — si no hay, déjalo vacío]

¿Tienes algún incentivo para reactivarlos? (si no, no inventes uno):
[ej: "extensión de prueba por 7 días" / "sesión de setup gratuita" / sin incentivo]

Tono de la reactivación:
[ej: directo y sin drama / cálido — reconociendo que la vida está ocupada / urgente]
```

---

### Prompt de generación — Secuencia de Reactivación

```
Con base en el contexto de mi negocio y los inputs de reactivación, primero analiza el patrón
que te describí y luego escribe una secuencia de 3 emails de recuperación.

PASO 1 — Análisis (antes de escribir los emails):
1. ¿Qué hipótesis tienes sobre por qué estos usuarios se desconectaron?
2. ¿Cuál debería ser el mensaje central de la recuperación para este segmento?
3. ¿En qué email debería aparecer el incentivo (si hay) y por qué?

PASO 2 — Secuencia de 3 emails:

Email 1 — Reconocimiento (envío: al detectar el patrón de inactividad)
- Reconoce la ausencia sin culpa ni dramatismo
- No ofrezcas el incentivo todavía
- Muestra que el producto sigue ahí y ha mejorado (si hay novedades)
- CTA de bajo compromiso: ver qué hay de nuevo, no "volver ahora"

Email 2 — El caso para volver (envío: 4–5 días después, si no reabrieron)
- Muestra un resultado concreto que otro usuario como ellos logró durante el tiempo que estuvieron ausentes
- Conecta ese resultado con lo que este usuario buscaba originalmente
- Si hay incentivo, menciónalo aquí pero no como desesperación — como cortesía
- CTA más directo: retomar desde donde lo dejaron

Email 3 — La despedida que invita (envío: 5–7 días después, si sigue sin respuesta)
- Tono de cierre: "si no quieres seguir, lo entendemos — pero antes de irte..."
- Si hay incentivo, este es el último momento para usarlo con urgencia real
- Si no hay incentivo: enfocarse en lo que van a perder o en qué punto se quedarán
- CTA: la acción más simple posible para reactivar

Formato para cada email:
---
EMAIL [número]
Condición de envío: [cuándo y a qué segmento]
Asunto: [texto — máx. 50 caracteres]
Preheader: [texto — máx. 90 caracteres]
Cuerpo: [texto completo]
CTA: [texto del botón o enlace]
---

Reglas:
- El primer email NO debe sonar desesperado
- Ningún email empieza con "Te hemos echado de menos" — es genérico y no funciona
- El tono debe ser consistente con cómo habla la marca habitualmente
- Tres emails máximo — si no reactivaron después del tercero, los sacas del flujo
```

---

## SECCIÓN 3 — Mensaje de Upsell (el momento exacto + el mensaje correcto)

### Inputs que debes rellenar antes de ejecutar el prompt

```
INPUTS DE UPSELL

Plan actual del usuario que quieres hacer upgrade: [nombre del plan + qué incluye]
Plan al que quieres llevarlo: [nombre del plan + qué agrega]

Indicador de expansión — el comportamiento que señala que está listo:
[ej: "usó la feature X más de 10 veces en 14 días" / "alcanzó el límite de Y"
/ "invitó a más de 3 personas al equipo" / "usó el 90% de su cuota mensual"]

Beneficio específico del plan superior PARA ESTE usuario en ESTE momento:
[No los features genéricos del plan Pro. El beneficio concreto para alguien que acaba de
alcanzar el indicador que describiste. ej: "Con el plan Pro, no tendrías el límite de
10 reportes mensuales — podrías correr el análisis de la semana que está entrando sin parar."]

Canal del mensaje de upsell: [In-app / Email / Ambos]
Momento del envío: [inmediato al trigger / día siguiente / cuándo]

¿Hay precio o descuento que puedas mencionar?: [Sí: cuál / No]
¿Hay periodo de prueba del plan superior?: [Sí: cuántos días / No]
```

---

### Prompt de generación — Mensaje de Upsell

```
Con base en el contexto de mi negocio y los inputs de upsell, escribe el mensaje de upgrade
para el usuario que acaba de alcanzar el indicador de expansión.

Genera dos versiones:

VERSIÓN A — Email de upsell
Asunto: [texto — máx. 50 caracteres]
Preheader: [texto — máx. 90 caracteres]
Cuerpo:
[Párrafo 1: reconoce lo que el usuario acaba de hacer / alcanzar — específico, no genérico]
[Párrafo 2: el problema que van a encontrar si se quedan en el plan actual en este momento]
[Párrafo 3: lo que el plan superior resuelve — en términos de su situación concreta, no features en abstracto]
[Párrafo 4 (si hay precio/prueba): la oferta concreta y por qué tiene sentido ahora]
CTA: [texto — máx. 4 palabras]

VERSIÓN B — Mensaje in-app (si aplica)
Título: [texto — máx. 8 palabras]
Cuerpo: [texto — máx. 2 líneas]
CTA: [texto — máx. 4 palabras]
CTA secundario (rechazar): [texto — máx. 4 palabras — ej: "Más tarde" / "No gracias"]

Reglas:
- El mensaje empieza desde el comportamiento del usuario — no desde el producto
- No uses "upgrade", "premium" o "pro" como primeras palabras — empieza desde el valor
- Sin urgencia falsa. Si hay una razón real para actuar ahora (límite alcanzado, precio especial), úsala. Si no hay, no la inventes.
- El CTA de rechazo en el in-app debe ser suave — no queremos fricción en la relación
```

---

## Tabla de implementación

Usa esta tabla para planificar qué cargar esta semana.

| Secuencia | Segmento objetivo | Herramienta | Status | Fecha de activación |
|---|---|---|---|---|
| Onboarding | [describe segmento] | Mailchimp / Klaviyo | Por escribir / En revisión / Activa | [fecha] |
| Reactivación | [describe segmento] | Mailchimp / Klaviyo | Por escribir / En revisión / Activa | [fecha] |
| Upsell | [describe segmento] | Email / In-app | Por escribir / En revisión / Activa | [fecha] |

---

## Checklist de revisión antes de cargar en la herramienta

Antes de subir cualquier email generado por Claude, verifica:

- [ ] El asunto no supera el límite de caracteres del canal
- [ ] El preheader no repite el asunto — lo complementa
- [ ] El cuerpo tiene máximo 4 párrafos cortos
- [ ] Hay un solo CTA — no dos
- [ ] El primer email de cada secuencia no empieza con "Hola [nombre]" como apertura
- [ ] El tono es consistente con cómo habla la marca en otros canales
- [ ] Los merge tags están en el formato correcto para tu herramienta ({{first_name}} en Mailchimp vs. {{ customer.first_name }} en Klaviyo)
- [ ] Si hay incentivo en la secuencia, aparece en el email correcto — no en el primero

---

## Por qué estos tres sistemas juntos

Onboarding sin reactivación: pierdes el 30% de usuarios que casi activaron pero no llegaron.
Reactivación sin upsell: rescatas usuarios sin expandir revenue.
Upsell sin onboarding: intentas crecer cuentas que no entienden todavía el valor base.

Los tres juntos son un sistema de revenue de ciclo completo. No necesitas los tres perfectos desde el día uno — necesitas los tres activos.

---

**Siguiente clase:** War Room de Growth — donde adquisición y retención convergen en un sistema de decisión en tiempo real.
