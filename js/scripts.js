function exesatisfacao() {

    let nota // vao ser informadas na utilização do programa 
    let conta = 1 // conta de um a seis
    let soma = 0
    let insatisfeitos = 0 // nenhum insatisf. pq ainda não declarei as notas
    let satisfeitos = 0 // == 


    while (conta <= 10 ){

        nota= Number(prompt(`informe a nota de 0 a 10 do aluno: ${conta}`)) // prompt = é usada para exibir uma caixa de diálogo no navegador que solicita ao usuário que insira algum texto - tipo "escreva" em portugol --- conta = "leia" em portugol
        
        soma += nota // soma = soma + nota -- tem a função de acumular todas as notas que são informadas

    if (nota >= 8) {  // se nota for maior/igual 8

        satisfeito++  // = satisfeito +1
    } 
    else if  (nota >=0 && nota <= 5) { // = senao se  // se nota maior ou = 0 e menor ou = 5
        
        insatisfeitos++ // = insatisfeito +1
    }
        conta++  // = conta + 1 

    }
   


    //soma das notas

    //let soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6
    let media = soma / 10 

    alert(`A media das notas ${media.toFixed(1)}`)
    alert(`Total de pessoas satisfeitas : ${satisfeitos}`) 
    alert(`Total de pessoas insatisfeitas : ${insatisfeitos}`)
}

 // se fizer um alert(conta) vai aparecer 11 (todos numeros q se pediu, +1)
    