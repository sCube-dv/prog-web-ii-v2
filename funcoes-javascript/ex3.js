/* 
3. Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função 
para inverter a ordem de diferentes conjuntos de elementos.
*/

const inverteArray = (array) => {
    let arrayInvertido = array.reverse()
    return arrayInvertido
}
/* teste da função */
console.log(`Ex. 3: ${inverteArray([1, 2, 3, 4, 5])}`)