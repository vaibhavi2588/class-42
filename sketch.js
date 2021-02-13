const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Stand(390,300,250,10);
    ground = new Ground(600,height,1200,20);
    stand2 = new Stand(700,200,200,10);
    block1 = new Block(300,270,30,40);
    block2 = new Block(330,270,30,40);
    block3 = new Block(360,270,30,40);
    block4 = new Block(390,270,30,40);
    block5 = new Block(420,270,30,40);
    block6 = new Block(450,270,30,40);
    block7 = new Block(480,270,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(350,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    polygon = Bodies.circle (50,200,20);
    World.add(world,polygon);
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
   stand1.display();
   ground.display();
   stand2.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   image(polygonImg,this.polygon.position.x,this.polygon.position.y,20,20);

 
    slingshot.display();    
}

function mouseDragged(){
    
        Matter.Body.setPosition(this.polygon,{x: mouseX , y: mouseY});
    
}

function mouseReleased(){
    slingshot.fly();
   
}


