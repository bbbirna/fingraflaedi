


(function($) {

	var content = $('.main-content')
		btnAlpha = $('#btn-alpha')
		btnWrite = $('#btn-write')
		background = $('#background')
		firstHalf = $('.first-half')
		hand = $('.second-half')
		thirdHalf = $('.third-half')
		endlessLoop = $('#btn-loop ')
		pausePlay = $('#btn-pause ')
		wordPlay = $('#btn-word ')
		line = $('.line ')
		backgroundSvg = $('#backgroundSvg')
		bgsvg = $('#bgsvg'),

		TweenMax.to(bgsvg, 1, {attr:{viewBox:"0 0 350 1024"}});


// viewBox="0 0 350 1024"
// points="820 0 1440 0 1440 1024 639 1024"
// points="820 0 1440 0 1440 1024 639 1024"
// points="820 0 1440 0 1440 1024 639 1024"
// points="820 0 1440 0 1440 1024 639 1024"

	// Hover effect above line move
		endlessLoop.hover(function() {
		  TweenMax.to(line, .35, {width: '7%'})
		}, function() {
		  TweenMax.to(line, .5, {width: '24%'})
		})
		pausePlay.hover(function() {
		  TweenMax.to(line, .35, {left: '22%', width: '6%'})
		}, function() {
		  TweenMax.to(line, .5, {left: '13%', width: '24%'})
		})
		wordPlay.hover(function() {
		  TweenMax.to(line, .35, {left: '30%', width: '7%'})
		}, function() {
		  TweenMax.to(line, .5, {left: '13%', width: '24%'})
		})



		// svgDot = $('#boxSVG .circ'),
		// svgRect = $('#boxSVG rect'),
		// svgCircStroke = $('#boxSVG .circStroke'),
		// svgText = $('#boxSVG text'),

		tl = new TimelineLite({paused: true}),
		tlFinal = new TimelineMax();


	// Transformation Points - SVG and HTML
	tl
		.to(firstHalf, 0.7, { x: '-100%', ease:Power1.easeInOut})
		// .to(backgroundSvg, 1, {attr:{points:"0 0 1440 0 1440 1024 639 1024"}})
		// .to(backgroundSvg, 1, {attr:{points:"0 0 1440 0 1440 1024 639 1024"}})
		.to(bgsvg, 1, {attr:{viewBox:"0 400 850 1024"}})
		.to(backgroundSvg, 1, {attr:{points:"0 0 820 0 1440 1024 0 1024"}})
		.to(backgroundSvg, 1, {attr:{points:"0 0 820 0 1440 1024 0 1024"}})
		.to(bgsvg, 1, {attr:{viewBox:"0 0 850 1024"}})
		// .to(background, 0.7, {left: '0%', ease:Power1.easeInOut})
		.to(hand, 0.7, {position: 'absolute', x: '-100%', ease:Power1.easeInOut}, '-=0.5')
		.to(line, .05, {width: '67%', left: '13%'},'-=0.5')
		.to(line, .06, {width: '16%', left: '67%'})
		.to(btnWrite, 0.7, {position: 'absolute', left: '0%', ease:Power1.easeInOut}, '-=0.5')
		.to(btnAlpha, 0.7, {opacity: 0, ease:Power1.easeInOut} , '-=0.5')
		.to(thirdHalf, 0.7, {position: 'absolute', x: '-200%', ease:Power1.easeInOut}, '-=0.5')

		.addPause()

	// tlFinal
	// 	.set(svgCircStroke, {autoAlpha: 0})
	// 	.to([boxHTML,boxSVG], 0.7, {x: '-50%', ease:Power2.easeInOut})
	// 	.to([boxHTML,boxSVG], 3, {rotation: -1440, transformOrigin: '50% 50%', ease:Power4.easeIn})
	// 	.to([svgRect, boxHTML, svgText, svgDot], 0.3, {autoAlpha: 0, ease:Power0.easeNone}, '-=0.3')
	// 	.to(svgCircStroke, 0.3, {autoAlpha: 1, ease:Power0.easeNone}, '-=0.3')
	// 	.to(lines, 0.2, {scale: 0.1, autoAlpha: 0, ease:Power4.easeIn}, '-=0.2')
	// 	.to(boxSVG, 0.3, {scale: 1.1, transformOrigin: '50% 50%', ease:Power4.easeOut})
	// 	.to(boxSVG, 0.2, {scale: 0.2, autoAlpha: 0, ease:Power4.easeOut})
	// 	.to(body, 0.2, {backgroundColor: '#2b4d66', ease:Power0.easeNone}, '-=0.2')
	// 	.to(buttons, 0.3, {opacity: 0}, '-=0.2')
	// 	.fromTo(txtThanks, 0.4, {autoAlpha: 0, scale: 0.8}, {autoAlpha: 1, scale: 1, ease:Back.easeOut}, '-=0.2');
	

	// Window change 
	$('#btn-alpha').on('click',function(){
		tl.play();
	});
	$('#btn-write').on('click',function(){
		tl.reverse();
	});

	

	// $('#btn-alpha').on('click',function(){
	// 	tl.reverse();
	// });

})(jQuery);


