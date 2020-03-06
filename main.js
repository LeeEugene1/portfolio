const toogleBtn = document.querySelector('.nav_toogleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');

toogleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});