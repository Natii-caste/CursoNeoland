const { upload } = require("../../middleware/files.middleware");
const { createLibros } = require("../controllers/Libros.controllers"); //me traigo el creatLibros de controllers

const LibrosRoutes = require("express").Router(); //requiero Express para poder hacer la ruta

LibrosRoutes.post("/create", upload.single("image"), createLibros); //creo la ruta de crear estos libros con post

module.exports = LibrosRoutes; //exporto el objeto
