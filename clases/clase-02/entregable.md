# TU TAREA — hazlo ahora (tarda 20 minutos)

---

☐ **Abre Claude → pega el prompt vago → confirma que el output no sirve para producción**

```
Dame ideas de copy para [TU CANAL: Meta Ads / email / LinkedIn] para [TU TIPO DE EMPRESA].
```

Mira el output. Anota cuántas de esas ideas usarías esta semana sin editar. Ese número es tu baseline antes del brief perfecto.

---

☐ **Abre Claude → construye tu brief con los 5 elementos → pega el prompt completo → guarda el output**

Reemplaza los campos en MAYÚSCULAS:

```
ROL:
Actúa como un [ESPECIALIDAD ESPECÍFICA: ej. Growth Marketer B2B SaaS con experiencia en Meta Ads y ciclos de venta cortos / especialista en lifecycle marketing para apps de productividad] con experiencia en [TU INDUSTRIA O CANAL].

CONTEXTO:
Producto: [TU PRODUCTO] ayuda a [TU ICP EN 5 PALABRAS] a [BENEFICIO PRINCIPAL EN 1 LÍNEA] sin [FRICCIÓN QUE ELIMINAS].
ICP: [CARGO EXACTO] en empresas de [TAMAÑO], que actualmente [COMPORTAMIENTO ACTUAL] y tienen el problema de [DOLOR ESPECÍFICO — usa las palabras que usaría tu ICP, no las tuyas].
Situación actual: [QUÉ ESTÁ PASANDO EN TU FUNNEL — métricas actuales, etapa, hipótesis del problema].
Lo que ya probé: [LO QUE YA INTENTASTE que no movió los números].

TAREA:
Genera [NÚMERO] variaciones de [TIPO DE ASSET: copy de anuncio / email / mensaje de in-app / subject line] para [CANAL].
Objetivo: [TU OBJETIVO ESPECÍFICO].
Cada variación usa un ángulo diferente: [ÁNGULO 1], [ÁNGULO 2], [ÁNGULO 3].

FORMATO:
- [NÚMERO] variaciones numeradas
- Cada variación incluye: [CAMPO 1 con límite] + [CAMPO 2 con límite] + [CAMPO 3 con límite]
- Debajo de cada variación: una línea con el ángulo que usa

RESTRICCIONES:
- Sin introducciones antes del output
- No usar: [LISTA DE PALABRAS A EVITAR]
- Tono: [DESCRIPCIÓN CONCRETA: ej. directo, sin condescendencia, como alguien que conoce el trabajo del ICP]
- [RESTRICCIÓN ADICIONAL específica de tu caso]
```

Evalúa el output: ¿cuántas de las 3 variaciones usarías esta semana? Debe ser al menos 2 de 3.

---

☐ **En la misma conversación → itera con este prompt → compara el resultado con el output anterior**

```
La variación [NÚMERO] tiene el ángulo correcto pero [PROBLEMA ESPECÍFICO: tono demasiado formal / headline demasiado largo / CTA demasiado genérico]. Reescribe solo [EL ELEMENTO QUE FALLA] manteniendo todo lo demás. Dame 2 opciones.
```

Deberías ver en pantalla: 2 opciones del elemento corregido. Claude no debería pedirte que repitas el contexto del producto.

---

☐ **Abre Claude → pega este brief de retención → guarda el output**

Reemplaza los campos en MAYÚSCULAS:

```
ROL:
Actúa como un especialista en lifecycle marketing con experiencia en retención de usuarios SaaS B2B.

CONTEXTO:
Producto: [TU PRODUCTO]
ICP del usuario en riesgo: [DESCRIPCIÓN del usuario que se registró pero no completó la activación]
Evento de activación que predice retención: [ACCIÓN ESPECÍFICA que hace el usuario activado]
Tasa de activación actual: [X%]
Objetivo: subir a [Y%]

TAREA:
Escribe el subject line y el texto completo de 1 email para usuarios que se registraron hace 48 horas y no completaron [EVENTO DE ACTIVACIÓN].
El email debe resolver el obstáculo más probable que impide la activación, no solo recordarles que la completen.

FORMATO:
- Subject line
- Preview text (máximo 90 caracteres)
- Cuerpo del email (máximo 150 palabras)
- CTA principal

RESTRICCIONES:
- Sin exclamaciones
- Sin "Hola [nombre]" como apertura
- Sin "Recordatorio:" en el subject
- El cuerpo debe mencionar el obstáculo específico que probablemente tiene el usuario, no solo el beneficio del producto
```

---

☐ **Diagnostica 1 prompt que no te funcionó en el pasado → identifica qué elemento le faltaba**

Piensa en la última vez que le pediste algo a Claude y el output fue inútil. Responde:

- ¿Había ROL? ¿Era específico o vago?
- ¿Había CONTEXTO? ¿Tenía ICP, situación actual y lo que ya intentaste?
- ¿La TAREA era una sola cosa con un verbo de acción?
- ¿Especificaste el FORMATO?
- ¿Había RESTRICCIONES?

El elemento que faltaba es el que convierte ese output de inútil a listo para producción.

---

☐ **Guarda tu brief como plantilla reutilizable**

- Guarda el brief que mejor funcionó hoy en un documento de texto
- Nombre: `brief-[caso de uso].md` — ej. `brief-copy-meta-ads.md`
- En la Clase 3 lo integramos dentro del contexto de tu Project para que Claude lo tenga disponible siempre

---

**Sabrás que lo hiciste bien cuando:**

De los 3 outputs que generaste con el brief completo, al menos 2 de 3 están listos para usar esta semana sin más de 5 minutos de edición. Si no llegaste a eso, el problema está en el CONTEXTO: el ICP o la situación actual no son suficientemente específicos. Enriquece esos dos campos y vuelve a intentar.
