# DEMO PASO A PASO — Script de análisis de CAC por canal con Claude

---

**Paso 1.** Abre claude.ai en tu navegador y haz clic en "New conversation".

- Deberías ver esto en pantalla: campo de texto vacío, cursor parpadeando, barra lateral izquierda con conversaciones anteriores.

---

**Paso 2.** Pega este prompt completo en Claude y presiona Enter:

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

- Deberías ver esto en pantalla: Claude genera una tabla con tres filas (Meta Ads, Google Ads, Email), muestra el CAC calculado por canal e identifica Email como el canal más eficiente con el CAC más bajo (~$34).

---

**Paso 3.** En la misma conversación, pega este segundo prompt:

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

- Deberías ver esto en pantalla: un bloque de código Python con fondo oscuro, botón "Copy code" en la esquina superior derecha del bloque, comentarios en español al final del código explicando cómo ejecutarlo.

---

**Paso 4.** Haz clic en el botón "Copy code" del bloque de código.

- Deberías ver esto en pantalla: el botón cambia brevemente a "Copied!" con un ícono de check.

---

**Paso 5.** Abre un editor de texto en tu computadora.
- Mac: abre TextEdit → Formato → Convertir a texto sin formato
- Windows: abre Bloc de notas
- O usa VS Code si lo tienes instalado.

Pega el código copiado. Guarda el archivo como `cac_calculator.py` en tu Escritorio.

- Deberías ver esto en pantalla: el archivo `cac_calculator.py` visible en el Escritorio, el código de Python con indentación correcta en el editor.

---

**Paso 6.** Crea el archivo de datos. Abre un segundo archivo de texto y pega esto:

```
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

Guárdalo como `campañas.csv` en el mismo Escritorio.

- Deberías ver esto en pantalla: dos archivos en el Escritorio: `cac_calculator.py` y `campañas.csv`.

---

**Paso 7.** Abre la Terminal (Mac: Cmd + Espacio → escribe "Terminal") o el CMD (Windows: tecla Windows → escribe "cmd").

Escribe estos dos comandos, uno por uno:

```
cd ~/Desktop
python3 cac_calculator.py
```

- Deberías ver esto en pantalla: una tabla en la terminal con tres filas mostrando CAC por canal, y un mensaje que dice que se guardó el archivo `reporte_cac.csv`.

---

**Paso 8.** Haz doble clic en el archivo `reporte_cac.csv` que apareció en el Escritorio.

- Deberías ver esto en pantalla: el archivo se abre en Excel o Numbers mostrando la tabla de resultados: tres canales con su inversión total, conversiones y CAC calculado.

---

**Paso 9.** Vuelve a Claude y pega este prompt para iterar:

```
Explícame qué hace este script en términos de negocio, no en términos técnicos.

Quiero entender:
1. Qué pasa si el CSV tiene filas con inversión 0 — ¿rompe el cálculo?
2. Qué pasa si hay un canal nuevo que no estaba antes — ¿lo incluye automáticamente?
3. ¿Qué tendría que cambiar si quisiera calcular ROAS en lugar de CAC? (ROAS = ingresos / inversión — necesitaría una columna "ingresos" en el CSV)
```

- Deberías ver esto en pantalla: Claude responde cada una de las tres preguntas en párrafos cortos, sin código, en español.

---

**Paso 10.** Pide la mejora final — comparación entre períodos:

```
Modifica el script para que acepte opcionalmente un segundo argumento: el CSV del mes anterior.

Si se ejecuta así: python3 cac_calculator.py campañas_enero.csv campañas_diciembre.csv

El script debe mostrar una tercera columna en la tabla: "Variación CAC vs mes anterior" con el porcentaje de cambio. Positivo = CAC subió (malo). Negativo = CAC bajó (bien).

Si no se pasa el segundo argumento, el script funciona igual que antes.
```

- Deberías ver esto en pantalla: un bloque de código nuevo con el script modificado, una columna adicional visible en el ejemplo de output que Claude muestra en la respuesta.

---

**Paso 11.** Copia el nuevo código, reemplaza el archivo `cac_calculator.py` con el contenido nuevo y ejecuta:

```
python3 cac_calculator.py campañas.csv
```

- Deberías ver esto en pantalla: la misma tabla de antes, funcionando exactamente igual — el script es retrocompatible.

---

**Paso 12.** Guarda la conversación de Claude con el nombre "Script CAC por canal" usando la opción de renombrar en la barra lateral.

- Deberías ver esto en pantalla: la conversación aparece renombrada en el historial, lista para reutilizar cuando necesites modificar el script.
