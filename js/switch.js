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
		preloadLogo = $('.se-pre-con img')

		staggerRowAN = $('.letters-row-an .row')

		// Loop Play/Pause Word
		btnLoop = $('#btn-loop ')
		loopStroke= $('.path-loop-stroke')
		loopFill= $('.path-loop-fill')
		isLooping = $('.ball')

		filter = $('.filter ')
		
		btnPause = $('#btn-pause ')
		playFill= $('.path-play')

		btnWord = $('#btn-word ')
		wordFill= $('.path-word')
		


		pausePlay = $('#btn-pause ')
		wordPlay = $('#btn-word ')

		hand = $('.second-half')
		model = $('#container')
		thirdHalf = $('.third-half')
		
		line = $('.firstLine ')
		lettersRow = $('.letters-row ')
		modal = $('#shareHand')

	 	morphPlay = $('#pausePath')
 		btnPause = $('#btn-pause')
 		btnPlay = $('.btn-play')
 		pause1 = $('.pause1')
 		pause2 = $('.pause2')



	// SVG variables
		rowAN = $('.letters-row-an')
		rowOO = $('.letters-row-oo')
		row110 = $('.letters-row-110')

		palmFill1 = $('.letters-row-an .palm ')
		palmFill2 = $('.letters-row-oo .palm ')
		palmFill3 = $('.letters-row-110 .palm ')
		
		letterfill1 = $('.letters-row-an #letter-outline')
		letterfill2 = $('.letters-row-oo #letter-outline')
		letterfill3 = $('.letters-row-110 #letter-outline')
		
		palmOutline1 = $('.letters-row-an #Shape')
		palmOutline2 = $('.letters-row-oo #Shape')
		palmOutline3 = $('.letters-row-110 #Shape')
		
		btnAN = $('#btn-a-n')
		btnOO = $('#btn-o-o')
		btnOne = $('#btn-1-10')

		handMotion = $('.svgHandMotion')
		motionFill = $('.svgMotionFill'),
	

	// // Alphabet SVG Timelines
	// 	tlsvg1 = new TimelineMax();
	// 	tlsvg2 = new TimelineMax({paused: true});
	// 	tlsvg3 = new TimelineMax({paused: true});


	// 	tlsvg1
	// 	.to(btnAN, .4, {color: '#a5a5a5',  ease:Power4.ease}, '-=.5' )
	// 	.to(rowAN, .4, {autoAlpha:0,  ease:Power4.easeIn})
	// 	.to(rowAN, .4, {zIndex:100,  ease:Power4.easeIn})
	// 	.to(rowAN, .4, {autoAlpha:1,  ease:Power4.easeIn})
	// 	.to(letterfill1, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
	// 	.to(palmOutline1, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
	// 	.to(letterfill1, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
	// 	.to(letterfill1, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
	// 	.to(palmFill1, .4, {fill: '#F5D04C',  ease:Power4.ease}, '-=.5' )
	// 	.to(handMotion, .4, {strokeDashoffset:10.24, stroke: '#fff',  ease:Power4.ease}, '-=.5' )
	// 	.to(motionFill, .4, {fill: '#fff',  ease:Power4.ease}, '-=.5' )
	

	// 	tlsvg2
	// 	.to(btnOO, .4, {color: '#a5a5a5',  ease:Power4.ease}, '-=.5' )
	// 	.to(rowOO, .4, {autoAlpha:0,  ease:Power4.easeIn})
	// 	.to(rowOO, .4, {zIndex:100,  ease:Power4.easeIn})
	// 	.to(rowOO, .4, {autoAlpha:1,  ease:Power4.easeIn})
	// 	.to(letterfill2, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
	// 	.to(palmOutline2, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
	// 	.to(letterfill2, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
	// 	.to(letterfill2, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
	// 	.to(palmFill2, .4, {fill: '#F5D04C',  ease:Power4.ease}, '-=.5' )
	// 	.to(handMotion, .4, {strokeDashoffset:10.24,stroke: '#fff',  ease:Power4.ease}, '-=.5' )
	// 	.to(motionFill, .4, {fill: '#fff',  ease:Power4.ease}, '-=.5' )
	// 	.addPause()

	// 	tlsvg3
	// 	.to(btnOne, .4, {color: '#a5a5a5',  ease:Power4.ease}, '-=.5' )
	// 	.to(row110, .4, {autoAlpha:0,  ease:Power4.easeIn})
	// 	.to(row110, .4, {zIndex:100, autoAlpha:0,  ease:Power4.easeIn})
	// 	.to(row110, .4, {autoAlpha:1,  ease:Power4.easeIn})
	// 	.to(letterfill3, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
	// 	.to(palmOutline3, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
	// 	.to(letterfill3, 1, {fill: '#fff',ease:Power4.ease}, '-=1')
	// 	.to(letterfill3, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
	// 	.to(palmFill3, .4, {fill: '#F5D04C',  ease:Power4.ease}, '-=.5' )
	// 	.to(handMotion, .4, {strokeDashoffset:10.24,stroke: '#fff',  ease:Power4.ease}, '-=.5' )
	// 	.to(motionFill, .4, {fill: '#fff',  ease:Power4.ease}, '-=.5' )
	// 	.addPause()


	// // SVG alphabet filter buttons
	// $(btnAN ).on('click',()=>{
	// 	tlsvg2.reverse();
	// 	tlsvg3.reverse();
	// 	tlsvg1.play();
	// });
	// $(btnOO).on('click',()=>{
	// 	tlsvg1.reverse();
	// 	tlsvg3.reverse();
	// 	tlsvg2.play();
	// });
	// $(btnOne).on('click',()=>{
	// 	tlsvg2.reverse();
	// 	tlsvg1.reverse();
	// 	tlsvg3.play();
	// });



	

	// Window slide animation - 1 - 2 - 3
		tlSwitch = new TimelineMax({paused: true}),

	tlSwitch
		.fromTo(firstHalf, 0.5,{autoAlpha: 1, x:'0%', opacity: '100%', ease:Power1.easeInOut}, {autoAlpha: 0, opacity: '0%', x: '-100%', ease:Power1.ease})
		.to(btnAlpha, 0.2, {opacity: 0, ease:Power1.easeInOut})

		.to(background, 0.5, {x: '100%', ease:Power3.easeInOut})
		.to(background, 0, {autoAlpha:0, x: '-200%', ease:Power3.easeInOut})
		.to(background, 0.5, {autoAlpha:1, left: '-4%', x: '-45%', rotation:-7, ease:Power3.easeInOut})
		
		.to(hand, 0.5, {position: 'absolute', x: '100%', ease:Back.easeInOut}, '-=1')
		.to(hand, 0, {autoAlpha:0, position: 'absolute', x: '-200%',ease:Power4.easeInOut})
		.to(shareBtn, 0, {autoAlpha:0, x:'-300%', ease:Power4.easeInOut})
		.to(hand, 0.5, {autoAlpha:1, position: 'absolute', x: '-100%', ease:Back.easeInOut})
		.to(shareBtn, 0.5, {autoAlpha:1, x: '0%', ease:Back.easeOut}, '-=.4')

		.to(logo, 0.5, {content: "url('../logo/logo-circle-bl-on-yel.png')", ease:Power1.easeInOut}, '-=.2')

		.to(btnWrite, 0.2, {opacity: 1,position: 'absolute', left: '-1px', ease:Power1.easeInOut})
		.to(thirdHalf, 0.5,{position: 'relative', x: '-200%', autoAlpha: 1, ease:Power1.easeInOut},'-=.5')
		.staggerFromTo(staggerRowAN, 0.2, {opacity:1, x:'200%', ease:Power1.easeIn}, {opacity:1, x:'0%', ease:Power1.easeOut}, 0.1, '-=.5')
		.staggerFromTo(filter, 0.2, {opacity:0, x:'500%', ease:Power1.easeIn}, {opacity:1, x:'0%', ease:Power1.easeOut}, 0.2, '-=.2')
		.addPause()
	

	tlSwitchBack = new TimelineMax({paused: true}),
	
	tlSwitchBack

		.to(thirdHalf, 0.5,{position: 'relative', x: '200%', autoAlpha: 1, ease:Power1.easeInOut})
		.to(btnWrite, 0.2, {opacity: 1,position: 'absolute', left: '-1px', ease:Power1.easeInOut})
		
		// .to(staggerRowAN, 0.5, {opacity:1, x:'200%', ease:Power1.easeIn}, {opacity:1, x:'0%', ease:Power1.easeOut}, 0.04)
		// .to(filter, 0.5, {opacity:0, x:'500%', ease:Power1.easeIn}, {opacity:1, x:'0%', ease:Power1.easeOut}, 0.04, '-=.3')

		.to(background, 0.5, {x: '-100%', ease:Power3.easeInOut})
		.to(background, 0, {autoAlpha:0, x: '200%', ease:Power3.easeInOut})
		.to(background, 0.5, {autoAlpha:1, left:'4%', x: '45%', rotation: 7, ease:Power3.easeInOut})
		.to(logo, 0.5, {content: "url('../logo/logo-circle-wh-on-bl.png')", ease:Power1.easeInOut}, '-=.5')
		
		.to(hand, 0.5, {position: 'absolute', x: '-200%', ease:Back.easeInOut}, '-=1')
		.to(hand, 0, {autoAlpha:0, position: 'absolute', x: '300%',ease:Power4.easeInOut})
		.to(shareBtn, 0, {autoAlpha:0, x:'300%', ease:Power4.easeInOut})
		.to(hand, 0.5, {autoAlpha:1, position: 'absolute', x: '0%', ease:Back.easeInOut})
		.to(shareBtn, 0.5, {autoAlpha:1, x: '0%', ease:Back.easeOut}, '-=.4')

		
		
		.to(firstHalf, 0.5, {autoAlpha: 1, opacity: '100%', x: '0%', ease:Power1.easeInOut})
		.staggerFromTo([line ,btnLoop,btnPause,btnWord], .3, {x:'-50%', autoAlpha: 0,  ease:Power4.easeOut},{x:'0%', autoAlpha: 1,  ease:Power4.easOut}, 0.1, '-=0.4')
		.to(btnAlpha, 0.2, {opacity: 1, ease:Power1.easeInOut})
		
		.addPause()


	// Window change 
	$('#btn-alpha').on('click',()=>{
		tlSwitch.restart();
	});

	$('#btn-write').on('click',()=>{
		tlSwitchBack.restart();
	});





// Morph Play Pause Icon

tlMorph = new TimelineMax({paused: true})
	
tlMorph
	
	.to(pause1, 0.3, {attr: {points:"23 0 23 26 15 26 15 0"}, ease:Power2.easeInOut})
	.to(pause2, 0.3, {attr: {points:"8 0 8 26 0 26 0 0"}, ease:Power2.easeInOut},'-=.3')
	.to(pause1, 0.3, {attr: {points:"23 13 23 13 0 26 0 0"}, ease:Power2.easeInOut})
	.to(pause2, 0.3, {attr: {points:"23 13 23 13 0 26 0 0"}, ease:Power2.easeInOut},'-=.3')
	.to(pause1, 0.3, {x:'2px', ease:Power2.easeInOut},'-=.3')
	.to(pause2, 0.3, {x:'2px', ease:Power2.easeInOut},'-=.3')
	// .to(playFill, 0.3, {fill: '#7f7f7f', ease:Power2.easeInOut},'-=.3')
	.addPause()


$(btnPause).on('click', (event) => {
    event.preventDefault();
   	// tlMorph.reverse();
   	tlMorph.reversed() ? tlMorph.play() : tlMorph.reverse();
    tlLoop.reverse();
});




// Loop Icon isLooping

tlLoop = new TimelineMax({paused: true})
	.to(isLooping, 0.3, {autoAlpha: 0, ease:Power2.easeInOut})
	.to(isLooping, 0.3, {height:'0px', width:'0px', ease:Power2.easeInOut})
	.to(loopFill, 0.3, {fill: '#000', ease:Power2.easeInOut})
	.to(loopStroke, 0.3, {stroke: '#000', ease:Power2.easeInOut},'-=.3')
	.to(isLooping, 0.3, {autoAlpha: 1, ease:Power2.easeInOut}, '-=.3')
	.to(isLooping, 0.5, {height:'9px', width:'9px', ease:Power2.easeInOut}, '-=.3')
	


 $(btnLoop).on('click',(event) => {
    event.preventDefault();
    tlLoop.play()
    tlMorph.play();
});




})(jQuery);










