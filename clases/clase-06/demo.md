# Demo en Vivo — War Room en acción: diagnóstico real en menos de 2 minutos
**Clase 06 · Instructor A · Segmento: 11:00–15:00 del guión**

---

## Objetivo del demo

Mostrar el flujo completo del War Room en tiempo real: desde las métricas pegadas en Google Sheets hasta el diagnóstico de Claude — incluyendo un caso donde el problema visible (CPC subiendo) no es el problema real (activación cayendo).

Tiempo de ejecución en pantalla: **< 4 minutos**.

---

## Setup antes de grabar

- [ ] Google Sheets abierto con el War Room ya cargado con datos del ejemplo (no llenarlo en vivo — las métricas ya deben estar en el Sheet)
- [ ] El Sheet debe tener datos de 3 días consecutivos en Zona 1 y Zona 2 para que la variación sea visible
- [ ] Claude abierto en el Project de Growth con el prompt de sistema ya cargado y guardado
- [ ] Abrir una conversación nueva dentro del Project — no usar una conversación previa con contexto acumulado
- [ ] Pantalla compartida activa con zoom suficiente para que el Sheet sea legible (zoom al 125% en Sheets, fuente tamaño 11 mínimo)
- [ ] Tener el rango de celdas a copiar ya identificado — no buscar en vivo qué seleccionar
- [ ] Modo "No molestar" activo en la computadora

---

## Los datos del demo

Usa exactamente estos números. Están diseñados para que el patrón sea claro: el CPC sube (distractor) pero el problema real es la caída de activación.

**Zona 1 — Adquisición (3 días)**

```
FECHA       | CANAL  | IMPR    | CLICS | CTR   | CPM   | CPC   | GASTO  | CONV | COSTO/CONV
22/03/2026  | Meta   | 51,200  | 1,126 | 2.2%  | $8.0  | $0.37 | $410   | 38   | $10.79
23/03/2026  | Meta   | 49,800  | 1,046 | 2.1%  | $8.4  | $0.40 | $419   | 31   | $13.52
24/03/2026  | Meta   | 48,200  | 965   | 2.0%  | $8.7  | $0.44 | $384   | 22   | $17.45

22/03/2026  | Google | 13,100  | 393   | 3.0%  | $5.6  | $0.17 | $68    | 21   | $3.24
23/03/2026  | Google | 12,800  | 371   | 2.9%  | $5.7  | $0.18 | $67    | 20   | $3.35
24/03/2026  | Google | 12,400  | 380   | 3.1%  | $5.8  | $0.18 | $69    | 19   | $3.63
```

**Zona 2 — Activación (3 días)**

```
FECHA       | REGISTROS | ONBOARDING | % ACT DÍA 1 | ACTIVOS 7d | CHURN | NOTA
22/03/2026  | 59        | 20         | 33.9%       | 348        | 8     | —
23/03/2026  | 51        | 13         | 25.5%       | 344        | 10    | Nuevo diseño landing activo
24/03/2026  | 41        | 8          | 19.5%       | 340        | 12    | —
```

**El patrón que Claude debe detectar:**
- Meta: conversiones cayendo (38 → 22) y costo por conversión subiendo (+62% en 3 días)
- Activación día 1: cayó de 33.9% a 19.5% — casi a la mitad
- Google: estable, sin cambios significativos
- Churn: subiendo ligeramente (8 → 12)
- Coincidencia: el nuevo diseño de landing entró el 23/03 — mismo día en que empezó la caída de activación

---

## El demo: paso a paso exacto

---

### PASO 1 — Mostrar el War Room con datos cargados [30 seg]

*(Instructor muestra el Google Sheet con las tres zonas visibles)*

**Narración:**
> "Esto es el War Room con los datos de los últimos tres días. No los voy a cargar en vivo — ya están. En la práctica real esto te toma 5 minutos cada mañana. Lo que quiero que vean es el patrón antes de que Claude lo analice."

*(Instructor señala en pantalla)*

> "Miren Zona 1. Meta: el CPC subió de $0.37 a $0.44 en tres días. Las conversiones cayeron de 38 a 22. El instinto natural es: problema de Meta, hay que ajustar pujas o creativos."

*(Pausa de un segundo.)*

> "Ahora miren Zona 2. Activación día 1: de 33.9% a 19.5%. En el mismo período. Y el 23 de marzo entró un nuevo diseño de landing."

*(Señala la nota del 23/03.)*

> "¿El problema es Meta o es el landing? Eso es lo que Claude va a diagnosticar. Vamos a verlo."

---

### PASO 2 — Copiar los datos y pegarlos en Claude [45 seg]

*(Instructor selecciona el rango completo — Zona 1 + encabezados + Zona 2 + notas)*

**Narración:**
> "Selecciono todo. Zona 1, Zona 2, encabezados incluidos. Copio."

*(Ctrl+C / Cmd+C — sin hablar mientras selecciona. Que el silencio muestre que el proceso es simple.)*

> "Abro Claude. Mi Project de Growth. Nueva conversación — el prompt de sistema ya está cargado, no tengo que escribir nada más que los datos."

*(Abre Claude, hace clic en nueva conversación dentro del Project)*

> "Pego."

*(Ctrl+V / Cmd+V — los datos aparecen en el campo de texto)*

> "Envío."

*(Enter. Pausa. Sin hablar mientras Claude responde — que el tiempo de respuesta hable solo.)*

---

### PASO 3 — Mostrar y leer el output de Claude [1 min 30 seg]

*(Cuando el output aparece, instructor lo lee en voz alta, señalando cada sección en pantalla)*

**Output esperado de Claude (texto de referencia para el instructor):**

```
DIAGNÓSTICO: Caída sostenida en activación día 1 de 33.9% a 19.5% en 72 horas
— el tráfico de Meta entra pero casi la mitad no completa el primer valor.
El costo por conversión sube como consecuencia, no como causa.

CAUSA PROBABLE: El nuevo diseño de landing activado el 23/03 está generando
desconexión entre la promesa del anuncio y la experiencia de llegada.
El usuario llega con una expectativa que el nuevo flujo no cumple inmediatamente.

RECOMENDACIÓN: Revertir temporalmente al diseño anterior de landing y medir
activación día 1 mañana — si sube a >28%, el nuevo diseño es el problema.
No ajustar pujas ni creativos de Meta hasta confirmar.

EXPERIMENTO OPCIONAL: Crear un test A/B del landing nuevo vs. anterior
con tráfico dividido 50/50 esta semana para confirmar la hipótesis
antes de descartar el nuevo diseño definitivamente.
```

**Narración mientras lee:**
> "Fíjense en lo que dice Claude: el costo por conversión sube como consecuencia, no como causa. Esa es la distinción que importa. Si hubiéramos ajustado pujas en Meta sin revisar activación, habríamos resuelto el síntoma y dejado el problema intacto."

*(Señala la recomendación)*

> "Y la recomendación es específica: qué hacer, cuándo medir, qué métrica confirma o descarta la hipótesis. No hay ambigüedad."

*(Señala el experimento opcional)*

> "El experimento opcional es para quien quiere ir más lejos esta semana. No es obligatorio para la decisión de hoy."

---

### PASO 4 — El remate: mostrar la velocidad total [30 seg]

*(Instructor cierra Claude y mira a cámara)*

**Narración:**
> "Eso tomó menos de dos minutos desde que abrí el Sheet. La decisión está clara: revierten el landing, miden mañana, y no tocan Meta hasta tener la respuesta."

> "Sin el War Room, la conversación de equipo hubiera sido: 'Meta está mal, subamos el presupuesto' o 'cambiemos los creativos'. Con dos días de trabajo en la dirección equivocada."

> "Ese es el valor del War Room. No los datos — eso ya lo tenían. El análisis conjunto de adquisición y activación en un solo lugar."

---

## Variantes del demo (si los números del instructor son diferentes)

El patrón del demo puede adaptarse a cualquier negocio cambiando:
- **El canal problemático:** puede ser Google o email en lugar de Meta
- **El punto de caída:** puede ser retención en lugar de activación
- **El distractor:** puede ser CTR cayendo en lugar de CPC subiendo

**Regla para construir el demo:** siempre diseña los datos para que el problema visible (el que dispara el instinto) sea diferente del problema real que Claude detecta. Esa es la demostración de valor más poderosa.

---

## Qué NO hacer en el demo

| No hacer | Por qué |
|---|---|
| Cargar los datos en vivo (abrir Meta Ads Manager, exportar, etc.) | Consume 5 minutos y distrae del punto — los datos ya deben estar en el Sheet |
| Mostrar un Sheet desordenado o sin colores de zona | El estudiante tiene que entender la estructura visual de un vistazo |
| Leer el output de Claude sin señalar las partes clave | El formato de 4 campos es parte del aprendizaje — explicar qué significa cada uno |
| Usar datos donde el problema sea obvio sin necesidad de Claude | El demo tiene que mostrar que Claude detecta lo que el instinto no detecta |
| Hacer scroll innecesario o buscar cosas en pantalla | Practica el demo dos veces antes de grabar — cada clic tiene que ser deliberado |
| Justificar el copy-paste como "solución temporal" | Es una solución real. No disculparse por la simplicidad. |

---

## Métricas de éxito del demo

El demo funcionó si al final el estudiante piensa:
- "Puedo configurar esto esta tarde"
- "Entiendo por qué el War Room necesita Zona 1 y Zona 2 juntas"
- "Claude encontró algo que yo no hubiera visto solo mirando las métricas de Meta"

Si hay esas tres reacciones, el demo cumplió su objetivo.
