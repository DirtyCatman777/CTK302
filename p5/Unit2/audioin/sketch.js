var mic;
var vol;
var c = 'green';

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(c);

  vol = (mic.getLevel()).toFixed(2);

  if (vol > .20) {
    c = color(random(255), random(255), random(255));
  }


  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);
}

function touchStarted() {
  getAudioContext().resume();
}
