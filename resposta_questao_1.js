//Definição inicial de valores em um array
const inputs = [
    '12345678',
    '1223455678',
    '876543210',
    '152456457',
    '12356789',
    '13579',
    '9765421',
    '123454321',
    '12222222',
    '2111111',
    '1599',
    '11111',
    12121212,
    '1111112',
    '22222221',
    '11111111111111111111111111111111111111111111111111111111111111111111111234566777777777777',
    '1'
]
function VerificaOrdenacao({ intPositivo }) {
    //Iniciando variaveis de definição do tipo de ordenação
    let ASC = false
    let DESC = false
    /*Pega o valor passado por parametro, transforma em string e 
    quebra a string em array de dígitos*/
    const digitos = intPositivo.toString().split('');
    //Verifica se o array "digitos" possui apenas um numero
    if (digitos.length === 1) return (`Está ordenado`)
    /*
    Itera sobre o array digitos, comecando pelo segundo item do array
    caso seja o segundo, 
            compara com o primeiro e verifica se é crescente, decrescente ou se é ambos(Repetidos)
    caso nao seja o segundo elemento, 
            vai verificar se existe diferenca de um digito ou menos(0) entre o atual e anterior. 
            E ao mesmo tempo estará definindo a ordem crescente, decrescente ou repetido
    */
    for (var i = 1; i < digitos.length; i++) {
        const digito = digitos[i]
        const digitoAnterior  = digitos[i - 1]
        if (i == 1) {
            if (((digito - digitoAnterior) == 1 || (digito - digitoAnterior) == 0)) {
                ASC = true
            }
            if (((digito - digitoAnterior) == '-1' || (digito - digitoAnterior) == 0)) {
                DESC = true
            }
        } else {
            
            if (ASC) {
                if (((digito - digitoAnterior) == 1 || (digito - digitoAnterior) == 0)) {
                    ASC = true
                } else {
                    ASC = false
                    break
                }
            }
            if (DESC) {
                if (((digito - digitoAnterior) == '-1' || (digito - digitoAnterior) == 0)) {
                    DESC = true
                } else {
                    DESC = false
                    break
                }
            }
        }
    }
    //Caso ASC ou DESC seja true, está ordenado. Se ambos forem false, não está ordenado
    if (ASC || DESC) {
        /*definição do tipo de ordenação:
                Ambos TRUE: Repetidos
                ASC True: Crescente
                Desc True: Decrescente
        */
        const tipoOrdenacao = ASC && DESC ? 'REPETIDOS' : ASC ? 'CRESCENTE' : 'DECRESCENTE'
        return `Está ordenado ${tipoOrdenacao}`
    } else {
        return 'Não está ordenado'
    }


}
//Iteração do Array de valores iniciais
inputs.forEach(intPositivo => {
    //Acesso da funcao com cada valor do array, retornando um result como resposta
    const result = VerificaOrdenacao({
        intPositivo: intPositivo
    })
    //Print no console do valor de entrada e resultado da função
    console.log(`Input ${intPositivo} -> ${result}`)
})


