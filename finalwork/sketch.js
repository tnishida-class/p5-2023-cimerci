// 最終課題を制作しよう

let petalSizes = [110, 80, 50]; // 花びらのサイズ

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  // ロゴの背景となる円
  fill('#0e76a8');
  noStroke();
  ellipse(0, 0, 300);

  // 重なり合う形を描画
  drawComplexShape();

  // 六角形
  drawHexagon(0, 0, 40, '#FFEB3B');
  push();
  rotate(PI/6);
  drawHexagon(0, 0, 30, '#FFBF00');
  pop();

  // ロゴのテキスト
  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  textSize(57);
  textFont('Helvetica');
  text('IT', 1, 7);
}

function drawComplexShape() {
  // 花びらを合体
  stroke(0);
  strokeWeight(5);
  for (let i = 0; i < TWO_PI; i += PI/3) {
    push();
    rotate(i);
    drawPetal(0, 0, petalSizes[0], '#ED4C67'); // 大きい花びら
    pop();
  }
  for (let i = PI/6; i < TWO_PI; i += PI/3) {
    push();
    rotate(i);
    drawPetal(0, 0, petalSizes[1], '#FDA7B3'); // 中位の花びら
    pop();
  }
  for (let i = 0; i < TWO_PI; i += PI/3) {
    push();
    rotate(i);
    drawPetal(0, 0, petalSizes[2], '#ED4C67'); // 小さい花びら
    pop();
}
}

function drawPetal(x, y, size, color) {
  let angle = TWO_PI / 3;
  let halfAngle = angle / 2.0;
  fill(color);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * (size + 20);
    let sy = y + sin(a) * (size + 20);
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * size;
    sy = y + sin(a + halfAngle) * size;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawHexagon(x, y, radius, color) {
  // 六角形の座標、半径、色を引数で指定
  fill(color);
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += PI/3) {
    let vx = x + cos(angle) * radius;
    let vy = y + sin(angle) * radius;
    vertex(vx, vy);
  }
  endShape(CLOSE);
}