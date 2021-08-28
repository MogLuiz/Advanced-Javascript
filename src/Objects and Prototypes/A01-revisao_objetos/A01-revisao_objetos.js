const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Henrique',
}

// Formas de acesso a um  objeto

console.log(pessoa['nome']) // Acessando um objeto com a notação de colchetes

console.log(pessoa.sobrenome)

// Acessando chave de um objeto de forma dinâmica

const chave = 'nome'

console.log(pessoa[chave])