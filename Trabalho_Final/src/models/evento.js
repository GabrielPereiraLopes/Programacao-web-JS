const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String },
  organizer: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
});

module.exports = mongoose.model('Evento', eventoSchema);
