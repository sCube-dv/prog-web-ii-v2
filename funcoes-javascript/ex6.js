/* 
Converta a função da Questão 1 em uma função que receba um valor, a porcentagem e uma função de call-back que calcule a porcentagem. Chame a função implementando a função call-back como uma arrow Function.
*/

const calcValorFinal = (v, p) => {
    return v + (v*p/100)
}


const valorPorcentagem = (valor, porcentagem, calcValorFinal) => {
    return calcValorFinal(valor, porcentagem)
}

/* teste da função */
console.log(valorPorcentagem(100, 10, calcValorFinal))