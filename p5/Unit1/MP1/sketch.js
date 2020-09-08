var f;
var img1, img2,img3,img4;

function setup() {
createCanvas (1000,700);

f = loadFont("Assets/poiretOne-Regular.ttf");

textAlign(CENTER);

imageMode(CENTER);

img1 = loadImage("Assets/LogoMulticolored.png");
img2 = loadImage("Assets/LogoBlack.png");
img3 = loadImage("Assets/Dirt.jpg");
img4 = loadImage("Assets/Gothem.jpg");
}

function draw() {
background("#66ccff");

fill('White');
textFont(f);
textSize(50);
text("Dirty Catman", width / 2, 50);

stroke('White');
line(335,67,660,67);

fill('White');
textFont(f);
textSize(22);
text("Not necessarily a hero, but a character all the same. Dirty Catman is my username \n that I use on pretty much everything. It has several different meanings to me. \n The 'Dirty' comes from Minecraft because I use it the most out of any other material.\nThe 'Catman' is a mixture of two things. First is 'Cat' because I love cats.\nThey are my favorite animal. And the 'man' portion stems from Batman who is my favorite super hero.", width / 2, 100);

line(15,225,985,225);

if (mouseIsPressed) {
  image(img4, 500, 480, 1000, 480);
  image(img2, 285, 385, 180, 160);

  print(mouseX + " , " + mouseY, 10, 20) ;
}
else {
  image(img3, 500,470, 1000,460);
  image(img1, 500,450, 690,400);
}
}
