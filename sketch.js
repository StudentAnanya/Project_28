
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,tree,groundObj;
var mango1, mango2, mango3, mango4, mango5, mango6,mango7, mango8, mango9, mango10, mango11, mango12;
var stone,launcher,distance;
var world;
var launcherForce=100;

function preload()
{
boy=loadImage("boy.png");
tree=loadImage("tree.png");	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj= new Ground(800,690,1600,30);
	mango1=new Mango(930,200,80);
	mango2=new Mango(930,320,60);
	mango3=new Mango(800,250,70);
	mango4=new Mango(1100,300,85);
	mango5=new Mango(800,400,89);
	mango6=new Mango(1200,400,78);
	mango7=new Mango(1050,200,84);
	mango8=new Mango(700,350,55);
	mango9=new Mango(1020,380,65);
	mango10=new Mango(1030,100,60);
	mango11=new Mango(850,130,60);
	mango12=new Mango(905,410,65);
	stone=new Stone(250,530,50,50);
    launcher=new SlingShot(stone.body,{x:250,y:530})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  image(boy,200,450,300,300);
  image(tree,600,10,700,1000);

  text("Press Space Key to get another chance to pluck the mangoes!!!",50 ,50);
  textSize(20);

 groundObj.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();2
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();
 stone.display();
 launcher.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);
detectCollision(stone,mango11);
detectCollision(stone,mango12);
}

function mouseDragged(){
   Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:230, y:420});	
		launcher.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.width){
	Matter.Body.setStatic(lmango.body,false);
 }
}
