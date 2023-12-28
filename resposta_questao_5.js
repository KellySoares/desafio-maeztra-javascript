
//Definição inicial de valores em um array
const inputs = [2,3, 5, 9, 10, 4, 6, 7]
function VerificaPossibilidade({ qddPessoas }) {
    //Inicia a variavel poses com 1
    let poses = 1
   //Itera sobre a quantidade de pessoas decresmentando um enquanto for maior que 1
    while(qddPessoas > 1){
        //Calcula a quantidade de poses utilizando a permutação simples, que seria n!(n = Quantidade de pessoas), 
        poses = qddPessoas * poses
        qddPessoas--
    }

    return poses

}
//Iteração do Array de valores iniciais
inputs.forEach(qddPessoas => {
    //Acesso da funcao com a quantidade de pessoas num grupo de amigos do array, retornando quantidade de poses como resposta
    const poses = VerificaPossibilidade({
        qddPessoas: qddPessoas
    })
    //Print no console do valor de entrada e resultado da função
    console.log(`Em um grupo de ${qddPessoas} amigos, eles podem se organizar ${poses} maneiras distintas`)
})


