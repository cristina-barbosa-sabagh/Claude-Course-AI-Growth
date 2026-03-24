# War Room de Growth
## Plantilla de Google Sheets + Prompt de Sistema para Claude

**Módulo 02 · Clase 06 · Claude para Growth**

---

Tiempo de configuración: **20 minutos**.
Uso diario: **menos de 10 minutos cada mañana**.

---

## PARTE 1 — Plantilla de War Room en Google Sheets

### Cómo usar esta plantilla

1. Abre Google Sheets y crea un archivo nuevo
2. Nómbralo: `War Room de Growth — [Tu Empresa]`
3. Crea las siguientes hojas (pestañas): `War Room`, `Histórico`, `Experimentos`
4. En la hoja `War Room`, construye la estructura exacta de las tres zonas de abajo
5. Comparte el Sheet en modo "Editor" con cualquier miembro del equipo que alimente los datos

---

### ZONA 1 — Métricas de Adquisición

**Nombre de la sección en el Sheet:** `ZONA 1 · ADQUISICIÓN`
**Color de fondo sugerido:** Azul claro (#D9EAF7)

| Columna | Encabezado exacto | Fuente de datos | Formato |
|---|---|---|---|
| A | FECHA | Manual (ayer) | DD/MM/AAAA |
| B | CANAL | Manual | Meta / Google / Email |
| C | IMPRESIONES | Copiar de plataforma | Número entero |
| D | CLICS | Copiar de plataforma | Número entero |
| E | CTR | Fórmula: =D/C | Porcentaje con 1 decimal |
| F | CPM | Copiar de plataforma | Moneda 2 decimales |
| G | CPC | Copiar de plataforma | Moneda 2 decimales |
| H | GASTO TOTAL | Copiar de plataforma | Moneda 2 decimales |
| I | CONVERSIONES | Copiar de plataforma | Número entero |
| J | COSTO POR CONVERSIÓN | Fórmula: =H/I | Moneda 2 decimales |
| K | VARIACIÓN vs LUNES | Fórmula vs fila de referencia | Porcentaje con signo |

**Cómo llenar Zona 1 cada mañana:**
- Meta Ads Manager → columna "Resultados" → copiar la fila de ayer → pegar en las columnas C–J
- Google Ads → misma lógica desde la vista de campaña
- Email (Mailchimp / Klaviyo) → aperturas = impresiones, clics = clics, CTR = CTR, conversiones = clicks a landing

Tiempo de llenado: **3–4 minutos**.

---

### ZONA 2 — Métricas de Activación y Retención

**Nombre de la sección en el Sheet:** `ZONA 2 · ACTIVACIÓN + RETENCIÓN`
**Color de fondo sugerido:** Verde claro (#D9F2E6)
**Dejar 2 filas en blanco entre Zona 1 y Zona 2**

| Columna | Encabezado exacto | Fuente de datos | Formato |
|---|---|---|---|
| A | FECHA | Manual (ayer) | DD/MM/AAAA |
| B | NUEVOS REGISTROS | CRM / plataforma | Número entero |
| C | COMPLETARON ONBOARDING | CRM / Mixpanel / manual | Número entero |
| D | % ACTIVACIÓN DÍA 1 | Fórmula: =C/B | Porcentaje 1 decimal |
| E | USUARIOS ACTIVOS (7d) | CRM / analytics | Número entero |
| F | CHURN ESTA SEMANA | CRM / manual | Número entero |
| G | % RETENCIÓN 7d | Fórmula: referencia vs semana anterior | Porcentaje 1 decimal |
| H | NOTA DEL DÍA | Manual | Texto libre |

**Qué va en "NOTA DEL DÍA" (columna H):**
Cualquier dato cualitativo relevante que no cabe en números. Ejemplos:
- "Lanzamos nuevo ad creativo set 3"
- "Actualizamos email de onboarding paso 2"
- "Feriado en MX — tráfico bajo esperado"

Esta columna es clave para que Claude entienda el contexto cuando detecte anomalías.

Tiempo de llenado: **2–3 minutos** (si tienes dashboards de analytics configurados).

---

### ZONA 3 — Celda de Comando

**Nombre de la sección en el Sheet:** `ZONA 3 · ANÁLISIS DEL DÍA`
**Color de fondo sugerido:** Amarillo claro (#FFF9C4)
**Dejar 2 filas en blanco entre Zona 2 y Zona 3**

Esta zona tiene una sola función: recordarte el flujo de trabajo con Claude.

**Texto a poner en la celda principal (fusionar celdas A–K):**

```
ANÁLISIS DE HOY — FLUJO:
1. Selecciona todas las celdas de Zona 1 + Zona 2 (incluyendo encabezados)
2. Copia (Ctrl+C / Cmd+C)
3. Abre Claude → tu Project de Growth
4. Pega los datos en el chat
5. Envía — Claude hace el diagnóstico en segundos
```

---

### Hoja: Histórico

Cada viernes, copia las filas de la semana desde "War Room" y pégalas en "Histórico".
Esto te da una vista de tendencias semanales para la revisión de viernes.

Columnas adicionales en Histórico:
- SEMANA (número de semana del año)
- RECOMENDACIÓN CLAUDE (lo que te dijo el lunes)
- ¿LO EJECUTASTE? (Sí / No / Parcial)
- RESULTADO (qué pasó con la métrica que cambió)

---

### Hoja: Experimentos

Cuando Claude recomiende un experimento, regístralo aquí:

| Columna | Contenido |
|---|---|
| FECHA INICIO | Cuándo empezó |
| HIPÓTESIS | Qué se espera |
| CANAL | Dónde se ejecuta |
| MÉTRICA | Qué mide el éxito |
| RESULTADO | Qué pasó |
| DECISIÓN | Escalar / Descartar / Iterar |

---

## PARTE 2 — Prompt de Sistema para Claude

### Cómo cargar este prompt

1. Ve a [claude.ai](https://claude.ai) y abre tu Project de Growth
2. Haz clic en **"Project Instructions"** (esquina superior derecha)
3. Borra cualquier instrucción anterior o añade este bloque al final
4. Reemplaza todos los campos en corchetes con tu información real
5. Guarda

---

### EL PROMPT COMPLETO — Copiar y personalizar

```
Eres el estratega de Growth de [NOMBRE DE TU EMPRESA].

Tu rol en esta conversación es analizar las métricas diarias del War Room
y producir exactamente UNA recomendación accionable para hoy.

---

CONTEXTO DEL NEGOCIO:
- Producto: [Describe en 1 línea qué hace tu producto y para quién]
- Modelo de negocio: [SaaS / ecommerce / marketplace / otro]
- Etapa: [early stage / growth stage / scale]
- Canales de adquisición activos: [ej: Meta Ads, Google Ads, email, SEO]
- Métrica norte: [La UNA métrica que más importa este trimestre — ej: activación día 1 / CAC / churn / MRR]
- Presupuesto semanal de adquisición: [monto aproximado en tu moneda]
- Ticket promedio o MRR objetivo: [número]

---

CONTEXTO DEL FUNNEL:
- El usuario llega desde el anuncio a: [landing page / registro directo / app store]
- "Primer valor" para un usuario = [describe qué tiene que hacer para sentir que el producto funciona — ej: completar su primer reporte, hacer su primera venta, conectar su primera integración]
- El punto donde más usuarios se caen históricamente: [dónde y por qué, si lo sabes]

---

INSTRUCCIONES DE ANÁLISIS:
Cuando recibas datos del War Room, sigue este proceso exacto:

1. Lee las métricas de Zona 1 (adquisición) y Zona 2 (activación/retención) juntas
2. Identifica el punto de mayor ruptura en el funnel: ¿dónde se pierde más valor?
3. Determina si el problema es de adquisición (tráfico/audiencia/mensaje), de producto (onboarding/activación) o de retención (churn/engagement)
4. Produce UNA recomendación concreta para hoy: específica, con canal y magnitud
5. Si falta un dato necesario para el diagnóstico, pídelo antes de dar la recomendación

---

FORMATO DE OUTPUT — Úsalo siempre, sin excepciones:

DIAGNÓSTICO: [1-2 líneas: qué está cayendo y dónde en el funnel]

CAUSA PROBABLE: [1 línea: por qué está pasando, basado en los datos disponibles]

RECOMENDACIÓN: [1 línea de acción concreta — incluye canal, ajuste específico y magnitud]
Ejemplo de formato: "Pausar Ad Set 3 en Meta y mover $X al Ad Set 1 — mayor activación en últimas 72h"

EXPERIMENTO OPCIONAL: [1 línea: qué testear esta semana si quieres ir más lejos]

---

RESTRICCIONES — Nunca violes estas reglas:
- No hagas recomendaciones sin datos que las soporten en las métricas compartidas
- Si no puedes hacer un diagnóstico confiable con los datos disponibles, di exactamente qué dato necesitas
- No repitas la misma recomendación dos días consecutivos a menos que los datos lo justifiquen explícitamente
- Si hay una nota de contexto cualitativo (Zona 2, columna H), incorpórala al diagnóstico
- Responde siempre en español
- Nunca uses más palabras de las necesarias — el destinatario tiene 30 segundos para leer esto
```

---

## FLUJO DIARIO COMPLETO — Los 10 minutos del War Room

| Minuto | Acción |
|---|---|
| 0–3 | Abrir War Room en Sheets. Pegar métricas de Meta, Google y email de ayer en Zona 1. |
| 3–5 | Pegar métricas de activación y retención de ayer en Zona 2. Escribir nota del día si aplica. |
| 5–6 | Seleccionar Zona 1 + Zona 2 completas. Copiar. |
| 6–7 | Abrir Claude → Project de Growth → nueva conversación. Pegar los datos. Enviar. |
| 7–8 | Leer el output de Claude. |
| 8–10 | Ejecutar la recomendación o delegarla con contexto claro. |

---

## Ejemplo de datos que se pegan a Claude

Así se ve lo que copias desde el Sheet y pegas en Claude:

```
ZONA 1 · ADQUISICIÓN

FECHA       | CANAL    | IMPRESIONES | CLICS | CTR   | CPM  | CPC  | GASTO  | CONV | COSTO/CONV
24/03/2026  | Meta     | 48,200      | 965   | 2.0%  | $8.2 | $0.41| $395   | 22   | $17.95
24/03/2026  | Google   | 12,400      | 380   | 3.1%  | $5.8 | $0.18| $72    | 18   | $4.00
24/03/2026  | Email    | —           | 1,240 | 18.4% | —    | —    | $0     | 41   | $0

ZONA 2 · ACTIVACIÓN + RETENCIÓN

FECHA       | REGISTROS | ONBOARDING | % ACT DÍA 1 | ACTIVOS 7d | CHURN | % RET 7d | NOTA
24/03/2026  | 81        | 15         | 18.5%       | 340        | 12    | 71.4%    | Nuevo email de onboarding enviado el 22/03
```

Eso es todo lo que Claude necesita para darte el diagnóstico del día.

---

**Siguiente clase:** Claude Code — construyes tu primera herramienta de Growth sin escribir una línea de código.
