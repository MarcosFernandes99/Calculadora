
var numeroA = parseInt(prompt(`Inisra um numero aqui`))
var numeroB = parseInt(prompt(`Insira um numero aqui`))
console.log(`Numero A: ${numeroA} - Numero B: ${numeroB}`)

CalcularSoma();
CalcularSubtracao();
CalcularMultiplicacao();
CalcularDivisao();

function CalcularSoma(){
    console.log(`A soma será calculada aqui!`)
    console.log(numeroA + numeroB)
    }

function CalcularSubtracao(){
    console.log(`A subtração será calculada aqui`)
    console.log(numeroA - numeroB)
   }

   function CalcularMultiplicacao(){
    console.log(`A multiplicação será calculada aqui`)
    console.log(numeroA * numeroB)
   }

   function CalcularDivisao(){
    console.log(`A divisão será calculada aqui`)
    console.log(numeroA / numeroB)
   }



