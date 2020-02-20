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
}