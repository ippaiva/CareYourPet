const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  CNPJ: Number,
  adress: String,
  location: Number,
  services: ['banho', 'tosa', 'veterinário'],
});

shopSchema.set('timestamps', true);

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;