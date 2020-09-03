var f;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/poiretOne-Regular.ttf");
  f1 = loadFont("assets/cs_regular.ttf");


  textAlign(CENTER);
}

function draw() {
  background("#66ccff");

  fill('White');
  textFont(f);
  textSize(20);
  text("We cant all be heros. Some People have to sit on the side and clap as they go by.", width / 2, height / 2);

  fill('White');
  textFont(f1);
  textSize(20);
  text("YEET", width / 2, height / 2+100);


}
