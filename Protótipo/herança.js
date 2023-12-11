const pessoa = {
    genero: 'Masculino'
}

const murillo = {
    nome: 'Murillo',
    sobrenome: 'Leoni',
    idade: 24,
    __proto__: pessoa
}

console.log(murillo.genero)