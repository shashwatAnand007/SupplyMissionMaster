var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var dropZone1;
var dropZone2;
var dropZone3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dropZone1=createSprite(300,610,20,100);
	dropZone1.shapeColor = "red";
	dropZone11 = Bodies.rectangle(300,610,20,100,{restitution : 0, isStatic:true});
	World.add(world, dropZone11);

	dropZone2=createSprite(420,650,240,20);
	dropZone2.shapeColor = "red";
	dropZone22 = Bodies.rectangle(420,650,240,20,{restitution : 0, isStatic:true});
	World.add(world, dropZone22);
	
	dropZone3=createSprite(550,610,20,100);
	dropZone3.shapeColor = "red";
	dropZone33 = Bodies.rectangle(550,610,20,100,{restitution : 0, isStatic:true});
	World.add(world, dropZone33);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
   
  }
}



