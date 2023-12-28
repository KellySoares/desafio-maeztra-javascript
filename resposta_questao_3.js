//Definição inicial de valores em um array
const inputs = [
    `'{', '[', '(', ')', '(', ')', '{', '}', '[', ']', ']', '{', '}', '}'`,
    `'{', '[', '(', '(', ')', ']', '}'`,
    `'{', '}', '[', ']', '(', ')'`,
    `'(', '(', ')', '{', '}', '[', '[', ']', ')'`,
    `'[', '{', '}', '(', '[', ')', ']', ']'`,
    `'[', '{', '(', ')', '}', ']'`,
    `'[', '}', '(', ')', '}', ']'`,
    `']', '}', '(', ')', '{', '}'`,
    `'['`,
    `''`,
    `'[', '{', '(', ')', '}'`,
    `'[', '{', '{', '(', ')'`,
    `'(', '{', '(', '}', ')', ')'`
]
function VerificaSequencia({ stringInput }) {
    //Iniciando variaveis de pilha, fila, lista e pares de simbolos.

    let pilha = [] // Variavel para adicionar simbolos abertos
    let fila = [] // Variavel para adicionar simbolos fechados
    let lista = [] // Variavel para adicionar simbolos não combinantes da pilha e fila
    let pares = {
        'parenteses': 0,
        'chave': 0,
        'colchetes': 0
    }
    /*Pega o valor passado por parametro, 
    quebra a string em arrays excluindo caracteres como ' e ,
    filtra apenas elementos que possuem caracteres como parenteses, colchetes e chaves
    */
    const arrayChar = stringInput.split(/[' ,]/).filter(item => item !== '')
    //Verfica se o array está vazio
    if (arrayChar.length === 0) return {
        sequencia: arrayChar,
        mensagem: `é uma sequência válida`
    }
    //verifica se o array possui apenas um elemento
    if (arrayChar.length === 1) return {
        sequencia: arrayChar.join(' '),
        mensagem: `não é uma sequência válida (O número de caracteres está incorreto)`
    }

    /*
    Utilizei uma estrutura de repetição para iterar sobre o array arrayChar formado
    caso seja o primeiro indice do array:
        Se os simbolos estiverem fechados é acrescentado mais 1 no objeto pares, conforme o simbolo iterado
        Se os simbolos estiverem abertos é acrescentados do array de pilha
    caso não seja o primeiro indicie do array:
        Caso tenha algum valor na pilha pego o ultimo elemento, senão recebe 0 e armazenona variavel prevChar
        E uso uma estrutura de condicional para verificar:
            caso seja simbolos fechados e inverso ao simbolo armazenado na variavel prevChar
                retiro o ultimo elemento da pilha que seria o simboloda variavel prevChar
            Caso seja simbolos fechados e nao seja inverso ao simbolo armazenado na variavel prevchar
                adiciono o elemento atual na fila
            caso seja simbolos abertos:
                adiciono na pilha

    
    */
    for (var i = 0; i < arrayChar.length; i++) {
        const char = arrayChar[i]
        if (i === 0) {
            if (char === ')') pares.parenteses++
            else if (char === ']') pares.colchetes++
            else if (char === '}') pares.chave++
            else {
                pilha.push(char)
            }
        } else {
            const prevChar = pilha.length > 0 ? pilha[pilha.length - 1] : 0
            switch (char) {
                case ')':
                    if (prevChar === '(') {
                        pilha.pop()
                    } else fila.push(char)
                    break;
                case '}':
                    if (prevChar === '{') {
                        pilha.pop()
                    } else fila.push(char)
                    break;
                case ']':
                    if (prevChar === '[') {
                        pilha.pop()
                    } else fila.push(char)
                    break;
                default:
                    pilha.push(char)
                    break;
            }

        }

    }
    //Verifica se o tamanho da fila e pilha são iguais e maiores do que zero
    if (fila.length !== pilha.length && fila.length > 0 && pilha.length > 0) {

        /*
    Utilizei uma estrutura de repetição para iterar sobre a fila formada
        Armazenei o ultimo elemento da pilha na variavel prevChar

        utilizei uma condicional para verificar se o item iterado era algum simbolo fechado
            caso for simbolo fechado:
                verificar se é inverso ao elemento armazenado na variavel prevChar
                    remove ultimo elemento da pilha
                    remove primeiro elemento da fila
                Se for não for inverso ao elemento da variavel prevchar
                    adiciona o ultimo elemento da pilha na lista
                    remove ultimo elemento da pilha

    
    */
        var i = 0
        while (i < fila.length) {

            const prevChar = pilha[pilha.length - 1]

            switch (fila[i]) {
                case ')':
                    if (prevChar === '(') {
                        pilha.pop()
                        fila.shift()
                    } else {
                        lista.push(prevChar)
                        pilha.pop()
                    }
                    break;
                case '}':
                    if (prevChar === '{') {
                        pilha.pop()
                        fila.shift()
                    } else {
                        lista.push(prevChar)
                        pilha.pop()
                    }
                    break;
                case ']':
                    if (prevChar === '[') {
                        pilha.pop()
                        fila.shift()
                    } else {
                        lista.push(prevChar)
                        pilha.pop()
                    }
                    break;
                default:
                    break;
            }

        }

    }

    /*
    Utiliza as funcoes concat para concatenar os arrays pilha, fila e lista. 
    E filter para filtrar apenas o simbolo desejado e lenght pegar o tamanho do array formado.

    Soma quantidade de cada simbolo nos arrays concatenados 
    com os valores já adicionados/inicializados no objeto pares{} de cada simbolos.
    */
    const filterChave = pilha.concat(fila).concat(lista).filter(char => char === "{" || char === "}").length
    pares.chave = filterChave + pares.chave;

    const filterParenteses = pilha.concat(fila).concat(lista).filter(char => char === "(" || char === ")").length
    pares.parenteses = filterParenteses + pares.parenteses;

    const filterColchetes = pilha.concat(fila).concat(lista).filter(char => char === "[" || char === "]").length
    pares.colchetes = filterColchetes + pares.colchetes;

    /* Verifica quais simbolos estão errados na sequencia, para serem adicionados na string de retorno do console */
    let simbolos = []
    if (pares.parenteses > 0) simbolos.push('parêntese')
    if (pares.chave > 0) simbolos.push('chave')
    if (pares.colchetes > 0) simbolos.push('colchete')

    /* Verifica se o numero de caracteres está correto */
    if (arrayChar.length % 2 === 0) {
        /* Verifica se e uma sequencia válida conforme o resultado obtido no objetos pares{} */
        if (pares.parenteses === 0 && pares.colchetes === 0 && pares.chave === 0) {
            return {
                sequencia: arrayChar.join(' '),
                mensagem: `é uma sequência válida`
            }
        } else {

            return {
                sequencia: arrayChar.join(' '),
                mensagem: `não é uma sequência válida (O número de caracteres está correto, mas o posicionamento de uma ${simbolos.join('/')} está incorreto)`
            }
        }

    } else {
        return {
            sequencia: arrayChar.join(' '),
            mensagem: `não é uma sequência válida (Há uma ${simbolos.join('/')} posicionado incorretamente)`
        }
    }

}
//Iteração do Array de valores iniciais
inputs.forEach(stringInput => {
    //Acesso da funcao com uma string com a sequencia de caracteres, retornando um result como resposta
    const result = VerificaSequencia({
        stringInput: stringInput
    })
    //Print no console do valor de entrada e mensagem da função
    console.log(`${result.sequencia} ${result.mensagem}`)
})


