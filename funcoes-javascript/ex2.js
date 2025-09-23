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
console.log(`Ex. 2: ${ehPar(72)}`)