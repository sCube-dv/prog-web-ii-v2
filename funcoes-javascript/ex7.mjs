/* 
Nesta  atividade,  você  deverá  implementar  um  código  em  JavaScript  que  utiliza  funções  e callbacks para manipulação de vetores. O objetivo é desenvolver duas funções: uma que soma os elementos de um vetor com os elementos de outro vetor resultante da duplicação de seus valores e outra que realiza essa duplicação. Para isso, siga os passos descritos abaixo: 
 
Instruções 
    a) Função de Duplicação – Implemente uma função dobraVetor(X) que recebe um vetor X e retorna um novo vetor onde cada elemento é o dobro do valor correspondente no vetor original X. 
    b) Função de Soma com Callback – Implemente a função somaVetor(X, dobro), que recebe dois parâmetros: 
        a. Um vetor com os valores originais 
        b. Uma função, que realiza a duplicação dos valores do vetor original 
    c) A Função de Soma deve somar o vetor passado por parâmetro, com o vetor duplicado gerado pela função de duplicação. 
    d) Resultado – Exiba os resultados de ambas as chamadas no console para que seja possível comparar os resultados. 
    e) Ao final, torne somente a função de soma um módulo. 
 
Exemplo de Saída 
    Entrada: 
    Dado um vetor: X = [3, 5, 7, 10, 12], 
    a Função de soma deve retornar R = [9, 15, 21, 30, 36] 
*/

import { somaVetores } from './somarVet.mjs'

let X = [3,5,7,10,12]


const dobraVetor = (vet) => {
    let dobroVetor = []
    
    for (let i = 0; i < vet.length; i++){
        dobroVetor.push(vet[i]*2)
    }

    return dobroVetor
}

console.log(X)
console.log(somaVetores(X,dobraVetor))