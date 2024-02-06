const { upload } = require("../../middleware/files.middleware");
const { createAutores } = require("../controllers/Autores.controllers");

const AutoresRoutes = require("express").Router(); //traigo express para poder hacer la ruta

AutoresRoutes.post("/create", upload.single("image"), createAutores); //creo la ruta de crear estos libros con post

module.exports = AutoresRoutes; //exporto el objeto
