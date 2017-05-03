(function($) {


	// Variables
	const loadScreen = $(".se-pre-con")
		content = $('.main-content')
		btnAlpha = $('#btn-alpha')
		btnWrite = $('#btn-write')
		background = $('#background')
		firstHalf = $('.first-half')
		logo = $('.logo')
		preloadLogo = $('.se-pre-con img')

		btnLoop = $('#btn-loop ')
		btnPause = $('#btn-pause ')
		btnWord = $('#btn-word ')
		isLooping = $('.ball')

		pausePlay = $('#btn-pause ')
		wordPlay = $('#btn-word ')

		hand = $('.second-half')
		
		thirdHalf = $('.third-half')
		
		line = $('.firstLine ')
		lettersRow = $('.letters-row ')


		// Window Preloader
	$(window).load(function() {
		tlPreload = new TimelineMax();
		// Animate loader off screen
		tlPreload
		// .fromTo(preloadLogo, 2, { opacity: 0,  ease:Power4.easeOut},{ opacity: '100%',  ease:Power4.easeOut})
		.fromTo(preloadLogo, 2, { autoAlpha: 0,  ease:Power4.easeIn}, { autoAlpha:1,  ease:Power4.easeOut})
		.to(preloadLogo, 1, { autoAlpha: 0,  ease:Power4.easeOut})
		.to(content, .7, { autoAlpha: 0,  ease:Power4.easeIn})
		.to(loadScreen, .4, {delay: 1, autoAlpha: 0,  ease:Power4.easeOut})
		.to(content, .4, { autoAlpha: 1,  ease:Power3.easeIn})
		.fromTo(background, 1, {x: '100%',  ease:Power4.ease},{x: '45%',  ease:Power4.ease})
		.fromTo(btnLoop, .4, {x:'-10%', autoAlpha: 0,  ease:Power3.easeIn},{x:'0%', autoAlpha: 1,  ease:Power3.easeIn})
		.fromTo(btnPause, .4, { autoAlpha: 0,  ease:Power3.easeIn},{ autoAlpha: 1,  ease:Power3.easeIn})
		.fromTo(btnWord, .4, { autoAlpha: 0,  ease:Power3.easeIn},{ autoAlpha: 1,  ease:Power3.easeIn})
	});


	// SVG variables
		const rowAN = $('.letters-row-an')
			rowOO = $('.letters-row-oo')
			row110 = $('.letters-row-110')

			palmFill = $('.letters-row-an .palm ')
			palmFill2 = $('.letters-row-oo .palm ')
			palmFill3 = $('.letters-row-110 .palm ')
			
			letterfill = $('.letters-row-an #letter-outline')
			letterfill2 = $('.letters-row-oo #letter-outline')
			letterfill3 = $('.letters-row-110 #letter-outline')
			
			palmOutline = ('.letters-row-an #Shape')
			palmOutline2 = ('.letters-row-oo #Shape')
			palmOutline3 = ('.letters-row-110 #Shape'),
	

	// Alphabet SVG Timelines
		tlsvg = new TimelineMax();
		tlsvg2 = new TimelineMax({paused: true});
		tlsvg3 = new TimelineMax({paused: true});

		tlsvg
		.to(rowAN, .4, {autoAlpha:0,  ease:Power4.easeIn})
		.to(rowAN, .4, {zIndex:100,  ease:Power4.easeIn})
		.to(rowAN, .4, {autoAlpha:1,  ease:Power4.easeIn})
		.to(letterfill, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
		.to(palmOutline, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
		.to(letterfill, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
		.to(letterfill, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
		.to(palmFill, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )

		tlsvg2
		.to(rowOO, .4, {autoAlpha:0,  ease:Power4.easeIn})
		.to(rowOO, .4, {zIndex:100,  ease:Power4.easeIn})
		.to(rowOO, .4, {autoAlpha:1,  ease:Power4.easeIn})
		.to(letterfill2, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
		.to(palmOutline2, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
		.to(letterfill2, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
		.to(letterfill2, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
		.to(palmFill2, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )
		.addPause()

		tlsvg3
		.to(row110, .4, {autoAlpha:0,  ease:Power4.easeIn})
		.to(row110, .4, {zIndex:100, autoAlpha:0,  ease:Power4.easeIn})
		.to(row110, .4, {autoAlpha:1,  ease:Power4.easeIn})
		.to(letterfill3, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
		.to(palmOutline3, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
		.to(letterfill3, 1, {fill: '#fff',ease:Power4.ease}, '-=1')
		.to(letterfill3, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
		.to(palmFill3, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )
		.addPause()

	// SVG alphabet filter buttons
	$('.filter-a-n').on('click',function(){
		tlsvg2.reverse();
		tlsvg3.reverse();
		tlsvg.play();
	});
	$('.filter-o-o').on('click',function(){
		tlsvg.reverse();
		tlsvg3.reverse();
		tlsvg2.play();
	});
	$('.filter-1-10').on('click',function(){
		tlsvg2.reverse();
		tlsvg.reverse();
		tlsvg3.play();
	});




	// Window slide - 1 - 2 - 3
		tl = new TimelineMax({paused: true}),

	tl
		.to(background, 0.6, {x: '45%',  ease:Power4.ease})
		.to(firstHalf, 0.7, {css: {zIndex:-3},  ease:Power1.easeInOut})
		
		.to(hand, 0.3, {position: 'absolute', x: '-100%', ease:Power1.easeInOut})
		.to(background, 0.3, {x: '-45%',borderRight: '180px solid transparent', ease:Power1.easeInOut}, '-=.2')
		.to(logo, 0.5, {content: "url('../logo/logo-circle-bl-on-yel.png')", ease:Power1.easeInOut}, '-=.2')

		.to(btnWrite, 0.7, {opacity: 1,position: 'absolute', left: '0%', ease:Power1.easeInOut}, '-=0.5')
		.to(btnAlpha, 0.7, {opacity: 0, ease:Power1.easeInOut} , '-=0.5')
		.to(thirdHalf, 0.7, {position: 'relative', x: '-200%', ease:Power1.easeInOut}, '-=0.5')
		.to(thirdHalf, 0.7, {opacity: 1, ease:Power1.easeInOut})

		.addPause()

	
	// Window change 
	$('#btn-alpha').on('click',function(){
		tl.play();
	});

	$('#btn-write').on('click',function(){
		tl.reverse();
	});






})(jQuery);














