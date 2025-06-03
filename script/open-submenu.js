const submenuBtn = document.querySelector('.menu__item-hover');
const backDropMenu = document.querySelector('.submenu__list');
const headerContainer = document.querySelector('.header__container');
const headerMenu = document.querySelector('.header__menu');
const visHidden = document.querySelector('.visually-hidden')
console.log(visHidden)

submenuBtn.addEventListener('mouseover', () => {
    // backDropMenu.classList.remove('visually-hidden');
    headerContainer.classList.add('header__container_dropdown');
})

submenuBtn.addEventListener('mouseleave', () => {
    // backDropMenu.classList.add('visually-hidden');
    headerContainer.classList.remove('header__container_dropdown');
    headerContainer.classList.add('header__container');
})