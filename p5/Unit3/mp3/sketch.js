//add music and or sound effects
//add particle background
//make drops spawn from cloud
//to increase difficulty make cloud move faster with each drop destroyed and shorten timer before another drop spawns

let drops = [];
let f1, f2;
let bg;
let u;
let maxCars = 1;
let umbPos;
let state = 0;
let timer = 0;
let d;
let cl1, cl2, cl3, cl4;
let c0ButtColor;
let c2ButtColor;
let c3ButtColor;
let x = 0;
var direction = "right";
var score = 0;
let rains = [];

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);

  umbPos = createVector(width / 2, height - 90);

  textAlign(CENTER);
  rectMode(CENTER);
  noStroke();

  f1 = loadFont("assets/PoiretOne-Regular.ttf");
  f2 = loadFont("assets/IndieFlower-Regular.ttf");
  textSize(70);
  c0ButtColor = color("#33ccff");
  c2ButtColor = color("#42d6ff");
  c3ButtColor = color("#2192b8");

  bg = loadImage("assets/Background.png");
  u = loadImage("assets/Umbrella.png");
  b = loadImage("assets/Drop.png");
  cl1 = loadImage("assets/HappyCloud.png");
  cl2 = loadImage("assets/ConcentrateCloud.png");
  cl3 = loadImage("assets/GoodCloud.png");
  cl4 = loadImage("assets/SadCloud.png");


  // // Adding Drops to array
  for (let i = 0; i < maxCars; i++) {
    drops.push(new Drop());
  }

}

function draw() {
  switch (state) {
    case 0:
      background("#33ccff");

      //background rain
      rains.push(new Rain());
      for (let i = 0; i < rains.length; i++) {
        rains[i].display();
        rains[i].move();
        if (rains[i].a <= 0) {
          rains.splice(i, 1);
        }
      }

      imageMode(CENTER);
      image(u, width / 2 + 350, height / 2 - 150);
      fill("white");
      textFont(f1);
      text("Block the rain with your umbrella!", width / 2, height / 2 - 50);
      fill(c0ButtColor);
      rect(width / 2, height / 2 + 83, 190, 90, 50);
      fill("white");
      text("play", width / 2, height / 2 + 100);
      break;

    case 1:
      game();
      //background rain
      rains.push(new Rain());
      for (let i = 0; i < rains.length; i++) {
        rains[i].display();
        rains[i].move();
        if (rains[i].a <= 0) {
          rains.splice(i, 1);
        }
      }
      break;

    case 2:
      clear();
      background("#42d6ff");
      textAlign(CENTER);
      textSize(70);
      fill("white");
      textFont(f1);
      text("You stayed dry!", width / 2, height / 2);
      image(cl3, width / 2, height / 2 - 200);
      fill(c2ButtColor);
      rect(width / 2, height / 2 + 83, 355, 90, 50);
      fill("white");
      text("play again", width / 2, height / 2 + 100);
      squareColor = color("white");
      squareColor.setAlpha(200 + 200 * sin(millis() / 500));
      fill(squareColor);
      text("High Score: " + score, width/2, height-120);
      break;

    case 3:
      clear();
      background("#2192b8");

      //background rain
      rains.push(new Rain());
      for (let i = 0; i < rains.length; i++) {
        rains[i].display();
        rains[i].move();
        if (rains[i].a <= 0) {
          rains.splice(i, 1);
        }
      }

      textAlign(CENTER);
      textSize(70);
      fill("white");
      textFont(f2);
      text("You got wet!", width / 2, height / 2 - 30);
      image(cl4, width / 2, height / 2 - 225);
      fill(c3ButtColor);
      rect(width / 2, height / 2 + 87, 350, 100, 50);
      fill("white");
      text("Try Again?", width / 2, height / 2 + 100);
      squareColor = color("white");
      squareColor.setAlpha(200 + 200 * sin(millis() / 500));
      fill(squareColor);
      text("High Score: " + score, width/2, height-120);
      break;
  }

  //button color change
  //State 0
  if ((mouseX > width / 2 - 95) && (mouseX < width / 2 + 95) && (mouseY > height / 2 + 38) && (mouseY < height / 2 + 128)) {
    c0ButtColor = color("#26a8d4");
  } else {
    c0ButtColor = color("#33ccff");
  }
  //state 2
  if ((mouseX > width / 2 - 177) && (mouseX < width / 2 + 177) && (mouseY > height / 2 + 38) && (mouseY < height / 2 + 128)) {
    c2ButtColor = color("#26a8d4");
  } else {
    c2ButtColor = color("#42d6ff");
  }
  //state 3
  if ((mouseX > width / 2 - 175) && (mouseX < width / 2 + 175) && (mouseY > height / 2 + 37) && (mouseY < height / 2 + 137)) {
    c3ButtColor = color("#1b7d9e");
  } else {
    c3ButtColor = color("#2192b8");
  }
}

function game() {
  imageMode(CORNER);
  image(bg, 0, 0, width, height);
  timer++;

  //this wins game when umbrella blocks all the drops
  if (score == 10) {
    state = 2;
  }

  //draw umbrella
  imageMode(CENTER);
  image(u, umbPos.x, umbPos.y, 175, 175);
  checkForKeys();

  image(cl1, x, height / 2 - 250, 235, 159);

  if (direction == "right") {
    x += 5;
  }
  if (direction == "left") {
    x -= 5;
  }
  if (x > width - 100) {
    direction = "left";
  }
  if (x < 100) {
    direction = "right";
  }
  textAlign(LEFT);
  textSize(35);
  fill('white');
  text("Score: " + score, 50, 60);

  // display and move drops
  if (timer > 2 * 60) {
    image(cl2, x, height / 2 - 250, 235, 159);
    for (let i = 0; i < drops.length; i++) {
      drops[i].display();
      drops[i].move();
      //destroy enemie on collision with umbrella
      if (drops[i].pos.dist(umbPos) < 100) {
        drops.splice(i, 1);
        drops.push(new Drop());
        timer = 0;
        score++;
      }
    }
  }
}

//resetting the game
function resetGame() {
  drops = [];
  for (let i = 0; i < maxCars; i++) {
    drops.push(new Drop());
  }
  timer = 0;
  score = 0;
}

//player character movement
function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) umbPos.x -= 15;
  if (keyIsDown(RIGHT_ARROW)) umbPos.x += 15;
}

//button activation
function mouseReleased() {
  if ((mouseX > width / 2 - 175) && (mouseX < width / 2 + 175) && (mouseY > height / 2 + 37) && (mouseY < height / 2 + 137)) {
    switch (state) {
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
}

// Car class
class Drop {

  // constructor and attributes of drops
  constructor() {
    //where drops spawn
    this.pos = createVector(random(50,width-50), 0);
    //how fast drops are going
    this.vel = createVector(0, 8);
  }

  // methods of class Drop
  //enemies
  display() {
    image(b, this.pos.x, this.pos.y, 50, 50);
  }
  //moving the enemies
  move() {
    this.pos.add(this.vel);

    //this loses the game if a drop hits the ground
    if (this.pos.y > height) state = 3;
  }

}

class Rain {
  constructor() {
    //attributes
    this.pos = createVector(random(5,windowWidth-5), -10);
    this.vel = createVector(0, random(8, 4));
    this.r = 255 //random(255) ;
    this.g = 255 //random(255) ;
    this.b = 255 //random(255) ;
    this.a = random(200, 555);
  }
  //methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 5,20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }
}
