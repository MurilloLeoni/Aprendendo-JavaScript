const pessoa = {
    genero: 'Masculino'
}

/* const murillo = {
    nome: 'Murillo',
    __proto__: pessoa
} */

const murillo = Object.create(pessoa)

murillo.nome = 'Murillo'

console.log(murillo.genero)