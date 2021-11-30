const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  token: String
});

// Compile model from schema
var UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
