// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let operacao = parseInt(gets());
let quantidade = parseInt(gets());

let estoque = 5;

// TODO: Implemente a condição necessária para verificar a operação. Se for 1, adiciona a quantidade ao estoque:
if (operacao == 1){
  let entrada = quantidade;
  console.log(estoque + entrada);

// TODO: Se a operação for 2, tenta retirar a quantidade do estoque:
  }else if(operacao == 2){
      if(estoque >= quantidade){
    let saída =+ quantidade;
    console.log(estoque - saída);}
    
// TODO: Caso não tenha estoque suficiente, exibe a mensagem indicada:
 else{console.log("Estoque insuficiente");}
      }
else {console.get("Operação invalida");}