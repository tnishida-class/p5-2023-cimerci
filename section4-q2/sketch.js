// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(500, 500);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores)
  // 円グラフを描くには割合が必要なので合計を計算しておく
  function sum(y){
    let n = 0
    for(let k = 0; k < y; k++){
      n += scores[k] ;
    }
    return n ;
   }
  console.log (sum(0))
  // BLANK[1]
  for(let i = 0; i < 10; i++){
    let theta = TWO_PI * scores[i] / sum(10);
        start = TWO_PI * sum(i) / sum(10);                           
       fill(255);
       arc(245, 245, 480, 480, start, start + theta, PIE);
      fill(0);
    text(scores[i].toPrecision(3), 245 + cos(start+theta/2)*180, 245 + sin(start+theta/2)*180);
    }
}
