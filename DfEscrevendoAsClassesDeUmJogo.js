
  //Criarei a classe Heroi

  class Heroi {
    //constructor
    constructor(nome, idade, tipo) {
      // propriedades
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    //agora terei que criar o metodo atacar dentro da "{}" da classe
    atacar() {
      let ataque = "";
      // usarei a estruutura switch
      switch(this.tipo) {
        case "Mago":
          ataque = "Magia";
          break;
        case "Guerreiro":
          ataque = "Espada";
          break;
        case "Monge":
          ataque = "Artes Marciais";
          break;
        case "Ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque indefinido"  
        }
      //exibir mensagem
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    
}

//criarei um objeto heroi
const heroiGuerreiro = new Heroi("Debi","24","Guerreiro");

const heroiMago = new Heroi("Luis","200","Mago");

const heroiMonge = new Heroi("Marquinho","100","Monge");

const heroiNinja = new Heroi("Ninjinha","50","Ninja");

// o metodo atacar

heroiGuerreiro.atacar()
heroiMago.atacar()
heroiMonge.atacar()
heroiNinja.atacar()

/*# 3️⃣ Escrevendo as classes de um Jogo -Descrição

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
    }   // Tera 3 tipos de heróis: Guerreiro, Mago e Arqueiro
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
  */