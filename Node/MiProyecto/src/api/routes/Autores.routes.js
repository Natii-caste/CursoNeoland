const { upload } = require("../../middleware/files.middleware");
const {
  getByName,
  createAutores,
  toggleLibros,
  getAll,
  getById,
  update,
  deleteAutores,
} = require("../controllers/Autores.controllers");

const AutoresRoutes = require("express").Router(); //traigo express para poder hacer la ruta

AutoresRoutes.get("/", getAll);
AutoresRoutes.patch("/:id", upload.single("image"), update);
AutoresRoutes.get("/byName/:name", getByName);
AutoresRoutes.get("/:id", getById);
AutoresRoutes.delete("/:id", deleteAutores);
AutoresRoutes.patch("/add/:id", toggleLibros); //creo la ruta de toggle.

AutoresRoutes.post("/create", upload.single("image"), createAutores); //creo la ruta de crear estos libros con post

module.exports = AutoresRoutes; //exporto el objeto
