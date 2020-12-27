
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var boy, treeObject, Stone, groundObject;
var mango1, mango2, mango3;
var slingshot;

function preload()
{
	loadImage = "boy.png"
	loadImage = "tree.png"
	loadImage = "stone.png"
	loadImage = "mango.png"
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject=new ground(width/2,670,width,20);
	treeObject = new tree(600, 460, 200, 400);
	Stone = new stone(200, 300, 20, 20);

	slingshot = new Slingshot(Stone.body, { x: 230 , y: 180 });

	

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  
  groundObject.display();
  treeObject.display();
  Stone.display();

  slingshot.display();
 
}

function mouseReleased(){
    slingshot.fly()
}

function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}



