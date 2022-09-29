/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = (capitalInicial, taxaJuros, tempo) => capitalInicial + capitalInicial * taxaJuros * tempo

const jurosCompostos = (capitalInicial, taxaJuros, tempo) => capitalInicial * (1 + taxaJuros) ** tempo


console.log(jurosSimples(1000, 0.1, 10))
console.log(jurosCompostos(1000, 0.1, 10))