// テキスト「キーボード操作に反応する」
let x, y, vy, onGround;
const g = 1


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vy = 0
  onGround = true
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  // if(keyIsDown(UP_ARROW)){ y -= 5; }
  // if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ 
    if(keyIsDown(LEFT_ARROW)){x-= 10; }
    if(keyIsDown(RIGHT_ARROW)){ x+= 10; }
  }
  if(keyIsDown(" ".charCodeAt(0)) && onGround){
     vy = -18; //スペースをおすと初速度がつく
     onGround = false
    } 
    y += vy;
    vy += g; // このままだとボールが画面より下にいく

    if (y > height / 2){
      y = height / 2;
      onGround = true
    }

}

// イベントハンドラを使用するパターン
// let b = false
// function keyPressed(){
  
//   if(keyCode == LEFT_ARROW){ x -= 5;}
//   else if((keyCode == LEFT_ARROW) && (key == "A")){x -= 10;}
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if((keyCode == RIGHT_ARROW) && (key == "A")){x += 10;}
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
