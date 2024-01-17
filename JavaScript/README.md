# CursoNeoland

----------------------------------------------------BASICALGORITHMS-----------------------------------------------------------------

EJERCICIO 1

1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
1.2 Crea una variable llamada x, asigna el valor 50 a ella.
1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

EJERCICIO 2

1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};

1.2 Declara 3 variables con los nombres y valores siguientes
firstName = 'Jon';
lastName = 'Snow';
age = 24;
Muestralos por consola de esta forma:
'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
/
1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

EJERCICIO 3

1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

1.2 Divide 10 por 2 y muestra el resultado en un console.

1.3 Muestra mediante un console el resto de dividir 15 por 9.

1.4 Usa el correcto operador de asignación que resultará en o = 15,
teniendo dos variables p = 10 y j = 5.

1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.

EJERCICIO 4

1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.4 Añade 2 elementos al array: "Morty" y "Summer".
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

EJERCICIO 5

En base al código siguiente, muestra los mensajes correctos por consola.

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
console.log('number1 es estrictamente igual a 10')
}

if (/_ COMPLETAR _/) {
console.log("number2 dividido entre number1 es igual a 2");
}

if (/_ COMPLETAR _/) {
console.log("number1 es estrictamente distinto a number2");
}

if (/_ COMPLETAR _/) {
console.log("number3 es distinto number1");
}

if (/_ COMPLETAR _/) {
console.log("number3 por 5 es igual a number1");
}

if (/_ COMPLETAR _/) {
console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (/_ COMPLETAR _/) {
console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

EJERCICIO 6

1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
y cambia el mensaje en la décima vuelta a 'Dormido!'.

---------------------------------------------------FUNCTIONS----------------------------------------------------------------------

EJERCICIO 1

Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
// insert code
}

EJERCICIO 2

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
// insert code
}

EJERCICIO 3

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
// insert code
}

EJERCICIO 4

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
// insert code
}

EJERCICIO 5

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
// insert code
}

EJERCICIO 6

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
'sushi',
'pizza',
'burger',
'potatoe',
'pasta',
'ice-cream',
'pizza',
'chicken',
'onion rings',
'pasta',
'soda'
];
function removeDuplicates(param) {
// insert code
}

---------------------------------------------------LOOPS---------------------------------------------------------------------------------

EJERCICIO 1

Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

EJERCICIO 2

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad **_isApproved_** a true o false en consecuencia. Una vez lo tengas compruébalo con un **_console.log_**.

( **Mirar abajo en pistas** ).

Puedes usar este array para probar tu función:

const alumns = [
{name: 'Pepe Viruela', T1: false, T2: false, T3: true},
{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
{name: 'Juan Miranda', T1: false, T2: true, T3: true},
{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

EJERCICIO 3

Usa un bucle forof para recorrer todos los destinos del array. Imprime en un **_console.log_** sus valores.

Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

EJERCICIO 4

Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
name: 'Wormuck',
race: 'Cucusumusu',
planet: 'Eden',
weight: '259kg'
}

EJERCICIO 5

Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel =
[{id: 5, name: 'Japan'},
{id: 11, name: 'Venecia'},
{id: 23, name: 'Murcia'},
{id: 40, name: 'Santander'},
{id: 44, name: 'Filipinas'},
{id: 59, name: 'Madagascar'}]
