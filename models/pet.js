const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: String,
  type: ['Cachorro', 'Gato', 'Ave', 'Outros'],
  race: String,
  size: ['toy', 'pequeno', 'médio', 'grande', 'gigante'],
  age: Number,
  cor: String
});

petSchema.set('timestamps', true);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
