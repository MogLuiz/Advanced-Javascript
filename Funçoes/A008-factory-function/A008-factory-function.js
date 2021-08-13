//Factory function - São funções que retornam um objeto

function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${nome} está ${assunto}`
        }

    }
}

const p1 = criaPessoa('Luiz', 'Henrique')
console.log(p1.fala("codando"))