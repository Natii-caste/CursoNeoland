//!----------------------------------------------------------------------------------------------------------------------------------------
//?----Completa la función que tomando dos números como argumento devuelva el más alto.-------------------------------------------------
//!-------------------------------------------------------------------------------------------------------------------------------------

//*function givehighernumber(a, b) {

//*if (a > b) {return a};

//*if (b > a) {return b};

//*};

//*let resultadoNumero = givehighernumber(10,7);
//*console.log("🚀 ~ resulthighernumber:", resultadoNumero)

//!-----------------------------------------------------------------------------------------------------------------------------------
//?-- Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings
//?--tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función:
//!-----------------------------------------------------------------------------------------------------------------------------------

//*const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

//*const nombreLargo = (array) => {

//*let palabraLarga = ""

//*for (let i = 0; i < array.length; i++) {
//*if (array[i].length > palabraLarga.length) {
//*palabraLarga = array[i]
//*}
//*}
//*return palabraLarga

//*}

//*console.log(nombreLargo(avengers))

//!---------------------------------------------------------------------------------------------------------------------------------------------
//?----Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//?Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
//!----------------------------------------------------------------------------------------------------------------------------------------------

//*const numbers = [1, 2, 3, 5, 45, 37, 58];

//*function sumaAll (parametro) {
//*let suma = parametro.reduce((a, b) => a + b, 0)
//*return suma
//*}
//*console.log(sumaAll(numbers))

//!--------------------------------------------------------------------------------------------------------------------------------------------
//?---Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función-----------------------------------
//!--------------------------------------------------------------------------------------------------------------------------------------------

//*const numbers = [12, 21, 38, 5, 45, 37, 6];

//*function promedio (parametro) {

//*let sumaNum = parametro.reduce((a, b) => a + b, 0)

//*let diviNum = sumaNum / numbers.length

//*return diviNum

//*}

//*console.log(promedio(numbers))

//!------------------------------------------------------------------------------------------------------------------------------------------
//?--Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario
//?--cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
//!------------------------------------------------------------------------------------------------------------------------------------------

/*const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(array) {
  let numero = 0;
  let letra = 0;
  for (let i = 0; i < array.length; i++) {
    console.log("array[i]", array[i]);
    console.log("valor de i", i);
    if (typeof array[i] === "number") {
      numero = array[i] + numero;
    } else if (typeof array[i] === "string") {
      letra = array[i].length + letra;
    }
  }
  return numero + letra;
}

let resultado = averageWord(mixedElements);
console.log(resultado);*/

//!---------------------------------------------------------------------------------------------------------------------------------------------
//?-Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
//?-en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array
//?-para probar tu función:
//!---------------------------------------------------------------------------------------------------------------------------------------------

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

/*const newArray = [];

duplicates.forEach((string) => {
  if (!newArray.includes(string)) {
    newArray.push(string);
  }
});

console.log(newArray);

utilizo el "!" para ponerlo en negativo y el includes para ver si me incluye
en el string. El push lo uso para que me meta el string en mi nuevo array*/

//!-------------------------------------------------------------------------------------------------
//?-Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe
//?-dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve
//?-un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para
//?-probar tu función:
//!-------------------------------------------------------------------------------------------------

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

nameFinder.forEach((array) => {
  if (nameFinder.filter(array)) {
  }
});

console.log(nameFinder.includes("Peggy"));
