/* 
4. Crie uma função que receba um vetor, um valor v e retorne a posição de v no vetor
*/

const retornaPosVet = (vetor, valor) => {
    if (vetor.indexOf(valor) !== -1) {
        return vetor.indexOf(valor)
    }
    return `O valor informado (${valor}) não está no vetor!`
}

/* teste da função */
console.log(`Ex. 4: ${retornaPosVet([1, 2, 3, 4, 5], 3)}`)