/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const aumento = (plano, salario) => {
    switch (plano) {
        case "A":
            console.log(`Aumento de 10%, novo salário: ${salario * 1.1}`)
            break;
        case "B":
            console.log(`Aumento de 15%, novo salário: ${salario * 1.15}`)
            break;
        case "C":
            console.log(`Aumento de 20%, novo salário: ${salario * 1.2}`)
            break;
        default:
            console.log("Plano inválido")            
    }
}

aumento("A",1000)