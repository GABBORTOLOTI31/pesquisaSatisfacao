function exesatisfacao() {
    let nota; // vão ser informadas na utilização do programa 
    let conta = 1; // conta de um a dez
    let soma = 0;
    let insatisfeitos = 0; // nenhum insatisf. pq ainda não declarei as notas
    let satisfeitos = 0; // == 

    while (conta <= 10) {
        nota = Number(prompt(`Informe a nota de 0 a 10 do aluno: ${conta}`)); // prompt = é usada para exibir uma caixa de diálogo no navegador que solicita ao usuário que insira algum texto - tipo "escreva" em portugol --- conta = "leia" em portugol

        if (nota < 0 || nota > 10) { // nota menor q 0 e maior q 10 sao invalidas
            alert('Nota inválida para ser avaliada');
            continue; // permite continuar, volta ao início do processo sem adicionar essa nota inválida
        }

        soma += nota; // soma = soma + nota -- tem a função de acumular todas as notas que são informadas

        if (nota >= 8) { // se nota for maior/igual a 8
            satisfeitos++; // = satisfeito +1
        } else if (nota >= 0 && nota <= 5) { // se nota maior ou igual a 0 e menor ou igual a 5
            insatisfeitos++; // = insatisfeito +1
        }

        conta++; // incrementa o contador após processar uma nota válida
    }

    // soma das notas
    let media = soma / 10;

    alert(`A média das notas: ${media.toFixed(1)}`);
    alert(`Total de pessoas satisfeitas: ${satisfeitos}`);
    alert(`Total de pessoas insatisfeitas: ${insatisfeitos}`);
}
