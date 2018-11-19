const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// AJUSTAR O SCHEMA!!
const hotelSchema = new Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  phone: Number,
  CPF: Number
});

hotelSchema.set('timestamps', true);

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
