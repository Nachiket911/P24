const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, trashBin, gameSpace;

function preload(){


	
}

function setup() {

	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(30, 645, 60);
	trashBin = new Dustbin();
	gameSpace = new Ground();

	Engine.run(engine);
  
}

function draw() {

	Engine.update(engine); 

	background(0);

	rectMode(CENTER);

	paper.display();	
	trashBin.appear();
	gameSpace.display();

	keyPressed();

	drawSprites();
 
}

function keyPressed(){

  if (keyCode === 32){

    Body.applyForce(paper.body, paper.body.position, {x:130, y:140});  
		
	}

}
