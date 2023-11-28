// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count = 0;
let cycle = 100;
let increment = 1;

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255);
  count = (count + increment) % cycle;
  
  if(keyIsPressed){
    increment = 2
  }
  else{
    increment = 1
  }
  if(count<cycle/2){
    size = count + 50
  }
  else{
    size = cycle - count + 50
  }
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
}

//2回目制作　内容同じ
// let size = 50;
//     count = 0;
//     v = 1;

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(160, 192, 255);
//   count = (count + v) % 100
//  if(keyIsPressed){
//     v = 2
//   }
//   else{
//     v = 1
//   }
//   if(count < 50){
//     size = 50 + count
//   }
//   else{
//     size = 150 - count
//   }
//   ellipse(width/2, width/2, size)
// }

