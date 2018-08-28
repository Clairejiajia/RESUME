$(document).ready(function () {
     $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        console.log(scrollPos, windowHeight);

        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.skillbg').addClass('animated-3s bounceInRight');
                $('.skill-content').addClass('animated-4s  bounceInLeft');
            } else {

            }
        });
    });
    /*響應式自傳開關*/
    $('.more').click(function (event) {
        event.preventDefault();
        $('.hide_article').slideDown('slow/400/fast', function () { });
        $(this).hide('slow/400/fast', function () { });
    });
    $('.hide').click(function (event) {
        event.preventDefault();
        $('.hide_article').slideUp('slow/400/fast', function () { });
        $('.more').fadeIn('slow/400/fast', function () {

        });
    });
    /*滑順移動*/

    $('.scrollTop').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        var target = $(this).attr('href');
        var targetPos = ($(target).offset().top) - 50;
        console.log(targetPos);
        $('html,body').animate({ scrollTop: targetPos }, 1000);
    });
    // modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });




});