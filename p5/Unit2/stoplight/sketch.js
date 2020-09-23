let state = 0;
let timer = 0;
let x = 0;
let velocity = 7;

function setup() {
  createCanvas(800, 800);
  textSize(24);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {

  background(100);

  fill('yellow');
  rect(width / 2, height / 2, 200, 600);

  fill('blue');
  rect(x,750,75,20);
  x = x + velocity;
  if (x > width) {
    x = 0;
  }

  switch (state) {
    case 0:
      text("State  0", 100, 100);
      fill('red');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('lightgrey');
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 0;
      break;

    case 1:
      text("State  1", 100, 100);
      fill('lightgrey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      fill('green');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 7;
      break;

    case 2:
      text("State  2", 100, 100);
      fill('lightgrey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill('lightgrey');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 3;
      break;

  }

timer = timer + 1;
if (timer > 100) {
  timer = 0;
  state++;
  if (state > 2) {
    state = 0;
  }
}

}

function mouseReleased() {
  state++;
  if (state > 2) {
    state = 0;
  }
}
