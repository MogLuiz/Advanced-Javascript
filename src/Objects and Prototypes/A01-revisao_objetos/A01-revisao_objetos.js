// Objeto Literal
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


console.log('----------------------')

// Construtor do objeto
const pessoa2 = new Object()


pessoa2.name = 'Luizin'
pessoa2.sobrenome = 'DúGrau'
pessoa2.idade = 21

pessoa2.falarNome = function() {
   return `${this.name} está falando seu nome`
}

pessoa2.getDataNascimento = function() {
    const dataAtual = new Date()

    return dataAtual.getFullYear() - this.idade
}

delete pessoa2.sobrenome

console.log(pessoa2.falarNome())
console.log(pessoa2.getDataNascimento())