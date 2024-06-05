const calculadora = require('../models/calculadora');

exports.calcular = (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operador = req.body.operador;

    if (isNaN(num1) || isNaN(num2)) {
        res.send(`
            <script>
                alert("Por favor, insira valores numéricos válidos.");
                window.location.href = "/";
            </script>
        `);
        return;
    }

    try {
        const resultado = calculadora.calcular(num1, num2, operador);
        res.send(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Resultado</title>
            </head>
            <body>
                <h1>Resultado da Operação</h1>
                <p>O resultado da operação é: ${resultado}</p>
                <a href="/">Voltar</a>
            </body>
            </html>
        `);
    } catch (error) {
        res.send(`
            <script>
                alert("${error.message}");
                window.location.href = "/";
            </script>
        `);
    }
};
