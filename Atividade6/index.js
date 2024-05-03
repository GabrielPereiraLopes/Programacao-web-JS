const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress   = require('mustache-express');
const app = express();
const port = 3000;

app.engine('html', mustacheExpress());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/dados', function (req, res) {
  let dados = req.body;
  res.render('dados.html', {dados});
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
