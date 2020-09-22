const Engine = Matter.Emgine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var ground,

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(450,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  World = engine.world

  ground = new Ground(790,225,450,20);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)

  for(var k = 0;k <= width;k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40;j <= width; j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }

  for(var j = 40;j <= width; j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j = 40;j <= width; j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }

  for(var j = 40;j <= width; j=j+50){
    plinkos.push(new Plinko(j,375,10));
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }

  ground.display();
  
  drawSprites();
}