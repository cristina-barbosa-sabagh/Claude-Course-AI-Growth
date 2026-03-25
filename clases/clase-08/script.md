# Landing page de experimento en vivo: de idea a URL en 20 minutos — GUIÓN EN PANTALLA
**Instructor C · 16 minutos · Módulo 03**

---

## 1. ABRO CLAUDE Y EMPIEZO CON EL BRIEF

Abro claude.ai. Conversación nueva. Tengo aquí un documento con el brief del experimento que escribí esta mañana. Lo voy a convertir en una landing page completa en los próximos minutos.

[ACCIÓN EN PANTALLA: abrir chrome, ir a claude.ai, clic en "New conversation", mostrar también un documento de texto abierto al lado con notas del brief]

El producto de ejemplo que voy a usar: una herramienta SaaS que genera reportes de ventas automáticos para Sales Managers. La hipótesis del experimento: si mostramos el tiempo ahorrado en números concretos, la tasa de reserva de demo sube.

---

## 2. EL PROMPT DE GENERACIÓN DE LANDING — LO PEGO COMPLETO

No escribo nada manual. Copio el prompt que ya tenía preparado y lo pego directamente.

[ACCIÓN EN PANTALLA: mostrar el archivo de texto con el prompt, seleccionarlo todo con Cmd+A, copiarlo con Cmd+C, pegarlo en Claude con Cmd+V, mostrar el prompt completo antes de enviarlo para que el estudiante pueda leerlo]

Este es el prompt exacto:

```
Eres un desarrollador frontend especializado en landing pages de conversión para SaaS B2B.

Tu tarea: construir una landing page completa lista para publicar. Genera un solo archivo HTML con CSS interno.

INSTRUCCIONES TÉCNICAS:
- Un solo archivo index.html — sin archivos CSS o JS separados
- Diseño limpio, mobile-first, sin librerías externas
- Fuente: Inter desde Google Fonts
- Colores: fondo blanco (#ffffff), texto principal (#1a1a1a), acento azul (#2563EB)
- Formulario con campos: nombre + email, con validación básica en JavaScript
- La página debe cargar en menos de 2 segundos

ESTRUCTURA DE LA PÁGINA (en este orden):
1. Hero section: H1 con la propuesta de valor + subtítulo + formulario CTA
2. Beneficios: 4 puntos con iconos SVG simples inline
3. Prueba social: número de clientes + 1 testimonio con nombre y cargo
4. FAQ: 3 preguntas con respuestas directas (máximo 3 líneas cada una)
5. CTA final: repetir el formulario con copy diferente al hero
6. Footer mínimo: nombre del producto + año

CONTENIDO DEL PRODUCTO:

Propuesta de valor:
Reduce el tiempo de reporte semanal de ventas de 3 horas a 20 minutos, sin cambiar tu CRM.

ICP (para ajustar el copy):
Sales Managers en empresas SaaS B2B de 50 a 200 empleados, con equipos de 5 a 15 representantes, que usan HubSpot o Salesforce y arman el reporte de pipeline manualmente cada lunes por la mañana.

CTA principal:
Reservar demo de 20 minutos

Beneficios clave:
1. Reportes de pipeline listos en 20 minutos, no 3 horas — todos los lunes
2. Datos de HubSpot, Salesforce y Excel unificados en un solo lugar automáticamente
3. Sin código, sin IT — configuración completa en menos de un día
4. Alertas automáticas cuando un deal cae por debajo del umbral de cierre

Objeciones:
1. ¿Funciona con mi CRM actual o tengo que migrar los datos?
2. ¿Cuánto tiempo toma la implementación y quién lo configura?
3. ¿El precio escala cuando crece mi equipo de ventas?

Prueba social:
Más de 200 equipos de ventas en Latam lo usan actualmente.
Testimonio: "Pasé de armar el reporte a mano cada lunes a recibirlo listo el domingo a las 11pm. Mi equipo pensó que había contratado a alguien nuevo." — Carlos M., Sales Manager, Fintech México.

INSTRUCCIONES DE COPY:
- El H1 debe ser la propuesta de valor, directo, sin adjetivos vacíos
- El subtítulo debe nombrar el ICP y el problema específico
- Los beneficios van con números concretos en negrita
- Las respuestas del FAQ: directas, sin rodeos
- Tono: orientado a resultados, conversacional pero profesional

Genera el archivo index.html completo. No me expliques el código — solo devuelve el HTML.
```

[ACCIÓN EN PANTALLA: presionar Enter, mostrar cómo Claude empieza a generar el HTML en tiempo real, hacer scroll mientras el código aparece para que se vea la magnitud del output]

---

## 3. ESPERO SIN TOCAR NADA — Y COMENTO LO QUE VEO

Mientras Claude genera, leo en voz alta lo que va apareciendo.

[ACCIÓN EN PANTALLA: cursor quieto, el código HTML aparece línea por línea, instructor hace scroll lento para seguir el output]

Está generando el head primero — los estilos, la fuente Inter de Google, los colores que le pedí. Ahora el hero section con el H1. Fíjate: usó exactamente la propuesta de valor como H1, no la cambió. Ahora los beneficios con iconos SVG en línea, sin imágenes externas. Ahora el FAQ con las tres objeciones que le di. Ahora el CTA final.

Terminó.

---

## 4. COPIO EL CÓDIGO Y LO ABRO EN EL NAVEGADOR

[ACCIÓN EN PANTALLA: hacer clic en el botón "Copy code" del bloque de HTML en Claude, abrir TextEdit o VS Code, pegar el código, guardar como index.html en una carpeta nueva llamada "landing-demo-reportes" en el Escritorio]

Guardo el archivo. Ahora lo arrastro al navegador.

[ACCIÓN EN PANTALLA: arrastrar el archivo index.html desde el Finder directamente a una pestaña de Chrome, mostrar la landing cargando]

La landing carga. Hero con el H1, formulario, sección de beneficios, FAQ, CTA al final. Todo en un solo archivo HTML. Sin servidor.

---

## 5. PROMPT DE REFINAMIENTO: MEJORAR EL HEADLINE Y EL HERO

El H1 es bueno pero quiero probar una versión más agresiva. Le pido variantes.

[ACCIÓN EN PANTALLA: volver a la conversación de Claude, escribir el siguiente prompt]

```
Dame 5 variantes del H1 y subtítulo del hero section.

Contexto: el visitante es un Sales Manager que lleva años armando el reporte de pipeline a mano. Llega a esta página porque vio un anuncio que decía "¿Todavía armas el reporte de ventas a mano?".

Para cada variante dame:
- H1 (máximo 10 palabras, orientado al resultado)
- Subtítulo (máximo 20 palabras, que nombre el problema específico y a quién resuelve)

Quiero que las 5 variantes tengan ángulos distintos:
1. Ángulo tiempo (cuánto se ahorra)
2. Ángulo frustración (el dolor que elimina)
3. Ángulo resultado (qué logra el equipo)
4. Ángulo competencia (qué tienen otros que tú aún no)
5. Ángulo social proof (lo que hacen los mejores equipos)
```

[ACCIÓN EN PANTALLA: enviar el prompt, mostrar las 5 variantes que devuelve Claude en una lista numerada]

Me quedo con la variante 2 — ángulo frustración. Voy a pedirle que actualice la landing con ese nuevo hero.

---

## 6. PROMPT DE OPTIMIZACIÓN DEL CTA

[ACCIÓN EN PANTALLA: en la misma conversación, escribir el siguiente prompt]

```
Ahora optimiza el CTA de la landing. Actualmente dice "Reservar demo de 20 minutos".

Dame 4 alternativas de CTA con su copy de botón y el texto de apoyo debajo del botón (la frase pequeña que reduce la fricción).

Quiero que explores:
1. CTA con urgencia implícita
2. CTA con reducción de riesgo ("sin tarjeta", "sin compromiso")
3. CTA con resultado inmediato ("Ve cómo funciona en 3 minutos")
4. CTA orientado al equipo, no al individuo

Para cada uno dame: texto del botón + frase de apoyo (máximo 8 palabras)
```

[ACCIÓN EN PANTALLA: mostrar las 4 variantes de CTA que genera Claude, con el texto del botón y la frase de apoyo]

Me quedo con la opción 3. Ahora le pido que actualice el HTML con el nuevo H1 y el nuevo CTA.

---

## 7. ACTUALIZO EL HTML Y SUBO A NETLIFY

[ACCIÓN EN PANTALLA: escribir en Claude]

```
Actualiza el archivo index.html con estos cambios:

H1 nuevo: [pega aquí la variante de H1 que elegiste en el paso anterior]
Subtítulo nuevo: [pega el subtítulo correspondiente]
CTA nuevo: botón que dice "Ve cómo funciona en 3 minutos" + frase de apoyo "Sin demo comercial. Sin tarjeta de crédito."

Devuelve solo el HTML completo actualizado.
```

[ACCIÓN EN PANTALLA: copiar el HTML nuevo, reemplazar el archivo index.html con el contenido actualizado, arrastrarlo al navegador para verificar que los cambios se ven bien]

La landing está lista. Ahora la subo a Netlify.

[ACCIÓN EN PANTALLA: abrir una nueva pestaña del navegador, ir a netlify.com, mostrar el dashboard con el área de "drag and drop", arrastrar la carpeta "landing-demo-reportes" completa al área indicada en Netlify]

Arrastro la carpeta. Netlify detecta el archivo HTML. No hay ninguna configuración adicional.

[ACCIÓN EN PANTALLA: mostrar la barra de progreso de Netlify, esperar a que aparezca la URL pública — algo como "https://cheerful-cupcake-abc123.netlify.app"]

Tenemos la URL. La abro.

[ACCIÓN EN PANTALLA: hacer clic en la URL de Netlify, mostrar la landing cargando desde internet, hacer scroll para mostrar todas las secciones]

Eso es todo. Una URL pública. Funciona en cualquier dispositivo. Listo para enviar tráfico.

---

## 8. LO QUE TIENES AL FINAL DE ESTA CLASE

Tienes una URL publicada con tu landing de experimento. No una maqueta. Una URL real, accesible desde cualquier dispositivo, lista para recibir tráfico.

Del brief al HTML: un prompt. Del HTML a la URL: arrastrar una carpeta.

Tu tarea está en el entregable. Hazla con tu producto real.
