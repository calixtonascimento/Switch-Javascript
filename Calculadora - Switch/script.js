var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
console.log(valor1);

var operacao = prompt("Escolhe uma operação: +, -, *, /");
console.log("Operação:" + operacao);

var valor2 = parseFloat(prompt("Digite o segundo valor:"));
console.log(valor2);

switch (operacao) {
    case "+":
        resultado = valor1 + valor2;
        alert("Resultado da soma é: " + resultado);
        console.log("Resultado da soma é: " + resultado);
        break;

    case "-":
        resultado = valor1 - valor2;
        alert("Resultado da subtração é: " + resultado);
        console.log("Resultado da subtração é: " + resultado);
        break;

    case "*":
        resultado = valor1 * valor2;
        alert("Resultado da multiplicação é: " + resultado);
        console.log("Resultado da multiplicação é: " + resultado);
        break;

    case "/":
        resultado = valor1 / valor2;
        alert("Resultado da divisão é: " + resultado);
        console.log("Resultado da divisão é: " + resultado);
        break;

    default:
        alert("Erro, operação não realizada");
        break;
}