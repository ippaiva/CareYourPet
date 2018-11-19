const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: String,
  type: ['cachorro', 'gato'],
  race: String,
  size: ['toy', 'pequeno', 'médio', 'grande', 'gigante'],
  age: Number,
});

petSchema.set('timestamps', true);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
