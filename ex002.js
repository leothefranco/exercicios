/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangulo(l1, l2, l3) {
    if (l1 === l2 && l2 === l3 ) {
        console.log("Triângulo Equilátero")
    } else if (l1 === l2 || l2 === l3 || l1 === l3) {
        console.log("Triângulo Isósceles")
    } else {
        console.log("Triângulo Escaleno")
    }
}

triangulo(1,1,1)
triangulo(1,1,3)
triangulo(1,2,3)