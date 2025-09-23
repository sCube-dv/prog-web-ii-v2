/* 
1. Crie  uma  função  que  receba  um  valor  e uma porcentagem  como  parâmetros.  A  função deve retornar o valor acrescido da porcentagem indicada. 
*/

const calculaPorcetagem = (valor, porcentagem) => {
    let valorFinal = valor + (valor * porcentagem / 100)
    return valorFinal
}
/* teste da função */
console.log(`Ex. 1: ${calculaPorcetagem(100, 10)}`) // 110