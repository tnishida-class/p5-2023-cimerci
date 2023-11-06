// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
     let x = size * i,
         y = size * j; 
      // rect (size * i, size *j, size, size)
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2 == 1){
        fill (128)
        rect (x, y, size)}
      if(((i+j)%2 == 1)&&(j<3)){
        fill (255,0,0)
        ellipse(x+size/2,y+size/2,20)}
      if(((i+j)%2 == 1)&&(j>4)){
          fill (0)
          ellipse(x+size/2,y+size/2,20)}
    }
  }
}

//2回目制作
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   dx = width / 8
//   noStroke();
//   for(let i = 0; i<8; i++){
//     for(let s = 0; s < 8; s++){
//       // line(0,dx * i,width,dx*i)
//       // line(dx * s, 0, dx *s, width)
//       if((i + s)%2 == 1){
//         fill(100);
//         rect(dx * s, dx * i, dx);
//         if(i<3){
//           fill(255,0,0);
//         }
//         if(i>4) {
//           fill(0);
//         }
//           ellipse(dx*s + dx/2, dx*i+ dx/2, dx - 1);
//       }
//     }
//   }
// }