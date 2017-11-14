const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  _id: Schema.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, required: true },
  about: { type: String, required: true },
  adventureLevel: { type: Number, required: true }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
