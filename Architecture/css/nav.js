const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

burger.addEventListener('click', function () {
    burger.classList.toggle('burgercic');
});