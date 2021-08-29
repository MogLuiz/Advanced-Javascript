
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Define se a chave sera exibida ou nao
        value: estoque,
        writable: false, // Define se o value podera ser alterado
        configurable: false, // configuravel
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)