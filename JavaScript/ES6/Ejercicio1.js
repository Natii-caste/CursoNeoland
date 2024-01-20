//!-------------------------------------------------------------------------------------------------------------------
//?-Crea una arrow function que tenga dos parametros a y b y
//?-que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
//?-por consola la suma de los dos parametros.
//!-----------------------------------------------------------------------------------------------------------------
//?-----1.1 Ejecuta esta función sin pasar ningún parametro
//!-----------------------------------------------------------------------------------------------------------------

const sumaSinParametros = () => {
  const a = 10;
  const b = 5;
  return a + b;
};

console.log(sumaSinParametros());

//!--------------------------------------------------------------------------------------------------------------
//?-------1.2 Ejecuta esta función pasando un solo parametro
//!--------------------------------------------------------------------------------------------------------------

const sumaUnParametro = (a) => {
  const b = 5;
  return a + b;
};
console.log(sumaUnParametro(10));

//!----------------------------------------------------------------------------------------------------------
//?--1.3 Ejecuta esta función pasando dos parametros
//!------------------------------------------------------------------------------------------------------

const sumaDosParametros = (a, b) => a + b;

console.log(sumaDosParametros(10, 5));
