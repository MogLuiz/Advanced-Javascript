// Some todos os números (reduce)
// Retorne um Array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador
}, 0)

console.log(total)


const arrayPares = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])

console.log(arrayPares)


const arrayDobroValores = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2)
    return acumulador
}, [])

console.log(arrayDobroValores)
