//const world,bodies,engine;
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world,engine;
var umbrella;
var thunder1,thunder2,thunder3,thunder4;
var thunder,rand;
var drops = [];
function preload(){
    
}

function setup(){
   createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,550);

    for(var i=0;i<=100;i++){
        drops.push(new Drops(random(0,400),random(0,200)));
    }

    thunder1 = loadImage("proc41images/images/thunderbolt/1.png")
    thunder2= loadImage("proc41images/images/thunderbolt/2.png")
    thunder3 = loadImage("proc41images/images/thunderbolt/3.png")
    thunder4 = loadImage("proc41images/images/thunderbolt/4.png")
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0;i<drops.length;i++){
        drops[i].updateY();
        drops[i].display();
    }

    umbrella.display();

    if(frameCount % 100===0){
        thunder = createSprite(200,100,50,50);   

        rand = Math.round(random(1,4));

        switch(rand){

            case 1: thunder.addImage(thunder1);
                    break;
            case 2:thunder.addImage(thunder2);
                    break;
            case 3:thunder.addImage(thunder3);
                    break;
            case 4:thunder.addImage(thunder4);
                    break;
            default: break;

        }
        thunder.scale = 0.5;
        thunder.lifetime = 50
    }
    drawSprites();
}

