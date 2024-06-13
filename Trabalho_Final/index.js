const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const eventoRoutes = require('./src/routes/EventoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/eventim', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/usuarios', usuarioRoutes);
app.use('/eventos', eventoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
