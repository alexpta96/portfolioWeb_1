const header = document.querySelector('#header');
const hamburger = header.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    header.classList.toggle('active');
});