var rua,rua2
var jogador1,jogador2
var moeda
var power
var bomba

function preload(){
  //imagens pré-carregadas
  rua = loadImage ("path.png")
  jogador1.loadAnimation ("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  rua2 = createSprite (200,200)
  rua2.addImage ("corredor",rua)
  
  jogador2 = createSprite (200,350)
  jogador2.addAnimation ("pessoa",jogador1)
  jogador2.scale = 0.05
  //jogador não está aparecendo :(
    
  //leftBoundry.visible = true;

//leftBoundry.visible = false;

}

function draw() {
  background(0);
  rua2.velocityY = 2
if (rua2.y >400) {
  rua2.y = height/2
}
drawSprites ()
}
