
// TODO: Crie uma função chamada calcularDesconto():
    function calcularDesconto(valorCompra,cupom=""){
        let totalCompra = 0;
        let desconto = 0;
          if (cupom === ""){
            totalCompra = valorCompra;
          }
            else if (cupom === "DESCONTO10"){
            desconto = valorCompra*0.10;
            totalCompra = valorCompra - desconto;
             }else if (cupom === "DESCONTO20"){
               desconto = valorCompra*0.20;
               totalCompra = valorCompra - desconto;
              }
                return totalCompra;     
      }
    // Lê o valor total da compra e o código do cupom
      let valorCompra = 100;
      let cupom = "DESCONTO20";

    // TODO: Calcule o valor final com base no cupom:
     let ValorCobrado = calcularDesconto(valorCompra,cupom);

    // TODO: Imprima o valor final com o desconto, formatado para R$:
    console.log("Valor final da compra: R$ " + ValorCobrado.toFixed(2));
/*Descrição
Em algumas promoções de e-commerce, os clientes têm a opção de aplicar cupons de desconto. 
A missão é criar uma função que calcule o valor final da compra após aplicar um desconto, caso o cupom seja válido.
 Os cupons disponíveis são "DESCONTO10" (que aplica um desconto de 10%) e "DESCONTO20" (que aplica um desconto de 20%).
  Se o código do cupom não for válido, o valor da compra permanece inalterado. 
  O resultado deve ser formatado conforme o padrão monetário brasileiro (R$ XX.XX).

Entrada
A entrada consiste em dois valores:

Um número decimal representando o valor da compra (por exemplo, 100.00).
Uma string representando o código do cupom (por exemplo, "DESCONTO10" ou "DESCONTO20").
Saída
A saída deve ser uma string no formato:

"Valor final da compra: R$ XX.XX", onde XX.XX é o valor final após o desconto (caso haja).
Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar
 seu programa com esses exemplos e com outros casos possíveis.

    Entrada	              |             Saída Esperada
100.00 DESCONTO10	      |     Valor final da compra: R$ 90.00
200.00 DESCONTO20	      |     Valor final da compra: R$ 160.00
150.00  NENHUM	          |     Valor final da compra: R$ 150.00
50.00 DESCONTO10	      |     Valor final da compra: R$ 45.00
Atenção: É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.

Os desafios apresentados aqui têm como objetivo principal exercitar os conceitos aprendidos e proporcionar um primeiro contato
com lógica de programação. Caso não tenha experiência em programação, utilize o template disponível e preencha com os conceitos
aprendidos. Para resetar o template, basta clicar em “Restart Code.”
*/

