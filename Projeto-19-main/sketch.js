var ground,groundImage
var nave,naveImg

 function preload(){
    groundImage=loadImage("b2.jpg")
    naveImg=loadAnimation("sprite_00.png","sprite_01.png","sprite_02.png",
    "sprite_03.png","sprite_04.png","sprite_05.png","sprite_06.png","sprite_07.png",
    "sprite_08.png","sprite_09.png","sprite_10.png")

    //naveSpritedata = loadJSON("Imagens\protagonista\protagonista.json.json");
    //naveSpritesheet = loadImage("Imagens\protagonista\spritesheet.png");
}

function setup() {
    createCanvas(600, 300);  
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX=-3
    ground.scale=1
    
     
    nave = createSprite(50,180,20,50);
    nave.addAnimation("teste",naveImg);
    nave.scale=1

}

function draw() {

    if (ground.x < 0){
        ground.x = ground.width/2;
    }
    

    drawSprites()
 
}
