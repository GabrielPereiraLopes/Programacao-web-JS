exports.calcular = (num1, num2, operador) => {
    let resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                throw new Error("Divisão por zero não permitida");
            }
            resultado = num1 / num2;
            break;
        default:
            throw new Error("Operador inválido");
    }
    return resultado;
};
