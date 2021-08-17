// Declaração de função (function hoisting)

function falaOi() {
    console.log('Oie')
}

// Function expression

const souUmDado = function () {
    console.log('Sou um dado')
}

souUmDado()

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo')
    funcao()
}

executaFuncao(souUmDado)

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}

funcaoArrow()

// Dentro de um objeto

const obj = {
    falar() {
        console.log('Estou falando')
    }
}

obj.falar()