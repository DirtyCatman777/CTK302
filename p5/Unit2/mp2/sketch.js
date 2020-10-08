//why do ellipses stop when case switches
//add music
//fix case 0 text opacity

let state = 0;
var y = 0;
let velocity = 5;
let timer = 0;


function setup() {
  createCanvas(500, 400);
  background("#fff9fb");
  textSize(24);
  textAlign(CENTER);
  imageMode(CENTER);
  rectMode(CENTER);
}

function draw() {

  y = y + velocity;
  if (y > width) {
    y = 0;
  }

  switch (state) {
    case 0:
      textColor = color("#66ccff");
      textColor.setAlpha(128 + 128 * sin(millis() / 200));
      fill(textColor);
      text("Touch or click to make more droplets fall", 250, 250);
      break;

    case 1:
      background("#fff9fb");
      fill("#fff9fb");
      rect(50, 250, 100, 500)
      fill("#33ccff");
      ellipse(50, y, 55, 55);
      break;

    case 2:
      background("#fff9fb");
      fill("#fff9fb");
      rect(150, 250, 100, 500)
      fill("#33ccff");
      ellipse(150, y, 55, 55);
      break;

    case 3:
      background("#fff9fb");
      fill("#fff9fb");
      rect(250, 250, 100, 500)
      fill("#33ccff");
      ellipse(250, y, 55, 55);
      break;

    case 4:
      background("#fff9fb");
      fill("#fff9fb");
      rect(350, 250, 100, 500)
      fill("#33ccff");
      ellipse(350, y, 55, 55);
      break;

    case 5:
      background("#fff9fb");
      fill("#fff9fb");
      rect(450, 250, 100, 500)
      fill("#33ccff");
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

  timer = timer + 1;
  if (timer > 210) {
    timer = 0;
    state = int(random(1, 6));
  }

}

function mouseReleased() {
  state = int(random(1, 6));
  y = 0;
  timer = 0;
}
