const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper();

	Engine.run(engine);
  
}

function draw() {

	Engine.update(engine); 

	background(0);

	rectMode(CENTER);
	paper.display();	
	 
	drawSprites();
 
}
