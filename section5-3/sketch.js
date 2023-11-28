// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  if(isLeapYear(y)){
    return 366;
    }
  else{
    return 365;
  }
}
console.log(daysInYear(2000))

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d) {
  // もとにするのは　(1970, 1, 1);
  let sum = 0;

  for (let year = 1970; year < y; year++) {
  sum += daysInYear(year);
  }

  for (let month = 1; month < m; month++) {
  sum += daysInMonth(y, month);
  }

  sum += d - 1; 
  return (sum + 4) % 7;
}


function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
console.log(dayOfWeekAsString(dayOfWeek(2001, 6, 25)))

// // Math.floorを使って日数差を計算
// function dayOfWeek(y, m, d){
//   // BLANK[2]
//   const p = new Date(1970, 1, 1);
//         q = new Date(y, m, d);
//         daysDiff = Math.floor((q - p)/(1000*60*60*24));
//   return (daysDiff + 4) % 7; 
// }

// function dayOfWeekAsString(dow){
//   const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
//   return a[dow];
// }
// console.log(dayOfWeekAsString(dayOfWeek(2001, 8, 2)))
