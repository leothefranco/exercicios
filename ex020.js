/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

const contaInterna = (num, valor) => {
    resto = (valor % num)
    resposta += `${Math.floor(valor/num)} nota(s) de R$ ${num}. `     
}

let resposta = ""
let resto = 0

const menorTroco = (valor) => {
    if (valor >= 100) {
        contaInterna(100 , valor)
    } else if (valor >= 50) {
        contaInterna(50 , valor)
    } else if (valor >= 10) {
        contaInterna(10 , valor)
    } else if (valor >= 1) {
        contaInterna(1 , valor)
    }   
    if (resto !== 0) {
        menorTroco(resto)
    }
    return resposta    
}

console.log(menorTroco(474))
