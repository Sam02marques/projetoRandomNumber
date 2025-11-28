
alert("Boas vindas ao jogo do número secreto");
let numberAttempt = 1;
let  secretNumber =  Math.floor(Math.random() * 1000) + 1;// FUNÇÃO NATIVA QUE GERA UM NUMERO INTEIRO ALEATÓRIO INCLUINDO O VALOR MÁXIMO E MÍNIMO;
let input = document.querySelector('#meu-chute');
let textoNaTela = document.querySelector('#texto-dica');
let btnReiniciar = document.querySelector('#btn-reiniciar');
// FUNÇÃO QUE PEDE AO USUARIO UM NUMERO ALEATORIO, E A PARTIR DISSO OFERECE DICAS DE QUAL NUMERO É
function identifier(){
    let attempt = Number(input.value); // PEGA O NÚMERO DA CAIXA
        
        if (input.value == ""){
            alert("Digite um número");
            return;
        }

        if (attempt === secretNumber){ //OPERADOR TERNÁRIO QUE CRIA UMA CONDIÇÃO DE FRASE PARA QUANDO AS TENTATIVAS FOREM MAIORES QUE 1 E IGUAIS A 1
            let attemptPhrase = numberAttempt > 1? "tentativas" : "tentativa, IMPRESSIONANTE!";
            textoNaTela.innerText= `Parabéns! Você descobriu o número secreto ${secretNumber} com ${numberAttempt} ${attemptPhrase}`;

            btnReiniciar.disabled = false;
        } else{

            if(secretNumber != attempt){ //OPERADOR TERNARIO PARA QUANDO A TENTATIVA FOR MAIOR OU MENOR QUE O NUMERO SECRETO
            let hint = attempt > secretNumber? "menor" : "maior";
            textoNaTela.innerText = `O número é ${hint}`;
            }

            numberAttempt++; // O ++ ATRIBUI EM 1 O VALOR DA VARIAVEL, QUE É RESPONSÁVEL POR CONTABILIZAR O NUMERO DE TENTATIVAS DO USUARIO ATÉ ACERTAR
        // A CADA TENTATIVA O VALOR É ARMAZENADO NESSA VARIÁVEL, QUE ESTÁ NO FINAL DO CÓDIGO
            limparInput();   // Limpa a caixinha pra próxima tentativa
        }
        


    
}

// FUNÇÕES AUXILIARES
function limparInput() {
    input.value = "";
    input.focus();
}

function reiniciar() {
    secretNumber = Math.floor(Math.random() * 1000) + 1;
    numberAttempt = 1;
    textoNaTela.innerText = "Tente adivinhar o novo número...";
    btnReiniciar.disabled = true;
    limparInput();
}





identifier();

