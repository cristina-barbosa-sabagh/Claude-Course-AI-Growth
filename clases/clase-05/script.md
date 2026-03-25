# Motor de retención: onboarding, reactivación y upsell con Claude — GUIÓN EN PANTALLA
**Instructor C · 16 minutos · Módulo 02**

---

## 1. ABRO CLAUDE Y CARGO LOS INPUTS DE ONBOARDING

Abro Claude.ai y entro al Project de Growth. Nueva conversación.

[ACCIÓN EN PANTALLA: abrir claude.ai, hacer clic en el Project "Growth — [Empresa]", abrir nueva conversación con clic en "New Chat"]

Tengo aquí un archivo de texto con los inputs de onboarding del producto. Lo pego en el chat.

[ACCIÓN EN PANTALLA: abrir el archivo de texto con los inputs, seleccionar todo (Cmd+A), copiar y pegar en el campo de texto de Claude — mostrar que el bloque incluye: nombre del producto, ICP, momento aha, pasos de activación con sus obstáculos, tono de marca]

Lo más importante de este bloque son los obstáculos por paso. No me interesa describir los pasos en abstracto — me interesa decirle a Claude exactamente dónde se cae la gente. Si Claude sabe que en el Paso 1 el obstáculo es que el usuario no tiene credenciales de admin en Salesforce, puede escribir el email que resuelve ese problema antes de que aparezca.

---

## 2. LANZO EL PROMPT DE LA SECUENCIA DE ONBOARDING

Debajo de los inputs, pego este prompt:

```
Con base en el contexto de mi negocio y los inputs de onboarding que te compartí,
escribe una secuencia completa de 5 emails de activación.

Arquitectura:
- Email 1: Bienvenida + primer paso (envío: inmediato al registro)
- Email 2: Empujón en punto de fricción del Paso 1 (envío: Día 2, si NO conectó Salesforce)
- Email 3: Momento aha explicado (envío: Día 3-4, si SÍ completó el Paso 1)
- Email 4: Prueba social contextual (envío: Día 5)
- Email 5: Cierre de ventana de activación (envío: Día 7, si no completó activación)

Formato para cada email:
---
EMAIL [número]
Condición de envío: [cuándo se envía y a qué segmento exacto]
Asunto: [texto — máx. 50 caracteres]
Preheader: [texto — máx. 90 caracteres]
Cuerpo: [texto completo con párrafos separados]
CTA: [texto del botón]
---

Reglas:
- Ningún email empieza con {{ customer.first_name }} como primera línea — empieza con el contenido
- Sin frases de relleno: "esperamos que estés bien", "como sabes", "en el mundo de hoy"
- Un solo CTA por email
- Máximo 4 párrafos cortos por email
- Tono: directo, como hablaría un Sales Manager a otro Sales Manager
- Sin "potencia", "transforma", "solución", "ecosistema"
- Usar formato Klaviyo para merge tags: {{ customer.first_name }}
```

[ACCIÓN EN PANTALLA: pegar el prompt debajo de los inputs ya pegados, presionar Enter, esperar en silencio mientras Claude genera — no hablar durante la generación]

---

## 3. LEO EL EMAIL 1 EN VOZ ALTA

[ACCIÓN EN PANTALLA: cuando el Email 1 aparece en pantalla, señalar con el cursor el asunto mientras se lee]

Mira el Email 1. No empieza con "Bienvenido a SalesFlow". Empieza con la acción que el usuario tiene que hacer. El asunto dice qué hay que hacer, no qué es el producto. El cuerpo tiene tres párrafos. Un solo CTA.

[ACCIÓN EN PANTALLA: señalar con el cursor la línea donde se menciona el obstáculo del Paso 1]

Y mira esto: dice exactamente que si no tienes las credenciales de admin de Salesforce, aquí está el link para pedírselas a IT. Eso lo puse en los inputs como "obstáculo del Paso 1". Claude lo convirtió en un email que resuelve el problema antes de que aparezca.

Esa es la diferencia entre onboarding genérico y onboarding que activa.

---

## 4. LEO EL EMAIL 2 Y EL EMAIL 5 EN VOZ ALTA

[ACCIÓN EN PANTALLA: hacer scroll hasta el Email 2, señalar la condición de envío]

Email 2 — el empujón. Fíjate en la condición de envío: "solo si no conectaron Salesforce en 48 horas". Este email no asume que el usuario es vago — asume que hubo un obstáculo específico. El tono no tiene drama, no hay "te estamos esperando". Hay una solución concreta al problema concreto.

[ACCIÓN EN PANTALLA: hacer scroll hasta el Email 5]

Email 5 — el cierre de la ventana. Este es el que más se descuida. Mira el tono: más directo, menos cálido. Y el incentivo que incluí en los inputs — la sesión de setup de 20 minutos — aparece aquí, no en el Email 1. Si lo pones demasiado pronto, pierdes la palanca de urgencia cuando más la necesitas.

---

## 5. REFINO UN ASUNTO EN TIEMPO REAL

El asunto del Email 4 es funcional pero quiero ver alternativas más específicas. Pego esto:

```
El asunto del Email 4 es funcional pero podría ser más específico.
Dame 3 alternativas que:
- Mencionen el resultado concreto que otro usuario logró en esa etapa
- Tengan máximo 45 caracteres
- No empiecen con "Cómo"
Explica en 1 línea qué hace diferente a cada opción.
```

[ACCIÓN EN PANTALLA: escribir el prompt de refinamiento en el mismo chat, presionar Enter, esperar el output y leer las 3 opciones en voz alta]

Treinta segundos. Tres opciones con lógica diferente. Ahora puedo A/B testear el asunto sin tener que pensar cómo redactarlo. Elijo una, la cargo en Klaviyo, y en dos semanas tengo el dato.

---

## 6. ABRO NUEVA CONVERSACIÓN PARA EL EMAIL DE REACTIVACIÓN

Nueva conversación en el mismo Project.

[ACCIÓN EN PANTALLA: hacer clic en "New Chat" dentro del Project, mostrar que la pantalla queda limpia pero el contexto del Project sigue cargado]

Aquí voy a trabajar el email de reactivación para usuarios que llevan 30 días sin hacer login. Pego este prompt:

```
Escribe un email de reactivación para usuarios de SalesFlow que no han hecho login en 30 días.

Perfil del segmento:
- Usuarios que completaron el onboarding (conectaron Salesforce y corrieron al menos un reporte)
- Estuvieron activos entre 2 y 8 semanas
- Se desconectaron hace 30 días sin cancelar la cuenta
- No han respondido a los emails automáticos de inactividad del sistema

Objetivo del email: conseguir que vuelvan a hacer login y corran un reporte esta semana.

Contexto adicional:
- Desde que se fueron, lanzamos la función de alertas automáticas cuando un rep no actualiza el pipeline en 5 días
- No hay descuento disponible para reactivación

Formato:
Asunto: [texto — máx. 50 caracteres]
Preheader: [texto — máx. 90 caracteres]
Cuerpo: [texto completo — máx. 3 párrafos]
CTA: [texto del botón — máx. 4 palabras]

Reglas:
- No empieces con "Te hemos echado de menos" — es lo más genérico que existe
- No inventes urgencia falsa si no hay una razón real
- Mencioná la función nueva de alertas como razón concreta para volver
- Tono: directo, sin dramatismo
```

[ACCIÓN EN PANTALLA: pegar el prompt, presionar Enter, esperar el output y leer el email completo en voz alta señalando cada párrafo]

---

## 7. ABRO NUEVA CONVERSACIÓN PARA EL ANÁLISIS DE UPSELL

Última conversación. Mismo Project.

[ACCIÓN EN PANTALLA: hacer clic en "New Chat" dentro del Project]

Pego este prompt para identificar las señales de comportamiento que indican que un usuario está listo para hacer upgrade:

```
Quiero definir los indicadores de expansión para SalesFlow — los comportamientos que señalan que un usuario del plan básico está listo para hacer upgrade al plan Pro.

Plan básico: hasta 10 reportes automáticos por mes, 1 usuario, integración con Salesforce solamente.
Plan Pro: reportes ilimitados, hasta 10 usuarios, integraciones con HubSpot y Pipedrive, alertas de pipeline.

Basándote en el perfil de nuestro ICP (Sales Managers con equipos de 5 a 15 reps), dime:

1. ¿Cuáles son los 3 comportamientos en el producto que mejor predicen intención de upgrade?
2. ¿En qué momento exacto (días desde registro, evento específico) debería dispararse el mensaje de upsell?
3. ¿Cuál es el beneficio más relevante del plan Pro para un usuario que acaba de alcanzar el límite de 10 reportes?
4. Escribe el mensaje de upsell in-app para ese momento exacto: máximo 2 líneas de cuerpo, CTA de máximo 4 palabras, CTA de rechazo suave.
```

[ACCIÓN EN PANTALLA: pegar el prompt, presionar Enter, hacer scroll por el output mientras se lee en voz alta]

Fíjate en lo que hace Claude: no me da features genéricas del plan Pro. Me dice cuál es el beneficio específico para el usuario que acaba de alcanzar el límite de 10 reportes en el momento en que más le duele ese límite. Eso es relevancia. No spam.

---

## 8. MUESTRO LAS TRES CONVERSACIONES

[ACCIÓN EN PANTALLA: mostrar las tres conversaciones abiertas en el Project haciendo clic entre ellas — onboarding, reactivación, upsell]

En este Project tenemos ahora tres sistemas activos: la secuencia de activación completa de 5 emails, el email de reactivación para usuarios dormidos, y el análisis de upsell con el mensaje listo para cargar in-app.

Tres flujos. Construidos en menos de 15 minutos de pantalla. Lo que falta es llevarlos a Klaviyo y a tu herramienta de in-app.

Tu tarea está en el entregable. Elige el flujo que más impacto tiene en tu negocio esta semana y empiézalo hoy.

---

*Duración estimada del guión: 14–16 minutos de grabación en pantalla*
