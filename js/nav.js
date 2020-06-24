$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.navbar').outerHeight() - 60) {
            $('.navbar').addClass('bg-black');
        } else {
            $('.navbar').removeClass('bg-black');
        }
    });
});
$(function () {
    $('.navbar-toggle').click(function () {
        if ($(this).scrollTop() > $('.navbar').outerHeight() - 60) {
            $('.navbar').addClass('bg-black');
        } else {
            $('.navbar').removeClass('bg-black');
        }
    });
});