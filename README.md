# Laboratorio-04---WEB

Pregunta - Pagina 8: Analicemos ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?
Repuesta: En JavaScript, los operadores se evalúan siguiendo un orden de prioridad. Por ejemplo, la multiplicación y división se hacen antes que la suma y resta, y se evalúan de izquierda a derecha. El operador de exponenciación (**) es una excepción: se evalúa de derecha a izquierda. Si usamos paréntesis, cambiamos ese orden y obligamos a que se evalúe primero lo que está dentro.

También hay operadores unarios como + y - que tienen alta prioridad, y los de asignación (=, +=, -=) tienen prioridad baja, por eso se ejecutan al final.
En los ejemplos del código, se ve cómo el orden afecta el resultado. Por ejemplo, 3 + 7 * 7 da 52 porque se multiplica primero, pero (3 + 7) * 7 da 70 porque se suma primero.
JavaScript permite estas combinaciones porque sigue reglas claras de precedencia y asociatividad. Pero si usamos una variable sin definir, como y antes de declararla, el programa da error al ejecutarse.

Pregunta - Pagina 9: Analicemos ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?

Respuesta: Sí, el comportamiento de los flujos de control en JavaScript es bastante parecido al de otros lenguajes. Se evalúa una condición y, dependiendo si es verdadera o falsa, se ejecuta un bloque de código.
Lo que sí hay que tener en cuenta en JavaScript es cómo maneja las comparaciones. Por ejemplo, con == compara valores sin importar el tipo, pero con === compara tanto el valor como el tipo. Eso puede causar confusión si uno no lo tiene claro, como cuando '1' == 1 da verdadero pero '1' === 1 da falso.

También me pareció interesante que se puede usar prompt para pedir datos al usuario y luego tomar decisiones con if/else. Eso hace que el código sea más interactivo y fácil de probar.


