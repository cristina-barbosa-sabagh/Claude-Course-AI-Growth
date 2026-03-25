# TU TAREA — hazlo ahora (tarda 25 minutos)

---

☐ **Abre Claude → pega este prompt → guarda el output**

Usa los datos de muestra del demo o reemplaza con tus datos reales de campañas:

```
Tengo un CSV con datos de campañas de marketing con estas columnas: fecha, canal, inversión, conversiones.

Te voy a pegar los datos aquí abajo. Necesito que:

1. Calcules el CAC (Costo de Adquisición de Cliente) por canal — fórmula: inversión total del canal / conversiones totales del canal
2. Me digas qué canal tiene el CAC más bajo (el más eficiente)
3. Me muestres un resumen en tabla con: Canal | Inversión Total | Conversiones Totales | CAC

Aquí están los datos:
fecha,canal,inversión,conversiones
2024-01-01,Meta Ads,4500,38
2024-01-01,Google Ads,3200,29
2024-01-01,Email,800,22
2024-01-08,Meta Ads,4800,41
2024-01-08,Google Ads,3100,27
2024-01-08,Email,750,24
2024-01-15,Meta Ads,5200,43
2024-01-15,Google Ads,2900,26
2024-01-15,Email,820,23
```

---

☐ **En la misma conversación → pega este prompt → copia el script que genera Claude**

```
Perfecto. Ahora crea un script en Python que haga este mismo cálculo de forma automática.

El script debe:
1. Leer un archivo CSV llamado "campañas.csv" desde la misma carpeta donde está el script
2. Verificar que el CSV tiene las columnas: fecha, canal, inversión, conversiones (si falta alguna, que muestre un error claro)
3. Calcular el CAC por canal
4. Mostrar la tabla de resultados en la terminal con formato limpio
5. Guardar los resultados en un archivo "reporte_cac.csv" en la misma carpeta

El script debe funcionar con Python 3 sin instalar librerías adicionales — solo usar pandas si está disponible, o csv y collections si no.

Al final del script, agrega comentarios que expliquen cómo ejecutarlo desde la terminal.
```

---

☐ **Guarda el script → crea el CSV de datos → ejecuta desde la Terminal**

Guarda el código como `cac_calculator.py`. Crea `campañas.csv` con los datos de arriba. Desde Terminal: `python3 cac_calculator.py`. Verifica que aparece la tabla y se crea el archivo `reporte_cac.csv`.

---

☐ **Abre Claude → pega este prompt de explicación → lee la respuesta**

```
Explícame qué hace este script en términos de negocio, no en términos técnicos.

Quiero entender:
1. Qué pasa si el CSV tiene filas con inversión 0 — ¿rompe el cálculo?
2. Qué pasa si hay un canal nuevo que no estaba antes — ¿lo incluye automáticamente?
3. ¿Qué tendría que cambiar si quisiera calcular ROAS en lugar de CAC? (ROAS = ingresos / inversión — necesitaría una columna "ingresos" en el CSV)
```

---

☐ **Abre Claude → pega este prompt de mejora → reemplaza el script con la versión nueva**

```
Modifica el script para que acepte opcionalmente un segundo argumento: el CSV del mes anterior.

Si se ejecuta así: python3 cac_calculator.py campañas_enero.csv campañas_diciembre.csv

El script debe mostrar una tercera columna en la tabla: "Variación CAC vs mes anterior" con el porcentaje de cambio. Positivo = CAC subió (malo). Negativo = CAC bajó (bien).

Si no se pasa el segundo argumento, el script funciona igual que antes.
```

---

☐ **Abre Claude → pega este prompt extra → guarda el script adicional**

Construye una segunda herramienta: calculadora de LTV por canal.

```
Crea un script en Python que lea el mismo CSV de campañas (columnas: fecha, canal, inversión, conversiones) y calcule el LTV estimado por canal.

Para calcular LTV necesito que el script me pida estos valores al ejecutarse (inputs interactivos):
- Ticket promedio mensual por cliente ($)
- Margen bruto del negocio (%)
- Churn mensual estimado (%)

Fórmula de LTV: (ticket promedio × margen) / churn mensual

El script debe mostrar una tabla con: Canal | CAC | LTV | Ratio LTV:CAC | Evaluación (Excelente si >5x, Bueno si 3x-5x, Revisar si <3x)

Guarda el resultado como "reporte_ltv.csv".
```

---

☐ **Con tu CSV real de datos → ejecuta el script de LTV → guarda el reporte_ltv.csv**

Si tienes datos reales de tus campañas, reemplaza el archivo `campañas.csv` con tus datos reales (mismas columnas: fecha, canal, inversión, conversiones) y ejecuta ambos scripts.

---

**Sabrás que lo hiciste bien cuando:**

1. Tienes el archivo `cac_calculator.py` ejecutándose sin errores desde la Terminal.
2. El archivo `reporte_cac.csv` aparece en tu Escritorio con los resultados correctos.
3. Puedes decir qué canal tiene el CAC más bajo en tu mezcla de medios.
4. Si tienes datos reales, el script los procesa igual que los datos de muestra.
