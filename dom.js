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
    const btn = document.createElement('button');
    const ul = document.getElementById('removeItem');
    li.textContent = `${add}番目の投稿です`;
    btn.textContent = '削除する';
    btn.id = add;
    ul.appendChild(li);
    ul.appendChild(btn);
    add++;
  });
}