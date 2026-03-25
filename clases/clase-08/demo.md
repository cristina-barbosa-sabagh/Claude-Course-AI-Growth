# DEMO PASO A PASO — Landing page de experimento: de brief a URL publicada

---

**Paso 1.** Abre claude.ai en el navegador. Haz clic en "New conversation".

- Deberías ver esto en pantalla: área de chat vacía, campo de texto en la parte inferior, barra lateral izquierda con el historial.

---

**Paso 2.** Copia y pega este prompt completo en Claude. Presiona Enter.

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

- Deberías ver esto en pantalla: Claude genera un bloque de código HTML largo, empieza con `<!DOCTYPE html>` y termina con `</html>`. El bloque tiene un botón "Copy code" en la esquina superior derecha.

---

**Paso 3.** Haz clic en "Copy code". Abre un editor de texto (TextEdit en Mac en modo texto sin formato, Bloc de notas en Windows, o VS Code). Pega el código. Guarda el archivo como `index.html` dentro de una carpeta nueva llamada `landing-reportes` en el Escritorio.

- Deberías ver esto en pantalla: carpeta `landing-reportes` visible en el Escritorio, archivo `index.html` dentro de ella.

---

**Paso 4.** Arrastra el archivo `index.html` desde el Finder o Explorador directamente a una pestaña abierta de Chrome o Safari.

- Deberías ver esto en pantalla: la landing page cargada en el navegador con: H1 visible en grande, formulario con campos nombre y email, sección de beneficios con iconos, sección de testimonio, FAQ con tres preguntas, CTA al final de la página.

---

**Paso 5.** Haz scroll por la página y verifica que todas las secciones se ven correctas. Prueba ingresar un email inválido en el formulario.

- Deberías ver esto en pantalla: el formulario muestra un mensaje de error de validación cuando el email no tiene el formato correcto.

---

**Paso 6.** Vuelve a Claude. En la misma conversación, pega este prompt:

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

- Deberías ver esto en pantalla: 5 bloques numerados, cada uno con un H1 y un subtítulo distintos. Los H1 tienen estilos claramente diferentes entre sí.

---

**Paso 7.** Elige la variante que más te convence. En la misma conversación, pega este prompt:

```
Dame 4 alternativas de CTA con su copy de botón y el texto de apoyo debajo del botón (la frase pequeña que reduce la fricción).

Quiero que explores:
1. CTA con urgencia implícita
2. CTA con reducción de riesgo ("sin tarjeta", "sin compromiso")
3. CTA con resultado inmediato ("Ve cómo funciona en 3 minutos")
4. CTA orientado al equipo, no al individuo

Para cada uno dame: texto del botón + frase de apoyo (máximo 8 palabras)
```

- Deberías ver esto en pantalla: 4 opciones de CTA con el texto del botón en negrita y la frase de apoyo en texto normal debajo.

---

**Paso 8.** Con el H1 y CTA elegidos, pide la actualización del HTML:

```
Actualiza el archivo index.html con estos cambios:

H1 nuevo: [pega aquí el H1 que elegiste]
Subtítulo nuevo: [pega el subtítulo correspondiente]
CTA nuevo: botón que dice "[pega el texto de botón elegido]" + frase de apoyo "[pega la frase de apoyo]"

Devuelve solo el HTML completo actualizado.
```

- Deberías ver esto en pantalla: un nuevo bloque de código HTML completo con los cambios aplicados.

---

**Paso 9.** Copia el nuevo HTML. Reemplaza el contenido del archivo `index.html` con el nuevo código. Arrastra el archivo al navegador de nuevo para verificar los cambios.

- Deberías ver esto en pantalla: la landing con el nuevo H1, subtítulo y texto del botón CTA actualizados. El resto de la página igual que antes.

---

**Paso 10.** Abre una nueva pestaña del navegador y ve a netlify.com. Crea una cuenta gratuita (plan Starter — no requiere tarjeta de crédito).

- Deberías ver esto en pantalla: dashboard de Netlify con un área grande que dice "Import from Git" y debajo una zona de drag & drop con el texto "Or deploy manually".

---

**Paso 11.** Arrastra la carpeta `landing-reportes` completa (no solo el archivo index.html, sino la carpeta) al área de drag & drop de Netlify.

- Deberías ver esto en pantalla: barra de progreso de upload, después pantalla de confirmación con el texto "Your site is live" y una URL del tipo `https://[nombre-aleatorio].netlify.app`.

---

**Paso 12.** Haz clic en la URL generada por Netlify.

- Deberías ver esto en pantalla: tu landing page cargando desde internet, con la URL de Netlify en la barra de direcciones del navegador. La página se ve idéntica a la previsualización local. Puedes copiar esa URL y compartirla con cualquier persona.
