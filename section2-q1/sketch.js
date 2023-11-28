// 小手調べ
// function setup(){
//   createCanvas(500,500);
//   noFill()
//   for(let i = 0; i < 5; i++){
//   let x = 60 + i * 10
//   stroke (255,0,0)
//   ellipse(100,100,x,x)
//   //  ellipse (100,100,100,100)
//   //  ellipse(100,100,90,90)
//   //  ellipse(100,100,80,80)
//   //  ellipse(100,100,70,70)
//   //  ellipse(100,100,60,60)
//   //  ellipse (100,100,50,50)
//   let y = 10 + i * 10 
//   stroke (0,0,255)
//   ellipse(100,100,y,y)
//     // ellipse (100,100,40,40)
//     // ellipse(100,100,10,10)
//     // BLANK[1]
//   }
// } //制作1回目
function setup() {
  createCanvas(400, 400);
}

function draw() {
 
  noFill();
  for(let i = 0; i<10; i++){
    let s = 15 * (i+1)
    if(i < 5 ){
       stroke(0, 0, 255);
      ellipse(100,100, s);
    }
    else {
       stroke(255, 0, 0)
    }
     ellipse(100,100, s);
  }

}　//制作2回目