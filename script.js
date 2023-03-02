const bar = document.getElementById('bar');
const c = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(c) {
    c.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}