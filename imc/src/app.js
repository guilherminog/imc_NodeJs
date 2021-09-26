const readline = require('readline');

let altura, peso;

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcIMC(altura, peso){
    return peso/(altura*altura)   
}

terminal.question("Insira sua altura:\n",(alt) => {
    altura = alt
   
    terminal.question("Insira seu peso:\n ",(ps) => {
        peso = ps
        const IMC = calcIMC(altura, peso);
        console.log(IMC);
        if(IMC <= 18.5){
            console.log("Voce esta abaixo do peso ideal")
        } 
        else if(IMC >= 18.5 && IMC <= 24.9){
            console.log("Voce esta com peso ideal")
        } 
        else if(IMC >= 25 && IMC <= 29.9){
            console.log("Voce esta com sobrepeso")
        } 
        else if(IMC >= 30 && IMC <= 39.9){
            console.log("Voce esta com obesidade")
        }
        else if(IMC >= 40){
            console.log("Voce esta com obesidade grave")
        }
                
        terminal.close();
    })
})
