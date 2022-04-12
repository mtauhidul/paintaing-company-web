/// COLOR CHANGE ON SCROLL

window.onscroll = function () {
  onscrll();
};

function onscrll() {
  //let navscrl = document.querySelector('#navbar');
  let header = document.querySelector('.header__wrapper');
  let ulNav = document.querySelector('#ul-nav');
  let menuToggler = document.querySelector('.menu-toggler');
  let headWrap = document.querySelector('.header__wrapper');

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    header?.classList?.add('wrap-color');
  } else {
    header.classList.remove('wrap-color');
  }
}

// Get Variables
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-mobile');
let body = document.querySelector('body');
let toggleStatus = 'off';

function toggleMenu() {
  burger.addEventListener('click', showCover);
}

function showCover() {
  if (toggleStatus == 'off') {
    burger.classList.add('open');
    nav.classList.add('show');
    body.classList.add('overlay');
    toggleStatus = 'on';
  } else if (toggleStatus == 'on') {
    burger.classList.remove('open');
    nav.classList.remove('show');
    body.classList.remove('overlay');
    toggleStatus = 'off';
  }
}

toggleMenu();

/*


document.querySelector('.burger, .overlay').click(function () {
    document.querySelector('.burger').classList.toggle('clicked');
    document.querySelector('.overlay').classList.toggle('show');
    document.querySelector('nav').classList.toggle('show');
    document.querySelector('body').classList.toggle('overflow');
});


*/
