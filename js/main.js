'use strict';

{
  const includeHeader = new XMLHttpRequest();
  includeHeader.open("GET", "include/header.html", true);
  includeHeader.onreadystatechange = function () {
    if (includeHeader.readyState === 4 && includeHeader.status === 200) {
      const headerHTML = includeHeader.responseText;
      const header = document.querySelector("#header");
      header.insertAdjacentHTML("afterbegin", headerHTML);
    }
  };
  includeHeader.send();
}

// SP用メニューバー
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

// スクロール時のフェードイン
{
  let fadeInTarget = document.querySelectorAll('.fade-in ,.fade-in2');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++){
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 120) {
        fadeInTarget[i].classList.add('scroll-in');
      }
    }
  });
}