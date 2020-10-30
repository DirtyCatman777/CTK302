let rains = [];

function setup() {
  createCanvas(500, 500);
  noStroke();

}

function draw() {
  background("#33ccff");
  rains.push(new Rain());

  for (let i = 0; i < rains.length; i++) {
    rains[i].display();
    rains[i].move();

    //delets car after reaching a distance
    if (rains[i].a <= 0) {
      rains.splice(i, 1);
    }
  }

}

class Rain {
  constructor() {
    //attributes
    this.pos = createVector(random(5,windowWidth-5), -10);
    this.vel = createVector(0, random(8, 4));
    this.r = 255 //random(255) ;
    this.g = 255 //random(255) ;
    this.b = 255 //random(255) ;
    this.a = random(200, 555);
  }
  //methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 5,20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }
}
