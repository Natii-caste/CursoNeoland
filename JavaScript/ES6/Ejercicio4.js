//!----------------------------------------------------------------------------------------------------------------
//?--4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
//!----------------------------------------------------------------------------------------------------------------

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const soloNombres = users.map((users) => users.name);

console.log(soloNombres);

//!----------------------------------------------------------------------------------------------------------------
//?--4.2 Dado el siguiente array, devuelve una lista que contenga los valores
//?--de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
//!----------------------------------------------------------------------------------------------------------------

const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const soloNombre = users1.map((users1) => {
  if (users1.name.includes("A")) {
    return "Anacleto";
  } else {
    return users1.name;
  }
});

console.log(soloNombre);

//!----------------------------------------------------------------------------------------------------------------
//?--4.3 Dado el siguiente array, devuelve una lista que contenga los valores
//?--de la propiedad .name y añade al valor de .name el string ' (Visitado)'
//?--cuando el valor de la propiedad isVisited = true.
//!----------------------------------------------------------------------------------------------------------------

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitados = cities.map((cities) => {
  if (cities.isVisited === true) {
    return { name: cities.name + " visitado" };
  } else {
    return cities;
  }
});

console.log(visitados);
