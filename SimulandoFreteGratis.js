/*Descrição
O objetivo deste desafio é criar uma função simples que analisa o valor total de uma compra em um e-commerce e verifica se o cliente tem direito a frete grátis. Caso o valor da compra seja superior a R$ 150,00, o frete será gratuito. Caso contrário, será informado que o frete não está incluso.

Entrada
A entrada será um número decimal que representa o valor total da compra. O valor da compra será fornecido em reais, como por exemplo 70.00 ou 149.99.

Valor da compra em formato decimal (por exemplo, 70.00, 150.00, 149.99, etc).
O valor será comparado com R$ 150,00 para determinar a elegibilidade para o frete grátis.
Saída
A função deverá retornar uma das seguintes mensagens, dependendo do valor da compra:

Se o valor da compra for superior a R$ 150,00, a saída será: "Você ganhou frete grátis!"
Se o valor da compra for igual ou inferior a R$ 150,00, a saída será: "Frete não incluso."
Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
150.01	Você ganhou frete grátis!
75.00	Frete não incluso.
149.99	Frete não incluso.
Atenção: É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.
*/



//TODO: Crie a Função calcularFrete()
  function calcularFrete (valor){
      let statusFrete = "";
      // TODO: Crie a condição para verificar se o valor total ultrapassou R$ 150.00:
          if (valor > 150.00){
              statusFrete = "Você ganhou frete grátis!";
          } else {
                  statusFrete = "Frete não incluso.";
              }
              return statusFrete;
                  
  }

    // Lê o valor total da compra usando "gets"
    let valorCompra = parseFloat(149.99);
    // Chama a função para calcular o frete
    let statusFrete= calcularFrete(valorCompra);
      
      console.log(statusFrete);

