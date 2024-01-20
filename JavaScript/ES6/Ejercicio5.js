//!---------------------------------------------------------------------------------------------------------------
//?--5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//?--con los valores que sean mayor que 18
//!---------------------------------------------------------------------------------------------------------------

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newArray = ages.filter((ages) => ages > 18);

console.log(newArray);

//!---------------------------------------------------------------------------------------------------------------
//?--5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
//!---------------------------------------------------------------------------------------------------------------

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numerosPares = ages1.filter((ages1) => ages1 % 2 === 0);

console.log(numerosPares);

//!---------------------------------------------------------------------------------------------------------------
//?--5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//?--con los streamers que tengan el gameMorePlayed = 'League of Legends'.
//!---------------------------------------------------------------------------------------------------------------

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lol = streamers.filter(
  (streamers) => streamers.gameMorePlayed === "League of Legends"
);

console.log(lol);

//!---------------------------------------------------------------------------------------------------------------
//?--5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//?--con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
//?--usar la funcion .includes() para la comprobación.
//!---------------------------------------------------------------------------------------------------------------

const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const stramersName = streamers1.find((streamers1) => {
  if (streamers1.name.includes("u")) {
    return streamers1.name;
  }
});

console.log(stramersName);

//!---------------------------------------------------------------------------------------------------------------
//?--5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
//?--el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la
//?--. comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
//?--.age sea mayor que 35.
//!---------------------------------------------------------------------------------------------------------------

const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const legends = streamers.filter((streamers2) =>
  streamers2.gameMorePlayed.includes("Legends")
);

const streamersAños = legends.map((legends) => {
  if (legends.age > 35) {
    legends.gameMorePlayed = legends.gameMorePlayed.toUpperCase();
  }
  return legends;
});

console.log(streamersAños);

//!--------------------------------------------------------------------------------------------------------------
//?--5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
//?--los streamers que incluyan la palabra introducida en el input. De esta forma, si
//?--introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//?--introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
//!--------------------------------------------------------------------------------------------------------------
