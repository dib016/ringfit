//取得するスキルを配列で並べる
var heart =['カタニプッシュ','バンザイサイドベンド','マエニプッシュ','アシパカパカ','ヒップリフト','扇のポーズ','折りたたむポーズ'];
var arm = ['ウシロプッシュ','バンザイプッシュ','サゲテプッシュ','リングアロー','アームツイスト','グルグルアーム','アームツイスト'];
var belly =['バンザイツイスト','ベントオーバー','バンザイモーニング','ニートゥチェスト','プランク','レッズレイズ','スワイショウ','バンザイコシフリ','ロシアンツイスト','バタバタレッグ','リングアゲサゲ','ハサミレッグ'];
var foot = ['スクワット','ワイドスクワット','バンザイスクワット','モモデプッシュ','マウンテンクライマー','モモアゲアゲ','ステップアップ','アゲサゲコンボ','モモアゲコンボ'];
var yoga = ['椅子のポーズ','立木のポーズ','チョウツガイのポーズ','ねじり体側のポーズ','英雄１のポーズ','英雄２のポーズ','英雄３のポーズ','船のポーズ',];


// 指定されたスキルからランダムで取得する


function randomSkill(skillType) {
  var index = Math.floor( Math.random() * skillType.length ); // 変数heartの長さ分、ランダムで値を取得し、端数を切り捨てする
  return skillType[index] //変数heart で取得した内容を戻り値にいれる
}

randomSkill(heart)
randomSkill(arm)
randomSkill(belly)
randomSkill(foot)
randomSkill(yoga)

//ランダムでスキルを取得

document.getElementById('muscle-button').onclick = function() {
  // このfunctionの中の処理は、ボタンが押されたときに実行される

  // ボタンを消す removeChild
  var muscleButton = document.getElementById('muscle-button');
  muscleButton.parentNode.removeChild(muscleButton);

  // スキルを表示する
  document.getElementById('output1').setAttribute("class", "output")
  document.getElementById('skill1').textContent = randomSkill(heart)

  document.getElementById('output2').setAttribute("class", "output")
  document.getElementById('skill2').textContent = randomSkill(arm)

  document.getElementById('output3').setAttribute("class", "output")
  document.getElementById('skill3').textContent = randomSkill(belly)

  document.getElementById('output4').setAttribute("class", "output")
  document.getElementById('skill4').textContent = randomSkill(foot)

  document.getElementById('output5').setAttribute("class", "output")
  document.getElementById('skill5').textContent = randomSkill(yoga)


  //ボタンを追加する
  document.body.appendChild(muscleButton).innerText = "やり直す";
 
}



