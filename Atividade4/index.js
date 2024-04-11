const express  = require('express');
const calc     = require('./util/calculadora');
const app      = express();

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});

app.get('/', function (req, res) {
    res.send('Bem-Vindo a Calculadora');
});

app.get('/somar/:a/:b', function (req, res) {
    a = req.params.a
    b = req.params.b
    c = calc.somar(a, b);
    res.send('Resultado da soma = '+c+' ');
});

app.get('/subtrair/:a/:b', function (req, res) {
    a = req.params.a
    b = req.params.b
    c = calc.subtrair(a, b);
    res.send('Resultado da subtração = '+c+' ');
});

app.get('/multiplicar/:a/:b', function (req, res) {
    a = req.params.a
    b = req.params.b
    c = calc.multiplicar(a, b);
    res.send('Resultado da multiplicação = '+c+' ');
});

app.get('/dividir/:a/:b', function (req, res) {
    a = req.params.a
    b = req.params.b
    c = calc.dividir(a, b);
    res.send('Resultado da divisão = '+c+' ');
}
);

