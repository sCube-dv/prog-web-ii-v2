/* 
Nesta atividade, você deverá implementar um neurônio artificial simples (perceptron apenas na fase de inferência), em JavaScript, utilizando callback para a função de ativação. Não haverá etapa de treinamento: os pesos e o viés serão fornecidos. O objetivo é calcular a saída do neurônio para uma ou mais amostras e retornar a classe prevista.


Instruções 
    a) Função de Potencial (soma ponderada) – Implemente uma função potencial(X, W, b); 
    b) Função de Classificação com Callback – Implemente classificaNeuronio(X, W, b, ativacao), onde ativação é uma função de call-back; 
    c) O neurônio deve fazer classificação binária, ou 1 ou 0; 
*/

let X = [1, 1]
let w = [0.1, 0.2]
let bias = 2

const potencial = (X, w, b) => {
    let somaPonderada = 0

    for (let i = 0; i < X.length; i++){
        somaPonderada += X[i]*w[i]
    }

    return somaPonderada + b
}  

const ativacao = (v) => {
    if(v >= 0) return 1
    return 0
}
 
const classificaNeuronio = (X, w, b, ativacao) => {
    return ativacao(potencial(X, w, b))
}

console.log(
    classificaNeuronio(X, w, bias, ativacao)
)