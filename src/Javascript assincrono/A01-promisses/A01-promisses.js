function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {  
   return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE')
    setTimeout(() => {
        resolve(msg)
    }, tempo)
   })
}


esperaAi('Frase 1', rand(1, 3))
    .then(res => {
        console.log(res)
        return esperaAi(234234, rand(1, 3))
    })
    .then(res2 => {
        console.log(res2)
    })
    .catch(e => {
        console.log('ERRO', e)
    })