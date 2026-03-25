# TU TAREA — hazlo ahora (tarda 30 minutos)

---

☐ **Abre Claude → pega el brief de tu producto → guarda el HTML que genera**

Reemplaza el contenido entre comillas con los datos de tu producto real. Si no tienes todos los datos, usa los valores del ejemplo:

```
Eres un desarrollador frontend especializado en landing pages de conversión para SaaS B2B.

Tu tarea: construir una landing page completa lista para publicar. Genera un solo archivo HTML con CSS interno.

INSTRUCCIONES TÉCNICAS:
- Un solo archivo index.html — sin archivos CSS o JS separados
- Diseño limpio, mobile-first, sin librerías externas
- Fuente: Inter desde Google Fonts
- Colores: fondo blanco (#ffffff), texto principal (#1a1a1a), acento azul (#2563EB)
- Formulario con campos: nombre + email, con validación básica en JavaScript

ESTRUCTURA DE LA PÁGINA (en este orden):
1. Hero section: H1 con la propuesta de valor + subtítulo + formulario CTA
2. Beneficios: 4 puntos con iconos SVG simples inline
3. Prueba social: número de clientes + 1 testimonio con nombre y cargo
4. FAQ: 3 preguntas con respuestas directas (máximo 3 líneas cada una)
5. CTA final: repetir el formulario con copy diferente al hero
6. Footer mínimo: nombre del producto + año

CONTENIDO DEL PRODUCTO:

Propuesta de valor: [escribe el beneficio principal en una línea — con números si es posible]

ICP: [describe a quién le estás hablando — rol, tipo de empresa, problema concreto]

CTA principal: [la única acción que quieres que haga el visitante]

Beneficios clave:
1. [beneficio con número]
2. [beneficio con número]
3. [beneficio sin dependencias técnicas]
4. [beneficio orientado al equipo]

Objeciones:
1. [pregunta que se hace tu ICP antes de convertir]
2. [segunda objeción principal]
3. [tercera objeción]

Prueba social: [número de clientes + testimonio real o placeholder realista]

INSTRUCCIONES DE COPY:
- H1: la propuesta de valor, directo, sin adjetivos vacíos
- Subtítulo: nombra el ICP y el problema que resuelve
- Beneficios con números en negrita
- FAQ: respuestas directas, máximo 3 líneas
- Tono: orientado a resultados, sin jerga técnica

Genera el archivo index.html completo. No me expliques el código — solo devuelve el HTML.
```

---

☐ **Copia el HTML → guárdalo como index.html → ábrelo en el navegador**

Crea una carpeta con el nombre de tu experimento. Guarda el `index.html` dentro. Arrástralo a Chrome. Verifica que todas las secciones se ven correctas y que el formulario tiene validación básica.

---

☐ **Abre Claude → pide variantes del headline → elige la mejor**

```
Dame 5 variantes del H1 y subtítulo del hero section de esta landing.

Contexto del visitante: [describe de dónde viene el tráfico — qué anuncio vio, qué problema tiene en ese momento]

Para cada variante dame:
- H1 (máximo 10 palabras, orientado al resultado)
- Subtítulo (máximo 20 palabras, que nombre el problema específico y a quién resuelve)

Quiero 5 ángulos distintos: tiempo ahorrado, frustración eliminada, resultado logrado, comparación implícita con la competencia, y validación social.
```

---

☐ **Abre Claude → pide variantes del CTA → elige la que mejor reduce fricción**

```
Dame 4 alternativas de CTA para esta landing page de [nombre de tu producto].

Para cada una dame: texto del botón (máximo 5 palabras) + frase de apoyo debajo del botón (máximo 8 palabras, que elimine la objeción más común antes de hacer clic).

Explora: urgencia implícita, reducción de riesgo, resultado inmediato, y CTA colectivo orientado al equipo.
```

---

☐ **Abre Claude → pide la actualización del HTML con el H1 y CTA elegidos → reemplaza el archivo**

```
Actualiza el index.html que generaste antes con estos cambios:

H1 nuevo: [pega el H1 elegido]
Subtítulo nuevo: [pega el subtítulo elegido]
Texto del botón CTA: [pega el texto elegido]
Frase de apoyo bajo el CTA: [pega la frase elegida]

Aplica los cambios en AMBOS lugares donde aparece el CTA (hero y CTA final).
Devuelve el HTML completo actualizado.
```

---

☐ **Crea cuenta en Netlify → arrastra la carpeta → copia la URL publicada**

Ve a netlify.com, crea una cuenta gratuita (sin tarjeta de crédito), arrastra tu carpeta al área de deploy. Copia la URL que genera Netlify. Abre esa URL en una pestaña nueva y verifica que la landing carga correctamente desde internet.

---

☐ **Abre Claude → pide una versión alternativa para A/B test → guárdala como index-v2.html**

```
Crea una versión alternativa de esta landing para hacer un A/B test.

Mantén idéntico el diseño, la estructura y el formulario.

Cambia solo:
- El H1 y subtítulo del hero (usa el ángulo opuesto al que ya tengo)
- El orden de los beneficios (pon el beneficio de "sin código, sin IT" primero)
- El texto del CTA (usa una variante diferente a la que ya tengo)

Devuelve el HTML completo de la versión B.
```

---

**Sabrás que lo hiciste bien cuando:**

1. Tienes una URL pública de Netlify que puedes abrir en tu teléfono y la landing carga en menos de 3 segundos.
2. El H1 refleja el beneficio principal de tu producto con un número concreto.
3. El formulario captura nombre y email con validación funcionando.
4. Tienes una segunda versión del HTML lista para el A/B test.
