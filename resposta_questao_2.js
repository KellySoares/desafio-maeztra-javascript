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
function VerificaDuplicata({ arrayInteiros }) {
    //Utilizei a função filter para buscar os elementos repetidos
    const valorDuplicados = arrayInteiros.filter((item, index) => {
        //verifica o primeiro indice do array que contém o item iterado e verifica se esse indice é diferente do atual
        return arrayInteiros.indexOf(item) !== index
    })
    //Utilizei set, pois ele permite armazenar apenas valores únicos de qualquer tipo. Retornando assim um array sem repetição
    const valorDupSemRepeticao = [...new Set(valorDuplicados)]
    return valorDupSemRepeticao

}
//Iteração do Array de valores iniciais
inputs.forEach(arrayInteiros => {
    //Acesso da funcao com array de inteiros passado no parametro, retornando um result como resposta
    const result = VerificaDuplicata({
        arrayInteiros: arrayInteiros
    })
    //Print no console do valor de entrada e resultado da função
    console.log(`Input [${arrayInteiros}] Output [${result}]`)
})


