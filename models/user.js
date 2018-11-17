const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  phone: Number,
  CPF: Number,
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
