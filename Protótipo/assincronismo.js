const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    /* const numero = parseInt(Math.random()*100)
    resolve(numero) */
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
})

console.log('Esse primeiro')

promessaDeUmNumeroQualquer
.then((value) => {
    console.log(value)
    return value + 10
})

.then((value) => {
    console.log(value)
})

.catch((error) => {
    console.error(error)
})

.finally(() => {
    console.log('Finalizou!')
})