# Demo en Vivo — Secuencia de onboarding completa en menos de 8 minutos
**Clase 05 · Instructor C · Segmento: 11:00–15:00 del guión**

---

## Objetivo del demo

Mostrar el flujo completo de generación de onboarding en tiempo real: desde los inputs del producto hasta cinco emails completos listos para cargar en Mailchimp o Klaviyo — usando el Project de Growth con contexto cargado.

Tiempo de ejecución en pantalla: **< 8 minutos**.

---

## Setup antes de grabar

- [ ] Abrir el Project de Growth en Claude.ai (con instrucciones de sistema que incluyan producto, ICP y tono de marca)
- [ ] Tener los inputs de onboarding del producto de ejemplo (ver abajo) listos en un archivo de texto separado
- [ ] Tener el entregable de la clase (entregable.md) abierto en otra pestaña para mostrar la plantilla al cierre
- [ ] Pantalla compartida activa, resolución legible
- [ ] Ninguna pestaña visible que distraiga

---

## Producto de ejemplo para el demo

*(Usar estos datos anonimizados durante la grabación. El producto es reconocible para la audiencia — SaaS B2B, equipo de ventas.)*

```
INPUTS DE ONBOARDING

Producto: SalesFlow — conecta con tu CRM y genera el reporte semanal de ventas en 8 minutos,
no en 3 horas.
ICP: Sales Managers en empresas B2B de 50–200 empleados. Usan Salesforce.
Equipo de 5–15 reps. Odian los reportes manuales. Lo que celebran: tener datos
sin tener que construirlos.
Herramienta de email: Klaviyo
Merge tags: {{ customer.first_name }} para nombre, {{ company.name }} para empresa

Momento "aha": cuando el usuario corre su primer reporte automático y ve que tarda 8 minutos
en lugar de las 3 horas habituales. Esto pasa en el Paso 2 de la activación.

Pasos de activación:
1. Conectar Salesforce (autorización OAuth — 2 minutos)
2. Correr el primer reporte automático (seleccionar período y pipeline — 5 minutos)
3. Compartir el reporte con el equipo (invitar a 1 persona — 1 minuto)
4. Configurar el envío automático semanal (elegir día y hora — 2 minutos)

Obstáculo principal en cada paso:
Paso 1: El usuario no tiene las credenciales de admin en Salesforce — tiene que pedírselas a IT
Paso 2: No sabe qué pipeline seleccionar si tiene varios activos
Paso 3: Duda si invitar al VP de Sales o solo al equipo directo
Paso 4: No recuerda hacerlo porque ya se fue del flujo de onboarding

Tono de marca: directo, sin ceremonia. Como hablaría un Sales Manager a otro.
Palabras que NUNCA usamos: "potencia", "transforma", "solución", "ecosistema"

Incentivo para Email 5 (si no activaron en 7 días): sesión de setup de 20 minutos con un
especialista de onboarding — gratuita, sin pitch comercial.
```

---

## El demo: paso a paso exacto

---

### PASO 1 — Mostrar el Project y los inputs [1 min]

*(Instructor muestra el Project de Growth abierto. Abre nueva conversación dentro del Project.)*

**Narración:**
> "El Project ya tiene cargado el contexto base del producto — ICP, tono, qué hace SalesFlow.
> Lo que voy a agregar ahora son los inputs específicos de onboarding.
> Estos son los datos que hacen que los emails sean específicos, no genéricos."

*(Instructor pega el bloque de inputs desde el archivo de texto)*

**Narración mientras pega:**
> "Fíjate en lo que estoy pegando: el momento aha identificado, los cuatro pasos de activación
> con sus obstáculos específicos. Eso último es lo más importante.
> Si Claude sabe dónde se cae la gente, puede escribir el email correcto para ese momento."

---

### PASO 2 — Ejecutar el prompt de generación [4 min]

*(Instructor escribe el prompt de generación — el mismo del entregable Sección 1)*

**Lo que escribe el instructor:**
```
Con base en el contexto de mi negocio y los inputs de onboarding que te compartí,
escribe una secuencia completa de 5 emails de activación.

Arquitectura:
- Email 1: Bienvenida + primer paso (inmediato al registro)
- Email 2: Empujón en punto de fricción del Paso 1 (Día 2, si no conectó Salesforce)
- Email 3: Momento aha explicado (Día 3-4, si completó el Paso 1)
- Email 4: Prueba social contextual (Día 5)
- Email 5: Cierre de ventana de activación (Día 7, si no completó activación)

Formato para cada email:
---
EMAIL [número]
Condición de envío: [cuándo se envía y a qué segmento]
Asunto: [texto — máx. 50 caracteres]
Preheader: [texto — máx. 90 caracteres]
Cuerpo: [texto completo con párrafos separados]
CTA: [texto del botón]
---

Reglas:
- Ningún email empieza con {{ customer.first_name }} como primera línea — empieza con el contenido
- Sin frases de relleno
- Un solo CTA por email
- Máximo 4 párrafos por email
- Tono: directo, como hablaría un Sales Manager a otro
- Sin "potencia", "transforma", "solución", "ecosistema"
- Usar formato Klaviyo para merge tags: {{ customer.first_name }}
```

*(Presiona Enter. Espera en silencio mientras Claude genera — no hablar mientras el modelo trabaja)*

*(Cuando empieza a aparecer el output, el instructor empieza a leer en voz alta)*

**Narración mientras lee el Email 1:**
> "Mira el Email 1. No empieza con 'Bienvenido a SalesFlow'. Empieza con la acción que el usuario
> tiene que hacer. Un asunto que dice qué hay que hacer — no qué es el producto.
> Un cuerpo de tres párrafos. Un solo CTA.
> Y mira cómo nombra el obstáculo del Paso 1: dice exactamente que si no tienes las credenciales
> de admin de Salesforce, aquí está el link para pedírselas a IT.
> Eso lo puse en los inputs. Claude lo convirtió en un email que resuelve el problema antes de que aparezca."

**Narración mientras lee el Email 2:**
> "Email 2 — el empujón. Este solo se envía si no conectaron Salesforce en 48 horas.
> No asume que el usuario es vago — asume que hubo un obstáculo específico.
> Mira el tono: no hay drama, no hay 'te estamos esperando'. Hay una solución concreta al problema concreto."

**Narración mientras revisa los emails 3, 4 y 5:**
> "El 3 conecta la acción que hicieron con el resultado que buscaban — eso es el momento aha explicado.
> El 4 usa una historia de cliente en la misma etapa. El 5 cierra la ventana — con la sesión de setup
> como incentivo real, no como descuento desesperado.
> Cinco emails. Ocho minutos."

---

### PASO 3 — Refinar un asunto en tiempo real [1 min]

*(Instructor identifica un elemento para refinar — ej: el asunto del Email 4)*

**Lo que escribe:**
```
El asunto del Email 4 es funcional pero podría ser más específico.
Dame 3 alternativas que:
- Mencionen el resultado concreto que otro usuario logró
- Tengan máximo 45 caracteres
- No empiecen con "Cómo"
Explica en 1 línea qué hace diferente a cada opción.
```

*(Espera el output. Lee las 3 opciones.)*

**Narración:**
> "30 segundos. Tres opciones con lógica diferente.
> Ahora puedo A/B testear el asunto sin tener que pensar cómo redactarlo.
> Eso es lo que cambia cuando Claude tiene el contexto cargado — no pido 'sugerencias',
> pido opciones específicas y las obtengo."

---

### PASO 4 — Mostrar el entregable al cierre [30 seg]

*(Instructor cambia a la pestaña del entregable.md)*

**Narración:**
> "Todo lo que hicimos está sistematizado en el entregable.
> Sección 1: onboarding — lo que acabamos de hacer.
> Sección 2: reactivación — para los que se duermen después de activar.
> Sección 3: upsell — para cuando están listos para expandir.
> Llevas este archivo a tu operación. Los inputs de la primera sección tardan 10 minutos en rellenar.
> Los emails que genera Claude: 5 minutos más. Después, los cargas en Klaviyo.
> Esta semana tienes una secuencia de onboarding activa. Sin reunión. Sin brief. Sin semanas de revisión."

---

## Qué NO hacer en el demo

| No hacer | Por qué |
|---|---|
| Pegar los inputs sin los obstáculos por paso | La diferencia entre onboarding genérico y onboarding que activa está en esos detalles — si no los pegas, Claude no los puede usar |
| Generar los 5 emails sin leer en voz alta los más importantes | El estudiante no va a pausar el video para leer — si no lo destacas en voz alta, pierde el impacto |
| No mostrar la condición de envío de cada email | Las condiciones de envío son lo que convierte una secuencia de emails en un sistema de comportamiento — si no las lees, parece una newsletter |
| Saltarse el paso de refinamiento del asunto | Muestra que el flujo no termina con la generación — la iteración rápida es parte del sistema |
| Usar más de 8 minutos | La promesa de la clase es "onboarding en 20 minutos incluyendo la carga". Si el demo tarda más de 8, rompe la credibilidad de esa promesa. |
| Mostrar los 5 emails sin comentar qué hace especial a cada uno | El estudiante debe salir sabiendo POR QUÉ la secuencia está estructurada así — no solo que Claude la generó bien |

---

## Métricas de éxito del demo

El demo funcionó si al final el estudiante piensa:

- "Puedo hacer esto con mi producto en los próximos 30 minutos"
- "Entiendo por qué los inputs específicos — sobre todo los obstáculos — cambian la calidad de los emails"
- "Tengo claro cómo cargar esto en Mailchimp o Klaviyo esta semana"

Si hay esas tres reacciones, el demo cumplió su objetivo.
