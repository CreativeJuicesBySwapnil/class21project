var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,480,200,10)
    surface1.shapeColor=("red")
    surface2=createSprite(300,480,200,10);
    surface2.shapeColor=("green")
    surface3=createSprite(500,480,200,10)
    surface3.shapeColor=("yellow")
    surface4=createSprite(700,480,200,10)
    surface4.shapeColor=("lightblue")
    //create box sprite and give velocity
    box=createSprite(random(20,270),10,40,40);
    box.shapeColor=("white");
    box.velocityY=-3;
    box.velocityX=5;
}

function draw() {
    background("blue");
    //create edgeSprite
   edges=createEdgeSprites();
   box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.shapeColor=("red");
        box.velocityX=0;
        box.velocityY=0;
       music.stop();
    }
    if(box.isTouching(surface2)){
        box.shapeColor=("green")
        music.play()
    }
    if(box.isTouching(surface3)){
        box.shapeColor=("yellow");
        music.play();
    }
    if(box.isTouching(surface4)){
        box.shapeColor=("lightblue");
        music.play();
    }

    
    drawSprites();
}
