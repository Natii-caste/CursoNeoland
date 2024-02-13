//!-----------------------------ESTOY HACIENDO ESTE

const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Autores = require("../models/Autores.model");
const Libros = require("../models/Libros.model");
const enumOk = require("../../utils/enumOk.js");

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

//!---------------------------------------------------------------------------------------------------------------------------------

//! ---------------------------------------------------------------------------
//? ----------------------------add o delete un character  --------------------
//! ---------------------------------------------------------------------------

/// aqui metemos los autores en el array del modelo de libros
const toggleLibros = async (req, res, next) => {
  try {
    /** este es el id del autor que queremos actualizar */
    const { id } = req.params;
    const { libros } = req.body; // -----> id De Los Autores enviaremos esto por el req.body "12412242253,12535222232,12523266346"
    /** Buscamos los libros por id para saber si existe */
    const autoresById = await Autores.findById(id); //busco en la BD si esta incluido o no

    /** vamos a hacer un condicional para ver si existe hacer la update sino mandamos un 404 */
    if (autoresById) {
      /** cageemos el string que traemos del body y lo convertimos en un array
       * y con el .split lo separa con comas.
       */
      const arrayIdLibros = libros.split(",");

      Promise.all(
        //con el promise.all le estamos diciendo que me resuelva todas las promesas que tenga dentro y cuando las resulvas, continuas.
        arrayIdLibros.map(async (libros, index) => {
          //vamos a recorrer los id de los autores
          if (autoresById.libros.includes(libros)) {
            //tu incluyes el autor que estoy recorriendo?

            //________ EN CASO DE QUE LO INCLUYA HAY QUE BORRAR DEL ARRAY DE AUTORES EL AUTOR DENTRO DEL LIBRO ___

            try {
              //hacemo sun try cath porque hay una asincronia de actualizacion
              await Autores.findByIdAndUpdate(id, {
                //apuntamos a libros y lo actualizamos (con update) pasando la id para buscarla
                // dentro de la clavee characters me vas a sacar el id del elemento que estoy recorriendo
                $pull: { Libros: libros }, //con pull le estoy diciendo que me tiene que sacar del array autores el id del que esto recorriendo
              });

              try {
                //hacemos otro try cath porque ahora hay que actualizar los autores ya que si los autores estan en los libros los libros pertenecen a los autores
                await Libros.findByIdAndUpdate(libros, {
                  //apuntamos a autores y le digo que me busque por id del libro
                  $pull: { libros: id }, //con el pull le digo que me saque el id de libros
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update autor", //mando un error con texto personalizado.
                  message: error.message, //se manda el mensaje del error (mensaje especifico de ese error), esto es si quiero saber mas informacion acerca del error.
                }) && next(error); //todo lo que es toggle me interesa mandarlo por next
              }
            } catch (error) {
              res.status(404).json({
                error: "error update libros",
                message: error.message,
              }) && next(error);
            } //es importante que los try cath esten anidados ya que le estoy diciendo que cuando haga el primero haga el segundo.
          } else {
            //el else lo estamos utilizando para ver cuando mi autor no está en la array y si no esta lo meto.

            //________ METER EL AUTOR EN EL ARRAY DE AUTORES DEL LIBRO_____________

            /** si no lo incluye lo tenemos que meter con el $push */

            try {
              //ESTO ES EXACTAMENTE COMO LO DE ARRIBA, SIMPLEMENTE CAMBIAMOS EL PULL POR EL PUSH.
              await Autores.findByIdAndUpdate(id, {
                $push: { libros: libros },
              });
              try {
                await Libros.findByIdAndUpdate(libros, {
                  $push: { autores: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update character",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update movie",
                message: error.message,
              }) && next(error);
            }
          }
        })
      )
        .catch((error) => res.status(404).json(error.message)) //el .cath es por si hay algun error de sincronia y falla algun cath de arriba lo capture aquí el error.
        .then(async () => {
          //la respuesta del promise se lanza aqui con un .then y le estoy diciendo que cuando haya terminado esas asincronias (pelis y autores) me retorne una respuesta.
          return res.status(200).json({
            //le estoy diciendo que cuando lo haya solucionado me de una respuesta 200.
            dataUpdate: await Autores.findById(id).populate("libros"), //esa respuesta me la vas a mandar con el Libro actualizado para comprobar que hemos metido los autores.
          }); //el populate es para que esos id de autores se conviertan en informacion del modrlo de autores.
        }); //ESTO DEL .THEN ES SOLO CUANDO SE HA SOLUCIONADO TODO CORRECTAMENTE SI NO, SE LANZARAN LOS DIRENTES CATH.
    } else {
      return res.status(404).json("este libro no existe");
    }
  } catch (error) {
    //cath general
    return (
      res.status(404).json({
        error: "error catch",
        message: error.message,
      }) && next(error)
    );
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------get by id --------------------------
//! ---------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const autoresById = await Autores.findById(id);
    if (autoresById) {
      return res.status(200).json(autoresById);
    } else {
      return res.status(404).json("no se ha encontrado el character");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------get all ------------------------------
//! ---------------------------------------------------------------------

const getAll = async (req, res, next) => {
  try {
    const allautores = await Autores.find().populate("libros");
    /** el find nos devuelve un array */
    if (allautores.length > 0) {
      return res.status(200).json(allautores);
    } else {
      return res.status(404).json("no se han encontrado autores");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar - lanzado en el catch",
      message: error.message,
    });
  }
};

//! ---------------------------------------------------------------------------------------
//? -------------------------------get by name/buscar por nombre --------------------------
//! ---------------------------------------------------------------------------------------

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    /// find nos devuelve un array de elementos
    const autoresByName = await Autores.find({ name });
    if (autoresByName.length > 0) {
      return res.status(200).json(autoresByName);
    } else {
      return res.status(404).json("no se ha encontrado");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar por nombre capturado en el catch",
      message: error.message,
    });
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------UPDATE -------------------------------
//! ---------------------------------------------------------------------

const update = async (req, res, next) => {
  await Autores.syncIndexes();
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;
    const autoresById = await Autores.findById(id);
    if (autoresById) {
      const oldImg = autoresById.image;

      const customBody = {
        _id: autoresById._id,
        image: req.file?.path ? catchImg : oldImg,
        name: req.body?.name ? req.body?.name : autoresById.name,
      };

      if (req.body?.gender) {
        const resultEnum = enumOk(req.body?.gender);
        customBody.gender = resultEnum.check
          ? req.body?.gender
          : autoresById.gender;
      }

      try {
        await Autores.findByIdAndUpdate(id, customBody);
        if (req.file?.path) {
          deleteImgCloudinary(oldImg);
        }

        //** ------------------------------------------------------------------- */
        //** VAMOS A TESTEAR EN TIEMPO REAL QUE ESTO SE HAYA HECHO CORRECTAMENTE */
        //** ------------------------------------------------------------------- */

        // ......> VAMOS A BUSCAR EL ELEMENTO ACTUALIZADO POR ID

        const autoresByIdUpdate = await Autores.findById(id);

        // ......> me cojer el req.body y vamos a sacarle las claves para saber que elementos nos ha dicho de actualizar
        const elementUpdate = Object.keys(req.body);

        /** vamos a hacer un objeto vacion donde meteremos los test */

        let test = {};

        /** vamos a recorrer las claves del body y vamos a crear un objeto con los test */

        elementUpdate.forEach((item) => {
          if (req.body[item] === autoresByIdUpdate[item]) {
            test[item] = true;
          } else {
            test[item] = false;
          }
        });

        if (catchImg) {
          autoresByIdUpdate.image === catchImg
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }

        /** vamos a ver que no haya ningun false. Si hay un false lanzamos un 404,
         * si no hay ningun false entonces lanzamos un 200 porque todo esta correcte
         */

        let acc = 0;
        for (clave in test) {
          test[clave] == false && acc++;
        }

        if (acc > 0) {
          return res.status(404).json({
            dataTest: test,
            update: false,
          });
        } else {
          return res.status(200).json({
            dataTest: test,
            update: true,
          });
        }
      } catch (error) {}
    } else {
      return res.status(404).json("este autores no existe");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------DELETE -------------------------------
//! ---------------------------------------------------------------------

const deleteAutores = async (req, res, next) => {
  try {
    const { id } = req.params;
    const autores = await Autores.findByIdAndDelete(id);
    if (autores) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdautores = await Autores.findById(id);

      try {
        const test = await Libros.updateMany(
          { autores: id },
          { $pull: { autores: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { autoresFav: id },
            { $pull: { autoresFav: id } }
          );

          return res.status(finByIdautores ? 404 : 200).json({
            deleteTest: finByIdautores ? false : true,
          });
        } catch (error) {
          return res.status(404).json({
            error: "error catch update User",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Libros",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  createAutores,
  getById,
  getAll,
  getByName,
  update,
  toggleLibros,
  deleteAutores,
};
