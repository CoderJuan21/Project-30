const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1;
var polygon;
var slingshot;



function setup() {
  var canvas = createCanvas(900,400);
   engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground = new Ground(600,200,200,20);
 // ground2 = new Ground(350,300,200,20);

  block1 = new Box(540,160,30,30);
 block2 = new Box(590,160,30,30);
 block3 = new Box(640,160,30,30);
 block4 = new Box(690,160,30,30);
 block5 = new Box(740,160,30,30);
 block6 = new Box(570,100,30,30);
 block7 = new Box(620,100,30,30);
 block8 = new Box(670,100,30,30);
 block9 = new Box(720,100,30,30);
 block10 = new Box(630,50,30,30);
 block11 = new Box(680,50,30,30);
 block12 = new Box(730,50,30,30);
 block13 = new Box(600,10,30,30);

 /*block7 = new Box(480,235,30,40);
 block8 = new Box(330,235,30,40);
 block9 = new Box(360,235,30,40);
 block10 = new Box(390,235,30,40);
 block11 = new Box(420,235,30,40);
 block12 = new Box(450,235,40,40);*/

 polygon = new Box(400,600,50,50);

 //polygon=createSprite(600,200,20,100);
 //polygon = Bodies.rectangle(300,600,20,100, {isStatic:true} );
	// World.add(world, block1);

   slingshot = new SlingShot(polygon.body,{x:300, y:150});
 
}

function draw() {
  background("cyan");  
  Engine.update(engine);

  ground.display();
  
  //strokeWeight(3);
  //stroke(15);
 fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
 /* block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();*/

  slingshot.display();

  polygon.display();

  

  
displaySprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}