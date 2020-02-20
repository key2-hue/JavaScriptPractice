

  var questions = ['日本の首都は？','中国の首都は？','韓国の首都は？','アメリカの首都は？'];
  var answers = [
    ['東京','大阪','福岡','愛知'],
    ['北京','上海','広東','マカオ'],
    ['ソウル','プサン','テグ','インチョン'],
    ['ワシントンD.C.','ニューヨーク','ハワイ','ラスベガス'],
  ]
  const num = Math.floor(Math.random() * questions.length);
  var question = document.querySelector('h1');
  question.id = "question";
  question.textContent = questions[num];

  for (let i = 0; i < 4;i++) {
    var answer = document.createElement('li');
    var answerUl = document.querySelector('ul');
    answerUl.appendChild(answer);
    answer.id = 'answer answer' + i;
    answer.className = i;
    answer.textContent = answers[num][i];
  }

  



  
  
