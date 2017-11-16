const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
  user: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  directions: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  funRating: { type: Number, required: true },
  diffRating: { type: Number, required: true }
  // date: { type: Date, default: Date.now }
});

const Adventure = mongoose.model("Adventure", adventureSchema);

module.exports = Adventure;
