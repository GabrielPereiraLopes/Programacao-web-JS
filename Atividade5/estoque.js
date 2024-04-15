const express  = require('express');
const app      = express();

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});

app.get('/', function (req, res) {
    res.send('Bem-Vindo a mercado!');
});


let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    const {id,nome,qtd} = req.params;
    estoque.push({ id, nome, quantidade: parseInt(qtd) });
    res.send('Produto adicionado ao estoque !');
});

app.get('/listar', function (req, res) {
    let listaProdutos = '';
    for (let i = 0; i < estoque.length; i++){
        listaProdutos += ` ID: ${estoque[i].id}, Nome: ${estoque[i].nome}, Quantidade: ${estoque[i].quantidade}<br>`;
    }
    res.send(listaProdutos);

});

app.get('/remover/:id', function (req, res) {
    const id = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send('Produto removido do estoque!');
});

app.get('/editar/:id/:qtd', function (req, res) {
    const {id, qtd} = req.params;
    const produto = estoque.find(produto => produto.id === id);
    if (produto && qtd) {
        produto.quantidade = parseInt(qtd);
        res.send('Quantidade do produto atualizada!');
    } 
});

