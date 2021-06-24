var thief;
var ground;
var bg;
var ground2;



function preload(){
    bg = loadImage("backgroundImg.png");

}

function setup(){
    createCanvas(windowWidth, windowHeight);

    //thief = createSprite(displayWidth/2, displayHeight/2, 50, 50);

    ground = createSprite(width/2, height, width, 2);
    //ground.scale = 1.5;
    ground.addImage("Background", bg);
    ground.x = ground.width/2;
    ground.velocityX = -5;

    //ground2 = createSprite(displayWidth+100, displayHeight/2, displayWidth, displayHeight);
    //ground2.scale = 1.5;
    //ground2.addImage("Background", bg);
    //ground2.x = ground.width/2;
    //ground2.velocityX = -5;
}

function draw(){
    background("white");
    if (ground.x < 0){
        ground.x = ground.width/2;
    }
    

    drawSprites();
}