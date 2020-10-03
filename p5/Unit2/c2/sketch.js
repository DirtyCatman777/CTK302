let timer = 0;
let state = 0;
var mic;
var vol;

function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch (state) {
    case 0:
      background("green");
      text("Shh", 250, 250);
      if (vol > .01) {
        state = 1;
      }
      break;

    case 1:
      background("red");
      text("QUIET DOWN!!!", 250, 250);
      timer = timer + 1;
      if (timer > 5 * 60) {
        state = 0;
        timer = 0;
      }
      break;
  }
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, width/2, 50);
}

function touchStarted() {
  getAudioContext().resume();
}
