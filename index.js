let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let cross = document.getElementById('cross');

menu.addEventListener('click', () => {
    nav.classList.remove('nav-d-none');
})

cross.addEventListener('click', () => {
    nav.classList.add('nav-d-none');
})