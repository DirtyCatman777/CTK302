//why do ellipses stop when case switches?

let state = 0;
var y = 0;
let velocity = 5;
let timer = 0;
let song1;

var mic;
var vol;
var c = "#fff9fb";

function preload() {
  song1 = loadSound("Assets/Peace of Mind.mp3");
}

function setup() {
  createCanvas(500, 400);
  background(c);
  textSize(20);
  textAlign(CENTER);
  imageMode(CENTER);
  rectMode(CENTER);

  song1.loop();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  y = y + velocity;
  if (y > 800) {
    y = 0;
    state = int(random(1, 6));
  }

  vol = (mic.getLevel()).toFixed(2);

  if (vol > .05) {
    c = color(random(255), random(255), random(255));
    y = 0;
    state = 6;
  } else {
    c = "#fff9fb"
  }

  switch (state) {
    case 0:
      textColor = color("#66ccff");
      textColor.setAlpha(128 + 128 * sin(millis() / 200));
      fill("#66ccff");
      text("Touch or click to make more droplets fall\nor\nmake a loud noise to make them all fall at once", 250, 250);
      break;

    case 1:
      background(c);
      fill(c);
      rect(50, 250, 100, 500)
      fill("#33ccff");
      ellipse(50, y, 55, 55);
      break;

    case 2:
      background(c);
      fill(c);
      rect(150, 250, 100, 500)
      fill("#33ccff");
      ellipse(150, y, 55, 55);
      break;

    case 3:
      background(c);
      fill(c);
      rect(250, 250, 100, 500)
      fill("#33ccff");
      ellipse(250, y, 55, 55);
      break;

    case 4:
      background(c);
      fill(c);
      rect(350, 250, 100, 500)
      fill("#33ccff");
      ellipse(350, y, 55, 55);
      break;

    case 5:
      background(c);
      fill(c);
      rect(450, 250, 100, 500)
      fill("#33ccff");
      ellipse(450, y, 55, 55);
      break;

    case 6:
      background(c);
      fill("#33ccff");
      ellipse(50, y, 55, 55);
      ellipse(150, y, 55, 55);
      ellipse(250, y, 55, 55);
      ellipse(350, y, 55, 55);
      ellipse(450, y, 55, 55);
      break;
  }

  //Ice
  noStroke();
  fill("#a3fffc");
  rect(50, 35, 55, 70, 0, 0, 35, 35);
  rect(150, 25, 55, 55, 0, 0, 35, 35);
  rect(250, 40, 55, 80, 0, 0, 35, 35);
  rect(350, 35, 55, 70, 0, 0, 35, 35);
  rect(450, 30, 55, 60, 0, 0, 35, 35);

}

function mouseReleased() {
  state = int(random(1, 6));
  y = 0;
}

function touchStarted() {
  getAudioContext().resume();
}
