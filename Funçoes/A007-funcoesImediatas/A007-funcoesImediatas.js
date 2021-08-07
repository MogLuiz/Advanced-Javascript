// IIFE -> Immediately invoked function expression

// (function() {
//     console.log(12345)
// })()

// Essa função não toca o escopo global. Logo eu protegi o meu código, nada no escopo global afeta meu código.

(function(idade, peso, altura) {
   
    const sobrenome = 'Henrique'
    
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Luiz'))
    }

    falaNome()
    console.log(idade, peso, altura)

})(21, 60, 1.71)