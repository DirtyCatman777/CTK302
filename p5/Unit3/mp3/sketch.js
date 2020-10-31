//add music and or sound effects
//add particle background
//make buttons fade in and out with opacity
//make drops spawn from cloud
//animate cloud when spawns drop (rose might show us animation)
//game difficulty comes from increase in drop frequency, as time increases velocity of cloud increases, drop frequency is tied to cloud velocity.
//display "score" which is how many drops were destryed by the umbrella at the lose screen
//add other buttons for navigation

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

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);

  umbPos = createVector(width / 2, height - 90);

  textAlign(CENTER);
  rectMode(CENTER);

  f1 = loadFont("assets/PoiretOne-Regular.ttf");
  f2 = loadFont("assets/IndieFlower-Regular.ttf");
  textSize(70);
  c0ButtColor = color("#33ccff");
  c2ButtColor = color("#42d6ff");
  c3ButtColor = color("#2192b8");
  stroke("white");

  bg = loadImage("assets/Background.png");
  u = loadImage("assets/Umbrella.png");
  b = loadImage("assets/Drop.png");
  cl1 = loadImage("assets/HappyCloud.png")
  cl2 = loadImage("assets/ConcentrateCloud.png")
  cl3 = loadImage("assets/GoodCloud.png")
  cl4 = loadImage("assets/SadCloud.png")


  // // Adding Drops to array
  for (let i = 0; i < maxCars; i++) {
    drops.push(new Drop());
  }

}

function draw() {
  switch (state) {
    case 0:
      background("#33ccff");
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
      timer++;
      break;

    case 2:
      background("#42d6ff");
      fill("white");
      textFont(f1);
      text("You stayed dry!", width / 2, height / 2);
      image(cl3, width / 2, height / 2 - 200);
      fill(c2ButtColor);
      rect(width / 2, height / 2 + 83, 355, 90, 50);
      fill("white");
      text("play again", width / 2, height / 2 + 100);
      break;

    case 3:
      background("#2192b8");
      fill("white");
      textFont(f2);
      text("You got wet!", width / 2, height / 2 - 30);
      image(cl4, width / 2, height / 2 - 225);
      fill(c3ButtColor);
      rect(width / 2, height / 2 + 87, 350, 100, 50);
      fill("white");
      text("Try Again?", width / 2, height / 2 + 100);
      break;
  }
  //mouse reference (delete when done)
  fill('white');
  text(mouseX + ',' + mouseY, 150, 80);

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
  // display and move drops
  if (timer > 3 * 60) {
    for (let i = 0; i < drops.length; i++) {
      drops[i].display();
      drops[i].move();
      //destroy enemie on collision with umbrella
      if (drops[i].pos.dist(umbPos) < 100) {
        drops.splice(i, 1);
      }
    }
  }

  //this wins game when umbrella blocks all the drops
  if (drops.length == 0) {
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
}

//resetting the game
function resetGame() {
  drops = [];
  timer = 0;
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
    this.pos = createVector(random(25, windowWidth - 25), 100);
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
    // if (this.pos.y > height) state = 3;
  }

}
