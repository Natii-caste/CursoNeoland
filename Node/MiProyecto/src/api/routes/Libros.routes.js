const { upload } = require("../../middleware/files.middleware");
const {
  createLibros,
  toggleAutores,
  deleteLibros,
  getAll,
  getById,
  getByName,
  update,
} = require("../controllers/Libros.controllers"); //me traigo el creatLibros de controllers

const LibrosRoutes = require("express").Router(); //requiero Express para poder hacer la ruta

LibrosRoutes.patch("/add/:id", toggleAutores); //creo la ruta de toggle.

LibrosRoutes.get("/", getAll);
LibrosRoutes.patch("/:id", upload.single("image"), update);
LibrosRoutes.get("/byName/:name", getByName);
LibrosRoutes.get("/:id", getById);
LibrosRoutes.delete("/:id", deleteLibros);

LibrosRoutes.post("/create", upload.single("image"), createLibros); //creo la ruta de crear estos libros con post

module.exports = LibrosRoutes; //exporto el objeto
