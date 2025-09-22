/* 
1. Crie  uma  função  que  receba  um  valor  e uma porcentagem  como  parâmetros.  A  função deve retornar o valor acrescido da porcentagem indicada. 
*/

const calculaPorcetagem = (valor, porcentagem) => {
    let valorFinal = valor + (valor * porcentagem / 100)
    return valorFinal
}
/* teste da função */
console.log(`1. ${calculaPorcetagem(100, 10)}`) // 110

/* 
2. Desenvolva uma função que determine se um número é par ou não. Retorne true se for par e 
false se não for
*/

const ehPar = (n) => {
    let par = false
    n % 2 === 0 ? par = true : par = false
    return par
}
/* teste da função */
console.log(`2. ${ehPar(7)}`)

/* 
3. Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função 
para inverter a ordem de diferentes conjuntos de elementos.
*/

const inverteArray = (array) => {
    let arrayInvertido = array.reverse()
    return arrayInvertido
}
/* teste da função */
console.log(`3. ${inverteArray([1, 2, 3, 4, 5])}`)

/* 
4. Crie uma função que receba um vetor, um valor v e retorne a posição de v no vetor
*/

const retornaPosVet = (vetor, valor) => {
    if (vetor.indexOf(valor) !== -1) {
        return vetor.indexOf(valor)
    }
    return 'O valor informado não está no vetor!'
}

/* teste da função */
console.log(`4. ${retornaPosVet([1, 2, 3, 4, 5], 0)}`)