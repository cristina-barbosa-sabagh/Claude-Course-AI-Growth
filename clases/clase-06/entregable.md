# TU TAREA — hazlo ahora (tarda 20 minutos)
## Clase 06 · War Room de Growth: diagnóstico y decisiones con Claude como estratega

---

## Checklist de ejecución

☐ **Reúne tus métricas de los últimos 14 días** (lo que tengas — no necesitan ser perfectas):
- CAC por canal principal
- Tasa de conversión por etapa (visita → lead → trial → cliente)
- Churn rate mensual
- MRR actual y variación vs mes anterior
- Tiempo promedio hasta primera acción de valor

---

☐ **Abre Claude → entra a tu Project → pega este prompt de diagnóstico:**

```
Actúa como un Growth Strategist senior con experiencia en SaaS. Voy a darte mis métricas de los últimos 14 días. Diagnostica qué está funcionando, qué no, y cuál es el mayor problema que debo resolver esta semana.

MÉTRICAS:
CAC por canal:
- [Canal 1]: $[X]
- [Canal 2]: $[X]

Funnel de conversión:
- Visitas → Lead: [X]%
- Lead → Trial: [X]%
- Trial → Cliente: [X]%

Churn rate mensual: [X]%
MRR actual: $[X] ([+/-X]% vs mes anterior)
Tiempo promedio de activación: [X] días

CONTEXTO ADICIONAL:
- [Anomalía o evento relevante de las últimas 2 semanas]
- [Experimento activo si aplica]

Dame:
1. Diagnóstico en 3 puntos (qué está bien, qué está mal, cuál es la causa raíz)
2. La prioridad #1 que debo atacar esta semana y por qué
3. Una hipótesis de experimento concreto: qué cambio, en qué parte del funnel, qué métrica mueve, cómo se mide
```

→ Lee el diagnóstico. ¿Claude identificó algo que sabías pero no habías priorizado?

---

☐ **En la misma conversación → pide el plan de experimentos:**

```
Basándote en el diagnóstico anterior, dame los 3 experimentos que debería correr este mes, ordenados por impacto potencial × facilidad de implementación.

Para cada experimento:
- Hipótesis (si hacemos X, esperamos Y porque Z)
- Métrica principal que mueve
- Tamaño de muestra mínimo para validez estadística
- Tiempo estimado para tener resultados
- Quién lo ejecuta y qué necesita para empezar
```

→ Guarda los 3 experimentos. Lleva el #1 a tu próximo standup.

---

☐ **Abre nueva conversación → crea el template de revisión semanal:**

```
Crea un template de revisión semanal de Growth que pueda usar cada lunes con Claude. Incluye:

1. Las 5 métricas que debo revisar cada semana (basadas en el contexto de mi negocio que ya conoces)
2. Las 3 preguntas que debo responderme antes de tomar decisiones
3. El formato para documentar el experimento activo: hipótesis, estado, aprendizaje parcial
4. El prompt exacto que pegaré cada lunes con mis métricas nuevas para obtener el mismo nivel de diagnóstico

El output debe servir como plantilla fija en Notion.
```

→ Guarda el template en Notion. El próximo lunes, úsalo sin modificarlo.

---

☐ **Simula un escenario de alerta para entrenar el War Room:**

```
Simulemos una anomalía. Esta semana el churn subió de [X]% a [X+5]% de un lunes al siguiente. No hay cambios de producto conocidos. Los tickets de soporte subieron un 20%.

¿Cuáles son las 3 hipótesis más probables sobre la causa?
¿Qué datos necesito para validar cada hipótesis?
¿Cuál es la acción inmediata que tomarías hoy si tuvieras que apostar por la causa más probable?
```

→ Compara la respuesta con tu intuición. ¿Claude vio un ángulo que no habías considerado?

---

☐ **Documenta el War Room en Notion** con esta estructura:
- **Diagnóstico de hoy**: los 3 puntos clave
- **Prioridad de la semana**: la #1 con hipótesis de experimento
- **Experimentos priorizados**: los 3 con responsable asignado
- **Template semanal**: el prompt que usarás cada lunes

---

## Sabrás que lo hiciste bien cuando:

✅ Claude nombró la causa raíz de tu problema principal — no síntomas
✅ Tienes 3 experimentos priorizados con hipótesis, métricas y responsable
✅ Tienes un template de revisión semanal listo para usar el próximo lunes sin preparación extra
✅ El diagnóstico + plan de experimentos te tomó menos de 10 minutos
✅ Hay al menos un insight del diagnóstico que vas a compartir con tu equipo o implementar esta semana
