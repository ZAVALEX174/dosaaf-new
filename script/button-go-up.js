const goUpBtn = document.querySelector('.button-go-up');
console.log(goUpBtn);

window.addEventListener('scroll', trackScroll);
goUpBtn.addEventListener('click', goUp);

function trackScroll() {
    // вычисляем положение от верхушки страницы
    const scrolled = window.scrollY;
    // console.log(scrolled)
    // считаем высоту окна браузера
    const coords = document.documentElement.clientHeight;
    // console.log(coords)
    // если вышли за пределы первого окна
    if (scrolled > coords) {
        // кнопка появляется
        goUpBtn.classList.add("button-go-up__show");
    } else {
    // иначе исчезает
    goUpBtn.classList.remove("button-go-up__show");
    }
}

function goUp() {
    // пока не вернулись в начало страницы
    if (window.scrollY  > 0) {
        // скроллим наверх
        window.scrollBy(0, -20); // второй аргумент - скорость
        setTimeout(goUp, 0); // входим в рекурсию
    }
}