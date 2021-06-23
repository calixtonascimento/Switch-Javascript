let inputValor1 = document.getElementById("valor1");
let inputOperacao = document.getElementById("operacao");
let inputValor2 = document.getElementById("valor2");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando");

    let valor1 = parseInt(inputValor1.value);
    let operacao = inputOperacao.value;
    let valor2 = parseInt(inputValor2.value); 

    switch (operacao) {
        case "+":
        resultadomat = valor1 + valor2;
        resultado.innerHTML = `<p> O resultado da soma é: ${resultadomat}</p>`;
        break;

        case "-":
        resultadomat = valor1 - valor2;
        resultado.innerHTML = `<p> O resultado da subtração é: ${resultadomat}</p>`;
        break;

        case "*":
        resultadomat = valor1 * valor2;
        resultado.innerHTML = `<p> O resultado da multiplicação é: ${resultadomat}</p>`;
        break;
    
        case "/":
        resultadomat = valor1 / valor2;
        resultado.innerHTML = `<p> O resultado da divisão é: ${resultadomat}</p>`;
        break;

        default:
            resultado.innerHTML = `<p>Erro, operação não encontrada!!</p>`;
            break;
    }
}