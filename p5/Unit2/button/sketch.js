let myState = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
}

function draw() {

  switch (myState) {
    case 0:
      background('white');
      text("Case 0", 250, 250);
      break;

    case 1:
      background('red');
      text("Case 1", 250, 250);
      break;

    case 2:
      background('blue');
      text("Case 2", 250, 250);
      break;
  }

  fill('lightgrey');
  rect(10, 10, 50, 25);

}

function mouseReleased() {

  if ((mouseX > 10) && (mouseX < 60) && (mouseY > 10) && (mouseY < 35)) {

    myState++;
    if (myState > 2) {
      myState = 0;
    }
  }
}
