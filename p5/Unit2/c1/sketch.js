var mic;
var vol;

let x = 0;
let velocity = 7;

function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);
  noStroke();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  background("pink");

  vol = (mic.getLevel()).toFixed(2);

  fill("#33ccff");
  rect(x,height/2,50,50);

  //Setting the x value of the rect to add velocity value
  x = x + velocity;

  //Movement
  if (vol>.01) {
    velocity = 7;
  }
  else {
    velocity = 0;
  }

  //looop
  if (x > width) {
    x = 0;
  }

  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, width/2, 50);
}

function touchStarted() {
  getAudioContext().resume();
}
