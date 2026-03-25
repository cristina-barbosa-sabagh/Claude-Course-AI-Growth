# DEMO PASO A PASO — Motor de retención: onboarding, reactivación y upsell con Claude

---

**Paso 1 — Prepara los inputs de onboarding en un archivo de texto**

- Antes de abrir Claude, prepara este bloque en un archivo .txt (reemplaza los valores con los de tu producto):

```
INPUTS DE ONBOARDING

Producto: SalesFlow — conecta con tu CRM y genera el reporte semanal de ventas en 8 minutos, no en 3 horas.
ICP: Sales Managers en empresas B2B de 50–200 empleados. Usan Salesforce. Equipo de 5–15 reps. Odian los reportes manuales.
Herramienta de email: Klaviyo
Merge tags: {{ customer.first_name }} para nombre

Momento "aha": cuando el usuario corre su primer reporte automático y ve que tarda 8 minutos en lugar de las 3 horas habituales. Ocurre en el Paso 2.

Pasos de activación:
1. Conectar Salesforce (autorización OAuth — 2 minutos)
2. Correr el primer reporte automático (seleccionar período y pipeline — 5 minutos)
3. Compartir el reporte con el equipo (invitar a 1 persona — 1 minuto)
4. Configurar el envío automático semanal (elegir día y hora — 2 minutos)

Obstáculo principal en cada paso:
Paso 1: El usuario no tiene credenciales de admin en Salesforce — tiene que pedírselas a IT
Paso 2: No sabe qué pipeline seleccionar si tiene varios activos
Paso 3: Duda si invitar al VP de Sales o solo al equipo directo
Paso 4: No recuerda hacerlo porque ya se fue del flujo de onboarding

Tono de marca: directo, sin ceremonia. Como hablaría un Sales Manager a otro.
Palabras que NUNCA usamos: "potencia", "transforma", "solución", "ecosistema"

Incentivo para Email 5: sesión de setup de 20 minutos con especialista — gratuita, sin pitch comercial.
```

- Deberías ver esto en pantalla: el bloque completo listo para copiar, con los obstáculos por paso claramente separados

---

**Paso 2 — Abre tu Project de Growth en Claude.ai**

- Ve a claude.ai → haz clic en el Project de Growth → "New Chat"
- Deberías ver esto en pantalla: campo de texto vacío, instrucciones de sistema del Project cargadas (visible en la barra lateral o en la sección de instrucciones del Project)

---

**Paso 3 — Pega los inputs y lanza el prompt de la secuencia**

- Pega el bloque de inputs del Paso 1 en el campo de texto
- Inmediatamente debajo, añade este prompt:

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
- Sin frases de relleno: "esperamos que estés bien", "en el mundo de hoy"
- Un solo CTA por email
- Máximo 4 párrafos cortos por email
- Tono: directo, como hablaría un Sales Manager a otro Sales Manager
- Sin "potencia", "transforma", "solución", "ecosistema"
- Usar formato Klaviyo para merge tags: {{ customer.first_name }}
```

- Presiona Enter y espera
- Deberías ver esto en pantalla: 5 bloques de email separados por el separador "---", cada uno con Condición de envío, Asunto, Preheader, Cuerpo y CTA. El Email 2 debe mencionar explícitamente las credenciales de admin de Salesforce como obstáculo específico del Paso 1.

---

**Paso 4 — Verifica que el Email 1 tenga las características correctas**

- Lee el Email 1 y verifica estos 4 puntos:
  - El asunto no empieza con el nombre del producto
  - El cuerpo no empieza con "Hola {{ customer.first_name }}" como primera línea de contenido
  - Hay exactamente 1 CTA
  - El cuerpo menciona el primer paso de activación (conectar Salesforce) con instrucción clara

- Si algún punto falla, pide:

```
El Email 1 empieza con "Hola {{ customer.first_name }}" como primera línea.
Reescribe la apertura del cuerpo: empieza directamente con el contenido del primer paso, sin saludo.
```

- Deberías ver esto en pantalla: la apertura del email reescrita sin saludo, comenzando con el contenido

---

**Paso 5 — Pide 3 alternativas del asunto del Email 4 para A/B test**

- En el mismo chat, escribe:

```
El asunto del Email 4 es funcional pero quiero opciones para A/B testear.
Dame 3 alternativas que:
- Mencionen el resultado concreto que otro usuario logró en esa misma etapa
- Tengan máximo 45 caracteres
- No empiecen con "Cómo"
Explica en 1 línea qué hace diferente a cada opción.
```

- Deberías ver esto en pantalla: 3 asuntos numerados con caracteres contables, cada uno seguido de una línea de explicación que describe el ángulo distinto de cada opción

---

**Paso 6 — Abre nueva conversación para el email de reactivación**

- Haz clic en "New Chat" dentro del mismo Project
- Pega este prompt:

```
Escribe un email de reactivación para usuarios de SalesFlow que no han hecho login en 30 días.

Perfil del segmento:
- Usuarios que completaron el onboarding (conectaron Salesforce y corrieron al menos un reporte)
- Estuvieron activos entre 2 y 8 semanas
- Se desconectaron hace 30 días sin cancelar la cuenta

Objetivo: conseguir que vuelvan a hacer login y corran un reporte esta semana.

Contexto adicional:
- Desde que se fueron, lanzamos alertas automáticas cuando un rep no actualiza el pipeline en 5 días
- No hay descuento disponible

Formato:
Asunto: [texto — máx. 50 caracteres]
Preheader: [texto — máx. 90 caracteres]
Cuerpo: [texto completo — máx. 3 párrafos]
CTA: [texto del botón — máx. 4 palabras]

Reglas:
- No empieces con "Te hemos echado de menos"
- No inventes urgencia falsa
- Menciona la función nueva de alertas como razón concreta para volver
- Tono: directo, sin dramatismo
```

- Deberías ver esto en pantalla: un email completo de 3 párrafos donde el párrafo 2 o 3 menciona la función de alertas como novedad concreta, sin frases genéricas de reactivación como "te echamos de menos" o "vuelve cuando quieras"

---

**Paso 7 — Pide 3 variaciones del asunto del email de reactivación**

- En el mismo chat:

```
Dame 3 variaciones del asunto de este email de reactivación:
- 1 que mencione la función nueva de alertas
- 1 que abra con una pregunta sobre el pipeline del equipo
- 1 muy corto y directo (máximo 30 caracteres)
Todas en máximo 50 caracteres.
```

- Deberías ver esto en pantalla: 3 asuntos claramente diferenciados por el ángulo, todos dentro del límite de 50 caracteres

---

**Paso 8 — Abre nueva conversación para el análisis de upsell**

- Haz clic en "New Chat" dentro del mismo Project
- Pega este prompt:

```
Quiero definir los indicadores de expansión para SalesFlow — los comportamientos que señalan que un usuario del plan básico está listo para hacer upgrade al plan Pro.

Plan básico: hasta 10 reportes automáticos por mes, 1 usuario, integración con Salesforce solamente.
Plan Pro: reportes ilimitados, hasta 10 usuarios, integraciones con HubSpot y Pipedrive, alertas de pipeline.

Basándote en el perfil de nuestro ICP (Sales Managers con equipos de 5 a 15 reps), dime:

1. ¿Cuáles son los 3 comportamientos en el producto que mejor predicen intención de upgrade?
2. ¿En qué momento exacto debería dispararse el mensaje de upsell?
3. ¿Cuál es el beneficio más relevante del plan Pro para un usuario que acaba de alcanzar el límite de 10 reportes mensuales?
4. Escribe el mensaje de upsell in-app para ese momento:
   - Título: máximo 8 palabras
   - Cuerpo: máximo 2 líneas
   - CTA principal: máximo 4 palabras
   - CTA de rechazo: máximo 4 palabras (suave — no queremos fricción)
```

- Deberías ver esto en pantalla: una respuesta de 4 puntos donde el punto 3 describe el beneficio específico para alguien que acaba de alcanzar el límite de reportes (no los features genéricos del plan Pro), y el punto 4 tiene el mensaje in-app completo con formato listo para copiar

---

**Paso 9 — Pide también la versión email del upsell**

- En el mismo chat:

```
Ahora escribe la versión email del mensaje de upsell para el mismo momento — cuando el usuario alcanzó el límite de 10 reportes en el plan básico.

Formato:
Asunto: [texto — máx. 50 caracteres]
Preheader: [texto — máx. 90 caracteres]
Cuerpo:
[Párrafo 1: reconoce lo que el usuario acaba de alcanzar — específico]
[Párrafo 2: el problema que van a encontrar si se quedan en el plan actual]
[Párrafo 3: lo que el plan Pro resuelve en su situación concreta — no features en abstracto]
CTA: [texto — máx. 4 palabras]

Reglas:
- El email empieza desde el comportamiento del usuario, no desde el producto
- Sin urgencia falsa — no hay oferta especial activa
- No uses "upgrade" o "premium" como primera palabra del cuerpo
```

- Deberías ver esto en pantalla: un email de 3 párrafos donde el párrafo 1 menciona explícitamente el límite de 10 reportes alcanzado (no un genérico "vemos que usas mucho el producto")

---

**Paso 10 — Guarda los tres outputs por separado**

- Copia el output de la secuencia de onboarding → guarda en doc "Onboarding — 5 emails — [fecha]"
- Copia el email de reactivación → guarda en doc "Reactivación — 30 días — [fecha]"
- Copia el análisis y mensajes de upsell → guarda en doc "Upsell — límite reportes — [fecha]"
- En cada doc, marca qué debes configurar en Klaviyo antes de activar (condiciones de envío, segmentos, triggers)

- Deberías ver esto en pantalla: tres documentos guardados, cada uno con el output listo y las notas de implementación marcadas
