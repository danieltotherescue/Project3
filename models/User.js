var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


var User = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  googleId: String,
 created: { type: Date, default: Date.now }
 })



// User.methods.encrypt = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(4), null);
// }
//
// User.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, thos.local.password);
// }

module.exports = mongoose.model('User', User)
