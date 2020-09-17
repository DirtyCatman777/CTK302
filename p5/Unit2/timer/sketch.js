let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch (state) {

    case 0:
      background("red");
      text("Case 0", 250, 250);

      timer++;
      if (timer > 3*60) {
        state = 1;
        timer = 0;
      }

      break;

    case 1:
    background("blue");
    text("Case 1", 250, 250);
      break;
  }

  // timer++;
  // if (timer>200) {
  //   timer = 0;
  // }

}
