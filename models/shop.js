const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  CNPJ: Number,
  location: { type: { type: String }, coordinates: [Number] },
  city: String,
  state: String,
  cep: Number,
  streetAddress: String,
  name: { service: String, enum: ['banho', 'tosa', 'veterinário', 'outros'] },
  cost: Number,
  phone: Number,
  email: String
});

shopSchema.set('timestamps', true);

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
