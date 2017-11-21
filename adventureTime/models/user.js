const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
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
  /* TODO: how do I add an adventures property here that
  ****see 19-Populate-Exercise in week 18*/
  // this code will break the app until the whole function is complete
  adventures: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "adventure"
    }
  ]

});

const User = mongoose.model("User", userSchema);

module.exports = User;
