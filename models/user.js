const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  CPF: Number,
  name: String,
  email: String,
  password: String,
  address: String,
  city: String,
  cep: Number,
  phone: Number,
  pet: Boolean
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
