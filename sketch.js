
var monkey , monkey_running;
var banana ,bananaImage;
var obstacle,obstacleImg;
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImg=loadImage("obstacle.png")

 
}



function setup() {
  monkey=createSprite(50,315,20,20)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,350,1500,10);
  ground.velocityX=-5
}


function draw() 
{
  createCanvas(600,400)
  background("lightblue ")
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
 if (keyDown("space") && monkey.y>=300)
 {
   monkey.velocityY=-12   
 }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
  
  bananaGroup= new Group()
  obstacleGroup=new Group()
  
  textSize(22)
  fill("black")
  text("SurvivalTime : "+ survivalTime,100,50)
  
  if(frameCount % 20===0)
  {
    survivalTime=survivalTime+1
  }
  
  drawBanana()
  drawObstacles()
  
  drawSprites()
  
}

function drawBanana()
{
  if(frameCount % 80===0)
  {
    banana=createSprite(600,200,20,20)
    banana.y=Math.round|(random(190,250))
    banana.addImage("banana",bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=620
    bananaGroup.add(banana)
  }
   
  
}

function drawObstacles()
{
  if (frameCount % 300===0)
  {
    obstacle=createSprite(600,315,20,20)
    obstacle.addImage("obstacle",obstacleImg)
    obstacle.scale=0.2
    obstacle.velocityX=-5
    obstacleGroup.add(obstacle)
  }
  
  
}






