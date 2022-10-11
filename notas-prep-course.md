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
  - [JavaScript I](#javascript-i)
    - [Variables](#variables)
    - [console.log()](#consolelog)
    - [Tipos de datos](#tipos-de-datos)
      - [string](#string)
      - [numbers](#numbers)
      - [boolean](#boolean)
    - [Operadores](#operadores)
      - [Precedencia de operadores y asociatividad](#precedencia-de-operadores-y-asociatividad)
    - [Objetos globales y métodos](#objetos-globales-y-métodos)
      - [Math](#math)
      - [String](#string-1)
    - [Introducción a las funciones](#introducción-a-las-funciones)
      - [Anatomía de una función](#anatomía-de-una-función)
      - [Argumentos](#argumentos)
      - [Declaración return y scope](#declaración-return-y-scope)
    - [Control de flujo y operadores de comparación](#control-de-flujo-y-operadores-de-comparación)
  - [JavaScript II](#javascript-ii)
    - [undefined y null](#undefined-y-null)
    - [Veracidad](#veracidad)
    - [Operadores de comparación (cont.)](#operadores-de-comparación-cont)
    - [Flujos de control (cont.)](#flujos-de-control-cont)
    - [Operadores lógicos](#operadores-lógicos)
      - [Operador `&&`](#operador-)
      - [Operador `||`](#operador--1)
      - [Operador `!`](#operador--2)
      - [Notas sobre operadores lógicos](#notas-sobre-operadores-lógicos)
    - [Bucles `for`](#bucles-for)
      - [El operador `++`](#el-operador-)
      - [Bucles infinitos](#bucles-infinitos)
    - [El objeto `arguments`](#el-objeto-arguments)
  - [JavaScript III](#javascript-iii)
    - [Introducción a los arrays](#introducción-a-los-arrays)
      - [`.length`](#length)
      - [Acceso a elementos en un array](#acceso-a-elementos-en-un-array)
      - [Asignación de elementos a un array](#asignación-de-elementos-a-un-array)
      - [`.push()` y `.pop()`](#push-y-pop)
      - [`.unshift()` y `.shift()`](#unshift-y-shift)
      - [Notas sobre matrices](#notas-sobre-matrices)
    - [Uso de bucles `for` en arrays](#uso-de-bucles-for-en-arrays)
  - [JavaScript IV](#javascript-iv)
    - [Objetos](#objetos)
      - [Introducción a los objetos](#introducción-a-los-objetos)
        - [Pares *key:value* (clave:valor)](#pares-keyvalue-clavevalor)
        - [Acceder a los valores de un objeto](#acceder-a-los-valores-de-un-objeto)
        - [Asignación de valores a un objeto](#asignación-de-valores-a-un-objeto)
        - [Eliminar valores de un objeto](#eliminar-valores-de-un-objeto)
      - [Métodos](#métodos)
      - [Bucle `for...in`](#bucle-forin)
      - [La palabra clave `this`](#la-palabra-clave-this)
        - [`this` y el contexto de ejecución](#this-y-el-contexto-de-ejecución)
      - [Objetos en JavaScript](#objetos-en-javascript)
  - [JavaScript V](#javascript-v)
    - [Funciones constructoras (*constructor functions*)](#funciones-constructoras-constructor-functions)
    - [Clases](#clases)
      - [Declaraciones de clase](#declaraciones-de-clase)
      - [Expresiones de clase](#expresiones-de-clase)
      - [Class e instanciación pseudoclásica](#class-e-instanciación-pseudoclásica)
      - [`this` en las clases](#this-en-las-clases)
    - [Prototype](#prototype)
      - [`Object.create`](#objectcreate)
      - [`Object.assign`](#objectassign)
    - [Herencia clásica](#herencia-clásica)
    - [Herencia en JavaScript](#herencia-en-javascript)
      - [Herencia en funciones constructoras](#herencia-en-funciones-constructoras)
      - [Herencia en ES6](#herencia-en-es6)
  - [JavaScript VI](#javascript-vi)
    - [Funciones callback](#funciones-callback)
    - [Más métodos de Arrays](#más-métodos-de-arrays)
      - [`.forEach()`](#foreach)
      - [`.map()`](#map)
      - [`.reduce()`](#reduce)

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

## JavaScript I

Conceptos básicos:

### Variables

Una variable es una forma de almacenar algo. En JS no necesitamos declarar los tipos de las variables al iniciarlas (es un lenguaje de tipado dinámico). Existen tres formas de declararlas:

- **var**: es la forma principal de declarar variables en ES5 (versión de JS lanzada en 2009)
- **let**: es la forma principal de declarar variables en ES6 (versión de JS lanzada en 2016)
- **const**: es la forma de declarar constantes, es decir, valores que no se pueden cambiar

### console.log()

Es un método que nos permite imprimir por consola los valores que indiquemos dentro de los paréntesis.

### Tipos de datos

Los tipos de datos nos indican qué valores pueden tomar las variables y qué operaciones se pueden realizar con ellas. En JS los tipos de datos más usados son:

#### string

Son bloques de texto (incluyendo caracteres solos como "a", "b", o "c") que se definen entre comillas:

```javascript
var miPerro = "Dexter";
```

#### numbers

Son valores numéricos, los cuales pueden ser negativos y que tienen un rango de +/-9007199254740991. Nota: un número encerrado entre comillas ("101") se convierte en un string:

```javascript
var numPositivo = 202;
var numNegativo = -303;
```

#### boolean

Son variables lógicas, derivadas del álgebra booleana y se usan para determinar que algo es verdadero (`true`) o falso (`false`).

```javascript
var esVerdadero = true;
var esFalso = false;
```

### Operadores

Son símbolos que ya conocemos: `+` (suma), `-` (resta), `*` (multiplicación) y `/` (división), aparte de algunos otros como `**` (potenciación), `%` (módulo), `++` (incremento) y `--` (decremento).

```javascript
var suma = 1 + 2 // 3;
var resta = 2 - 1 // 1;
var multi = 2 * 3 // 6
var division = 4 / 2 // 2;
var potencia = 2**3 // 8;
var modulo = 10 % 3 // 1;
```

**Nota**: esta forma de asignar operaciones (`a + b`) se conoce como "notación `infix`". Otras dos formas son la `prefix (+ a b)` y la `postfix (a b +)`.

#### Precedencia de operadores y asociatividad

La precedencia de operadores es el orden en el cual se ejecutan las operaciones. Existe un [orden de precedencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table) que nos indica cuál operación realizar primero y cuáles a continuación.

Por ejemplo, en `3 + 4 * 5` primero se ejecuta la multiplicación de `4 * 5` y luego, a ese resultado, se le suma `3`, ya que la multiplicación tiene precedencia sobre la suma.

La asociatividad es el orden en que se ejecutan los operadores cuando tienen la misma precedencia, la cual puede ser de derecha a izquierda o izquierda a derecha.

Por ejemplo:

```javascript
var a = 1, b = 2, c = 3;
a = b = c;
console.log(a, b, c);
```

La salida de `console.log` será `3`, ya que el operador `=` tiene asociatividad de derecha a izquierda, por lo tanto, primero asigna el valor original de `c` a `b` (`3`) y luego lo vuelve a asignar a la variable `a`.

### Objetos globales y métodos

En JavaScript, los objetos globales, también conocidos como objetos incorporados o integrados, son objetos que proporcionan una serie de métodos que podemos usar para extender las capacidades del lenguaje.

#### Math

`Math` es un objeto incorporado que incluye propiedades y métodos para trabajar con constantes y funciones matemáticas. Algunos de sus métodos más usados son:

- `Math.pow`: eleva un número a un exponente
- `Math.round`: redondea un número a su entero más cercano
- `Math.floor`: redondea un número a su más cercano *hacia abajo*
- `Math.ceil`: redondea un número a su más cercano *hacia arriba*

Ejemplos:

```javascript
Math.pow(2,3) // 8;
Math.round(6.5) // 7;
Math.round(6.4) // 6;
Math.floor(6.6) // 6;
Math.ceil(6.4) // 7; 
```

#### String

`String` es un objeto útil para almacenar datos que se pueden representar en forma de texto. Entre sus propiedades y métodos más usados están:

- `length`: chequea la longitud de una cadena de texto
- `+` y `+=`: concatena cadenas de texto
- `indexOf()`: chequea la existencia o ubicación de subcadenas de texto y devuelve su índice si encuentra la subcadena o `-1` si no la encuentra
- `substring()`: extrae subcadenas de texto entre un índice inicial y otro final

Ejemplos:

```javascript
var string01 = "Esta es mi cadena";
var string02 = "de texto";
console.log(string01.length); // 17

var string03 = string01 + " " + string02;
console.log(string03 + " " + "nueva"); // Esta es mi cadena de texto nueva

var string04 = "Esta es otra cadena de texto";
console.log(string04.indexOf("texto")); // 23
console.log(string04.indexOf("nueva")); // -1

console.log(string04.substring(1, 2)); // s
console.log(string04.substring(0, 7)); // Esta es
console.log(string04.substring(8)); // otra cadena de texto
```

### Introducción a las funciones

En JS las funciones son tipos particulares de objetos, llamados callable objects (u objetos invocables). Nos permiten almacenar fragmentos de código que hagan una tarea única y dentro de un bloque definido, para luego invocar dicho código cuando se necesite usando un solo comando, en vez de tener que escribir el mismo código varias veces.

Existen tres formas de construir o declarar una función:

```javascript
// declaración de función (function declaration)
function miFuncion() {
    // bloque de código
};

// expresión de función (function expression)
var otraFuncion = function() {
    // bloque de código
};

// función flecha (arrow function)
var otraFuncionMas = () => {
    // bloque de código
};
```

#### Anatomía de una función

Una declaración de función comienza con la palabra clave `function`, luego viene el nombre de la función, el cual debe describir lo que esta hace. Luego vienen los paréntesis, en donde podemos incluir parámetros y/o argumentos y finalmente los corchetes, donde va el bloque de código a ejecutar:

```javascript
function logHola() {
    console.log("Hola!");
}

logHola(); // "Hola!"
```

#### Argumentos

Los argumentos son variables que podemos pasar a una función al momento de invocarla para hacer algo con ellas:

```javascript
function logHola(nombre) {
    console.log("Hola, " + nombre + "!");
}

logHola("David"); // "Hola, David!"
```

Nota: en el ejemplo anterior `nombre` es un parámetro y `"David"` un argumento (aunque en la práctica se suelen usar ambos términos de manera intercambiable).

También podemos pasar otras variables como argumentos:

```javascript
function logHola(nombre) {
    console.log(`Hola, $(nombre)!`);
}
var miNombre = "David";
logHola(miNombre); // "Hola, David!"
```

En el ejemplo anterior, la forma \`Hola, $(nombre)!\` es lo que se conoce como una plantilla literal (*literal template*) o plantilla de cadena (*string template*).

Igualmente, podemos pasar varios argumentos a una función separándolos con comas:

```javascript
function sumarDosNumeros(num1, num2) {
    var suma = num1 + num2;
    return suma;
}

sumarDosNumeros(1, 9); // 10
```

#### Declaración return y scope

La declaración `return` nos devuelve el valor que arroje una función, siempre que lo hayamos especificado (en caso contrario, la función devuelve `undefined`). No podemos acceder a ninguna otra variable o valor dentro de una función, solo al valor que tenga un `return` y esto es lo que se conoce como el "*scope*" o alcance de una función, su contexto de ejecución: las variables declaradas dentro de una función solo tienen alcance dentro de la misma.

Igualmente, cuando el flujo de ejecución de una función llega a una declaración de `return`, detiene dicha ejecución y nos devuelve el valor en cuestión.

```javascript
function multiplicarDosNumeros(num1, num2) {
    var producto = num1 * num2;
    return producto;
}

console.log(multiplicarDosNumeros(2, 10)); // 20
console.log(num1) // undefined
console.log(producto) // undefined
```

También podemos declarar variables que llamen a funciones y nos devuelvan el valor de estas:

```javascript
function dividirDosNumeros(num1, num2) {
    var cociente = num1 * num2;
    return cociente;
}

var division = multiplicarDosNumeros(10, 2);
console.log(division) // 5
```

### Control de flujo y operadores de comparación

El control de flujo es una forma que tiene nuestra función de verificar si algo es cierto (`true`) o falso (`falso`) y avanzar o no, dependiendo de la condición, mediante una declaración `if`:

```javascript
function esMayorDeEdad(edad) {
    if (edad > 18) {
        return true;
    }
    return false;
}

esMayorDeEdad(17); // false
esMayorDeEdad(19); // true
```

La función anterior verifica si la condición `(edad > 18)` es cierta, en cuyo caso se detiene y devuelve `true`. De no ser así, devuelve `false`.

Los operadores de comparación son:

- `<`
- `<=`
- `>`
- `>=`
- `==`
- `===`
- `!=`
- `!==`

## JavaScript II

### undefined y null

`undefined` es una variable a la cual no se le ha asignado un valor, es decir, es indefinida. Los métodos y declaraciones también retornan `undefined` si la variable evaluada no tiene un valor asignado. Las funciones también retornan `undefined` si no tienen un valor que devolver.

Por su parte, `null` representa la ausencia intencional de un valor, indica que una variable no apunta a ningún objeto. Se puede decir que `undefined` viene establecido por JS, mientras que `null` lo define el desarrollador.

Ejemplos:

```javascript
console.log(estaVariableNoExiste); // undefined

var numeroTlf = "55-5555-12-34";
numeroTlf = null;
console.log(numeroTlf); // null
```

### Veracidad

Cuando se usa una declaración que espera un valor booleano, `true` o `false`, pero la expresión dada no es un valor tal, JS realiza una "coerción de tipo" para transformar dicho valor a un booleano. Estos valores son llamados "*truthy*" y "*falsey*". Cada tipo de dato tiene una veracidad *truthy* o *falsey*.

- Datos *truthy* o que son forzados a `true`:
  - `true`
  - `1`
  - `" "`
  - `[]` (array)
  - `{}` (objeto)
  - `function(){}`
- Datos *falsey* o que son forzados a `false`:
  - `false`
  - `0`
  - `undefined`
  - `null`
  - `""` (cadena vacía)

### Operadores de comparación (cont.)

Los operadores de comparación tienen la misma funcionalidad que sus equivalentes matemáticos y así nos sirven para evaluar o comparador dos expresiones:

```javascript
1 > 2; // false
3 < 5; // true
8 >= 8; // true
21 <= 13 // false
```

El operador de igualdad, `==`, sirve para comparar si dos operandos son iguales o no y retorna un resultado booleano. Mientras que el operador de igualdad estricta, `===`, sirve para comparar valores y tipos a la vez, igualmente retornando un booleano. Es mejor práctica usar la igualdad estricta ya que nos permite hacer comparaciones más completas.

```javascript
1 == 1; // true
1 == "1"; // true
1 === 1; // true
1 === "1"; // false
"perro" == "perro"; // true
"perro" === "perro"; // true
"Perro" == "perro"; // false
"Perro" === "perro"; // false
```

Por su parte, el operador de desigualdad, `!=`, nos permite comparar si dos operandos son desiguales o no, retornando un resultado booleano. De forma análoga al caso de la igualdad, también tenemos la desigualdad estricta, `!==`, que nos permite verificar desigualdad a nivel de valores y tipos.

```javascript
1 !== 1; // false
1 !== "1"; // true
"perro" !== "perro"; // false
"Perro" !== "perro"; // true
```

### Flujos de control (cont.)

En la sección anterior describimos el flujo de control de la declaración `if`, pero solo para el caso más sencillo, cuando no hay necesidad de bifurcar la condición. Para este último caso, contamos con la declaración `if...else`: si la condición especificada es "truthy", se ejecuta un código determinado, y si es "falsey", se ejecuta otro código incluido en una cláusula `else`:

```javascript
if (false) {
    console.log("Este código no se ejecutará");
} else if (false) {
    console.log("Este código tampoco se ejecutará");
} else {
    console.log("Este código se ejecutará");
}
```

### Operadores lógicos

Los operadores lógicos nos permiten hacer evaluaciones y operaciones booleanas tales como la conjunción (∧), la disyunción (∨) y la negación (¬) lógicas.

#### Operador `&&`

Este es el operador que corresponde a la conjunción lógica (Y / AND). Evalúa dos expresiones y devuelve `true` si y solo si ambas son `true`:

```javascript
if (100 > 10 && 10 === 10) {
    console.log("Ambas declaraciones son ciertas: el código se ejecutará");
} 

if (10 === 9 && 10 > 9) {
    console.log("Una de las declaraciones es falsa: el código no se ejecutará");
}
```

#### Operador `||`

Este es el operador que corresponde a la disyunción lógica (O / OR). Evalúa dos expresiones y devuelve `true` si alguna (o ambas) de las dos es `true`:

```javascript
if (100 > 10 || 10 === 10) {
    console.log("Ambas declaraciones son ciertas: el código se ejecutará");
}

if (10 === 9 && 10 > 9) {
    console.log("Una de las declaraciones es cierta: el código se ejecutará");
}

if (10 === 9 && 1 > 9) {
    console.log("Ambas declaraciones son falsas: el código no se ejecutará");
}
```

#### Operador `!`

Este es el operador que corresponde a la negación lógica (NO / NOT). Evalúa una expresión y devuelve el valor booleano opuesto:

```javascript
if (!false) {
    console.log("El ! devolverá true porque es lo contrario de false: el código se ejecutará");
}

if (!(1 === 1)) {
    console.log("1 es igual a 1, lo cual devuelve true, pero el ! devuelve lo contrario, false: el código no se ejecutará");
}
```

#### Notas sobre operadores lógicos

- Las expresiones se evalúan en orden:
  - En una declaración `&&`, si la primera expresión es `false` la segunda no se evaluará porque ambas tienen que ser `true`.
  - En una declaración `||`, si la primera expresión es `true` la segunda no se evaluará porque solo una necesita ser `true`.
- Todas las expresiones que estén dentro de paréntesis se evalúan primero. Si usamos un operador `!` seguido de una expresión en paréntesis, el mismo devolverá lo opuesto de lo que se evalúe dentro del paréntesis.

### Bucles `for`

La declaración `for` crea un bucle que consiste en tres expresiones opcionales, encerradas entre paréntesis y separadas por puntos y comas, seguidas de una declaración que se ejecuta dentro del bucle. Estas tres expresiones opcionales son: una declaración de variable (`let i = 0`) sobre la cual se repetirá el bucle, luego una expresión condicional (`i < 10`) y finalmente un incremento de la variable declarada (`i++`). El bucle se repite hasta que la expresión condicional se evalúe a `false`. Ejemplo:

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i); // se imprime el valor de i por consola 10 veces, de 0 a 9
}
```

#### El operador `++`

A `++` se le conoce como el operador de incremento y aumenta su operando (le suma uno) y retorna el valor antes o después del incremento, dependiendo de donde esté ubicado el operador (`i++` o `++i`).

#### Bucles infinitos

Si un bucle no tiene una forma válida de finalizar, entra en lo que se conoce como un bucle infinito, una condición mediante la cual el bucle se repite una y otra vez, sin finalizar, lo cual puede consumir toda la memoria de una computadora. En el siguiente bucle `for` la condición siempre es `true` (`ì` siempre será mayor que 0), por lo que el bucle nunca termina:

```javascript
for (let i = 0; i >= 0; i++) {
    console.log(i);
}
```

### El objeto `arguments`

Este es un objeto parecido a un `Array`, accesible dentro de las funciones y que contiene los valores de los argumentos pasados a dicha función.

```javascript
function func(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
func(1,2,3);
// 1
// 2
// 3
```

La propiedad `.length` permite saber cuántos parámetros puede recibir una función:

```javascript
function func(a, b, c) {
    console.log(arguments.length);
}
// 3
```

## JavaScript III

### Introducción a los arrays

Los arrays (también llamados en español arreglos o matrices) son como contenedores para almacenar colecciones de datos. Su declaración es sencilla, simplemente se asigna un nombre de variable y se declaran los datos dentro de un par de corchetes, `[` y `]`. Incluso se pueden declarar como arrays vacíos, si no se incluyen datos dentro de los corchetes.

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];
var arrayVacio = [];
```

#### `.length`

La propiedad `.length` nos permite acceder a la longitud de un array, funcionando igual que como la misma propiedad de las strings.

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];
console.log(arrayDeEstudiantes.length); // 4
```

#### Acceso a elementos en un array

Podemos acceder a los elementos de un array mediante su índice, el cual representa la posición de cada elemento dentro del arreglo y siempre contando a partir de 0. Esto quiere decir que el primer elemento de un array siempre es el `[0]`, el segundo el `[1]`, el tercero el `[2]` y así sucesivamente.

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];
console.log(arrayDeEstudiantes[0]); // "Ana"
console.log(arrayDeEstudiantes[3]); // "David"
console.log(arrayDeEstudiantes[4]); // undefined
```

Podemos acceder dinámicamente al último elemento de un array, si no sabemos su longitud, mediante la propiedad `.length`. Sin embargo, como `.length` nos devuelve el número de elementos del arreglo y estos comienzan desde 0, debemos restarle uno al tamaño del array para acceder correctamente al último elemento:

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];
console.log(arrayDeEstudiantes[arrayDeEstudiantes.length - 1]); // "David"
```

#### Asignación de elementos a un array

Podemos asignar y/o modificar elementos de un array de forma directa, indicando el índice y el nuevo valor deseado:

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];
arrayDeEstudiantes[0] = "Aura";
arrayDeEstudiantes[4] = "Elena";
console.log(arrayDeEstudiantes); // Array(5) [ "Aura", "Bautista", "Carla", "David", "Elena" ]
```

#### `.push()` y `.pop()`

El método `.push()` permite agregar un nuevo elemento al final del array, incrementando así su longitud en 1. Este método devuelve la nueva longitud del array luego del "*push*":

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];
console.log(arrayDeEstudiantes.push("Elena")); // 5
console.log(arrayDeEstudiantes); // Array(5) [ "Ana", "Bautista", "Carla", "David", "Elena" ]
```

Por su parte, el método `.pop()` elimina el último elemento del array, disminuyendo su longitud en 1. Este método devuelve el elemento eliminado o "*popped*":

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];
console.log(arrayDeEstudiantes.pop()); // "David"
console.log(arrayDeEstudiantes); // Array(3) [ "Ana", "Bautista", "Carla" ]
```

#### `.unshift()` y `.shift()`

Estos dos métodos son equivalentes a `.push()` y `.pop()` pero para el primer elemento del array. Así, `.unshift()` colocará un nuevo elemento al inicio del array y devolverá la nueva longitud del mismo:

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];
console.log(arrayDeEstudiantes.unshift("Zacarías")); // 5
console.log(arrayDeEstudiantes); // Array(5) [ "Zacarías", "Ana", "Bautista", "Carla", "David" ]
```

Por su parte, `.shift()` elimina el primer elemento del array y devuelve el mismo:

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];
console.log(arrayDeEstudiantes.shift()); // "Ana"
console.log(arrayDeEstudiantes); // Array(3) [ "Bautista", "Carla", "David" ]
```

#### Notas sobre matrices

Al igual que JS, que no es un lenguaje fuertemente tipado, los arrays en dicho lenguaje tampoco necesitan contener el mismo tipo de datos:

```javascript
var arrayMixto = [1, "David", 3.1415, function(){}, [1,2,3], null, undefined];
```

### Uso de bucles `for` en arrays

Podemos utilizar bucles `for` para iterar sobre los elementos de un array, mediante la propiedad `.length` como condición de parada del bucle:

```javascript
var arrayDeEstudiantes = ["Ana", "Bautista", "Carla", "David"];

for (let i = 0;  i < arrayDeEstudiantes.length; i++) {
    console.log(arrayDeEstudiantes[i]);
}
// "Ana"
// "Bautista" 
// "Carla"
// "David"
```

## JavaScript IV

### Objetos

#### Introducción a los objetos

Los objetos son contenedores de datos, al igual que los arrays, pero, a mientros estos últimos contienen múltiples elementos relacionados unos con otros, los objetos contienen información sobre un solo elemento. Se declaran usando llaves: `const nuevoObjeto = {}`.

##### Pares *key:value* (clave:valor)

Los elementos contenidos en un objeto se agrupan en los llamados pares *key:value* o clave:valor. La clave o key es el identificador, mientras que el valor o value es, como indica su nombre, el valor que queremos asignar a la clave. Los objetos pueden contener muchos pares *key:value*, los cuales se separan por comas y se suelen escribir en líneas separadas. Cada clave tiene que ser única dentro de un objeto, más no sus respectivos valores, es decir, varias claves pueden tener el mismo valor, más no lo contrario. Los valores pueden ser cualquier tipo de dato válido en JS: cadenas, números, booleanos, arrays, funciones o, incluso, otros objetos:

```javascript
const usuario = {
    nombreUsuario: 'juan.perez',
    password: 'loremipsum;123',
    leGustaJavaScript: true,
    numeroFavorito: 42
};
```

##### Acceder a los valores de un objeto

Existen dos formas de acceder a los valores de un objeto: mediante la notación de puntos o mediante corchetes. Con la notación de puntos escribimos la clave y el valor unidos por un punto:

```javascript
usuario.nombreUsuario // 'juan.perez'
usuario.password // ´loremipsum;123´
```

Mediante la notación de corchetes, escribimos la clave seguida del valor encerrado entre corchetes y entre comillas:

```javascript
usuario['nombreUsuario'] // 'juan.perez'
usuario['password'] // ´loremipsum;123´
```

Esta última notación también se suele usar con variables:

```javascript
const cadenaPassword = 'password';
usuario[cadenaPassword] // ´loremipsum;123´
```

##### Asignación de valores a un objeto

Los valores se asignan a un objeto de la misma manera como se acceden, es decir, con puntos o con corchetes:

```javascript
const nuevoUsuario = {
    esNuevo : true,
};

const gustaJS = 'leGustaJavaScript';

nuevoUsuario.nombreUsuario = 'john.doe';
nuevoUsuario['password'] = '12345';
nuevoUsuario[gustaJS] = true;
```

##### Eliminar valores de un objeto

Para eliminar un valor de un objeto usamos la palabra clave `delete`:

```javascript
const nuevoObjeto = {
    eliminarEstaPropiedad: true
};

delete nuevoObjeto.eliminarEstaPropiedad;
```

#### Métodos

Las funciones almacenadas dentro de objetos se llaman métodos. En estos casos las claves son el nombre de la función y su valor es la función en sí. Estos métodos se invocan con notación de puntos:

```javascript
const nuevoObjeto = {
    decirHola: function() {
        console.log("Hola a todo el mundo!");
    }
};

nuevoObjeto.decirHola(); // "Hola a todo el mundo!"
```

#### Bucle `for...in`

El bucle `for...in` sirve para iterar o recorrer los pares *key:value* de un objeto. Su declaración tiene la forma `for (variable in objeto) {declaración}`, en donde `variable` recibe una propiedad del objeto en cada iteración, `objeto` es el objeto en cuestión sobre el cual vamos a iterar y la `declaración` es lo que se va a ejecutar en cada iteración:

```javascript
const usuario = {
    nombreUsuario: 'juan.perez',
    password: 'loremipsum;123',
    amaJavaScript: true,
    numeroFavorito: 42
};

for (let clave in usuario) {
    console.log(clave);
    console.log(usuario[clave]);
};

// username
// juan.perez
// password
// loremipsum;123
// amaJavaScript
// true
// numeroFavorito
// 42
```

#### La palabra clave `this`

Cuando se usa dentro de un objeto, la palabra clave `this` nos permite acceder a claves de ese mismo objeto. Cuando invocamos a una función como método de un objeto, su `this` se refiere al objeto del cual invocamos dicho método:

```javascript
const usuario = {
    nombreUsuario: 'juan.perez',
    password: 'loremipsum;123',
    amaJavaScript: true,
    numeroFavorito: 42,
    decirHola: function() {
        console.log(this.nombreUsuario + ' manda saludos!');
    }
};

usuario.decirHola(); // 'juan.perez manda saludos!'
```

##### `this` y el contexto de ejecución

- **Contexto global**: cuando ejecutamos código fuera de una función decimos que estamos dentro del contexto global (o el objeto `global`). En el caso del navegador, hace referencia al objeto `window`:

```javascript
console.log(this === window);
true

this.a = 37;

console.log(window.a);
37
```

- **Contexto de función**: cuando ejecutamos código dentro de una función, el valor de `this` dependerá de cómo invoquemos dicha función.

```javascript
function f1() {
    return this;
}

f1() === window; // la función es invocada por el objeto global, por lo tanto hace referencia a window
true

window.f1() === window;
true
```

En el modo [`strict`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode) el ejemplo anterior devuelve `undefined` ya que este modo no permite asumir que `this` es el objeto `global`.

- **Como método de un objeto**: cuando ejecutamos código dentro de una función que a su vez es método de un objeto, `this` hace referencia al objeto sobre el cual se llamó dicho método.

```javascript
var o = {
    prop: 37,
    f: function() {
        return this.prop;
    }
};

console.log(o.f());
37 // this hace referencia a 'o'
```

En el siguiente ejemplo definimos la función fuera del objeto, para luego "agregársela" como método, en cuyo caso `this` seguirá haciendo referencia al objeto:

```javascript
var o = { prop: 37 };

function loguea() {
    return this.prop;
}

o.f = loguea; // agregamos la función como método al objeto 'o'

console.log(o.f());
37 // el resultado es el mismo
```

Em el siguiente ejemplo, el primer `this` hace referencia a la variable `obj`, pero en la función `cambia()` estamos haciendo referencia al objeto global, ya no al `this` del primer objeto:

```javascript
var obj = {
    nombre: "objeto",
    log: function() {
        this.nombre = "Cambiado"; // 'this' hace referencia a 'obj'
        console.log(this); // "Cambiado"
        
        var cambia = function(str) {
            this.nombre = str;
        };
        
        cambia("Holaaa!!!");
        console.log(this); // "Cambiado"
    }
};
```

Una forma de resolver esto, cuando no sabemos de antemano qué valor va a tomar `this`, es guardando la referencia al objeto:

```javascript
var obj = {
    nombre: "objeto",
    log: function() {
        this.nombre = "Cambiado"; // 'this' hace referencia a 'obj'
        console.log(this) // obj

        var that = this; // guardamos la referencia a this

        var cambia = function(str) {
            that.nombre = str; // usamos la referencia dentro de la funcion
        };

        cambia("Holaaa!!!");
        console.log(this);
    }
};
```

#### Objetos en JavaScript

Todo en JS es un objeto: arrays, strings, funciones, el contexto global o `window`. Todos estos elementos son objetos con métodos y propiedades especiales.

## JavaScript V

### Funciones constructoras (*constructor functions*)

Las funciones constructoras son el equivalente a las clases en muchos otros lenguajes de programación. También se les suele llamar tipos de referencia (reference types), clases, tipos de datos (data types) o simplemente constructores. Son un constructo que nos permite especificar propiedades y comportamientos (funciones) para luego crear múltiples objetos con dichas propiedades y comportamientos. Una analogía común es decir que las clases son como planos y los objetos son como las casas que se construyen a partir de dichos planos. Así como se pueden crear múltiples casas a partir de un solo plano, se pueden crear múltiples objetos a partir de una misma clase.

Ejemplo de función constructora:

```javascript
function Persona(nombre, cargo) {
    this.nombre = nombre;
    this.cargo = cargo;
}
```

Es una convención común nombrar a las funciones constructoras con mayúscula inicial, para que así se sepa que se debe invocar como tal.

Las funciones constructoras se invocan usando la keyword `new`:

```javascript
const david = new Persona("David Martinez", "Editor de metadatos");
const patricia = new Persona("Patricia Pérez", "Instructora");
```

Al invocar una función constructora con la keyword `new`, `this` se refiere al objeto que se está construyendo.

### Clases

Las clases en JS son especies de plantillas para crear objetos. Al igual que las funciones constructoras, las clases encapsulan los datos junto con código para trabajar con dichos datos. Y, también de la misma forma que las funciones constructoras, las clases nos sirven para crear muchos objetos que compartan algunas de las mismas características y métodos. La principal diferencia entre las clases y las funciones constructoras es la sintaxis de ambos constructos.

Las clases se pueden entender como "funciones especiales" y su sintaxis tiene dos componentes: declaraciones de clase y expresiones de clase.

#### Declaraciones de clase

Para declarar una clase, se usa la keyword `class` con el nombre que se le dará a la clase y, como convención, estos nombres suelen ir con máyuscula inicial:

```javascript
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}
```

#### Expresiones de clase

Las expresiones de clase pueden ser nombradas o anónimas. El nombre dado a una expresión de clase nombrada es local dentro de la clase, pero se puede acceder mediante la propiedad `name`.

```javascript
// anonima
let Rectangulo = class {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
};
console.log(Rectangulo.name); // "Rectangulo"

// nombrada
Rectangulo = class Rectangulo2 {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
};
console.log(Rectangulo.name); // "Rectangulo2"
```

#### Class e instanciación pseudoclásica

La instanciación pseudoclásica es uno de varios patrones de instanciación de objetos a partir de clases en JS. La misma tiene como propósito reducir el volumen de tipeo requerido para crear un objeto, lo que significa que se logra una reducción significativa del código escrito.

Mediante la instanciación pseudoclásica, JS hace todo lo siguiente tras bastidores:

- Crea un nuevo objeto
- Hace *binding* del `this` a ese nuevo objeto
- Establece la propiedad del prototipo interno (`__proto__`) del nuevo objeto para que sea el prototipo de la función constructora
- Al final de la función, si no se especifica un retorno, entonces retorna `this` (el nuevo objeto)

```javascript
// object constructor function
function Gato(nombre) {
    // se crea un objeto, `this`
    this.nombre = nombre;
    this.maullar = function() {
        return "Mi nombre es " + this.nombre + "... ¡miau!";
    };
    // Devuelve el objeto `this`
}
const sam = new Gato("Sam");
const kitty = new Gato("Kitty");
console.log(sam.maullar()); // "Mi nombre es Sam... ¡miau!"
console.log(kitty.maullar()); // "Mi nombre es Kitty... ¡miau!"
```

#### `this` en las clases

Si no estamos seguros de a qué se refiere el `this` en una clase, debemos fijarnos en donde se llama el método y el objeto a la izquierda del punto. Ese es el objeto al que se refiere `this`.

### Prototype

Toda función en JS tiene una propiedad llamada `protoype`, la cual contiene un objeto con una propiedad `constructor` que apunta de vuelta a su función constructora. Los prototipos nos permiten definir un método una sola vez y darle acceso a todos los objetos de una misma clase a dicho método.

En el siguiente ejemplo definimos una clase `Persona` y creamos un prototipo para la función `hola()`:

```javascript
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    Persona.prototype.hola = function() {
        console.log("¡Hola! Mi nombre es " + this.nombre);
    };

};

const david = new Persona("David");
david.hola(); // ¡Hola! Mi nombre es David

const jessi = new Persona("Jessi");
david.hola(); // ¡Hola! Mi nombre es Jessi

```

De forma típica, solo definimos métodos en un prototipo y no propiedades, ya que estas últimas se almacenan en el objeto construido. Los métodos son comportamientos compartidos para que cada objeto instanciado no necesite tener su propio método. Sin embargo, cada objeto suele necesitar su propio conjunto de propiedades.

#### `Object.create`

El método `create` nos permite crear un nuevo objeto a partir de un prototipo especificado:

```javascript
// Creamos un objeto con un objeto vacío como prototipo
var obj = Object.create({});
obj; // Object()

// creamos un objeto a partir un prototipo de Object
var obj = Object.create(Object.prototype);

// esto es lo mismo que crear un objeto vacío literal:
var obj = {};
```

#### `Object.assign`

El método `assign` permite asignar propiedades a un objeto pasado por parámetro:

```javascript
var obj = {};
// no hace falta guardar el resultado porque los objetos se pasan por referencia:
Object.assign(obj, {nombre:"David", apellido:"Martínez"});
obj.nombre; // David
```

### Herencia clásica

En la programación orientada a objetos, el concepto de herencia se refiere a la capacidad de un constructor de heredar propiedades y métodos de otro constructor (p. ej.: un objeto Gato es Mamífero antes que Gato y hereda propiedades tales como nacer, reproducirse y morir). También se define como un mecanismo mediante el cual se basa un objeto o clase en otro objeto (herencia basada en prototipos) o en otra clase (herencia basada en clases).

### Herencia en JavaScript

#### Herencia en funciones constructoras

La herencia en las funciones constructoras de JS es basada en prototipos. De esta forma podemos generar nuestros propios constructores de los cuales heredar propiedades y métodos:

```javascript
function Persona(nombre, apellido, ciudad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
}

Persona.prototype.saludar() = function() {
    console.log("Hola, soy " + this.nombre + " de " + this.ciudad);
}

var david = new Persona("David", "Martínez", "Buenos Aires");

// ahora creamos una nueva clase, Alumno, la cual hereda de Persona, ya que todo Alumno es primeramente una Persona y "anidamos" los constructores mediante call()

function Alumno(nombre, apellido, ciudad, curso) {
    Persona.call(this, nombre, apellido, ciudad); // queremos que las propiedades de Persona queden bajo el objeto que va a devolver Alumno y no un nuevo objeto del constructor Persona
    // las siguientes propiedades son propias de Alumno:
    this.curso = curso;
}

var alberto = new Alumno("Alberto", "García", "Mendoza", "Full Stack Web Dev");

alberto.curso // "Full Stack Web Dev"
alberto.apellido // "García"

// para poder usar los métodos de Persona usamos Object.create():

Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.constructor = Alumno

alberto.saludar() // "Hola, soy Alberto de Buenos Aires"

```

#### Herencia en ES6

En JS y, en particular, en ES6/ES2015, la herencia funciona de la siguiente manera usando el mismo ejemplo anterior:

```javascript
class Persona {
    constructor(nombre, apellido, ciudad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciudad = ciudad;
    }    
    saludar() {
        console.log("Hola, soy " + this.nombre + " de " + this.ciudad);
    }
}

class Alumno extends Persona {
    constructor(nombre, apellido, ciudad, curso) {
        super(nombre, apellido, ciudad);
        this.curso = curso;
    }
}

var alberto = new Alumno("Alberto", "García", "Mendoza", "Full Stack Web Dev");

alberto.saludar(); // "Hola, soy Alberto de Mendoza"
```

## JavaScript VI

### Funciones callback

Una función *"callback"* es una función que se pasa a otra en forma de argumento, para luego ser invocada dentro de la función que la contiene para así completar algún tipo de rutina o acción. Una convención es usar `cb` como argumento para la variable que se usará como callback.

```javascript
function decirHolaAUsuario(usuario) {
    return "Hola " + usuario + "!";
};

function decirAdiosAUsuario(usuario) {
    return "Adiós " + usuario + "!";
};

// en la siguiente función, `cb` llamará a alguna de las dos funciones anteriores, según sea la que se le pase
function crearSaludo(usuario, cb) {
    return cb(usuario);
}

crearSaludo("David", decirHolaAUsuario); // "Hola David!"
crearSaludo("David", decirAdiosAUsuario); // "Adiós David!"
```

### Más métodos de Arrays

#### `.forEach()`

El método `forEach()` ejecuta una función callback que se le provee y lo hace una vez por cada elemento de un array en orden ascendente según los índices del mismo. La función callback puede tomar dos argumentos: el primero es el elemento en sí y el segundo es el índice del elemento (argumento opcional). Es una alternativa a los bucles `for` en los arrays.

```javascript
const autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

autos.forEach(function(elemento, indice) {
    console.log(elemento);
}); 
// Ford
// Chevrolet
// Toyota
// Tesla

// También podemos crear una instancia de otra función para usarla como callback en un forEach():
function mostrarMarcas(elemento) {
    console.log(elemento);
}

autos.forEach(mostrarMarcas); // nos muestra el mismo listado anterior
```

El ejemplo anterior, usando un bucle `for` sería así:

```javascript
const autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

for (var i = 0; i < autos.length; i++) {
    console.log(autos[i]);
};
```

#### `.map()`

El método `.map()` crea un nuevo array con los resultados de haber invocado una función provista sobre cada elemento del array original. Al igual que `.forEach()`, el callback tiene el elemento y el índice de argumentos opcionales.

```javascript
const numeros = [2, 4, 8, 16];

function multiplicarPorDos(elemento) {
    return elemento * 2;
};

const triple = numeros.map(function(elemento) {
    return elemento * 3;
});

const doble = numeros.map(multiplicarPorDos);

console.log(doble); // [4, 8, 16, 32]
console.log(triple); // [6, 12, 24, 48]

```

#### `.reduce()`

El método `reduce()` ejecuta una función callback "reductora", suministrada por el usuario, sobre cada elemento del array y en orden, pasando el valor de retorno del cálculo sobre el elemento precedente. El resultado final de la ejecución de la reductora sobre todos los elementos es un valor único.

La primera vez que se ejecuta la función callback no hay un "valor de retorno del cálculo previo". Pero se puede usar un valor inicial en su lugar, de ser suministrado. De lo contrario, se usa el elemento que esté en el índice 0 del array como el valor inicial y, así, la iteración comienza desde el siguiente elemento (índice 1 en vez de índice 0).

El caso de uso más típico y fácil de entender para `.reduce()` es retornar la suma de todos los elementos de un array:

```javascript
const sumarArray = [1, 2, 3, 4];

const valorInicial = 0;
const sumarConInicial = sumarArray.reduce(function(valorPrevio, valorActual) {
    return valorPrevio + valorActual;
}, valorInicial)

console.log(sumarConInicial); // 10
```

Otro ejemplo útil es el de crear una frase completa a partir de textos en un array, porque podemos usar `.reduce()` sobre cualquier tipo de datos, incluyendo strings:

```javascript
const palabras = ["Hola", "mi", "nombre", "es", "David"];

const frase = palabras.reduce(function(acum, elemento) {
  return acum + " " + elemento;
}, "Frase completa:")

console.log(frase); // Frase completa: Hola mi nombre es David 
```
