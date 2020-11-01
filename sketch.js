
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
//const Render = Matter.Render

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,600,20)
	bob1 = new Bob(400,300,30)
	bob2 = new Bob(460,300,30)
	bob3 = new Bob(340,300,30)
	bob4 = new Bob(520,300,30)
  bob5 = new Bob(280,300,30)
 
line1 = new Rope(bob1.body,roof.body,{x:400,y:40})
line2 = new Rope(bob2.body,roof.body,{x:460,y:40})
line3 = new Rope(bob3.body,roof.body,{x:340,y:40})
line4 = new Rope(bob4.body,roof.body,{x:520,y:40})
line5 = new Rope(bob5.body,roof.body,{x:280,y:40})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  //keyPressed()
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
 
  line1.display()
  line2.display()
  line3.display()
  line4.display()
  line5.display()
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:45})

}
}


