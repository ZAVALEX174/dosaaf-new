
const heroSlider = new Swiper('.swiper-hero', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: false,
        clickable: true,
    },
    navigation: {
        nextEl: '.btn__slider_next',
        prevEl: '.btn__slider_prev',
    },
}
);

