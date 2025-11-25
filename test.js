//  CONTAGEM DE 10 A 0
contador = 11;
do{
contador--;
console.log(contador);
}while(contador > 0);
//////////////////////////////////////

// CONTAGEM REGRESSIVA
numero = Number(prompt("Digite um número:"));
contador = numero;
do{
    contador--;
    alert(contador);
}while(contador > 0);

//////////////////////////////////////
//CONTAGEM PROGRESSIVA
numero2 = Number(prompt("Digite um número:"));

contador = -1;
do{
    contador++;
    alert(contador);
}while(contador < numero2);