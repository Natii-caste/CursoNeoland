const mongoose = require("mongoose");

const LibrosSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    year: { type: Number, required: true },
    genre: {
      type: String,
      enum: [
        "fantasia",
        "terror",
        "romantica",
        "thriller",
        "autoayuda",
        "historica",
        "biografia",
        "accion",
      ],
      required: true,
    },

    pages: { type: Number, require: false },
    image: {
      type: String,
      required: true,
    },
    Autores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Autores" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Libros = mongoose.model("Libros", LibrosSchema);

module.exports = Libros;
