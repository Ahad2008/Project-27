
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200, 500, 50);
	bob2 = new Bob(300, 500, 50);
	bob3 = new Bob(400, 500, 50);
	bob4 = new Bob(500, 500, 50);
	bob5 = new Bob(600, 500, 50);
	
	roof = new Roof(400, 100, 500, 50);

	rope1 = new Rope(bob1.body, roof.body, bob1Diameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  drawSprites();
 
}



