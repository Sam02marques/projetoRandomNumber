
alert("Boas vindas ao jogo do número secreto");
let numberAttempt;
let secretNumber;

// FUNÇÃO QUE PEDE AO USUARIO UM NUMERO ALEATORIO, E A PARTIR DISSO OFERECE DICAS DE QUAL NUMERO É
function identifier(){
    numberAttempt = 1;
    secretNumber =  Math.floor(Math.random() * (1 - 1 + 1)) + 1;// FUNÇÃO NATIVA QUE GERA UM NUMERO INTEIRO ALEATÓRIO INCLUINDO O VALOR MÁXIMO E MÍNIMO
    let attempt;
    do{ // SERVE PARA EXECUTAR TODA ESSA LINHA DE CÓDIGO, O WHILE NÃO DEIXA ESSA EXECUÇÃO PARAR ENQUANTO A CONDIÇÃO NÃO É FEITA
        attempt = Number(prompt("Insira um número qualquer, de 1 a 1000, e eu te direi se ele é maior ou menor do que o número que escolhi"));
        
        if (isNaN(attempt)){
            alert("Digite um número");
            continue;
        }
        
            
        if(secretNumber != attempt){ //OPERADOR TERNARIO PARA QUANDO A TENTATIVA FOR MAIOR OU MENOR QUE O NUMERO SECRETO
            let hint = attempt > secretNumber? "menor" : "maior";
            alert(`O número é ${hint}`);
        }

        if (attempt === secretNumber){ //OPERADOR TERNÁRIO QUE CRIA UMA CONDIÇÃO DE FRASE PARA QUANDO AS TENTATIVAS FOREM MAIORES QUE 1 E IGUAIS A 1
            let attemptPhrase = numberAttempt > 1? "tentativas" : "tentativa, IMPRESSIONANTE!";
            alert(`Parabéns! Você descobriu o número secreto ${secretNumber} com ${numberAttempt} ${attemptPhrase}`);
        }
        

        numberAttempt++; // O ++ ATRIBUI EM 1 O VALOR DA VARIAVEL, QUE É RESPONSÁVEL POR CONTABILIZAR O NUMERO DE TENTATIVAS DO USUARIO ATÉ ACERTAR
        // A CADA TENTATIVA O VALOR É ARMAZENADO NESSA VARIÁVEL, QUE ESTÁ NO FINAL DO CÓDIGO
    }while(attempt !== secretNumber); // CONDIÇÃO PARA FINALIZAR O LOOP

    
}

identifier();

