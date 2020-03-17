function slider() {
    let currentSlide = 1,
        $slides = document.querySelectorAll('.slider-item'),
        $prev = document.querySelector('.prev'),
        $next = document.querySelector('.next'),
        $dotsWrap = document.querySelector('.slider-dots'),
        $dots = document.querySelectorAll('.dot');

    showSlides(currentSlide);

    function showSlides(n) {
        if (n > $slides.length)
            currentSlide = n = 1;
        else if (n < 1)
            currentSlide = n = $slides.length;

        $slides.forEach(item => item.style.display = 'none');
        $dots.forEach(item => item.classList.remove('dot-active'));
        $slides[n - 1].style.display = 'block';
        $dots[n - 1].classList.add('dot-active');
    }

    $prev.addEventListener('click', () => showSlides(--currentSlide));
    $next.addEventListener('click', () => showSlides(++currentSlide));

    $dotsWrap.addEventListener('click', e => {
        $dots.forEach((item, index) => {
            if (item == e.target && item.classList.contains('dot')) {
                showSlides(index + 1);
                return;
            }
        });
    });
}

module.exports = slider;