# Notas del Prep Course

- [Notas del Prep Course](#notas-del-prep-course)
  - [Expressions vs Statements en JavaScript](#expressions-vs-statements-en-javascript)
    - [Ejemplos de expressions](#ejemplos-de-expressions)
    - [Ejemplos de statements](#ejemplos-de-statements)
    - [Regla fácil para diferenciar entre expressions y statements](#regla-fácil-para-diferenciar-entre-expressions-y-statements)
    - [Tipos de expressions](#tipos-de-expressions)
      - [Aritméticas](#aritméticas)
      - [Strings](#strings)
      - [Lógicas](#lógicas)
      - [Primarias](#primarias)
      - [De asignación](#de-asignación)
      - [Con efectos secundarios](#con-efectos-secundarios)
    - [Statements](#statements)
      - [Declaration statements](#declaration-statements)
        - [Function expressions vs function declarations](#function-expressions-vs-function-declarations)
      - [Conditional statements](#conditional-statements)
      - [Bucles y saltos](#bucles-y-saltos)
      - [Expression statements](#expression-statements)

## Expressions vs Statements en JavaScript

- Expressions: retornan o convierten un valor
- Statements: realizan una acción ("hacen algo")

### Ejemplos de expressions

- `1 + 2`
- `Math.pow(3,2)`
- `"Hola " + "mundo"`

### Ejemplos de statements

```javascript
ìf (condición) {
    //código "if true"
} else {
    //código "if false"
}
```

### Regla fácil para diferenciar entre expressions y statements

Si podemos ponerla dentro de un `console.log` es una expression, de lo contrario, es un statement:

```javascript
console.log(1 + 2);
console.log(Math.pow(3,2));
console.log("Hola " + "mundo");
```

### Tipos de expressions

#### Aritméticas

Resuelven a un valor numérico:

```javascript
5;
2 + 20;
3 * 12;
10 % 2;
```

#### Strings

Resuelven a una string o cadena de texto:

```javascript
"Hola";
"5";
"Mi nombre es: " + "David";
```

#### Lógicas

Resuelven a un valor booleano o lógico (`true` o `false`):

```javascript
5 < 6;
3 === 12;
12 != 3;
true;
false;
```

#### Primarias

Expresiones que se escriben por sí mismas, sin necesidad de un operador. Incluyen valores literales, variables y keywords o palabras clave de JS:

```javascript
"Hola mundo";
22;
nombre; // hace referencia a una variable llamada "nombre"
false; // hace referencia al booleano false
this; // hace referencia al keyword this
```

#### De asignación

Retorna el valor asignado ("*assignment expression*"):

```javascript
a = 100; // retorna 100
var b = (a = 99); // la variable b retorna el valor de "a = 99"
```

Nota: si usamos `var` la expresión retorna `undefined`, es decir, no es lo mismo una asignación que una declaración de variables.

#### Con efectos secundarios

Son expresiones que retornan algo pero que, a su vez, tienen algún efecto secundario (o *side effect*) sobre una variable u otro elemento:

```javascript
contador++; // retorna el valor de contador e incrementa en uno
++contador; // incrementa el valor de contador y retorna el valor
mult *= 12; // multiplica mult por 12, asigna dicho valor a mult y retorna el valor en cuestión
```

### Statements

Son instrucciones que indican al intérprete de JS que ejecute una acción específica:

- crear una variable
- ejecutar un bloque de código n veces
- ejecutar un bloque de código o no, según sea una condición
- declarar una función
- etc.

Las podemos clasificar como sigue:

#### Declaration statements

Indican al intérprete que declare variables o funciones, mediante `function` y/o `var`:

```javascript
var test;
var david;

function resta(a, b) {
    // bloque de código;
};
```

##### Function expressions vs function declarations

Cuando declaramos una función, el intérprete puede interpretarla como una statement o como una expresión, dependiendo del contexto:

```javascript
// function declaration
function suma(a, b) {
    // bloque de código;
};

// function expression
var multi = function(a, b) {
    // bloque de código
};

array.map(function() {
    // bloque de código
});

// IIFE
(function() {
    console.log("IIFE"·);
})();
```

#### Conditional statements

Sirven para controlar el flujo de ejecución del código según se cumpla o no alguna condición:

```javascript
if (condicion1) {
    // bloque de código
} else if (condicion2) {
    // bloque de código
} else {
    // bloque de código
};
```

#### Bucles y saltos

También controlan el flujo de ejecución del código, pero hacen que un bloque se ejecute n veces o que la ejecución salte a otro contexto:

```javascript
// bucles
while (condicion) {
    // bloque de código mientras while (true)
};

for (var i = 1; i < 10; i++) {
    // bloque de código que se repite i veces;
};

// saltos
function() {
    // bloque de código
    return; // al llegar acá sale de la ejecución y retorna un valor;
    // bloque de código
};

for (var i = 1; i < 10; i++) {
    // bloque de código que se repite i veces;
    continue; // salta a la siguiente iteración del bucle;
    // desde acá no se ejecuta;
};
```

#### Expression statements

Donde sea que JS espere un statemente, se puede escribir una expression (aunque lo contrario no es cierto):

```javascript
var a = (b = 1); // como (b = 1) es una expresión de asignación y no un statement, esto es un código válido

var a = var b; // esto arroja un error, ya que no se puede usar un statement en lugar de una expresión

console.log(var a); // otro error: solo se pueden pasar expresiones como argumentos de funciones
```
