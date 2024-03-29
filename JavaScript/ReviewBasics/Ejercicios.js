//!--------------------------------------------------------------------------------------------------------------
//?-- 1. Dado el siguiente javascript usa forof para recorrer el array de películas, genera
//?--un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
//?--Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte
//?--de la función .includes()
//!--------------------------------------------------------------------------------------------------------------

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const newArray = []; //creamos un nuevo array

for (let clave of movies) {
  //recorremos las claves del movies

  for (let string of clave.categories) {
    //recorremos las categories de las claves

    if (!newArray.includes(string)) {
      //usamos condicional diciendo que si NO esta incluido string nos lo meta en la nueva array.

      newArray.push(string);
      //si no esta incluido, que lo haga.
    }
  }
}

console.log(newArray);

//!------------------------------------------------------------------------------------------------------------
//?-- 2. Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos
//?--los sonidos favoritos que tienen los usuarios.
//!------------------------------------------------------------------------------------------------------------

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const newArray1 = [];
let mediaFavoriteSounds = 0;

for (let user of users) {
  // ponemos user para que acceda a cada objeto
  const { favoritesSounds } = user;
  //lo desestructuramos para quedarnos solo con el objeto la parte de favoriteSounds
  for (let claves in favoritesSounds) {
    console.log(favoritesSounds[claves]);
    //llamamos a las claves del favoriteSound asi nos quedamos solo con formato y volumen
    newArray1.push(claves); //empujamos esas claves al nuevo array
    mediaFavoriteSounds += favoritesSounds[claves].volume;
    //ponemos nuestro contador para que valla sumando los volumentes
  }
}

const media = mediaFavoriteSounds / newArray1.length;
//hacemos la media que es la suma que hemos acumulado en mediaFavoriteSounds dividido entre la longitud de nuestro array (que es 12)
console.log(media);

//!-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//?--Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios
//?--y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos. Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de
//?--cada vez que ese sonido se repita como favorito en cada usuario.
//?--Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const users1 = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
