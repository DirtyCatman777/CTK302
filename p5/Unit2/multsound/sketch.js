let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/New_Tires.mp3");
  song2 = loadSound("assets/Transportation.mp3");
  song3 = loadSound("assets/Trapped.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();

}

function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);
  fill('white');

}

function draw() {

  background("#66ccff");

  switch (state) {
    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      text("Listening to song 1", 250, 250);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      text("Listening to song 2", 250, 250);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      text("Listening to song 3", 250, 250);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 5) {
    state = 0;
  }

  song1.pause();
  song2.pause();
  song3.pause();
}
