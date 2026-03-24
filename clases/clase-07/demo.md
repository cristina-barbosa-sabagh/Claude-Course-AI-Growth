# Demo en Vivo — Calculadora de CAC/LTV desde cero en menos de 10 minutos
**Clase 07 · Instructor C · Segmento: 9:00–13:00 del guión**

---

## Objetivo del demo

Mostrar el loop completo de Claude Code para un Chief of Growth: describir una herramienta de Growth en lenguaje natural, ver cómo Claude la construye en tiempo real, iterar una vez sobre el resultado y terminar con una herramienta funcional lista para usar y compartir.

Tiempo de ejecución en pantalla: **< 4 minutos** (la instalación ya está hecha — el demo empieza con Claude Code activo).

---

## Setup antes de grabar

- [ ] Claude Code ya instalado y autenticado — no instalar en vivo durante el demo
- [ ] Carpeta `Growth Tools` creada y Terminal abierta en esa carpeta
- [ ] Escribir `claude` y verificar que Claude Code inicia sin errores antes de grabar
- [ ] Tener el prompt del demo (Instrucción 01 del entregable) en un archivo de texto aparte para copiar sin errores de tipeo
- [ ] Pantalla compartida activa con fuente de Terminal legible (tamaño 14pt mínimo, fondo oscuro recomendado)
- [ ] Navegador abierto y listo para abrir el archivo HTML resultante (Chrome o Safari recomendado)
- [ ] Carpeta `Growth Tools` abierta en Finder/Explorer para mostrar el archivo creado en tiempo real
- [ ] Modo "No molestar" activo

---

## El demo: paso a paso exacto

---

### PASO 1 — Mostrar el punto de partida [30 seg]

*(Instructor muestra la Terminal con Claude Code activo y la carpeta Growth Tools vacía en Finder al lado)*

**Narración:**
> "Esto es lo que tienes después de completar los 5 pasos de instalación. Claude Code activo. Una carpeta vacía. Nada más."

> "Lo que voy a hacer ahora es pedirle a Claude Code que construya una calculadora de CAC/LTV. No voy a escribir código. Voy a describir lo que quiero como si se lo explicara a un colega."

---

### PASO 2 — Escribir y enviar el prompt [1 min]

*(Instructor pega el prompt directamente en Claude Code — NO lo escribe letra por letra para mantener el tiempo)*

**Narración mientras pega:**
> "Noten cómo está escrito el prompt: le digo qué construir, le doy los inputs exactos con sus tipos de dato, le digo qué outputs quiero y le digo cómo quiero que se vea. No en términos técnicos — en términos de negocio."

**El prompt que se pega:**

```
Construye una calculadora de CAC/LTV interactiva en HTML que funcione en el navegador.

La calculadora debe tener estos inputs:
- Gasto mensual en adquisición (campo numérico, en dólares o la moneda que ponga el usuario)
- Nuevos clientes por mes (campo numérico)
- Ticket promedio mensual o MRR por cliente (campo numérico)
- Margen bruto del negocio en porcentaje (campo numérico, por defecto 70%)
- Churn mensual en porcentaje (campo numérico)

Y debe mostrar estos outputs calculados automáticamente:
- CAC (Costo de Adquisición de Cliente)
- LTV (valor de vida del cliente, usando la fórmula LTV = ARPU × margen / churn)
- Ratio LTV:CAC (con indicador visual: rojo si < 3x, amarillo si 3x-5x, verde si > 5x)
- Payback period en meses

Diseño: limpio, sin librerías externas, todo en un solo archivo HTML.
Guarda el resultado como "cac-ltv-calculator.html" en la carpeta actual.
```

*(Presiona Enter. Pausa. Sin hablar mientras Claude Code trabaja.)*

---

### PASO 3 — Observar el proceso en tiempo real [1 min]

*(Instructor no habla mientras Claude Code muestra el código siendo generado y ejecutado)*

*(Cuando Claude Code termina — aproximadamente 45–60 segundos — el instructor retoma)*

**Narración:**
> "Fíjense en lo que acaba de pasar. Claude Code no solo escribió el código — lo ejecutó y confirmó que el archivo fue creado."

*(Señala en Finder/Explorer que el archivo `cac-ltv-calculator.html` ya aparece en la carpeta)*

> "Ese archivo existe ahora mismo. Sin que yo escribiera una línea de código."

---

### PASO 4 — Abrir el resultado en el navegador [30 seg]

*(Instructor hace doble clic en `cac-ltv-calculator.html` — se abre en el navegador)*

**Narración:**
> "La abro en el navegador como cualquier archivo. Sin instalar nada. Sin servidor. Sin configuración."

*(Instructor ingresa números de ejemplo en la calculadora en vivo)*

> "Pongo: gasto mensual $10,000, 50 clientes nuevos, ticket promedio $200, margen 70%, churn 5%."

*(La calculadora muestra los resultados automáticamente)*

> "CAC: $200. LTV: $2,800. Ratio LTV:CAC: 14x — verde. Payback: 1.4 meses."

> "Esa es la herramienta. Funcional. En menos de 2 minutos desde que pegué el prompt."

---

### PASO 5 — Iterar: pedir una mejora en lenguaje natural [1 min]

*(Instructor vuelve a la Terminal donde Claude Code sigue activo)*

**Narración:**
> "Ahora voy a mostrarles el loop de iteración. Hay algo que quiero cambiar: quiero que la calculadora también muestre cuánto MRR proyectado tengo a 12 meses si mantengo este nivel de adquisición y este churn. Eso no estaba en el prompt original."

*(Instructor escribe en Claude Code)*

**Lo que escribe:**

```
Agrega un output adicional a la calculadora: MRR proyectado a 12 meses.

El cálculo debe considerar:
- Los clientes que ya tengo (campo nuevo: "clientes actuales" — por defecto 0)
- Los nuevos clientes por mes (ya existe en la calculadora)
- El churn mensual (ya existe)

Muestra el MRR al mes 1, al mes 6 y al mes 12 en una mini-tabla debajo de los otros resultados.
```

*(Presiona Enter. Pausa mientras Claude actualiza el archivo.)*

*(Cuando termina, instructor recarga el navegador)*

**Narración:**
> "Refresco el navegador. La calculadora ahora tiene la tabla de MRR proyectado a 12 meses."

*(Señala la nueva sección en pantalla)*

> "Eso es iteración en Claude Code. No expliqué código. Describí el problema de negocio. Claude modificó la herramienta."

---

### PASO 6 — El remate: mostrar lo que tienes [30 seg]

*(Instructor cierra la Terminal y el navegador, mira a cámara)*

**Narración:**
> "En menos de 4 minutos de pantalla — que en tu caso van a ser entre 8 y 12 minutos incluyendo escribir el prompt — tienen una calculadora de CAC/LTV que pueden compartir con su equipo enviando un archivo."

> "Sin dev. Sin esperar. Sin reunión de requerimientos."

> "En el entregable hay 9 instrucciones más con este mismo nivel de detalle. Cópialas, pégalas en Claude Code y tengan sus herramientas de Growth."

---

## Cómo manejar si Claude Code tarda más de lo esperado

Si en el demo en vivo Claude Code tarda más de 90 segundos en responder:

**Narración de puente:**
> "Ven que está trabajando — a veces el tiempo varía dependiendo de la complejidad de lo que pedimos. En la práctica, herramientas simples tardan entre 30 segundos y 2 minutos. Las más complejas pueden tardar 5. Pero recuerden: antes esto tardaba días."

No hay que rellenar con explicaciones técnicas. El silencio mientras Claude trabaja refuerza el punto de que el trabajo lo está haciendo Claude.

---

## Variantes del demo (si el instructor prefiere otra herramienta)

El demo funciona igual con cualquiera de las 10 instrucciones del entregable. Las más visuales y que dan el mejor efecto en pantalla:

- **Instrucción 03** (Tracker de experimentos): muestra storage persistente — los datos no se pierden al cerrar
- **Instrucción 07** (Dashboard de KPIs): el más visual — tarjetas de colores que el equipo reconoce inmediatamente
- **Instrucción 09** (Generador de hipótesis): muestra el framework de Growth más claramente

**Regla para elegir la variante:** elige la herramienta que más usarías tú mismo. Eso se nota en la narración y convierte mejor.

---

## Qué NO hacer en el demo

| No hacer | Por qué |
|---|---|
| Instalar Claude Code en vivo durante el demo | Consume tiempo impredecible y convierte el demo en una clase de Terminal |
| Escribir el prompt letra por letra en lugar de pegarlo | Aumenta el riesgo de error de tipeo y consume tiempo del demo |
| Explicar el código que genera Claude Code | No es el punto. El punto es que no necesitas entenderlo. |
| Mostrar un output que necesita muchas iteraciones para funcionar | Prepara el prompt con suficiente detalle para que el primer output sea sólido — practica antes |
| Disculparse por la simplicidad del approach (copy-paste, sin API) | La simplicidad es la ventaja, no una limitación. Nunca disculparse. |
| Saltarse el paso de iteración | La iteración es la mitad del valor del demo — muestra que el loop funciona |

---

## Métricas de éxito del demo

El demo funcionó si al final el estudiante piensa:
- "Puedo instalar esto esta tarde y hacer esto mismo"
- "Entiendo que no necesito saber programar para usar Claude Code"
- "Ya sé cuál de las 10 instrucciones voy a probar primero"

Si hay esas tres reacciones, el demo cumplió su objetivo.
