const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const hotelSchema = new Schema({
  CNPJ: Number,
  name: String,
  email: String,
  password: String,
  location: { type: { type: String }, coordinates: [Number] },
  address: {
    city: String,
    state: String,
    cep: Number,
    streetAddress: String
  },
  phone: Number
});


hotelSchema.set('timestamps', true);

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
