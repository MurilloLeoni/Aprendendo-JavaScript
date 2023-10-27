/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso. */
class Carro{
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularViagem(distancia, precoCombustivel){
        return distancia * this.gastoPorKm * precoCombustivel;
    }
}

const corsa = new Carro('Chevrolet','Prata',1/10);
console.log(corsa.calcularViagem(120,5.76));

const x1 = new Carro('BMW','Branco', 1/7);
console.log(x1.calcularViagem(120,5.76).toFixed(2));