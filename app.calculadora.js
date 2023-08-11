/**-------------------------------------
 * Objetivo: Escolher uma operação com dois numeros dados pelo usuario 
 * Autor: Julia 
 * Data: 11/08
 * Versão: 1.0
 --------------------------------------*/

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Informe o primeiro número: ', function(numero1){

   let n1 = numero1.replace(",", ".")

entradaDeDados.question('Informe a operação (+) (-) (x) (/): ', function(resposta){
 
    let operacao = resposta

entradaDeDados.question('Informe o segundo número: ', function(numero2){

    let n2 = numero2.replace(",", ".")

    if(operacao == '' || n1 == '' || n2 == ''){

   console.log('ERRO: É necessário informar os números e a operação')

}else if(isNaN(n1) || isNaN(n2)){

    console.log('ERRO: É necessário informar números')

}else if(operacao == '+'){

    let resultado = Number(n1) + Number(n2)
        console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

}else if (operacao == '-'){

    resultado = Number(n1) - Number(n2)
    console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

}else if (operacao == 'x'){

 resultado = Number(n1) * Number(n2)
 console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

}else if (operacao == '/'){

    resultado = Number(n1) / Number(n2)
     console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

}else if (operacao != '+' || operacao != '-' || operacao != 'x' || operacao != '/'){

    console.log('ERRO: É necessário informar uma operação')

}
        
    entradaDeDados.close()

})

})

})