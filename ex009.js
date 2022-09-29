/* 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */

const avaliacao = (nota) => {
    if (nota < 38) {
        console.log(`Nota do aluno: ${nota}, sem arredondamento.`)
        console.log("Status: REPROVADO!")
    } else if (nota % 5 > 2) {
        let notaNova = 5 - nota % 5 + nota
        console.log(`Nota do aluno arredondada de ${nota} para ${notaNova}.`)
        console.log("Status: APROVADO!")
    } else {
        console.log(`Nota do aluno: ${nota}, sem arredondamento.`)
        console.log("Status: APROVADO!")
    }
}

avaliacao(37)
avaliacao(38)
avaliacao(40)
avaliacao(41)
avaliacao(44)
