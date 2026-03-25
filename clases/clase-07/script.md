# Claude Code sin miedo: tu primer output en 10 minutos — GUIÓN EN PANTALLA
**Instructor C · 14 minutos · Módulo 03**

---

## 1. ABRO CLAUDE Y ARRANCO SIN INTRODUCCIÓN

Abro Claude en claude.ai y voy directamente a una conversación nueva.

[ACCIÓN EN PANTALLA: abrir chrome, escribir claude.ai, hacer clic en "New conversation", mostrar el cursor parpadeando en el campo de texto]

Tengo aquí mi CSV de campañas. Columnas: fecha, canal, inversión, conversiones. Lo descargué de mi dashboard de marketing hace cinco minutos. Necesito saber el CAC por canal. No quiero hacer esto en Excel. Se lo pido a Claude ahora mismo.

[ACCIÓN EN PANTALLA: abrir el archivo CSV en el Finder para que se vea el contenido — filas reales con datos de Meta, Google, Email]

---

## 2. PRIMER PROMPT: ANALIZAR EL CSV Y CALCULAR CAC POR CANAL

Pego este prompt exacto en Claude:

[ACCIÓN EN PANTALLA: copiar el texto del bloque de abajo y pegarlo en Claude, mostrar cómo se ve el prompt completo antes de enviar]

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

[ACCIÓN EN PANTALLA: presionar Enter, mostrar cómo Claude empieza a responder en tiempo real, dejar que el output se genere completamente sin interrumpir]

Claude devuelve la tabla en segundos. Fíjate: Email tiene el CAC más bajo. No lo sabía antes de hacer esto. Esta es la respuesta que me llevaría 20 minutos armar en Excel.

---

## 3. PROMPT DE SEGUIMIENTO: GENERAR EL SCRIPT DE PYTHON

Ahora le pido el script. Quiero poder ejecutar este cálculo cada semana cuando baje el CSV nuevo, sin tener que pedírselo a Claude cada vez.

[ACCIÓN EN PANTALLA: escribir el siguiente mensaje en la misma conversación, justo debajo de la respuesta anterior]

Pego este prompt:

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

[ACCIÓN EN PANTALLA: enviar el prompt, mostrar el bloque de código que devuelve Claude, hacer scroll para ver el código completo]

Claude devuelve el script completo. Con comentarios. Con manejo de errores. Con instrucciones de uso al final.

---

## 4. COPIO EL CÓDIGO Y LO EJECUTO

[ACCIÓN EN PANTALLA: hacer clic en el botón "Copy code" que aparece en el bloque de código de Claude, abrir un editor de texto simple como TextEdit en Mac o Bloc de Notas en Windows, pegar el código, guardar el archivo como "cac_calculator.py" en el Escritorio]

Guardo el archivo. Abro la Terminal. Navego al Escritorio.

[ACCIÓN EN PANTALLA: abrir Terminal, escribir `cd ~/Desktop`, presionar Enter, escribir `python3 cac_calculator.py`, presionar Enter]

El script corre. Muestra la tabla en la terminal. Crea el archivo reporte_cac.csv en el Escritorio.

[ACCIÓN EN PANTALLA: abrir el archivo reporte_cac.csv con doble clic, mostrar los datos en Numbers o Excel]

Esto es lo que ocurrió: le pedí el análisis, lo hice, le pedí el script, lo ejecuté. Cuatro pasos. Diez minutos.

---

## 5. PROMPT DE EXPLICACIÓN: QUÉ HACE EL CÓDIGO

Antes de guardarlo para siempre, quiero entender qué hace. No el código — el comportamiento.

[ACCIÓN EN PANTALLA: volver a la conversación de Claude, escribir el siguiente mensaje]

```
Explícame qué hace este script en términos de negocio, no en términos técnicos.

Quiero entender:
1. Qué pasa si el CSV tiene filas con inversión 0 — ¿rompe el cálculo?
2. Qué pasa si hay un canal nuevo que no estaba antes — ¿lo incluye automáticamente?
3. ¿Qué tendría que cambiar si quisiera calcular ROAS en lugar de CAC? (ROAS = ingresos / inversión — necesitaría una columna "ingresos" en el CSV)
```

[ACCIÓN EN PANTALLA: enviar el prompt, mostrar la respuesta de Claude respondiendo cada una de las tres preguntas en lenguaje claro]

Claude explica cada punto sin usar jerga técnica. Ahora sé exactamente qué hace el script y cómo adaptarlo si cambio el CSV.

---

## 6. ITERAR: AGREGAR UNA MEJORA AL SCRIPT

El script funciona pero quiero una cosa más: que me diga qué canal mejoró más su CAC respecto al mes anterior si le paso dos CSVs.

[ACCIÓN EN PANTALLA: escribir el siguiente mensaje en Claude]

```
Modifica el script para que acepte opcionalmente un segundo argumento: el CSV del mes anterior.

Si se ejecuta así: python3 cac_calculator.py campañas_enero.csv campañas_diciembre.csv

El script debe mostrar una tercera columna en la tabla: "Variación CAC vs mes anterior" con el porcentaje de cambio. Positivo = CAC subió (malo). Negativo = CAC bajó (bien).

Si no se pasa el segundo argumento, el script funciona igual que antes.
```

[ACCIÓN EN PANTALLA: mostrar el código nuevo que devuelve Claude, hacer clic en "Copy code", reemplazar el archivo cac_calculator.py con el código nuevo, ejecutar desde la Terminal pasando dos archivos CSV]

El script ahora compara dos períodos. Lo construí en cinco minutos de iteración. Sin tocar el código directamente.

---

## 7. LO QUE TIENES AL FINAL DE ESTA CLASE

[ACCIÓN EN PANTALLA: mostrar el Escritorio con los archivos creados: cac_calculator.py, reporte_cac.csv]

Un script que:
- Lee cualquier CSV con el formato correcto
- Calcula CAC por canal automáticamente
- Guarda el reporte
- Compara con el mes anterior si le pasas un segundo archivo

Lo usas cada vez que bajas datos nuevos. No vuelves a Claude para esto. Ya lo tienes.

Tu tarea está en el entregable. Hazla antes de la próxima clase.
