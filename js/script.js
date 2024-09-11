const menu = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobileMenu');

menu.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
});