'use strict';

{
  function good() {
    document.querySelector('p').textContent =
    '練習中';
  }
  setTimeout(good,2000);

  function num() {
    document.querySelectorAll('ul > li').forEach((li,index) => {
      li.textContent = `練習${index}`;
    });
  }
  setTimeout(num,1000);

  

  document.querySelectorAll('button')[0].addEventListener('click', () => {
    document.querySelectorAll('li')[0].textContent = "finish!";
  });

  document.querySelectorAll('button')[1].addEventListener('click', () => {
    document.querySelectorAll('li')[1].textContent = "finish!";
  });

  document.querySelectorAll('button')[2].addEventListener('click', () => {
    document.querySelectorAll('li')[2].textContent = "finish!";
  });

  document.getElementById('infoButton').addEventListener('click', () => {
    const info = document.getElementById('info');
    info.style.fontSize = '20px';
    info.style.color = 'skyblue';
    info.title = 'clicked 最新情報';
  });

  document.getElementById('thoughtButton').addEventListener('click', ()=>{
    const thought = document.querySelectorAll('p')[1];
    thought.className = 'thought thought-push'
  });

  document.getElementById('keyButton').addEventListener('click', () => {
    const key = document.querySelectorAll('p')[2];
    const image = document.getElementById('image');
    // if (key.classList.contains('key-push')) {
    //   key.classList.remove('key-push')
    //   image.classList.remove('pic')
    // } else {
    //   key.classList.add('key-push');
    //   image.classList.add('pic');
    // }
    key.classList.toggle('key-push');
    image.classList.toggle('pic');
  });

  document.getElementById('key2Button').addEventListener('click',() => {
    const keyTwo = document.getElementById('key2');
    keyTwo.textContent =
    keyTwo.dataset.change;
  });


  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const post = document.createElement('li');
    const text = document.querySelector('form > input');
    post.textContent = text.value;
    text.value = '';
    text.focus();
    document.querySelector('div > ol').appendChild(post);
  });

  document.getElementById('niceButton').addEventListener('click', () => {
    const nice1 = document.getElementById('nice1');
    const copy = nice1.cloneNode(true);

    const nice = document.getElementById('niceAll');
    const nice2 = document.getElementById('nice2');
    nice.insertBefore(copy,nice2);
  });

  let add = 1;
  document.getElementById('addButton').addEventListener('click',() => {
    const li = document.createElement('li');
    const ul = document.getElementById('removeItem');
    li.textContent = `${add}番目の投稿です`;
    li.style.listStyle = 'none';
    ul.appendChild(li);
    add++;
    console.log(add);
  });

  
  
  document.querySelector('#removeButton').addEventListener('click',() => {
    const items = document.querySelectorAll('#removeItem li');
    items.forEach(item=> {
      document.querySelector('#removeItem').removeChild(item);
    })
    add = 1;
  });
  
  let cityNum = 0
  const answer = document.getElementById('answer');
  answer.addEventListener('click',() => {
    const li = document.createElement('li');
    const city = document.querySelector('select');
    li.textContent = `${city.selectedIndex + 1} - ${city.value}`;
    li.style.listStyle = 'none';
    if(cityNum === 0) {
      document.getElementById('city').appendChild(li);
      cityNum++;
      answer.textContent = "もう回答できません";
    } else {
      return;
    }
  });
  
  document.getElementById('seasonSubmit').addEventListener('submit', e => {
    e.preventDefault();
    const seasons = document.querySelectorAll('#seasonSubmit > input');
    let seasonAll = [];
    seasons.forEach(season => {
      if(season.checked === true) {
        seasonAll.push(season.value);
      }
    });
    const li = document.createElement('li');
    li.textContent = seasonAll;
    document.getElementById('season').appendChild(li);
  });

  const cons = document.getElementById('console');

  cons.addEventListener('dblclick', () => {
    const li = document.createElement('li');
    li.textContent = "ダブルクリックされました";
    const ul = document.getElementById('consoleUl');
    ul.appendChild(li);
  })

  let a = 0
  let b = 0;
  cons.addEventListener('mousemove', e => {
    if(a === 0) {
      const li = document.createElement('li');
      li.textContent = "マウスが動きました";
      const ul = document.getElementById('consoleUl');
      ul.appendChild(li);
    }
    if (b < 3) {
      const li = document.createElement('li');
      li.textContent =  e.clientX ;
      const ul = document.getElementById('axis');
      ul.appendChild(li);
    }
    a++;
    b++;
    
  });

  cons.addEventListener('mouseleave', () => {
    a = 0;
    b = 0;
  });

  document.getElementById('keydown').addEventListener('keydown', e => {
    const li = document.createElement('li');
    li.textContent =  e.key ;
    const ul = document.getElementById('keydownList');
    ul.appendChild(li);
  });

  const group = document.querySelector('textarea');
  group.addEventListener('focus',() => {
    document.getElementById('manyLetters').textContent = "文字を入力してください！";
  });

  group.addEventListener('blur', () => {

  });

}