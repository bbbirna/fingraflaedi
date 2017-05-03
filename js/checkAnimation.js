$(document).ready(function(){
    
	function isElementInViewport(elem) {
        var $elem = $(elem);

        // Get the scroll position of the page.
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        var viewportTop = $(scrollElem).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // Get the position of the element on the page.
        var elemTop = Math.round( $elem.offset().top );
        var elemBottom = elemTop + $elem.height();

        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }
    // Check if it's time to start the animation.
    function checkAnimation() {
        var $elem = $('.letters-row-an');

        if (isElementInViewport($elem)) {
            // Start the animation
            $elem.addClass('start');
        } else {
        	// If not happening again when scrolled up
            $elem.removeClass('start');
        }


        // if ($(window).scrollTop() > $(window).height()) {
        //     $("section:nth-child(2)").css("opacity", 0);
        // }
        // else {
        //     $("section:nth-child(2)").css("opacity", 1);
        // }

        // const bigHands = $(".big-hands");

        // if ($(window).scrollTop() > $(window).height()) {
        //     bigHands.addClass('start');
        //     $("section:nth-child(4)").css("opacity", 1);
        // }
        // else {
        //     bigHands.removeClass('start');
        //     $("section:nth-child(4)").css("opacity", 0);
        // }

        // $(window).scroll(function() {
        //     console.log("skrolling")
        //     // $(".big-hands").css("transform", "rotate(" + $(window).scrollTop()*0.3 +"deg)");
            
        // });

    }

    // function checkAnimation1() {
    //     var $elem = $('.big-hands');

    //     if (isElementInViewport($elem)) {
    //         // Start the animation
    //         $elem.addClass('start');
    //     } else {
    //     	// If not happening again when scrolled up
    //         $elem.removeClass('start');
    //     }
    // }


    // Capture scroll events
    $(window).scroll(function(){
        checkAnimation();
        // checkAnimation1();
    });

});	