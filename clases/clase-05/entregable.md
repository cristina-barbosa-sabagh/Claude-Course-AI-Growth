# TU TAREA — hazlo ahora (tarda 25 minutos)
## Clase 05 · Motor de retención: onboarding, reactivación y upsell con Claude

---

## Checklist de ejecución

☐ **Abre Claude → entra a tu Project → pega este prompt para la secuencia de onboarding:**

```
Actúa como un especialista en lifecycle marketing y retención para SaaS.

Mi producto: [nombre] — [qué hace]
ICP: [perfil del usuario que acaba de registrarse]
Objetivo: llevar al usuario de "registrado" a "primer valor obtenido" en 7 días
Métrica de activación: [ej: "completar la primera integración", "crear el primer proyecto", "invitar a un colega"]

Crea una secuencia de onboarding de 5 emails:
- Email 1 (día 0 — inmediato al registro): bienvenida + primer paso concreto
- Email 2 (día 1): tip clave para llegar a la métrica de activación
- Email 3 (día 3 — si no activó): recordatorio con prueba social
- Email 4 (día 5 — si activó): felicitación + siguiente nivel de valor
- Email 5 (día 7 — si no activó): oferta de ayuda directa / llamada de onboarding

Para cada email:
- Asunto (máx 50 caracteres)
- Preheader (máx 85 caracteres)
- Cuerpo (máx 150 palabras)
- CTA único y específico

Tono: cálido pero directo. Sin relleno. Sin "esperamos que estés disfrutando".
```

→ Guarda los 5 emails. Están listos para cargar en tu herramienta de email.

---

☐ **En la misma conversación → genera el email de reactivación:**

```
Crea un email de reactivación para usuarios que se registraron pero llevan 30 días sin iniciar sesión.

Contexto:
- Completó el registro pero nunca llegó a la métrica de activación
- No respondió a los emails de onboarding
- Es el último intento antes de marcarlo como churned

Crea 2 versiones:
Versión A: ángulo "te perdiste esto" — mostrar el valor que no experimentaron
Versión B: ángulo de pregunta directa — preguntar qué pasó y ofrecer ayuda

Para cada versión: asunto + cuerpo (máx 100 palabras) + CTA.
Indica en cuál apostarías y por qué.
```

→ Guarda ambas versiones. Elige cuál testear primero.

---

☐ **Abre nueva conversación → genera el mapa de señales de upsell:**

```
Actúa como un especialista en expansión de revenue para SaaS.

Mi plan actual: [nombre y precio]
Mi plan premium: [nombre y precio]
Las 3 principales diferencias de valor entre planes: [lista las 3]

Dame:
1. 5 comportamientos del usuario que indican intención de upgrade (señales específicas dentro del producto)
2. Para cada señal: el mensaje de upsell ideal y el canal (in-app, email, llamada)
3. El momento exacto para enviar el mensaje (triggereado por la señal)

Basa tu respuesta en mejores prácticas de PLG (Product-Led Growth).
```

→ Guarda el mapa. Es tu plan de triggers de upsell para implementar.

---

☐ **En la misma conversación → escribe el email de upsell para la señal #1:**

```
Usando la señal de upsell #1 que identificaste, escribe el email de upsell.

El usuario acaba de: [describe el comportamiento específico de la señal]
Lo que gana con el upgrade: [beneficio en términos de resultado, no de feature]

Email:
- Asunto (personalizado, referencia lo que el usuario hizo)
- Cuerpo (máx 120 palabras: reconoce el uso, presenta el upgrade como evolución natural, CTA)
- CTA: link al upgrade con texto específico (no "haz clic aquí")

Tono: conversacional, como si lo enviara el founder directamente.
```

→ Configura el trigger en tu herramienta de email o CRM.

---

☐ **Testa el email de onboarding con peor rendimiento:**

```
Este es el email de onboarding con menor tasa de apertura: [pega el email]
Tasa de apertura actual: [X]%
Tasa de clic actual: [X]%

Reescríbelo con:
1. Un asunto completamente diferente (ángulo de curiosidad)
2. El cuerpo reducido en un 30%
3. El CTA más específico y orientado a resultado inmediato

Mantén el mismo objetivo del email original.
```

→ Tendrás la versión B para A/B test esta semana.

---

## Sabrás que lo hiciste bien cuando:

✅ Tienes 5 emails de onboarding listos para cargar en Klaviyo / Customer.io / HubSpot
✅ Tienes 2 versiones de email de reactivación para usuarios inactivos a 30 días
✅ Tienes un mapa de 5 señales de upsell con mensaje y canal para cada una
✅ El email de upsell del trigger #1 está listo para configurar como automatización
✅ Cada email tiene un solo CTA — y el usuario puede completarlo en menos de 60 segundos
