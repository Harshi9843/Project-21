var car, wall;
var speed, weight, thickness;
var deformation;
var bullet, bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(2000,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  
  car = createSprite(50, 200, 50, 50);
  car.visible = false;
  car.velocityX = speed;
  wall = createSprite(1500, 200, thickness, height/2);

  bullet = createSprite(50, 200, 70, 20);
  bullet.velocityX = speed;
}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage < 10) {
      wall.shapeColor = "green";
    }

    if(damage > 10) {
      wall.shapeColor = "red";
    }
  }
  
  drawSprites();
}

function hasCollided(object1, object2) {
  bulletRightEdge = object1.x + object1.width;
  wallLeftEdge = object2.x
  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  else{
    return false;
  }
}