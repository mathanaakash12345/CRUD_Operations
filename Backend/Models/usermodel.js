const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String},
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  address: { type: String},
}, { timestamps: true }); 

const User = mongoose.model('users', userSchema);
module.exports = User;
