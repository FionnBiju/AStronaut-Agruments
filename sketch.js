var sleepImg, brushImg, bgImg, gymImg, eatImg
var astronaut 
function preload(){ 
bgImg = loadImage("iss.png")
sleepImg = loadAnimation("sleep.png")
brushImg = loadAnimation("brush.png")
gymImg = loadAnimation("gym12.png")
eatImg = addImage("eat1.png, eat2.png")
}




function setup() {
  createCanvas(600, 600);
astronaut = createSprite(300,300, 50, 50)
astronaut.addAnimation(sleepImg, "sleep.png")
  astronaut.scale = 0.1
  
background.addImage(bgImg, "iss.png")
}

function draw() {
  background("Blue");
  drawSprites();
  textSize(20);
  fill(255);
  text("Up arrow = brush " , 600, 30);
 text("down arrow = Gym " , 600, 40);
   text("left arrow = eat", 600, 30);
   text("Right arrow = bath ", 600, 30);
  
  
  if(keyDown("UP_ARROW")){
 brushImg.play()

  }
  if(keyDown("DOWN_ARROW")){
 GymImg.play()
  } 
if(keyDown("LEFT_ARROW")){
 etaImg.play()
}

if(keyDown("RIGHT_ARROW")){
 bathImg.play()
}


}