function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}
function draw(){
  background('#49b9e6');
  noStroke();

  //Mountain 2
  fill('#a18987');
  triangle(565, 130, 420, 330, 720, 310);
  //Top 2
  fill('white');
  quad(565, 130,539,166,565,154,586,155);
  //Mountain 3
  fill('#a18987');
  triangle(655, 110, 455, 330, 750, 310);
  //Top 3
  fill('white');
  quad(655,110,630,135,650,132,673,148);
  //Mountain 1
  fill('#9c8684');
  triangle(620, 95, 455, 330, 720, 310);
  //Top 1
  fill('white');
  quad(620,95,589,140,616,125,643,146);

//ground
  fill('#9c8680');
  quad(0, 360, 0, 400, 720, 400, 720, 300);

//tree trunk
  fill('#968145');
  rect(160, 200, 40, 200);
  //tree leaves top
  fill('#32967a');
  triangle(180, 60, 125, 165, 235, 165);
  //tree leaves mid
  fill('#32967a');
  triangle(180, 100, 100, 240, 260, 240);
  //tree leaves bottom
  fill('#32967a');
  triangle(180, 150, 90, 320, 270, 320);

//moon
  fill('#faeeed');
  arc(315, 65, 80, 80, 0, PI + QUARTER_PI);
  //crescant
  fill('#49b9e6');
  ellipse(325, 50, 80, 80);

  fill('white');
  text(mouseX + ',' + mouseY, 20,20);
}
