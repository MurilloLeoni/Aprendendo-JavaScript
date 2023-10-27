/* const numero = 10;

const isNumeroPar = (numero % 2) === 0;

if(isNumeroPar){
    console.log("O ",numero," é par!")
} else{
    console.log("O ",numero," é impar!")
} */

/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 3.68;
const precoGasolina = 5.79;
const kmPorLitro = 11.5;
const distanciaKm = 153;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaKm / kmPorLitro;

if (tipoCombustivel === 'Etanol'){

    const valorGasto = litrosConsumidos * precoEtanol;
    console.log("O valor gasto com etanol é: ", valorGasto.toFixed(2));

} else{

    const valorGasto = litrosConsumidos * precoGasolina;
    console.log("O valor gasto com gasolina é: ", valorGasto.toFixed(2));
}