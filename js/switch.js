


(function($) {

		// Wait for window load
	

	const loadScreen = $(".se-pre-con")
		content = $('.main-content')
		btnAlpha = $('#btn-alpha')
		btnWrite = $('#btn-write')
		background = $('#background')
		firstHalf = $('.first-half')
		
		endlessLoop = $('#btn-loop ')
		isLooping = $('.ball')

		pausePlay = $('#btn-pause ')
		wordPlay = $('#btn-word ')

		hand = $('.second-half')
		
		thirdHalf = $('.third-half')
		
		line = $('.firstLine ')
		lettersRow = $('.letters-row '),
		
		// alphaRow1 = $('.row-1')
		// alphaRow2 = $('.row-2')
		// alphaRow3 = $('.row-3')
		// alphaRow4 = $('.row-4')
		// alphaRow5 = $('.row-5')
		// alphaRow6 = $('.row-6'),

		// backgroundSvg = $('#backgroundSvg')
		// bgsvg = $('#bgsvg'),

		// TweenMax.to(bgsvg, 1, {attr:{viewBox:"0 0 350 1024"}});

	$(window).load(function() {
		tlPreload = new TimelineMax();
		// Animate loader off screen
		tlPreload
		.to(content, .7, { autoAlpha: 0,  ease:Power4.easeIn})
		.to(loadScreen, .4, {delay: 1, autoAlpha: 0,  ease:Power4.easeOut})
		.to(content, .4, { autoAlpha: 1,  ease:Power3.easeIn})
	});

// viewBox="0 0 350 1024"
// points="820 0 1440 0 1440 1024 639 1024"
// points="820 0 1440 0 1440 1024 639 1024"
// points="820 0 1440 0 1440 1024 639 1024"
// points="820 0 1440 0 1440 1024 639 1024"

	// Hover effect above line move
		// endlessLoop.hover(function() {
		//   TweenMax.to(line, .35, {x:'30%', ease:Power1.easeInOut})
		//   TweenMax.to(line, .35, {x:'-90%', width: '30%', ease:Power1.easeInOut})
		// }, function() {
		//   TweenMax.to(line, .5, {x:'30%'})
		//   TweenMax.to(line, .5, {x:'0%', width: '90%'})
		// })
		// pausePlay.hover(function() {
		//   TweenMax.to(line, .35, {x: '30%', width: '30%'})
		// }, function() {
		//   TweenMax.to(line, .5, {x:'0%', width: '90%'})
		// })
		// wordPlay.hover(function() {
		//   TweenMax.to(line, .35, {x: '60%', width: '30%'})
		// }, function() {
		//   TweenMax.to(line, .5, {x:'0%', width: '90%'})
		// })



		// svgDot = $('#boxSVG .circ'),
		// svgRect = $('#boxSVG rect'),
		// svgCircStroke = $('#boxSVG .circStroke'),
		// svgText = $('#boxSVG text'),

		tl = new TimelineLite({paused: true}),
		tlFinal = new TimelineMax();


	// Transformation Points - SVG and HTML
	tl

		.to(firstHalf, 0.7, { opacity: 0, ease:Power1.easeInOut},'-=.6')
		// .to(backgroundSvg, 1, {attr:{points:"0 0 1440 0 1440 1024 639 1024"}})
		// .to(backgroundSvg, 1, {attr:{points:"0 0 1440 0 1440 1024 639 1024"}})
		// .to(bgsvg, 1, {attr:{viewBox:"0 400 850 1024"}})
		// .to(backgroundSvg, 1, {attr:{points:"0 0 820 0 1440 1024 0 1024"}})
		// .to(backgroundSvg, 1, {attr:{points:"0 0 820 0 1440 1024 0 1024"}})
		// .to(bgsvg, 1, {attr:{viewBox:"0 0 850 1024"}})
		// .to(background, 0.5, {width: '100%', ease:Power1.easeInOut})
		.to(background, 0.3, {x: '45%',  ease:Power1.easeInOut})
		.to(background, 0.5, {borderLeft: '0px solid transparent', ease:Power1.easeInOut}, '-=.2')
		.to(hand, 0.3, {position: 'absolute', x: '-100%', ease:Power1.easeInOut}, '-=.5')
		.to(background, 0.3, {x: '-45%',borderRight: '180px solid transparent', ease:Power1.easeInOut}, '-=.2')
		// .to(background, 0.5, { ease:Power1.easeInOut})
		
		
		// .to(line, .05, {width: '67%', left: '13%', ease:Power1.easeInOut},'-=0.5')
		// .to(line, .06, {width: '16%', left: '67%', ease:Power1.easeInOut})
		.to(btnWrite, 0.7, {opacity: 1,position: 'absolute', left: '0%', ease:Power1.easeInOut}, '-=0.5')
		.to(btnAlpha, 0.7, {opacity: 0, ease:Power1.easeInOut} , '-=0.5')
		.to(thirdHalf, 0.7, {position: 'relative', x: '-200%', ease:Power1.easeInOut}, '-=0.5')
		.to(thirdHalf, 0.7, {opacity: 1, ease:Power1.easeInOut})
		// .to(alphaRow1, 0.7, {osition: 'absolute', x: '0%', delay:0.5,ease:Power1.easeInOut}, '=0.5')
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


