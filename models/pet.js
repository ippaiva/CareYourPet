const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: String,
  owner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
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
