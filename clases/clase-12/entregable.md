# TU TAREA — hazlo ahora (tarda 30 minutos)
## Clase 12 · Proyecto final: tu sistema de Growth operando desde hoy

Esta es la entrega final del curso. No es un formulario ni un quiz. Es tu sistema de Growth con IA funcionando y documentado.

---

## Checklist de implementación — Día a día

### DÍA 1 — Fundamentos activos

☐ **Abre Claude → entra a tu Project → pega este prompt de auditoría:**

```
¿Qué entiendes sobre mi negocio, mi rol y mis prioridades de Growth basándote en el contexto que tienes?

Responde en este formato:
- Mi empresa y producto: [lo que entiendes]
- Mi ICP: [lo que entiendes]
- Mi métrica norte: [lo que entiendes]
- Mi foco actual: [lo que entiendes]
- Lo que te falta saber para darme mejores respuestas: [lista máximo 3 cosas]
```

→ Si alguna respuesta es incorrecta o genérica: corrige las instrucciones de sistema y repite el prompt.
→ Criterio de éxito del Día 1: Claude describe tu negocio con precisión sin que le preguntes de nuevo.

---

### DÍA 2 — Primer skill activo

☐ **Abre Claude → entra a tu Project → pega este prompt para crear tu primer Skill:**

```
Tengo este prompt que uso frecuentemente: [pega el prompt que más repites en tu trabajo]

Conviértelo en un Skill documentado con esta estructura:
- Nombre del Skill
- Descripción (qué hace, cuándo usarlo)
- Inputs requeridos (lista de variables que necesita)
- Prompt template (el prompt con las variables en [corchetes])
- Output esperado (qué debería producir)
- Criterios de calidad (cómo saber si el output es bueno)
```

→ Guarda el Skill en Notion con el output de referencia.
→ Criterio de éxito: puedes ejecutar el Skill en menos de 2 minutos y el output es usable sin edición de fondo.

---

### DÍA 3 — Dos Skills más

☐ Repite el proceso del Día 2 con dos prompts más que usas frecuentemente.
→ Criterio: tienes 3 Skills en tu biblioteca de Notion, cada uno con output de referencia guardado.

---

### DÍA 4 — Primer agente configurado

☐ **Abre Claude → crea un nuevo Project → pega este prompt de configuración del Agente de Adquisición:**

```
Vas a actuar como mi Agente de Adquisición especializado.

Contexto de mi negocio:
- Producto: [nombre y qué hace]
- ICP: [perfil detallado del cliente ideal]
- Canales de adquisición activos: [lista los canales]
- Métricas de adquisición actuales: CAC = $[X], Tasa de conversión visita→lead = [X]%
- Experimento activo: [describe el experimento si aplica]

Tu rol:
- Analizar el rendimiento de mis campañas de adquisición cuando te dé datos
- Generar copies, hooks y mensajes optimizados para mi ICP
- Proponer hipótesis de experimentos cuando identifiques caídas en el funnel
- Ser directo: primero el diagnóstico, luego la acción recomendada

Cuando empiece una conversación sin contexto adicional, pide las métricas de los últimos 7 días antes de responder.
```

→ Ejecuta el diagnóstico semanal con las métricas reales de esta semana.
→ Criterio: el Agente te da un diagnóstico que incluye al menos una insight que no tenías documentada.

---

### DÍA 5 — Segundo y tercer agente

☐ Configura el Agente de Retención con este prompt base:

```
Vas a actuar como mi Agente de Retención especializado.

Contexto de mi negocio:
- Producto: [nombre y qué hace]
- Métrica de activación: [la acción que define que un usuario se activó]
- Churn rate actual: [X]%
- NPS actual: [X]
- Principales razones de cancelación (últimos 30 días): [lista las 3 más frecuentes]

Tu rol:
- Diagnosticar el estado de retención cuando te dé datos
- Generar secuencias de email para onboarding, reactivación y upsell
- Identificar señales de churn temprano a partir de comportamiento de usuarios
- Proponer acciones concretas para cada segmento de riesgo
```

→ Criterio: tienes al menos 2 agentes con contexto cargado y un output real guardado en Notion.

---

### DÍA 6 — Tablero de coordinación operativo

☐ **Crea el tablero de Growth OS en Notion** con estas secciones:

```
Crea en Notion una página llamada "Growth OS — [nombre de tu empresa]" con esta estructura:

## Brief de la Semana
Foco: [una prioridad]
Métrica norte: [la métrica que mueves esta semana]
Experimento activo: [nombre + hipótesis + estado]
Contexto de la semana anterior: [qué pasó, qué aprendiste]

## Outputs de Agentes
| Agente | Tarea de esta semana | Output | Estado |
|--------|---------------------|--------|--------|
| Adquisición | | | |
| Retención | | | |
| Análisis | | | |

## Skills Activos
| Skill | Última ejecución | Output de referencia |
|-------|-----------------|----------------------|
| | | |

## Experimentos
| Hipótesis | Métrica | Estado | Aprendizaje |
|-----------|---------|--------|-------------|
| | | | |
```

→ Llena el Brief de esta semana con datos reales. Alimenta los agentes con el brief. Pega sus outputs.
→ Criterio: al final del día tienes el tablero con outputs de al menos 2 agentes y las decisiones de la semana tomadas.

---

### DÍA 7 — Primera revisión del sistema

☐ **Abre Claude → entra a tu Project principal → pega este prompt de auditoría del sistema:**

```
Esta semana usé mi sistema de Growth con IA por primera vez. Aquí está el resumen:

Skills ejecutados: [lista los que usaste]
Agentes usados: [lista los que configuraste]
Outputs que llegaron a producción: [lista lo que realmente usaste]
Lo que no funcionó como esperaba: [describe sin suavizar]

¿Qué ajustarías en mi sistema basándote en este primer ciclo? Dame:
1. El cambio más importante en las instrucciones de sistema de algún agente
2. El skill que más necesita mejora y qué cambiarías en el prompt template
3. La automatización más sencilla que podría eliminar fricción en el flujo actual
```

→ Implementa al menos UNO de los cambios que Claude recomiende.
→ Criterio de éxito final: tienes un sistema operando, un tablero activo, y una acción de mejora implementada.

---

## Proyecto final — Entrega

Comparte en el grupo privado del curso:

1. **Una captura de tu tablero de Growth OS** con el Brief de la Semana y al menos 2 outputs de agentes
2. **Un output real** de cualquier Skill o Agente que llegó a producción esta semana
3. **Una línea**: qué decisión tomaste esta semana gracias al sistema que no habrías tomado (o habrías tardado más en tomar) sin él

---

## Sabrás que lo hiciste bien cuando:

✅ Tienes un Project en Claude que entiende tu negocio sin que le expliques quién eres
✅ Tienes al menos 3 Skills documentados en Notion con outputs de referencia
✅ Tienes al menos 1 agente especializado con diagnóstico semanal corriendo
✅ Tienes un tablero de Notion con el Brief de la Semana y los outputs de los agentes activos
✅ Tomaste al menos una decisión de Growth esta semana a partir de un output del sistema — y puedes nombrarla
