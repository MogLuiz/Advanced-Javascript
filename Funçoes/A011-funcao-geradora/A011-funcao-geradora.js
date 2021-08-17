
function* geradora1() {
    //cod qualquer
    yield 'valor 1'

    //cod qualquer
    yield 'valor 2'

    //cod qualquer
    yield 'valor 3'
}

const g1 = geradora1()

// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next())

for (let valor of g1) {
    console.log(valor)
}

// Gerador infinito
function* geradora2() {
    let i = 0

    while(true) {
        yield i
        i++
    }
}

const g2 = geradora2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)


// Gerador que delega tarefa pra outro gerador

function* geradora3() {
    yield 0
    yield 1
    yield 2
}

function* geradora4() {
    yield* geradora3() // Delegando o 0, 1 e 2 pra geradora 3. 

    yield 3
    yield 4 // Executando a 3, 4 e 5 na geradora 4
    yield 5
}

const g4 = geradora4()
for (let valor of g4) {
    console.log(valor)
}


// Gerador com funções

function* geradora5() {
    yield function() {
        console.log('Vim do y1')
    }

    return // O return termina a função

    yield function() {
        console.log('Vim do y2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()