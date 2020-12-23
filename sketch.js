const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var poligon1, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(600,300,250,20);

    box1 = new Box(600,260,30,40);
    box2 = new Box(630,260,30,40);
    box3 = new Box(660,260,30,40);
    box4 = new Box(690,260,30,40);
    box5 = new Box(570,260,30,40);
    box6 = new Box(540,260,30,40);
    box7 = new Box(510,260,30,40);

    box8 = new Box(600,220,30,40);
    box9 = new Box(630,220,30,40);
    box10 = new Box(660,220,30,40);
    box11= new Box(570,220,30,40);
    box12= new Box(540,220,30,40);

    box13 = new Box(600,180,30,40);
    box14 = new Box(630,180,30,40);
    box15 = new Box(570,180,30,40);

    box16 = new Box(600,140,30,40);
    


    poligon1 = new poligon(190,300);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(poligon1.body,{x:190,y:300});
}

function draw(){
    background("grey");
    Engine.update(engine);
    strokeWeight(4);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    ground.display();
    ground2.display();
    



    poligon1.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(poligon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode==32){
        slingshot.attach(poligon1.body);
    }
}