
/*Definição inicial de valores em um array*/
const inputs = [
    [1960, 2005],
    [1945, 2008],
    [1938, 1999],
    [1985, 1990],
    [2000, 2002],
    [2010, 2020]
]
function VerificaAnosTrabalhados({ anosEntrada }) {
    //Iniciando variavel do tipo objeto para armazenar os anos e total de pessoas por ano
    let anosTotalPessoas = {}

    /* Iterando no array fornecido para a funcão
            -atribuindo valor para as variaveis inicioTrabalho e FimTrabalho com valore do array
            -Condicional para verificar se os valores então dentro dos limites permitidos,
                caso esteja:
                    utiliza a funcao Array.from para criar um array auxiliar com 
                    os anos restantes entre os valores inicioTrabalho e FimTrabalho
    */
    anosEntrada.forEach(element => {
        const [inicioTrabalho, fimTrabalho] = element;
        if (inicioTrabalho > 0 && fimTrabalho > 0 && inicioTrabalho < fimTrabalho) {
            var anosTrabalhados = Array.from({ length: ((fimTrabalho + 1) - inicioTrabalho) }, (_, i) => inicioTrabalho + i);
        }
        /*
        Percorre o array anosTrabalhado, fornecido pela funcao ArrayFrom.
            Caso tenha a propriedade nomeada com o ano percorrido no objeto anosTotalPessoas, é incrementado mais 1 
            Caso nao tenha a propriedade é criada uma nova propriedade com o ano percorrido iniciado com 1 */
        anosTrabalhados.forEach(ano => {
            if (anosTotalPessoas.hasOwnProperty(`${ano}`)) anosTotalPessoas[ano]++
            else anosTotalPessoas[ano] = 1
        });

    });
    
    //Utiliza a função Object.values para transformar o objeto anosTotalPessoas em array e Math.max para encontrar o maior valor
    const totalMaior = Math.max(...Object.values(anosTotalPessoas))

    /*Utiliza a função Object.entries para transformar o objeto anosTotalPessoas em array 
    e percorrer para encontrar todos os anos que possuem total de pessoas igual a variavel totalMaior 
    Os que satisfazem a condição é adicionado ao array anosQddMaior e retornado para ser apresentado no console.
    */
    const anosQddMaior = []
    Object.entries(anosTotalPessoas).forEach(item => {
        const [ano, total] = item
        if (total === totalMaior) anosQddMaior.push(ano)
    })

    return anosQddMaior

}

//Acesso da funcao passando o array e retornando um result como resposta
const result = VerificaAnosTrabalhados({
    anosEntrada: inputs
})
//Print no console do valor de entrada e resultado da função
console.log(`Input [[${inputs.join('],[')}]] Output [${result}]`)



