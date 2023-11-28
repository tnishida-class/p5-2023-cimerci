function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  noStroke()
  fill(127, 16, 132);
  triangle(12,120,120,120,120,12);
  fill(255);
  triangle(8,112,112,112,112,8);
  stroke(247, 200, 213);
  strokeWeight(1);
  fill(255);
  triangle(0,108,106,108,106,0);
  fill(247, 200, 213);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
