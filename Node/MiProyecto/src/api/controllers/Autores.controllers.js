const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Autores = require("../models/Autores.model");

const createAutores = async (req, res, next) => {
  let catchImg = req.file?.path; //me da la url de donde esta mi imagen en claudinary.

  try {
    await Autores.syncIndexes(); //tengo unos indexes que quiero que me los sincronices.

    /** hacemos una instancia del modelo, es decir hago un new  */

    const newAutores = new Autores({ ...req.body, image: catchImg });
    const savedAutores = await newAutores.save(); //si hay un error aquí (en la sincronia) se lanzará el cath.

    // test en el runtime, esto lo hacemos aunque tengamos el cath por si acaso no captura bien el error.
    return res //hacemos un status y un JSON dinamicos en funcion de lo que valga savedAutores.
      .status(savedAutores ? 200 : 404) //¿existe ese Autores? si existe me das un 200 y si no un 404.
      .json(savedAutores ? savedAutores : "error al crear la movie"); //¿que pasa con saveAutores? si existe me devuelves savedLibros, si no existe me vas a dar "error al crear el libro".
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return res.status(404).json({
      error: "error catch create autor", //creo un objeto con el mensaje de mi error (mensaje personalizado).
      message: error.message, //pongo el mensaje que estoy capturando (mensaje que viene del error).
    });
  }
};

module.exports = { createAutores }; //lo exportamos
