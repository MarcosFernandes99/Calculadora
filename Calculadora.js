
var numeroA = parseInt(prompt(`Inisra um numero aqui`))
var numeroB = parseInt(prompt(`Insira um numero aqui`))

CalcularSoma();
CalcularSubtracao();
CalcularMultiplicacao();

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

