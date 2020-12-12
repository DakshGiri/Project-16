var rand;
var monkey , monkey_running, monkey_running1, monkey_running2, monkey_running3, monkey_running4, monkey_running5, monkey_running6, monkey_running7, monkey_running8
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var anime = 0;
var ground, groundImage, ground2Image;
var support=0;
var cloudI, cloudI1, cloudI2, cloud1 
var sun, sunI, moon, moonI;
var cloudsGroup;
var moonI;
var night;
var time = 1;
var nightI;
var gameState=1;
var restart;
var rest;
var rest2 = 1000;
var reset;
var speed = -20;
var speed2 = -0.5;
var speed3 = -1;
var home, homeImage;
var bananaScore = 0;
function preload(){
  
  groundImage =      loadImage("ground.jpg");
  monkey_running =   loadImage("sprite_0.png");       
  monkey_running1 =  loadImage("sprite_1.png");
  monkey_running2 =  loadImage("sprite_2.png");
  monkey_running3 =  loadImage("sprite_3.png");
  monkey_running4 =  loadImage("sprite_4.png");
  monkey_running5 =  loadImage("sprite_5.png");
  monkey_running6 =  loadImage("sprite_6.png");
  monkey_running7 =  loadImage("sprite_7.png");
  monkey_running8 =  loadImage("sprite_8.png");
  bananaImage =      loadImage("banana.png");
  obstaceImage =     loadImage("obstacle.png");
  cloudI =           loadImage("cloudI.png");
  cloudI1 =          loadImage("cloud1.png");
  cloudI2 =          loadImage("cloud2.png");
  sunI =             loadImage("sun1.png");
  nightI =           loadImage("night.jpeg");
  moonI =            loadImage("moon.png");
  bananaImage =      loadImage("banana.png");
  obstacleImage =    loadImage("obstacle.png");
  reset =            loadImage("r.jpg");
  ground2Image =     loadImage("ground2.jpg");
  homeImage =         loadImage("home.png");
}



function setup() {
  createCanvas(600,375);
  ground = createSprite(300,340,1900,5);
  monkey = createSprite(140,260,50,50);
  night = createSprite(3000,-35,600,600);
  moon = createSprite(-50,75,50,50);
  cloudsGroup = createGroup();
  FoodGroup = createGroup();
  sun = createSprite(500,75,50,50);
  obstacleGroup = createGroup();
  restart = createSprite(rest,200,30,30);  
  home = createSprite(rest2,300,20,20);
}

function draw() {   
    
  home.addImage(homeImage);
  home.scale = 0.1;
  home.depth =   night.depth+sun.depth+moon.depth+ground.depth+restart.depth;
  if(keyDown("enter")&&gameState<2){
  gameState=2;
  ground.x=340;
  }
  
  if(monkey.isTouching(obstacleGroup)){
  rest = 300;
  rest2 = 450;
  home.x = rest2;
  restart.x=rest;
  restart.addImage(reset);
  speed=0;
  sun.y=-100;
  moon.y=-100;
  ground.y=750;
  night.x=1000;
  FoodGroup.destroyEach();
  cloudsGroup.destroyEach();
  obstacleGroup.destroyEach();
  speed2=0;
  restart.visible = true;
  home.visible = true;
  monkey.visible = false;
  } 
   
  if(mousePressedOver(home)){
  bananaScore = 0;
  gameState=1;
  rest = 1000;
  rest2 = 1000;
  home.x = rest2;
  restart.x=rest;
  speed = -20;
  sun.y = 75;
  moon.y = 75;
  ground.y = 340;
  night.x = 3000;
  speed2 = -0.5;
  sun.x = 500;
  moon.x = -50;
  FoodGroup.destroyEach();
  cloudsGroup.destroyEach();
  obstacleGroup.destroyEach();
  sun.x = 500;
  monkey.y=260;
  monkey.x=140;
  monkey.visible = true;
  }
  if(mousePressedOver(restart)){
    bananaScore = 0;
    gameState=2;
    rest = 1000;
    rest2 = 1000;
    home.x = rest2;
    restart.x=rest;
    speed = -20;
    sun.y = 75;
    moon.y = 75;
    ground.y = 340;
    night.x = 3000;
    speed2 = -0.5;
    sun.x = 500;
    moon.x = -50;
    FoodGroup.destroyEach();
    cloudsGroup.destroyEach();
    obstacleGroup.destroyEach();
    sun.x = 500;
    monkey.y=260;
    monkey.x=140;
    monkey.visible = true;
  }
  
  home.visible=true;
  restart.depth = night.depth+1;
  restart.scale = 0.2;
 
  if(gameState==1){
    background(255);
    noStroke();
    fill("red");
    textSize(25);
    text("BY DAKSH GIRI",100,30);
    noStroke();
    fill(255,0,0);
    textSize(50);
    text("Press Enter to Start",50,200);
    rest = 1000;
    rest2 = 1000;
  }
  

 
 if(gameState==2){
  moon.addImage(moonI);
  moon.scale=0.15;
  night.addImage(nightI);
  night.depth=ground.depth;
  ground.depth=ground.depth+1;
  night.scale=1.1;
  monkey.depth=monkey.depth+1
   
  if(sun.x>10){
  time=1;
  }
  
  speed = speed-0.004;
   
  if(sun.x>0){
  time=1;
  }
   
  if(sun.x==0){
  time=2;
  sun.x=-50;
  moon.x=500;
  }
 
  if(moon.x>0){
  time=2;
  }
   
  if(moon.x==0){
  time=1;
  moon.x=-50;
  sun.x=500;
  }
   
  bananaMaker();
  spawnObstacles();

  if(time==1){
    background("skyblue");
    noStroke();
    fill("white");
    textSize(25);
    text(bananaScore,160,30);
    noStroke();
    fill("white");
    textSize(25);
    text("BANANAS :",10,30);
    sun.velocityX=speed2;
    sun.addImage(sunI);
    sun.scale=0.2;
    spawnClouds1();
    spawnClouds2();
    cloudsGroup.setLifetimeEach(-1);
    night.x=3000;
    night.y=-35;  
    ground.addImage(groundImage);
    ground.scale=1.1 
  } 
  if(time==2){
    noStroke();
    fill("white");
    textSize(25);
    text(bananaScore,160,30);
    noStroke();
    fill("white");
    textSize(25);
    text("BANANAS :",10,30);
    ground.addImage(ground2Image);
    ground.scale=1.1
    moon.velocityX=speed2;
    night.x=300;
    night.y=-35;
  }
   
  if(monkey.isTouching(FoodGroup)){
  FoodGroup.destroyEach();
  bananaScore = bananaScore + 1;
  }

  if(ground.x>0){
  ground.velocityX=-20;
  }
  if(ground.x==0){
  ground.x=300;
  }
  if(anime<9&&support==0){
  anime=anime+0.5;
  }
  if(anime==9&&support==0){
  anime=0;
  }
  if(anime==0&&support==0){
  monkey.addImage(monkey_running);
  }
  if(anime==1&&support==0){
  monkey.addImage(monkey_running1);
  }
  if(anime==2&&support==0){
  monkey.addImage(monkey_running2);
  }
  if(anime==3&&support==0){
  monkey.addImage(monkey_running3);
  }
  if(anime==4&&support==0){
  monkey.addImage(monkey_running4);
  }
  if(anime==5&&support==0){
  monkey.addImage(monkey_running5);
  }
  if(anime==6&&support==0){
  monkey.addImage(monkey_running6);
  }
  if(anime==7&&support==0){
  monkey.addImage(monkey_running7);
  }
  if(anime==8&&support==0){
  monkey.addImage(monkey_running8);
  }
  
  if(keyDown("space")&&monkey.y>=260){
  monkey.velocityY=-58;
  support=1;
  monkey.addImage(monkey_running3);
  }else if(monkey.y>=260){
  support=0;
  }
  
  if(monkey.y<260){
  monkey.velocityY=monkey.velocityY+9.8;
  }
 
  if(monkey.y>260){
  monkey.y=260;
  }
   
  monkey.scale=0.18;
  night.depth=moon.depth;
  moon.depth=moon.depth+1;
   
  drawSprites();
  }
  }

  function spawnClouds1(){
  if(frameCount%100==0){
  var cloud = createSprite(750,100,10,10);
  cloud.y = random(50,175);
  rand = Math.round(random(1,3));
  switch(rand){
  case 1: cloud.addImage(cloudI);
  break;
  case 2: cloud.addImage(cloudI1);
  break;
  case 3:cloud.addImage(cloudI2);
  break;    
  default:break;
  }
  cloud.depth = monkey.depth;
  monkey.depth = monkey.depth+1;  
  cloud.velocityX=speed3;
  cloud.scale = 0.2;
  cloudsGroup.add(cloud);
  }
  }

  function spawnClouds2(){
  if(frameCount%500==0){
  var cloud1 = createSprite(750,100,10,10);
  cloud1.y = random(50,175);
  rand = Math.round(random(3,1));
  switch(rand){
  case 1: cloud1.addImage(cloudI);
  break;
  case 2: cloud1.addImage(cloudI1);
  break;
  case 3:cloud1.addImage(cloudI2);
  break;    
  default:break;
  }
  cloud1.depth = monkey.depth;
  monkey.depth = monkey.depth+1;
  cloud1.depth = ground.depth;
  ground.depth = ground.depth+1;
  cloud1.velocityX=speed3;
  cloud1.scale = 0.1;
  cloudsGroup.add(cloud1);
  }
  }
  function bananaMaker(){
  if(frameCount%80==0){
  banana = createSprite(650,300,10,10);
  banana.y = random(20,150);
  banana.addImage(bananaImage);
  banana.scale=0.15;
  banana.velocityX=speed;
  FoodGroup.add(banana); 
  }
  }
  function spawnObstacles(){
  if(frameCount%70==0){
    obstacle = createSprite(750,270,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=(800);
    obstacle.velocityX=speed;
    obstacle.scale=0.25;
    obstacle.depth = ground.depth;
    obstacle.depth = obstacle.depth + 100
    obstacleGroup.add(obstacle);
    obstacle.setCollider("rectangle",0,0,30,30);
  }
  }



