//!---------------------------------------------------------------------------------------------------------------------------------------
//?----1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
//!--------------------------------------------------------------------------------------------------------------------------------------

//* const avengers = {
   // heroe1: "Hulk",
    //heroe2: "Spiderman",
   // heroe3: "Black mirror",
//}

 ///* console.log(avengers.heroe1) ---- ESTE ESTA HECHO CON OBJECT

 //const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]

 ///* console.log(avengers[0]) ------ ESTE ESTA HECHO CON ARRAY 


//!-------------------------------------------------------------------------------------------------------------------------------------
//?---1.2 Cambia el primer elemento de avengers a "IRONMAN" const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];-------------
//!----------------------------------------------------------------------------------------------------------------------------------

const avengersArray = ["HULK", "SPIDERMAN", "BLACK PANTHER"]

avengersArray[0] = "IRON MAN"

//*console.log(avengersArray[0], avengersArray[1], avengersArray[2])

//!--------------------------------------------------------------------------------------------------------------------------------
//?--1.3 console numero de elementos en el array usando la propiedad correcta de Array.const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
//!--------------------------------------------------------------------------------------------------------------------------------

//*console.log(avengersArray.length) ----* numero de lementos = longitud 

//!--------------------------------------------------------------------------------------------------------------------------------
//?---1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
//?--const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
//!---------------------------------------------------------------------------------------------------------------------------------

//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]

//rickAndMortyCharacters.push("Morty", "Summer") //* con el push añadimos elementos al array 

//console.log(rickAndMortyCharacters[4])

//!--------------------------------------------------------------------------------------------------------------------------------
//?--1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
//?const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
//!--------------------------------------------------------------------------------------------------------------------------------

//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]
                         
//rickAndMortyCharacters.pop() //con pop() eleminamos el ultimo elemento en este caso "Lapiz Lopez"
 
                             //con shift() eliminariamos el primer elemento en este caso "Rick"

//console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[4])

//!------------------------------------------------------------------------------------------------------------------------------
//?--1.6 Elimina el segundo elemento del array y muestra el array por consola.
//?const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
//!----------------------------------------------------------------------------------------------------------------------------

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.splice(1, 1) // el splice lo usamos para eliminar, el primer numero indica en que posicion- 
                                     //-quiero que empiece a trabajar, y en el segundo cuantas veces quiero que lo haga, en este caso,- 
                                     //-quiero que empiece en el 1 y que solo me borre uno, si quisiera que me borrara dos nombre pondria 2

//console.log(rickAndMortyCharacters) 




