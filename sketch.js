var fixed_rect,moving_rect;

function setup() {
  createCanvas(800,400);
 fixed_rect= createSprite(400, 200, 50, 50);
fixed_rect.shapeColor="green";
 moving_rect= createSprite(400, 300, 50, 50);
moving_rect.shapeColor="green";

}

function draw() {
 moving_rect.x=mouseX;
 moving_rect.y=mouseY;
 
 if(moving_rect.x-fixed_rect.x<=(moving_rect.width/2)+(fixed_rect.width/2)&&
 fixed_rect.x-moving_rect.x<=(moving_rect.width/2)+(fixed_rect.width/2)&&
 moving_rect.y-fixed_rect.y<=(moving_rect.height/2)+(fixed_rect.height/2)&&
 fixed_rect.y-moving_rect.y<=(moving_rect.height/2)+(fixed_rect.height/2)){

moving_rect.shapeColor="red";
fixed_rect.shapeColor="red";

 }
else{
  moving_rect.shapeColor="green";
  fixed_rect.shapeColor="green";
  
}

Bounceoff(moving_rect,fixed_rect);
  background(255,255,255);  
  drawSprites();
}


function Bounceoff(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj1.velocityX =obj1.velocityX * (-1);
  obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
  obj1.velocityY = obj1.velocityY * (-1);
  obj2.velocityY = obj2.velocityY * (-1);
}



}




