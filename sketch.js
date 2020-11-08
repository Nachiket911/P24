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

	paper.display();

	rectMode(CENTER);
	background(0);
  
	drawSprites();
 
}
