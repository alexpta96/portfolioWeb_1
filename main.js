const header = document.querySelector('#header');
const hamburger = header.querySelector('.hamburger');
const links = header.querySelectorAll('.header .navbar .nav-list ul li a');

hamburger.addEventListener('click', () => {
    header.classList.toggle('active');
});
document.addEventListener('scroll', () => {
    let y_position = window.scrollY;
    if(y_position > 250) {
        header.style.backgroundColor = '#29232c';
    } else {
        header.style.backgroundColor = '';
    }
});
links.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('active');
    });
});