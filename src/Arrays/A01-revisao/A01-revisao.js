
const nomes = ['Eduardo', 'Maria', 'Joana']
const novo = nomes // Valores passados por referência, então tudo que eu fizer em um reflete no outro. Pois apontam pro mesmo end. de memôria
const novoSpread = [...nomes]

const removeFim = novo.pop() // Remove um elemento do meu array e retorna na contante. O Pop trabalha no final do Array 
const removeInicio = novo.shift() // Trabalha no inicio do array

novoSpread.push('Luizin') // Adiciona elemento no final do meu array
novoSpread.unshift('duGrau') // Adicionando elemento no inicio do array, porém desloca os outros indices.

const fatiado = novoSpread.slice(1, 4) // Fatiando array da posição 1 até a 3 do array

delete nomes[2] // Utilizo quando quero deletar um elemento sem afetar os indices

console.log(novoSpread, removeFim, removeInicio)

console.log(fatiado)


// TRANSFORMANDO UMA STRING EM ARRAY
const meuNome = 'Luiz Henrique de Jesus'
const transformStringArray = meuNome.split(' ') // Transforma minha string em array separando cada posição por espaço
console.log(transformStringArray)