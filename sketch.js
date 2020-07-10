function setup() {
  createCanvas(800,400);
 var stick1 = createSprite(200,380,50,250);
 var stick2 = createSprite(255,380,50,250);
 var stick3 = createSprite(605,380,50,250);
 var stick4 = createSprite(660,380,50,250);
 var stick5 = createSprite(320,380,45,200);
 var stick6 = createSprite(545,380,45,200);
 var box1 = createSprite(225,210,80,80);
 var box2 = createSprite(630,210,80,80);
 var main = createSprite(440,380,150,100);
 var needle = createSprite(450,300,10,100);
}

function draw() {

  background(51);  
  drawSprites();
}