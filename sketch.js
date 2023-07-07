const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var bola;
var bt1;
var bt2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create(); 
  world = engine.world; 

  ground = new Ground(200,390,400,20); //chão inferior
  right = new Ground(390,200,20,400); //parede direita
  left = new Ground(10,200,20,400); //parede esquerda
  top_wall = new Ground(200,10,400,20); //teto

  var bola_options={
    restitution: 0.95
  }

  bola = Bodies.circle(200,100,20,bola_options);
  World.add(world,bola);

  bt1 = createImg('right.png');
  bt1.position(220,30);
  bt1.size(50,50);
  bt1.mouseClicked(hForce);

  bt2 = createImg('up.png');
  bt2.position(20,30);
  bt2.size(50,50);
  bt2.mouseClicked(vForce);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(bola.position.x, bola.position.y,20);

  ground.show(); //mostrando o chão 
  top_wall.show(); //mostrando o teto
  left.show(); //mostrando a parede esquerda
  right.show(); //mostrando a parede direita
  Engine.update(engine); //atualizando o motor de física
}

function hForce(){ //força horizontal
  Matter.Body.applyForce(
    bola,
    {x:0,y:0},
    {x:0.05, y:0}
  );
}

function vForce(){ //força vertical
  Matter.Body.applyForce(
    bola,
    {x:0,y:0},
    {x:0, y:-0.05}
  );
}
