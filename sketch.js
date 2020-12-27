var monkey,monkeyrunning;
var banana,bananaImg;
var obstacle,obstacleImg;
var foodGroup,obstacleGroup;
var score;
var ground;

function preload(){  
monkeyrunninng = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.pmg","sprite_8.png"); 
bananaImg = loadImage("banana.png");
obstacleImg = loadImage("obstacle.png"); 
}

function setup() { 
  createCanvas(500,400);
  ground = createSprite(250,395,500,10);
  monkey = createSprite(30,360,20,20);
  monkey.addAnimation(monkeyrunning);
  monkey.scale = 0.1;
  banana = createSprite(30,20,10,10);
  banana.addImage(bananaImg);
  banana.scale = 0.1;
  obstacle = createSprite(250,380,20,20);
  obstacle.addImage(obstacleImg);
  obstacle.scale =0.1;
}

function draw() {  
  background ("white");
  drawSprites();
}