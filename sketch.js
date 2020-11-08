function setup() {
  createCanvas(800,400);

  movingrect = createSprite(300,200,25,40);

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "Purple";
  gameObject2.velocityX = 5;

  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "black";
  gameObject3.velocityX = -5;

  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;
  
 
 if(isTouching(movingrect,gameObject1)){
  movingrect.shapeColor = "Blue";
  gameObject1.shapeColor = "Green";
 } else {
  movingrect.shapeColor = "Yellow";
  gameObject1.shapeColor = "Red";
 }

 bounceOff(gameObject3,gameObject2);


  drawSprites();
}


