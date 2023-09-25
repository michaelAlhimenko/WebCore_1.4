const menuOpen = document.querySelector('.header__button-burger');
const menuClose = document.querySelector('.menu-mobile__button');
const menu = document.querySelector('.menu');

function menuToogle (){
    menu.classList.toggle('menu--active');
}

menuOpen.addEventListener('click', menuToogle);
menuClose.addEventListener('click', menuToogle)
