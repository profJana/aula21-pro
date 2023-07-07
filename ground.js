class Ground // Criando a classe Ground, que representa um objeto de chão em um jogo
{
  constructor(x, y, w, h) // O construtor da classe recebe as coordenadas x e y, largura (w) e altura (h) como parâmetros
  {
    let options = {
      isStatic:true // Opção do motor de física para manter o corpo do chão estático
    };
    
    // Criando um corpo retangular para representar o chão usando as coordenadas, largura, altura e opções definidas
    this.body = Bodies.rectangle(x, y, w, h, options); //criando um corpo retangulo e passando os parametros de posições, tamanho e físicas
    this.w = w; 
    this.h = h;
    World.add(world, this.body); // Adicionando o corpo do chão ao mundo do jogo
  }

  show() { 
    var pos = this.body.position; // Obtendo a posição atual do corpo do chão
    push(); // Salva o estado atual das configurações de desenho
    rectMode(CENTER); // Definindo o modo de desenho do retângulo como centro
    stroke(255); // Definindo a cor da linha do retângulo como branco
    fill(127); // Definindo a cor de preenchimento do retângulo como cinza
    rect(pos.x, pos.y, this.w, this.h); // Desenhando o retângulo na posição atual do corpo do chão
    pop(); // Restaura o estado original das configurações de desenho
  }
  
}


