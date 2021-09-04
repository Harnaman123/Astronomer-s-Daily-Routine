var astro;

function preload(){
  bg=loadImage("./astro/iss.png")
  Gym=loadAnimation("./astro/gym1.png","./astro/gym2.png","./astro/gym11.png","./astro/gym12.png")
  bath=loadAnimation("./astro/bath1.png","./astro/bath2.png")
  Brush=loadImage("./astro/brush.png")
  Drink=loadAnimation("./astro/drink1.png","./astro/drink2.png")
  Eat=loadAnimation("./astro/eat1.png","./astro/eat2.png")
  Move=loadAnimation("./astro/move.png")
  Sleep=loadImage("./astro/sleep.png")


}
function setup() {
  createCanvas(800,400);
  astro=createSprite(400, 200, 50, 50);
  astro.addAnimation("sleeping",Sleep);
  astro.scale=0.1;

  b1=createSprite(400,0,800,50)
  b1.visible=false
  b2=createSprite(800,200,50,400);
  b2.visible=false;
  b3=createSprite(400,400,800,50)
  b3.visible=false;
  b4=createSprite(0,200,50,400)
  b4.visible=false;
}

function draw() {
  background(bg);
  astro.bounceOff(b1);
  astro.bounceOff(b2);
  astro.bounceOff(b3);
  astro.bounceOff(b4);

  if(keyDown(UP_ARROW)){
    astro.addAnimation("brushing",Brush)
    astro.changeAnimation("brushing")
    astro.y=250;
    astro.velocityX=0;
    astro.velocityY=0;
  }

  if(keyDown(DOWN_ARROW)){
    astro.addAnimation("gymming",Gym)
    astro.changeAnimation("gymming")
    astro.y=290;
    astro.scale=0.12;
    astro.velocityX=0;
    astro.velocityY=0;
  }


  if(keyDown(LEFT_ARROW)){
    astro.addAnimation("eating",Eat)
    astro.changeAnimation("eating")
    astro.y=270;
    astro.velocityX=0;
    astro.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    astro.addAnimation("bathing",bath)
    astro.changeAnimation("bathing")
    astro.y=250;
    astro.velocityX=0;
    astro.velocityY=0;
  }
  if(keyDown("m")){
    astro.addAnimation("moving",Move)
    astro.changeAnimation("moving")
    astro.y=350;
    astro.velocityX=-3;
    astro.velocityY=-5;
    
  }
  fill("white")
  stroke("red")
  textSize(9.5)
   text("INSTRUCTIONS : ",30,50)
   text("UP ARROW : BRUSHING ",30,70)
   text("DOWN ARROW :GYMMING",30,90)
   text("LEFT ARROW : EATING ",30,110)
   text("RIGHT ARROW : BATHING ",30,130)
   text("M : MOVING ",30,150)
  drawSprites();
}