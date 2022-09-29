/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

/*let maiorPontuacao = 0
let piorPontuacao = 1000000
let recordes = 0
let indicePior = 0
*/
const jogos = (pontuacoesTxt) => {
    let maiorPontuacao = 0
    let piorPontuacao = 1000000
    let recordes = 0
    let indicePior = 0
    let pontuacoes = pontuacoesTxt.split(" ")
    for (let i = 0; i < pontuacoes.length; i++) {
         if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            recordes++
         } 
         if (pontuacoes[i] < piorPontuacao) {
            piorPontuacao = pontuacoes[i]
            indicePior = i
         }
    }
    return [recordes, indicePior+1]
}

const teste = (texto) => {
    const formatado = texto.split(" ")
    return formatado
}

console.log(jogos("10 20 20 8 25 3 0 30 1"))
console.log(jogos("10 20 30 40 50 60 70 80 90"))
console.log(jogos("15 12 13 04 05 06 07 08 09"))