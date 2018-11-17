const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name: String,
  CNPJ: Number,
  adress: String,
  location: Number,
  services: ['banho', 'tosa', 'veterinário'],
  pet: { type: Boolean, default: false },
});

ownerSchema.set('timestamps', true);

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;