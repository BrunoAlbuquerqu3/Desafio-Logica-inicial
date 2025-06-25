// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// O número de produtos a ser adicionado
let numeroDeProdutos = parseInt(gets());

// TODO: Crie um array para armazenar os produtos:
carrinhoFinal=[];

// TODO: Leia os produtos e os adicione ao carrinho:
for(let i=0;i<numeroDeProdutos;i++){
  let produtos = gets();
  
  carrinhoFinal.push(produtos);
  
}

// TODO: Exiba o carrinho final no formato esperado;
print("Carrinho final: " + carrinhoFinal.join(", "));