$(document).ready(function () {
    if ($(window).width() >= 500) {
const servisesSlider = new Swiper ('.swiper-servises', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 23,
    breakpoints: {
        300:{
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 23,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 23,
        },
        // when window width is >= 1024px
        1280: {
            slidesPerView: 3,
            spaceBetween: 23,
        },
        // when window width is >= 1680px
        1685: {
            slidesPerView: 4,
            spaceBetween: 23,
        },
    },
    navigation: {
        nextEl: '.servises-btn-next',
        prevEl: '.servises-btn-prev',
    },
})
    }
})

