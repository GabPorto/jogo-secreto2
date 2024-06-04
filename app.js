
//Definindo uma mensagem
alert('Seja Bem Vindo! Jogo -  Número Secreto!!');

let numeroMaximo = 10;
//declarando uma variável - ultilizar "LET"
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//let numeroSecreto = 9;
let chute;
let tentativas = 1;
console.log('Valor do número secreto:', numeroSecreto);

//While usado para repetição, enquanto uma condição não acontecer irá ficar rodando o WHILE 
while(chute != numeroSecreto){   
//Definir uma pergunta para o usuário - Ultilizar "PROMPT"//
    chute = prompt(`Digite um número de 1 até ` +numeroMaximo ); // Usar o "LET CHUTE" variável que irá armazenar o número digitado pelo usuário

    //Usando condição para comparar os valores do número secreto com o numero escolhido pelo usuário
    if(chute == numeroSecreto){
        break;        
    }else { 
        if(chute < numeroSecreto){
            alert(`O numero secreto é maior que ` +chute);    
            
        }
        else {
            alert(`O numero secreto é menor que: ` +chute);
        }
        tentativas++;
        
    }
}
//Usando operadores ternários - usado como uma frase
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você descobriu o numero secreto ` +numeroSecreto+ ` com ${tentativas} ` +palavraTentativa); // Pode colocar o + antes da variável
console.log('Parabéns você descobriu o numero secreto!!');
// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);
console.log('Número do chute:', chute);
console.log('Tentativas para acerto do numero secreto', tentativas);
