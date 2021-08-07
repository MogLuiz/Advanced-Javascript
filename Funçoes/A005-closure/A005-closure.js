function retornaFuncao() {
    const nome = 'Luiz'
    return function() {
        return nome
    }
}

const chamaFuncao = retornaFuncao()
console.log(chamaFuncao)