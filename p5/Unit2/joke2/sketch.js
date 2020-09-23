let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch (state) {

    case 0:
      background("red");
      text("What is brown and sticky?", 250, 250, 350, 100);

      timer++;
      if (timer > 3*60) {
        state = 1;
        timer = 0;
      }

      break;

    case 1:
    background("blue");
    text("A Stick", 250, 250, 350, 100);
      break;
  }

  // timer++;
  // if (timer>200) {
  //   timer = 0;
  // }

}
