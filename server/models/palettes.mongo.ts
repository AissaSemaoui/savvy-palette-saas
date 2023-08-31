import mongoose from "mongoose";

const paletteSchema = new mongoose.Schema(
  {
    paletteId: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true,
    },
    paletteName: {
      type: String,
      required: true,
    },
    colors: [
      {
        name: { type: String, required: true },
        shades: { type: Object, required: true },
      },
    ],
    isPublic: {
      type: Boolean,
      default: true,
    },
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PaletteDB =
  mongoose.models.Palette || mongoose.model("Palette", paletteSchema);

export default PaletteDB;
