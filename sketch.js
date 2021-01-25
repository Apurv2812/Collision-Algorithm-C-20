var fixRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 50);
  fixRect.shapeColor = "green";

  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  
  console.log(movingRect.x-fixRect.x);
  console.log(movingRect.width/2+fixRect.width/2)
  
  if(movingRect.x-fixRect.x<movingRect.width/2+fixRect.width/2
    &&fixRect.x-movingRect.x<movingRect.width/2+fixRect.width/2
    &&movingRect.y-fixRect.y<movingRect.height/2+fixRect.height/2
    &&fixRect.y-movingRect.y<movingRect.height/2+fixRect.height/2){
    fixRect.shapeColor = "red";
    movingRect.shapeColor="red";
  }else{
    fixRect.shapeColor = "green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}