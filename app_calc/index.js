const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'src/views')));

app.use('/', calculadoraRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
