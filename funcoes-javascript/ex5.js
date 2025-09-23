/* 
5. Escreva uma função de converter vetor em objeto. A função deve receber 3 valores, ID, Nome, Telefone e E-mail, e retorne um objeto com esses valores
*/

let vetorParaObj = (id, nome, tel, email) => {
   
    let pessoa = [
        ['ID', id],
        ['nome', nome],
        ['telefone', tel],
        ['email', email]
    ]

    let pessoaObj = Object.fromEntries(pessoa)

    return pessoaObj

}

/* teste da função */
console.log('Ex. 5:')
console.log(vetorParaObj(1, 'Samuel', 99887766, 'sam@emal.com'))