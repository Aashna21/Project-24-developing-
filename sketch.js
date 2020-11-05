
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, paperSprite; 
var side1_options, side2_options, side3_options, ground_options, options;

function preload() {
	
}

function setup() {

	var canvas = createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperSprite = createSprite(10, 10, 5, this.r/2), options; 
	paperSprite.shapeColor=color(237, 239, 242)

	groundSprite=createSprite(width/2, height-35, width,10), ground_options;
	groundSprite.shapeColor=color(255)

	side1Sprite=createSprite(width/2, height-50, 200, 20), side1_options;
	side1Sprite.shapeColor=color(235, 158, 52)

	side2Sprite=createSprite(300, height-90, 20, 100), side2_options;
	side2Sprite.shapeColor=color(235, 158, 52)

	side3Sprite=createSprite(500, height-90, 20, 100), side3_options;
	side3Sprite.shapeColor=color(235, 158, 52)

	paper = new Paper(10, 10, 5)
	paper = Bodies.circle(this.x, this.y, 5, this.r/2), options
	
	side1 = new Dustbin(width/2, 650, 200, 20)
	side1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} )

	side2 = new Dustbin(width/2, 650, 20, 100)
	side2 = Bodies.rectangle(width/2, 650, 20, 100 , {isStatic:true} )

	side3 = new Dustbin(width/2, 650, 20, 100)
	side3 = Bodies.rectangle(width/2, 650, 20, 100, {isStatic:true} )

	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	background(0, 2, 5);
  	Engine.update(engine);

  	paper.display(); 
	side1.display();
	side2.display();
	side3.display();

}



