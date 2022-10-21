// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let subArray = [];
  let matriz = [];
  for (let item in objeto) {
    subArray = Array.of(item, objeto[item]);
    matriz.push(subArray);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const stringArray = string.split("");
  const conteo = {};

  for (let letra of stringArray) {
    if (conteo[letra]) {
      conteo[letra]++;
    } else {conteo[letra] = 1};
  }
  return conteo;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arr = Array.from(s); // convertimos el parámetro a un array
  let arrUpper = [];
  let arrSmall = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) { // comparamos cada letra en el array a ver si es mayúscula
      arrUpper.push(arr[i]); // en caso afirmativo, la enviamos a un nuevo array de mayúsculas
    } else {
      arrSmall.push(arr[i]); // en caso contrario, a un nuevo array de minúsculas
    };
  };
  let concatArr = arrUpper.concat(arrSmall); // concatenamos ambos arrays nuevos (primero el de mayusc.)
  return "".concat(...concatArr); // convertimos el nuevo array en string de nuevo usando spread operator
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr = str.split(" ");
  let revArr = [];

  for (let palabra of arr) {
    let revPalabra = palabra.split("").reverse().join("");
    revArr.push(revPalabra);
  }

return revArr.toString().replaceAll(",", " ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numStr = numero.toString();
  var revNumStr = numStr.split("").reverse().join("");

  if (numStr === revNumStr) {
    return "Es capicua"
  } else {
    return "No es capicua"
  };
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let regex = /[abc]/ig; // expresion regular que selecciona todas las ocurrencias de las letras a, b y c
  return cadena.replaceAll(regex, "");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a, b) {
    return a.length - b.length;
  })
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let interseccion = [];
  for (let i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      interseccion.push(arreglo1[i]);
    }
  }
  return interseccion.sort();
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

