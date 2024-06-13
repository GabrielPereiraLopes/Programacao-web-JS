const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', usuarioSchema);
