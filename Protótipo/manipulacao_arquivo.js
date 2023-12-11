const fs = require('fs')

/*const promessaDaLeituraArquivo = fs.promises.readFile('C:/Users/Murillo/OneDrive - Fatec Centro Paula Souza/ADS2.0/DIO/JavaScript/Aprendendo-JavaScript/Protótipo/tarefas.csv')

 promessaDaLeituraArquivo
.then((arquivo) => arquivo.toString('utf8'))
.then((texto) => texto.split('\n').slice(1))
.then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
    const [nome, feito] = linha.split(';')
    return {
        nome,
        feito: feito === 'true'
    }
}))
.then((listaDeTarefas) => console.log(listaDeTarefas))
.catch((error) => console.log('Deu ruim!',error)) */

async function buscarArquivo(){
    try {
    const arquivo = await fs.promises.readFile('C:/Users/Murillo/OneDrive - Fatec Centro Paula Souza/ADS2.0/DIO/JavaScript/Aprendendo-JavaScript/Protótipo/tarefas.csv')
    const textoDoArquivo = arquivo.toString('utf8')
    console.log(textoDoArquivo)
    } catch (error) {
        console.log(error)
    } finally{
        console.log('Finalizou!')
    }
}

buscarArquivo()