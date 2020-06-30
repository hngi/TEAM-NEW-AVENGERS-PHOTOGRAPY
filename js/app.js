const burger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile');

burger.addEventListener('click', () => {
    mobile.classList.toggle('menuSlide')
})