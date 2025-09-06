// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: Deimer Dario Lara Rangel

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.

//Es una estructura de datos que te permite almacenar varios valores dentro de una sola variable, en forma de lista ordenada

/**
 * Escribe tu explicación aquí:
 * Un arreglo es la creacion de listas que van relacionadas a un variable, ejemplo, se crea una variable llamada frutas y dentro de este arreglo se guardaran todas las frutas que deseamos guardar lo que se llamarian elementos. 
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.

//  se utilizan porque permiten almacenar y organizar múltiples valores en una sola estructura en lugar de tener muchas variables sueltas

/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para gestionar colecciones de datos lo que permite su accesibilidad de maneras mas agil a los datos
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
console.log("--- ARREGLO MIXTO ---");

let colore = ["Rojo", "Verde", "Azul", "Naranjado", "Amarillo"];


for (let i = 0; i < colore.length; i++) {
  console.log(colore[i]);
}


// Muestra el arreglo `arregloMixto` en la consola.



// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable. 

// cuando hablamos de un método mutable, nos referimos a un método que modifica directamente el objeto o arreglo sobre el que se aplica.

/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel quepermite modificar directamente los arreglos
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push()]
// Descripción: Agrega elementos al final del arreglo
// Ejemplo:

let numeros = [1, 2];
numeros.push(3, 4);
console.log(numeros)


// Método 2: [pop()]
// Descripción: Eliminal el ultimo elemento
// Ejemplo:

let frutas = ["Manzana", "Pera", "Mango"];
frutas.pop();
console.log(frutas);


// Método 3: [shift()]
// Descripción: Elimina el primer elemento
// Ejemplo:

let colores = ["Rojo", "Verde", "Azul"];
colores.shift();
console.log(colores);


// Método 4: [unshift()]
// Descripción: Agrega elementos al inicio
// Ejemplo:

let letras = ["B", "C"];
letras.unshift("A");
console.log(letras);


// Método 5: [splice()]
// Descripción: Agrega, elimina o reemplaza elementos en cualquier posición
// Ejemplo:

let animales = ["Perro", "Gato", "Conejo"];
animales.splice(1, 1, "Loro"); 
console.log(animales);


// Método 6: [sort()]
// Descripción: Ordena los elementos (alfabéticamente por defecto)
// Ejemplo:

let nombres = ["Luis", "Ana", "Pedro"];
nombres.sort();
console.log(nombres);

// Método 7: [reverse()]
// Descripción: Invierte el orden
// Ejemplo:

let numeros2 = [1, 2, 3];
numeros2.reverse();
console.log(numeros2);

// Método 8: [fill()]
// Descripción: Rellena con un valor todos los elementos o parte del arreglo
// Ejemplo:

let arreglo = [1, 2, 3, 4];
arreglo.fill(0, 1, 3); 
console.log(arreglo);



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.

// Son los que no modifican el arreglo original, sino que devuelven uno nuevo o un valor derivado.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que se puede modificar sin afectar el arreglo principal, son importantes porque me permite trabajar con "una copia" de los arreglos originales, lo que evita efectos secundarios, mejor legibilidad, facil mantenimiento
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [join()]
// Descripción: Convierte el arreglo en un string
// Ejemplo:

let colorex = ["Rojo", "Verde", "Azul"];
let texto = colorex.join(", ");

console.log(colorex);

// Método 2: [concat()]
// Descripción: Une dos o más arreglos en uno nuevo
// Ejemplo:

let a = [1, 2];
let b = [3, 4];
let combinado = a.concat(b);

console.log(combinado); 
console.log(a); 

// Método 3: [slice()]
// Descripción:Extrae una parte del arreglo 
// Ejemplo:

let fruta = ["Manzana", "Pera", "Mango", "Uva"];
let seleccion = fruta.slice(1, 3);

console.log(seleccion); 
console.log(fruta); 


// Método 4: [filter()]
// Descripción: Devuelve un nuevo arreglo con los que cumplen la condición
// Ejemplo:

let edades = [15, 20, 30, 12];
let mayores = edades.filter(e => e >= 18);

console.log(mayores); 
console.log(edades);


// Método 5: [map()]
// Descripción: Crea un nuevo arreglo transformando los elementos
// Ejemplo:

let numero = [1, 2, 3];
let dobles = numero.map(n => n * 2);

console.log(dobles);   
console.log(numero);
