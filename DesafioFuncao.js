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
function calculeteRankings(wins, defeats) {

    //Variables 
  let balance =wins-defeats;
  let level ="";

    //Condicionais
    if (wins <= 10){
        level = "Ferro";
    } else if (wins >=11 && wins <=20){
         level = "Bronze";
        }else if (wins > 20 && wins <=50){
            level = "Prata";
        }else if (wins >= 51 && wins <= 80){
            level = "Ouro";
         }else if (wins >= 81 && wins <=90){
            level = "Diamante";
          }else if(wins >= 91 && wins <= 100) {
            level = "Lendário";
          }else{
            level = "Imortal";
          }

          return{ 
            winsBalance : balance,
            playerLevel : level
        };

}   

// Player Values 
let playerWins = 105;
let playerDefeats = 10;

let rankingResult = calculeteRankings(playerWins,playerDefeats);


// Message Display
console.log(" Herói tem de saldo de " + rankingResult.winsBalance + " está no nível de " + rankingResult.playerLevel);
