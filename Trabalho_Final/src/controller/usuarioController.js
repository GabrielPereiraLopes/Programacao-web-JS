const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, cpf, address, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUsuario = new Usuario({ name, cpf, address, password: hashedPassword });
    await newUsuario.save();
    res.status(201).json({ message: 'Usuario registrado!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { cpf, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ cpf });
    if (!usuario) throw new Error('Usuario nao encontrado');
    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) throw new Error('Senha invalida');
    const token = jwt.sign({ usuarioId: usuario._id }, 'secret_key', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const usuarioId = req.params.id;
  const { name, address } = req.body;
  try {
    await Usuario.findByIdAndUpdate(usuarioId, { name, address });
    res.status(200).json({ message: 'Usuario foi atualizado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
