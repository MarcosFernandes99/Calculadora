
var numeroA = parseInt(prompt(`Inisra um numero aqui`))
var numeroB = parseInt(prompt(`Insira um numero aqui`))
console.log(`Numero A: ${numeroA} - Numero B: ${numeroB}`)
var resultadoSoma, resultadoSubtracao, resultadoMultiplicacao, resultadoDivisao

var opcao = prompt(`Escolha a função/ 1 - Soma/ 2 - Subtração/ 3 - Multiplicação/ 4 - Divisão`)

if(opcao == 1){
    CalcularSoma(numeroA, numeroB);
    return resultadoSoma
}    

else if(opcao == 2){
    CalcularSubtracao(numeroA, numeroB);
    return resultadoSubtracao
}
    
else if(opcao == 3){
    CalcularMultiplicacao(numeroA, numeroB);
    return resultadoMultiplicacao
}
    
else{
    CalcularDivisao(numeroA, numeroB);
    return resultadoDivisao
}    

    function CalcularSoma(num1, num2){
    console.log(`A soma será calculada aqui!`)
    console.log(numeroA + numeroB)
    }

    function CalcularSubtracao(num1, num2){
    console.log(`A subtração será calculada aqui`)
    console.log(numeroA - numeroB)
    }

    function CalcularMultiplicacao(num1, num2){
    console.log(`A multiplicação será calculada aqui`)
    console.log(numeroA * numeroB)
    }

    function CalcularDivisao(num1, num2){
    console.log(`A divisão será calculada aqui`)
    console.log(numeroA / numeroB)
    }
    