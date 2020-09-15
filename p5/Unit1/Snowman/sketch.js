function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  if(mouseIsPressed){
  background('blue');
  }

  ellipse(width/2,height/2-60,80,80);
  ellipse(width/2,height/2,100,100);
  ellipse(width/2,height/2+60,130,130);
}
