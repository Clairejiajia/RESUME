$(document).ready(function() {
	/*響應式自傳開關*/
    $('.more').click(function(event) {
        event.preventDefault();
        $('.hide_article').slideDown('slow/400/fast', function() {});
        $(this).hide('slow/400/fast', function() {});
    });
    $('.hide').click(function(event) {
        event.preventDefault();
        $('.hide_article').slideUp('slow/400/fast', function() {});
        $('.more').fadeIn('slow/400/fast', function() {
        	
        });
    });
    /*滑順移動*/

    $('.scrollTop').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;

        $('html,body').animate({ scrollTop: targetPos }, 1000);
    });
});