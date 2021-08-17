function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(10))
console.log(triplica(10))
console.log(quadriplica(10))


function criaPessoa(nome, sobrenome) {
    return {  nome, sobrenome }
}

const p1 = criaPessoa('Luiz', 'Henrique')

const p2 = {
    nome: 'Bruno',
    sobrenome: 'Otávio'
}

console.log(p1)
console.log(p2)

function falaFrase(comeco) {
    
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    
    return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('mundo')

console.log(resto)