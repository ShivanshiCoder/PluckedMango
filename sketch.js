
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var tree,treeImg,stoneObj,ground;
var boy,boyImg;


function preload()
{
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground();

stoneObj = new Stone(100,450,23);
 mango1 = new Mango(100,250,23);
 mango2 = new Mango(150,230,32);
 mango3 = new Mango(200,280,38);
 mango4 = new Mango(225,305,35);
 mango5 = new Mango(300,350,39);
 mango6 = new Mango(350,365,33);
 mango7 = new Mango(390,475,34);
 mango8 = new Mango(420,100,36);
 mango9 = new Mango(520,200,30);
 mango10 = new Mango(700,590,35);
 mango11 = new Mango(770,910,31);

 attach=new Throw(stones.body,{x:100,y:465})

 tree=createSprite(150,200,35);
 tree.addImage(treeImg);
 tree.scale=0.6;

 boy=createSprite(250,300,20);
 boy.addImage(boyImg);
 boy.scale=1;


	Engine.run(engine); 
  
}



function draw() {
  rectMode(CENTER);
  background("blue");

  fill("black");
  textSize(20);

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  

  
  drawSprites();

  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseRealeased(){
	attach.fly();
}

function detectollision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position
  stoneBodyPosition=Lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+Lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
	
}

function keyPressed() {
  if(keyCode ===32){
    Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
    launsherObject.attach(stoneObj.body);
  }
}



