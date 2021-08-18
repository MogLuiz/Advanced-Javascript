
const nomes = ['Maria', 'Jõao', 'Eduardo', 'Gabriel', 'Júlia']


// usando splice como pop para remover elemento do array

const removidos = nomes.splice(1, 2) // Começando do índice 1 e removendo 2 elementos
console.log(nomes, removidos)


// splice(índice, delete, elem1, elem2, elem3)

const nomes1 = ['Maria', 'Jõao', 'Eduardo', 'Gabriel', 'Júlia']

const removidos1 = nomes1.splice(2, 1, 'Luiz') // Começando a partir do índice 2 removendo 1 elemento e adicionando 'Luiz' no indice 2

console.log(nomes1) 


// Simulando shift

const nomes2 = ['Maria', 'Jõao', 'Eduardo', 'Gabriel', 'Júlia']

const removidos2 = nomes2.splice(0, 1)

console.log(removidos2)
