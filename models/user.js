const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  CPF: Number,
  name: String,
  email: String,
  password: String,
  address: {
    city: String,
    state: String,
    cep: Number,
    streetAddress: String
  },
  phone: Number,
  pet: Boolean
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
