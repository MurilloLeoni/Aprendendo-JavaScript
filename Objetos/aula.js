const pessoa = {
    nome : 'Murillo',
    idade: 24,

    descrever: function(){

        console.log(`Meu nome é ${pessoa.nome} e minha idade é ${pessoa.idade}`);
    }
}

const atributo = 'idade';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);
//pessoa.descrever();
//murillo.altura = 1.78;

//delete murillo.nome;