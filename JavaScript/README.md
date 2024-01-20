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

EJERCICIO 7

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
'Peter',
'Steve',
'Tony',
'Natasha',
'Clint',
'Logan',
'Xabier',
'Bruce',
'Peggy',
'Jessica',
'Marc'
];
function finderName(param) {
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

EJERCICIO 6

Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:

const toys = [
{id: 5, name: 'Buzz MyYear'},
{id: 11, name: 'Action Woman'},
{id: 23, name: 'Barbie Man'},
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]

EJERCICIO 7

Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

const popularToys = [];
const toys = [
{id: 5, name: 'Buzz MyYear', sellCount: 10},
{id: 11, name: 'Action Woman', sellCount: 24},
{id: 23, name: 'Barbie Man', sellCount: 15},
{id: 40, name: 'El gato con Guantes', sellCount: 8},
{id: 40, name: 'El gato felix', sellCount: 35}
]

-----------------------------------------------------------ES6-----------------------------------------------------

EJERCICIO 1

Crea una arrow function que tenga dos parametros a y b y
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros

EJERCICIO 2

2.1 En base al siguiente javascript, crea variables en base a las propiedades
del objeto usando object destructuring e imprimelas por consola. Cuidado,
no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

2.3 En base al siguiente javascript, usa destructuring para crear 2
variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
return {name: 'Bengal Tiger', race: 'Tiger'}
};

2.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

EJERCICIO 3

3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

EJERCICIO 4

4.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().
const users = [
{id: 1, name: 'Abel'},
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'},
{id:4, name: 'Amanda'}
];

4.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.
const users = [
{id: 1, name: 'Abel'},
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'},
{id:4, name: 'Amanda'}
];

4.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.
const cities = [
{isVisited:true, name: 'Tokyo'},
{isVisited:false, name: 'Madagascar'},
{isVisited:true, name: 'Amsterdam'},
{isVisited:false, name: 'Seul'}
];

EJERCICIO 5

5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación.
const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35.

5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>

5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers">Filter</button>
</body>
</html>
