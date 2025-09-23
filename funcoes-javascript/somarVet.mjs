export const somaVetores = (vet, dobro) => {
    let vetorSoma = []

    for (let i = 0; i < vet.length; i++){
        vetorSoma.push(vet[i] + dobro(vet)[i])
    }

    return vetorSoma
}