var  cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3;
var bg;
var canvas;


function preload() {
    //load the images here

    catimg1 = loadAnimation("images/tomOne.png");
    mouseimg1 = loadAnimation("images/jerryOne.png");

    catimg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    catimg3 = loadAnimation("images/tomFour.png");

    bg = loadImage("images/garden.png");



    
}

function setup(){
   canvas = createCanvas(1000,800);
    
    //create tom and jerry sprites here
cat = createSprite(870,600);
cat.addAnimation("tom1",catimg1);
cat.scale = 0.2;


mouse = createSprite(200,600);
mouse.addAnimation("mouse1",mouseimg1);
mouse.scale = 0.15;


}

function draw() {

    background(bg);
    
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat3",catimg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("cat3");
        mouse.addAnimation("mouse3",mouseimg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouse3");
    }


   


 

    drawSprites();
}


function keyPressed(){

    if (keyCode === LEFT_ARROW){
        cat.velocityX = -15;
        cat.addAnimation("cat2",catimg2);
        cat.changeAnimation("cat2");

        mouse.addAnimation("mouse2",mouseimg2);
        mouse.frameDelay = 0;
        mouse.changeAnimation("mouse2");
    }
  
 }

 


