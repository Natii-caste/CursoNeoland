//!----------------------------------------------------------------------------------------
//?--1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//?--evento click que ejecute un console log con la información del evento del click
//!---------------------------------------------------------------------------------------

const boton = document.querySelector("#btnToClick");

boton.addEventListener("click", (e) => {
  console.log(e);
});

//!----------------------------------------------------------------------------------------
//?--1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
//!----------------------------------------------------------------------------------------

btnToClick.focus();

//!---------------------------------------------------------------------------------------
//?--1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
//!---------------------------------------------------------------------------------------

document.getElementById("input").addEventListener("click", (e) => {
  console.log(e);
});
