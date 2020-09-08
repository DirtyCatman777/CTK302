var song1;

function preload() {
  song1 = loadSound("assets/Level_Up.mp3");
}

function setup() {
  createCanvas(800, 800);
  song1.loop();
}

function draw() {
  background(100);
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.loop();
  }
}
