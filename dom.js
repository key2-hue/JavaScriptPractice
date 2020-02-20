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

}