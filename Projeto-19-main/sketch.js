var menina,meninaimage
var background1,backgroundimage
var axeGroup,policeGroup,zombieGroup;


 function preload(){
    meninaimage=loadImage("m.png")
    backgroundimage=loadImage("floresta.png")
    axeImg=loadImage("axe.png")
    policeImg=loadImage("police.png")
    zombieImg=loadImage("zombie2.png")

}

function setup() {
    createCanvas(1200,600)
    background("black")
    axeGroup= new Group();
    policeGroup= new Group();
    zombieGroup= new Group();
    background1=createSprite(0,0,1200,600);
    background1.addImage("B",backgroundimage)
    background1.scale=1.3 
    background1.velocityX = -5

    menina=createSprite(120,450,20,50);
    menina.addImage("M",meninaimage)
    menina.scale=0.1




}

function draw() {
    if (background1.x < 0){ 
       background1.x = background1.width/2; 
    }
    var rand = Math.round(random(1,3));
    
    switch(rand) {
      case 1: createAxes()
              break;
      case 2: createpolice()
              break;
      case 3: createzombie() ;
              break;
      default: break;

    }
    drawSprites()
    
 
}
 
function createAxes() { 
    if (frameCount % 100 === 0) {
        var axe = createSprite(700,450,10,40);
        axe.addImage(axeImg);
        axe.scale=0.15;
        axe.velocityX = -5;
        axe.lifetime = 200; 
        axeGroup.add(axe); 
    }
}



function createpolice() { 
    if (frameCount % 100 === 0) {
        var police = createSprite(700,450,10,40);
        police.addImage(policeImg);
        police.scale=0.3;
        police.velocityX = -5;
        police.lifetime = 200; 
        policeGroup.add(police); 
    }
}
function createzombie() { 
        if (frameCount % 100 === 0) {
            var zombie = createSprite(700,450,10,40);
            zombie.addImage(zombieImg);
            zombie.scale=0.10;
            zombie.velocityX = -5;
            zombie.lifetime = 200; 
            zombieGroup.add(zombie); 
        }
}