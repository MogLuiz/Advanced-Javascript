
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



// Simulando o PUSH

const nomes3 = ['Maria', 'Jõao', 'Eduardo', 'Gabriel', 'Júlia']

nomes3.splice(nomes3.length, 0, 'Luiz')

console.log(nomes3)


// Simulando o unshift

const nomes4 = ['Maria', 'Jõao', 'Eduardo', 'Gabriel', 'Júlia']

nomes4.splice(0, 0, 'Luiz', 'Henrique', 'de', 'Jesus')

console.log(nomes4)
