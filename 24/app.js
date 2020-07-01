const burger = document.querySelector('#hamburger');
const mobile = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobile.classList.toggle('mobile-menu-slide')
})