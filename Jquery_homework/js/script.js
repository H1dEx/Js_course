$(document).ready(() => {
    $('.main_btna, main_btn, a[href="sheldure"]').click(function () {
        $('.overlay').fadeIn(1111);
        $('.modal').slideDown(2222);
    });

    $('button.close').click(function () {
        $('.overlay').fadeOut(1111);
        $('.modal').slideUp(2222);
    })
});