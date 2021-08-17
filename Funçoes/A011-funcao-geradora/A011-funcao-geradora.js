
function* geradora1() {
    //cod qualquer
    yield 'valor 1'

    //cod qualquer
    yield 'valor 2'

    //cod qualquer
    yield 'valor 3'
}

const g1 = geradora1()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next())
console.log(g1.next())