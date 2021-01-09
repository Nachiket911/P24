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

	paper = new Paper(200, 645, 60);
	trashBin = new Dustbin(750, 800, 850, 630, 670, 20, 100, 77, 20);
	gameSpace = new Ground(width/2, 680, width, 20);

	Engine.run(engine);
  
}

function draw() {

	Engine.update(engine); 

	background(0);

	rectMode(CENTER);

	paper.display();	
	trashBin.appear();
	gameSpace.display();

	//keyPressed();

	drawSprites();
 
}

function keyPressed(){

  if (keyCode === 32){

    Body.applyForce(paper.body, paper.body.position, {x:300, y:3000});  
		
	}

}