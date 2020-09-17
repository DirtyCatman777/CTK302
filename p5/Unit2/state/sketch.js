let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);
}

function draw() {

  switch (state) {
    case 0:
      background("red");
      text("State  0", 250, 250);
      break;

    case 1:
      background("blue");
      text("State  1", 250, 250);
      break;

    case 2:
      background("green");
      text("State  2", 250, 250);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) {
    state = 0;
  }
}
