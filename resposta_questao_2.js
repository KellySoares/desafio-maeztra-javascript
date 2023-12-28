//Definição inicial de valores em um array
const inputs = [
    [4, 5, 44, 98, 4, 5, 6, 7],
    [1, 2, 4, 6, 7, 5, 6, 7],
    [4, 4, 5, 100, 4, 5, 6, 7],
    [4, 105, 44, 98, 4, 4, 6, 4, 5, 6, 7],
    [4, 5, 44, 44, 4, 5, 10, 7],
    [4, 11, 44, 98, 4, 5, 6, 7],
    [4, 5, 55, 98, 4, 5, 6, 7],
    [4, 5, 44, 4, 6, 5, 6, 7],
    [4, 3, 44, 6, 4, 5, -6, 7],
    [4],
    [1, 1, 1, 1, 1, 1, 1]
]
function VerificaDuplicata({ valueInput }) {
    //Utilizei a função filter para buscar os elementos repetidos
    const valorDuplicados = valueInput.filter((item, index) => {
        //verifica o primeiro indice do array que contém o item iterado e verifica se esse indice é diferente do atual
        return valueInput.indexOf(item) !== index
    })
    //Utilizei set, pois ele permite armazenar apenas valores únicos de qualquer tipo. Retornando assim um array sem repetição
    const arraySemRepeticao = [...new Set(valorDuplicados)]
    return arraySemRepeticao

}
//Iteração do Array de valores iniciais
inputs.forEach(valueInput => {
    //Acesso da funcao com cada valor do array, retornando um result como resposta
    const result = VerificaDuplicata({
        valueInput: valueInput
    })
    //Print no console do valor de entrada e resultado da função
    console.log(`Input [${valueInput}] Output [${result}]`)
})


