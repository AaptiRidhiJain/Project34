
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var roof;
var sling1,sling2,sling3,sling4,sling5;  

function preload()
{
	
}

function setup() {
  createCanvas(1600,800)
	engine = Engine.create();
  world = engine.world;
  
  let canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  let options ={
    mouse: canvasMouse
  };

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint)
  Engine.run(engine);

	roof = new Roof(width/2,height/4,width/7,20);
 
  pendulumDiameter=40;

	startPendulumPositionX = width/2;
	startPendulumPositionY = height/4+500;
  pendulum1 = new Pendulum(startPendulumPositionX - pendulumDiameter*2,startPendulumPositionY,pendulumDiameter);
  pendulum2 = new Pendulum(startPendulumPositionX - pendulumDiameter,startPendulumPositionY,pendulumDiameter);
  pendulum3 = new Pendulum(startPendulumPositionX,startPendulumPositionY,pendulumDiameter);
  pendulum4 = new Pendulum(startPendulumPositionX + pendulumDiameter,startPendulumPositionY,pendulumDiameter);
  pendulum5 = new Pendulum(startPendulumPositionX + pendulumDiameter*2,startPendulumPositionY,pendulumDiameter);

  sling1 = new Sling(pendulum1.body,roof.body,-pendulumDiameter*2,0);
  sling2 = new Sling(pendulum2.body,roof.body,-pendulumDiameter*1,0);
  sling3 = new Sling(pendulum3.body,roof.body,0,0);
  sling4 = new Sling(pendulum4.body,roof.body,pendulumDiameter*1,0);
  sling5 = new Sling(pendulum5.body,roof.body,pendulumDiameter*2,0);
}


function draw() {
  rectMode(CENTER);
  background("YELLOW"); 
  Engine.update(engine);
  
  sling1.display();
  pendulum1.display();
  sling2.display();
  pendulum2.display();
  sling3.display();
  pendulum3.display();
  sling4.display();
  pendulum4.display();
  sling5.display();
  pendulum5.display();
  roof.display();
  drawSprites();
}

// function keyPressed() {
//   if (keyCode === UP_ARROW) {

//     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

//   }
// }