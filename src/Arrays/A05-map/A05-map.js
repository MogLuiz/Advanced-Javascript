// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosEmDobro = numeros.map(valor => valor * 2)

console.log(numerosEmDobro)


// Para cada elemento:
// Retorne apenas uma string com nome da pessoa
// Remova a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const retornaStringComNome = pessoas.map( pessoa => pessoa.nome ) 
console.log(retornaStringComNome)


const removeChaveNome = pessoas.map( pessoa => {
    delete pessoa.nome
    return pessoa
})
console.log(removeChaveNome)


const adicionaChaveId = pessoas.map((pessoa, indice) => {
    pessoa.id = indice + 1
    return pessoa
})
console.log("------------------")
console.log(adicionaChaveId)