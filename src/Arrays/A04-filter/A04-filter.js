
// Retorne os números maiores do que 10

const numeros = [5, 50, 80, 1, 2 , 3, 5, 8, 10, 11, 15, 22, 27, 30]

// Método tradicional para usar filter criando uma função
function callbackFilter(valor, indice, array) {
    return valor > 10
}

const numerosFiltradosTradicional = numeros.filter(callbackFilter)

console.log(numerosFiltradosTradicional)

// Método simplificado para usar filter direto na constante

const numerosFiltrados = numeros.filter((num) => num >= 10 )

console.log(numerosFiltrados)


// Filtrando um Array de objetos
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "a"

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]