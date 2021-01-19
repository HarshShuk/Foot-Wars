
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var plinkos=[];
var backgroundImg;
var armyName;
var form;
var game;

function preload()
{
	backgroundImg=loadImage("download.jpg")
}

function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

  
  //Create the Bodies Here.

  //display form
  form=new Form()
  
  //display game
  game=new Game()

  //for creating football
  football=new Football(625,350,10);
  

  form.display();

}


function draw() {
  
  
  Engine.update(engine);
  
  //armyNme>>undefined>>false
  if(armyName){
    form.hide()
  }
  
}
function keyPressed(){
  if(keyCode===32){
    console.log(football.body)
    // football.body.velocity.x=-5
    // football.body.position.x=100
    Body.setVelocity(football.body,{x:-5,y:0})
    // Body.applyForce(football.body,{x:635,y:0},{x:20,y:0})
  }
}