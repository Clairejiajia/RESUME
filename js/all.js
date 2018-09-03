$(document).ready(function () {
     $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
       

        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
             var targetPos = $(target).offset().top;
            var expPos = $('#experience').offset().top;
            var skillPos = $('#skill').offset().top;
            var aboutmePos = $('#aboutme').offset().top;
    
             var targetHeight = $(target).outerHeight();
            var expHeight = $('#experience').outerHeight();
            var skillHeight = $('#skill').outerHeight();
            var aboutmeHeight = $('#aboutme').outerHeight();
           
             if (expPos-180 <= scrollPos && (expPos + expHeight) > scrollPos) {
                 $('.animated_exp_left').addClass('fadeIn');
                 $('.animated_exp_right').addClass('fadeIn');
                  $('.animated_exp_right_3s').addClass('fadeIn');
              
                   } ; 
             if (skillPos -180<= scrollPos && (skillPos + skillHeight) > scrollPos) {
                 $('.animated_skill_left').addClass('fadeIn ');
                 $('.animated_skill_right').addClass('fadeIn ');
             };
             if (aboutmePos -180 <= scrollPos && (aboutmePos + aboutmeHeight) > scrollPos) {
                 $('.animated_aboutme_up').addClass('fadeIn');
                 $('.animated_aboutme_down').addClass('fadeIn');
             };

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