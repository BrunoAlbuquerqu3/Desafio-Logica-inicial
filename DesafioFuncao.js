/*Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */

//Variables
let win = 0;
let defeat = 0;

let saidasVitorias = win - defeat;
let level= ""; //level variable

function calculateMatches(win, defeat) {
    //Calculo do saldo
    let saidasVitorias = win - defeat;
    //Condicionais
    if (win <= 10){
        level = "Ferro";
    } else if (win > 10){
         level = "Bronze";
        }else if (win > 20){
            level = "Prata";
        }else if (win > 50){
            level = "Ouro";
         }else if (win > 80){
            level = "Diamante";
          }else if(win > 90 && win <= 100) {
            level = "Lendário";
          }else{
            level = "Imortal";
          }

          return saidasVitorias,
          level = level

}   

// Player Values 
let winPlayer = 50;
let defeaPlayer = 20;

let calculateMatches= calculeteRankings(winPlayer,defeaPlayer);


// Message Display
console.log(" Herói tem de saldo de " + saidasVitorias + " está no nível de " + level);
