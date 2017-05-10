(($)=> {

	// Variables
	const loadScreen = $(".se-pre-con")
		content = $('.main-content')
		btnAlpha = $('#btn-alpha')
		btnWrite = $('#btn-write')
		
		background = $('#background')
		model = $('#container')
		shareBtn = $('#btn-share')
		
		firstHalf = $('.first-half')
		input = $('.input')
		logo = $('.logo')
		preloadLogo = $('.se-pre-con img'),

		// Window Preloader
	$(window).load(()=> {
		tlPreload = new TimelineMax();
		// Animate loader off screen
		tlPreload
		.to(preloadLogo, 2, { autoAlpha: 0,  ease:Power4.easeOut})
		.fromTo(preloadLogo, .6, { y:'60%',  ease:Power4.easeOut},{ y:'0%',  ease:Power4.easeOut},'-=.4')
		.to(preloadLogo, 2, { autoAlpha: 1,  ease:Power4.easeOut},'-=.4')
		.to(modal, 0, { autoAlpha: 0,  ease:Power4.easeIn})
		.fromTo(preloadLogo, .4, { y:'0%', ease:Power2.easeInOut},{ y:'-60%',  ease:Power2.easeOut})
		.to(preloadLogo, 1, { autoAlpha: 0,  ease:Power4.ease },'-=.6')
		.to(content, .7, { autoAlpha: 0,  ease:Power4.easeIn})
		.to(loadScreen, .4, {delay: 1, autoAlpha: 0,  ease:Power4.easeOut})
		.to(content, .4, { autoAlpha: 1,  ease:Power3.easeIn})
		.fromTo(background, 1, {x: '100%',  ease:Power4.ease},{x: '45%',  ease:Power4.ease})
		.staggerFromTo([line ,btnLoop,btnPause,btnWord], .2, {x:'-50%', autoAlpha: 0,  ease:Power3.easeIn},{x:'0%', autoAlpha: 1,  ease:Power3.easeIn}, 0.2)
		// .fromTo(btnPause, .3, {y:'30%', autoAlpha: 0,  ease:Power3.easeIn},{y:'0%', autoAlpha: 1,  ease:Power3.easeIn},'-=.2')
		// .fromTo(btnWord, .3, {y:'30%', autoAlpha: 0,  ease:Power3.easeIn},{y:'0%', autoAlpha: 1,  ease:Power3.easeIn},'-=.2')
	});
})(jQuery);