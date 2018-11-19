const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  CNPJ: Number,
  location: { type: { type: String }, coordinates: [Number] },
  services: ['banho', 'tosa', 'veterinário'],
  phone: Number,
  pet: { type: Boolean, default: false }
});

shopSchema.set('timestamps', true);

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
