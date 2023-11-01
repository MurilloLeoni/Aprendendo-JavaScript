//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
lista = [];
for (let i = 11; i < 50; i++) {
    if(i % 2 === 0){
        lista.push(i);
    }
}
console.log(lista);