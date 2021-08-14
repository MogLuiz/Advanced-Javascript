//Factory function - São funções que retornam um objeto

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}` //Usando this.nome estou acessando a chave "nome" e não ao parâmetro. 
        },
        altura,
        peso,
        get imc() { // Fazendo um método se passar um atributo dentro de um objeto
            const indice = this.peso / (this.altura * this.altura)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Luiz', 'Henrique', 1.71, 63)
const p2 = criaPessoa('Laryssa', 'Decliê', 1.62, 46)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc) // Chamando um método em formato de atributo.