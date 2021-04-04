var gardenbgImg, gardenbg, cat, catImg1, catImg2, catImg3; 
var mouse, mouseImg1, mouseImg2, mouseImg3;
function preload() {
    //load the images here
    gardenbgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
    catImg3 = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    gardenbg = createSprite(500,400);
    gardenbg.addImage(gardenbgImg);
    //create tom and jerry sprites here
    cat = createSprite(750,600);
    cat.addAnimation("cat_Ready", catImg1);
    cat.scale = 0.1;
    
    mouse = createSprite(150,600);
    mouse.addAnimation("mouse_Ready", mouseImg1);
    mouse.scale = 0.1;
}

function draw() {
    background(0);  

    if (cat.x-mouse.x< (cat.width - mouse.width)/2){
            cat.addAnimation("cat_Found", catImg3);
            cat.changeAnimation("cat_Found");
            mouse.addAnimation("mouse_Found", mouseImg3);
            mouse.changeAnimation("mouse_Found");
            cat.velocityX = 0;
        }
    keyPressed();
    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if (keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouse_Teasing", mouseImg2);
        mouse.changeAnimation("mouse_Teasing");
        mouse.frameDelay = 15; 
    }
    if (keyCode === LEFT_ARROW){
        cat.velocityX = -3;
        cat.frameDelay = 15;
        cat.addAnimation("cat_Running",catImg2);
        cat.changeAnimation("cat_Running",catImg2);

    }


}
