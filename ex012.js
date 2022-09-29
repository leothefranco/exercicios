/* 12) Faça um algoritmo que calcule o fatorial de um número. */

let total = 1

function fatorial(numero) {
    if (numero === 0) {
        return total
    } else {   
        total = numero * fatorial(numero - 1)
        return total
    }    
}

console.log(fatorial(10))