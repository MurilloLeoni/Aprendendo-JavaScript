/* function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}
 */

class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    falar(){
    console.log(`Meu nome é: ${this.nome}`)
    }
}

const murillo = new Pessoa('Murillo', 'Leoni', 24)

console.log(murillo)

murillo.falar()