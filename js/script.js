const button = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__menu');

if (menu && button) {
  button.addEventListener('click', () => {
    menu.classList.toggle('active')
    button.classList.toggle('active')
  })
}