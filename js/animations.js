$(document).ready(function(){
// 	function isElementInViewport(elem) {
//     var $elem = $(elem);

//     // Get the scroll position of the page.
//     var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
//     var viewportTop = $(scrollElem).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     // Get the position of the element on the page.
//     var elemTop = Math.round( $elem.offset().top );
//     var elemBottom = elemTop + $elem.height();

//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }
//Check if it's time to start the animation.
// function checkAnimation() {
//     var $elem = $('.whale');

//     if (isElementInViewport($elem)) {
//         // Start the animation
//         $elem.addClass('start');
//     } else {
//     	// If not happening again when scrolled up
//         $elem.removeClass('start');
//     }
// }
$( ".menu" ).click(function() {
    $(this).toggleClass('closebtn');
});
// Capture scroll events
// $(window).scroll(function(){
//     checkAnimation();
// });
/* Open when someone clicks on the span element */



  var svg = $('svg');
  var lines = svg.find('pylygon');
  var line_first = $('svg polygon:nth-child(1)')
  var line_second = $('svg polygon:nth-child(2)')
  var line_third = $('svg polygon:nth-child(3)')
  var i = true;

  svg.on('click', function(){
    if (i) {
      setTimeout(function(){
        // $(this).find("g").addClass('gotcha')
        svg.css({'rotate':'90deg'})
        line_first.css({
          'transform':'rotate(45deg) scaleY(-1) translate(-15%,120%)',
          'transform-origin': 'left bottom'
        })
        line_third.css({
          'transform':'rotate(-45deg) translate(-50%,-50%)',
        })
        line_second.css({
            'opacity': '0'
            // 'transform': 'scaleX(-1)',
    })
      },005)
    } else {
      setTimeout(function(){
        line_first.attr('style', '');
        line_third.attr('style', '');
        line_second.css({
            'opacity': '1'
            // 'transform': 'scaleX(1)',
    })
      },005)
    }
    i=!i; 
  });
});	
