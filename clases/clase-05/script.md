# Clase 05 — Motor de retención: onboarding, reactivación y upsell con Claude
**Instructor C · 16 minutos · Módulo 02**

---

## GUIÓN COMPLETO

---

### INTRO — [0:00–1:00]

*(Pantalla: slide con título de la clase. Instructor en cámara.)*

Adquiriste el usuario. Lo más caro ya pasó.

Ahora viene la pregunta que separa los negocios que escalan de los que corren en una cinta: ¿qué pasa después del registro?

Si la respuesta es "una secuencia de bienvenida genérica que escribimos hace un año" — esta clase es para ti.

En los próximos 16 minutos construimos tres flujos con Claude: onboarding, reactivación y upsell. Tres sistemas. Un solo motor.

Empezamos.

---

### DESARROLLO 1 — Onboarding en 20 minutos: la secuencia de activación que Claude escribe por ti [1:00–6:00]

*(Pantalla: slide "El error más caro en retención: onboarding genérico")*

El onboarding es el momento más importante del ciclo de vida de un usuario. Y es donde más equipos de Growth dejan dinero sobre la mesa.

¿Por qué? Porque escriben 3 emails genéricos, los cargan en Mailchimp hace 8 meses y nunca los tocan. Mientras tanto, el 60% de los usuarios que no activan en los primeros 7 días nunca vuelven.

Claude puede escribir los 5 emails de activación de tu producto, adaptados a tu ICP y a tu tono de marca, en 20 minutos. No como punto de partida — como primera versión real lista para testear.

---

**Qué necesitas darle a Claude para que la secuencia funcione:**

*(Pantalla: lista de 6 inputs para onboarding)*

Input 1 — Tu producto en una línea. Qué hace, para quién, cuál es el resultado concreto.

Input 2 — El momento "aha". ¿Cuándo un usuario nuevo entiende que tu producto funciona? ¿En qué paso? ¿Cuánto tarda en llegar ahí? Si no lo sabes, es la primera cosa que debes descubrir — pero Claude puede ayudarte a inferirlo.

Input 3 — Los pasos de activación. ¿Qué tiene que hacer el usuario en los primeros 7 días para quedarse? Lista los 3 a 5 pasos específicos.

Input 4 — El obstáculo más común en cada paso. ¿Dónde se cae la gente? ¿Qué pregunta hacen más? Eso va en el email del día correcto.

Input 5 — Tono de marca. ¿Cómo habla tu empresa? Directo y técnico, cálido y cercano, con humor — Claude adapta todo.

Input 6 — Herramienta de email. Mailchimp o Klaviyo. Si hay merge tags o personalizaciones dinámicas que necesitas incluir, Claude las puede formatear correctamente.

---

**La arquitectura de los 5 emails:**

*(Pantalla: timeline visual de la secuencia de 5 emails)*

Email 1 — Bienvenida y primer paso (Día 0, inmediato al registro)
El objetivo no es "dar la bienvenida". Es conseguir que el usuario haga la primera acción que lo acerca al momento aha. Un solo CTA. Sin distracciones.

Email 2 — El empujón en el punto de fricción (Día 2, si no completó el primer paso)
Este email sabe dónde está el usuario: no terminó la configuración. Le muestra que el obstáculo es normal y le da exactamente lo que necesita para avanzar.

Email 3 — El momento aha explicado (Día 3–4, si completó el primer paso)
El usuario avanzó. Ahora necesita entender qué acaba de lograr y cuál es el siguiente nivel. Este email conecta la acción que hizo con el resultado que buscaba.

Email 4 — Prueba social en el momento correcto (Día 5)
Caso de cliente o resultado concreto. No una historia genérica — algo específico a lo que el usuario ya hizo. Si completó el paso 2, le muestras qué logró otro usuario en esa misma etapa.

Email 5 — El cierre de la ventana de activación (Día 7)
El que no activó en 7 días está a punto de irse. Este email es urgencia real, no falsa: "la semana de configuración gratuita termina" o "los usuarios que no activan en 7 días pierden X". Tiene que ser verdad.

---

*(Pantalla: slide "Lo que cambia cuando Claude escribe esto")*

La diferencia no es solo velocidad. Es especificidad.

Un equipo humano sin contexto profundo del producto escribe emails vagos. Claude, con los 6 inputs que le das, escribe un email que menciona el paso específico donde el usuario está, el obstáculo que probablemente encontró y el resultado concreto que va a conseguir si avanza.

Eso no es email marketing. Es onboarding como producto.

---

### DESARROLLO 2 — Reactivación y upsell: los flujos que más revenue dejan sobre la mesa [6:00–11:00]

*(Pantalla: slide "Retención no es solo que no se vayan — es que crezcan")*

Hay dos momentos más de alto valor en el ciclo de vida de un usuario: cuando se está cayendo y cuando está listo para expandir. Los dos se desperdician sistemáticamente.

Hablemos del primero.

---

**Flujo de reactivación — usuarios dormidos:**

*(Pantalla: diagrama de señales de churn)*

Un usuario dormido no es uno que pidió cancelar. Es uno que dejó de usar el producto. Y hay una ventana — normalmente de 14 a 30 días — antes de que decida irse de verdad.

Claude puede ayudarte a trabajar ese flujo de tres maneras:

Primero — Identificar el patrón de churn. Le describes los comportamientos de los usuarios que se fueron en los últimos 3 meses. Claude encuentra el patrón: ¿se van después de X días sin uso? ¿Después de no completar un paso específico? ¿Después de una facturación? Con ese diagnóstico, sabes cuándo activar el flujo.

Segundo — Generar el mensaje correcto para cada segmento. No es el mismo email para el usuario que nunca activó que para el que usó activamente durante 60 días y se desconectó. Claude diferencia — si tú le das los segmentos.

Tercero — Escribir la secuencia de recuperación. Tres emails máximo. El primero reconoce la ausencia sin pena. El segundo muestra lo que se perdieron — qué novedades, qué mejoras, qué hace el producto ahora que no hacía antes. El tercero es un incentivo real o una despedida que invita a volver.

---

**El prompt de análisis de churn que funciona:**

*(Pantalla: bloque de texto con el prompt)*

```
Voy a describirte el comportamiento de usuarios que se dieron de baja en los últimos 90 días.

[Describe el patrón: días activos antes de irse, último paso que completaron,
si llegaron a activar o nunca lo hicieron, si hay algún evento común antes del churn]

Basado en esto:
1. ¿Cuál es el patrón de churn más probable que estoy viendo?
2. ¿En qué momento exacto debería activar el flujo de reactivación?
3. ¿Cuál debería ser el mensaje central de la recuperación para este segmento?
4. Dame la estructura de 3 emails con el ángulo que tiene más probabilidad de funcionar
   para traerlos de vuelta — sin descuentos si es posible.
```

*(Pausa.)*

Ese prompt convierte a Claude en analista de churn. No reemplaza tu análisis de datos — lo complementa. Claude puede razonar sobre el patrón que describes y darte hipótesis que tu equipo puede validar.

---

**Flujo de upsell — el momento exacto y el mensaje correcto:**

*(Pantalla: slide "El upsell mal ejecutado daña la relación — el bien ejecutado la profundiza")*

La mayoría de los upsells fallan porque llegan en el momento equivocado o con el mensaje equivocado. "Actualiza a Pro" en el día 3 — cuando el usuario no entiende todavía el valor del plan básico — es un error. "Actualiza a Pro" en el día 21, después de que usó 3 de las 5 features del plan básico, es una conversación que tiene sentido.

Claude puede ayudarte a definir ese momento y escribir el mensaje.

Los tres inputs que necesitas darle:

Uno — El indicador de expansión. ¿Qué comportamiento señala que el usuario está listo para más? Usos frecuentes de una feature, límite de plan alcanzado, número de usuarios invitados, tamaño del equipo — lo que sea que en tu producto correlaciona con upgrade.

Dos — El beneficio específico del plan superior para ese usuario en ese momento. No los features genéricos del plan Pro. El beneficio para este usuario que acaba de alcanzar el límite de X.

Tres — El canal y el momento. ¿In-app? ¿Email? ¿Cuántos días después del evento? Claude adapta el tono y la urgencia según el canal.

Con esos tres inputs, Claude genera el mensaje de upsell que llega en el momento correcto con la propuesta correcta. No es spam. Es relevancia.

---

*(Pantalla: slide que conecta los tres flujos)*

Onboarding, reactivación, upsell. Tres sistemas. El mismo motor: Claude con el contexto correcto, en el momento correcto, generando el mensaje correcto.

Eso es lo que construyes con el entregable de hoy.

---

### DEMO / EJERCICIO EN VIVO — Secuencia de onboarding completa en tiempo real [11:00–15:00]

*(Pantalla: pantalla completa — Project de Growth en Claude.ai abierto)*

*(Instructor muestra el Project con instrucciones de sistema cargadas — ver demo.md para los pasos exactos)*

Voy a construir una secuencia completa de onboarding en vivo. Cinco emails. Un producto real — anonimizado. Los 6 inputs que describí antes. En menos de 8 minutos.

*(Instructor ejecuta el demo — ver archivo demo.md para narración y prompts exactos)*

*(Mientras ejecuta)*

Noten el nivel de especificidad en los emails que genera Claude. Menciona el paso exacto donde está el usuario. Menciona el obstáculo por nombre. Tiene el tono de la marca.

Esto no es un template genérico de "bienvenida a la familia". Esto es onboarding que activa.

---

### CIERRE — [15:00–16:00]

*(Instructor en cámara. Slide con entregable visible.)*

El entregable de esta clase tiene las tres plantillas: onboarding, reactivación y upsell.

Tu tarea: elige una. Solo una. La que más impacto tendría en tu negocio esta semana.

Rellena los inputs. Ejecuta el prompt. Carga la secuencia en Mailchimp o Klaviyo. No esperes a tenerla perfecta — tenla activa.

La siguiente clase es el War Room de Growth. Donde todo lo que construiste en adquisición y retención converge en un sistema de decisión. Nos vemos ahí.

---

## NOTAS DE PRODUCCIÓN

| Elemento | Detalle |
|---|---|
| Duración objetivo | 16 minutos exactos |
| Slides necesarios | 6: título, error del onboarding genérico, inputs + timeline de 5 emails, señales de churn, lo que cambia, slide de los 3 flujos conectados |
| Demo | Pantalla completa — ver demo.md |
| Ritmo | DESARROLLO 1 es el más denso — ir despacio en la arquitectura de los 5 emails. DESARROLLO 2 tiene dos sub-temas — mantener transición clara entre reactivación y upsell. |
| Tono | Operativo, con urgencia real. No académico. Como alguien que ha visto el churn de cerca y sabe exactamente el costo de no tener estos sistemas. |
| Énfasis | Marcar con pausa la arquitectura de 5 emails y los 3 inputs del upsell. Esos son los dos bloques más accionables. |
| Prop necesario | Datos de producto anonimizados listos para el demo — incluir: nombre del producto, momento aha, 3 pasos de activación, obstáculo en cada paso. |
