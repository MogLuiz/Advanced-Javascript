
function funcao() {
    console.log(arguments) // Com o arguments tenho acesso a todos os argumentos enviados
}                          // Mesmo que não tenham sido recebidos pela função.

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9)

function soma(a, b = 2, c = 4) {
    console.log(a + b + c)
}

soma(10, undefined, 5) // Passando undefined o valor assume o padrão definido na função

// Parametros por desestruturação

function destruc({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

destruc({ nome: 'Luiz', sobrenome: 'Henrique', idade: 20 })

// Parametro com rest operator

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero

    }
    console.log(acumulador)
}

conta('+', 1, 20, 30, 40, 50)