//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
const lista = ['murillo','vinicius','vanessa','joao'];

for (let i = 0; i < lista.length; i++) {
    const nome = lista[i];
    if (nome[0] === 'v') {
        console.log(nome);
    }
}