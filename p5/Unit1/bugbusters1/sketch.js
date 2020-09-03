function setup() {
  createCanvas(400, 400);
}

function draw() {

  // the background color
  if (mouseIsPressed) {
    background('red');
  } else {
    background('blue');
  }

  // this ellipse should be 200x200 pixels in the center of the screen
  ellipse(width / 2, height / 2, 200, 200);

  // the mouth - smile if pressed, frown otherwise
  if (mouseIsPressed) {
    arc(200, 210, 130, 100, 0, PI); // smile - (this line is correct)
  } else {
    arc(200, 270, 130, 100, PI, 0); // frown

  }

  // the eyes
  ellipse(170, 180, 40, 40);
  ellipse(230, 180, 40, 40);

  if (mouseIsPressed) {
    print("for debugging")
  }

  text(mouseX + " , " + mouseY, 10,10); // print mouse locations to canvas

}
