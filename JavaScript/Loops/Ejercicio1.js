//!------------------------------------------------------------------------------------------------------------------
//?-Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
//?-Usa la función .includes de javascript.
//!------------------------------------------------------------------------------------------------------------------

/*const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++)
  if (products[i].includes("Camiseta")) {
    console.log(products[i]);
  }*/

//!--------------------------------------------------------------------------------------------------
//?-Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y
//?-añade la propiedad ***isApproved*** a true o false en consecuencia.
//?-Una vez lo tengas compruébalo con un ***console.log***.
//?-( **Mirar abajo en pistas** ).
//?-Puedes usar este array para probar tu función:
//!-----------------------------------------------------------------------------------------------------------------------

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

/*const modificarAlums = (array) => {
  const arrayCopy = [...array];
  arrayCopy.forEach((alumn) => {
    let contador = 0;
    for (let clave in alumn) {
      if (alumn[clave] === true) {
        contador++;
      }
    }
    if (contador >= 2) {
      arrayCopy.push({ ...alumn, isApproved: true });
    } else {
      arrayCopy.push({ ...alumn, isApproved: false });
    }
  });
  return arrayCopy;
};
const result = modificarAlums(alumns);
console.log(result);
*/

//!-------------------------------------------------------------------------------------------------------------
//?--Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
//?--Puedes usar este array:
//!-------------------------------------------------------------------------------------------------------------

/*const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (let valores of placesToTravel) {
  console.log(valores);
}*/

//!---------------------------------------------------------------------------------------------------------------
//?--Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
//!---------------------------------------------------------------------------------------------------------------

/*const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (let datos in alien) {
  console.log(alien[datos]);
}*/

//!--------------------------------------------------------------------------------------------------------------
//?-Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
//?- Imprime en un console log el array. Puedes usar este array:
//!---------------------------------------------------------------------------------------------------------------

/*const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
const placeOkey = [];
for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id != 11 && placesToTravel[i].id != 40) {
    placeOkey.push(placesToTravel[i]);
  }
}

console.log(placeOkey);*/

//!--------------------------------------------------------------------------------------------------------------
//?--Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
//?--Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:
//!--------------------------------------------------------------------------------------------------------------

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const arrayNuevo = [];
for (let claves of toys) {
  if (!claves.name.includes("gato")) {
    arrayNuevo.push(claves);
  }
}

console.log(arrayNuevo);
