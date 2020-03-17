function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtns = document.querySelectorAll('.description-btn'),
        modalBtn;

    function showModal(e) {
        overlay.style.display = "block";
        this.classList.add('more-splash');
        document.body.style.overflow = "hidden";
        modalBtn = e.target;
    }

    descriptionBtns.forEach((item) => item.addEventListener('click', showModal));
    more.addEventListener('click', showModal);

    close.addEventListener('click', function () {
        overlay.style.display = "none";
        document.body.style.overflow = "";
        modalBtn.classList.remove('more-splash');
    });
}

module.exports = modal;