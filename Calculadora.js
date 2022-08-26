var arrayResultados = []
var contador = 0

var continuar = true
while (continuar) {
    var numeroA = parseInt(prompt(`Inisra um numero aqui`))
    var numeroB = parseInt(prompt(`Insira um numero aqui`))
    console.log(`Numero A: ${numeroA} - Numero B: ${numeroB}`)

    var opcao = prompt(`Escolha a função/ 1 - Soma/ 2 - Subtração/ 3 - Multiplicação/ 4 - Divisão`)

    if (opcao == 1) {
        arrayResultados[contador] = CalcularSoma(numeroA, numeroB);
        console.log(`O resultado da soma é: ${arrayResultados[contador]}`)
        contador++
    }

    else if (opcao == 2) {
        arrayResultados[contador] = CalcularSubtracao(numeroA, numeroB);
        console.log(`O resultado da subtração é: ${arrayResultados[contador]}`)
        contador++
    }

    else if (opcao == 3) {
        arrayResultados[contador] = CalcularMultiplicacao(numeroA, numeroB);
        console.log(`O resultado da multiplicação é: ${arrayResultados[contador]}`)
        contador++
    }

    else {
        arrayResultados[contador] = CalcularDivisao(numeroA, numeroB);
        console.log(`O resultado da Divisão é: ${arrayResultados[contador]}`)
        contador++
    }

    var desejacontinuar = prompt(`1 - Fazer outra operação/ 2 - Encerrar`)
    if (desejacontinuar != 1) {
        continuar = false
    }
    
}

function CalcularSoma(num1, num2) {        
    return num1 + num2  
}

function CalcularSubtracao(num1, num2) {
        return num1 - num2
}

function CalcularMultiplicacao(num1, num2) {
        return num1 * num2
}

function CalcularDivisao(num1, num2) {
        return num1 / num2
}



