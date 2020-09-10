var f;
var img1, img3, img4;
var ye, re, gy, bl, pu, pi, bb, gr;

function setup() {
  createCanvas(1000, 700);

  ye = color("#fcfeab");
  re = color("#ff6599");
  gy = color("#e7e7e7");
  bl = color("#777aff");
  pu = color("#ada1e1");
  pi = color("#ff73ed");
  bb = color("#32b3ed");
  gr = color("#6bffa7");

  f = loadFont("Assets/poiretOne-Regular.ttf");

  textAlign(CENTER);

  imageMode(CENTER);

  img1 = loadImage("Assets/LogoMulticolored.png");
  img3 = loadImage("Assets/Dirt.jpg");
  img4 = loadImage("Assets/Gothem.jpg");
}

function draw() {
  var t = map(mouseX,0,width,0,1.0);
  var c = lerpColor(bl, gr, t);
  var d = lerpColor(ye, re, t);
  var e = lerpColor(pi, bb, t);

  background("#66ccff");
  //text(mouseX + " , " + mouseY, 55, 30);

  fill('White');
  textFont(f);
  textSize(50);
  text("Dirty Catman", width / 2, 50);

  stroke('White');
  line(335, 67, 660, 67);

  noStroke();
  fill('White');
  textFont(f);
  textSize(22);
  text("Not necessarily a hero, but a character all the same. Dirty Catman is my username \n that I use on pretty much everything. It has several different meanings to me. \n The 'Dirty' comes from Minecraft because I use it the most out of any other material.\nThe 'Catman' is a mixture of two things. First is 'Cat' because I love cats.\nThey are my favorite animal. And the 'man' portion stems from Batman who is my favorite super hero.", width / 2, 100);

  stroke('White');
  line(15, 225, 985, 225);

  if (mouseIsPressed) {
    image(img4, 500, 480, 1000, 480);

    noStroke();
    fill("black");
    ellipse(287, 389, 150, 150);
    triangle(208, 306, 250, 325, 218, 361);
    triangle(320, 325, 360, 305, 356, 359);

    print(mouseX + " , " + mouseY, 10, 20);
  } else {
    image(img3, 500, 470, 1000, 460);

    noStroke();
    ellipseColor = color(255, 252, 150);
    ellipseColor.setAlpha(128 + 128 * sin(millis() / 900));

    fill(e);
    ellipse(500, 465, 440, 420);

    fill(c);
    ellipse(500, 465, 420, 400);

    fill(d);
    ellipse(500, 465, 400, 380);

    image(img1, 500, 480, 670, 380);
  }

  noStroke();

  ellipseColor = color(255, 252, 150);
  ellipseColor.setAlpha(128 + 128 * sin(millis() / 900));
  fill(ellipseColor);
  ellipse(1000, 0, 150, 150);

  ellipseColor = color(214, 125, 255);
  ellipseColor.setAlpha(128 + 128 * sin(millis() / 850));
  fill(ellipseColor);
  ellipse(1000, 0, 80, 80);

  ellipseColor = color(255, 117, 227);
  ellipseColor.setAlpha(128 + 128 * sin(millis() / 800));
  fill(ellipseColor);
  ellipse(1000, 0, 30, 30);

  ellipseColor = color(255, 252, 150);
  ellipseColor.setAlpha(128 + 128 * sin(millis() / 900));
  fill(ellipseColor);
  ellipse(0, 0, 150, 150);

  ellipseColor = color(214, 125, 255);
  ellipseColor.setAlpha(128 + 128 * sin(millis() / 850));
  fill(ellipseColor);
  ellipse(0, 0, 80, 80);

  ellipseColor = color(255, 117, 227);
  ellipseColor.setAlpha(128 + 128 * sin(millis() / 800));
  fill(ellipseColor);
  ellipse(0, 0, 30, 30);
}
