
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball
var ground
var rightgoal,leftgoal
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball= new Ball(100,600,10)
 ground= new Ground(400,680,800,20)
 leftgoal= new Goal(620,620,20,100)
 rightgoal = new Goal(670,620,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()
  ground.display()
  leftgoal.display()
rightgoal.display()

  drawSprites();
 
  if (keyDown(UP_ARROW)) {
	matter.body.applyForce(paper.body,paper.body.position,{x:0.05,y:-0.05})
  }

  }




