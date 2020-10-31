let cars = [];
let f1, f2, f3;
let bg;
let fonts = [];
let maxCars = 5;
let frogPos;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  frogPos = createVector(width / 2, height - 80);

  textAlign(CENTER);
  rectMode(CENTER);

  f1 = loadFont("assets/PoiretOne-Regular.ttf");
  f2 = loadFont("assets/Monoton-Regular.ttf");
  f3 = loadFont("assets/cs_regular.ttf");

  bg = loadImage("assets/Kirby.png");

  fonts = [f1, f2, f3];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}

function draw() {
  switch(state){
    case 0:
    background("grey");
    text("welcome to my game!", width/2,height/2);
    break;

    case 1:
    game();
    timer ++;
    if (timer > 10*60){
      state = 3;
    }
    break;

    case 2:
    background("red");
    text("You WIN!", width/2,height/2);
    break;

    case 3:
    background("purple");
    text("You Lose", width/2, height/2);
    break;
  }
}

function game(){
  image(bg, 0, 0, width, height);

  // display and move 20 objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50){
      cars.splice(i,1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  //draw the frog
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function resetGame(){
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

//movement
function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased(){
  switch(state){
    case 0:
    state = 1;
    break;

    case 2: //win
    resetGame();
    state = 0;
    break;

    case 3: //Lose
    resetGame();
    state = 0;
    break;
  }
}


// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-8, 8), random(-8, 8));
    this.size = random(40, 80);
    this.c = color(random(255), random(255), random(255));

    let b = floor(random(3));
    this.font = fonts[b];

  }

  // methods

  display() {
    // rect(this.pos.x, this.pos.y, 50, 25);
    fill(this.c);
    textFont(this.font);
    textSize(this.size);
    text("Yeet", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
