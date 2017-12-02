const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
  userName: { type: String, required: true },
  adventure: { type: String, required: true },
  difficultyLevel: { type: String, required: true },
  landscapeLevel: { type: String, required: true },
  funLevel: { type: String, required: true },
  enjoymentLevel: { type: String, required: true },
  adventurePic: { type: String, required: true },
  description: { type: String, required: true },
  category: {type: String, required: true },
  // funRating: { type: Number, required: true },
  // diffRating: { type: Number, required: true }
  date: { type: Date, default: Date.now }
});

const Adventure = mongoose.model("Adventure", adventureSchema);

module.exports = Adventure;
