const mongoose = require('mongoose');
const User = require("../models/user");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  type: ['Cachorro', 'Gato', 'Ave', 'Outros'],
  race: String,
  size: ['toy', 'pequeno', 'médio', 'grande', 'gigante'],
  age: Number,
  genero: ['Macho', 'Femea'],
  cor: String
});

petSchema.set('timestamps', true);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
