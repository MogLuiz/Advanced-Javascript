
// Iniciamos com letra maiuscula
// Tb retorna um OBJ
// Nao precisa colocar virgula e sim ponto e virgula(opcional)

function Pessoa(nome, sobrenome) {

    const ID = 12345 // Vai estar disponivel apenas internamente na funcao(PRIVADO)

    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo')
    }
}

const p1 = new Pessoa('Luiz', 'Henrique')
const p2 = new Pessoa('Laryssa', 'Declie')

p1.metodo()