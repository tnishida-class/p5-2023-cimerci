// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  recttext("I love keyakizaka46");
  balloon("I love keyakizaka46", 100, 120)
}

function recttext(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  rect(0, 0, w + p * 2, h + p * 2);
  fill(255);
  text(t, p, h + p);
}

function balloon(t, x, y){ // xは吹き出しの位置、ｙは吹き出しの色
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;
  fill(y); 
  noStroke();
  rect(x, x, w + p * 2, h + p * 2, 10);
  triangle(x+7, x+h+p*2, x+17, x+h+p*2, x+3, x+h+p*2+10)
  fill(255);
  text(t, x + p, x + h + p);
}