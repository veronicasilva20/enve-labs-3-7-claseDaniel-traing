//1)Doblar números:
function dobleNumeros(numeros) {
  return numeros.map((x) => x * 2);
}

let inputNumeros = [1, 2, 3, 4];
let resultado= dobleNumeros(inputNumeros);
console.log(resultado);

//2)Nombre a maúscula:

function mayusculaNombres(nombres1) {
  return nombres1.map((nombres1) => nombres1.toUpperCase());
}

let inputNombres1 = ['Pedro', 'Ana', 'Juan'];
let resultados= mayusculaNombres(inputNombres1);
console.log(resultados);

//3)Cuadrado de números:

function numero2Cuadrado(numero2) {
  return numero2.map((num) => num ** 2);
}

let numero2 = [1, 2, 3, 4];
let resultados1 = numero2Cuadrado(numero2);
console.log(resultados1);

//4)Primera letra de cada palabraas

function obtenerPrimerasLetras(palabras) {
  return palabras.map((palabra) => palabra.charAt(0));
}

let inputPalabras = ['Hola', 'mundo', 'desde', 'JavaScript'];
let resultado3 = obtenerPrimerasLetras(inputPalabras);
console.log(resultado3);


//5)Filtrar números pares:

function obtenerNumerosPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}

let inputNumeros5 = [1, 2, 3, 4, 5, 6];
let resultado4 = obtenerNumerosPares(inputNumeros5);
console.log(resultado4);

//6)Filtar palabras largas:
      
function PalabrasMasDe4Letras(palabras) {
  return palabras.filter((palabra) => palabra.length > 4);
}

let inputPalabrass = ['Hola', 'yo', 'soy', 'JavaScript'];
let  resultado5= PalabrasMasDe4Letras(inputPalabrass);
console.log(resultado5);

//7)Filtrar palabras que empiezan con una letra especifica "m":

function PalabrasComienzanConLetra(palabras, letra) {
  return palabras.filter((palabra) => palabra.charAt(0) === letra);
}

let inputPalabraas = ['manzana', 'banana', 'mango', 'naranja'];
let letra = 'm';
let resultadoo = PalabrasComienzanConLetra(inputPalabraas, letra);
console.log(resultadoo);

//8)Sumar números:

function sumarNumeros(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

let inputNumeeros = [1, 2, 3, 4, 5];
let resultado6 = sumarNumeros(inputNumeeros);
console.log(resultado6);

//9)Concatenar cadenas:

function concatenarPalabras(palabras) {
  return palabras.join(' ');
}

let inputPalabras7 = ['Hola', 'mundo', 'desde', 'JavaScript'];
let resultado7 = concatenarPalabras(inputPalabras7);
console.log(resultado7);

//10)Producto de núḿeros:

function calcularelNumero(array) {
  return array.reduce((total, numero) => total * numero, 1);
}


let numeros = [1, 2, 3, 4];
let resultado8 = calcularelNumero(numeros);
console.log(resultado8)

//11)contar ocurrencias de una letra:

function contarLetras(cadena,letras) {
  return cadena.split(letras).length -1;
  
}
let cadena = "hola mundo desde javascript";
let letras = "o";
let resultadoa = contarLetras(cadena,letras);
console.log(resultadoa);
