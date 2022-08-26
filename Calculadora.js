
var numeroA = parseInt(prompt(`Inisra um numero aqui`))
var numeroB = parseInt(prompt(`Insira um numero aqui`))
console.log(`Numero A: ${numeroA} - Numero B: ${numeroB}`)
var resultadoSoma, resultadoSubtracao, resultadoMultiplicacao, resultadoDivisao

var continuar = true
while(continuar){
var opcao = prompt(`Escolha a função/ 1 - Soma/ 2 - Subtração/ 3 - Multiplicação/ 4 - Divisão`)

if(opcao == 1){
    CalcularSoma(numeroA, numeroB);
}    

else if(opcao == 2){
    CalcularSubtracao(numeroA, numeroB);
}
    
else if(opcao == 3){
    CalcularMultiplicacao(numeroA, numeroB);
}
    
else{
    CalcularDivisao(numeroA, numeroB);
}

var desejacontinuar = prompt(`1 - Fazer outra operação/ 2 - Encerrar`)
if(desejacontinuar != 1){
    continuar = false
}

}

function CalcularSoma(num1, num2){
    console.log(`A soma será calculada aqui!`)
    console.log(numeroA + numeroB)
    return resultadoSoma
    }

    function CalcularSubtracao(num1, num2){
    console.log(`A subtração será calculada aqui`)
    console.log(numeroA - numeroB)
    return resultadoSubtracao
    }

    function CalcularMultiplicacao(num1, num2){
    console.log(`A multiplicação será calculada aqui`)
    console.log(numeroA * numeroB)
    return resultadoMultiplicacao
    }

    function CalcularDivisao(num1, num2){
    console.log(`A divisão será calculada aqui`)
    console.log(numeroA / numeroB)
    return resultadoDivisao
    }   

    