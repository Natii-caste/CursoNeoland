const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Autores = require("../models/Autores.model");
const Libros = require("../models/Libros.model");

const createLibros = async (req, res, next) => {
  let catchImg = req.file?.path; //me da la url de donde esta mi imagen en claudinary.

  try {
    await Libros.syncIndexes(); //tengo unos indexes que quiero que me los sincronices.

    /** hacemos una instancia del modelo, es decir hago un new  */

    const newLibros = new Libros({ ...req.body, image: catchImg });
    const savedLibros = await newLibros.save(); //si hay un error aquí (en la sincronia) se lanzará el cath.

    // test en el runtime, esto lo hacemos aunque tengamos el cath por si acaso no captura bien el error.
    return res //hacemos un status y un JSON dinamicos en funcion de lo que valga savedLibros.
      .status(savedLibros ? 200 : 404) //¿existe ese libro? si existe me das un 200 y si no un 404.
      .json(savedLibros ? savedLibros : "error al crear el libro"); //¿que pasa con saveLibros? si existe me devuelves savedLibros, si no existe me vas a dar "error al crear el libro".
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return res.status(404).json({
      error: "error catch create book", //creo un objeto con el mensaje de mi error (mensaje personalizado).
      message: error.message, //pongo el mensaje que estoy capturando (mensaje que viene del error).
    });
  }
};

//!---------------------------------------------------------------------------------------------------------------------------------

//! ---------------------------------------------------------------------
//? ----------------------------add o delete un character  --------------
//! ---------------------------------------------------------------------

/// aqui metemos los autores en el array del modelo de libros
const toggleAutores = async (req, res, next) => {
  try {
    /** este es el id del autor que queremos actualizar */
    const { id } = req.params;
    const { autores } = req.body; // -----> id De Los Autores enviaremos esto por el req.body "12412242253,12535222232,12523266346"
    /** Buscamos los libros por id para saber si existe */
    const librosById = await Libros.findById(id); //busco en la BD si esta incluido o no

    /** vamos a hacer un condicional para ver si existe hacer la update sino mandamos un 404 */
    if (librosById) {
      /** cageemos el string que traemos del body y lo convertimos en un array
       * y con el .split lo separa con comas.
       */
      const arrayIdAutores = autores.split(",");

      Promise.all(
        //con el promise.all le estamos diciendo que me resuelva todas las promesas que tenga dentro y cuando las resulvas, continuas.
        arrayIdAutores.map(async (autores, index) => {
          //vamos a recorrer los id de los autores
          if (librosById.autores.includes(autores)) {
            //tu incluyes el autor que estoy recorriendo?

            //________ EN CASO DE QUE LO INCLUYA HAY QUE BORRAR DEL ARRAY DE AUTORES EL AUTOR DENTRO DEL LIBRO ___

            try {
              //hacemo sun try cath porque hay una asincronia de actualizacion
              await Libros.findByIdAndUpdate(id, {
                //apuntamos a libros y lo actualizamos (con update) pasando la id para buscarla
                // dentro de la clavee characters me vas a sacar el id del elemento que estoy recorriendo
                $pull: { Autores: autores }, //con pull le estoy diciendo que me tiene que sacar del array autores el id del que esto recorriendo
              });

              try {
                //hacemos otro try cath porque ahora hay que actualizar los autores ya que si los autores estan en los libros los libros pertenecen a los autores
                await Autores.findByIdAndUpdate(autores, {
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
              await Libros.findByIdAndUpdate(id, {
                $push: { Autores: autores },
              });
              try {
                await Autores.findByIdAndUpdate(autores, {
                  $push: { libros: id },
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
            dataUpdate: await Libros.findById(id).populate("autores"), //esa respuesta me la vas a mandar con el Libro actualizado para comprobar que hemos metido los autores.
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
    const librosById = await Libros.findById(id);
    if (librosById) {
      return res.status(200).json(librosById);
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
    const alllibros = await Libros.find().populate("autores");
    /** el find nos devuelve un array */
    if (alllibros.length > 0) {
      return res.status(200).json(alllibros);
    } else {
      return res.status(404).json("no se han encontrado libros");
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
    const librosByName = await Libros.find({ name });
    if (librosByName.length > 0) {
      return res.status(200).json(librosByName);
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
  await Libros.syncIndexes();
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;
    const librosById = await Libros.findById(id);
    if (librosById) {
      const oldImg = librosById.image;

      const customBody = {
        _id: librosById._id,
        image: req.file?.path ? catchImg : oldImg,
        name: req.body?.name ? req.body?.name : librosById.name,
      };

      if (req.body?.gender) {
        const resultEnum = enumOk(req.body?.gender);
        customBody.gender = resultEnum.check
          ? req.body?.gender
          : librosById.gender;
      }

      try {
        await Libros.findByIdAndUpdate(id, customBody);
        if (req.file?.path) {
          deleteImgCloudinary(oldImg);
        }

        //** ------------------------------------------------------------------- */
        //** VAMOS A TESTEAR EN TIEMPO REAL QUE ESTO SE HAYA HECHO CORRECTAMENTE */
        //** ------------------------------------------------------------------- */

        // ......> VAMOS A BUSCAR EL ELEMENTO ACTUALIZADO POR ID

        const librosByIdUpdate = await Libros.findById(id);

        // ......> me cojer el req.body y vamos a sacarle las claves para saber que elementos nos ha dicho de actualizar
        const elementUpdate = Object.keys(req.body);

        /** vamos a hacer un objeto vacion donde meteremos los test */

        let test = {};

        /** vamos a recorrer las claves del body y vamos a crear un objeto con los test */

        elementUpdate.forEach((item) => {
          if (req.body[item] === librosByIdUpdate[item]) {
            test[item] = true;
          } else {
            test[item] = false;
          }
        });

        if (catchImg) {
          librosByIdUpdate.image === catchImg
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
      return res.status(404).json("este libro no existe");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------DELETE -------------------------------
//! ---------------------------------------------------------------------

const deleteLibros = async (req, res, next) => {
  try {
    const { id } = req.params;
    const libros = await Libros.findByIdAndDelete(id);
    if (libros) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdlibros = await Libros.findById(id);

      try {
        const test = await Autores.updateMany(
          { libros: id },
          { $pull: { libros: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { librosFav: id },
            { $pull: { librosFav: id } }
          );

          return res.status(finByIdlibros ? 404 : 200).json({
            deleteTest: finByIdlibros ? false : true,
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
  createLibros,
  toggleAutores,
  getAll,
  getById,
  getByName,
  deleteLibros,
  update,
}; //lo exportamos
