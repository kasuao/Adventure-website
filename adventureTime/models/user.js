const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { 
    type: String,  
    unique: true, 
    required: true 
  },
  email: { 
  	type: String,  
  	unique: true,
  	// `email` must match the regex pattern below and throws a custom error message if it does not
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"], 
    required: true 
	},
  password: { 
  	type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer than 6 characters."
    ] 
  },
  profilePic: { type: String, required: false },
  about: { type: String, required: true },
  adventureLevel: { type: Number, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
