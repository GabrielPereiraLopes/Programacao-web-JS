const Evento = require('../models/Evento');

exports.createEvento = async (req, res) => {
  const { name, date, location, description, organizer } = req.body;
  try {
    const newEvento = new Evento({ name, date, location, description, organizer });
    await newEvento.save();
    res.status(201).json({ message: 'Evento criado!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listEventos = async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEvento = async (req, res) => {
  const eventoId = req.params.id;
  const { name, date, location, description } = req.body;
  try {
    await Evento.findByIdAndUpdate(eventoId, { name, date, location, description });
    res.status(200).json({ message: 'Evento utualizado!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEvento = async (req, res) => {
  const eventoId = req.params.id;
  try {
    await Evento.findByIdAndDelete(eventoId);
    res.status(200).json({ message: 'Evento deletado!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
