
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