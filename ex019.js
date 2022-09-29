/* 19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

const toReal = (num) => num.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })

const calculaLanche = (cod, quantidade) => {
    switch(cod) {
        case 100:
            console.log(`${quantidade} Cachorro(s) Quente(s): ${toReal(3 * quantidade)}`)
            break;
        case 200:
            console.log(`${quantidade} Hambúrguer(s) Simples: ${toReal(4 * quantidade)}`)
            break;    
        case 300:
            console.log(`${quantidade} Cheeseburguer(s): ${toReal(5.5 * quantidade)}`)
            break;
        case 400:
            console.log(`${quantidade} Bauru(s): ${toReal(7.5 * quantidade)}`)
            break;  
        case 500:
            console.log(`${quantidade} Refrigerante(s): ${toReal(3.5 * quantidade)}`)
            break;  
        case 600:
            console.log(`${quantidade} Suco(s): ${toReal(2.8 * quantidade)}`)
            break;  
        default:
            console.log("Produto não existente.")                   
    }
}

calculaLanche(200,10)