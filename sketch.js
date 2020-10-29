
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground
var FoodGroup, obstacleGroup,bananaGroup
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,200)

  //monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  //ground
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  
}


function draw() {
background(180);
  
// survivalTime
// stroke("white");
  //textSize(20);
// fill("white");
// text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  //survivalTime=Math.ceil(frameCount/frameRate())
  survivalTime= survivalTime + Math.round(getFrameRate()/60);
  text("Surival Time: "+ survivalTime, 100,50);
  
//monkey jump
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        //jumpSound.play();
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
 
  monkey.depth = background.depth;
  monkey.depth = monkey.depth+1;
  
  drawSprites();
}


//food
function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.lifetime = 200; 
    bananaGroup.add(banana);
  }
}

//obstacles


function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);        
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.5;
   obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
 }
}

