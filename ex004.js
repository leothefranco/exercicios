/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const divisão = (dividendo, divisor) => {
    console.log(`${dividendo} dividido por ${divisor} = ${dividendo/divisor} Resto: ${dividendo%divisor}`)
}

divisão(10,3)