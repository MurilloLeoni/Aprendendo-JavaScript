const pessoa = {
    idade: 18
}

const murillo = {
    nome: 'Murillo',
    //idade: 24,
    __proto__: pessoa
}

console.log(murillo.idade)//percorre todo o objeto murillo, se não achar percorre o protótipo. Se tirar comentário dentro de murillo, mostra 24, se deixar comentário, retorna 18.